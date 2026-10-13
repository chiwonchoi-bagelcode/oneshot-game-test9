"""Copies only the Jua font slices that cover the Korean text used in the game into assets/fonts.

Usage: python3 tools/fonts.py <path-to-unpacked @fontsource/jua package>
"""
import os
import re
import shutil
import sys

pkg = sys.argv[1]
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
out = os.path.join(root, 'assets', 'fonts')
os.makedirs(out, exist_ok=True)

text = ''
for base in ('src', '.'):
    for dirpath, _, files in os.walk(os.path.join(root, base)):
        if 'node_modules' in dirpath or '.git' in dirpath or 'dist' in dirpath:
            continue
        for f in files:
            if f.endswith(('.js', '.html', '.css')):
                with open(os.path.join(dirpath, f), encoding='utf-8') as fh:
                    text += fh.read()
        if base == '.':
            break
chars = {ord(c) for c in text if ord(c) > 127}

css = open(os.path.join(pkg, 'index.css'), encoding='utf-8').read()
blocks = re.findall(r'@font-face \{(.*?)\}', css, re.S)
keep = []
for b in blocks:
    m = re.search(r'unicode-range: (.*?);', b)
    src = re.search(r'url\(\./files/(.*?\.woff2)\)', b).group(1)
    ranges = []
    for part in m.group(1).split(','):
        part = part.strip()[2:]
        if '-' in part:
            a, z = part.split('-')
            ranges.append((int(a, 16), int(z, 16)))
        else:
            ranges.append((int(part, 16), int(part, 16)))
    is_basic = any(a <= 0x41 <= z for a, z in ranges)
    if is_basic or any(any(a <= c <= z for a, z in ranges) for c in chars):
        keep.append((src, m.group(1)))

with open(os.path.join(out, 'jua.css'), 'w', encoding='utf-8') as fh:
    fh.write('/* Jua (SIL Open Font License 1.1) — only the slices the game uses */\n')
    for src, rng in keep:
        shutil.copy(os.path.join(pkg, 'files', src), os.path.join(out, src))
        fh.write("@font-face{font-family:'Jua';font-style:normal;font-display:swap;font-weight:400;"
                 f"src:url(./{src}) format('woff2');unicode-range:{rng};}}\n")
shutil.copy(os.path.join(pkg, 'LICENSE'), os.path.join(out, 'OFL.txt'))
print(f'kept {len(keep)} of {len(blocks)} slices for {len(chars)} non-ASCII chars')
