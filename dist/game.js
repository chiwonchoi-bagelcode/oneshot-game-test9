(()=>{var Jh=0,fl=1,Kh=2;var pl=1,jh=2,Hn=3,Cn=0,Ie=1,an=2,ti=0,Di=1,ml=2,gl=3,xl=4,Qh=5,fi=100,tu=101,eu=102,nu=103,iu=104,su=200,ru=201,ou=202,au=203,Io=204,Po=205,cu=206,lu=207,hu=208,uu=209,du=210,fu=211,pu=212,mu=213,gu=214,aa=0,ca=1,la=2,Ui=3,ha=4,ua=5,da=6,fa=7,_l=0,xu=1,_u=2,ei=0,yu=1,vu=2,Mu=3,bu=4,Su=5,wu=6,Eu=7;var yl=300,Hi=301,Vi=302,pa=303,ma=304,Nr=306,Lo=1e3,An=1001,Do=1002,Fe=1003,Tu=1004;var Fr=1005;var on=1006,ga=1007;var Mi=1008;var In=1009,vl=1010,Ml=1011,Es=1012,xa=1013,bi=1014,Pn=1015,Ts=1016,_a=1017,ya=1018,As=1020,bl=35902,Sl=35899,wl=1021,El=1022,cn=1023,ps=1026,Rs=1027,Cs=1028,va=1029,Tl=1030,Ma=1031;var ba=1033,Or=33776,Br=33777,kr=33778,zr=33779,Sa=35840,wa=35841,Ea=35842,Ta=35843,Aa=36196,Ra=37492,Ca=37496,Ia=37808,Pa=37809,La=37810,Da=37811,Ua=37812,Na=37813,Fa=37814,Oa=37815,Ba=37816,ka=37817,za=37818,Ha=37819,Va=37820,Ga=37821,Wa=36492,Xa=36494,qa=36495,Ya=36283,$a=36284,Za=36285,Ja=36286;var sr=2300,Uo=2301,Co=2302,nl=2400,il=2401,sl=2402;var Au=3200,Ru=3201;var Al=0,Cu=1,ni="",Ke="srgb",Ni="srgb-linear",rr="linear",ee="srgb";var Li=7680;var rl=519,Iu=512,Pu=513,Lu=514,Rl=515,Du=516,Uu=517,Nu=518,Fu=519,ol=35044,Cl=35048;var Il="300 es",Rn=2e3,or=2001;var jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Cc=Math.PI/180,No=180/Math.PI;function Is(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[s&255]+We[s>>8&255]+We[s>>16&255]+We[s>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Yt(s,t,e){return Math.max(t,Math.min(e,s))}function Sf(s,t){return(s%t+t)%t}function Ic(s,t,e){return(1-e)*s+e*t}function $s(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ut=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},we=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],p=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==f||l!==p||h!==m){let g=1-a,d=c*f+l*p+h*m+u*x,M=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){let T=Math.sqrt(b),E=Math.atan2(T,d*M);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}let _=a*M;if(c=c*g+f*_,l=l*g+p*_,h=h*g+m*_,u=u*g+x*_,g===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*p-l*f,t[e+1]=c*m+h*f+l*u-a*p,t[e+2]=l*m+h*p+a*f-c*u,t[e+3]=h*m-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),p=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u+f*p*m;break;case"YZX":this._x=f*h*u+l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u-f*p*m;break;case"XZY":this._x=f*h*u-l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pc.copy(this).projectOnVector(t),this.sub(Pc)}reflect(t){return this.sub(Pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pc=new R,wh=new we,Ht=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],m=n[8],x=i[0],g=i[3],d=i[6],M=i[1],b=i[4],_=i[7],T=i[2],E=i[5],A=i[8];return r[0]=o*x+a*M+c*T,r[3]=o*g+a*b+c*E,r[6]=o*d+a*_+c*A,r[1]=l*x+h*M+u*T,r[4]=l*g+h*b+u*E,r[7]=l*d+h*_+u*A,r[2]=f*x+p*M+m*T,r[5]=f*g+p*b+m*E,r[8]=f*d+p*_+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,m=e*u+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lc.makeScale(t,e)),this}rotate(t){return this.premultiply(Lc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Lc=new Ht;function Pl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ou(){let s=ar("canvas");return s.style.display="block",s}var Eh={};function ms(s){s in Eh||(Eh[s]=!0,console.warn(s))}function Bu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Th=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wf(){let s={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ee&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?rr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ni]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:Th,fromXYZ:Ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:Th,fromXYZ:Ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),s}var Jt=wf();function Kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Qi,Fo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qi===void 0&&(Qi=ar("canvas")),Qi.width=t.width,Qi.height=t.height;let i=Qi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ef=0,gs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Dc(i[o].image)):r.push(Dc(i[o]))}else r=Dc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Dc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tf=0,Uc=new R,je=class s extends jn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=An,i=An,r=on,o=Mi,a=cn,c=In,l=s.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Is(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lo:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case Do:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lo:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case Do:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=yl;je.DEFAULT_ANISOTROPY=1;var ce=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],m=c[9],x=c[2],g=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,_=(p+1)/2,T=(d+1)/2,E=(h+f)/4,A=(u+x)/4,P=(m+g)/4;return b>_&&b>T?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=E/n,r=A/n):_>T?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=P/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=P/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oo=class extends jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new je(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new gs(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Oo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},cr=class extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bo=class extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox)),oo.applyMatrix4(t.matrixWorld),this.union(oo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),ao.subVectors(this.max,Zs),ts.subVectors(t.a,Zs),es.subVectors(t.b,Zs),ns.subVectors(t.c,Zs),oi.subVectors(es,ts),ai.subVectors(ns,es),Ri.subVectors(ts,ns);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ri.z,Ri.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ri.z,0,-Ri.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ri.y,Ri.x,0];return!Nc(e,ts,es,ns,ao)||(e=[1,0,0,0,1,0,0,0,1],!Nc(e,ts,es,ns,ao))?!1:(co.crossVectors(oi,ai),e=[co.x,co.y,co.z],Nc(e,ts,es,ns,ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qn=[new R,new R,new R,new R,new R,new R,new R,new R],wn=new R,oo=new kn,ts=new R,es=new R,ns=new R,oi=new R,ai=new R,Ri=new R,Zs=new R,ao=new R,co=new R,Ci=new R;function Nc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ci.fromArray(s,r);let a=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),c=t.dot(Ci),l=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Af=new kn,Js=new R,Fc=new R,pi=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Af.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Fc)),this.expandByPoint(Js.copy(t.center).sub(Fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Yn=new R,Oc=new R,lo=new R,ci=new R,Bc=new R,ho=new R,kc=new R,ko=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Oc.copy(t).add(e).multiplyScalar(.5),lo.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Oc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(lo),a=ci.dot(this.direction),c=-ci.dot(lo),l=ci.lengthSq(),h=Math.abs(1-o*o),u,f,p,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oc).addScaledVector(lo,f),p}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,r){Bc.subVectors(e,t),ho.subVectors(n,t),kc.crossVectors(Bc,ho);let o=this.direction.dot(kc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);let c=a*this.direction.dot(ho.crossVectors(ci,ho));if(c<0)return null;let l=a*this.direction.dot(Bc.cross(ci));if(l<0||c+l>o)return null;let h=-a*ci.dot(kc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,f,p,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,p,m,x,g)}set(t,e,n,i,r,o,a,c,l,h,u,f,p,m,x,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),o=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=m+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,m=l*h,x=l*u;e[0]=f+x*a,e[4]=m*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,m=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,p=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-p,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=p*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=m*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*c,p=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rf,t,Cf)}lookAt(t,e,n){let i=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),li.crossVectors(n,dn),li.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),li.crossVectors(n,dn)),li.normalize(),uo.crossVectors(dn,li),i[0]=li.x,i[4]=uo.x,i[8]=dn.x,i[1]=li.y,i[5]=uo.y,i[9]=dn.y,i[2]=li.z,i[6]=uo.z,i[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],m=n[2],x=n[6],g=n[10],d=n[14],M=n[3],b=n[7],_=n[11],T=n[15],E=i[0],A=i[4],P=i[8],v=i[12],y=i[1],C=i[5],D=i[9],L=i[13],k=i[2],G=i[6],V=i[10],j=i[14],q=i[3],st=i[7],dt=i[11],Rt=i[15];return r[0]=o*E+a*y+c*k+l*q,r[4]=o*A+a*C+c*G+l*st,r[8]=o*P+a*D+c*V+l*dt,r[12]=o*v+a*L+c*j+l*Rt,r[1]=h*E+u*y+f*k+p*q,r[5]=h*A+u*C+f*G+p*st,r[9]=h*P+u*D+f*V+p*dt,r[13]=h*v+u*L+f*j+p*Rt,r[2]=m*E+x*y+g*k+d*q,r[6]=m*A+x*C+g*G+d*st,r[10]=m*P+x*D+g*V+d*dt,r[14]=m*v+x*L+g*j+d*Rt,r[3]=M*E+b*y+_*k+T*q,r[7]=M*A+b*C+_*G+T*st,r[11]=M*P+b*D+_*V+T*dt,r[15]=M*v+b*L+_*j+T*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],m=t[3],x=t[7],g=t[11],d=t[15];return m*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*p-n*c*p)+x*(+e*c*p-e*l*f+r*o*f-i*o*p+i*l*h-r*c*h)+g*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],m=t[12],x=t[13],g=t[14],d=t[15],M=u*g*l-x*f*l+x*c*p-a*g*p-u*c*d+a*f*d,b=m*f*l-h*g*l-m*c*p+o*g*p+h*c*d-o*f*d,_=h*x*l-m*u*l+m*a*p-o*x*p-h*a*d+o*u*d,T=m*u*c-h*x*c-m*a*f+o*x*f+h*a*g-o*u*g,E=e*M+n*b+i*_+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=M*A,t[1]=(x*f*r-u*g*r-x*i*p+n*g*p+u*i*d-n*f*d)*A,t[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*d+n*c*d)*A,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*p-n*c*p)*A,t[4]=b*A,t[5]=(h*g*r-m*f*r+m*i*p-e*g*p-h*i*d+e*f*d)*A,t[6]=(m*c*r-o*g*r-m*i*l+e*g*l+o*i*d-e*c*d)*A,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*p+e*c*p)*A,t[8]=_*A,t[9]=(m*u*r-h*x*r-m*n*p+e*x*p+h*n*d-e*u*d)*A,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*d+e*a*d)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*A,t[12]=T*A,t[13]=(h*x*i-m*u*i+m*n*f-e*x*f-h*n*g+e*u*g)*A,t[14]=(m*a*i-o*x*i-m*n*c+e*x*c+o*n*g-e*a*g)*A,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,m=r*u,x=o*h,g=o*u,d=a*u,M=c*l,b=c*h,_=c*u,T=n.x,E=n.y,A=n.z;return i[0]=(1-(x+d))*T,i[1]=(p+_)*T,i[2]=(m-b)*T,i[3]=0,i[4]=(p-_)*E,i[5]=(1-(f+d))*E,i[6]=(g+M)*E,i[7]=0,i[8]=(m+b)*A,i[9]=(g-M)*A,i[10]=(1-(f+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=is.set(i[0],i[1],i[2]).length(),o=is.set(i[4],i[5],i[6]).length(),a=is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],En.copy(this);let l=1/r,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Rn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),p=(n+i)/(n-i),m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===Rn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===or)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Rn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),p=-(n+i)/(n-i),m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===Rn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===or)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},is=new R,En=new Xt,Rf=new R(0,0,0),Cf=new R(1,1,1),li=new R,uo=new R,dn=new R,Rh=new Xt,Ch=new we,Oe=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oe.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},If=0,Ih=new R,ss=new we,$n=new Xt,fo=new R,Ks=new R,Pf=new R,Lf=new we,Ph=new R(1,0,0),Lh=new R(0,1,0),Dh=new R(0,0,1),Uh={type:"added"},Df={type:"removed"},rs={type:"childadded",child:null},zc={type:"childremoved",child:null},Ye=class s extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new Oe,n=new we,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Ht}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Ph,t)}rotateY(t){return this.rotateOnAxis(Lh,t)}rotateZ(t){return this.rotateOnAxis(Dh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ph,t)}translateY(t){return this.translateOnAxis(Lh,t)}translateZ(t){return this.translateOnAxis(Dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fo.copy(t):fo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ks,fo,this.up):$n.lookAt(fo,Ks,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),ss.setFromRotationMatrix($n),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uh),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Df),zc.child=t,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,Pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ye.DEFAULT_UP=new R(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new R,Zn=new R,Hc=new R,Jn=new R,os=new R,as=new R,Nh=new R,Vc=new R,Gc=new R,Wc=new R,Xc=new ce,qc=new ce,Yc=new ce,di=class s{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Tn.subVectors(t,e),i.cross(Tn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Tn.subVectors(i,e),Zn.subVectors(n,e),Hc.subVectors(t,e);let o=Tn.dot(Tn),a=Tn.dot(Zn),c=Tn.dot(Hc),l=Zn.dot(Zn),h=Zn.dot(Hc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Xc.setScalar(0),qc.setScalar(0),Yc.setScalar(0),Xc.fromBufferAttribute(t,e),qc.fromBufferAttribute(t,n),Yc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Xc,r.x),o.addScaledVector(qc,r.y),o.addScaledVector(Yc,r.z),o}static isFrontFacing(t,e,n,i){return Tn.subVectors(n,e),Zn.subVectors(t,e),Tn.cross(Zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Tn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;os.subVectors(i,n),as.subVectors(r,n),Vc.subVectors(t,n);let c=os.dot(Vc),l=as.dot(Vc);if(c<=0&&l<=0)return e.copy(n);Gc.subVectors(t,i);let h=os.dot(Gc),u=as.dot(Gc);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(os,o);Wc.subVectors(t,r);let p=os.dot(Wc),m=as.dot(Wc);if(m>=0&&p<=m)return e.copy(r);let x=p*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(as,a);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Nh.subVectors(r,i),a=(u-h)/(u-h+(p-m)),e.copy(i).addScaledVector(Nh,a);let d=1/(g+x+f);return o=x*d,a=f*d,e.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},po={h:0,s:0,l:0};function $c(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Sf(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$c(o,r,t+1/3),this.g=$c(o,r,t),this.b=$c(o,r,t-1/3)}return Jt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let n=ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Jt.workingToColorSpace(Xe.copy(this),t),Math.round(Yt(Xe.r*255,0,255))*65536+Math.round(Yt(Xe.g*255,0,255))*256+Math.round(Yt(Xe.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Xe.copy(this),e);let n=Xe.r,i=Xe.g,r=Xe.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Ke){Jt.workingToColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,i=Xe.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(po);let n=Ic(hi.h,po.h,e),i=Ic(hi.s,po.s,e),r=Ic(hi.l,po.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Et;Et.NAMES=ku;var Uf=0,mi=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=Di,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=Po,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Io&&(n.blendSrc=this.blendSrc),this.blendDst!==Po&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qe=class extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new R,mo=new ut,Nf=0,ye=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ol,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mo.fromBufferAttribute(this,e),mo.applyMatrix3(t),this.setXY(e,mo.x,mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ol&&(t.usage=this.usage),t}};var hr=class extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ur=class extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ft=class extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ff=0,vn=new Xt,Zc=new Ye,cs=new R,fn=new kn,js=new kn,Ne=new R,jt=class s extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pl(t)?ur:hr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Zc.lookAt(t),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(fn.min,js.min),fn.expandByPoint(Ne),Ne.addVectors(fn.max,js.max),fn.expandByPoint(Ne)):(fn.expandByPoint(js.min),fn.expandByPoint(js.max))}fn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ne.fromBufferAttribute(a,l),c&&(cs.fromBufferAttribute(t,l),Ne.add(cs)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ye(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new R,c[P]=new R;let l=new R,h=new R,u=new R,f=new ut,p=new ut,m=new ut,x=new R,g=new R;function d(P,v,y){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,v),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(f),m.sub(f);let C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(C),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(C),a[P].add(x),a[v].add(x),a[y].add(x),c[P].add(g),c[v].add(g),c[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,v=M.length;P<v;++P){let y=M[P],C=y.start,D=y.count;for(let L=C,k=C+D;L<k;L+=3)d(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let b=new R,_=new R,T=new R,E=new R;function A(P){T.fromBufferAttribute(i,P),E.copy(T);let v=a[P];b.copy(v),b.sub(T.multiplyScalar(T.dot(v))).normalize(),_.crossVectors(E,v);let C=_.dot(c[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,C)}for(let P=0,v=M.length;P<v;++P){let y=M[P],C=y.start,D=y.count;for(let L=C,k=C+D;L<k;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[m++]=l[p++]}return new ye(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fh=new Xt,Ii=new ko,go=new pi,Oh=new R,xo=new R,_o=new R,yo=new R,Jc=new R,vo=new R,Bh=new R,Mo=new R,kt=class extends Ye{constructor(t=new jt,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Jc.fromBufferAttribute(u,t),o?vo.addScaledVector(Jc,h):vo.addScaledVector(Jc.sub(e),h))}e.add(vo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(go.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(go,Oh)===null||Ii.origin.distanceToSquared(Oh)>(t.far-t.near)**2))&&(Fh.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],d=o[g.materialIndex],M=Math.max(g.start,p.start),b=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=M,T=b;_<T;_+=3){let E=a.getX(_),A=a.getX(_+1),P=a.getX(_+2);i=bo(this,d,t,n,l,h,u,E,A,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let M=a.getX(g),b=a.getX(g+1),_=a.getX(g+2);i=bo(this,o,t,n,l,h,u,M,b,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],d=o[g.materialIndex],M=Math.max(g.start,p.start),b=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let _=M,T=b;_<T;_+=3){let E=_,A=_+1,P=_+2;i=bo(this,d,t,n,l,h,u,E,A,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let M=g,b=g+1,_=g+2;i=bo(this,o,t,n,l,h,u,M,b,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Of(s,t,e,n,i,r,o,a){let c;if(t.side===Ie?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Cn,a),c===null)return null;Mo.copy(a),Mo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Mo);return l<e.near||l>e.far?null:{distance:l,point:Mo.clone(),object:s}}function bo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,xo),s.getVertexPosition(c,_o),s.getVertexPosition(l,yo);let h=Of(s,t,e,n,xo,_o,yo,Bh);if(h){let u=new R;di.getBarycoord(Bh,xo,_o,yo,u),i&&(h.uv=di.getInterpolatedAttribute(i,a,c,l,u,new ut)),r&&(h.uv1=di.getInterpolatedAttribute(r,a,c,l,u,new ut)),o&&(h.normal=di.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new R,materialIndex:0};di.getNormal(xo,_o,yo,f.normal),h.face=f,h.barycoord=u}return h}var gi=class s extends jt{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function m(x,g,d,M,b,_,T,E,A,P,v){let y=_/A,C=T/P,D=_/2,L=T/2,k=E/2,G=A+1,V=P+1,j=0,q=0,st=new R;for(let dt=0;dt<V;dt++){let Rt=dt*C-L;for(let qt=0;qt<G;qt++){let oe=qt*y-D;st[x]=oe*M,st[g]=Rt*b,st[d]=k,l.push(st.x,st.y,st.z),st[x]=0,st[g]=0,st[d]=E>0?1:-1,h.push(st.x,st.y,st.z),u.push(qt/A),u.push(1-dt/P),j+=1}}for(let dt=0;dt<P;dt++)for(let Rt=0;Rt<A;Rt++){let qt=f+Rt+G*dt,oe=f+Rt+G*(dt+1),fe=f+(Rt+1)+G*(dt+1),Qt=f+(Rt+1)+G*dt;c.push(qt,oe,Qt),c.push(oe,fe,Qt),q+=6}a.addGroup(p,q,v),p+=q,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function $e(s){let t={};for(let e=0;e<s.length;e++){let n=Gi(s[e]);for(let i in n)t[i]=n[i]}return t}function Bf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ll(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Ps={clone:Gi,merge:$e},kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ce=class extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Bf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},dr=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new R,kh=new ut,zh=new ut,qe=class extends dr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=No*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return No*2*Math.atan(Math.tan(Cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,kh,zh),e.subVectors(zh,kh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Cc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,hs=1,zo=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qe(ls,hs,t,e);i.layers=this.layers,this.add(i);let r=new qe(ls,hs,t,e);r.layers=this.layers,this.add(r);let o=new qe(ls,hs,t,e);o.layers=this.layers,this.add(o);let a=new qe(ls,hs,t,e);a.layers=this.layers,this.add(a);let c=new qe(ls,hs,t,e);c.layers=this.layers,this.add(c);let l=new qe(ls,hs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},fr=class extends je{constructor(t=[],e=Hi,n,i,r,o,a,c,l,h){super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ho=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gi(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:ti});r.uniforms.tEquirect.value=e;let o=new kt(i,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=on),new zo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},wt=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hf={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),d=this._getHandJoint(l,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var pr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mr=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oe,this.environmentIntensity=1,this.environmentRotation=new Oe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var xi=class extends je{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Fe,h=Fe,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _i=class extends ye{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},us=new Xt,Hh=new Xt,So=[],Vh=new kn,Vf=new Xt,Qs=new kt,tr=new pi,Be=class extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Vh.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(Vh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),tr.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,us),Hh.multiplyMatrices(n,us),Qs.matrixWorld=Hh,Qs.raycast(t,So);for(let o=0,a=So.length;o<a;o++){let c=So[o];c.instanceId=r,c.object=this,e.push(c)}So.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xi(new Float32Array(i*this.count),i,this.count,Cs,Pn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Kc=new R,Gf=new R,Wf=new Ht,On=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Kc.subVectors(n,e).cross(Gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Kc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wf.getNormalMatrix(t),i=this.coplanarPoint(Kc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new pi,Xf=new ut(.5,.5),wo=new R,_s=class{constructor(t=new On,e=new On,n=new On,i=new On,r=new On,o=new On){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],p=r[7],m=r[8],x=r[9],g=r[10],d=r[11],M=r[12],b=r[13],_=r[14],T=r[15];if(i[0].setComponents(l-o,p-h,d-m,T-M).normalize(),i[1].setComponents(l+o,p+h,d+m,T+M).normalize(),i[2].setComponents(l+a,p+u,d+x,T+b).normalize(),i[3].setComponents(l-a,p-u,d-x,T-b).normalize(),n)i[4].setComponents(c,f,g,_).normalize(),i[5].setComponents(l-c,p-f,d-g,T-_).normalize();else if(i[4].setComponents(l-c,p-f,d-g,T-_).normalize(),e===Rn)i[5].setComponents(l+c,p+f,d+g,T+_).normalize();else if(e===or)i[5].setComponents(c,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);let e=Xf.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(wo.x=i.normal.x>0?t.max.x:t.min.x,wo.y=i.normal.y>0?t.max.y:t.min.y,wo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gr=class extends je{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},xr=class extends je{constructor(t,e,n=bi,i,r,o,a=Fe,c=Fe,l,h=ps,u=1){if(h!==ps&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},_r=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},yr=class s extends jt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,p=2*u+f,m=n*2+r,x=i+1,g=new R,d=new R;for(let M=0;M<=m;M++){let b=0,_=0,T=0,E=0;if(M<=n){let v=M/n,y=v*Math.PI/2;_=-h-t*Math.cos(y),T=t*Math.sin(y),E=-t*Math.cos(y),b=v*u}else if(M<=n+r){let v=(M-n)/r;_=-h+v*e,T=t,E=0,b=u+v*f}else{let v=(M-n-r)/n,y=v*Math.PI/2;_=h+t*Math.sin(y),T=t*Math.cos(y),E=t*Math.sin(y),b=u+f+v*u}let A=Math.max(0,Math.min(1,b/p)),P=0;M===0?P=.5/i:M===m&&(P=-.5/i);for(let v=0;v<=i;v++){let y=v/i,C=y*Math.PI*2,D=Math.sin(C),L=Math.cos(C);d.x=-T*L,d.y=_,d.z=T*D,a.push(d.x,d.y,d.z),g.set(-T*L,E,T*D),g.normalize(),c.push(g.x,g.y,g.z),l.push(y+P,A)}if(M>0){let v=(M-1)*x;for(let y=0;y<i;y++){let C=v+y,D=v+y+1,L=M*x+y,k=M*x+y+1;o.push(C,D,L),o.push(D,k,L)}}}this.setIndex(o),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ys=class s extends jt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new R,h=new ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},vs=class s extends jt{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],m=0,x=[],g=n/2,d=0;M(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(f,3)),this.setAttribute("uv",new Ft(p,2));function M(){let _=new R,T=new R,E=0,A=(e-t)/n;for(let P=0;P<=r;P++){let v=[],y=P/r,C=y*(e-t)+t;for(let D=0;D<=i;D++){let L=D/i,k=L*c+a,G=Math.sin(k),V=Math.cos(k);T.x=C*G,T.y=-y*n+g,T.z=C*V,u.push(T.x,T.y,T.z),_.set(G,A,V).normalize(),f.push(_.x,_.y,_.z),p.push(L,1-y),v.push(m++)}x.push(v)}for(let P=0;P<i;P++)for(let v=0;v<r;v++){let y=x[v][P],C=x[v+1][P],D=x[v+1][P+1],L=x[v][P+1];(t>0||v!==0)&&(h.push(y,C,L),E+=3),(e>0||v!==r-1)&&(h.push(C,D,L),E+=3)}l.addGroup(d,E,0),d+=E}function b(_){let T=m,E=new ut,A=new R,P=0,v=_===!0?t:e,y=_===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,g*y,0),f.push(0,y,0),p.push(.5,.5),m++;let C=m;for(let D=0;D<=i;D++){let k=D/i*c+a,G=Math.cos(k),V=Math.sin(k);A.x=v*V,A.y=g*y,A.z=v*G,u.push(A.x,A.y,A.z),f.push(0,y,0),E.x=G*.5+.5,E.y=V*.5*y+.5,p.push(E.x,E.y),m++}for(let D=0;D<i;D++){let L=T+D,k=C+D;_===!0?h.push(k,k+1,L):h.push(k+1,k,L),P+=3}l.addGroup(d,P,_===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vr=class s extends vs{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vo=class s extends jt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(r.slice(),3)),this.setAttribute("uv",new Ft(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let b=new R,_=new R,T=new R;for(let E=0;E<e.length;E+=3)p(e[E+0],b),p(e[E+1],_),p(e[E+2],T),c(b,_,T,M)}function c(M,b,_,T){let E=T+1,A=[];for(let P=0;P<=E;P++){A[P]=[];let v=M.clone().lerp(_,P/E),y=b.clone().lerp(_,P/E),C=E-P;for(let D=0;D<=C;D++)D===0&&P===E?A[P][D]=v:A[P][D]=v.clone().lerp(y,D/C)}for(let P=0;P<E;P++)for(let v=0;v<2*(E-P)-1;v++){let y=Math.floor(v/2);v%2===0?(f(A[P][y+1]),f(A[P+1][y]),f(A[P][y])):(f(A[P][y+1]),f(A[P+1][y+1]),f(A[P+1][y]))}}function l(M){let b=new R;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(M),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let M=new R;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let _=g(M)/2/Math.PI+.5,T=d(M)/Math.PI+.5;o.push(_,1-T)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){let b=o[M+0],_=o[M+2],T=o[M+4],E=Math.max(b,_,T),A=Math.min(b,_,T);E>.9&&A<.1&&(b<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,b){let _=M*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function m(){let M=new R,b=new R,_=new R,T=new R,E=new ut,A=new ut,P=new ut;for(let v=0,y=0;v<r.length;v+=9,y+=6){M.set(r[v+0],r[v+1],r[v+2]),b.set(r[v+3],r[v+4],r[v+5]),_.set(r[v+6],r[v+7],r[v+8]),E.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),T.copy(M).add(b).add(_).divideScalar(3);let C=g(T);x(E,y+0,M,C),x(A,y+2,b,C),x(P,y+4,_,C)}}function x(M,b,_,T){T<0&&M.x===1&&(o[b]=M.x-1),_.x===0&&_.z===0&&(o[b]=T/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new ut:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,i=[],r=[],o=[],a=new R,c=new Xt;for(let p=0;p<=t;p++){let m=p/t;i[p]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Yt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,m))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Yt(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],p*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ms=class extends pn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Go=class extends Ms{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Dl(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Eo=new R,jc=new Dl,Qc=new Dl,tl=new Dl,Wo=class extends pn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Eo.subVectors(i[0],i[1]).add(i[0]),l=Eo);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Eo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Eo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),jc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,x,g),Qc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,x,g),tl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(jc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Qc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),tl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(jc.calc(c),Qc.calc(c),tl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function qf(s,t){let e=1-s;return e*e*t}function Yf(s,t){return 2*(1-s)*s*t}function $f(s,t){return s*s*t}function nr(s,t,e,n){return qf(s,t)+Yf(s,e)+$f(s,n)}function Zf(s,t){let e=1-s;return e*e*e*t}function Jf(s,t){let e=1-s;return 3*e*e*s*t}function Kf(s,t){return 3*(1-s)*s*s*t}function jf(s,t){return s*s*s*t}function ir(s,t,e,n,i){return Zf(s,t)+Jf(s,e)+Kf(s,n)+jf(s,i)}var Mr=class extends pn{constructor(t=new ut,e=new ut,n=new ut,i=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ut){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,i.x,r.x,o.x,a.x),ir(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xo=class extends pn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,i.x,r.x,o.x,a.x),ir(t,i.y,r.y,o.y,a.y),ir(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},br=class extends pn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends pn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sr=class extends pn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(nr(t,i.x,r.x,o.x),nr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yo=class extends pn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(nr(t,i.x,r.x,o.x),nr(t,i.y,r.y,o.y),nr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wr=class extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Gh(a,c.x,l.x,h.x,u.x),Gh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ut().fromArray(i))}return this}},Wh=Object.freeze({__proto__:null,ArcCurve:Go,CatmullRomCurve3:Wo,CubicBezierCurve:Mr,CubicBezierCurve3:Xo,EllipseCurve:Ms,LineCurve:br,LineCurve3:qo,QuadraticBezierCurve:Sr,QuadraticBezierCurve3:Yo,SplineCurve:wr}),$o=class extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Wh[i.type]().fromJSON(i))}return this}},Fi=class extends $o{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new br(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Sr(this.currentPoint.clone(),new ut(t,e),new ut(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Mr(this.currentPoint.clone(),new ut(t,e),new ut(n,i),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new wr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new Ms(t,e,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},bs=class extends Fi{constructor(t){super(t),this.uuid=Is(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Fi().fromJSON(i))}return this}};function Qf(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=zu(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=sp(s,t,r,e)),s.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<i;f+=e){let p=s[f],m=s[f+1];p<a&&(a=p),m<c&&(c=m),p>h&&(h=p),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Er(r,o,e,a,c,l,0),o}function zu(s,t,e,n,i){let r;if(i===mp(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Xh(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Xh(o/n|0,s[o],s[o+1],r);return r&&Ss(r,r.next)&&(Ar(r),r=r.next),r}function Oi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ss(e,e.next)||_e(e.prev,e,e.next)===0)){if(Ar(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Er(s,t,e,n,i,r,o){if(!s)return;!o&&r&&lp(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?ep(s,n,i,r):tp(s)){t.push(c.i,s.i,l.i),Ar(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=np(Oi(s),t),Er(s,t,e,n,i,r,2)):o===2&&ip(s,t,e,n,i,r):Er(Oi(s),t,e,n,i,r,1);break}}}function tp(s){let t=s.prev,e=s,n=s.next;if(_e(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(i,r,o),u=Math.min(a,c,l),f=Math.max(i,r,o),p=Math.max(a,c,l),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=p&&er(i,a,r,c,o,l,m.x,m.y)&&_e(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ep(s,t,e,n){let i=s.prev,r=s,o=s.next;if(_e(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,p=Math.min(a,c,l),m=Math.min(h,u,f),x=Math.max(a,c,l),g=Math.max(h,u,f),d=al(p,m,t,e,n),M=al(x,g,t,e,n),b=s.prevZ,_=s.nextZ;for(;b&&b.z>=d&&_&&_.z<=M;){if(b.x>=p&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&er(a,h,c,u,l,f,b.x,b.y)&&_e(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=p&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&er(a,h,c,u,l,f,_.x,_.y)&&_e(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&er(a,h,c,u,l,f,b.x,b.y)&&_e(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=M;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&er(a,h,c,u,l,f,_.x,_.y)&&_e(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function np(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Ss(n,i)&&Vu(n,e,e.next,i)&&Tr(n,i)&&Tr(i,n)&&(t.push(n.i,e.i,i.i),Ar(e),Ar(e.next),e=s=i),e=e.next}while(e!==s);return Oi(e)}function ip(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dp(o,a)){let c=Gu(o,a);o=Oi(o,o.next),c=Oi(c,c.next),Er(o,t,e,n,i,r,0),Er(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function sp(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=zu(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(up(l))}i.sort(rp);for(let r=0;r<i.length;r++)e=op(i[r],e);return e}function rp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function op(s,t){let e=ap(s,t);if(!e)return t;let n=Gu(e,s);return Oi(n,n.next),Oi(e,e.next)}function ap(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(Ss(s,e))return e;do{if(Ss(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Hu(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);Tr(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&cp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function cp(s,t){return _e(s.prev,s,t.prev)<0&&_e(t.next,s,s.next)<0}function lp(s,t,e,n){let i=s;do i.z===0&&(i.z=al(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,hp(i)}function hp(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function al(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function up(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Hu(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function er(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Hu(s,t,e,n,i,r,o,a)}function dp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!fp(s,t)&&(Tr(s,t)&&Tr(t,s)&&pp(s,t)&&(_e(s.prev,s,t.prev)||_e(s,t.prev,t))||Ss(s,t)&&_e(s.prev,s,s.next)>0&&_e(t.prev,t,t.next)>0)}function _e(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ss(s,t){return s.x===t.x&&s.y===t.y}function Vu(s,t,e,n){let i=Ao(_e(s,t,e)),r=Ao(_e(s,t,n)),o=Ao(_e(e,n,s)),a=Ao(_e(e,n,t));return!!(i!==r&&o!==a||i===0&&To(s,e,t)||r===0&&To(s,n,t)||o===0&&To(e,s,n)||a===0&&To(e,t,n))}function To(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ao(s){return s>0?1:s<0?-1:0}function fp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Vu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Tr(s,t){return _e(s.prev,s,s.next)<0?_e(s,t,s.next)>=0&&_e(s,s.prev,t)>=0:_e(s,t,s.prev)<0||_e(s,s.next,t)<0}function pp(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Gu(s,t){let e=cl(s.i,s.x,s.y),n=cl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Xh(s,t,e,n){let i=cl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ar(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function cl(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mp(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var ll=class{static triangulate(t,e,n=2){return Qf(t,e,n)}},fs=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];qh(t),Yh(n,t);let o=t.length;e.forEach(qh);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Yh(n,e[c]);let a=ll.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function qh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Yh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Bi=class s extends Vo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ki=class s extends jt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,p=[],m=[],x=[],g=[];for(let d=0;d<h;d++){let M=d*f-o;for(let b=0;b<l;b++){let _=b*u-r;m.push(_,-M,0),x.push(0,0,1),g.push(b/a),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){let b=M+l*d,_=M+l*(d+1),T=M+1+l*(d+1),E=M+1+l*d;p.push(b,_,E),p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Rr=class s extends jt{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/i,p=new R,m=new ut;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let d=r+g/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<i;x++){let g=x*(n+1);for(let d=0;d<n;d++){let M=d+g,b=M,_=M+n+1,T=M+n+2,E=M+1;a.push(b,_,E),a.push(_,T,E)}}this.setIndex(a),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Cr=class s extends jt{constructor(t=new bs([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ft(i,3)),this.setAttribute("normal",new Ft(r,3)),this.setAttribute("uv",new Ft(o,2));function l(h){let u=i.length/3,f=h.extractPoints(e),p=f.shape,m=f.holes;fs.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,d=m.length;g<d;g++){let M=m[g];fs.isClockWise(M)===!0&&(m[g]=M.reverse())}let x=fs.triangulateShape(p,m);for(let g=0,d=m.length;g<d;g++){let M=m[g];p=p.concat(M)}for(let g=0,d=p.length;g<d;g++){let M=p[g];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,d=x.length;g<d;g++){let M=x[g],b=M[0]+u,_=M[1]+u,T=M[2]+u;n.push(b,_,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return gp(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function gp(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var zn=class s extends jt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,f=new R,p=[],m=[],x=[],g=[];for(let d=0;d<=n;d++){let M=[],b=d/n,_=0;d===0&&o===0?_=.5/e:d===n&&c===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){let E=T/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+b*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(E+_,1-b),M.push(l++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){let b=h[d][M+1],_=h[d][M],T=h[d+1][M],E=h[d+1][M+1];(d!==0||o>0)&&p.push(b,_,E),(d!==n-1||c<Math.PI)&&p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ir=class s extends jt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new R,u=new R,f=new R;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let x=m/i*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let x=(i+1)*p+m-1,g=(i+1)*(p-1)+m-1,d=(i+1)*(p-1)+m,M=(i+1)*p+m;o.push(x,g,M),o.push(g,d,M)}this.setIndex(o),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Qn=class extends mi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Et(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Zo=class extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jo=class extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ro(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function xp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var zi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ko=class extends zi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nl,endingEnd:nl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case il:r=t,a=2*e-n;break;case sl:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case il:o=t,c=2*n-e;break;case sl:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,d=-f*g+2*f*x-f*m,M=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,b=(-1-p)*g+(1.5+p)*x+.5*m,_=p*g-p*x;for(let T=0;T!==a;++T)r[T]=d*o[h+T]+M*o[l+T]+b*o[c+T]+_*o[u+T];return r}},jo=class extends zi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Qo=class extends zi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},mn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ro(e,this.TimeBufferType),this.values=Ro(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ro(t.times,Array),values:Ro(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ko(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case sr:e=this.InterpolantFactoryMethodDiscrete;break;case Uo:e=this.InterpolantFactoryMethodLinear;break;case Co:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return Co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&xp(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Co,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[p+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Uo;var yi=class extends mn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=sr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends mn{constructor(t,e,n,i){super(t,e,n,i)}};ta.prototype.ValueTypeName="color";var ea=class extends mn{constructor(t,e,n,i){super(t,e,n,i)}};ea.prototype.ValueTypeName="number";var na=class extends zi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)we.slerpFlat(r,0,o,l-a,o,l,c);return r}},Pr=class extends mn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new na(this.times,this.values,this.getValueSize(),t)}};Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends mn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=sr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends mn{constructor(t,e,n,i){super(t,e,n,i)}};ia.prototype.ValueTypeName="vector";var sa=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Wu=new sa,ra=class{constructor(t){this.manager=t!==void 0?t:Wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lr=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Dr=class extends Lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},el=new Xt,$h=new R,Zh=new R,hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;$h.setFromMatrixPosition(t.matrixWorld),e.position.copy($h),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),el.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(el)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ur=class extends dr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ul=class extends hl{constructor(){super(new Ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends Lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new ul}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var oa=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ul="\\[\\]\\.:\\/",_p=new RegExp("["+Ul+"]","g"),Nl="[^"+Ul+"]",yp="[^"+Ul.replace("\\.","")+"]",vp=/((?:WC+[\/:])*)/.source.replace("WC",Nl),Mp=/(WCOD+)?/.source.replace("WCOD",yp),bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),Sp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),wp=new RegExp("^"+vp+Mp+bp+Sp+"$"),Ep=["material","materials","bones","map"],dl=class{constructor(t,e,n){let i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_p,"")}static parseTrackName(t){let e=wp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ep.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=dl;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H_=new Float32Array(1);function Fl(s,t,e,n){let i=Tp(n);switch(e){case wl:return s*t;case Cs:return s*t/i.components*i.byteLength;case va:return s*t/i.components*i.byteLength;case Tl:return s*t*2/i.components*i.byteLength;case Ma:return s*t*2/i.components*i.byteLength;case El:return s*t*3/i.components*i.byteLength;case cn:return s*t*4/i.components*i.byteLength;case ba:return s*t*4/i.components*i.byteLength;case Or:case Br:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kr:case zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wa:case Ta:return Math.max(s,16)*Math.max(t,8)/4;case Sa:case Ea:return Math.max(s,8)*Math.max(t,8)/2;case Aa:case Ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Va:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Wa:case Xa:case qa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ya:case $a:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Za:case Ja:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tp(s){switch(s){case In:case vl:return{byteLength:1,components:1};case Es:case Ml:case Ts:return{byteLength:2,components:1};case _a:case ya:return{byteLength:2,components:4};case bi:case xa:case Pn:return{byteLength:4,components:1};case bl:case Sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function pd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Dp(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){let m=u[f],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){let x=u[p];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$p=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,im=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,S0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,z0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Up,alphahash_pars_fragment:Np,alphamap_fragment:Fp,alphamap_pars_fragment:Op,alphatest_fragment:Bp,alphatest_pars_fragment:kp,aomap_fragment:zp,aomap_pars_fragment:Hp,batching_pars_vertex:Vp,batching_vertex:Gp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:qp,iridescence_fragment:Yp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Zp,clipping_planes_pars_fragment:Jp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:jp,color_fragment:Qp,color_pars_fragment:tm,color_pars_vertex:em,color_vertex:nm,common:im,cube_uv_reflection_fragment:sm,defaultnormal_vertex:rm,displacementmap_pars_vertex:om,displacementmap_vertex:am,emissivemap_fragment:cm,emissivemap_pars_fragment:lm,colorspace_fragment:hm,colorspace_pars_fragment:um,envmap_fragment:dm,envmap_common_pars_fragment:fm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Tm,envmap_vertex:gm,fog_vertex:xm,fog_pars_vertex:_m,fog_fragment:ym,fog_pars_fragment:vm,gradientmap_pars_fragment:Mm,lightmap_pars_fragment:bm,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:wm,lights_pars_begin:Em,lights_toon_fragment:Am,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Im,lights_physical_fragment:Pm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Dm,lights_fragment_maps:Um,lights_fragment_end:Nm,logdepthbuf_fragment:Fm,logdepthbuf_pars_fragment:Om,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:km,map_fragment:zm,map_pars_fragment:Hm,map_particle_fragment:Vm,map_particle_pars_fragment:Gm,metalnessmap_fragment:Wm,metalnessmap_pars_fragment:Xm,morphinstance_vertex:qm,morphcolor_vertex:Ym,morphnormal_vertex:$m,morphtarget_pars_vertex:Zm,morphtarget_vertex:Jm,normal_fragment_begin:Km,normal_fragment_maps:jm,normal_pars_fragment:Qm,normal_pars_vertex:t0,normal_vertex:e0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:s0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:o0,opaque_fragment:a0,packing:c0,premultiplied_alpha_fragment:l0,project_vertex:h0,dithering_fragment:u0,dithering_pars_fragment:d0,roughnessmap_fragment:f0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:g0,shadowmap_vertex:x0,shadowmask_pars_fragment:_0,skinbase_vertex:y0,skinning_pars_vertex:v0,skinning_vertex:M0,skinnormal_vertex:b0,specularmap_fragment:S0,specularmap_pars_fragment:w0,tonemapping_fragment:E0,tonemapping_pars_fragment:T0,transmission_fragment:A0,transmission_pars_fragment:R0,uv_pars_fragment:C0,uv_pars_vertex:I0,uv_vertex:P0,worldpos_vertex:L0,background_vert:D0,background_frag:U0,backgroundCube_vert:N0,backgroundCube_frag:F0,cube_vert:O0,cube_frag:B0,depth_vert:k0,depth_frag:z0,distanceRGBA_vert:H0,distanceRGBA_frag:V0,equirect_vert:G0,equirect_frag:W0,linedashed_vert:X0,linedashed_frag:q0,meshbasic_vert:Y0,meshbasic_frag:$0,meshlambert_vert:Z0,meshlambert_frag:J0,meshmatcap_vert:K0,meshmatcap_frag:j0,meshnormal_vert:Q0,meshnormal_frag:tg,meshphong_vert:eg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:sg,meshtoon_vert:rg,meshtoon_frag:og,points_vert:ag,points_frag:cg,shadow_vert:lg,shadow_frag:hg,sprite_vert:ug,sprite_frag:dg},at={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Vn={basic:{uniforms:$e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:$e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Et(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:$e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:$e([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:$e([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Et(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:$e([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:$e([at.points,at.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:$e([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:$e([at.common,at.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:$e([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:$e([at.sprite,at.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:$e([at.common,at.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:$e([at.lights,at.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Vn.physical={uniforms:$e([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var Ka={r:0,b:0,g:0},Wi=new Oe,fg=new Xt;function pg(s,t,e,n,i,r,o){let a=new Et(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function m(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function x(b){let _=!1,T=m(b);T===null?d(a,c):T&&T.isColor&&(d(T,1),_=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(b,_){let T=m(_);T&&(T.isCubeTexture||T.mapping===Nr)?(h===void 0&&(h=new kt(new gi(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:Gi(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Wi.copy(_.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fg.makeRotationFromEuler(Wi)),h.material.toneMapped=Jt.getTransfer(T.colorSpace)!==ee,(u!==T||f!==T.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new kt(new ki(2,2),new Ce({name:"BackgroundMaterial",uniforms:Gi(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(T.colorSpace)!==ee,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=T,f=T.version,p=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function d(b,_){b.getRGB(Ka,Ll(s)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,_,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),c=_,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,d(a,c)},render:x,addToRenderList:g,dispose:M}}function mg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(y,C,D,L,k){let G=!1,V=u(L,D,C);r!==V&&(r=V,l(r.object)),G=p(y,L,D,k),G&&m(y,L,D,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(y,C,D,L),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,C,D){let L=D.wireframe===!0,k=n[y.id];k===void 0&&(k={},n[y.id]=k);let G=k[C.id];G===void 0&&(G={},k[C.id]=G);let V=G[L];return V===void 0&&(V=f(c()),G[L]=V),V}function f(y){let C=[],D=[],L=[];for(let k=0;k<e;k++)C[k]=0,D[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:L,object:y,attributes:{},index:null}}function p(y,C,D,L){let k=r.attributes,G=C.attributes,V=0,j=D.getAttributes();for(let q in j)if(j[q].location>=0){let dt=k[q],Rt=G[q];if(Rt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Rt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Rt=y.instanceColor)),dt===void 0||dt.attribute!==Rt||Rt&&dt.data!==Rt.data)return!0;V++}return r.attributesNum!==V||r.index!==L}function m(y,C,D,L){let k={},G=C.attributes,V=0,j=D.getAttributes();for(let q in j)if(j[q].location>=0){let dt=G[q];dt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));let Rt={};Rt.attribute=dt,dt&&dt.data&&(Rt.data=dt.data),k[q]=Rt,V++}r.attributes=k,r.attributesNum=V,r.index=L}function x(){let y=r.newAttributes;for(let C=0,D=y.length;C<D;C++)y[C]=0}function g(y){d(y,0)}function d(y,C){let D=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;D[y]=1,L[y]===0&&(s.enableVertexAttribArray(y),L[y]=1),k[y]!==C&&(s.vertexAttribDivisor(y,C),k[y]=C)}function M(){let y=r.newAttributes,C=r.enabledAttributes;for(let D=0,L=C.length;D<L;D++)C[D]!==y[D]&&(s.disableVertexAttribArray(D),C[D]=0)}function b(y,C,D,L,k,G,V){V===!0?s.vertexAttribIPointer(y,C,D,k,G):s.vertexAttribPointer(y,C,D,L,k,G)}function _(y,C,D,L){x();let k=L.attributes,G=D.getAttributes(),V=C.defaultAttributeValues;for(let j in G){let q=G[j];if(q.location>=0){let st=k[j];if(st===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){let dt=st.normalized,Rt=st.itemSize,qt=t.get(st);if(qt===void 0)continue;let oe=qt.buffer,fe=qt.type,Qt=qt.bytesPerElement,Z=fe===s.INT||fe===s.UNSIGNED_INT||st.gpuType===xa;if(st.isInterleavedBufferAttribute){let Q=st.data,mt=Q.stride,Ot=st.offset;if(Q.isInstancedInterleavedBuffer){for(let At=0;At<q.locationSize;At++)d(q.location+At,Q.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let At=0;At<q.locationSize;At++)g(q.location+At);s.bindBuffer(s.ARRAY_BUFFER,oe);for(let At=0;At<q.locationSize;At++)b(q.location+At,Rt/q.locationSize,fe,dt,mt*Qt,(Ot+Rt/q.locationSize*At)*Qt,Z)}else{if(st.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)d(q.location+Q,st.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Q=0;Q<q.locationSize;Q++)g(q.location+Q);s.bindBuffer(s.ARRAY_BUFFER,oe);for(let Q=0;Q<q.locationSize;Q++)b(q.location+Q,Rt/q.locationSize,fe,dt,Rt*Qt,Rt/q.locationSize*Q*Qt,Z)}}else if(V!==void 0){let dt=V[j];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(q.location,dt);break;case 3:s.vertexAttrib3fv(q.location,dt);break;case 4:s.vertexAttrib4fv(q.location,dt);break;default:s.vertexAttrib1fv(q.location,dt)}}}}M()}function T(){P();for(let y in n){let C=n[y];for(let D in C){let L=C[D];for(let k in L)h(L[k].object),delete L[k];delete C[D]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let D in C){let L=C[D];for(let k in L)h(L[k].object),delete L[k];delete C[D]}delete n[y.id]}function A(y){for(let C in n){let D=n[C];if(D[y.id]===void 0)continue;let L=D[y.id];for(let k in L)h(L[k].object),delete L[k];delete D[y.id]}}function P(){v(),o=!0,r!==i&&(r=i,l(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function gg(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function xg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==cn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==In&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pn&&!P)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:T,maxSamples:E}}function _g(s){let t=this,e=null,n=0,i=!1,r=!1,o=new On,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,d=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,b=M*4,_=d.clippingState||null;c.value=_,_=h(m,f,b,p);for(let T=0;T!==b;++T)_[T]=e[T];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let d=p+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<d)&&(g=new Float32Array(d));for(let b=0,_=p;b!==x;++b,_+=4)o.copy(u[b]).applyMatrix4(M,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function yg(s){let t=new WeakMap;function e(o,a){return a===pa?o.mapping=Hi:a===ma&&(o.mapping=Vi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===pa||a===ma)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ho(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ds=4,Xu=[.125,.215,.35,.446,.526,.582],Yi=20,Ol=new Ur,qu=new Et,Bl=null,kl=0,zl=0,Hl=!1,qi=(1+Math.sqrt(5))/2,Ls=1/qi,Yu=[new R(-qi,Ls,0),new R(qi,Ls,0),new R(-Ls,0,qi),new R(Ls,0,qi),new R(0,qi,-Ls),new R(0,qi,Ls),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],vg=new R,tc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=vg}=r;Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bl,kl,zl),this._renderer.xr.enabled=Hl,t.scissorTest=!1,ja(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ts,format:cn,colorSpace:Ni,depthBuffer:!1},i=$u(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(r)),this._blurMaterial=bg(r,t,e)}return i}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,Ol)}_sceneToCubeUV(t,e,n,i,r){let c=new qe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(qu),u.toneMapping=ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let x=new Qe({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new kt(new gi,x),d=!1,M=t.background;M?M.isColor&&(x.color.copy(M),t.background=null,d=!0):(x.color.copy(qu),d=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):_===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let T=this._cubeSize;ja(i,_*T,b>2?T:0,T,T),u.setRenderTarget(i),d&&u.render(g,c),u.render(t,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Hi||t.mapping===Vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ja(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ol)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yu[(i-r-1)%Yu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new kt(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Yi;g>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yi}`);let d=[],M=0;for(let A=0;A<Yi;++A){let P=A/x,v=Math.exp(-P*P/2);d.push(v),A===0?M+=v:A<g&&(M+=2*v)}for(let A=0;A<d.length;A++)d[A]=d[A]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=m,f.mipInt.value=b-n;let _=this._sizeLods[i],T=3*_*(i>b-Ds?i-b+Ds:0),E=4*(this._cubeSize-_);ja(e,T,E,3*_,2*_),c.setRenderTarget(e),c.render(u,Ol)}};function Mg(s){let t=[],e=[],n=[],i=s,r=s-Ds+1+Xu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ds?c=Xu[o-s+Ds-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,x=3,g=2,d=1,M=new Float32Array(x*m*p),b=new Float32Array(g*m*p),_=new Float32Array(d*m*p);for(let E=0;E<p;E++){let A=E%3*2/3-1,P=E>2?0:-1,v=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];M.set(v,x*m*E),b.set(f,g*m*E);let y=[E,E,E,E,E,E];_.set(y,d*m*E)}let T=new jt;T.setAttribute("position",new ye(M,x)),T.setAttribute("uv",new ye(b,g)),T.setAttribute("faceIndex",new ye(_,d)),t.push(T),i>Ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $u(s,t,e){let n=new Bn(s,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ja(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function bg(s,t,e){let n=new Float32Array(Yi),i=new R(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Zu(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ju(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===pa||c===ma,h=c===Hi||c===Vi;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new tc(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new tc(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function wg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Eg(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)t.update(f[p],s.ARRAY_BUFFER)}function l(u){let f=[],p=u.index,m=u.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let b=0,_=M.length;b<_;b+=3){let T=M[b+0],E=M[b+1],A=M[b+2];f.push(T,E,E,A,A,T)}}else if(m!==void 0){let M=m.array;x=m.version;for(let b=0,_=M.length/3-1;b<_;b+=3){let T=b+0,E=b+1,A=b+2;f.push(T,E,E,A,A,T)}}else return;let g=new(Pl(f)?ur:hr)(f,1);g.version=x;let d=r.get(u);d&&t.remove(d),r.set(u,g)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Tg(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){s.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,m){m!==0&&(s.drawElementsInstanced(n,p,r,f*o,m),e.update(p,n,m))}function h(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];e.update(g,n,1)}function u(f,p,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,m);let d=0;for(let M=0;M<m;M++)d+=p[M]*x[M];e.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ag(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Rg(s,t,e){let n=new WeakMap,i=new ce;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let v=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;p===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*T*4*u),A=new cr(E,_,T,u);A.type=Pn,A.needsUpdate=!0;let P=b*4;for(let y=0;y<u;y++){let C=g[y],D=d[y],L=M[y],k=_*T*4*y;for(let G=0;G<C.count;G++){let V=G*P;p===!0&&(i.fromBufferAttribute(C,G),E[k+V+0]=i.x,E[k+V+1]=i.y,E[k+V+2]=i.z,E[k+V+3]=0),m===!0&&(i.fromBufferAttribute(D,G),E[k+V+4]=i.x,E[k+V+5]=i.y,E[k+V+6]=i.z,E[k+V+7]=0),x===!0&&(i.fromBufferAttribute(L,G),E[k+V+8]=i.x,E[k+V+9]=i.y,E[k+V+10]=i.z,E[k+V+11]=L.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new ut(_,T)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Cg(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var md=new je,Ku=new xr(1,1),gd=new cr,xd=new Bo,_d=new fr,ju=[],Qu=[],td=new Float32Array(16),ed=new Float32Array(9),nd=new Float32Array(4);function Ns(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=ju[i];if(r===void 0&&(r=new Float32Array(i),ju[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Le(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function nc(s,t){let e=Qu[t];e===void 0&&(e=new Int32Array(t),Qu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ig(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2fv(this.addr,t),Le(e,t)}}function Lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;s.uniform3fv(this.addr,t),Le(e,t)}}function Dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4fv(this.addr,t),Le(e,t)}}function Ug(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;nd.set(n),s.uniformMatrix2fv(this.addr,!1,nd),Le(e,n)}}function Ng(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;ed.set(n),s.uniformMatrix3fv(this.addr,!1,ed),Le(e,n)}}function Fg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;td.set(n),s.uniformMatrix4fv(this.addr,!1,td),Le(e,n)}}function Og(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Bg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2iv(this.addr,t),Le(e,t)}}function kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3iv(this.addr,t),Le(e,t)}}function zg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4iv(this.addr,t),Le(e,t)}}function Hg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Vg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2uiv(this.addr,t),Le(e,t)}}function Gg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3uiv(this.addr,t),Le(e,t)}}function Wg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4uiv(this.addr,t),Le(e,t)}}function Xg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ku.compareFunction=Rl,r=Ku):r=md,e.setTexture2D(t||r,i)}function qg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xd,i)}function Yg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_d,i)}function $g(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gd,i)}function Zg(s){switch(s){case 5126:return Ig;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return kg;case 35669:case 35673:return zg;case 5125:return Hg;case 36294:return Vg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return $g}}function Jg(s,t){s.uniform1fv(this.addr,t)}function Kg(s,t){let e=Ns(t,this.size,2);s.uniform2fv(this.addr,e)}function jg(s,t){let e=Ns(t,this.size,3);s.uniform3fv(this.addr,e)}function Qg(s,t){let e=Ns(t,this.size,4);s.uniform4fv(this.addr,e)}function tx(s,t){let e=Ns(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ex(s,t){let e=Ns(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function nx(s,t){let e=Ns(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ix(s,t){s.uniform1iv(this.addr,t)}function sx(s,t){s.uniform2iv(this.addr,t)}function rx(s,t){s.uniform3iv(this.addr,t)}function ox(s,t){s.uniform4iv(this.addr,t)}function ax(s,t){s.uniform1uiv(this.addr,t)}function cx(s,t){s.uniform2uiv(this.addr,t)}function lx(s,t){s.uniform3uiv(this.addr,t)}function hx(s,t){s.uniform4uiv(this.addr,t)}function ux(s,t,e){let n=this.cache,i=t.length,r=nc(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||md,r[o])}function dx(s,t,e){let n=this.cache,i=t.length,r=nc(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||xd,r[o])}function fx(s,t,e){let n=this.cache,i=t.length,r=nc(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||_d,r[o])}function px(s,t,e){let n=this.cache,i=t.length,r=nc(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||gd,r[o])}function mx(s){switch(s){case 5126:return Jg;case 35664:return Kg;case 35665:return jg;case 35666:return Qg;case 35674:return tx;case 35675:return ex;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return cx;case 36295:return lx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}var Gl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zg(e.type)}},Wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mx(e.type)}},Xl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Vl=/(\w+)(\])?(\[|\.)?/g;function id(s,t){s.seq.push(t),s.map[t.id]=t}function gx(s,t,e){let n=s.name,i=n.length;for(Vl.lastIndex=0;;){let r=Vl.exec(n),o=Vl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){id(e,l===void 0?new Gl(a,s,t):new Wl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Xl(a),id(e,u)),e=u}}}var Us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);gx(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function sd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var xx=37297,_x=0;function yx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var rd=new Ht;function vx(s){Jt._getMatrix(rd,Jt.workingColorSpace,s);let t=`mat3( ${rd.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case rr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function od(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+yx(s.getShaderSource(t),a)}else return r}function Mx(s,t){let e=vx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bx(s,t){let e;switch(t){case yu:e="Linear";break;case vu:e="Reinhard";break;case Mu:e="Cineon";break;case bu:e="ACESFilmic";break;case wu:e="AgX";break;case Eu:e="Neutral";break;case Su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qa=new R;function Sx(){Jt.getLuminanceCoefficients(Qa);let s=Qa.x.toFixed(4),t=Qa.y.toFixed(4),e=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function Ex(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Hr(s){return s!==""}function ad(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(s){return s.replace(Ax,Cx)}var Rx=new Map;function Cx(s,t){let e=Wt[t];if(e===void 0){let n=Rx.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ql(e)}var Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(s){return s.replace(Ix,Px)}function Px(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hi:case Vi:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ux(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function Nx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _l:t="ENVMAP_BLENDING_MULTIPLY";break;case xu:t="ENVMAP_BLENDING_MIX";break;case _u:t="ENVMAP_BLENDING_ADD";break}return t}function Fx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ox(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Lx(e),l=Dx(e),h=Ux(e),u=Nx(e),f=Fx(e),p=wx(e),m=Ex(r),x=i.createProgram(),g,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Hr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Hr).join(`
`),d.length>0&&(d+=`
`)):(g=[hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),d=[hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ei?bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Mx("linearToOutputTexel",e.outputColorSpace),Sx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),o=ql(o),o=ad(o,e),o=cd(o,e),a=ql(a),a=ad(a,e),a=cd(a,e),o=ld(o),a=ld(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=M+g+o,_=M+d+a,T=sd(i,i.VERTEX_SHADER,b),E=sd(i,i.FRAGMENT_SHADER,_);i.attachShader(x,T),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(C){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(x)||"",L=i.getShaderInfoLog(T)||"",k=i.getShaderInfoLog(E)||"",G=D.trim(),V=L.trim(),j=k.trim(),q=!0,st=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,E);else{let dt=od(i,T,"vertex"),Rt=od(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+dt+`
`+Rt)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||j==="")&&(st=!1);st&&(C.diagnostics={runnable:q,programLog:G,vertexShader:{log:V,prefix:g},fragmentShader:{log:j,prefix:d}})}i.deleteShader(T),i.deleteShader(E),P=new Us(i,x),v=Tx(i,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,xx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_x++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}var Bx=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $l(t),e.set(t,n)),n}},$l=class{constructor(t){this.id=Bx++,this.code=t,this.usedTimes=0}};function kx(s,t,e,n,i,r,o){let a=new lr,c=new Yl,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,y,C,D,L){let k=D.fog,G=L.geometry,V=v.isMeshStandardMaterial?D.environment:null,j=(v.isMeshStandardMaterial?e:t).get(v.envMap||V),q=j&&j.mapping===Nr?j.image.height:null,st=m[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let dt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Rt=dt!==void 0?dt.length:0,qt=0;G.morphAttributes.position!==void 0&&(qt=1),G.morphAttributes.normal!==void 0&&(qt=2),G.morphAttributes.color!==void 0&&(qt=3);let oe,fe,Qt,Z;if(st){let te=Vn[st];oe=te.vertexShader,fe=te.fragmentShader}else oe=v.vertexShader,fe=v.fragmentShader,c.update(v),Qt=c.getVertexShaderID(v),Z=c.getFragmentShaderID(v);let Q=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Ot=L.isInstancedMesh===!0,At=L.isBatchedMesh===!0,Zt=!!v.map,Ge=!!v.matcap,U=!!j,pe=!!v.aoMap,zt=!!v.lightMap,Ut=!!v.bumpMap,yt=!!v.normalMap,me=!!v.displacementMap,vt=!!v.emissiveMap,Gt=!!v.metalnessMap,Ue=!!v.roughnessMap,Se=v.anisotropy>0,I=v.clearcoat>0,S=v.dispersion>0,z=v.iridescence>0,$=v.sheen>0,K=v.transmission>0,Y=Se&&!!v.anisotropyMap,Tt=I&&!!v.clearcoatMap,rt=I&&!!v.clearcoatNormalMap,Mt=I&&!!v.clearcoatRoughnessMap,bt=z&&!!v.iridescenceMap,nt=z&&!!v.iridescenceThicknessMap,ht=$&&!!v.sheenColorMap,Dt=$&&!!v.sheenRoughnessMap,St=!!v.specularMap,ct=!!v.specularColorMap,Vt=!!v.specularIntensityMap,N=K&&!!v.transmissionMap,it=K&&!!v.thicknessMap,ot=!!v.gradientMap,pt=!!v.alphaMap,tt=v.alphaTest>0,J=!!v.alphaHash,_t=!!v.extensions,Bt=ei;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Bt=s.toneMapping);let ae={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:oe,fragmentShader:fe,defines:v.defines,customVertexShaderID:Qt,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:At,batchingColor:At&&L._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&L.instanceColor!==null,instancingMorph:Ot&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ni,alphaToCoverage:!!v.alphaToCoverage,map:Zt,matcap:Ge,envMap:U,envMapMode:U&&j.mapping,envMapCubeUVHeight:q,aoMap:pe,lightMap:zt,bumpMap:Ut,normalMap:yt,displacementMap:f&&me,emissiveMap:vt,normalMapObjectSpace:yt&&v.normalMapType===Cu,normalMapTangentSpace:yt&&v.normalMapType===Al,metalnessMap:Gt,roughnessMap:Ue,anisotropy:Se,anisotropyMap:Y,clearcoat:I,clearcoatMap:Tt,clearcoatNormalMap:rt,clearcoatRoughnessMap:Mt,dispersion:S,iridescence:z,iridescenceMap:bt,iridescenceThicknessMap:nt,sheen:$,sheenColorMap:ht,sheenRoughnessMap:Dt,specularMap:St,specularColorMap:ct,specularIntensityMap:Vt,transmission:K,transmissionMap:N,thicknessMap:it,gradientMap:ot,opaque:v.transparent===!1&&v.blending===Di&&v.alphaToCoverage===!1,alphaMap:pt,alphaTest:tt,alphaHash:J,combine:v.combine,mapUv:Zt&&x(v.map.channel),aoMapUv:pe&&x(v.aoMap.channel),lightMapUv:zt&&x(v.lightMap.channel),bumpMapUv:Ut&&x(v.bumpMap.channel),normalMapUv:yt&&x(v.normalMap.channel),displacementMapUv:me&&x(v.displacementMap.channel),emissiveMapUv:vt&&x(v.emissiveMap.channel),metalnessMapUv:Gt&&x(v.metalnessMap.channel),roughnessMapUv:Ue&&x(v.roughnessMap.channel),anisotropyMapUv:Y&&x(v.anisotropyMap.channel),clearcoatMapUv:Tt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(v.sheenRoughnessMap.channel),specularMapUv:St&&x(v.specularMap.channel),specularColorMapUv:ct&&x(v.specularColorMap.channel),specularIntensityMapUv:Vt&&x(v.specularIntensityMap.channel),transmissionMapUv:N&&x(v.transmissionMap.channel),thicknessMapUv:it&&x(v.thicknessMap.channel),alphaMapUv:pt&&x(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(yt||Se),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(Zt||pt),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:qt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Zt&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ee,decodeVideoTextureEmissive:vt&&v.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(v.emissiveMap.colorSpace)===ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===an,flipSided:v.side===Ie,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_t&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&v.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function d(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)y.push(C),y.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(M(y,v),b(y,v),y.push(s.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function M(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function b(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function _(v){let y=m[v.type],C;if(y){let D=Vn[y];C=Ps.clone(D.uniforms)}else C=v.uniforms;return C}function T(v,y){let C;for(let D=0,L=h.length;D<L;D++){let k=h[D];if(k.cacheKey===y){C=k,++C.usedTimes;break}}return C===void 0&&(C=new Ox(s,y,v,r),h.push(C)),C}function E(v){if(--v.usedTimes===0){let y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function A(v){c.remove(v)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:P}}function zx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Hx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ud(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function dd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,p,m,x,g){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=u.renderOrder,d.z=x,d.group=g),t++,d}function a(u,f,p,m,x,g){let d=o(u,f,p,m,x,g);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,m,x,g){let d=o(u,f,p,m,x,g);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Hx),n.length>1&&n.sort(f||ud),i.length>1&&i.sort(f||ud)}function h(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Vx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new dd,s.set(n,[o])):i>=r.length?(o=new dd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Gx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Et};break;case"SpotLight":e={position:new R,direction:new R,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Wx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Xx=0;function qx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Yx(s){let t=new Gx,e=Wx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let i=new R,r=new Xt,o=new Xt;function a(l){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,M=0,b=0,_=0,T=0,E=0,A=0;l.sort(qx);for(let v=0,y=l.length;v<y;v++){let C=l[v],D=C.color,L=C.intensity,k=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=D.r*L,u+=D.g*L,f+=D.b*L;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],L);A++}else if(C.isDirectionalLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,q=e.get(C);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=C.shadow.matrix,M++}n.directional[p]=V,p++}else if(C.isSpotLight){let V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(D).multiplyScalar(L),V.distance=k,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[x]=V;let j=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,j.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[x]=j.matrix,C.castShadow){let q=e.get(C);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=G,_++}x++}else if(C.isRectAreaLight){let V=t.get(C);V.color.copy(D).multiplyScalar(L),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=V,g++}else if(C.isPointLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let j=C.shadow,q=e.get(C);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=C.shadow.matrix,b++}n.point[m]=V,m++}else if(C.isHemisphereLight){let V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(L),V.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[d]=V,d++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==d||P.numDirectionalShadows!==M||P.numPointShadows!==b||P.numSpotShadows!==_||P.numSpotMaps!==T||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.directionalLength=p,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=d,P.numDirectionalShadows=M,P.numPointShadows=b,P.numSpotShadows=_,P.numSpotMaps=T,P.numLightProbes=A,n.version=Xx++)}function c(l,h){let u=0,f=0,p=0,m=0,x=0,g=h.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){let b=l[d];if(b.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(b.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function fd(s){let t=new Yx(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function $x(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new fd(s),t.set(i,[a])):r>=o.length?(a=new fd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kx(s,t,e){let n=new _s,i=new ut,r=new ut,o=new ce,a=new Zo({depthPacking:Ru}),c=new Jo,l={},h=e.maxTextureSize,u={[Cn]:Ie,[Ie]:Cn,[an]:an},f=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Zx,fragmentShader:Jx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new jt;m.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new kt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let d=this.type;this.render=function(E,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let v=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),D=s.state;D.setBlending(ti),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let L=d!==Hn&&this.type===Hn,k=d===Hn&&this.type!==Hn;for(let G=0,V=E.length;G<V;G++){let j=E[G],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let st=q.getFrameExtents();if(i.multiply(st),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,q.mapSize.y=r.y)),q.map===null||L===!0||k===!0){let Rt=this.type!==Hn?{minFilter:Fe,magFilter:Fe}:{};q.map!==null&&q.map.dispose(),q.map=new Bn(i.x,i.y,Rt),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let dt=q.getViewportCount();for(let Rt=0;Rt<dt;Rt++){let qt=q.getViewport(Rt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),D.viewport(o),q.updateMatrices(j,Rt),n=q.getFrustum(),_(A,P,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===Hn&&M(q,P),q.needsUpdate=!1}d=this.type,g.needsUpdate=!1,s.setRenderTarget(v,y,C)};function M(E,A){let P=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bn(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,P,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,P,p,x,null)}function b(E,A,P,v){let y=null,C=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=y.uuid,L=A.uuid,k=l[D];k===void 0&&(k={},l[D]=k);let G=k[L];G===void 0&&(G=y.clone(),k[L]=G,A.addEventListener("dispose",T)),y=G}if(y.visible=A.visible,y.wireframe=A.wireframe,v===Hn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=s.properties.get(y);D.light=P}return y}function _(E,A,P,v,y){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Hn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let L=t.update(E),k=E.material;if(Array.isArray(k)){let G=L.groups;for(let V=0,j=G.length;V<j;V++){let q=G[V],st=k[q.materialIndex];if(st&&st.visible){let dt=b(E,st,v,y);E.onBeforeShadow(s,E,A,P,L,dt,q),s.renderBufferDirect(P,null,L,dt,E,q),E.onAfterShadow(s,E,A,P,L,dt,q)}}}else if(k.visible){let G=b(E,k,v,y);E.onBeforeShadow(s,E,A,P,L,G,null),s.renderBufferDirect(P,null,L,G,E,null),E.onAfterShadow(s,E,A,P,L,G,null)}}let D=E.children;for(let L=0,k=D.length;L<k;L++)_(D[L],A,P,v,y)}function T(E){E.target.removeEventListener("dispose",T);for(let P in l){let v=l[P],y=E.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}var jx={[aa]:ca,[la]:da,[ha]:fa,[Ui]:ua,[ca]:aa,[da]:la,[fa]:ha,[ua]:Ui};function Qx(s,t){function e(){let N=!1,it=new ce,ot=null,pt=new ce(0,0,0,0);return{setMask:function(tt){ot!==tt&&!N&&(s.colorMask(tt,tt,tt,tt),ot=tt)},setLocked:function(tt){N=tt},setClear:function(tt,J,_t,Bt,ae){ae===!0&&(tt*=Bt,J*=Bt,_t*=Bt),it.set(tt,J,_t,Bt),pt.equals(it)===!1&&(s.clearColor(tt,J,_t,Bt),pt.copy(it))},reset:function(){N=!1,ot=null,pt.set(-1,0,0,0)}}}function n(){let N=!1,it=!1,ot=null,pt=null,tt=null;return{setReversed:function(J){if(it!==J){let _t=t.get("EXT_clip_control");J?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),it=J;let Bt=tt;tt=null,this.setClear(Bt)}},getReversed:function(){return it},setTest:function(J){J?Q(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(J){ot!==J&&!N&&(s.depthMask(J),ot=J)},setFunc:function(J){if(it&&(J=jx[J]),pt!==J){switch(J){case aa:s.depthFunc(s.NEVER);break;case ca:s.depthFunc(s.ALWAYS);break;case la:s.depthFunc(s.LESS);break;case Ui:s.depthFunc(s.LEQUAL);break;case ha:s.depthFunc(s.EQUAL);break;case ua:s.depthFunc(s.GEQUAL);break;case da:s.depthFunc(s.GREATER);break;case fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=J}},setLocked:function(J){N=J},setClear:function(J){tt!==J&&(it&&(J=1-J),s.clearDepth(J),tt=J)},reset:function(){N=!1,ot=null,pt=null,tt=null,it=!1}}}function i(){let N=!1,it=null,ot=null,pt=null,tt=null,J=null,_t=null,Bt=null,ae=null;return{setTest:function(te){N||(te?Q(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(te){it!==te&&!N&&(s.stencilMask(te),it=te)},setFunc:function(te,Xn,Fn){(ot!==te||pt!==Xn||tt!==Fn)&&(s.stencilFunc(te,Xn,Fn),ot=te,pt=Xn,tt=Fn)},setOp:function(te,Xn,Fn){(J!==te||_t!==Xn||Bt!==Fn)&&(s.stencilOp(te,Xn,Fn),J=te,_t=Xn,Bt=Fn)},setLocked:function(te){N=te},setClear:function(te){ae!==te&&(s.clearStencil(te),ae=te)},reset:function(){N=!1,it=null,ot=null,pt=null,tt=null,J=null,_t=null,Bt=null,ae=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],m=null,x=!1,g=null,d=null,M=null,b=null,_=null,T=null,E=null,A=new Et(0,0,0),P=0,v=!1,y=null,C=null,D=null,L=null,k=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,j=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=j>=2);let st=null,dt={},Rt=s.getParameter(s.SCISSOR_BOX),qt=s.getParameter(s.VIEWPORT),oe=new ce().fromArray(Rt),fe=new ce().fromArray(qt);function Qt(N,it,ot,pt){let tt=new Uint8Array(4),J=s.createTexture();s.bindTexture(N,J),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _t=0;_t<ot;_t++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,tt):s.texImage2D(it+_t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,tt);return J}let Z={};Z[s.TEXTURE_2D]=Qt(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Qt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Qt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Qt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(Ui),Ut(!1),yt(fl),Q(s.CULL_FACE),pe(ti);function Q(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function mt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ot(N,it){return u[N]!==it?(s.bindFramebuffer(N,it),u[N]=it,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=it),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=it),!0):!1}function At(N,it){let ot=p,pt=!1;if(N){ot=f.get(it),ot===void 0&&(ot=[],f.set(it,ot));let tt=N.textures;if(ot.length!==tt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let J=0,_t=tt.length;J<_t;J++)ot[J]=s.COLOR_ATTACHMENT0+J;ot.length=tt.length,pt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,pt=!0);pt&&s.drawBuffers(ot)}function Zt(N){return m!==N?(s.useProgram(N),m=N,!0):!1}let Ge={[fi]:s.FUNC_ADD,[tu]:s.FUNC_SUBTRACT,[eu]:s.FUNC_REVERSE_SUBTRACT};Ge[nu]=s.MIN,Ge[iu]=s.MAX;let U={[su]:s.ZERO,[ru]:s.ONE,[ou]:s.SRC_COLOR,[Io]:s.SRC_ALPHA,[du]:s.SRC_ALPHA_SATURATE,[hu]:s.DST_COLOR,[cu]:s.DST_ALPHA,[au]:s.ONE_MINUS_SRC_COLOR,[Po]:s.ONE_MINUS_SRC_ALPHA,[uu]:s.ONE_MINUS_DST_COLOR,[lu]:s.ONE_MINUS_DST_ALPHA,[fu]:s.CONSTANT_COLOR,[pu]:s.ONE_MINUS_CONSTANT_COLOR,[mu]:s.CONSTANT_ALPHA,[gu]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(N,it,ot,pt,tt,J,_t,Bt,ae,te){if(N===ti){x===!0&&(mt(s.BLEND),x=!1);return}if(x===!1&&(Q(s.BLEND),x=!0),N!==Qh){if(N!==g||te!==v){if((d!==fi||_!==fi)&&(s.blendEquation(s.FUNC_ADD),d=fi,_=fi),te)switch(N){case Di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ml:s.blendFunc(s.ONE,s.ONE);break;case gl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ml:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case gl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,b=null,T=null,E=null,A.set(0,0,0),P=0,g=N,v=te}return}tt=tt||it,J=J||ot,_t=_t||pt,(it!==d||tt!==_)&&(s.blendEquationSeparate(Ge[it],Ge[tt]),d=it,_=tt),(ot!==M||pt!==b||J!==T||_t!==E)&&(s.blendFuncSeparate(U[ot],U[pt],U[J],U[_t]),M=ot,b=pt,T=J,E=_t),(Bt.equals(A)===!1||ae!==P)&&(s.blendColor(Bt.r,Bt.g,Bt.b,ae),A.copy(Bt),P=ae),g=N,v=!1}function zt(N,it){N.side===an?mt(s.CULL_FACE):Q(s.CULL_FACE);let ot=N.side===Ie;it&&(ot=!ot),Ut(ot),N.blending===Di&&N.transparent===!1?pe(ti):pe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let pt=N.stencilWrite;a.setTest(pt),pt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(N){y!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),y=N)}function yt(N){N!==Jh?(Q(s.CULL_FACE),N!==C&&(N===fl?s.cullFace(s.BACK):N===Kh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),C=N}function me(N){N!==D&&(V&&s.lineWidth(N),D=N)}function vt(N,it,ot){N?(Q(s.POLYGON_OFFSET_FILL),(L!==it||k!==ot)&&(s.polygonOffset(it,ot),L=it,k=ot)):mt(s.POLYGON_OFFSET_FILL)}function Gt(N){N?Q(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function Ue(N){N===void 0&&(N=s.TEXTURE0+G-1),st!==N&&(s.activeTexture(N),st=N)}function Se(N,it,ot){ot===void 0&&(st===null?ot=s.TEXTURE0+G-1:ot=st);let pt=dt[ot];pt===void 0&&(pt={type:void 0,texture:void 0},dt[ot]=pt),(pt.type!==N||pt.texture!==it)&&(st!==ot&&(s.activeTexture(ot),st=ot),s.bindTexture(N,it||Z[N]),pt.type=N,pt.texture=it)}function I(){let N=dt[st];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{s.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{s.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{s.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{s.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{s.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{s.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{s.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(N){oe.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),oe.copy(N))}function Dt(N){fe.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),fe.copy(N))}function St(N,it){let ot=l.get(it);ot===void 0&&(ot=new WeakMap,l.set(it,ot));let pt=ot.get(N);pt===void 0&&(pt=s.getUniformBlockIndex(it,N.name),ot.set(N,pt))}function ct(N,it){let pt=l.get(it).get(N);c.get(it)!==pt&&(s.uniformBlockBinding(it,pt,N.__bindingPointIndex),c.set(it,pt))}function Vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,dt={},u={},f=new WeakMap,p=[],m=null,x=!1,g=null,d=null,M=null,b=null,_=null,T=null,E=null,A=new Et(0,0,0),P=0,v=!1,y=null,C=null,D=null,L=null,k=null,oe.set(0,0,s.canvas.width,s.canvas.height),fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:mt,bindFramebuffer:Ot,drawBuffers:At,useProgram:Zt,setBlending:pe,setMaterial:zt,setFlipSided:Ut,setCullFace:yt,setLineWidth:me,setPolygonOffset:vt,setScissorTest:Gt,activeTexture:Ue,bindTexture:Se,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:bt,texImage3D:nt,updateUBOMapping:St,uniformBlockBinding:ct,texStorage2D:rt,texStorage3D:Mt,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:Y,compressedTexSubImage3D:Tt,scissor:ht,viewport:Dt,reset:Vt}}function t_(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return p?new OffscreenCanvas(I,S):ar("canvas")}function x(I,S,z){let $=1,K=Se(I);if((K.width>z||K.height>z)&&($=z/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Y=Math.floor($*K.width),Tt=Math.floor($*K.height);u===void 0&&(u=m(Y,Tt));let rt=S?m(Y,Tt):u;return rt.width=Y,rt.height=Tt,rt.getContext("2d").drawImage(I,0,0,Y,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+Tt+")."),rt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function g(I){return I.generateMipmaps}function d(I){s.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(I,S,z,$,K=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Y=S;if(S===s.RED&&(z===s.FLOAT&&(Y=s.R32F),z===s.HALF_FLOAT&&(Y=s.R16F),z===s.UNSIGNED_BYTE&&(Y=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.R8UI),z===s.UNSIGNED_SHORT&&(Y=s.R16UI),z===s.UNSIGNED_INT&&(Y=s.R32UI),z===s.BYTE&&(Y=s.R8I),z===s.SHORT&&(Y=s.R16I),z===s.INT&&(Y=s.R32I)),S===s.RG&&(z===s.FLOAT&&(Y=s.RG32F),z===s.HALF_FLOAT&&(Y=s.RG16F),z===s.UNSIGNED_BYTE&&(Y=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RG8UI),z===s.UNSIGNED_SHORT&&(Y=s.RG16UI),z===s.UNSIGNED_INT&&(Y=s.RG32UI),z===s.BYTE&&(Y=s.RG8I),z===s.SHORT&&(Y=s.RG16I),z===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),z===s.UNSIGNED_INT&&(Y=s.RGB32UI),z===s.BYTE&&(Y=s.RGB8I),z===s.SHORT&&(Y=s.RGB16I),z===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),z===s.UNSIGNED_INT&&(Y=s.RGBA32UI),z===s.BYTE&&(Y=s.RGBA8I),z===s.SHORT&&(Y=s.RGBA16I),z===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),S===s.RGBA){let Tt=K?rr:Jt.getTransfer($);z===s.FLOAT&&(Y=s.RGBA32F),z===s.HALF_FLOAT&&(Y=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Y=Tt===ee?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(I,S){let z;return I?S===null||S===bi||S===As?z=s.DEPTH24_STENCIL8:S===Pn?z=s.DEPTH32F_STENCIL8:S===Es&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===bi||S===As?z=s.DEPTH_COMPONENT24:S===Pn?z=s.DEPTH_COMPONENT32F:S===Es&&(z=s.DEPTH_COMPONENT16),z}function T(I,S){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Fe&&I.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function E(I){let S=I.target;S.removeEventListener("dispose",E),P(S),S.isVideoTexture&&h.delete(S)}function A(I){let S=I.target;S.removeEventListener("dispose",A),y(S)}function P(I){let S=n.get(I);if(S.__webglInit===void 0)return;let z=I.source,$=f.get(z);if($){let K=$[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&v(I),Object.keys($).length===0&&f.delete(z)}n.remove(I)}function v(I){let S=n.get(I);s.deleteTexture(S.__webglTexture);let z=I.source,$=f.get(z);delete $[S.__cacheKey],o.memory.textures--}function y(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let K=0;K<S.__webglFramebuffer[$].length;K++)s.deleteFramebuffer(S.__webglFramebuffer[$][K]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=I.textures;for(let $=0,K=z.length;$<K;$++){let Y=n.get(z[$]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[$])}n.remove(I)}let C=0;function D(){C=0}function L(){let I=C;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),C+=1,I}function k(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function G(I,S){let z=n.get(I);if(I.isVideoTexture&&Gt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){let $=I.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,I,S);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function V(I,S){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Z(z,I,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function j(I,S){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Z(z,I,S);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function q(I,S){let z=n.get(I);if(I.version>0&&z.__version!==I.version){Q(z,I,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}let st={[Lo]:s.REPEAT,[An]:s.CLAMP_TO_EDGE,[Do]:s.MIRRORED_REPEAT},dt={[Fe]:s.NEAREST,[Tu]:s.NEAREST_MIPMAP_NEAREST,[Fr]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[ga]:s.LINEAR_MIPMAP_NEAREST,[Mi]:s.LINEAR_MIPMAP_LINEAR},Rt={[Iu]:s.NEVER,[Fu]:s.ALWAYS,[Pu]:s.LESS,[Rl]:s.LEQUAL,[Lu]:s.EQUAL,[Nu]:s.GEQUAL,[Du]:s.GREATER,[Uu]:s.NOTEQUAL};function qt(I,S){if(S.type===Pn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===ga||S.magFilter===Fr||S.magFilter===Mi||S.minFilter===on||S.minFilter===ga||S.minFilter===Fr||S.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,st[S.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,st[S.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,st[S.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,dt[S.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,dt[S.minFilter]),S.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fe||S.minFilter!==Fr&&S.minFilter!==Mi||S.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function oe(I,S){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",E));let $=S.source,K=f.get($);K===void 0&&(K={},f.set($,K));let Y=k(S);if(Y!==I.__cacheKey){K[Y]===void 0&&(K[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[Y].usedTimes++;let Tt=K[I.__cacheKey];Tt!==void 0&&(K[I.__cacheKey].usedTimes--,Tt.usedTimes===0&&v(S)),I.__cacheKey=Y,I.__webglTexture=K[Y].texture}return z}function fe(I,S,z){return Math.floor(Math.floor(I/z)/S)}function Qt(I,S,z,$){let Y=I.updateRanges;if(Y.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,z,$,S.data);else{Y.sort((nt,ht)=>nt.start-ht.start);let Tt=0;for(let nt=1;nt<Y.length;nt++){let ht=Y[Tt],Dt=Y[nt],St=ht.start+ht.count,ct=fe(Dt.start,S.width,4),Vt=fe(ht.start,S.width,4);Dt.start<=St+1&&ct===Vt&&fe(Dt.start+Dt.count-1,S.width,4)===ct?ht.count=Math.max(ht.count,Dt.start+Dt.count-ht.start):(++Tt,Y[Tt]=Dt)}Y.length=Tt+1;let rt=s.getParameter(s.UNPACK_ROW_LENGTH),Mt=s.getParameter(s.UNPACK_SKIP_PIXELS),bt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let nt=0,ht=Y.length;nt<ht;nt++){let Dt=Y[nt],St=Math.floor(Dt.start/4),ct=Math.ceil(Dt.count/4),Vt=St%S.width,N=Math.floor(St/S.width),it=ct,ot=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,Vt,N,it,ot,z,$,S.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Mt),s.pixelStorei(s.UNPACK_SKIP_ROWS,bt)}}function Z(I,S,z){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);let K=oe(I,S),Y=S.source;e.bindTexture($,I.__webglTexture,s.TEXTURE0+z);let Tt=n.get(Y);if(Y.version!==Tt.__version||K===!0){e.activeTexture(s.TEXTURE0+z);let rt=Jt.getPrimaries(Jt.workingColorSpace),Mt=S.colorSpace===ni?null:Jt.getPrimaries(S.colorSpace),bt=S.colorSpace===ni||rt===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let nt=x(S.image,!1,i.maxTextureSize);nt=Ue(S,nt);let ht=r.convert(S.format,S.colorSpace),Dt=r.convert(S.type),St=b(S.internalFormat,ht,Dt,S.colorSpace,S.isVideoTexture);qt($,S);let ct,Vt=S.mipmaps,N=S.isVideoTexture!==!0,it=Tt.__version===void 0||K===!0,ot=Y.dataReady,pt=T(S,nt);if(S.isDepthTexture)St=_(S.format===Rs,S.type),it&&(N?e.texStorage2D(s.TEXTURE_2D,1,St,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,St,nt.width,nt.height,0,ht,Dt,null));else if(S.isDataTexture)if(Vt.length>0){N&&it&&e.texStorage2D(s.TEXTURE_2D,pt,St,Vt[0].width,Vt[0].height);for(let tt=0,J=Vt.length;tt<J;tt++)ct=Vt[tt],N?ot&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ct.width,ct.height,ht,Dt,ct.data):e.texImage2D(s.TEXTURE_2D,tt,St,ct.width,ct.height,0,ht,Dt,ct.data);S.generateMipmaps=!1}else N?(it&&e.texStorage2D(s.TEXTURE_2D,pt,St,nt.width,nt.height),ot&&Qt(S,nt,ht,Dt)):e.texImage2D(s.TEXTURE_2D,0,St,nt.width,nt.height,0,ht,Dt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&it&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,St,Vt[0].width,Vt[0].height,nt.depth);for(let tt=0,J=Vt.length;tt<J;tt++)if(ct=Vt[tt],S.format!==cn)if(ht!==null)if(N){if(ot)if(S.layerUpdates.size>0){let _t=Fl(ct.width,ct.height,S.format,S.type);for(let Bt of S.layerUpdates){let ae=ct.data.subarray(Bt*_t/ct.data.BYTES_PER_ELEMENT,(Bt+1)*_t/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,Bt,ct.width,ct.height,1,ht,ae)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,nt.depth,ht,ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,St,ct.width,ct.height,nt.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ot&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,nt.depth,ht,Dt,ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,St,ct.width,ct.height,nt.depth,0,ht,Dt,ct.data)}else{N&&it&&e.texStorage2D(s.TEXTURE_2D,pt,St,Vt[0].width,Vt[0].height);for(let tt=0,J=Vt.length;tt<J;tt++)ct=Vt[tt],S.format!==cn?ht!==null?N?ot&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,ct.width,ct.height,ht,ct.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,St,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ot&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ct.width,ct.height,ht,Dt,ct.data):e.texImage2D(s.TEXTURE_2D,tt,St,ct.width,ct.height,0,ht,Dt,ct.data)}else if(S.isDataArrayTexture)if(N){if(it&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,St,nt.width,nt.height,nt.depth),ot)if(S.layerUpdates.size>0){let tt=Fl(nt.width,nt.height,S.format,S.type);for(let J of S.layerUpdates){let _t=nt.data.subarray(J*tt/nt.data.BYTES_PER_ELEMENT,(J+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,ht,Dt,_t)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ht,Dt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,nt.width,nt.height,nt.depth,0,ht,Dt,nt.data);else if(S.isData3DTexture)N?(it&&e.texStorage3D(s.TEXTURE_3D,pt,St,nt.width,nt.height,nt.depth),ot&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ht,Dt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,St,nt.width,nt.height,nt.depth,0,ht,Dt,nt.data);else if(S.isFramebufferTexture){if(it)if(N)e.texStorage2D(s.TEXTURE_2D,pt,St,nt.width,nt.height);else{let tt=nt.width,J=nt.height;for(let _t=0;_t<pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,St,tt,J,0,ht,Dt,null),tt>>=1,J>>=1}}else if(Vt.length>0){if(N&&it){let tt=Se(Vt[0]);e.texStorage2D(s.TEXTURE_2D,pt,St,tt.width,tt.height)}for(let tt=0,J=Vt.length;tt<J;tt++)ct=Vt[tt],N?ot&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ht,Dt,ct):e.texImage2D(s.TEXTURE_2D,tt,St,ht,Dt,ct);S.generateMipmaps=!1}else if(N){if(it){let tt=Se(nt);e.texStorage2D(s.TEXTURE_2D,pt,St,tt.width,tt.height)}ot&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht,Dt,nt)}else e.texImage2D(s.TEXTURE_2D,0,St,ht,Dt,nt);g(S)&&d($),Tt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Q(I,S,z){if(S.image.length!==6)return;let $=oe(I,S),K=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+z);let Y=n.get(K);if(K.version!==Y.__version||$===!0){e.activeTexture(s.TEXTURE0+z);let Tt=Jt.getPrimaries(Jt.workingColorSpace),rt=S.colorSpace===ni?null:Jt.getPrimaries(S.colorSpace),Mt=S.colorSpace===ni||Tt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let bt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,ht=[];for(let J=0;J<6;J++)!bt&&!nt?ht[J]=x(S.image[J],!0,i.maxCubemapSize):ht[J]=nt?S.image[J].image:S.image[J],ht[J]=Ue(S,ht[J]);let Dt=ht[0],St=r.convert(S.format,S.colorSpace),ct=r.convert(S.type),Vt=b(S.internalFormat,St,ct,S.colorSpace),N=S.isVideoTexture!==!0,it=Y.__version===void 0||$===!0,ot=K.dataReady,pt=T(S,Dt);qt(s.TEXTURE_CUBE_MAP,S);let tt;if(bt){N&&it&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Vt,Dt.width,Dt.height);for(let J=0;J<6;J++){tt=ht[J].mipmaps;for(let _t=0;_t<tt.length;_t++){let Bt=tt[_t];S.format!==cn?St!==null?N?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,Bt.width,Bt.height,St,Bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,Vt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,Bt.width,Bt.height,St,ct,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,Vt,Bt.width,Bt.height,0,St,ct,Bt.data)}}}else{if(tt=S.mipmaps,N&&it){tt.length>0&&pt++;let J=Se(ht[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Vt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){N?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ht[J].width,ht[J].height,St,ct,ht[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Vt,ht[J].width,ht[J].height,0,St,ct,ht[J].data);for(let _t=0;_t<tt.length;_t++){let ae=tt[_t].image[J].image;N?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,ae.width,ae.height,St,ct,ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,Vt,ae.width,ae.height,0,St,ct,ae.data)}}else{N?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St,ct,ht[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Vt,St,ct,ht[J]);for(let _t=0;_t<tt.length;_t++){let Bt=tt[_t];N?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,St,ct,Bt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,Vt,St,ct,Bt.image[J])}}}g(S)&&d(s.TEXTURE_CUBE_MAP),Y.__version=K.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function mt(I,S,z,$,K,Y){let Tt=r.convert(z.format,z.colorSpace),rt=r.convert(z.type),Mt=b(z.internalFormat,Tt,rt,z.colorSpace),bt=n.get(S),nt=n.get(z);if(nt.__renderTarget=S,!bt.__hasExternalTextures){let ht=Math.max(1,S.width>>Y),Dt=Math.max(1,S.height>>Y);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,Y,Mt,ht,Dt,S.depth,0,Tt,rt,null):e.texImage2D(K,Y,Mt,ht,Dt,0,Tt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),vt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,K,nt.__webglTexture,0,me(S)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,K,nt.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(I,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),S.depthBuffer){let $=S.depthTexture,K=$&&$.isDepthTexture?$.type:null,Y=_(S.stencilBuffer,K),Tt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=me(S);vt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,Y,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Y,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Y,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,I)}else{let $=S.textures;for(let K=0;K<$.length;K++){let Y=$[K],Tt=r.convert(Y.format,Y.colorSpace),rt=r.convert(Y.type),Mt=b(Y.internalFormat,Tt,rt,Y.colorSpace),bt=me(S);z&&vt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,Mt,S.width,S.height):vt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,Mt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let K=$.__webglTexture,Y=me(S);if(S.depthTexture.format===ps)vt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(S.depthTexture.format===Rs)vt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Zt(I){let S=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let $=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=$}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let $=I.texture.mipmaps;$&&$.length>0?At(S.__webglFramebuffer[0],I):At(S.__webglFramebuffer,I)}else if(z){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=s.createRenderbuffer(),Ot(S.__webglDepthbuffer[$],I,!1);else{let K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Y)}}else{let $=I.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Ot(S.__webglDepthbuffer,I,!1);else{let K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Y)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(I,S,z){let $=n.get(I);S!==void 0&&mt($.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Zt(I)}function U(I){let S=I.texture,z=n.get(I),$=n.get(S);I.addEventListener("dispose",A);let K=I.textures,Y=I.isWebGLCubeRenderTarget===!0,Tt=K.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[rt]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)z.__webglFramebuffer[rt][Mt]=s.createFramebuffer()}else z.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)z.__webglFramebuffer[rt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let rt=0,Mt=K.length;rt<Mt;rt++){let bt=n.get(K[rt]);bt.__webglTexture===void 0&&(bt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&vt(I)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let rt=0;rt<K.length;rt++){let Mt=K[rt];z.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[rt]);let bt=r.convert(Mt.format,Mt.colorSpace),nt=r.convert(Mt.type),ht=b(Mt.internalFormat,bt,nt,Mt.colorSpace,I.isXRRenderTarget===!0),Dt=me(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ht,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,z.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),qt(s.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)mt(z.__webglFramebuffer[rt][Mt],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt);else mt(z.__webglFramebuffer[rt],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);g(S)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let rt=0,Mt=K.length;rt<Mt;rt++){let bt=K[rt],nt=n.get(bt),ht=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ht=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,nt.__webglTexture),qt(ht,bt),mt(z.__webglFramebuffer,I,bt,s.COLOR_ATTACHMENT0+rt,ht,0),g(bt)&&d(ht)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,$.__webglTexture),qt(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)mt(z.__webglFramebuffer[Mt],I,S,s.COLOR_ATTACHMENT0,rt,Mt);else mt(z.__webglFramebuffer,I,S,s.COLOR_ATTACHMENT0,rt,0);g(S)&&d(rt),e.unbindTexture()}I.depthBuffer&&Zt(I)}function pe(I){let S=I.textures;for(let z=0,$=S.length;z<$;z++){let K=S[z];if(g(K)){let Y=M(I),Tt=n.get(K).__webglTexture;e.bindTexture(Y,Tt),d(Y),e.unbindTexture()}}}let zt=[],Ut=[];function yt(I){if(I.samples>0){if(vt(I)===!1){let S=I.textures,z=I.width,$=I.height,K=s.COLOR_BUFFER_BIT,Y=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(I),rt=S.length>1;if(rt)for(let bt=0;bt<S.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let Mt=I.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let bt=0;bt<S.length;bt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[bt]);let nt=n.get(S[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,z,$,0,0,z,$,K,s.NEAREST),c===!0&&(zt.length=0,Ut.length=0,zt.push(s.COLOR_ATTACHMENT0+bt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(zt.push(Y),Ut.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let bt=0;bt<S.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[bt]);let nt=n.get(S[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let S=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function me(I){return Math.min(i.maxSamples,I.samples)}function vt(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Gt(I){let S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function Ue(I,S){let z=I.colorSpace,$=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==Ni&&z!==ni&&(Jt.getTransfer(z)===ee?($!==cn||K!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Se(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Ge,this.setupRenderTarget=U,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=vt}function e_(s,t){function e(n,i=ni){let r,o=Jt.getTransfer(i);if(n===In)return s.UNSIGNED_BYTE;if(n===_a)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===vl)return s.BYTE;if(n===Ml)return s.SHORT;if(n===Es)return s.UNSIGNED_SHORT;if(n===xa)return s.INT;if(n===bi)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===Ts)return s.HALF_FLOAT;if(n===wl)return s.ALPHA;if(n===El)return s.RGB;if(n===cn)return s.RGBA;if(n===ps)return s.DEPTH_COMPONENT;if(n===Rs)return s.DEPTH_STENCIL;if(n===Cs)return s.RED;if(n===va)return s.RED_INTEGER;if(n===Tl)return s.RG;if(n===Ma)return s.RG_INTEGER;if(n===ba)return s.RGBA_INTEGER;if(n===Or||n===Br||n===kr||n===zr)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===wa||n===Ea||n===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ra||n===Ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ra)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===Pa||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Ha||n===Va||n===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Xa||n===qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wa)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ya||n===$a||n===Za||n===Ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new _r(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ce({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jl=class extends jn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,m=null,x=typeof XRWebGLBinding<"u",g=new Zl,d={},M=e.getContextAttributes(),b=null,_=null,T=[],E=[],A=new ut,P=null,v=new qe;v.viewport=new ce;let y=new qe;y.viewport=new ce;let C=[v,y],D=new oa,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=T[Z];return Q===void 0&&(Q=new xs,T[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=T[Z];return Q===void 0&&(Q=new xs,T[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=T[Z];return Q===void 0&&(Q=new xs,T[Z]=Q),Q.getHandSpace()};function G(Z){let Q=E.indexOf(Z.inputSource);if(Q===-1)return;let mt=T[Q];mt!==void 0&&(mt.update(Z.inputSource,Z.frame,l||o),mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",j);for(let Z=0;Z<T.length;Z++){let Q=E[Z];Q!==null&&(E[Z]=null,T[Z].disconnect(Q))}L=null,k=null,g.reset();for(let Z in d)delete d[Z];t.setRenderTarget(b),p=null,f=null,u=null,i=null,_=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",V),i.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Ot=null,At=null;M.depth&&(At=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=M.stencil?Rs:ps,Ot=M.stencil?As:bi);let Zt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Zt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Bn(f.textureWidth,f.textureHeight,{format:cn,type:In,depthTexture:new xr(f.textureWidth,f.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Bn(p.framebufferWidth,p.framebufferHeight,{format:cn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(Z){for(let Q=0;Q<Z.removed.length;Q++){let mt=Z.removed[Q],Ot=E.indexOf(mt);Ot>=0&&(E[Ot]=null,T[Ot].disconnect(mt))}for(let Q=0;Q<Z.added.length;Q++){let mt=Z.added[Q],Ot=E.indexOf(mt);if(Ot===-1){for(let Zt=0;Zt<T.length;Zt++)if(Zt>=E.length){E.push(mt),Ot=Zt;break}else if(E[Zt]===null){E[Zt]=mt,Ot=Zt;break}if(Ot===-1)break}let At=T[Ot];At&&At.connect(mt)}}let q=new R,st=new R;function dt(Z,Q,mt){q.setFromMatrixPosition(Q.matrixWorld),st.setFromMatrixPosition(mt.matrixWorld);let Ot=q.distanceTo(st),At=Q.projectionMatrix.elements,Zt=mt.projectionMatrix.elements,Ge=At[14]/(At[10]-1),U=At[14]/(At[10]+1),pe=(At[9]+1)/At[5],zt=(At[9]-1)/At[5],Ut=(At[8]-1)/At[0],yt=(Zt[8]+1)/Zt[0],me=Ge*Ut,vt=Ge*yt,Gt=Ot/(-Ut+yt),Ue=Gt*-Ut;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ue),Z.translateZ(Gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),At[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Se=Ge+Gt,I=U+Gt,S=me-Ue,z=vt+(Ot-Ue),$=pe*U/I*Se,K=zt*U/I*Se;Z.projectionMatrix.makePerspective(S,z,$,K,Se,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Rt(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let Q=Z.near,mt=Z.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(mt=g.depthFar)),D.near=y.near=v.near=Q,D.far=y.far=v.far=mt,(L!==D.near||k!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,k=D.far),D.layers.mask=Z.layers.mask|6,v.layers.mask=D.layers.mask&3,y.layers.mask=D.layers.mask&5;let Ot=Z.parent,At=D.cameras;Rt(D,Ot);for(let Zt=0;Zt<At.length;Zt++)Rt(At[Zt],Ot);At.length===2?dt(D,v,y):D.projectionMatrix.copy(v.projectionMatrix),qt(Z,D,Ot)};function qt(Z,Q,mt){mt===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=No*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Z){return d[Z]};let oe=null;function fe(Z,Q){if(h=Q.getViewerPose(l||o),m=Q,h!==null){let mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Ot=!1;mt.length!==D.cameras.length&&(D.cameras.length=0,Ot=!0);for(let U=0;U<mt.length;U++){let pe=mt[U],zt=null;if(p!==null)zt=p.getViewport(pe);else{let yt=u.getViewSubImage(f,pe);zt=yt.viewport,U===0&&(t.setRenderTargetTextures(_,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(_))}let Ut=C[U];Ut===void 0&&(Ut=new qe,Ut.layers.enable(U),Ut.viewport=new ce,C[U]=Ut),Ut.matrix.fromArray(pe.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(pe.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(zt.x,zt.y,zt.width,zt.height),U===0&&(D.matrix.copy(Ut.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ot===!0&&D.cameras.push(Ut)}let At=i.enabledFeatures;if(At&&At.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let U=u.getDepthInformation(mt[0]);U&&U.isValid&&U.texture&&g.init(U,i.renderState)}if(At&&At.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let U=0;U<mt.length;U++){let pe=mt[U].camera;if(pe){let zt=d[pe];zt||(zt=new _r,d[pe]=zt);let Ut=u.getCameraImage(pe);zt.sourceTexture=Ut}}}}for(let mt=0;mt<T.length;mt++){let Ot=E[mt],At=T[mt];Ot!==null&&At!==void 0&&At.update(Ot,Q,l||o)}oe&&oe(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let Qt=new pd;Qt.setAnimationLoop(fe),this.setAnimationLoop=function(Z){oe=Z},this.dispose=function(){}}},Xi=new Oe,s_=new Xt;function r_(s,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Ll(s)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,M,b,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,_)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?c(g,d,M,b):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Ie&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Ie&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let M=t.get(d),b=M.envMap,_=M.envMapRotation;b&&(g.envMap.value=b,Xi.copy(_),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),g.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(Xi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,M,b){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*M,g.scale.value=b*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,M){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ie&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){let M=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function o_(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){let _=b.program;n.uniformBlockBinding(M,_)}function l(M,b){let _=i[M.id];_===void 0&&(m(M),_=h(M),i[M.id]=_,M.addEventListener("dispose",g));let T=b.program;n.updateUBOMapping(M,T);let E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function h(M){let b=u();M.__bindingPointIndex=b;let _=s.createBuffer(),T=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let b=i[M.id],_=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let E=0,A=_.length;E<A;E++){let P=Array.isArray(_[E])?_[E]:[_[E]];for(let v=0,y=P.length;v<y;v++){let C=P[v];if(p(C,E,v,T)===!0){let D=C.__offset,L=Array.isArray(C.value)?C.value:[C.value],k=0;for(let G=0;G<L.length;G++){let V=L[G],j=x(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,D+k,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,k),k+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,b,_,T){let E=M.value,A=b+"_"+_;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{let P=T[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return T[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function m(M){let b=M.uniforms,_=0,T=16;for(let A=0,P=b.length;A<P;A++){let v=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,C=v.length;y<C;y++){let D=v[y],L=Array.isArray(D.value)?D.value:[D.value];for(let k=0,G=L.length;k<G;k++){let V=L[k],j=x(V),q=_%T,st=q%j.boundary,dt=q+st;_+=st,dt!==0&&T-dt<j.storage&&(_+=T-dt),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=j.storage}}}let E=_%T;return E>0&&(_+=T-E),M.__size=_,M.__cache={},this}function x(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function g(M){let b=M.target;b.removeEventListener("dispose",g);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function d(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:d}}var ec=class{constructor(t={}){let{canvas:e=Ou(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,d=null,M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,T=!1;this._outputColorSpace=Ke;let E=0,A=0,P=null,v=-1,y=null,C=new ce,D=new ce,L=null,k=new Et(0),G=0,V=e.width,j=e.height,q=1,st=null,dt=null,Rt=new ce(0,0,V,j),qt=new ce(0,0,V,j),oe=!1,fe=new _s,Qt=!1,Z=!1,Q=new Xt,mt=new R,Ot=new ce,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function Ge(){return P===null?q:1}let U=n;function pe(w,O){return e.getContext(w,O)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),U===null){let O="webgl2";if(U=pe(O,w),U===null)throw pe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let zt,Ut,yt,me,vt,Gt,Ue,Se,I,S,z,$,K,Y,Tt,rt,Mt,bt,nt,ht,Dt,St,ct,Vt;function N(){zt=new wg(U),zt.init(),St=new e_(U,zt),Ut=new xg(U,zt,t,St),yt=new Qx(U,zt),Ut.reversedDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),me=new Ag(U),vt=new zx,Gt=new t_(U,zt,yt,vt,Ut,St,me),Ue=new yg(_),Se=new Sg(_),I=new Dp(U),ct=new mg(U,I),S=new Eg(U,I,me,ct),z=new Cg(U,S,I,me),nt=new Rg(U,Ut,Gt),rt=new _g(vt),$=new kx(_,Ue,Se,zt,Ut,ct,rt),K=new r_(_,vt),Y=new Vx,Tt=new $x(zt),bt=new pg(_,Ue,Se,yt,z,p,c),Mt=new Kx(_,z,Ut),Vt=new o_(U,me,Ut,yt),ht=new gg(U,zt,me),Dt=new Tg(U,zt,me),me.programs=$.programs,_.capabilities=Ut,_.extensions=zt,_.properties=vt,_.renderLists=Y,_.shadowMap=Mt,_.state=yt,_.info=me}N();let it=new Jl(_,U);this.xr=it,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(V,j,!1))},this.getSize=function(w){return w.set(V,j)},this.setSize=function(w,O,W=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,j=O,e.width=Math.floor(w*q),e.height=Math.floor(O*q),W===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(V*q,j*q).floor()},this.setDrawingBufferSize=function(w,O,W){V=w,j=O,q=W,e.width=Math.floor(w*W),e.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(Rt)},this.setViewport=function(w,O,W,X){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,O,W,X),yt.viewport(C.copy(Rt).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(qt)},this.setScissor=function(w,O,W,X){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,O,W,X),yt.scissor(D.copy(qt).multiplyScalar(q).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){yt.setScissorTest(oe=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,W=!0){let X=0;if(w){let B=!1;if(P!==null){let et=P.texture.format;B=et===ba||et===Ma||et===va}if(B){let et=P.texture.type,lt=et===In||et===bi||et===Es||et===As||et===_a||et===ya,gt=bt.getClearColor(),ft=bt.getClearAlpha(),Lt=gt.r,Nt=gt.g,Ct=gt.b;lt?(m[0]=Lt,m[1]=Nt,m[2]=Ct,m[3]=ft,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=Lt,x[1]=Nt,x[2]=Ct,x[3]=ft,U.clearBufferiv(U.COLOR,0,x))}else X|=U.COLOR_BUFFER_BIT}O&&(X|=U.DEPTH_BUFFER_BIT),W&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),bt.dispose(),Y.dispose(),Tt.dispose(),vt.dispose(),Ue.dispose(),Se.dispose(),z.dispose(),ct.dispose(),Vt.dispose(),$.dispose(),it.dispose(),it.removeEventListener("sessionstart",Fn),it.removeEventListener("sessionend",_h),Ti.stop()};function ot(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let w=me.autoReset,O=Mt.enabled,W=Mt.autoUpdate,X=Mt.needsUpdate,B=Mt.type;N(),me.autoReset=w,Mt.enabled=O,Mt.autoUpdate=W,Mt.needsUpdate=X,Mt.type=B}function tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function J(w){let O=w.target;O.removeEventListener("dispose",J),_t(O)}function _t(w){Bt(w),vt.remove(w)}function Bt(w){let O=vt.get(w).programs;O!==void 0&&(O.forEach(function(W){$.releaseProgram(W)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,X,B,et){O===null&&(O=At);let lt=B.isMesh&&B.matrixWorld.determinant()<0,gt=xf(w,O,W,X,B);yt.setMaterial(X,lt);let ft=W.index,Lt=1;if(X.wireframe===!0){if(ft=S.getWireframeAttribute(W),ft===void 0)return;Lt=2}let Nt=W.drawRange,Ct=W.attributes.position,$t=Nt.start*Lt,se=(Nt.start+Nt.count)*Lt;et!==null&&($t=Math.max($t,et.start*Lt),se=Math.min(se,(et.start+et.count)*Lt)),ft!==null?($t=Math.max($t,0),se=Math.min(se,ft.count)):Ct!=null&&($t=Math.max($t,0),se=Math.min(se,Ct.count));let ve=se-$t;if(ve<0||ve===1/0)return;ct.setup(B,X,gt,W,ft);let he,re=ht;if(ft!==null&&(he=I.get(ft),re=Dt,re.setIndex(he)),B.isMesh)X.wireframe===!0?(yt.setLineWidth(X.wireframeLinewidth*Ge()),re.setMode(U.LINES)):re.setMode(U.TRIANGLES);else if(B.isLine){let Pt=X.linewidth;Pt===void 0&&(Pt=1),yt.setLineWidth(Pt*Ge()),B.isLineSegments?re.setMode(U.LINES):B.isLineLoop?re.setMode(U.LINE_LOOP):re.setMode(U.LINE_STRIP)}else B.isPoints?re.setMode(U.POINTS):B.isSprite&&re.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))re.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Pt=B._multiDrawStarts,ge=B._multiDrawCounts,Kt=B._multiDrawCount,hn=ft?I.get(ft).bytesPerElement:1,ji=vt.get(X).currentProgram.getUniforms();for(let un=0;un<Kt;un++)ji.setValue(U,"_gl_DrawID",un),re.render(Pt[un]/hn,ge[un])}else if(B.isInstancedMesh)re.renderInstances($t,ve,B.count);else if(W.isInstancedBufferGeometry){let Pt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ge=Math.min(W.instanceCount,Pt);re.renderInstances($t,ve,ge)}else re.render($t,ve)};function ae(w,O,W){w.transparent===!0&&w.side===an&&w.forceSinglePass===!1?(w.side=Ie,w.needsUpdate=!0,ro(w,O,W),w.side=Cn,w.needsUpdate=!0,ro(w,O,W),w.side=an):ro(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),d=Tt.get(W),d.init(O),b.push(d),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),w!==W&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();let X=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let et=B.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){let gt=et[lt];ae(gt,W,B),X.add(gt)}else ae(et,W,B),X.add(et)}),d=b.pop(),X},this.compileAsync=function(w,O,W=null){let X=this.compile(w,O,W);return new Promise(B=>{function et(){if(X.forEach(function(lt){vt.get(lt).currentProgram.isReady()&&X.delete(lt)}),X.size===0){B(w);return}setTimeout(et,10)}zt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let te=null;function Xn(w){te&&te(w)}function Fn(){Ti.stop()}function _h(){Ti.start()}let Ti=new pd;Ti.setAnimationLoop(Xn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(w){te=w,it.setAnimationLoop(w),w===null?Ti.stop():Ti.start()},it.addEventListener("sessionstart",Fn),it.addEventListener("sessionend",_h),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(O),O=it.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,O,P),d=Tt.get(w,b.length),d.init(O),b.push(d),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),fe.setFromProjectionMatrix(Q,Rn,O.reversedDepth),Z=this.localClippingEnabled,Qt=rt.init(this.clippingPlanes,Z),g=Y.get(w,M.length),g.init(),M.push(g),it.enabled===!0&&it.isPresenting===!0){let et=_.xr.getDepthSensingMesh();et!==null&&Ac(et,O,-1/0,_.sortObjects)}Ac(w,O,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(st,dt),Zt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Zt&&bt.addToRenderList(g,w),this.info.render.frame++,Qt===!0&&rt.beginShadows();let W=d.state.shadowsArray;Mt.render(W,w,O),Qt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,B=g.transmissive;if(d.setupLights(),O.isArrayCamera){let et=O.cameras;if(B.length>0)for(let lt=0,gt=et.length;lt<gt;lt++){let ft=et[lt];vh(X,B,w,ft)}Zt&&bt.render(w);for(let lt=0,gt=et.length;lt<gt;lt++){let ft=et[lt];yh(g,w,ft,ft.viewport)}}else B.length>0&&vh(X,B,w,O),Zt&&bt.render(w),yh(g,w,O);P!==null&&A===0&&(Gt.updateMultisampleRenderTarget(P),Gt.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,O),ct.resetDefaultState(),v=-1,y=null,b.pop(),b.length>0?(d=b[b.length-1],Qt===!0&&rt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Ac(w,O,W,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||fe.intersectsSprite(w)){X&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);let lt=z.update(w),gt=w.material;gt.visible&&g.push(w,lt,gt,W,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||fe.intersectsObject(w))){let lt=z.update(w),gt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ot.copy(lt.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(gt)){let ft=lt.groups;for(let Lt=0,Nt=ft.length;Lt<Nt;Lt++){let Ct=ft[Lt],$t=gt[Ct.materialIndex];$t&&$t.visible&&g.push(w,lt,$t,W,Ot.z,Ct)}}else gt.visible&&g.push(w,lt,gt,W,Ot.z,null)}}let et=w.children;for(let lt=0,gt=et.length;lt<gt;lt++)Ac(et[lt],O,W,X)}function yh(w,O,W,X){let B=w.opaque,et=w.transmissive,lt=w.transparent;d.setupLightsView(W),Qt===!0&&rt.setGlobalState(_.clippingPlanes,W),X&&yt.viewport(C.copy(X)),B.length>0&&so(B,O,W),et.length>0&&so(et,O,W),lt.length>0&&so(lt,O,W),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function vh(w,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new Bn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Ts:In,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let et=d.state.transmissionRenderTarget[X.id],lt=X.viewport||C;et.setSize(lt.z*_.transmissionResolutionScale,lt.w*_.transmissionResolutionScale);let gt=_.getRenderTarget(),ft=_.getActiveCubeFace(),Lt=_.getActiveMipmapLevel();_.setRenderTarget(et),_.getClearColor(k),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),Zt&&bt.render(W);let Nt=_.toneMapping;_.toneMapping=ei;let Ct=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),Qt===!0&&rt.setGlobalState(_.clippingPlanes,X),so(w,W,X),Gt.updateMultisampleRenderTarget(et),Gt.updateRenderTargetMipmap(et),zt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let se=0,ve=O.length;se<ve;se++){let he=O[se],re=he.object,Pt=he.geometry,ge=he.material,Kt=he.group;if(ge.side===an&&re.layers.test(X.layers)){let hn=ge.side;ge.side=Ie,ge.needsUpdate=!0,Mh(re,W,X,Pt,ge,Kt),ge.side=hn,ge.needsUpdate=!0,$t=!0}}$t===!0&&(Gt.updateMultisampleRenderTarget(et),Gt.updateRenderTargetMipmap(et))}_.setRenderTarget(gt,ft,Lt),_.setClearColor(k,G),Ct!==void 0&&(X.viewport=Ct),_.toneMapping=Nt}function so(w,O,W){let X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,et=w.length;B<et;B++){let lt=w[B],gt=lt.object,ft=lt.geometry,Lt=lt.group,Nt=lt.material;Nt.allowOverride===!0&&X!==null&&(Nt=X),gt.layers.test(W.layers)&&Mh(gt,O,W,ft,Nt,Lt)}}function Mh(w,O,W,X,B,et){w.onBeforeRender(_,O,W,X,B,et),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(_,O,W,X,w,et),B.transparent===!0&&B.side===an&&B.forceSinglePass===!1?(B.side=Ie,B.needsUpdate=!0,_.renderBufferDirect(W,O,X,B,w,et),B.side=Cn,B.needsUpdate=!0,_.renderBufferDirect(W,O,X,B,w,et),B.side=an):_.renderBufferDirect(W,O,X,B,w,et),w.onAfterRender(_,O,W,X,B,et)}function ro(w,O,W){O.isScene!==!0&&(O=At);let X=vt.get(w),B=d.state.lights,et=d.state.shadowsArray,lt=B.state.version,gt=$.getParameters(w,B.state,et,O,W),ft=$.getProgramCacheKey(gt),Lt=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?Se:Ue).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",J),Lt=new Map,X.programs=Lt);let Nt=Lt.get(ft);if(Nt!==void 0){if(X.currentProgram===Nt&&X.lightsStateVersion===lt)return Sh(w,gt),Nt}else gt.uniforms=$.getUniforms(w),w.onBeforeCompile(gt,_),Nt=$.acquireProgram(gt,ft),Lt.set(ft,Nt),X.uniforms=gt.uniforms;let Ct=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ct.clippingPlanes=rt.uniform),Sh(w,gt),X.needsLights=yf(w),X.lightsStateVersion=lt,X.needsLights&&(Ct.ambientLightColor.value=B.state.ambient,Ct.lightProbe.value=B.state.probe,Ct.directionalLights.value=B.state.directional,Ct.directionalLightShadows.value=B.state.directionalShadow,Ct.spotLights.value=B.state.spot,Ct.spotLightShadows.value=B.state.spotShadow,Ct.rectAreaLights.value=B.state.rectArea,Ct.ltc_1.value=B.state.rectAreaLTC1,Ct.ltc_2.value=B.state.rectAreaLTC2,Ct.pointLights.value=B.state.point,Ct.pointLightShadows.value=B.state.pointShadow,Ct.hemisphereLights.value=B.state.hemi,Ct.directionalShadowMap.value=B.state.directionalShadowMap,Ct.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ct.spotShadowMap.value=B.state.spotShadowMap,Ct.spotLightMatrix.value=B.state.spotLightMatrix,Ct.spotLightMap.value=B.state.spotLightMap,Ct.pointShadowMap.value=B.state.pointShadowMap,Ct.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Nt,X.uniformsList=null,Nt}function bh(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Us.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Sh(w,O){let W=vt.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function xf(w,O,W,X,B){O.isScene!==!0&&(O=At),Gt.resetTextureUnits();let et=O.fog,lt=X.isMeshStandardMaterial?O.environment:null,gt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ni,ft=(X.isMeshStandardMaterial?Se:Ue).get(X.envMap||lt),Lt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Nt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ct=!!W.morphAttributes.position,$t=!!W.morphAttributes.normal,se=!!W.morphAttributes.color,ve=ei;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=_.toneMapping);let he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=he!==void 0?he.length:0,Pt=vt.get(X),ge=d.state.lights;if(Qt===!0&&(Z===!0||w!==y)){let Je=w===y&&X.id===v;rt.setState(X,w,Je)}let Kt=!1;X.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==ge.state.version||Pt.outputColorSpace!==gt||B.isBatchedMesh&&Pt.batching===!1||!B.isBatchedMesh&&Pt.batching===!0||B.isBatchedMesh&&Pt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pt.instancing===!1||!B.isInstancedMesh&&Pt.instancing===!0||B.isSkinnedMesh&&Pt.skinning===!1||!B.isSkinnedMesh&&Pt.skinning===!0||B.isInstancedMesh&&Pt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pt.instancingMorph===!1&&B.morphTexture!==null||Pt.envMap!==ft||X.fog===!0&&Pt.fog!==et||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==rt.numPlanes||Pt.numIntersection!==rt.numIntersection)||Pt.vertexAlphas!==Lt||Pt.vertexTangents!==Nt||Pt.morphTargets!==Ct||Pt.morphNormals!==$t||Pt.morphColors!==se||Pt.toneMapping!==ve||Pt.morphTargetsCount!==re)&&(Kt=!0):(Kt=!0,Pt.__version=X.version);let hn=Pt.currentProgram;Kt===!0&&(hn=ro(X,O,B));let ji=!1,un=!1,Ys=!1,xe=hn.getUniforms(),_n=Pt.uniforms;if(yt.useProgram(hn.program)&&(ji=!0,un=!0,Ys=!0),X.id!==v&&(v=X.id,un=!0),ji||y!==w){yt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xe.setValue(U,"projectionMatrix",w.projectionMatrix),xe.setValue(U,"viewMatrix",w.matrixWorldInverse);let sn=xe.map.cameraPosition;sn!==void 0&&sn.setValue(U,mt.setFromMatrixPosition(w.matrixWorld)),Ut.logarithmicDepthBuffer&&xe.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,un=!0,Ys=!0)}if(B.isSkinnedMesh){xe.setOptional(U,B,"bindMatrix"),xe.setOptional(U,B,"bindMatrixInverse");let Je=B.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),xe.setValue(U,"boneTexture",Je.boneTexture,Gt))}B.isBatchedMesh&&(xe.setOptional(U,B,"batchingTexture"),xe.setValue(U,"batchingTexture",B._matricesTexture,Gt),xe.setOptional(U,B,"batchingIdTexture"),xe.setValue(U,"batchingIdTexture",B._indirectTexture,Gt),xe.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&xe.setValue(U,"batchingColorTexture",B._colorsTexture,Gt));let yn=W.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&nt.update(B,W,hn),(un||Pt.receiveShadow!==B.receiveShadow)&&(Pt.receiveShadow=B.receiveShadow,xe.setValue(U,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(_n.envMap.value=ft,_n.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(_n.envMapIntensity.value=O.environmentIntensity),un&&(xe.setValue(U,"toneMappingExposure",_.toneMappingExposure),Pt.needsLights&&_f(_n,Ys),et&&X.fog===!0&&K.refreshFogUniforms(_n,et),K.refreshMaterialUniforms(_n,X,q,j,d.state.transmissionRenderTarget[w.id]),Us.upload(U,bh(Pt),_n,Gt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Us.upload(U,bh(Pt),_n,Gt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(U,"center",B.center),xe.setValue(U,"modelViewMatrix",B.modelViewMatrix),xe.setValue(U,"normalMatrix",B.normalMatrix),xe.setValue(U,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Je=X.uniformsGroups;for(let sn=0,Rc=Je.length;sn<Rc;sn++){let Ai=Je[sn];Vt.update(Ai,hn),Vt.bind(Ai,hn)}}return hn}function _f(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function yf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,O,W){let X=vt.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),vt.get(w.texture).__webglTexture=O,vt.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let W=vt.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};let vf=U.createFramebuffer();this.setRenderTarget=function(w,O=0,W=0){P=w,E=O,A=W;let X=!0,B=null,et=!1,lt=!1;if(w){let ft=vt.get(w);if(ft.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(ft.__webglFramebuffer===void 0)Gt.setupRenderTarget(w);else if(ft.__hasExternalTextures)Gt.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ct=w.depthTexture;if(ft.__boundDepthTexture!==Ct){if(Ct!==null&&vt.has(Ct)&&(w.width!==Ct.image.width||w.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(w)}}let Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(lt=!0);let Nt=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?B=Nt[O][W]:B=Nt[O],et=!0):w.samples>0&&Gt.useMultisampledRTT(w)===!1?B=vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?B=Nt[W]:B=Nt,C.copy(w.viewport),D.copy(w.scissor),L=w.scissorTest}else C.copy(Rt).multiplyScalar(q).floor(),D.copy(qt).multiplyScalar(q).floor(),L=oe;if(W!==0&&(B=vf),yt.bindFramebuffer(U.FRAMEBUFFER,B)&&X&&yt.drawBuffers(w,B),yt.viewport(C),yt.scissor(D),yt.setScissorTest(L),et){let ft=vt.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,ft.__webglTexture,W)}else if(lt){let ft=O;for(let Lt=0;Lt<w.textures.length;Lt++){let Nt=vt.get(w.textures[Lt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Lt,Nt.__webglTexture,W,ft)}}else if(w!==null&&W!==0){let ft=vt.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,W)}v=-1},this.readRenderTargetPixels=function(w,O,W,X,B,et,lt,gt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(ft=ft[lt]),ft){yt.bindFramebuffer(U.FRAMEBUFFER,ft);try{let Lt=w.textures[gt],Nt=Lt.format,Ct=Lt.type;if(!Ut.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&W>=0&&W<=w.height-B&&(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt),U.readPixels(O,W,X,B,St.convert(Nt),St.convert(Ct),et))}finally{let Lt=P!==null?vt.get(P).__webglFramebuffer:null;yt.bindFramebuffer(U.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(w,O,W,X,B,et,lt,gt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(ft=ft[lt]),ft)if(O>=0&&O<=w.width-X&&W>=0&&W<=w.height-B){yt.bindFramebuffer(U.FRAMEBUFFER,ft);let Lt=w.textures[gt],Nt=Lt.format,Ct=Lt.type;if(!Ut.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,$t),U.bufferData(U.PIXEL_PACK_BUFFER,et.byteLength,U.STREAM_READ),w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt),U.readPixels(O,W,X,B,St.convert(Nt),St.convert(Ct),0);let se=P!==null?vt.get(P).__webglFramebuffer:null;yt.bindFramebuffer(U.FRAMEBUFFER,se);let ve=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Bu(U,ve,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,$t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,et),U.deleteBuffer($t),U.deleteSync(ve),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,W=0){let X=Math.pow(2,-W),B=Math.floor(w.image.width*X),et=Math.floor(w.image.height*X),lt=O!==null?O.x:0,gt=O!==null?O.y:0;Gt.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,lt,gt,B,et),yt.unbindTexture()};let Mf=U.createFramebuffer(),bf=U.createFramebuffer();this.copyTextureToTexture=function(w,O,W=null,X=null,B=0,et=null){et===null&&(B!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=B,B=0):et=0);let lt,gt,ft,Lt,Nt,Ct,$t,se,ve,he=w.isCompressedTexture?w.mipmaps[et]:w.image;if(W!==null)lt=W.max.x-W.min.x,gt=W.max.y-W.min.y,ft=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Nt=W.min.y,Ct=W.isBox3?W.min.z:0;else{let yn=Math.pow(2,-B);lt=Math.floor(he.width*yn),gt=Math.floor(he.height*yn),w.isDataArrayTexture?ft=he.depth:w.isData3DTexture?ft=Math.floor(he.depth*yn):ft=1,Lt=0,Nt=0,Ct=0}X!==null?($t=X.x,se=X.y,ve=X.z):($t=0,se=0,ve=0);let re=St.convert(O.format),Pt=St.convert(O.type),ge;O.isData3DTexture?(Gt.setTexture3D(O,0),ge=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Gt.setTexture2DArray(O,0),ge=U.TEXTURE_2D_ARRAY):(Gt.setTexture2D(O,0),ge=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Kt=U.getParameter(U.UNPACK_ROW_LENGTH),hn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ji=U.getParameter(U.UNPACK_SKIP_PIXELS),un=U.getParameter(U.UNPACK_SKIP_ROWS),Ys=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Lt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Nt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ct);let xe=w.isDataArrayTexture||w.isData3DTexture,_n=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let yn=vt.get(w),Je=vt.get(O),sn=vt.get(yn.__renderTarget),Rc=vt.get(Je.__renderTarget);yt.bindFramebuffer(U.READ_FRAMEBUFFER,sn.__webglFramebuffer),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Rc.__webglFramebuffer);for(let Ai=0;Ai<ft;Ai++)xe&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vt.get(w).__webglTexture,B,Ct+Ai),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vt.get(O).__webglTexture,et,ve+Ai)),U.blitFramebuffer(Lt,Nt,lt,gt,$t,se,lt,gt,U.DEPTH_BUFFER_BIT,U.NEAREST);yt.bindFramebuffer(U.READ_FRAMEBUFFER,null),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||vt.has(w)){let yn=vt.get(w),Je=vt.get(O);yt.bindFramebuffer(U.READ_FRAMEBUFFER,Mf),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,bf);for(let sn=0;sn<ft;sn++)xe?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yn.__webglTexture,B,Ct+sn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yn.__webglTexture,B),_n?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Je.__webglTexture,et,ve+sn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Je.__webglTexture,et),B!==0?U.blitFramebuffer(Lt,Nt,lt,gt,$t,se,lt,gt,U.COLOR_BUFFER_BIT,U.NEAREST):_n?U.copyTexSubImage3D(ge,et,$t,se,ve+sn,Lt,Nt,lt,gt):U.copyTexSubImage2D(ge,et,$t,se,Lt,Nt,lt,gt);yt.bindFramebuffer(U.READ_FRAMEBUFFER,null),yt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _n?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(ge,et,$t,se,ve,lt,gt,ft,re,Pt,he.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(ge,et,$t,se,ve,lt,gt,ft,re,he.data):U.texSubImage3D(ge,et,$t,se,ve,lt,gt,ft,re,Pt,he):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,et,$t,se,lt,gt,re,Pt,he.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,et,$t,se,he.width,he.height,re,he.data):U.texSubImage2D(U.TEXTURE_2D,et,$t,se,lt,gt,re,Pt,he);U.pixelStorei(U.UNPACK_ROW_LENGTH,Kt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,hn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ji),U.pixelStorei(U.UNPACK_SKIP_ROWS,un),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ys),et===0&&O.generateMipmaps&&U.generateMipmap(ge),yt.unbindTexture()},this.initRenderTarget=function(w){vt.get(w).__webglFramebuffer===void 0&&Gt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Gt.setTextureCube(w,0):w.isData3DTexture?Gt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Gt.setTexture2DArray(w,0):Gt.setTexture2D(w,0),yt.unbindTexture()},this.resetState=function(){E=0,A=0,P=null,yt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var yd=Math.PI*2,It=(s,t,e)=>s<t?t:s>e?e:s,De=(s,t,e)=>s+(t-s)*e;var ke=(s,t,e)=>{let n=It((e-s)/(t-s),0,1);return n*n*(3-2*n)},ze=(s,t,e,n)=>De(s,t,1-Math.exp(-e*n));function Vr(s){return s=(s+Math.PI)%yd,s<0&&(s+=yd),s-Math.PI}function vd(s,t,e,n){return s+Vr(t-s)*(1-Math.exp(-e*n))}function $i(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function tn(s){let t=Math.floor(s),e=s-t,n=r=>{let o=Math.sin(r*127.1+311.7)*43758.5453;return(o-Math.floor(o))*2-1},i=e*e*(3-2*e);return De(n(t),n(t+1),i)}function Gr(s){let t=s.length;return e=>{if(e<=s[0][0])return s[0][1];if(e>=s[t-1][0])return s[t-1][1];let n=0,i=t-1;for(;i-n>1;){let h=n+i>>1;s[h][0]<=e?n=h:i=h}let[r,o]=s[n],[a,c]=s[i],l=(e-r)/(a-r);return o+(c-o)*l*l*(3-2*l)}}var en=-90,Ln=1420,He=1252;var Me=Gr([[-90,17],[0,15.5],[80,14.5],[300,14.5],[430,15.8],[520,15.8],[548,12],[580,9.6],[612,9.3],[652,3.62],[666,3.62],[690,9.6],[724,13.2],[760,14.2],[955,13.6],[1172,13.2],[1196,17],[1224,31],[1262,44],[1420,46]]),nn=Gr([[-90,3],[0,3.2],[36,6.2],[120,7.2],[300,7.6],[440,7.1],[520,7.6],[578,9.6],[652,11.2],[692,10],[732,8.6],[900,9.1],[960,9.6],[1160,10.1],[1186,8.2],[1215,5.8],[1245,4.2],[1300,2],[1420,1.5]]),Bs=Gr([[-90,2.4],[520,2.8],[556,13],[592,19],[700,19],[738,4.2],[1160,3.2],[1196,1.4],[1240,.9],[1420,.9]]),Si=Gr([[-90,0],[70,0],[110,.35],[330,.55],[440,.3],[530,.45],[580,.75],[700,.85],[740,.5],[940,.6],[972,.92],[1166,.92],[1196,.25],[1236,0],[1420,0]]),ic=[{d:-999,name:"\uCD9C\uBC1C \uB098\uB8E8",icon:"dock"},{d:92,name:"\uCCAB \uC5EC\uC6B8",icon:"rapids"},{d:342,name:"\uBC14\uC704 \uC815\uC6D0",icon:"rocks"},{d:440,name:"\uC18C\uC6A9\uB3CC\uC774 \uAD7D\uC774",icon:"whirl"},{d:548,name:"\uC881\uC740 \uD611\uACE1",icon:"canyon"},{d:724,name:"\uB458\uC9F8 \uC5EC\uC6B8",icon:"rapids"},{d:846,name:"\uC18C\uC6A9\uB3CC\uC774 \uAD7D\uC774",icon:"whirl"},{d:952,name:"\uB9C8\uC9C0\uB9C9 \uAE09\uB958",icon:"rapids"},{d:1190,name:"\uAE30\uC2AD",icon:"beach"}];function Ql(s){let t=ic[0];for(let e of ic)s>=e.d&&(t=e);return t}var Yr={d0:640,d1:676,dNarrow:659},Fs=.5,Os=Math.ceil((Ln-en)/Fs)+2,Wr=new Float32Array(Os),Xr=new Float32Array(Os),qr=new Float32Array(Os);function a_(s){let t=1-ke(1120,1215,s),e=ke(-40,40,s);return(.21*Math.sin(s/92+.5)+.1*Math.sin(s/37+1.9)-.04)*t*(.6+.4*e)}(function(){let t=0,e=0;for(let o=0;o<Os;o++){let a=en+o*Fs,c=a_(a);qr[o]=c,Wr[o]=t,Xr[o]=e,t+=Math.sin(c)*Fs,e-=Math.cos(c)*Fs}let n=Math.round((0-en)/Fs),i=Wr[n],r=Xr[n];for(let o=0;o<Os;o++)Wr[o]-=i,Xr[o]-=r})();function Md(s){let t=It((s-en)/Fs,0,Os-1.0001),e=Math.floor(t);return[e,t-e]}function Dn(s){let[t,e]=Md(s);return De(qr[t],qr[t+1],e)}function ne(s,t,e={x:0,z:0}){let[n,i]=Md(t),r=De(Wr[n],Wr[n+1],i),o=De(Xr[n],Xr[n+1],i),a=De(qr[n],qr[n+1],i);return e.x=r+Math.cos(a)*s,e.z=o+Math.sin(a)*s,e}function Zi(s){return He+.0042*s*s}var c_=[{d:104,rocks:[[.4,2.7]]},{d:142,gap:[4.5,13.1]},{d:174,gap:[-3.5,12.9]},{d:207,rocks:[[.6,2.3],[-13.4,1.5],[13.6,1.5]]},{d:240,gap:[5,12.5]},{d:272,gap:[-4,12.5]},{d:302,gap:[1,12.1]},{d:332,gap:[5.5,12.1]},{d:358,gap:[-1.5,11.9]},{d:382,gap:[4,11.7]},{d:406,gap:[-3,11.7]},{d:430,gap:[2,12.1]},{d:459,rocks:[[-14.6,1.7],[12.9,2.1]]},{d:507,gap:[-8.8,11.8]},{d:538,gap:[-2.5,12.1]},{d:592,rocks:[[-4.6,1.5]]},{d:619,rocks:[[4.1,1.45]]},{d:708,rocks:[[.4,2]]},{d:742,gap:[5,12.6]},{d:772,gap:[-2,12.2]},{d:801,gap:[4,12.2]},{d:830,gap:[-3,12.2]},{d:862,rocks:[[-12.8,2],[13.6,1.4]]},{d:911,gap:[7.8,11.8]},{d:941,gap:[1.5,11.8]},{d:968,gap:[-4,11.4]},{d:994,gap:[1,11.4]},{d:1020,gap:[5.5,11.4]},{d:1046,gap:[.5,11.4]},{d:1072,gap:[-5,11.4]},{d:1098,gap:[-.5,11.4]},{d:1124,gap:[4.5,11.4]},{d:1150,gap:[-.5,11.2]},{d:1176,rocks:[[-8.8,2.7],[8.8,2.7]]}],Un=[{u:-1,d:474,R:7.2,capture:4.7,dir:-1},{u:1.6,d:879,R:7.2,capture:4.7,dir:1}];function l_(){let s=$i(90210),t=[],e=(n,i,r)=>{t.push({u:n,d:i,r,h:r*(.75+s()*.6),rot:s()*Math.PI*2,kind:Math.floor(s()*4)})};for(let n of c_){let i=Me(n.d);if(n.rocks){for(let[h,u]of n.rocks)e(h,n.d+(s()-.5)*1.5,u);continue}let[r,o]=n.gap,a=r-o/2,c=r+o/2,l=a;for(;l>-i-.6;){let h=1.45+s()*1.25,u=l-h;e(u,n.d+(s()-.5)*4.5,h),l=u-h-(.6+s()*2.4)}for(l=c;l<i+.6;){let h=1.45+s()*1.25,u=l+h;e(u,n.d+(s()-.5)*4.5,h),l=u+h+(.6+s()*2.4)}}for(let n=120;n<1170;n+=9+s()*14){if(n>560&&n<700)continue;let i=Me(n),r=s()<.5?-1:1,o=.5+s()*.6;e(r*(i-o*.4),n,o)}for(let n=0;n<6;n++){let i=1200+n*8,r=n%2?-1:1,o=Me(i);e(r*(o-2-s()*2),i,.7+s()*.8)}return t.sort((n,i)=>n.d-i.d),t}var Ee=l_();function wi(s,t,e){e.length=0;let n=0,i=Ee.length;for(;n<i;){let r=n+i>>1;Ee[r].d<s?n=r+1:i=r}for(let r=n;r<Ee.length&&Ee[r].d<=t;r++)e.push(r);return e}var jl=[];function bd(s,t,e={u:0,d:0},n=!1){let i=Me(t),r=nn(t),o=It(s/i,-1.3,1.3),a=r*(1-.28*o*o),c=0,l=i-Math.abs(s);l<3.2&&(c-=Math.sign(s)*(3.2-l)*.55),wi(t-14,t+14,jl);for(let h=0;h<jl.length;h++){let u=Ee[jl[h]],f=t-u.d,p=s-u.u,m=u.r+.4,x=f*f+p*p;if(x>9*m*m||x<1e-4)continue;let g=x*x,d=1-ke(4*m*m,9*m*m,x),M=m*m,b=.45*r*d;a+=b*(-M*(f*f-p*p)/g),c+=b*(-2*M*f*p/g)}if(!n)for(let h of Un){let u=s-h.u,f=t-h.d,p=Math.hypot(u,f),m=h.R*1.5;if(p>m||p<.001)continue;let x=h.R*.45,g=(p<x?p/x:x/p)*7.5*(1-ke(h.R,m,p)),d=-f/p*h.dir,M=u/p*h.dir,b=1.6*(1-ke(h.R*.3,m,p)),_=ke(h.R*.5,m,p);a=a*(.15+.85*_)+M*g-f/p*b,c=c*(.15+.85*_)+d*g-u/p*b}return e.u=c,e.d=a,e}function Sd(s=1){let t=Math.ceil((Ln-en)/s)+1,e=new Float32Array(t),n=0;for(let i=0;i<t;i++){e[i]=n;let r=en+i*s;n+=s/Math.max(.6,nn(r))}return{tau:e,step:s,n:t}}var gn={core:{mass:.4,rect:[-1.6,1.6,-2.4,1.4],circles:[[0,-1.15,1.45],[0,.3,1.45]]},L:{mass:.2,rect:[-4,-1.6,-2.2,1.2],circles:[[-2.8,-1.05,1.2],[-2.8,.15,1.2]]},R:{mass:.2,rect:[1.6,4,-2.2,1.2],circles:[[2.8,-1.05,1.2],[2.8,.15,1.2]]},C:{mass:.2,rect:[-1.8,1.8,1.4,3.4],circles:[[-.8,2.4,1],[.8,2.4,1]]},door:{mass:.16,rect:[-.55,.55,-1.05,1.05],circles:[[0,-.45,.62],[0,.45,.62]]}},ii={drag:1.12,angDrag:.9,yawSpring:1,scoop:6.4,stroke:2.4,strokeEvery:.66,restitution:.32,bankK:70};function Ed(s,t){return t?1.9:Math.pow(1/s,.62)}function Td(){return{u:0,d:0,vu:0,vd:0,psi:0,omega:0,roll:0,rollV:0,pitch:0,pitchV:0,heave:0,heaveV:0,sag:0,parts:new Set(["core","L","R","C"]),door:!1,mass:1,inertia:1,circles:[],minU:0,maxU:0,accU:0,accD:0,invuln:0,whirl:null,whirlCooldown:0,scraping:0,squeeze:0,moored:!0,pin:0,pinSide:0,stall:0,ghost:0,aligned:!1}}function rc(s){s.circles.length=0;let t=0;for(let n of s.parts){let i=gn[n];t+=i.mass;for(let[r,o,a]of i.circles)s.circles.push({x:r,z:o,r:a,part:n,m:i.mass/i.circles.length})}s.mass=t;let e=.15;for(let n of s.circles)e+=n.m*(n.x*n.x+n.z*n.z+.5*n.r*n.r);s.inertia=e}function Zr(s,t,e,n){let i=Math.sin(s.psi),r=Math.cos(s.psi),o=-e;return n.u=s.u+r*t+i*o,n.d=s.d-i*t+r*o,n}var ks={u:0,d:0},th={u:0,d:0},sc=[];function Jr(s){let t=1e9,e=-1e9;for(let n of s.circles)Zr(s,n.x,n.z,ks),t=Math.min(t,ks.u-n.r),e=Math.max(e,ks.u+n.r);s.minU=t,s.maxU=e}function Ad(s,t,e,n){let i=s.vu,r=s.vd;if(s.invuln=Math.max(0,s.invuln-t),s.whirlCooldown=Math.max(0,s.whirlCooldown-t),s.moored)s.vu*=.9,s.vd=0,s.omega*=.9;else if(s.whirl)g_(s,t);else{let a=0,c=0,l=0,h=Math.sin(s.psi),u=Math.cos(s.psi);for(let p of s.circles){let m=u*p.x+h*-p.z,x=-h*p.x+u*-p.z,g=s.u+m,d=s.d+x;bd(g,d,th,s.whirlCooldown>0);let M=s.vu+s.omega*x,b=s.vd-s.omega*m,_=(s.door?2.6:ii.drag)*p.m,T=_*(th.u-M),E=_*(th.d-b);a+=T,c+=E,l+=x*T-m*E}s.vu+=a/s.mass*t,s.vd+=c/s.mass*t,s.omega+=l/s.inertia*t,s.omega-=s.omega*ii.angDrag*t,s.door||(s.omega-=Vr(s.psi)*ii.yawSpring*t);let f=Si(s.d);f>.01&&(s.vu+=tn(e*1.7+s.d*.05)*f*1.4*t,s.omega+=tn(e*1.3+40)*f*.5*t),f_(s)}s.u+=s.vu*t,s.d+=s.vd*t,s.psi+=s.omega*t;let o=n.length;x_(s,t,n),h_(s,t,n,o),s.accU=(s.vu-i)/t,s.accD=(s.vd-r)/t,Jr(s),d_(s,t,e)}function h_(s,t,e,n){let i=!1;for(let r=n;r<e.length;r++)e[r].type==="rock"&&(i=!0);if(i?(s.pin=Math.min(1.5,s.pin+t),s.pinCheck=(s.pinCheck||0)-t,(!s.pinSide&&s.pin>.08||s.pinSide&&s.pinCheck<=0)&&(s.pinSide=u_(s),s.pinCheck=.25)):(s.pin=Math.max(0,s.pin-t*.6),s.pin===0&&(s.pinSide=0)),s.vd<1.5&&!s.whirl&&s.pinSide?s.stall=(s.stall||0)+t:s.stall=Math.max(0,(s.stall||0)-t*2),s.pin>.08&&s.pinSide)if(s.aligned)s.vu*=Math.exp(-t*7),s.vd+=5*t,s.omega*=Math.exp(-t*3);else{let r=Math.min(1,(s.pin-.08)*4)+Math.min(1.5,s.stall*.6);s.vu+=s.pinSide*11*r*t,s.omega+=s.pinSide*1.2*Math.min(1,r)*t,s.stall>.8&&(s.vd-=13*Math.min(1,s.stall-.8)*t)}s.stall>2.6&&(s.ghost=1.1,s.stall=0),s.ghost>0&&(s.ghost-=t,s.vu+=(s.pinSide||1)*6*t,s.vd+=3*t)}var wd=[],$r=[];function u_(s){let t=s.u-s.minU+.3,e=s.maxU-s.u+.3;wi(s.d-3,s.d+7,wd),$r.length=0;for(let a of wd){let c=Ee[a];$r.push(c.u-c.r-e,c.u+c.r+t)}let n=Me(s.d+3),i=-n+t,r=n-e,o=a=>{if(a<i||a>r)return!1;for(let c=0;c<$r.length;c+=2)if(a>$r[c]&&a<$r[c+1])return!1;return!0};if(s.aligned=o(s.u),s.aligned)return s.pinSide||(s.u>0?-1:1);for(let a=.25;a<30;a+=.25){let c=o(s.u-a),l=o(s.u+a);if(c&&!l)return-1;if(l&&!c)return 1;if(c&&l)return s.u>0?-1:1}return s.u>0?-1:1}function d_(s,t,e){let n=s.door?2.2:1/Math.max(.4,s.mass),i=Math.sin(s.psi),r=Math.cos(s.psi),o=r*s.accU-i*s.accD,a=i*s.accU+r*s.accD,c=Si(s.d),l=s.door?5.5:3.1+(1-s.mass)*1.6,h=.22,u=c*.05*Math.sin(e*2.1+s.d*.2)+c*.03*tn(e*3.1),f=c*.06*Math.sin(e*2.7+s.d*.31)+.012*Math.sin(e*1.1),p=It(o*.012*n,-.25,.25)+u+s.sag*.6,m=It(-a*.01*n,-.2,.2)+f-s.sag*.4;s.rollV+=(-(l*l)*(s.roll-p)-2*h*l*s.rollV)*t,s.roll+=s.rollV*t,s.pitchV+=(-(l*l)*(s.pitch-m)-2*h*l*s.pitchV)*t,s.pitch+=s.pitchV*t,s.roll=It(s.roll,-.45,.45),s.pitch=It(s.pitch,-.35,.35);let x=c*.14*Math.sin(e*2.4+s.d*.42)+.03*Math.sin(e*1.3),g=4;s.heaveV+=(-(g*g)*(s.heave-x)-2*.3*g*s.heaveV)*t,s.heave+=s.heaveV*t}function Kr(s,t,e=0){let n=s.door?1.6:1/Math.max(.45,s.mass);s.rollV+=t*Math.min(n,2.2),s.pitchV+=e*Math.min(n,2.2)}function f_(s){if(!(s.whirlCooldown>0))for(let t of Un){let e=s.u-t.u,n=s.d-t.d,i=Math.hypot(e,n);if(i<t.capture){let r=Math.atan2(n,e);s.whirl={pool:t,angle:r,travelled:0,radius:i,speed:0,target:p_(r,t.dir),t:0,early:!1};return}}}function p_(s,t){let e=m_(s,t);return e<Math.PI*.75?e+Math.PI*2:e}function m_(s,t){let n=((t>0?-65*Math.PI/180:-115*Math.PI/180)-s)*t;return n=(n%(Math.PI*2)+Math.PI*2)%(Math.PI*2),n}function g_(s,t){let e=s.whirl,n=e.pool;e.t+=t,e.speed=Math.min(2.9,e.speed+t*5.5);let i=e.speed*t;e.angle+=i*n.dir,e.travelled+=i,e.radius+=(n.capture*.62-e.radius)*Math.min(1,t*2.2);let r=n.u+Math.cos(e.angle)*e.radius,o=n.d+Math.sin(e.angle)*e.radius;s.vu=(r-s.u)/t,s.vd=(o-s.d)/t,s.u=r-s.vu*t,s.d=o-s.vd*t,s.omega=-n.dir*e.speed*1.35,e.travelled>=e.target&&eh(s,0,0)}function eh(s,t,e){let n=s.whirl;if(!n)return;let i=n.pool,r=-Math.sin(n.angle)*i.dir,o=Math.cos(n.angle)*i.dir,a=10.5;s.vu=r*a+t,s.vd=Math.max(2.5,o*a)+e,s.omega*=.45,s.whirl=null,s.whirlCooldown=3.2,s.released={t:0,early:n.travelled<n.target-.05}}function x_(s,t,e){let n=Math.sin(s.psi),i=Math.cos(s.psi);wi(s.d-10,s.d+10,sc);let r=0,o=0;s.scraping=Math.max(0,s.scraping-t*3);for(let a of s.circles){let c=i*a.x+n*-a.z,l=-n*a.x+i*-a.z,h=s.u+c,u=s.d+l;for(let m=0;m<sc.length&&!(s.ghost>0);m++){let x=Ee[sc[m]],g=h-x.u,d=u-x.d,M=a.r+x.r*.92,b=g*g+d*d;if(b>=M*M)continue;let _=Math.sqrt(b)||.001,T=g/_,E=d/_,A=M-_;s.u+=T*A,s.d+=E*A,h+=T*A,u+=E*A;let P=s.vu+s.omega*l,v=s.vd-s.omega*c,y=P*T+v*E;if(y<0){let C=c*E-l*T,D=1/s.mass+C*C/s.inertia,L=-(1+ii.restitution)*y/D;s.vu+=L*T/s.mass,s.vd+=L*E/s.mass,s.omega+=-L*C/s.inertia;let k=-E,G=T,V=P*k+v*G,j=It(-V*.25*s.mass,-L*.4,L*.4);s.vu+=j*k/s.mass,s.vd+=j*G/s.mass,s.omega+=-j*(c*G-l*k)/s.inertia,e.push({type:"rock",rock:sc[m],speed:-y,part:a.part,lx:a.x,lz:a.z,nu:T,nd:E})}}let f=Me(u),p=Math.abs(h)+a.r-f;if(p>0){let m=Math.sign(h);m<0?r=Math.max(r,p):o=Math.max(o,p);let g=(s.vu+s.omega*l)*m;s.vu-=m*ii.bankK*p*t,g>0&&(s.vu-=m*g*.5,g>1.6&&e.push({type:"bank",speed:g,part:a.part,lx:a.x,lz:a.z,nu:-m,nd:0})),s.vd-=s.vd*.6*t*Math.min(1,p*2),s.omega+=-m*l*.08*t*p*10,s.scraping=Math.min(1,s.scraping+t*6*Math.min(1,p*3)),p>.95&&(s.u-=m*(p-.95))}}s.squeeze=Math.min(r,o)}function Rd(s,t){let e=1e9;for(let n of s.circles){Zr(s,n.x,n.z,ks);let i=Math.hypot(ks.u-t.u,ks.d-t.d)-n.r-t.r*.92;i<e&&(e=i)}return e}var si={L:{id:"L",name:"\uC88C\uBD09\uC2DD",side:-1,rate:1/25,room:"L",x:-3.15,z:-.95,color:"#e8483b"},C:{id:"C",name:"\uD55C\uAC00\uC6B4",side:0,rate:1/33,room:"C",x:.45,z:2.55,color:"#f2b62c"},R:{id:"R",name:"\uC6B0\uB9D0\uC21C",side:1,rate:1/29,room:"R",x:3.15,z:-.95,color:"#3a7ee6"}},bn=["L","C","R"],Nn={CALM:0,ANNOYED:1,STEAMING:2,SAW:3,SAWING:4},Cd=[.3,.55,.78,1],__=4.8,Ji={fair:{id:"fair",title:"\uC628\uC804\uD55C \uACF5\uB3D9\uBA85\uC758",sub:"\uC14B\uC774\uC11C \uD55C \uC9D1, \uB05D\uAE4C\uC9C0"},wreck:{id:"wreck",title:"\uB108\uB35C\uB108\uB35C \uACF5\uB3D9\uBA85\uC758",sub:"\uBCBD\uC740 \uC5C6\uC5B4\uB3C4 \uC14B\uC740 \uC788\uB2E4"},two:{id:"two",title:"\uB458\uC774\uC11C \uBC18\uBC18",sub:"\uD55C \uBA85\uC740 \uBA3C\uC800 \uC640 \uC788\uC5C8\uB2E4"},alone:{id:"alone",title:"\uC774\uC81C \uC9C4\uC9DC \uB0B4 \uC9D1",sub:"\uB2E8\uB3C5\uBA85\uC758 \uB4F1\uAE30 \uC644\uB8CC"},door:{id:"door",title:"\uBB38\uC9DD \uD55C \uC7A5",sub:"\uADF8\uB798\uB3C4 \uD604\uAD00\uC740 \uB0A8\uC558\uB2E4"}},nh=1/120;function ih(s){return{...si[s],state:"aboard",sulk:0,stage:0,sawing:!1,cut:0,leaving:0,holdTime:0,waitTime:0,dizzy:0,flinch:0,lastStroke:-10}}var oc=class{constructor(){this.reset()}reset(){let t=Td();rc(t),t.d=-4,t.u=0,Jr(t),this.house=t,this.time=0,this.runTime=0,this.state="intro",this.owners={L:ih("L"),C:ih("C"),R:ih("R")},this.paddle={holder:"C",flight:null,queued:null,strokeTimer:1.2,cooldown:0},this.pushes=[],this.events=[],this.contacts=[],this.acc=0,this.timeScale=1,this.slow={t:0,scale:1},this.hp=1,this.lastCatch=-10,this.lastCatchBy=null,this.lastNearMiss=-10,this.scrapeTick=0,this.nearTrack=new Map,this.floaters=[],this.section=Ql(t.d),this.canyon={active:!1,maxSqueeze:0,sideways:!1,slim:!1,done:!1},this.endingId=null,this.failReason=null,this.stats={throws:0,thrills:0,nearMisses:0,hits:0,appeased:0,lastSecondAppease:0,whirlRides:0,whirlEarly:0,canyon:null,lost:[],shattered:!1,overboard:[],time:0}}emit(t,e={}){this.events.push({type:t,...e,time:this.time})}aboard(){return bn.filter(t=>this.owners[t].state==="aboard")}launch(){this.state==="intro"&&(this.state="running",this.house.moored=!1,this.house.vd=1.5,this.emit("launch"))}progress(){return It(this.house.d/He,0,1)}tap(t){if(this.state!=="running")return!1;let e=this.owners[t];if(!e||e.state!=="aboard"||e.leaving>0)return!1;let n=this.paddle;return n.flight?(n.flight.to!==t&&(n.queued=t),!0):n.holder===t?this.aboard().length===1&&n.cooldown<=0?(this.stroke(t,!0,.35),n.cooldown=.85,!0):(this.emit("already",{id:t}),!1):(this.throwTo(t),!0)}throwTo(t){let e=this.paddle,n=e.holder,i=this.owners[n],r=this.owners[t],o=Math.hypot(i.x-r.x,i.z-r.z);e.flight={from:n,to:t,t:0,dur:.15+o*.022},e.holder=null,e.queued=null,this.stats.throws++,this.emit("throw",{from:n,to:t,dur:e.flight.dur})}strokeDir(t){let e=this.house,n=this.owners[t];return n.side!==0?n.side:Math.abs(e.u)<.9?0:-Math.sign(e.u)}fatigue(t){let e=this.owners[t];return Math.max(.3,1-Math.max(0,e.holdTime-1.2)/4.5)}satisfied(t){let e=this.house,n=this.owners[t],i=Me(e.d+6);return n.side<0?e.minU<-i+2.1:n.side>0?e.maxU>i-2.1:Math.abs(e.u)<.9&&Math.abs(e.vu)<1.2}stroke(t,e,n=0){let i=this.house,r=this.strokeDir(t),o=Ed(i.mass,i.door),a=this.owners[t];a.lastStroke=this.time;let c;if(e?c=ii.scoop*(.85+.45*n):c=ii.stroke*this.fatigue(t),r===0)this.pushes.push({du:-i.vu*(e?.85:.5),spin:-i.omega*.7-Vr(i.psi)*(e?1.4:.7),t:.2,T:.2}),Kr(i,(Math.random()-.5)*.25,e?.35:.15);else{let l=r*c*o,h=(i.door,.05);this.pushes.push({du:l,spin:r*h*c*o,t:.18,T:.18});let u=Math.cos(i.psi);Kr(i,r*(e?.95:.42)*u,e?.2:.08)}i.whirl&&e&&(eh(i,r*3.2,0),this.stats.whirlEarly++,this.emit("whirlExit",{early:!0})),this.emit("stroke",{id:t,dir:r,big:e,power:e?1:.5*this.fatigue(t)})}update(t){let e=Math.min(t,.06);this.slow.t>0?(this.slow.t-=e,this.timeScale=this.slow.t>0?this.slow.scale:1):this.timeScale=1,this.acc+=e*this.timeScale;let n=0;for(;this.acc>=nh&&n<12;)this.fixedStep(nh),this.acc-=nh,n++;n>=12&&(this.acc=0)}slowmo(t,e){this.slow.t>0&&this.slow.scale<e||(this.slow.t=t,this.slow.scale=e)}fixedStep(t){this.time+=t;let e=this.house;this.state==="running"&&(this.runTime+=t),this.state==="running"&&this.updatePaddle(t);for(let i=this.pushes.length-1;i>=0;i--){let r=this.pushes[i],o=Math.min(t,r.t)/r.T;e.vu+=r.du*o,e.omega+=r.spin*o,r.t-=t,r.t<=0&&this.pushes.splice(i,1)}let n=!!e.whirl;this.contacts.length=0,this.state==="arrived"?this.stepArrived(t):this.state!=="failed"?Ad(e,t,this.time,this.contacts):(e.vu*=.98,e.vd*=.98,e.u+=e.vu*t,e.d+=e.vd*t),!n&&e.whirl?(this.stats.whirlRides++,this.emit("whirlEnter",{pool:Un.indexOf(e.whirl.pool)})):n&&!e.whirl&&e.released&&!e.released.early&&this.emit("whirlExit",{early:!1}),this.state==="running"&&(this.handleContacts(t),this.updateOwners(t),this.trackNearMisses(),this.trackCanyon(),this.updateSection(),this.checkArrival()),this.updateFloaters(t)}updatePaddle(t){let e=this.paddle;if(e.cooldown=Math.max(0,e.cooldown-t),e.flight){if(e.flight.t+=t,e.flight.t>=e.flight.dur){let i=e.flight.to,r=this.owners[i];if(e.flight=null,r.state!=="aboard"||r.leaving>0){let l=this.aboard().find(h=>!(this.owners[h].leaving>0))||this.aboard()[0];e.holder=l;return}e.holder=i,this.lastCatch=this.time,this.lastCatchBy=i;let o=r.stage,a=r.sawing,c=r.sulk;if(e.queued&&e.queued!==i&&this.owners[e.queued].state==="aboard"){this.emit("catch",{id:i,relay:!0,eager:c}),this.throwTo(e.queued);return}if(this.emit("catch",{id:i,eager:c}),a||o>=Nn.SAW){this.stats.appeased++;let l=a&&r.cut>.55;l&&this.stats.lastSecondAppease++,this.emit("appease",{id:i,sawing:a,last:l}),a&&(r.sawing=!1,r.sulk=.72)}this.stroke(i,!0,c),e.strokeTimer=.62}return}if(!e.holder)return;if(this.owners[e.holder].state!=="aboard"){e.holder=this.aboard()[0]||null;return}e.strokeTimer-=t,e.strokeTimer<=0&&(e.strokeTimer=ii.strokeEvery*(this.house.door?.85:1),this.satisfied(e.holder)?this.emit("rest",{id:e.holder}):this.stroke(e.holder,!1))}updateOwners(t){let e=this.house,n=It((this.runTime-4)/10,0,1),i=!!e.whirl;for(let r of bn){let o=this.owners[r];if(o.state!=="aboard")continue;o.flinch=Math.max(0,o.flinch-t),i?o.dizzy=Math.min(2.5,o.dizzy+t*2):o.dizzy=Math.max(0,o.dizzy-t*.8);let a=this.paddle.holder===r,c=this.paddle.flight&&this.paddle.flight.to===r;if(a)o.sulk=Math.max(0,o.sulk-t/4.6),o.holdTime+=t,o.waitTime=0;else if(!c&&this.aboard().length>1){let h=(.3+.7*n)*(i?.4:1);o.sulk=Math.min(1,o.sulk+o.rate*h*t),o.waitTime+=t,o.holdTime=0}let l=0;for(let h=0;h<Cd.length;h++)o.sulk>=Cd[h]-(h===3?1e-6:0)&&(l=h+1);if(o.sawing?l=Nn.SAWING:l===Nn.SAWING&&(o.sawing=!0,this.emit("sawStart",{id:r,resume:o.cut>.02})),l!==o.stage){let h=l>o.stage;o.stage=l,this.emit("stage",{id:r,stage:l,up:h})}o.leaving>0?(o.leaving-=t,o.leaving<=0&&this.detach(r)):o.sawing&&!c&&!i&&(o.cut+=t/__,o.cut>=1&&(o.cut=1,o.leaving=.75,this.slowmo(.9,.35),this.emit("cutDone",{id:r})))}}detach(t){let e=this.house,n=this.owners[t];n.state="gone",n.sawing=!1,n.cut=1,this.paddle.queued===t&&(this.paddle.queued=null);let i=n.room,r=gn[i],o=(r.rect[0]+r.rect[1])/2,a=(r.rect[2]+r.rect[3])/2,c=Zr(e,o,a,{u:0,d:0});e.parts.delete(i),rc(e),Jr(e),this.floaters.push({kind:"room",id:t,part:i,u:c.u,d:c.d,psi:e.psi,vu:e.vu,vd:e.vd,omega:0,t:0,lx:o,lz:a}),this.stats.lost.push({id:t,d:Math.round(e.d)}),Kr(e,-n.side*.6,.3),this.emit("detach",{id:t,part:i,d:e.d})}handleContacts(t){let e=this.house,n=null;for(let i of this.contacts){if(i.type==="rock"){let r=this.nearTrack.get(i.rock);r?r.hit=!0:this.nearTrack.set(i.rock,{min:-1,hit:!0,fired:!0})}(!n||i.speed>n.speed)&&(n=i)}if(n&&e.invuln<=0&&n.speed>.9){if(e.door){if(n.type!=="rock")return;e.invuln=1.2,this.stats.hits++,this.hp-=.34,this.emit("hit",{strength:.8,part:"door",lx:0,lz:0,kind:"rock",hp:this.hp,door:!0}),this.hp<=.01&&this.fail("door");return}let i=Math.pow(e.mass,-.85)*(e.pin>.3?.35:1),r=n.type==="rock"?It((n.speed-.4)*3.2,5,15):It((n.speed-1)*3,3,10),o=r*i/100;this.hp-=o,e.invuln=.65,this.stats.hits++;let a=It(r/15,.25,1);Kr(e,n.nu*1.1*a*Math.cos(e.psi),-.9*a);for(let c of this.aboard())this.owners[c].flinch=.6;this.emit("hit",{strength:a,part:n.part,lx:n.lx,lz:n.lz,kind:n.type,hp:this.hp}),this.hp<=0&&this.shatter();return}if(e.scraping>.3&&!e.door){let i=Math.pow(e.mass,-.85);this.hp-=.04*e.scraping*i*t,this.scrapeTick-=t,this.scrapeTick<=0&&(this.scrapeTick=.42,this.emit("scrape",{intensity:e.scraping,hp:this.hp})),this.hp<=0&&this.shatter()}}shatter(){let t=this.house;if(t.door)return;let e=this.paddle,n=e.holder||e.flight&&e.flight.to||this.aboard()[0],i=this.aboard().filter(a=>a!==n);e.flight=null,e.queued=null,e.holder=n;for(let a of i){let c=this.owners[a];c.state="overboard",c.sawing=!1;let l=Zr(t,c.x,c.z,{u:0,d:0});this.floaters.push({kind:"swimmer",id:a,u:l.u,d:l.d,psi:t.psi,vu:t.vu+(Math.random()-.5)*4,vd:t.vd,omega:(Math.random()-.5)*2,t:0}),this.stats.overboard.push(a)}let r=[...t.parts];t.whirl&&(t.whirl=null),t.parts=new Set(["door"]),t.door=!0,rc(t),Jr(t),t.invuln=1.6,t.omega*=.3,this.hp=1,this.stats.shattered=!0;let o=this.owners[n];o.sulk=0,o.sawing=!1,this.slowmo(1.1,.28),this.emit("shatter",{rider:n,overboard:i,parts:r})}fail(t){this.state==="running"&&(this.state="failed",this.failReason=t,this.stats.time=this.runTime,this.slowmo(1.4,.3),this.emit("fail",{reason:t}))}trackNearMisses(){let t=this.house,e=wi(t.d-12,t.d+14,this._near||(this._near=[]));for(let n of e){let i=Ee[n],r=this.nearTrack.get(n);if(r||(r={min:1e9,hit:!1,fired:!1},this.nearTrack.set(n,r)),r.fired)continue;let o=Rd(t,i);if(o<r.min&&(r.min=o),i.d<t.d&&!r.hit&&r.min<1.15&&i.r>1){if(r.fired=!0,this.time-this.lastNearMiss<.7)continue;this.lastNearMiss=this.time;let a=this.time-this.lastCatch<1.9;this.stats.nearMisses++,a&&(this.stats.thrills++,this.slowmo(.45,.32)),this.emit("nearMiss",{thrill:a,rock:n,by:this.lastCatchBy,clearance:r.min})}}if(this.nearTrack.size>60)for(let n of this.nearTrack.keys())Ee[n].d<t.d-20&&this.nearTrack.delete(n)}trackCanyon(){let t=this.house,e=this.canyon;if(!e.done){if(t.d>Yr.d0&&t.d<Yr.d1)e.active||(e.active=!0,this.emit("canyonGate")),e.maxSqueeze=Math.max(e.maxSqueeze,t.squeeze),Math.abs(t.d-Yr.dNarrow)<3&&(Math.abs(Math.sin(t.psi))>.55&&(e.sideways=!0),(!t.parts.has("L")||!t.parts.has("R")||t.door)&&(e.slim=!0));else if(e.active&&t.d>=Yr.d1){e.done=!0;let n="clean";e.maxSqueeze>.05?n="squeeze":e.sideways?n="sideways":e.slim&&(n="slim"),this.stats.canyon=n,this.emit("canyonPassed",{method:n})}}}updateSection(){let t=Ql(this.house.d);t!==this.section&&(this.section=t,this.emit("section",{name:t.name,icon:t.icon}))}checkArrival(){let t=this.house;if(t.d+(t.door?1:2.4)>=Zi(t.u)-.3){this.state="arrived",this.stats.time=this.runTime;let n=this.aboard(),i;t.door?i="door":n.length===3?i=this.hp>=.6?"fair":"wreck":n.length===2?i="two":i="alone",this.endingId=i,this.paddle.flight=null,this.emit("arrive",{ending:i,aboard:n})}}stepArrived(t){let e=this.house;e.vd*=Math.exp(-t*2.6),e.vu*=Math.exp(-t*3),e.omega*=Math.exp(-t*3),e.psi+=e.omega*t,e.d+=e.vd*t,e.u+=e.vu*t,e.roll*=Math.exp(-t*2),e.pitch+=(-.05-e.pitch)*Math.min(1,t*2),e.heave+=(.32-e.heave)*Math.min(1,t*1.5)}updateFloaters(t){let e=this.house;for(let n of this.floaters){n.t+=t;let i=nn(n.d);if(n.kind==="room"){let o=si[n.id],a=o.side===0?n.u:o.side*(Me(n.d)-4);n.vu+=((a-n.u)*.25-n.vu)*Math.min(1,t*.8),n.vd+=(i*.42-n.vd)*Math.min(1,t*.9),n.omega+=(.25*(o.side||1)-n.omega)*t*.5}else n.vu*=Math.exp(-t*.6),n.vd+=(i*.5-n.vd)*Math.min(1,t*.7),n.omega*=Math.exp(-t*.3);n.u+=n.vu*t,n.d+=n.vd*t,n.psi+=n.omega*t;let r=Me(n.d);Math.abs(n.u)>r-2&&(n.u=Math.sign(n.u)*(r-2),n.vu*=-.3),n.visible=n.d>e.d-70}}};var jr=128,ac=2048,sh=3.5;function rh(s,t){let e=0;for(let n of Un){let i=Math.hypot(s-n.u,t-n.d);if(i<n.R){let r=1-i/n.R;e-=1.25*r*r}}return e}function y_(){let s=new Uint8Array(jr*ac*4),t=[];for(let n=0;n<ac;n++){let i=en+(n+.5)/ac*(Ln-en),r=Me(i)+sh;wi(i-22,i+8,t);for(let o=0;o<jr;o++){let a=((o+.5)/jr*2-1)*r,c=9,l=0,h=0;for(let f of t){let p=Ee[f],m=a-p.u,x=i-p.d,g=Math.hypot(m,x)-p.r*.95;if(g<c&&(c=g),x>0&&x<22){let d=p.r*.85+x*.3,M=1-x/22,b=1-It(Math.abs(Math.abs(m)-d)/.55,0,1);l=Math.max(l,b*M*Math.min(1,p.r/1.2)),Math.abs(m)<d*.75&&(h=Math.max(h,(1-x/14)*Math.min(1,p.r/1.4)))}x<0&&x>-p.r*1.8&&Math.abs(m)<p.r*1.1&&(h=Math.max(h,.8*(1+x/(p.r*1.8))))}let u=(n*jr+o)*4;s[u]=Math.round(It(c/9,0,1)*255),s[u+1]=Math.round(It(l,0,1)*255),s[u+2]=Math.round(It(h,0,1)*255),s[u+3]=255}}let e=new xi(s,jr,ac,cn);return e.magFilter=on,e.minFilter=on,e.wrapS=An,e.wrapT=An,e.generateMipmaps=!1,e.needsUpdate=!0,e}var v_=`
  #include <common>
  #include <fog_pars_vertex>
  attribute vec2 aUD;
  attribute float aTau;
  attribute float aHW;
  attribute float aRough;
  attribute float aSpeed;
  uniform float uTime;
  uniform vec4 uPools[2];
  varying vec2 vUD;
  varying float vTau;
  varying float vHW;
  varying float vRough;
  varying float vSpeed;
  varying vec3 vWorld;
  void main() {
    vUD = aUD;
    vTau = aTau;
    vHW = aHW;
    vRough = aRough;
    vSpeed = aSpeed;
    vec3 p = position;
    // choppy rapids
    p.y += aRough * 0.16 * sin(aUD.y * 0.9 + uTime * 2.3 + aUD.x * 0.35) * smoothstep(aHW, aHW - 2.5, abs(aUD.x));
    for (int i = 0; i < 2; i++) {
      vec4 pl = uPools[i];
      float r = length(aUD - pl.xy);
      float k = clamp(1.0 - r / pl.z, 0.0, 1.0);
      p.y -= 1.25 * k * k;
    }
    vWorld = p;
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,M_=`
  #include <common>
  #include <fog_pars_fragment>
  uniform float uTime;
  uniform sampler2D uField;
  uniform vec2 uFieldRange; // dMin, dMax
  uniform vec4 uPools[2];
  uniform vec3 uDeep;
  uniform vec3 uMid;
  uniform vec3 uShallow;
  uniform vec3 uFoam;
  uniform vec3 uDark;
  uniform vec4 uHouse; // u, d, radius, active
  varying vec2 vUD;
  varying float vTau;
  varying float vHW;
  varying float vRough;
  varying float vSpeed;
  varying vec3 vWorld;

  float hash1(float n) { return fract(sin(n * 91.345) * 47453.5453); }
  float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash2(i), hash2(i + vec2(1.0, 0.0)), u.x), mix(hash2(i + vec2(0.0, 1.0)), hash2(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  // Foam streak lines that travel with the water (tau = water travel time along the river).
  float streaks(vec2 ud, float tau, float density, float laneW, float seed) {
    float wig = sin(ud.y * 0.23 + floor(ud.x / laneW) * 1.7 + seed) * 0.22;
    float x = ud.x / laneW + wig;
    float lane = floor(x);
    float h1 = hash1(lane * 1.31 + seed);
    float h2 = hash1(lane * 2.17 + seed * 3.1);
    float h3 = hash1(lane * 0.73 + seed * 7.7);
    float laneOn = step(h3, density);
    float across = abs(fract(x) - 0.5 - (h1 - 0.5) * 0.4);
    float prof = 1.0 - 0.28 * pow(clamp(ud.x / max(vHW, 1.0), -1.2, 1.2), 2.0);
    float s = tau / prof * (0.85 + 0.3 * h2) - uTime;
    float seg = fract(s * (0.42 + 0.3 * h1) + h2);
    float duty = mix(0.22, 0.5, h3) * (0.6 + 0.7 * density);
    float taper = smoothstep(0.0, 0.25, seg / duty) * smoothstep(0.0, 0.25, 1.0 - seg / duty);
    float w = (0.06 + 0.045 * density) * taper;
    return laneOn * step(seg, duty) * step(across, w);
  }

  void main() {
    vec2 ud = vUD;
    float hw = vHW;
    float bank = hw - abs(ud.x);
    if (bank < -0.8) discard;
    vec2 fuv = vec2(clamp(ud.x / (hw + ${sh.toFixed(1)}) * 0.5 + 0.5, 0.0, 1.0), (ud.y - uFieldRange.x) / (uFieldRange.y - uFieldRange.x));
    vec4 field = texture2D(uField, fuv);
    float rockDist = field.r * 9.0;
    float wake = field.g;
    float turb = field.b;

    // ----- base colour: big soft toon patches -----
    float n1 = vnoise(vec2(ud.x * 0.16, vTau * 0.55 - uTime * 0.55));
    float n2 = vnoise(vec2(ud.x * 0.5, vTau * 1.7 - uTime * 1.7) + 3.0);
    vec3 col = mix(uDeep, uMid, step(0.62, n1 * 0.65 + n2 * 0.35));
    float shallow = 1.0 - smoothstep(0.0, 3.2, bank);
    col = mix(col, uShallow, step(0.5, shallow + (n2 - 0.5) * 0.4));
    col = mix(col, uMid, smoothstep(2.5, 0.6, rockDist) * 0.6);

    // ----- whirlpools -----
    float poolMask = 0.0;
    for (int i = 0; i < 2; i++) {
      vec4 pl = uPools[i];
      vec2 p = ud - pl.xy;
      float r = length(p);
      if (r < pl.z) {
        float a = atan(p.y, p.x);
        float k = 1.0 - r / pl.z;
        poolMask = max(poolMask, smoothstep(0.0, 0.25, k));
        col = mix(col, uDark, smoothstep(0.35, 1.0, k) * 0.85);
        float spiral = fract(a / 6.2831853 * 3.0 - pl.w * (log(r + 0.6) * 1.6) + uTime * 0.55 * pl.w);
        float arm = step(spiral, 0.1 + 0.08 * k) * step(0.08, k) * step(0.9, r);
        float rim = step(abs(r - pl.z * (0.86 + 0.04 * sin(a * 5.0 + uTime * 3.0 * pl.w))), 0.18);
        col = mix(col, uFoam, max(arm, rim * 0.9));
      }
    }

    // ----- foam -----
    float speedK = clamp((vSpeed - 3.0) / 8.0, 0.0, 1.0);
    float density = clamp(0.12 + 0.35 * speedK + 0.4 * vRough + 0.5 * turb, 0.0, 0.92) * (1.0 - poolMask);
    float foam = streaks(ud, vTau, density, 1.05, 1.0);
    foam = max(foam, streaks(ud + vec2(0.52, 0.0), vTau * 1.07, density * 0.6, 1.6, 7.0));
    // V-wakes behind rocks
    float wakeLine = step(0.55, wake) * step(0.35, fract((vTau - uTime) * 1.3 + ud.x * 0.05));
    foam = max(foam, wakeLine * (1.0 - poolMask));
    // standing waves in rapids (they stay put while the water rushes through)
    float crest = fract(ud.y / 5.2 + 0.25 * sin(ud.x * 0.33 + floor(ud.y / 5.2) * 2.1));
    float wave = step(crest, 0.05 + 0.04 * vRough) * step(0.45, vRough) * step(0.35, vnoise(vec2(ud.x * 0.5, floor(ud.y / 5.2))) + vRough * 0.3);
    foam = max(foam, wave * (1.0 - poolMask));
    // rock collars and ripple rings
    float wob = vnoise(ud * 1.6 + vec2(0.0, -uTime * 2.2));
    float collar = step(rockDist, 0.28 + 0.38 * wob);
    float ring = step(abs(rockDist - (0.75 + 0.35 * sin(uTime * 3.0 + ud.y))), 0.07) * step(0.4, wob);
    foam = max(foam, max(collar, ring));
    // bank lace
    float lace = step(bank, 0.35 + 0.45 * vnoise(vec2(ud.y * 0.6 - uTime * 0.8, ud.x)));
    float laceLine = step(abs(bank - 1.25 - 0.3 * sin(ud.y * 0.5 - uTime * 1.5)), 0.06) * step(0.5, vnoise(vec2(ud.y * 0.3, 1.0)));
    foam = max(foam, max(lace, laceLine) * step(-0.5, bank));
    // glitter
    float glint = step(0.992, vnoise(ud * vec2(2.3, 0.9) + vec2(uTime * 0.7, -uTime * 2.0))) * (1.0 - foam);
    col = mix(col, uFoam, foam);
    col += glint * 0.35;

    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;function Id(s){let t=y_(),e=Sd(1),n=h=>{let u=It((h-en)/e.step,0,e.n-1.001),f=Math.floor(u);return e.tau[f]+(e.tau[f+1]-e.tau[f])*(u-f)},i=Ps.merge([at.fog,{uTime:{value:0},uField:{value:null},uFieldRange:{value:new ut(en,Ln)},uPools:{value:Un.map(h=>new ce(h.u,h.d,h.R,h.dir))},uDeep:{value:new Et("#1557b8")},uMid:{value:new Et("#2370cc")},uShallow:{value:new Et("#3fb6cf")},uFoam:{value:new Et("#f4fbff")},uDark:{value:new Et("#0b2f6e")},uHouse:{value:new ce(0,0,4,0)}}]);i.uField.value=t;let r=new Ce({uniforms:i,vertexShader:v_,fragmentShader:M_,fog:!0}),o=new wt,a=60,c=30,l={x:0,z:0};for(let h=en;h<Ln;h+=a){let u=Math.min(Ln,h+a),f=Math.ceil(u-h)+1,p=[],m=[],x=[],g=[],d=[],M=[];for(let E=0;E<f;E++){let A=h+(u-h)*E/(f-1),P=Me(A),v=P+sh,y=n(A);for(let C=0;C<=c;C++){let D=-v+2*v*C/c;ne(D,A,l),p.push(l.x,0,l.z),m.push(D,A),x.push(y),g.push(P),d.push(Si(A)),M.push(nn(A))}}let b=[];for(let E=0;E<f-1;E++)for(let A=0;A<c;A++){let P=E*(c+1)+A,v=P+c+1;b.push(P,P+1,v,P+1,v+1,v)}let _=new jt;_.setAttribute("position",new Ft(p,3)),_.setAttribute("aUD",new Ft(m,2)),_.setAttribute("aTau",new Ft(x,1)),_.setAttribute("aHW",new Ft(g,1)),_.setAttribute("aRough",new Ft(d,1)),_.setAttribute("aSpeed",new Ft(M,1)),_.setIndex(b),_.computeBoundingSphere(),_.boundingSphere.radius+=2;let T=new kt(_,r);T.renderOrder=-1,o.add(T)}return s.add(o),{group:o,material:r,update(h,u){i.uTime.value=h,u&&i.uHouse.value.set(u.u,u.d,4,1)}}}function zs(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new jt,l=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let p=s[f].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Pd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][f]);let m=Pd(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Pd(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ye(o,e,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,p=h.count;f<p;f++)for(let m=0;m<e;m++){let x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Ld(s,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let M=0,b=a.length;M<b;M++){let _=a[M],T=s.attributes[_];c[_]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);let E=s.morphAttributes[_];E&&(l[_]||(l[_]=[]),E.forEach((A,P)=>{let v=new A.array.constructor(A.count*A.itemSize);l[_][P]=new A.constructor(v,A.itemSize,A.normalized)}))}let p=t*.5,m=Math.log10(1/t),x=Math.pow(10,m),g=p*x;for(let M=0;M<r;M++){let b=n?n.getX(M):M,_="";for(let T=0,E=a.length;T<E;T++){let A=a[T],P=s.getAttribute(A),v=P.itemSize;for(let y=0;y<v;y++)_+=`${~~(P[u[y]](b)*x+g)},`}if(_ in e)h.push(e[_]);else{for(let T=0,E=a.length;T<E;T++){let A=a[T],P=s.getAttribute(A),v=s.morphAttributes[A],y=P.itemSize,C=c[A],D=l[A];for(let L=0;L<y;L++){let k=u[L],G=f[L];if(C[G](o,P[k](b)),v)for(let V=0,j=v.length;V<j;V++)D[V][G](o,v[V][k](b))}}e[_]=o,h.push(o),o++}}let d=s.clone();for(let M in s.attributes){let b=c[M];if(d.setAttribute(M,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),M in l)for(let _=0;_<l[M].length;_++){let T=l[M][_];d.morphAttributes[M][_]=new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)}}return d.setIndex(h),d}var oh=null,ah=null;function lh(s=3){return s===2?(ah||(ah=Dd([110,255])),ah):(oh||(oh=Dd([95,175,255])),oh)}function Dd(s){let t=new xi(new Uint8Array(s),s.length,1,Cs);return t.minFilter=Fe,t.magFilter=Fe,t.generateMipmaps=!1,t.needsUpdate=!0,t}var Ud=new Map;function Ae(s,t={}){let e=`${s}|${t.steps||3}|${t.emissive||""}|${t.transparent?1:0}|${t.side||0}`,n=Ud.get(e);return n||(n=new Qn({color:new Et(s),gradientMap:lh(t.steps||3),transparent:!!t.transparent,side:t.side||Cn}),t.emissive&&(n.emissive=new Et(t.emissive)),Ud.set(e,n)),n}function Hd(s,t={}){return new Qn({color:new Et(s),gradientMap:lh(t.steps||3),transparent:!!t.transparent})}var ch=null;function to(){return ch||(ch=new Qn({vertexColors:!0,gradientMap:lh(3)})),ch}var Nd=new Map;function Qr(s=.035,t="#1b1410"){let e=`${s}|${t}`,n=Nd.get(e);return n||(n=new Ce({uniforms:Ps.merge([at.fog,{uThick:{value:s},uColor:{value:new Et(t)}}]),vertexShader:`
        #include <common>
        #include <fog_pars_vertex>
        uniform float uThick;
        void main() {
          vec4 mvPosition = vec4(position + normal * uThick, 1.0);
          #ifdef USE_INSTANCING
            mvPosition = instanceMatrix * mvPosition;
          #endif
          mvPosition = modelViewMatrix * mvPosition;
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,fragmentShader:`
        #include <common>
        #include <fog_pars_fragment>
        uniform vec3 uColor;
        void main() {
          gl_FragColor = vec4(uColor, 1.0);
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,side:Ie,fog:!0}),Nd.set(e,n)),n}var Fd=new WeakMap;function cc(s){let t=Fd.get(s);return t||(t=new jt,t.setAttribute("position",s.getAttribute("position").clone()),s.index&&t.setIndex(s.index.clone()),t=Ld(t,.001),t.computeVertexNormals(),Fd.set(s,t),t)}function Gn(s,t=.035,e){let n=cc(s.geometry),i=s.isInstancedMesh?new Be(n,Qr(t,e),s.count):new kt(n,Qr(t,e));return s.isInstancedMesh&&(i.instanceMatrix=s.instanceMatrix),i.castShadow=!1,i.renderOrder=s.renderOrder,i.userData.isOutline=!0,i.frustumCulled=s.frustumCulled,s.add(i),i}var Hs=class{constructor(){this.parts=[],this.outlines=[]}add(t,e,n,i=.03){let r=t.index?t.toNonIndexed():t.clone();r.getAttribute("uv")&&r.deleteAttribute("uv"),r.applyMatrix4(n);let o=e&&e.isColor?e.clone():new Et(e),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)c[l*3]=o.r,c[l*3+1]=o.g,c[l*3+2]=o.b;if(r.setAttribute("color",new ye(c,3)),this.parts.push(r),i){let l=cc(t).clone(),h=l.getAttribute("position"),u=l.getAttribute("normal");for(let p=0;p<h.count;p++)h.setXYZ(p,h.getX(p)+u.getX(p)*i,h.getY(p)+u.getY(p)*i,h.getZ(p)+u.getZ(p)*i);l.applyMatrix4(n),l.deleteAttribute("normal");let f=l.index?l.toNonIndexed():l;f.computeVertexNormals(),this.outlines.push(f)}}build(){let t=new wt;if(this.parts.length){let e=zs(this.parts,!1),n=new kt(e,to());t.add(n)}if(this.outlines.length){let e=zs(this.outlines.map(i=>{let r=new jt;return r.setAttribute("position",i.getAttribute("position")),r.setAttribute("normal",i.getAttribute("normal")),r}),!1),n=new kt(e,Qr(0));n.userData.isOutline=!0,t.add(n)}return t}},b_=new Xt,Od=new we,Bd=new Oe,kd=new R,zd=new R;function be(s,t,e,n=0,i=0,r=0,o=1,a=1,c=1){return Bd.set(n,i,r),Od.setFromEuler(Bd),zd.set(s,t,e),kd.set(o,a,c),b_.clone().compose(zd,Od,kd)}function H(s,t,e,n=[0,0,0],i=[0,0,0],r=.03){let o=new kt(s,typeof t=="string"?Ae(t):t);return o.position.set(n[0],n[1],n[2]),o.rotation.set(i[0],i[1],i[2]),r&&Gn(o,r),e&&e.add(o),o}var F={box:(s,t,e)=>new gi(s,t,e),cyl:(s,t,e,n=12)=>new vs(s,t,e,n),sph:(s,t=14,e=10)=>new zn(s,t,e),cap:(s,t,e=6)=>new yr(s,t,e,12),ico:(s,t=0)=>new Bi(s,t),torus:(s,t,e=8,n=16,i=Math.PI*2)=>new Ir(s,t,e,n,i),cone:(s,t,e=12)=>new vr(s,t,e)};function Ze(s,t=[]){s.updateMatrixWorld(!0);let e=new Xt().copy(s.matrixWorld).invert(),n=new Hs,i=[],r=new Set(t),o=c=>{if(!(r.has(c)||c.userData.keep)){if(c.isMesh&&!c.isInstancedMesh&&!c.userData.isOutline&&c!==s){let l=c.material;if(l&&!Array.isArray(l)&&l.isMeshToonMaterial&&!l.map&&!l.transparent&&!l.vertexColors&&c.visible){let u=new Xt().multiplyMatrices(e,c.matrixWorld),f=c.children.find(m=>m.userData.isOutline),p=f?f.material.uniforms.uThick.value:0;n.add(c.geometry,l.color,u,p),i.push(c)}}for(let l of c.children)o(l)}};if(o(s),!i.length)return null;for(let c of i){for(let l of[...c.children])l.userData.isOutline||s.attach(l);c.parent.remove(c)}let a=n.build();return a.userData.baked=!0,s.add(a),a}var Re=s=>new Et(s);function Vd(s){let t=new Dr("#d8eeff","#7a8f5a",1.25);s.add(t);let e=new ws("#fff3dc",2.3);e.position.set(-40,80,30),s.add(e),s.add(e.target);let n=new ws("#bcd8ff",.45);return n.position.set(30,20,-40),s.add(n),{hemi:t,sun:e,fill:n}}function Gd(s){let t=new zn(700,24,16),e=new Ce({side:Ie,depthWrite:!1,uniforms:{uTop:{value:Re("#3d8fe6")},uHorizon:{value:Re("#c4e9ff")},uBottom:{value:Re("#d9f1ff")}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uBottom; varying vec3 vDir;
      void main(){ float h = vDir.y; vec3 c = h > 0.0 ? mix(uHorizon, uTop, smoothstep(0.0, 0.45, h)) : mix(uHorizon, uBottom, smoothstep(0.0, -0.2, h));
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
      }`}),n=new kt(t,e);n.renderOrder=-10,n.frustumCulled=!1,s.add(n);let i=new wt,r=$i(7),o=Ae("#ffffff",{steps:2});for(let a=0;a<16;a++){let c=new wt,l=3+Math.floor(r()*4);for(let u=0;u<l;u++){let f=10+r()*14,p=new kt(F.sph(1,10,8),o);p.scale.set(f*1.4,f*.8,f),p.position.set((u-l/2)*14+r()*6,r()*5,r()*8),c.add(p)}let h=a/16*Math.PI*2+r()*.3;c.position.set(Math.cos(h)*460,70+r()*60,Math.sin(h)*460),c.lookAt(0,c.position.y,0),i.add(c)}return s.add(i),Ze(i),{update(a){n.position.copy(a.position),i.position.set(a.position.x,0,a.position.z)}}}function S_(s){let t=s<1.7;return{under:Re(t?"#d9c28a":"#4b4036"),wet:Re(t?"#e9d49b":"#5e4f40"),cliffA:Re(t?"#f1dca5":"#c48d57"),cliffB:Re(t?"#ead29a":"#a7713f"),cliffC:Re(t?"#e2c88c":"#d9a76a"),soil:Re(t?"#9ccf5c":"#8b5b32"),grassLip:Re("#84cc4f"),grass:Re("#6db944"),grassFar:Re("#58a63b")}}function Wd(s){let t=new wt,e=$i(31337),n=2,i=80,r={x:0,z:0};for(let d of[-1,1])for(let M=en;M<Ln;M+=i){let b=Math.min(Ln,M+i),_=[];for(let y=M;y<=b+.01;y+=n){let C=Bs(y)*(1+.12*tn(y*.07+d*13)),D=Me(y),L=tn(y*.21+d*5),G=[[-1.6,-1.2],[.05+.15*L,.12],[.2+.05*C+.2*L,.4*C],[.35+.08*C+.25*tn(y*.4+d),.75*C],[.55+.11*C,C],[1.4+.11*C,C+.22],[10+.12*C,C+.7+.5*tn(y*.05+d*3)],[46,C+2.8+2.5*tn(y*.02+d*9)]].map(([V,j])=>(ne(d*(D+V),y,r),[r.x,j,r.z]));_.push({pts:G,H:C,d:y})}let T=[],E=[],A=(y,C)=>{T.push(y[0],y[1],y[2]),E.push(C.r,C.g,C.b)};for(let y=0;y<_.length-1;y++){let C=_[y],D=_[y+1],L=S_(C.H),k=[L.under,L.wet,Math.floor(C.d/6)%2?L.cliffA:L.cliffB,L.cliffC,L.soil,L.grassLip,L.grass];C.H>6&&(k[3]=Math.floor(C.d/9)%2?L.cliffC:L.cliffA);for(let G=0;G<C.pts.length-1;G++){let V=G===6?L.grassFar:k[G],j=C.pts[G],q=C.pts[G+1],st=D.pts[G],dt=D.pts[G+1];d<0?(A(j,V),A(st,V),A(q,V),A(q,V),A(st,V),A(dt,V)):(A(j,V),A(q,V),A(st,V),A(q,V),A(dt,V),A(st,V))}}let P=new jt;P.setAttribute("position",new Ft(T,3)),P.setAttribute("color",new Ft(E,3)),P.computeVertexNormals();let v=new kt(P,to());t.add(v)}s.add(t);let o=F.cyl(.22,.32,2.2,6);o.translate(0,1.1,0);let a=F.ico(1,1),c=[];for(let d=en+4;d<Ln-10;d+=3+e()*5)for(let M of[-1,1]){if(e()<.35)continue;let b=Bs(d);if(d>He-30)continue;let _=.12*b+2.5+e()*26,T=b+.22+It((_-1.4-.11*b)/9,0,1)*.5,E=M*(Me(d)+_);ne(E,d,r),c.push({x:r.x,y:T,z:r.z,s:.8+e()*.9,tint:e()})}let l=new Be(o,Ae("#8a5a32"),c.length),h=new Be(a,Ae("#4fa83a"),c.length),u=new Be(a,Ae("#79c44a"),c.length),f=new Xt,p=new we,m=new Oe,x=0,g=0;c.forEach((d,M)=>{f.compose(new R(d.x,d.y,d.z),p.identity(),new R(d.s,d.s,d.s)),l.setMatrixAt(M,f),m.set(e(),e()*6,e()),p.setFromEuler(m);let b=d.s*(1.5+e()*.6);f.compose(new R(d.x,d.y+2.4*d.s+b*.55,d.z),p,new R(b,b*1.05,b)),d.tint<.55?h.setMatrixAt(x++,f):u.setMatrixAt(g++,f)}),h.count=x,u.count=g;for(let d of[l,h,u])d.instanceMatrix.needsUpdate=!0,d.computeBoundingSphere(),Gn(d,.05),s.add(d);return t}function w_(s){let t=$i(s),e=new Bi(1,1),n=e.getAttribute("position"),i=(f,p,m)=>`${f.toFixed(3)},${p.toFixed(3)},${m.toFixed(3)}`,r=new Map;for(let f=0;f<n.count;f++){let p=n.getX(f),m=n.getY(f),x=n.getZ(f),g=i(p,m,x);r.has(g)||r.set(g,.78+t()*.4);let d=r.get(g),M=m*d;M=M<-.35?-.35:M,M>.55&&(M=.55+(M-.55)*.4),n.setXYZ(f,p*d,M,x*d)}e.computeVertexNormals();let o=e.getAttribute("normal"),a=new Float32Array(n.count*3),c=Re("#a9b46a"),l=Re("#7fae4a"),h=Re("#9a9284"),u=Re("#6f685d");for(let f=0;f<n.count;f+=3){let p=(o.getY(f)+o.getY(f+1)+o.getY(f+2))/3,m=p>.72?t()<.6?l:c:p>.1?h:u;for(let x=0;x<3;x++)a[(f+x)*3]=m.r,a[(f+x)*3+1]=m.g,a[(f+x)*3+2]=m.b}return e.setAttribute("color",new ye(a,3)),e}function Xd(s){let t=[11,23,37,51].map(w_),e=t.map(()=>[]);Ee.forEach((a,c)=>e[a.kind].push(c));let n={x:0,z:0},i=new Xt,r=new we,o=[];return e.forEach((a,c)=>{let l=new Be(t[c],to(),a.length);a.forEach((h,u)=>{let f=Ee[h];ne(f.u,f.d,n),r.setFromAxisAngle(new R(0,1,0),f.rot-Dn(f.d));let p=f.r*1.02;i.compose(new R(n.x,f.h*.18,n.z),r,new R(p,f.h*1.15,p)),l.setMatrixAt(u,i)}),l.instanceMatrix.needsUpdate=!0,l.computeBoundingSphere(),Gn(l,.035),s.add(l),o.push(l)}),o}function qd(s,t={}){let e=t.w||512,n=t.h||256,i=document.createElement("canvas");i.width=e,i.height=n;let r=i.getContext("2d");r.fillStyle=t.bg||"#e9c48a",r.fillRect(0,0,e,n),r.strokeStyle=t.border||"#7a4a22",r.lineWidth=14,r.strokeRect(7,7,e-14,n-14),r.fillStyle=t.color||"#4a2a10",r.textAlign="center",r.textBaseline="middle";let o=t.size||72;s.forEach((c,l)=>{r.font=`${l===0?o:o*.6}px Jua, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif`,r.fillText(c,e/2,n/2+(l-(s.length-1)/2)*o*.95)});let a=new gr(i);return a.colorSpace=Ke,a.anisotropy=4,a}function Yd(s,t=3.2,e=1.6,n={}){let i=new wt,r=qd(s,n),o=new kt(F.box(t,e,.12),[Ae("#8a5a32"),Ae("#8a5a32"),Ae("#8a5a32"),Ae("#8a5a32"),new Qn({map:r,gradientMap:Ae("#fff").gradientMap}),Ae("#8a5a32")]);o.position.y=e/2+1,Gn(o,.04),i.add(o);for(let a of[-1,1])H(F.box(.16,1.2+e/2,.16),"#6d4424",i,[a*(t/2-.25),(1.2+e/2)/2,-.05]);return i}function $d(s){let t=new wt,e={x:0,z:0},n=Me(-4),i="#c89a5e";for(let a=0;a<9;a++){let c=-n+.6+a*.75;ne(c,-3.2,e);let l=H(F.box(.7,.14,3.2),a%2?i:"#b9884f",t,[e.x,.75,e.z],[0,-Dn(-3),0],.02);l.rotation.order="YXZ"}for(let[a,c]of[[-n+.5,-4.6],[-n+.5,-1.8],[-n+6.7,-4.6],[-n+6.7,-1.8]])ne(a,c,e),H(F.cyl(.18,.2,2.2,8),"#7a4c27",t,[e.x,.1,e.z]);ne(-n+7,-1.2,e);let r=H(F.cyl(.22,.26,.6,10),"#5b3a1e",t,[e.x,1.1,e.z]),o=Yd(["\uCD9C\uBC1C \uB098\uB8E8","\uACF5\uB3D9\uBA85\uC758 \uAE09\uB958\uD0C0\uAE30"],3.4,1.7);return ne(-n-3.5,-9,e),o.position.set(e.x,Bs(-9)+.1,e.z),o.rotation.y=-Dn(-9)+.5,t.add(o),s.add(t),r.userData.keep=!0,Ze(t,[r]),{group:t,bollard:r}}function Zd(s){let t=new wt,e={x:0,z:0},n=Re("#f3dfa6"),i=Re("#e2c68a"),r=Re("#79c44a"),o=Re("#5eae3e"),a=-80,c=80,l=He-16,h=He+110,u=64,f=60,p=(v,y)=>{let C=y-Zi(v),D=-.6+ke(-14,8,C)*1.15;return D+=ke(14,30,C)*.8+ke(30,90,C)*2.5,D+=.15*tn(v*.2+y*.13),D},m=[],x=[];for(let v=0;v<f;v++)for(let y=0;y<u;y++){let C=[[y,v],[y+1,v],[y,v+1],[y+1,v],[y+1,v+1],[y,v+1]],D=a+(y+.5)/u*(c-a),k=l+(v+.5)/f*(h-l)-Zi(D),G=k<-1?i:k<16+3*tn(D*.1)?n:k<40?r:o;for(let[V,j]of C){let q=a+V/u*(c-a),st=l+j/f*(h-l);ne(q,st,e),m.push(e.x,p(q,st),e.z),x.push(G.r,G.g,G.b)}}let g=new jt;g.setAttribute("position",new Ft(m,3)),g.setAttribute("color",new Ft(x,3)),g.computeVertexNormals(),t.add(new kt(g,to()));let d=(v,y,C,D=0,L=0)=>(ne(y,C,e),v.position.set(e.x,p(y,C)+D,e.z),v.rotation.y=-Dn(C)+L,t.add(v),v),M=["#d2553a","#3e78c9","#e0a43a","#3c9a5c","#c4458f"];[[-22,42],[-9,50],[7,46],[21,40],[34,54],[-34,52]].forEach(([v,y],C)=>{let D=E_(M[C%M.length]);d(D,v,He+y,-.05,(C%2?.15:-.12)-v*.01)});let _=new wt,T=qd(["\uB3C4\uCC29!"],{w:512,h:160,bg:"#fff6dc",border:"#d2553a",color:"#d2553a",size:96});for(let v of[0,1]){let y=new kt(new ki(9,2.4),new Qe({map:T}));y.position.set(0,5.4,v?-.02:.02),y.rotation.y=v?Math.PI:0,_.add(y)}for(let v of[-1,1])H(F.cyl(.14,.16,6.6,8),"#8a5a32",_,[v*4.8,3.3,0]),H(F.sph(.28),"#f2b62c",_,[v*4.8,6.7,0]);d(_,0,He+24);let E=["#e8483b","#f2b62c","#3a7ee6","#4fbf6a","#f08ad0"];for(let v=-6;v<=6;v++){if(v===0)continue;let y=H(F.cone(.32,.7,3),E[(v+12)%E.length],_,[v*.68,6.45-.25*Math.cos(v/6*1.5),0],[Math.PI,0,0],.015);y.scale.z=.25}for(let v=0;v<12;v++){let y=new wt;H(F.box(3,.14,.8),v%2?"#c89a5e":"#b9884f",y,[0,.9,0],[0,0,0],.02),d(y,16,He-14+v*.85,0),y.position.y=0}for(let v=0;v<4;v++)for(let y of[-1,1]){let C=H(F.cyl(.14,.16,2.2,8),"#7a4c27");d(C,16+y*1.3,He-13.5+v*3,0),C.position.y=.2}let A=$i(5);for(let v=0;v<26;v++){let y=-60+A()*120,C=30+A()*70;if(Math.abs(y)<12&&C<45)continue;let D=new wt,L=.9+A()*.8;H(F.cyl(.25*L,.35*L,2.6*L,6),"#8a5a32",D,[0,1.3*L,0]),H(F.ico(1.7*L,1),A()<.5?"#4fa83a":"#79c44a",D,[0,3.4*L,0],[A(),A(),0],.05),d(D,y,He+C)}let P=Yd(["\uAE30\uC2AD \uB9C8\uC744","\uC5B4\uC11C \uC624\uC138\uC694!"],3.6,1.8);return d(P,-9,He+17,0,.25),s.add(t),Ze(t),{group:t,heightAt:p}}function E_(s){let t=new wt,e=4.2,n=3.6;H(F.box(e,2.6,n),"#f7ecd2",t,[0,1.3,0],[0,0,0],.05);let i=H(F.box(e+.6,.25,n*.62),s,t,[0,3.25,-n*.24],[.62,0,0],.05),r=H(F.box(e+.6,.25,n*.62),s,t,[0,3.25,n*.24],[-.62,0,0],.05);i.position.y=3.15,r.position.y=3.15;let o=new jt,a=new Float32Array([-n/2,0,0,n/2,0,0,0,1.15,0]);o.setAttribute("position",new ye(a,3)),o.setIndex([0,1,2]),o.computeVertexNormals();for(let c of[-1,1]){let l=new kt(o,Ae("#f7ecd2",{side:an}));l.position.set(c*e/2,2.6,0),l.rotation.y=Math.PI/2,t.add(l)}return H(F.box(.9,1.6,.1),"#3e6fb6",t,[.6,.8,n/2+.03]),H(F.box(.8,.7,.1),"#9fd6f2",t,[-1.1,1.5,n/2+.03],[0,0,0],.03),H(F.box(.5,1.2,.5),"#a8452f",t,[1.2,3.6,-.6]),t}var xt=.62,de={plankA:"#cf9c60",plankB:"#c08b52",slab:"#8d5f36",log:"#7f522c",cream:"#f6ead0",post:"#86542b",roof:"#d6573b",roofDark:"#b8442d",brick:"#a8452f",door:"#2f8f83",shutter:"#3d6fb6",glass:"#a9dcf5",L:{main:"#e8483b",rug:"#e05544",wall:"#f7d6c6",dark:"#a8291f"},R:{main:"#3a7ee6",rug:"#4a86e0",wall:"#d3e5f8",dark:"#1f4fa0"},C:{main:"#f2b62c",rug:"#9ccc3a",wall:"#eef3c9",dark:"#6f9a1c"}},ln=class{constructor(t,e,n,i={}){this.obj=t,this.part=e,this.kind=n,this.state=0,this.fallDir=i.fallDir||1,this.inward=!!i.inward,this.center=i.center||new R().copy(t.position),this.weight=i.weight??1,this.anim=null,this.baseRot=t.rotation.clone(),this.keaton=i.keaton||null}};function lc(s,t,e,n,i,r={}){let o=new wt,a=(h,u,f,p)=>{u-h<.01||p-f<.01||H(F.box(u-h,p-f,e),i,o,[(h+u)/2,(f+p)/2,0],[0,0,0],.025)},c=-s/2,l=s/2;if(!n)a(c,l,0,t);else{a(c,n.x0,0,t),a(n.x1,l,0,t),a(n.x0,n.x1,0,n.y0),a(n.x0,n.x1,n.y1,t);let h=r.frame||de.shutter,u=.07,f=n.x1-n.x0,p=n.y1-n.y0,m=(n.x0+n.x1)/2,x=(n.y0+n.y1)/2,g=e/2+.02;for(let d of[-1,1])H(F.box(f+u*2,u,.06),h,o,[m,x+d*(p/2+u/2),g],[0,0,0],.015),H(F.box(u,p,.06),h,o,[m+d*(f/2+u/2),x,g],[0,0,0],.015);if(!r.door){if(r.shutters)for(let d of[-1,1]){let M=H(F.box(f/2,p,.05),h,o,[m+d*(f*.75+u),x,g+.02],[0,0,0],.015);for(let b=-1;b<=1;b++)H(F.box(f/2-.06,.025,.02),"#2c5592",M,[0,b*p*.25,.03],[0,0,0],0)}}}if(r.posts!==!1){for(let h of[-1,1])H(F.box(.14,t+.02,e+.06),de.post,o,[h*(s/2-.07),t/2,0],[0,0,0],.025);H(F.box(s,.1,e+.06),de.post,o,[0,t-.05,0],[0,0,0],.02)}return o}function hh(s,t,e=de.post){let n=new wt,i=.55;for(let r=0;r<t;r++){let o=-s/2+s*(r+.5)/t;H(F.box(.08,i,.08),e,n,[o,i/2,0],[0,0,0],.02)}return H(F.box(s,.08,.12),e,n,[0,i,0],[0,0,0],.02),n}function T_(s,t,e){let[n,i,r,o]=t;s.add(F.box(i-n,.2,o-r),de.slab,be((n+i)/2,xt-.12,(r+o)/2),.03);let a=Math.max(2,Math.round((o-r)/.42)),c=(o-r)/a;for(let h=0;h<a;h++){let u=r+c*(h+.5),f=(h+e)%2?de.plankA:de.plankB;s.add(F.box(i-n-.04,.05,c-.035),f,be((n+i)/2,xt-.02,u),0)}let l=Math.max(2,Math.round((o-r)/.9));for(let h=0;h<l;h++){let u=r+(o-r)*(h+.5)/l;s.add(F.cyl(.26,.26,i-n-.1,10),de.log,be((n+i)/2,.24,u,0,0,Math.PI/2),.03)}}function Jd(s,t,e,n,i,r,o){s.add(F.box(n,.025,i),r,be(t,xt+.012,e),0),s.add(F.box(n-.16,.03,i-.16),"#ffffff",be(t,xt+.016,e,0,0,0,1,1,1),0),s.add(F.box(n-.26,.035,i-.26),r,be(t,xt+.02,e),0);let a="#fff8ea";if(o==="L"||o==="R"){let c=o==="L"?-1:1;s.add(F.box(n*.42,.04,.16),a,be(t-c*.05,xt+.03,e),0);let l=F.cone(.24,.34,3);s.add(l,a,be(t+c*n*.24,xt+.03,e,0,0,-c*Math.PI/2,1,1,.12),0)}else s.add(F.cyl(.42,.42,.04,20),a,be(t,xt+.028,e),0),s.add(F.cyl(.3,.3,.045,20),r,be(t,xt+.03,e),0),s.add(F.cyl(.16,.16,.05,16),a,be(t,xt+.033,e),0)}function Kd(s,t,e,n,i,r,o){let a=(t+e)/2,c=(n+i)/2,l=e-t,h=i-n;s.add(F.box(l,.28,h),"#9c6a3c",be(a,xt+.14,c),.03),s.add(F.box(l-.08,.14,h-.08),"#fdfaf2",be(a,xt+.34,c),.02),o?(s.add(F.box(l*.68,.08,h-.04),r,be(a+l*.15,xt+.43,c),.02),s.add(F.box(.26,.12,h*.6),"#ffffff",be(t+.2,xt+.46,c),.02),s.add(F.box(.1,.62,h),"#9c6a3c",be(t+.05,xt+.31,c),.02)):(s.add(F.box(l-.04,.08,h*.68),r,be(a,xt+.43,c+h*.15),.02),s.add(F.box(l*.6,.12,.26),"#ffffff",be(a,xt+.46,n+.2),.02),s.add(F.box(l,.62,.1),"#9c6a3c",be(a,xt+.31,n+.05),.02))}function A_(s){let t=new wt;if(H(F.cyl(.2,.15,.32,12),"#c8643a",t,[0,.16,0],[0,0,0],.02),H(F.cyl(.21,.21,.06,12),"#a94f2c",t,[0,.31,0],[0,0,0],.015),s==="cactus")H(F.cap(.11,.35,4),"#4f9e3a",t,[0,.58,0],[0,0,0],.02),H(F.cap(.06,.12,4),"#4f9e3a",t,[.13,.62,0],[0,0,-.9],.015),H(F.sph(.06),"#ff6fa8",t,[0,.85,0],[0,0,0],.015);else{H(F.cyl(.02,.02,.5,5),"#3f8a2c",t,[0,.55,0],[0,0,0],0);for(let n=0;n<4;n++){let i=n/4*Math.PI*2;H(F.sph(.09,8,6),"#56a83e",t,[Math.cos(i)*.12,.45+n*.04,Math.sin(i)*.12],[0,0,0],.015).scale.set(1,.5,1.6)}let e=s==="sunflower"?"#ffd23a":"#ff5a5a";for(let n=0;n<6;n++){let i=n/6*Math.PI*2;H(F.sph(.06,8,6),e,t,[Math.cos(i)*.09,.82,Math.sin(i)*.09+.02],[0,0,0],.012)}H(F.sph(.06,8,6),s==="sunflower"?"#7a4a1c":"#ffe27a",t,[0,.82,.04],[0,0,0],.012)}return t}function jd(s){let t=new wt,e=.25,n=1;switch(s){case"chair":{H(F.box(.46,.06,.46),"#c98a4a",t,[0,.45,0]);for(let i of[-1,1])for(let r of[-1,1])H(F.box(.06,.45,.06),"#8d5a2b",t,[i*.19,.22,r*.19],[0,0,0],.015);H(F.box(.46,.5,.06),"#c98a4a",t,[0,.72,-.2]),e=.28,n=1;break}case"table":{H(F.cyl(.5,.5,.07,20),"#d9a066",t,[0,.72,0]),H(F.cyl(.07,.1,.7,8),"#8d5a2b",t,[0,.36,0]),H(F.cyl(.3,.32,.05,12),"#8d5a2b",t,[0,.03,0]),H(F.sph(.11,10,8),"#ffffff",t,[.15,.85,.05],[0,0,0],.015),H(F.cyl(.08,.06,.04,8),"#3a7ee6",t,[-.18,.78,-.1],[0,0,0],.012),e=.5,n=3;break}case"pot":{H(F.cyl(.2,.18,.22,14),"#c9ccd4",t,[0,.11,0]),H(F.cyl(.21,.21,.03,14),"#aeb3bd",t,[0,.24,0],[0,0,0],.015),H(F.sph(.035,8,6),"#3b3b3b",t,[0,.28,0],[0,0,0],.01);for(let i of[-1,1])H(F.box(.1,.03,.05),"#3b3b3b",t,[i*.25,.18,0],[0,0,0],.01);e=.22,n=.6;break}case"kettle":{H(F.sph(.16,12,10),"#e0483b",t,[0,.15,0]).scale.set(1,.85,1),H(F.cone(.05,.22,8),"#e0483b",t,[.18,.2,0],[0,0,-1],.012),H(F.torus(.1,.018,6,12,Math.PI),"#3b3b3b",t,[0,.27,0],[0,0,0],0),e=.17,n=.4;break}case"barrel":{H(F.cyl(.3,.3,.75,14),"#b07a45",t,[0,.375,0]);for(let i of[.15,.6])H(F.torus(.305,.025,6,18),"#5b5b5b",t,[0,i,0],[Math.PI/2,0,0],0);e=.31,n=2.2;break}case"bucket":{H(F.cyl(.18,.14,.3,12),"#8fa7c0",t,[0,.15,0]),H(F.torus(.17,.012,5,12,Math.PI),"#5b5b5b",t,[0,.3,0],[0,0,0],0),e=.18,n=.5;break}case"stool":{H(F.cyl(.2,.2,.06,12),"#d39b5c",t,[0,.42,0]);for(let i=0;i<3;i++){let r=i/3*Math.PI*2;H(F.box(.05,.42,.05),"#8d5a2b",t,[Math.cos(r)*.12,.21,Math.sin(r)*.12],[0,0,0],.012)}e=.2,n=.6;break}case"books":{["#e8483b","#3a7ee6","#f2b62c"].forEach((r,o)=>H(F.box(.34,.08,.26),r,t,[.02*o,.04+o*.08,0],[0,o*.3,0],.012)),e=.2,n=.4;break}case"cat":{let i=H(F.cap(.12,.2,4),"#f0953a",t,[0,.16,0],[0,0,Math.PI/2]);i.name="body";let r=H(F.sph(.12,12,10),"#f0953a",t,[.22,.28,0]);r.name="head";for(let a of[-1,1])H(F.cone(.05,.1,4),"#f0953a",r,[0,.12,a*.06],[0,0,0],.01);for(let a of[-1,1])H(F.sph(.022,6,5),"#1b1410",r,[.1,.03,a*.05],[0,0,0],0);let o=H(F.cyl(.03,.025,.32,6),"#f0953a",t,[-.26,.3,0],[0,0,.6],.012);o.name="tail",e=.2,n=.5;break}default:break}for(let i of t.children)i.name&&(i.userData.keep=!0);return Ze(t),{obj:t,r:e,mass:n}}function Qd(){let s=new wt,t=new wt;s.add(t);let e={},n=[],i={};for(let d of["core","L","R","C"]){let M=new wt;M.name=d,t.add(M),e[d]=M}for(let d of["core","L","R","C"]){let M=new Hs;T_(M,gn[d].rect,d==="core"?0:1),e[d].add(M.build())}let r=e.core,o={x0:-1.4,x1:1.4,z0:-2.4,z1:-.6,h:2.1},a=o.x1-o.x0,c=o.z1-o.z0;{let d=lc(a,o.h,.12,{x0:-.35,x1:.35,y0:.95,y1:1.6},de.cream,{shutters:!0});d.position.set(0,xt,o.z0+.06),r.add(d),n.push(new ln(d,"core","wall",{fallDir:-1,center:new R(0,xt+1,o.z0),weight:1.4}))}{let d=lc(a,o.h,.12,{x0:-.48,x1:.42,y0:0,y1:1.72},de.cream,{door:!0,frame:"#7a4a22"});d.position.set(0,xt,o.z1-.06),r.add(d);let M=new wt;H(F.box(.55,.5,.06),de.glass,M,[0,0,0],[0,0,0],.02),H(F.box(.62,.06,.08),de.shutter,M,[0,.28,.02],[0,0,0],.012),H(F.box(.62,.06,.08),de.shutter,M,[0,-.28,.02],[0,0,0],.012),H(F.box(.62,.16,.18),"#8d5a2b",M,[0,-.38,.1],[0,0,0],.015);for(let E=0;E<4;E++)H(F.sph(.06,8,6),E%2?"#ff5a5a":"#ffd23a",M,[-.21+E*.14,-.27,.12],[0,0,0],.01);M.position.set(.88,1.25,.06),d.add(M),n.push(new ln(d,"core","wall",{fallDir:1,center:new R(0,xt+1,o.z1),weight:.7}));let b=new wt,_=.88,T=1.7;H(F.box(_,T,.08),de.door,b,[_/2,T/2,0],[0,0,0],.025);for(let E of[.4,1.25])H(F.box(_-.18,.04,.03),"#23706a",b,[_/2,E,.05],[0,0,0],0);H(F.box(.3,.3,.04),de.glass,b,[_/2,1.3,.05],[0,0,0],.012),H(F.sph(.05,8,6),"#f2c53d",b,[_-.12,.85,.07],[0,0,0],.01),b.position.set(-.47,xt,o.z1-.02),r.add(b),i.door=b}for(let d of[-1,1]){let M=lc(c,o.h,.12,{x0:-.3,x1:.3,y0:.95,y1:1.5},de.cream,{shutters:!1,frame:de.shutter});M.rotation.y=d*Math.PI/2,M.position.set(d*(o.x1-.06),xt,(o.z0+o.z1)/2),r.add(M),H(F.box(.6,.55,.03),de.glass,M,[0,1.22,0],[0,0,0],0),n.push(new ln(M,"core","wall",{fallDir:1,center:new R(d*o.x1,xt+1,-1.5),weight:1}))}H(F.box(a-.2,.03,c-.2),"#a36f3f",r,[0,xt+.01,(o.z0+o.z1)/2],[0,0,0],0),H(F.box(.9,1.1,.4),"#b07a45",r,[-.7,xt+.55,o.z0+.35]),H(F.box(.6,.45,.04),"#f7e3b0",r,[.6,xt+1.4,o.z0+.15],[0,0,0],.02);let l=xt+o.h+1,h=c/2+.32,u=1,f=Math.atan2(u,h),p=Math.hypot(h,u)+.05;for(let d of[-1,1]){let M=new wt,b=a+.55;H(F.box(b,.12,p),de.roof,M,[0,0,d*p/2],[0,0,0],.035);let _=4;for(let T=0;T<_;T++)H(F.box(b+.02,.05,.05),de.roofDark,M,[0,.07,d*(p*(T+.6))/_],[0,0,0],0);M.position.set(0,l,(o.z0+o.z1)/2),M.rotation.x=d*f,r.add(M),n.push(new ln(M,"core","roof",{fallDir:d,center:new R(0,l-.5,(o.z0+o.z1)/2+d*.6),weight:1.2}))}let m=new jt;m.setAttribute("position",new ye(new Float32Array([-c/2,0,0,c/2,0,0,0,u,0,c/2,0,0,-c/2,0,0,0,u,0]),3)),m.computeVertexNormals();for(let d of[-1,1]){let M=new kt(m,Ae(de.cream));M.position.set(d*(o.x1-.06),xt+o.h,(o.z0+o.z1)/2),M.rotation.y=Math.PI/2,r.add(M),n.push(new ln(M,"core","gable",{fallDir:d,center:new R(d*o.x1,xt+o.h+.4,-1.5),weight:.6}))}{let d=new wt;H(F.box(.42,1.05,.42),de.brick,d,[0,.52,0]),H(F.box(.52,.12,.52),"#7c2f1f",d,[0,1.08,0],[0,0,0],.02),d.position.set(.82,xt+o.h+.35,-1.2),r.add(d),i.chimney=d,n.push(new ln(d,"core","chimney",{center:new R(.82,l,-1.2),weight:1}))}{let d=new wt;H(F.box(.55,.7,.45),"#4b4f58",d,[0,.35,0]),H(F.box(.6,.05,.5),"#2c2f36",d,[0,.72,0],[0,0,0],.015),H(F.cyl(.06,.06,1.3,8),"#2c2f36",d,[.15,1.3,-.1],[0,0,0],.015),d.position.set(1.15,xt,-.3),r.add(d),n.push(new ln(d,"core","deco",{center:new R(1.15,xt,-.3),weight:.5})),i.stove=d}let x=d=>{let M=e[d],b=de[d],_=gn[d].rect,T=new Hs;if(d==="C")Jd(T,.25,2.3,2.2,1.3,b.rug,"C"),Kd(T,-1.72,-.25,2.5,3.3,"#f2b62c",!0);else{let A=d==="L"?-1:1;Jd(T,A*2.75,-.7,1.9,1.5,b.rug,d),Kd(T,A>0?3.1:-3.95,A>0?3.95:-3.1,0,1.12,b.main,!1),T.add(F.box(.4,.42,.36),"#b07a45",be(A*2.2,xt+.21,.9),.02),T.add(F.cyl(.12,.16,.22,10),d==="L"?"#ffd27a":"#bfe3ff",be(A*2.2,xt+.56,.9),.015)}M.add(T.build());let E=A_(d==="L"?"rose":d==="R"?"sunflower":"cactus");if(d==="C"?E.position.set(1.45,xt,3.05):E.position.set((d==="L"?-1:1)*3.68,xt,-1.82),M.add(E),i[`pot${d}`]=E,d!=="C"){let A=d==="L"?-1:1,P=_[1]-_[0],v=A*3.15,y=(_[0]+_[1])/2,C={x0:v-y-.45,x1:v-y+.45,y0:.85,y1:1.75},D=lc(P,2,.12,C,b.wall,{shutters:!1,frame:b.main});d==="L"?(H(F.box(.42,.34,.04),"#7a4a22",D,[.55,1.25,.08],[0,0,0],.012),H(F.box(.32,.24,.02),"#f7e3b0",D,[.55,1.25,.1],[0,0,0],0),H(F.box(.12,.12,.02),b.main,D,[.55,1.25,.11],[0,0,0],0)):(H(F.cyl(.18,.18,.05,16),"#ffffff",D,[-.55,1.35,.08],[Math.PI/2,0,0],.015),H(F.box(.02,.12,.02),"#222",D,[-.55,1.4,.11],[0,0,0],0),H(F.box(.09,.02,.02),"#222",D,[-.52,1.35,.11],[0,0,0],0)),D.position.set(y,xt,_[2]+.06),M.add(D),n.push(new ln(D,d,"wall",{fallDir:1,inward:!0,keaton:d,center:new R(y,xt+1,_[2]),weight:1.3}));for(let L of[0,1]){let k=_[2]+.25+L*1.55,G=hh(1.45,3);G.rotation.y=Math.PI/2,G.position.set(A*(Math.abs(_[0])>Math.abs(_[1])?Math.abs(_[0]):Math.abs(_[1]))-A*.06,xt,k+.72),M.add(G),n.push(new ln(G,d,"rail",{fallDir:-A,center:new R(A*3.9,xt,k+.7),weight:.6}))}}else{for(let P of[-.9,.9]){let v=hh(1.7,3);v.position.set(P,xt,_[3]-.06),M.add(v),n.push(new ln(v,"C","rail",{fallDir:1,center:new R(P,xt,3.3),weight:.6}))}for(let P of[-1,1]){let v=hh(1.6,3);v.rotation.y=Math.PI/2,v.position.set(P*1.74,xt,2.4),M.add(v),n.push(new ln(v,"C","rail",{fallDir:-P,center:new R(P*1.8,xt,2.4),weight:.5}))}let A=new wt;H(F.box(.6,1.3,.45),"#9ccc3a",A,[0,.65,0]),H(F.box(.02,1.1,.02),"#4d6e13",A,[0,.65,.235],[0,0,0],0),A.position.set(1.35,xt,1.75),M.add(A),n.push(new ln(A,"C","deco",{center:new R(1.35,xt,1.75),weight:.7}))}};x("L"),x("R"),x("C");let g=new Set([...n.map(d=>d.obj),...Object.values(i)]);for(let d of n)Ze(d.obj);for(let d in i)Ze(i[d]);for(let d in e)Ze(e[d],[...g]);return{root:s,tilt:t,parts:e,pieces:n,extras:i}}function tf(){let s=new wt,t=1.1;H(F.box(t,.1,2.1),de.door,s,[0,.2,0],[0,0,0],.03);for(let n of[-.5,.5])H(F.box(t-.2,.03,.05),"#23706a",s,[0,.27,n],[0,0,0],0);return H(F.box(.36,.03,.36),de.glass,s,[0,.27,-.6],[0,0,0],.012),H(F.sph(.06,8,6),"#f2c53d",s,[.38,.29,.1],[0,0,0],.01),s}function hc(s,t=.38){let[e,n,i,r]=s,o=new bs,a=.5,c=e-t,l=n+t,h=i-t,u=r+t;o.moveTo(c+a,h),o.lineTo(l-a,h),o.quadraticCurveTo(l,h,l,h+a),o.lineTo(l,u-a),o.quadraticCurveTo(l,u,l-a,u),o.lineTo(c+a,u),o.quadraticCurveTo(c,u,c,u-a),o.lineTo(c,h+a),o.quadraticCurveTo(c,h,c+a,h);let f=new Fi;f.moveTo(e+.05,i+.05),f.lineTo(e+.05,r-.05),f.lineTo(n-.05,r-.05),f.lineTo(n-.05,i+.05),f.lineTo(e+.05,i+.05),o.holes.push(f);let p=new Cr(o,6);p.rotateX(Math.PI/2);let m=new kt(p,new Qe({color:"#f4fbff",transparent:!0,opacity:.92,side:an,depthWrite:!1}));return m.position.y=.04,m.renderOrder=1,m}var R_={L:{skin:"#f1c39a",shirt:"#e8483b",pants:"#5a4636",accent:"#ffffff",hat:"cap"},R:{skin:"#f7d3b2",shirt:"#3a7ee6",pants:"#2c3e75",accent:"#ffffff",hat:"bun"},C:{skin:"#e9b98f",shirt:"#9ccc3a",pants:"#6b5a3a",accent:"#f2b62c",hat:"straw"}},uc=new R,ef=new we,C_=new R(0,-1,0),dc=class{constructor(t){this.id=t;let e=R_[t],n=new wt,i=new wt;i.scale.setScalar(1.3),n.add(i);let r=new wt;i.add(r),this.root=n,this.body=r;let o=new kt(new ys(.42,16),new Qe({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.02,n.add(o),this.shadow=o,this.legs=[];for(let x of[-1,1]){let g=new wt;g.position.set(x*.11,.4,0),H(F.cyl(.085,.08,.36,8),e.pants,g,[0,-.18,0],[0,0,0],.025),H(F.sph(.1,10,8),"#3a2a20",g,[0,-.36,.05],[0,0,0],.022).scale.set(1,.65,1.4),r.add(g),this.legs.push(g)}let a=H(F.cap(.25,.28,6),e.shirt,r,[0,.66,0],[0,0,0],.03);if(this.torso=a,t==="L")for(let x of[-1,1])H(F.box(.05,.42,.03),"#5a4636",a,[x*.12,.04,.24],[.1,0,0],0);else t==="R"?(H(F.torus(.17,.045,6,14),"#ffffff",a,[0,.24,.02],[Math.PI/2,0,0],.012),H(F.cyl(.29,.34,.22,14),e.shirt,r,[0,.42,0],[0,0,0],.025)):(H(F.box(.36,.06,.02),"#f2b62c",a,[0,0,.25],[0,0,0],0),H(F.box(.36,.06,.02),"#f2b62c",a,[0,-.12,.25],[0,0,0],0));let c=new wt;c.position.set(0,1.02,0),r.add(c),this.head=c,this.skinMat=Hd(e.skin),this.skinBase=new Et(e.skin);let l=new kt(F.sph(.34,18,14),this.skinMat);l.position.y=.24,Gn(l,.03),c.add(l);for(let x of[-1,1]){let g=new kt(F.sph(.07,8,6),this.skinMat);g.position.set(x*.33,.22,0),Gn(g,.015),c.add(g)}let h=new kt(F.sph(.06,10,8),this.skinMat);h.position.set(0,.2,.34),h.scale.set(1,.85,1),Gn(h,.015),c.add(h),this.eyes=[];for(let x of[-1,1]){let g=new wt;g.position.set(x*.125,.28,.285);let d=H(F.sph(.085,12,10),"#ffffff",g,[0,0,0],[0,0,0],.014);d.scale.set(.9,1.2,.55);let M=H(F.sph(.048,10,8),"#1b1410",g,[0,-.01,.04],[0,0,0],0);M.scale.set(1,1.2,.6);let b=H(F.torus(.035,.009,4,14,Math.PI*1.6),"#1b1410",g,[0,0,.05],[0,0,0],0);b.visible=!1;let _=H(F.sph(.09,12,6),e.skin,g,[0,.01,.005],[0,0,0],0);_.scale.set(.95,1.2,.6),_.visible=!1,this.eyes.push({g,white:d,pupil:M,spiral:b,lid:_,side:x})}this.brows=[];for(let x of[-1,1]){let g=H(F.box(.15,.035,.04),t==="L"?"#e8e3da":"#3a2a20",c,[x*.13,.42,.29],[0,0,0],0);this.brows.push({m:g,side:x})}let u=.1,f=.31;this.mouths={smile:H(F.torus(.075,.02,6,14,Math.PI),"#5a1f1a",c,[0,u+.03,f],[0,0,Math.PI],0),frown:H(F.torus(.065,.02,6,14,Math.PI),"#5a1f1a",c,[0,u-.03,f],[0,0,0],0),open:H(F.sph(.075,12,10),"#5a1f1a",c,[0,u,f-.02],[0,0,0],.012),grit:H(F.box(.17,.065,.04),"#ffffff",c,[0,u,f],[0,0,0],.014),smirk:H(F.torus(.06,.018,6,12,Math.PI*.7),"#5a1f1a",c,[.03,u+.02,f],[0,0,Math.PI+.3],0)},this.mouths.open.scale.set(1,1.1,.5),H(F.box(.17,.008,.01),"#1b1410",this.mouths.grit,[0,0,.022],[0,0,0],0),this.mouth="smile",this.cheeks=[];for(let x of[-1,1]){let g=new kt(new ys(.06,12),new Qe({color:"#ff6b6b",transparent:!0,opacity:0}));g.position.set(x*.2,.16,.3),g.rotation.y=x*.55,c.add(g),this.cheeks.push(g)}if(e.hat==="cap"){H(F.cyl(.31,.33,.16,16),"#c7352b",c,[0,.5,-.02],[-.12,0,0],.025),H(F.box(.46,.04,.26),"#c7352b",c,[0,.45,.29],[-.15,0,0],.02),H(F.sph(.05,8,6),"#ffffff",c,[0,.6,-.04],[0,0,0],.01);for(let x of[-1,1])H(F.cap(.04,.12,4),"#f4f1ea",c,[x*.08,.15,.33],[0,0,x*1.2],.012)}else if(e.hat==="bun"){let x=new zn(.36,18,8,0,Math.PI*2,0,Math.PI*.3);H(x,"#8a6a9a",c,[0,.24,0],[0,0,0],.025);let g=new zn(.365,18,10,Math.PI,Math.PI,0,Math.PI*.62);H(g,"#8a6a9a",c,[0,.24,0],[0,0,0],.025),H(F.sph(.17,12,10),"#8a6a9a",c,[0,.66,-.12],[0,0,0],.025),H(F.torus(.09,.025,6,12),"#ff7aa8",c,[0,.62,-.08],[Math.PI/2.4,0,0],.01);for(let d of[-1,1])H(F.sph(.035,8,6),"#ffffff",c,[d*.34,.14,.04],[0,0,0],.01);for(let d of[-1,1])H(F.torus(.075,.012,6,16),"#3b2a4a",c,[d*.125,.28,.335],[0,0,0],0)}else H(F.cyl(.62,.62,.05,22),"#f1d27a",c,[0,.5,0],[0,0,0],.025),H(F.cyl(.3,.33,.24,16),"#f1d27a",c,[0,.62,0],[0,0,0],.025),H(F.cyl(.335,.335,.07,16),"#3f8a2c",c,[0,.54,0],[0,0,0],0),H(F.sph(.09,8,6),"#7a5a3a",c,[0,.08,.31],[0,0,0],.012).scale.set(1.4,.6,.6);this.arms=[];for(let x of[-1,1]){let g=new wt;g.position.set(x*.3,.86,0),H(F.cyl(.07,.065,.42,8),e.shirt,g,[0,-.21,0],[0,0,0],.022);let d=new kt(F.sph(.085,10,8),this.skinMat);d.position.y=-.46,Gn(d,.018),g.add(d),r.add(g),this.arms.push({pivot:g,hand:d,side:x,target:new R(x*.32,.38,.05)})}this.saw=P_(),this.saw.visible=!1,this.arms[1].hand.add(this.saw),this.hanky=H(F.box(.26,.26,.01),"#ffffff",null,[0,0,0],[0,0,0],.01),this.hanky.visible=!1,this.arms[1].hand.add(this.hanky),this.hanky.position.set(0,-.12,0),this.stars=new wt;for(let x=0;x<3;x++){let g=H(F.ico(.07,0),"#ffd23a",this.stars,[0,0,0],[0,0,0],.012);g.userData.a=x/3*Math.PI*2}this.stars.position.y=.75,this.stars.visible=!1,c.add(this.stars),this.anger=0,this.time=Math.random()*10;let p=c.children.filter(x=>x.isMesh&&x.material===this.skinMat),m=I_(p,this.skinMat);c.add(m);for(let x of p)c.remove(x);for(let x of this.legs)Ze(x);Ze(c,[...this.eyes.map(x=>x.g),...this.brows.map(x=>x.m),...Object.values(this.mouths),...this.cheeks,this.stars]),Ze(r,[c,...this.arms.map(x=>x.pivot),...this.legs]),Ze(this.saw)}setMouth(t){if(this.mouth!==t){this.mouth=t;for(let e in this.mouths)this.mouths[e].visible=e===t}}aimArm(t,e){uc.copy(e).sub(t.pivot.position);let n=uc.length();if(n<1e-4)return;uc.divideScalar(n),ef.setFromUnitVectors(C_,uc),t.pivot.quaternion.slerp(ef,.5);let i=Math.min(1.25,Math.max(.6,n/.46));t.pivot.scale.y+=(i-t.pivot.scale.y)*.4}setFace({brow:t=0,browTilt:e=0,mouth:n="smile",eyes:i="open",look:r=null,anger:o=0,blush:a=0,pupil:c=1}){for(let l of this.brows)l.m.rotation.z=l.side*-t*.9+e*(l.side>0?1:0),l.m.position.y=.42+Math.max(0,t)*.05+(e&&l.side>0?.04:0);this.setMouth(n);for(let l of this.eyes){l.spiral.visible=i==="spiral",l.pupil.visible=i!=="spiral",l.lid.visible=i==="narrow"||i==="closed",l.lid.position.y=i==="closed"?-.01:.05,l.white.scale.y=i==="wide"?1.45:1.2;let h=i==="wide"?.65:c;l.pupil.scale.set(h,1.2*h,.6),r&&(l.pupil.position.x=r.x*.025,l.pupil.position.y=-.01+r.y*.02),l.spiral.visible&&(l.spiral.rotation.z+=.3)}this.anger+=(o-this.anger)*.08,this.skinMat.color.copy(this.skinBase).lerp(new Et("#ff5a3c"),this.anger*.75);for(let l of this.cheeks)l.material.opacity+=(a-l.material.opacity)*.1,l.visible=l.material.opacity>.03}};function I_(s,t){let e=s.map(a=>{a.updateMatrix();let c=a.geometry.clone();return c.getAttribute("uv")&&c.deleteAttribute("uv"),c.applyMatrix4(a.matrix),c.index?c.toNonIndexed():c}),n=zs(e,!1),i=new kt(n,t);i.userData.keep=!0;let r=s.map(a=>{let c=a.children.find(x=>x.userData.isOutline),l=cc(a.geometry).clone(),h=c?c.material.uniforms.uThick.value:.02,u=l.getAttribute("position"),f=l.getAttribute("normal");for(let x=0;x<u.count;x++)u.setXYZ(x,u.getX(x)+f.getX(x)*h,u.getY(x)+f.getY(x)*h,u.getZ(x)+f.getZ(x)*h);l.applyMatrix4(a.matrix);let p=new jt,m=l.index?l.toNonIndexed():l;return p.setAttribute("position",m.getAttribute("position")),p.setAttribute("normal",m.getAttribute("normal")),p}),o=new kt(zs(r,!1),Qr(0));return o.userData.isOutline=!0,i.add(o),i}function P_(){let s=new wt,t=new wt;H(F.box(.07,.55,.012),"#d7dde5",t,[0,-.32,0],[0,0,0],.01);for(let e=0;e<9;e++){let n=H(F.cone(.02,.04,3),"#b6bec9",t,[.045,-.08-e*.055,0],[0,0,-Math.PI/2],0);n.scale.z=.3}return s.add(t),H(F.box(.12,.16,.05),"#a2602e",s,[0,-.02,0],[0,0,0],.015),s.rotation.x=Math.PI/2,s.position.set(0,-.04,.02),s.userData.blade=t,s}var fc=[[0,[.32,.05,.42],[.28,2.2,.28]],[.24,[.8,-.3,1.65],[-.15,1.85,.15]],[.37,[.7,-1.02,1.6],[-.1,1.3,.32]],[.7,[-.62,-.95,.92],[.25,1.38,.05]],[.84,[-.75,-.25,.78],[.3,1.78,.05]],[1,[.32,.05,.42],[.28,2.2,.28]]];function nf(s,t,e,n,i){let r=0;for(;r<fc.length-2&&s>fc[r+1][0];)r++;let[o,a,c]=fc[r],[l,h,u]=fc[r+1],f=ke(0,1,(s-o)/(l-o)),p=(m,x)=>De(m,x,f);n.set(p(a[0],h[0])*t,p(a[1],h[1]),p(a[2],h[2])),i.set(p(c[0],u[0])*t,p(c[1],u[1]),p(c[2],u[2])),e!==1&&(n.z*=e,n.x*=e,n.y<0&&(n.y*=e))}var uh=new R,pc=new R,dh=new R,sf=new R,rf=new R,Ki=new R,mc=class{constructor(t,e,n){this.id=t,this.def=si[t],this.house=e,this.hooks=n,this.ch=new dc(t),e.parts[this.def.room].add(this.ch.root),this.ch.root.position.set(this.def.x,xt,this.def.z),this.pos=new ut(this.def.x,this.def.z),this.facing=Math.atan2(-this.def.x,2-this.def.z),this.ch.root.rotation.y=this.facing,this.stroke=null,this.throwAnim=0,this.catchAnim=0,this.appeaseAnim=0,this.shock=0,this.shockAt=null,this.cheer=0,this.bonk=0,this.keatonT=0,this.t=Math.random()*5,this.lastLine=-10,this.steamT=0,this.sawT=0,this.pose="idle",this.forced=null,this.holdingPaddle=!1,this.paddleTip=new R,this.paddleGrip=new R,this.strokeSide=new ut(-1,0),this.kneel=0,this.wave=0,this.prevStage=0,this.lookTarget=null,this.pointAt=null,this.splashed={entry:!1,exit:!1}}get root(){return this.ch.root}onStroke(t,e){this.stroke={t:0,dur:t.big?.62:.52,big:t.big,dir:t.dir,power:t.power},this.splashed.entry=!1,this.splashed.exit=!1,t.big&&(this.catchAnim=.12)}onThrow(){this.throwAnim=.3,this.stroke=null}onCatch(){this.catchAnim=.16}onAppease(){this.appeaseAnim=1.4}onShock(t){this.shock=1.6,this.shockAt=t}onBlame(t){this.blame=1.5,this.shockAt=t}onCheer(t=1.2){this.cheer=t}onBonk(){this.bonk=1.2}onKeaton(){this.keatonT=1.6}update(t,e,n){let i=e.owners[this.id],r=this.ch;this.t+=t,r.time+=t;let o=this.t,a=e.paddle.holder===this.id&&i.state==="aboard",c=e.paddle.flight,l=c&&c.to===this.id;this.holdingPaddle=a,this.throwAnim=Math.max(0,this.throwAnim-t),this.catchAnim=Math.max(0,this.catchAnim-t),this.appeaseAnim=Math.max(0,this.appeaseAnim-t),this.shock=Math.max(0,this.shock-t),this.blame=Math.max(0,(this.blame||0)-t),this.cheer=Math.max(0,this.cheer-t),this.bonk=Math.max(0,this.bonk-t),this.keatonT=Math.max(0,this.keatonT-t);let h="idle";this.forced?h=this.forced:i.state==="gone"?h="farewell":i.state==="overboard"?h="swim":i.leaving>0?h="beat":i.sawing?h="sawing":i.dizzy>.4?h="dizzy":this.bonk>0?h="bonk":i.flinch>.25?h="flinch":a?h="paddle":l?h="catchReady":this.throwAnim>0?h="throw":this.shock>0?h="shock":this.blame>0?h="point":this.cheer>0?h="cheer":i.stage>=Nn.SAW?h="saw":i.stage===Nn.STEAMING?h="steam":i.stage===Nn.ANNOYED&&(h="annoyed"),this.pose=h;let u=this.def.x,f=this.def.z,p=n.views[e.paddle.holder],m=Math.atan2(0-this.def.x,2.2-this.def.z);this.def.room==="C"&&(m=Math.atan2(-.3,1));let x=L=>{if(!L||L===this)return;let k=L.localPosIn(this.def.room,this.house,Ki);m=Math.atan2(k.x-this.pos.x,k.z-this.pos.y)};if(h==="paddle"){let L=this.stroke?this.stroke.dir:e.strokeDir(this.id);this.computeStrokeSide(L,e),this.id==="C"?L<0?(u=-1.2,f=2.75):L>0?(u=1.15,f=2.75):(u=.2,f=2.95):u=this.def.x+Math.sign(this.def.x)*.25,m=Math.atan2(this.strokeSide.x,this.strokeSide.y)}else if(h==="sawing"||h==="beat"){let L=It(i.cut,0,1);if(this.id==="C")u=De(-1.55,1.55,L),f=1.78,m=Math.PI;else{let k=Math.sign(this.def.x);u=k*1.98,f=De(-1.95,1,L),m=-k*Math.PI/2}h==="beat"&&(m=0)}else if(h==="annoyed"||h==="steam"||h==="catchReady")x(h==="catchReady"?n.views[c.from]:p),h==="annoyed"&&Math.sin(o*.7+this.def.x)>.75&&(m+=1.4*Math.sign(this.def.x||1));else if(h==="saw")this.id==="C"?m=Math.PI*.9:m=-Math.sign(this.def.x)*Math.PI*.4;else if((h==="shock"||h==="point"&&!this.forced)&&this.shockAt){let L=this.house.toPartLocal(this.def.room,this.shockAt,Ki);m=Math.atan2(L.x-this.pos.x,L.z-this.pos.y)}else h==="throw"&&c?x(n.views[c.to]):h==="farewell"?(m=Math.atan2(.2,1),u=this.id==="C"?.2:this.def.x*.85,f=this.id==="C"?2.3:-.6):h==="dizzy"&&(m+=o*3);e.house.door&&i.state==="aboard"&&(u=0,f=.25),this.forcedPos&&(u=this.forcedPos.x,f=this.forcedPos.z),this.forced&&this.forcedFace!==void 0&&this.forcedFace!==null&&(m=this.forcedFace),this.pos.x=ze(this.pos.x,u,h==="sawing"?10:7,t),this.pos.y=ze(this.pos.y,f,h==="sawing"?10:7,t),this.facing=vd(this.facing,m,h==="dizzy"?20:9,t),r.root.position.x=this.pos.x,r.root.position.z=this.pos.y,r.root.rotation.y=this.facing;let g=r.body,d=0,M=0,b=Math.sin(o*2.2)*.012,_=1;this.kneel=ze(this.kneel,h==="sawing"?1:0,8,t);let T=this.house;M=-T.rollNow*.6,d=T.pitchNow*.5,h==="flinch"&&(d-=.25,_=.9),h==="bonk"&&(_=.55+.45*ke(.2,1.2,1.2-this.bonk)),h==="steam"&&(b+=Math.abs(Math.sin(o*9))*.06),h==="cheer"&&(b+=Math.abs(Math.sin(o*8))*.18),h==="dizzy"&&(M+=Math.sin(o*5)*.25,d+=Math.cos(o*5)*.15),h==="farewell"&&(b+=Math.abs(Math.sin(o*3))*.05),h==="swim"&&(b=Math.sin(o*3)*.08-.5);let E=-1;if(h==="paddle"&&this.stroke&&(this.stroke.t+=t,E=this.stroke.t/this.stroke.dur,E>=1&&(this.stroke=null,E=-1)),E>=0){let L=this.stroke.big?1.45:1,k=Math.sin(It(E/.45,0,1)*Math.PI*.5)*(1-ke(.45,.85,E));d+=k*.55*L-ke(.4,.75,E)*(1-ke(.75,1,E))*.15*L,b-=k*.08*L}this.catchAnim>0&&(_*=1+Math.sin(this.catchAnim/.16*Math.PI)*.12),g.position.y=b-this.kneel*.32,g.rotation.x=ze(g.rotation.x,d+this.kneel*.35,12,t),g.rotation.z=ze(g.rotation.z,M,8,t),g.scale.y=ze(g.scale.y,_,18,t),g.scale.x=g.scale.z=1+(1-g.scale.y)*.5;for(let[L,k]of r.legs.entries())k.rotation.x=-this.kneel*1.3*(L?1:.7),h==="steam"&&(k.rotation.x=Math.max(0,Math.sin(o*9+L*Math.PI))*-.5),h==="annoyed"&&L===1&&(k.rotation.x=Math.max(0,Math.sin(o*7))*-.25),(h==="cheer"||h==="farewell")&&(k.rotation.x=Math.sin(o*8+L*Math.PI)*.2);let[A,P]=r.arms,v=A.target,y=P.target;v.set(-.34,.42,.06),y.set(.34,.42,.06),v.y+=Math.sin(o*2.2)*.02,y.y+=Math.sin(o*2.2+1)*.02,r.saw.visible=h==="saw"||h==="sawing"||h==="beat"||this.appeaseAnim>.6,r.hanky.visible=h==="farewell";let C=0,D=0;switch(h){case"paddle":{this.paddlePose(E,e),dh.copy(this.paddleGrip).sub(this.paddleTip).normalize(),sf.copy(this.paddleTip).addScaledVector(dh,1.45),rf.copy(this.paddleTip).addScaledVector(dh,1.85),this.ownerToBody(sf,v),this.ownerToBody(rf,y),D=E>=0?.25:.05;break}case"catchReady":v.set(-.25,1.35,.2),y.set(.25,1.35,.2),D=-.3;break;case"throw":{let L=this.throwAnim/.3;y.set(.3,.9+(1-L)*.5,-.3+(1-L)*.9),v.set(-.25,.7,.4);break}case"annoyed":v.set(.12,.78,.26),y.set(-.12,.72,.28),D=.08;break;case"steam":{let L=Math.sin(o*22)*.05,k=Math.sin(o*1.3+this.def.x)>.2;v.set(-.25,1.15+L,.25),k&&p&&p!==this?y.set(.1,.95+L,.8):y.set(.25,1.15-L,.25),D=-.05,this.steamT-=t,this.steamT<=0&&(this.steamT=.32,n.fx.steam(this.headWorld(Ki),i.stage>=2?1:.6));break}case"saw":{let L=Math.sin(o*2.4);y.set(.32,.72+L*.05,.42),v.set(.1+Math.max(0,L)*.1,.78,.5),r.saw.rotation.set(Math.PI/2+.4+L*.15,0,-.3),D=.45,C=Math.sin(o*.9)*.3,Math.sin(o*.9)>.97&&this.steamT<=0&&(this.steamT=1.5,n.audio?.sawTwang?.()),this.steamT-=t;break}case"sawing":{let L=Math.sin(o*17);y.set(.15+L*.05,.45,.55+L*.18),v.set(-.1,.42,.5+L*.18),r.saw.rotation.set(Math.PI/2+.9,0,0),D=.55,this.sawT-=t,this.sawT<=0&&(this.sawT=.09,n.fx.sawdust(this.handWorld(1,Ki)));break}case"beat":y.set(.32,1.25+Math.sin(o*14)*.06,.25),v.set(-.3,.45,.15),D=-.15,C=.15;break;case"dizzy":v.set(-.6,.65+Math.sin(o*6)*.2,.1),y.set(.6,.65-Math.sin(o*6)*.2,.1),C=Math.sin(o*4)*.4;break;case"flinch":case"bonk":v.set(-.2,1.25,.25),y.set(.2,1.25,.25),D=.3;break;case"shock":v.set(-.5,.95,.25),y.set(.15,.95,.85);break;case"cheer":v.set(-.35,1.45,.1+Math.sin(o*8)*.1),y.set(.35,1.45,.1-Math.sin(o*8)*.1),D=-.25;break;case"farewell":{let L=Math.sin(o*7);y.set(.35+L*.18,1.5,.15),v.set(-.32,.55,.05),D=-.1,C=Math.sin(o*1.3)*.2;break}case"swim":{let L=Math.sin(o*6);v.set(-.5,.9+L*.3,.3),y.set(.5,.9-L*.3,.3);break}case"hug":v.set(-.25,.75,.55),y.set(.25,.75,.55);break;case"point":{y.set(.25,1.1,.7),v.set(-.3,.6,.15),D=-.1;break}case"handshake":y.set(.15,.6,.6+Math.sin(o*10)*.05);break;case"flag":y.set(.25,1.5,.15),v.set(-.25,1.2,.2),D=-.3;break;default:{C=Math.sin(o*.6+this.def.x)*.25,D=-.05;let L=e.house,k=this.def.side;k&&L.vu*k>2.2&&!a&&(y.set(.3,1.3,.1),D=-.2);break}}this.appeaseAnim>0&&h!=="paddle"&&y.set(.3,.5,-.35),r.aimArm(A,v),r.aimArm(P,y),r.head.rotation.y=ze(r.head.rotation.y,C,8,t),r.head.rotation.x=ze(r.head.rotation.x,D,8,t),this.updateFace(h,i,a,E,o),r.stars.visible=h==="dizzy"||h==="bonk",r.stars.visible&&r.stars.children.forEach((L,k)=>{let G=L.userData.a+o*4;L.position.set(Math.cos(G)*.38,Math.sin(o*6+k)*.04,Math.sin(G)*.38),L.rotation.y+=t*5}),E>=0&&(!this.splashed.entry&&E>.36&&(this.splashed.entry=!0,n.fx.paddleSplash(this.paddleTipWorld(Ki),this.stroke.big?1.4:.8),n.audio?.splash(this.stroke.big?.9:.45,this.def.side)),E>.4&&E<.72&&Math.random()<.5&&n.fx.drip(this.paddleTipWorld(Ki)),!this.splashed.exit&&E>.8&&(this.splashed.exit=!0,n.fx.paddleSplash(this.paddleTipWorld(Ki),this.stroke.big?.9:.4)))}updateFace(t,e,n,i,r){let o=this.ch,a=Math.sin(r*1.7+this.def.x*3)>.985?"closed":"open",c={brow:0,mouth:"smile",eyes:a,anger:0,blush:0,pupil:1};switch(t){case"paddle":c={brow:.2,mouth:i>=0&&i<.7?"open":"smile",eyes:i>=.2&&i<.6?"narrow":a,anger:0,blush:.2};break;case"catchReady":c={brow:.4,mouth:"open",eyes:"wide",anger:0,blush:.4};break;case"throw":c={brow:-.1,mouth:"grit",eyes:a,anger:0};break;case"annoyed":c={brow:-.45,mouth:"frown",eyes:Math.sin(r*.7+this.def.x)>.75?"closed":"narrow",anger:.15,blush:0};break;case"steam":c={brow:-.75,mouth:"grit",eyes:"open",anger:.85,pupil:.7};break;case"saw":c={brow:-.5,browTilt:.5,mouth:"smirk",eyes:"narrow",anger:.35};break;case"sawing":c={brow:-.6,mouth:Math.sin(r*4)>0?"grit":"smirk",eyes:"narrow",anger:.4};break;case"beat":c={brow:.45,browTilt:.4,mouth:"smirk",eyes:"open",anger:0,blush:.6};break;case"dizzy":c={brow:.4,mouth:"open",eyes:"spiral",anger:0,blush:.5};break;case"flinch":c={brow:.6,mouth:"open",eyes:"closed",anger:0};break;case"bonk":c={brow:.3,mouth:"frown",eyes:"spiral",anger:0};break;case"shock":c={brow:.8,mouth:"open",eyes:"wide",anger:0};break;case"cheer":case"flag":c={brow:.4,mouth:"open",eyes:"closed",anger:0,blush:.6};break;case"farewell":c={brow:.3,mouth:"smile",eyes:"closed",anger:0,blush:.7};break;case"swim":c={brow:.6,mouth:"open",eyes:"wide",anger:0};break;case"hug":c={brow:.5,mouth:"smile",eyes:"closed",anger:0,blush:.8};break;case"point":c={brow:-.3,mouth:"open",eyes:"open",anger:.3};break;default:e.stage===0&&e.sulk<.15&&(c.blush=.25);break}this.keatonT>0&&(c={brow:.1,mouth:"frown",eyes:this.keatonT>1.2||this.keatonT<.9&&this.keatonT>.75?"closed":"wide",anger:0}),this.appeaseAnim>0&&t!=="paddle"&&(c={brow:.4,mouth:"smile",eyes:"closed",anger:0,blush:.9}),o.setFace(c)}computeStrokeSide(t,e){this.id==="L"?this.strokeSide.set(-1,.15):this.id==="R"?this.strokeSide.set(1,.15):t<0?this.strokeSide.set(-1,.35):t>0?this.strokeSide.set(1,.35):this.strokeSide.set(0,1),this.strokeSide.normalize()}paddlePose(t,e){let n=this.strokeSide.x<0?-1:1,i=this.stroke&&this.stroke.big?1.25:1;t<0?(nf(0,n,1,uh,pc),pc.x+=Math.sin(this.t*1.5)*.05):nf(t,n,i,uh,pc),this.paddleTip.copy(uh),this.paddleGrip.copy(pc)}ownerToBody(t,e){return e.copy(t).multiplyScalar(1/1.3),e.y-=this.ch.body.position.y,e}localPosIn(t,e,n){return n.set(this.pos.x,0,this.pos.y),n}headWorld(t){return this.ch.head.updateWorldMatrix(!0,!1),t.set(0,.62,0).applyMatrix4(this.ch.head.matrixWorld)}chestWorld(t){return this.ch.body.updateWorldMatrix(!0,!1),t.set(0,.8,0).applyMatrix4(this.ch.body.matrixWorld)}handWorld(t,e){let n=this.ch.arms[t].hand;return n.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(n.matrixWorld)}paddleTipWorld(t){return this.ch.root.updateWorldMatrix(!0,!1),t.copy(this.paddleTip).applyMatrix4(this.ch.root.matrixWorld)}paddleGripWorld(t){return this.ch.root.updateWorldMatrix(!0,!1),t.copy(this.paddleGrip).applyMatrix4(this.ch.root.matrixWorld)}};var L_=[["table","core",0,.45],["chair","core",-.85,.55],["chair","core",.85,.85],["barrel","core",-1.15,1.05],["pot","core",.55,-.2],["kettle","core",-.6,-.25],["cat","core",.4,1.15],["stool","L",-2.4,-1.6],["bucket","L",-2.1,0],["pot","R",2.3,-1.6],["books","R",2.2,.1],["stool","C",.9,1.9]],D_=[{part:"core",r:[-1.42,1.42,-2.42,-.58]},{part:"core",r:[.86,1.44,-.54,-.06]},{part:"L",r:[-3.97,-3.08,-.02,1.14]},{part:"R",r:[3.08,3.97,-.02,1.14]},{part:"L",r:[-2.42,-1.98,.7,1.1]},{part:"R",r:[1.98,2.42,.7,1.1]},{part:"C",r:[-1.74,-.23,2.48,3.32]},{part:"C",r:[1.03,1.67,1.5,2]}],ie=new R,fh=new R,U_=new we,Vs={x:0,z:0},gc=class{constructor(t,e,n,i){this.scene=t,this.fx=e,this.audio=n,this.ui=i,this.build()}build(){let t=Qd();this.root=t.root,this.tilt=t.tilt,this.tilt.rotation.order="YXZ",this.parts=t.parts,this.pieces=t.pieces,this.extras=t.extras;for(let e of this.pieces)e.obj.rotation.order="YXZ";this.scene.add(this.root),this.side=0,this.rollNow=0,this.pitchNow=0,this.present=new Set(["core","L","R","C"]),this.skirts={};for(let e of["core","L","R","C"]){let n=hc(gn[e].rect);this.root.add(n),this.skirts[e]=n}this.props=L_.map(([e,n,i,r])=>{let o=jd(e);return this.tilt.add(o.obj),o.obj.position.set(i,xt,r),{kind:e,obj:o.obj,r:o.r,mass:o.mass,x:i,z:r,vx:0,vz:0,y:0,vy:0,rot:Math.random()*6,spin:0,part:n,alive:!0,lean:0}}),this.views={};for(let e of bn)this.views[e]=new mc(e,this,{fx:this.fx,audio:this.audio});this.cuts={};for(let e of["L","R","C"])this.cuts[e]=this.buildCutLine(e);this.smokeT=0,this.floaterViews=new Map,this.debris=[],this.doorRaft=null,this.mooring=null,this.critical=0,this.trembleT=0}buildCutLine(t){let n=F.box(.16,.02,.05),i=new Be(n,new Qe({color:"#ffffff"}),16),r=new Be(F.box(.2,.03,.09),new Qe({color:"#2a1a10"}),16),o=new Xt,a=new we,c=[];for(let h=0;h<16;h++){let u=(h+.5)/16,f,p,m;t==="C"?(f=De(-1.8,1.8,u),p=1.4,m=0):(f=t==="L"?-1.6:1.6,p=De(-2.2,1.2,u),m=Math.PI/2),a.setFromAxisAngle(new R(0,1,0),m),o.compose(new R(f,xt+.012,p),a,new R(1,1,1)),i.setMatrixAt(h,o),r.setMatrixAt(h,o),c.push(new R(f,xt,p))}i.count=0,r.count=0,this.tilt.add(i),this.tilt.add(r);let l=new wt;return H(F.cyl(.02,.02,.5,5),"#333",l,[0,.25,0],[0,0,0],0),H(F.box(.24,.16,.02),"#ff3b3b",l,[.12,.42,0],[0,0,0],.01),l.position.copy(c[0]),l.visible=!1,this.tilt.add(l),{white:i,black:r,n:16,pts:c,marker:l,shown:0}}update(t,e,n){let i=e.house;ne(i.u,i.d,Vs);let r=rh(i.u,i.d);this.root.position.set(Vs.x,r*.85,Vs.z),this.root.rotation.y=-(Dn(i.d)+i.psi);let o=e.hp;this.critical=i.door?0:It((.35-o)/.35,0,1),this.trembleT+=t;let a=this.critical*.012*Math.sin(this.trembleT*37),c=(1-Math.max(0,o))*.05*(i.door?0:1);this.rollNow=i.roll+c+a,this.pitchNow=i.pitch+(1-Math.max(0,o))*.02,this.tilt.rotation.x=-this.pitchNow,this.tilt.rotation.z=-this.rollNow,this.tilt.position.y=i.heave+(i.door?-.25:0),this.side=Math.sign(i.u);for(let l in this.skirts){let h=this.skirts[l];if(!h.visible)continue;let u=1+.02*Math.sin(e.time*5+l.length);h.scale.set(u,1,u),h.material.opacity=.75+.2*Math.sin(e.time*3.3),h.position.y=.04-r*.15}this.smokeT-=t,this.smokeT<=0&&this.extras.chimney&&this.extras.chimney.parent===this.parts.core&&!i.door&&(this.smokeT=.45,this.extras.chimney.updateWorldMatrix(!0,!1),ie.set(0,1.25,0).applyMatrix4(this.extras.chimney.matrixWorld),this.fx.smoke(ie));for(let l of bn)this.views[l].update(t,e,n);this.updateCutLines(e),this.updateProps(t,e),this.updatePieces(t,e),this.updateFloaters(t,e),this.updateDebris(t,e),this.mooring&&this.updateMooring(t,e)}updateCutLines(t){for(let e of["L","R","C"]){let n=this.cuts[e],i=t.owners[e];if(i.state!=="aboard"){n.white.count=0,n.black.count=0,n.marker.visible=!1;continue}let r=i.stage>=3||i.cut>0;n.white.count=r?n.n:0,n.marker.visible=r&&!i.sawing,n.black.count=Math.floor(It(i.cut,0,1)*n.n),n.marker.visible&&(n.marker.rotation.y=Math.sin(t.time*6)*.3)}}updateProps(t,e){let n=e.house;if(n.door)return;let i=Math.sin(n.psi),r=Math.cos(n.psi),o=r*n.accU-i*n.accD,a=-(i*n.accU+r*n.accD),c=It(-o*.5,-22,22),l=It(-a*.5,-22,22),h=n.omega*n.omega*.45,u=9.8*Math.sin(this.rollNow)*1.1,f=-9.8*Math.sin(this.pitchNow)*1.1,p=this.props.filter(m=>m.alive&&m.obj.parent===this.tilt);for(let m of p){let x=u+c+m.x*h,g=f+l+m.z*h,d=Math.hypot(m.vx,m.vz),M=Math.hypot(x,g);if(d<.05&&M<1.2&&m.y<=0)m.vx=0,m.vz=0;else{if(m.y<=0&&d>0){let _=Math.min(d/t,1.4);x-=m.vx/d*_,g-=m.vz/d*_}m.vx+=x*t,m.vz+=g*t}m.x+=m.vx*t,m.z+=m.vz*t,(m.y>0||m.vy>0)&&(m.vy-=18*t,m.y+=m.vy*t,m.y<=0&&(m.y=0,m.vy<-2.5&&this.audio?.clatter(m.kind,Math.min(1,-m.vy/8)),m.vy=0,m.spin*=.4)),m.rot+=m.spin*t,m.spin*=Math.exp(-t*1.5);for(let _ of D_)this.present.has(_.part)&&this.pushOutRect(m,_.r);for(let _ of bn){let T=this.views[_];e.owners[_].state==="aboard"&&this.pushOutCircle(m,T.pos.x,T.pos.y,.3,e,_)}this.keepOnDeck(m,e)}for(let m=0;m<p.length;m++)for(let x=m+1;x<p.length;x++){let g=p[m],d=p[x],M=d.x-g.x,b=d.z-g.z,_=g.r+d.r,T=M*M+b*b;if(T>=_*_||T<1e-6)continue;let E=Math.sqrt(T),A=M/E,P=b/E,v=_-E,y=1/g.mass,C=1/d.mass;g.x-=A*v*(y/(y+C)),g.z-=P*v*(y/(y+C)),d.x+=A*v*(C/(y+C)),d.z+=P*v*(C/(y+C));let D=(d.vx-g.vx)*A+(d.vz-g.vz)*P;if(D<0){let L=-1.4*D/(y+C);g.vx-=L*A*y,g.vz-=L*P*y,d.vx+=L*A*C,d.vz+=L*P*C,-D>1.4&&(this.audio?.clatter(g.kind,Math.min(1,-D/5)),g.spin+=(Math.random()-.5)*4,d.spin+=(Math.random()-.5)*4)}}for(let m of p){m.obj.position.set(m.x,xt+m.y,m.z),m.obj.rotation.y=m.rot;let x=Math.hypot(m.vx,m.vz);if(m.lean=De(m.lean,It(x*.12,0,.35),.2),m.obj.rotation.z=m.lean*Math.sin(m.rot*3),m.obj.rotation.x=m.y>0?m.rot*.5:m.lean*.4,m.kind==="cat"){let g=m.obj.getObjectByName("tail");g&&(g.rotation.z=.6+Math.sin(e.time*(x>.5?18:3))*.4),x>2.2&&Math.random()<.02&&this.audio?.meow()}}}pushOutRect(t,e){let[n,i,r,o]=e,a=It(t.x,n,i),c=It(t.z,r,o),l=t.x-a,h=t.z-c,u=l*l+h*h;if(!(u>t.r*t.r))if(u>1e-6){let f=Math.sqrt(u),p=l/f,m=h/f;t.x=a+p*t.r,t.z=c+m*t.r;let x=t.vx*p+t.vz*m;x<0&&(t.vx-=1.35*x*p,t.vz-=1.35*x*m,-x>1.6&&this.audio?.clatter(t.kind,Math.min(1,-x/6)))}else{let f=[[t.x-n,-1,0],[i-t.x,1,0],[t.z-r,0,-1],[o-t.z,0,1]];f.sort((g,d)=>g[0]-d[0]);let[p,m,x]=f[0];t.x+=m*(p+t.r),t.z+=x*(p+t.r)}}pushOutCircle(t,e,n,i,r,o){let a=t.x-e,c=t.z-n,l=t.r+i,h=a*a+c*c;if(h>=l*l||h<1e-6)return;let u=Math.sqrt(h),f=a/u,p=c/u;t.x=e+f*l,t.z=n+p*l;let m=t.vx*f+t.vz*p;m<0&&(t.vx-=1.5*m*f,t.vz-=1.5*m*p,-m>2.4&&this.ui&&this.ui.say(o,"ouch"))}insideDeck(t,e){for(let n of this.present){let[i,r,o,a]=gn[n].rect;if(t>=i&&t<=r&&e>=o&&e<=a)return n}return null}keepOnDeck(t,e){let n=this.insideDeck(t.x,t.z);if(n){t.part=n;return}let[i,r,o,a]=gn[t.part]?.rect||gn.core.rect,c=Math.hypot(t.vx,t.vz),l=this.railBroken(t.part,t.x,t.z);if(this.present.has(t.part)&&c<5.5&&!l){let h=It(t.x,i+t.r*.5,r-t.r*.5),u=It(t.z,o+t.r*.5,a-t.r*.5);h!==t.x&&(t.vx*=-.35),u!==t.z&&(t.vz*=-.35),t.x=h,t.z=u,c>2&&this.audio?.clatter(t.kind,Math.min(1,c/6));return}this.throwOverboard(t,e)}railBroken(t,e,n){for(let i of this.pieces)if(!(i.part!==t||i.kind!=="rail")&&Math.hypot(i.center.x-e,i.center.z-n)<1.2)return i.state===2;return t==="core"}throwOverboard(t,e,n=1){t.alive=!1,this.scene.attach(t.obj),this.addDebris(t.obj,{vx:t.vx*n,vy:2.5+Math.random()*2,vz:t.vz*n,local:!0,spin:3,game:e}),t.kind==="cat"&&this.audio?.meow(!0)}onHit(t,e){let n=t.strength||.5,i=e.hp,r=n>.7?2:1;i<.4&&r++,t.kind==="bank"&&n<.5&&(r=Math.random()<.5?1:0);let o=this.pieces.filter(l=>l.state<2&&this.present.has(l.part)&&l.obj.parent),a=t.lx??0,c=t.lz??0;o.forEach(l=>{let h=Math.hypot(l.center.x-a,l.center.z-c);l._score=1/(.6+h)*l.weight*(.6+Math.random()*.8)*(l.state===1?1.6:1)}),o.sort((l,h)=>h._score-l._score);for(let l=0;l<Math.min(r,o.length);l++)this.breakPiece(o[l],n,e);for(let l of this.props)!l.alive||l.obj.parent!==this.tilt||(l.vy=Math.max(l.vy,(2+Math.random()*3)*n),l.y=Math.max(l.y,.01),l.spin+=(Math.random()-.5)*10*n,l.vx+=(Math.random()-.5)*3*n,l.vz+=-2.5*n*Math.random());ie.set(a,xt+.4,c),this.tilt.localToWorld(ie),this.fx.splinters(ie,10+n*16),this.fx.splash(ie,1+n)}onScrape(t,e){if(Math.random()<.35*t.intensity){let n=this.pieces.filter(i=>i.state<2&&this.present.has(i.part)&&(i.kind==="rail"||i.kind==="deco"||i.kind==="wall"));n.length&&this.breakPiece(n[Math.floor(Math.random()*n.length)],.4,e)}for(let n of[-1,1])ie.set(n*4.1,xt,-1+Math.random()*2),this.tilt.localToWorld(ie),this.fx.splinters(ie,4)}breakPiece(t,e,n){if(!t.anim){if(t.state===0&&(t.kind==="wall"||t.kind==="gable"||t.kind==="roof")&&e<.85){t.state=1,t.anim={type:"lean",t:0,amp:.22+e*.12},this.audio?.creak(.9);return}t.state=2,t.kind==="wall"||t.kind==="gable"?t.anim={type:"fall",t:0,w:0,a:t.obj.rotation.x}:t.kind==="roof"?t.anim={type:"slide",t:0}:t.anim={type:"fly",t:0},this.audio?.crack(e)}}updatePieces(t,e){for(let n of this.pieces){let i=n.anim;if(!i)continue;i.t+=t;let r=n.obj;if(i.type==="lean"){let o=n.fallDir*i.amp;r.rotation.x=n.baseRot.x+o+Math.sin(i.t*9)*.18*Math.exp(-i.t*2.2),i.t>2&&(n.anim=null)}else if(i.type==="fall"){let o=Math.abs(r.rotation.x-n.baseRot.x);i.w+=(7*Math.sin(o)+1.4)*t,o+=i.w*t,o>=Math.PI/2&&(o=Math.PI/2,i.landed?i.w=Math.min(0,i.w)*.2:(this.onWallLanded(n,e),i.landed=!0,i.w=-i.w*.22)),o<0&&(o=0),r.rotation.x=n.baseRot.x+n.fallDir*o,i.landed&&i.t>1.6&&(n.anim=null,r.rotation.x=n.baseRot.x+n.fallDir*Math.PI/2,(n.kind==="gable"||!this.wallStaysOnDeck(n))&&this.dropOverboard(n,e,{vy:.5,out:1.5}))}else i.type==="slide"?(r.rotation.x+=n.fallDir*t*1.4,r.position.y-=t*(1+i.t*4),r.position.z+=n.fallDir*t*(1.5+i.t*3),i.t>.45&&(n.anim=null,this.dropOverboard(n,e,{vy:1,out:3}))):i.type==="fly"&&(n.anim=null,this.dropOverboard(n,e,{vy:3+Math.random()*2,out:3.5}))}}wallStaysOnDeck(t){return t.inward||t.kind==="wall"&&t.center.z>-1&&t.fallDir>0&&Math.abs(t.center.x)<1}onWallLanded(t,e){if(this.audio?.thud(.8),ie.copy(t.center),ie.y=xt+.2,this.tilt.localToWorld(ie),this.fx.dust(ie,1.2),this.ui?.popup("\uCFF5!",ie,"thud"),t.keaton){let n=this.views[t.keaton],i=e.owners[t.keaton];i.state==="aboard"&&!i.sawing&&(Math.hypot(n.pos.x-n.def.x,n.pos.y-n.def.z)<.45?(n.onKeaton(),this.ui?.say(t.keaton,"\u2026\u2026"),this.ui?.popup("\uD734\u2026",ie,"small"),e.stats.keaton=(e.stats.keaton||0)+1):n.onBonk())}else if(t.kind==="wall")for(let n of["L","R"]){let i=this.views[n];e.owners[n].state==="aboard"&&Math.sign(i.pos.x)===Math.sign(t.center.x)&&Math.abs(t.center.x)>1&&Math.abs(i.pos.x)<3.6&&i.pos.y<-.4&&i.onBonk()}}dropOverboard(t,e,n={}){let i=t.obj;if(!i.parent)return;this.scene.attach(i),ie.copy(t.center),this.tilt.localToWorld(ie),fh.copy(this.root.position);let r=new R().subVectors(ie,fh).setY(0).normalize().multiplyScalar(n.out??2);this.addDebris(i,{vx:r.x,vy:n.vy??1.5,vz:r.z,spin:2,game:e}),t.state=2}addDebris(t,{vx:e=0,vy:n=0,vz:i=0,spin:r=1,local:o=!1,game:a}={}){o&&(ie.set(e,0,i).applyQuaternion(this.tilt.getWorldQuaternion(U_)),e=ie.x,i=ie.z);let c=a?.house;this.debris.push({obj:t,vx:e,vy:n,vz:i,sx:(Math.random()-.5)*r,sz:(Math.random()-.5)*r,t:0,floating:!1,d:c?c.d:0})}updateDebris(t,e){let n=e.house;for(let i=this.debris.length-1;i>=0;i--){let r=this.debris[i];r.t+=t;let o=r.obj;if(!r.floating)r.vy-=14*t,o.position.x+=r.vx*t,o.position.y+=r.vy*t,o.position.z+=r.vz*t,o.rotation.x+=r.sx*t,o.rotation.z+=r.sz*t,o.position.y<.05&&r.vy<0&&(r.floating=!0,this.fx.splash(o.position,.8),this.audio?.plop(.6));else{let a=Dn(r.d),c=nn(r.d)*.55;r.d+=c*t,r.vx*=Math.exp(-t*1.5),r.vz*=Math.exp(-t*1.5),o.position.x+=(Math.sin(a)*c+r.vx)*t,o.position.z+=(-Math.cos(a)*c+r.vz)*t,o.position.y=De(o.position.y,-.15+Math.sin(r.t*2.5+i)*.08,.1),o.rotation.x=De(o.rotation.x,Math.round(o.rotation.x/Math.PI)*Math.PI+Math.sin(r.t*2)*.1,.05),o.rotation.y+=r.sx*.2*t}(r.t>22||n&&r.d<n.d-80)&&(o.parent?.remove(o),this.debris.splice(i,1))}}onDetach(t,e){let n=t.id,i=t.part,r=this.parts[i];this.present.delete(i),this.skirts[i].visible=!1;let[o,a,c,l]=gn[i].rect;for(let g of this.props)g.alive&&g.obj.parent===this.tilt&&g.x>=o-.05&&g.x<=a+.05&&g.z>=c-.05&&g.z<=l+.05&&(r.add(g.obj),g.alive=!1);for(let g of this.pieces)g.part===i&&(g.anim=null);let h=(o+a)/2,u=(c+l)/2,f=new wt;f.rotation.order="YXZ",this.scene.add(f),this.root.updateWorldMatrix(!0,!0),ie.set(h,0,u),this.tilt.localToWorld(ie),f.position.copy(ie),f.rotation.y=this.root.rotation.y,f.updateWorldMatrix(!0,!1),f.attach(r);let p=hc([o-h,a-h,c-u,l-u]);f.add(p);let m=this.cuts[n];m.white.count=0,m.black.count=0,m.marker.visible=!1;let x={container:f,inner:r,kind:"room",id:n,t:0,drop:0,skirt:p,lx:h,lz:u};this.floaterViews.set(`room-${n}`,x),this.views[n].forced=null,this.fx.splash(f.position,2.2),this.fx.ring(f.position,3)}updateFloaters(t,e){for(let n of e.floaters){let i=n.kind==="room"?`room-${n.id}`:`swim-${n.id}`,r=this.floaterViews.get(i);if(!r||r.parked)continue;r.t+=t,ne(n.u,n.d,Vs);let o=rh(n.u,n.d),a=0;r.kind==="room"?a=r.t<.5?-Math.sin(r.t/.5*Math.PI)*.55:Math.sin(r.t*2.2)*.06:a=-.35+Math.sin(r.t*2.6)*.08,r.container.position.set(Vs.x,o+a,Vs.z),r.container.rotation.y=-(Dn(n.d)+n.psi),r.container.rotation.z=Math.sin(r.t*1.7)*.05,r.container.rotation.x=Math.sin(r.t*1.3)*.04,r.container.visible=n.visible!==!1||r.keep}}onShatter(t,e){let n=t.rider;for(let a of["core","L","R","C"]){let c=this.parts[a];if(!c.parent||c.parent!==this.tilt)continue;this.skirts[a].visible=!1;let l=[...c.children];for(let h of l){if(h===this.views[n].root||bn.some(f=>this.views[f].root===h)||h===this.extras.door)continue;this.scene.attach(h);let u=new R().subVectors(h.getWorldPosition(ie),this.root.position).setY(0);u.lengthSq()<.01&&u.set(Math.random()-.5,0,Math.random()-.5),u.normalize().multiplyScalar(3+Math.random()*4),this.addDebris(h,{vx:u.x,vy:3+Math.random()*5,vz:u.z,spin:6,game:e})}this.present.delete(a)}for(let a of this.props)a.alive&&a.obj.parent===this.tilt&&(a.vx=(Math.random()-.5)*8,a.vz=(Math.random()-.5)*8,this.throwOverboard(a,e,1));for(let a of["L","R","C"]){let c=this.cuts[a];c.white.count=0,c.black.count=0,c.marker.visible=!1}this.extras.door&&this.extras.door.parent?.remove(this.extras.door);let i=tf();this.tilt.add(i),this.doorRaft=i;let r=hc(gn.door.rect,.3);this.root.add(r),this.skirts.door=r;let o=this.views[n];i.attach(o.root),o.root.position.set(0,.25,.25),o.def={...o.def,x:0,z:.25},o.pos.set(0,.25),o.ch.root.scale.setScalar(.9);for(let a of t.overboard){let c=this.views[a],l=new wt;l.rotation.order="YXZ",this.scene.add(l),l.position.copy(c.root.getWorldPosition(ie)),H(F.box(1.6,.14,.7),"#c89a5e",l,[0,0,0],[0,0,0],.03),l.attach(c.root),c.root.position.set(0,-.2,0),c.root.rotation.set(0,0,0),c.pos.set(0,0),this.floaterViews.set(`swim-${a}`,{container:l,kind:"swim",id:a,t:0})}this.fx.burst(this.root.position,3),this.fx.splash(this.root.position,3)}attachMooring(t){let e=F.cyl(.03,.03,1,5);e.translate(0,.5,0);let n=new kt(e,Ae("#d9c28a"));this.scene.add(n),this.mooring={rope:n,anchor:t.clone(),snapped:!1,t:0}}snapMooring(){!this.mooring||this.mooring.snapped||(this.mooring.snapped=!0,this.audio?.snap(),this.ui?.popup("\uD22D!",this.mooring.anchor,"small"))}updateMooring(t,e){let n=this.mooring;if(ie.set(-3.9,xt-.1,-2),this.tilt.localToWorld(ie),n.snapped){n.t+=t,n.rope.scale.y=Math.max(.01,n.rope.scale.y*Math.exp(-t*6)),n.t>1&&(n.rope.parent?.remove(n.rope),this.mooring=null);return}let i=fh.subVectors(ie,n.anchor),r=i.length();n.rope.position.copy(n.anchor),n.rope.scale.set(1,r,1),n.rope.quaternion.setFromUnitVectors(new R(0,1,0),i.normalize())}ownerScreenAnchor(t,e){return this.views[t].chestWorld(e)}toPartLocal(t,e,n){return n.copy(e)}dispose(){this.root.parent?.remove(this.root);for(let t of this.floaterViews.values())t.container.parent?.remove(t.container);for(let t of this.debris)t.obj.parent?.remove(t.obj);this.mooring?.rope.parent?.remove(this.mooring.rope)}};var Ei=new R,Wn=new R,Gs=new R,xc=new R,ph=new R,of=new Xt,Ws=2.25,_c=class{constructor(t,e,n){this.house=t,this.fx=e,this.audio=n;let i=new wt;H(F.cyl(.045,.05,Ws-.5,8),"#d9a066",i,[0,.5+(Ws-.5)/2,0],[0,0,0],.02);let r=H(F.box(.34,.66,.05),"#c98a4a",i,[0,.3,0],[0,0,0],.025);H(F.box(.36,.1,.06),"#e8483b",r,[0,.12,0],[0,0,0],0),H(F.box(.36,.1,.06),"#ffffff",r,[0,.02,0],[0,0,0],0),H(F.box(.36,.1,.06),"#3a7ee6",r,[0,-.08,0],[0,0,0],0),H(F.box(.26,.07,.07),"#8d5a2b",i,[0,Ws,0],[0,0,0],.015),Ze(i),this.obj=i,this.flight=null,this.trailT=0,t.tilt.add(i)}onThrow(t){this.house.tilt.attach(this.obj);let n=this.obj.position.clone().add(Ei.set(0,Ws/2,0).applyQuaternion(this.obj.quaternion));this.flight={from:t.from,to:t.to,start:n,dur:t.dur},this.audio?.whoosh()}update(t,e){let n=e.paddle,i=this.house.tilt;if(n.flight&&this.flight){let a=Math.min(1,n.flight.t/n.flight.dur);this.house.views[n.flight.to].handWorld(1,Wn),i.worldToLocal(Wn);let l=this.flight.start,h=(1-a)*(1-a),u=2*(1-a)*a,f=a*a,p=Math.max(l.y,Wn.y)+1.3;this.obj.position.set(h*l.x+u*((l.x+Wn.x)/2)+f*Wn.x,h*l.y+u*p+f*Wn.y,h*l.z+u*((l.z+Wn.z)/2)+f*Wn.z),this.obj.rotation.set(Math.PI/2-a*Math.PI*3,0,.5,"ZXY"),Ei.set(0,Ws/2,0).applyQuaternion(this.obj.quaternion),this.obj.position.sub(Ei),this.trailT-=t,this.trailT<=0&&(this.trailT=.025,this.obj.updateWorldMatrix(!0,!1),Ei.set(0,Ws/2,0).applyMatrix4(this.obj.matrixWorld),this.fx.puff(Ei,new R(0,.2,0),{life:.25,size:.12,grow:-.8,gravity:0,drag:0,color:"#ffffff"}));return}this.flight=null;let r=n.holder?this.house.views[n.holder]:null;if(!r||e.owners[n.holder].state!=="aboard"){this.obj.visible=!!r;return}this.obj.visible=!0;let o=r.ch.root;this.obj.parent!==o&&o.attach(this.obj),Ei.copy(r.paddleTip),Wn.copy(r.paddleGrip),Gs.subVectors(Wn,Ei).normalize(),xc.set(0,0,1).addScaledVector(Gs,-Gs.z).normalize(),ph.crossVectors(Gs,xc).normalize(),xc.crossVectors(ph,Gs),of.makeBasis(ph,Gs,xc),this.obj.quaternion.setFromRotationMatrix(of),this.obj.position.copy(Ei)}};var Ve={x:0,z:0},Sn={x:0,z:0},yc=class{constructor(t){this.cam=t,this.pos=new R(0,20,20),this.look=new R,this.u=0,this.d=-10,this.shakeAmp=0,this.kick=0,this.zoom=0,this.t=0,this.mode="title",this.blend=1,this.fovBase=56,this.aspect=.5,this.orbit=0,this.endFrom=null}shake(t){this.shakeAmp=Math.min(1.2,this.shakeAmp+t)}punch(t){this.kick=Math.min(1,this.kick+t)}setMode(t){this.mode!==t&&(this.mode=t,this.blend=0)}resize(t){this.aspect=t,this.cam.aspect=t,this.fovBase=t<.5?58:t<.62?55:50,this.cam.updateProjectionMatrix()}update(t,e,n={}){this.t+=t;let i=e.house,r=It((.62-this.aspect)/.2,0,1),o,a,c,l,h,u;if(this.mode==="title"){this.orbit+=t*.12,ne(i.u,i.d,Ve);let _=this.orbit,T=15;o=Ve.x+Math.sin(_)*T,c=Ve.z+Math.cos(_)*T,a=9.5,l=Ve.x,h=-3.2,u=Ve.z}else if(this.mode==="end"){let _=Math.sin(this.t*.25)*1.2;ne(i.u+_+(n.endU||0),i.d+15.5,Ve),ne(i.u,i.d+3.2,Sn),o=Ve.x,c=Ve.z,a=12.5+(n.endH||0),l=Sn.x,h=.4,u=Sn.z}else if(this.mode==="close")ne(i.u+(this.closeLook||0),i.d-7*(this.closeDist||1),Ve),ne(i.u+(this.closeLook||0),i.d,Sn),o=Ve.x+(this.closeSide||0),c=Ve.z,a=6.5*(this.closeDist||1),l=Sn.x,h=1,u=Sn.z;else if(this.mode==="fail")ne(i.u,i.d-12,Ve),ne(i.u,i.d+2,Sn),o=Ve.x,c=Ve.z,a=24,l=Sn.x,h=0,u=Sn.z;else{let _=Me(i.d),T=It(i.u*.85,-_+4,_-4);this.u=ze(this.u,T,5,t),this.d=i.d;let E=nn(i.d),A=It((E-7)/4,0,1),P=13+r*2.2-A*1-this.zoom*3,v=16.5+r*2.4-A*.8-this.zoom*3.5,y=14+A*4;ne(this.u,this.d-P,Ve),ne(this.u,this.d+y,Sn),o=Ve.x,c=Ve.z,a=v,l=Sn.x,h=0,u=Sn.z}this.blend=Math.min(1,this.blend+t*(this.mode==="play"?.8:.45));let f=this.mode==="play"&&this.blend>=1?1:1-Math.pow(1-this.blend,3),p=this.mode==="play"&&this.blend>=1?30:2.2+f*6;this.pos.x=ze(this.pos.x,o,p,t),this.pos.y=ze(this.pos.y,a,p,t),this.pos.z=ze(this.pos.z,c,p,t),this.look.x=ze(this.look.x,l,p,t),this.look.y=ze(this.look.y,h,p,t),this.look.z=ze(this.look.z,u,p,t),this.shakeAmp=Math.max(0,this.shakeAmp-t*1.6),this.kick=Math.max(0,this.kick-t*3);let m=this.shakeAmp*this.shakeAmp*.9,x=e.house.scraping*.12,g=tn(this.t*23)*(m+x),d=tn(this.t*19+7)*(m+x)*.6;this.cam.position.set(this.pos.x+g,this.pos.y+d,this.pos.z),this.cam.lookAt(this.look.x+g*.5,this.look.y,this.look.z);let M=nn(i.d),b=this.fovBase+It((M-8)*.9,0,4)-this.kick*3+(this.mode==="end"?4:0);Math.abs(this.cam.fov-b)>.01&&(this.cam.fov=De(this.cam.fov,b,Math.min(1,t*6)),this.cam.updateProjectionMatrix())}};var af=420,cf=320,mh=48,Xs=new Xt,vc=new we,N_=new Oe,qs=new R,lf=new R,Mc=class{constructor(t){this.scene=t,this.puffMesh=new Be(F.ico(1,1),Ae("#ffffff",{steps:2}),af),this.bitMesh=new Be(F.box(1,1,1),Ae("#ffffff"),cf);for(let n of[this.puffMesh,this.bitMesh])n.instanceMatrix.setUsage(Cl),n.frustumCulled=!1,n.count=0,n.setColorAt(0,new Et("#fff")),t.add(n);let e=new Rr(.8,1,28);e.rotateX(-Math.PI/2),this.ringAlpha=new _i(new Float32Array(mh),1),e.setAttribute("aAlpha",this.ringAlpha),this.ringMesh=new Be(e,new Ce({transparent:!0,depthWrite:!1,vertexShader:"attribute float aAlpha; varying float vA; void main(){ vA = aAlpha; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position,1.0); }",fragmentShader:"varying float vA; void main(){ if (vA <= 0.01) discard; gl_FragColor = vec4(0.97, 0.99, 1.0, vA); }"}),mh),this.ringMesh.frustumCulled=!1,this.ringMesh.count=0,t.add(this.ringMesh),this.puffs=[],this.bits=[],this.rings=[]}puff(t,e,{life:n=1,size:i=.3,grow:r=1.5,gravity:o=0,drag:a=1,color:c="#ffffff"}={}){this.puffs.length>=af&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),t:0,life:n,size:i,grow:r,gravity:o,drag:a,color:new Et(c)})}bit(t,e,{life:n=1.5,size:i=[.05,.05,.3],gravity:r=14,color:o="#9c6a3c",spin:a=10,floor:c=-.2}={}){this.bits.length>=cf&&this.bits.shift(),this.bits.push({p:t.clone(),v:e.clone(),t:0,life:n,size:i,gravity:r,color:new Et(o),r:new Oe(Math.random()*6,Math.random()*6,Math.random()*6),w:new R((Math.random()-.5)*a,(Math.random()-.5)*a,(Math.random()-.5)*a),floor:c})}ring(t,e=1,n=.9){this.rings.length>=mh&&this.rings.shift(),this.rings.push({p:new R(t.x,.06,t.z),t:0,life:n,size:e})}splash(t,e=1){let n=Math.round(6+8*e);for(let i=0;i<n;i++){let r=Math.random()*Math.PI*2,o=Math.random()*2*e;this.puff(new R(t.x+Math.cos(r)*.3,Math.max(.1,t.y),t.z+Math.sin(r)*.3),new R(Math.cos(r)*o,2.5+Math.random()*3.5*e,Math.sin(r)*o),{life:.55+Math.random()*.35,size:.16+.14*e*Math.random(),grow:-.6,gravity:12,drag:.5,color:Math.random()<.3?"#cfefff":"#ffffff"})}this.ring(t,.8+e*.7)}paddleSplash(t,e=1){let n=Math.round(5+9*e);for(let i=0;i<n;i++){let r=Math.random()*Math.PI*2,o=(.6+Math.random()*1.6)*e;this.puff(new R(t.x,.15,t.z),new R(Math.cos(r)*o,3+Math.random()*3*e,Math.sin(r)*o),{life:.5+Math.random()*.3,size:.12+.12*Math.random()*e,grow:-.7,gravity:13,drag:.4})}this.ring(t,.6+.6*e,.7)}drip(t){this.puff(new R(t.x,Math.max(.1,t.y+.2),t.z),new R((Math.random()-.5)*1.5,1.5+Math.random()*1.5,(Math.random()-.5)*1.5),{life:.4,size:.08+Math.random()*.05,grow:-.8,gravity:12,drag:.2})}spray(t,e,n=1){let i=Math.round(4+8*n);for(let r=0;r<i;r++){let o=new R(e.x*(3+Math.random()*4)+(Math.random()-.5)*3,4+Math.random()*3*n,e.z*(3+Math.random()*4)+(Math.random()-.5)*3);this.puff(new R(t.x+(Math.random()-.5)*3,t.y,t.z+(Math.random()-.5)*3),o,{life:.7+Math.random()*.3,size:.14+Math.random()*.16,grow:-.5,gravity:11,drag:.3,color:Math.random()<.4?"#d6f2ff":"#ffffff"})}}steam(t,e=1){for(let n=0;n<2;n++)this.puff(new R(t.x+(Math.random()-.5)*.15,t.y,t.z+(Math.random()-.5)*.15),new R((Math.random()-.5)*.6,1.8+Math.random()*1.2,(Math.random()-.5)*.6),{life:.8,size:.09*e+.05,grow:2.2,gravity:-.5,drag:1.5,color:"#ffffff"})}smoke(t){this.puff(t,new R((Math.random()-.5)*.4,1+Math.random()*.4,.6),{life:2.2,size:.18,grow:1.8,gravity:-.3,drag:.5,color:"#e9e6e0"})}sawdust(t){for(let e=0;e<3;e++)this.bit(t,new R((Math.random()-.5)*2,1+Math.random()*1.5,(Math.random()-.5)*2),{life:.6,size:[.04,.04,.04],gravity:9,color:Math.random()<.5?"#e8c38a":"#d4a868",spin:8})}splinters(t,e=12){for(let n=0;n<e;n++){let i=Math.random()*Math.PI*2,r=2+Math.random()*4;this.bit(t,new R(Math.cos(i)*r,2+Math.random()*4,Math.sin(i)*r),{life:1.2,size:[.05,.05,.18+Math.random()*.25],gravity:14,color:Math.random()<.5?"#b5803f":"#8d5a2b",spin:14})}}dust(t,e=1){for(let n=0;n<10*e;n++){let i=n/(10*e)*Math.PI*2;this.puff(new R(t.x,t.y,t.z),new R(Math.cos(i)*2.5,.4+Math.random()*.5,Math.sin(i)*2.5),{life:.8,size:.2,grow:1.6,gravity:0,drag:3,color:"#efe3cc"})}}burst(t,e=1){for(let n=0;n<26*e;n++){let i=Math.random()*Math.PI*2,r=3+Math.random()*6;this.bit(t,new R(Math.cos(i)*r,3+Math.random()*7,Math.sin(i)*r),{life:2,size:[.12,.08,.5+Math.random()*.7],gravity:13,color:Math.random()<.5?"#c99a5e":"#9c6a3c",spin:10})}this.dust(new R(t.x,1,t.z),2)}confetti(t,e=60){let n=["#e8483b","#f2b62c","#3a7ee6","#4fbf6a","#f08ad0","#ffffff"];for(let i=0;i<e;i++){let r=Math.random()*Math.PI*2,o=1+Math.random()*4;this.bit(t,new R(Math.cos(r)*o,6+Math.random()*6,Math.sin(r)*o),{life:3.5,size:[.12,.02,.18],gravity:4,color:n[i%n.length],spin:12,floor:-5})}}stars(t){for(let e=0;e<6;e++){let n=e/6*Math.PI*2;this.puff(t,new R(Math.cos(n)*2,1.5,Math.sin(n)*2),{life:.6,size:.1,grow:-.5,gravity:4,drag:1,color:"#ffd23a"})}}update(t){let e=0;for(let n=this.puffs.length-1;n>=0;n--){let i=this.puffs[n];if(i.t+=t,i.t>=i.life){this.puffs.splice(n,1);continue}if(i.v.y-=i.gravity*t,i.v.multiplyScalar(Math.exp(-i.drag*t)),i.p.addScaledVector(i.v,t),i.p.y<-.1&&i.gravity>0){this.puffs.splice(n,1);continue}}for(let n of this.puffs){let i=n.t/n.life,r=n.size*(1+n.grow*i);i>.75&&(r*=1-(i-.75)/.25),r=Math.max(.001,r),qs.set(r,r,r),Xs.compose(n.p,vc.identity(),qs),this.puffMesh.setMatrixAt(e,Xs),this.puffMesh.setColorAt(e,n.color),e++}this.puffMesh.count=e,this.puffMesh.instanceMatrix.needsUpdate=!0,this.puffMesh.instanceColor&&(this.puffMesh.instanceColor.needsUpdate=!0),e=0;for(let n=this.bits.length-1;n>=0;n--){let i=this.bits[n];if(i.t+=t,i.t>=i.life){this.bits.splice(n,1);continue}i.v.y-=i.gravity*t,i.p.addScaledVector(i.v,t),i.p.y<i.floor&&(i.p.y=i.floor,i.v.multiplyScalar(.3),i.v.y=0),i.r.x+=i.w.x*t,i.r.y+=i.w.y*t,i.r.z+=i.w.z*t}for(let n of this.bits){let i=n.t/n.life,r=i>.8?1-(i-.8)/.2:1;vc.setFromEuler(N_.set(n.r.x,n.r.y,n.r.z)),qs.set(n.size[0]*r,n.size[1]*r,n.size[2]*r),Xs.compose(n.p,vc,qs),this.bitMesh.setMatrixAt(e,Xs),this.bitMesh.setColorAt(e,n.color),e++}this.bitMesh.count=e,this.bitMesh.instanceMatrix.needsUpdate=!0,this.bitMesh.instanceColor&&(this.bitMesh.instanceColor.needsUpdate=!0),e=0;for(let n=this.rings.length-1;n>=0;n--){let i=this.rings[n];i.t+=t,i.t>=i.life&&this.rings.splice(n,1)}for(let n of this.rings){let i=n.t/n.life,r=n.size*(.5+1.6*Math.sqrt(i));lf.copy(n.p),qs.set(r,1,r),Xs.compose(lf,vc.identity(),qs),this.ringMesh.setMatrixAt(e,Xs),this.ringAlpha.setX(e,(1-i)*.9),e++}this.ringMesh.count=e,this.ringMesh.instanceMatrix.needsUpdate=!0,this.ringAlpha.needsUpdate=!0}clear(){this.puffs.length=0,this.bits.length=0,this.rings.length=0}};var hf=[[800,1200],[500,1900],[320,2300],[520,900],[340,780],[650,1700]],uf={L:{base:118,spread:.25,rate:.085},R:{base:245,spread:.3,rate:.07},C:{base:170,spread:.2,rate:.08}},Sc=class{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!0,this.ready=!1,this.creakT=1,this.sawT=0,this.sawUp=!1,this.music=null,this.lastVoice={L:-1,C:-1,R:-1}}init(){if(this.ctx){this.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.amb=e.createGain(),this.amb.gain.value=.8,this.amb.connect(this.master),this.voiceBus=e.createGain(),this.voiceBus.gain.value=1.3,this.voiceBus.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.16,this.musicBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this.impulse(2.6,2.2),this.revWet=e.createGain(),this.revWet.gain.value=.05,this.reverb.connect(this.revWet).connect(this.master),this.sfx.connect(this.reverb),this.voiceBus.connect(this.reverb),this.white=this.noiseBuffer("white"),this.pink=this.noiseBuffer("pink"),this.brown=this.noiseBuffer("brown"),this.buildAmbience(),this.ready=!0}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}noiseBuffer(t){let e=this.ctx,n=e.sampleRate*2,i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0),o=0,a=0,c=0,l=0,h=0,u=0,f=0,p=0;for(let m=0;m<n;m++){let x=Math.random()*2-1;t==="white"?r[m]=x:t==="pink"?(o=.99886*o+x*.0555179,a=.99332*a+x*.0750759,c=.969*c+x*.153852,l=.8665*l+x*.3104856,h=.55*h+x*.5329522,u=-.7616*u-x*.016898,r[m]=(o+a+c+l+h+u+f+x*.5362)*.11,f=x*.115926):(p=(p+.02*x)/1.02,r[m]=p*3.5)}return i}impulse(t,e){let n=this.ctx,i=Math.floor(n.sampleRate*t),r=n.createBuffer(2,i,n.sampleRate);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let c=0;c<i;c++)a[c]=(Math.random()*2-1)*Math.pow(1-c/i,e)*(c%2700<60?2.2:1)}return r}loop(t){let e=this.ctx.createBufferSource();return e.buffer=t,e.loop=!0,e.start(0,Math.random()*1.5),e}buildAmbience(){let t=this.ctx;this.rushF=t.createBiquadFilter(),this.rushF.type="lowpass",this.rushF.frequency.value=700,this.rushG=t.createGain(),this.rushG.gain.value=0,this.loop(this.pink).connect(this.rushF).connect(this.rushG).connect(this.amb),this.roarF=t.createBiquadFilter(),this.roarF.type="bandpass",this.roarF.frequency.value=1400,this.roarF.Q.value=.5,this.roarG=t.createGain(),this.roarG.gain.value=0,this.roarPan=t.createStereoPanner(),this.loop(this.white).connect(this.roarF).connect(this.roarG).connect(this.roarPan).connect(this.amb),this.roarG.connect(this.reverb),this.gurF=t.createBiquadFilter(),this.gurF.type="bandpass",this.gurF.frequency.value=320,this.gurF.Q.value=3,this.gurG=t.createGain(),this.gurG.gain.value=0,this.loop(this.brown).connect(this.gurF).connect(this.gurG).connect(this.amb),this.whirlF=t.createBiquadFilter(),this.whirlF.type="bandpass",this.whirlF.Q.value=4,this.whirlF.frequency.value=500,this.whirlG=t.createGain(),this.whirlG.gain.value=0;let e=t.createOscillator();e.frequency.value=.9;let n=t.createGain();n.gain.value=300,e.connect(n).connect(this.whirlF.frequency),e.start(),this.loop(this.pink).connect(this.whirlF).connect(this.whirlG).connect(this.amb),this.scrF=t.createBiquadFilter(),this.scrF.type="bandpass",this.scrF.frequency.value=2400,this.scrF.Q.value=6,this.scrG=t.createGain(),this.scrG.gain.value=0,this.loop(this.white).connect(this.scrF).connect(this.scrG).connect(this.sfx)}update(t,e){if(!this.ready)return;let n=this.ctx.currentTime,i=e.active?1:.35;this.rushG.gain.setTargetAtTime((.14+.1*e.speedK)*i,n,.3),this.rushF.frequency.setTargetAtTime(500+900*e.speedK+600*e.roar,n,.3),this.roarG.gain.setTargetAtTime((.03+.36*e.roar*e.roar+.08*e.rough)*i,n,.12),this.roarF.frequency.setTargetAtTime(1e3+1400*e.roar,n,.2),this.roarPan.pan.setTargetAtTime(Math.max(-.8,Math.min(.8,e.roarPan||0)),n,.2),this.gurG.gain.setTargetAtTime((.1+.25*e.rough)*i,n,.4),this.gurF.frequency.setTargetAtTime(250+Math.random()*250,n,.1),this.whirlG.gain.setTargetAtTime(.5*e.whirl,n,.25),this.scrG.gain.setTargetAtTime(.16*e.scrape,n,.05),this.scrF.frequency.setTargetAtTime(1800+Math.random()*1200,n,.03),this.revWet.gain.setTargetAtTime(.05+.5*e.canyon,n,.5),this.musicBus.gain.setTargetAtTime(this.musicOn?.15*(1-.45*e.roar):0,n,.4),this.creakT-=t,e.active&&this.creakT<=0&&(this.creakT=2.6-1.8*Math.max(e.roar,e.damage,e.sway)+Math.random()*1.5,this.creak(.35+.5*Math.max(e.damage,e.sway))),e.sawing>0&&(this.sawT-=t,this.sawT<=0&&(this.sawT=.17,this.sawUp=!this.sawUp,this.sawStroke(this.sawUp,e.sawPan||0))),this.music&&this.music.update(e)}env(t,e,n,i,r){t.gain.cancelScheduledValues(e),t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(Math.max(2e-4,i),e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+r)}noiseShot({buf:t=this.white,type:e="bandpass",f0:n=1e3,f1:i=n,q:r=1,a:o=.005,d:a=.2,peak:c=.3,pan:l=0,dest:h=this.sfx,delay:u=0}){if(!this.ready)return;let f=this.ctx,p=f.currentTime+u,m=f.createBufferSource();m.buffer=t;let x=f.createBiquadFilter();x.type=e,x.Q.value=r,x.frequency.setValueAtTime(n,p),x.frequency.exponentialRampToValueAtTime(Math.max(20,i),p+o+a);let g=f.createGain();this.env(g,p,o,c,a);let d=f.createStereoPanner();d.pan.value=l,m.connect(x).connect(g).connect(d).connect(h),m.start(p,Math.random()),m.stop(p+o+a+.05)}tone({type:t="sine",f0:e=440,f1:n=e,a:i=.005,d:r=.2,peak:o=.2,pan:a=0,dest:c=this.sfx,delay:l=0,curve:h="exp"}){if(!this.ready)return;let u=this.ctx,f=u.currentTime+l,p=u.createOscillator();p.type=t,p.frequency.setValueAtTime(e,f),h==="exp"?p.frequency.exponentialRampToValueAtTime(Math.max(20,n),f+i+r):p.frequency.linearRampToValueAtTime(n,f+i+r);let m=u.createGain();this.env(m,f,i,o,r);let x=u.createStereoPanner();return x.pan.value=a,p.connect(m).connect(x).connect(c),p.start(f),p.stop(f+i+r+.05),p}splash(t=.6,e=0){this.noiseShot({type:"lowpass",f0:3500,f1:400,q:.7,a:.01,d:.25+.25*t,peak:.35+.55*t,pan:e*.6}),this.tone({f0:260,f1:70,d:.12,peak:.22*t,pan:e*.6})}plop(t=.5){this.tone({f0:700,f1:160,d:.1,peak:.18*t}),this.noiseShot({type:"lowpass",f0:2e3,f1:300,d:.2,peak:.15*t})}whoosh(){this.noiseShot({type:"bandpass",f0:500,f1:2600,q:1.6,a:.03,d:.22,peak:.35})}catchTok(t=0){this.tone({type:"triangle",f0:700,f1:520,d:.08,peak:.35,pan:t}),this.noiseShot({type:"highpass",f0:2500,d:.03,peak:.25,pan:t})}creak(t=.5){if(!this.ready)return;let e=this.ctx,n=e.currentTime,i=.35+Math.random()*.5,r=e.createOscillator();r.type="sawtooth";let o=32+Math.random()*40;r.frequency.setValueAtTime(o,n),r.frequency.linearRampToValueAtTime(o*(.6+Math.random()*.9),n+i);let a=e.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(700+Math.random()*700,n),a.frequency.linearRampToValueAtTime(500+Math.random()*900,n+i),a.Q.value=14;let c=e.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(1.1*t,n+.06),c.gain.setValueAtTime(1.1*t,n+i*.7),c.gain.exponentialRampToValueAtTime(1e-4,n+i),r.connect(a).connect(c).connect(this.sfx),r.start(n),r.stop(n+i+.05)}crack(t=.6){for(let e=0;e<3;e++)this.noiseShot({type:"highpass",f0:1800+Math.random()*1500,d:.03+Math.random()*.04,peak:.55*t,delay:e*(.02+Math.random()*.05)});this.tone({type:"square",f0:180,f1:90,d:.06,peak:.08*t})}thud(t=.7){this.tone({f0:110,f1:38,d:.3,peak:1*t}),this.noiseShot({type:"lowpass",f0:600,f1:120,d:.25,peak:.5*t})}crash(t=.8){this.thud(t),this.crack(t),this.splash(.6+.4*t),this.creak(.8)}snap(){this.noiseShot({type:"highpass",f0:3e3,d:.05,peak:.4}),this.tone({f0:300,f1:120,d:.1,peak:.2})}sawStroke(t,e=0){this.noiseShot({type:"bandpass",f0:t?2600:1600,f1:t?3400:1200,q:2.4,a:.03,d:.12,peak:.22,pan:e})}sawTwang(){if(!this.ready)return;let t=this.tone({type:"sine",f0:900,f1:900,d:.6,peak:.12});if(!t)return;let e=this.ctx.createOscillator();e.frequency.value=9;let n=this.ctx.createGain();n.gain.value=120,e.connect(n).connect(t.frequency),e.start(),e.stop(this.ctx.currentTime+.7)}drop(){this.tone({f0:1500,f1:1100,d:.05,peak:.35}),this.tone({type:"sine",f0:1700,f1:260,a:.02,d:.65,peak:.16,delay:.25,curve:"exp"}),setTimeout(()=>this.splash(1),520)}slideUp(){this.tone({type:"sine",f0:300,f1:1500,a:.02,d:.45,peak:.13})}clatter(t,e=.5){if(!this.ready)return;let n=this.ctx.currentTime;if(!(n-(this._lastClatter||0)<.05))if(this._lastClatter=n,t==="pot"||t==="kettle"||t==="bucket")for(let i of[1150,1870,3020])this.tone({f0:i*(.95+Math.random()*.1),d:.25,peak:.07*e});else t==="barrel"||t==="table"?this.tone({type:"triangle",f0:160,f1:90,d:.15,peak:.25*e}):t==="cat"?this.meow():(this.tone({type:"triangle",f0:420+Math.random()*200,f1:300,d:.06,peak:.2*e}),this.noiseShot({type:"bandpass",f0:1500,q:2,d:.04,peak:.15*e}))}meow(t=!1){if(!this.ready)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(600,n),i.frequency.linearRampToValueAtTime(900,n+.12),i.frequency.linearRampToValueAtTime(520,n+.4);let r=e.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(900,n),r.frequency.linearRampToValueAtTime(1800,n+.15),r.frequency.linearRampToValueAtTime(800,n+.4),r.Q.value=5;let o=e.createGain();this.env(o,n,.04,t?.3:.15,.38),i.connect(r).connect(o).connect(this.sfx),i.start(n),i.stop(n+.5)}steamWhistle(){this.tone({type:"sine",f0:1900,f1:2100,a:.08,d:.4,peak:.05,curve:"lin"})}nearMiss(t){this.noiseShot({type:"bandpass",f0:3e3,f1:400,q:1.2,a:.01,d:.45,peak:t?.4:.2}),t&&(this.tone({type:"triangle",f0:523,d:.12,peak:.12,delay:.05}),this.tone({type:"triangle",f0:784,d:.18,peak:.12,delay:.14}))}stinger(t){let e={section:[[659,0],[784,.09],[988,.18]],appease:[[784,0],[988,.08],[1319,.16]],whirl:[[392,0],[494,.08],[587,.16],[784,.24]],shatter:[[392,0],[349,.15],[330,.3],[262,.5]]}[t];if(e)for(let[n,i]of e)this.tone({type:"triangle",f0:n,d:.22,peak:.12,delay:i,dest:this.sfx})}fanfare(){let t=[[523,0,.18],[659,.18,.18],[784,.36,.18],[1047,.54,.6],[988,.9,.15],[1047,1.05,.8]];for(let[e,n,i]of t)this.tone({type:"square",f0:e,d:i,peak:.07,delay:n,dest:this.sfx}),this.tone({type:"triangle",f0:e/2,d:i,peak:.12,delay:n,dest:this.sfx})}failJingle(){let t=[[392,0,.3],[370,.3,.3],[349,.6,.3],[330,.9,.9]];for(let[e,n,i]of t)this.tone({type:"triangle",f0:e,f1:e*.98,d:i,peak:.16,delay:n,curve:"lin"})}ui(){this.tone({type:"triangle",f0:880,f1:1320,d:.07,peak:.15})}voice(t,e,n="normal"){if(!this.ready)return;let i=this.ctx,r=i.currentTime;if(r-this.lastVoice[t]<.25)return;let o=uf[t]||uf.C,a=Math.max(2,Math.min(7,Math.round((e||"").length/2))),c=o.rate*(n==="angry"?.85:1),l=r,h=t==="L"?-.5:t==="R"?.5:0;for(let u=0;u<a;u++){let f=i.createOscillator();f.type="sawtooth";let p=o.base*(1+(Math.random()-.5)*o.spread);n==="angry"&&(p*=1.15),n==="happy"&&(p*=1+u*.04),n==="sad"&&(p*=1-u*.04),f.frequency.setValueAtTime(p,l),f.frequency.linearRampToValueAtTime(p*(n==="happy"?1.12:.92),l+c);let[m,x]=hf[Math.floor(Math.random()*hf.length)],g=i.createBiquadFilter();g.type="bandpass",g.frequency.value=m,g.Q.value=5;let d=i.createBiquadFilter();d.type="bandpass",d.frequency.value=x,d.Q.value=7;let M=i.createGain();M.gain.setValueAtTime(1e-4,l),M.gain.exponentialRampToValueAtTime(.5,l+.012),M.gain.exponentialRampToValueAtTime(1e-4,l+c);let b=i.createStereoPanner();b.pan.value=h,f.connect(g).connect(M),f.connect(d).connect(M),M.connect(b).connect(this.voiceBus),f.start(l),f.stop(l+c+.02),l+=c+.018}this.lastVoice[t]=l}startMusic(){!this.ready||this.music||(this.music=new gh(this))}stopMusic(){this.music&&this.music.stop(),this.music=null}},bc=[67,71,74,71,72,71,69,67,64,67,72,67,69,67,64,62,66,69,74,69,72,69,66,62,67,0,71,0,74,-1,-1,0,64,67,71,67,69,71,72,71,72,74,76,74,72,71,69,67,69,71,72,74,76,74,72,69,67,71,67,62,67,-1,-1,0],df=[[55,59,62],[48,52,55],[50,54,57],[55,59,62],[52,55,59],[48,52,55],[50,54,57],[55,59,62]],eo=s=>440*Math.pow(2,(s-69)/12),gh=class{constructor(t){this.e=t,this.ctx=t.ctx,this.step=0,this.tempo=138,this.next=this.ctx.currentTime+.1,this.intensity=0,this.timer=setInterval(()=>this.schedule(),40)}stop(){clearInterval(this.timer)}update(t){this.intensity=t.musicIntensity??1,this.tempo=132+14*(t.speedK||0)}schedule(){let t=this.ctx;if(t.state!=="running"){this.next=t.currentTime+.1;return}let e=60/this.tempo/2;for(;this.next<t.currentTime+.15;)this.play(this.step,this.next,e),this.next+=e,this.step=(this.step+1)%bc.length}note(t,e,n,i,r,o=2500){let a=this.ctx.createOscillator();a.type=t,a.frequency.value=e;let c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=o;let l=this.ctx.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(r,n+.012),l.gain.exponentialRampToValueAtTime(1e-4,n+i),a.connect(c).connect(l).connect(this.e.musicBus),a.start(n),a.stop(n+i+.02)}drum(t,e,n){let i=this.e;if(e==="kick"){let r=this.ctx.createOscillator();r.frequency.setValueAtTime(140,t),r.frequency.exponentialRampToValueAtTime(45,t+.12);let o=this.ctx.createGain();o.gain.setValueAtTime(n,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.18),r.connect(o).connect(i.musicBus),r.start(t),r.stop(t+.2)}else{let r=this.ctx.createBufferSource();r.buffer=i.white;let o=this.ctx.createBiquadFilter();o.type=e==="hat"?"highpass":"bandpass",o.frequency.value=e==="hat"?6e3:1800;let a=this.ctx.createGain(),c=e==="hat"?.04:.12;a.gain.setValueAtTime(n,t),a.gain.exponentialRampToValueAtTime(1e-4,t+c),r.connect(o).connect(a).connect(i.musicBus),r.start(t,Math.random()),r.stop(t+c+.02)}}play(t,e,n){let i=Math.floor(t/8),r=t%8,o=df[i%df.length],a=this.intensity;if(r%4===0&&this.note("triangle",eo(o[0]-12),e,n*1.8,.5,900),r%4===2&&this.note("triangle",eo(o[2]-12),e,n*1.5,.35,900),r%2===1)for(let l of o)this.note("triangle",eo(l+12),e,n*.9,.07,3e3);let c=bc[t];if(a>.3&&c>0){let l=1;for(let h=t+1;h<bc.length&&bc[h]===-1;h++)l++;this.note("square",eo(c),e,n*l*.95,.06,1800),this.note("sawtooth",eo(c)*1.003,e,n*l*.95,.03,1400)}a>.6&&(r%4===0&&this.drum(e,"kick",.5),(r===2||r===6)&&this.drum(e,"snare",.25),this.drum(e,"hat",r%2?.08:.14))}};var F_={L:{intro:["\uC67C\uCABD \uAE30\uC2AD\uC774 \uC6B0\uB9AC \uC9D1 \uCABD\uC774\uC5EC!","\uC774 \uC9D1\uC740 \uB0B4 \uBA85\uC758\uC5EC!"],catch:["\uC67C\uCABD\uC774\uC9C0!","\uADF8\uB807\uC9C0! \uC67C\uCABD!","\uB0B4\uAC00 \uC800\uC5B4\uC57C\uC9C0!","\uC67C\uCABD\uC73C\uB85C \uC601\uCC28!"],eagerCatch:["\uB4DC\uB514\uC5B4!! \uC67C\uCABD!!","\uAE30\uB2E4\uB838\uB2E4 \uC774\uB188\uC544!"],stroke:["\uC601\uCC28!","\uC67C\uCABD!","\uC5B4\uC774\uCC28!"],rest:["\uBD10\uB77C, \uC67C\uCABD\uC774 \uB0AB\uC9C0","\uD760\uD760"],annoyed:["\uC67C\uCABD\uC774\uB77C\uB2C8\uAE4C\u2026","\uD765!","\uB0B4 \uC9D1\uC778\uB370\u2026"],steaming:["\uBD80\uAE00\uBD80\uAE00\u2026","\uCC38\uB294\uB2E4 \uCC38\uC544\u2026","\uB098\uB3C4 \uB178 \uC880 \uC918!"],saw:["\uC5B4\uB514 \uB450\uACE0 \uBCF4\uC790\u2026","\uD1B1\uC774 \uC798 \uB4DC\uB098 \uBCF4\uC790\u2026","\uD750\uD750\uD750\u2026"],sawing:["\uB0B4 \uBC29\uC740 \uB0B4\uAC00 \uAC00\uC838\uAC04\uB2E4!","\uC4F1\uC2F9\uC4F1\uC2F9!","\uBC18\uC758\uBC18\uB9CC \uAC00\uC838\uAC08\uAC8C!"],appeased:["\u2026\uD760, \uC9C4\uC791 \uC904 \uAC83\uC774\uC9C0.","\uD5D8\uD5D8, \uB0B4\uAC00 \uCC38\uC9C0."],farewell:["\uC798 \uC788\uC5B4\uB77C~!","\uB09C \uC67C\uCABD\uC73C\uB85C \uAC04\uB2E4~!","\uB0B4 \uBC29\uC740 \uB0B4 \uAC70\uC5EC~"],hit:["\uC544\uC774\uACE0 \uB0B4 \uC9D1!","\uBCBD\uC774!!","\uC5B4\uC774\uCFE0!"],near:["\uD734\uC6B0~","\uC0B4\uC558\uB2E4!","\uBD24\uB0D0 \uC774 \uC19C\uC528!"],dizzy:["\uC5B4\uC9C0\uB7EC\uC6CC~","\uD558\uB298\uC774 \uBE59\uAE00\uBE59\uAE00~"],protest:["\uC57C! \uADF8\uAC70 \uACF5\uB3D9\uBA85\uC758\uC5EC!","\uD1B1 \uB0B4\uB824\uB194!"],shock:["\uC5B4\uC5B4\uC5B4?!","\uC800, \uC800\u2026!"],already:["\uC774\uBBF8 \uB0B4 \uC190\uC5D0 \uC788\uB2E4!"],lone:["\uC774\uC81C \uB2E4 \uB0B4 \uAC70\uC5EC!"],ouch:["\uC544\uC57C!","\uC5B4\uC774\uCFE0 \uB0B4 \uBC1C!"],blame:["\uB2E4 \uB108 \uB54C\uBB38\uC774\uC5EC!","\uB178\uB97C \uADF8\uB807\uAC8C \uC800\uC73C\uB2C8\uAE4C!","\uB0B4\uAC00 \uC67C\uCABD\uC774\uB7AC\uC9C0!"]},R:{intro:["\uC624\uB978\uCABD \uAE30\uC2AD\uC5D0 \uB4F1\uAE30\uBD80\uAC00 \uC788\uB2E4\uB2C8\uAE4C!","\uC774 \uC9D1\uC740 \uB0B4 \uAC70\uC608\uC694!"],catch:["\uC624\uB978\uCABD\uC774 \uC815\uB2F5!","\uC774\uB9AC \uC918\uC694!","\uD638\uD638, \uB0B4 \uCC28\uB840!","\uC624\uB978\uCABD\uC73C\uB85C~"],eagerCatch:["\uC774\uC81C\uC57C \uC8FC\uB124!!","\uC624\uB978\uCABD!! \uC624\uB978\uCABD!!"],stroke:["\uC601\uCC28!","\uC624\uB978\uCABD~","\uD761!"],rest:["\uC5ED\uC2DC \uC624\uB978\uCABD\uC774 \uC88B\uC544","\uD638\uD638\uD638"],annoyed:["\uC5B4\uBA38, \uB610 \uC800 \uC591\uBC18\uB9CC?","\uD765\uCE6B\uBFE1","\uB098\uB3C4 \uC9D1\uC8FC\uC778\uC778\uB370!"],steaming:["\uB0B4 \uB4F1\uAE30\uBD80\uB4F1\uBCF8\uC5D4\u2026","\uBD80\uB4E4\uBD80\uB4E4\u2026","\uB178 \uB0B4\uB194\uC694!"],saw:["\uD1B1\uC774 \uC5B4\uB528\uB354\uB77C~","\uBC18\uC73C\uB85C \uB098\uB204\uBA74 \uB418\uC9C0\u2026","\uD6C4\uD6C4\uD6C4"],sawing:["\uBC18\uBC18 \uB098\uB204\uBA74 \uACF5\uD3C9\uD558\uC9C0!","\uC4F1\uC2F9\uC4F1\uC2F9~","\uB0B4 \uBC29\uB9CC \uC3D9!"],appeased:["\u2026\uC774\uBC88\uB9CC \uBD10\uC900\uB2E4.","\uC5B4\uBA38, \uACE0\uB9C8\uC6CC\uB77C~"],farewell:["\uC548\uB155~ \uB0B4 \uBC29\uC740 \uB0B4 \uAC70!","\uC624\uB978\uCABD\uC73C\uB85C \uAC04\uB2E4~","\uC798 \uC9C0\uB0B4\uC694~"],hit:["\uC5B4\uBA38\uB098!","\uB0B4 \uC9D1 \uBCBD!!","\uAE84\uC545!"],near:["\uC5B4\uBA38 \uC0B4\uC558\uB124!","\uD638\uD638, \uC544\uC2AC\uC544\uC2AC~","\uD734~"],dizzy:["\uC5B4\uC9C8\uC5B4\uC9C8~","\uBA40\uBBF8 \uB098\uC694~"],protest:["\uC5B4\uBA38! \uADF8\uAC78 \uC65C \uC370\uC5B4\uC694!","\uADF8\uB9CC\uD574\uC694!"],shock:["\uC5B4\uBA38\uBA38?!","\uC138\uC0C1\uC5D0!"],already:["\uBC8C\uC368 \uB0B4\uAC00 \uB4E4\uACE0 \uC788\uC796\uC544\uC694!"],lone:["\uC774\uC81C \uB2E8\uB3C5\uBA85\uC758!"],ouch:["\uC544\uC58F!","\uC5B4\uBA38 \uBC1C\uB4F1!"],blame:["\uB2F9\uC2E0 \uB54C\uBB38\uC774\uC796\uC544\uC694!","\uB178\uB97C \uC65C \uADF8\uB807\uAC8C \uC800\uC5B4\uC694!","\uC624\uB978\uCABD\uC774\uB7AC\uC796\uC544\uC694!"]},C:{intro:["\uAC00\uC6B4\uB370\uAC00 \uC81C\uC77C \uC548\uC804\uD574\uC694","\uC774 \uC9D1\uC740 \uC81C \uAC70\uC608\uC694, \uAC00\uC6B4\uB370\uBD80\uD130"],catch:["\uAC00\uC6B4\uB370\uB85C!","\uC911\uC2EC\uC744 \uC7A1\uC544\uC57C\uC8E0","\uAC00\uC6B4\uB370\uAC00 \uCD5C\uACE0!","\uC911\uB3C4!"],eagerCatch:["\uC774\uC81C\uC57C \uAC00\uC6B4\uB370!!","\uC911\uC2EC! \uC911\uC2EC!"],stroke:["\uAC00\uC6B4\uB370!","\uC74F\uCC28!","\uADE0\uD615!"],rest:["\uB531 \uC88B\uB2E4","\uC911\uC2EC \uC7A1\uC558\uC5B4\uC694"],annoyed:["\uAC00\uC6B4\uB370\uB3C4 \uC880\u2026","\uC800\uAE30\uC694\u2026","\uD750\uC74C\u2026"],steaming:["\uC911\uB9BD \uAE30\uC5B4 \uBC15\uB294\uB2E4\u2026","\uC800\uB3C4 \uB178 \uC880\u2026!","\uBD80\uAE00\u2026"],saw:["\u2026","\uAC00\uC6B4\uB370\uB9CC \uC3D9 \uBE7C\uBA74\u2026","\uD1B1\uC9C8\uC740 \uC911\uC2EC\uC774\uC8E0"],sawing:["\uAC00\uC6B4\uB370\uB9CC \uAC00\uC838\uAC08\uAC8C\uC694!","\uC4F1\uC2F9\uC4F1\uC2F9","\uBBF8\uC548\uD574\uC694~"],appeased:["\uACE0\uB9C8\uC6CC\uC694, \uC5ED\uC2DC \uC911\uC2EC\uC774\uC8E0","\u2026\uD734, \uCC38\uC558\uB2E4"],farewell:["\uB2E4\uB4E4 \uC798 \uC9C0\uB0B4\uC694~","\uAC00\uC6B4\uB370\uB85C \uAC11\uB2C8\uB2E4~","\uC548\uB155~"],hit:["\uC73C\uC545!","\uC911\uC2EC\uC774 \uBB34\uB108\uC838!","\uC544\uC57C!"],near:["\uD734, \uC911\uC2EC \uC7A1\uC558\uB2E4","\uC544\uC2AC\uC544\uC2AC!","\uC0B4\uC558\uB2E4~"],dizzy:["\uBE59\uAE00\uBE59\uAE00~","\uC911\uC2EC\uC774 \uC5B4\uB514\uC9C0~"],protest:["\uC7A0\uAE50\uB9CC\uC694! \uADF8\uAC74 \uC544\uB2C8\uC8E0!","\uD1B1 \uB0B4\uB824\uB194\uC694!"],shock:["\uD5C9?!","\uC5B4\uC5B4?!"],already:["\uC81C\uAC00 \uB4E4\uACE0 \uC788\uC5B4\uC694!"],lone:["\uC774\uC81C \uC628\uC804\uD788 \uC81C \uC9D1!"],ouch:["\uC557!","\uC544\uC57C\uC57C"],blame:["\uADF8\uB7EC\uB2C8\uAE4C \uAC00\uC6B4\uB370\uB85C \uAC00\uC790\uB2C8\uAE4C\uC694!","\uC800 \uB54C\uBB38 \uC544\uB2C8\uC5D0\uC694!","\uBC29\uAE08 \uB204\uAC00 \uC800\uC5C8\uC5B4\uC694?"]}};function wc(s,t){let e=F_[s]?.[t];return!e||!e.length?null:e[Math.floor(Math.random()*e.length)]}var le=s=>document.querySelector(s),Ec=new R,Tc=class{constructor(t,e,n){this.frame=t,this.camera=e,this.audio=n,this.bubbles={},this.bubbleLayer=le("#bubbles"),this.popLayer=le("#popups"),this.hud=le("#hud"),this.hpEl=le("#hp"),this.hpFill=le("#hp .hp-bar i"),this.trackFill=le("#progress .fill"),this.boat=le("#progress .boat"),this.sectionName=le("#progress .section-name"),this.banner=le("#banner"),this.hint=le("#hint"),this.flash=le("#flash"),this.vignette=le("#vignette"),this.drops=le("#drops"),this.anchors={},this.lastSay={},this.w=1,this.h=1,this.buildTrackMarks()}resize(t,e){this.w=t,this.h=e}buildTrackMarks(){let t=le("#progress .marks"),e={whirl:"\u{1F300}",canyon:"\u26F0",beach:"\u{1F3C1}"};for(let n of ic){if(!e[n.icon])continue;let i=document.createElement("span");i.textContent=e[n.icon],i.style.left=`${Math.max(0,Math.min(100,n.d/He*100))}%`,n.icon==="beach"&&(i.style.left="100%"),t.appendChild(i)}}project(t){return Ec.copy(t).project(this.camera),{x:(Ec.x*.5+.5)*this.w,y:(-Ec.y*.5+.5)*this.h,z:Ec.z}}say(t,e,n={}){let i=performance.now(),o=/^[a-zA-Z]+$/.test(e)?wc(t,e):e;if(!o||!n.force&&this.lastSay[t]&&i-this.lastSay[t]<(n.minGap??900))return;this.lastSay[t]=i;let a=this.bubbles[t];a&&a.el.remove();let c=document.createElement("div");c.className=`bubble ${t}${n.angry?" angry":""}`,c.textContent=o,this.bubbleLayer.appendChild(c),this.bubbles[t]={el:c,until:i+(n.dur??1700),out:!1};let l=n.angry?"angry":n.mood||"normal";this.audio?.voice(t,o,l)}updateBubbles(t){let e=performance.now();for(let n in this.bubbles){let i=this.bubbles[n],r=t(n);if(!r||e>i.until+220){i.el.remove(),delete this.bubbles[n];continue}e>i.until&&!i.out&&(i.out=!0,i.el.classList.add("out"));let o=this.project(r);if(o.z>1){i.el.style.visibility="hidden";continue}i.el.style.visibility="visible";let a=i.el.offsetWidth,c=i.el.offsetHeight,l=o.x-a/2;l=Math.max(4,Math.min(this.w-a-4,l));let h=Math.max(54,o.y-c-18);i.el.style.setProperty("--x",`${l}px`),i.el.style.setProperty("--y",`${h}px`),i.el.style.transform=`translate(${l}px, ${h}px)`}}clearBubbles(){for(let t in this.bubbles)this.bubbles[t].el.remove();this.bubbles={}}showTags(t){if(!this.tags){this.tags={};let e={L:"\u2190 \uC88C\uBD09\uC2DD",C:"\uD55C\uAC00\uC6B4 (\uAC00\uC6B4\uB370)",R:"\uC6B0\uB9D0\uC21C \u2192"};for(let n of["L","C","R"]){let i=document.createElement("div");i.className=`name-tag ${n}`,i.textContent=e[n],this.bubbleLayer.appendChild(i),this.tags[n]=i}}this.tagsOn=t;for(let e in this.tags)this.tags[e].classList.toggle("on",t)}updateTags(t){if(!(!this.tags||!this.tagsOn))for(let e in this.tags){let n=this.tags[e],i=t(e);if(!i){n.classList.remove("on");continue}let r=this.project(i);n.style.transform=`translate(${r.x-n.offsetWidth/2}px, ${r.y+6}px)`}}popup(t,e,n="",i=null){let r=i||(e?this.project(e):{x:this.w/2,y:this.h*.4}),o=document.createElement("div");o.className=`pop ${n}`,o.textContent=t,o.style.setProperty("--x",`${Math.max(40,Math.min(this.w-40,r.x))}px`),o.style.setProperty("--y",`${Math.max(60,Math.min(this.h-60,r.y))}px`),o.style.setProperty("--r",`${(Math.random()-.5)*16}deg`),this.popLayer.appendChild(o),setTimeout(()=>o.remove(),1300)}showBanner(t,e=""){this.banner.classList.remove("show"),this.banner.offsetWidth,this.banner.innerHTML=`${t}${e?`<small>${e}</small>`:""}`,this.banner.classList.add("show")}setHint(t){if(!t){this.hint.classList.add("hidden");return}this.hint.innerHTML=t,this.hint.classList.remove("hidden")}flashScreen(t=.6,e="#fff"){this.flash.style.transition="none",this.flash.style.background=e,this.flash.style.opacity=t,this.flash.offsetWidth,this.flash.style.transition="opacity 0.45s ease-out",this.flash.style.opacity=0}splashDrops(t=4){for(let e=0;e<t;e++){let n=document.createElement("i"),i=18+Math.random()*46;n.style.width=n.style.height=`${i}px`,n.style.left=`${Math.random()*100}%`,n.style.top=`${10+Math.random()*70}%`,this.drops.appendChild(n),setTimeout(()=>n.remove(),1500)}}tapRing(t,e){let n=document.createElement("div");n.className="tap-ring",n.style.left=`${t}px`,n.style.top=`${e}px`,this.popLayer.appendChild(n),setTimeout(()=>n.remove(),420)}showHUD(t){this.hud.classList.toggle("hidden",!t)}updateHUD(t){let e=t.progress();this.trackFill.style.width=`${e*100}%`,this.boat.style.left=`${e*100}%`;let n=Math.max(0,t.hp);this.hpFill.style.width=`${n*100}%`,this.hpEl.classList.toggle("low",n<.35||t.house.door),this.hpEl.classList.toggle("door",t.house.door),this.sectionName.textContent!==t.section.name&&(this.sectionName.textContent=t.section.name);let i=t.house.door?.5:Math.max(0,(.32-n)/.32);this.vignette.style.opacity=i*(.6+.4*Math.sin(performance.now()/180))}show(t,e){le(t).classList.toggle("hidden",!e)}showEndPanel(t){let e=le("#screen-end .end-panel");e.classList.toggle("fail",!!t.fail),le("#screen-end .end-kicker").textContent=t.kicker,le("#screen-end .end-title").textContent=t.title,le("#screen-end .end-sub").textContent=t.sub,le("#screen-end .end-desc").textContent=t.desc,le("#screen-end .end-captain").textContent=t.captain,le("#screen-end .end-captain").classList.toggle("hidden",!t.captain);let n=le("#screen-end .end-photos");n.innerHTML="";for(let r of t.photos){let o=document.createElement("div");o.className=`polaroid${r.big?" big":""}`,o.style.setProperty("--r",`${(Math.random()-.5)*9}deg`);let a=document.createElement("img");a.src=r.src,a.alt=r.caption;let c=document.createElement("span");c.textContent=r.caption,o.append(a,c),n.appendChild(o)}let i=le("#screen-end .end-stats");i.innerHTML="";for(let r of t.stats){let o=document.createElement("span");o.textContent=r.text,r.badge&&(o.className="badge"),i.appendChild(o)}le("#btn-again").textContent=t.fail?"\uB2E4\uC2DC \uB3C4\uC804!":"\uB2E4\uC2DC \uD0C0\uAE30",this.show("#screen-end",!0),e.scrollTop=0}renderEndingsFound(t){let e=le("#endings-found"),n=Object.keys(Ji),i=n.filter(r=>t.includes(r)).length;e.innerHTML=`\uBC1C\uACAC\uD55C \uB3C4\uCC29 \uC7A5\uBA74 ${i} / ${n.length}<div class="chips">${n.map(r=>`<span class="${t.includes(r)?"got":""}">${t.includes(r)?Ji[r].title:"???"}</span>`).join("")}</div>`}};var xn=s=>document.querySelector(s),gf="gongdong-rafting-v1",O_=new URLSearchParams(location.search);function B_(){try{return JSON.parse(localStorage.getItem(gf))||{endings:[],runs:0}}catch{return{endings:[],runs:0}}}function ff(s){try{localStorage.setItem(gf,JSON.stringify(s))}catch{}}var xh=class{constructor(){this.frame=xn("#frame"),this.canvas=xn("#game"),this.renderer=new ec({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setClearColor("#bfe6ff"),this.scene=new mr,this.scene.fog=new pr("#c4e9ff",75,235),this.camera=new qe(56,.5,.3,900),this.rig=new yc(this.camera),this.audio=new Sc,this.ui=new Tc(this.frame,this.camera,this.audio),this.fx=new Mc(this.scene),Vd(this.scene),this.sky=Gd(this.scene),this.river=Id(this.scene),Wd(this.scene),Xd(this.scene),this.dock=$d(this.scene),this.beach=Zd(this.scene),this.store=B_(),this.state="title",this.paused=!1,this.photos=[],this.pendingShots=[],this.timers=[],this.hintFlags={},this.newGame(),this.bindInput(),this.resize(),window.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="play"&&this.pause(!0)}),this.ui.renderEndingsFound(this.store.endings),this.last=performance.now(),this.frameTimes=[],this.titleTalkT=1.5,requestAnimationFrame(t=>this.loop(t)),xn("#loading").classList.add("done"),window.__rafting=this}newGame(){this.house&&this.house.dispose(),this.paddle&&this.paddle.obj.parent?.remove(this.paddle.obj);for(let t of this.endingProps||[])t.parent?.remove(t);this.endingProps=[],this.fx.clear(),this.ui.clearBubbles(),this.game=new oc,this.house=new gc(this.scene,this.fx,this.audio,this.ui),this.paddle=new _c(this.house,this.fx,this.audio),this.ctx={views:this.house.views,fx:this.fx,audio:this.audio},no.copy(this.dock.bollard.position).setY(1.3),this.house.update(0,this.game,this.ctx),this.house.attachMooring(no),this.photos=[],this.pendingShots=[];for(let t of this.timers)clearTimeout(t);this.timers=[],this.hintFlags={},this.warned=new Set,this.lastRoar=0,this.sprayT=1,this.ending=null,this.rig.setMode("title"),this.rig.blend=1}later(t,e){let n=setTimeout(()=>{this.timers=this.timers.filter(i=>i!==n),e()},t);this.timers.push(n)}resize(){let t=this.frame.getBoundingClientRect(),e=Math.max(1,Math.round(t.width)),n=Math.max(1,Math.round(t.height));this.renderer.setSize(e,n,!1),this.rig.resize(e/n),this.ui.resize(e,n),this.w=e,this.h=n}bindInput(){this.canvas.addEventListener("pointerdown",t=>{if(t.preventDefault(),this.state!=="play"||this.paused)return;let e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top;this.tapAt(n,i)},{passive:!1}),window.addEventListener("keydown",t=>{if(this.state==="play"&&!this.paused){let n={a:"L",arrowleft:"L",s:"C",arrowdown:"C",d:"R",arrowright:"R",1:"L",2:"C",3:"R"}[t.key.toLowerCase()];n&&this.tapOwner(n)}t.key==="Escape"&&this.state==="play"&&this.pause(!this.paused)}),xn("#btn-start").addEventListener("click",()=>this.start()),xn("#btn-pause").addEventListener("click",()=>this.pause(!0)),xn("#btn-resume").addEventListener("click",()=>this.pause(!1)),xn("#btn-restart").addEventListener("click",()=>{this.pause(!1),this.restart()}),xn("#btn-sound").addEventListener("click",()=>{this.audio.setMuted(!this.audio.muted),xn("#btn-sound").textContent=`\uC18C\uB9AC: ${this.audio.muted?"\uAEBC\uC9D0":"\uCF1C\uC9D0"}`}),xn("#btn-music").addEventListener("click",()=>{this.audio.musicOn=!this.audio.musicOn,xn("#btn-music").textContent=`\uC74C\uC545: ${this.audio.musicOn?"\uCF1C\uC9D0":"\uAEBC\uC9D0"}`}),xn("#btn-again").addEventListener("click",()=>this.restart()),xn("#btn-home").addEventListener("click",()=>this.home())}tapAt(t,e){let n=null,i=1/0;for(let r of this.game.aboard()){let o=this.ui.project(this.house.views[r].chestWorld(no)),a=Math.hypot(o.x-t,(o.y-e)*.85);a<i&&(i=a,n=r)}this.ui.tapRing(t,e),n&&this.tapOwner(n)}tapOwner(t){this.game.tap(t)&&(this.hintFlags.thrown=!0)}start(){this.audio.init(),this.audio.ui(),this.audio.startMusic(),this.ui.show("#screen-title",!1),this.ui.showHUD(!0),this.state="play",this.rig.setMode("play"),this.store.runs++,ff(this.store),this.ui.showBanner("\uC900\uBE44\u2026"),this.later(1300,()=>{this.game.launch(),this.house.snapMooring(),this.ui.showBanner("\uCD9C\uBC1C!","\uC138 \uC9D1\uC8FC\uC778, \uB178\uB294 \uD558\uB098"),this.audio.splash(.8)})}restart(){this.ui.show("#screen-end",!1),this.newGame(),this.state="title",this.start()}home(){this.ui.show("#screen-end",!1),this.ui.showHUD(!1),this.ui.setHint(null),this.newGame(),this.state="title",this.ui.show("#screen-title",!0),this.ui.renderEndingsFound(this.store.endings)}pause(t){this.state!=="play"&&t||(this.paused=t,this.ui.show("#screen-pause",t),t?this.audio.suspend():this.audio.resume())}loop(t){requestAnimationFrame(n=>this.loop(n));let e=(t-this.last)/1e3;this.last=t,e=Math.min(e,.05),!this.manual&&this.frame_(e)}step(t=1/60,e=1){for(let n=0;n<e;n++)this.frame_(t)}frame_(t){if(this.manual||this.adaptQuality(t),this.paused)return;let e=this.game;if(this.state==="play"||this.state==="ending"||this.state==="failed"){this.auto&&this.state==="play"&&this.autopilot(t);for(let i=0;i<(this.fast||1);i++)e.update(t)}else e.update(0);let n=t*e.timeScale;if(this.handleEvents(),this.house.update(n,e,this.ctx),this.paddle.update(n,e),this.fx.update(n),this.rig.update(t,e,this.ending||{}),this.river.update(performance.now()/1e3,e.house),this.sky.update(this.camera),this.updateAmbience(t),this.state==="play"&&(this.ui.updateHUD(e),this.updateHints(),this.updateSpray(t),this.updateDanger()),this.state==="title"&&this.titleChatter(t),this.ending&&this.updateEnding(t),this.renderer.render(this.scene,this.camera),this.processShots(),this.ui.updateBubbles(i=>this.bubbleAnchor(i)),this.state==="play"){let i=this.game.runTime<14&&this.game.house.d<120;i!==!!this.ui.tagsOn&&this.ui.showTags(i),this.ui.updateTags(r=>this.game.owners[r].state==="aboard"?this.house.views[r].root.getWorldPosition(k_):null)}else this.ui.tagsOn&&this.ui.showTags(!1)}adaptQuality(t){if(this.frameTimes.push(t),this.frameTimes.length<90)return;let e=this.frameTimes.reduce((n,i)=>n+i,0)/this.frameTimes.length;this.frameTimes.length=0,e>.026&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio-.35),this.renderer.setPixelRatio(this.pixelRatio),this.resize())}bubbleAnchor(t){let e=this.house.views[t],n=this.game.owners[t];if(!e||!e.root.parent)return null;if(n.state!=="aboard"&&!this.ending){let i=this.game.floaters.find(r=>r.id===t);if(!i||i.d<this.game.house.d-25)return null}return e.headWorld(new R).add(z_)}handleEvents(){let t=this.game,e=this.ui,n=this.audio;for(let i of t.events){let r=i.id?this.house.views[i.id]:null;switch(i.type){case"launch":break;case"throw":{this.house.views[i.from].onThrow(i),this.paddle.onThrow(i);break}case"catch":{r.onCatch(),n.catchTok(this.panOf(i.id)),io(8),i.relay||(i.eager>.6?e.say(i.id,"eagerCatch",{force:!0,mood:"happy"}):Math.random()<.55&&e.say(i.id,"catch",{mood:"happy"}));break}case"stroke":{r.onStroke(i,t),i.big&&this.showPushArrow(i.id,i.dir),i.big&&(this.rig.punch(.6),this.rig.shake(.12),n.creak(.7));break}case"rest":Math.random()<.08&&e.say(i.id,"rest",{minGap:4e3});break;case"already":e.say(i.id,"already",{minGap:2500});break;case"stage":{if(!i.up)break;let a=[null,"annoyed","steaming","saw"][i.stage];a&&e.say(i.id,a,{force:!0,angry:i.stage>=2}),i.stage===Nn.STEAMING&&n.steamWhistle(),i.stage===Nn.SAW&&(n.sawTwang(),this.hintFlags.saw||(this.hintFlags.saw=!0,this.flashHint(`\uD1B1\uC744 \uAEBC\uB0C8\uB2E4! \uADF8 \uC0AC\uB78C\uC5D0\uAC8C <b class="${i.id}">\uB178\uB97C \uB358\uC838</b> \uB2EC\uB798 \uC8FC\uC138\uC694`,4200))),i.stage===Nn.STEAMING&&!this.hintFlags.steam&&(this.hintFlags.steam=!0,this.flashHint("\uB178\uB97C \uC624\uB798 \uBABB \uBC1B\uC73C\uBA74 <b>\uC090\uCCD0\uC694</b>. \uAC00\uB054\uC740 \uB118\uACA8 \uC8FC\uC138\uC694",3800));break}case"sawStart":{e.say(i.id,"sawing",{force:!0,angry:!0}),e.popup("\uC4F1\uC2F9\uC4F1\uC2F9",r.headWorld(no),"saw");for(let o of t.aboard())o!==i.id&&(this.house.views[o].onShock(new R(r.pos.x,0,r.pos.y)),this.later(500+Math.random()*400,()=>e.say(o,"protest",{force:!0,angry:!0})));break}case"appease":{r.onAppease(),e.say(i.id,"appeased",{force:!0}),e.popup(i.last?"\uB9C9\uD310 \uB2EC\uB798\uAE30!":"\uB2EC\uB798\uAE30 \uC131\uACF5!",r.headWorld(no),"good"),n.stinger("appease");break}case"cutDone":{e.say(i.id,"\uADF8\uB7FC \uC774\uB9CC~",{force:!0,mood:"happy",dur:1200}),this.audio.slideUp();for(let o of t.aboard())o!==i.id&&(this.house.views[o].onShock(new R(r.pos.x,0,r.pos.y)),e.say(o,"shock",{force:!0}));break}case"detach":this.onDetach(i);break;case"hit":this.onHit(i);break;case"scrape":this.house.onScrape(i,t),Math.random()<.4&&e.popup("\uB07C\uC774\uC775",this.house.root.position.clone().setY(2),"small");break;case"nearMiss":{let o=this.house.root.position.clone();if(o.y=2.5,i.thrill){e.popup("\uC544\uC2AC\uC544\uC2AC!",o,"thrill"),this.rig.punch(1),n.nearMiss(!0),i.by&&t.owners[i.by].state==="aboard"&&e.say(i.by,"near",{force:!0,mood:"happy"});for(let a of t.aboard())a!==i.by&&Math.random()<.5&&this.house.views[a].onCheer(.9)}else e.popup("\uD734~",o,"small"),n.nearMiss(!1);break}case"whirlEnter":e.popup("\uBE59\uAE00\uBE59\uAE00~",this.house.root.position.clone().setY(3),"thrill"),n.stinger("whirl");for(let o of t.aboard())this.later(300+Math.random()*500,()=>e.say(o,"dizzy"));break;case"whirlExit":e.popup(i.early?"\uD0C8\uCD9C!":"\uD718\uC775!",this.house.root.position.clone().setY(3),"good"),n.whoosh(),this.rig.shake(.2);break;case"section":this.onSection(i);break;case"canyonGate":break;case"canyonPassed":{let o={squeeze:"\uC5B5\uC9C0\uB85C \uBE44\uC9D1\uACE0 \uD1B5\uACFC!",sideways:"\uC606\uC73C\uB85C \uB07C\uC6CC \uD1B5\uACFC!",slim:"\uB0A0\uC52C\uD558\uAC8C \uD1B5\uACFC!",clean:"\uAE54\uB054\uD558\uAC8C \uD1B5\uACFC!"}[i.method];e.popup(o,this.house.root.position.clone().setY(3),i.method==="squeeze"?"small":"good");break}case"shatter":this.onShatter(i);break;case"fail":this.onFail(i);break;case"arrive":this.onArrive(i);break;default:break}}t.events.length=0}showPushArrow(t,e){let n=this.ui.project(this.house.root.position),i=e<0?"\u25C0\u25C0":e>0?"\u25B6\u25B6":"\u25B6\u25C0",r=n.x+e*this.w*.36;this.ui.popup(i,null,`arrow ${t}`,{x:r,y:n.y-this.h*.04})}panOf(t){return t==="L"?-.5:t==="R"?.5:0}flashHint(t,e){this.ui.setHint(t),this.hintUntil=performance.now()+e}updateHints(){let t=this.game,e=performance.now();this.hintUntil&&e<this.hintUntil||(this.hintUntil&&e>=this.hintUntil&&(this.hintUntil=0,this.ui.setHint(null)),t.state==="running"&&(this.hintFlags.thrown?this.hintFlags.firstDone||(this.hintFlags.firstDone=!0,this.flashHint("\uBC1B\uC740 \uC0AC\uB78C\uC740 <b>\uC790\uAE30 \uCABD\uC73C\uB85C\uB9CC</b> \uC800\uC5B4\uC694!",2600)):t.house.d>52?this.ui.setHint('\uBC14\uC704\uB2E4! <b class="L">\uC88C\uBD09\uC2DD</b>(\u2190) \uC774\uB098 <b class="R">\uC6B0\uB9D0\uC21C</b>(\u2192) \uC744 \uD0ED!'):this.ui.setHint("\uC9D1\uC8FC\uC778\uC744 <b>\uD0ED</b>\uD558\uBA74 \uB178\uAC00 \uB0A0\uC544\uAC00\uC694")))}onSection(t){let e={"\uCCAB \uC5EC\uC6B8":"\uBC14\uC704\uAC00 \uBAB0\uB824\uC628\uB2E4","\uBC14\uC704 \uC815\uC6D0":"\uD2C8\uC744 \uB178\uB824\uB77C","\uC18C\uC6A9\uB3CC\uC774 \uAD7D\uC774":"\uB4E4\uC5B4\uAC00\uBA74 \uD55C \uBC14\uD034 \uB3CC\uACE0 \uD295\uACA8 \uB098\uAC00\uC694","\uC881\uC740 \uD611\uACE1":"\uC9D1\uC774 \uB113\uC73C\uBA74 \uC591\uCABD \uBCBD\uC5D0 \uAE01\uD600\uC694","\uB458\uC9F8 \uC5EC\uC6B8":"\uBB3C\uC0B4\uC774 \uAC70\uC138\uC9C4\uB2E4","\uB9C8\uC9C0\uB9C9 \uAE09\uB958":"\uAE30\uC2AD\uAE4C\uC9C0 \uBC84\uD168\uB77C!",\uAE30\uC2AD:"\uAC70\uC758 \uB2E4 \uC654\uB2E4!"};this.ui.showBanner(`${t.name}!`,e[t.name]||""),this.audio.stinger("section")}onHit(t){let e=this.game,n=t.strength;if(t.door){this.ui.popup("\uCA4C\uC5B5!",this.house.root.position.clone().setY(1.5),"hit"),this.audio.crash(.9),this.rig.shake(.8),this.ui.flashScreen(.5,"#ff6a4a"),io([60,30,60]);let o=e.paddle.holder;o&&this.ui.say(o,"\uBB38\uC9DD\uC5D0 \uAE08\uC774 \uAC14\uC5B4!!",{force:!0,angry:!0});return}this.house.onHit(t,e);let i=this.house.root.position.clone();i.y=2,this.ui.popup(n>.7?"\uCF85!!":t.kind==="bank"?"\uCFF5!":"\uCF85!",i,"hit"),this.audio.crash(n),this.rig.shake(.35+n*.6),this.ui.flashScreen(.18+n*.25),io(Math.round(30+50*n)),this.ui.splashDrops(Math.round(2+4*n));let r=e.aboard();if(r.length){let o=r[Math.floor(Math.random()*r.length)];this.ui.say(o,"hit",{force:!0,angry:!0});let a=e.paddle.holder,c=r.find(l=>l!==a&&l!==o);a&&c&&Math.random()<.7&&this.later(650,()=>{let l=this.house.views[c],h=this.house.views[a];!l||!h||(l.onBlame(new R(h.pos.x,0,h.pos.y)),this.ui.say(c,"blame",{force:!0,angry:!0}))})}}onDetach(t){let e=this.game,n=this.house.views[t.id];this.house.onDetach(t,e),this.audio.drop(),io([30,30,30]);let i=n.headWorld(new R);this.ui.popup("\uB611!",i,"drop"),this.rig.shake(.25),this.later(900,()=>this.ui.say(t.id,"farewell",{force:!0,mood:"happy",dur:2400}));for(let a of e.aboard())this.house.views[a].onShock(new R(n.pos.x,0,n.pos.y));e.aboard().length===1&&this.later(2600,()=>this.ui.say(e.aboard()[0],"lone",{force:!0}));let r=si[t.id].name,o={L:"\uCE68\uB300\uC640 \uC7A5\uBBF8 \uD654\uBD84",R:"\uCE68\uB300\uC640 \uD574\uBC14\uB77C\uAE30 \uD654\uBD84",C:"\uCE68\uB300\uC640 \uC120\uC778\uC7A5"}[t.id];this.pendingShots.push({at:performance.now()+1150,key:`room-${t.id}`,caption:`${r}, ${o}\uACFC \uD568\uAED8 \uB5A0\uB098\uB2E4 \xB7 ${Math.round(t.d)}m`})}onShatter(t){let e=this.game;this.house.onShatter(t,e),this.paddle.obj.parent!==this.house.views[t.rider].root&&this.house.views[t.rider].root.attach(this.paddle.obj),this.ui.popup("\uC640\uC7A5\uCC3D!!",this.house.root.position.clone().setY(2.5),"thrill"),this.audio.crash(1),this.audio.stinger("shatter"),this.rig.shake(1),this.ui.flashScreen(.7),this.ui.splashDrops(8),io([80,40,120]),this.later(700,()=>this.ui.say(t.rider,"\uB0B4 \uC9D1\uC774\u2026 \uBB38\uC9DD\uB9CC \uB0A8\uC558\uC5B4!",{force:!0,angry:!0,dur:2200}));for(let n of t.overboard)this.later(1200+Math.random()*600,()=>this.ui.say(n,"\uC5B4\uD478\uC5B4\uD478!",{force:!0}));this.flashHint("\uBB38\uC9DD \uD55C \uC7A5! <b>\uBC14\uC704 \uD55C \uBC88\uB9CC \uB354 \uB9DE\uC73C\uBA74 \uB05D</b>",3500),this.pendingShots.push({at:performance.now()+500,key:"house",caption:`\uC640\uC7A5\uCC3D! \xB7 ${Math.round(e.house.d)}m`})}onFail(){let t=this.game;this.state="failed",this.ui.setHint(null),this.fx.burst(this.house.root.position,1.5),this.audio.crash(1),this.audio.failJingle(),this.audio.stopMusic(),this.rig.setMode("fail");let e=t.paddle.holder;e&&(this.house.views[e].forced="swim",this.ui.say(e,"\uC5B4\uD478\u2026 \uB0B4 \uC9D1\u2026!",{force:!0,dur:2500})),this.house.doorRaft&&(this.house.doorRaft.rotation.z=.5),this.later(2400,()=>this.showFail())}showFail(){let t=this.game,e=Math.round(t.progress()*100),n=this.photos.map(i=>({src:i.src,caption:i.caption}));this.ui.showHUD(!1),this.ui.showEndPanel({fail:!0,kicker:"\uCE68\uBAB0",title:"\uBB38\uC9DD\uB9C8\uC800 \uCABC\uAC1C\uC84C\uB2E4!",sub:`\uAE30\uC2AD\uAE4C\uC9C0 ${e}% \uC654\uC5B4\uC694`,desc:"\uC9D1\uB3C4, \uBB38\uC9DD\uB3C4 \uAC15\uBB3C\uC5D0 \uD769\uC5B4\uC84C\uB2E4. \uADF8\uB798\uB3C4 \uC138 \uC0AC\uB78C\uC740 \uC5B4\uB518\uAC00\uC5D0\uC11C \uB610 \uC11C\uB85C \uC790\uAE30 \uC9D1\uC774\uB77C\uACE0 \uC6B0\uAE30\uACE0 \uC788\uC744 \uAC83\uC774\uB2E4. \uB2E4\uC2DC \uD55C \uBC88?",captain:"",photos:n,stats:this.statLines()})}onArrive(t){let e=this.game;this.state="ending",this.ui.setHint(null),this.ui.showHUD(!1),this.audio.stopMusic(),this.later(400,()=>this.audio.fanfare()),this.ui.showBanner("\uB3C4\uCC29!",Ji[t.ending].title),this.ending={id:t.ending,t:0,steps:new Set,endD:e.house.d+12.5,endU:0,endH:0},this.rig.setMode("end"),this.store.endings.includes(t.ending)||(this.store.endings.push(t.ending),this.ending.isNew=!0),ff(this.store),this.parkDeparted();for(let n of e.aboard())this.house.views[n].forced="cheer",this.house.views[n].forcedFace=Math.PI}parkDeparted(){let t=this.game,e=t.house.u,n=t.house.d,i=[[-3.4,7.2],[3.4,7.2],[-2.4,10.6],[2.4,10.6],[0,12.5]],r=["L","R","C"],o=[...t.floaters].sort((a,c)=>r.indexOf(a.id)-r.indexOf(c.id));o.forEach((a,c)=>{let l=a.kind==="room"?`room-${a.id}`:`swim-${a.id}`,h=this.house.floaterViews.get(l);if(!h)return;let u=i[Math.min(c,i.length-1)];o.length===1&&(u=a.id==="R"?i[1]:i[0]);let f=e+u[0],p=Math.max(n+u[1],Zi(f)+1.5);ne(f,p,ri),h.parked=!0,h.keep=!0,h.container.visible=!0;let m=a.kind==="room"?-.5:.15;h.container.position.set(ri.x,this.beach.heightAt(f,p)+m,ri.z),h.container.rotation.set(0,-Dn(p)+Math.PI+(u[0]<0?-.35:.35),0),h.skirt&&(h.skirt.visible=!1);let x=this.house.views[a.id];x.forced="farewell",x.forcedFace=0})}updateEnding(t){let e=this.ending,n=this.game;e.t+=t;let i=(c,l,h)=>{e.t>=l&&!e.steps.has(c)&&(e.steps.add(c),h())};if(this.state==="failed")return;let r=n.aboard(),o=this.house.views,a=e.id;if(i("beachSplash",.3,()=>{this.fx.splash(this.house.root.position,2),this.audio.thud(.6)}),i("departedWave",1.6,()=>{for(let c of n.floaters)this.later(Math.random()*600,()=>this.ui.say(c.id,c.kind==="room"?"\uB2A6\uC5C8\uB124~!":"\uC5EC\uAE30\uC57C~!",{force:!0,mood:"happy",dur:2200}))}),i("confetti",1.2,()=>{ne(0,He+12,ri),this.fx.confetti(new R(ri.x,5,ri.z),80)}),a==="fair")i("hug",2.2,()=>{for(let c of r){let l=o[c];l.forced="hug",l.forcedPos={x:c==="L"?-.9:c==="R"?.9:0,z:.9},l.forcedFace=c==="C"?Math.PI:c==="L"?Math.PI/2:-Math.PI/2}}),i("claim",3.8,()=>{for(let c of r)o[c].forced="point",o[c].forcedFace=Math.PI+(c==="L"?.6:c==="R"?-.6:0),o[c].forcedPos=null,this.later(Math.random()*200,()=>this.ui.say(c,"\uB0B4 \uC9D1!",{force:!0,angry:!0,dur:2e3}))});else if(a==="wreck")i("lastWall",1.6,()=>{let c=this.house.pieces.find(l=>l.kind==="wall"&&l.state<2&&this.house.present.has(l.part));c&&(c.state=2,c.anim={type:"fall",t:0,w:0})}),i("cheer",3.2,()=>{for(let c of r)o[c].forced="cheer",this.ui.say(c,["\uADF8\uB798\uB3C4 \uC9D1\uC774\uB2E4!","\uC14B \uB2E4 \uC0B4\uC558\uB2E4!","\uBCBD\uC740 \uB610 \uC138\uC6B0\uBA74 \uB3FC!"][bn.indexOf(c)],{force:!0,mood:"happy",dur:2e3})});else if(a==="two")i("shake",2,()=>{let[c,l]=r;o[c].forced="handshake",o[l].forced="handshake",this.ui.say(c,"\uC6B0\uB9AC \uB458\uC774 \uBC18\uBC18!",{force:!0,mood:"happy"})}),i("eye",3.6,()=>{for(let c of r)o[c].forced="saw",this.ui.say(c,"\u2026\uBC18\uBC18?",{force:!0,dur:1800});this.showMiddleCut()});else if(a==="alone")i("flag",2,()=>{let c=r[0],l=o[c];l.forced="flag";let h=new wt;H(F.cyl(.03,.03,1.6,6),"#5b3a1e",h,[0,.8,0],[0,0,0],.015),H(F.box(.6,.4,.02),si[c].color,h,[.3,1.4,0],[0,0,0],.015),h.position.set(.35,0,.35),l.root.add(h),this.endingProps.push(h),this.ui.say(c,wc(c,"lone"),{force:!0,mood:"happy",dur:2400})});else if(a==="door"){let c=this.house.doorRaft;if(i("standUp",1.8,()=>{this.ui.say(r[0],"\uC601\uCC28\u2026",{force:!0})}),c&&e.t>1.8){let l=It((e.t-1.8)/.8,0,1);c.rotation.x=-l*Math.PI/2,c.position.set(0,l*1.05,-l*1);let h=o[r[0]];h&&h.root.parent===c&&l>.05&&(this.house.tilt.attach(h.root),h.forcedPos={x:0,z:.9},h.forcedFace=Math.PI,h.root.position.y=.25)}i("greet",3,()=>this.ui.say(r[0],"\uB2E4\uB140\uC654\uC2B5\uB2C8\uB2E4~",{force:!0,mood:"happy",dur:2200})),i("walkIn",4.2,()=>{let l=o[r[0]];l.forcedPos={x:0,z:-1.6},this.audio.thud(.4)})}i("photo",4.6,()=>{this.pendingShots.push({at:0,key:"final",caption:`${Ji[a].title} \xB7 ${pf(n.stats.time)}`,big:!0})}),i("panel",5.4,()=>this.showEnd())}showMiddleCut(){let t=new wt;for(let e=0;e<12;e++)H(F.box(.05,.02,.16),"#ffffff",t,[0,xt+.02,-2.2+e*.32],[0,0,0],0);this.house.tilt.add(t),this.endingProps.push(t)}showEnd(){let t=this.game,e=Ji[this.ending.id],n=t.aboard(),i=l=>si[l].name,r=t.stats.lost.map(l=>i(l.id)),o="";switch(this.ending.id){case"fair":o='\uB178\uB97C \uC774\uB9AC\uC800\uB9AC \uACF5\uD3C9\uD558\uAC8C \uB358\uC9C4 \uB355\uC5D0 \uC14B \uB2E4 \uC628\uC804\uD55C \uC9D1\uC73C\uB85C \uAE30\uC2AD\uC5D0 \uB2FF\uC558\uB2E4. \uB0B4\uB9AC\uC790\uB9C8\uC790 \uC11C\uB85C "\uB0B4 \uC9D1!"\uC774\uB77C\uBA70 \uC0BF\uB300\uC9C8\uC744 \uC2DC\uC791\uD55C\uB2E4.';break;case"wreck":o="\uC9C0\uBD95\uC740 \uB5A0\uB0B4\uB824\uAC00\uACE0 \uBCBD\uC740 \uC4F0\uB7EC\uC84C\uC9C0\uB9CC, \uC14B\uC740 \uB05D\uAE4C\uC9C0 \uD568\uAED8 \uB178\uB97C \uB3CC\uB838\uB2E4. \uB9C8\uC9C0\uB9C9 \uB0A8\uC740 \uBCBD\uC774 \uCFF5 \uD558\uACE0 \uC4F0\uB7EC\uC9C0\uC790 \uC14B\uC774 \uB3D9\uC2DC\uC5D0 \uC6C3\uC74C\uC744 \uD130\uB728\uB9B0\uB2E4.";break;case"two":o=`${r[0]}\uC740 \uC790\uAE30 \uBC29\uC744 \uC370\uC5B4 \uD0C0\uACE0 \uBA3C\uC800 \uC640\uC11C \uBAA8\uB798\uBC2D\uC5D0 \uB204\uC6CC \uC788\uC5C8\uB2E4. \uB0A8\uC740 ${n.map(i).join("\uACFC ")}\uC740 \uC545\uC218\uB97C \uD558\uB2E4 \uB9D0\uACE0, \uC9D1 \uD55C\uAC00\uC6B4\uB370 \uADF8\uC5B4\uC9C4 \uC808\uCDE8\uC120\uC744 \uBC14\uB77C\uBCF8\uB2E4.`;break;case"alone":o=`${r.join("\uACFC ")}\uC740 \uAC01\uC790 \uBC29\uC744 \uC370\uC5B4 \uB5A0\uB0AC\uACE0, \uBC8C\uC368 \uAE30\uC2AD\uC5D0\uC11C \uC190\uC744 \uD754\uB4E4\uACE0 \uC788\uB2E4. ${n.map(i)[0]}\uC774 \uB0A8\uC740 \uC9D1\uC5D0 \uAE43\uBC1C\uC744 \uAF42\uB294\uB2E4. "\uC774\uC81C \uB2E8\uB3C5\uBA85\uC758!"`;break;case"door":o=`\uC9D1\uC740 \uC0B0\uC0B0\uC870\uAC01 \uB0AC\uC9C0\uB9CC ${n.map(i)[0]}\uC740 \uB05D\uAE4C\uC9C0 \uBB38\uC9DD \uD55C \uC7A5\uC744 \uC800\uC5B4 \uAE30\uC2AD\uC5D0 \uB2FF\uC558\uB2E4. \uBB38\uC9DD\uC744 \uC138\uC6B0\uACE0, \uBB38\uC744 \uC5F4\uACE0, \uB4E4\uC5B4\uAC04\uB2E4. "\uB2E4\uB140\uC654\uC2B5\uB2C8\uB2E4."`;break;default:break}let a=[],c=this.photos.find(l=>l.key==="final");c&&a.push({src:c.src,caption:c.caption,big:!0});for(let l of this.photos)l.key!=="final"&&a.push({src:l.src,caption:l.caption});this.ui.showEndPanel({kicker:this.ending.isNew?"\uC0C8 \uB3C4\uCC29 \uC7A5\uBA74 \uBC1C\uACAC!":"\uB3C4\uCC29",title:e.title,sub:e.sub,desc:o,captain:`\u{1F3C5} ${this.captainTitle()}`,photos:a,stats:this.statLines()})}captainTitle(){let t=this.game.stats,e=this.game.aboard().length;return this.ending?.id==="door"?"\uBB38\uC9DD \uC120\uC7A5":e===3&&t.hits<=2?"\uACF5\uD3C9\uBB34\uC0AC \uBA85\uC120\uC7A5":t.lastSecondAppease>=1&&e===3?"\uB9C9\uD310 \uB2EC\uB798\uAE30\uC758 \uB2EC\uC778":t.thrills>=6?"\uC544\uC2AC\uC544\uC2AC \uC804\uBB38 \uC120\uC7A5":t.lost.length>=2?"\uB0C9\uC815\uD55C \uC120\uC7A5":t.whirlRides>=2?"\uBE59\uAE00\uBE59\uAE00 \uC120\uC7A5":t.canyon==="sideways"?"\uC606\uAC78\uC74C \uC120\uC7A5":t.appeased>=3?"\uB2EC\uB798\uAE30 9\uB2E8 \uC120\uC7A5":t.hits>=8?"\uBD80\uB52A\uD788\uBA70 \uBC30\uC6B0\uB294 \uC120\uC7A5":"\uC5BC\uB5A8\uACB0\uC5D0 \uC120\uC7A5"}statLines(){let t=this.game.stats,e=[{text:`\u23F1 ${pf(t.time||this.game.runTime)}`},{text:`\uB178 \uB358\uC9C0\uAE30 ${t.throws}\uBC88`},{text:`\uC544\uC2AC\uC544\uC2AC ${t.thrills}\uBC88`},{text:`\uCF85! ${t.hits}\uBC88`}];t.appeased&&e.push({text:`\uB2EC\uB798\uAE30 ${t.appeased}\uBC88`,badge:!0}),t.lastSecondAppease&&e.push({text:"\uB9C9\uD310 \uB2EC\uB798\uAE30 \uC131\uACF5",badge:!0}),t.whirlRides&&e.push({text:`\uC18C\uC6A9\uB3CC\uC774 ${t.whirlRides}\uBC14\uD034`,badge:!0});let n={squeeze:"\uD611\uACE1: \uC5B5\uC9C0\uB85C \uBE44\uC9D1\uAE30",sideways:"\uD611\uACE1: \uC606\uC73C\uB85C \uB07C\uC6B0\uAE30",slim:"\uD611\uACE1: \uB0A0\uC52C\uD558\uAC8C",clean:"\uD611\uACE1: \uAE54\uB054\uD558\uAC8C"}[t.canyon];return n&&e.push({text:n,badge:t.canyon!=="squeeze"}),t.keaton&&e.push({text:"\uCC3D\uBB38 \uAD6C\uBA4D\uC73C\uB85C \uC0B4\uC544\uB0A8\uAE30",badge:!0}),t.lost.length&&e.push({text:`\uB5A0\uB098\uBCF4\uB0B8 \uBC29 ${t.lost.length}\uAC1C`}),e}processShots(){if(!this.pendingShots.length)return;let t=performance.now();for(let e=this.pendingShots.length-1;e>=0;e--){let n=this.pendingShots[e];if(t<n.at)continue;this.pendingShots.splice(e,1);let i;if(n.key==="final")i={x:this.w/2,y:this.h*.45};else if(n.key==="house")i=this.ui.project(this.house.root.position);else{let o=this.house.floaterViews.get(n.key);if(!o)continue;i=this.ui.project(o.container.getWorldPosition(new R).setY(1))}let r=this.snapshot(i,n.big?.9:.55);r&&this.photos.push({key:n.key,src:r,caption:n.caption})}}snapshot(t,e){try{let n=document.createElement("canvas"),i=300;n.width=i,n.height=i;let r=n.getContext("2d"),o=this.renderer.domElement,a=o.width/this.w,c=Math.min(o.width,o.height)*e,l=t.x*a-c/2,h=t.y*a-c/2;return l=It(l,0,o.width-c),h=It(h,0,o.height-c),r.drawImage(o,l,h,c,c,0,0,i,i),r.fillStyle="rgba(255, 220, 160, 0.12)",r.fillRect(0,0,i,i),n.toDataURL("image/jpeg",.82)}catch{return null}}debugJump(t,e=0){let n=this.game.house;n.d=t,n.u=e,n.vu=0,n.vd=nn(t),n.psi=0,n.omega=0,n.whirl=null,n.whirlCooldown=1,this.rig.d=t,this.rig.u=e*.72}autopilot(t){let e=this.auto;if(e.t=(e.t||0)+t*(this.fast||1),e.t<.3)return;e.t=0;let n=this.game,i=n.house;if(n.paddle.flight)return;let r=(i.maxU-i.minU)/2,o=(i.maxU+i.minU)/2-i.u,a=i.u+i.vu*.9,c=Me(i.d+15),l=a,h=1/0;for(let x=-c+r-o;x<=c-r-o;x+=.4){let g=Math.abs(x-a)*.06;for(let d of Ee){let M=d.d-i.d;if(M<-4)continue;if(M>38)break;let b=Math.abs(x+o-d.u)-(r+d.r+.7);b<0&&(g+=(-b+1.5)*(1.6-Math.max(0,M)/38)*3)}for(let d of Un)d.d-i.d>-2&&d.d-i.d<38&&Math.abs(x-d.u)<d.capture+.5&&(g+=e.whirl?-3:8);g<h&&(h=g,l=x)}let u=l-a,f=n.aboard(),p=x=>x==="L"?-1:x==="R"?1:Math.abs(i.u)<.9?0:-Math.sign(i.u),m=n.paddle.holder;if(Math.abs(u)>1){let x=f.filter(g=>p(g)===Math.sign(u));x.length&&!x.includes(m)&&(m=x.sort((g,d)=>n.owners[d].sulk-n.owners[g].sulk)[0])}if(e.fair)for(let x of f)(n.owners[x].sawing||n.owners[x].sulk>.9)&&Math.abs(u)<2.5&&(m=x);e.ditch&&m===e.ditch&&(m=n.paddle.holder),m&&m!==n.paddle.holder&&this.tapOwner(m)}updateAmbience(t){let e=this.game,n=e.house,i=0,r=0;for(let f of Ee){let p=f.d-n.d;if(p<-6)continue;if(p>40)break;let m=Math.abs(f.u-n.u),x=f.r/2.2*(1-Math.max(0,p)/40)*(1-Math.min(1,m/16));x>i&&(i=x,r=It((f.u-n.u)/10,-1,1))}let o=0;for(let f of Un){let p=Math.hypot(f.u-n.u,f.d-n.d);o=Math.max(o,1-Math.min(1,p/26))}n.whirl&&(o=1);let a=Si(n.d),c=Bs(n.d),l=0,h=0;for(let f of bn){let p=e.owners[f];p.state==="aboard"&&p.sawing&&(l=1,h=this.panOf(f))}let u=It((nn(n.d)-3)/8,0,1);this.lastRoar=i,this.audio.update(t,{active:this.state==="play"||this.state==="ending",speedK:u,roar:It(i,0,1),roarPan:r,rough:a,whirl:o,canyon:It((c-5)/12,0,1),scrape:n.scraping,damage:It(1-e.hp,0,1),sway:It(Math.abs(n.rollV)*1.2,0,1),sawing:this.state==="play"?l:0,sawPan:h,musicIntensity:this.state==="title"?.4:a>.5||i>.5?1:.5})}updateDanger(){let t=this.game,e=t.house;if(t.state!=="running"||e.whirl)return;this.warned=this.warned||new Set;let n=(e.maxU-e.minU)/2,i=(e.maxU+e.minU)/2;for(let r=0;r<Ee.length;r++){let o=Ee[r],a=o.d-e.d-2.5;if(a<0)continue;if(a>20)break;if(o.r<1.1||this.warned.has(r))continue;let c=a/Math.max(1.5,e.vd);if(c>1.6)continue;let l=i+e.vu*Math.min(c,.8);if(Math.abs(l-o.u)>n+o.r*.9-.15)continue;this.warned.add(r),ne(o.u,o.d,ri),this.ui.popup("!",new R(ri.x,o.h*1.3+1.2,ri.z),"hit");let h=t.aboard().filter(f=>f!==t.paddle.holder),u=h[Math.floor(Math.random()*h.length)];u&&(this.house.views[u].onShock(null),this.ui.say(u,["\uBC14\uC704!!","\uC55E\uC5D0 \uBC14\uC704!","\uBD80\uB52A\uD78C\uB2E4!!"][Math.floor(Math.random()*3)],{force:!0,angry:!0,dur:900}));break}}updateSpray(t){let e=this.game,n=e.house,i=Math.max(this.lastRoar*1.1,Si(n.d)*.7)*(e.state==="running"?1:0);if(this.sprayT-=t*(.4+i*2.2),this.sprayT<=0&&i>.3){this.sprayT=.6+Math.random()*.8;let r=new R((Math.random()-.5)*6,.5,-2.8);this.house.tilt.localToWorld(r);let o=new R(0,0,1).applyQuaternion(this.house.root.quaternion);this.fx.spray(r,o,i),i>.65&&Math.random()<.5&&this.ui.splashDrops(1+Math.round(i*2)),this.audio.splash(.3+i*.4,Math.random()-.5)}}titleChatter(t){if(this.titleTalkT-=t,this.titleTalkT<=0){this.titleTalkT=2.2+Math.random()*1.2;let e=bn[Math.floor(Math.random()*3)];this.ui.say(e,"intro",{force:!0,dur:1900});for(let n of bn)n!==e&&Math.random()<.4&&this.house.views[n].onCheer(.6)}}},no=new R,k_=new R,z_=new R(0,.5,0),ri={x:0,z:0};function io(s){try{navigator.vibrate&&navigator.vibrate(s)}catch{}}function pf(s){let t=Math.floor(s/60),e=Math.floor(s%60);return`${t}:${String(e).padStart(2,"0")}`}function mf(){let s=()=>{try{new xh}catch(t){console.error(t);let e=document.querySelector("#loading");e&&(e.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 3D\uB97C \uCF24 \uC218 \uC5C6\uC5B4\uC694 (WebGL \uD544\uC694)")}};document.fonts&&document.fonts.load?Promise.race([document.fonts.load("40px Jua"),new Promise(t=>setTimeout(t,1500))]).then(s,s):s()}O_.has("nostart")?window.__boot=mf:mf();})();
