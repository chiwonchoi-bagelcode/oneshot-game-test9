(()=>{var Zh=0,dl=1,Jh=2;var fl=1,Kh=2,Hn=3,In=0,Ce=1,an=2,ti=0,Pi=1,pl=2,ml=3,gl=4,jh=5,di=100,Qh=101,tu=102,eu=103,nu=104,iu=200,su=201,ru=202,ou=203,Co=204,Io=205,au=206,cu=207,lu=208,hu=209,uu=210,du=211,fu=212,pu=213,mu=214,oa=0,aa=1,ca=2,Li=3,la=4,ha=5,ua=6,da=7,xl=0,gu=1,xu=2,ei=0,_u=1,yu=2,vu=3,Mu=4,bu=5,Su=6,wu=7;var _l=300,ki=301,zi=302,fa=303,pa=304,Nr=306,Po=1e3,Rn=1001,Lo=1002,Fe=1003,Eu=1004;var Fr=1005;var on=1006,ma=1007;var vi=1008;var Pn=1009,yl=1010,vl=1011,ws=1012,ga=1013,Mi=1014,Ln=1015,Es=1016,xa=1017,_a=1018,Ts=1020,Ml=35902,bl=35899,Sl=1021,wl=1022,cn=1023,fs=1026,As=1027,Rs=1028,ya=1029,El=1030,va=1031;var Ma=1033,Or=33776,Br=33777,kr=33778,zr=33779,ba=35840,Sa=35841,wa=35842,Ea=35843,Ta=36196,Aa=37492,Ra=37496,Ca=37808,Ia=37809,Pa=37810,La=37811,Da=37812,Ua=37813,Na=37814,Fa=37815,Oa=37816,Ba=37817,ka=37818,za=37819,Ha=37820,Va=37821,Ga=36492,Wa=36494,Xa=36495,qa=36283,Ya=36284,$a=36285,Za=36286;var sr=2300,Do=2301,Ro=2302,el=2400,nl=2401,il=2402;var Tu=3200,Au=3201;var Tl=0,Ru=1,ni="",Ke="srgb",Di="srgb-linear",rr="linear",ee="srgb";var Ii=7680;var sl=519,Cu=512,Iu=513,Pu=514,Al=515,Lu=516,Du=517,Uu=518,Nu=519,rl=35044,Rl=35048;var Cl="300 es",Cn=2e3,or=2001;var jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rc=Math.PI/180,Uo=180/Math.PI;function Cs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[s&255]+We[s>>8&255]+We[s>>16&255]+We[s>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Yt(s,t,e){return Math.max(t,Math.min(e,s))}function bf(s,t){return(s%t+t)%t}function Cc(s,t,e){return(1-e)*s+e*t}function $s(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ut=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},we=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],p=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==f||l!==p||h!==m){let g=1-a,d=c*f+l*p+h*m+u*x,v=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){let E=Math.sqrt(b),A=Math.atan2(E,d*v);g=Math.sin(g*A)/E,a=Math.sin(a*A)/E}let _=a*v;if(c=c*g+f*_,l=l*g+p*_,h=h*g+m*_,u=u*g+x*_,g===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*p-l*f,t[e+1]=c*m+h*f+l*u-a*p,t[e+2]=l*m+h*p+a*f-c*u,t[e+3]=h*m-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),p=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u+f*p*m;break;case"YZX":this._x=f*h*u+l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u-f*p*m;break;case"XZY":this._x=f*h*u-l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ic.copy(this).projectOnVector(t),this.sub(Ic)}reflect(t){return this.sub(Ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ic=new C,Sh=new we,Ht=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],m=n[8],x=i[0],g=i[3],d=i[6],v=i[1],b=i[4],_=i[7],E=i[2],A=i[5],T=i[8];return r[0]=o*x+a*v+c*E,r[3]=o*g+a*b+c*A,r[6]=o*d+a*_+c*T,r[1]=l*x+h*v+u*E,r[4]=l*g+h*b+u*A,r[7]=l*d+h*_+u*T,r[2]=f*x+p*v+m*E,r[5]=f*g+p*b+m*A,r[8]=f*d+p*_+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,m=e*u+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Pc.makeScale(t,e)),this}rotate(t){return this.premultiply(Pc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pc=new Ht;function Il(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fu(){let s=ar("canvas");return s.style.display="block",s}var wh={};function ps(s){s in wh||(wh[s]=!0,console.warn(s))}function Ou(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Eh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Th=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sf(){let s={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ee&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?rr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ps("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ps("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Di]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:Eh,fromXYZ:Th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:Eh,fromXYZ:Th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),s}var Jt=Sf();function Kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ji,No=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ji===void 0&&(ji=ar("canvas")),ji.width=t.width,ji.height=t.height;let i=ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wf=0,ms=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Lc(i[o].image)):r.push(Lc(i[o]))}else r=Lc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?No.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ef=0,Dc=new C,je=class s extends jn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Rn,i=Rn,r=on,o=vi,a=cn,c=Pn,l=s.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Cs(),this.name="",this.source=new ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dc).x}get height(){return this.source.getSize(Dc).y}get depth(){return this.source.getSize(Dc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Po:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Po:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=_l;je.DEFAULT_ANISOTROPY=1;var ce=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],m=c[9],x=c[2],g=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,_=(p+1)/2,E=(d+1)/2,A=(h+f)/4,T=(u+x)/4,P=(m+g)/4;return b>_&&b>E?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=T/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=A/i,r=P/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=P/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fo=class extends jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new je(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ms(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Fo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},cr=class extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oo=class extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(t.matrixWorld),this.union(ro)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),oo.subVectors(this.max,Zs),Qi.subVectors(t.a,Zs),ts.subVectors(t.b,Zs),es.subVectors(t.c,Zs),ri.subVectors(ts,Qi),oi.subVectors(es,ts),Ti.subVectors(Qi,es);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Ti.z,Ti.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Ti.z,0,-Ti.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Ti.y,Ti.x,0];return!Uc(e,Qi,ts,es,oo)||(e=[1,0,0,0,1,0,0,0,1],!Uc(e,Qi,ts,es,oo))?!1:(ao.crossVectors(ri,oi),e=[ao.x,ao.y,ao.z],Uc(e,Qi,ts,es,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qn=[new C,new C,new C,new C,new C,new C,new C,new C],En=new C,ro=new kn,Qi=new C,ts=new C,es=new C,ri=new C,oi=new C,Ti=new C,Zs=new C,oo=new C,ao=new C,Ai=new C;function Uc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ai.fromArray(s,r);let a=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),c=t.dot(Ai),l=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Tf=new kn,Js=new C,Nc=new C,fi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Nc)),this.expandByPoint(Js.copy(t.center).sub(Nc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Yn=new C,Fc=new C,co=new C,ai=new C,Oc=new C,lo=new C,Bc=new C,Bo=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fc.copy(t).add(e).multiplyScalar(.5),co.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Fc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(co),a=ai.dot(this.direction),c=-ai.dot(co),l=ai.lengthSq(),h=Math.abs(1-o*o),u,f,p,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fc).addScaledVector(co,f),p}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,r){Oc.subVectors(e,t),lo.subVectors(n,t),Bc.crossVectors(Oc,lo);let o=this.direction.dot(Bc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);let c=a*this.direction.dot(lo.crossVectors(ai,lo));if(c<0)return null;let l=a*this.direction.dot(Oc.cross(ai));if(l<0||c+l>o)return null;let h=-a*ai.dot(Bc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,f,p,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,p,m,x,g)}set(t,e,n,i,r,o,a,c,l,h,u,f,p,m,x,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=m+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,m=l*h,x=l*u;e[0]=f+x*a,e[4]=m*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,m=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,p=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-p,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=p*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=m*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*c,p=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Af,t,Rf)}lookAt(t,e,n){let i=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ci.crossVectors(n,fn),ci.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ci.crossVectors(n,fn)),ci.normalize(),ho.crossVectors(fn,ci),i[0]=ci.x,i[4]=ho.x,i[8]=fn.x,i[1]=ci.y,i[5]=ho.y,i[9]=fn.y,i[2]=ci.z,i[6]=ho.z,i[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],m=n[2],x=n[6],g=n[10],d=n[14],v=n[3],b=n[7],_=n[11],E=n[15],A=i[0],T=i[4],P=i[8],M=i[12],y=i[1],R=i[5],D=i[9],U=i[13],N=i[2],z=i[6],G=i[10],j=i[14],q=i[3],st=i[7],dt=i[11],Rt=i[15];return r[0]=o*A+a*y+c*N+l*q,r[4]=o*T+a*R+c*z+l*st,r[8]=o*P+a*D+c*G+l*dt,r[12]=o*M+a*U+c*j+l*Rt,r[1]=h*A+u*y+f*N+p*q,r[5]=h*T+u*R+f*z+p*st,r[9]=h*P+u*D+f*G+p*dt,r[13]=h*M+u*U+f*j+p*Rt,r[2]=m*A+x*y+g*N+d*q,r[6]=m*T+x*R+g*z+d*st,r[10]=m*P+x*D+g*G+d*dt,r[14]=m*M+x*U+g*j+d*Rt,r[3]=v*A+b*y+_*N+E*q,r[7]=v*T+b*R+_*z+E*st,r[11]=v*P+b*D+_*G+E*dt,r[15]=v*M+b*U+_*j+E*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],m=t[3],x=t[7],g=t[11],d=t[15];return m*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*p-n*c*p)+x*(+e*c*p-e*l*f+r*o*f-i*o*p+i*l*h-r*c*h)+g*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],m=t[12],x=t[13],g=t[14],d=t[15],v=u*g*l-x*f*l+x*c*p-a*g*p-u*c*d+a*f*d,b=m*f*l-h*g*l-m*c*p+o*g*p+h*c*d-o*f*d,_=h*x*l-m*u*l+m*a*p-o*x*p-h*a*d+o*u*d,E=m*u*c-h*x*c-m*a*f+o*x*f+h*a*g-o*u*g,A=e*v+n*b+i*_+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=v*T,t[1]=(x*f*r-u*g*r-x*i*p+n*g*p+u*i*d-n*f*d)*T,t[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*d+n*c*d)*T,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*p-n*c*p)*T,t[4]=b*T,t[5]=(h*g*r-m*f*r+m*i*p-e*g*p-h*i*d+e*f*d)*T,t[6]=(m*c*r-o*g*r-m*i*l+e*g*l+o*i*d-e*c*d)*T,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*p+e*c*p)*T,t[8]=_*T,t[9]=(m*u*r-h*x*r-m*n*p+e*x*p+h*n*d-e*u*d)*T,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*d+e*a*d)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*T,t[12]=E*T,t[13]=(h*x*i-m*u*i+m*n*f-e*x*f-h*n*g+e*u*g)*T,t[14]=(m*a*i-o*x*i-m*n*c+e*x*c+o*n*g-e*a*g)*T,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,m=r*u,x=o*h,g=o*u,d=a*u,v=c*l,b=c*h,_=c*u,E=n.x,A=n.y,T=n.z;return i[0]=(1-(x+d))*E,i[1]=(p+_)*E,i[2]=(m-b)*E,i[3]=0,i[4]=(p-_)*A,i[5]=(1-(f+d))*A,i[6]=(g+v)*A,i[7]=0,i[8]=(m+b)*T,i[9]=(g-v)*T,i[10]=(1-(f+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ns.set(i[0],i[1],i[2]).length(),o=ns.set(i[4],i[5],i[6]).length(),a=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Tn.copy(this);let l=1/r,h=1/o,u=1/a;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,e.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Cn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),p=(n+i)/(n-i),m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===Cn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===or)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Cn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),p=-(n+i)/(n-i),m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===Cn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===or)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ns=new C,Tn=new Xt,Af=new C(0,0,0),Rf=new C(1,1,1),ci=new C,ho=new C,fn=new C,Ah=new Xt,Rh=new we,Oe=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oe.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cf=0,Ch=new C,is=new we,$n=new Xt,uo=new C,Ks=new C,If=new C,Pf=new we,Ih=new C(1,0,0),Ph=new C(0,1,0),Lh=new C(0,0,1),Dh={type:"added"},Lf={type:"removed"},ss={type:"childadded",child:null},kc={type:"childremoved",child:null},Ye=class s extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new Oe,n=new we,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Ht}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Ih,t)}rotateY(t){return this.rotateOnAxis(Ph,t)}rotateZ(t){return this.rotateOnAxis(Lh,t)}translateOnAxis(t,e){return Ch.copy(t).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ih,t)}translateY(t){return this.translateOnAxis(Ph,t)}translateZ(t){return this.translateOnAxis(Lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ks,uo,this.up):$n.lookAt(uo,Ks,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),is.setFromRotationMatrix($n),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dh),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lf),kc.child=t,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dh),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,If),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ye.DEFAULT_UP=new C(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new C,Zn=new C,zc=new C,Jn=new C,rs=new C,os=new C,Uh=new C,Hc=new C,Vc=new C,Gc=new C,Wc=new ce,Xc=new ce,qc=new ce,ui=class s{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),An.subVectors(t,e),i.cross(An);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){An.subVectors(i,e),Zn.subVectors(n,e),zc.subVectors(t,e);let o=An.dot(An),a=An.dot(Zn),c=An.dot(zc),l=Zn.dot(Zn),h=Zn.dot(zc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Wc.setScalar(0),Xc.setScalar(0),qc.setScalar(0),Wc.fromBufferAttribute(t,e),Xc.fromBufferAttribute(t,n),qc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Wc,r.x),o.addScaledVector(Xc,r.y),o.addScaledVector(qc,r.z),o}static isFrontFacing(t,e,n,i){return An.subVectors(n,e),Zn.subVectors(t,e),An.cross(Zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),An.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;rs.subVectors(i,n),os.subVectors(r,n),Hc.subVectors(t,n);let c=rs.dot(Hc),l=os.dot(Hc);if(c<=0&&l<=0)return e.copy(n);Vc.subVectors(t,i);let h=rs.dot(Vc),u=os.dot(Vc);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(rs,o);Gc.subVectors(t,r);let p=rs.dot(Gc),m=os.dot(Gc);if(m>=0&&p<=m)return e.copy(r);let x=p*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(os,a);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Uh.subVectors(r,i),a=(u-h)/(u-h+(p-m)),e.copy(i).addScaledVector(Uh,a);let d=1/(g+x+f);return o=x*d,a=f*d,e.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Yc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=bf(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Yc(o,r,t+1/3),this.g=Yc(o,r,t),this.b=Yc(o,r,t-1/3)}return Jt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let n=Bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Jt.workingToColorSpace(Xe.copy(this),t),Math.round(Yt(Xe.r*255,0,255))*65536+Math.round(Yt(Xe.g*255,0,255))*256+Math.round(Yt(Xe.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Xe.copy(this),e);let n=Xe.r,i=Xe.g,r=Xe.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Ke){Jt.workingToColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,i=Xe.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(fo);let n=Cc(li.h,fo.h,e),i=Cc(li.s,fo.s,e),r=Cc(li.l,fo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new bt;bt.NAMES=Bu;var Df=0,pi=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=Pi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Io,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Io&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qe=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ee=new C,po=new ut,Uf=0,ye=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rl&&(t.usage=this.usage),t}};var hr=class extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ur=class extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ft=class extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},Nf=0,Mn=new Xt,$c=new Ye,as=new C,pn=new kn,js=new kn,Ne=new C,jt=class s extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Il(t)?ur:hr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return $c.lookAt(t),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(pn.min,js.min),pn.expandByPoint(Ne),Ne.addVectors(pn.max,js.max),pn.expandByPoint(Ne)):(pn.expandByPoint(js.min),pn.expandByPoint(js.max))}pn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ne.fromBufferAttribute(a,l),c&&(as.fromBufferAttribute(t,l),Ne.add(as)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ye(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new C,c[P]=new C;let l=new C,h=new C,u=new C,f=new ut,p=new ut,m=new ut,x=new C,g=new C;function d(P,M,y){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(f),m.sub(f);let R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(R),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(R),a[P].add(x),a[M].add(x),a[y].add(x),c[P].add(g),c[M].add(g),c[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,M=v.length;P<M;++P){let y=v[P],R=y.start,D=y.count;for(let U=R,N=R+D;U<N;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let b=new C,_=new C,E=new C,A=new C;function T(P){E.fromBufferAttribute(i,P),A.copy(E);let M=a[P];b.copy(M),b.sub(E.multiplyScalar(E.dot(M))).normalize(),_.crossVectors(A,M);let R=_.dot(c[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,R)}for(let P=0,M=v.length;P<M;++P){let y=v[P],R=y.start,D=y.count;for(let U=R,N=R+D;U<N;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[m++]=l[p++]}return new ye(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nh=new Xt,Ri=new Bo,mo=new fi,Fh=new C,go=new C,xo=new C,_o=new C,Zc=new C,yo=new C,Oh=new C,vo=new C,kt=class extends Ye{constructor(t=new jt,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){yo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Zc.fromBufferAttribute(u,t),o?yo.addScaledVector(Zc,h):yo.addScaledVector(Zc.sub(e),h))}e.add(yo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(mo.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(mo,Fh)===null||Ri.origin.distanceToSquared(Fh)>(t.far-t.near)**2))&&(Nh.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],d=o[g.materialIndex],v=Math.max(g.start,p.start),b=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=v,E=b;_<E;_+=3){let A=a.getX(_),T=a.getX(_+1),P=a.getX(_+2);i=Mo(this,d,t,n,l,h,u,A,T,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let v=a.getX(g),b=a.getX(g+1),_=a.getX(g+2);i=Mo(this,o,t,n,l,h,u,v,b,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],d=o[g.materialIndex],v=Math.max(g.start,p.start),b=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let _=v,E=b;_<E;_+=3){let A=_,T=_+1,P=_+2;i=Mo(this,d,t,n,l,h,u,A,T,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let v=g,b=g+1,_=g+2;i=Mo(this,o,t,n,l,h,u,v,b,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Ff(s,t,e,n,i,r,o,a){let c;if(t.side===Ce?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===In,a),c===null)return null;vo.copy(a),vo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(vo);return l<e.near||l>e.far?null:{distance:l,point:vo.clone(),object:s}}function Mo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,go),s.getVertexPosition(c,xo),s.getVertexPosition(l,_o);let h=Ff(s,t,e,n,go,xo,_o,Oh);if(h){let u=new C;ui.getBarycoord(Oh,go,xo,_o,u),i&&(h.uv=ui.getInterpolatedAttribute(i,a,c,l,u,new ut)),r&&(h.uv1=ui.getInterpolatedAttribute(r,a,c,l,u,new ut)),o&&(h.normal=ui.getInterpolatedAttribute(o,a,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new C,materialIndex:0};ui.getNormal(go,xo,_o,f.normal),h.face=f,h.barycoord=u}return h}var mi=class s extends jt{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function m(x,g,d,v,b,_,E,A,T,P,M){let y=_/T,R=E/P,D=_/2,U=E/2,N=A/2,z=T+1,G=P+1,j=0,q=0,st=new C;for(let dt=0;dt<G;dt++){let Rt=dt*R-U;for(let qt=0;qt<z;qt++){let oe=qt*y-D;st[x]=oe*v,st[g]=Rt*b,st[d]=N,l.push(st.x,st.y,st.z),st[x]=0,st[g]=0,st[d]=A>0?1:-1,h.push(st.x,st.y,st.z),u.push(qt/T),u.push(1-dt/P),j+=1}}for(let dt=0;dt<P;dt++)for(let Rt=0;Rt<T;Rt++){let qt=f+Rt+z*dt,oe=f+Rt+z*(dt+1),fe=f+(Rt+1)+z*(dt+1),Qt=f+(Rt+1)+z*dt;c.push(qt,oe,Qt),c.push(oe,fe,Qt),q+=6}a.addGroup(p,q,M),p+=q,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Hi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function $e(s){let t={};for(let e=0;e<s.length;e++){let n=Hi(s[e]);for(let i in n)t[i]=n[i]}return t}function Of(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Pl(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Is={clone:Hi,merge:$e},Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Re=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=Of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},dr=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new C,Bh=new ut,kh=new ut,qe=class extends dr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,Bh,kh),e.subVectors(kh,Bh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cs=-90,ls=1,ko=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qe(cs,ls,t,e);i.layers=this.layers,this.add(i);let r=new qe(cs,ls,t,e);r.layers=this.layers,this.add(r);let o=new qe(cs,ls,t,e);o.layers=this.layers,this.add(o);let a=new qe(cs,ls,t,e);a.layers=this.layers,this.add(a);let c=new qe(cs,ls,t,e);c.layers=this.layers,this.add(c);let l=new qe(cs,ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},fr=class extends je{constructor(t=[],e=ki,n,i,r,o,a,c,l,h){super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zo=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new mi(5,5,5),r=new Re({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:ti});r.uniforms.tEquirect.value=e;let o=new kt(i,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=on),new ko(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Et=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},zf={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),d=this._getHandJoint(l,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var pr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mr=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oe,this.environmentIntensity=1,this.environmentRotation=new Oe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var gi=class extends je{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Fe,h=Fe,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class extends ye{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hs=new Xt,zh=new Xt,bo=[],Hh=new kn,Hf=new Xt,Qs=new kt,tr=new fi,Be=class extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Hh.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Hh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),tr.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,hs),zh.multiplyMatrices(n,hs),Qs.matrixWorld=zh,Qs.raycast(t,bo);for(let o=0,a=bo.length;o<a;o++){let c=bo[o];c.instanceId=r,c.object=this,e.push(c)}bo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gi(new Float32Array(i*this.count),i,this.count,Rs,Ln));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Jc=new C,Vf=new C,Gf=new Ht,On=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Jc.subVectors(n,e).cross(Vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Jc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gf.getNormalMatrix(t),i=this.coplanarPoint(Jc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new fi,Wf=new ut(.5,.5),So=new C,xs=class{constructor(t=new On,e=new On,n=new On,i=new On,r=new On,o=new On){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],p=r[7],m=r[8],x=r[9],g=r[10],d=r[11],v=r[12],b=r[13],_=r[14],E=r[15];if(i[0].setComponents(l-o,p-h,d-m,E-v).normalize(),i[1].setComponents(l+o,p+h,d+m,E+v).normalize(),i[2].setComponents(l+a,p+u,d+x,E+b).normalize(),i[3].setComponents(l-a,p-u,d-x,E-b).normalize(),n)i[4].setComponents(c,f,g,_).normalize(),i[5].setComponents(l-c,p-f,d-g,E-_).normalize();else if(i[4].setComponents(l-c,p-f,d-g,E-_).normalize(),e===Cn)i[5].setComponents(l+c,p+f,d+g,E+_).normalize();else if(e===or)i[5].setComponents(c,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){Ci.center.set(0,0,0);let e=Wf.distanceTo(t.center);return Ci.radius=.7071067811865476+e,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(So.x=i.normal.x>0?t.max.x:t.min.x,So.y=i.normal.y>0?t.max.y:t.min.y,So.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gr=class extends je{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},xr=class extends je{constructor(t,e,n=Mi,i,r,o,a=Fe,c=Fe,l,h=fs,u=1){if(h!==fs&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},_r=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},yr=class s extends jt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,p=2*u+f,m=n*2+r,x=i+1,g=new C,d=new C;for(let v=0;v<=m;v++){let b=0,_=0,E=0,A=0;if(v<=n){let M=v/n,y=M*Math.PI/2;_=-h-t*Math.cos(y),E=t*Math.sin(y),A=-t*Math.cos(y),b=M*u}else if(v<=n+r){let M=(v-n)/r;_=-h+M*e,E=t,A=0,b=u+M*f}else{let M=(v-n-r)/n,y=M*Math.PI/2;_=h+t*Math.sin(y),E=t*Math.cos(y),A=t*Math.sin(y),b=u+f+M*u}let T=Math.max(0,Math.min(1,b/p)),P=0;v===0?P=.5/i:v===m&&(P=-.5/i);for(let M=0;M<=i;M++){let y=M/i,R=y*Math.PI*2,D=Math.sin(R),U=Math.cos(R);d.x=-E*U,d.y=_,d.z=E*D,a.push(d.x,d.y,d.z),g.set(-E*U,A,E*D),g.normalize(),c.push(g.x,g.y,g.z),l.push(y+P,T)}if(v>0){let M=(v-1)*x;for(let y=0;y<i;y++){let R=M+y,D=M+y+1,U=v*x+y,N=v*x+y+1;o.push(R,D,U),o.push(D,N,U)}}}this.setIndex(o),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},_s=class s extends jt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new C,h=new ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ys=class s extends jt{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],m=0,x=[],g=n/2,d=0;v(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(f,3)),this.setAttribute("uv",new Ft(p,2));function v(){let _=new C,E=new C,A=0,T=(e-t)/n;for(let P=0;P<=r;P++){let M=[],y=P/r,R=y*(e-t)+t;for(let D=0;D<=i;D++){let U=D/i,N=U*c+a,z=Math.sin(N),G=Math.cos(N);E.x=R*z,E.y=-y*n+g,E.z=R*G,u.push(E.x,E.y,E.z),_.set(z,T,G).normalize(),f.push(_.x,_.y,_.z),p.push(U,1-y),M.push(m++)}x.push(M)}for(let P=0;P<i;P++)for(let M=0;M<r;M++){let y=x[M][P],R=x[M+1][P],D=x[M+1][P+1],U=x[M][P+1];(t>0||M!==0)&&(h.push(y,R,U),A+=3),(e>0||M!==r-1)&&(h.push(R,D,U),A+=3)}l.addGroup(d,A,0),d+=A}function b(_){let E=m,A=new ut,T=new C,P=0,M=_===!0?t:e,y=_===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,g*y,0),f.push(0,y,0),p.push(.5,.5),m++;let R=m;for(let D=0;D<=i;D++){let N=D/i*c+a,z=Math.cos(N),G=Math.sin(N);T.x=M*G,T.y=g*y,T.z=M*z,u.push(T.x,T.y,T.z),f.push(0,y,0),A.x=z*.5+.5,A.y=G*.5*y+.5,p.push(A.x,A.y),m++}for(let D=0;D<i;D++){let U=E+D,N=R+D;_===!0?h.push(N,N+1,U):h.push(N+1,N,U),P+=3}l.addGroup(d,P,_===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vr=class s extends ys{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ho=class s extends jt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(r.slice(),3)),this.setAttribute("uv",new Ft(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new C,_=new C,E=new C;for(let A=0;A<e.length;A+=3)p(e[A+0],b),p(e[A+1],_),p(e[A+2],E),c(b,_,E,v)}function c(v,b,_,E){let A=E+1,T=[];for(let P=0;P<=A;P++){T[P]=[];let M=v.clone().lerp(_,P/A),y=b.clone().lerp(_,P/A),R=A-P;for(let D=0;D<=R;D++)D===0&&P===A?T[P][D]=M:T[P][D]=M.clone().lerp(y,D/R)}for(let P=0;P<A;P++)for(let M=0;M<2*(A-P)-1;M++){let y=Math.floor(M/2);M%2===0?(f(T[P][y+1]),f(T[P+1][y]),f(T[P][y])):(f(T[P][y+1]),f(T[P+1][y+1]),f(T[P+1][y]))}}function l(v){let b=new C;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(v),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let v=new C;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let _=g(v)/2/Math.PI+.5,E=d(v)/Math.PI+.5;o.push(_,1-E)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let b=o[v+0],_=o[v+2],E=o[v+4],A=Math.max(b,_,E),T=Math.min(b,_,E);A>.9&&T<.1&&(b<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,b){let _=v*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function m(){let v=new C,b=new C,_=new C,E=new C,A=new ut,T=new ut,P=new ut;for(let M=0,y=0;M<r.length;M+=9,y+=6){v.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),A.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),E.copy(v).add(b).add(_).divideScalar(3);let R=g(E);x(A,y+0,v,R),x(T,y+2,b,R),x(P,y+4,_,R)}}function x(v,b,_,E){E<0&&v.x===1&&(o[b]=v.x-1),_.x===0&&_.z===0&&(o[b]=E/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new ut:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,i=[],r=[],o=[],a=new C,c=new Xt;for(let p=0;p<=t;p++){let m=p/t;i[p]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Yt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,m))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Yt(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],p*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vs=class extends mn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Vo=class extends vs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ll(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var wo=new C,Kc=new Ll,jc=new Ll,Qc=new Ll,Go=class extends mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(wo.subVectors(i[0],i[1]).add(i[0]),l=wo);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(wo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=wo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Kc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,x,g),jc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,x,g),Qc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Kc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),jc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Qc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Kc.calc(c),jc.calc(c),Qc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Xf(s,t){let e=1-s;return e*e*t}function qf(s,t){return 2*(1-s)*s*t}function Yf(s,t){return s*s*t}function nr(s,t,e,n){return Xf(s,t)+qf(s,e)+Yf(s,n)}function $f(s,t){let e=1-s;return e*e*e*t}function Zf(s,t){let e=1-s;return 3*e*e*s*t}function Jf(s,t){return 3*(1-s)*s*s*t}function Kf(s,t){return s*s*s*t}function ir(s,t,e,n,i){return $f(s,t)+Zf(s,e)+Jf(s,n)+Kf(s,i)}var Mr=class extends mn{constructor(t=new ut,e=new ut,n=new ut,i=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ut){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,i.x,r.x,o.x,a.x),ir(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wo=class extends mn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,i.x,r.x,o.x,a.x),ir(t,i.y,r.y,o.y,a.y),ir(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},br=class extends mn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xo=class extends mn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sr=class extends mn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(nr(t,i.x,r.x,o.x),nr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends mn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(nr(t,i.x,r.x,o.x),nr(t,i.y,r.y,o.y),nr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wr=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Vh(a,c.x,l.x,h.x,u.x),Vh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ut().fromArray(i))}return this}},Gh=Object.freeze({__proto__:null,ArcCurve:Vo,CatmullRomCurve3:Go,CubicBezierCurve:Mr,CubicBezierCurve3:Wo,EllipseCurve:vs,LineCurve:br,LineCurve3:Xo,QuadraticBezierCurve:Sr,QuadraticBezierCurve3:qo,SplineCurve:wr}),Yo=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Gh[i.type]().fromJSON(i))}return this}},Ui=class extends Yo{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new br(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Sr(this.currentPoint.clone(),new ut(t,e),new ut(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Mr(this.currentPoint.clone(),new ut(t,e),new ut(n,i),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new wr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new vs(t,e,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ms=class extends Ui{constructor(t){super(t),this.uuid=Cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ui().fromJSON(i))}return this}};function jf(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=ku(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=ip(s,t,r,e)),s.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<i;f+=e){let p=s[f],m=s[f+1];p<a&&(a=p),m<c&&(c=m),p>h&&(h=p),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Er(r,o,e,a,c,l,0),o}function ku(s,t,e,n,i){let r;if(i===pp(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Wh(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Wh(o/n|0,s[o],s[o+1],r);return r&&bs(r,r.next)&&(Ar(r),r=r.next),r}function Ni(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(bs(e,e.next)||_e(e.prev,e,e.next)===0)){if(Ar(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Er(s,t,e,n,i,r,o){if(!s)return;!o&&r&&cp(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?tp(s,n,i,r):Qf(s)){t.push(c.i,s.i,l.i),Ar(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=ep(Ni(s),t),Er(s,t,e,n,i,r,2)):o===2&&np(s,t,e,n,i,r):Er(Ni(s),t,e,n,i,r,1);break}}}function Qf(s){let t=s.prev,e=s,n=s.next;if(_e(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(i,r,o),u=Math.min(a,c,l),f=Math.max(i,r,o),p=Math.max(a,c,l),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=p&&er(i,a,r,c,o,l,m.x,m.y)&&_e(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function tp(s,t,e,n){let i=s.prev,r=s,o=s.next;if(_e(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,p=Math.min(a,c,l),m=Math.min(h,u,f),x=Math.max(a,c,l),g=Math.max(h,u,f),d=ol(p,m,t,e,n),v=ol(x,g,t,e,n),b=s.prevZ,_=s.nextZ;for(;b&&b.z>=d&&_&&_.z<=v;){if(b.x>=p&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&er(a,h,c,u,l,f,b.x,b.y)&&_e(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=p&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&er(a,h,c,u,l,f,_.x,_.y)&&_e(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&er(a,h,c,u,l,f,b.x,b.y)&&_e(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&er(a,h,c,u,l,f,_.x,_.y)&&_e(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ep(s,t){let e=s;do{let n=e.prev,i=e.next.next;!bs(n,i)&&Hu(n,e,e.next,i)&&Tr(n,i)&&Tr(i,n)&&(t.push(n.i,e.i,i.i),Ar(e),Ar(e.next),e=s=i),e=e.next}while(e!==s);return Ni(e)}function np(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&up(o,a)){let c=Vu(o,a);o=Ni(o,o.next),c=Ni(c,c.next),Er(o,t,e,n,i,r,0),Er(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ip(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=ku(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(hp(l))}i.sort(sp);for(let r=0;r<i.length;r++)e=rp(i[r],e);return e}function sp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function rp(s,t){let e=op(s,t);if(!e)return t;let n=Vu(e,s);return Ni(n,n.next),Ni(e,e.next)}function op(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(bs(s,e))return e;do{if(bs(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&zu(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);Tr(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&ap(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function ap(s,t){return _e(s.prev,s,t.prev)<0&&_e(t.next,s,s.next)<0}function cp(s,t,e,n){let i=s;do i.z===0&&(i.z=ol(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,lp(i)}function lp(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function ol(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function hp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function zu(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function er(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&zu(s,t,e,n,i,r,o,a)}function up(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!dp(s,t)&&(Tr(s,t)&&Tr(t,s)&&fp(s,t)&&(_e(s.prev,s,t.prev)||_e(s,t.prev,t))||bs(s,t)&&_e(s.prev,s,s.next)>0&&_e(t.prev,t,t.next)>0)}function _e(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function bs(s,t){return s.x===t.x&&s.y===t.y}function Hu(s,t,e,n){let i=To(_e(s,t,e)),r=To(_e(s,t,n)),o=To(_e(e,n,s)),a=To(_e(e,n,t));return!!(i!==r&&o!==a||i===0&&Eo(s,e,t)||r===0&&Eo(s,n,t)||o===0&&Eo(e,s,n)||a===0&&Eo(e,t,n))}function Eo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function To(s){return s>0?1:s<0?-1:0}function dp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Hu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Tr(s,t){return _e(s.prev,s,s.next)<0?_e(s,t,s.next)>=0&&_e(s,s.prev,t)>=0:_e(s,t,s.prev)<0||_e(s,s.next,t)<0}function fp(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Vu(s,t){let e=al(s.i,s.x,s.y),n=al(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wh(s,t,e,n){let i=al(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ar(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function al(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pp(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var cl=class{static triangulate(t,e,n=2){return jf(t,e,n)}},ds=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Xh(t),qh(n,t);let o=t.length;e.forEach(Xh);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,qh(n,e[c]);let a=cl.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Xh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function qh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Fi=class s extends Ho{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Oi=class s extends jt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,p=[],m=[],x=[],g=[];for(let d=0;d<h;d++){let v=d*f-o;for(let b=0;b<l;b++){let _=b*u-r;m.push(_,-v,0),x.push(0,0,1),g.push(b/a),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){let b=v+l*d,_=v+l*(d+1),E=v+1+l*(d+1),A=v+1+l*d;p.push(b,_,A),p.push(_,E,A)}this.setIndex(p),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Rr=class s extends jt{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/i,p=new C,m=new ut;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let d=r+g/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<i;x++){let g=x*(n+1);for(let d=0;d<n;d++){let v=d+g,b=v,_=v+n+1,E=v+n+2,A=v+1;a.push(b,_,A),a.push(_,E,A)}}this.setIndex(a),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Cr=class s extends jt{constructor(t=new Ms([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ft(i,3)),this.setAttribute("normal",new Ft(r,3)),this.setAttribute("uv",new Ft(o,2));function l(h){let u=i.length/3,f=h.extractPoints(e),p=f.shape,m=f.holes;ds.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,d=m.length;g<d;g++){let v=m[g];ds.isClockWise(v)===!0&&(m[g]=v.reverse())}let x=ds.triangulateShape(p,m);for(let g=0,d=m.length;g<d;g++){let v=m[g];p=p.concat(v)}for(let g=0,d=p.length;g<d;g++){let v=p[g];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,d=x.length;g<d;g++){let v=x[g],b=v[0]+u,_=v[1]+u,E=v[2]+u;n.push(b,_,E),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return mp(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function mp(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var zn=class s extends jt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,f=new C,p=[],m=[],x=[],g=[];for(let d=0;d<=n;d++){let v=[],b=d/n,_=0;d===0&&o===0?_=.5/e:d===n&&c===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){let A=E/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+b*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(A+_,1-b),v.push(l++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){let b=h[d][v+1],_=h[d][v],E=h[d+1][v],A=h[d+1][v+1];(d!==0||o>0)&&p.push(b,_,A),(d!==n-1||c<Math.PI)&&p.push(_,E,A)}this.setIndex(p),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ir=class s extends jt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new C,u=new C,f=new C;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let x=m/i*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let x=(i+1)*p+m-1,g=(i+1)*(p-1)+m-1,d=(i+1)*(p-1)+m,v=(i+1)*p+m;o.push(x,g,v),o.push(g,d,v)}this.setIndex(o),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Qn=class extends pi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new bt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var $o=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zo=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ao(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function gp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Bi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jo=class extends Bi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:el,endingEnd:el}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case nl:r=t,a=2*e-n;break;case il:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nl:o=t,c=2*n-e;break;case il:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,d=-f*g+2*f*x-f*m,v=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,b=(-1-p)*g+(1.5+p)*x+.5*m,_=p*g-p*x;for(let E=0;E!==a;++E)r[E]=d*o[h+E]+v*o[l+E]+b*o[c+E]+_*o[u+E];return r}},Ko=class extends Bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},jo=class extends Bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},gn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ao(e,this.TimeBufferType),this.values=Ao(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ao(t.times,Array),values:Ao(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case sr:e=this.InterpolantFactoryMethodDiscrete;break;case Do:e=this.InterpolantFactoryMethodLinear;break;case Ro:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&gp(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ro,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[p+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Do;var _i=class extends gn{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=sr;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends gn{constructor(t,e,n,i){super(t,e,n,i)}};Qo.prototype.ValueTypeName="color";var ta=class extends gn{constructor(t,e,n,i){super(t,e,n,i)}};ta.prototype.ValueTypeName="number";var ea=class extends Bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)we.slerpFlat(r,0,o,l-a,o,l,c);return r}},Pr=class extends gn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ea(this.times,this.values,this.getValueSize(),t)}};Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends gn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=sr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends gn{constructor(t,e,n,i){super(t,e,n,i)}};na.prototype.ValueTypeName="vector";var ia=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Gu=new ia,sa=class{constructor(t){this.manager=t!==void 0?t:Gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lr=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Dr=class extends Lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},tl=new Xt,Yh=new C,$h=new C,ll=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ur=class extends dr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hl=class extends ll{constructor(){super(new Ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends Lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new hl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ra=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dl="\\[\\]\\.:\\/",xp=new RegExp("["+Dl+"]","g"),Ul="[^"+Dl+"]",_p="[^"+Dl.replace("\\.","")+"]",yp=/((?:WC+[\/:])*)/.source.replace("WC",Ul),vp=/(WCOD+)?/.source.replace("WCOD",_p),Mp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ul),bp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ul),Sp=new RegExp("^"+yp+vp+Mp+bp+"$"),wp=["material","materials","bones","map"],ul=class{constructor(t,e,n){let i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xp,"")}static parseTrackName(t){let e=Sp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);wp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=ul;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z_=new Float32Array(1);function Nl(s,t,e,n){let i=Ep(n);switch(e){case Sl:return s*t;case Rs:return s*t/i.components*i.byteLength;case ya:return s*t/i.components*i.byteLength;case El:return s*t*2/i.components*i.byteLength;case va:return s*t*2/i.components*i.byteLength;case wl:return s*t*3/i.components*i.byteLength;case cn:return s*t*4/i.components*i.byteLength;case Ma:return s*t*4/i.components*i.byteLength;case Or:case Br:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kr:case zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sa:case Ea:return Math.max(s,16)*Math.max(t,8)/4;case ba:case wa:return Math.max(s,8)*Math.max(t,8)/2;case Ta:case Aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Na:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ka:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Wa:case Xa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case qa:case Ya:return Math.ceil(s/4)*Math.ceil(t/4)*8;case $a:case Za:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ep(s){switch(s){case Pn:case yl:return{byteLength:1,components:1};case ws:case vl:case Es:return{byteLength:2,components:1};case xa:case _a:return{byteLength:2,components:4};case Mi:case ga:case Ln:return{byteLength:4,components:1};case Ml:case bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function fd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Lp(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){let m=u[f],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){let x=u[p];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
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
#endif`,zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
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
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qp=`#ifdef USE_IRIDESCENCE
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
#endif`,Yp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nm=`#define PI 3.141592653589793
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
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
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vm=`#ifdef USE_GRADIENTMAP
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
}`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
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
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Im=`PhysicalMaterial material;
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
#endif`,Pm=`struct PhysicalMaterial {
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
}`,Lm=`
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vm=`#if defined( USE_POINTS_UV )
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
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e0=`#ifdef USE_NORMALMAP
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
#endif`,n0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x0=`float getShadowMask() {
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
}`,_0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,L0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
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
}`,k0=`#if DEPTH_PACKING == 3200
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
}`,z0=`#define DISTANCE
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
}`,H0=`#define DISTANCE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Y0=`uniform vec3 diffuse;
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
}`,$0=`#define LAMBERT
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
}`,Z0=`#define LAMBERT
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
}`,J0=`#define MATCAP
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
}`,K0=`#define MATCAP
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
}`,j0=`#define NORMAL
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
}`,Q0=`#define NORMAL
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
}`,tg=`#define PHONG
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
}`,eg=`#define PHONG
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
}`,ng=`#define STANDARD
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
}`,ig=`#define STANDARD
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
}`,sg=`#define TOON
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
}`,rg=`#define TOON
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
}`,og=`uniform float size;
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
}`,ag=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,lg=`uniform vec3 color;
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
}`,hg=`uniform float rotation;
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
}`,ug=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Dp,alphahash_pars_fragment:Up,alphamap_fragment:Np,alphamap_pars_fragment:Fp,alphatest_fragment:Op,alphatest_pars_fragment:Bp,aomap_fragment:kp,aomap_pars_fragment:zp,batching_pars_vertex:Hp,batching_vertex:Vp,begin_vertex:Gp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:Jp,clipping_planes_vertex:Kp,color_fragment:jp,color_pars_fragment:Qp,color_pars_vertex:tm,color_vertex:em,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:rm,displacementmap_vertex:om,emissivemap_fragment:am,emissivemap_pars_fragment:cm,colorspace_fragment:lm,colorspace_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Em,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:xm,fog_fragment:_m,fog_pars_fragment:ym,gradientmap_pars_fragment:vm,lightmap_pars_fragment:Mm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Sm,lights_pars_begin:wm,lights_toon_fragment:Tm,lights_toon_pars_fragment:Am,lights_phong_fragment:Rm,lights_phong_pars_fragment:Cm,lights_physical_fragment:Im,lights_physical_pars_fragment:Pm,lights_fragment_begin:Lm,lights_fragment_maps:Dm,lights_fragment_end:Um,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Om,logdepthbuf_vertex:Bm,map_fragment:km,map_pars_fragment:zm,map_particle_fragment:Hm,map_particle_pars_fragment:Vm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:qm,morphnormal_vertex:Ym,morphtarget_pars_vertex:$m,morphtarget_vertex:Zm,normal_fragment_begin:Jm,normal_fragment_maps:Km,normal_pars_fragment:jm,normal_pars_vertex:Qm,normal_vertex:t0,normalmap_pars_fragment:e0,clearcoat_normal_fragment_begin:n0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:r0,opaque_fragment:o0,packing:a0,premultiplied_alpha_fragment:c0,project_vertex:l0,dithering_fragment:h0,dithering_pars_fragment:u0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:g0,shadowmask_pars_fragment:x0,skinbase_vertex:_0,skinning_pars_vertex:y0,skinning_vertex:v0,skinnormal_vertex:M0,specularmap_fragment:b0,specularmap_pars_fragment:S0,tonemapping_fragment:w0,tonemapping_pars_fragment:E0,transmission_fragment:T0,transmission_pars_fragment:A0,uv_pars_fragment:R0,uv_pars_vertex:C0,uv_vertex:I0,worldpos_vertex:P0,background_vert:L0,background_frag:D0,backgroundCube_vert:U0,backgroundCube_frag:N0,cube_vert:F0,cube_frag:O0,depth_vert:B0,depth_frag:k0,distanceRGBA_vert:z0,distanceRGBA_frag:H0,equirect_vert:V0,equirect_frag:G0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:q0,meshbasic_frag:Y0,meshlambert_vert:$0,meshlambert_frag:Z0,meshmatcap_vert:J0,meshmatcap_frag:K0,meshnormal_vert:j0,meshnormal_frag:Q0,meshphong_vert:tg,meshphong_frag:eg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:sg,meshtoon_frag:rg,points_vert:og,points_frag:ag,shadow_vert:cg,shadow_frag:lg,sprite_vert:hg,sprite_frag:ug},at={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Vn={basic:{uniforms:$e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:$e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new bt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:$e([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:$e([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:$e([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new bt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:$e([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:$e([at.points,at.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:$e([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:$e([at.common,at.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:$e([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:$e([at.sprite,at.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:$e([at.common,at.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:$e([at.lights,at.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Vn.physical={uniforms:$e([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var Ja={r:0,b:0,g:0},Vi=new Oe,dg=new Xt;function fg(s,t,e,n,i,r,o){let a=new bt(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function m(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function x(b){let _=!1,E=m(b);E===null?d(a,c):E&&E.isColor&&(d(E,1),_=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(b,_){let E=m(_);E&&(E.isCubeTexture||E.mapping===Nr)?(h===void 0&&(h=new kt(new mi(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:Hi(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Vi.copy(_.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(Vi)),h.material.toneMapped=Jt.getTransfer(E.colorSpace)!==ee,(u!==E||f!==E.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new kt(new Oi(2,2),new Re({name:"BackgroundMaterial",uniforms:Hi(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(E.colorSpace)!==ee,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,p=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function d(b,_){b.getRGB(Ja,Pl(s)),n.buffers.color.setClear(Ja.r,Ja.g,Ja.b,_,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),c=_,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,d(a,c)},render:x,addToRenderList:g,dispose:v}}function pg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(y,R,D,U,N){let z=!1,G=u(U,D,R);r!==G&&(r=G,l(r.object)),z=p(y,U,D,N),z&&m(y,U,D,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(y,R,D,U),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,R,D){let U=D.wireframe===!0,N=n[y.id];N===void 0&&(N={},n[y.id]=N);let z=N[R.id];z===void 0&&(z={},N[R.id]=z);let G=z[U];return G===void 0&&(G=f(c()),z[U]=G),G}function f(y){let R=[],D=[],U=[];for(let N=0;N<e;N++)R[N]=0,D[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:U,object:y,attributes:{},index:null}}function p(y,R,D,U){let N=r.attributes,z=R.attributes,G=0,j=D.getAttributes();for(let q in j)if(j[q].location>=0){let dt=N[q],Rt=z[q];if(Rt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Rt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Rt=y.instanceColor)),dt===void 0||dt.attribute!==Rt||Rt&&dt.data!==Rt.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function m(y,R,D,U){let N={},z=R.attributes,G=0,j=D.getAttributes();for(let q in j)if(j[q].location>=0){let dt=z[q];dt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));let Rt={};Rt.attribute=dt,dt&&dt.data&&(Rt.data=dt.data),N[q]=Rt,G++}r.attributes=N,r.attributesNum=G,r.index=U}function x(){let y=r.newAttributes;for(let R=0,D=y.length;R<D;R++)y[R]=0}function g(y){d(y,0)}function d(y,R){let D=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;D[y]=1,U[y]===0&&(s.enableVertexAttribArray(y),U[y]=1),N[y]!==R&&(s.vertexAttribDivisor(y,R),N[y]=R)}function v(){let y=r.newAttributes,R=r.enabledAttributes;for(let D=0,U=R.length;D<U;D++)R[D]!==y[D]&&(s.disableVertexAttribArray(D),R[D]=0)}function b(y,R,D,U,N,z,G){G===!0?s.vertexAttribIPointer(y,R,D,N,z):s.vertexAttribPointer(y,R,D,U,N,z)}function _(y,R,D,U){x();let N=U.attributes,z=D.getAttributes(),G=R.defaultAttributeValues;for(let j in z){let q=z[j];if(q.location>=0){let st=N[j];if(st===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){let dt=st.normalized,Rt=st.itemSize,qt=t.get(st);if(qt===void 0)continue;let oe=qt.buffer,fe=qt.type,Qt=qt.bytesPerElement,Z=fe===s.INT||fe===s.UNSIGNED_INT||st.gpuType===ga;if(st.isInterleavedBufferAttribute){let Q=st.data,mt=Q.stride,Ot=st.offset;if(Q.isInstancedInterleavedBuffer){for(let At=0;At<q.locationSize;At++)d(q.location+At,Q.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let At=0;At<q.locationSize;At++)g(q.location+At);s.bindBuffer(s.ARRAY_BUFFER,oe);for(let At=0;At<q.locationSize;At++)b(q.location+At,Rt/q.locationSize,fe,dt,mt*Qt,(Ot+Rt/q.locationSize*At)*Qt,Z)}else{if(st.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)d(q.location+Q,st.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Q=0;Q<q.locationSize;Q++)g(q.location+Q);s.bindBuffer(s.ARRAY_BUFFER,oe);for(let Q=0;Q<q.locationSize;Q++)b(q.location+Q,Rt/q.locationSize,fe,dt,Rt*Qt,Rt/q.locationSize*Q*Qt,Z)}}else if(G!==void 0){let dt=G[j];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(q.location,dt);break;case 3:s.vertexAttrib3fv(q.location,dt);break;case 4:s.vertexAttrib4fv(q.location,dt);break;default:s.vertexAttrib1fv(q.location,dt)}}}}v()}function E(){P();for(let y in n){let R=n[y];for(let D in R){let U=R[D];for(let N in U)h(U[N].object),delete U[N];delete R[D]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let D in R){let U=R[D];for(let N in U)h(U[N].object),delete U[N];delete R[D]}delete n[y.id]}function T(y){for(let R in n){let D=n[R];if(D[y.id]===void 0)continue;let U=D[y.id];for(let N in U)h(U[N].object),delete U[N];delete D[y.id]}}function P(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function mg(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function gg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==cn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let P=T===Es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Pn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ln&&!P)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:E,maxSamples:A}}function xg(s){let t=this,e=null,n=0,i=!1,r=!1,o=new On,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,d=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:n,b=v*4,_=d.clippingState||null;c.value=_,_=h(m,f,b,p);for(let E=0;E!==b;++E)_[E]=e[E];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let d=p+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let b=0,_=p;b!==x;++b,_+=4)o.copy(u[b]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function _g(s){let t=new WeakMap;function e(o,a){return a===fa?o.mapping=ki:a===pa&&(o.mapping=zi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===fa||a===pa)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new zo(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ls=4,Wu=[.125,.215,.35,.446,.526,.582],Xi=20,Fl=new Ur,Xu=new bt,Ol=null,Bl=0,kl=0,zl=!1,Wi=(1+Math.sqrt(5))/2,Ps=1/Wi,qu=[new C(-Wi,Ps,0),new C(Wi,Ps,0),new C(-Ps,0,Wi),new C(Ps,0,Wi),new C(0,Wi,-Ps),new C(0,Wi,Ps),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],yg=new C,Qa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=yg}=r;Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ol,Bl,kl),this._renderer.xr.enabled=zl,t.scissorTest=!1,Ka(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Es,format:cn,colorSpace:Di,depthBuffer:!1},i=Yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vg(r)),this._blurMaterial=Mg(r,t,e)}return i}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,Fl)}_sceneToCubeUV(t,e,n,i,r){let c=new qe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Xu),u.toneMapping=ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let x=new Qe({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new kt(new mi,x),d=!1,v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,d=!0):(x.color.copy(Xu),d=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):_===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let E=this._cubeSize;Ka(i,_*E,b>2?E:0,E,E),u.setRenderTarget(i),d&&u.render(g,c),u.render(t,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ki||t.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$u());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ka(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Fl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qu[(i-r-1)%qu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new kt(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Xi;g>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);let d=[],v=0;for(let T=0;T<Xi;++T){let P=T/x,M=Math.exp(-P*P/2);d.push(M),T===0?v+=M:T<g&&(v+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=m,f.mipInt.value=b-n;let _=this._sizeLods[i],E=3*_*(i>b-Ls?i-b+Ls:0),A=4*(this._cubeSize-_);Ka(e,E,A,3*_,2*_),c.setRenderTarget(e),c.render(u,Fl)}};function vg(s){let t=[],e=[],n=[],i=s,r=s-Ls+1+Wu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ls?c=Wu[o-s+Ls-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,x=3,g=2,d=1,v=new Float32Array(x*m*p),b=new Float32Array(g*m*p),_=new Float32Array(d*m*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,P=A>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(M,x*m*A),b.set(f,g*m*A);let y=[A,A,A,A,A,A];_.set(y,d*m*A)}let E=new jt;E.setAttribute("position",new ye(v,x)),E.setAttribute("uv",new ye(b,g)),E.setAttribute("faceIndex",new ye(_,d)),t.push(E),i>Ls&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yu(s,t,e){let n=new Bn(s,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ka(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Mg(s,t,e){let n=new Float32Array(Xi),i=new C(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function $u(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Zu(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function bg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===fa||c===pa,h=c===ki||c===zi;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Qa(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Qa(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Sg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wg(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)t.update(f[p],s.ARRAY_BUFFER)}function l(u){let f=[],p=u.index,m=u.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let b=0,_=v.length;b<_;b+=3){let E=v[b+0],A=v[b+1],T=v[b+2];f.push(E,A,A,T,T,E)}}else if(m!==void 0){let v=m.array;x=m.version;for(let b=0,_=v.length/3-1;b<_;b+=3){let E=b+0,A=b+1,T=b+2;f.push(E,A,A,T,T,E)}}else return;let g=new(Il(f)?ur:hr)(f,1);g.version=x;let d=r.get(u);d&&t.remove(d),r.set(u,g)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Eg(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){s.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,m){m!==0&&(s.drawElementsInstanced(n,p,r,f*o,m),e.update(p,n,m))}function h(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];e.update(g,n,1)}function u(f,p,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,m);let d=0;for(let v=0;v<m;v++)d+=p[v]*x[v];e.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Tg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ag(s,t,e){let n=new WeakMap,i=new ce;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;p===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let A=new Float32Array(_*E*4*u),T=new cr(A,_,E,u);T.type=Ln,T.needsUpdate=!0;let P=b*4;for(let y=0;y<u;y++){let R=g[y],D=d[y],U=v[y],N=_*E*4*y;for(let z=0;z<R.count;z++){let G=z*P;p===!0&&(i.fromBufferAttribute(R,z),A[N+G+0]=i.x,A[N+G+1]=i.y,A[N+G+2]=i.z,A[N+G+3]=0),m===!0&&(i.fromBufferAttribute(D,z),A[N+G+4]=i.x,A[N+G+5]=i.y,A[N+G+6]=i.z,A[N+G+7]=0),x===!0&&(i.fromBufferAttribute(U,z),A[N+G+8]=i.x,A[N+G+9]=i.y,A[N+G+10]=i.z,A[N+G+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new ut(_,E)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Rg(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var pd=new je,Ju=new xr(1,1),md=new cr,gd=new Oo,xd=new fr,Ku=[],ju=[],Qu=new Float32Array(16),td=new Float32Array(9),ed=new Float32Array(4);function Us(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Ku[i];if(r===void 0&&(r=new Float32Array(i),Ku[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ie(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ec(s,t){let e=ju[t];e===void 0&&(e=new Int32Array(t),ju[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Cg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ig(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function Pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function Lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function Dg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;ed.set(n),s.uniformMatrix2fv(this.addr,!1,ed),Pe(e,n)}}function Ug(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;td.set(n),s.uniformMatrix3fv(this.addr,!1,td),Pe(e,n)}}function Ng(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;Qu.set(n),s.uniformMatrix4fv(this.addr,!1,Qu),Pe(e,n)}}function Fg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Og(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function Bg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function zg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Hg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function Vg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function Gg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function Wg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ju.compareFunction=Al,r=Ju):r=pd,e.setTexture2D(t||r,i)}function Xg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gd,i)}function qg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||xd,i)}function Yg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||md,i)}function $g(s){switch(s){case 5126:return Cg;case 35664:return Ig;case 35665:return Pg;case 35666:return Lg;case 35674:return Dg;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return kg;case 5125:return zg;case 36294:return Hg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Zg(s,t){s.uniform1fv(this.addr,t)}function Jg(s,t){let e=Us(t,this.size,2);s.uniform2fv(this.addr,e)}function Kg(s,t){let e=Us(t,this.size,3);s.uniform3fv(this.addr,e)}function jg(s,t){let e=Us(t,this.size,4);s.uniform4fv(this.addr,e)}function Qg(s,t){let e=Us(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function tx(s,t){let e=Us(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ex(s,t){let e=Us(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function nx(s,t){s.uniform1iv(this.addr,t)}function ix(s,t){s.uniform2iv(this.addr,t)}function sx(s,t){s.uniform3iv(this.addr,t)}function rx(s,t){s.uniform4iv(this.addr,t)}function ox(s,t){s.uniform1uiv(this.addr,t)}function ax(s,t){s.uniform2uiv(this.addr,t)}function cx(s,t){s.uniform3uiv(this.addr,t)}function lx(s,t){s.uniform4uiv(this.addr,t)}function hx(s,t,e){let n=this.cache,i=t.length,r=ec(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||pd,r[o])}function ux(s,t,e){let n=this.cache,i=t.length,r=ec(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||gd,r[o])}function dx(s,t,e){let n=this.cache,i=t.length,r=ec(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||xd,r[o])}function fx(s,t,e){let n=this.cache,i=t.length,r=ec(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||md,r[o])}function px(s){switch(s){case 5126:return Zg;case 35664:return Jg;case 35665:return Kg;case 35666:return jg;case 35674:return Qg;case 35675:return tx;case 35676:return ex;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ox;case 36294:return ax;case 36295:return cx;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}var Vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}},Gl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=px(e.type)}},Wl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Hl=/(\w+)(\])?(\[|\.)?/g;function nd(s,t){s.seq.push(t),s.map[t.id]=t}function mx(s,t,e){let n=s.name,i=n.length;for(Hl.lastIndex=0;;){let r=Hl.exec(n),o=Hl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){nd(e,l===void 0?new Vl(a,s,t):new Gl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Wl(a),nd(e,u)),e=u}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);mx(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function id(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var gx=37297,xx=0;function _x(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var sd=new Ht;function yx(s){Jt._getMatrix(sd,Jt.workingColorSpace,s);let t=`mat3( ${sd.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case rr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function rd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+_x(s.getShaderSource(t),a)}else return r}function vx(s,t){let e=yx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mx(s,t){let e;switch(t){case _u:e="Linear";break;case yu:e="Reinhard";break;case vu:e="Cineon";break;case Mu:e="ACESFilmic";break;case Su:e="AgX";break;case wu:e="Neutral";break;case bu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ja=new C;function bx(){Jt.getLuminanceCoefficients(ja);let s=ja.x.toFixed(4),t=ja.y.toFixed(4),e=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function wx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ex(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Hr(s){return s!==""}function od(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ad(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(s){return s.replace(Tx,Rx)}var Ax=new Map;function Rx(s,t){let e=Wt[t];if(e===void 0){let n=Ax.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xl(e)}var Cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(s){return s.replace(Cx,Ix)}function Ix(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ld(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Px(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Lx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ki:case zi:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function Ux(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xl:t="ENVMAP_BLENDING_MULTIPLY";break;case gu:t="ENVMAP_BLENDING_MIX";break;case xu:t="ENVMAP_BLENDING_ADD";break}return t}function Nx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Px(e),l=Lx(e),h=Dx(e),u=Ux(e),f=Nx(e),p=Sx(e),m=wx(r),x=i.createProgram(),g,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Hr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Hr).join(`
`),d.length>0&&(d+=`
`)):(g=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),d=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ei?Mx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,vx("linearToOutputTexel",e.outputColorSpace),bx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Xl(o),o=od(o,e),o=ad(o,e),a=Xl(a),a=od(a,e),a=ad(a,e),o=cd(o),a=cd(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=v+g+o,_=v+d+a,E=id(i,i.VERTEX_SHADER,b),A=id(i,i.FRAGMENT_SHADER,_);i.attachShader(x,E),i.attachShader(x,A),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(R){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(x)||"",U=i.getShaderInfoLog(E)||"",N=i.getShaderInfoLog(A)||"",z=D.trim(),G=U.trim(),j=N.trim(),q=!0,st=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,E,A);else{let dt=rd(i,E,"vertex"),Rt=rd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+dt+`
`+Rt)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||j==="")&&(st=!1);st&&(R.diagnostics={runnable:q,programLog:z,vertexShader:{log:G,prefix:g},fragmentShader:{log:j,prefix:d}})}i.deleteShader(E),i.deleteShader(A),P=new Ds(i,x),M=Ex(i,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,gx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}var Ox=0,ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yl(t),e.set(t,n)),n}},Yl=class{constructor(t){this.id=Ox++,this.code=t,this.usedTimes=0}};function Bx(s,t,e,n,i,r,o){let a=new lr,c=new ql,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,y,R,D,U){let N=D.fog,z=U.geometry,G=M.isMeshStandardMaterial?D.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),q=j&&j.mapping===Nr?j.image.height:null,st=m[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let dt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Rt=dt!==void 0?dt.length:0,qt=0;z.morphAttributes.position!==void 0&&(qt=1),z.morphAttributes.normal!==void 0&&(qt=2),z.morphAttributes.color!==void 0&&(qt=3);let oe,fe,Qt,Z;if(st){let te=Vn[st];oe=te.vertexShader,fe=te.fragmentShader}else oe=M.vertexShader,fe=M.fragmentShader,c.update(M),Qt=c.getVertexShaderID(M),Z=c.getFragmentShaderID(M);let Q=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Ot=U.isInstancedMesh===!0,At=U.isBatchedMesh===!0,Zt=!!M.map,Ge=!!M.matcap,L=!!j,pe=!!M.aoMap,zt=!!M.lightMap,Ut=!!M.bumpMap,yt=!!M.normalMap,me=!!M.displacementMap,vt=!!M.emissiveMap,Gt=!!M.metalnessMap,Ue=!!M.roughnessMap,Se=M.anisotropy>0,I=M.clearcoat>0,S=M.dispersion>0,H=M.iridescence>0,$=M.sheen>0,K=M.transmission>0,Y=Se&&!!M.anisotropyMap,Tt=I&&!!M.clearcoatMap,rt=I&&!!M.clearcoatNormalMap,Mt=I&&!!M.clearcoatRoughnessMap,St=H&&!!M.iridescenceMap,nt=H&&!!M.iridescenceThicknessMap,ht=$&&!!M.sheenColorMap,Dt=$&&!!M.sheenRoughnessMap,wt=!!M.specularMap,ct=!!M.specularColorMap,Vt=!!M.specularIntensityMap,F=K&&!!M.transmissionMap,it=K&&!!M.thicknessMap,ot=!!M.gradientMap,pt=!!M.alphaMap,tt=M.alphaTest>0,J=!!M.alphaHash,_t=!!M.extensions,Bt=ei;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Bt=s.toneMapping);let ae={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:oe,fragmentShader:fe,defines:M.defines,customVertexShaderID:Qt,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:At,batchingColor:At&&U._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&U.instanceColor!==null,instancingMorph:Ot&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Di,alphaToCoverage:!!M.alphaToCoverage,map:Zt,matcap:Ge,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:q,aoMap:pe,lightMap:zt,bumpMap:Ut,normalMap:yt,displacementMap:f&&me,emissiveMap:vt,normalMapObjectSpace:yt&&M.normalMapType===Ru,normalMapTangentSpace:yt&&M.normalMapType===Tl,metalnessMap:Gt,roughnessMap:Ue,anisotropy:Se,anisotropyMap:Y,clearcoat:I,clearcoatMap:Tt,clearcoatNormalMap:rt,clearcoatRoughnessMap:Mt,dispersion:S,iridescence:H,iridescenceMap:St,iridescenceThicknessMap:nt,sheen:$,sheenColorMap:ht,sheenRoughnessMap:Dt,specularMap:wt,specularColorMap:ct,specularIntensityMap:Vt,transmission:K,transmissionMap:F,thicknessMap:it,gradientMap:ot,opaque:M.transparent===!1&&M.blending===Pi&&M.alphaToCoverage===!1,alphaMap:pt,alphaTest:tt,alphaHash:J,combine:M.combine,mapUv:Zt&&x(M.map.channel),aoMapUv:pe&&x(M.aoMap.channel),lightMapUv:zt&&x(M.lightMap.channel),bumpMapUv:Ut&&x(M.bumpMap.channel),normalMapUv:yt&&x(M.normalMap.channel),displacementMapUv:me&&x(M.displacementMap.channel),emissiveMapUv:vt&&x(M.emissiveMap.channel),metalnessMapUv:Gt&&x(M.metalnessMap.channel),roughnessMapUv:Ue&&x(M.roughnessMap.channel),anisotropyMapUv:Y&&x(M.anisotropyMap.channel),clearcoatMapUv:Tt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(M.sheenRoughnessMap.channel),specularMapUv:wt&&x(M.specularMap.channel),specularColorMapUv:ct&&x(M.specularColorMap.channel),specularIntensityMapUv:Vt&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:it&&x(M.thicknessMap.channel),alphaMapUv:pt&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(yt||Se),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(Zt||pt),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:qt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Zt&&M.map.isVideoTexture===!0&&Jt.getTransfer(M.map.colorSpace)===ee,decodeVideoTextureEmissive:vt&&M.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(M.emissiveMap.colorSpace)===ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===an,flipSided:M.side===Ce,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_t&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&M.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function d(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)y.push(R),y.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(v(y,M),b(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function v(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let y=m[M.type],R;if(y){let D=Vn[y];R=Is.clone(D.uniforms)}else R=M.uniforms;return R}function E(M,y){let R;for(let D=0,U=h.length;D<U;D++){let N=h[D];if(N.cacheKey===y){R=N,++R.usedTimes;break}}return R===void 0&&(R=new Fx(s,y,M,r),h.push(R)),R}function A(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:_,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:P}}function kx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function zx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function hd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ud(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,p,m,x,g){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=u.renderOrder,d.z=x,d.group=g),t++,d}function a(u,f,p,m,x,g){let d=o(u,f,p,m,x,g);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,m,x,g){let d=o(u,f,p,m,x,g);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||zx),n.length>1&&n.sort(f||hd),i.length>1&&i.sort(f||hd)}function h(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Hx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new ud,s.set(n,[o])):i>=r.length?(o=new ud,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Vx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new bt};break;case"SpotLight":e={position:new C,direction:new C,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function Gx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Wx=0;function Xx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qx(s){let t=new Vx,e=Gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let i=new C,r=new Xt,o=new Xt;function a(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,v=0,b=0,_=0,E=0,A=0,T=0;l.sort(Xx);for(let M=0,y=l.length;M<y;M++){let R=l[M],D=R.color,U=R.intensity,N=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=D.r*U,u+=D.g*U,f+=D.b*U;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],U);T++}else if(R.isDirectionalLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,q=e.get(R);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=R.shadow.matrix,v++}n.directional[p]=G,p++}else if(R.isSpotLight){let G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(D).multiplyScalar(U),G.distance=N,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[x]=G;let j=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,j.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[x]=j.matrix,R.castShadow){let q=e.get(R);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=z,_++}x++}else if(R.isRectAreaLight){let G=t.get(R);G.color.copy(D).multiplyScalar(U),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=G,g++}else if(R.isPointLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let j=R.shadow,q=e.get(R);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=R.shadow.matrix,b++}n.point[m]=G,m++}else if(R.isHemisphereLight){let G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(U),G.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[d]=G,d++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==d||P.numDirectionalShadows!==v||P.numPointShadows!==b||P.numSpotShadows!==_||P.numSpotMaps!==E||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=p,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=d,P.numDirectionalShadows=v,P.numPointShadows=b,P.numSpotShadows=_,P.numSpotMaps=E,P.numLightProbes=T,n.version=Wx++)}function c(l,h){let u=0,f=0,p=0,m=0,x=0,g=h.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){let b=l[d];if(b.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(b.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function dd(s){let t=new qx(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Yx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new dd(s),t.set(i,[a])):r>=o.length?(a=new dd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
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
}`;function Jx(s,t,e){let n=new xs,i=new ut,r=new ut,o=new ce,a=new $o({depthPacking:Au}),c=new Zo,l={},h=e.maxTextureSize,u={[In]:Ce,[Ce]:In,[an]:an},f=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:$x,fragmentShader:Zx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new jt;m.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new kt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let d=this.type;this.render=function(A,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let M=s.getRenderTarget(),y=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),D=s.state;D.setBlending(ti),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=d!==Hn&&this.type===Hn,N=d===Hn&&this.type!==Hn;for(let z=0,G=A.length;z<G;z++){let j=A[z],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let st=q.getFrameExtents();if(i.multiply(st),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,q.mapSize.y=r.y)),q.map===null||U===!0||N===!0){let Rt=this.type!==Hn?{minFilter:Fe,magFilter:Fe}:{};q.map!==null&&q.map.dispose(),q.map=new Bn(i.x,i.y,Rt),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let dt=q.getViewportCount();for(let Rt=0;Rt<dt;Rt++){let qt=q.getViewport(Rt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),D.viewport(o),q.updateMatrices(j,Rt),n=q.getFrustum(),_(T,P,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===Hn&&v(q,P),q.needsUpdate=!1}d=this.type,g.needsUpdate=!1,s.setRenderTarget(M,y,R)};function v(A,T){let P=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,P,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,P,p,x,null)}function b(A,T,P,M){let y=null,R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=P.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let D=y.uuid,U=T.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let z=N[U];z===void 0&&(z=y.clone(),N[U]=z,T.addEventListener("dispose",E)),y=z}if(y.visible=T.visible,y.wireframe=T.wireframe,M===Hn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=s.properties.get(y);D.light=P}return y}function _(A,T,P,M,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Hn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let U=t.update(A),N=A.material;if(Array.isArray(N)){let z=U.groups;for(let G=0,j=z.length;G<j;G++){let q=z[G],st=N[q.materialIndex];if(st&&st.visible){let dt=b(A,st,M,y);A.onBeforeShadow(s,A,T,P,U,dt,q),s.renderBufferDirect(P,null,U,dt,A,q),A.onAfterShadow(s,A,T,P,U,dt,q)}}}else if(N.visible){let z=b(A,N,M,y);A.onBeforeShadow(s,A,T,P,U,z,null),s.renderBufferDirect(P,null,U,z,A,null),A.onAfterShadow(s,A,T,P,U,z,null)}}let D=A.children;for(let U=0,N=D.length;U<N;U++)_(D[U],T,P,M,y)}function E(A){A.target.removeEventListener("dispose",E);for(let P in l){let M=l[P],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var Kx={[oa]:aa,[ca]:ua,[la]:da,[Li]:ha,[aa]:oa,[ua]:ca,[da]:la,[ha]:Li};function jx(s,t){function e(){let F=!1,it=new ce,ot=null,pt=new ce(0,0,0,0);return{setMask:function(tt){ot!==tt&&!F&&(s.colorMask(tt,tt,tt,tt),ot=tt)},setLocked:function(tt){F=tt},setClear:function(tt,J,_t,Bt,ae){ae===!0&&(tt*=Bt,J*=Bt,_t*=Bt),it.set(tt,J,_t,Bt),pt.equals(it)===!1&&(s.clearColor(tt,J,_t,Bt),pt.copy(it))},reset:function(){F=!1,ot=null,pt.set(-1,0,0,0)}}}function n(){let F=!1,it=!1,ot=null,pt=null,tt=null;return{setReversed:function(J){if(it!==J){let _t=t.get("EXT_clip_control");J?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),it=J;let Bt=tt;tt=null,this.setClear(Bt)}},getReversed:function(){return it},setTest:function(J){J?Q(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(J){ot!==J&&!F&&(s.depthMask(J),ot=J)},setFunc:function(J){if(it&&(J=Kx[J]),pt!==J){switch(J){case oa:s.depthFunc(s.NEVER);break;case aa:s.depthFunc(s.ALWAYS);break;case ca:s.depthFunc(s.LESS);break;case Li:s.depthFunc(s.LEQUAL);break;case la:s.depthFunc(s.EQUAL);break;case ha:s.depthFunc(s.GEQUAL);break;case ua:s.depthFunc(s.GREATER);break;case da:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=J}},setLocked:function(J){F=J},setClear:function(J){tt!==J&&(it&&(J=1-J),s.clearDepth(J),tt=J)},reset:function(){F=!1,ot=null,pt=null,tt=null,it=!1}}}function i(){let F=!1,it=null,ot=null,pt=null,tt=null,J=null,_t=null,Bt=null,ae=null;return{setTest:function(te){F||(te?Q(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(te){it!==te&&!F&&(s.stencilMask(te),it=te)},setFunc:function(te,Xn,Fn){(ot!==te||pt!==Xn||tt!==Fn)&&(s.stencilFunc(te,Xn,Fn),ot=te,pt=Xn,tt=Fn)},setOp:function(te,Xn,Fn){(J!==te||_t!==Xn||Bt!==Fn)&&(s.stencilOp(te,Xn,Fn),J=te,_t=Xn,Bt=Fn)},setLocked:function(te){F=te},setClear:function(te){ae!==te&&(s.clearStencil(te),ae=te)},reset:function(){F=!1,it=null,ot=null,pt=null,tt=null,J=null,_t=null,Bt=null,ae=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],m=null,x=!1,g=null,d=null,v=null,b=null,_=null,E=null,A=null,T=new bt(0,0,0),P=0,M=!1,y=null,R=null,D=null,U=null,N=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=j>=2);let st=null,dt={},Rt=s.getParameter(s.SCISSOR_BOX),qt=s.getParameter(s.VIEWPORT),oe=new ce().fromArray(Rt),fe=new ce().fromArray(qt);function Qt(F,it,ot,pt){let tt=new Uint8Array(4),J=s.createTexture();s.bindTexture(F,J),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _t=0;_t<ot;_t++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,tt):s.texImage2D(it+_t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,tt);return J}let Z={};Z[s.TEXTURE_2D]=Qt(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Qt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Qt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Qt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(Li),Ut(!1),yt(dl),Q(s.CULL_FACE),pe(ti);function Q(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function mt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Ot(F,it){return u[F]!==it?(s.bindFramebuffer(F,it),u[F]=it,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=it),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=it),!0):!1}function At(F,it){let ot=p,pt=!1;if(F){ot=f.get(it),ot===void 0&&(ot=[],f.set(it,ot));let tt=F.textures;if(ot.length!==tt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let J=0,_t=tt.length;J<_t;J++)ot[J]=s.COLOR_ATTACHMENT0+J;ot.length=tt.length,pt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,pt=!0);pt&&s.drawBuffers(ot)}function Zt(F){return m!==F?(s.useProgram(F),m=F,!0):!1}let Ge={[di]:s.FUNC_ADD,[Qh]:s.FUNC_SUBTRACT,[tu]:s.FUNC_REVERSE_SUBTRACT};Ge[eu]=s.MIN,Ge[nu]=s.MAX;let L={[iu]:s.ZERO,[su]:s.ONE,[ru]:s.SRC_COLOR,[Co]:s.SRC_ALPHA,[uu]:s.SRC_ALPHA_SATURATE,[lu]:s.DST_COLOR,[au]:s.DST_ALPHA,[ou]:s.ONE_MINUS_SRC_COLOR,[Io]:s.ONE_MINUS_SRC_ALPHA,[hu]:s.ONE_MINUS_DST_COLOR,[cu]:s.ONE_MINUS_DST_ALPHA,[du]:s.CONSTANT_COLOR,[fu]:s.ONE_MINUS_CONSTANT_COLOR,[pu]:s.CONSTANT_ALPHA,[mu]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(F,it,ot,pt,tt,J,_t,Bt,ae,te){if(F===ti){x===!0&&(mt(s.BLEND),x=!1);return}if(x===!1&&(Q(s.BLEND),x=!0),F!==jh){if(F!==g||te!==M){if((d!==di||_!==di)&&(s.blendEquation(s.FUNC_ADD),d=di,_=di),te)switch(F){case Pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pl:s.blendFunc(s.ONE,s.ONE);break;case ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ml:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,b=null,E=null,A=null,T.set(0,0,0),P=0,g=F,M=te}return}tt=tt||it,J=J||ot,_t=_t||pt,(it!==d||tt!==_)&&(s.blendEquationSeparate(Ge[it],Ge[tt]),d=it,_=tt),(ot!==v||pt!==b||J!==E||_t!==A)&&(s.blendFuncSeparate(L[ot],L[pt],L[J],L[_t]),v=ot,b=pt,E=J,A=_t),(Bt.equals(T)===!1||ae!==P)&&(s.blendColor(Bt.r,Bt.g,Bt.b,ae),T.copy(Bt),P=ae),g=F,M=!1}function zt(F,it){F.side===an?mt(s.CULL_FACE):Q(s.CULL_FACE);let ot=F.side===Ce;it&&(ot=!ot),Ut(ot),F.blending===Pi&&F.transparent===!1?pe(ti):pe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let pt=F.stencilWrite;a.setTest(pt),pt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),vt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(F){y!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),y=F)}function yt(F){F!==Zh?(Q(s.CULL_FACE),F!==R&&(F===dl?s.cullFace(s.BACK):F===Jh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),R=F}function me(F){F!==D&&(G&&s.lineWidth(F),D=F)}function vt(F,it,ot){F?(Q(s.POLYGON_OFFSET_FILL),(U!==it||N!==ot)&&(s.polygonOffset(it,ot),U=it,N=ot)):mt(s.POLYGON_OFFSET_FILL)}function Gt(F){F?Q(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function Ue(F){F===void 0&&(F=s.TEXTURE0+z-1),st!==F&&(s.activeTexture(F),st=F)}function Se(F,it,ot){ot===void 0&&(st===null?ot=s.TEXTURE0+z-1:ot=st);let pt=dt[ot];pt===void 0&&(pt={type:void 0,texture:void 0},dt[ot]=pt),(pt.type!==F||pt.texture!==it)&&(st!==ot&&(s.activeTexture(ot),st=ot),s.bindTexture(F,it||Z[F]),pt.type=F,pt.texture=it)}function I(){let F=dt[st];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{s.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{s.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{s.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{s.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{s.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{s.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{s.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(F){oe.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),oe.copy(F))}function Dt(F){fe.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),fe.copy(F))}function wt(F,it){let ot=l.get(it);ot===void 0&&(ot=new WeakMap,l.set(it,ot));let pt=ot.get(F);pt===void 0&&(pt=s.getUniformBlockIndex(it,F.name),ot.set(F,pt))}function ct(F,it){let pt=l.get(it).get(F);c.get(it)!==pt&&(s.uniformBlockBinding(it,pt,F.__bindingPointIndex),c.set(it,pt))}function Vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,dt={},u={},f=new WeakMap,p=[],m=null,x=!1,g=null,d=null,v=null,b=null,_=null,E=null,A=null,T=new bt(0,0,0),P=0,M=!1,y=null,R=null,D=null,U=null,N=null,oe.set(0,0,s.canvas.width,s.canvas.height),fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:mt,bindFramebuffer:Ot,drawBuffers:At,useProgram:Zt,setBlending:pe,setMaterial:zt,setFlipSided:Ut,setCullFace:yt,setLineWidth:me,setPolygonOffset:vt,setScissorTest:Gt,activeTexture:Ue,bindTexture:Se,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:St,texImage3D:nt,updateUBOMapping:wt,uniformBlockBinding:ct,texStorage2D:rt,texStorage3D:Mt,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:Y,compressedTexSubImage3D:Tt,scissor:ht,viewport:Dt,reset:Vt}}function Qx(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return p?new OffscreenCanvas(I,S):ar("canvas")}function x(I,S,H){let $=1,K=Se(I);if((K.width>H||K.height>H)&&($=H/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Y=Math.floor($*K.width),Tt=Math.floor($*K.height);u===void 0&&(u=m(Y,Tt));let rt=S?m(Y,Tt):u;return rt.width=Y,rt.height=Tt,rt.getContext("2d").drawImage(I,0,0,Y,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+Tt+")."),rt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function g(I){return I.generateMipmaps}function d(I){s.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(I,S,H,$,K=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Y=S;if(S===s.RED&&(H===s.FLOAT&&(Y=s.R32F),H===s.HALF_FLOAT&&(Y=s.R16F),H===s.UNSIGNED_BYTE&&(Y=s.R8)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.R8UI),H===s.UNSIGNED_SHORT&&(Y=s.R16UI),H===s.UNSIGNED_INT&&(Y=s.R32UI),H===s.BYTE&&(Y=s.R8I),H===s.SHORT&&(Y=s.R16I),H===s.INT&&(Y=s.R32I)),S===s.RG&&(H===s.FLOAT&&(Y=s.RG32F),H===s.HALF_FLOAT&&(Y=s.RG16F),H===s.UNSIGNED_BYTE&&(Y=s.RG8)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RG8UI),H===s.UNSIGNED_SHORT&&(Y=s.RG16UI),H===s.UNSIGNED_INT&&(Y=s.RG32UI),H===s.BYTE&&(Y=s.RG8I),H===s.SHORT&&(Y=s.RG16I),H===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),H===s.UNSIGNED_INT&&(Y=s.RGB32UI),H===s.BYTE&&(Y=s.RGB8I),H===s.SHORT&&(Y=s.RGB16I),H===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),H===s.UNSIGNED_INT&&(Y=s.RGBA32UI),H===s.BYTE&&(Y=s.RGBA8I),H===s.SHORT&&(Y=s.RGBA16I),H===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),S===s.RGBA){let Tt=K?rr:Jt.getTransfer($);H===s.FLOAT&&(Y=s.RGBA32F),H===s.HALF_FLOAT&&(Y=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Y=Tt===ee?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(I,S){let H;return I?S===null||S===Mi||S===Ts?H=s.DEPTH24_STENCIL8:S===Ln?H=s.DEPTH32F_STENCIL8:S===ws&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Mi||S===Ts?H=s.DEPTH_COMPONENT24:S===Ln?H=s.DEPTH_COMPONENT32F:S===ws&&(H=s.DEPTH_COMPONENT16),H}function E(I,S){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Fe&&I.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function A(I){let S=I.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&h.delete(S)}function T(I){let S=I.target;S.removeEventListener("dispose",T),y(S)}function P(I){let S=n.get(I);if(S.__webglInit===void 0)return;let H=I.source,$=f.get(H);if($){let K=$[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(I),Object.keys($).length===0&&f.delete(H)}n.remove(I)}function M(I){let S=n.get(I);s.deleteTexture(S.__webglTexture);let H=I.source,$=f.get(H);delete $[S.__cacheKey],o.memory.textures--}function y(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let K=0;K<S.__webglFramebuffer[$].length;K++)s.deleteFramebuffer(S.__webglFramebuffer[$][K]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=I.textures;for(let $=0,K=H.length;$<K;$++){let Y=n.get(H[$]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(I)}let R=0;function D(){R=0}function U(){let I=R;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),R+=1,I}function N(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function z(I,S){let H=n.get(I);if(I.isVideoTexture&&Gt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let $=I.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,I,S);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function G(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){Z(H,I,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function j(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){Z(H,I,S);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function q(I,S){let H=n.get(I);if(I.version>0&&H.__version!==I.version){Q(H,I,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}let st={[Po]:s.REPEAT,[Rn]:s.CLAMP_TO_EDGE,[Lo]:s.MIRRORED_REPEAT},dt={[Fe]:s.NEAREST,[Eu]:s.NEAREST_MIPMAP_NEAREST,[Fr]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[ma]:s.LINEAR_MIPMAP_NEAREST,[vi]:s.LINEAR_MIPMAP_LINEAR},Rt={[Cu]:s.NEVER,[Nu]:s.ALWAYS,[Iu]:s.LESS,[Al]:s.LEQUAL,[Pu]:s.EQUAL,[Uu]:s.GEQUAL,[Lu]:s.GREATER,[Du]:s.NOTEQUAL};function qt(I,S){if(S.type===Ln&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===ma||S.magFilter===Fr||S.magFilter===vi||S.minFilter===on||S.minFilter===ma||S.minFilter===Fr||S.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,st[S.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,st[S.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,st[S.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,dt[S.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,dt[S.minFilter]),S.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fe||S.minFilter!==Fr&&S.minFilter!==vi||S.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function oe(I,S){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",A));let $=S.source,K=f.get($);K===void 0&&(K={},f.set($,K));let Y=N(S);if(Y!==I.__cacheKey){K[Y]===void 0&&(K[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),K[Y].usedTimes++;let Tt=K[I.__cacheKey];Tt!==void 0&&(K[I.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(S)),I.__cacheKey=Y,I.__webglTexture=K[Y].texture}return H}function fe(I,S,H){return Math.floor(Math.floor(I/H)/S)}function Qt(I,S,H,$){let Y=I.updateRanges;if(Y.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,H,$,S.data);else{Y.sort((nt,ht)=>nt.start-ht.start);let Tt=0;for(let nt=1;nt<Y.length;nt++){let ht=Y[Tt],Dt=Y[nt],wt=ht.start+ht.count,ct=fe(Dt.start,S.width,4),Vt=fe(ht.start,S.width,4);Dt.start<=wt+1&&ct===Vt&&fe(Dt.start+Dt.count-1,S.width,4)===ct?ht.count=Math.max(ht.count,Dt.start+Dt.count-ht.start):(++Tt,Y[Tt]=Dt)}Y.length=Tt+1;let rt=s.getParameter(s.UNPACK_ROW_LENGTH),Mt=s.getParameter(s.UNPACK_SKIP_PIXELS),St=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let nt=0,ht=Y.length;nt<ht;nt++){let Dt=Y[nt],wt=Math.floor(Dt.start/4),ct=Math.ceil(Dt.count/4),Vt=wt%S.width,F=Math.floor(wt/S.width),it=ct,ot=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,Vt,F,it,ot,H,$,S.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Mt),s.pixelStorei(s.UNPACK_SKIP_ROWS,St)}}function Z(I,S,H){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);let K=oe(I,S),Y=S.source;e.bindTexture($,I.__webglTexture,s.TEXTURE0+H);let Tt=n.get(Y);if(Y.version!==Tt.__version||K===!0){e.activeTexture(s.TEXTURE0+H);let rt=Jt.getPrimaries(Jt.workingColorSpace),Mt=S.colorSpace===ni?null:Jt.getPrimaries(S.colorSpace),St=S.colorSpace===ni||rt===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let nt=x(S.image,!1,i.maxTextureSize);nt=Ue(S,nt);let ht=r.convert(S.format,S.colorSpace),Dt=r.convert(S.type),wt=b(S.internalFormat,ht,Dt,S.colorSpace,S.isVideoTexture);qt($,S);let ct,Vt=S.mipmaps,F=S.isVideoTexture!==!0,it=Tt.__version===void 0||K===!0,ot=Y.dataReady,pt=E(S,nt);if(S.isDepthTexture)wt=_(S.format===As,S.type),it&&(F?e.texStorage2D(s.TEXTURE_2D,1,wt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,wt,nt.width,nt.height,0,ht,Dt,null));else if(S.isDataTexture)if(Vt.length>0){F&&it&&e.texStorage2D(s.TEXTURE_2D,pt,wt,Vt[0].width,Vt[0].height);for(let tt=0,J=Vt.length;tt<J;tt++)ct=Vt[tt],F?ot&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ct.width,ct.height,ht,Dt,ct.data):e.texImage2D(s.TEXTURE_2D,tt,wt,ct.width,ct.height,0,ht,Dt,ct.data);S.generateMipmaps=!1}else F?(it&&e.texStorage2D(s.TEXTURE_2D,pt,wt,nt.width,nt.height),ot&&Qt(S,nt,ht,Dt)):e.texImage2D(s.TEXTURE_2D,0,wt,nt.width,nt.height,0,ht,Dt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&it&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,wt,Vt[0].width,Vt[0].height,nt.depth);for(let tt=0,J=Vt.length;tt<J;tt++)if(ct=Vt[tt],S.format!==cn)if(ht!==null)if(F){if(ot)if(S.layerUpdates.size>0){let _t=Nl(ct.width,ct.height,S.format,S.type);for(let Bt of S.layerUpdates){let ae=ct.data.subarray(Bt*_t/ct.data.BYTES_PER_ELEMENT,(Bt+1)*_t/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,Bt,ct.width,ct.height,1,ht,ae)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,nt.depth,ht,ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,wt,ct.width,ct.height,nt.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ot&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,nt.depth,ht,Dt,ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,wt,ct.width,ct.height,nt.depth,0,ht,Dt,ct.data)}else{F&&it&&e.texStorage2D(s.TEXTURE_2D,pt,wt,Vt[0].width,Vt[0].height);for(let tt=0,J=Vt.length;tt<J;tt++)ct=Vt[tt],S.format!==cn?ht!==null?F?ot&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,ct.width,ct.height,ht,ct.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,wt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ot&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ct.width,ct.height,ht,Dt,ct.data):e.texImage2D(s.TEXTURE_2D,tt,wt,ct.width,ct.height,0,ht,Dt,ct.data)}else if(S.isDataArrayTexture)if(F){if(it&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,wt,nt.width,nt.height,nt.depth),ot)if(S.layerUpdates.size>0){let tt=Nl(nt.width,nt.height,S.format,S.type);for(let J of S.layerUpdates){let _t=nt.data.subarray(J*tt/nt.data.BYTES_PER_ELEMENT,(J+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,ht,Dt,_t)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ht,Dt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,nt.width,nt.height,nt.depth,0,ht,Dt,nt.data);else if(S.isData3DTexture)F?(it&&e.texStorage3D(s.TEXTURE_3D,pt,wt,nt.width,nt.height,nt.depth),ot&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ht,Dt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,wt,nt.width,nt.height,nt.depth,0,ht,Dt,nt.data);else if(S.isFramebufferTexture){if(it)if(F)e.texStorage2D(s.TEXTURE_2D,pt,wt,nt.width,nt.height);else{let tt=nt.width,J=nt.height;for(let _t=0;_t<pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,wt,tt,J,0,ht,Dt,null),tt>>=1,J>>=1}}else if(Vt.length>0){if(F&&it){let tt=Se(Vt[0]);e.texStorage2D(s.TEXTURE_2D,pt,wt,tt.width,tt.height)}for(let tt=0,J=Vt.length;tt<J;tt++)ct=Vt[tt],F?ot&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ht,Dt,ct):e.texImage2D(s.TEXTURE_2D,tt,wt,ht,Dt,ct);S.generateMipmaps=!1}else if(F){if(it){let tt=Se(nt);e.texStorage2D(s.TEXTURE_2D,pt,wt,tt.width,tt.height)}ot&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht,Dt,nt)}else e.texImage2D(s.TEXTURE_2D,0,wt,ht,Dt,nt);g(S)&&d($),Tt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Q(I,S,H){if(S.image.length!==6)return;let $=oe(I,S),K=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+H);let Y=n.get(K);if(K.version!==Y.__version||$===!0){e.activeTexture(s.TEXTURE0+H);let Tt=Jt.getPrimaries(Jt.workingColorSpace),rt=S.colorSpace===ni?null:Jt.getPrimaries(S.colorSpace),Mt=S.colorSpace===ni||Tt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let St=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,ht=[];for(let J=0;J<6;J++)!St&&!nt?ht[J]=x(S.image[J],!0,i.maxCubemapSize):ht[J]=nt?S.image[J].image:S.image[J],ht[J]=Ue(S,ht[J]);let Dt=ht[0],wt=r.convert(S.format,S.colorSpace),ct=r.convert(S.type),Vt=b(S.internalFormat,wt,ct,S.colorSpace),F=S.isVideoTexture!==!0,it=Y.__version===void 0||$===!0,ot=K.dataReady,pt=E(S,Dt);qt(s.TEXTURE_CUBE_MAP,S);let tt;if(St){F&&it&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Vt,Dt.width,Dt.height);for(let J=0;J<6;J++){tt=ht[J].mipmaps;for(let _t=0;_t<tt.length;_t++){let Bt=tt[_t];S.format!==cn?wt!==null?F?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,Bt.width,Bt.height,wt,Bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,Vt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,Bt.width,Bt.height,wt,ct,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,Vt,Bt.width,Bt.height,0,wt,ct,Bt.data)}}}else{if(tt=S.mipmaps,F&&it){tt.length>0&&pt++;let J=Se(ht[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Vt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){F?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ht[J].width,ht[J].height,wt,ct,ht[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Vt,ht[J].width,ht[J].height,0,wt,ct,ht[J].data);for(let _t=0;_t<tt.length;_t++){let ae=tt[_t].image[J].image;F?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,ae.width,ae.height,wt,ct,ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,Vt,ae.width,ae.height,0,wt,ct,ae.data)}}else{F?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,wt,ct,ht[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Vt,wt,ct,ht[J]);for(let _t=0;_t<tt.length;_t++){let Bt=tt[_t];F?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,wt,ct,Bt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,Vt,wt,ct,Bt.image[J])}}}g(S)&&d(s.TEXTURE_CUBE_MAP),Y.__version=K.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function mt(I,S,H,$,K,Y){let Tt=r.convert(H.format,H.colorSpace),rt=r.convert(H.type),Mt=b(H.internalFormat,Tt,rt,H.colorSpace),St=n.get(S),nt=n.get(H);if(nt.__renderTarget=S,!St.__hasExternalTextures){let ht=Math.max(1,S.width>>Y),Dt=Math.max(1,S.height>>Y);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,Y,Mt,ht,Dt,S.depth,0,Tt,rt,null):e.texImage2D(K,Y,Mt,ht,Dt,0,Tt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),vt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,K,nt.__webglTexture,0,me(S)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,K,nt.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(I,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,I),S.depthBuffer){let $=S.depthTexture,K=$&&$.isDepthTexture?$.type:null,Y=_(S.stencilBuffer,K),Tt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=me(S);vt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,Y,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Y,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Y,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,I)}else{let $=S.textures;for(let K=0;K<$.length;K++){let Y=$[K],Tt=r.convert(Y.format,Y.colorSpace),rt=r.convert(Y.type),Mt=b(Y.internalFormat,Tt,rt,Y.colorSpace),St=me(S);H&&vt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,St,Mt,S.width,S.height):vt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St,Mt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);let K=$.__webglTexture,Y=me(S);if(S.depthTexture.format===fs)vt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(S.depthTexture.format===As)vt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Zt(I){let S=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let $=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=$}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let $=I.texture.mipmaps;$&&$.length>0?At(S.__webglFramebuffer[0],I):At(S.__webglFramebuffer,I)}else if(H){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=s.createRenderbuffer(),Ot(S.__webglDepthbuffer[$],I,!1);else{let K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Y)}}else{let $=I.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Ot(S.__webglDepthbuffer,I,!1);else{let K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Y)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(I,S,H){let $=n.get(I);S!==void 0&&mt($.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Zt(I)}function L(I){let S=I.texture,H=n.get(I),$=n.get(S);I.addEventListener("dispose",T);let K=I.textures,Y=I.isWebGLCubeRenderTarget===!0,Tt=K.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,o.memory.textures++),Y){H.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[rt]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)H.__webglFramebuffer[rt][Mt]=s.createFramebuffer()}else H.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)H.__webglFramebuffer[rt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let rt=0,Mt=K.length;rt<Mt;rt++){let St=n.get(K[rt]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&vt(I)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let rt=0;rt<K.length;rt++){let Mt=K[rt];H.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[rt]);let St=r.convert(Mt.format,Mt.colorSpace),nt=r.convert(Mt.type),ht=b(Mt.internalFormat,St,nt,Mt.colorSpace,I.isXRRenderTarget===!0),Dt=me(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ht,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,H.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),qt(s.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)mt(H.__webglFramebuffer[rt][Mt],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt);else mt(H.__webglFramebuffer[rt],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);g(S)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let rt=0,Mt=K.length;rt<Mt;rt++){let St=K[rt],nt=n.get(St),ht=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ht=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,nt.__webglTexture),qt(ht,St),mt(H.__webglFramebuffer,I,St,s.COLOR_ATTACHMENT0+rt,ht,0),g(St)&&d(ht)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,$.__webglTexture),qt(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)mt(H.__webglFramebuffer[Mt],I,S,s.COLOR_ATTACHMENT0,rt,Mt);else mt(H.__webglFramebuffer,I,S,s.COLOR_ATTACHMENT0,rt,0);g(S)&&d(rt),e.unbindTexture()}I.depthBuffer&&Zt(I)}function pe(I){let S=I.textures;for(let H=0,$=S.length;H<$;H++){let K=S[H];if(g(K)){let Y=v(I),Tt=n.get(K).__webglTexture;e.bindTexture(Y,Tt),d(Y),e.unbindTexture()}}}let zt=[],Ut=[];function yt(I){if(I.samples>0){if(vt(I)===!1){let S=I.textures,H=I.width,$=I.height,K=s.COLOR_BUFFER_BIT,Y=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(I),rt=S.length>1;if(rt)for(let St=0;St<S.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let Mt=I.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let St=0;St<S.length;St++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);let nt=n.get(S[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,H,$,0,0,H,$,K,s.NEAREST),c===!0&&(zt.length=0,Ut.length=0,zt.push(s.COLOR_ATTACHMENT0+St),I.depthBuffer&&I.resolveDepthBuffer===!1&&(zt.push(Y),Ut.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let St=0;St<S.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);let nt=n.get(S[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let S=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function me(I){return Math.min(i.maxSamples,I.samples)}function vt(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Gt(I){let S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function Ue(I,S){let H=I.colorSpace,$=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Di&&H!==ni&&(Jt.getTransfer(H)===ee?($!==cn||K!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Se(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Ge,this.setupRenderTarget=L,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=vt}function t_(s,t){function e(n,i=ni){let r,o=Jt.getTransfer(i);if(n===Pn)return s.UNSIGNED_BYTE;if(n===xa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ml)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===bl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===yl)return s.BYTE;if(n===vl)return s.SHORT;if(n===ws)return s.UNSIGNED_SHORT;if(n===ga)return s.INT;if(n===Mi)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===Es)return s.HALF_FLOAT;if(n===Sl)return s.ALPHA;if(n===wl)return s.RGB;if(n===cn)return s.RGBA;if(n===fs)return s.DEPTH_COMPONENT;if(n===As)return s.DEPTH_STENCIL;if(n===Rs)return s.RED;if(n===ya)return s.RED_INTEGER;if(n===El)return s.RG;if(n===va)return s.RG_INTEGER;if(n===Ma)return s.RGBA_INTEGER;if(n===Or||n===Br||n===kr||n===zr)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Sa||n===wa||n===Ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ta||n===Aa||n===Ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ta||n===Aa)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ra)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Ia||n===Pa||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Ha||n===Va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ca)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===Ya||n===$a||n===Za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
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

}`,$l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new _r(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Re({vertexShader:e_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zl=class extends jn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,m=null,x=typeof XRWebGLBinding<"u",g=new $l,d={},v=e.getContextAttributes(),b=null,_=null,E=[],A=[],T=new ut,P=null,M=new qe;M.viewport=new ce;let y=new qe;y.viewport=new ce;let R=[M,y],D=new ra,U=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=E[Z];return Q===void 0&&(Q=new gs,E[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=E[Z];return Q===void 0&&(Q=new gs,E[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=E[Z];return Q===void 0&&(Q=new gs,E[Z]=Q),Q.getHandSpace()};function z(Z){let Q=A.indexOf(Z.inputSource);if(Q===-1)return;let mt=E[Q];mt!==void 0&&(mt.update(Z.inputSource,Z.frame,l||o),mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",j);for(let Z=0;Z<E.length;Z++){let Q=A[Z];Q!==null&&(A[Z]=null,E[Z].disconnect(Q))}U=null,N=null,g.reset();for(let Z in d)delete d[Z];t.setRenderTarget(b),p=null,f=null,u=null,i=null,_=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",G),i.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Ot=null,At=null;v.depth&&(At=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=v.stencil?As:fs,Ot=v.stencil?Ts:Mi);let Zt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Zt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Bn(f.textureWidth,f.textureHeight,{format:cn,type:Pn,depthTexture:new xr(f.textureWidth,f.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Bn(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(Z){for(let Q=0;Q<Z.removed.length;Q++){let mt=Z.removed[Q],Ot=A.indexOf(mt);Ot>=0&&(A[Ot]=null,E[Ot].disconnect(mt))}for(let Q=0;Q<Z.added.length;Q++){let mt=Z.added[Q],Ot=A.indexOf(mt);if(Ot===-1){for(let Zt=0;Zt<E.length;Zt++)if(Zt>=A.length){A.push(mt),Ot=Zt;break}else if(A[Zt]===null){A[Zt]=mt,Ot=Zt;break}if(Ot===-1)break}let At=E[Ot];At&&At.connect(mt)}}let q=new C,st=new C;function dt(Z,Q,mt){q.setFromMatrixPosition(Q.matrixWorld),st.setFromMatrixPosition(mt.matrixWorld);let Ot=q.distanceTo(st),At=Q.projectionMatrix.elements,Zt=mt.projectionMatrix.elements,Ge=At[14]/(At[10]-1),L=At[14]/(At[10]+1),pe=(At[9]+1)/At[5],zt=(At[9]-1)/At[5],Ut=(At[8]-1)/At[0],yt=(Zt[8]+1)/Zt[0],me=Ge*Ut,vt=Ge*yt,Gt=Ot/(-Ut+yt),Ue=Gt*-Ut;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ue),Z.translateZ(Gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),At[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Se=Ge+Gt,I=L+Gt,S=me-Ue,H=vt+(Ot-Ue),$=pe*L/I*Se,K=zt*L/I*Se;Z.projectionMatrix.makePerspective(S,H,$,K,Se,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Rt(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let Q=Z.near,mt=Z.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(mt=g.depthFar)),D.near=y.near=M.near=Q,D.far=y.far=M.far=mt,(U!==D.near||N!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,N=D.far),D.layers.mask=Z.layers.mask|6,M.layers.mask=D.layers.mask&3,y.layers.mask=D.layers.mask&5;let Ot=Z.parent,At=D.cameras;Rt(D,Ot);for(let Zt=0;Zt<At.length;Zt++)Rt(At[Zt],Ot);At.length===2?dt(D,M,y):D.projectionMatrix.copy(M.projectionMatrix),qt(Z,D,Ot)};function qt(Z,Q,mt){mt===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Uo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Z){return d[Z]};let oe=null;function fe(Z,Q){if(h=Q.getViewerPose(l||o),m=Q,h!==null){let mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Ot=!1;mt.length!==D.cameras.length&&(D.cameras.length=0,Ot=!0);for(let L=0;L<mt.length;L++){let pe=mt[L],zt=null;if(p!==null)zt=p.getViewport(pe);else{let yt=u.getViewSubImage(f,pe);zt=yt.viewport,L===0&&(t.setRenderTargetTextures(_,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(_))}let Ut=R[L];Ut===void 0&&(Ut=new qe,Ut.layers.enable(L),Ut.viewport=new ce,R[L]=Ut),Ut.matrix.fromArray(pe.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(pe.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(zt.x,zt.y,zt.width,zt.height),L===0&&(D.matrix.copy(Ut.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ot===!0&&D.cameras.push(Ut)}let At=i.enabledFeatures;if(At&&At.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let L=u.getDepthInformation(mt[0]);L&&L.isValid&&L.texture&&g.init(L,i.renderState)}if(At&&At.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<mt.length;L++){let pe=mt[L].camera;if(pe){let zt=d[pe];zt||(zt=new _r,d[pe]=zt);let Ut=u.getCameraImage(pe);zt.sourceTexture=Ut}}}}for(let mt=0;mt<E.length;mt++){let Ot=A[mt],At=E[mt];Ot!==null&&At!==void 0&&At.update(Ot,Q,l||o)}oe&&oe(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let Qt=new fd;Qt.setAnimationLoop(fe),this.setAnimationLoop=function(Z){oe=Z},this.dispose=function(){}}},Gi=new Oe,i_=new Xt;function s_(s,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Pl(s)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,v,b,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,_)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?c(g,d,v,b):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Ce&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Ce&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let v=t.get(d),b=v.envMap,_=v.envMapRotation;b&&(g.envMap.value=b,Gi.copy(_),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),g.envMapRotation.value.setFromMatrix4(i_.makeRotationFromEuler(Gi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,v,b){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=b*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ce&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){let v=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function r_(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){let _=b.program;n.uniformBlockBinding(v,_)}function l(v,b){let _=i[v.id];_===void 0&&(m(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",g));let E=b.program;n.updateUBOMapping(v,E);let A=t.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function h(v){let b=u();v.__bindingPointIndex=b;let _=s.createBuffer(),E=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let b=i[v.id],_=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,T=_.length;A<T;A++){let P=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,y=P.length;M<y;M++){let R=P[M];if(p(R,A,M,E)===!0){let D=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],N=0;for(let z=0;z<U.length;z++){let G=U[z],j=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,D+N,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,N),N+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,b,_,E){let A=v.value,T=b+"_"+_;if(E[T]===void 0)return typeof A=="number"||typeof A=="boolean"?E[T]=A:E[T]=A.clone(),!0;{let P=E[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return E[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function m(v){let b=v.uniforms,_=0,E=16;for(let T=0,P=b.length;T<P;T++){let M=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,R=M.length;y<R;y++){let D=M[y],U=Array.isArray(D.value)?D.value:[D.value];for(let N=0,z=U.length;N<z;N++){let G=U[N],j=x(G),q=_%E,st=q%j.boundary,dt=q+st;_+=st,dt!==0&&E-dt<j.storage&&(_+=E-dt),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=j.storage}}}let A=_%E;return A>0&&(_+=E-A),v.__size=_,v.__cache={},this}function x(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function g(v){let b=v.target;b.removeEventListener("dispose",g);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function d(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:d}}var tc=class{constructor(t={}){let{canvas:e=Fu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,d=null,v=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,E=!1;this._outputColorSpace=Ke;let A=0,T=0,P=null,M=-1,y=null,R=new ce,D=new ce,U=null,N=new bt(0),z=0,G=e.width,j=e.height,q=1,st=null,dt=null,Rt=new ce(0,0,G,j),qt=new ce(0,0,G,j),oe=!1,fe=new xs,Qt=!1,Z=!1,Q=new Xt,mt=new C,Ot=new ce,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function Ge(){return P===null?q:1}let L=n;function pe(w,B){return e.getContext(w,B)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),L===null){let B="webgl2";if(L=pe(B,w),L===null)throw pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let zt,Ut,yt,me,vt,Gt,Ue,Se,I,S,H,$,K,Y,Tt,rt,Mt,St,nt,ht,Dt,wt,ct,Vt;function F(){zt=new Sg(L),zt.init(),wt=new t_(L,zt),Ut=new gg(L,zt,t,wt),yt=new jx(L,zt),Ut.reversedDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),me=new Tg(L),vt=new kx,Gt=new Qx(L,zt,yt,vt,Ut,wt,me),Ue=new _g(_),Se=new bg(_),I=new Lp(L),ct=new pg(L,I),S=new wg(L,I,me,ct),H=new Rg(L,S,I,me),nt=new Ag(L,Ut,Gt),rt=new xg(vt),$=new Bx(_,Ue,Se,zt,Ut,ct,rt),K=new s_(_,vt),Y=new Hx,Tt=new Yx(zt),St=new fg(_,Ue,Se,yt,H,p,c),Mt=new Jx(_,H,Ut),Vt=new r_(L,me,Ut,yt),ht=new mg(L,zt,me),Dt=new Eg(L,zt,me),me.programs=$.programs,_.capabilities=Ut,_.extensions=zt,_.properties=vt,_.renderLists=Y,_.shadowMap=Mt,_.state=yt,_.info=me}F();let it=new Zl(_,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(G,j,!1))},this.getSize=function(w){return w.set(G,j)},this.setSize=function(w,B,W=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,j=B,e.width=Math.floor(w*q),e.height=Math.floor(B*q),W===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(G*q,j*q).floor()},this.setDrawingBufferSize=function(w,B,W){G=w,j=B,q=W,e.width=Math.floor(w*W),e.height=Math.floor(B*W),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(Rt)},this.setViewport=function(w,B,W,X){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,B,W,X),yt.viewport(R.copy(Rt).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(qt)},this.setScissor=function(w,B,W,X){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,B,W,X),yt.scissor(D.copy(qt).multiplyScalar(q).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){yt.setScissorTest(oe=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,W=!0){let X=0;if(w){let k=!1;if(P!==null){let et=P.texture.format;k=et===Ma||et===va||et===ya}if(k){let et=P.texture.type,lt=et===Pn||et===Mi||et===ws||et===Ts||et===xa||et===_a,gt=St.getClearColor(),ft=St.getClearAlpha(),Lt=gt.r,Nt=gt.g,Ct=gt.b;lt?(m[0]=Lt,m[1]=Nt,m[2]=Ct,m[3]=ft,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=Lt,x[1]=Nt,x[2]=Ct,x[3]=ft,L.clearBufferiv(L.COLOR,0,x))}else X|=L.COLOR_BUFFER_BIT}B&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),St.dispose(),Y.dispose(),Tt.dispose(),vt.dispose(),Ue.dispose(),Se.dispose(),H.dispose(),ct.dispose(),Vt.dispose(),$.dispose(),it.dispose(),it.removeEventListener("sessionstart",Fn),it.removeEventListener("sessionend",xh),wi.stop()};function ot(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=me.autoReset,B=Mt.enabled,W=Mt.autoUpdate,X=Mt.needsUpdate,k=Mt.type;F(),me.autoReset=w,Mt.enabled=B,Mt.autoUpdate=W,Mt.needsUpdate=X,Mt.type=k}function tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function J(w){let B=w.target;B.removeEventListener("dispose",J),_t(B)}function _t(w){Bt(w),vt.remove(w)}function Bt(w){let B=vt.get(w).programs;B!==void 0&&(B.forEach(function(W){$.releaseProgram(W)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,W,X,k,et){B===null&&(B=At);let lt=k.isMesh&&k.matrixWorld.determinant()<0,gt=gf(w,B,W,X,k);yt.setMaterial(X,lt);let ft=W.index,Lt=1;if(X.wireframe===!0){if(ft=S.getWireframeAttribute(W),ft===void 0)return;Lt=2}let Nt=W.drawRange,Ct=W.attributes.position,$t=Nt.start*Lt,ie=(Nt.start+Nt.count)*Lt;et!==null&&($t=Math.max($t,et.start*Lt),ie=Math.min(ie,(et.start+et.count)*Lt)),ft!==null?($t=Math.max($t,0),ie=Math.min(ie,ft.count)):Ct!=null&&($t=Math.max($t,0),ie=Math.min(ie,Ct.count));let ve=ie-$t;if(ve<0||ve===1/0)return;ct.setup(k,X,gt,W,ft);let he,re=ht;if(ft!==null&&(he=I.get(ft),re=Dt,re.setIndex(he)),k.isMesh)X.wireframe===!0?(yt.setLineWidth(X.wireframeLinewidth*Ge()),re.setMode(L.LINES)):re.setMode(L.TRIANGLES);else if(k.isLine){let Pt=X.linewidth;Pt===void 0&&(Pt=1),yt.setLineWidth(Pt*Ge()),k.isLineSegments?re.setMode(L.LINES):k.isLineLoop?re.setMode(L.LINE_LOOP):re.setMode(L.LINE_STRIP)}else k.isPoints?re.setMode(L.POINTS):k.isSprite&&re.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ps("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))re.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Pt=k._multiDrawStarts,ge=k._multiDrawCounts,Kt=k._multiDrawCount,un=ft?I.get(ft).bytesPerElement:1,Ki=vt.get(X).currentProgram.getUniforms();for(let dn=0;dn<Kt;dn++)Ki.setValue(L,"_gl_DrawID",dn),re.render(Pt[dn]/un,ge[dn])}else if(k.isInstancedMesh)re.renderInstances($t,ve,k.count);else if(W.isInstancedBufferGeometry){let Pt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ge=Math.min(W.instanceCount,Pt);re.renderInstances($t,ve,ge)}else re.render($t,ve)};function ae(w,B,W){w.transparent===!0&&w.side===an&&w.forceSinglePass===!1?(w.side=Ce,w.needsUpdate=!0,so(w,B,W),w.side=In,w.needsUpdate=!0,so(w,B,W),w.side=an):so(w,B,W)}this.compile=function(w,B,W=null){W===null&&(W=w),d=Tt.get(W),d.init(B),b.push(d),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),w!==W&&w.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();let X=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let et=k.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){let gt=et[lt];ae(gt,W,k),X.add(gt)}else ae(et,W,k),X.add(et)}),d=b.pop(),X},this.compileAsync=function(w,B,W=null){let X=this.compile(w,B,W);return new Promise(k=>{function et(){if(X.forEach(function(lt){vt.get(lt).currentProgram.isReady()&&X.delete(lt)}),X.size===0){k(w);return}setTimeout(et,10)}zt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let te=null;function Xn(w){te&&te(w)}function Fn(){wi.stop()}function xh(){wi.start()}let wi=new fd;wi.setAnimationLoop(Xn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(w){te=w,it.setAnimationLoop(w),w===null?wi.stop():wi.start()},it.addEventListener("sessionstart",Fn),it.addEventListener("sessionend",xh),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(B),B=it.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,B,P),d=Tt.get(w,b.length),d.init(B),b.push(d),Q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),fe.setFromProjectionMatrix(Q,Cn,B.reversedDepth),Z=this.localClippingEnabled,Qt=rt.init(this.clippingPlanes,Z),g=Y.get(w,v.length),g.init(),v.push(g),it.enabled===!0&&it.isPresenting===!0){let et=_.xr.getDepthSensingMesh();et!==null&&Tc(et,B,-1/0,_.sortObjects)}Tc(w,B,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(st,dt),Zt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Zt&&St.addToRenderList(g,w),this.info.render.frame++,Qt===!0&&rt.beginShadows();let W=d.state.shadowsArray;Mt.render(W,w,B),Qt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,k=g.transmissive;if(d.setupLights(),B.isArrayCamera){let et=B.cameras;if(k.length>0)for(let lt=0,gt=et.length;lt<gt;lt++){let ft=et[lt];yh(X,k,w,ft)}Zt&&St.render(w);for(let lt=0,gt=et.length;lt<gt;lt++){let ft=et[lt];_h(g,w,ft,ft.viewport)}}else k.length>0&&yh(X,k,w,B),Zt&&St.render(w),_h(g,w,B);P!==null&&T===0&&(Gt.updateMultisampleRenderTarget(P),Gt.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,B),ct.resetDefaultState(),M=-1,y=null,b.pop(),b.length>0?(d=b[b.length-1],Qt===!0&&rt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Tc(w,B,W,X){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||fe.intersectsSprite(w)){X&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);let lt=H.update(w),gt=w.material;gt.visible&&g.push(w,lt,gt,W,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||fe.intersectsObject(w))){let lt=H.update(w),gt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ot.copy(lt.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(gt)){let ft=lt.groups;for(let Lt=0,Nt=ft.length;Lt<Nt;Lt++){let Ct=ft[Lt],$t=gt[Ct.materialIndex];$t&&$t.visible&&g.push(w,lt,$t,W,Ot.z,Ct)}}else gt.visible&&g.push(w,lt,gt,W,Ot.z,null)}}let et=w.children;for(let lt=0,gt=et.length;lt<gt;lt++)Tc(et[lt],B,W,X)}function _h(w,B,W,X){let k=w.opaque,et=w.transmissive,lt=w.transparent;d.setupLightsView(W),Qt===!0&&rt.setGlobalState(_.clippingPlanes,W),X&&yt.viewport(R.copy(X)),k.length>0&&io(k,B,W),et.length>0&&io(et,B,W),lt.length>0&&io(lt,B,W),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function yh(w,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new Bn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Es:Pn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let et=d.state.transmissionRenderTarget[X.id],lt=X.viewport||R;et.setSize(lt.z*_.transmissionResolutionScale,lt.w*_.transmissionResolutionScale);let gt=_.getRenderTarget(),ft=_.getActiveCubeFace(),Lt=_.getActiveMipmapLevel();_.setRenderTarget(et),_.getClearColor(N),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),Zt&&St.render(W);let Nt=_.toneMapping;_.toneMapping=ei;let Ct=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),Qt===!0&&rt.setGlobalState(_.clippingPlanes,X),io(w,W,X),Gt.updateMultisampleRenderTarget(et),Gt.updateRenderTargetMipmap(et),zt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let ie=0,ve=B.length;ie<ve;ie++){let he=B[ie],re=he.object,Pt=he.geometry,ge=he.material,Kt=he.group;if(ge.side===an&&re.layers.test(X.layers)){let un=ge.side;ge.side=Ce,ge.needsUpdate=!0,vh(re,W,X,Pt,ge,Kt),ge.side=un,ge.needsUpdate=!0,$t=!0}}$t===!0&&(Gt.updateMultisampleRenderTarget(et),Gt.updateRenderTargetMipmap(et))}_.setRenderTarget(gt,ft,Lt),_.setClearColor(N,z),Ct!==void 0&&(X.viewport=Ct),_.toneMapping=Nt}function io(w,B,W){let X=B.isScene===!0?B.overrideMaterial:null;for(let k=0,et=w.length;k<et;k++){let lt=w[k],gt=lt.object,ft=lt.geometry,Lt=lt.group,Nt=lt.material;Nt.allowOverride===!0&&X!==null&&(Nt=X),gt.layers.test(W.layers)&&vh(gt,B,W,ft,Nt,Lt)}}function vh(w,B,W,X,k,et){w.onBeforeRender(_,B,W,X,k,et),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(_,B,W,X,w,et),k.transparent===!0&&k.side===an&&k.forceSinglePass===!1?(k.side=Ce,k.needsUpdate=!0,_.renderBufferDirect(W,B,X,k,w,et),k.side=In,k.needsUpdate=!0,_.renderBufferDirect(W,B,X,k,w,et),k.side=an):_.renderBufferDirect(W,B,X,k,w,et),w.onAfterRender(_,B,W,X,k,et)}function so(w,B,W){B.isScene!==!0&&(B=At);let X=vt.get(w),k=d.state.lights,et=d.state.shadowsArray,lt=k.state.version,gt=$.getParameters(w,k.state,et,B,W),ft=$.getProgramCacheKey(gt),Lt=X.programs;X.environment=w.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(w.isMeshStandardMaterial?Se:Ue).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",J),Lt=new Map,X.programs=Lt);let Nt=Lt.get(ft);if(Nt!==void 0){if(X.currentProgram===Nt&&X.lightsStateVersion===lt)return bh(w,gt),Nt}else gt.uniforms=$.getUniforms(w),w.onBeforeCompile(gt,_),Nt=$.acquireProgram(gt,ft),Lt.set(ft,Nt),X.uniforms=gt.uniforms;let Ct=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ct.clippingPlanes=rt.uniform),bh(w,gt),X.needsLights=_f(w),X.lightsStateVersion=lt,X.needsLights&&(Ct.ambientLightColor.value=k.state.ambient,Ct.lightProbe.value=k.state.probe,Ct.directionalLights.value=k.state.directional,Ct.directionalLightShadows.value=k.state.directionalShadow,Ct.spotLights.value=k.state.spot,Ct.spotLightShadows.value=k.state.spotShadow,Ct.rectAreaLights.value=k.state.rectArea,Ct.ltc_1.value=k.state.rectAreaLTC1,Ct.ltc_2.value=k.state.rectAreaLTC2,Ct.pointLights.value=k.state.point,Ct.pointLightShadows.value=k.state.pointShadow,Ct.hemisphereLights.value=k.state.hemi,Ct.directionalShadowMap.value=k.state.directionalShadowMap,Ct.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ct.spotShadowMap.value=k.state.spotShadowMap,Ct.spotLightMatrix.value=k.state.spotLightMatrix,Ct.spotLightMap.value=k.state.spotLightMap,Ct.pointShadowMap.value=k.state.pointShadowMap,Ct.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Nt,X.uniformsList=null,Nt}function Mh(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Ds.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function bh(w,B){let W=vt.get(w);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function gf(w,B,W,X,k){B.isScene!==!0&&(B=At),Gt.resetTextureUnits();let et=B.fog,lt=X.isMeshStandardMaterial?B.environment:null,gt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Di,ft=(X.isMeshStandardMaterial?Se:Ue).get(X.envMap||lt),Lt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Nt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ct=!!W.morphAttributes.position,$t=!!W.morphAttributes.normal,ie=!!W.morphAttributes.color,ve=ei;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=_.toneMapping);let he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=he!==void 0?he.length:0,Pt=vt.get(X),ge=d.state.lights;if(Qt===!0&&(Z===!0||w!==y)){let Je=w===y&&X.id===M;rt.setState(X,w,Je)}let Kt=!1;X.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==ge.state.version||Pt.outputColorSpace!==gt||k.isBatchedMesh&&Pt.batching===!1||!k.isBatchedMesh&&Pt.batching===!0||k.isBatchedMesh&&Pt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pt.instancing===!1||!k.isInstancedMesh&&Pt.instancing===!0||k.isSkinnedMesh&&Pt.skinning===!1||!k.isSkinnedMesh&&Pt.skinning===!0||k.isInstancedMesh&&Pt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pt.instancingMorph===!1&&k.morphTexture!==null||Pt.envMap!==ft||X.fog===!0&&Pt.fog!==et||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==rt.numPlanes||Pt.numIntersection!==rt.numIntersection)||Pt.vertexAlphas!==Lt||Pt.vertexTangents!==Nt||Pt.morphTargets!==Ct||Pt.morphNormals!==$t||Pt.morphColors!==ie||Pt.toneMapping!==ve||Pt.morphTargetsCount!==re)&&(Kt=!0):(Kt=!0,Pt.__version=X.version);let un=Pt.currentProgram;Kt===!0&&(un=so(X,B,k));let Ki=!1,dn=!1,Ys=!1,xe=un.getUniforms(),yn=Pt.uniforms;if(yt.useProgram(un.program)&&(Ki=!0,dn=!0,Ys=!0),X.id!==M&&(M=X.id,dn=!0),Ki||y!==w){yt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xe.setValue(L,"projectionMatrix",w.projectionMatrix),xe.setValue(L,"viewMatrix",w.matrixWorldInverse);let sn=xe.map.cameraPosition;sn!==void 0&&sn.setValue(L,mt.setFromMatrixPosition(w.matrixWorld)),Ut.logarithmicDepthBuffer&&xe.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,dn=!0,Ys=!0)}if(k.isSkinnedMesh){xe.setOptional(L,k,"bindMatrix"),xe.setOptional(L,k,"bindMatrixInverse");let Je=k.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),xe.setValue(L,"boneTexture",Je.boneTexture,Gt))}k.isBatchedMesh&&(xe.setOptional(L,k,"batchingTexture"),xe.setValue(L,"batchingTexture",k._matricesTexture,Gt),xe.setOptional(L,k,"batchingIdTexture"),xe.setValue(L,"batchingIdTexture",k._indirectTexture,Gt),xe.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&xe.setValue(L,"batchingColorTexture",k._colorsTexture,Gt));let vn=W.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&nt.update(k,W,un),(dn||Pt.receiveShadow!==k.receiveShadow)&&(Pt.receiveShadow=k.receiveShadow,xe.setValue(L,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(yn.envMap.value=ft,yn.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(yn.envMapIntensity.value=B.environmentIntensity),dn&&(xe.setValue(L,"toneMappingExposure",_.toneMappingExposure),Pt.needsLights&&xf(yn,Ys),et&&X.fog===!0&&K.refreshFogUniforms(yn,et),K.refreshMaterialUniforms(yn,X,q,j,d.state.transmissionRenderTarget[w.id]),Ds.upload(L,Mh(Pt),yn,Gt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ds.upload(L,Mh(Pt),yn,Gt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(L,"center",k.center),xe.setValue(L,"modelViewMatrix",k.modelViewMatrix),xe.setValue(L,"normalMatrix",k.normalMatrix),xe.setValue(L,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Je=X.uniformsGroups;for(let sn=0,Ac=Je.length;sn<Ac;sn++){let Ei=Je[sn];Vt.update(Ei,un),Vt.bind(Ei,un)}}return un}function xf(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function _f(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,B,W){let X=vt.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),vt.get(w.texture).__webglTexture=B,vt.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let W=vt.get(w);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};let yf=L.createFramebuffer();this.setRenderTarget=function(w,B=0,W=0){P=w,A=B,T=W;let X=!0,k=null,et=!1,lt=!1;if(w){let ft=vt.get(w);if(ft.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(ft.__webglFramebuffer===void 0)Gt.setupRenderTarget(w);else if(ft.__hasExternalTextures)Gt.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ct=w.depthTexture;if(ft.__boundDepthTexture!==Ct){if(Ct!==null&&vt.has(Ct)&&(w.width!==Ct.image.width||w.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(w)}}let Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(lt=!0);let Nt=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[B])?k=Nt[B][W]:k=Nt[B],et=!0):w.samples>0&&Gt.useMultisampledRTT(w)===!1?k=vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?k=Nt[W]:k=Nt,R.copy(w.viewport),D.copy(w.scissor),U=w.scissorTest}else R.copy(Rt).multiplyScalar(q).floor(),D.copy(qt).multiplyScalar(q).floor(),U=oe;if(W!==0&&(k=yf),yt.bindFramebuffer(L.FRAMEBUFFER,k)&&X&&yt.drawBuffers(w,k),yt.viewport(R),yt.scissor(D),yt.setScissorTest(U),et){let ft=vt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,ft.__webglTexture,W)}else if(lt){let ft=B;for(let Lt=0;Lt<w.textures.length;Lt++){let Nt=vt.get(w.textures[Lt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Lt,Nt.__webglTexture,W,ft)}}else if(w!==null&&W!==0){let ft=vt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ft.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(w,B,W,X,k,et,lt,gt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(ft=ft[lt]),ft){yt.bindFramebuffer(L.FRAMEBUFFER,ft);try{let Lt=w.textures[gt],Nt=Lt.format,Ct=Lt.type;if(!Ut.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-X&&W>=0&&W<=w.height-k&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+gt),L.readPixels(B,W,X,k,wt.convert(Nt),wt.convert(Ct),et))}finally{let Lt=P!==null?vt.get(P).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(w,B,W,X,k,et,lt,gt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(ft=ft[lt]),ft)if(B>=0&&B<=w.width-X&&W>=0&&W<=w.height-k){yt.bindFramebuffer(L.FRAMEBUFFER,ft);let Lt=w.textures[gt],Nt=Lt.format,Ct=Lt.type;if(!Ut.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$t),L.bufferData(L.PIXEL_PACK_BUFFER,et.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+gt),L.readPixels(B,W,X,k,wt.convert(Nt),wt.convert(Ct),0);let ie=P!==null?vt.get(P).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,ie);let ve=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ou(L,ve,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$t),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,et),L.deleteBuffer($t),L.deleteSync(ve),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,W=0){let X=Math.pow(2,-W),k=Math.floor(w.image.width*X),et=Math.floor(w.image.height*X),lt=B!==null?B.x:0,gt=B!==null?B.y:0;Gt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,lt,gt,k,et),yt.unbindTexture()};let vf=L.createFramebuffer(),Mf=L.createFramebuffer();this.copyTextureToTexture=function(w,B,W=null,X=null,k=0,et=null){et===null&&(k!==0?(ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=k,k=0):et=0);let lt,gt,ft,Lt,Nt,Ct,$t,ie,ve,he=w.isCompressedTexture?w.mipmaps[et]:w.image;if(W!==null)lt=W.max.x-W.min.x,gt=W.max.y-W.min.y,ft=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Nt=W.min.y,Ct=W.isBox3?W.min.z:0;else{let vn=Math.pow(2,-k);lt=Math.floor(he.width*vn),gt=Math.floor(he.height*vn),w.isDataArrayTexture?ft=he.depth:w.isData3DTexture?ft=Math.floor(he.depth*vn):ft=1,Lt=0,Nt=0,Ct=0}X!==null?($t=X.x,ie=X.y,ve=X.z):($t=0,ie=0,ve=0);let re=wt.convert(B.format),Pt=wt.convert(B.type),ge;B.isData3DTexture?(Gt.setTexture3D(B,0),ge=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Gt.setTexture2DArray(B,0),ge=L.TEXTURE_2D_ARRAY):(Gt.setTexture2D(B,0),ge=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);let Kt=L.getParameter(L.UNPACK_ROW_LENGTH),un=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ki=L.getParameter(L.UNPACK_SKIP_PIXELS),dn=L.getParameter(L.UNPACK_SKIP_ROWS),Ys=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,he.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,he.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ct);let xe=w.isDataArrayTexture||w.isData3DTexture,yn=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let vn=vt.get(w),Je=vt.get(B),sn=vt.get(vn.__renderTarget),Ac=vt.get(Je.__renderTarget);yt.bindFramebuffer(L.READ_FRAMEBUFFER,sn.__webglFramebuffer),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ac.__webglFramebuffer);for(let Ei=0;Ei<ft;Ei++)xe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(w).__webglTexture,k,Ct+Ei),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(B).__webglTexture,et,ve+Ei)),L.blitFramebuffer(Lt,Nt,lt,gt,$t,ie,lt,gt,L.DEPTH_BUFFER_BIT,L.NEAREST);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||vt.has(w)){let vn=vt.get(w),Je=vt.get(B);yt.bindFramebuffer(L.READ_FRAMEBUFFER,vf),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mf);for(let sn=0;sn<ft;sn++)xe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vn.__webglTexture,k,Ct+sn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vn.__webglTexture,k),yn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Je.__webglTexture,et,ve+sn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Je.__webglTexture,et),k!==0?L.blitFramebuffer(Lt,Nt,lt,gt,$t,ie,lt,gt,L.COLOR_BUFFER_BIT,L.NEAREST):yn?L.copyTexSubImage3D(ge,et,$t,ie,ve+sn,Lt,Nt,lt,gt):L.copyTexSubImage2D(ge,et,$t,ie,Lt,Nt,lt,gt);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else yn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(ge,et,$t,ie,ve,lt,gt,ft,re,Pt,he.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(ge,et,$t,ie,ve,lt,gt,ft,re,he.data):L.texSubImage3D(ge,et,$t,ie,ve,lt,gt,ft,re,Pt,he):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,et,$t,ie,lt,gt,re,Pt,he.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,et,$t,ie,he.width,he.height,re,he.data):L.texSubImage2D(L.TEXTURE_2D,et,$t,ie,lt,gt,re,Pt,he);L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,un),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ki),L.pixelStorei(L.UNPACK_SKIP_ROWS,dn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ys),et===0&&B.generateMipmaps&&L.generateMipmap(ge),yt.unbindTexture()},this.initRenderTarget=function(w){vt.get(w).__webglFramebuffer===void 0&&Gt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Gt.setTextureCube(w,0):w.isData3DTexture?Gt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Gt.setTexture2DArray(w,0):Gt.setTexture2D(w,0),yt.unbindTexture()},this.resetState=function(){A=0,T=0,P=null,yt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var _d=Math.PI*2,It=(s,t,e)=>s<t?t:s>e?e:s,Le=(s,t,e)=>s+(t-s)*e;var ke=(s,t,e)=>{let n=It((e-s)/(t-s),0,1);return n*n*(3-2*n)},ze=(s,t,e,n)=>Le(s,t,1-Math.exp(-e*n));function Vr(s){return s=(s+Math.PI)%_d,s<0&&(s+=_d),s-Math.PI}function yd(s,t,e,n){return s+Vr(t-s)*(1-Math.exp(-e*n))}function qi(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function tn(s){let t=Math.floor(s),e=s-t,n=r=>{let o=Math.sin(r*127.1+311.7)*43758.5453;return(o-Math.floor(o))*2-1},i=e*e*(3-2*e);return Le(n(t),n(t+1),i)}function Gr(s){let t=s.length;return e=>{if(e<=s[0][0])return s[0][1];if(e>=s[t-1][0])return s[t-1][1];let n=0,i=t-1;for(;i-n>1;){let h=n+i>>1;s[h][0]<=e?n=h:i=h}let[r,o]=s[n],[a,c]=s[i],l=(e-r)/(a-r);return o+(c-o)*l*l*(3-2*l)}}var en=-90,Dn=1420,He=1252;var Me=Gr([[-90,17],[0,15.5],[80,14.5],[300,14.5],[430,15.8],[520,15.8],[548,12],[580,9.6],[612,9.3],[652,3.62],[666,3.62],[690,9.6],[724,13.2],[760,14.2],[955,13.6],[1172,13.2],[1196,17],[1224,31],[1262,44],[1420,46]]),nn=Gr([[-90,3],[0,3.2],[36,6.2],[120,7.2],[300,7.6],[440,7.1],[520,7.6],[578,9.6],[652,11.2],[692,10],[732,8.6],[900,9.1],[960,9.6],[1160,10.1],[1186,8.2],[1215,5.8],[1245,4.2],[1300,2],[1420,1.5]]),Os=Gr([[-90,2.4],[520,2.8],[556,13],[592,19],[700,19],[738,4.2],[1160,3.2],[1196,1.4],[1240,.9],[1420,.9]]),bi=Gr([[-90,0],[70,0],[110,.35],[330,.55],[440,.3],[530,.45],[580,.75],[700,.85],[740,.5],[940,.6],[972,.92],[1166,.92],[1196,.25],[1236,0],[1420,0]]),nc=[{d:-999,name:"\uCD9C\uBC1C \uB098\uB8E8",icon:"dock"},{d:92,name:"\uCCAB \uC5EC\uC6B8",icon:"rapids"},{d:342,name:"\uBC14\uC704 \uC815\uC6D0",icon:"rocks"},{d:440,name:"\uC18C\uC6A9\uB3CC\uC774 \uAD7D\uC774",icon:"whirl"},{d:548,name:"\uC881\uC740 \uD611\uACE1",icon:"canyon"},{d:724,name:"\uB458\uC9F8 \uC5EC\uC6B8",icon:"rapids"},{d:846,name:"\uC18C\uC6A9\uB3CC\uC774 \uAD7D\uC774",icon:"whirl"},{d:952,name:"\uB9C8\uC9C0\uB9C9 \uAE09\uB958",icon:"rapids"},{d:1190,name:"\uAE30\uC2AD",icon:"beach"}];function jl(s){let t=nc[0];for(let e of nc)s>=e.d&&(t=e);return t}var Yr={d0:640,d1:676,dNarrow:659},Ns=.5,Fs=Math.ceil((Dn-en)/Ns)+2,Wr=new Float32Array(Fs),Xr=new Float32Array(Fs),qr=new Float32Array(Fs);function o_(s){let t=1-ke(1120,1215,s),e=ke(-40,40,s);return(.21*Math.sin(s/92+.5)+.1*Math.sin(s/37+1.9)-.04)*t*(.6+.4*e)}(function(){let t=0,e=0;for(let o=0;o<Fs;o++){let a=en+o*Ns,c=o_(a);qr[o]=c,Wr[o]=t,Xr[o]=e,t+=Math.sin(c)*Ns,e-=Math.cos(c)*Ns}let n=Math.round((0-en)/Ns),i=Wr[n],r=Xr[n];for(let o=0;o<Fs;o++)Wr[o]-=i,Xr[o]-=r})();function vd(s){let t=It((s-en)/Ns,0,Fs-1.0001),e=Math.floor(t);return[e,t-e]}function xn(s){let[t,e]=vd(s);return Le(qr[t],qr[t+1],e)}function se(s,t,e={x:0,z:0}){let[n,i]=vd(t),r=Le(Wr[n],Wr[n+1],i),o=Le(Xr[n],Xr[n+1],i),a=Le(qr[n],qr[n+1],i);return e.x=r+Math.cos(a)*s,e.z=o+Math.sin(a)*s,e}function Yi(s){return He+.0042*s*s}var a_=[{d:104,rocks:[[.4,2.7]]},{d:142,gap:[5,13.1]},{d:174,gap:[-4.5,12.9]},{d:207,rocks:[[.6,2.3],[-13.4,1.5],[13.6,1.5]]},{d:240,gap:[6,12.5]},{d:272,gap:[-5.5,12.5]},{d:302,gap:[.5,12.1]},{d:332,gap:[6.5,12.1]},{d:358,gap:[-2.5,11.9]},{d:382,gap:[4.5,11.7]},{d:406,gap:[-4.5,11.7]},{d:430,gap:[1.5,12.1]},{d:459,rocks:[[-14.6,1.7],[12.9,2.1]]},{d:507,gap:[-9.8,11.8]},{d:538,gap:[-2.5,12.1]},{d:592,rocks:[[-4.6,1.5]]},{d:619,rocks:[[4.1,1.45]]},{d:708,rocks:[[.4,2]]},{d:742,gap:[6,12.2]},{d:772,gap:[-3,11.8]},{d:801,gap:[5,11.8]},{d:830,gap:[-4,11.8]},{d:862,rocks:[[-12.8,2],[13.6,1.4]]},{d:911,gap:[8.6,11.8]},{d:941,gap:[1.5,11.8]},{d:968,gap:[-4.5,11.4]},{d:994,gap:[1,11.4]},{d:1020,gap:[6,11.4]},{d:1046,gap:[.5,11.4]},{d:1072,gap:[-5.5,11.4]},{d:1098,gap:[-.5,11.4]},{d:1124,gap:[5,11.4]},{d:1150,gap:[-.5,11.2]},{d:1176,rocks:[[-8.8,2.7],[8.8,2.7]]}],Un=[{u:-1,d:474,R:7.2,capture:4.7,dir:-1},{u:1.6,d:879,R:7.2,capture:4.7,dir:1}];function c_(){let s=qi(90210),t=[],e=(n,i,r)=>{t.push({u:n,d:i,r,h:r*(.75+s()*.6),rot:s()*Math.PI*2,kind:Math.floor(s()*4)})};for(let n of a_){let i=Me(n.d);if(n.rocks){for(let[h,u]of n.rocks)e(h,n.d+(s()-.5)*1.5,u);continue}let[r,o]=n.gap,a=r-o/2,c=r+o/2,l=a;for(;l>-i-.6;){let h=1.45+s()*1.25,u=l-h;e(u,n.d+(s()-.5)*4.5,h),l=u-h-(.6+s()*2.4)}for(l=c;l<i+.6;){let h=1.45+s()*1.25,u=l+h;e(u,n.d+(s()-.5)*4.5,h),l=u+h+(.6+s()*2.4)}}for(let n=120;n<1170;n+=9+s()*14){if(n>560&&n<700)continue;let i=Me(n),r=s()<.5?-1:1,o=.5+s()*.6;e(r*(i-o*.4),n,o)}for(let n=0;n<6;n++){let i=1200+n*8,r=n%2?-1:1,o=Me(i);e(r*(o-2-s()*2),i,.7+s()*.8)}return t.sort((n,i)=>n.d-i.d),t}var De=c_();function Si(s,t,e){e.length=0;let n=0,i=De.length;for(;n<i;){let r=n+i>>1;De[r].d<s?n=r+1:i=r}for(let r=n;r<De.length&&De[r].d<=t;r++)e.push(r);return e}var Kl=[];function Md(s,t,e={u:0,d:0}){let n=Me(t),i=nn(t),r=It(s/n,-1.3,1.3),o=i*(1-.28*r*r),a=0,c=n-Math.abs(s);c<3.2&&(a-=Math.sign(s)*(3.2-c)*.55),Si(t-14,t+14,Kl);for(let l=0;l<Kl.length;l++){let h=De[Kl[l]],u=t-h.d,f=s-h.u,p=h.r+.4,m=u*u+f*f;if(m>9*p*p||m<1e-4)continue;let x=m*m,g=1-ke(4*p*p,9*p*p,m),d=p*p,v=.45*i*g;o+=v*(-d*(u*u-f*f)/x),a+=v*(-2*d*u*f/x)}for(let l of Un){let h=s-l.u,u=t-l.d,f=Math.hypot(h,u),p=l.R*1.5;if(f>p||f<.001)continue;let m=l.R*.45,x=(f<m?f/m:m/f)*7.5*(1-ke(l.R,p,f)),g=-u/f*l.dir,d=h/f*l.dir,v=1.6*(1-ke(l.R*.3,p,f)),b=ke(l.R*.5,p,f);o=o*(.15+.85*b)+d*x-u/f*v,a=a*(.15+.85*b)+g*x-h/f*v}return e.u=a,e.d=o,e}function bd(s=1){let t=Math.ceil((Dn-en)/s)+1,e=new Float32Array(t),n=0;for(let i=0;i<t;i++){e[i]=n;let r=en+i*s;n+=s/Math.max(.6,nn(r))}return{tau:e,step:s,n:t}}var ln={core:{mass:.4,rect:[-1.6,1.6,-2.4,1.4],circles:[[0,-1.15,1.45],[0,.3,1.45]]},L:{mass:.2,rect:[-4,-1.6,-2.2,1.2],circles:[[-2.8,-1.05,1.2],[-2.8,.15,1.2]]},R:{mass:.2,rect:[1.6,4,-2.2,1.2],circles:[[2.8,-1.05,1.2],[2.8,.15,1.2]]},C:{mass:.2,rect:[-1.8,1.8,1.4,3.4],circles:[[-.8,2.4,1],[.8,2.4,1]]},door:{mass:.16,rect:[-.55,.55,-1.05,1.05],circles:[[0,-.45,.62],[0,.45,.62]]}},ii={drag:1.12,angDrag:.9,yawSpring:1,scoop:6.4,stroke:2.4,strokeEvery:.66,restitution:.32,bankK:70};function wd(s,t){return t?1.9:Math.pow(1/s,.62)}function Ed(){return{u:0,d:0,vu:0,vd:0,psi:0,omega:0,roll:0,rollV:0,pitch:0,pitchV:0,heave:0,heaveV:0,sag:0,parts:new Set(["core","L","R","C"]),door:!1,mass:1,inertia:1,circles:[],minU:0,maxU:0,accU:0,accD:0,invuln:0,whirl:null,whirlCooldown:0,scraping:0,squeeze:0,moored:!0,pin:0,pinSide:0}}function sc(s){s.circles.length=0;let t=0;for(let n of s.parts){let i=ln[n];t+=i.mass;for(let[r,o,a]of i.circles)s.circles.push({x:r,z:o,r:a,part:n,m:i.mass/i.circles.length})}s.mass=t;let e=.15;for(let n of s.circles)e+=n.m*(n.x*n.x+n.z*n.z+.5*n.r*n.r);s.inertia=e}function $r(s,t,e,n){let i=Math.sin(s.psi),r=Math.cos(s.psi),o=-e;return n.u=s.u+r*t+i*o,n.d=s.d-i*t+r*o,n}var Bs={u:0,d:0},Ql={u:0,d:0},ic=[];function Zr(s){let t=1e9,e=-1e9;for(let n of s.circles)$r(s,n.x,n.z,Bs),t=Math.min(t,Bs.u-n.r),e=Math.max(e,Bs.u+n.r);s.minU=t,s.maxU=e}function Td(s,t,e,n){let i=s.vu,r=s.vd;if(s.invuln=Math.max(0,s.invuln-t),s.whirlCooldown=Math.max(0,s.whirlCooldown-t),s.moored)s.vu*=.9,s.vd=0,s.omega*=.9;else if(s.whirl)m_(s,t);else{let a=0,c=0,l=0,h=Math.sin(s.psi),u=Math.cos(s.psi);for(let p of s.circles){let m=u*p.x+h*-p.z,x=-h*p.x+u*-p.z,g=s.u+m,d=s.d+x;Md(g,d,Ql);let v=s.vu+s.omega*x,b=s.vd-s.omega*m,_=(s.door?2.6:ii.drag)*p.m,E=_*(Ql.u-v),A=_*(Ql.d-b);a+=E,c+=A,l+=x*E-m*A}s.vu+=a/s.mass*t,s.vd+=c/s.mass*t,s.omega+=l/s.inertia*t,s.omega-=s.omega*ii.angDrag*t,s.door||(s.omega-=Vr(s.psi)*ii.yawSpring*t);let f=bi(s.d);f>.01&&(s.vu+=tn(e*1.7+s.d*.05)*f*1.4*t,s.omega+=tn(e*1.3+40)*f*.5*t),d_(s)}s.u+=s.vu*t,s.d+=s.vd*t,s.psi+=s.omega*t;let o=n.length;g_(s,t,n),l_(s,t,n,o),s.accU=(s.vu-i)/t,s.accD=(s.vd-r)/t,Zr(s),u_(s,t,e)}function l_(s,t,e,n){let i=!1;for(let r=n;r<e.length;r++)e[r].type==="rock"&&(i=!0);if(i?(s.pin=Math.min(1.5,s.pin+t),s.pinCheck=(s.pinCheck||0)-t,(!s.pinSide&&s.pin>.08||s.pinSide&&s.pinCheck<=0)&&(s.pinSide=h_(s),s.pinCheck=.5)):(s.pin=Math.max(0,s.pin-t*.6),s.pin===0&&(s.pinSide=0)),s.vd<1.5&&!s.whirl&&s.pinSide?s.stall=(s.stall||0)+t:s.stall=Math.max(0,(s.stall||0)-t*2),s.pin>.08&&s.pinSide){let r=Math.min(1,(s.pin-.08)*4)+Math.min(1.5,s.stall*.6);s.vu+=s.pinSide*11*r*t,s.omega+=s.pinSide*1.2*Math.min(1,r)*t}}var Sd=[];function h_(s){let t=s.u-s.minU+.4,e=s.maxU-s.u+.4;Si(s.d-3,s.d+7,Sd);let n=[];for(let c of Sd){let l=De[c];n.push([l.u-l.r-e,l.u+l.r+t])}let i=Me(s.d+3),r=-i+t,o=i-e,a=c=>c>=r&&c<=o&&!n.some(([l,h])=>c>l&&c<h);for(let c=.25;c<30;c+=.25){let l=a(s.u-c),h=a(s.u+c);if(l&&!h)return-1;if(h&&!l)return 1;if(l&&h)return s.u>0?-1:1}return s.u>0?-1:1}function u_(s,t,e){let n=s.door?2.2:1/Math.max(.4,s.mass),i=Math.sin(s.psi),r=Math.cos(s.psi),o=r*s.accU-i*s.accD,a=i*s.accU+r*s.accD,c=bi(s.d),l=s.door?5.5:3.1+(1-s.mass)*1.6,h=.22,u=c*.05*Math.sin(e*2.1+s.d*.2)+c*.03*tn(e*3.1),f=c*.06*Math.sin(e*2.7+s.d*.31)+.012*Math.sin(e*1.1),p=It(o*.012*n,-.25,.25)+u+s.sag*.6,m=It(-a*.01*n,-.2,.2)+f-s.sag*.4;s.rollV+=(-(l*l)*(s.roll-p)-2*h*l*s.rollV)*t,s.roll+=s.rollV*t,s.pitchV+=(-(l*l)*(s.pitch-m)-2*h*l*s.pitchV)*t,s.pitch+=s.pitchV*t,s.roll=It(s.roll,-.45,.45),s.pitch=It(s.pitch,-.35,.35);let x=c*.14*Math.sin(e*2.4+s.d*.42)+.03*Math.sin(e*1.3),g=4;s.heaveV+=(-(g*g)*(s.heave-x)-2*.3*g*s.heaveV)*t,s.heave+=s.heaveV*t}function Jr(s,t,e=0){let n=s.door?1.6:1/Math.max(.45,s.mass);s.rollV+=t*Math.min(n,2.2),s.pitchV+=e*Math.min(n,2.2)}function d_(s){if(!(s.whirlCooldown>0))for(let t of Un){let e=s.u-t.u,n=s.d-t.d,i=Math.hypot(e,n);if(i<t.capture){let r=Math.atan2(n,e);s.whirl={pool:t,angle:r,travelled:0,radius:i,speed:0,target:f_(r,t.dir),t:0,early:!1};return}}}function f_(s,t){let e=p_(s,t);return e<Math.PI*.75?e+Math.PI*2:e}function p_(s,t){let n=((t>0?-Math.PI/4:-3*Math.PI/4)-s)*t;return n=(n%(Math.PI*2)+Math.PI*2)%(Math.PI*2),n}function m_(s,t){let e=s.whirl,n=e.pool;e.t+=t,e.speed=Math.min(2.9,e.speed+t*5.5);let i=e.speed*t;e.angle+=i*n.dir,e.travelled+=i,e.radius+=(n.capture*.62-e.radius)*Math.min(1,t*2.2);let r=n.u+Math.cos(e.angle)*e.radius,o=n.d+Math.sin(e.angle)*e.radius;s.vu=(r-s.u)/t,s.vd=(o-s.d)/t,s.u=r-s.vu*t,s.d=o-s.vd*t,s.omega=-n.dir*e.speed*1.35,e.travelled>=e.target&&th(s,0,0)}function th(s,t,e){let n=s.whirl;if(!n)return;let i=n.pool,r=-Math.sin(n.angle)*i.dir,o=Math.cos(n.angle)*i.dir,a=8.6;s.vu=r*a+t,s.vd=Math.max(1.5,o*a)+e,s.omega*=.45,s.whirl=null,s.whirlCooldown=2.6,s.released={t:0,early:n.travelled<n.target-.05}}function g_(s,t,e){let n=Math.sin(s.psi),i=Math.cos(s.psi);Si(s.d-10,s.d+10,ic);let r=0,o=0;s.scraping=Math.max(0,s.scraping-t*3);for(let a of s.circles){let c=i*a.x+n*-a.z,l=-n*a.x+i*-a.z,h=s.u+c,u=s.d+l;for(let m=0;m<ic.length;m++){let x=De[ic[m]],g=h-x.u,d=u-x.d,v=a.r+x.r*.92,b=g*g+d*d;if(b>=v*v)continue;let _=Math.sqrt(b)||.001,E=g/_,A=d/_,T=v-_;s.u+=E*T,s.d+=A*T,h+=E*T,u+=A*T;let P=s.vu+s.omega*l,M=s.vd-s.omega*c,y=P*E+M*A;if(y<0){let R=c*A-l*E,D=1/s.mass+R*R/s.inertia,U=-(1+ii.restitution)*y/D;s.vu+=U*E/s.mass,s.vd+=U*A/s.mass,s.omega+=-U*R/s.inertia;let N=-A,z=E,G=P*N+M*z,j=It(-G*.25*s.mass,-U*.4,U*.4);s.vu+=j*N/s.mass,s.vd+=j*z/s.mass,s.omega+=-j*(c*z-l*N)/s.inertia,e.push({type:"rock",rock:ic[m],speed:-y,part:a.part,lx:a.x,lz:a.z,nu:E,nd:A})}}let f=Me(u),p=Math.abs(h)+a.r-f;if(p>0){let m=Math.sign(h);m<0?r=Math.max(r,p):o=Math.max(o,p);let g=(s.vu+s.omega*l)*m;s.vu-=m*ii.bankK*p*t,g>0&&(s.vu-=m*g*.5,g>1.6&&e.push({type:"bank",speed:g,part:a.part,lx:a.x,lz:a.z,nu:-m,nd:0})),s.vd-=s.vd*.6*t*Math.min(1,p*2),s.omega+=-m*l*.08*t*p*10,s.scraping=Math.min(1,s.scraping+t*6*Math.min(1,p*3)),p>.95&&(s.u-=m*(p-.95))}}s.squeeze=Math.min(r,o)}function Ad(s,t){let e=1e9;for(let n of s.circles){$r(s,n.x,n.z,Bs);let i=Math.hypot(Bs.u-t.u,Bs.d-t.d)-n.r-t.r*.92;i<e&&(e=i)}return e}var si={L:{id:"L",name:"\uC88C\uBD09\uC2DD",side:-1,rate:1/25,room:"L",x:-3.15,z:-.95,color:"#e8483b"},C:{id:"C",name:"\uD55C\uAC00\uC6B4",side:0,rate:1/33,room:"C",x:.45,z:2.55,color:"#f2b62c"},R:{id:"R",name:"\uC6B0\uB9D0\uC21C",side:1,rate:1/29,room:"R",x:3.15,z:-.95,color:"#3a7ee6"}},Sn=["L","C","R"],Nn={CALM:0,ANNOYED:1,STEAMING:2,SAW:3,SAWING:4},Rd=[.3,.55,.78,1],x_=4.8,$i={fair:{id:"fair",title:"\uC628\uC804\uD55C \uACF5\uB3D9\uBA85\uC758",sub:"\uC14B\uC774\uC11C \uD55C \uC9D1, \uB05D\uAE4C\uC9C0"},wreck:{id:"wreck",title:"\uB108\uB35C\uB108\uB35C \uACF5\uB3D9\uBA85\uC758",sub:"\uBCBD\uC740 \uC5C6\uC5B4\uB3C4 \uC14B\uC740 \uC788\uB2E4"},two:{id:"two",title:"\uB458\uC774\uC11C \uBC18\uBC18",sub:"\uD55C \uBA85\uC740 \uBA3C\uC800 \uC640 \uC788\uC5C8\uB2E4"},alone:{id:"alone",title:"\uC774\uC81C \uC9C4\uC9DC \uB0B4 \uC9D1",sub:"\uB2E8\uB3C5\uBA85\uC758 \uB4F1\uAE30 \uC644\uB8CC"},door:{id:"door",title:"\uBB38\uC9DD \uD55C \uC7A5",sub:"\uADF8\uB798\uB3C4 \uD604\uAD00\uC740 \uB0A8\uC558\uB2E4"}},eh=1/120;function nh(s){return{...si[s],state:"aboard",sulk:0,stage:0,sawing:!1,cut:0,holdTime:0,waitTime:0,dizzy:0,flinch:0,lastStroke:-10}}var rc=class{constructor(){this.reset()}reset(){let t=Ed();sc(t),t.d=-4,t.u=0,Zr(t),this.house=t,this.time=0,this.runTime=0,this.state="intro",this.owners={L:nh("L"),C:nh("C"),R:nh("R")},this.paddle={holder:"C",flight:null,queued:null,strokeTimer:1.2,cooldown:0},this.pushes=[],this.events=[],this.contacts=[],this.acc=0,this.timeScale=1,this.slow={t:0,scale:1},this.hp=1,this.lastCatch=-10,this.lastCatchBy=null,this.lastNearMiss=-10,this.scrapeTick=0,this.nearTrack=new Map,this.floaters=[],this.section=jl(t.d),this.canyon={active:!1,maxSqueeze:0,sideways:!1,slim:!1,done:!1},this.endingId=null,this.failReason=null,this.stats={throws:0,thrills:0,nearMisses:0,hits:0,appeased:0,lastSecondAppease:0,whirlRides:0,whirlEarly:0,canyon:null,lost:[],shattered:!1,overboard:[],time:0}}emit(t,e={}){this.events.push({type:t,...e,time:this.time})}aboard(){return Sn.filter(t=>this.owners[t].state==="aboard")}launch(){this.state==="intro"&&(this.state="running",this.house.moored=!1,this.house.vd=1.5,this.emit("launch"))}progress(){return It(this.house.d/He,0,1)}tap(t){if(this.state!=="running")return!1;let e=this.owners[t];if(!e||e.state!=="aboard")return!1;let n=this.paddle;return n.flight?(n.flight.to!==t&&(n.queued=t),!0):n.holder===t?this.aboard().length===1&&n.cooldown<=0?(this.stroke(t,!0,.35),n.cooldown=.85,!0):(this.emit("already",{id:t}),!1):(this.throwTo(t),!0)}throwTo(t){let e=this.paddle,n=e.holder,i=this.owners[n],r=this.owners[t],o=Math.hypot(i.x-r.x,i.z-r.z);e.flight={from:n,to:t,t:0,dur:.15+o*.022},e.holder=null,e.queued=null,this.stats.throws++,this.emit("throw",{from:n,to:t,dur:e.flight.dur})}strokeDir(t){let e=this.house,n=this.owners[t];return n.side!==0?n.side:Math.abs(e.u)<.9?0:-Math.sign(e.u)}fatigue(t){let e=this.owners[t];return Math.max(.3,1-Math.max(0,e.holdTime-1.2)/4.5)}satisfied(t){let e=this.house,n=this.owners[t],i=Me(e.d+6);return n.side<0?e.minU<-i+2.1:n.side>0?e.maxU>i-2.1:Math.abs(e.u)<.9&&Math.abs(e.vu)<1.2}stroke(t,e,n=0){let i=this.house,r=this.strokeDir(t),o=wd(i.mass,i.door),a=this.owners[t];a.lastStroke=this.time;let c;if(e?c=ii.scoop*(.85+.45*n):c=ii.stroke*this.fatigue(t),r===0)this.pushes.push({du:-i.vu*(e?.85:.5),spin:-i.omega*.7-Vr(i.psi)*(e?1.4:.7),t:.2,T:.2}),Jr(i,(Math.random()-.5)*.25,e?.35:.15);else{let l=r*c*o,h=(i.door,.05);this.pushes.push({du:l,spin:r*h*c*o,t:.18,T:.18});let u=Math.cos(i.psi);Jr(i,r*(e?.95:.42)*u,e?.2:.08)}i.whirl&&e&&(th(i,r*3.2,0),this.stats.whirlEarly++,this.emit("whirlExit",{early:!0})),this.emit("stroke",{id:t,dir:r,big:e,power:e?1:.5*this.fatigue(t)})}update(t){let e=Math.min(t,.06);this.slow.t>0?(this.slow.t-=e,this.timeScale=this.slow.t>0?this.slow.scale:1):this.timeScale=1,this.acc+=e*this.timeScale;let n=0;for(;this.acc>=eh&&n<12;)this.fixedStep(eh),this.acc-=eh,n++;n>=12&&(this.acc=0)}slowmo(t,e){this.slow.t>0&&this.slow.scale<e||(this.slow.t=t,this.slow.scale=e)}fixedStep(t){this.time+=t;let e=this.house;this.state==="running"&&(this.runTime+=t),this.state==="running"&&this.updatePaddle(t);for(let i=this.pushes.length-1;i>=0;i--){let r=this.pushes[i],o=Math.min(t,r.t)/r.T;e.vu+=r.du*o,e.omega+=r.spin*o,r.t-=t,r.t<=0&&this.pushes.splice(i,1)}let n=!!e.whirl;this.contacts.length=0,this.state==="arrived"?this.stepArrived(t):this.state!=="failed"?Td(e,t,this.time,this.contacts):(e.vu*=.98,e.vd*=.98,e.u+=e.vu*t,e.d+=e.vd*t),!n&&e.whirl?(this.stats.whirlRides++,this.emit("whirlEnter",{pool:Un.indexOf(e.whirl.pool)})):n&&!e.whirl&&e.released&&!e.released.early&&this.emit("whirlExit",{early:!1}),this.state==="running"&&(this.handleContacts(t),this.updateOwners(t),this.trackNearMisses(),this.trackCanyon(),this.updateSection(),this.checkArrival()),this.updateFloaters(t)}updatePaddle(t){let e=this.paddle;if(e.cooldown=Math.max(0,e.cooldown-t),e.flight){if(e.flight.t+=t,e.flight.t>=e.flight.dur){let i=e.flight.to,r=this.owners[i];if(e.flight=null,r.state!=="aboard"){let l=this.aboard()[0];e.holder=l;return}e.holder=i,this.lastCatch=this.time,this.lastCatchBy=i;let o=r.stage,a=r.sawing,c=r.sulk;if(e.queued&&e.queued!==i&&this.owners[e.queued].state==="aboard"){this.emit("catch",{id:i,relay:!0,eager:c}),this.throwTo(e.queued);return}if(this.emit("catch",{id:i,eager:c}),a||o>=Nn.SAW){this.stats.appeased++;let l=a&&r.cut>.55;l&&this.stats.lastSecondAppease++,this.emit("appease",{id:i,sawing:a,last:l}),a&&(r.sawing=!1,r.sulk=.72)}this.stroke(i,!0,c),e.strokeTimer=.62}return}if(!e.holder)return;if(this.owners[e.holder].state!=="aboard"){e.holder=this.aboard()[0]||null;return}e.strokeTimer-=t,e.strokeTimer<=0&&(e.strokeTimer=ii.strokeEvery*(this.house.door?.85:1),this.satisfied(e.holder)?this.emit("rest",{id:e.holder}):this.stroke(e.holder,!1))}updateOwners(t){let e=this.house,n=It((this.runTime-4)/10,0,1),i=!!e.whirl;for(let r of Sn){let o=this.owners[r];if(o.state!=="aboard")continue;o.flinch=Math.max(0,o.flinch-t),i?o.dizzy=Math.min(2.5,o.dizzy+t*2):o.dizzy=Math.max(0,o.dizzy-t*.8);let a=this.paddle.holder===r,c=this.paddle.flight&&this.paddle.flight.to===r;if(a)o.sulk=Math.max(0,o.sulk-t/4.6),o.holdTime+=t,o.waitTime=0;else if(!c&&this.aboard().length>1){let h=(.3+.7*n)*(i?.4:1);o.sulk=Math.min(1,o.sulk+o.rate*h*t),o.waitTime+=t,o.holdTime=0}let l=0;for(let h=0;h<Rd.length;h++)o.sulk>=Rd[h]-(h===3?1e-6:0)&&(l=h+1);if(o.sawing?l=Nn.SAWING:l===Nn.SAWING&&(o.sawing=!0,this.emit("sawStart",{id:r,resume:o.cut>.02})),l!==o.stage){let h=l>o.stage;o.stage=l,this.emit("stage",{id:r,stage:l,up:h})}o.sawing&&!c&&!i&&(o.cut+=t/x_,o.cut>=1&&this.detach(r))}}detach(t){let e=this.house,n=this.owners[t];n.state="gone",n.sawing=!1,n.cut=1,this.paddle.queued===t&&(this.paddle.queued=null);let i=n.room,r=ln[i],o=(r.rect[0]+r.rect[1])/2,a=(r.rect[2]+r.rect[3])/2,c=$r(e,o,a,{u:0,d:0});e.parts.delete(i),sc(e),Zr(e),this.floaters.push({kind:"room",id:t,part:i,u:c.u,d:c.d,psi:e.psi,vu:e.vu,vd:e.vd,omega:0,t:0,lx:o,lz:a}),this.stats.lost.push({id:t,d:Math.round(e.d)}),Jr(e,-n.side*.6,.3),this.slowmo(.75,.3),this.emit("detach",{id:t,part:i,d:e.d})}handleContacts(t){let e=this.house,n=null;for(let i of this.contacts){if(i.type==="rock"){let r=this.nearTrack.get(i.rock);r?r.hit=!0:this.nearTrack.set(i.rock,{min:-1,hit:!0,fired:!0})}(!n||i.speed>n.speed)&&(n=i)}if(n&&e.invuln<=0&&n.speed>.9){if(e.door){if(n.type!=="rock")return;e.invuln=1.2,this.stats.hits++,this.hp-=.5,this.emit("hit",{strength:.8,part:"door",lx:0,lz:0,kind:"rock",hp:this.hp,door:!0}),this.hp<=.01&&this.fail("door");return}let i=Math.pow(e.mass,-.85),r=n.type==="rock"?It((n.speed-.4)*3.6,5,17):It((n.speed-1)*3,3,10),o=r*i/100;this.hp-=o,e.invuln=.65,this.stats.hits++;let a=It(r/17,.25,1);Jr(e,n.nu*1.1*a*Math.cos(e.psi),-.9*a);for(let c of this.aboard())this.owners[c].flinch=.6;this.emit("hit",{strength:a,part:n.part,lx:n.lx,lz:n.lz,kind:n.type,hp:this.hp}),this.hp<=0&&this.shatter();return}if(e.scraping>.3&&!e.door){let i=Math.pow(e.mass,-.85);this.hp-=.04*e.scraping*i*t,this.scrapeTick-=t,this.scrapeTick<=0&&(this.scrapeTick=.42,this.emit("scrape",{intensity:e.scraping,hp:this.hp})),this.hp<=0&&this.shatter()}}shatter(){let t=this.house;if(t.door)return;let e=this.paddle,n=e.holder||e.flight&&e.flight.to||this.aboard()[0],i=this.aboard().filter(a=>a!==n);e.flight=null,e.queued=null,e.holder=n;for(let a of i){let c=this.owners[a];c.state="overboard",c.sawing=!1;let l=$r(t,c.x,c.z,{u:0,d:0});this.floaters.push({kind:"swimmer",id:a,u:l.u,d:l.d,psi:t.psi,vu:t.vu+(Math.random()-.5)*4,vd:t.vd,omega:(Math.random()-.5)*2,t:0}),this.stats.overboard.push(a)}let r=[...t.parts];t.whirl&&(t.whirl=null),t.parts=new Set(["door"]),t.door=!0,sc(t),Zr(t),t.invuln=1.6,t.omega*=.3,this.hp=1,this.stats.shattered=!0;let o=this.owners[n];o.sulk=0,o.sawing=!1,this.slowmo(1.1,.28),this.emit("shatter",{rider:n,overboard:i,parts:r})}fail(t){this.state==="running"&&(this.state="failed",this.failReason=t,this.stats.time=this.runTime,this.slowmo(1.4,.3),this.emit("fail",{reason:t}))}trackNearMisses(){let t=this.house,e=Si(t.d-12,t.d+14,this._near||(this._near=[]));for(let n of e){let i=De[n],r=this.nearTrack.get(n);if(r||(r={min:1e9,hit:!1,fired:!1},this.nearTrack.set(n,r)),r.fired)continue;let o=Ad(t,i);if(o<r.min&&(r.min=o),i.d<t.d&&!r.hit&&r.min<1.15&&i.r>1){if(r.fired=!0,this.time-this.lastNearMiss<.7)continue;this.lastNearMiss=this.time;let a=this.time-this.lastCatch<1.9;this.stats.nearMisses++,a&&(this.stats.thrills++,this.slowmo(.45,.32)),this.emit("nearMiss",{thrill:a,rock:n,by:this.lastCatchBy,clearance:r.min})}}if(this.nearTrack.size>60)for(let n of this.nearTrack.keys())De[n].d<t.d-20&&this.nearTrack.delete(n)}trackCanyon(){let t=this.house,e=this.canyon;if(!e.done){if(t.d>Yr.d0&&t.d<Yr.d1)e.active||(e.active=!0,this.emit("canyonGate")),e.maxSqueeze=Math.max(e.maxSqueeze,t.squeeze),Math.abs(t.d-Yr.dNarrow)<3&&(Math.abs(Math.sin(t.psi))>.55&&(e.sideways=!0),(!t.parts.has("L")||!t.parts.has("R")||t.door)&&(e.slim=!0));else if(e.active&&t.d>=Yr.d1){e.done=!0;let n="clean";e.maxSqueeze>.05?n="squeeze":e.sideways?n="sideways":e.slim&&(n="slim"),this.stats.canyon=n,this.emit("canyonPassed",{method:n})}}}updateSection(){let t=jl(this.house.d);t!==this.section&&(this.section=t,this.emit("section",{name:t.name,icon:t.icon}))}checkArrival(){let t=this.house;if(t.d+(t.door?1:2.4)>=Yi(t.u)-.3){this.state="arrived",this.stats.time=this.runTime;let n=this.aboard(),i;t.door?i="door":n.length===3?i=this.hp>=.6?"fair":"wreck":n.length===2?i="two":i="alone",this.endingId=i,this.paddle.flight=null,this.emit("arrive",{ending:i,aboard:n})}}stepArrived(t){let e=this.house;e.vd*=Math.exp(-t*2.6),e.vu*=Math.exp(-t*3),e.omega*=Math.exp(-t*3),e.psi+=e.omega*t,e.d+=e.vd*t,e.u+=e.vu*t,e.roll*=Math.exp(-t*2),e.pitch+=(-.05-e.pitch)*Math.min(1,t*2),e.heave+=(.32-e.heave)*Math.min(1,t*1.5)}updateFloaters(t){let e=this.house;for(let n of this.floaters){n.t+=t;let i=nn(n.d);if(n.kind==="room"){let o=si[n.id],a=o.side===0?n.u:o.side*(Me(n.d)-4);n.vu+=((a-n.u)*.25-n.vu)*Math.min(1,t*.8),n.vd+=(i*.42-n.vd)*Math.min(1,t*.9),n.omega+=(.25*(o.side||1)-n.omega)*t*.5}else n.vu*=Math.exp(-t*.6),n.vd+=(i*.5-n.vd)*Math.min(1,t*.7),n.omega*=Math.exp(-t*.3);n.u+=n.vu*t,n.d+=n.vd*t,n.psi+=n.omega*t;let r=Me(n.d);Math.abs(n.u)>r-2&&(n.u=Math.sign(n.u)*(r-2),n.vu*=-.3),n.visible=n.d>e.d-70}}};var Kr=128,oc=2048,ih=3.5;function sh(s,t){let e=0;for(let n of Un){let i=Math.hypot(s-n.u,t-n.d);if(i<n.R){let r=1-i/n.R;e-=1.25*r*r}}return e}function __(){let s=new Uint8Array(Kr*oc*4),t=[];for(let n=0;n<oc;n++){let i=en+(n+.5)/oc*(Dn-en),r=Me(i)+ih;Si(i-22,i+8,t);for(let o=0;o<Kr;o++){let a=((o+.5)/Kr*2-1)*r,c=9,l=0,h=0;for(let f of t){let p=De[f],m=a-p.u,x=i-p.d,g=Math.hypot(m,x)-p.r*.95;if(g<c&&(c=g),x>0&&x<22){let d=p.r*.85+x*.3,v=1-x/22,b=1-It(Math.abs(Math.abs(m)-d)/.55,0,1);l=Math.max(l,b*v*Math.min(1,p.r/1.2)),Math.abs(m)<d*.75&&(h=Math.max(h,(1-x/14)*Math.min(1,p.r/1.4)))}x<0&&x>-p.r*1.8&&Math.abs(m)<p.r*1.1&&(h=Math.max(h,.8*(1+x/(p.r*1.8))))}let u=(n*Kr+o)*4;s[u]=Math.round(It(c/9,0,1)*255),s[u+1]=Math.round(It(l,0,1)*255),s[u+2]=Math.round(It(h,0,1)*255),s[u+3]=255}}let e=new gi(s,Kr,oc,cn);return e.magFilter=on,e.minFilter=on,e.wrapS=Rn,e.wrapT=Rn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var y_=`
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
`,v_=`
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
    vec2 fuv = vec2(clamp(ud.x / (hw + ${ih.toFixed(1)}) * 0.5 + 0.5, 0.0, 1.0), (ud.y - uFieldRange.x) / (uFieldRange.y - uFieldRange.x));
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
`;function Cd(s){let t=__(),e=bd(1),n=h=>{let u=It((h-en)/e.step,0,e.n-1.001),f=Math.floor(u);return e.tau[f]+(e.tau[f+1]-e.tau[f])*(u-f)},i=Is.merge([at.fog,{uTime:{value:0},uField:{value:null},uFieldRange:{value:new ut(en,Dn)},uPools:{value:Un.map(h=>new ce(h.u,h.d,h.R,h.dir))},uDeep:{value:new bt("#1557b8")},uMid:{value:new bt("#2370cc")},uShallow:{value:new bt("#3fb6cf")},uFoam:{value:new bt("#f4fbff")},uDark:{value:new bt("#0b2f6e")},uHouse:{value:new ce(0,0,4,0)}}]);i.uField.value=t;let r=new Re({uniforms:i,vertexShader:y_,fragmentShader:v_,fog:!0}),o=new Et,a=60,c=30,l={x:0,z:0};for(let h=en;h<Dn;h+=a){let u=Math.min(Dn,h+a),f=Math.ceil(u-h)+1,p=[],m=[],x=[],g=[],d=[],v=[];for(let A=0;A<f;A++){let T=h+(u-h)*A/(f-1),P=Me(T),M=P+ih,y=n(T);for(let R=0;R<=c;R++){let D=-M+2*M*R/c;se(D,T,l),p.push(l.x,0,l.z),m.push(D,T),x.push(y),g.push(P),d.push(bi(T)),v.push(nn(T))}}let b=[];for(let A=0;A<f-1;A++)for(let T=0;T<c;T++){let P=A*(c+1)+T,M=P+c+1;b.push(P,P+1,M,P+1,M+1,M)}let _=new jt;_.setAttribute("position",new Ft(p,3)),_.setAttribute("aUD",new Ft(m,2)),_.setAttribute("aTau",new Ft(x,1)),_.setAttribute("aHW",new Ft(g,1)),_.setAttribute("aRough",new Ft(d,1)),_.setAttribute("aSpeed",new Ft(v,1)),_.setIndex(b),_.computeBoundingSphere(),_.boundingSphere.radius+=2;let E=new kt(_,r);E.renderOrder=-1,o.add(E)}return s.add(o),{group:o,material:r,update(h,u){i.uTime.value=h,u&&i.uHouse.value.set(u.u,u.d,4,1)}}}function ks(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new jt,l=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let p=s[f].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Id(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][f]);let m=Id(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Id(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ye(o,e,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,p=h.count;f<p;f++)for(let m=0;m<e;m++){let x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Pd(s,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let v=0,b=a.length;v<b;v++){let _=a[v],E=s.attributes[_];c[_]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);let A=s.morphAttributes[_];A&&(l[_]||(l[_]=[]),A.forEach((T,P)=>{let M=new T.array.constructor(T.count*T.itemSize);l[_][P]=new T.constructor(M,T.itemSize,T.normalized)}))}let p=t*.5,m=Math.log10(1/t),x=Math.pow(10,m),g=p*x;for(let v=0;v<r;v++){let b=n?n.getX(v):v,_="";for(let E=0,A=a.length;E<A;E++){let T=a[E],P=s.getAttribute(T),M=P.itemSize;for(let y=0;y<M;y++)_+=`${~~(P[u[y]](b)*x+g)},`}if(_ in e)h.push(e[_]);else{for(let E=0,A=a.length;E<A;E++){let T=a[E],P=s.getAttribute(T),M=s.morphAttributes[T],y=P.itemSize,R=c[T],D=l[T];for(let U=0;U<y;U++){let N=u[U],z=f[U];if(R[z](o,P[N](b)),M)for(let G=0,j=M.length;G<j;G++)D[G][z](o,M[G][N](b))}}e[_]=o,h.push(o),o++}}let d=s.clone();for(let v in s.attributes){let b=c[v];if(d.setAttribute(v,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),v in l)for(let _=0;_<l[v].length;_++){let E=l[v][_];d.morphAttributes[v][_]=new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)}}return d.setIndex(h),d}var rh=null,oh=null;function ch(s=3){return s===2?(oh||(oh=Ld([110,255])),oh):(rh||(rh=Ld([95,175,255])),rh)}function Ld(s){let t=new gi(new Uint8Array(s),s.length,1,Rs);return t.minFilter=Fe,t.magFilter=Fe,t.generateMipmaps=!1,t.needsUpdate=!0,t}var Dd=new Map;function Te(s,t={}){let e=`${s}|${t.steps||3}|${t.emissive||""}|${t.transparent?1:0}|${t.side||0}`,n=Dd.get(e);return n||(n=new Qn({color:new bt(s),gradientMap:ch(t.steps||3),transparent:!!t.transparent,side:t.side||In}),t.emissive&&(n.emissive=new bt(t.emissive)),Dd.set(e,n)),n}function zd(s,t={}){return new Qn({color:new bt(s),gradientMap:ch(t.steps||3),transparent:!!t.transparent})}var ah=null;function jr(){return ah||(ah=new Qn({vertexColors:!0,gradientMap:ch(3)})),ah}var Ud=new Map;function zs(s=.035,t="#1b1410"){let e=`${s}|${t}`,n=Ud.get(e);return n||(n=new Re({uniforms:Is.merge([at.fog,{uThick:{value:s},uColor:{value:new bt(t)}}]),vertexShader:`
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
        }`,side:Ce,fog:!0}),Ud.set(e,n)),n}var Nd=new WeakMap;function ac(s){let t=Nd.get(s);return t||(t=new jt,t.setAttribute("position",s.getAttribute("position").clone()),s.index&&t.setIndex(s.index.clone()),t=Pd(t,.001),t.computeVertexNormals(),Nd.set(s,t),t)}function Gn(s,t=.035,e){let n=ac(s.geometry),i=s.isInstancedMesh?new Be(n,zs(t,e),s.count):new kt(n,zs(t,e));return s.isInstancedMesh&&(i.instanceMatrix=s.instanceMatrix),i.castShadow=!1,i.renderOrder=s.renderOrder,i.userData.isOutline=!0,i.frustumCulled=s.frustumCulled,s.add(i),i}var Hs=class{constructor(){this.parts=[],this.outlines=[]}add(t,e,n,i=.03){let r=t.index?t.toNonIndexed():t.clone();r.getAttribute("uv")&&r.deleteAttribute("uv"),r.applyMatrix4(n);let o=e&&e.isColor?e.clone():new bt(e),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)c[l*3]=o.r,c[l*3+1]=o.g,c[l*3+2]=o.b;if(r.setAttribute("color",new ye(c,3)),this.parts.push(r),i){let l=ac(t).clone(),h=l.getAttribute("position"),u=l.getAttribute("normal");for(let p=0;p<h.count;p++)h.setXYZ(p,h.getX(p)+u.getX(p)*i,h.getY(p)+u.getY(p)*i,h.getZ(p)+u.getZ(p)*i);l.applyMatrix4(n),l.deleteAttribute("normal");let f=l.index?l.toNonIndexed():l;f.computeVertexNormals(),this.outlines.push(f)}}build(){let t=new Et;if(this.parts.length){let e=ks(this.parts,!1),n=new kt(e,jr());t.add(n)}if(this.outlines.length){let e=ks(this.outlines.map(i=>{let r=new jt;return r.setAttribute("position",i.getAttribute("position")),r.setAttribute("normal",i.getAttribute("normal")),r}),!1),n=new kt(e,zs(0));n.userData.isOutline=!0,t.add(n)}return t}},M_=new Xt,Fd=new we,Od=new Oe,Bd=new C,kd=new C;function be(s,t,e,n=0,i=0,r=0,o=1,a=1,c=1){return Od.set(n,i,r),Fd.setFromEuler(Od),kd.set(s,t,e),Bd.set(o,a,c),M_.clone().compose(kd,Fd,Bd)}function V(s,t,e,n=[0,0,0],i=[0,0,0],r=.03){let o=new kt(s,typeof t=="string"?Te(t):t);return o.position.set(n[0],n[1],n[2]),o.rotation.set(i[0],i[1],i[2]),r&&Gn(o,r),e&&e.add(o),o}var O={box:(s,t,e)=>new mi(s,t,e),cyl:(s,t,e,n=12)=>new ys(s,t,e,n),sph:(s,t=14,e=10)=>new zn(s,t,e),cap:(s,t,e=6)=>new yr(s,t,e,12),ico:(s,t=0)=>new Fi(s,t),torus:(s,t,e=8,n=16,i=Math.PI*2)=>new Ir(s,t,e,n,i),cone:(s,t,e=12)=>new vr(s,t,e)};function Ze(s,t=[]){s.updateMatrixWorld(!0);let e=new Xt().copy(s.matrixWorld).invert(),n=new Hs,i=[],r=new Set(t),o=c=>{if(!(r.has(c)||c.userData.keep)){if(c.isMesh&&!c.isInstancedMesh&&!c.userData.isOutline&&c!==s){let l=c.material;if(l&&!Array.isArray(l)&&l.isMeshToonMaterial&&!l.map&&!l.transparent&&!l.vertexColors&&c.visible){let u=new Xt().multiplyMatrices(e,c.matrixWorld),f=c.children.find(m=>m.userData.isOutline),p=f?f.material.uniforms.uThick.value:0;n.add(c.geometry,l.color,u,p),i.push(c)}}for(let l of c.children)o(l)}};if(o(s),!i.length)return null;for(let c of i){for(let l of[...c.children])l.userData.isOutline||s.attach(l);c.parent.remove(c)}let a=n.build();return a.userData.baked=!0,s.add(a),a}var Ae=s=>new bt(s);function Hd(s){let t=new Dr("#d8eeff","#7a8f5a",1.25);s.add(t);let e=new Ss("#fff3dc",2.3);e.position.set(-40,80,30),s.add(e),s.add(e.target);let n=new Ss("#bcd8ff",.45);return n.position.set(30,20,-40),s.add(n),{hemi:t,sun:e,fill:n}}function Vd(s){let t=new zn(700,24,16),e=new Re({side:Ce,depthWrite:!1,uniforms:{uTop:{value:Ae("#3d8fe6")},uHorizon:{value:Ae("#c4e9ff")},uBottom:{value:Ae("#d9f1ff")}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uBottom; varying vec3 vDir;
      void main(){ float h = vDir.y; vec3 c = h > 0.0 ? mix(uHorizon, uTop, smoothstep(0.0, 0.45, h)) : mix(uHorizon, uBottom, smoothstep(0.0, -0.2, h));
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
      }`}),n=new kt(t,e);n.renderOrder=-10,n.frustumCulled=!1,s.add(n);let i=new Et,r=qi(7),o=Te("#ffffff",{steps:2});for(let a=0;a<16;a++){let c=new Et,l=3+Math.floor(r()*4);for(let u=0;u<l;u++){let f=10+r()*14,p=new kt(O.sph(1,10,8),o);p.scale.set(f*1.4,f*.8,f),p.position.set((u-l/2)*14+r()*6,r()*5,r()*8),c.add(p)}let h=a/16*Math.PI*2+r()*.3;c.position.set(Math.cos(h)*460,70+r()*60,Math.sin(h)*460),c.lookAt(0,c.position.y,0),i.add(c)}return s.add(i),Ze(i),{update(a){n.position.copy(a.position),i.position.set(a.position.x,0,a.position.z)}}}function b_(s){let t=s<1.7;return{under:Ae(t?"#d9c28a":"#4b4036"),wet:Ae(t?"#e9d49b":"#5e4f40"),cliffA:Ae(t?"#f1dca5":"#c48d57"),cliffB:Ae(t?"#ead29a":"#a7713f"),cliffC:Ae(t?"#e2c88c":"#d9a76a"),soil:Ae(t?"#9ccf5c":"#8b5b32"),grassLip:Ae("#84cc4f"),grass:Ae("#6db944"),grassFar:Ae("#58a63b")}}function Gd(s){let t=new Et,e=qi(31337),n=2,i=80,r={x:0,z:0};for(let d of[-1,1])for(let v=en;v<Dn;v+=i){let b=Math.min(Dn,v+i),_=[];for(let y=v;y<=b+.01;y+=n){let R=Os(y)*(1+.12*tn(y*.07+d*13)),D=Me(y),U=tn(y*.21+d*5),z=[[-1.6,-1.2],[.05+.15*U,.12],[.2+.05*R+.2*U,.4*R],[.35+.08*R+.25*tn(y*.4+d),.75*R],[.55+.11*R,R],[1.4+.11*R,R+.22],[10+.12*R,R+.7+.5*tn(y*.05+d*3)],[46,R+2.8+2.5*tn(y*.02+d*9)]].map(([G,j])=>(se(d*(D+G),y,r),[r.x,j,r.z]));_.push({pts:z,H:R,d:y})}let E=[],A=[],T=(y,R)=>{E.push(y[0],y[1],y[2]),A.push(R.r,R.g,R.b)};for(let y=0;y<_.length-1;y++){let R=_[y],D=_[y+1],U=b_(R.H),N=[U.under,U.wet,Math.floor(R.d/6)%2?U.cliffA:U.cliffB,U.cliffC,U.soil,U.grassLip,U.grass];R.H>6&&(N[3]=Math.floor(R.d/9)%2?U.cliffC:U.cliffA);for(let z=0;z<R.pts.length-1;z++){let G=z===6?U.grassFar:N[z],j=R.pts[z],q=R.pts[z+1],st=D.pts[z],dt=D.pts[z+1];d<0?(T(j,G),T(st,G),T(q,G),T(q,G),T(st,G),T(dt,G)):(T(j,G),T(q,G),T(st,G),T(q,G),T(dt,G),T(st,G))}}let P=new jt;P.setAttribute("position",new Ft(E,3)),P.setAttribute("color",new Ft(A,3)),P.computeVertexNormals();let M=new kt(P,jr());t.add(M)}s.add(t);let o=O.cyl(.22,.32,2.2,6);o.translate(0,1.1,0);let a=O.ico(1,1),c=[];for(let d=en+4;d<Dn-10;d+=3+e()*5)for(let v of[-1,1]){if(e()<.35)continue;let b=Os(d);if(d>He-30)continue;let _=.12*b+2.5+e()*26,E=b+.22+It((_-1.4-.11*b)/9,0,1)*.5,A=v*(Me(d)+_);se(A,d,r),c.push({x:r.x,y:E,z:r.z,s:.8+e()*.9,tint:e()})}let l=new Be(o,Te("#8a5a32"),c.length),h=new Be(a,Te("#4fa83a"),c.length),u=new Be(a,Te("#79c44a"),c.length),f=new Xt,p=new we,m=new Oe,x=0,g=0;c.forEach((d,v)=>{f.compose(new C(d.x,d.y,d.z),p.identity(),new C(d.s,d.s,d.s)),l.setMatrixAt(v,f),m.set(e(),e()*6,e()),p.setFromEuler(m);let b=d.s*(1.5+e()*.6);f.compose(new C(d.x,d.y+2.4*d.s+b*.55,d.z),p,new C(b,b*1.05,b)),d.tint<.55?h.setMatrixAt(x++,f):u.setMatrixAt(g++,f)}),h.count=x,u.count=g;for(let d of[l,h,u])d.instanceMatrix.needsUpdate=!0,d.computeBoundingSphere(),Gn(d,.05),s.add(d);return t}function S_(s){let t=qi(s),e=new Fi(1,1),n=e.getAttribute("position"),i=(f,p,m)=>`${f.toFixed(3)},${p.toFixed(3)},${m.toFixed(3)}`,r=new Map;for(let f=0;f<n.count;f++){let p=n.getX(f),m=n.getY(f),x=n.getZ(f),g=i(p,m,x);r.has(g)||r.set(g,.78+t()*.4);let d=r.get(g),v=m*d;v=v<-.35?-.35:v,v>.55&&(v=.55+(v-.55)*.4),n.setXYZ(f,p*d,v,x*d)}e.computeVertexNormals();let o=e.getAttribute("normal"),a=new Float32Array(n.count*3),c=Ae("#a9b46a"),l=Ae("#7fae4a"),h=Ae("#9a9284"),u=Ae("#6f685d");for(let f=0;f<n.count;f+=3){let p=(o.getY(f)+o.getY(f+1)+o.getY(f+2))/3,m=p>.72?t()<.6?l:c:p>.1?h:u;for(let x=0;x<3;x++)a[(f+x)*3]=m.r,a[(f+x)*3+1]=m.g,a[(f+x)*3+2]=m.b}return e.setAttribute("color",new ye(a,3)),e}function Wd(s){let t=[11,23,37,51].map(S_),e=t.map(()=>[]);De.forEach((a,c)=>e[a.kind].push(c));let n={x:0,z:0},i=new Xt,r=new we,o=[];return e.forEach((a,c)=>{let l=new Be(t[c],jr(),a.length);a.forEach((h,u)=>{let f=De[h];se(f.u,f.d,n),r.setFromAxisAngle(new C(0,1,0),f.rot-xn(f.d));let p=f.r*1.02;i.compose(new C(n.x,f.h*.18,n.z),r,new C(p,f.h*1.15,p)),l.setMatrixAt(u,i)}),l.instanceMatrix.needsUpdate=!0,l.computeBoundingSphere(),Gn(l,.035),s.add(l),o.push(l)}),o}function Xd(s,t={}){let e=t.w||512,n=t.h||256,i=document.createElement("canvas");i.width=e,i.height=n;let r=i.getContext("2d");r.fillStyle=t.bg||"#e9c48a",r.fillRect(0,0,e,n),r.strokeStyle=t.border||"#7a4a22",r.lineWidth=14,r.strokeRect(7,7,e-14,n-14),r.fillStyle=t.color||"#4a2a10",r.textAlign="center",r.textBaseline="middle";let o=t.size||72;s.forEach((c,l)=>{r.font=`${l===0?o:o*.6}px Jua, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif`,r.fillText(c,e/2,n/2+(l-(s.length-1)/2)*o*.95)});let a=new gr(i);return a.colorSpace=Ke,a.anisotropy=4,a}function qd(s,t=3.2,e=1.6,n={}){let i=new Et,r=Xd(s,n),o=new kt(O.box(t,e,.12),[Te("#8a5a32"),Te("#8a5a32"),Te("#8a5a32"),Te("#8a5a32"),new Qn({map:r,gradientMap:Te("#fff").gradientMap}),Te("#8a5a32")]);o.position.y=e/2+1,Gn(o,.04),i.add(o);for(let a of[-1,1])V(O.box(.16,1.2+e/2,.16),"#6d4424",i,[a*(t/2-.25),(1.2+e/2)/2,-.05]);return i}function Yd(s){let t=new Et,e={x:0,z:0},n=Me(-4),i="#c89a5e";for(let a=0;a<9;a++){let c=-n+.6+a*.75;se(c,-3.2,e);let l=V(O.box(.7,.14,3.2),a%2?i:"#b9884f",t,[e.x,.75,e.z],[0,-xn(-3),0],.02);l.rotation.order="YXZ"}for(let[a,c]of[[-n+.5,-4.6],[-n+.5,-1.8],[-n+6.7,-4.6],[-n+6.7,-1.8]])se(a,c,e),V(O.cyl(.18,.2,2.2,8),"#7a4c27",t,[e.x,.1,e.z]);se(-n+7,-1.2,e);let r=V(O.cyl(.22,.26,.6,10),"#5b3a1e",t,[e.x,1.1,e.z]),o=qd(["\uCD9C\uBC1C \uB098\uB8E8","\uACF5\uB3D9\uBA85\uC758 \uAE09\uB958\uD0C0\uAE30"],3.4,1.7);return se(-n-3.5,-9,e),o.position.set(e.x,Os(-9)+.1,e.z),o.rotation.y=-xn(-9)+.5,t.add(o),s.add(t),r.userData.keep=!0,Ze(t,[r]),{group:t,bollard:r}}function $d(s){let t=new Et,e={x:0,z:0},n=Ae("#f3dfa6"),i=Ae("#e2c68a"),r=Ae("#79c44a"),o=Ae("#5eae3e"),a=-80,c=80,l=He-16,h=He+110,u=64,f=60,p=(M,y)=>{let R=y-Yi(M),D=-.6+ke(-14,8,R)*1.15;return D+=ke(14,30,R)*.8+ke(30,90,R)*2.5,D+=.15*tn(M*.2+y*.13),D},m=[],x=[];for(let M=0;M<f;M++)for(let y=0;y<u;y++){let R=[[y,M],[y+1,M],[y,M+1],[y+1,M],[y+1,M+1],[y,M+1]],D=a+(y+.5)/u*(c-a),N=l+(M+.5)/f*(h-l)-Yi(D),z=N<-1?i:N<16+3*tn(D*.1)?n:N<40?r:o;for(let[G,j]of R){let q=a+G/u*(c-a),st=l+j/f*(h-l);se(q,st,e),m.push(e.x,p(q,st),e.z),x.push(z.r,z.g,z.b)}}let g=new jt;g.setAttribute("position",new Ft(m,3)),g.setAttribute("color",new Ft(x,3)),g.computeVertexNormals(),t.add(new kt(g,jr()));let d=(M,y,R,D=0,U=0)=>(se(y,R,e),M.position.set(e.x,p(y,R)+D,e.z),M.rotation.y=-xn(R)+U,t.add(M),M),v=["#d2553a","#3e78c9","#e0a43a","#3c9a5c","#c4458f"];[[-22,42],[-9,50],[7,46],[21,40],[34,54],[-34,52]].forEach(([M,y],R)=>{let D=w_(v[R%v.length]);d(D,M,He+y,-.05,(R%2?.15:-.12)-M*.01)});let _=new Et,E=Xd(["\uB3C4\uCC29!"],{w:512,h:160,bg:"#fff6dc",border:"#d2553a",color:"#d2553a",size:96});for(let M of[0,1]){let y=new kt(new Oi(9,2.4),new Qe({map:E}));y.position.set(0,5.4,M?-.02:.02),y.rotation.y=M?Math.PI:0,_.add(y)}for(let M of[-1,1])V(O.cyl(.14,.16,6.6,8),"#8a5a32",_,[M*4.8,3.3,0]),V(O.sph(.28),"#f2b62c",_,[M*4.8,6.7,0]);d(_,0,He+24);let A=["#e8483b","#f2b62c","#3a7ee6","#4fbf6a","#f08ad0"];for(let M=-6;M<=6;M++){if(M===0)continue;let y=V(O.cone(.32,.7,3),A[(M+12)%A.length],_,[M*.68,6.45-.25*Math.cos(M/6*1.5),0],[Math.PI,0,0],.015);y.scale.z=.25}for(let M=0;M<12;M++){let y=new Et;V(O.box(3,.14,.8),M%2?"#c89a5e":"#b9884f",y,[0,.9,0],[0,0,0],.02),d(y,16,He-14+M*.85,0),y.position.y=0}for(let M=0;M<4;M++)for(let y of[-1,1]){let R=V(O.cyl(.14,.16,2.2,8),"#7a4c27");d(R,16+y*1.3,He-13.5+M*3,0),R.position.y=.2}let T=qi(5);for(let M=0;M<26;M++){let y=-60+T()*120,R=30+T()*70;if(Math.abs(y)<12&&R<45)continue;let D=new Et,U=.9+T()*.8;V(O.cyl(.25*U,.35*U,2.6*U,6),"#8a5a32",D,[0,1.3*U,0]),V(O.ico(1.7*U,1),T()<.5?"#4fa83a":"#79c44a",D,[0,3.4*U,0],[T(),T(),0],.05),d(D,y,He+R)}let P=qd(["\uAE30\uC2AD \uB9C8\uC744","\uC5B4\uC11C \uC624\uC138\uC694!"],3.6,1.8);return d(P,-9,He+17,0,.25),s.add(t),Ze(t),{group:t,heightAt:p}}function w_(s){let t=new Et,e=4.2,n=3.6;V(O.box(e,2.6,n),"#f7ecd2",t,[0,1.3,0],[0,0,0],.05);let i=V(O.box(e+.6,.25,n*.62),s,t,[0,3.25,-n*.24],[.62,0,0],.05),r=V(O.box(e+.6,.25,n*.62),s,t,[0,3.25,n*.24],[-.62,0,0],.05);i.position.y=3.15,r.position.y=3.15;let o=new jt,a=new Float32Array([-n/2,0,0,n/2,0,0,0,1.15,0]);o.setAttribute("position",new ye(a,3)),o.setIndex([0,1,2]),o.computeVertexNormals();for(let c of[-1,1]){let l=new kt(o,Te("#f7ecd2",{side:an}));l.position.set(c*e/2,2.6,0),l.rotation.y=Math.PI/2,t.add(l)}return V(O.box(.9,1.6,.1),"#3e6fb6",t,[.6,.8,n/2+.03]),V(O.box(.8,.7,.1),"#9fd6f2",t,[-1.1,1.5,n/2+.03],[0,0,0],.03),V(O.box(.5,1.2,.5),"#a8452f",t,[1.2,3.6,-.6]),t}var xt=.62,de={plankA:"#cf9c60",plankB:"#c08b52",slab:"#8d5f36",log:"#7f522c",cream:"#f6ead0",post:"#86542b",roof:"#d6573b",roofDark:"#b8442d",brick:"#a8452f",door:"#2f8f83",shutter:"#3d6fb6",glass:"#a9dcf5",L:{main:"#e8483b",rug:"#e05544",wall:"#f7d6c6",dark:"#a8291f"},R:{main:"#3a7ee6",rug:"#4a86e0",wall:"#d3e5f8",dark:"#1f4fa0"},C:{main:"#f2b62c",rug:"#9ccc3a",wall:"#eef3c9",dark:"#6f9a1c"}},hn=class{constructor(t,e,n,i={}){this.obj=t,this.part=e,this.kind=n,this.state=0,this.fallDir=i.fallDir||1,this.inward=!!i.inward,this.center=i.center||new C().copy(t.position),this.weight=i.weight??1,this.anim=null,this.baseRot=t.rotation.clone(),this.keaton=i.keaton||null}};function cc(s,t,e,n,i,r={}){let o=new Et,a=(h,u,f,p)=>{u-h<.01||p-f<.01||V(O.box(u-h,p-f,e),i,o,[(h+u)/2,(f+p)/2,0],[0,0,0],.025)},c=-s/2,l=s/2;if(!n)a(c,l,0,t);else{a(c,n.x0,0,t),a(n.x1,l,0,t),a(n.x0,n.x1,0,n.y0),a(n.x0,n.x1,n.y1,t);let h=r.frame||de.shutter,u=.07,f=n.x1-n.x0,p=n.y1-n.y0,m=(n.x0+n.x1)/2,x=(n.y0+n.y1)/2,g=e/2+.02;for(let d of[-1,1])V(O.box(f+u*2,u,.06),h,o,[m,x+d*(p/2+u/2),g],[0,0,0],.015),V(O.box(u,p,.06),h,o,[m+d*(f/2+u/2),x,g],[0,0,0],.015);if(!r.door){if(r.shutters)for(let d of[-1,1]){let v=V(O.box(f/2,p,.05),h,o,[m+d*(f*.75+u),x,g+.02],[0,0,0],.015);for(let b=-1;b<=1;b++)V(O.box(f/2-.06,.025,.02),"#2c5592",v,[0,b*p*.25,.03],[0,0,0],0)}}}if(r.posts!==!1){for(let h of[-1,1])V(O.box(.14,t+.02,e+.06),de.post,o,[h*(s/2-.07),t/2,0],[0,0,0],.025);V(O.box(s,.1,e+.06),de.post,o,[0,t-.05,0],[0,0,0],.02)}return o}function lh(s,t,e=de.post){let n=new Et,i=.55;for(let r=0;r<t;r++){let o=-s/2+s*(r+.5)/t;V(O.box(.08,i,.08),e,n,[o,i/2,0],[0,0,0],.02)}return V(O.box(s,.08,.12),e,n,[0,i,0],[0,0,0],.02),n}function E_(s,t,e){let[n,i,r,o]=t;s.add(O.box(i-n,.2,o-r),de.slab,be((n+i)/2,xt-.12,(r+o)/2),.03);let a=Math.max(2,Math.round((o-r)/.42)),c=(o-r)/a;for(let h=0;h<a;h++){let u=r+c*(h+.5),f=(h+e)%2?de.plankA:de.plankB;s.add(O.box(i-n-.04,.05,c-.035),f,be((n+i)/2,xt-.02,u),0)}let l=Math.max(2,Math.round((o-r)/.9));for(let h=0;h<l;h++){let u=r+(o-r)*(h+.5)/l;s.add(O.cyl(.26,.26,i-n-.1,10),de.log,be((n+i)/2,.24,u,0,0,Math.PI/2),.03)}}function Zd(s,t,e,n,i,r,o){s.add(O.box(n,.025,i),r,be(t,xt+.012,e),0),s.add(O.box(n-.16,.03,i-.16),"#ffffff",be(t,xt+.016,e,0,0,0,1,1,1),0),s.add(O.box(n-.26,.035,i-.26),r,be(t,xt+.02,e),0);let a="#fff8ea";if(o==="L"||o==="R"){let c=o==="L"?-1:1;s.add(O.box(n*.42,.04,.16),a,be(t-c*.05,xt+.03,e),0);let l=O.cone(.24,.34,3);s.add(l,a,be(t+c*n*.24,xt+.03,e,0,0,-c*Math.PI/2,1,1,.12),0)}else s.add(O.cyl(.42,.42,.04,20),a,be(t,xt+.028,e),0),s.add(O.cyl(.3,.3,.045,20),r,be(t,xt+.03,e),0),s.add(O.cyl(.16,.16,.05,16),a,be(t,xt+.033,e),0)}function Jd(s,t,e,n,i,r,o){let a=(t+e)/2,c=(n+i)/2,l=e-t,h=i-n;s.add(O.box(l,.28,h),"#9c6a3c",be(a,xt+.14,c),.03),s.add(O.box(l-.08,.14,h-.08),"#fdfaf2",be(a,xt+.34,c),.02),o?(s.add(O.box(l*.68,.08,h-.04),r,be(a+l*.15,xt+.43,c),.02),s.add(O.box(.26,.12,h*.6),"#ffffff",be(t+.2,xt+.46,c),.02),s.add(O.box(.1,.62,h),"#9c6a3c",be(t+.05,xt+.31,c),.02)):(s.add(O.box(l-.04,.08,h*.68),r,be(a,xt+.43,c+h*.15),.02),s.add(O.box(l*.6,.12,.26),"#ffffff",be(a,xt+.46,n+.2),.02),s.add(O.box(l,.62,.1),"#9c6a3c",be(a,xt+.31,n+.05),.02))}function T_(s){let t=new Et;if(V(O.cyl(.2,.15,.32,12),"#c8643a",t,[0,.16,0],[0,0,0],.02),V(O.cyl(.21,.21,.06,12),"#a94f2c",t,[0,.31,0],[0,0,0],.015),s==="cactus")V(O.cap(.11,.35,4),"#4f9e3a",t,[0,.58,0],[0,0,0],.02),V(O.cap(.06,.12,4),"#4f9e3a",t,[.13,.62,0],[0,0,-.9],.015),V(O.sph(.06),"#ff6fa8",t,[0,.85,0],[0,0,0],.015);else{V(O.cyl(.02,.02,.5,5),"#3f8a2c",t,[0,.55,0],[0,0,0],0);for(let n=0;n<4;n++){let i=n/4*Math.PI*2;V(O.sph(.09,8,6),"#56a83e",t,[Math.cos(i)*.12,.45+n*.04,Math.sin(i)*.12],[0,0,0],.015).scale.set(1,.5,1.6)}let e=s==="sunflower"?"#ffd23a":"#ff5a5a";for(let n=0;n<6;n++){let i=n/6*Math.PI*2;V(O.sph(.06,8,6),e,t,[Math.cos(i)*.09,.82,Math.sin(i)*.09+.02],[0,0,0],.012)}V(O.sph(.06,8,6),s==="sunflower"?"#7a4a1c":"#ffe27a",t,[0,.82,.04],[0,0,0],.012)}return t}function Kd(s){let t=new Et,e=.25,n=1;switch(s){case"chair":{V(O.box(.46,.06,.46),"#c98a4a",t,[0,.45,0]);for(let i of[-1,1])for(let r of[-1,1])V(O.box(.06,.45,.06),"#8d5a2b",t,[i*.19,.22,r*.19],[0,0,0],.015);V(O.box(.46,.5,.06),"#c98a4a",t,[0,.72,-.2]),e=.28,n=1;break}case"table":{V(O.cyl(.5,.5,.07,20),"#d9a066",t,[0,.72,0]),V(O.cyl(.07,.1,.7,8),"#8d5a2b",t,[0,.36,0]),V(O.cyl(.3,.32,.05,12),"#8d5a2b",t,[0,.03,0]),V(O.sph(.11,10,8),"#ffffff",t,[.15,.85,.05],[0,0,0],.015),V(O.cyl(.08,.06,.04,8),"#3a7ee6",t,[-.18,.78,-.1],[0,0,0],.012),e=.5,n=3;break}case"pot":{V(O.cyl(.2,.18,.22,14),"#c9ccd4",t,[0,.11,0]),V(O.cyl(.21,.21,.03,14),"#aeb3bd",t,[0,.24,0],[0,0,0],.015),V(O.sph(.035,8,6),"#3b3b3b",t,[0,.28,0],[0,0,0],.01);for(let i of[-1,1])V(O.box(.1,.03,.05),"#3b3b3b",t,[i*.25,.18,0],[0,0,0],.01);e=.22,n=.6;break}case"kettle":{V(O.sph(.16,12,10),"#e0483b",t,[0,.15,0]).scale.set(1,.85,1),V(O.cone(.05,.22,8),"#e0483b",t,[.18,.2,0],[0,0,-1],.012),V(O.torus(.1,.018,6,12,Math.PI),"#3b3b3b",t,[0,.27,0],[0,0,0],0),e=.17,n=.4;break}case"barrel":{V(O.cyl(.3,.3,.75,14),"#b07a45",t,[0,.375,0]);for(let i of[.15,.6])V(O.torus(.305,.025,6,18),"#5b5b5b",t,[0,i,0],[Math.PI/2,0,0],0);e=.31,n=2.2;break}case"bucket":{V(O.cyl(.18,.14,.3,12),"#8fa7c0",t,[0,.15,0]),V(O.torus(.17,.012,5,12,Math.PI),"#5b5b5b",t,[0,.3,0],[0,0,0],0),e=.18,n=.5;break}case"stool":{V(O.cyl(.2,.2,.06,12),"#d39b5c",t,[0,.42,0]);for(let i=0;i<3;i++){let r=i/3*Math.PI*2;V(O.box(.05,.42,.05),"#8d5a2b",t,[Math.cos(r)*.12,.21,Math.sin(r)*.12],[0,0,0],.012)}e=.2,n=.6;break}case"books":{["#e8483b","#3a7ee6","#f2b62c"].forEach((r,o)=>V(O.box(.34,.08,.26),r,t,[.02*o,.04+o*.08,0],[0,o*.3,0],.012)),e=.2,n=.4;break}case"cat":{let i=V(O.cap(.12,.2,4),"#f0953a",t,[0,.16,0],[0,0,Math.PI/2]);i.name="body";let r=V(O.sph(.12,12,10),"#f0953a",t,[.22,.28,0]);r.name="head";for(let a of[-1,1])V(O.cone(.05,.1,4),"#f0953a",r,[0,.12,a*.06],[0,0,0],.01);for(let a of[-1,1])V(O.sph(.022,6,5),"#1b1410",r,[.1,.03,a*.05],[0,0,0],0);let o=V(O.cyl(.03,.025,.32,6),"#f0953a",t,[-.26,.3,0],[0,0,.6],.012);o.name="tail",e=.2,n=.5;break}default:break}for(let i of t.children)i.name&&(i.userData.keep=!0);return Ze(t),{obj:t,r:e,mass:n}}function jd(){let s=new Et,t=new Et;s.add(t);let e={},n=[],i={};for(let d of["core","L","R","C"]){let v=new Et;v.name=d,t.add(v),e[d]=v}for(let d of["core","L","R","C"]){let v=new Hs;E_(v,ln[d].rect,d==="core"?0:1),e[d].add(v.build())}let r=e.core,o={x0:-1.4,x1:1.4,z0:-2.4,z1:-.6,h:2.1},a=o.x1-o.x0,c=o.z1-o.z0;{let d=cc(a,o.h,.12,{x0:-.35,x1:.35,y0:.95,y1:1.6},de.cream,{shutters:!0});d.position.set(0,xt,o.z0+.06),r.add(d),n.push(new hn(d,"core","wall",{fallDir:-1,center:new C(0,xt+1,o.z0),weight:1.4}))}{let d=cc(a,o.h,.12,{x0:-.48,x1:.42,y0:0,y1:1.72},de.cream,{door:!0,frame:"#7a4a22"});d.position.set(0,xt,o.z1-.06),r.add(d);let v=new Et;V(O.box(.55,.5,.06),de.glass,v,[0,0,0],[0,0,0],.02),V(O.box(.62,.06,.08),de.shutter,v,[0,.28,.02],[0,0,0],.012),V(O.box(.62,.06,.08),de.shutter,v,[0,-.28,.02],[0,0,0],.012),V(O.box(.62,.16,.18),"#8d5a2b",v,[0,-.38,.1],[0,0,0],.015);for(let A=0;A<4;A++)V(O.sph(.06,8,6),A%2?"#ff5a5a":"#ffd23a",v,[-.21+A*.14,-.27,.12],[0,0,0],.01);v.position.set(.88,1.25,.06),d.add(v),n.push(new hn(d,"core","wall",{fallDir:1,center:new C(0,xt+1,o.z1),weight:.7}));let b=new Et,_=.88,E=1.7;V(O.box(_,E,.08),de.door,b,[_/2,E/2,0],[0,0,0],.025);for(let A of[.4,1.25])V(O.box(_-.18,.04,.03),"#23706a",b,[_/2,A,.05],[0,0,0],0);V(O.box(.3,.3,.04),de.glass,b,[_/2,1.3,.05],[0,0,0],.012),V(O.sph(.05,8,6),"#f2c53d",b,[_-.12,.85,.07],[0,0,0],.01),b.position.set(-.47,xt,o.z1-.02),r.add(b),i.door=b}for(let d of[-1,1]){let v=cc(c,o.h,.12,{x0:-.3,x1:.3,y0:.95,y1:1.5},de.cream,{shutters:!1,frame:de.shutter});v.rotation.y=d*Math.PI/2,v.position.set(d*(o.x1-.06),xt,(o.z0+o.z1)/2),r.add(v),V(O.box(.6,.55,.03),de.glass,v,[0,1.22,0],[0,0,0],0),n.push(new hn(v,"core","wall",{fallDir:1,center:new C(d*o.x1,xt+1,-1.5),weight:1}))}V(O.box(a-.2,.03,c-.2),"#a36f3f",r,[0,xt+.01,(o.z0+o.z1)/2],[0,0,0],0),V(O.box(.9,1.1,.4),"#b07a45",r,[-.7,xt+.55,o.z0+.35]),V(O.box(.6,.45,.04),"#f7e3b0",r,[.6,xt+1.4,o.z0+.15],[0,0,0],.02);let l=xt+o.h+1,h=c/2+.32,u=1,f=Math.atan2(u,h),p=Math.hypot(h,u)+.05;for(let d of[-1,1]){let v=new Et,b=a+.55;V(O.box(b,.12,p),de.roof,v,[0,0,d*p/2],[0,0,0],.035);let _=4;for(let E=0;E<_;E++)V(O.box(b+.02,.05,.05),de.roofDark,v,[0,.07,d*(p*(E+.6))/_],[0,0,0],0);v.position.set(0,l,(o.z0+o.z1)/2),v.rotation.x=d*f,r.add(v),n.push(new hn(v,"core","roof",{fallDir:d,center:new C(0,l-.5,(o.z0+o.z1)/2+d*.6),weight:1.2}))}let m=new jt;m.setAttribute("position",new ye(new Float32Array([-c/2,0,0,c/2,0,0,0,u,0,c/2,0,0,-c/2,0,0,0,u,0]),3)),m.computeVertexNormals();for(let d of[-1,1]){let v=new kt(m,Te(de.cream));v.position.set(d*(o.x1-.06),xt+o.h,(o.z0+o.z1)/2),v.rotation.y=Math.PI/2,r.add(v),n.push(new hn(v,"core","gable",{fallDir:d,center:new C(d*o.x1,xt+o.h+.4,-1.5),weight:.6}))}{let d=new Et;V(O.box(.42,1.05,.42),de.brick,d,[0,.52,0]),V(O.box(.52,.12,.52),"#7c2f1f",d,[0,1.08,0],[0,0,0],.02),d.position.set(.82,xt+o.h+.35,-1.2),r.add(d),i.chimney=d,n.push(new hn(d,"core","chimney",{center:new C(.82,l,-1.2),weight:1}))}{let d=new Et;V(O.box(.55,.7,.45),"#4b4f58",d,[0,.35,0]),V(O.box(.6,.05,.5),"#2c2f36",d,[0,.72,0],[0,0,0],.015),V(O.cyl(.06,.06,1.3,8),"#2c2f36",d,[.15,1.3,-.1],[0,0,0],.015),d.position.set(1.15,xt,-.3),r.add(d),n.push(new hn(d,"core","deco",{center:new C(1.15,xt,-.3),weight:.5})),i.stove=d}let x=d=>{let v=e[d],b=de[d],_=ln[d].rect,E=new Hs;if(d==="C")Zd(E,.25,2.3,2.2,1.3,b.rug,"C"),Jd(E,-1.72,-.25,2.5,3.3,"#f2b62c",!0);else{let T=d==="L"?-1:1;Zd(E,T*2.75,-.7,1.9,1.5,b.rug,d),Jd(E,T>0?3.1:-3.95,T>0?3.95:-3.1,0,1.12,b.main,!1),E.add(O.box(.4,.42,.36),"#b07a45",be(T*2.2,xt+.21,.9),.02),E.add(O.cyl(.12,.16,.22,10),d==="L"?"#ffd27a":"#bfe3ff",be(T*2.2,xt+.56,.9),.015)}v.add(E.build());let A=T_(d==="L"?"rose":d==="R"?"sunflower":"cactus");if(d==="C"?A.position.set(1.45,xt,3.05):A.position.set((d==="L"?-1:1)*3.68,xt,-1.82),v.add(A),i[`pot${d}`]=A,d!=="C"){let T=d==="L"?-1:1,P=_[1]-_[0],M=T*3.15,y=(_[0]+_[1])/2,R={x0:M-y-.45,x1:M-y+.45,y0:.85,y1:1.75},D=cc(P,2,.12,R,b.wall,{shutters:!1,frame:b.main});d==="L"?(V(O.box(.42,.34,.04),"#7a4a22",D,[.55,1.25,.08],[0,0,0],.012),V(O.box(.32,.24,.02),"#f7e3b0",D,[.55,1.25,.1],[0,0,0],0),V(O.box(.12,.12,.02),b.main,D,[.55,1.25,.11],[0,0,0],0)):(V(O.cyl(.18,.18,.05,16),"#ffffff",D,[-.55,1.35,.08],[Math.PI/2,0,0],.015),V(O.box(.02,.12,.02),"#222",D,[-.55,1.4,.11],[0,0,0],0),V(O.box(.09,.02,.02),"#222",D,[-.52,1.35,.11],[0,0,0],0)),D.position.set(y,xt,_[2]+.06),v.add(D),n.push(new hn(D,d,"wall",{fallDir:1,inward:!0,keaton:d,center:new C(y,xt+1,_[2]),weight:1.3}));for(let U of[0,1]){let N=_[2]+.25+U*1.55,z=lh(1.45,3);z.rotation.y=Math.PI/2,z.position.set(T*(Math.abs(_[0])>Math.abs(_[1])?Math.abs(_[0]):Math.abs(_[1]))-T*.06,xt,N+.72),v.add(z),n.push(new hn(z,d,"rail",{fallDir:-T,center:new C(T*3.9,xt,N+.7),weight:.6}))}}else{for(let P of[-.9,.9]){let M=lh(1.7,3);M.position.set(P,xt,_[3]-.06),v.add(M),n.push(new hn(M,"C","rail",{fallDir:1,center:new C(P,xt,3.3),weight:.6}))}for(let P of[-1,1]){let M=lh(1.6,3);M.rotation.y=Math.PI/2,M.position.set(P*1.74,xt,2.4),v.add(M),n.push(new hn(M,"C","rail",{fallDir:-P,center:new C(P*1.8,xt,2.4),weight:.5}))}let T=new Et;V(O.box(.6,1.3,.45),"#9ccc3a",T,[0,.65,0]),V(O.box(.02,1.1,.02),"#4d6e13",T,[0,.65,.235],[0,0,0],0),T.position.set(1.35,xt,1.75),v.add(T),n.push(new hn(T,"C","deco",{center:new C(1.35,xt,1.75),weight:.7}))}};x("L"),x("R"),x("C");let g=new Set([...n.map(d=>d.obj),...Object.values(i)]);for(let d of n)Ze(d.obj);for(let d in i)Ze(i[d]);for(let d in e)Ze(e[d],[...g]);return{root:s,tilt:t,parts:e,pieces:n,extras:i}}function Qd(){let s=new Et,t=1.1;V(O.box(t,.1,2.1),de.door,s,[0,.2,0],[0,0,0],.03);for(let n of[-.5,.5])V(O.box(t-.2,.03,.05),"#23706a",s,[0,.27,n],[0,0,0],0);return V(O.box(.36,.03,.36),de.glass,s,[0,.27,-.6],[0,0,0],.012),V(O.sph(.06,8,6),"#f2c53d",s,[.38,.29,.1],[0,0,0],.01),s}function lc(s,t=.38){let[e,n,i,r]=s,o=new Ms,a=.5,c=e-t,l=n+t,h=i-t,u=r+t;o.moveTo(c+a,h),o.lineTo(l-a,h),o.quadraticCurveTo(l,h,l,h+a),o.lineTo(l,u-a),o.quadraticCurveTo(l,u,l-a,u),o.lineTo(c+a,u),o.quadraticCurveTo(c,u,c,u-a),o.lineTo(c,h+a),o.quadraticCurveTo(c,h,c+a,h);let f=new Ui;f.moveTo(e+.05,i+.05),f.lineTo(e+.05,r-.05),f.lineTo(n-.05,r-.05),f.lineTo(n-.05,i+.05),f.lineTo(e+.05,i+.05),o.holes.push(f);let p=new Cr(o,6);p.rotateX(Math.PI/2);let m=new kt(p,new Qe({color:"#f4fbff",transparent:!0,opacity:.92,side:an,depthWrite:!1}));return m.position.y=.04,m.renderOrder=1,m}var A_={L:{skin:"#f1c39a",shirt:"#e8483b",pants:"#5a4636",accent:"#ffffff",hat:"cap"},R:{skin:"#f7d3b2",shirt:"#3a7ee6",pants:"#2c3e75",accent:"#ffffff",hat:"bun"},C:{skin:"#e9b98f",shirt:"#9ccc3a",pants:"#6b5a3a",accent:"#f2b62c",hat:"straw"}},hc=new C,tf=new we,R_=new C(0,-1,0),uc=class{constructor(t){this.id=t;let e=A_[t],n=new Et,i=new Et;i.scale.setScalar(1.3),n.add(i);let r=new Et;i.add(r),this.root=n,this.body=r;let o=new kt(new _s(.42,16),new Qe({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.02,n.add(o),this.shadow=o,this.legs=[];for(let g of[-1,1]){let d=new Et;d.position.set(g*.11,.4,0),V(O.cyl(.085,.08,.36,8),e.pants,d,[0,-.18,0],[0,0,0],.025),V(O.sph(.1,10,8),"#3a2a20",d,[0,-.36,.05],[0,0,0],.022).scale.set(1,.65,1.4),r.add(d),this.legs.push(d)}let a=V(O.cap(.25,.28,6),e.shirt,r,[0,.66,0],[0,0,0],.03);if(this.torso=a,t==="L")for(let g of[-1,1])V(O.box(.05,.42,.03),"#5a4636",a,[g*.12,.04,.24],[.1,0,0],0);else t==="R"?(V(O.torus(.17,.045,6,14),"#ffffff",a,[0,.24,.02],[Math.PI/2,0,0],.012),V(O.cyl(.29,.34,.22,14),e.shirt,r,[0,.42,0],[0,0,0],.025)):(V(O.box(.36,.06,.02),"#f2b62c",a,[0,0,.25],[0,0,0],0),V(O.box(.36,.06,.02),"#f2b62c",a,[0,-.12,.25],[0,0,0],0));let c=new Et;c.position.set(0,1.02,0),r.add(c),this.head=c,this.skinMat=zd(e.skin),this.skinBase=new bt(e.skin);let l=new kt(O.sph(.34,18,14),this.skinMat);l.position.y=.24,Gn(l,.03),c.add(l);for(let g of[-1,1]){let d=new kt(O.sph(.07,8,6),this.skinMat);d.position.set(g*.33,.22,0),Gn(d,.015),c.add(d)}let h=new kt(O.sph(.06,10,8),this.skinMat);h.position.set(0,.2,.34),h.scale.set(1,.85,1),Gn(h,.015),c.add(h),this.eyes=[];for(let g of[-1,1]){let d=new Et;d.position.set(g*.125,.28,.285);let v=V(O.sph(.085,12,10),"#ffffff",d,[0,0,0],[0,0,0],.014);v.scale.set(.9,1.2,.55);let b=V(O.sph(.048,10,8),"#1b1410",d,[0,-.01,.04],[0,0,0],0);b.scale.set(1,1.2,.6);let _=V(O.torus(.035,.009,4,14,Math.PI*1.6),"#1b1410",d,[0,0,.05],[0,0,0],0);_.visible=!1;let E=V(O.sph(.09,12,6),e.skin,d,[0,.01,.005],[0,0,0],0);E.scale.set(.95,1.2,.6),E.visible=!1,this.eyes.push({g:d,white:v,pupil:b,spiral:_,lid:E,side:g})}this.brows=[];for(let g of[-1,1]){let d=V(O.box(.15,.035,.04),t==="L"?"#e8e3da":"#3a2a20",c,[g*.13,.42,.29],[0,0,0],0);this.brows.push({m:d,side:g})}let u=.1,f=.31;this.mouths={smile:V(O.torus(.075,.02,6,14,Math.PI),"#5a1f1a",c,[0,u+.03,f],[0,0,Math.PI],0),frown:V(O.torus(.065,.02,6,14,Math.PI),"#5a1f1a",c,[0,u-.03,f],[0,0,0],0),open:V(O.sph(.075,12,10),"#5a1f1a",c,[0,u,f-.02],[0,0,0],.012),grit:V(O.box(.17,.065,.04),"#ffffff",c,[0,u,f],[0,0,0],.014),smirk:V(O.torus(.06,.018,6,12,Math.PI*.7),"#5a1f1a",c,[.03,u+.02,f],[0,0,Math.PI+.3],0)},this.mouths.open.scale.set(1,1.1,.5);let p=V(O.box(.17,.008,.01),"#1b1410",this.mouths.grit,[0,0,.022],[0,0,0],0);this.mouth="smile",this.cheeks=[];for(let g of[-1,1]){let d=new kt(new _s(.06,12),new Qe({color:"#ff6b6b",transparent:!0,opacity:0}));d.position.set(g*.2,.16,.3),d.rotation.y=g*.55,c.add(d),this.cheeks.push(d)}if(e.hat==="cap"){V(O.cyl(.31,.33,.16,16),"#c7352b",c,[0,.5,-.02],[-.12,0,0],.025),V(O.box(.46,.04,.26),"#c7352b",c,[0,.45,.29],[-.15,0,0],.02),V(O.sph(.05,8,6),"#ffffff",c,[0,.6,-.04],[0,0,0],.01);for(let g of[-1,1])V(O.cap(.04,.12,4),"#f4f1ea",c,[g*.08,.15,.33],[0,0,g*1.2],.012)}else if(e.hat==="bun"){let g=new zn(.36,18,8,0,Math.PI*2,0,Math.PI*.3);V(g,"#8a6a9a",c,[0,.24,0],[0,0,0],.025);let d=new zn(.365,18,10,Math.PI,Math.PI,0,Math.PI*.62);V(d,"#8a6a9a",c,[0,.24,0],[0,0,0],.025),V(O.sph(.17,12,10),"#8a6a9a",c,[0,.66,-.12],[0,0,0],.025),V(O.torus(.09,.025,6,12),"#ff7aa8",c,[0,.62,-.08],[Math.PI/2.4,0,0],.01);for(let v of[-1,1])V(O.sph(.035,8,6),"#ffffff",c,[v*.34,.14,.04],[0,0,0],.01);for(let v of[-1,1])V(O.torus(.075,.012,6,16),"#3b2a4a",c,[v*.125,.28,.335],[0,0,0],0)}else V(O.cyl(.62,.62,.05,22),"#f1d27a",c,[0,.5,0],[0,0,0],.025),V(O.cyl(.3,.33,.24,16),"#f1d27a",c,[0,.62,0],[0,0,0],.025),V(O.cyl(.335,.335,.07,16),"#3f8a2c",c,[0,.54,0],[0,0,0],0),V(O.sph(.09,8,6),"#7a5a3a",c,[0,.08,.31],[0,0,0],.012).scale.set(1.4,.6,.6);this.arms=[];for(let g of[-1,1]){let d=new Et;d.position.set(g*.3,.86,0);let v=V(O.cyl(.07,.065,.42,8),e.shirt,d,[0,-.21,0],[0,0,0],.022),b=new kt(O.sph(.085,10,8),this.skinMat);b.position.y=-.46,Gn(b,.018),d.add(b),r.add(d),this.arms.push({pivot:d,hand:b,side:g,target:new C(g*.32,.38,.05)})}this.saw=I_(),this.saw.visible=!1,this.arms[1].hand.add(this.saw),this.hanky=V(O.box(.26,.26,.01),"#ffffff",null,[0,0,0],[0,0,0],.01),this.hanky.visible=!1,this.arms[1].hand.add(this.hanky),this.hanky.position.set(0,-.12,0),this.stars=new Et;for(let g=0;g<3;g++){let d=V(O.ico(.07,0),"#ffd23a",this.stars,[0,0,0],[0,0,0],.012);d.userData.a=g/3*Math.PI*2}this.stars.position.y=.75,this.stars.visible=!1,c.add(this.stars),this.anger=0,this.time=Math.random()*10;let m=c.children.filter(g=>g.isMesh&&g.material===this.skinMat),x=C_(m,this.skinMat);c.add(x);for(let g of m)c.remove(g);for(let g of this.legs)Ze(g);Ze(c,[...this.eyes.map(g=>g.g),...this.brows.map(g=>g.m),...Object.values(this.mouths),...this.cheeks,this.stars]),Ze(r,[c,...this.arms.map(g=>g.pivot),...this.legs]),Ze(this.saw)}setMouth(t){if(this.mouth!==t){this.mouth=t;for(let e in this.mouths)this.mouths[e].visible=e===t}}aimArm(t,e){hc.copy(e).sub(t.pivot.position);let n=hc.length();if(n<1e-4)return;hc.divideScalar(n),tf.setFromUnitVectors(R_,hc),t.pivot.quaternion.slerp(tf,.5);let i=Math.min(1.25,Math.max(.6,n/.46));t.pivot.scale.y+=(i-t.pivot.scale.y)*.4}setFace({brow:t=0,browTilt:e=0,mouth:n="smile",eyes:i="open",look:r=null,anger:o=0,blush:a=0,pupil:c=1}){for(let l of this.brows)l.m.rotation.z=l.side*-t*.9+e*(l.side>0?1:0),l.m.position.y=.42+Math.max(0,t)*.05+(e&&l.side>0?.04:0);this.setMouth(n);for(let l of this.eyes){l.spiral.visible=i==="spiral",l.pupil.visible=i!=="spiral",l.lid.visible=i==="narrow"||i==="closed",l.lid.position.y=i==="closed"?-.01:.05,l.white.scale.y=i==="wide"?1.45:1.2;let h=i==="wide"?.65:c;l.pupil.scale.set(h,1.2*h,.6),r&&(l.pupil.position.x=r.x*.025,l.pupil.position.y=-.01+r.y*.02),l.spiral.visible&&(l.spiral.rotation.z+=.3)}this.anger+=(o-this.anger)*.08,this.skinMat.color.copy(this.skinBase).lerp(new bt("#ff5a3c"),this.anger*.75);for(let l of this.cheeks)l.material.opacity+=(a-l.material.opacity)*.1,l.visible=l.material.opacity>.03}};function C_(s,t){let e=s.map(a=>{a.updateMatrix();let c=a.geometry.clone();return c.getAttribute("uv")&&c.deleteAttribute("uv"),c.applyMatrix4(a.matrix),c.index?c.toNonIndexed():c}),n=ks(e,!1),i=new kt(n,t);i.userData.keep=!0;let r=s.map(a=>{let c=a.children.find(x=>x.userData.isOutline),l=ac(a.geometry).clone(),h=c?c.material.uniforms.uThick.value:.02,u=l.getAttribute("position"),f=l.getAttribute("normal");for(let x=0;x<u.count;x++)u.setXYZ(x,u.getX(x)+f.getX(x)*h,u.getY(x)+f.getY(x)*h,u.getZ(x)+f.getZ(x)*h);l.applyMatrix4(a.matrix);let p=new jt,m=l.index?l.toNonIndexed():l;return p.setAttribute("position",m.getAttribute("position")),p.setAttribute("normal",m.getAttribute("normal")),p}),o=new kt(ks(r,!1),zs(0));return o.userData.isOutline=!0,i.add(o),i}function I_(){let s=new Et,t=new Et;V(O.box(.07,.55,.012),"#d7dde5",t,[0,-.32,0],[0,0,0],.01);for(let e=0;e<9;e++){let n=V(O.cone(.02,.04,3),"#b6bec9",t,[.045,-.08-e*.055,0],[0,0,-Math.PI/2],0);n.scale.z=.3}return s.add(t),V(O.box(.12,.16,.05),"#a2602e",s,[0,-.02,0],[0,0,0],.015),s.rotation.x=Math.PI/2,s.position.set(0,-.04,.02),s.userData.blade=t,s}var dc=[[0,[.32,.05,.42],[.28,2.2,.28]],[.24,[.8,-.3,1.65],[-.15,1.85,.15]],[.37,[.7,-1.02,1.6],[-.1,1.3,.32]],[.7,[-.62,-.95,.92],[.25,1.38,.05]],[.84,[-.75,-.25,.78],[.3,1.78,.05]],[1,[.32,.05,.42],[.28,2.2,.28]]];function ef(s,t,e,n,i){let r=0;for(;r<dc.length-2&&s>dc[r+1][0];)r++;let[o,a,c]=dc[r],[l,h,u]=dc[r+1],f=ke(0,1,(s-o)/(l-o)),p=(m,x)=>Le(m,x,f);n.set(p(a[0],h[0])*t,p(a[1],h[1]),p(a[2],h[2])),i.set(p(c[0],u[0])*t,p(c[1],u[1]),p(c[2],u[2])),e!==1&&(n.z*=e,n.x*=e,n.y<0&&(n.y*=e))}var hh=new C,fc=new C,uh=new C,nf=new C,sf=new C,Zi=new C,pc=class{constructor(t,e,n){this.id=t,this.def=si[t],this.house=e,this.hooks=n,this.ch=new uc(t),e.parts[this.def.room].add(this.ch.root),this.ch.root.position.set(this.def.x,xt,this.def.z),this.pos=new ut(this.def.x,this.def.z),this.facing=Math.atan2(-this.def.x,2-this.def.z),this.ch.root.rotation.y=this.facing,this.stroke=null,this.throwAnim=0,this.catchAnim=0,this.appeaseAnim=0,this.shock=0,this.shockAt=null,this.cheer=0,this.bonk=0,this.keatonT=0,this.t=Math.random()*5,this.lastLine=-10,this.steamT=0,this.sawT=0,this.pose="idle",this.forced=null,this.holdingPaddle=!1,this.paddleTip=new C,this.paddleGrip=new C,this.strokeSide=new ut(-1,0),this.kneel=0,this.wave=0,this.prevStage=0,this.lookTarget=null,this.pointAt=null,this.splashed={entry:!1,exit:!1}}get root(){return this.ch.root}onStroke(t,e){this.stroke={t:0,dur:t.big?.62:.52,big:t.big,dir:t.dir,power:t.power},this.splashed.entry=!1,this.splashed.exit=!1,t.big&&(this.catchAnim=.12)}onThrow(){this.throwAnim=.3,this.stroke=null}onCatch(){this.catchAnim=.16}onAppease(){this.appeaseAnim=1.4}onShock(t){this.shock=1.6,this.shockAt=t}onCheer(t=1.2){this.cheer=t}onBonk(){this.bonk=1.2}onKeaton(){this.keatonT=1.6}update(t,e,n){let i=e.owners[this.id],r=this.ch;this.t+=t,r.time+=t;let o=this.t,a=e.paddle.holder===this.id&&i.state==="aboard",c=e.paddle.flight,l=c&&c.to===this.id;this.holdingPaddle=a,this.throwAnim=Math.max(0,this.throwAnim-t),this.catchAnim=Math.max(0,this.catchAnim-t),this.appeaseAnim=Math.max(0,this.appeaseAnim-t),this.shock=Math.max(0,this.shock-t),this.cheer=Math.max(0,this.cheer-t),this.bonk=Math.max(0,this.bonk-t),this.keatonT=Math.max(0,this.keatonT-t);let h="idle";this.forced?h=this.forced:i.state==="gone"?h="farewell":i.state==="overboard"?h="swim":i.sawing?h="sawing":i.dizzy>.4?h="dizzy":this.bonk>0?h="bonk":i.flinch>.25?h="flinch":a?h="paddle":l?h="catchReady":this.throwAnim>0?h="throw":this.shock>0?h="shock":this.cheer>0?h="cheer":i.stage>=Nn.SAW?h="saw":i.stage===Nn.STEAMING?h="steam":i.stage===Nn.ANNOYED&&(h="annoyed"),this.pose=h;let u=this.def.x,f=this.def.z,p=n.views[e.paddle.holder],m=Math.atan2(0-this.def.x,2.2-this.def.z);this.def.room==="C"&&(m=Math.atan2(-.3,1));let x=N=>{if(!N||N===this)return;let z=N.localPosIn(this.def.room,this.house,Zi);m=Math.atan2(z.x-this.pos.x,z.z-this.pos.y)},g=this.house.side;if(h==="paddle"){let N=this.stroke?this.stroke.dir:e.strokeDir(this.id);this.computeStrokeSide(N,e),this.id==="C"?N<0?(u=-1.2,f=2.75):N>0?(u=1.15,f=2.75):(u=.2,f=2.95):u=this.def.x+Math.sign(this.def.x)*.25,m=Math.atan2(this.strokeSide.x,this.strokeSide.y)}else if(h==="sawing"){let N=It(i.cut,0,1);if(this.id==="C")u=Le(-1.55,1.55,N),f=1.78,m=Math.PI;else{let z=Math.sign(this.def.x);u=z*1.98,f=Le(-1.95,1,N),m=-z*Math.PI/2}}else if(h==="annoyed"||h==="steam"||h==="catchReady")x(h==="catchReady"?n.views[c.from]:p),h==="annoyed"&&Math.sin(o*.7+this.def.x)>.75&&(m+=1.4*Math.sign(this.def.x||1));else if(h==="saw")this.id==="C"?m=Math.PI*.9:m=-Math.sign(this.def.x)*Math.PI*.4;else if(h==="shock"&&this.shockAt){let N=this.house.toPartLocal(this.def.room,this.shockAt,Zi);m=Math.atan2(N.x-this.pos.x,N.z-this.pos.y)}else h==="throw"&&c?x(n.views[c.to]):h==="farewell"?(m=Math.atan2(.2,1),u=this.id==="C"?.2:this.def.x*.85,f=this.id==="C"?2.3:-.6):h==="dizzy"&&(m+=o*3);e.house.door&&i.state==="aboard"&&(u=0,f=.25),this.forcedPos&&(u=this.forcedPos.x,f=this.forcedPos.z),this.forced&&this.forcedFace!==void 0&&this.forcedFace!==null&&(m=this.forcedFace),this.pos.x=ze(this.pos.x,u,h==="sawing"?10:7,t),this.pos.y=ze(this.pos.y,f,h==="sawing"?10:7,t),this.facing=yd(this.facing,m,h==="dizzy"?20:9,t),r.root.position.x=this.pos.x,r.root.position.z=this.pos.y,r.root.rotation.y=this.facing;let d=r.body,v=0,b=0,_=Math.sin(o*2.2)*.012,E=1;this.kneel=ze(this.kneel,h==="sawing"?1:0,8,t);let A=this.house;b=-A.rollNow*.6,v=A.pitchNow*.5,h==="flinch"&&(v-=.25,E=.9),h==="bonk"&&(E=.55+.45*ke(.2,1.2,1.2-this.bonk)),h==="steam"&&(_+=Math.abs(Math.sin(o*9))*.06),h==="cheer"&&(_+=Math.abs(Math.sin(o*8))*.18),h==="dizzy"&&(b+=Math.sin(o*5)*.25,v+=Math.cos(o*5)*.15),h==="farewell"&&(_+=Math.abs(Math.sin(o*3))*.05),h==="swim"&&(_=Math.sin(o*3)*.08-.5);let T=-1;if(h==="paddle"&&this.stroke&&(this.stroke.t+=t,T=this.stroke.t/this.stroke.dur,T>=1&&(this.stroke=null,T=-1)),T>=0){let N=this.stroke.big?1.45:1,z=Math.sin(It(T/.45,0,1)*Math.PI*.5)*(1-ke(.45,.85,T));v+=z*.55*N-ke(.4,.75,T)*(1-ke(.75,1,T))*.15*N,_-=z*.08*N}this.catchAnim>0&&(E*=1+Math.sin(this.catchAnim/.16*Math.PI)*.12),d.position.y=_-this.kneel*.32,d.rotation.x=ze(d.rotation.x,v+this.kneel*.35,12,t),d.rotation.z=ze(d.rotation.z,b,8,t),d.scale.y=ze(d.scale.y,E,18,t),d.scale.x=d.scale.z=1+(1-d.scale.y)*.5;for(let[N,z]of r.legs.entries())z.rotation.x=-this.kneel*1.3*(N?1:.7),h==="steam"&&(z.rotation.x=Math.max(0,Math.sin(o*9+N*Math.PI))*-.5),h==="annoyed"&&N===1&&(z.rotation.x=Math.max(0,Math.sin(o*7))*-.25),(h==="cheer"||h==="farewell")&&(z.rotation.x=Math.sin(o*8+N*Math.PI)*.2);let[P,M]=r.arms,y=P.target,R=M.target;y.set(-.34,.42,.06),R.set(.34,.42,.06),y.y+=Math.sin(o*2.2)*.02,R.y+=Math.sin(o*2.2+1)*.02,r.saw.visible=h==="saw"||h==="sawing"||this.appeaseAnim>.6,r.hanky.visible=h==="farewell";let D=0,U=0;switch(h){case"paddle":{this.paddlePose(T,e),uh.copy(this.paddleGrip).sub(this.paddleTip).normalize(),nf.copy(this.paddleTip).addScaledVector(uh,1.45),sf.copy(this.paddleTip).addScaledVector(uh,1.85),this.ownerToBody(nf,y),this.ownerToBody(sf,R),U=T>=0?.25:.05;break}case"catchReady":y.set(-.25,1.35,.2),R.set(.25,1.35,.2),U=-.3;break;case"throw":{let N=this.throwAnim/.3;R.set(.3,.9+(1-N)*.5,-.3+(1-N)*.9),y.set(-.25,.7,.4);break}case"annoyed":y.set(.12,.78,.26),R.set(-.12,.72,.28),U=.08;break;case"steam":{let N=Math.sin(o*22)*.05,z=Math.sin(o*1.3+this.def.x)>.2;y.set(-.25,1.15+N,.25),z&&p&&p!==this?R.set(.1,.95+N,.8):R.set(.25,1.15-N,.25),U=-.05,this.steamT-=t,this.steamT<=0&&(this.steamT=.32,n.fx.steam(this.headWorld(Zi),i.stage>=2?1:.6));break}case"saw":{let N=Math.sin(o*2.4);R.set(.32,.72+N*.05,.42),y.set(.1+Math.max(0,N)*.1,.78,.5),r.saw.rotation.set(Math.PI/2+.4+N*.15,0,-.3),U=.45,D=Math.sin(o*.9)*.3,Math.sin(o*.9)>.97&&this.steamT<=0&&(this.steamT=1.5,n.audio?.sawTwang?.()),this.steamT-=t;break}case"sawing":{let N=Math.sin(o*17);R.set(.15+N*.05,.45,.55+N*.18),y.set(-.1,.42,.5+N*.18),r.saw.rotation.set(Math.PI/2+.9,0,0),U=.55,this.sawT-=t,this.sawT<=0&&(this.sawT=.09,n.fx.sawdust(this.handWorld(1,Zi)));break}case"dizzy":y.set(-.6,.65+Math.sin(o*6)*.2,.1),R.set(.6,.65-Math.sin(o*6)*.2,.1),D=Math.sin(o*4)*.4;break;case"flinch":case"bonk":y.set(-.2,1.25,.25),R.set(.2,1.25,.25),U=.3;break;case"shock":y.set(-.5,.95,.25),R.set(.15,.95,.85);break;case"cheer":y.set(-.35,1.45,.1+Math.sin(o*8)*.1),R.set(.35,1.45,.1-Math.sin(o*8)*.1),U=-.25;break;case"farewell":{let N=Math.sin(o*7);R.set(.35+N*.18,1.5,.15),y.set(-.32,.55,.05),U=-.1,D=Math.sin(o*1.3)*.2;break}case"swim":{let N=Math.sin(o*6);y.set(-.5,.9+N*.3,.3),R.set(.5,.9-N*.3,.3);break}case"hug":y.set(-.25,.75,.55),R.set(.25,.75,.55);break;case"point":{R.set(.25,1.1,.7),y.set(-.3,.6,.15),U=-.1;break}case"handshake":R.set(.15,.6,.6+Math.sin(o*10)*.05);break;case"flag":R.set(.25,1.5,.15),y.set(-.25,1.2,.2),U=-.3;break;default:{D=Math.sin(o*.6+this.def.x)*.25,U=-.05;let N=e.house,z=this.def.side;z&&N.vu*z>2.2&&!a&&(R.set(.3,1.3,.1),U=-.2);break}}this.appeaseAnim>0&&h!=="paddle"&&R.set(.3,.5,-.35),r.aimArm(P,y),r.aimArm(M,R),r.head.rotation.y=ze(r.head.rotation.y,D,8,t),r.head.rotation.x=ze(r.head.rotation.x,U,8,t),this.updateFace(h,i,a,T,o),r.stars.visible=h==="dizzy"||h==="bonk",r.stars.visible&&r.stars.children.forEach((N,z)=>{let G=N.userData.a+o*4;N.position.set(Math.cos(G)*.38,Math.sin(o*6+z)*.04,Math.sin(G)*.38),N.rotation.y+=t*5}),T>=0&&(!this.splashed.entry&&T>.36&&(this.splashed.entry=!0,n.fx.paddleSplash(this.paddleTipWorld(Zi),this.stroke.big?1.4:.8),n.audio?.splash(this.stroke.big?.9:.45,this.def.side)),T>.4&&T<.72&&Math.random()<.5&&n.fx.drip(this.paddleTipWorld(Zi)),!this.splashed.exit&&T>.8&&(this.splashed.exit=!0,n.fx.paddleSplash(this.paddleTipWorld(Zi),this.stroke.big?.9:.4)))}updateFace(t,e,n,i,r){let o=this.ch,a=Math.sin(r*1.7+this.def.x*3)>.985?"closed":"open",c={brow:0,mouth:"smile",eyes:a,anger:0,blush:0,pupil:1};switch(t){case"paddle":c={brow:.2,mouth:i>=0&&i<.7?"open":"smile",eyes:i>=.2&&i<.6?"narrow":a,anger:0,blush:.2};break;case"catchReady":c={brow:.4,mouth:"open",eyes:"wide",anger:0,blush:.4};break;case"throw":c={brow:-.1,mouth:"grit",eyes:a,anger:0};break;case"annoyed":c={brow:-.45,mouth:"frown",eyes:Math.sin(r*.7+this.def.x)>.75?"closed":"narrow",anger:.15,blush:0};break;case"steam":c={brow:-.75,mouth:"grit",eyes:"open",anger:.85,pupil:.7};break;case"saw":c={brow:-.5,browTilt:.5,mouth:"smirk",eyes:"narrow",anger:.35};break;case"sawing":c={brow:-.6,mouth:Math.sin(r*4)>0?"grit":"smirk",eyes:"narrow",anger:.4};break;case"dizzy":c={brow:.4,mouth:"open",eyes:"spiral",anger:0,blush:.5};break;case"flinch":c={brow:.6,mouth:"open",eyes:"closed",anger:0};break;case"bonk":c={brow:.3,mouth:"frown",eyes:"spiral",anger:0};break;case"shock":c={brow:.8,mouth:"open",eyes:"wide",anger:0};break;case"cheer":case"flag":c={brow:.4,mouth:"open",eyes:"closed",anger:0,blush:.6};break;case"farewell":c={brow:.3,mouth:"smile",eyes:"closed",anger:0,blush:.7};break;case"swim":c={brow:.6,mouth:"open",eyes:"wide",anger:0};break;case"hug":c={brow:.5,mouth:"smile",eyes:"closed",anger:0,blush:.8};break;case"point":c={brow:-.3,mouth:"open",eyes:"open",anger:.3};break;default:e.stage===0&&e.sulk<.15&&(c.blush=.25);break}this.keatonT>0&&(c={brow:.1,mouth:"frown",eyes:this.keatonT>1.2||this.keatonT<.9&&this.keatonT>.75?"closed":"wide",anger:0}),this.appeaseAnim>0&&t!=="paddle"&&(c={brow:.4,mouth:"smile",eyes:"closed",anger:0,blush:.9}),o.setFace(c)}computeStrokeSide(t,e){this.id==="L"?this.strokeSide.set(-1,.15):this.id==="R"?this.strokeSide.set(1,.15):t<0?this.strokeSide.set(-1,.35):t>0?this.strokeSide.set(1,.35):this.strokeSide.set(0,1),this.strokeSide.normalize()}paddlePose(t,e){let n=this.strokeSide.x<0?-1:1,i=this.stroke&&this.stroke.big?1.25:1;t<0?(ef(0,n,1,hh,fc),fc.x+=Math.sin(this.t*1.5)*.05):ef(t,n,i,hh,fc),this.paddleTip.copy(hh),this.paddleGrip.copy(fc)}ownerToBody(t,e){return e.copy(t).multiplyScalar(1/1.3),e.y-=this.ch.body.position.y,e}localPosIn(t,e,n){return n.set(this.pos.x,0,this.pos.y),n}headWorld(t){return this.ch.head.updateWorldMatrix(!0,!1),t.set(0,.62,0).applyMatrix4(this.ch.head.matrixWorld)}chestWorld(t){return this.ch.body.updateWorldMatrix(!0,!1),t.set(0,.8,0).applyMatrix4(this.ch.body.matrixWorld)}handWorld(t,e){let n=this.ch.arms[t].hand;return n.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(n.matrixWorld)}paddleTipWorld(t){return this.ch.root.updateWorldMatrix(!0,!1),t.copy(this.paddleTip).applyMatrix4(this.ch.root.matrixWorld)}paddleGripWorld(t){return this.ch.root.updateWorldMatrix(!0,!1),t.copy(this.paddleGrip).applyMatrix4(this.ch.root.matrixWorld)}};var P_=[["table","core",0,.45],["chair","core",-.85,.55],["chair","core",.85,.85],["barrel","core",-1.15,1.05],["pot","core",.55,-.2],["kettle","core",-.6,-.25],["cat","core",.4,1.15],["stool","L",-2.4,-1.6],["bucket","L",-2.1,0],["pot","R",2.3,-1.6],["books","R",2.2,.1],["stool","C",.9,1.9]],L_=[{part:"core",r:[-1.42,1.42,-2.42,-.58]},{part:"core",r:[.86,1.44,-.54,-.06]},{part:"L",r:[-3.97,-3.08,-.02,1.14]},{part:"R",r:[3.08,3.97,-.02,1.14]},{part:"L",r:[-2.42,-1.98,.7,1.1]},{part:"R",r:[1.98,2.42,.7,1.1]},{part:"C",r:[-1.74,-.23,2.48,3.32]},{part:"C",r:[1.03,1.67,1.5,2]}],ne=new C,dh=new C,D_=new we,Vs={x:0,z:0},mc=class{constructor(t,e,n,i){this.scene=t,this.fx=e,this.audio=n,this.ui=i,this.build()}build(){let t=jd();this.root=t.root,this.tilt=t.tilt,this.tilt.rotation.order="YXZ",this.parts=t.parts,this.pieces=t.pieces,this.extras=t.extras;for(let e of this.pieces)e.obj.rotation.order="YXZ";this.scene.add(this.root),this.side=0,this.rollNow=0,this.pitchNow=0,this.present=new Set(["core","L","R","C"]),this.skirts={};for(let e of["core","L","R","C"]){let n=lc(ln[e].rect);this.root.add(n),this.skirts[e]=n}this.props=P_.map(([e,n,i,r])=>{let o=Kd(e);return this.tilt.add(o.obj),o.obj.position.set(i,xt,r),{kind:e,obj:o.obj,r:o.r,mass:o.mass,x:i,z:r,vx:0,vz:0,y:0,vy:0,rot:Math.random()*6,spin:0,part:n,alive:!0,lean:0}}),this.views={};for(let e of Sn)this.views[e]=new pc(e,this,{fx:this.fx,audio:this.audio});this.cuts={};for(let e of["L","R","C"])this.cuts[e]=this.buildCutLine(e);this.smokeT=0,this.floaterViews=new Map,this.debris=[],this.doorRaft=null,this.mooring=null,this.critical=0,this.trembleT=0}buildCutLine(t){let n=O.box(.16,.02,.05),i=new Be(n,new Qe({color:"#ffffff"}),16),r=new Be(O.box(.2,.03,.09),new Qe({color:"#2a1a10"}),16),o=new Xt,a=new we,c=[];for(let u=0;u<16;u++){let f=(u+.5)/16,p,m,x;t==="C"?(p=Le(-1.8,1.8,f),m=1.4,x=0):(p=t==="L"?-1.6:1.6,m=Le(-2.2,1.2,f),x=Math.PI/2),a.setFromAxisAngle(new C(0,1,0),x),o.compose(new C(p,xt+.012,m),a,new C(1,1,1)),i.setMatrixAt(u,o),r.setMatrixAt(u,o),c.push(new C(p,xt,m))}i.count=0,r.count=0,this.tilt.add(i),this.tilt.add(r);let l=new Et;V(O.cyl(.02,.02,.5,5),"#333",l,[0,.25,0],[0,0,0],0);let h=V(O.box(.24,.16,.02),"#ff3b3b",l,[.12,.42,0],[0,0,0],.01);return l.position.copy(c[0]),l.visible=!1,this.tilt.add(l),{white:i,black:r,n:16,pts:c,marker:l,shown:0}}update(t,e,n){let i=e.house;se(i.u,i.d,Vs);let r=sh(i.u,i.d);this.root.position.set(Vs.x,r*.85,Vs.z),this.root.rotation.y=-(xn(i.d)+i.psi);let o=e.hp;this.critical=i.door?0:It((.35-o)/.35,0,1),this.trembleT+=t;let a=this.critical*.012*Math.sin(this.trembleT*37),c=(1-Math.max(0,o))*.05*(i.door?0:1);this.rollNow=i.roll+c+a,this.pitchNow=i.pitch+(1-Math.max(0,o))*.02,this.tilt.rotation.x=-this.pitchNow,this.tilt.rotation.z=-this.rollNow,this.tilt.position.y=i.heave+(i.door?-.25:0),this.side=Math.sign(i.u);for(let l in this.skirts){let h=this.skirts[l];if(!h.visible)continue;let u=1+.02*Math.sin(e.time*5+l.length);h.scale.set(u,1,u),h.material.opacity=.75+.2*Math.sin(e.time*3.3),h.position.y=.04-r*.15}this.smokeT-=t,this.smokeT<=0&&this.extras.chimney&&this.extras.chimney.parent===this.parts.core&&!i.door&&(this.smokeT=.45,this.extras.chimney.updateWorldMatrix(!0,!1),ne.set(0,1.25,0).applyMatrix4(this.extras.chimney.matrixWorld),this.fx.smoke(ne));for(let l of Sn)this.views[l].update(t,e,n);this.updateCutLines(e),this.updateProps(t,e),this.updatePieces(t,e),this.updateFloaters(t,e),this.updateDebris(t,e),this.mooring&&this.updateMooring(t,e)}updateCutLines(t){for(let e of["L","R","C"]){let n=this.cuts[e],i=t.owners[e];if(i.state!=="aboard"){n.white.count=0,n.black.count=0,n.marker.visible=!1;continue}let r=i.stage>=3||i.cut>0;n.white.count=r?n.n:0,n.marker.visible=r&&!i.sawing,n.black.count=Math.floor(It(i.cut,0,1)*n.n),n.marker.visible&&(n.marker.rotation.y=Math.sin(t.time*6)*.3)}}updateProps(t,e){let n=e.house;if(n.door)return;let i=Math.sin(n.psi),r=Math.cos(n.psi),o=r*n.accU-i*n.accD,a=-(i*n.accU+r*n.accD),c=It(-o*.5,-22,22),l=It(-a*.5,-22,22),h=n.omega*n.omega*.45,u=9.8*Math.sin(this.rollNow)*1.1,f=-9.8*Math.sin(this.pitchNow)*1.1,p=this.props.filter(m=>m.alive&&m.obj.parent===this.tilt);for(let m of p){let x=u+c+m.x*h,g=f+l+m.z*h,d=Math.hypot(m.vx,m.vz),v=Math.hypot(x,g);if(d<.05&&v<1.2&&m.y<=0)m.vx=0,m.vz=0;else{if(m.y<=0&&d>0){let _=Math.min(d/t,1.4);x-=m.vx/d*_,g-=m.vz/d*_}m.vx+=x*t,m.vz+=g*t}m.x+=m.vx*t,m.z+=m.vz*t,(m.y>0||m.vy>0)&&(m.vy-=18*t,m.y+=m.vy*t,m.y<=0&&(m.y=0,m.vy<-2.5&&this.audio?.clatter(m.kind,Math.min(1,-m.vy/8)),m.vy=0,m.spin*=.4)),m.rot+=m.spin*t,m.spin*=Math.exp(-t*1.5);for(let _ of L_)this.present.has(_.part)&&this.pushOutRect(m,_.r);for(let _ of Sn){let E=this.views[_];e.owners[_].state==="aboard"&&this.pushOutCircle(m,E.pos.x,E.pos.y,.3,e,_)}this.keepOnDeck(m,e)}for(let m=0;m<p.length;m++)for(let x=m+1;x<p.length;x++){let g=p[m],d=p[x],v=d.x-g.x,b=d.z-g.z,_=g.r+d.r,E=v*v+b*b;if(E>=_*_||E<1e-6)continue;let A=Math.sqrt(E),T=v/A,P=b/A,M=_-A,y=1/g.mass,R=1/d.mass;g.x-=T*M*(y/(y+R)),g.z-=P*M*(y/(y+R)),d.x+=T*M*(R/(y+R)),d.z+=P*M*(R/(y+R));let D=(d.vx-g.vx)*T+(d.vz-g.vz)*P;if(D<0){let U=-1.4*D/(y+R);g.vx-=U*T*y,g.vz-=U*P*y,d.vx+=U*T*R,d.vz+=U*P*R,-D>1.4&&(this.audio?.clatter(g.kind,Math.min(1,-D/5)),g.spin+=(Math.random()-.5)*4,d.spin+=(Math.random()-.5)*4)}}for(let m of p){m.obj.position.set(m.x,xt+m.y,m.z),m.obj.rotation.y=m.rot;let x=Math.hypot(m.vx,m.vz);if(m.lean=Le(m.lean,It(x*.12,0,.35),.2),m.obj.rotation.z=m.lean*Math.sin(m.rot*3),m.obj.rotation.x=m.y>0?m.rot*.5:m.lean*.4,m.kind==="cat"){let g=m.obj.getObjectByName("tail");g&&(g.rotation.z=.6+Math.sin(e.time*(x>.5?18:3))*.4),x>2.2&&Math.random()<.02&&this.audio?.meow()}}}pushOutRect(t,e){let[n,i,r,o]=e,a=It(t.x,n,i),c=It(t.z,r,o),l=t.x-a,h=t.z-c,u=l*l+h*h;if(!(u>t.r*t.r))if(u>1e-6){let f=Math.sqrt(u),p=l/f,m=h/f;t.x=a+p*t.r,t.z=c+m*t.r;let x=t.vx*p+t.vz*m;x<0&&(t.vx-=1.35*x*p,t.vz-=1.35*x*m,-x>1.6&&this.audio?.clatter(t.kind,Math.min(1,-x/6)))}else{let f=[[t.x-n,-1,0],[i-t.x,1,0],[t.z-r,0,-1],[o-t.z,0,1]];f.sort((g,d)=>g[0]-d[0]);let[p,m,x]=f[0];t.x+=m*(p+t.r),t.z+=x*(p+t.r)}}pushOutCircle(t,e,n,i,r,o){let a=t.x-e,c=t.z-n,l=t.r+i,h=a*a+c*c;if(h>=l*l||h<1e-6)return;let u=Math.sqrt(h),f=a/u,p=c/u;t.x=e+f*l,t.z=n+p*l;let m=t.vx*f+t.vz*p;m<0&&(t.vx-=1.5*m*f,t.vz-=1.5*m*p,-m>2.4&&this.ui&&this.ui.say(o,"ouch"))}insideDeck(t,e){for(let n of this.present){let[i,r,o,a]=ln[n].rect;if(t>=i&&t<=r&&e>=o&&e<=a)return n}return null}keepOnDeck(t,e){let n=this.insideDeck(t.x,t.z);if(n){t.part=n;return}let[i,r,o,a]=ln[t.part]?.rect||ln.core.rect,c=Math.hypot(t.vx,t.vz),l=this.railBroken(t.part,t.x,t.z);if(this.present.has(t.part)&&c<5.5&&!l){let h=It(t.x,i+t.r*.5,r-t.r*.5),u=It(t.z,o+t.r*.5,a-t.r*.5);h!==t.x&&(t.vx*=-.35),u!==t.z&&(t.vz*=-.35),t.x=h,t.z=u,c>2&&this.audio?.clatter(t.kind,Math.min(1,c/6));return}this.throwOverboard(t,e)}railBroken(t,e,n){for(let i of this.pieces)if(!(i.part!==t||i.kind!=="rail")&&Math.hypot(i.center.x-e,i.center.z-n)<1.2)return i.state===2;return t==="core"}throwOverboard(t,e,n=1){t.alive=!1,this.scene.attach(t.obj),this.addDebris(t.obj,{vx:t.vx*n,vy:2.5+Math.random()*2,vz:t.vz*n,local:!0,spin:3,game:e}),t.kind==="cat"&&this.audio?.meow(!0)}onHit(t,e){let n=t.strength||.5,i=e.hp,r=n>.7?2:1;i<.4&&r++,t.kind==="bank"&&n<.5&&(r=Math.random()<.5?1:0);let o=this.pieces.filter(l=>l.state<2&&this.present.has(l.part)&&l.obj.parent),a=t.lx??0,c=t.lz??0;o.forEach(l=>{let h=Math.hypot(l.center.x-a,l.center.z-c);l._score=1/(.6+h)*l.weight*(.6+Math.random()*.8)*(l.state===1?1.6:1)}),o.sort((l,h)=>h._score-l._score);for(let l=0;l<Math.min(r,o.length);l++)this.breakPiece(o[l],n,e);for(let l of this.props)!l.alive||l.obj.parent!==this.tilt||(l.vy=Math.max(l.vy,(2+Math.random()*3)*n),l.y=Math.max(l.y,.01),l.spin+=(Math.random()-.5)*10*n,l.vx+=(Math.random()-.5)*3*n,l.vz+=-2.5*n*Math.random());ne.set(a,xt+.4,c),this.tilt.localToWorld(ne),this.fx.splinters(ne,10+n*16),this.fx.splash(ne,1+n)}onScrape(t,e){if(Math.random()<.35*t.intensity){let n=this.pieces.filter(i=>i.state<2&&this.present.has(i.part)&&(i.kind==="rail"||i.kind==="deco"||i.kind==="wall"));n.length&&this.breakPiece(n[Math.floor(Math.random()*n.length)],.4,e)}for(let n of[-1,1])ne.set(n*4.1,xt,-1+Math.random()*2),this.tilt.localToWorld(ne),this.fx.splinters(ne,4)}breakPiece(t,e,n){if(!t.anim){if(t.state===0&&(t.kind==="wall"||t.kind==="gable"||t.kind==="roof")&&e<.85){t.state=1,t.anim={type:"lean",t:0,amp:.22+e*.12},this.audio?.creak(.9);return}t.state=2,t.kind==="wall"||t.kind==="gable"?t.anim={type:"fall",t:0,w:0,a:t.obj.rotation.x}:t.kind==="roof"?t.anim={type:"slide",t:0}:t.anim={type:"fly",t:0},this.audio?.crack(e)}}updatePieces(t,e){for(let n of this.pieces){let i=n.anim;if(!i)continue;i.t+=t;let r=n.obj;if(i.type==="lean"){let o=n.fallDir*i.amp;r.rotation.x=n.baseRot.x+o+Math.sin(i.t*9)*.18*Math.exp(-i.t*2.2),i.t>2&&(n.anim=null)}else if(i.type==="fall"){let o=Math.abs(r.rotation.x-n.baseRot.x);i.w+=(7*Math.sin(o)+1.4)*t,o+=i.w*t,o>=Math.PI/2&&(o=Math.PI/2,i.landed?i.w=Math.min(0,i.w)*.2:(this.onWallLanded(n,e),i.landed=!0,i.w=-i.w*.22)),o<0&&(o=0),r.rotation.x=n.baseRot.x+n.fallDir*o,i.landed&&i.t>1.6&&(n.anim=null,r.rotation.x=n.baseRot.x+n.fallDir*Math.PI/2,(n.kind==="gable"||!this.wallStaysOnDeck(n))&&this.dropOverboard(n,e,{vy:.5,out:1.5}))}else i.type==="slide"?(r.rotation.x+=n.fallDir*t*1.4,r.position.y-=t*(1+i.t*4),r.position.z+=n.fallDir*t*(1.5+i.t*3),i.t>.45&&(n.anim=null,this.dropOverboard(n,e,{vy:1,out:3}))):i.type==="fly"&&(n.anim=null,this.dropOverboard(n,e,{vy:3+Math.random()*2,out:3.5}))}}wallStaysOnDeck(t){return t.inward||t.kind==="wall"&&t.center.z>-1&&t.fallDir>0&&Math.abs(t.center.x)<1}onWallLanded(t,e){if(this.audio?.thud(.8),ne.copy(t.center),ne.y=xt+.2,this.tilt.localToWorld(ne),this.fx.dust(ne,1.2),this.ui?.popup("\uCFF5!",ne,"thud"),t.keaton){let n=this.views[t.keaton],i=e.owners[t.keaton];i.state==="aboard"&&!i.sawing&&(Math.hypot(n.pos.x-n.def.x,n.pos.y-n.def.z)<.45?(n.onKeaton(),this.ui?.say(t.keaton,"\u2026\u2026"),this.ui?.popup("\uD734\u2026",ne,"small"),e.stats.keaton=(e.stats.keaton||0)+1):n.onBonk())}else if(t.kind==="wall")for(let n of["L","R"]){let i=this.views[n];e.owners[n].state==="aboard"&&Math.sign(i.pos.x)===Math.sign(t.center.x)&&Math.abs(t.center.x)>1&&Math.abs(i.pos.x)<3.6&&i.pos.y<-.4&&i.onBonk()}}dropOverboard(t,e,n={}){let i=t.obj;if(!i.parent)return;this.scene.attach(i),ne.copy(t.center),this.tilt.localToWorld(ne),dh.copy(this.root.position);let r=new C().subVectors(ne,dh).setY(0).normalize().multiplyScalar(n.out??2);this.addDebris(i,{vx:r.x,vy:n.vy??1.5,vz:r.z,spin:2,game:e}),t.state=2}addDebris(t,{vx:e=0,vy:n=0,vz:i=0,spin:r=1,local:o=!1,game:a}={}){o&&(ne.set(e,0,i).applyQuaternion(this.tilt.getWorldQuaternion(D_)),e=ne.x,i=ne.z);let c=a?.house;this.debris.push({obj:t,vx:e,vy:n,vz:i,sx:(Math.random()-.5)*r,sz:(Math.random()-.5)*r,t:0,floating:!1,d:c?c.d:0})}updateDebris(t,e){let n=e.house;for(let i=this.debris.length-1;i>=0;i--){let r=this.debris[i];r.t+=t;let o=r.obj;if(!r.floating)r.vy-=14*t,o.position.x+=r.vx*t,o.position.y+=r.vy*t,o.position.z+=r.vz*t,o.rotation.x+=r.sx*t,o.rotation.z+=r.sz*t,o.position.y<.05&&r.vy<0&&(r.floating=!0,this.fx.splash(o.position,.8),this.audio?.plop(.6));else{let a=xn(r.d),c=nn(r.d)*.55;r.d+=c*t,r.vx*=Math.exp(-t*1.5),r.vz*=Math.exp(-t*1.5),o.position.x+=(Math.sin(a)*c+r.vx)*t,o.position.z+=(-Math.cos(a)*c+r.vz)*t,o.position.y=Le(o.position.y,-.15+Math.sin(r.t*2.5+i)*.08,.1),o.rotation.x=Le(o.rotation.x,Math.round(o.rotation.x/Math.PI)*Math.PI+Math.sin(r.t*2)*.1,.05),o.rotation.y+=r.sx*.2*t}(r.t>22||n&&r.d<n.d-80)&&(o.parent?.remove(o),this.debris.splice(i,1))}}onDetach(t,e){let n=t.id,i=t.part,r=this.parts[i];this.present.delete(i),this.skirts[i].visible=!1;let[o,a,c,l]=ln[i].rect;for(let g of this.props)g.alive&&g.obj.parent===this.tilt&&g.x>=o-.05&&g.x<=a+.05&&g.z>=c-.05&&g.z<=l+.05&&(r.add(g.obj),g.alive=!1);for(let g of this.pieces)g.part===i&&(g.anim=null);let h=(o+a)/2,u=(c+l)/2,f=new Et;f.rotation.order="YXZ",this.scene.add(f),this.root.updateWorldMatrix(!0,!0),ne.set(h,0,u),this.tilt.localToWorld(ne),f.position.copy(ne),f.rotation.y=this.root.rotation.y,f.updateWorldMatrix(!0,!1),f.attach(r);let p=lc([o-h,a-h,c-u,l-u]);f.add(p);let m=this.cuts[n];m.white.count=0,m.black.count=0,m.marker.visible=!1;let x={container:f,inner:r,kind:"room",id:n,t:0,drop:0,skirt:p,lx:h,lz:u};this.floaterViews.set(`room-${n}`,x),this.views[n].forced=null,this.fx.splash(f.position,2.2),this.fx.ring(f.position,3)}updateFloaters(t,e){for(let n of e.floaters){let i=n.kind==="room"?`room-${n.id}`:`swim-${n.id}`,r=this.floaterViews.get(i);if(!r||r.parked)continue;r.t+=t,se(n.u,n.d,Vs);let o=sh(n.u,n.d),a=0;r.kind==="room"?a=r.t<.5?-Math.sin(r.t/.5*Math.PI)*.55:Math.sin(r.t*2.2)*.06:a=-.35+Math.sin(r.t*2.6)*.08,r.container.position.set(Vs.x,o+a,Vs.z),r.container.rotation.y=-(xn(n.d)+n.psi),r.container.rotation.z=Math.sin(r.t*1.7)*.05,r.container.rotation.x=Math.sin(r.t*1.3)*.04,r.container.visible=n.visible!==!1||r.keep}}onShatter(t,e){let n=t.rider;for(let a of["core","L","R","C"]){let c=this.parts[a];if(!c.parent||c.parent!==this.tilt)continue;this.skirts[a].visible=!1;let l=[...c.children];for(let h of l){if(h===this.views[n].root||Sn.some(f=>this.views[f].root===h)||h===this.extras.door)continue;this.scene.attach(h);let u=new C().subVectors(h.getWorldPosition(ne),this.root.position).setY(0);u.lengthSq()<.01&&u.set(Math.random()-.5,0,Math.random()-.5),u.normalize().multiplyScalar(3+Math.random()*4),this.addDebris(h,{vx:u.x,vy:3+Math.random()*5,vz:u.z,spin:6,game:e})}this.present.delete(a)}for(let a of this.props)a.alive&&a.obj.parent===this.tilt&&(a.vx=(Math.random()-.5)*8,a.vz=(Math.random()-.5)*8,this.throwOverboard(a,e,1));for(let a of["L","R","C"]){let c=this.cuts[a];c.white.count=0,c.black.count=0,c.marker.visible=!1}this.extras.door&&this.extras.door.parent?.remove(this.extras.door);let i=Qd();this.tilt.add(i),this.doorRaft=i;let r=lc(ln.door.rect,.3);this.root.add(r),this.skirts.door=r;let o=this.views[n];i.attach(o.root),o.root.position.set(0,.25,.25),o.def={...o.def,x:0,z:.25},o.pos.set(0,.25),o.ch.root.scale.setScalar(.9);for(let a of t.overboard){let c=this.views[a],l=new Et;l.rotation.order="YXZ",this.scene.add(l),l.position.copy(c.root.getWorldPosition(ne));let h=V(O.box(1.6,.14,.7),"#c89a5e",l,[0,0,0],[0,0,0],.03);l.attach(c.root),c.root.position.set(0,-.2,0),c.root.rotation.set(0,0,0),c.pos.set(0,0),this.floaterViews.set(`swim-${a}`,{container:l,kind:"swim",id:a,t:0})}this.fx.burst(this.root.position,3),this.fx.splash(this.root.position,3)}attachMooring(t){let e=O.cyl(.03,.03,1,5);e.translate(0,.5,0);let n=new kt(e,Te("#d9c28a"));this.scene.add(n),this.mooring={rope:n,anchor:t.clone(),snapped:!1,t:0}}snapMooring(){!this.mooring||this.mooring.snapped||(this.mooring.snapped=!0,this.audio?.snap(),this.ui?.popup("\uD22D!",this.mooring.anchor,"small"))}updateMooring(t,e){let n=this.mooring;if(ne.set(-3.9,xt-.1,-2),this.tilt.localToWorld(ne),n.snapped){n.t+=t,n.rope.scale.y=Math.max(.01,n.rope.scale.y*Math.exp(-t*6)),n.t>1&&(n.rope.parent?.remove(n.rope),this.mooring=null);return}let i=dh.subVectors(ne,n.anchor),r=i.length();n.rope.position.copy(n.anchor),n.rope.scale.set(1,r,1),n.rope.quaternion.setFromUnitVectors(new C(0,1,0),i.normalize())}ownerScreenAnchor(t,e){return this.views[t].chestWorld(e)}toPartLocal(t,e,n){return n.copy(e)}dispose(){this.root.parent?.remove(this.root);for(let t of this.floaterViews.values())t.container.parent?.remove(t.container);for(let t of this.debris)t.obj.parent?.remove(t.obj);this.mooring?.rope.parent?.remove(this.mooring.rope)}};var Ji=new C,Wn=new C,Gs=new C,gc=new C,fh=new C,rf=new Xt,Qr=2.25,xc=class{constructor(t,e,n){this.house=t,this.fx=e,this.audio=n;let i=new Et;V(O.cyl(.045,.05,Qr-.5,8),"#d9a066",i,[0,.5+(Qr-.5)/2,0],[0,0,0],.02);let r=V(O.box(.34,.66,.05),"#c98a4a",i,[0,.3,0],[0,0,0],.025);V(O.box(.36,.1,.06),"#e8483b",r,[0,.12,0],[0,0,0],0),V(O.box(.36,.1,.06),"#ffffff",r,[0,.02,0],[0,0,0],0),V(O.box(.36,.1,.06),"#3a7ee6",r,[0,-.08,0],[0,0,0],0),V(O.box(.26,.07,.07),"#8d5a2b",i,[0,Qr,0],[0,0,0],.015),Ze(i),this.obj=i,this.flight=null,this.trailT=0,t.tilt.add(i)}onThrow(t){this.house.tilt.attach(this.obj),this.flight={from:t.from,to:t.to,start:this.obj.position.clone(),startQ:this.obj.quaternion.clone(),dur:t.dur},this.audio?.whoosh()}update(t,e){let n=e.paddle,i=this.house.tilt;if(n.flight&&this.flight){let a=Math.min(1,n.flight.t/n.flight.dur);this.house.views[n.flight.to].handWorld(1,Wn),i.worldToLocal(Wn);let l=this.flight.start,h=(1-a)*(1-a),u=2*(1-a)*a,f=a*a,p=Math.max(l.y,Wn.y)+1.3;this.obj.position.set(h*l.x+u*((l.x+Wn.x)/2)+f*Wn.x,h*l.y+u*p+f*Wn.y,h*l.z+u*((l.z+Wn.z)/2)+f*Wn.z),this.obj.rotation.set(Math.PI/2-a*Math.PI*3,0,.5,"ZXY"),Ji.set(0,Qr/2,0).applyQuaternion(this.obj.quaternion),this.obj.position.sub(Ji),this.trailT-=t,this.trailT<=0&&(this.trailT=.025,this.obj.updateWorldMatrix(!0,!1),Ji.set(0,Qr/2,0).applyMatrix4(this.obj.matrixWorld),this.fx.puff(Ji,new C(0,.2,0),{life:.25,size:.12,grow:-.8,gravity:0,drag:0,color:"#ffffff"}));return}this.flight=null;let r=n.holder?this.house.views[n.holder]:null;if(!r||e.owners[n.holder].state!=="aboard"){this.obj.visible=!!r;return}this.obj.visible=!0;let o=r.ch.root;this.obj.parent!==o&&o.attach(this.obj),Ji.copy(r.paddleTip),Wn.copy(r.paddleGrip),Gs.subVectors(Wn,Ji).normalize(),gc.set(0,0,1).addScaledVector(Gs,-Gs.z).normalize(),fh.crossVectors(Gs,gc).normalize(),gc.crossVectors(fh,Gs),rf.makeBasis(fh,Gs,gc),this.obj.quaternion.setFromRotationMatrix(rf),this.obj.position.copy(Ji)}};var Ve={x:0,z:0},wn={x:0,z:0},_c=class{constructor(t){this.cam=t,this.pos=new C(0,20,20),this.look=new C,this.u=0,this.d=-10,this.shakeAmp=0,this.kick=0,this.zoom=0,this.t=0,this.mode="title",this.blend=1,this.fovBase=56,this.aspect=.5,this.orbit=0,this.endFrom=null}shake(t){this.shakeAmp=Math.min(1.2,this.shakeAmp+t)}punch(t){this.kick=Math.min(1,this.kick+t)}setMode(t){this.mode!==t&&(this.mode=t,this.blend=0)}resize(t){this.aspect=t,this.cam.aspect=t,this.fovBase=t<.5?58:t<.62?55:50,this.cam.updateProjectionMatrix()}update(t,e,n={}){this.t+=t;let i=e.house,r=It((.62-this.aspect)/.2,0,1),o,a,c,l,h,u;if(this.mode==="title"){this.orbit+=t*.12,se(i.u,i.d,Ve);let _=this.orbit,E=15;o=Ve.x+Math.sin(_)*E,c=Ve.z+Math.cos(_)*E,a=9.5,l=Ve.x,h=-3.2,u=Ve.z}else if(this.mode==="end"){let _=Math.sin(this.t*.25)*1.2;se(i.u+_+(n.endU||0),i.d+15.5,Ve),se(i.u,i.d+3.2,wn),o=Ve.x,c=Ve.z,a=12.5+(n.endH||0),l=wn.x,h=.4,u=wn.z}else if(this.mode==="close")se(i.u,i.d-7*(this.closeDist||1),Ve),se(i.u,i.d,wn),o=Ve.x+(this.closeSide||0),c=Ve.z,a=6.5*(this.closeDist||1),l=wn.x,h=1,u=wn.z;else if(this.mode==="fail")se(i.u,i.d-12,Ve),se(i.u,i.d+2,wn),o=Ve.x,c=Ve.z,a=24,l=wn.x,h=0,u=wn.z;else{let _=Me(i.d),E=It(i.u*.85,-_+4,_-4);this.u=ze(this.u,E,5,t),this.d=i.d;let A=nn(i.d),T=It((A-7)/4,0,1),P=13+r*2.2-T*1-this.zoom*3,M=16.5+r*2.4-T*.8-this.zoom*3.5,y=14+T*4;se(this.u,this.d-P,Ve),se(this.u,this.d+y,wn),o=Ve.x,c=Ve.z,a=M,l=wn.x,h=0,u=wn.z}this.blend=Math.min(1,this.blend+t*(this.mode==="play"?.8:.45));let f=this.mode==="play"&&this.blend>=1?1:1-Math.pow(1-this.blend,3),p=this.mode==="play"&&this.blend>=1?30:2.2+f*6;this.pos.x=ze(this.pos.x,o,p,t),this.pos.y=ze(this.pos.y,a,p,t),this.pos.z=ze(this.pos.z,c,p,t),this.look.x=ze(this.look.x,l,p,t),this.look.y=ze(this.look.y,h,p,t),this.look.z=ze(this.look.z,u,p,t),this.shakeAmp=Math.max(0,this.shakeAmp-t*1.6),this.kick=Math.max(0,this.kick-t*3);let m=this.shakeAmp*this.shakeAmp*.9,x=e.house.scraping*.12,g=tn(this.t*23)*(m+x),d=tn(this.t*19+7)*(m+x)*.6;this.cam.position.set(this.pos.x+g,this.pos.y+d,this.pos.z),this.cam.lookAt(this.look.x+g*.5,this.look.y,this.look.z);let v=nn(i.d),b=this.fovBase+It((v-8)*.9,0,4)-this.kick*3+(this.mode==="end"?4:0);Math.abs(this.cam.fov-b)>.01&&(this.cam.fov=Le(this.cam.fov,b,Math.min(1,t*6)),this.cam.updateProjectionMatrix())}};var of=420,af=320,ph=48,Ws=new Xt,yc=new we,U_=new Oe,Xs=new C,cf=new C,N_=new bt,vc=class{constructor(t){this.scene=t,this.puffMesh=new Be(O.ico(1,1),Te("#ffffff",{steps:2}),of),this.bitMesh=new Be(O.box(1,1,1),Te("#ffffff"),af);for(let n of[this.puffMesh,this.bitMesh])n.instanceMatrix.setUsage(Rl),n.frustumCulled=!1,n.count=0,n.setColorAt(0,new bt("#fff")),t.add(n);let e=new Rr(.8,1,28);e.rotateX(-Math.PI/2),this.ringAlpha=new xi(new Float32Array(ph),1),e.setAttribute("aAlpha",this.ringAlpha),this.ringMesh=new Be(e,new Re({transparent:!0,depthWrite:!1,vertexShader:"attribute float aAlpha; varying float vA; void main(){ vA = aAlpha; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position,1.0); }",fragmentShader:"varying float vA; void main(){ if (vA <= 0.01) discard; gl_FragColor = vec4(0.97, 0.99, 1.0, vA); }"}),ph),this.ringMesh.frustumCulled=!1,this.ringMesh.count=0,t.add(this.ringMesh),this.puffs=[],this.bits=[],this.rings=[]}puff(t,e,{life:n=1,size:i=.3,grow:r=1.5,gravity:o=0,drag:a=1,color:c="#ffffff"}={}){this.puffs.length>=of&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),t:0,life:n,size:i,grow:r,gravity:o,drag:a,color:new bt(c)})}bit(t,e,{life:n=1.5,size:i=[.05,.05,.3],gravity:r=14,color:o="#9c6a3c",spin:a=10,floor:c=-.2}={}){this.bits.length>=af&&this.bits.shift(),this.bits.push({p:t.clone(),v:e.clone(),t:0,life:n,size:i,gravity:r,color:new bt(o),r:new Oe(Math.random()*6,Math.random()*6,Math.random()*6),w:new C((Math.random()-.5)*a,(Math.random()-.5)*a,(Math.random()-.5)*a),floor:c})}ring(t,e=1,n=.9){this.rings.length>=ph&&this.rings.shift(),this.rings.push({p:new C(t.x,.06,t.z),t:0,life:n,size:e})}splash(t,e=1){let n=Math.round(6+8*e);for(let i=0;i<n;i++){let r=Math.random()*Math.PI*2,o=Math.random()*2*e;this.puff(new C(t.x+Math.cos(r)*.3,Math.max(.1,t.y),t.z+Math.sin(r)*.3),new C(Math.cos(r)*o,2.5+Math.random()*3.5*e,Math.sin(r)*o),{life:.55+Math.random()*.35,size:.16+.14*e*Math.random(),grow:-.6,gravity:12,drag:.5,color:Math.random()<.3?"#cfefff":"#ffffff"})}this.ring(t,.8+e*.7)}paddleSplash(t,e=1){let n=Math.round(5+9*e);for(let i=0;i<n;i++){let r=Math.random()*Math.PI*2,o=(.6+Math.random()*1.6)*e;this.puff(new C(t.x,.15,t.z),new C(Math.cos(r)*o,3+Math.random()*3*e,Math.sin(r)*o),{life:.5+Math.random()*.3,size:.12+.12*Math.random()*e,grow:-.7,gravity:13,drag:.4})}this.ring(t,.6+.6*e,.7)}drip(t){this.puff(new C(t.x,Math.max(.1,t.y+.2),t.z),new C((Math.random()-.5)*1.5,1.5+Math.random()*1.5,(Math.random()-.5)*1.5),{life:.4,size:.08+Math.random()*.05,grow:-.8,gravity:12,drag:.2})}spray(t,e,n=1){let i=Math.round(4+8*n);for(let r=0;r<i;r++){let o=new C(e.x*(3+Math.random()*4)+(Math.random()-.5)*3,4+Math.random()*3*n,e.z*(3+Math.random()*4)+(Math.random()-.5)*3);this.puff(new C(t.x+(Math.random()-.5)*3,t.y,t.z+(Math.random()-.5)*3),o,{life:.7+Math.random()*.3,size:.14+Math.random()*.16,grow:-.5,gravity:11,drag:.3,color:Math.random()<.4?"#d6f2ff":"#ffffff"})}}steam(t,e=1){for(let n=0;n<2;n++)this.puff(new C(t.x+(Math.random()-.5)*.15,t.y,t.z+(Math.random()-.5)*.15),new C((Math.random()-.5)*.6,1.8+Math.random()*1.2,(Math.random()-.5)*.6),{life:.8,size:.09*e+.05,grow:2.2,gravity:-.5,drag:1.5,color:"#ffffff"})}smoke(t){this.puff(t,new C((Math.random()-.5)*.4,1+Math.random()*.4,.6),{life:2.2,size:.18,grow:1.8,gravity:-.3,drag:.5,color:"#e9e6e0"})}sawdust(t){for(let e=0;e<3;e++)this.bit(t,new C((Math.random()-.5)*2,1+Math.random()*1.5,(Math.random()-.5)*2),{life:.6,size:[.04,.04,.04],gravity:9,color:Math.random()<.5?"#e8c38a":"#d4a868",spin:8})}splinters(t,e=12){for(let n=0;n<e;n++){let i=Math.random()*Math.PI*2,r=2+Math.random()*4;this.bit(t,new C(Math.cos(i)*r,2+Math.random()*4,Math.sin(i)*r),{life:1.2,size:[.05,.05,.18+Math.random()*.25],gravity:14,color:Math.random()<.5?"#b5803f":"#8d5a2b",spin:14})}}dust(t,e=1){for(let n=0;n<10*e;n++){let i=n/(10*e)*Math.PI*2;this.puff(new C(t.x,t.y,t.z),new C(Math.cos(i)*2.5,.4+Math.random()*.5,Math.sin(i)*2.5),{life:.8,size:.2,grow:1.6,gravity:0,drag:3,color:"#efe3cc"})}}burst(t,e=1){for(let n=0;n<26*e;n++){let i=Math.random()*Math.PI*2,r=3+Math.random()*6;this.bit(t,new C(Math.cos(i)*r,3+Math.random()*7,Math.sin(i)*r),{life:2,size:[.12,.08,.5+Math.random()*.7],gravity:13,color:Math.random()<.5?"#c99a5e":"#9c6a3c",spin:10})}this.dust(new C(t.x,1,t.z),2)}confetti(t,e=60){let n=["#e8483b","#f2b62c","#3a7ee6","#4fbf6a","#f08ad0","#ffffff"];for(let i=0;i<e;i++){let r=Math.random()*Math.PI*2,o=1+Math.random()*4;this.bit(t,new C(Math.cos(r)*o,6+Math.random()*6,Math.sin(r)*o),{life:3.5,size:[.12,.02,.18],gravity:4,color:n[i%n.length],spin:12,floor:-5})}}stars(t){for(let e=0;e<6;e++){let n=e/6*Math.PI*2;this.puff(t,new C(Math.cos(n)*2,1.5,Math.sin(n)*2),{life:.6,size:.1,grow:-.5,gravity:4,drag:1,color:"#ffd23a"})}}update(t){let e=0;for(let n=this.puffs.length-1;n>=0;n--){let i=this.puffs[n];if(i.t+=t,i.t>=i.life){this.puffs.splice(n,1);continue}if(i.v.y-=i.gravity*t,i.v.multiplyScalar(Math.exp(-i.drag*t)),i.p.addScaledVector(i.v,t),i.p.y<-.1&&i.gravity>0){this.puffs.splice(n,1);continue}}for(let n of this.puffs){let i=n.t/n.life,r=n.size*(1+n.grow*i);i>.75&&(r*=1-(i-.75)/.25),r=Math.max(.001,r),Xs.set(r,r,r),Ws.compose(n.p,yc.identity(),Xs),this.puffMesh.setMatrixAt(e,Ws),this.puffMesh.setColorAt(e,n.color),e++}this.puffMesh.count=e,this.puffMesh.instanceMatrix.needsUpdate=!0,this.puffMesh.instanceColor&&(this.puffMesh.instanceColor.needsUpdate=!0),e=0;for(let n=this.bits.length-1;n>=0;n--){let i=this.bits[n];if(i.t+=t,i.t>=i.life){this.bits.splice(n,1);continue}i.v.y-=i.gravity*t,i.p.addScaledVector(i.v,t),i.p.y<i.floor&&(i.p.y=i.floor,i.v.multiplyScalar(.3),i.v.y=0),i.r.x+=i.w.x*t,i.r.y+=i.w.y*t,i.r.z+=i.w.z*t}for(let n of this.bits){let i=n.t/n.life,r=i>.8?1-(i-.8)/.2:1;yc.setFromEuler(U_.set(n.r.x,n.r.y,n.r.z)),Xs.set(n.size[0]*r,n.size[1]*r,n.size[2]*r),Ws.compose(n.p,yc,Xs),this.bitMesh.setMatrixAt(e,Ws),this.bitMesh.setColorAt(e,n.color),e++}this.bitMesh.count=e,this.bitMesh.instanceMatrix.needsUpdate=!0,this.bitMesh.instanceColor&&(this.bitMesh.instanceColor.needsUpdate=!0),e=0;for(let n=this.rings.length-1;n>=0;n--){let i=this.rings[n];i.t+=t,i.t>=i.life&&this.rings.splice(n,1)}for(let n of this.rings){let i=n.t/n.life,r=n.size*(.5+1.6*Math.sqrt(i));cf.copy(n.p),Xs.set(r,1,r),Ws.compose(cf,yc.identity(),Xs),this.ringMesh.setMatrixAt(e,Ws),this.ringAlpha.setX(e,(1-i)*.9),e++}this.ringMesh.count=e,this.ringMesh.instanceMatrix.needsUpdate=!0,this.ringAlpha.needsUpdate=!0}clear(){this.puffs.length=0,this.bits.length=0,this.rings.length=0}};var lf=[[800,1200],[500,1900],[320,2300],[520,900],[340,780],[650,1700]],hf={L:{base:118,spread:.25,rate:.085},R:{base:245,spread:.3,rate:.07},C:{base:170,spread:.2,rate:.08}},bc=class{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!0,this.ready=!1,this.creakT=1,this.sawT=0,this.sawUp=!1,this.music=null,this.lastVoice={L:0,C:0,R:0}}init(){if(this.ctx){this.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.muted?0:.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.amb=e.createGain(),this.amb.gain.value=.8,this.amb.connect(this.master),this.voiceBus=e.createGain(),this.voiceBus.gain.value=.5,this.voiceBus.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.16,this.musicBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this.impulse(2.6,2.2),this.revWet=e.createGain(),this.revWet.gain.value=.05,this.reverb.connect(this.revWet).connect(this.master),this.sfx.connect(this.reverb),this.voiceBus.connect(this.reverb),this.white=this.noiseBuffer("white"),this.pink=this.noiseBuffer("pink"),this.brown=this.noiseBuffer("brown"),this.buildAmbience(),this.ready=!0}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}noiseBuffer(t){let e=this.ctx,n=e.sampleRate*2,i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0),o=0,a=0,c=0,l=0,h=0,u=0,f=0,p=0;for(let m=0;m<n;m++){let x=Math.random()*2-1;t==="white"?r[m]=x:t==="pink"?(o=.99886*o+x*.0555179,a=.99332*a+x*.0750759,c=.969*c+x*.153852,l=.8665*l+x*.3104856,h=.55*h+x*.5329522,u=-.7616*u-x*.016898,r[m]=(o+a+c+l+h+u+f+x*.5362)*.11,f=x*.115926):(p=(p+.02*x)/1.02,r[m]=p*3.5)}return i}impulse(t,e){let n=this.ctx,i=Math.floor(n.sampleRate*t),r=n.createBuffer(2,i,n.sampleRate);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let c=0;c<i;c++)a[c]=(Math.random()*2-1)*Math.pow(1-c/i,e)*(c%2700<60?2.2:1)}return r}loop(t){let e=this.ctx.createBufferSource();return e.buffer=t,e.loop=!0,e.start(0,Math.random()*1.5),e}buildAmbience(){let t=this.ctx;this.rushF=t.createBiquadFilter(),this.rushF.type="lowpass",this.rushF.frequency.value=700,this.rushG=t.createGain(),this.rushG.gain.value=0,this.loop(this.pink).connect(this.rushF).connect(this.rushG).connect(this.amb),this.roarF=t.createBiquadFilter(),this.roarF.type="bandpass",this.roarF.frequency.value=1400,this.roarF.Q.value=.5,this.roarG=t.createGain(),this.roarG.gain.value=0,this.roarPan=t.createStereoPanner(),this.loop(this.white).connect(this.roarF).connect(this.roarG).connect(this.roarPan).connect(this.amb),this.roarG.connect(this.reverb),this.gurF=t.createBiquadFilter(),this.gurF.type="bandpass",this.gurF.frequency.value=320,this.gurF.Q.value=3,this.gurG=t.createGain(),this.gurG.gain.value=0,this.loop(this.brown).connect(this.gurF).connect(this.gurG).connect(this.amb),this.whirlF=t.createBiquadFilter(),this.whirlF.type="bandpass",this.whirlF.Q.value=4,this.whirlF.frequency.value=500,this.whirlG=t.createGain(),this.whirlG.gain.value=0;let e=t.createOscillator();e.frequency.value=.9;let n=t.createGain();n.gain.value=300,e.connect(n).connect(this.whirlF.frequency),e.start(),this.loop(this.pink).connect(this.whirlF).connect(this.whirlG).connect(this.amb),this.scrF=t.createBiquadFilter(),this.scrF.type="bandpass",this.scrF.frequency.value=2400,this.scrF.Q.value=6,this.scrG=t.createGain(),this.scrG.gain.value=0,this.loop(this.white).connect(this.scrF).connect(this.scrG).connect(this.sfx)}update(t,e){if(!this.ready)return;let n=this.ctx.currentTime,i=e.active?1:.35;this.rushG.gain.setTargetAtTime((.16+.12*e.speedK)*i,n,.3),this.rushF.frequency.setTargetAtTime(500+900*e.speedK+600*e.roar,n,.3),this.roarG.gain.setTargetAtTime((.04+.55*e.roar*e.roar+.12*e.rough)*i,n,.12),this.roarF.frequency.setTargetAtTime(1e3+1400*e.roar,n,.2),this.roarPan.pan.setTargetAtTime(Math.max(-.8,Math.min(.8,e.roarPan||0)),n,.2),this.gurG.gain.setTargetAtTime((.1+.25*e.rough)*i,n,.4),this.gurF.frequency.setTargetAtTime(250+Math.random()*250,n,.1),this.whirlG.gain.setTargetAtTime(.5*e.whirl,n,.25),this.scrG.gain.setTargetAtTime(.25*e.scrape,n,.05),this.scrF.frequency.setTargetAtTime(1800+Math.random()*1200,n,.03),this.revWet.gain.setTargetAtTime(.05+.5*e.canyon,n,.5),this.musicBus.gain.setTargetAtTime(this.musicOn?.15*(1-.45*e.roar):0,n,.4),this.creakT-=t,e.active&&this.creakT<=0&&(this.creakT=2.6-1.8*Math.max(e.roar,e.damage,e.sway)+Math.random()*1.5,this.creak(.35+.5*Math.max(e.damage,e.sway))),e.sawing>0&&(this.sawT-=t,this.sawT<=0&&(this.sawT=.17,this.sawUp=!this.sawUp,this.sawStroke(this.sawUp,e.sawPan||0))),this.music&&this.music.update(e)}env(t,e,n,i,r){t.gain.cancelScheduledValues(e),t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(Math.max(2e-4,i),e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+r)}noiseShot({buf:t=this.white,type:e="bandpass",f0:n=1e3,f1:i=n,q:r=1,a:o=.005,d:a=.2,peak:c=.3,pan:l=0,dest:h=this.sfx,delay:u=0}){if(!this.ready)return;let f=this.ctx,p=f.currentTime+u,m=f.createBufferSource();m.buffer=t;let x=f.createBiquadFilter();x.type=e,x.Q.value=r,x.frequency.setValueAtTime(n,p),x.frequency.exponentialRampToValueAtTime(Math.max(20,i),p+o+a);let g=f.createGain();this.env(g,p,o,c,a);let d=f.createStereoPanner();d.pan.value=l,m.connect(x).connect(g).connect(d).connect(h),m.start(p,Math.random()),m.stop(p+o+a+.05)}tone({type:t="sine",f0:e=440,f1:n=e,a:i=.005,d:r=.2,peak:o=.2,pan:a=0,dest:c=this.sfx,delay:l=0,curve:h="exp"}){if(!this.ready)return;let u=this.ctx,f=u.currentTime+l,p=u.createOscillator();p.type=t,p.frequency.setValueAtTime(e,f),h==="exp"?p.frequency.exponentialRampToValueAtTime(Math.max(20,n),f+i+r):p.frequency.linearRampToValueAtTime(n,f+i+r);let m=u.createGain();this.env(m,f,i,o,r);let x=u.createStereoPanner();return x.pan.value=a,p.connect(m).connect(x).connect(c),p.start(f),p.stop(f+i+r+.05),p}splash(t=.6,e=0){this.noiseShot({type:"lowpass",f0:3500,f1:400,q:.7,a:.01,d:.25+.25*t,peak:.25+.35*t,pan:e*.6}),this.tone({f0:260,f1:70,d:.12,peak:.12*t,pan:e*.6})}plop(t=.5){this.tone({f0:700,f1:160,d:.1,peak:.18*t}),this.noiseShot({type:"lowpass",f0:2e3,f1:300,d:.2,peak:.15*t})}whoosh(){this.noiseShot({type:"bandpass",f0:500,f1:2600,q:1.6,a:.03,d:.22,peak:.35})}catchTok(t=0){this.tone({type:"triangle",f0:700,f1:520,d:.08,peak:.35,pan:t}),this.noiseShot({type:"highpass",f0:2500,d:.03,peak:.25,pan:t})}creak(t=.5){if(!this.ready)return;let e=this.ctx,n=e.currentTime,i=.35+Math.random()*.5,r=e.createOscillator();r.type="sawtooth";let o=32+Math.random()*40;r.frequency.setValueAtTime(o,n),r.frequency.linearRampToValueAtTime(o*(.6+Math.random()*.9),n+i);let a=e.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(700+Math.random()*700,n),a.frequency.linearRampToValueAtTime(500+Math.random()*900,n+i),a.Q.value=14;let c=e.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(.5*t,n+.06),c.gain.setValueAtTime(.5*t,n+i*.7),c.gain.exponentialRampToValueAtTime(1e-4,n+i),r.connect(a).connect(c).connect(this.sfx),r.start(n),r.stop(n+i+.05)}crack(t=.6){for(let e=0;e<3;e++)this.noiseShot({type:"highpass",f0:1800+Math.random()*1500,d:.03+Math.random()*.04,peak:.3*t,delay:e*(.02+Math.random()*.05)});this.tone({type:"square",f0:180,f1:90,d:.06,peak:.08*t})}thud(t=.7){this.tone({f0:110,f1:38,d:.3,peak:.55*t}),this.noiseShot({type:"lowpass",f0:600,f1:120,d:.25,peak:.25*t})}crash(t=.8){this.thud(t),this.crack(t),this.splash(.6+.4*t),this.creak(.8)}snap(){this.noiseShot({type:"highpass",f0:3e3,d:.05,peak:.4}),this.tone({f0:300,f1:120,d:.1,peak:.2})}sawStroke(t,e=0){this.noiseShot({type:"bandpass",f0:t?2600:1600,f1:t?3400:1200,q:2.4,a:.03,d:.12,peak:.22,pan:e})}sawTwang(){if(!this.ready)return;let t=this.tone({type:"sine",f0:900,f1:900,d:.6,peak:.12});if(!t)return;let e=this.ctx.createOscillator();e.frequency.value=9;let n=this.ctx.createGain();n.gain.value=120,e.connect(n).connect(t.frequency),e.start(),e.stop(this.ctx.currentTime+.7)}drop(){this.tone({f0:1500,f1:1100,d:.05,peak:.35}),this.tone({type:"sine",f0:1700,f1:260,a:.02,d:.65,peak:.16,delay:.25,curve:"exp"}),setTimeout(()=>this.splash(1),520)}slideUp(){this.tone({type:"sine",f0:300,f1:1500,a:.02,d:.45,peak:.13})}clatter(t,e=.5){if(!this.ready)return;let n=this.ctx.currentTime;if(!(n-(this._lastClatter||0)<.05))if(this._lastClatter=n,t==="pot"||t==="kettle"||t==="bucket")for(let i of[1150,1870,3020])this.tone({f0:i*(.95+Math.random()*.1),d:.25,peak:.07*e});else t==="barrel"||t==="table"?this.tone({type:"triangle",f0:160,f1:90,d:.15,peak:.25*e}):t==="cat"?this.meow():(this.tone({type:"triangle",f0:420+Math.random()*200,f1:300,d:.06,peak:.2*e}),this.noiseShot({type:"bandpass",f0:1500,q:2,d:.04,peak:.15*e}))}meow(t=!1){if(!this.ready)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(600,n),i.frequency.linearRampToValueAtTime(900,n+.12),i.frequency.linearRampToValueAtTime(520,n+.4);let r=e.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(900,n),r.frequency.linearRampToValueAtTime(1800,n+.15),r.frequency.linearRampToValueAtTime(800,n+.4),r.Q.value=5;let o=e.createGain();this.env(o,n,.04,t?.3:.15,.38),i.connect(r).connect(o).connect(this.sfx),i.start(n),i.stop(n+.5)}steamWhistle(){this.tone({type:"sine",f0:1900,f1:2100,a:.08,d:.4,peak:.05,curve:"lin"})}nearMiss(t){this.noiseShot({type:"bandpass",f0:3e3,f1:400,q:1.2,a:.01,d:.45,peak:t?.4:.2}),t&&(this.tone({type:"triangle",f0:523,d:.12,peak:.12,delay:.05}),this.tone({type:"triangle",f0:784,d:.18,peak:.12,delay:.14}))}stinger(t){let e={section:[[659,0],[784,.09],[988,.18]],appease:[[784,0],[988,.08],[1319,.16]],whirl:[[392,0],[494,.08],[587,.16],[784,.24]],shatter:[[392,0],[349,.15],[330,.3],[262,.5]]}[t];if(e)for(let[n,i]of e)this.tone({type:"triangle",f0:n,d:.22,peak:.12,delay:i,dest:this.sfx})}fanfare(){let t=[[523,0,.18],[659,.18,.18],[784,.36,.18],[1047,.54,.6],[988,.9,.15],[1047,1.05,.8]];for(let[e,n,i]of t)this.tone({type:"square",f0:e,d:i,peak:.07,delay:n,dest:this.sfx}),this.tone({type:"triangle",f0:e/2,d:i,peak:.12,delay:n,dest:this.sfx})}failJingle(){let t=[[392,0,.3],[370,.3,.3],[349,.6,.3],[330,.9,.9]];for(let[e,n,i]of t)this.tone({type:"triangle",f0:e,f1:e*.98,d:i,peak:.16,delay:n,curve:"lin"})}ui(){this.tone({type:"triangle",f0:880,f1:1320,d:.07,peak:.15})}voice(t,e,n="normal"){if(!this.ready)return;let i=this.ctx,r=i.currentTime;if(r-this.lastVoice[t]<.25)return;let o=hf[t]||hf.C,a=Math.max(2,Math.min(7,Math.round((e||"").length/2))),c=o.rate*(n==="angry"?.85:1),l=r,h=t==="L"?-.5:t==="R"?.5:0;for(let u=0;u<a;u++){let f=i.createOscillator();f.type="sawtooth";let p=o.base*(1+(Math.random()-.5)*o.spread);n==="angry"&&(p*=1.15),n==="happy"&&(p*=1+u*.04),n==="sad"&&(p*=1-u*.04),f.frequency.setValueAtTime(p,l),f.frequency.linearRampToValueAtTime(p*(n==="happy"?1.12:.92),l+c);let[m,x]=lf[Math.floor(Math.random()*lf.length)],g=i.createBiquadFilter();g.type="bandpass",g.frequency.value=m,g.Q.value=5;let d=i.createBiquadFilter();d.type="bandpass",d.frequency.value=x,d.Q.value=7;let v=i.createGain();v.gain.setValueAtTime(1e-4,l),v.gain.exponentialRampToValueAtTime(.5,l+.012),v.gain.exponentialRampToValueAtTime(1e-4,l+c);let b=i.createStereoPanner();b.pan.value=h,f.connect(g).connect(v),f.connect(d).connect(v),v.connect(b).connect(this.voiceBus),f.start(l),f.stop(l+c+.02),l+=c+.018}this.lastVoice[t]=l}startMusic(){!this.ready||this.music||(this.music=new mh(this))}stopMusic(){this.music&&this.music.stop(),this.music=null}},Mc=[67,71,74,71,72,71,69,67,64,67,72,67,69,67,64,62,66,69,74,69,72,69,66,62,67,0,71,0,74,-1,-1,0,64,67,71,67,69,71,72,71,72,74,76,74,72,71,69,67,69,71,72,74,76,74,72,69,67,71,67,62,67,-1,-1,0],uf=[[55,59,62],[48,52,55],[50,54,57],[55,59,62],[52,55,59],[48,52,55],[50,54,57],[55,59,62]],to=s=>440*Math.pow(2,(s-69)/12),mh=class{constructor(t){this.e=t,this.ctx=t.ctx,this.step=0,this.tempo=138,this.next=this.ctx.currentTime+.1,this.intensity=0,this.timer=setInterval(()=>this.schedule(),40)}stop(){clearInterval(this.timer)}update(t){this.intensity=t.musicIntensity??1,this.tempo=132+14*(t.speedK||0)}schedule(){let t=this.ctx;if(t.state!=="running"){this.next=t.currentTime+.1;return}let e=60/this.tempo/2;for(;this.next<t.currentTime+.15;)this.play(this.step,this.next,e),this.next+=e,this.step=(this.step+1)%Mc.length}note(t,e,n,i,r,o=2500){let a=this.ctx.createOscillator();a.type=t,a.frequency.value=e;let c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=o;let l=this.ctx.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(r,n+.012),l.gain.exponentialRampToValueAtTime(1e-4,n+i),a.connect(c).connect(l).connect(this.e.musicBus),a.start(n),a.stop(n+i+.02)}drum(t,e,n){let i=this.e;if(e==="kick"){let r=this.ctx.createOscillator();r.frequency.setValueAtTime(140,t),r.frequency.exponentialRampToValueAtTime(45,t+.12);let o=this.ctx.createGain();o.gain.setValueAtTime(n,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.18),r.connect(o).connect(i.musicBus),r.start(t),r.stop(t+.2)}else{let r=this.ctx.createBufferSource();r.buffer=i.white;let o=this.ctx.createBiquadFilter();o.type=e==="hat"?"highpass":"bandpass",o.frequency.value=e==="hat"?6e3:1800;let a=this.ctx.createGain(),c=e==="hat"?.04:.12;a.gain.setValueAtTime(n,t),a.gain.exponentialRampToValueAtTime(1e-4,t+c),r.connect(o).connect(a).connect(i.musicBus),r.start(t,Math.random()),r.stop(t+c+.02)}}play(t,e,n){let i=Math.floor(t/8),r=t%8,o=uf[i%uf.length],a=this.intensity;if(r%4===0&&this.note("triangle",to(o[0]-12),e,n*1.8,.5,900),r%4===2&&this.note("triangle",to(o[2]-12),e,n*1.5,.35,900),r%2===1)for(let l of o)this.note("triangle",to(l+12),e,n*.9,.07,3e3);let c=Mc[t];if(a>.3&&c>0){let l=1;for(let h=t+1;h<Mc.length&&Mc[h]===-1;h++)l++;this.note("square",to(c),e,n*l*.95,.06,1800),this.note("sawtooth",to(c)*1.003,e,n*l*.95,.03,1400)}a>.6&&(r%4===0&&this.drum(e,"kick",.5),(r===2||r===6)&&this.drum(e,"snare",.25),this.drum(e,"hat",r%2?.08:.14))}};var F_={L:{intro:["\uC67C\uCABD \uAE30\uC2AD\uC774 \uC6B0\uB9AC \uC9D1 \uCABD\uC774\uC5EC!","\uC774 \uC9D1\uC740 \uB0B4 \uBA85\uC758\uC5EC!"],catch:["\uC67C\uCABD\uC774\uC9C0!","\uADF8\uB807\uC9C0! \uC67C\uCABD!","\uB0B4\uAC00 \uC800\uC5B4\uC57C\uC9C0!","\uC67C\uCABD\uC73C\uB85C \uC601\uCC28!"],eagerCatch:["\uB4DC\uB514\uC5B4!! \uC67C\uCABD!!","\uAE30\uB2E4\uB838\uB2E4 \uC774\uB188\uC544!"],stroke:["\uC601\uCC28!","\uC67C\uCABD!","\uC5B4\uC774\uCC28!"],rest:["\uBD10\uB77C, \uC67C\uCABD\uC774 \uB0AB\uC9C0","\uD760\uD760"],annoyed:["\uC67C\uCABD\uC774\uB77C\uB2C8\uAE4C\u2026","\uD765!","\uB0B4 \uC9D1\uC778\uB370\u2026"],steaming:["\uBD80\uAE00\uBD80\uAE00\u2026","\uCC38\uB294\uB2E4 \uCC38\uC544\u2026","\uB098\uB3C4 \uB178 \uC880 \uC918!"],saw:["\uC5B4\uB514 \uB450\uACE0 \uBCF4\uC790\u2026","\uD1B1\uC774 \uC798 \uB4DC\uB098 \uBCF4\uC790\u2026","\uD750\uD750\uD750\u2026"],sawing:["\uB0B4 \uBC29\uC740 \uB0B4\uAC00 \uAC00\uC838\uAC04\uB2E4!","\uC4F1\uC2F9\uC4F1\uC2F9!","\uBC18\uC758\uBC18\uB9CC \uAC00\uC838\uAC08\uAC8C!"],appeased:["\u2026\uD760, \uC9C4\uC791 \uC904 \uAC83\uC774\uC9C0.","\uD5D8\uD5D8, \uB0B4\uAC00 \uCC38\uC9C0."],farewell:["\uC798 \uC788\uC5B4\uB77C~!","\uB09C \uC67C\uCABD\uC73C\uB85C \uAC04\uB2E4~!","\uB0B4 \uBC29\uC740 \uB0B4 \uAC70\uC5EC~"],hit:["\uC544\uC774\uACE0 \uB0B4 \uC9D1!","\uBCBD\uC774!!","\uC5B4\uC774\uCFE0!"],near:["\uD734\uC6B0~","\uC0B4\uC558\uB2E4!","\uBD24\uB0D0 \uC774 \uC19C\uC528!"],dizzy:["\uC5B4\uC9C0\uB7EC\uC6CC~","\uD558\uB298\uC774 \uBE59\uAE00\uBE59\uAE00~"],protest:["\uC57C! \uADF8\uAC70 \uACF5\uB3D9\uBA85\uC758\uC5EC!","\uD1B1 \uB0B4\uB824\uB194!"],shock:["\uC5B4\uC5B4\uC5B4?!","\uC800, \uC800\u2026!"],already:["\uC774\uBBF8 \uB0B4 \uC190\uC5D0 \uC788\uB2E4!"],lone:["\uC774\uC81C \uB2E4 \uB0B4 \uAC70\uC5EC!"]},R:{intro:["\uC624\uB978\uCABD \uAE30\uC2AD\uC5D0 \uB4F1\uAE30\uBD80\uAC00 \uC788\uB2E4\uB2C8\uAE4C!","\uC774 \uC9D1\uC740 \uB0B4 \uAC70\uC608\uC694!"],catch:["\uC624\uB978\uCABD\uC774 \uC815\uB2F5!","\uC774\uB9AC \uC918\uC694!","\uD638\uD638, \uB0B4 \uCC28\uB840!","\uC624\uB978\uCABD\uC73C\uB85C~"],eagerCatch:["\uC774\uC81C\uC57C \uC8FC\uB124!!","\uC624\uB978\uCABD!! \uC624\uB978\uCABD!!"],stroke:["\uC601\uCC28!","\uC624\uB978\uCABD~","\uD761!"],rest:["\uC5ED\uC2DC \uC624\uB978\uCABD\uC774 \uC88B\uC544","\uD638\uD638\uD638"],annoyed:["\uC5B4\uBA38, \uB610 \uC800 \uC591\uBC18\uB9CC?","\uD765\uCE6B\uBFE1","\uB098\uB3C4 \uC9D1\uC8FC\uC778\uC778\uB370!"],steaming:["\uB0B4 \uB4F1\uAE30\uBD80\uB4F1\uBCF8\uC5D4\u2026","\uBD80\uB4E4\uBD80\uB4E4\u2026","\uB178 \uB0B4\uB194\uC694!"],saw:["\uD1B1\uC774 \uC5B4\uB528\uB354\uB77C~","\uBC18\uC73C\uB85C \uB098\uB204\uBA74 \uB418\uC9C0\u2026","\uD6C4\uD6C4\uD6C4"],sawing:["\uBC18\uBC18 \uB098\uB204\uBA74 \uACF5\uD3C9\uD558\uC9C0!","\uC4F1\uC2F9\uC4F1\uC2F9~","\uB0B4 \uBC29\uB9CC \uC3D9!"],appeased:["\u2026\uC774\uBC88\uB9CC \uBD10\uC900\uB2E4.","\uC5B4\uBA38, \uACE0\uB9C8\uC6CC\uB77C~"],farewell:["\uC548\uB155~ \uB0B4 \uBC29\uC740 \uB0B4 \uAC70!","\uC624\uB978\uCABD\uC73C\uB85C \uAC04\uB2E4~","\uC798 \uC9C0\uB0B4\uC694~"],hit:["\uC5B4\uBA38\uB098!","\uB0B4 \uC9D1 \uBCBD!!","\uAE84\uC545!"],near:["\uC5B4\uBA38 \uC0B4\uC558\uB124!","\uD638\uD638, \uC544\uC2AC\uC544\uC2AC~","\uD734~"],dizzy:["\uC5B4\uC9C8\uC5B4\uC9C8~","\uBA40\uBBF8 \uB098\uC694~"],protest:["\uC5B4\uBA38! \uADF8\uAC78 \uC65C \uC370\uC5B4\uC694!","\uADF8\uB9CC\uD574\uC694!"],shock:["\uC5B4\uBA38\uBA38?!","\uC138\uC0C1\uC5D0!"],already:["\uBC8C\uC368 \uB0B4\uAC00 \uB4E4\uACE0 \uC788\uC796\uC544\uC694!"],lone:["\uC774\uC81C \uB2E8\uB3C5\uBA85\uC758!"]},C:{intro:["\uAC00\uC6B4\uB370\uAC00 \uC81C\uC77C \uC548\uC804\uD574\uC694","\uC774 \uC9D1\uC740 \uC81C \uAC70\uC608\uC694, \uAC00\uC6B4\uB370\uBD80\uD130"],catch:["\uAC00\uC6B4\uB370\uB85C!","\uC911\uC2EC\uC744 \uC7A1\uC544\uC57C\uC8E0","\uAC00\uC6B4\uB370\uAC00 \uCD5C\uACE0!","\uC911\uB3C4!"],eagerCatch:["\uC774\uC81C\uC57C \uAC00\uC6B4\uB370!!","\uC911\uC2EC! \uC911\uC2EC!"],stroke:["\uAC00\uC6B4\uB370!","\uC74F\uCC28!","\uADE0\uD615!"],rest:["\uB531 \uC88B\uB2E4","\uC911\uC2EC \uC7A1\uC558\uC5B4\uC694"],annoyed:["\uAC00\uC6B4\uB370\uB3C4 \uC880\u2026","\uC800\uAE30\uC694\u2026","\uD750\uC74C\u2026"],steaming:["\uC911\uB9BD \uAE30\uC5B4 \uBC15\uB294\uB2E4\u2026","\uC800\uB3C4 \uB178 \uC880\u2026!","\uBD80\uAE00\u2026"],saw:["\u2026","\uAC00\uC6B4\uB370\uB9CC \uC3D9 \uBE7C\uBA74\u2026","\uD1B1\uC9C8\uC740 \uC911\uC2EC\uC774\uC8E0"],sawing:["\uAC00\uC6B4\uB370\uB9CC \uAC00\uC838\uAC08\uAC8C\uC694!","\uC4F1\uC2F9\uC4F1\uC2F9","\uBBF8\uC548\uD574\uC694~"],appeased:["\uACE0\uB9C8\uC6CC\uC694, \uC5ED\uC2DC \uC911\uC2EC\uC774\uC8E0","\u2026\uD734, \uCC38\uC558\uB2E4"],farewell:["\uB2E4\uB4E4 \uC798 \uC9C0\uB0B4\uC694~","\uAC00\uC6B4\uB370\uB85C \uAC11\uB2C8\uB2E4~","\uC548\uB155~"],hit:["\uC73C\uC545!","\uC911\uC2EC\uC774 \uBB34\uB108\uC838!","\uC544\uC57C!"],near:["\uD734, \uC911\uC2EC \uC7A1\uC558\uB2E4","\uC544\uC2AC\uC544\uC2AC!","\uC0B4\uC558\uB2E4~"],dizzy:["\uBE59\uAE00\uBE59\uAE00~","\uC911\uC2EC\uC774 \uC5B4\uB514\uC9C0~"],protest:["\uC7A0\uAE50\uB9CC\uC694! \uADF8\uAC74 \uC544\uB2C8\uC8E0!","\uD1B1 \uB0B4\uB824\uB194\uC694!"],shock:["\uD5C9?!","\uC5B4\uC5B4?!"],already:["\uC81C\uAC00 \uB4E4\uACE0 \uC788\uC5B4\uC694!"],lone:["\uC774\uC81C \uC628\uC804\uD788 \uC81C \uC9D1!"]}};function Sc(s,t){let e=F_[s]?.[t];return!e||!e.length?null:e[Math.floor(Math.random()*e.length)]}var le=s=>document.querySelector(s),wc=new C,Ec=class{constructor(t,e,n){this.frame=t,this.camera=e,this.audio=n,this.bubbles={},this.bubbleLayer=le("#bubbles"),this.popLayer=le("#popups"),this.hud=le("#hud"),this.hpEl=le("#hp"),this.hpFill=le("#hp .hp-bar i"),this.trackFill=le("#progress .fill"),this.boat=le("#progress .boat"),this.sectionName=le("#progress .section-name"),this.banner=le("#banner"),this.hint=le("#hint"),this.flash=le("#flash"),this.vignette=le("#vignette"),this.drops=le("#drops"),this.anchors={},this.lastSay={},this.w=1,this.h=1,this.buildTrackMarks()}resize(t,e){this.w=t,this.h=e}buildTrackMarks(){let t=le("#progress .marks"),e={whirl:"\u{1F300}",canyon:"\u26F0\uFE0F",beach:"\u{1F3C1}",rocks:"\u{1FAA8}"};for(let n of nc){if(!e[n.icon])continue;let i=document.createElement("span");i.textContent=e[n.icon],i.style.left=`${Math.max(0,Math.min(100,n.d/He*100))}%`,n.icon==="beach"&&(i.style.left="100%"),t.appendChild(i)}}project(t){return wc.copy(t).project(this.camera),{x:(wc.x*.5+.5)*this.w,y:(-wc.y*.5+.5)*this.h,z:wc.z}}say(t,e,n={}){let i=performance.now(),o=/^[a-zA-Z]+$/.test(e)?Sc(t,e):e;if(!o||!n.force&&this.lastSay[t]&&i-this.lastSay[t]<(n.minGap??900))return;this.lastSay[t]=i;let a=this.bubbles[t];a&&a.el.remove();let c=document.createElement("div");c.className=`bubble ${t}${n.angry?" angry":""}`,c.textContent=o,this.bubbleLayer.appendChild(c),this.bubbles[t]={el:c,until:i+(n.dur??1700),out:!1};let l=n.angry?"angry":n.mood||"normal";this.audio?.voice(t,o,l)}updateBubbles(t){let e=performance.now();for(let n in this.bubbles){let i=this.bubbles[n],r=t(n);if(!r||e>i.until+220){i.el.remove(),delete this.bubbles[n];continue}e>i.until&&!i.out&&(i.out=!0,i.el.classList.add("out"));let o=this.project(r);if(o.z>1){i.el.style.visibility="hidden";continue}i.el.style.visibility="visible";let a=i.el.offsetWidth,c=i.el.offsetHeight,l=o.x-a/2;l=Math.max(4,Math.min(this.w-a-4,l));let h=Math.max(54,o.y-c-18);i.el.style.setProperty("--x",`${l}px`),i.el.style.setProperty("--y",`${h}px`),i.el.style.transform=`translate(${l}px, ${h}px)`}}clearBubbles(){for(let t in this.bubbles)this.bubbles[t].el.remove();this.bubbles={}}popup(t,e,n="",i=null){let r=i||(e?this.project(e):{x:this.w/2,y:this.h*.4}),o=document.createElement("div");o.className=`pop ${n}`,o.textContent=t,o.style.setProperty("--x",`${Math.max(40,Math.min(this.w-40,r.x))}px`),o.style.setProperty("--y",`${Math.max(60,Math.min(this.h-60,r.y))}px`),o.style.setProperty("--r",`${(Math.random()-.5)*16}deg`),this.popLayer.appendChild(o),setTimeout(()=>o.remove(),1300)}showBanner(t,e=""){this.banner.classList.remove("show"),this.banner.offsetWidth,this.banner.innerHTML=`${t}${e?`<small>${e}</small>`:""}`,this.banner.classList.add("show")}setHint(t){if(!t){this.hint.classList.add("hidden");return}this.hint.innerHTML=t,this.hint.classList.remove("hidden")}flashScreen(t=.6,e="#fff"){this.flash.style.transition="none",this.flash.style.background=e,this.flash.style.opacity=t,this.flash.offsetWidth,this.flash.style.transition="opacity 0.45s ease-out",this.flash.style.opacity=0}splashDrops(t=4){for(let e=0;e<t;e++){let n=document.createElement("i"),i=18+Math.random()*46;n.style.width=n.style.height=`${i}px`,n.style.left=`${Math.random()*100}%`,n.style.top=`${10+Math.random()*70}%`,this.drops.appendChild(n),setTimeout(()=>n.remove(),1500)}}tapRing(t,e){let n=document.createElement("div");n.className="tap-ring",n.style.left=`${t}px`,n.style.top=`${e}px`,this.popLayer.appendChild(n),setTimeout(()=>n.remove(),420)}showHUD(t){this.hud.classList.toggle("hidden",!t)}updateHUD(t){let e=t.progress();this.trackFill.style.width=`${e*100}%`,this.boat.style.left=`${e*100}%`;let n=Math.max(0,t.hp);this.hpFill.style.width=`${n*100}%`,this.hpEl.classList.toggle("low",n<.35||t.house.door),this.hpEl.classList.toggle("door",t.house.door),this.sectionName.textContent!==t.section.name&&(this.sectionName.textContent=t.section.name);let i=t.house.door?.5:Math.max(0,(.32-n)/.32);this.vignette.style.opacity=i*(.6+.4*Math.sin(performance.now()/180))}show(t,e){le(t).classList.toggle("hidden",!e)}showEndPanel(t){let e=le("#screen-end .end-panel");e.classList.toggle("fail",!!t.fail),le("#screen-end .end-kicker").textContent=t.kicker,le("#screen-end .end-title").textContent=t.title,le("#screen-end .end-sub").textContent=t.sub,le("#screen-end .end-desc").textContent=t.desc,le("#screen-end .end-captain").textContent=t.captain,le("#screen-end .end-captain").classList.toggle("hidden",!t.captain);let n=le("#screen-end .end-photos");n.innerHTML="";for(let r of t.photos){let o=document.createElement("div");o.className=`polaroid${r.big?" big":""}`,o.style.setProperty("--r",`${(Math.random()-.5)*9}deg`);let a=document.createElement("img");a.src=r.src,a.alt=r.caption;let c=document.createElement("span");c.textContent=r.caption,o.append(a,c),n.appendChild(o)}let i=le("#screen-end .end-stats");i.innerHTML="";for(let r of t.stats){let o=document.createElement("span");o.textContent=r.text,r.badge&&(o.className="badge"),i.appendChild(o)}le("#btn-again").textContent=t.fail?"\uB2E4\uC2DC \uB3C4\uC804!":"\uB2E4\uC2DC \uD0C0\uAE30",this.show("#screen-end",!0),e.scrollTop=0}renderEndingsFound(t){let e=le("#endings-found"),n=Object.keys($i),i=n.filter(r=>t.includes(r)).length;e.innerHTML=`\uBC1C\uACAC\uD55C \uB3C4\uCC29 \uC7A5\uBA74 ${i} / ${n.length}<div class="chips">${n.map(r=>`<span class="${t.includes(r)?"got":""}">${t.includes(r)?$i[r].title:"???"}</span>`).join("")}</div>`}};var _n=s=>document.querySelector(s),mf="gongdong-rafting-v1",O_=new URLSearchParams(location.search);function B_(){try{return JSON.parse(localStorage.getItem(mf))||{endings:[],runs:0}}catch{return{endings:[],runs:0}}}function df(s){try{localStorage.setItem(mf,JSON.stringify(s))}catch{}}var gh=class{constructor(){this.frame=_n("#frame"),this.canvas=_n("#game"),this.renderer=new tc({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setClearColor("#bfe6ff"),this.scene=new mr,this.scene.fog=new pr("#c4e9ff",75,235),this.camera=new qe(56,.5,.3,900),this.rig=new _c(this.camera),this.audio=new bc,this.ui=new Ec(this.frame,this.camera,this.audio),this.fx=new vc(this.scene),Hd(this.scene),this.sky=Vd(this.scene),this.river=Cd(this.scene),Gd(this.scene),Wd(this.scene),this.dock=Yd(this.scene),this.beach=$d(this.scene),this.store=B_(),this.state="title",this.paused=!1,this.photos=[],this.pendingShots=[],this.timers=[],this.hintFlags={},this.newGame(),this.bindInput(),this.resize(),window.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="play"&&this.pause(!0)}),this.ui.renderEndingsFound(this.store.endings),this.last=performance.now(),this.frameTimes=[],this.titleTalkT=1.5,requestAnimationFrame(t=>this.loop(t)),_n("#loading").classList.add("done"),window.__rafting=this}newGame(){this.house&&this.house.dispose(),this.paddle&&this.paddle.obj.parent?.remove(this.paddle.obj);for(let t of this.endingProps||[])t.parent?.remove(t);this.endingProps=[],this.fx.clear(),this.ui.clearBubbles(),this.game=new rc,this.house=new mc(this.scene,this.fx,this.audio,this.ui),this.paddle=new xc(this.house,this.fx,this.audio),this.ctx={views:this.house.views,fx:this.fx,audio:this.audio},eo.copy(this.dock.bollard.position).setY(1.3),this.house.update(0,this.game,this.ctx),this.house.attachMooring(eo),this.photos=[],this.pendingShots=[];for(let t of this.timers)clearTimeout(t);this.timers=[],this.hintFlags={},this.lastRoar=0,this.sprayT=1,this.ending=null,this.rig.setMode("title"),this.rig.blend=1}later(t,e){let n=setTimeout(()=>{this.timers=this.timers.filter(i=>i!==n),e()},t);this.timers.push(n)}resize(){let t=this.frame.getBoundingClientRect(),e=Math.max(1,Math.round(t.width)),n=Math.max(1,Math.round(t.height));this.renderer.setSize(e,n,!1),this.rig.resize(e/n),this.ui.resize(e,n),this.w=e,this.h=n}bindInput(){this.canvas.addEventListener("pointerdown",t=>{if(t.preventDefault(),this.state!=="play"||this.paused)return;let e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top;this.tapAt(n,i)},{passive:!1}),window.addEventListener("keydown",t=>{if(this.state==="play"&&!this.paused){let n={a:"L",arrowleft:"L",s:"C",arrowdown:"C",d:"R",arrowright:"R",1:"L",2:"C",3:"R"}[t.key.toLowerCase()];n&&this.tapOwner(n)}t.key==="Escape"&&this.state==="play"&&this.pause(!this.paused)}),_n("#btn-start").addEventListener("click",()=>this.start()),_n("#btn-pause").addEventListener("click",()=>this.pause(!0)),_n("#btn-resume").addEventListener("click",()=>this.pause(!1)),_n("#btn-restart").addEventListener("click",()=>{this.pause(!1),this.restart()}),_n("#btn-sound").addEventListener("click",()=>{this.audio.setMuted(!this.audio.muted),_n("#btn-sound").textContent=`\uC18C\uB9AC: ${this.audio.muted?"\uAEBC\uC9D0":"\uCF1C\uC9D0"}`}),_n("#btn-music").addEventListener("click",()=>{this.audio.musicOn=!this.audio.musicOn,_n("#btn-music").textContent=`\uC74C\uC545: ${this.audio.musicOn?"\uCF1C\uC9D0":"\uAEBC\uC9D0"}`}),_n("#btn-again").addEventListener("click",()=>this.restart()),_n("#btn-home").addEventListener("click",()=>this.home())}tapAt(t,e){let n=null,i=1/0;for(let r of this.game.aboard()){let o=this.ui.project(this.house.views[r].chestWorld(eo)),a=Math.hypot(o.x-t,(o.y-e)*.85);a<i&&(i=a,n=r)}this.ui.tapRing(t,e),n&&this.tapOwner(n)}tapOwner(t){this.game.tap(t)&&(this.hintFlags.thrown=!0)}start(){this.audio.init(),this.audio.ui(),this.audio.startMusic(),this.ui.show("#screen-title",!1),this.ui.showHUD(!0),this.state="play",this.rig.setMode("play"),this.store.runs++,df(this.store),this.ui.showBanner("\uC900\uBE44\u2026"),this.later(1300,()=>{this.game.launch(),this.house.snapMooring(),this.ui.showBanner("\uCD9C\uBC1C!","\uC138 \uC9D1\uC8FC\uC778, \uB178\uB294 \uD558\uB098"),this.audio.splash(.8)})}restart(){this.ui.show("#screen-end",!1),this.newGame(),this.state="title",this.start()}home(){this.ui.show("#screen-end",!1),this.ui.showHUD(!1),this.ui.setHint(null),this.newGame(),this.state="title",this.ui.show("#screen-title",!0),this.ui.renderEndingsFound(this.store.endings)}pause(t){this.state!=="play"&&t||(this.paused=t,this.ui.show("#screen-pause",t),t?this.audio.suspend():this.audio.resume())}loop(t){requestAnimationFrame(r=>this.loop(r));let e=(t-this.last)/1e3;if(this.last=t,e=Math.min(e,.05),this.adaptQuality(e),this.paused)return;let n=this.game;if(this.state==="play"||this.state==="ending"||this.state==="failed"){this.auto&&this.state==="play"&&this.autopilot(e);for(let r=0;r<(this.fast||1);r++)n.update(e)}else n.update(0);let i=e*n.timeScale;this.handleEvents(),this.house.update(i,n,this.ctx),this.paddle.update(i,n),this.fx.update(i),this.rig.update(e,n,this.ending||{}),this.river.update(performance.now()/1e3,n.house),this.sky.update(this.camera),this.updateAmbience(e),this.state==="play"&&(this.ui.updateHUD(n),this.updateHints(),this.updateSpray(e)),this.state==="title"&&this.titleChatter(e),this.ending&&this.updateEnding(e),this.renderer.render(this.scene,this.camera),this.processShots(),this.ui.updateBubbles(r=>this.bubbleAnchor(r))}adaptQuality(t){if(this.frameTimes.push(t),this.frameTimes.length<90)return;let e=this.frameTimes.reduce((n,i)=>n+i,0)/this.frameTimes.length;this.frameTimes.length=0,e>.026&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio-.35),this.renderer.setPixelRatio(this.pixelRatio),this.resize())}bubbleAnchor(t){let e=this.house.views[t],n=this.game.owners[t];if(!e||!e.root.parent)return null;if(n.state!=="aboard"&&!this.ending){let i=this.game.floaters.find(r=>r.id===t);if(!i||i.d<this.game.house.d-25)return null}return e.headWorld(new C).add(k_)}handleEvents(){let t=this.game,e=this.ui,n=this.audio;for(let i of t.events){let r=i.id?this.house.views[i.id]:null;switch(i.type){case"launch":break;case"throw":{this.house.views[i.from].onThrow(i),this.paddle.onThrow(i);break}case"catch":{r.onCatch(),n.catchTok(this.panOf(i.id)),no(8),i.relay||(i.eager>.6?e.say(i.id,"eagerCatch",{force:!0,mood:"happy"}):Math.random()<.55&&e.say(i.id,"catch",{mood:"happy"}));break}case"stroke":{r.onStroke(i,t),i.big&&(this.rig.punch(.6),this.rig.shake(.12),n.creak(.7));break}case"rest":Math.random()<.08&&e.say(i.id,"rest",{minGap:4e3});break;case"already":e.say(i.id,"already",{minGap:2500});break;case"stage":{if(!i.up)break;let a=[null,"annoyed","steaming","saw"][i.stage];a&&e.say(i.id,a,{force:!0,angry:i.stage>=2}),i.stage===Nn.STEAMING&&n.steamWhistle(),i.stage===Nn.SAW&&(n.sawTwang(),this.hintFlags.saw||(this.hintFlags.saw=!0,this.flashHint(`\uD1B1\uC744 \uAEBC\uB0C8\uB2E4! \uADF8 \uC0AC\uB78C\uC5D0\uAC8C <b class="${i.id}">\uB178\uB97C \uB358\uC838</b> \uB2EC\uB798 \uC8FC\uC138\uC694`,4200))),i.stage===Nn.STEAMING&&!this.hintFlags.steam&&(this.hintFlags.steam=!0,this.flashHint("\uB178\uB97C \uC624\uB798 \uBABB \uBC1B\uC73C\uBA74 <b>\uC090\uCCD0\uC694</b>. \uAC00\uB054\uC740 \uB118\uACA8 \uC8FC\uC138\uC694",3800));break}case"sawStart":{e.say(i.id,"sawing",{force:!0,angry:!0}),e.popup("\uC4F1\uC2F9\uC4F1\uC2F9",r.headWorld(eo),"saw");for(let o of t.aboard())o!==i.id&&(this.house.views[o].onShock(new C(r.pos.x,0,r.pos.y)),this.later(500+Math.random()*400,()=>e.say(o,"protest",{force:!0,angry:!0})));break}case"appease":{r.onAppease(),e.say(i.id,"appeased",{force:!0}),e.popup(i.last?"\uB9C9\uD310 \uB2EC\uB798\uAE30!":"\uB2EC\uB798\uAE30 \uC131\uACF5!",r.headWorld(eo),"good"),n.stinger("appease");break}case"detach":this.onDetach(i);break;case"hit":this.onHit(i);break;case"scrape":this.house.onScrape(i,t),Math.random()<.4&&e.popup("\uB07C\uC774\uC775",this.house.root.position.clone().setY(2),"small");break;case"nearMiss":{let o=this.house.root.position.clone();if(o.y=2.5,i.thrill){e.popup("\uC544\uC2AC\uC544\uC2AC!",o,"thrill"),this.rig.punch(1),n.nearMiss(!0),i.by&&t.owners[i.by].state==="aboard"&&e.say(i.by,"near",{force:!0,mood:"happy"});for(let a of t.aboard())a!==i.by&&Math.random()<.5&&this.house.views[a].onCheer(.9)}else e.popup("\uD734~",o,"small"),n.nearMiss(!1);break}case"whirlEnter":e.popup("\uBE59\uAE00\uBE59\uAE00~",this.house.root.position.clone().setY(3),"thrill"),n.stinger("whirl");for(let o of t.aboard())this.later(300+Math.random()*500,()=>e.say(o,"dizzy"));break;case"whirlExit":e.popup(i.early?"\uD0C8\uCD9C!":"\uD718\uC775!",this.house.root.position.clone().setY(3),"good"),n.whoosh(),this.rig.shake(.2);break;case"section":this.onSection(i);break;case"canyonGate":break;case"canyonPassed":{let o={squeeze:"\uC5B5\uC9C0\uB85C \uBE44\uC9D1\uACE0 \uD1B5\uACFC!",sideways:"\uC606\uC73C\uB85C \uB07C\uC6CC \uD1B5\uACFC!",slim:"\uB0A0\uC52C\uD558\uAC8C \uD1B5\uACFC!",clean:"\uAE54\uB054\uD558\uAC8C \uD1B5\uACFC!"}[i.method];e.popup(o,this.house.root.position.clone().setY(3),i.method==="squeeze"?"small":"good");break}case"shatter":this.onShatter(i);break;case"fail":this.onFail(i);break;case"arrive":this.onArrive(i);break;default:break}}t.events.length=0}panOf(t){return t==="L"?-.5:t==="R"?.5:0}flashHint(t,e){this.ui.setHint(t),this.hintUntil=performance.now()+e}updateHints(){let t=this.game,e=performance.now();this.hintUntil&&e<this.hintUntil||(this.hintUntil&&e>=this.hintUntil&&(this.hintUntil=0,this.ui.setHint(null)),t.state==="running"&&(this.hintFlags.thrown?this.hintFlags.firstDone||(this.hintFlags.firstDone=!0,this.flashHint("\uBC1B\uC740 \uC0AC\uB78C\uC740 <b>\uC790\uAE30 \uCABD\uC73C\uB85C\uB9CC</b> \uC800\uC5B4\uC694!",2600)):t.house.d>52?this.ui.setHint('\uBC14\uC704\uB2E4! <b class="L">\uC88C\uBD09\uC2DD</b>(\u2190) \uC774\uB098 <b class="R">\uC6B0\uB9D0\uC21C</b>(\u2192) \uC744 \uD0ED!'):this.ui.setHint("\uC9D1\uC8FC\uC778\uC744 <b>\uD0ED</b>\uD558\uBA74 \uB178\uAC00 \uB0A0\uC544\uAC00\uC694")))}onSection(t){let e={"\uCCAB \uC5EC\uC6B8":"\uBC14\uC704\uAC00 \uBAB0\uB824\uC628\uB2E4","\uBC14\uC704 \uC815\uC6D0":"\uD2C8\uC744 \uB178\uB824\uB77C","\uC18C\uC6A9\uB3CC\uC774 \uAD7D\uC774":"\uB4E4\uC5B4\uAC00\uBA74 \uD55C \uBC14\uD034 \uB3CC\uACE0 \uD295\uACA8 \uB098\uAC00\uC694","\uC881\uC740 \uD611\uACE1":"\uC9D1\uC774 \uB113\uC73C\uBA74 \uC591\uCABD \uBCBD\uC5D0 \uAE01\uD600\uC694","\uB458\uC9F8 \uC5EC\uC6B8":"\uBB3C\uC0B4\uC774 \uAC70\uC138\uC9C4\uB2E4","\uB9C8\uC9C0\uB9C9 \uAE09\uB958":"\uAE30\uC2AD\uAE4C\uC9C0 \uBC84\uD168\uB77C!",\uAE30\uC2AD:"\uAC70\uC758 \uB2E4 \uC654\uB2E4!"};this.ui.showBanner(`${t.name}!`,e[t.name]||""),this.audio.stinger("section")}onHit(t){let e=this.game,n=t.strength;if(t.door){this.ui.popup("\uCA4C\uC5B5!",this.house.root.position.clone().setY(1.5),"hit"),this.audio.crash(.9),this.rig.shake(.8),this.ui.flashScreen(.5,"#ff6a4a"),no([60,30,60]);let o=e.paddle.holder;o&&this.ui.say(o,"\uBB38\uC9DD\uC5D0 \uAE08\uC774 \uAC14\uC5B4!!",{force:!0,angry:!0});return}this.house.onHit(t,e);let i=this.house.root.position.clone();i.y=2,this.ui.popup(n>.7?"\uCF85!!":t.kind==="bank"?"\uCFF5!":"\uCF85!",i,"hit"),this.audio.crash(n),this.rig.shake(.35+n*.6),this.ui.flashScreen(.18+n*.25),no(Math.round(30+50*n)),this.ui.splashDrops(Math.round(2+4*n));let r=e.aboard();if(r.length){let o=r[Math.floor(Math.random()*r.length)];this.ui.say(o,"hit",{force:!0,angry:!0})}}onDetach(t){let e=this.game,n=this.house.views[t.id];this.house.onDetach(t,e),this.audio.drop(),no([30,30,30]);let i=n.headWorld(new C);this.ui.popup("\uB611!",i,"drop"),this.rig.shake(.25),this.later(900,()=>this.ui.say(t.id,"farewell",{force:!0,mood:"happy",dur:2400}));for(let a of e.aboard())this.house.views[a].onShock(new C(n.pos.x,0,n.pos.y)),this.later(400+Math.random()*500,()=>this.ui.say(a,"shock",{force:!0}));e.aboard().length===1&&this.later(2600,()=>this.ui.say(e.aboard()[0],"lone",{force:!0}));let r=si[t.id].name,o={L:"\uCE68\uB300\uC640 \uC7A5\uBBF8 \uD654\uBD84",R:"\uCE68\uB300\uC640 \uD574\uBC14\uB77C\uAE30 \uD654\uBD84",C:"\uCE68\uB300\uC640 \uC120\uC778\uC7A5"}[t.id];this.pendingShots.push({at:performance.now()+1150,key:`room-${t.id}`,caption:`${r}, ${o}\uACFC \uD568\uAED8 \uB5A0\uB098\uB2E4 \xB7 ${Math.round(t.d)}m`})}onShatter(t){let e=this.game;this.house.onShatter(t,e),this.paddle.obj.parent!==this.house.views[t.rider].root&&this.house.views[t.rider].root.attach(this.paddle.obj),this.ui.popup("\uC640\uC7A5\uCC3D!!",this.house.root.position.clone().setY(2.5),"thrill"),this.audio.crash(1),this.audio.stinger("shatter"),this.rig.shake(1),this.ui.flashScreen(.7),this.ui.splashDrops(8),no([80,40,120]),this.later(700,()=>this.ui.say(t.rider,"\uB0B4 \uC9D1\uC774\u2026 \uBB38\uC9DD\uB9CC \uB0A8\uC558\uC5B4!",{force:!0,angry:!0,dur:2200}));for(let n of t.overboard)this.later(1200+Math.random()*600,()=>this.ui.say(n,"\uC5B4\uD478\uC5B4\uD478!",{force:!0}));this.flashHint("\uBB38\uC9DD \uD55C \uC7A5! <b>\uBC14\uC704 \uD55C \uBC88\uB9CC \uB354 \uB9DE\uC73C\uBA74 \uB05D</b>",3500),this.pendingShots.push({at:performance.now()+500,key:"house",caption:`\uC640\uC7A5\uCC3D! \xB7 ${Math.round(e.house.d)}m`})}onFail(){let t=this.game;this.state="failed",this.ui.setHint(null),this.fx.burst(this.house.root.position,1.5),this.audio.crash(1),this.audio.failJingle(),this.audio.stopMusic(),this.rig.setMode("fail");let e=t.paddle.holder;e&&(this.house.views[e].forced="swim",this.ui.say(e,"\uC5B4\uD478\u2026 \uB0B4 \uC9D1\u2026!",{force:!0,dur:2500})),this.house.doorRaft&&(this.house.doorRaft.rotation.z=.5),this.later(2400,()=>this.showFail())}showFail(){let t=this.game,e=Math.round(t.progress()*100),n=this.photos.map(i=>({src:i.src,caption:i.caption}));this.ui.showHUD(!1),this.ui.showEndPanel({fail:!0,kicker:"\uCE68\uBAB0",title:"\uBB38\uC9DD\uB9C8\uC800 \uCABC\uAC1C\uC84C\uB2E4!",sub:`\uAE30\uC2AD\uAE4C\uC9C0 ${e}% \uC654\uC5B4\uC694`,desc:"\uC9D1\uB3C4, \uBB38\uC9DD\uB3C4 \uAC15\uBB3C\uC5D0 \uD769\uC5B4\uC84C\uB2E4. \uADF8\uB798\uB3C4 \uC138 \uC0AC\uB78C\uC740 \uC5B4\uB518\uAC00\uC5D0\uC11C \uB610 \uC11C\uB85C \uC790\uAE30 \uC9D1\uC774\uB77C\uACE0 \uC6B0\uAE30\uACE0 \uC788\uC744 \uAC83\uC774\uB2E4. \uB2E4\uC2DC \uD55C \uBC88?",captain:"",photos:n,stats:this.statLines()})}onArrive(t){let e=this.game;this.state="ending",this.ui.setHint(null),this.ui.showHUD(!1),this.audio.stopMusic(),this.later(400,()=>this.audio.fanfare()),this.ui.showBanner("\uB3C4\uCC29!",$i[t.ending].title),this.ending={id:t.ending,t:0,steps:new Set,endD:e.house.d+12.5,endU:0,endH:0},this.rig.setMode("end"),this.store.endings.includes(t.ending)||(this.store.endings.push(t.ending),this.ending.isNew=!0),df(this.store),this.parkDeparted();for(let n of e.aboard())this.house.views[n].forced="cheer",this.house.views[n].forcedFace=Math.PI}parkDeparted(){let t=this.game,e=t.house.u,n=t.house.d,i=[[-3.4,7.2],[3.4,7.2],[-2.4,10.6],[2.4,10.6],[0,12.5]],r=["L","R","C"],o=[...t.floaters].sort((a,c)=>r.indexOf(a.id)-r.indexOf(c.id));o.forEach((a,c)=>{let l=a.kind==="room"?`room-${a.id}`:`swim-${a.id}`,h=this.house.floaterViews.get(l);if(!h)return;let u=i[Math.min(c,i.length-1)];o.length===1&&(u=a.id==="R"?i[1]:i[0]);let f=e+u[0],p=Math.max(n+u[1],Yi(f)+1.5);se(f,p,qs),h.parked=!0,h.keep=!0,h.container.visible=!0;let m=a.kind==="room"?-.5:.15;h.container.position.set(qs.x,this.beach.heightAt(f,p)+m,qs.z),h.container.rotation.set(0,-xn(p)+Math.PI+(u[0]<0?-.35:.35),0),h.skirt&&(h.skirt.visible=!1);let x=this.house.views[a.id];x.forced="farewell",x.forcedFace=0})}updateEnding(t){let e=this.ending,n=this.game;e.t+=t;let i=(c,l,h)=>{e.t>=l&&!e.steps.has(c)&&(e.steps.add(c),h())};if(this.state==="failed")return;let r=n.aboard(),o=this.house.views,a=e.id;if(i("beachSplash",.3,()=>{this.fx.splash(this.house.root.position,2),this.audio.thud(.6)}),i("departedWave",1.6,()=>{for(let c of n.floaters)this.later(Math.random()*600,()=>this.ui.say(c.id,c.kind==="room"?"\uB2A6\uC5C8\uB124~!":"\uC5EC\uAE30\uC57C~!",{force:!0,mood:"happy",dur:2200}))}),i("confetti",1.2,()=>{se(0,He+12,qs),this.fx.confetti(new C(qs.x,5,qs.z),80)}),a==="fair")i("hug",2.2,()=>{for(let c of r){let l=o[c];l.forced="hug",l.forcedPos={x:c==="L"?-.9:c==="R"?.9:0,z:.9},l.forcedFace=c==="C"?Math.PI:c==="L"?Math.PI/2:-Math.PI/2}}),i("claim",3.8,()=>{for(let c of r)o[c].forced="point",o[c].forcedFace=Math.PI+(c==="L"?.6:c==="R"?-.6:0),o[c].forcedPos=null,this.later(Math.random()*200,()=>this.ui.say(c,"\uB0B4 \uC9D1!",{force:!0,angry:!0,dur:2e3}))});else if(a==="wreck")i("lastWall",1.6,()=>{let c=this.house.pieces.find(l=>l.kind==="wall"&&l.state<2&&this.house.present.has(l.part));c&&(c.state=2,c.anim={type:"fall",t:0,w:0})}),i("cheer",3.2,()=>{for(let c of r)o[c].forced="cheer",this.ui.say(c,["\uADF8\uB798\uB3C4 \uC9D1\uC774\uB2E4!","\uC14B \uB2E4 \uC0B4\uC558\uB2E4!","\uBCBD\uC740 \uB610 \uC138\uC6B0\uBA74 \uB3FC!"][Sn.indexOf(c)],{force:!0,mood:"happy",dur:2e3})});else if(a==="two")i("shake",2,()=>{let[c,l]=r;o[c].forced="handshake",o[l].forced="handshake",this.ui.say(c,"\uC6B0\uB9AC \uB458\uC774 \uBC18\uBC18!",{force:!0,mood:"happy"})}),i("eye",3.6,()=>{for(let c of r)o[c].forced="saw",this.ui.say(c,"\u2026\uBC18\uBC18?",{force:!0,dur:1800});this.showMiddleCut()});else if(a==="alone")i("flag",2,()=>{let c=r[0],l=o[c];l.forced="flag";let h=new Et;V(O.cyl(.03,.03,1.6,6),"#5b3a1e",h,[0,.8,0],[0,0,0],.015);let u=V(O.box(.6,.4,.02),si[c].color,h,[.3,1.4,0],[0,0,0],.015);h.position.set(.35,0,.35),l.root.add(h),this.endingProps.push(h),this.ui.say(c,Sc(c,"lone"),{force:!0,mood:"happy",dur:2400})});else if(a==="door"){let c=this.house.doorRaft;if(i("standUp",1.8,()=>{this.ui.say(r[0],"\uC601\uCC28\u2026",{force:!0})}),c&&e.t>1.8){let l=It((e.t-1.8)/.8,0,1);c.rotation.x=-l*Math.PI/2,c.position.set(0,l*1.05,-l*1);let h=o[r[0]];h&&h.root.parent===c&&l>.05&&(this.house.tilt.attach(h.root),h.forcedPos={x:0,z:.9},h.forcedFace=Math.PI,h.root.position.y=.25)}i("greet",3,()=>this.ui.say(r[0],"\uB2E4\uB140\uC654\uC2B5\uB2C8\uB2E4~",{force:!0,mood:"happy",dur:2200})),i("walkIn",4.2,()=>{let l=o[r[0]];l.forcedPos={x:0,z:-1.6},this.audio.thud(.4)})}i("photo",4.6,()=>{this.pendingShots.push({at:0,key:"final",caption:`${$i[a].title} \xB7 ${ff(n.stats.time)}`,big:!0})}),i("panel",5.4,()=>this.showEnd())}showMiddleCut(){let t=new Et;for(let e=0;e<12;e++)V(O.box(.05,.02,.16),"#ffffff",t,[0,xt+.02,-2.2+e*.32],[0,0,0],0);this.house.tilt.add(t),this.endingProps.push(t)}showEnd(){let t=this.game,e=$i[this.ending.id],n=t.aboard(),i=l=>si[l].name,r=t.stats.lost.map(l=>i(l.id)),o="";switch(this.ending.id){case"fair":o='\uB178\uB97C \uC774\uB9AC\uC800\uB9AC \uACF5\uD3C9\uD558\uAC8C \uB358\uC9C4 \uB355\uC5D0 \uC14B \uB2E4 \uC628\uC804\uD55C \uC9D1\uC73C\uB85C \uAE30\uC2AD\uC5D0 \uB2FF\uC558\uB2E4. \uB0B4\uB9AC\uC790\uB9C8\uC790 \uC11C\uB85C "\uB0B4 \uC9D1!"\uC774\uB77C\uBA70 \uC0BF\uB300\uC9C8\uC744 \uC2DC\uC791\uD55C\uB2E4.';break;case"wreck":o="\uC9C0\uBD95\uC740 \uB5A0\uB0B4\uB824\uAC00\uACE0 \uBCBD\uC740 \uC4F0\uB7EC\uC84C\uC9C0\uB9CC, \uC14B\uC740 \uB05D\uAE4C\uC9C0 \uD568\uAED8 \uB178\uB97C \uB3CC\uB838\uB2E4. \uB9C8\uC9C0\uB9C9 \uB0A8\uC740 \uBCBD\uC774 \uCFF5 \uD558\uACE0 \uC4F0\uB7EC\uC9C0\uC790 \uC14B\uC774 \uB3D9\uC2DC\uC5D0 \uC6C3\uC74C\uC744 \uD130\uB728\uB9B0\uB2E4.";break;case"two":o=`${r[0]}\uC740 \uC790\uAE30 \uBC29\uC744 \uC370\uC5B4 \uD0C0\uACE0 \uBA3C\uC800 \uC640\uC11C \uBAA8\uB798\uBC2D\uC5D0 \uB204\uC6CC \uC788\uC5C8\uB2E4. \uB0A8\uC740 ${n.map(i).join("\uACFC ")}\uC740 \uC545\uC218\uB97C \uD558\uB2E4 \uB9D0\uACE0, \uC9D1 \uD55C\uAC00\uC6B4\uB370 \uADF8\uC5B4\uC9C4 \uC808\uCDE8\uC120\uC744 \uBC14\uB77C\uBCF8\uB2E4.`;break;case"alone":o=`${r.join("\uACFC ")}\uC740 \uAC01\uC790 \uBC29\uC744 \uC370\uC5B4 \uB5A0\uB0AC\uACE0, \uBC8C\uC368 \uAE30\uC2AD\uC5D0\uC11C \uC190\uC744 \uD754\uB4E4\uACE0 \uC788\uB2E4. ${n.map(i)[0]}\uC774 \uB0A8\uC740 \uC9D1\uC5D0 \uAE43\uBC1C\uC744 \uAF42\uB294\uB2E4. "\uC774\uC81C \uB2E8\uB3C5\uBA85\uC758!"`;break;case"door":o=`\uC9D1\uC740 \uC0B0\uC0B0\uC870\uAC01 \uB0AC\uC9C0\uB9CC ${n.map(i)[0]}\uC740 \uB05D\uAE4C\uC9C0 \uBB38\uC9DD \uD55C \uC7A5\uC744 \uC800\uC5B4 \uAE30\uC2AD\uC5D0 \uB2FF\uC558\uB2E4. \uBB38\uC9DD\uC744 \uC138\uC6B0\uACE0, \uBB38\uC744 \uC5F4\uACE0, \uB4E4\uC5B4\uAC04\uB2E4. "\uB2E4\uB140\uC654\uC2B5\uB2C8\uB2E4."`;break;default:break}let a=[],c=this.photos.find(l=>l.key==="final");c&&a.push({src:c.src,caption:c.caption,big:!0});for(let l of this.photos)l.key!=="final"&&a.push({src:l.src,caption:l.caption});this.ui.showEndPanel({kicker:this.ending.isNew?"\uC0C8 \uB3C4\uCC29 \uC7A5\uBA74 \uBC1C\uACAC!":"\uB3C4\uCC29",title:e.title,sub:e.sub,desc:o,captain:`\u{1F3C5} ${this.captainTitle()}`,photos:a,stats:this.statLines()})}captainTitle(){let t=this.game.stats,e=this.game.aboard().length;return this.ending?.id==="door"?"\uBB38\uC9DD \uC120\uC7A5":e===3&&t.hits<=2?"\uACF5\uD3C9\uBB34\uC0AC \uBA85\uC120\uC7A5":t.lastSecondAppease>=1&&e===3?"\uB9C9\uD310 \uB2EC\uB798\uAE30\uC758 \uB2EC\uC778":t.thrills>=6?"\uC544\uC2AC\uC544\uC2AC \uC804\uBB38 \uC120\uC7A5":t.lost.length>=2?"\uB0C9\uC815\uD55C \uC120\uC7A5":t.whirlRides>=2?"\uBE59\uAE00\uBE59\uAE00 \uC120\uC7A5":t.canyon==="sideways"?"\uC606\uAC78\uC74C \uC120\uC7A5":t.appeased>=3?"\uB2EC\uB798\uAE30 9\uB2E8 \uC120\uC7A5":t.hits>=8?"\uBD80\uB52A\uD788\uBA70 \uBC30\uC6B0\uB294 \uC120\uC7A5":"\uC5BC\uB5A8\uACB0\uC5D0 \uC120\uC7A5"}statLines(){let t=this.game.stats,e=[{text:`\u23F1 ${ff(t.time||this.game.runTime)}`},{text:`\uB178 \uB358\uC9C0\uAE30 ${t.throws}\uBC88`},{text:`\uC544\uC2AC\uC544\uC2AC ${t.thrills}\uBC88`},{text:`\uCF85! ${t.hits}\uBC88`}];t.appeased&&e.push({text:`\uB2EC\uB798\uAE30 ${t.appeased}\uBC88`,badge:!0}),t.lastSecondAppease&&e.push({text:"\uB9C9\uD310 \uB2EC\uB798\uAE30 \uC131\uACF5",badge:!0}),t.whirlRides&&e.push({text:`\uC18C\uC6A9\uB3CC\uC774 ${t.whirlRides}\uBC14\uD034`,badge:!0});let n={squeeze:"\uD611\uACE1: \uC5B5\uC9C0\uB85C \uBE44\uC9D1\uAE30",sideways:"\uD611\uACE1: \uC606\uC73C\uB85C \uB07C\uC6B0\uAE30",slim:"\uD611\uACE1: \uB0A0\uC52C\uD558\uAC8C",clean:"\uD611\uACE1: \uAE54\uB054\uD558\uAC8C"}[t.canyon];return n&&e.push({text:n,badge:t.canyon!=="squeeze"}),t.keaton&&e.push({text:"\uCC3D\uBB38 \uAD6C\uBA4D\uC73C\uB85C \uC0B4\uC544\uB0A8\uAE30",badge:!0}),t.lost.length&&e.push({text:`\uB5A0\uB098\uBCF4\uB0B8 \uBC29 ${t.lost.length}\uAC1C`}),e}processShots(){if(!this.pendingShots.length)return;let t=performance.now();for(let e=this.pendingShots.length-1;e>=0;e--){let n=this.pendingShots[e];if(t<n.at)continue;this.pendingShots.splice(e,1);let i;if(n.key==="final")i={x:this.w/2,y:this.h*.45};else if(n.key==="house")i=this.ui.project(this.house.root.position);else{let o=this.house.floaterViews.get(n.key);if(!o)continue;i=this.ui.project(o.container.getWorldPosition(new C).setY(1))}let r=this.snapshot(i,n.big?.9:.55,n.caption);r&&this.photos.push({key:n.key,src:r,caption:n.caption})}}snapshot(t,e,n){try{let i=document.createElement("canvas"),r=300;i.width=r,i.height=r;let o=i.getContext("2d"),a=this.renderer.domElement,c=a.width/this.w,l=Math.min(a.width,a.height)*e,h=t.x*c-l/2,u=t.y*c-l/2;return h=It(h,0,a.width-l),u=It(u,0,a.height-l),o.drawImage(a,h,u,l,l,0,0,r,r),o.fillStyle="rgba(255, 220, 160, 0.12)",o.fillRect(0,0,r,r),i.toDataURL("image/jpeg",.82)}catch{return null}}debugJump(t,e=0){let n=this.game.house;n.d=t,n.u=e,n.vu=0,n.vd=nn(t),n.psi=0,n.omega=0,n.whirl=null,n.whirlCooldown=1,this.rig.d=t,this.rig.u=e*.72}autopilot(t){let e=this.auto;if(e.t=(e.t||0)+t*(this.fast||1),e.t<.3)return;e.t=0;let n=this.game,i=n.house;if(n.paddle.flight)return;let r=(i.maxU-i.minU)/2,o=(i.maxU+i.minU)/2-i.u,a=i.u+i.vu*.9,c=Me(i.d+15),l=a,h=1/0;for(let x=-c+r-o;x<=c-r-o;x+=.4){let g=Math.abs(x-a)*.06;for(let d of De){let v=d.d-i.d;if(v<-4)continue;if(v>38)break;let b=Math.abs(x+o-d.u)-(r+d.r+.7);b<0&&(g+=(-b+1.5)*(1.6-Math.max(0,v)/38)*3)}for(let d of Un)d.d-i.d>-2&&d.d-i.d<38&&Math.abs(x-d.u)<d.capture+.5&&(g+=e.whirl?-3:8);g<h&&(h=g,l=x)}let u=l-a,f=n.aboard(),p=x=>x==="L"?-1:x==="R"?1:Math.abs(i.u)<.9?0:-Math.sign(i.u),m=n.paddle.holder;if(Math.abs(u)>1){let x=f.filter(g=>p(g)===Math.sign(u));x.length&&!x.includes(m)&&(m=x.sort((g,d)=>n.owners[d].sulk-n.owners[g].sulk)[0])}if(e.fair)for(let x of f)(n.owners[x].sawing||n.owners[x].sulk>.9)&&Math.abs(u)<2.5&&(m=x);e.ditch&&m===e.ditch&&(m=n.paddle.holder),m&&m!==n.paddle.holder&&this.tapOwner(m)}updateAmbience(t){let e=this.game,n=e.house,i=0,r=0;for(let f of De){let p=f.d-n.d;if(p<-6)continue;if(p>40)break;let m=Math.abs(f.u-n.u),x=f.r/2.2*(1-Math.max(0,p)/40)*(1-Math.min(1,m/16));x>i&&(i=x,r=It((f.u-n.u)/10,-1,1))}let o=0;for(let f of Un){let p=Math.hypot(f.u-n.u,f.d-n.d);o=Math.max(o,1-Math.min(1,p/26))}n.whirl&&(o=1);let a=bi(n.d),c=Os(n.d),l=0,h=0;for(let f of Sn){let p=e.owners[f];p.state==="aboard"&&p.sawing&&(l=1,h=this.panOf(f))}let u=It((nn(n.d)-3)/8,0,1);this.lastRoar=i,this.audio.update(t,{active:this.state==="play"||this.state==="ending",speedK:u,roar:It(i,0,1),roarPan:r,rough:a,whirl:o,canyon:It((c-5)/12,0,1),scrape:n.scraping,damage:It(1-e.hp,0,1),sway:It(Math.abs(n.rollV)*1.2,0,1),sawing:this.state==="play"?l:0,sawPan:h,musicIntensity:this.state==="title"?.4:a>.5||i>.5?1:.5})}updateSpray(t){let e=this.game,n=e.house,i=Math.max(this.lastRoar*1.1,bi(n.d)*.7)*(e.state==="running"?1:0);if(this.sprayT-=t*(.4+i*2.2),this.sprayT<=0&&i>.3){this.sprayT=.6+Math.random()*.8;let r=new C((Math.random()-.5)*6,.5,-2.8);this.house.tilt.localToWorld(r);let o=new C(0,0,1).applyQuaternion(this.house.root.quaternion);this.fx.spray(r,o,i),i>.65&&Math.random()<.5&&this.ui.splashDrops(1+Math.round(i*2)),this.audio.splash(.3+i*.4,Math.random()-.5)}}titleChatter(t){if(this.titleTalkT-=t,this.titleTalkT<=0){this.titleTalkT=2.2+Math.random()*1.2;let e=Sn[Math.floor(Math.random()*3)];this.ui.say(e,"intro",{force:!0,dur:1900});for(let n of Sn)n!==e&&Math.random()<.4&&this.house.views[n].onCheer(.6)}}},eo=new C,k_=new C(0,.5,0),qs={x:0,z:0};function no(s){try{navigator.vibrate&&navigator.vibrate(s)}catch{}}function ff(s){let t=Math.floor(s/60),e=Math.floor(s%60);return`${t}:${String(e).padStart(2,"0")}`}function pf(){let s=()=>{try{new gh}catch(t){console.error(t);let e=document.querySelector("#loading");e&&(e.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 3D\uB97C \uCF24 \uC218 \uC5C6\uC5B4\uC694 (WebGL \uD544\uC694)")}};document.fonts&&document.fonts.load?Promise.race([document.fonts.load("40px Jua"),new Promise(t=>setTimeout(t,1500))]).then(s,s):s()}O_.has("nostart")?window.__boot=pf:pf();})();
