(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="170",Ii={ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eh=0,Mo=1,nh=2,Zl=1,Kl=2,bn=3,Yn=0,He=1,$e=2,Wn=0,Ui=1,So=2,bo=3,Eo=4,ih=5,si=100,sh=101,rh=102,ah=103,oh=104,lh=200,ch=201,hh=202,uh=203,aa=204,oa=205,dh=206,fh=207,ph=208,mh=209,gh=210,_h=211,vh=212,xh=213,yh=214,la=0,ca=1,ha=2,ki=3,ua=4,da=5,fa=6,pa=7,$l=0,Mh=1,Sh=2,Xn=0,bh=1,Eh=2,wh=3,Jl=4,Th=5,Ah=6,Rh=7,Ql=300,Bi=301,zi=302,ma=303,ga=304,fr=306,ar=1e3,oi=1001,_a=1002,qe=1003,Ch=1004,Ss=1005,un=1006,xr=1007,li=1008,Pn=1009,tc=1010,ec=1011,us=1012,ja=1013,ui=1014,An=1015,ps=1016,Za=1017,Ka=1018,Hi=1020,nc=35902,ic=1021,sc=1022,rn=1023,rc=1024,ac=1025,Ni=1026,Gi=1027,oc=1028,$a=1029,lc=1030,Ja=1031,Qa=1033,Zs=33776,Ks=33777,$s=33778,Js=33779,va=35840,xa=35841,ya=35842,Ma=35843,Sa=36196,ba=37492,Ea=37496,wa=37808,Ta=37809,Aa=37810,Ra=37811,Ca=37812,Pa=37813,La=37814,Da=37815,Ia=37816,Ua=37817,Na=37818,Fa=37819,Oa=37820,ka=37821,Qs=36492,Ba=36494,za=36495,cc=36283,Ha=36284,Ga=36285,Va=36286,Ph=3200,Lh=3201,hc=0,Dh=1,Hn="",Ye="srgb",Yi="srgb-linear",pr="linear",le="srgb",gi=7680,wo=519,Ih=512,Uh=513,Nh=514,uc=515,Fh=516,Oh=517,kh=518,Bh=519,To=35044,Ao="300 es",Rn=2e3,or=2001;class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tr=Math.PI/180,lr=180/Math.PI;function ms(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function zh(i,t){return(i%t+t)%t}function yr(i,t,e){return(1-e)*i+e*t}function $i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Hh={DEG2RAD:tr};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,s,r,a,o,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],u=s[6],S=s[1],b=s[4],x=s[7],L=s[2],A=s[5],R=s[8];return r[0]=a*_+o*S+l*L,r[3]=a*m+o*b+l*A,r[6]=a*u+o*x+l*R,r[1]=c*_+h*S+d*L,r[4]=c*m+h*b+d*A,r[7]=c*u+h*x+d*R,r[2]=f*_+p*S+g*L,r[5]=f*m+p*b+g*A,r[8]=f*u+p*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Mr.makeScale(t,e)),this}rotate(t){return this.premultiply(Mr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mr=new zt;function dc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gh(){const i=cr("canvas");return i.style.display="block",i}const Ro={};function as(i){i in Ro||(Ro[i]=!0,console.warn(i))}function Vh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Wh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?pr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Co=[.64,.33,.3,.6,.15,.06],Po=[.2126,.7152,.0722],Lo=[.3127,.329],Do=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Io=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Yi]:{primaries:Co,whitePoint:Lo,transfer:pr,toXYZ:Do,fromXYZ:Io,luminanceCoefficients:Po,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:Co,whitePoint:Lo,transfer:le,toXYZ:Do,fromXYZ:Io,luminanceCoefficients:Po,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}});let _i;class Yh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=cr("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qh=0;class fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sr(s[a].image)):r.push(Sr(s[a]))}else r=Sr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jh=0;class Ue extends pi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=oi,s=oi,r=un,a=li,o=rn,l=Pn,c=Ue.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=ms(),this.name="",this.source=new fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ar:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ar:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Ql;Ue.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,x=(p+1)/2,L=(u+1)/2,A=(h+f)/4,R=(d+_)/4,D=(g+m)/4;return b>x&&b>L?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=R/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=D/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zh extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends Zh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pc extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kh extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==p||h!==g){let m=1-o;const u=l*f+c*p+h*g+d*_,S=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const L=Math.sqrt(b),A=Math.atan2(L,u*S);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}const x=o*S;if(l=l*m+f*x,c=c*m+p*x,h=h*m+g*x,d=d*m+_*x,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*p-c*f,t[e+1]=l*g+h*f+c*d-o*p,t[e+2]=c*g+h*p+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return br.copy(this).projectOnVector(t),this.sub(br)}reflect(t){return this.sub(br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new C,Uo=new fi;class gs{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),Es.subVectors(this.max,Ji),vi.subVectors(t.a,Ji),xi.subVectors(t.b,Ji),yi.subVectors(t.c,Ji),In.subVectors(xi,vi),Un.subVectors(yi,xi),Kn.subVectors(vi,yi);let e=[0,-In.z,In.y,0,-Un.z,Un.y,0,-Kn.z,Kn.y,In.z,0,-In.x,Un.z,0,-Un.x,Kn.z,0,-Kn.x,-In.y,In.x,0,-Un.y,Un.x,0,-Kn.y,Kn.x,0];return!Er(e,vi,xi,yi,Es)||(e=[1,0,0,0,1,0,0,0,1],!Er(e,vi,xi,yi,Es))?!1:(ws.crossVectors(In,Un),e=[ws.x,ws.y,ws.z],Er(e,vi,xi,yi,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new C,new C,new C,new C,new C,new C,new C,new C],Qe=new C,bs=new gs,vi=new C,xi=new C,yi=new C,In=new C,Un=new C,Kn=new C,Ji=new C,Es=new C,ws=new C,$n=new C;function Er(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$n.fromArray(i,r);const o=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const $h=new gs,Qi=new C,wr=new C;class to{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$h.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(wr)),this.expandByPoint(Qi.copy(t.center).sub(wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new C,Tr=new C,Ts=new C,Nn=new C,Ar=new C,As=new C,Rr=new C;class mc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Tr.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(Tr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ts),o=Nn.dot(this.direction),l=-Nn.dot(Ts),c=Nn.lengthSq(),h=Math.abs(1-a*a);let d,f,p,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Tr).addScaledVector(Ts,f),p}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,s,r){Ar.subVectors(e,t),As.subVectors(n,t),Rr.crossVectors(Ar,As);let a=this.direction.dot(Rr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);const l=o*this.direction.dot(As.crossVectors(Nn,As));if(l<0)return null;const c=o*this.direction.dot(Ar.cross(Nn));if(c<0||l+c>a)return null;const h=-o*Nn.dot(Rr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,a,o,l,c,h,d,f,p,g,_,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,f,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,d,f,p,g,_,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,g=c*h,_=c*d;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,g=c*h,_=c*d;e[0]=f-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jh,t,Qh)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Fn.crossVectors(n,We),Fn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Fn.crossVectors(n,We)),Fn.normalize(),Rs.crossVectors(We,Fn),s[0]=Fn.x,s[4]=Rs.x,s[8]=We.x,s[1]=Fn.y,s[5]=Rs.y,s[9]=We.y,s[2]=Fn.z,s[6]=Rs.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],u=n[14],S=n[3],b=n[7],x=n[11],L=n[15],A=s[0],R=s[4],D=s[8],E=s[12],y=s[1],T=s[5],z=s[9],O=s[13],G=s[2],$=s[6],H=s[10],q=s[14],X=s[3],ht=s[7],yt=s[11],wt=s[15];return r[0]=a*A+o*y+l*G+c*X,r[4]=a*R+o*T+l*$+c*ht,r[8]=a*D+o*z+l*H+c*yt,r[12]=a*E+o*O+l*q+c*wt,r[1]=h*A+d*y+f*G+p*X,r[5]=h*R+d*T+f*$+p*ht,r[9]=h*D+d*z+f*H+p*yt,r[13]=h*E+d*O+f*q+p*wt,r[2]=g*A+_*y+m*G+u*X,r[6]=g*R+_*T+m*$+u*ht,r[10]=g*D+_*z+m*H+u*yt,r[14]=g*E+_*O+m*q+u*wt,r[3]=S*A+b*y+x*G+L*X,r[7]=S*R+b*T+x*$+L*ht,r[11]=S*D+b*z+x*H+L*yt,r[15]=S*E+b*O+x*q+L*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],u=t[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*p-n*l*p)+_*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+u*(-s*o*h-e*l*d+e*o*f+s*a*d-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],u=t[15],S=d*m*c-_*f*c+_*l*p-o*m*p-d*l*u+o*f*u,b=g*f*c-h*m*c-g*l*p+a*m*p+h*l*u-a*f*u,x=h*_*c-g*d*c+g*o*p-a*_*p-h*o*u+a*d*u,L=g*d*l-h*_*l-g*o*f+a*_*f+h*o*m-a*d*m,A=e*S+n*b+s*x+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=S*R,t[1]=(_*f*r-d*m*r-_*s*p+n*m*p+d*s*u-n*f*u)*R,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*u+n*l*u)*R,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*p-n*l*p)*R,t[4]=b*R,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*u+e*f*u)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*u-e*l*u)*R,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*R,t[8]=x*R,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*u-e*d*u)*R,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*u+e*o*u)*R,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*p-e*o*p)*R,t[12]=L*R,t[13]=(h*_*s-g*d*s+g*n*f-e*_*f-h*n*m+e*d*m)*R,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*R,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,g=r*d,_=a*h,m=a*d,u=o*d,S=l*c,b=l*h,x=l*d,L=n.x,A=n.y,R=n.z;return s[0]=(1-(_+u))*L,s[1]=(p+x)*L,s[2]=(g-b)*L,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(f+u))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+b)*R,s[9]=(m-S)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const a=Mi.set(s[4],s[5],s[6]).length(),o=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);const c=1/r,h=1/a,d=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Rn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(o===Rn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===or)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),f=(e+t)*c,p=(n+s)*h;let g,_;if(o===Rn)g=(a+r)*d,_=-2*d;else if(o===or)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new C,tn=new _e,Jh=new C(0,0,0),Qh=new C(1,1,1),Fn=new C,Rs=new C,We=new C,No=new _e,Fo=new fi;class pn{constructor(t=0,e=0,n=0,s=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tu=0;const Oo=new C,Si=new fi,yn=new _e,Cs=new C,ts=new C,eu=new C,nu=new fi,ko=new C(1,0,0),Bo=new C(0,1,0),zo=new C(0,0,1),Ho={type:"added"},iu={type:"removed"},bi={type:"childadded",child:null},Cr={type:"childremoved",child:null};class Te extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new C,e=new pn,n=new fi,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new zt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(ko,t)}rotateY(t){return this.rotateOnAxis(Bo,t)}rotateZ(t){return this.rotateOnAxis(zo,t)}translateOnAxis(t,e){return Oo.copy(t).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ko,t)}translateY(t){return this.translateOnAxis(Bo,t)}translateZ(t){return this.translateOnAxis(zo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cs.copy(t):Cs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ts,Cs,this.up):yn.lookAt(Cs,ts,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(yn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ho),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(iu),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ho),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new C(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new C,Mn=new C,Pr=new C,Sn=new C,Ei=new C,wi=new C,Go=new C,Lr=new C,Dr=new C,Ir=new C,Ur=new he,Nr=new he,Fr=new he;class nn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),Mn.subVectors(n,e),Pr.subVectors(t,e);const a=en.dot(en),o=en.dot(Mn),l=en.dot(Pr),c=Mn.dot(Mn),h=Mn.dot(Pr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ur.setScalar(0),Nr.setScalar(0),Fr.setScalar(0),Ur.fromBufferAttribute(t,e),Nr.fromBufferAttribute(t,n),Fr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ur,r.x),a.addScaledVector(Nr,r.y),a.addScaledVector(Fr,r.z),a}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),Mn.subVectors(t,e),en.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),en.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ei.subVectors(s,n),wi.subVectors(r,n),Lr.subVectors(t,n);const l=Ei.dot(Lr),c=wi.dot(Lr);if(l<=0&&c<=0)return e.copy(n);Dr.subVectors(t,s);const h=Ei.dot(Dr),d=wi.dot(Dr);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ei,a);Ir.subVectors(t,r);const p=Ei.dot(Ir),g=wi.dot(Ir);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(wi,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Go.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Go,o);const u=1/(m+_+f);return a=_*u,o=f*u,e.copy(n).addScaledVector(Ei,a).addScaledVector(wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Or(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=zh(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Or(a,r,t+1/3),this.g=Or(a,r,t),this.b=Or(a,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=_c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return $t.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Le(Ie.r*255,0,255))*65536+Math.round(Le(Ie.g*255,0,255))*256+Math.round(Le(Ie.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ye){$t.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Ps);const n=yr(On.h,Ps.h,e),s=yr(On.s,Ps.s,e),r=yr(On.l,Ps.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Vt;Vt.NAMES=_c;let su=0;class _s extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=ms(),this.name="",this.blending=Ui,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=oa,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ci extends _s{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new C,Ls=new gt;class dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=To,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==To&&(t.usage=this.usage),t}}class vc extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xc extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ru=0;const Ke=new _e,kr=new Te,Ti=new C,Xe=new gs,es=new gs,Ce=new C;class je extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dc(t)?xc:vc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return kr.lookAt(t),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Xe.min,es.min),Xe.expandByPoint(Ce),Ce.addVectors(Xe.max,es.max),Xe.expandByPoint(Ce)):(Xe.expandByPoint(es.min),Xe.expandByPoint(es.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(t,c),Ce.add(Ti)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new C,l[D]=new C;const c=new C,h=new C,d=new C,f=new gt,p=new gt,g=new gt,_=new C,m=new C;function u(D,E,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(T),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(T),o[D].add(_),o[E].add(_),o[y].add(_),l[D].add(m),l[E].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,E=S.length;D<E;++D){const y=S[D],T=y.start,z=y.count;for(let O=T,G=T+z;O<G;O+=3)u(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const b=new C,x=new C,L=new C,A=new C;function R(D){L.fromBufferAttribute(s,D),A.copy(L);const E=o[D];b.copy(E),b.sub(L.multiplyScalar(L.dot(E))).normalize(),x.crossVectors(A,E);const T=x.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,T)}for(let D=0,E=S.length;D<E;++D){const y=S[D],T=y.start,z=y.count;for(let O=T,G=T+z;O<G;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new dn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vo=new _e,Jn=new mc,Ds=new to,Wo=new C,Is=new C,Us=new C,Ns=new C,Br=new C,Fs=new C,Xo=new C,Os=new C;class Xt extends Te{constructor(t=new je,e=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Br.fromBufferAttribute(d,t),a?Fs.addScaledVector(Br,h):Fs.addScaledVector(Br.sub(e),h))}e.add(Fs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(Ds.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Ds,Wo)===null||Jn.origin.distanceToSquared(Wo)>(t.far-t.near)**2))&&(Vo.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(Vo),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,L=b;x<L;x+=3){const A=o.getX(x),R=o.getX(x+1),D=o.getX(x+2);s=ks(this,u,t,n,c,h,d,A,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const S=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);s=ks(this,a,t,n,c,h,d,S,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,L=b;x<L;x+=3){const A=x,R=x+1,D=x+2;s=ks(this,u,t,n,c,h,d,A,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const S=m,b=m+1,x=m+2;s=ks(this,a,t,n,c,h,d,S,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function au(i,t,e,n,s,r,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Yn,o),l===null)return null;Os.copy(o),Os.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:i}}function ks(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Is),i.getVertexPosition(l,Us),i.getVertexPosition(c,Ns);const h=au(i,t,e,n,Is,Us,Ns,Xo);if(h){const d=new C;nn.getBarycoord(Xo,Is,Us,Ns,d),s&&(h.uv=nn.getInterpolatedAttribute(s,o,l,c,d,new gt)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,l,c,d,new gt)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new C,materialIndex:0};nn.getNormal(Is,Us,Ns,f.normal),h.face=f,h.barycoord=d}return h}class Me extends je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function g(_,m,u,S,b,x,L,A,R,D,E){const y=x/R,T=L/D,z=x/2,O=L/2,G=A/2,$=R+1,H=D+1;let q=0,X=0;const ht=new C;for(let yt=0;yt<H;yt++){const wt=yt*T-O;for(let Ot=0;Ot<$;Ot++){const Yt=Ot*y-z;ht[_]=Yt*S,ht[m]=wt*b,ht[u]=G,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[u]=A>0?1:-1,h.push(ht.x,ht.y,ht.z),d.push(Ot/R),d.push(1-yt/D),q+=1}}for(let yt=0;yt<D;yt++)for(let wt=0;wt<R;wt++){const Ot=f+wt+$*yt,Yt=f+wt+$*(yt+1),j=f+(wt+1)+$*(yt+1),ot=f+(wt+1)+$*yt;l.push(Ot,Yt,ot),l.push(Yt,j,ot),X+=6}o.addGroup(p,X,E),p+=X,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=Vi(i[e]);for(const s in n)t[s]=n[s]}return t}function ou(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const lu={clone:Vi,merge:Ne};var cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends _s{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cu,this.fragmentShader=hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mc extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new C,Yo=new gt,qo=new gt;class ze extends Mc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Yo,qo),e.subVectors(qo,Yo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ri=1;class uu extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ze(Ai,Ri,t,e);s.layers=this.layers,this.add(s);const r=new ze(Ai,Ri,t,e);r.layers=this.layers,this.add(r);const a=new ze(Ai,Ri,t,e);a.layers=this.layers,this.add(a);const o=new ze(Ai,Ri,t,e);o.layers=this.layers,this.add(o);const l=new ze(Ai,Ri,t,e);l.layers=this.layers,this.add(l);const c=new ze(Ai,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sc extends Ue{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Bi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class du extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Me(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Wn});r.uniforms.tEquirect.value=e;const a=new Xt(s,r),o=e.minFilter;return e.minFilter===li&&(e.minFilter=un),new uu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const zr=new C,fu=new C,pu=new zt;class zn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=zr.subVectors(n,e).cross(fu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(zr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pu.getNormalMatrix(t),s=this.coplanarPoint(zr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new to,Bs=new C;class eo{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],u=s[12],S=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,m-p,x-u).normalize(),n[1].setComponents(l+r,f+c,m+p,x+u).normalize(),n[2].setComponents(l+a,f+h,m+g,x+S).normalize(),n[3].setComponents(l-a,f-h,m-g,x-S).normalize(),n[4].setComponents(l-o,f-d,m-_,x-b).normalize(),e===Rn)n[5].setComponents(l+o,f+d,m+_,x+b).normalize();else if(e===or)n[5].setComponents(o,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Bs.x=s.normal.x>0?t.max.x:t.min.x,Bs.y=s.normal.y>0?t.max.y:t.min.y,Bs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mu(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Wi extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const S=u*f-a;for(let b=0;b<c;b++){const x=b*d-r;g.push(x,-S,0),_.push(0,0,1),m.push(b/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){const b=S+c*u,x=S+c*(u+1),L=S+1+c*(u+1),A=S+1+c*u;p.push(b,x,A),p.push(x,L,A)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.width,t.height,t.widthSegments,t.heightSegments)}}var gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_u=`#ifdef USE_ALPHAHASH
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
#endif`,vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Su=`#ifdef USE_AOMAP
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
#endif`,bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eu=`#ifdef USE_BATCHING
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
#endif`,wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cu=`#ifdef USE_IRIDESCENCE
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
#endif`,Pu=`#ifdef USE_BUMPMAP
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
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bu=`#define PI 3.141592653589793
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
} // validated`,zu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hu=`vec3 transformedNormal = objectNormal;
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
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",qu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ju=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ku=`#ifdef USE_ENVMAP
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
#endif`,$u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
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
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
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
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
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
#endif`,pd=`struct PhysicalMaterial {
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
}`,md=`
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
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
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wd=`#if defined( USE_POINTS_UV )
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
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
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
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
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
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tf=`float getShadowMask() {
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
}`,ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
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
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hf=`#ifdef USE_TRANSMISSION
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
#endif`,uf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_f=`uniform sampler2D t2D;
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
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`#include <common>
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
}`,bf=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ef=`#define DISTANCE
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
}`,wf=`#define DISTANCE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
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
}`,Cf=`uniform vec3 diffuse;
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
}`,Pf=`#include <common>
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
}`,Lf=`uniform vec3 diffuse;
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
}`,Df=`#define LAMBERT
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
}`,If=`#define LAMBERT
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
}`,Uf=`#define MATCAP
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
}`,Nf=`#define MATCAP
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
}`,Ff=`#define NORMAL
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
}`,Of=`#define NORMAL
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
}`,kf=`#define PHONG
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
}`,Bf=`#define PHONG
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
}`,zf=`#define STANDARD
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
}`,Hf=`#define STANDARD
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
}`,Gf=`#define TOON
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
}`,Vf=`#define TOON
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
}`,Wf=`uniform float size;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,qf=`uniform vec3 color;
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
}`,jf=`uniform float rotation;
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:gu,alphahash_pars_fragment:_u,alphamap_fragment:vu,alphamap_pars_fragment:xu,alphatest_fragment:yu,alphatest_pars_fragment:Mu,aomap_fragment:Su,aomap_pars_fragment:bu,batching_pars_vertex:Eu,batching_vertex:wu,begin_vertex:Tu,beginnormal_vertex:Au,bsdfs:Ru,iridescence_fragment:Cu,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Lu,clipping_planes_pars_fragment:Du,clipping_planes_pars_vertex:Iu,clipping_planes_vertex:Uu,color_fragment:Nu,color_pars_fragment:Fu,color_pars_vertex:Ou,color_vertex:ku,common:Bu,cube_uv_reflection_fragment:zu,defaultnormal_vertex:Hu,displacementmap_pars_vertex:Gu,displacementmap_vertex:Vu,emissivemap_fragment:Wu,emissivemap_pars_fragment:Xu,colorspace_fragment:Yu,colorspace_pars_fragment:qu,envmap_fragment:ju,envmap_common_pars_fragment:Zu,envmap_pars_fragment:Ku,envmap_pars_vertex:$u,envmap_physical_pars_fragment:ld,envmap_vertex:Ju,fog_vertex:Qu,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:dd,lights_physical_fragment:fd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:_d,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:xd,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Md,map_fragment:Sd,map_pars_fragment:bd,map_particle_fragment:Ed,map_particle_pars_fragment:wd,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ad,morphinstance_vertex:Rd,morphcolor_vertex:Cd,morphnormal_vertex:Pd,morphtarget_pars_vertex:Ld,morphtarget_vertex:Dd,normal_fragment_begin:Id,normal_fragment_maps:Ud,normal_pars_fragment:Nd,normal_pars_vertex:Fd,normal_vertex:Od,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Gd,opaque_fragment:Vd,packing:Wd,premultiplied_alpha_fragment:Xd,project_vertex:Yd,dithering_fragment:qd,dithering_pars_fragment:jd,roughnessmap_fragment:Zd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:Jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:tf,skinbase_vertex:ef,skinning_pars_vertex:nf,skinning_vertex:sf,skinnormal_vertex:rf,specularmap_fragment:af,specularmap_pars_fragment:of,tonemapping_fragment:lf,tonemapping_pars_fragment:cf,transmission_fragment:hf,transmission_pars_fragment:uf,uv_pars_fragment:df,uv_pars_vertex:ff,uv_vertex:pf,worldpos_vertex:mf,background_vert:gf,background_frag:_f,backgroundCube_vert:vf,backgroundCube_frag:xf,cube_vert:yf,cube_frag:Mf,depth_vert:Sf,depth_frag:bf,distanceRGBA_vert:Ef,distanceRGBA_frag:wf,equirect_vert:Tf,equirect_frag:Af,linedashed_vert:Rf,linedashed_frag:Cf,meshbasic_vert:Pf,meshbasic_frag:Lf,meshlambert_vert:Df,meshlambert_frag:If,meshmatcap_vert:Uf,meshmatcap_frag:Nf,meshnormal_vert:Ff,meshnormal_frag:Of,meshphong_vert:kf,meshphong_frag:Bf,meshphysical_vert:zf,meshphysical_frag:Hf,meshtoon_vert:Gf,meshtoon_frag:Vf,points_vert:Wf,points_frag:Xf,shadow_vert:Yf,shadow_frag:qf,sprite_vert:jf,sprite_frag:Zf},mt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},hn={basic:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ne([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ne([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ne([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ne([mt.points,mt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ne([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ne([mt.common,mt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ne([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ne([mt.sprite,mt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ne([mt.common,mt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ne([mt.lights,mt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};hn.physical={uniforms:Ne([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const zs={r:0,b:0,g:0},ti=new pn,Kf=new _e;function $f(i,t,e,n,s,r,a){const o=new Vt(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?e:t).get(b)),b}function _(S){let b=!1;const x=g(S);x===null?u(o,l):x&&x.isColor&&(u(x,1),b=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===fr)?(h===void 0&&(h=new Xt(new Me(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Vi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(b.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(ti)),h.material.toneMapped=$t.getTransfer(x.colorSpace)!==le,(d!==x||f!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Xt(new Wi(2,2),new qn({name:"BackgroundMaterial",uniforms:Vi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=$t.getTransfer(x.colorSpace)!==le,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,b){S.getRGB(zs,yc(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),l=b,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(o,l)},render:_,addToRenderList:m}}function Jf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(y,T,z,O,G){let $=!1;const H=d(O,z,T);r!==H&&(r=H,c(r.object)),$=p(y,O,z,G),$&&g(y,O,z,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,x(y,T,z,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,T,z){const O=z.wireframe===!0;let G=n[y.id];G===void 0&&(G={},n[y.id]=G);let $=G[T.id];$===void 0&&($={},G[T.id]=$);let H=$[O];return H===void 0&&(H=f(l()),$[O]=H),H}function f(y){const T=[],z=[],O=[];for(let G=0;G<e;G++)T[G]=0,z[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,T,z,O){const G=r.attributes,$=T.attributes;let H=0;const q=z.getAttributes();for(const X in q)if(q[X].location>=0){const yt=G[X];let wt=$[X];if(wt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor)),yt===void 0||yt.attribute!==wt||wt&&yt.data!==wt.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(y,T,z,O){const G={},$=T.attributes;let H=0;const q=z.getAttributes();for(const X in q)if(q[X].location>=0){let yt=$[X];yt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor));const wt={};wt.attribute=yt,yt&&yt.data&&(wt.data=yt.data),G[X]=wt,H++}r.attributes=G,r.attributesNum=H,r.index=O}function _(){const y=r.newAttributes;for(let T=0,z=y.length;T<z;T++)y[T]=0}function m(y){u(y,0)}function u(y,T){const z=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;z[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),G[y]!==T&&(i.vertexAttribDivisor(y,T),G[y]=T)}function S(){const y=r.newAttributes,T=r.enabledAttributes;for(let z=0,O=T.length;z<O;z++)T[z]!==y[z]&&(i.disableVertexAttribArray(z),T[z]=0)}function b(y,T,z,O,G,$,H){H===!0?i.vertexAttribIPointer(y,T,z,G,$):i.vertexAttribPointer(y,T,z,O,G,$)}function x(y,T,z,O){_();const G=O.attributes,$=z.getAttributes(),H=T.defaultAttributeValues;for(const q in $){const X=$[q];if(X.location>=0){let ht=G[q];if(ht===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const yt=ht.normalized,wt=ht.itemSize,Ot=t.get(ht);if(Ot===void 0)continue;const Yt=Ot.buffer,j=Ot.type,ot=Ot.bytesPerElement,bt=j===i.INT||j===i.UNSIGNED_INT||ht.gpuType===ja;if(ht.isInterleavedBufferAttribute){const ut=ht.data,dt=ut.stride,Pt=ht.offset;if(ut.isInstancedInterleavedBuffer){for(let It=0;It<X.locationSize;It++)u(X.location+It,ut.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let It=0;It<X.locationSize;It++)m(X.location+It);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let It=0;It<X.locationSize;It++)b(X.location+It,wt/X.locationSize,j,yt,dt*ot,(Pt+wt/X.locationSize*It)*ot,bt)}else{if(ht.isInstancedBufferAttribute){for(let ut=0;ut<X.locationSize;ut++)u(X.location+ut,ht.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ut=0;ut<X.locationSize;ut++)m(X.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let ut=0;ut<X.locationSize;ut++)b(X.location+ut,wt/X.locationSize,j,yt,wt*ot,wt/X.locationSize*ut*ot,bt)}}else if(H!==void 0){const yt=H[q];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(X.location,yt);break;case 3:i.vertexAttrib3fv(X.location,yt);break;case 4:i.vertexAttrib4fv(X.location,yt);break;default:i.vertexAttrib1fv(X.location,yt)}}}}S()}function L(){D();for(const y in n){const T=n[y];for(const z in T){const O=T[z];for(const G in O)h(O[G].object),delete O[G];delete T[z]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const T=n[y.id];for(const z in T){const O=T[z];for(const G in O)h(O[G].object),delete O[G];delete T[z]}delete n[y.id]}function R(y){for(const T in n){const z=n[T];if(z[y.id]===void 0)continue;const O=z[y.id];for(const G in O)h(O[G].object),delete O[G];delete z[y.id]}}function D(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Qf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==An&&!D)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:L,maxSamples:A}}function ep(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new zn,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,b=S*4;let x=u.clippingState||null;l.value=x,x=h(g,f,b,p);for(let L=0;L!==b;++L)x[L]=e[L];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=p+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,x=p;b!==_;++b,x+=4)a.copy(d[b]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function np(i){let t=new WeakMap;function e(a,o){return o===ma?a.mapping=Bi:o===ga&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ma||o===ga)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new du(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ec extends Mc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Di=4,jo=[.125,.215,.35,.446,.526,.582],ri=20,Hr=new Ec,Zo=new Vt;let Gr=null,Vr=0,Wr=0,Xr=!1;const ii=(1+Math.sqrt(5))/2,Ci=1/ii,Ko=[new C(-ii,Ci,0),new C(ii,Ci,0),new C(-Ci,0,ii),new C(Ci,0,ii),new C(0,ii,-Ci),new C(0,ii,Ci),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class $o{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Gr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gr,Vr,Wr),this._renderer.xr.enabled=Xr,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:ps,format:rn,colorSpace:Yi,depthBuffer:!1},s=Jo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ip(r)),this._blurMaterial=sp(r,t,e)}return s}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Hr)}_sceneToCubeUV(t,e,n,s){const o=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Zo),h.toneMapping=Xn,h.autoClear=!1;const p=new ci({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new Xt(new Me,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Zo),_=!0);for(let u=0;u<6;u++){const S=u%3;S===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):S===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const b=this._cubeSize;Hs(s,S*b,u>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Bi||t.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Hr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ko[(s-r-1)%Ko.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Xt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ri-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ri;m>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const u=[];let S=0;for(let R=0;R<ri;++R){const D=R/_,E=Math.exp(-D*D/2);u.push(E),R===0?S+=E:R<m&&(S+=2*E)}for(let R=0;R<u.length;R++)u[R]=u[R]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const x=this._sizeLods[s],L=3*x*(s>b-Di?s-b+Di:0),A=4*(this._cubeSize-x);Hs(e,L,A,3*x,2*x),l.setRenderTarget(e),l.render(d,Hr)}}function ip(i){const t=[],e=[],n=[];let s=i;const r=i-Di+1+jo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Di?l=jo[a-i+Di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,S=new Float32Array(_*g*p),b=new Float32Array(m*g*p),x=new Float32Array(u*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,D=A>2?0:-1,E=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];S.set(E,_*g*A),b.set(f,m*g*A);const y=[A,A,A,A,A,A];x.set(y,u*g*A)}const L=new je;L.setAttribute("position",new dn(S,_)),L.setAttribute("uv",new dn(b,m)),L.setAttribute("faceIndex",new dn(x,u)),t.push(L),s>Di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jo(i,t,e){const n=new di(i,t,e);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sp(i,t,e){const n=new Float32Array(ri),s=new C(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:no(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Qo(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function tl(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function no(){return`

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
	`}function rp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ma||l===ga,h=l===Bi||l===zi;if(c||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new $o(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new $o(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ap(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&as("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function op(i,t,e,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,u=_.length;m<u;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let b=0,x=S.length;b<x;b+=3){const L=S[b+0],A=S[b+1],R=S[b+2];f.push(L,A,A,R,R,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let b=0,x=S.length/3-1;b<x;b+=3){const L=b+0,A=b+1,R=b+2;f.push(L,A,A,R,R,L)}}else return;const m=new(dc(f)?xc:vc)(f,1);m.version=_;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function lp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function d(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let u=0;for(let S=0;S<g;S++)u+=p[S]*_[S];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function cp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hp(i,t,e){const n=new WeakMap,s=new he;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=o.attributes.position.count*x,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*A*4*d),D=new pc(R,L,A,d);D.type=An,D.needsUpdate=!0;const E=x*4;for(let T=0;T<d;T++){const z=u[T],O=S[T],G=b[T],$=L*A*4*T;for(let H=0;H<z.count;H++){const q=H*E;g===!0&&(s.fromBufferAttribute(z,H),R[$+q+0]=s.x,R[$+q+1]=s.y,R[$+q+2]=s.z,R[$+q+3]=0),_===!0&&(s.fromBufferAttribute(O,H),R[$+q+4]=s.x,R[$+q+5]=s.y,R[$+q+6]=s.z,R[$+q+7]=0),m===!0&&(s.fromBufferAttribute(G,H),R[$+q+8]=s.x,R[$+q+9]=s.y,R[$+q+10]=s.z,R[$+q+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new gt(L,A)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function up(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class wc extends Ue{constructor(t,e,n,s,r,a,o,l,c,h=Ni){if(h!==Ni&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ni&&(n=ui),n===void 0&&h===Gi&&(n=Hi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tc=new Ue,el=new wc(1,1),Ac=new pc,Rc=new Kh,Cc=new Sc,nl=[],il=[],sl=new Float32Array(16),rl=new Float32Array(9),al=new Float32Array(4);function qi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=nl[s];if(r===void 0&&(r=new Float32Array(s),nl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mr(i,t){let e=il[t];e===void 0&&(e=new Int32Array(t),il[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;al.set(n),i.uniformMatrix2fv(this.addr,!1,al),Re(e,n)}}function _p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;rl.set(n),i.uniformMatrix3fv(this.addr,!1,rl),Re(e,n)}}function vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;sl.set(n),i.uniformMatrix4fv(this.addr,!1,sl),Re(e,n)}}function xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function bp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function Ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(el.compareFunction=uc,r=el):r=Tc,e.setTexture2D(t||r,s)}function Rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rc,s)}function Cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Cc,s)}function Pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ac,s)}function Lp(i){switch(i){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return _p;case 35676:return vp;case 5124:case 35670:return xp;case 35667:case 35671:return yp;case 35668:case 35672:return Mp;case 35669:case 35673:return Sp;case 5125:return bp;case 36294:return Ep;case 36295:return wp;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Dp(i,t){i.uniform1fv(this.addr,t)}function Ip(i,t){const e=qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Up(i,t){const e=qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Np(i,t){const e=qi(t,this.size,4);i.uniform4fv(this.addr,e)}function Fp(i,t){const e=qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Op(i,t){const e=qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kp(i,t){const e=qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bp(i,t){i.uniform1iv(this.addr,t)}function zp(i,t){i.uniform2iv(this.addr,t)}function Hp(i,t){i.uniform3iv(this.addr,t)}function Gp(i,t){i.uniform4iv(this.addr,t)}function Vp(i,t){i.uniform1uiv(this.addr,t)}function Wp(i,t){i.uniform2uiv(this.addr,t)}function Xp(i,t){i.uniform3uiv(this.addr,t)}function Yp(i,t){i.uniform4uiv(this.addr,t)}function qp(i,t,e){const n=this.cache,s=t.length,r=mr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Tc,r[a])}function jp(i,t,e){const n=this.cache,s=t.length,r=mr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rc,r[a])}function Zp(i,t,e){const n=this.cache,s=t.length,r=mr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Cc,r[a])}function Kp(i,t,e){const n=this.cache,s=t.length,r=mr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ac,r[a])}function $p(i){switch(i){case 5126:return Dp;case 35664:return Ip;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return kp;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return Hp;case 35669:case 35673:return Gp;case 5125:return Vp;case 36294:return Wp;case 36295:return Xp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Kp}}class Jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lp(e.type)}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$p(e.type)}}class tm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function ol(i,t){i.seq.push(t),i.map[t.id]=t}function em(i,t,e){const n=i.name,s=n.length;for(Yr.lastIndex=0;;){const r=Yr.exec(n),a=Yr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ol(e,c===void 0?new Jp(o,i,t):new Qp(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new tm(o),ol(e,d)),e=d}}}class er{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);em(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ll(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const nm=37297;let im=0;function sm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const cl=new zt;function rm(i){$t._getMatrix(cl,$t.workingColorSpace,i);const t=`mat3( ${cl.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case pr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sm(i.getShaderSource(t),a)}else return s}function am(i,t){const e=rm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function om(i,t){let e;switch(t){case bh:e="Linear";break;case Eh:e="Reinhard";break;case wh:e="Cineon";break;case Jl:e="ACESFilmic";break;case Ah:e="AgX";break;case Rh:e="Neutral";break;case Th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new C;function lm(){$t.getLuminanceCoefficients(Gs);const i=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function hm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function um(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function os(i){return i!==""}function ul(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(i){return i.replace(dm,pm)}const fm=new Map;function pm(i,t){let e=Ht[t];if(e===void 0){const n=fm.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wa(e)}const mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(i){return i.replace(mm,gm)}function gm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _m(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function vm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case zi:t="ENVMAP_TYPE_CUBE";break;case fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function ym(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $l:t="ENVMAP_BLENDING_MULTIPLY";break;case Mh:t="ENVMAP_BLENDING_MIX";break;case Sh:t="ENVMAP_BLENDING_ADD";break}return t}function Mm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=_m(e),c=vm(e),h=xm(e),d=ym(e),f=Mm(e),p=cm(e),g=hm(r),_=s.createProgram();let m,u,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(os).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(os).join(`
`),u.length>0&&(u+=`
`)):(m=[pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),u=[pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Xn?om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,am("linearToOutputTexel",e.outputColorSpace),lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),a=Wa(a),a=ul(a,e),a=dl(a,e),o=Wa(o),o=ul(o,e),o=dl(o,e),a=fl(a),o=fl(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=S+m+a,x=S+u+o,L=ll(s,s.VERTEX_SHADER,b),A=ll(s,s.FRAGMENT_SHADER,x);s.attachShader(_,L),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(T){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(L).trim(),G=s.getShaderInfoLog(A).trim();let $=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,A);else{const q=hl(s,L,"vertex"),X=hl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+q+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||G==="")&&(H=!1);H&&(T.diagnostics={runnable:$,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:u}})}s.deleteShader(L),s.deleteShader(A),D=new er(s,_),E=um(s,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,nm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=im++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let bm=0;class Em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wm(t),e.set(t,n)),n}}class wm{constructor(t){this.id=bm++,this.code=t,this.usedTimes=0}}function Tm(i,t,e,n,s,r,a){const o=new gc,l=new Em,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,T,z,O){const G=z.fog,$=O.geometry,H=E.isMeshStandardMaterial?z.environment:null,q=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),X=q&&q.mapping===fr?q.image.height:null,ht=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,wt=yt!==void 0?yt.length:0;let Ot=0;$.morphAttributes.position!==void 0&&(Ot=1),$.morphAttributes.normal!==void 0&&(Ot=2),$.morphAttributes.color!==void 0&&(Ot=3);let Yt,j,ot,bt;if(ht){const Wt=hn[ht];Yt=Wt.vertexShader,j=Wt.fragmentShader}else Yt=E.vertexShader,j=E.fragmentShader,l.update(E),ot=l.getVertexShaderID(E),bt=l.getFragmentShaderID(E);const ut=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),Pt=O.isInstancedMesh===!0,It=O.isBatchedMesh===!0,Jt=!!E.map,Ut=!!E.matcap,qt=!!q,U=!!E.aoMap,Se=!!E.lightMap,Dt=!!E.bumpMap,Nt=!!E.normalMap,Z=!!E.displacementMap,nt=!!E.emissiveMap,vt=!!E.metalnessMap,w=!!E.roughnessMap,v=E.anisotropy>0,k=E.clearcoat>0,J=E.dispersion>0,tt=E.iridescence>0,K=E.sheen>0,Et=E.transmission>0,pt=v&&!!E.anisotropyMap,xt=k&&!!E.clearcoatMap,jt=k&&!!E.clearcoatNormalMap,rt=k&&!!E.clearcoatRoughnessMap,St=tt&&!!E.iridescenceMap,I=tt&&!!E.iridescenceThicknessMap,et=K&&!!E.sheenColorMap,Q=K&&!!E.sheenRoughnessMap,ft=!!E.specularMap,_t=!!E.specularColorMap,kt=!!E.specularIntensityMap,P=Et&&!!E.transmissionMap,at=Et&&!!E.thicknessMap,B=!!E.gradientMap,Y=!!E.alphaMap,st=E.alphaTest>0,it=!!E.alphaHash,Lt=!!E.extensions;let te=Xn;E.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(te=i.toneMapping);const Gt={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:Yt,fragmentShader:j,defines:E.defines,customVertexShaderID:ot,customFragmentShaderID:bt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:It,batchingColor:It&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Yi,alphaToCoverage:!!E.alphaToCoverage,map:Jt,matcap:Ut,envMap:qt,envMapMode:qt&&q.mapping,envMapCubeUVHeight:X,aoMap:U,lightMap:Se,bumpMap:Dt,normalMap:Nt,displacementMap:f&&Z,emissiveMap:nt,normalMapObjectSpace:Nt&&E.normalMapType===Dh,normalMapTangentSpace:Nt&&E.normalMapType===hc,metalnessMap:vt,roughnessMap:w,anisotropy:v,anisotropyMap:pt,clearcoat:k,clearcoatMap:xt,clearcoatNormalMap:jt,clearcoatRoughnessMap:rt,dispersion:J,iridescence:tt,iridescenceMap:St,iridescenceThicknessMap:I,sheen:K,sheenColorMap:et,sheenRoughnessMap:Q,specularMap:ft,specularColorMap:_t,specularIntensityMap:kt,transmission:Et,transmissionMap:P,thicknessMap:at,gradientMap:B,opaque:E.transparent===!1&&E.blending===Ui&&E.alphaToCoverage===!1,alphaMap:Y,alphaTest:st,alphaHash:it,combine:E.combine,mapUv:Jt&&_(E.map.channel),aoMapUv:U&&_(E.aoMap.channel),lightMapUv:Se&&_(E.lightMap.channel),bumpMapUv:Dt&&_(E.bumpMap.channel),normalMapUv:Nt&&_(E.normalMap.channel),displacementMapUv:Z&&_(E.displacementMap.channel),emissiveMapUv:nt&&_(E.emissiveMap.channel),metalnessMapUv:vt&&_(E.metalnessMap.channel),roughnessMapUv:w&&_(E.roughnessMap.channel),anisotropyMapUv:pt&&_(E.anisotropyMap.channel),clearcoatMapUv:xt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:I&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:et&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Q&&_(E.sheenRoughnessMap.channel),specularMapUv:ft&&_(E.specularMap.channel),specularColorMapUv:_t&&_(E.specularColorMap.channel),specularIntensityMapUv:kt&&_(E.specularIntensityMap.channel),transmissionMapUv:P&&_(E.transmissionMap.channel),thicknessMapUv:at&&_(E.thicknessMap.channel),alphaMapUv:Y&&_(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Nt||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(Jt||Y),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:dt,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ot,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,decodeVideoTexture:Jt&&E.map.isVideoTexture===!0&&$t.getTransfer(E.map.colorSpace)===le,decodeVideoTextureEmissive:nt&&E.emissiveMap.isVideoTexture===!0&&$t.getTransfer(E.emissiveMap.colorSpace)===le,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$e,flipSided:E.side===He,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Lt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&E.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function u(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const T in E.defines)y.push(T),y.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(S(y,E),b(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function S(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function b(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const y=g[E.type];let T;if(y){const z=hn[y];T=lu.clone(z.uniforms)}else T=E.uniforms;return T}function L(E,y){let T;for(let z=0,O=h.length;z<O;z++){const G=h[z];if(G.cacheKey===y){T=G,++T.usedTimes;break}}return T===void 0&&(T=new Sm(i,y,E,r),h.push(T)),T}function A(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:L,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:D}}function Am(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Rm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ml(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,p,g,_,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),t++,u}function o(d,f,p,g,_,m){const u=a(d,f,p,g,_,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(d,f,p,g,_,m){const u=a(d,f,p,g,_,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||Rm),n.length>1&&n.sort(f||ml),s.length>1&&s.sort(f||ml)}function h(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Cm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new gl,i.set(n,[a])):s>=r.length?(a=new gl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Pm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Vt};break;case"SpotLight":e={position:new C,direction:new C,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dm=0;function Im(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Um(i){const t=new Pm,e=Lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new _e,a=new _e;function o(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,S=0,b=0,x=0,L=0,A=0,R=0;c.sort(Im);for(let E=0,y=c.length;E<y;E++){const T=c[E],z=T.color,O=T.intensity,G=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=z.r*O,d+=z.g*O,f+=z.b*O;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],O);R++}else if(T.isDirectionalLight){const H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const q=T.shadow,X=e.get(T);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=T.shadow.matrix,S++}n.directional[p]=H,p++}else if(T.isSpotLight){const H=t.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(z).multiplyScalar(O),H.distance=G,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[_]=H;const q=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,q.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[_]=q.matrix,T.castShadow){const X=e.get(T);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=$,x++}_++}else if(T.isRectAreaLight){const H=t.get(T);H.color.copy(z).multiplyScalar(O),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=H,m++}else if(T.isPointLight){const H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const q=T.shadow,X=e.get(T);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=T.shadow.matrix,b++}n.point[g]=H,g++}else if(T.isHemisphereLight){const H=t.get(T);H.skyColor.copy(T.color).multiplyScalar(O),H.groundColor.copy(T.groundColor).multiplyScalar(O),n.hemi[u]=H,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==x||D.numSpotMaps!==L||D.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=x,D.numSpotMaps=L,D.numLightProbes=R,n.version=Dm++)}function l(c,h){let d=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,S=c.length;u<S;u++){const b=c[u];if(b.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function _l(i){const t=new Um(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Nm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new _l(i),t.set(s,[o])):r>=a.length?(o=new _l(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Fm extends _s{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Om extends _s{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
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
}`;function zm(i,t,e){let n=new eo;const s=new gt,r=new gt,a=new he,o=new Fm({depthPacking:Lh}),l=new Om,c={},h=e.maxTextureSize,d={[Yn]:He,[He]:Yn,[$e]:$e},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:km,fragmentShader:Bm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new je;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let u=this.type;this.render=function(A,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Wn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=u!==bn&&this.type===bn,G=u===bn&&this.type!==bn;for(let $=0,H=A.length;$<H;$++){const q=A[$],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ht=X.getFrameExtents();if(s.multiply(ht),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,X.mapSize.y=r.y)),X.map===null||O===!0||G===!0){const wt=this.type!==bn?{minFilter:qe,magFilter:qe}:{};X.map!==null&&X.map.dispose(),X.map=new di(s.x,s.y,wt),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const yt=X.getViewportCount();for(let wt=0;wt<yt;wt++){const Ot=X.getViewport(wt);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),z.viewport(a),X.updateMatrices(q,wt),n=X.getFrustum(),x(R,D,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===bn&&S(X,D),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,T)};function S(A,R){const D=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new di(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,D,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,D,p,_,null)}function b(A,R,D,E){let y=null;const T=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)y=T;else if(y=D.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=y.uuid,O=R.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let $=G[O];$===void 0&&($=y.clone(),G[O]=$,R.addEventListener("dispose",L)),y=$}if(y.visible=R.visible,y.wireframe=R.wireframe,E===bn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=i.properties.get(y);z.light=D}return y}function x(A,R,D,E,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===bn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const O=t.update(A),G=A.material;if(Array.isArray(G)){const $=O.groups;for(let H=0,q=$.length;H<q;H++){const X=$[H],ht=G[X.materialIndex];if(ht&&ht.visible){const yt=b(A,ht,E,y);A.onBeforeShadow(i,A,R,D,O,yt,X),i.renderBufferDirect(D,null,O,yt,A,X),A.onAfterShadow(i,A,R,D,O,yt,X)}}}else if(G.visible){const $=b(A,G,E,y);A.onBeforeShadow(i,A,R,D,O,$,null),i.renderBufferDirect(D,null,O,$,A,null),A.onAfterShadow(i,A,R,D,O,$,null)}}const z=A.children;for(let O=0,G=z.length;O<G;O++)x(z[O],R,D,E,y)}function L(A){A.target.removeEventListener("dispose",L);for(const D in c){const E=c[D],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const Hm={[la]:ca,[ha]:fa,[ua]:pa,[ki]:da,[ca]:la,[fa]:ha,[pa]:ua,[da]:ki};function Gm(i,t){function e(){let P=!1;const at=new he;let B=null;const Y=new he(0,0,0,0);return{setMask:function(st){B!==st&&!P&&(i.colorMask(st,st,st,st),B=st)},setLocked:function(st){P=st},setClear:function(st,it,Lt,te,Gt){Gt===!0&&(st*=te,it*=te,Lt*=te),at.set(st,it,Lt,te),Y.equals(at)===!1&&(i.clearColor(st,it,Lt,te),Y.copy(at))},reset:function(){P=!1,B=null,Y.set(-1,0,0,0)}}}function n(){let P=!1,at=!1,B=null,Y=null,st=null;return{setReversed:function(it){if(at!==it){const Lt=t.get("EXT_clip_control");at?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const te=st;st=null,this.setClear(te)}at=it},getReversed:function(){return at},setTest:function(it){it?ut(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(it){B!==it&&!P&&(i.depthMask(it),B=it)},setFunc:function(it){if(at&&(it=Hm[it]),Y!==it){switch(it){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=it}},setLocked:function(it){P=it},setClear:function(it){st!==it&&(at&&(it=1-it),i.clearDepth(it),st=it)},reset:function(){P=!1,B=null,Y=null,st=null,at=!1}}}function s(){let P=!1,at=null,B=null,Y=null,st=null,it=null,Lt=null,te=null,Gt=null;return{setTest:function(Wt){P||(Wt?ut(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(Wt){at!==Wt&&!P&&(i.stencilMask(Wt),at=Wt)},setFunc:function(Wt,ve,ne){(B!==Wt||Y!==ve||st!==ne)&&(i.stencilFunc(Wt,ve,ne),B=Wt,Y=ve,st=ne)},setOp:function(Wt,ve,ne){(it!==Wt||Lt!==ve||te!==ne)&&(i.stencilOp(Wt,ve,ne),it=Wt,Lt=ve,te=ne)},setLocked:function(Wt){P=Wt},setClear:function(Wt){Gt!==Wt&&(i.clearStencil(Wt),Gt=Wt)},reset:function(){P=!1,at=null,B=null,Y=null,st=null,it=null,Lt=null,te=null,Gt=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,S=null,b=null,x=null,L=null,A=null,R=new Vt(0,0,0),D=0,E=!1,y=null,T=null,z=null,O=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=q>=2);let ht=null,yt={};const wt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Yt=new he().fromArray(wt),j=new he().fromArray(Ot);function ot(P,at,B,Y){const st=new Uint8Array(4),it=i.createTexture();i.bindTexture(P,it),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<B;Lt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(at+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return it}const bt={};bt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(ki),Dt(!1),Nt(Mo),ut(i.CULL_FACE),U(Wn);function ut(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function dt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Pt(P,at){return d[P]!==at?(i.bindFramebuffer(P,at),d[P]=at,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=at),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=at),!0):!1}function It(P,at){let B=p,Y=!1;if(P){B=f.get(at),B===void 0&&(B=[],f.set(at,B));const st=P.textures;if(B.length!==st.length||B[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Lt=st.length;it<Lt;it++)B[it]=i.COLOR_ATTACHMENT0+it;B.length=st.length,Y=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,Y=!0);Y&&i.drawBuffers(B)}function Jt(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const Ut={[si]:i.FUNC_ADD,[sh]:i.FUNC_SUBTRACT,[rh]:i.FUNC_REVERSE_SUBTRACT};Ut[ah]=i.MIN,Ut[oh]=i.MAX;const qt={[lh]:i.ZERO,[ch]:i.ONE,[hh]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[gh]:i.SRC_ALPHA_SATURATE,[ph]:i.DST_COLOR,[dh]:i.DST_ALPHA,[uh]:i.ONE_MINUS_SRC_COLOR,[oa]:i.ONE_MINUS_SRC_ALPHA,[mh]:i.ONE_MINUS_DST_COLOR,[fh]:i.ONE_MINUS_DST_ALPHA,[_h]:i.CONSTANT_COLOR,[vh]:i.ONE_MINUS_CONSTANT_COLOR,[xh]:i.CONSTANT_ALPHA,[yh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(P,at,B,Y,st,it,Lt,te,Gt,Wt){if(P===Wn){_===!0&&(dt(i.BLEND),_=!1);return}if(_===!1&&(ut(i.BLEND),_=!0),P!==ih){if(P!==m||Wt!==E){if((u!==si||x!==si)&&(i.blendEquation(i.FUNC_ADD),u=si,x=si),Wt)switch(P){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.ONE,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,b=null,L=null,A=null,R.set(0,0,0),D=0,m=P,E=Wt}return}st=st||at,it=it||B,Lt=Lt||Y,(at!==u||st!==x)&&(i.blendEquationSeparate(Ut[at],Ut[st]),u=at,x=st),(B!==S||Y!==b||it!==L||Lt!==A)&&(i.blendFuncSeparate(qt[B],qt[Y],qt[it],qt[Lt]),S=B,b=Y,L=it,A=Lt),(te.equals(R)===!1||Gt!==D)&&(i.blendColor(te.r,te.g,te.b,Gt),R.copy(te),D=Gt),m=P,E=!1}function Se(P,at){P.side===$e?dt(i.CULL_FACE):ut(i.CULL_FACE);let B=P.side===He;at&&(B=!B),Dt(B),P.blending===Ui&&P.transparent===!1?U(Wn):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const Y=P.stencilWrite;o.setTest(Y),Y&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),nt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function Nt(P){P!==eh?(ut(i.CULL_FACE),P!==T&&(P===Mo?i.cullFace(i.BACK):P===nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),T=P}function Z(P){P!==z&&(H&&i.lineWidth(P),z=P)}function nt(P,at,B){P?(ut(i.POLYGON_OFFSET_FILL),(O!==at||G!==B)&&(i.polygonOffset(at,B),O=at,G=B)):dt(i.POLYGON_OFFSET_FILL)}function vt(P){P?ut(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function w(P){P===void 0&&(P=i.TEXTURE0+$-1),ht!==P&&(i.activeTexture(P),ht=P)}function v(P,at,B){B===void 0&&(ht===null?B=i.TEXTURE0+$-1:B=ht);let Y=yt[B];Y===void 0&&(Y={type:void 0,texture:void 0},yt[B]=Y),(Y.type!==P||Y.texture!==at)&&(ht!==B&&(i.activeTexture(B),ht=B),i.bindTexture(P,at||bt[P]),Y.type=P,Y.texture=at)}function k(){const P=yt[ht];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function I(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(P){Yt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Yt.copy(P))}function Q(P){j.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),j.copy(P))}function ft(P,at){let B=c.get(at);B===void 0&&(B=new WeakMap,c.set(at,B));let Y=B.get(P);Y===void 0&&(Y=i.getUniformBlockIndex(at,P.name),B.set(P,Y))}function _t(P,at){const Y=c.get(at).get(P);l.get(at)!==Y&&(i.uniformBlockBinding(at,Y,P.__bindingPointIndex),l.set(at,Y))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,yt={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,S=null,b=null,x=null,L=null,A=null,R=new Vt(0,0,0),D=0,E=!1,y=null,T=null,z=null,O=null,G=null,Yt.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:dt,bindFramebuffer:Pt,drawBuffers:It,useProgram:Jt,setBlending:U,setMaterial:Se,setFlipSided:Dt,setCullFace:Nt,setLineWidth:Z,setPolygonOffset:nt,setScissorTest:vt,activeTexture:w,bindTexture:v,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:St,texImage3D:I,updateUBOMapping:ft,uniformBlockBinding:_t,texStorage2D:jt,texStorage3D:rt,texSubImage2D:K,texSubImage3D:Et,compressedTexSubImage2D:pt,compressedTexSubImage3D:xt,scissor:et,viewport:Q,reset:kt}}function vl(i,t,e,n){const s=Vm(n);switch(e){case ic:return i*t;case rc:return i*t;case ac:return i*t*2;case oc:return i*t/s.components*s.byteLength;case $a:return i*t/s.components*s.byteLength;case lc:return i*t*2/s.components*s.byteLength;case Ja:return i*t*2/s.components*s.byteLength;case sc:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case Qa:return i*t*4/s.components*s.byteLength;case Zs:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $s:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case Ma:return Math.max(i,16)*Math.max(t,8)/4;case va:case ya:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qs:case Ba:case za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cc:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ga:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vm(i){switch(i){case Pn:case tc:return{byteLength:1,components:1};case us:case ec:case ps:return{byteLength:2,components:1};case Za:case Ka:return{byteLength:2,components:4};case ui:case ja:case An:return{byteLength:4,components:1};case nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):cr("canvas")}function _(w,v,k){let J=1;const tt=vt(w);if((tt.width>k||tt.height>k)&&(J=k/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(J*tt.width),Et=Math.floor(J*tt.height);d===void 0&&(d=g(K,Et));const pt=v?g(K,Et):d;return pt.width=K,pt.height=Et,pt.getContext("2d").drawImage(w,0,0,K,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+Et+")."),pt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,v,k,J,tt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=v;if(v===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),v===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),v===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),v===i.RGBA){const Et=tt?pr:$t.getTransfer(J);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=Et===le?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(w,v){let k;return w?v===null||v===ui||v===Hi?k=i.DEPTH24_STENCIL8:v===An?k=i.DEPTH32F_STENCIL8:v===us&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ui||v===Hi?k=i.DEPTH_COMPONENT24:v===An?k=i.DEPTH_COMPONENT32F:v===us&&(k=i.DEPTH_COMPONENT16),k}function L(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==qe&&w.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){const v=w.target;v.removeEventListener("dispose",A),D(v),v.isVideoTexture&&h.delete(v)}function R(w){const v=w.target;v.removeEventListener("dispose",R),y(v)}function D(w){const v=n.get(w);if(v.__webglInit===void 0)return;const k=w.source,J=f.get(k);if(J){const tt=J[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(w),Object.keys(J).length===0&&f.delete(k)}n.remove(w)}function E(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const k=w.source,J=f.get(k);delete J[v.__cacheKey],a.memory.textures--}function y(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let tt=0;tt<v.__webglFramebuffer[J].length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[J][tt]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=w.textures;for(let J=0,tt=k.length;J<tt;J++){const K=n.get(k[J]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(w)}let T=0;function z(){T=0}function O(){const w=T;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),T+=1,w}function G(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function $(w,v){const k=n.get(w);if(w.isVideoTexture&&Z(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,w,v);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function H(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){j(k,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function q(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){j(k,w,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function X(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){ot(k,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const ht={[ar]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},yt={[qe]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},wt={[Ih]:i.NEVER,[Bh]:i.ALWAYS,[Uh]:i.LESS,[uc]:i.LEQUAL,[Nh]:i.EQUAL,[kh]:i.GEQUAL,[Fh]:i.GREATER,[Oh]:i.NOTEQUAL};function Ot(w,v){if(v.type===An&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===xr||v.magFilter===Ss||v.magFilter===li||v.minFilter===un||v.minFilter===xr||v.minFilter===Ss||v.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ht[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ht[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ht[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,yt[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,yt[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,wt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qe||v.minFilter!==Ss&&v.minFilter!==li||v.type===An&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(w,v){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));const J=v.source;let tt=f.get(J);tt===void 0&&(tt={},f.set(J,tt));const K=G(v);if(K!==w.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),tt[K].usedTimes++;const Et=tt[w.__cacheKey];Et!==void 0&&(tt[w.__cacheKey].usedTimes--,Et.usedTimes===0&&E(v)),w.__cacheKey=K,w.__webglTexture=tt[K].texture}return k}function j(w,v,k){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);const tt=Yt(w,v),K=v.source;e.bindTexture(J,w.__webglTexture,i.TEXTURE0+k);const Et=n.get(K);if(K.version!==Et.__version||tt===!0){e.activeTexture(i.TEXTURE0+k);const pt=$t.getPrimaries($t.workingColorSpace),xt=v.colorSpace===Hn?null:$t.getPrimaries(v.colorSpace),jt=v.colorSpace===Hn||pt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let rt=_(v.image,!1,s.maxTextureSize);rt=nt(v,rt);const St=r.convert(v.format,v.colorSpace),I=r.convert(v.type);let et=b(v.internalFormat,St,I,v.colorSpace,v.isVideoTexture);Ot(J,v);let Q;const ft=v.mipmaps,_t=v.isVideoTexture!==!0,kt=Et.__version===void 0||tt===!0,P=K.dataReady,at=L(v,rt);if(v.isDepthTexture)et=x(v.format===Gi,v.type),kt&&(_t?e.texStorage2D(i.TEXTURE_2D,1,et,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,et,rt.width,rt.height,0,St,I,null));else if(v.isDataTexture)if(ft.length>0){_t&&kt&&e.texStorage2D(i.TEXTURE_2D,at,et,ft[0].width,ft[0].height);for(let B=0,Y=ft.length;B<Y;B++)Q=ft[B],_t?P&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Q.width,Q.height,St,I,Q.data):e.texImage2D(i.TEXTURE_2D,B,et,Q.width,Q.height,0,St,I,Q.data);v.generateMipmaps=!1}else _t?(kt&&e.texStorage2D(i.TEXTURE_2D,at,et,rt.width,rt.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,St,I,rt.data)):e.texImage2D(i.TEXTURE_2D,0,et,rt.width,rt.height,0,St,I,rt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){_t&&kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,et,ft[0].width,ft[0].height,rt.depth);for(let B=0,Y=ft.length;B<Y;B++)if(Q=ft[B],v.format!==rn)if(St!==null)if(_t){if(P)if(v.layerUpdates.size>0){const st=vl(Q.width,Q.height,v.format,v.type);for(const it of v.layerUpdates){const Lt=Q.data.subarray(it*st/Q.data.BYTES_PER_ELEMENT,(it+1)*st/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,it,Q.width,Q.height,1,St,Lt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Q.width,Q.height,rt.depth,St,Q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,et,Q.width,Q.height,rt.depth,0,Q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Q.width,Q.height,rt.depth,St,I,Q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,et,Q.width,Q.height,rt.depth,0,St,I,Q.data)}else{_t&&kt&&e.texStorage2D(i.TEXTURE_2D,at,et,ft[0].width,ft[0].height);for(let B=0,Y=ft.length;B<Y;B++)Q=ft[B],v.format!==rn?St!==null?_t?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,Q.width,Q.height,St,Q.data):e.compressedTexImage2D(i.TEXTURE_2D,B,et,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?P&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Q.width,Q.height,St,I,Q.data):e.texImage2D(i.TEXTURE_2D,B,et,Q.width,Q.height,0,St,I,Q.data)}else if(v.isDataArrayTexture)if(_t){if(kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,et,rt.width,rt.height,rt.depth),P)if(v.layerUpdates.size>0){const B=vl(rt.width,rt.height,v.format,v.type);for(const Y of v.layerUpdates){const st=rt.data.subarray(Y*B/rt.data.BYTES_PER_ELEMENT,(Y+1)*B/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,rt.width,rt.height,1,St,I,st)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,I,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,et,rt.width,rt.height,rt.depth,0,St,I,rt.data);else if(v.isData3DTexture)_t?(kt&&e.texStorage3D(i.TEXTURE_3D,at,et,rt.width,rt.height,rt.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,I,rt.data)):e.texImage3D(i.TEXTURE_3D,0,et,rt.width,rt.height,rt.depth,0,St,I,rt.data);else if(v.isFramebufferTexture){if(kt)if(_t)e.texStorage2D(i.TEXTURE_2D,at,et,rt.width,rt.height);else{let B=rt.width,Y=rt.height;for(let st=0;st<at;st++)e.texImage2D(i.TEXTURE_2D,st,et,B,Y,0,St,I,null),B>>=1,Y>>=1}}else if(ft.length>0){if(_t&&kt){const B=vt(ft[0]);e.texStorage2D(i.TEXTURE_2D,at,et,B.width,B.height)}for(let B=0,Y=ft.length;B<Y;B++)Q=ft[B],_t?P&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,St,I,Q):e.texImage2D(i.TEXTURE_2D,B,et,St,I,Q);v.generateMipmaps=!1}else if(_t){if(kt){const B=vt(rt);e.texStorage2D(i.TEXTURE_2D,at,et,B.width,B.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,I,rt)}else e.texImage2D(i.TEXTURE_2D,0,et,St,I,rt);m(v)&&u(J),Et.__version=K.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ot(w,v,k){if(v.image.length!==6)return;const J=Yt(w,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);const K=n.get(tt);if(tt.version!==K.__version||J===!0){e.activeTexture(i.TEXTURE0+k);const Et=$t.getPrimaries($t.workingColorSpace),pt=v.colorSpace===Hn?null:$t.getPrimaries(v.colorSpace),xt=v.colorSpace===Hn||Et===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const jt=v.isCompressedTexture||v.image[0].isCompressedTexture,rt=v.image[0]&&v.image[0].isDataTexture,St=[];for(let Y=0;Y<6;Y++)!jt&&!rt?St[Y]=_(v.image[Y],!0,s.maxCubemapSize):St[Y]=rt?v.image[Y].image:v.image[Y],St[Y]=nt(v,St[Y]);const I=St[0],et=r.convert(v.format,v.colorSpace),Q=r.convert(v.type),ft=b(v.internalFormat,et,Q,v.colorSpace),_t=v.isVideoTexture!==!0,kt=K.__version===void 0||J===!0,P=tt.dataReady;let at=L(v,I);Ot(i.TEXTURE_CUBE_MAP,v);let B;if(jt){_t&&kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,ft,I.width,I.height);for(let Y=0;Y<6;Y++){B=St[Y].mipmaps;for(let st=0;st<B.length;st++){const it=B[st];v.format!==rn?et!==null?_t?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st,0,0,it.width,it.height,et,it.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st,ft,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st,0,0,it.width,it.height,et,Q,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st,ft,it.width,it.height,0,et,Q,it.data)}}}else{if(B=v.mipmaps,_t&&kt){B.length>0&&at++;const Y=vt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,ft,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(rt){_t?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,St[Y].width,St[Y].height,et,Q,St[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ft,St[Y].width,St[Y].height,0,et,Q,St[Y].data);for(let st=0;st<B.length;st++){const Lt=B[st].image[Y].image;_t?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st+1,0,0,Lt.width,Lt.height,et,Q,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st+1,ft,Lt.width,Lt.height,0,et,Q,Lt.data)}}else{_t?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,et,Q,St[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ft,et,Q,St[Y]);for(let st=0;st<B.length;st++){const it=B[st];_t?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st+1,0,0,et,Q,it.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st+1,ft,et,Q,it.image[Y])}}}m(v)&&u(i.TEXTURE_CUBE_MAP),K.__version=tt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function bt(w,v,k,J,tt,K){const Et=r.convert(k.format,k.colorSpace),pt=r.convert(k.type),xt=b(k.internalFormat,Et,pt,k.colorSpace),jt=n.get(v),rt=n.get(k);if(rt.__renderTarget=v,!jt.__hasExternalTextures){const St=Math.max(1,v.width>>K),I=Math.max(1,v.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,xt,St,I,v.depth,0,Et,pt,null):e.texImage2D(tt,K,xt,St,I,0,Et,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Nt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,tt,rt.__webglTexture,0,Dt(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,tt,rt.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(w,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const J=v.depthTexture,tt=J&&J.isDepthTexture?J.type:null,K=x(v.stencilBuffer,tt),Et=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=Dt(v);Nt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,K,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,w)}else{const J=v.textures;for(let tt=0;tt<J.length;tt++){const K=J[tt],Et=r.convert(K.format,K.colorSpace),pt=r.convert(K.type),xt=b(K.internalFormat,Et,pt,K.colorSpace),jt=Dt(v);k&&Nt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,xt,v.width,v.height):Nt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,xt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const tt=J.__webglTexture,K=Dt(v);if(v.depthTexture.format===Ni)Nt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(v.depthTexture.format===Gi)Nt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Pt(w){const v=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const J=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=J}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");dt(v.__webglFramebuffer,w)}else if(k){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),ut(v.__webglDepthbuffer[J],w,!1);else{const tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ut(v.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(w,v,k){const J=n.get(w);v!==void 0&&bt(J.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Pt(w)}function Jt(w){const v=w.texture,k=n.get(w),J=n.get(v);w.addEventListener("dispose",R);const tt=w.textures,K=w.isWebGLCubeRenderTarget===!0,Et=tt.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,a.memory.textures++),K){k.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[pt]=[];for(let xt=0;xt<v.mipmaps.length;xt++)k.__webglFramebuffer[pt][xt]=i.createFramebuffer()}else k.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let pt=0;pt<v.mipmaps.length;pt++)k.__webglFramebuffer[pt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Et)for(let pt=0,xt=tt.length;pt<xt;pt++){const jt=n.get(tt[pt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Nt(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pt=0;pt<tt.length;pt++){const xt=tt[pt];k.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[pt]);const jt=r.convert(xt.format,xt.colorSpace),rt=r.convert(xt.type),St=b(xt.internalFormat,jt,rt,xt.colorSpace,w.isXRRenderTarget===!0),I=Dt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,I,St,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,k.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,v);for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)bt(k.__webglFramebuffer[pt][xt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,xt);else bt(k.__webglFramebuffer[pt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(v)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let pt=0,xt=tt.length;pt<xt;pt++){const jt=tt[pt],rt=n.get(jt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Ot(i.TEXTURE_2D,jt),bt(k.__webglFramebuffer,w,jt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(jt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,J.__webglTexture),Ot(pt,v),v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)bt(k.__webglFramebuffer[xt],w,v,i.COLOR_ATTACHMENT0,pt,xt);else bt(k.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,pt,0);m(v)&&u(pt),e.unbindTexture()}w.depthBuffer&&Pt(w)}function Ut(w){const v=w.textures;for(let k=0,J=v.length;k<J;k++){const tt=v[k];if(m(tt)){const K=S(w),Et=n.get(tt).__webglTexture;e.bindTexture(K,Et),u(K),e.unbindTexture()}}}const qt=[],U=[];function Se(w){if(w.samples>0){if(Nt(w)===!1){const v=w.textures,k=w.width,J=w.height;let tt=i.COLOR_BUFFER_BIT;const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(w),pt=v.length>1;if(pt)for(let xt=0;xt<v.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let xt=0;xt<v.length;xt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const jt=n.get(v[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,tt,i.NEAREST),l===!0&&(qt.length=0,U.length=0,qt.push(i.COLOR_ATTACHMENT0+xt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(qt.push(K),U.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let xt=0;xt<v.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const jt=n.get(v[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Dt(w){return Math.min(s.maxSamples,w.samples)}function Nt(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Z(w){const v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function nt(w,v){const k=w.colorSpace,J=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Yi&&k!==Hn&&($t.getTransfer(k)===le?(J!==rn||tt!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function vt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=It,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Nt}function Xm(i,t){function e(n,s=Hn){let r;const a=$t.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return i.BYTE;if(n===ec)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===ps)return i.HALF_FLOAT;if(n===ic)return i.ALPHA;if(n===sc)return i.RGB;if(n===rn)return i.RGBA;if(n===rc)return i.LUMINANCE;if(n===ac)return i.LUMINANCE_ALPHA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===$a)return i.RED_INTEGER;if(n===lc)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===Zs||n===Ks||n===$s||n===Js)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===xa||n===ya||n===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===ba||n===Ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sa||n===ba)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ea)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ua)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Na)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qs||n===Ba||n===za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qs)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===Ha||n===Ga||n===Va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ym extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qm={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zm=`
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

}`;class Km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qn({vertexShader:jm,fragmentShader:Zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $m extends pi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const _=new Km,m=e.getContextAttributes();let u=null,S=null;const b=[],x=[],L=new gt;let A=null;const R=new ze;R.viewport=new he;const D=new ze;D.viewport=new he;const E=[R,D],y=new Ym;let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=b[j];return ot===void 0&&(ot=new qr,b[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=b[j];return ot===void 0&&(ot=new qr,b[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=b[j];return ot===void 0&&(ot=new qr,b[j]=ot),ot.getHandSpace()};function O(j){const ot=x.indexOf(j.inputSource);if(ot===-1)return;const bt=b[ot];bt!==void 0&&(bt.update(j.inputSource,j.frame,c||a),bt.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let j=0;j<b.length;j++){const ot=x[j];ot!==null&&(x[j]=null,b[j].disconnect(ot))}T=null,z=null,_.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,S=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new di(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,bt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Gi:Ni,bt=m.stencil?Hi:ui);const dt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new di(f.textureWidth,f.textureHeight,{format:rn,type:Pn,depthTexture:new wc(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(j){for(let ot=0;ot<j.removed.length;ot++){const bt=j.removed[ot],ut=x.indexOf(bt);ut>=0&&(x[ut]=null,b[ut].disconnect(bt))}for(let ot=0;ot<j.added.length;ot++){const bt=j.added[ot];let ut=x.indexOf(bt);if(ut===-1){for(let Pt=0;Pt<b.length;Pt++)if(Pt>=x.length){x.push(bt),ut=Pt;break}else if(x[Pt]===null){x[Pt]=bt,ut=Pt;break}if(ut===-1)break}const dt=b[ut];dt&&dt.connect(bt)}}const H=new C,q=new C;function X(j,ot,bt){H.setFromMatrixPosition(ot.matrixWorld),q.setFromMatrixPosition(bt.matrixWorld);const ut=H.distanceTo(q),dt=ot.projectionMatrix.elements,Pt=bt.projectionMatrix.elements,It=dt[14]/(dt[10]-1),Jt=dt[14]/(dt[10]+1),Ut=(dt[9]+1)/dt[5],qt=(dt[9]-1)/dt[5],U=(dt[8]-1)/dt[0],Se=(Pt[8]+1)/Pt[0],Dt=It*U,Nt=It*Se,Z=ut/(-U+Se),nt=Z*-U;if(ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(nt),j.translateZ(Z),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),dt[10]===-1)j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const vt=It+Z,w=Jt+Z,v=Dt-nt,k=Nt+(ut-nt),J=Ut*Jt/w*vt,tt=qt*Jt/w*vt;j.projectionMatrix.makePerspective(v,k,J,tt,vt,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ht(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ot=j.near,bt=j.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),y.near=D.near=R.near=ot,y.far=D.far=R.far=bt,(T!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,z=y.far),R.layers.mask=j.layers.mask|2,D.layers.mask=j.layers.mask|4,y.layers.mask=R.layers.mask|D.layers.mask;const ut=j.parent,dt=y.cameras;ht(y,ut);for(let Pt=0;Pt<dt.length;Pt++)ht(dt[Pt],ut);dt.length===2?X(y,R,D):y.projectionMatrix.copy(R.projectionMatrix),yt(j,y,ut)};function yt(j,ot,bt){bt===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(bt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=lr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let wt=null;function Ot(j,ot){if(h=ot.getViewerPose(c||a),g=ot,h!==null){const bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ut=!1;bt.length!==y.cameras.length&&(y.cameras.length=0,ut=!0);for(let Pt=0;Pt<bt.length;Pt++){const It=bt[Pt];let Jt=null;if(p!==null)Jt=p.getViewport(It);else{const qt=d.getViewSubImage(f,It);Jt=qt.viewport,Pt===0&&(t.setRenderTargetTextures(S,qt.colorTexture,f.ignoreDepthValues?void 0:qt.depthStencilTexture),t.setRenderTarget(S))}let Ut=E[Pt];Ut===void 0&&(Ut=new ze,Ut.layers.enable(Pt),Ut.viewport=new he,E[Pt]=Ut),Ut.matrix.fromArray(It.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(It.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Pt===0&&(y.matrix.copy(Ut.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ut===!0&&y.cameras.push(Ut)}const dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const Pt=d.getDepthInformation(bt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let bt=0;bt<b.length;bt++){const ut=x[bt],dt=b[bt];ut!==null&&dt!==void 0&&dt.update(ut,ot,c||a)}wt&&wt(j,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const Yt=new bc;Yt.setAnimationLoop(Ot),this.setAnimationLoop=function(j){wt=j},this.dispose=function(){}}}const ei=new pn,Jm=new _e;function Qm(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,yc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,S,b,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,S,b):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===He&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===He&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const S=t.get(u),b=S.envMap,x=S.envMapRotation;b&&(m.envMap.value=b,ei.copy(x),ei.x*=-1,ei.y*=-1,ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(ei)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,S,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*S,m.scale.value=b*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,S){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===He&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const S=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function t0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const x=b.program;n.uniformBlockBinding(S,x)}function c(S,b){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));const L=b.program;n.updateUBOMapping(S,L);const A=t.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function h(S){const b=d();S.__bindingPointIndex=b;const x=i.createBuffer(),L=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=s[S.id],x=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,R=x.length;A<R;A++){const D=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,y=D.length;E<y;E++){const T=D[E];if(p(T,A,E,L)===!0){const z=T.__offset,O=Array.isArray(T.value)?T.value:[T.value];let G=0;for(let $=0;$<O.length;$++){const H=O[$],q=_(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+G,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,G),G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,b,x,L){const A=S.value,R=b+"_"+x;if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:L[R]=A.clone(),!0;{const D=L[R];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return L[R]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(S){const b=S.uniforms;let x=0;const L=16;for(let R=0,D=b.length;R<D;R++){const E=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,T=E.length;y<T;y++){const z=E[y],O=Array.isArray(z.value)?z.value:[z.value];for(let G=0,$=O.length;G<$;G++){const H=O[G],q=_(H),X=x%L,ht=X%q.boundary,yt=X+ht;x+=ht,yt!==0&&L-yt<q.storage&&(x+=L-yt),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=q.storage}}}const A=x%L;return A>0&&(x+=L-A),S.__size=x,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function u(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class e0{constructor(t={}){const{canvas:e=Gh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=Xn,this.toneMappingExposure=1;const x=this;let L=!1,A=0,R=0,D=null,E=-1,y=null;const T=new he,z=new he;let O=null;const G=new Vt(0);let $=0,H=e.width,q=e.height,X=1,ht=null,yt=null;const wt=new he(0,0,H,q),Ot=new he(0,0,H,q);let Yt=!1;const j=new eo;let ot=!1,bt=!1;const ut=new _e,dt=new _e,Pt=new C,It=new he,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function qt(){return D===null?X:1}let U=n;function Se(M,N){return e.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",it,!1),U===null){const N="webgl2";if(U=Se(N,M),U===null)throw Se(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Dt,Nt,Z,nt,vt,w,v,k,J,tt,K,Et,pt,xt,jt,rt,St,I,et,Q,ft,_t,kt,P;function at(){Dt=new ap(U),Dt.init(),_t=new Xm(U,Dt),Nt=new tp(U,Dt,t,_t),Z=new Gm(U,Dt),Nt.reverseDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),nt=new cp(U),vt=new Am,w=new Wm(U,Dt,Z,vt,Nt,_t,nt),v=new np(x),k=new rp(x),J=new mu(U),kt=new Jf(U,J),tt=new op(U,J,nt,kt),K=new up(U,tt,J,nt),et=new hp(U,Nt,w),rt=new ep(vt),Et=new Tm(x,v,k,Dt,Nt,kt,rt),pt=new Qm(x,vt),xt=new Cm,jt=new Nm(Dt),I=new $f(x,v,k,Z,K,p,l),St=new zm(x,K,Nt),P=new t0(U,nt,Nt,Z),Q=new Qf(U,Dt,nt),ft=new lp(U,Dt,nt),nt.programs=Et.programs,x.capabilities=Nt,x.extensions=Dt,x.properties=vt,x.renderLists=xt,x.shadowMap=St,x.state=Z,x.info=nt}at();const B=new $m(x,U);this.xr=B,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=Dt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Dt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(H,q,!1))},this.getSize=function(M){return M.set(H,q)},this.setSize=function(M,N,V=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,q=N,e.width=Math.floor(M*X),e.height=Math.floor(N*X),V===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(H*X,q*X).floor()},this.setDrawingBufferSize=function(M,N,V){H=M,q=N,X=V,e.width=Math.floor(M*V),e.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(wt)},this.setViewport=function(M,N,V,W){M.isVector4?wt.set(M.x,M.y,M.z,M.w):wt.set(M,N,V,W),Z.viewport(T.copy(wt).multiplyScalar(X).round())},this.getScissor=function(M){return M.copy(Ot)},this.setScissor=function(M,N,V,W){M.isVector4?Ot.set(M.x,M.y,M.z,M.w):Ot.set(M,N,V,W),Z.scissor(z.copy(Ot).multiplyScalar(X).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(M){Z.setScissorTest(Yt=M)},this.setOpaqueSort=function(M){ht=M},this.setTransparentSort=function(M){yt=M},this.getClearColor=function(M){return M.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor.apply(I,arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha.apply(I,arguments)},this.clear=function(M=!0,N=!0,V=!0){let W=0;if(M){let F=!1;if(D!==null){const ct=D.texture.format;F=ct===Qa||ct===Ja||ct===$a}if(F){const ct=D.texture.type,Mt=ct===Pn||ct===ui||ct===us||ct===Hi||ct===Za||ct===Ka,Tt=I.getClearColor(),At=I.getClearAlpha(),Ft=Tt.r,Bt=Tt.g,Rt=Tt.b;Mt?(g[0]=Ft,g[1]=Bt,g[2]=Rt,g[3]=At,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ft,_[1]=Bt,_[2]=Rt,_[3]=At,U.clearBufferiv(U.COLOR,0,_))}else W|=U.COLOR_BUFFER_BIT}N&&(W|=U.DEPTH_BUFFER_BIT),V&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",it,!1),xt.dispose(),jt.dispose(),vt.dispose(),v.dispose(),k.dispose(),K.dispose(),kt.dispose(),P.dispose(),Et.dispose(),B.dispose(),B.removeEventListener("sessionstart",an),B.removeEventListener("sessionend",xs),gn.stop()};function Y(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=nt.autoReset,N=St.enabled,V=St.autoUpdate,W=St.needsUpdate,F=St.type;at(),nt.autoReset=M,St.enabled=N,St.autoUpdate=V,St.needsUpdate=W,St.type=F}function it(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Lt(M){const N=M.target;N.removeEventListener("dispose",Lt),te(N)}function te(M){Gt(M),vt.remove(M)}function Gt(M){const N=vt.get(M).programs;N!==void 0&&(N.forEach(function(V){Et.releaseProgram(V)}),M.isShaderMaterial&&Et.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,W,F,ct){N===null&&(N=Jt);const Mt=F.isMesh&&F.matrixWorld.determinant()<0,Tt=Jc(M,N,V,W,F);Z.setMaterial(W,Mt);let At=V.index,Ft=1;if(W.wireframe===!0){if(At=tt.getWireframeAttribute(V),At===void 0)return;Ft=2}const Bt=V.drawRange,Rt=V.attributes.position;let Qt=Bt.start*Ft,ue=(Bt.start+Bt.count)*Ft;ct!==null&&(Qt=Math.max(Qt,ct.start*Ft),ue=Math.min(ue,(ct.start+ct.count)*Ft)),At!==null?(Qt=Math.max(Qt,0),ue=Math.min(ue,At.count)):Rt!=null&&(Qt=Math.max(Qt,0),ue=Math.min(ue,Rt.count));const de=ue-Qt;if(de<0||de===1/0)return;kt.setup(F,W,Tt,V,At);let Oe,ie=Q;if(At!==null&&(Oe=J.get(At),ie=ft,ie.setIndex(Oe)),F.isMesh)W.wireframe===!0?(Z.setLineWidth(W.wireframeLinewidth*qt()),ie.setMode(U.LINES)):ie.setMode(U.TRIANGLES);else if(F.isLine){let Ct=W.linewidth;Ct===void 0&&(Ct=1),Z.setLineWidth(Ct*qt()),F.isLineSegments?ie.setMode(U.LINES):F.isLineLoop?ie.setMode(U.LINE_LOOP):ie.setMode(U.LINE_STRIP)}else F.isPoints?ie.setMode(U.POINTS):F.isSprite&&ie.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ie.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))ie.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ct=F._multiDrawStarts,_n=F._multiDrawCounts,se=F._multiDrawCount,Je=At?J.get(At).bytesPerElement:1,mi=vt.get(W).currentProgram.getUniforms();for(let Ve=0;Ve<se;Ve++)mi.setValue(U,"_gl_DrawID",Ve),ie.render(Ct[Ve]/Je,_n[Ve])}else if(F.isInstancedMesh)ie.renderInstances(Qt,de,F.count);else if(V.isInstancedBufferGeometry){const Ct=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_n=Math.min(V.instanceCount,Ct);ie.renderInstances(Qt,de,_n)}else ie.render(Qt,de)};function Wt(M,N,V){M.transparent===!0&&M.side===$e&&M.forceSinglePass===!1?(M.side=He,M.needsUpdate=!0,Ms(M,N,V),M.side=Yn,M.needsUpdate=!0,Ms(M,N,V),M.side=$e):Ms(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),u=jt.get(V),u.init(N),b.push(u),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),M!==V&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const W=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ct=F.material;if(ct)if(Array.isArray(ct))for(let Mt=0;Mt<ct.length;Mt++){const Tt=ct[Mt];Wt(Tt,V,F),W.add(Tt)}else Wt(ct,V,F),W.add(ct)}),b.pop(),u=null,W},this.compileAsync=function(M,N,V=null){const W=this.compile(M,N,V);return new Promise(F=>{function ct(){if(W.forEach(function(Mt){vt.get(Mt).currentProgram.isReady()&&W.delete(Mt)}),W.size===0){F(M);return}setTimeout(ct,10)}Dt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ve=null;function ne(M){ve&&ve(M)}function an(){gn.stop()}function xs(){gn.start()}const gn=new bc;gn.setAnimationLoop(ne),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(M){ve=M,B.setAnimationLoop(M),M===null?gn.stop():gn.start()},B.addEventListener("sessionstart",an),B.addEventListener("sessionend",xs),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(N),N=B.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,N,D),u=jt.get(M,b.length),u.init(N),b.push(u),dt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(dt),bt=this.localClippingEnabled,ot=rt.init(this.clippingPlanes,bt),m=xt.get(M,S.length),m.init(),S.push(m),B.enabled===!0&&B.isPresenting===!0){const ct=x.xr.getDepthSensingMesh();ct!==null&&ji(ct,N,-1/0,x.sortObjects)}ji(M,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ht,yt),Ut=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Ut&&I.addToRenderList(m,M),this.info.render.frame++,ot===!0&&rt.beginShadows();const V=u.state.shadowsArray;St.render(V,M,N),ot===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(u.setupLights(),N.isArrayCamera){const ct=N.cameras;if(F.length>0)for(let Mt=0,Tt=ct.length;Mt<Tt;Mt++){const At=ct[Mt];go(W,F,M,At)}Ut&&I.render(M);for(let Mt=0,Tt=ct.length;Mt<Tt;Mt++){const At=ct[Mt];Zn(m,M,At,At.viewport)}}else F.length>0&&go(W,F,M,N),Ut&&I.render(M),Zn(m,M,N);D!==null&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(x,M,N),kt.resetDefaultState(),E=-1,y=null,b.pop(),b.length>0?(u=b[b.length-1],ot===!0&&rt.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ji(M,N,V,W){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){W&&It.setFromMatrixPosition(M.matrixWorld).applyMatrix4(dt);const Mt=K.update(M),Tt=M.material;Tt.visible&&m.push(M,Mt,Tt,V,It.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){const Mt=K.update(M),Tt=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),It.copy(M.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),It.copy(Mt.boundingSphere.center)),It.applyMatrix4(M.matrixWorld).applyMatrix4(dt)),Array.isArray(Tt)){const At=Mt.groups;for(let Ft=0,Bt=At.length;Ft<Bt;Ft++){const Rt=At[Ft],Qt=Tt[Rt.materialIndex];Qt&&Qt.visible&&m.push(M,Mt,Qt,V,It.z,Rt)}}else Tt.visible&&m.push(M,Mt,Tt,V,It.z,null)}}const ct=M.children;for(let Mt=0,Tt=ct.length;Mt<Tt;Mt++)ji(ct[Mt],N,V,W)}function Zn(M,N,V,W){const F=M.opaque,ct=M.transmissive,Mt=M.transparent;u.setupLightsView(V),ot===!0&&rt.setGlobalState(x.clippingPlanes,V),W&&Z.viewport(T.copy(W)),F.length>0&&ys(F,N,V),ct.length>0&&ys(ct,N,V),Mt.length>0&&ys(Mt,N,V),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function go(M,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new di(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?ps:Pn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const ct=u.state.transmissionRenderTarget[W.id],Mt=W.viewport||T;ct.setSize(Mt.z,Mt.w);const Tt=x.getRenderTarget();x.setRenderTarget(ct),x.getClearColor(G),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Ut&&I.render(V);const At=x.toneMapping;x.toneMapping=Xn;const Ft=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),ot===!0&&rt.setGlobalState(x.clippingPlanes,W),ys(M,V,W),w.updateMultisampleRenderTarget(ct),w.updateRenderTargetMipmap(ct),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Rt=0,Qt=N.length;Rt<Qt;Rt++){const ue=N[Rt],de=ue.object,Oe=ue.geometry,ie=ue.material,Ct=ue.group;if(ie.side===$e&&de.layers.test(W.layers)){const _n=ie.side;ie.side=He,ie.needsUpdate=!0,_o(de,V,W,Oe,ie,Ct),ie.side=_n,ie.needsUpdate=!0,Bt=!0}}Bt===!0&&(w.updateMultisampleRenderTarget(ct),w.updateRenderTargetMipmap(ct))}x.setRenderTarget(Tt),x.setClearColor(G,$),Ft!==void 0&&(W.viewport=Ft),x.toneMapping=At}function ys(M,N,V){const W=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ct=M.length;F<ct;F++){const Mt=M[F],Tt=Mt.object,At=Mt.geometry,Ft=W===null?Mt.material:W,Bt=Mt.group;Tt.layers.test(V.layers)&&_o(Tt,N,V,At,Ft,Bt)}}function _o(M,N,V,W,F,ct){M.onBeforeRender(x,N,V,W,F,ct),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,N,V,W,M,ct),F.transparent===!0&&F.side===$e&&F.forceSinglePass===!1?(F.side=He,F.needsUpdate=!0,x.renderBufferDirect(V,N,W,F,M,ct),F.side=Yn,F.needsUpdate=!0,x.renderBufferDirect(V,N,W,F,M,ct),F.side=$e):x.renderBufferDirect(V,N,W,F,M,ct),M.onAfterRender(x,N,V,W,F,ct)}function Ms(M,N,V){N.isScene!==!0&&(N=Jt);const W=vt.get(M),F=u.state.lights,ct=u.state.shadowsArray,Mt=F.state.version,Tt=Et.getParameters(M,F.state,ct,N,V),At=Et.getProgramCacheKey(Tt);let Ft=W.programs;W.environment=M.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(M.isMeshStandardMaterial?k:v).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ft===void 0&&(M.addEventListener("dispose",Lt),Ft=new Map,W.programs=Ft);let Bt=Ft.get(At);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===Mt)return xo(M,Tt),Bt}else Tt.uniforms=Et.getUniforms(M),M.onBeforeCompile(Tt,x),Bt=Et.acquireProgram(Tt,At),Ft.set(At,Bt),W.uniforms=Tt.uniforms;const Rt=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Rt.clippingPlanes=rt.uniform),xo(M,Tt),W.needsLights=th(M),W.lightsStateVersion=Mt,W.needsLights&&(Rt.ambientLightColor.value=F.state.ambient,Rt.lightProbe.value=F.state.probe,Rt.directionalLights.value=F.state.directional,Rt.directionalLightShadows.value=F.state.directionalShadow,Rt.spotLights.value=F.state.spot,Rt.spotLightShadows.value=F.state.spotShadow,Rt.rectAreaLights.value=F.state.rectArea,Rt.ltc_1.value=F.state.rectAreaLTC1,Rt.ltc_2.value=F.state.rectAreaLTC2,Rt.pointLights.value=F.state.point,Rt.pointLightShadows.value=F.state.pointShadow,Rt.hemisphereLights.value=F.state.hemi,Rt.directionalShadowMap.value=F.state.directionalShadowMap,Rt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Rt.spotShadowMap.value=F.state.spotShadowMap,Rt.spotLightMatrix.value=F.state.spotLightMatrix,Rt.spotLightMap.value=F.state.spotLightMap,Rt.pointShadowMap.value=F.state.pointShadowMap,Rt.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Bt,W.uniformsList=null,Bt}function vo(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=er.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function xo(M,N){const V=vt.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Jc(M,N,V,W,F){N.isScene!==!0&&(N=Jt),w.resetTextureUnits();const ct=N.fog,Mt=W.isMeshStandardMaterial?N.environment:null,Tt=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Yi,At=(W.isMeshStandardMaterial?k:v).get(W.envMap||Mt),Ft=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Bt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Rt=!!V.morphAttributes.position,Qt=!!V.morphAttributes.normal,ue=!!V.morphAttributes.color;let de=Xn;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(de=x.toneMapping);const Oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ie=Oe!==void 0?Oe.length:0,Ct=vt.get(W),_n=u.state.lights;if(ot===!0&&(bt===!0||M!==y)){const Ze=M===y&&W.id===E;rt.setState(W,M,Ze)}let se=!1;W.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==_n.state.version||Ct.outputColorSpace!==Tt||F.isBatchedMesh&&Ct.batching===!1||!F.isBatchedMesh&&Ct.batching===!0||F.isBatchedMesh&&Ct.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ct.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ct.instancing===!1||!F.isInstancedMesh&&Ct.instancing===!0||F.isSkinnedMesh&&Ct.skinning===!1||!F.isSkinnedMesh&&Ct.skinning===!0||F.isInstancedMesh&&Ct.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ct.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ct.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ct.instancingMorph===!1&&F.morphTexture!==null||Ct.envMap!==At||W.fog===!0&&Ct.fog!==ct||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==rt.numPlanes||Ct.numIntersection!==rt.numIntersection)||Ct.vertexAlphas!==Ft||Ct.vertexTangents!==Bt||Ct.morphTargets!==Rt||Ct.morphNormals!==Qt||Ct.morphColors!==ue||Ct.toneMapping!==de||Ct.morphTargetsCount!==ie)&&(se=!0):(se=!0,Ct.__version=W.version);let Je=Ct.currentProgram;se===!0&&(Je=Ms(W,N,F));let mi=!1,Ve=!1,Zi=!1;const fe=Je.getUniforms(),on=Ct.uniforms;if(Z.useProgram(Je.program)&&(mi=!0,Ve=!0,Zi=!0),W.id!==E&&(E=W.id,Ve=!0),mi||y!==M){Z.buffers.depth.getReversed()?(ut.copy(M.projectionMatrix),Wh(ut),Xh(ut),fe.setValue(U,"projectionMatrix",ut)):fe.setValue(U,"projectionMatrix",M.projectionMatrix),fe.setValue(U,"viewMatrix",M.matrixWorldInverse);const Ln=fe.map.cameraPosition;Ln!==void 0&&Ln.setValue(U,Pt.setFromMatrixPosition(M.matrixWorld)),Nt.logarithmicDepthBuffer&&fe.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&fe.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Ve=!0,Zi=!0)}if(F.isSkinnedMesh){fe.setOptional(U,F,"bindMatrix"),fe.setOptional(U,F,"bindMatrixInverse");const Ze=F.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),fe.setValue(U,"boneTexture",Ze.boneTexture,w))}F.isBatchedMesh&&(fe.setOptional(U,F,"batchingTexture"),fe.setValue(U,"batchingTexture",F._matricesTexture,w),fe.setOptional(U,F,"batchingIdTexture"),fe.setValue(U,"batchingIdTexture",F._indirectTexture,w),fe.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&fe.setValue(U,"batchingColorTexture",F._colorsTexture,w));const Ki=V.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&et.update(F,V,Je),(Ve||Ct.receiveShadow!==F.receiveShadow)&&(Ct.receiveShadow=F.receiveShadow,fe.setValue(U,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(on.envMap.value=At,on.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(on.envMapIntensity.value=N.environmentIntensity),Ve&&(fe.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&Qc(on,Zi),ct&&W.fog===!0&&pt.refreshFogUniforms(on,ct),pt.refreshMaterialUniforms(on,W,X,q,u.state.transmissionRenderTarget[M.id]),er.upload(U,vo(Ct),on,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(er.upload(U,vo(Ct),on,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&fe.setValue(U,"center",F.center),fe.setValue(U,"modelViewMatrix",F.modelViewMatrix),fe.setValue(U,"normalMatrix",F.normalMatrix),fe.setValue(U,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ze=W.uniformsGroups;for(let Ln=0,Dn=Ze.length;Ln<Dn;Ln++){const yo=Ze[Ln];P.update(yo,Je),P.bind(yo,Je)}}return Je}function Qc(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function th(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,N,V){vt.get(M.texture).__webglTexture=N,vt.get(M.depthTexture).__webglTexture=V;const W=vt.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const V=vt.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,V=0){D=M,A=N,R=V;let W=!0,F=null,ct=!1,Mt=!1;if(M){const At=vt.get(M);if(At.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(At.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(At.__hasExternalTextures)w.rebindTextures(M,vt.get(M.texture).__webglTexture,vt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Rt=M.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&vt.has(Rt)&&(M.width!==Rt.image.width||M.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const Ft=M.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Mt=!0);const Bt=vt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Bt[N])?F=Bt[N][V]:F=Bt[N],ct=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?F=vt.get(M).__webglMultisampledFramebuffer:Array.isArray(Bt)?F=Bt[V]:F=Bt,T.copy(M.viewport),z.copy(M.scissor),O=M.scissorTest}else T.copy(wt).multiplyScalar(X).floor(),z.copy(Ot).multiplyScalar(X).floor(),O=Yt;if(Z.bindFramebuffer(U.FRAMEBUFFER,F)&&W&&Z.drawBuffers(M,F),Z.viewport(T),Z.scissor(z),Z.setScissorTest(O),ct){const At=vt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,At.__webglTexture,V)}else if(Mt){const At=vt.get(M.texture),Ft=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.__webglTexture,V||0,Ft)}E=-1},this.readRenderTargetPixels=function(M,N,V,W,F,ct,Mt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){Z.bindFramebuffer(U.FRAMEBUFFER,Tt);try{const At=M.texture,Ft=At.format,Bt=At.type;if(!Nt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-W&&V>=0&&V<=M.height-F&&U.readPixels(N,V,W,F,_t.convert(Ft),_t.convert(Bt),ct)}finally{const At=D!==null?vt.get(D).__webglFramebuffer:null;Z.bindFramebuffer(U.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(M,N,V,W,F,ct,Mt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){const At=M.texture,Ft=At.format,Bt=At.type;if(!Nt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-W&&V>=0&&V<=M.height-F){Z.bindFramebuffer(U.FRAMEBUFFER,Tt);const Rt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Rt),U.bufferData(U.PIXEL_PACK_BUFFER,ct.byteLength,U.STREAM_READ),U.readPixels(N,V,W,F,_t.convert(Ft),_t.convert(Bt),0);const Qt=D!==null?vt.get(D).__webglFramebuffer:null;Z.bindFramebuffer(U.FRAMEBUFFER,Qt);const ue=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Vh(U,ue,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Rt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ct),U.deleteBuffer(Rt),U.deleteSync(ue),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,N=null,V=0){M.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);const W=Math.pow(2,-V),F=Math.floor(M.image.width*W),ct=Math.floor(M.image.height*W),Mt=N!==null?N.x:0,Tt=N!==null?N.y:0;w.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,Mt,Tt,F,ct),Z.unbindTexture()},this.copyTextureToTexture=function(M,N,V=null,W=null,F=0){M.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let ct,Mt,Tt,At,Ft,Bt,Rt,Qt,ue;const de=M.isCompressedTexture?M.mipmaps[F]:M.image;V!==null?(ct=V.max.x-V.min.x,Mt=V.max.y-V.min.y,Tt=V.isBox3?V.max.z-V.min.z:1,At=V.min.x,Ft=V.min.y,Bt=V.isBox3?V.min.z:0):(ct=de.width,Mt=de.height,Tt=de.depth||1,At=0,Ft=0,Bt=0),W!==null?(Rt=W.x,Qt=W.y,ue=W.z):(Rt=0,Qt=0,ue=0);const Oe=_t.convert(N.format),ie=_t.convert(N.type);let Ct;N.isData3DTexture?(w.setTexture3D(N,0),Ct=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),Ct=U.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),Ct=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const _n=U.getParameter(U.UNPACK_ROW_LENGTH),se=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Je=U.getParameter(U.UNPACK_SKIP_PIXELS),mi=U.getParameter(U.UNPACK_SKIP_ROWS),Ve=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,de.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,At),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bt);const Zi=M.isDataArrayTexture||M.isData3DTexture,fe=N.isDataArrayTexture||N.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const on=vt.get(M),Ki=vt.get(N),Ze=vt.get(on.__renderTarget),Ln=vt.get(Ki.__renderTarget);Z.bindFramebuffer(U.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Z.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let Dn=0;Dn<Tt;Dn++)Zi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vt.get(M).__webglTexture,F,Bt+Dn),M.isDepthTexture?(fe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vt.get(N).__webglTexture,F,ue+Dn),U.blitFramebuffer(At,Ft,ct,Mt,Rt,Qt,ct,Mt,U.DEPTH_BUFFER_BIT,U.NEAREST)):fe?U.copyTexSubImage3D(Ct,F,Rt,Qt,ue+Dn,At,Ft,ct,Mt):U.copyTexSubImage2D(Ct,F,Rt,Qt,ue+Dn,At,Ft,ct,Mt);Z.bindFramebuffer(U.READ_FRAMEBUFFER,null),Z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else fe?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Ct,F,Rt,Qt,ue,ct,Mt,Tt,Oe,ie,de.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Ct,F,Rt,Qt,ue,ct,Mt,Tt,Oe,de.data):U.texSubImage3D(Ct,F,Rt,Qt,ue,ct,Mt,Tt,Oe,ie,de):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,Rt,Qt,ct,Mt,Oe,ie,de.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,Rt,Qt,de.width,de.height,Oe,de.data):U.texSubImage2D(U.TEXTURE_2D,F,Rt,Qt,ct,Mt,Oe,ie,de);U.pixelStorei(U.UNPACK_ROW_LENGTH,_n),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Je),U.pixelStorei(U.UNPACK_SKIP_ROWS,mi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve),F===0&&N.generateMipmaps&&U.generateMipmap(Ct),Z.unbindTexture()},this.copyTextureToTexture3D=function(M,N,V=null,W=null,F=0){return M.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,M=arguments[2],N=arguments[3],F=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,V,W,F)},this.initRenderTarget=function(M){vt.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Z.unbindTexture()},this.resetState=function(){A=0,R=0,D=null,Z.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class io{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new io(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class n0 extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class i0 extends Ue{constructor(t=null,e=1,n=1,s,r,a,o,l,c=qe,h=qe,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class s0 extends Ue{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new gt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],a=[],o=new C,l=new _e;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Le(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Le(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class so extends mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class r0 extends so{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ro(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Vs=new C,jr=new ro,Zr=new ro,Kr=new ro;class a0 extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Vs.subVectors(s[0],s[1]).add(s[0]),c=Vs);const d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Vs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),jr.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,_,m),Zr.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,_,m),Kr.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(jr.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Zr.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Kr.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(jr.calc(l),Zr.calc(l),Kr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function o0(i,t){const e=1-i;return e*e*t}function l0(i,t){return 2*(1-i)*i*t}function c0(i,t){return i*i*t}function ls(i,t,e,n){return o0(i,t)+l0(i,e)+c0(i,n)}function h0(i,t){const e=1-i;return e*e*e*t}function u0(i,t){const e=1-i;return 3*e*e*i*t}function d0(i,t){return 3*(1-i)*i*i*t}function f0(i,t){return i*i*i*t}function cs(i,t,e,n,s){return h0(i,t)+u0(i,e)+d0(i,n)+f0(i,s)}class Pc extends mn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(t,s.x,r.x,a.x,o.x),cs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class p0 extends mn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(t,s.x,r.x,a.x,o.x),cs(t,s.y,r.y,a.y,o.y),cs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lc extends mn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class m0 extends mn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dc extends mn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ls(t,s.x,r.x,a.x),ls(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class g0 extends mn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ls(t,s.x,r.x,a.x),ls(t,s.y,r.y,a.y),ls(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ic extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(xl(o,l.x,c.x,h.x,d.x),xl(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var yl=Object.freeze({__proto__:null,ArcCurve:r0,CatmullRomCurve3:a0,CubicBezierCurve:Pc,CubicBezierCurve3:p0,EllipseCurve:so,LineCurve:Lc,LineCurve3:m0,QuadraticBezierCurve:Dc,QuadraticBezierCurve3:g0,SplineCurve:Ic});class _0 extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new yl[s.type]().fromJSON(s))}return this}}class v0 extends _0{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Lc(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Dc(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Pc(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ic(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new so(t,e,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ao extends je{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Le(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,d=new C,f=new gt,p=new C,g=new C,_=new C;let m=0,u=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,u=t[S+1].y-t[S].y,p.x=u*1,p.y=-m,p.z=u*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,u=t[S+1].y-t[S].y,p.x=u*1,p.y=-m,p.z=u*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=e;S++){const b=n+S*h*s,x=Math.sin(b),L=Math.cos(b);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*x,d.y=t[A].y,d.z=t[A].x*L,a.push(d.x,d.y,d.z),f.x=S/e,f.y=A/(t.length-1),o.push(f.x,f.y);const R=l[3*A+0]*x,D=l[3*A+1],E=l[3*A+0]*L;c.push(R,D,E)}}for(let S=0;S<e;S++)for(let b=0;b<t.length-1;b++){const x=b+S*t.length,L=x,A=x+t.length,R=x+t.length+1,D=x+1;r.push(L,A,D),r.push(R,D,A)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.points,t.segments,t.phiStart,t.phiLength)}}class Gn extends ao{constructor(t=1,e=1,n=4,s=8){const r=new v0;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Gn(t.radius,t.length,t.capSegments,t.radialSegments)}}class oo extends je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new gt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class sn extends je{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],p=[];let g=0;const _=[],m=n/2;let u=0;S(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(p,2));function S(){const x=new C,L=new C;let A=0;const R=(e-t)/n;for(let D=0;D<=r;D++){const E=[],y=D/r,T=y*(e-t)+t;for(let z=0;z<=s;z++){const O=z/s,G=O*l+o,$=Math.sin(G),H=Math.cos(G);L.x=T*$,L.y=-y*n+m,L.z=T*H,d.push(L.x,L.y,L.z),x.set($,R,H).normalize(),f.push(x.x,x.y,x.z),p.push(O,1-y),E.push(g++)}_.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){const y=_[E][D],T=_[E+1][D],z=_[E+1][D+1],O=_[E][D+1];(t>0||E!==0)&&(h.push(y,T,O),A+=3),(e>0||E!==r-1)&&(h.push(T,z,O),A+=3)}c.addGroup(u,A,0),u+=A}function b(x){const L=g,A=new gt,R=new C;let D=0;const E=x===!0?t:e,y=x===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;const T=g;for(let z=0;z<=s;z++){const G=z/s*l+o,$=Math.cos(G),H=Math.sin(G);R.x=E*H,R.y=m*y,R.z=E*$,d.push(R.x,R.y,R.z),f.push(0,y,0),A.x=$*.5+.5,A.y=H*.5*y+.5,p.push(A.x,A.y),g++}for(let z=0;z<s;z++){const O=L+z,G=T+z;x===!0?h.push(G,G+1,O):h.push(G+1,G,O),D+=3}c.addGroup(u,D,x===!0?1:2),u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hi extends sn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new hi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hr extends je{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=t;const f=(e-t)/s,p=new C,g=new gt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const u=r+m/n*a;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let u=0;u<n;u++){const S=u+m,b=S,x=S+n+1,L=S+n+2,A=S+1;o.push(b,x,A),o.push(x,L,A)}}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ye extends je{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new C,f=new C,p=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){const S=[],b=u/n;let x=0;u===0&&a===0?x=.5/e:u===n&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const A=L/e;d.x=-t*Math.cos(s+A*r)*Math.sin(a+b*o),d.y=t*Math.cos(a+b*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(A+x,1-b),S.push(c++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<e;S++){const b=h[u][S+1],x=h[u][S],L=h[u+1][S],A=h[u+1][S+1];(u!==0||a>0)&&p.push(b,x,A),(u!==n-1||l<Math.PI)&&p.push(x,L,A)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lo extends je{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new C,d=new C,f=new C;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,S=(s+1)*p+g;a.push(_,m,S),a.push(m,u,S)}this.setIndex(a),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fn extends _s{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vs extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class x0 extends vs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $r=new _e,Ml=new C,Sl=new C;class co{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ml.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ml),Sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sl),e.updateMatrixWorld(),$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class y0 extends co{constructor(){super(new ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=lr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class M0 extends vs{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new y0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const bl=new _e,ns=new C,Jr=new C;class S0 extends co{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(ns),Jr.copy(n.position),Jr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Jr),n.updateMatrixWorld(),s.makeTranslation(-ns.x,-ns.y,-ns.z),bl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl)}}class Xa extends vs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new S0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class b0 extends co{constructor(){super(new Ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E0 extends vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new b0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class w0 extends vs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class El{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class T0 extends pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);const wl={type:"change"},ho={type:"start"},Uc={type:"end"},Ws=new mc,Tl=new zn,A0=Math.cos(70*Hh.DEG2RAD),we=new C,Be=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qr=1e-6;class R0 extends T0{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new fi,this._lastTargetPosition=new C,this._quat=new fi().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new El,this._sphericalDelta=new El,this._scale=1,this._panOffset=new C,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new C,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=P0.bind(this),this._onPointerDown=C0.bind(this),this._onPointerUp=L0.bind(this),this._onContextMenu=k0.bind(this),this._onMouseWheel=U0.bind(this),this._onKeyDown=N0.bind(this),this._onTouchStart=F0.bind(this),this._onTouchMove=O0.bind(this),this._onMouseDown=D0.bind(this),this._onMouseMove=I0.bind(this),this._interceptControlDown=B0.bind(this),this._interceptControlUp=z0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wl),this.update(),this.state=ce.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Be:n>Math.PI&&(n-=Be),s<-Math.PI?s+=Be:s>Math.PI&&(s-=Be),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=we.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ws.origin.copy(this.object.position),Ws.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ws.direction))<A0?this.object.lookAt(this.target):(Tl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ws.intersectPlane(Tl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qr||this._lastTargetPosition.distanceToSquared(this.target)>Qr?(this.dispatchEvent(wl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function C0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function P0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function L0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uc),this.state=ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function D0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case Ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case Ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(ho)}function I0(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function U0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(ho),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Uc))}function N0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function F0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(ho)}function O0(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function k0(i){this.enabled!==!1&&i.preventDefault()}function B0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function z0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const H0=["moon","ramparts","shop","alley","hall"],G0={zh:{moon:"月夜舞台",ramparts:"城堡露台",shop:"深夜便利店",alley:"雨夜小巷",hall:"王座大厅"},en:{moon:"Moonlit stage",ramparts:"Castle ramparts",shop:"Midnight shop",alley:"Rainy alley",hall:"Throne hall"}},V0=[["ramparts",/hamlet|哈姆雷特|elsinore|rampart|battlement|castle|城堡|城墙|露台|ghost|specter|spectre|鬼魂|幽灵|亡魂|守卫|\bguard|sentinel/gi],["shop",/便利店|商店|超市|柜台|店员|收银|\bshop|\bstore\b|counter|cashier|convenience|robot|机器人|老k|\bkay\b/gi],["alley",/detective|侦探|警探|thief|小偷|盗贼|alley|小巷|街头|街道|\bstreet|police|inspector|noir/gi],["hall",/\bking|\bqueen|jester|throne|\bcourt\b|palace|emperor|国王|王后|王座|王子|公主|小丑|弄臣|宫|朝堂|皇/gi]],Al=(i,t)=>(t.match(i)||[]).length;function W0(i="",t=[]){const e=t.join(" ");let n=null,s=0;for(const[r,a]of V0){const o=Al(a,i)*2+Al(a,e);o>s&&(n=r,s=o)}return n}const ai=i=>{let t=i;return()=>(t=t*16807%2147483647)/2147483647},wn=(i,t)=>{const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]},Tn=(i,t=!0)=>{const e=new s0(i);return t&&(e.colorSpace=Ye),e},ta=(i,t,e,n)=>{i.fillStyle="#fff";for(let s=0;s<e;s++)i.globalAlpha=.3+t()*.7,i.fillRect(t()*512,t()*n,1.5,1.5);i.globalAlpha=1},Rl=(i,t,e,n,s)=>{i.fillStyle="#f5e9b8",i.beginPath(),i.arc(t,e,n,0,7),i.fill(),s&&(i.fillStyle=s,i.beginPath(),i.arc(t+n*.45,e-n*.25,n*.92,0,7),i.fill())},Cl={moon(){const[i,t]=wn(512,256),e=ai(7),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#0b1230"),n.addColorStop(.7,"#3a2a5c"),n.addColorStop(1,"#6b3b57"),t.fillStyle=n,t.fillRect(0,0,512,256),ta(t,e,90,150),Rl(t,380,60,26,"#0b1230"),t.fillStyle="#1a1030",t.beginPath(),t.moveTo(0,256);for(let s=0;s<=512;s+=32)t.lineTo(s,190-Math.sin(s*.03)*25-e()*18);t.lineTo(512,256),t.fill(),t.fillStyle="#120a22",t.beginPath(),t.moveTo(0,256);for(let s=0;s<=512;s+=24)t.lineTo(s,225-e()*22);return t.lineTo(512,256),t.fill(),Tn(i)},ramparts(){const[i,t]=wn(512,256),e=ai(21),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#050a1e"),n.addColorStop(.65,"#1c2a52"),n.addColorStop(1,"#4a3d66"),t.fillStyle=n,t.fillRect(0,0,512,256),ta(t,e,120,140),Rl(t,90,58,30),t.fillStyle="rgba(200,210,255,.10)",t.beginPath(),t.arc(90,58,52,0,7),t.fill(),t.fillStyle="rgba(120,130,190,.28)";for(let r=0;r<5;r++)t.fillRect(e()*400,80+e()*80,80+e()*120,7);t.fillStyle="#0d0f22";const s=(r,a,o)=>{t.fillRect(r,256-o,a,o);for(let l=0;l<a;l+=10)t.fillRect(r+l,256-o-8,6,8);t.beginPath(),t.moveTo(r-3,256-o-8),t.lineTo(r+a/2,256-o-8-a*.9),t.lineTo(r+a+3,256-o-8),t.fill()};t.fillRect(150,188,270,68);for(let r=150;r<420;r+=14)t.fillRect(r,180,8,8);s(160,34,120),s(255,40,150),s(360,36,110),s(430,28,90),t.fillStyle="#ffd37a";for(const[r,a]of[[170,150],[268,120],[270,150],[372,160],[210,205],[320,210]])t.fillRect(r,a,5,8);return t.fillStyle="#080a18",t.fillRect(0,232,512,24),Tn(i)},shop(){const[i,t]=wn(512,256),e=ai(33),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#2b3a46"),n.addColorStop(1,"#4b5d63"),t.fillStyle=n,t.fillRect(0,0,512,256),t.fillStyle="#0c1226",t.fillRect(330,40,150,120),ta(t,ai(5),20,0),t.fillStyle="#fff",t.globalAlpha=.6;for(let r=0;r<14;r++)t.fillRect(335+e()*140,45+e()*50,1.5,1.5);t.globalAlpha=1,t.fillStyle="#ffc98a",t.beginPath(),t.arc(360,100,5,0,7),t.fill(),t.fillStyle="rgba(255,200,140,.18)",t.beginPath(),t.arc(360,100,22,0,7),t.fill(),t.strokeStyle="#1a2230",t.lineWidth=4,t.strokeRect(330,40,150,120),t.beginPath(),t.moveTo(405,40),t.lineTo(405,160),t.stroke();const s=(r,a)=>{for(let o=0;o<4;o++){const l=70+o*36;t.fillStyle="#c9c2b0",t.fillRect(r,l+28,a,4);for(let c=r+3;c<r+a-8;c+=11){t.fillStyle=["#e74c3c","#f1c40f","#3498db","#2ecc71","#ecf0f1","#e67e22","#9b59b6"][Math.floor(e()*7)];const h=14+e()*12;t.fillRect(c,l+28-h,8,h)}}};return s(20,130),s(170,130),t.font="bold 30px system-ui, sans-serif",t.textAlign="center",t.shadowColor="#ff4fa3",t.shadowBlur=14,t.fillStyle="#ff9fd0",t.fillText("OPEN 24H",250,40),t.shadowColor="#4ff",t.fillStyle="#9ff",t.font="bold 15px system-ui, sans-serif",t.fillText("便利店",250,58),t.shadowBlur=0,t.fillStyle="#26323a",t.fillRect(0,220,512,36),Tn(i)},alley(){const[i,t]=wn(512,256),e=ai(55);t.fillStyle="#1a1620",t.fillRect(0,0,512,256);for(let s=0;s<256;s+=12)for(let r=-(s/12%2)*12;r<512;r+=24){const a=22+e()*14;t.fillStyle=`rgb(${a+20},${a+8},${a+8})`,t.fillRect(r+1,s+1,22,10)}t.fillStyle="#0c0a12",t.fillRect(0,0,512,30),t.fillStyle="#ffcf7a";for(const[s,r]of[[60,70],[60,110],[210,70],[440,90]])t.fillRect(s,r,26,34),t.fillStyle="#7a3a22",t.fillRect(s+12,r,2,34),t.fillStyle="#ffcf7a";t.strokeStyle="#08060c",t.lineWidth=3;for(let s=0;s<4;s++)t.beginPath(),t.moveTo(330,60+s*38),t.lineTo(400,60+s*38),t.stroke();t.beginPath(),t.moveTo(330,60),t.lineTo(330,190),t.moveTo(400,60),t.lineTo(400,190),t.stroke();const n=t.createRadialGradient(150,60,4,150,60,130);n.addColorStop(0,"rgba(255,220,150,.75)"),n.addColorStop(1,"rgba(255,220,150,0)"),t.fillStyle=n,t.fillRect(0,0,340,230),t.strokeStyle="rgba(170,190,230,.28)",t.lineWidth=1;for(let s=0;s<90;s++){const r=e()*512,a=e()*256;t.beginPath(),t.moveTo(r,a),t.lineTo(r-4,a+14),t.stroke()}return Tn(i)},hall(){const[i,t]=wn(512,256),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#2a0f1c"),e.addColorStop(1,"#4d1c2a"),t.fillStyle=e,t.fillRect(0,0,512,256);for(let n=0;n<4;n++){const s=40+n*130;t.fillStyle="#17080e",t.beginPath(),t.moveTo(s,256),t.lineTo(s,100),t.arc(s+35,100,35,Math.PI,0),t.lineTo(s+70,256),t.fill(),t.fillStyle=["#3b6fb0","#c0392b","#e8b64c","#2e9a6a"][n],t.globalAlpha=.55,t.fillRect(s+8,80,54,100),t.globalAlpha=1,t.strokeStyle="#1a0c10",t.lineWidth=2,t.strokeRect(s+8,80,54,100),t.beginPath(),t.moveTo(s+35,70),t.lineTo(s+35,180),t.stroke()}t.fillStyle="#e8b64c",t.fillRect(0,205,512,5),t.fillStyle="#7a1424";for(let n=0;n<512;n+=28)t.fillRect(n,0,14,38+Math.sin(n)*6);t.fillStyle="#b88a2c";for(let n=0;n<512;n+=28)t.fillRect(n+6,36,2,10);return Tn(i)}},ea={moon:null,ramparts(){const[i,t]=wn(256,128),e=ai(3);t.fillStyle="#3c3a46",t.fillRect(0,0,256,128);for(let n=0;n<128;n+=32)for(let s=-(n/32%2)*32;s<256;s+=64){const r=50+e()*24;t.fillStyle=`rgb(${r},${r-2},${r+10})`,t.fillRect(s+2,n+2,60,28)}return Tn(i)},shop(){const[i,t]=wn(128,128);for(let e=0;e<4;e++)for(let n=0;n<4;n++)t.fillStyle=(n+e)%2?"#d8d6cc":"#6f8088",t.fillRect(n*32,e*32,32,32);return Tn(i)},alley(){const[i,t]=wn(256,128),e=ai(9);t.fillStyle="#25222c",t.fillRect(0,0,256,128);for(let n=0;n<90;n++){const s=36+e()*24;t.fillStyle=`rgb(${s},${s},${s+8})`,t.beginPath(),t.ellipse(e()*256,e()*128,8+e()*8,5+e()*4,0,0,7),t.fill()}return t.fillStyle="rgba(160,190,255,.12)",t.fillRect(40,30,90,14),t.fillRect(150,80,70,10),Tn(i)},hall(){const[i,t]=wn(256,128);return t.fillStyle="#5a3a24",t.fillRect(0,0,256,128),t.fillStyle="#8e1b2b",t.fillRect(88,0,80,128),t.fillStyle="#e8b64c",t.fillRect(88,0,4,128),t.fillRect(164,0,4,128),Tn(i)}},xe=(i,t={})=>new fn({color:i,roughness:.8,metalness:.03,...t}),is=(i,t=1.4)=>new fn({color:i,emissive:i,emissiveIntensity:t}),ge=(i,t,e,n,s,r,a,o)=>{const l=new Xt(new Me(t,e,n),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l},Bn=(i,t,e,n,s,r,a,o,l)=>{const c=new Xt(new sn(t,e,n,s),r);return c.position.set(a,o,l),c.castShadow=!0,i.add(c),c},X0={moon(){return{group:new Kt,tick(){},obstacles:[]}},ramparts(){const i=new Kt,t=xe("#5a5662"),e=xe("#46424f"),n=[];ge(i,13.2,1.15,.7,t,0,.57,-3.95);for(let s=-6;s<=6;s+=1.5)ge(i,.8,.5,.7,t,s,1.4,-3.95);for(const s of[-1,1]){ge(i,1.2,3.4,1.2,e,s*6.3,1.7,-3.3);for(const a of[-.4,.4])ge(i,.35,.4,1.2,e,s*6.3+a,3.6,-3.3);Bn(i,.04,.04,1.5,6,xe("#2b2018"),s*4.8,.75,-3.4),Bn(i,.12,.07,.2,8,xe("#3a2a18"),s*4.8,1.55,-3.4);const r=new Xt(new hi(.13,.4,7),is("#ff9a3a",2));r.position.set(s*4.8,1.85,-3.4),i.add(r),n.push(r)}return{group:i,obstacles:[{x0:5.6,x1:7,z0:-3.9,z1:-2.7,h:3.4},{x0:-7,x1:-5.6,z0:-3.9,z1:-2.7,h:3.4}],tick(s){n.forEach((r,a)=>{r.scale.set(1+Math.sin(s*13+a)*.12,1+Math.sin(s*9+a*2)*.22,1)})}}},shop(){const i=new Kt,t=xe("#d6d0bd"),e=xe("#33393f"),n=xe("#aab0b4");ge(i,3.3,1,.85,t,-3.2,.5,-2.7),ge(i,3.5,.08,1,e,-3.2,1.04,-2.7),ge(i,.5,.3,.4,xe("#222"),-2.4,1.23,-2.7),ge(i,.42,.22,.03,is("#7fe6ff",1.1),-2.4,1.3,-2.49);for(let s=0;s<4;s++)ge(i,.22,.26,.16,xe(["#e74c3c","#f1c40f","#3498db","#2ecc71"][s]),-4.2+s*.3,1.21,-2.55);ge(i,2.6,2.2,.5,n,3.3,1.1,-3.9);for(let s=0;s<4;s++){ge(i,2.6,.05,.6,xe("#8a9094"),3.3,.35+s*.55,-3.75);for(let r=0;r<8;r++)ge(i,.22,.3,.2,xe(["#e74c3c","#f1c40f","#3498db","#2ecc71","#ecf0f1","#e67e22"][(r+s)%6]),2.35+r*.3,.5+s*.55,-3.7)}return ge(i,1.1,2.3,.7,xe("#cfe3ea"),5.6,1.15,-3.5),ge(i,.9,2,.04,is("#bfefff",.8),5.6,1.15,-3.13),ge(i,3.6,.1,.4,is("#f4fbff",1.6),0,6.35,-2.4),{group:i,obstacles:[{x0:-4.95,x1:-1.45,z0:-3.2,z1:-2.2,h:1.4},{x0:2,x1:4.6,z0:-4.2,z1:-3.4,h:2.2},{x0:5.05,x1:6.15,z0:-3.85,z1:-3.1,h:2.3}],tick(){}}},alley(){const i=new Kt,t=xe("#4a2f2c"),e=xe("#3c4650");ge(i,1,.9,.9,xe("#6a4a2a"),-5,.45,-3),ge(i,.8,.7,.8,xe("#7a5532"),-4.9,1.25,-3),Bn(i,.4,.36,1,12,e,5.2,.5,-3.1),Bn(i,.42,.42,.06,12,xe("#2c343c"),5.2,1.03,-3.1),Bn(i,.06,.08,4.2,8,xe("#22262a"),-3.4,2.1,-3.6),ge(i,.7,.1,.1,xe("#22262a"),-3.1,4.15,-3.6);const n=new Xt(new ye(.2,12,8),is("#ffd88a",2.2));return n.position.set(-2.8,4,-3.6),i.add(n),ge(i,13,.8,.5,t,0,.4,-4.1),{group:i,obstacles:[{x0:-5.5,x1:-4.5,z0:-3.5,z1:-2.5,h:1.6},{x0:4.8,x1:5.6,z0:-3.5,z1:-2.7,h:1},{x0:-3.5,x1:-3.3,z0:-3.7,z1:-3.5,h:4.2}],tick(s){n.material.emissiveIntensity=2+Math.sin(s*21)*.2+Math.sin(s*7.3)*.2}}},hall(){const i=new Kt,t=xe("#c9962f",{metalness:.6,roughness:.4}),e=xe("#7a1424");for(const n of[-1,1])Bn(i,.4,.45,6.4,14,xe("#4a3a40"),n*4.3,3.2,-3.8),Bn(i,.55,.55,.25,14,t,n*4.3,6.4,-3.8),Bn(i,.55,.55,.25,14,t,n*4.3,.12,-3.8);ge(i,2.6,.5,1.6,xe("#5a3a24"),0,.25,-3.2),ge(i,1,.5,.9,e,0,.75,-3.2),ge(i,1.1,2.4,.2,e,0,1.7,-3.8),ge(i,1.3,.2,.3,t,0,3,-3.8);for(const n of[-1,1])ge(i,.18,.9,.9,t,n*.65,1,-3.2);return{group:i,obstacles:[{x0:3.8,x1:4.8,z0:-4.3,z1:-3.3,h:6.4},{x0:-4.8,x1:-3.8,z0:-4.3,z1:-3.3,h:6.4}],tick(){}}}};function Y0(i,t){const e=new ci({map:Cl.moon()}),n=new Xt(new Wi(13.6,6.8),e);n.position.set(0,3.5,-4.5),t.add(n);const s=new fn({color:"#ffffff",roughness:.8,transparent:!0,opacity:1}),r=new Xt(new Wi(13.8,7.4),s);r.rotation.x=-Math.PI/2,r.position.set(0,.012,-.7),r.receiveShadow=!0,r.visible=!1,t.add(r);const a={};let o="moon",l=null;const c={back:{moon:e.map},floor:{}};function h(f){var p,g;(p=c.back)[f]??(p[f]=Cl[f]()),ea[f]&&((g=c.floor)[f]??(g[f]=(()=>{const _=ea[f]();return _.wrapS=_.wrapT=ar,_.repeat.set(f==="shop"?6:3,f==="shop"?3:2),_})())),a[f]??(a[f]=(()=>{const _=X0[f]();return _.group.visible=!1,i.add(_.group),_})())}function d(f){return H0.includes(f)||(f="moon"),f===o&&l||(h(f),e.map=c.back[f],e.needsUpdate=!0,ea[f]?(s.map=c.floor[f],s.needsUpdate=!0,r.visible=!0):r.visible=!1,l&&(l.group.visible=!1),l=a[f],l.group.visible=!0,o=f),o}return d("moon"),{show:d,warm:h,get current(){return o},get obstacles(){return(l==null?void 0:l.obstacles)||[]},tick(f){l==null||l.tick(f)}}}const oe=(i,t={})=>new fn({color:i,roughness:.85,metalness:.02,...t}),Ee=(i,t,e,n,s,r,a,o=!0)=>{const l=new Xt(new Me(i,t,e),n);return l.position.set(s,r,a),l.castShadow=o,l.receiveShadow=!0,l},Xs=(i,t,e)=>i+(t-i)*e,q0=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e},ni=(i,t,e)=>Math.max(t,Math.min(e,i));function j0(i){const t=new e0({canvas:i,antialias:!0});t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.shadowMap.enabled=!0,t.shadowMap.type=Kl,t.toneMapping=Jl,t.toneMappingExposure=1.15;const e=new n0;e.background=new Vt("#07040a"),e.fog=new io("#07040a",28,60);const n=new ze(46,1.6,.1,120),s={pos:new C(0,4.9,18.2),look:new C(0,.55,-1),fov:46};n.position.copy(s.pos),n.lookAt(s.look);const r=new R0(n,i);r.target.copy(s.look),r.enabled=!1,r.enableDamping=!0,r.maxPolarAngle=Math.PI*.49,r.minDistance=3,r.maxDistance=30;const a=oe("#6b4a2c",{roughness:.6}),o=new Kt;e.add(o),o.add(Ee(14,.9,7.6,a,0,-.45,-.7));for(let I=-6;I<=6;I++)o.add(Ee(.02,.005,7.6,oe("#4a3019"),I+.5,.003,-.7,!1));o.add(Ee(60,.2,40,oe("#2a0d16"),0,-1,15)),o.add(Ee(16,9,.3,oe("#15101c"),0,4.5,-4.7));const l=Y0(e,o),c=oe("#0b0810");for(const I of[-1,1])o.add(Ee(.3,9,8,c,I*7.3,4.5,-.7)),o.add(Ee(2.4,9,.2,oe("#190d14"),I*6.1,4.5,2.2)),o.add(Ee(2.2,9,.2,oe("#190d14"),I*6,4.5,-2.2)),o.add(Ee(3,.02,7,oe("#000"),I*9,.01,-1,!1));o.add(Ee(15,1.5,8,c,0,9.4,-.7));const h=oe("#b88a2c",{metalness:.6,roughness:.4}),d=new Kt;e.add(d);for(const I of[-1,1])d.add(Ee(1.5,9,1,oe("#2b1620"),I*7.9,4.5,3.5)),d.add(Ee(.2,9,1.1,h,I*7.15,4.5,3.5));d.add(Ee(17.3,1.6,1.2,oe("#2b1620"),0,8.2,3.5)),d.add(Ee(14.3,.2,1.3,h,0,7.35,3.5));const f=oe("#8e1b2b",{roughness:.9});for(let I=-7;I<=7;I++)d.add(Ee(1,.7+(I%2?.25:0),.12,f,I*.98,6.95-(I%2?.12:0),3));const p={L:new Kt,R:new Kt,k:0,target:0};for(const[I,et]of[[p.L,-1],[p.R,1]]){for(let Q=0;Q<10;Q++){const _t=Ee(.72,7.1,.08,new fn({color:Q%2?"#a31f33":"#7a1424",roughness:.95}),et*(.36+Q*.7),3.55,3+Q%2*.18);I.add(_t)}e.add(I)}e.add(new w0("#2b2a44",.9)),e.add(new x0("#6a6a90","#1a0f10",.5));const g=new E0("#ffd9a6",1.1);g.position.set(0,9,12),g.target.position.set(0,0,-1),e.add(g,g.target);const _=new M0("#fff1d0",220,22,.32,.5,1.6);_.position.set(0,9.5,4),_.castShadow=!0,_.shadow.mapSize.set(768,768),_.shadow.bias=-4e-4,e.add(_,_.target);const m=new Xa("#5a7bd6",40,14),u=new Xa("#d65a8a",40,14);m.position.set(-6,5,-3),u.position.set(6,5,-3),e.add(m,u);for(let I=-6;I<=6;I++){const et=Ee(.25,.14,.2,new fn({color:"#ffd9a0",emissive:"#ffb347",emissiveIntensity:1.2}),I*1,.07,2.95,!1);e.add(et)}const S=oe("#6d1d2c"),b=oe("#2a1a1a"),x=6,L=I=>6.2+I*1.25,A=I=>-.9+I*.26,R=[];for(let I=0;I<x;I++){e.add(Ee(18,.25+I*.26,.9,oe("#1d1015"),0,-.9+(.25+I*.26)/2-.1,L(I)+.2,!1));for(let et=-7;et<=7;et++){const Q=et*1.1+(et>0?.35:et<0?-.35:0),ft=A(I)+.2,_t=L(I),kt=new Kt;kt.position.set(Q,ft,_t),kt.add(Ee(.8,.12,.7,S,0,.2,0,!1),Ee(.8,.8,.12,S,0,.55,.32,!1),Ee(.1,.4,.7,b,.45,.35,0,!1)),e.add(kt),R.push({x:Q,y:ft,z:_t,r:I,i:et})}}const D=[],E={r:4,i:0};let y=11;const T=()=>(y=y*16807%2147483647)/2147483647,z=["#f1c9a5","#d9a47a","#b9835a","#8a5a3a","#f4d6bd"],O=["#1a1210","#3a2616","#6b4a22","#a8782f","#d9d2c4","#7a2a1a","#26304a"],G={head:new ye(.17,12,10),body:new Gn(.2,.3,3,8),arm:new Gn(.05,.26,3,6),cap:new ye(.185,12,9,0,Math.PI*2,0,2.2),big:new ye(.25,10,8),bun:new ye(.07,8,6),back:new Me(.34,.4,.1),tail:new Gn(.045,.28,3,6),brim:new Me(.3,.025,.18),hatBrim:new sn(.3,.3,.025,14),hatTop:new sn(.15,.17,.2,12),beanie:new ye(.19,10,8,0,Math.PI*2,0,1.7)};function $({cloth:I,skin:et,hair:Q,style:ft,scale:_t=1,width:kt=1,capCol:P}){const at=new Kt,B=new Kt;at.add(B),B.scale.set(kt*_t,_t,kt*_t);const Y=new Xt(G.body,oe(I));Y.position.y=.2,B.add(Y);const st=new Kt;st.position.y=.72,B.add(st);const it=oe(Q),Lt=oe(et),te=new Xt(G.head,Lt);st.add(te);const Gt=(ve,ne,an,xs,gn,ji=0)=>{const Zn=new Xt(ve,ne);return Zn.position.set(an,xs,gn),Zn.rotation.x=ji,st.add(Zn),Zn};switch(ft){case 0:Gt(G.cap,it,0,.02,-.02,-.2);break;case 1:Gt(G.cap,it,0,.02,-.02,-.2),Gt(G.bun,it,0,.21,-.05);break;case 2:Gt(G.cap,it,0,.02,-.02,-.2),Gt(G.back,it,0,-.1,-.12);break;case 3:break;case 4:Gt(G.cap,oe(P),0,.03,-.02,-.15),Gt(G.brim,oe(P),0,.1,.2);break;case 5:Gt(G.hatBrim,oe(P),0,.16,0),Gt(G.hatTop,oe(P),0,.27,0);break;case 6:Gt(G.big,it,0,.07,-.04);break;case 7:Gt(G.cap,it,0,.02,-.02,-.2),Gt(G.tail,it,0,-.08,-.2,.3);break;default:Gt(G.beanie,oe(P),0,.06,0,-.1)}const Wt=[1,-1].map(ve=>{const ne=new Kt;ne.position.set(ve*.23,.4,.02);const an=new Xt(G.arm,oe(I));return an.position.y=-.16,ne.add(an),B.add(ne),ne});return{g:at,inner:B,head:st,arms:Wt}}for(const I of R){if(I.r===E.r&&I.i===E.i||T()<.38||I.r>=3&&Math.abs(I.i)<=1)continue;const et=T()<.12,Q=$({cloth:new Vt().setHSL(T(),.35+T()*.25,.3+T()*.14),skin:z[Math.floor(T()*5)],hair:O[Math.floor(T()*O.length)],style:Math.floor(T()*9),scale:et?.78:.92+T()*.2,width:.9+T()*.3,capCol:new Vt().setHSL(T(),.5,.4)});Q.g.position.set(I.x,I.y+.55,I.z),Q.g.rotation.y=Math.PI,e.add(Q.g),D.push({...Q,x:I.x,z:I.z,baseY:I.y+.55,ph:T()*7,sp:.5+T(),attn:.4+T()*.6,rx:T(),jolt:0,lean:0,clapSp:11+T()*5})}const H=R.find(I=>I.r===E.r&&I.i===E.i),q=new Kt;q.position.set(H.x,H.y+.55,H.z),q.rotation.y=Math.PI,e.add(q);const X=oe("#f2c14e",{emissive:"#a86a00",emissiveIntensity:.7,roughness:.45}),ht=new Kt;ht.scale.setScalar(1.2),q.add(ht);const yt=new Xt(new Gn(.25,.34,4,10),X);yt.position.y=.2,yt.castShadow=!0;const wt=new Kt;wt.position.y=.76;const Ot=new Xt(new ye(.19,14,12),oe("#ffe2bd",{emissive:"#5a4026",emissiveIntensity:.5})),Yt=oe("#e0304f",{emissive:"#6a0f20",emissiveIntensity:.6}),j=new Xt(new ye(.205,14,10,0,Math.PI*2,0,1.75),Yt);j.position.y=.01,j.rotation.x=-.15;const ot=new Xt(new Me(.3,.03,.2),Yt);ot.position.set(0,.1,.2);const bt=new Xt(new ye(.06,8,6),oe("#ffd24a",{emissive:"#aa7700",emissiveIntensity:.8}));bt.position.y=.22,wt.add(Ot,j,ot,bt);const ut=[1,-1].map(I=>{const et=new Kt;et.position.set(I*.26,.4,.02);const Q=new Xt(new Gn(.06,.28,3,6),X);return Q.position.y=-.17,et.add(Q),ht.add(et),et});ht.add(yt,wt);const dt=new Xt(new hi(.08,.17,4),new ci({color:"#ffd24a"}));dt.rotation.x=Math.PI,dt.position.y=1.35;const Pt=new Xt(new hr(.2,.26,24),new ci({color:"#ffd24a",transparent:!0,opacity:.8,side:$e}));Pt.rotation.x=Math.PI/2,Pt.position.y=1.18,ht.add(dt,Pt);const It=new Xt(new hr(.5,.64,28),new ci({color:"#ffd24a",transparent:!0,opacity:.6,side:$e}));It.rotation.x=-Math.PI/2,It.position.set(H.x,H.y+.02,H.z),e.add(It);const Jt={ph:1.3,sp:.8,attn:.9,rx:.1,jolt:0,lean:0,clapSp:13};let Ut="auto",qt=new C(0,1.5,0),U=new Vt("#fff1d0"),Se=0,Dt=0,Nt={emo:"neutral",level:0};const Z=2.2,nt={type:"wide",since:-9,sinceWide:0,subj:null,other:null,forced:null},vt=new C(H.x+.38,H.y+.55+1.75,H.z+1.7),w=new C,v=new C;let k=s.fov,J=!0;const tt=(I,et,Q,ft)=>{for(const _t of l.obstacles)if(I>_t.x0-ft&&I<_t.x1+ft&&Q>_t.z0-ft&&Q<_t.z1+ft&&et<_t.h+.25)return!0;return!1},K=(I,et)=>ni(2*Math.atan(I/2/et)*180/Math.PI,11,44);function Et(){const I=nt.subj,et=nt.other,Q=nt.type;if(!I||Q==="wide"){w.copy(s.pos),v.copy(s.look),k=s.fov;return}const ft=I.pos.x,_t=I.pos.y;if(Q==="ots"){let B=ft,Y=_t,st=0;et&&(B=(ft+et.pos.x)/2,Y=(_t+et.pos.y)/2,st=Math.hypot(ft-et.pos.x,_t-et.pos.y)),w.copy(vt),v.set(B,1.2,Y);const it=Math.hypot(w.x-B,w.z-Y),Lt=n.aspect||1.6;k=K(Math.max(2.5/.62,(st+1.1)/(.62*Lt)),it);return}if(Q==="two"&&et){const B=et.pos.x-ft,Y=et.pos.y-_t,st=Math.hypot(B,Y)||1,it=ft+B/2,Lt=_t+Y/2;let te=-Y/st,Gt=B/st;Gt<0&&(te=-te,Gt=-Gt);const Wt=ni(st*1.25+3.4,4.2,7.5);let ve=it+te*Wt,ne=Lt+Gt*Wt;ne=ni(ne,3.2,7),ve=ni(ve,-5.5,5.5),tt(ve,1.6,ne,.3)&&(ne=6.4),w.set(ve,1.65,ne),v.set(it,1.2,Lt),k=K((st+1.6)/(.7*(n.aspect||1.6)),Math.hypot(ve-it,ne-Lt));return}const kt=I.yaw,P=2.9;let at=null;for(const B of[.52,-.52,.95,-.95,1.4,-1.4,0]){const Y=kt+B,st=ft+Math.sin(Y)*P,it=_t+Math.cos(Y)*P;if(!(it<1.2||it>6.4||Math.abs(st)>6.3)&&!tt(st,1.6,it,.35)&&(at={px:st,pz:it},it>=3||B===0))break}if(!at||at.pz<1.2){const B=ni(_t+3.4,3.2,6.4);at={px:ni(ft*.9,-5,5),pz:B}}w.set(at.px,1.6,at.pz),v.set(ft,1.28,_t),k=K(2.7,Math.hypot(at.px-ft,at.pz-_t)),et&&(v.x=ft+(et.pos.x-ft)*.12,v.z=_t+(et.pos.y-_t)*.12)}const pt=new C,xt=new C().copy(s.look),jt=new C;new C,_.target.position.set(0,0,0);function rt(){const I=i.clientWidth,et=i.clientHeight;!I||!et||(t.setSize(I,et,!1),n.aspect=I/et,n.updateProjectionMatrix())}new ResizeObserver(rt).observe(i),rt();function St(I,et,Q,ft,_t,kt,P){const at=qt.x-(I.x??ft.position.x),B=qt.z-(I.z??ft.position.z),Y=ni(q0(Math.PI,Math.atan2(at,B)),-.7,.7)*I.attn;et.rotation.y+=(Y-et.rotation.y)*(1-Math.exp(-4*kt)),ft.rotation.y=Math.PI+et.rotation.y*P,I.jolt=Math.max(0,I.jolt-kt*2.2);const st=Nt.level,it=Nt.emo;let Lt=.04+.05*st,te=0,Gt=0;(it==="angry"||it==="proud")&&I.rx<.8&&(Lt+=.1*st),it==="sad"&&I.rx<.8&&(te=.28*st,Lt-=.02),it==="happy"&&I.rx<.75&&(Gt=Math.abs(Math.sin(Dt*6+I.ph))*.05*st),it==="tender"&&I.rx<.6?et.rotation.z=Math.sin(Dt*1.2+I.ph)*.12*st:et.rotation.z=Math.sin(Dt*I.sp+I.ph)*.05,Lt-=I.jolt*.28,Gt+=I.jolt*.1,I.lean+=(Lt-I.lean)*(1-Math.exp(-5*kt)),ft.children[0].rotation.x=I.lean+Math.sin(Dt*1.3+I.ph)*.012,et.rotation.x=te-I.jolt*.2;const Wt=Se>0,ve=.5+.5*Math.sin(Dt*I.clapSp+I.ph);for(let ne=0;ne<2;ne++){const an=ne===0?1:-1;Wt?(Q[ne].rotation.set(0,0,an*(2.75-.5*ve)),Q[ne].rotation.x=-.3):Q[ne].rotation.set(-.15*st,0,an*(.12+Math.sin(Dt*.8+I.ph)*.03))}ft.position.y=_t+Gt+(Wt?Math.abs(Math.sin(Dt*8+I.ph))*.05:0)}return{renderer:t,scene:e,camera:n,curtain:p,sets:l,audienceTarget:new C(0,1.6,11),setView(I){Ut=I,r.enabled=I==="free",I==="free"&&r.target.copy(xt),J=!0},cue({type:I="beat",speaker:et=null,listener:Q=null,intensity:ft=.5,emotion:_t="neutral",entrance:kt=!1,close:P=!1,beatNo:at=0}={}){nt.lastSpeaker=et||nt.lastSpeaker,nt.lastListener=Q;let B="ots";return I==="finish"||kt||!et||nt.sinceWide>=3+at%2?B="wide":P||ft>=.75||_t==="gasp"||_t==="afraid"?B="close":Q&&Math.hypot(et.pos.x-Q.pos.x,et.pos.y-Q.pos.y)<4&&at%3===0&&(B="two"),B==="two"&&!Q&&(B="ots"),Dt-nt.since<Z&&I!=="finish"&&(B=nt.type==="two"&&!Q?"ots":nt.type),B!==nt.type&&(nt.type=B,nt.since=Dt,J=!0),nt.sinceWide=B==="wide"?0:nt.sinceWide+1,nt.subj=et,nt.other=Q,nt.forced=null,B},get shotType(){return Ut==="auto"?nt.type:Ut},get view(){return Ut},setFocus(I,et,Q=1){I&&qt.copy(I),et&&U.set(et),_.intensity=220*Q},setShot(I){I[0]&&qt.set(I[0].x,1.5,I[0].z)},setSet(I){return l.show(I)},react(I,et=.5){if(Nt={emo:I,level:.45+et*.55},I==="gasp"||I==="afraid"){for(const Q of D)Q.rx<.55&&(Q.jolt=.6+Math.random()*.4);Jt.jolt=.7}},openCurtain(I){p.target=I?1:0},applaud(I){Se=I},update(I){Dt+=I,l.tick(Dt),Nt.level=Math.max(0,Nt.level-I*.16),p.k=Xs(p.k,p.target,1-Math.exp(-1.6*I));const et=1-p.k*.78;p.L.scale.x=p.R.scale.x=et,p.L.position.x=-(7-7.1*et),p.R.position.x=7-7.1*et,_.target.position.lerp(jt.set(qt.x,.8,qt.z),1-Math.exp(-4*I)),_.position.x=Xs(_.position.x,qt.x*.6,1-Math.exp(-3*I)),_.color.lerp(U,1-Math.exp(-3*I)),Se=Math.max(0,Se-I);for(const ft of D)St(ft,ft.head,ft.arms,ft.g,ft.baseY,I,.5);St(Jt,wt,ut,q,H.y+.55,I,.35);const Q=Ut!=="free"&&Ut!=="audience"&&nt.type==="ots";if(dt.visible=Pt.visible=It.visible=!Q,dt.position.y=1.35+Math.sin(Dt*3)*.06,dt.rotation.y=Dt*2.2,Pt.scale.setScalar(1+Math.sin(Dt*3)*.12),It.material.opacity=.4+Math.sin(Dt*3)*.25,Ut==="audience")pt.copy(s.pos),pt.x+=qt.x*.05,n.position.lerp(pt,1-Math.exp(-3*I)),xt.lerp(jt.set(s.look.x+qt.x*.1,s.look.y,s.look.z),1-Math.exp(-3*I)),n.lookAt(xt),k=s.fov;else if(Ut==="free")r.update();else{if(Ut==="close"){const ft=nt.subj||nt.lastSpeaker;ft&&(nt.subj=ft,nt.type=nt.type==="two"?"two":"close")}if(Et(),J)n.position.copy(w),xt.copy(v),n.fov=k,n.updateProjectionMatrix(),J=!1;else{const ft=1-Math.exp(-6*I);n.position.lerp(w,ft),xt.lerp(v,1-Math.exp(-9*I)),Math.abs(n.fov-k)>.05&&(n.fov=Xs(n.fov,k,1-Math.exp(-6*I)),n.updateProjectionMatrix())}n.lookAt(xt)}Ut==="audience"&&Math.abs(n.fov-k)>.05&&(n.fov=Xs(n.fov,k,1-Math.exp(-3*I)),n.updateProjectionMatrix()),t.render(e,n)}}}const En=Math.PI*2,cn=(i,t,e)=>Math.max(t,Math.min(e,i)),re=(i,t,e)=>i+(t-i)*e,Ys=(i,t)=>{let e=(t-i)%En;return e>Math.PI&&(e-=En),e<-Math.PI&&(e+=En),e},Pl=["#f1c9a5","#d9a47a","#b9835a","#8a5a3a","#f4d6bd"],na={neutral:{chestX:.03,headX:0,headZ:0,L:[-.05,.2,-.4],R:[-.05,.2,-.4],breath:1,shake:0,bounce:0},angry:{chestX:.16,headX:.14,headZ:0,L:[-.5,.35,-1.2],R:[-.5,.35,-1.2],breath:2.2,shake:.02,bounce:0},sad:{chestX:.3,headX:.42,headZ:.1,L:[.1,.05,-.1],R:[.1,.05,-.1],breath:.6,shake:0,bounce:0},proud:{chestX:-.12,headX:-.14,headZ:0,L:[.15,.75,-1.5],R:[.15,.75,-1.5],breath:1,shake:0,bounce:0},contemplative:{chestX:.06,headX:.12,headZ:.13,L:[-.5,0,-1.3],R:[-.95,0,-2],breath:.8,shake:0,bounce:0},gasp:{chestX:-.2,headX:-.18,headZ:0,L:[-.5,.65,-.5],R:[-.5,.65,-.5],breath:2.5,shake:.006,bounce:0},happy:{chestX:-.02,headX:-.08,headZ:.05,L:[-.15,.45,-.6],R:[-.15,.45,-.6],breath:1.3,shake:0,bounce:.05},afraid:{chestX:.16,headX:.16,headZ:0,L:[-.7,.2,-1.7],R:[-.7,.2,-1.7],breath:2.4,shake:.016,bounce:0},tender:{chestX:.06,headX:.1,headZ:.16,L:[-.4,.22,-.7],R:[-.4,.22,-.7],breath:.8,shake:0,bounce:0}},Ll={neutral:{lift:0,tilt:0,eye:1,curve:.05,w:1},angry:{lift:-.006,tilt:.55,eye:.78,curve:-.7,w:1.1},sad:{lift:.012,tilt:-.5,eye:.82,curve:-.8,w:.8},proud:{lift:.012,tilt:.1,eye:.85,curve:.35,w:1},contemplative:{lift:.008,tilt:-.1,eye:.9,curve:-.1,w:.8},gasp:{lift:.034,tilt:0,eye:1.3,curve:0,w:.7,open:.9},happy:{lift:.012,tilt:.05,eye:.8,curve:1,w:1.3},afraid:{lift:.03,tilt:-.4,eye:1.25,curve:-.5,w:.9,open:.4},tender:{lift:.006,tilt:-.2,eye:.85,curve:.6,w:.9}},ss={none:()=>({}),talk:(i,t)=>({R:[-.75+.55*t*Math.sin(i*2.3)-.2*t*Math.max(0,Math.sin(i*4.1)),.45+.25*t*Math.sin(i*1.7),-1+.55*t*Math.sin(i*3.1+1)],L:[-.45+.4*t*Math.sin(i*1.9+2),.4+.2*t*Math.sin(i*2.3+1),-.8+.45*t*Math.sin(i*2.7)],twist:.12*Math.sin(i*1.1)}),point:(i,t)=>({R:[-1.5+.1*Math.sin(i*3.2)-.12*Math.max(0,Math.sin(i*5)),-.12,-.05],L:[.1,.25,-.5],chestX:.08*t,headX:-.03,twist:-.28}),bow:i=>{const t=Math.sin(cn(i/2.6,0,1)*Math.PI);return{chestX:1.1*t,headX:.25*t,L:[.25*t,.1,-.1],R:[.25*t,.1,-.1]}},kneel:()=>({R:[-.55,.05,-1.7],L:[.1,.1,-.2],chestX:.12,headX:.25,kneel:1}),stand:()=>({kneel:0}),gasp:(i,t)=>{const e=i<1?1:.75;return{chestX:-.15-.2*(i<.3?1:0)*t,headX:-.2,L:[-.95*e,.9*e,-.4],R:[-.95*e,.9*e,-.4]}},angry:(i,t)=>({chestX:.12,L:[-.9,.4,-1.3],R:[-1.05+.4*t*Math.sin(i*9),.2,-1.2+.25*Math.sin(i*9)],headX:.15,stomp:1,twist:-.1}),sad:()=>({R:[-1.15,-.1,-2.1],chestX:.3,headX:.5}),proud:()=>({chestX:-.14,headX:-.15,L:[.15,.85,-1.55],R:[.15,.85,-1.55]}),think:()=>({R:[-.95,0,-2],L:[-.5,0,-1.3],headZ:.14,headX:.12}),hug:()=>({chestX:.1,L:[-1.2,-.1,-.9],R:[-1.2,-.1,-.9],headZ:.12}),wave:(i,t)=>({R:[-.1,2.3,-.5+.5*t*Math.sin(i*7)],headZ:.08}),shrug:()=>({L:[0,.6,-1.3],R:[0,.6,-1.3],headZ:.14,chestX:-.04}),laugh:(i,t)=>({chestX:-.1+.1*t*Math.sin(i*14),headX:-.2,L:[-.3,.3,-.8],R:[-.3,.3,-.8],bob:.02})},Z0=(i,t={})=>new fn({color:i,roughness:.75,metalness:.05,...t}),ee=(i,t,e=[0,0,0])=>{const n=new Xt(i,t);return n.position.set(...e),n.castShadow=!0,n};let K0=null;const Dl=()=>K0??(K0=(()=>{const t=new Uint8Array(4096);for(let n=0;n<32;n++)for(let s=0;s<32;s++){const r=Math.hypot(s-15.5,n-15.5)/16,a=Math.max(0,1-r);t.set([0,0,0,Math.round(255*a*a)],(n*32+s)*4)}const e=new i0(t,32,32);return e.needsUpdate=!0,new ci({map:e,transparent:!0,opacity:.55,depthWrite:!1})})()),rs=(i,t)=>new Gn(i,t,4,10);class $0{constructor(t,e,n){this.name=t.name,this.index=e,this.look=t.look||{},this.voice=t.voice||{},this.ghost=this.look.style==="ghost",this.home={x:n.x,z:n.z},this.pos=new gt(0,0),this.target=null,this.onstage=!1,this.yaw=0,this.emotion="neutral",this.intensity=.5,this.gestureName="none",this.gestureT=0,this.gestureA=1,this.speaking=!1,this.talkT=0,this.walkPh=Math.random()*6,this.t=Math.random()*10,this.fade=this.ghost?0:1,this.fadeTarget=this.fade,this.kneelState=0,this.lookGetter=null,this.headYaw=0,this.cur={chestX:0,headX:0,headZ:0,L:[0,.1,0],R:[0,.1,0],kneel:0,walk:0,shake:0,bounce:0,breath:1,twist:0,shift:0,emph:0,nod:0},this.remain=0,this.nodAt=1.5+Math.random()*2,this.fid=null,this.fidAt=3+Math.random()*4,this.cape=null,this.mats=[],this.pulseV=0,this.pulseAge=9,this.mouthKick=0,this.blinkAt=1.5+Math.random()*3,this.blinkT=9,this.eyeX=0,this.eyeY=0,this.sacX=0,this.sacY=0,this.sacAt=1,this.face={lift:0,tilt:0,eye:1,curve:.05,w:1,open:0},this.capeP=[0,0,0],this.build(t),this.root.visible=!1}build(){const t=this.ghost,e=new Vt(this.look.color||"#888"),n=t?"#e8f4ff":this.look.accessory==="antenna"?"#9aa7ad":Pl[this.index%Pl.length],s=t?{transparent:!0,opacity:.55,emissive:"#7fb8ff",emissiveIntensity:.55,depthWrite:!1}:{},r=(u,S)=>{const b=Z0(u,{...s,...S});return t&&(b.userData.base=b.opacity),this.mats.push(b),b};if(!t){const u={};e.getHSL(u),u.l<.42&&e.setHSL(u.h,Math.max(u.s,.32),.42)}const a=u=>({emissive:e.clone().multiplyScalar(.22).getStyle(),emissiveIntensity:1,...u}),o=r(t?"#cfe6ff":e.getStyle(),t?{}:a()),l=r(t?"#a9c9ee":e.clone().multiplyScalar(.62).getStyle(),t?{}:a({emissive:e.clone().multiplyScalar(.14).getStyle()})),c=r(t?"#ffffff":e.clone().lerp(new Vt("#fff4d8"),.65).getStyle(),t?{}:{emissive:"#3a3020",emissiveIntensity:1}),h=r(n),d=new fn({color:t?"#10203a":"#151515",roughness:.4});if(this.root=new Kt,this.body=new Kt,this.body.position.y=.97,this.root.add(this.body),this.body.add(ee(new Me(.34,.16,.2),l,[0,0,0])),this.spine=new Kt,this.spine.position.y=.04,this.body.add(this.spine),this.spine.add(ee(rs(.19,.3),o,[0,.31,0])),this.spine.add(ee(new Me(.4,.05,.25),c,[0,.06,0])),this.spine.add(ee(new Me(.1,.07,.03),c,[0,.06,.13])),this.spine.add(ee(new Me(.42,.045,.26),c,[0,.62,0])),this.look.cape){this.cape=new Kt,this.cape.position.set(0,.62,-.17),this.spine.add(this.cape),this.capeJ=[];let u=this.cape;for(let S=0;S<3;S++){const b=new Kt;b.position.y=S?-.3:0,u.add(b),b.add(ee(new Me(.5+S*.04,.3,.035),S%2?o:l,[0,-.15,-.02])),S===2&&b.add(ee(new Me(.56,.045,.05),c,[0,-.3,-.02])),this.capeJ.push(b),u=b}}this.neck=new Kt,this.neck.position.y=.7,this.spine.add(this.neck),this.neck.add(ee(new ye(.175,20,16),h,[0,.19,0]));const p=t||this.look.accessory==="antenna"?new fn({color:"#ffffff",emissive:t?"#bfe3ff":"#00e5ff",emissiveIntensity:1.1,roughness:.3}):new fn({color:"#fafaf5",roughness:.35});this.eyeMat=p,this.eyes=[],this.brows=[];const g=r(t?"#cfe6ff":["#2a1a10","#3a2616","#1c1c1c","#5a3a1a"][this.index%4]);for(const u of[-1,1]){const S=new Kt;S.position.set(u*.066,.215,.138),this.neck.add(S);const b=new Xt(new ye(.047,12,10),p);b.scale.z=.7,S.add(b);const x=new Xt(new ye(.026,10,8),d);x.scale.z=.5,x.position.z=.03,S.add(x),this.eyes.push({g:S,pu:x});const L=ee(new Me(.075,.015,.02),g,[u*.066,.285,.142]);L.castShadow=!1,L.userData.sx=u,this.neck.add(L),this.brows.push(L)}this.mouth=ee(new ye(.032,10,8),r("#4a1010"),[0,.098,.15]),this.mouth.scale.set(1,.3,.4),this.mouth.castShadow=!1,this.neck.add(this.mouth),this.smile=ee(new lo(.04,.0075,6,14,Math.PI),r(t?"#a9c9ee":"#7a2a2a"),[0,.12,.158]),this.smile.castShadow=!1,this.neck.add(this.smile),this.neck.add(ee(new Me(.03,.03,.04),h,[0,.16,.18])),this.accessory(this.look.accessory,r,o);const _=u=>{const S=new Kt;S.position.set(u*.27,.6,0),this.spine.add(S),S.add(ee(new ye(.075,10,8),o)),S.add(ee(rs(.058,.2),o,[0,-.17,0]));const b=new Kt;return b.position.y=-.35,S.add(b),b.add(ee(rs(.052,.18),h,[0,-.14,0])),b.add(ee(new ye(.06,10,8),h,[0,-.3,0])),{sh:S,el:b}};this.armL=_(1),this.armR=_(-1);const m=u=>{const S=new Kt;S.position.set(u*.1,-.05,0),this.body.add(S),S.add(ee(rs(.075,.28),l,[0,-.22,0]));const b=new Kt;return b.position.y=-.46,S.add(b),b.add(ee(rs(.065,.28),l,[0,-.21,0])),b.add(ee(new Me(.12,.07,.24),d,[0,-.46,.05])),{hp:S,kn:b}};if(this.legL=m(1),this.legR=m(-1),t){for(const b of[this.legL,this.legR])b.hp.visible=!1;const u=new sn(.24,.44,.95,20,6,!0),S=ee(u,o,[0,-.5,0]);S.material=o.clone(),S.material.side=$e,this.mats.push(S.material),S.material.userData.base=o.opacity,this.skirt={geo:u,base:Float32Array.from(u.attributes.position.array)},this.body.add(S),this.light=new Xa("#8fc4ff",1.2,6),this.light.position.y=1.2,this.root.add(this.light)}this.blob=new Xt(new oo(.5,16),Dl()),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.014,this.blob.renderOrder=1,this.root.add(this.blob),this.root.scale.setScalar(1.04),this.root.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),this.root.userData.actor=this}accessory(t,e,n){const s=e("#e8b64c",{metalness:.6,roughness:.35}),r=e(["#2a1a10","#5a3a1a","#1c1c1c","#8a6a2a"][this.index%4]),a=this.neck,o=(l,c)=>{l.position.set(...c),a.add(l)};switch(t){case"crown":case"crown-hair":{const l=new Xt(new sn(.15,.16,.07,16,1,!0),s);l.position.set(0,.36,0),l.castShadow=!0,a.add(l);for(let c=0;c<6;c++){const h=c/6*En,d=new Xt(new hi(.035,.1,5),s);d.position.set(Math.cos(h)*.15,.43,Math.sin(h)*.15),a.add(d)}t==="crown-hair"&&o(ee(new Me(.34,.5,.12),r),[0,0,-.12]);break}case"hair":{const l=ee(new ye(.19,16,10,0,En,0,Math.PI*.55),r);l.rotation.x=-.45,o(l,[0,.21,-.03]);break}case"hair-long":{const l=ee(new ye(.19,16,10,0,En,0,Math.PI*.55),r);l.rotation.x=-.45,o(l,[0,.21,-.03]),o(ee(new Me(.34,.45,.1),r),[0,0,-.13]);break}case"hat":{o(ee(new sn(.28,.28,.025,20),n),[0,.34,0]),o(ee(new sn(.15,.17,.2,16),n),[0,.45,0]);break}case"helmet":{const l=ee(new ye(.2,16,10,0,En,0,Math.PI*.5),e("#8a9097",{metalness:.7,roughness:.4}));l.rotation.x=-.4,o(l,[0,.23,-.03]);break}case"hood":{const l=ee(new ye(.2,16,12,0,En,0,Math.PI*.68),n);l.rotation.x=-.6,o(l,[0,.2,-.045]);break}case"jester":{const l=e("#e74c3c"),c=e("#f1c40f"),h=new Xt(new hi(.09,.32,8),l);h.position.set(-.12,.45,0),h.rotation.z=.7,h.castShadow=!0,a.add(h);const d=new Xt(new hi(.09,.32,8),c);d.position.set(.12,.45,0),d.rotation.z=-.7,d.castShadow=!0,a.add(d);{const f=ee(new ye(.19,12,8,0,En,0,Math.PI*.42),e("#2e86c1"));f.rotation.x=-.4,o(f,[0,.23,-.03])}break}case"antenna":{o(ee(new sn(.01,.01,.2),e("#555")),[0,.46,0]),o(ee(new ye(.035,8,6),e("#e74c3c",{emissive:"#e74c3c",emissiveIntensity:.8})),[0,.58,0]);break}}}homePos(){return this.home}place(t,e){this.pos.set(t,e),this.root.position.set(t,0,e)}wingFor(t){return{x:t>=0?7.1:-7.1,z:-1.2}}enter(){if(this.onstage=!0,this.root.visible=!0,this.leaving=!1,this.ghost)this.place(this.home.x,this.home.z),this.fadeTarget=1,this.yaw=0;else{const t=this.wingFor(this.home.x);this.place(t.x,t.z),this.yaw=Math.atan2(this.home.x-t.x,.001),this.walkTo(this.home.x,this.home.z)}}exit(){if(this.leaving=!0,this.ghost){this.fadeTarget=0;return}const t=this.wingFor(this.pos.x);this.walkTo(t.x,t.z)}walkTo(t,e){this.target=new gt(t,e),this.kneelState=0}get moving(){return!!this.target}setLook(t){this.lookGetter=t}setEmotion(t,e){na[t]&&(t!==this.emotion&&(t==="gasp"||t==="afraid")&&(this.startle=1),this.emotion=t),e!=null&&(this.intensity=e)}setGesture(t,e=1){ss[t]||(t="none"),t==="kneel"?this.kneelState=1:t==="stand"&&(this.kneelState=0),this.gestureName=t,this.gestureT=0,this.gestureA=e}nod(){this.nodAge=0}setSpeaking(t){t&&!this.speaking&&(this.pulseAge=9,this.talkT=0),this.speaking=t}pulse(t=1){this.pulseV=Math.min(1.3,Math.max(this.pulseV,.6+.5*t)),this.mouthKick=1,this.pulseAge=0}headPos(t=new C){return this.neck.getWorldPosition(t).add(new C(0,.25,0))}update(t,e){if(!this.onstage)return;this.t+=t,this.gestureT+=t,this.speaking&&(this.talkT+=t);const n=this.cur,s=this.t;let r=0;if(this.target){const Z=this.target.x-this.pos.x,nt=this.target.y-this.pos.y,vt=Math.hypot(Z,nt);if(this.remain=vt,vt<.08)this.target=null,this.remain=0,this.leaving&&(this.onstage=this.ghost,this.root.visible=this.ghost);else{r=Math.min(vt*3,1.9*(this.speaking&&!this.leaving?1.45:1));const w=Math.min(vt,r*t);this.pos.x+=Z/vt*w,this.pos.y+=nt/vt*w,this.desiredYaw=Math.atan2(Z,nt)}}else this.remain=0;let a=null,o=!0;if(this.lookGetter){const Z=this.lookGetter();Z&&(a=Math.atan2(Z.x-this.pos.x,Z.z-this.pos.y),o=Math.abs(Z.z-11)<.5&&Math.abs(Z.y-1.6)<.5)}let l=a;l!=null&&!o&&!this.ghost&&(l+=Ys(l,0)*.3);const h=r>.3&&!this.ghost&&this.remain>.9?this.desiredYaw:l??this.yaw,d=Ys(this.yaw,h);this.yaw+=Math.abs(d)>.02?cn(d,-5*t,5*t):d;const f=a!=null?cn(Ys(this.yaw,a),-1,1):0;this.headYaw=re(this.headYaw,f,1-Math.exp(-8*t));const p=!this.target&&!this.leaving,g=p&&!this.speaking&&this.gestureName==="none";!this.speaking&&p&&(this.nodAt-=t,this.nodAt<=0&&(this.nodAge=0,this.nodAt=2+Math.random()*3.5)),this.nodAge=(this.nodAge??9)+t;const _=this.nodAge<.7?Math.sin(this.nodAge/.7*Math.PI)*.2:0;g?(this.fidAt-=t,!this.fid&&this.fidAt<=0&&(this.fid={name:["think","shrug","talk","talk"][Math.floor(Math.random()*4)],t:0,dur:1.6+Math.random()*1.6}),this.fid&&(this.fid.t+=t,this.fid.t>this.fid.dur&&(this.fid=null,this.fidAt=3+Math.random()*5))):this.fid&&(this.fid=null,this.fidAt=3+Math.random()*3);const m=cn(.35+this.intensity*.95,.35,1.3),u=na[this.emotion],S=na.neutral,b=(Z,nt)=>Z+(nt-Z)*m,x={chestX:b(S.chestX,u.chestX),headX:b(S.headX,u.headX),headZ:b(S.headZ,u.headZ),L:u.L.map((Z,nt)=>b(S.L[nt],Z)),R:u.R.map((Z,nt)=>b(S.R[nt],Z)),kneel:this.kneelState,shake:u.shake*m,bounce:u.bounce*m,breath:u.breath,twist:0},L=.7+this.intensity*1,A=ss[this.gestureName]||ss.none,R=this.speaking||this.gestureName!=="none"?A(this.gestureT,L):{},D=this.speaking&&this.gestureName==="none"?ss.talk(this.talkT,L):{},y={...this.fid?ss[this.fid.name](this.fid.t,.55):{},...D,...R};for(const Z of["chestX","headX","headZ"])y[Z]!=null&&(x[Z]=Z==="headZ"?y[Z]:re(x[Z],y[Z],.9));y.L&&(x.L=y.L),y.R&&(x.R=y.R),y.kneel!=null&&(x.kneel=y.kneel),y.twist!=null&&(x.twist=y.twist),this.pulseAge+=t,this.pulseV*=Math.exp(-5.5*t),this.mouthKick*=Math.exp(-9*t);const T=this.speaking?this.pulseAge<1.6?Math.min(1,this.pulseV):.35*Math.pow(Math.max(0,Math.sin(this.talkT*3.3+this.index)),2):0;T>0&&this.gestureName!=="talk"&&this.gestureName!=="none"&&(x.R=[x.R[0]-.14*T*L,x.R[1]+.05*T,x.R[2]-.12*T],x.L=[x.L[0]-.1*T*L,x.L[1]+.1*T,x.L[2]]);const z=this.ghost?0:cn(r/1.2,0,1);n.walk=re(n.walk,z,1-Math.exp(-10*t)),this.walkPh+=r*t*4.2;const O=Math.sin(this.walkPh);if(n.walk>.02){const Z=n.walk*(this.speaking?.6:1);x.L=[re(x.L[0],O*.7,Z),re(x.L[1],.1,Z),re(x.L[2],-.3,Z)],x.R=[re(x.R[0],-O*.7,Z),re(x.R[1],.1,Z),re(x.R[2],-.3,Z)]}const G=1-Math.exp(-11*t);n.chestX=re(n.chestX,x.chestX,G),n.headX=re(n.headX,x.headX,G),n.headZ=re(n.headZ,x.headZ,G);for(let Z=0;Z<3;Z++)n.L[Z]=re(n.L[Z],x.L[Z],G),n.R[Z]=re(n.R[Z],x.R[Z],G);n.kneel=re(n.kneel,x.kneel,1-Math.exp(-5*t)),n.twist=re(n.twist,x.twist,1-Math.exp(-6*t)),n.shake=x.shake,n.bounce=x.bounce,n.breath=re(n.breath,x.breath,1-Math.exp(-3*t)),n.emph=T,n.nod=re(n.nod,_,1-Math.exp(-14*t)),this.startle&&(this.startle=Math.max(0,this.startle-t*3));const $=(1-n.walk)*(1-n.kneel);n.shift=re(n.shift,Math.sin(s*.5+this.index*2.1)*(this.speaking?1.3:1),1-Math.exp(-2*t));const H=n.shift*$,q=Math.sin(s*1.8*n.breath)*.012*n.breath,X=n.shake?Math.sin(s*38)*n.shake:0,ht=this.startle||0,yt=g&&this.lookGetter&&!o?.05:0;this.spine.rotation.x=n.chestX-ht*.25+q*2+yt+n.emph*.07*L,this.spine.rotation.y=Math.sin(s*.7)*.04+n.twist+this.headYaw*.35,this.spine.rotation.z=Math.sin(s*.5+this.index)*.02+X+H*.035,this.spine.scale.set(1+q,1+q*1.5,1+q);const wt=this.speaking?Math.sin(this.talkT*5.5)*.05+Math.sin(this.talkT*3.1)*.04+n.emph*.08:n.nod;this.neck.rotation.set(n.headX+wt,this.headYaw*.7+Math.sin(s*.4+this.index)*.05,n.headZ+(g?Math.sin(s*.33+this.index)*.04:0),"YXZ");const Ot=(Z,nt,vt)=>{Z.sh.rotation.set(nt[0]+X*2,0,vt*(nt[1]+Math.sin(s*1.8+vt)*.015+$*Math.sin(s*.9+vt*1.7)*.03),"XYZ"),Z.el.rotation.x=nt[2]};if(Ot(this.armL,n.L,1),Ot(this.armR,n.R,-1),this.cape){let Z=.06+n.walk*.3+n.chestX*.25;this.cape.rotation.x=Z;for(let nt=0;nt<3;nt++){const vt=(.05+n.walk*.22+Math.abs(O)*n.walk*.1)*(nt+1)*.6+Math.sin(s*1.7-nt*.9)*.035*(nt+1)+this.headYaw*.05*nt;this.capeP[nt]=re(this.capeP[nt],vt,1-Math.exp(-(7-nt*2)*t)),this.capeJ[nt].rotation.x=this.capeP[nt],this.capeJ[nt].rotation.z=Math.sin(s*1.3-nt)*.03*(nt+1)+n.shift*.02}}const Yt=n.kneel,j=n.walk;if(!this.ghost){const Z=nt=>Math.max(0,Math.cos(nt))*.95;this.legL.hp.rotation.x=-O*.6*j-Yt*.15+Math.max(0,-H)*.1,this.legR.hp.rotation.x=O*.6*j-Yt*.15+Math.max(0,H)*.1,this.legL.kn.rotation.x=Z(this.walkPh)*j+Yt*1.55+Math.max(0,-H)*.22,this.legR.kn.rotation.x=Z(this.walkPh+Math.PI)*j+Yt*1.55+Math.max(0,H)*.22}const ot=y.stomp&&this.speaking?Math.abs(Math.sin(s*6))*.03:0,bt=Math.abs(O)*.04*j+n.bounce*Math.abs(Math.sin(s*6))+(y.bob?Math.abs(Math.sin(s*14))*y.bob:0)-ot;let ut=.97-Yt*.47+bt;this.ghost?(ut+=.28+Math.sin(s*1.3)*.08,this.body.rotation.z=Math.sin(s*.8)*.05,this.body.position.x=Math.sin(s*.6)*.12):(this.body.position.x=H*.05,this.body.rotation.z=-H*.035),this.body.position.y=ut;const dt=this.face,Pt=Ll[this.emotion]||Ll.neutral,It=1-Math.exp(-9*t),Jt=cn(.4+this.intensity,.4,1.3);dt.lift=re(dt.lift,Pt.lift*Jt,It),dt.tilt=re(dt.tilt,Pt.tilt*Jt,It),dt.eye=re(dt.eye,1+(Pt.eye-1)*Jt,It),dt.curve=re(dt.curve,Pt.curve*Jt,It),dt.w=re(dt.w,Pt.w,It),dt.open=re(dt.open,(Pt.open||0)*Jt,It),this.blinkAt-=t,this.blinkAt<=0&&(this.blinkT=0,this.blinkAt=2+Math.random()*3.5,Math.random()<.2&&(this.blinkAt=.35)),this.blinkT+=t;const Ut=this.blinkT<.16?Math.sin(this.blinkT/.16*Math.PI):0,qt=Math.max(.06,dt.eye*(1-Ut*.95));this.sacAt-=t,this.sacAt<=0&&(this.sacAt=.6+Math.random()*1.8,this.sacX=(Math.random()-.5)*.35,this.sacY=(Math.random()-.5)*.25);let U=0,Se=0;if(a!=null){const Z=Ys(this.yaw+this.headYaw*1.05,a);U=cn(Z/.6,-1,1);const nt=this.lookGetter();if(nt){const vt=Math.hypot(nt.x-this.pos.x,nt.z-this.pos.y)||1;Se=cn((nt.y-1.6)/vt*3+this.neck.rotation.x*-1.5,-1,1)}}this.eyeX=re(this.eyeX,U+this.sacX*.4,1-Math.exp(-14*t)),this.eyeY=re(this.eyeY,Se+this.sacY*.4,1-Math.exp(-14*t));for(const Z of this.eyes)Z.g.scale.y=qt,Z.pu.position.x=this.eyeX*.021,Z.pu.position.y=this.eyeY*.015/Math.max(.5,qt)*.8,Z.pu.position.z=.03+(1-Math.abs(this.eyeX)*.2)*.002;for(const Z of this.brows){const nt=Z.userData.sx,vt=this.emotion==="contemplative"&&nt>0?.02:0;Z.position.y=.285+dt.lift+vt+(1-qt)*-.015*(qt<.5?0:1)+Ut*-.012,Z.rotation.z=nt*dt.tilt}const Dt=this.speaking?.22+this.mouthKick*1.1+Math.abs(Math.sin(this.talkT*11)*Math.sin(this.talkT*4.7))*.45:0,Nt=cn(dt.open+Dt,0,1.6);if(this.mouth.scale.set(.55*dt.w+Nt*.12,.12+Nt*.95,.4),this.mouth.position.y=.098-Nt*.006,this.mouth.visible=Nt>.05,this.smile.scale.set(dt.w*.95,-dt.curve*.55+(Math.abs(dt.curve)<.04?.05:0),1),this.smile.position.y=.112+dt.curve*.012-Nt*.012,this.smile.visible=Nt<.55&&Math.abs(this.smile.scale.y)>.02,this.skirt){const Z=this.skirt.geo.attributes.position,nt=this.skirt.base,vt=Z.count;for(let w=0;w<vt;w++){const v=nt[w*3],k=nt[w*3+1],J=nt[w*3+2],tt=cn((.475-k)/.95,0,1),K=Math.atan2(J,v),Et=1+tt*tt*.18*Math.sin(K*5+s*2.4+tt*3);Z.array[w*3]=v*Et,Z.array[w*3+2]=J*Et,Z.array[w*3+1]=k-tt*tt*.07*(1+Math.sin(K*4-s*2.1))}Z.needsUpdate=!0}if(this.blob.scale.setScalar(this.ghost?.9:1),this.blob.material=Dl(),this.ghost){this.fade=re(this.fade,this.fadeTarget,1-Math.exp(-2.2*t));const Z=.85+Math.sin(s*9)*.07+Math.sin(s*23)*.05;for(const nt of this.mats)nt.opacity=(nt.userData.base??.55)*this.fade*Z;this.light&&(this.light.intensity=1.4*this.fade*Z),this.fadeTarget===0&&this.fade<.02&&(this.root.visible=!1,this.onstage=!1)}this.root.position.set(this.pos.x,0,this.pos.y),this.root.rotation.y=this.yaw}}const Il=["#c0392b","#2e86c1","#27ae60","#8e44ad","#d68910","#16a085","#cb4b8a","#5d6d7e"],J0=[{re:/ghost|spirit|specter|spectre|phantom|鬼|幽灵|亡魂|魂/i,look:{style:"ghost",color:"#bfe3ff",accessory:"crown"},voice:{pitch:.45,rate:.72}},{re:/hamlet|哈姆雷特|prince|王子/i,look:{style:"human",color:"#3d4a78",accessory:"hair",cape:!0},voice:{pitch:.95,rate:1}},{re:/king|emperor|国王|皇帝|君主/i,look:{style:"human",color:"#7b1fa2",accessory:"crown",cape:!0},voice:{pitch:.55,rate:.9}},{re:/queen|empress|王后|女王|皇后/i,look:{style:"human",color:"#b03a6e",accessory:"crown-hair",cape:!0},voice:{pitch:1.4,rate:.95}},{re:/jester|clown|fool|小丑|弄臣/i,look:{style:"human",color:"#e67e22",accessory:"jester"},voice:{pitch:1.6,rate:1.25}},{re:/detective|inspector|侦探|警察|警探/i,look:{style:"human",color:"#8a7448",accessory:"hat",cape:!0},voice:{pitch:.8,rate:.95}},{re:/thief|robber|小偷|盗贼|贼/i,look:{style:"human",color:"#222a35",accessory:"hood"},voice:{pitch:1.1,rate:1.15}},{re:/guard|soldier|守卫|士兵|卫兵/i,look:{style:"human",color:"#5f6a6a",accessory:"helmet"},voice:{pitch:.7,rate:1}},{re:/robot|kay|老k|机器人/i,look:{style:"human",color:"#7f8c8d",accessory:"antenna"},voice:{pitch:.6,rate:.95}}],Ul=["hair","hat","hair-long","none"];function Nc(i,t=0){const e=J0.find(n=>n.re.test(i));return e?{look:{...e.look},voice:{...e.voice}}:{look:{style:"human",color:Il[t%Il.length],accessory:Ul[t%Ul.length]},voice:{pitch:[1,1.3,.8,1.15,.9][t%5],rate:[1,1.05,.95,1.1,.9][t%5]}}}const Q0=i=>/[㐀-鿿]/.test(i),Vn=i=>{const t=(i.match(/[㐀-鿿]/g)||[]).length,e=(i.match(/[A-Za-z]/g)||[]).length;return t>=Math.max(1,e/3)&&t>0?"zh-CN":"en-US"},Pe=typeof window<"u"?window.speechSynthesis:null;let hs=[];function Ya(){try{hs=Pe?Pe.getVoices():[]}catch{hs=[]}}var jl;Pe&&(Ya(),(jl=Pe.addEventListener)==null||jl.call(Pe,"voiceschanged",Ya));const Fe={muted:!1,get supported(){return!!Pe},get hasVoices(){return hs.length>0},estimateMs(i,t=1){const e=(i.match(/[㐀-鿿]/g)||[]).length,n=i.replace(/[㐀-鿿]/g," ").split(/\s+/).filter(Boolean).length;return Math.max(900,(e*240+n*370+350)/Math.max(.4,t))},pickVoice(i,t){const e=i.slice(0,2).toLowerCase();let n=hs.filter(r=>r.lang&&r.lang.toLowerCase().startsWith(e));if(!n.length)return null;const s=n.filter(r=>r.localService);return s.length>1&&(n=s),n[t%n.length]},speak(i,{lang:t,pitch:e=1,rate:n=1,volume:s=1,voiceIndex:r=0},a={}){if(!Pe||this.muted||(Ya(),!hs.length))return!1;try{const o=new SpeechSynthesisUtterance(i);o.lang=t,o.pitch=Math.max(.1,Math.min(2,e)),o.rate=Math.max(.5,Math.min(2,n)),o.volume=s;const l=this.pickVoice(t,r);return l&&(o.voice=l),o.onstart=()=>{var c;return(c=a.onstart)==null?void 0:c.call(a)},o.onend=()=>{var c;return(c=a.onend)==null?void 0:c.call(a)},o.onerror=()=>{var c;return(c=a.onend)==null?void 0:c.call(a)},a.onboundary&&(o.onboundary=c=>{c.name&&c.name!=="word"||a.onboundary(c.charIndex||0,c.charLength||0)}),Pe.speak(o),!0}catch{return!1}},words(i){const t=[],e=/[㐀-鿿]|[^\s㐀-鿿]+/g;let n;for(;n=e.exec(i);)t.push({i:n.index,len:n[0].length});return t},cancel(){try{Pe==null||Pe.cancel()}catch{}},pause(){try{Pe==null||Pe.pause()}catch{}},resume(){try{Pe==null||Pe.resume()}catch{}}},Nl=[{re:/\breplay|\brestart|from the start|from the top|重播|重来|重新开始|再来一遍/i,op:{type:"replay"}},{re:/change (the )?ending|new ending|different ending|alternate ending|another ending|换.{0,2}结局|改.{0,2}结局|新结局|(换|改|新|另).{0,3}结局|结局.{0,2}(换|改|不同)/i,op:{type:"ending"}},{re:/\bhugs?\b|hugging|embrace|拥抱|抱一抱|抱在一起/i,op:{type:"hug"}},{re:/audience|face the crowd|观众|看向台下|面向/i,op:{type:"audience"}},{re:/angr|furious|\bmad\b|rage|yell|aggressive|生气|愤怒|发火|凶|怒/i,op:{type:"mood",emotion:"angry",delta:.25,label:"dirAngrier"}},{re:/soft|gentl|calm|tender|quiet|whisper|温柔|轻柔|轻一点|温和|冷静|小声/i,op:{type:"mood",emotion:"tender",delta:-.3,label:"dirSofter"}},{re:/\bsad|cry|melanchol|sorrow|悲|哭|伤心|难过/i,op:{type:"mood",emotion:"sad",delta:-.05,label:"dirSadder"}},{re:/happ|joy|cheer|laugh|开心|高兴|快乐|喜悦/i,op:{type:"mood",emotion:"happy",delta:.1,label:"dirHappier"}},{re:/scar|afraid|fear|terrif|害怕|恐惧|惊恐/i,op:{type:"mood",emotion:"afraid",delta:.15,label:"dirScarier"}},{re:/proud|arrogan|骄傲|自豪|傲慢/i,op:{type:"mood",emotion:"proud",delta:.1,label:"dirProuder"}},{re:/\bslow|slower|慢/i,op:{type:"rate",mul:.78,label:"dirSlower"}},{re:/\bfast|\bquick|\bspeed|hurry|\brush|快一点|快点|快些|更快|加快|加速/i,op:{type:"rate",mul:1.3,label:"dirFaster"}},{re:/\breset|back to normal|\bnormal\b|恢复|正常/i,op:{type:"reset"}}],tg=/\b(?:enter|add|bring in|introduce|send in|let in)\s+(?:a|an|the|another|one more)?\s*([a-z][a-z'-]{1,16}(?:\s[a-z][a-z'-]{1,12})?)\s*$/i,eg=/(?:来个|来一个|加个|加一个|再来一个|进来一个|让.{0,2}进来|召来)\s*([^\s，。！？,.!?]{1,6})\s*$/;function ng(i){const t=i.trim();if(!t)return[];const e=tg.exec(t)||eg.exec(t);if(e&&!/\b(ending|audience|replay)\b/i.test(t))return[{type:"addchar",name:e[1].trim().replace(/^./,a=>a.toUpperCase())}];const n=[];for(const a of Nl)a.re.test(t)&&!n.some(o=>o.type===a.op.type&&o.emotion===a.op.emotion)&&n.push(a.op);if(n.some(a=>a.type==="replay"))return[{type:"replay"}];const s=n.filter(a=>a.type==="rate");for(const a of s.slice(1))n.splice(n.indexOf(a),1);const r=n.filter(a=>a.type==="mood");if(r.length>1){const a=h=>{const d=Nl.find(p=>p.op===h),f=d&&d.re.exec(t);return f?f.index:0},o=r.slice().sort((h,d)=>a(h)-a(d)),c={...o[o.length-1],delta:r.reduce((h,d)=>h+d.delta,0),labels:o.map(h=>h.label)};for(const h of r)n.splice(n.indexOf(h),1);n.push(c)}if(!n.length){const a=/^\s*([^:：]{1,24})[:：]\s*(.+)$/.exec(t);if(a)return[{type:"line",speaker:a[1].trim(),text:a[2].trim()}]}return n}const ig=[[/angr|furious|rage|shout|yell|愤怒|生气|怒|吼|大喊/i,"angry"],[/sad|weep|cry|sob|tears|悲|哭|泪|低下头|head down/i,"sad"],[/proud|boast|骄傲|自豪/i,"proud"],[/think|ponder|muse|contempl|沉思|思考|若有所思/i,"contemplative"],[/gasp|shock|startle|surpris|吃惊|惊讶|震惊/i,"gasp"],[/laugh|smil|cheer|happ|joy|大笑|笑|开心|高兴/i,"happy"],[/afraid|fear|terrif|trembl|scared|害怕|恐惧|颤抖/i,"afraid"],[/tender|gentl|soft|whisper|温柔|轻声|低语/i,"tender"]],sg=[[/\b(murder|revenge|how dare|damn|hate|villain|liar|never|traitor|fool)\b|杀|复仇|混蛋|可恶|岂有此理|怎么能|背叛|骗/i,"angry"],[/\b(alas|sorrow|grief|woe|lost|alone|farewell|adieu|pity|sorry|goodbye)\b|可怜|唉|悲|孤独|再见|告别|对不起|遗憾/i,"sad"],[/\b(honou?r|glory|noble|crown|majesty|triumph|victory)\b|荣耀|高贵|胜利|王冠/i,"proud"],[/\b(perhaps|maybe|wonder|ponder|whether|to be or not|dream|why)\b|也许|或许|为什么|究竟|梦/i,"contemplative"],[/\b(ha ha|haha|joke|wonderful|delight|thank|welcome)\b|哈哈|谢谢|欢迎|太好了|真棒/i,"happy"],[/\b(ghost|dead|dark|night|terror|horror|afraid)\b|鬼|死|黑暗|恐怖|害怕/i,"afraid"],[/\b(love|dear|darling|sweet|heart)\b|爱|亲爱|温柔|心/i,"tender"]];function Fc(i){if(!i)return null;for(const[t,e]of ig)if(t.test(i))return e;return null}function nr(i){const t=(i.match(/[!！]/g)||[]).length;for(const[e,n]of sg)if(e.test(i))return n;return/^(what|murder|o god|什么|啊)[\s?!？！.]*$/i.test(i.trim())?"gasp":t>=2?"angry":t===1&&i.length<24?"gasp":/[?？]/.test(i)?"contemplative":"neutral"}function ir(i,t,e=0){if(/kneel|pardon|forgive|beg\b|跪|恳求|原谅/i.test(i))return"kneel";if(/my lord|your majesty|sir\b|madam|bow\b|鞠躬|陛下|大人/i.test(i))return"bow";if(/\b(you|thou|thee|thy|there|that|him|her)\b|你|他|她|那边|那里/i.test(i)&&(t==="angry"||e%3===0))return"point";if(/hello|welcome|goodnight|farewell|adieu|再见|晚安|欢迎|你好/i.test(i))return"wave";if(/\b(perhaps|maybe|who knows)\b|也许|耸肩|不知道/i.test(i))return"shrug";switch(t){case"angry":return"angry";case"sad":return"sad";case"proud":return"proud";case"contemplative":return"think";case"gasp":return"gasp";case"afraid":return"gasp";case"happy":return e%2?"laugh":"talk";default:return"talk"}}function Oi(i,t){let e=.45;return e+=Math.min(.3,(i.match(/[!！]/g)||[]).length*.12),/[A-Z]{4,}/.test(i)&&(e+=.1),t==="angry"&&(e+=.15),(t==="tender"||t==="sad")&&(e-=.1),Math.max(.15,Math.min(1,e))}function Fl(i){const t={gesture:null,move:null,emotion:null,who:null},e=i;return/exit|exeunt|leaves|下场|退场|离开|消失|vanish/i.test(e)?t.move="exit":/enter|enters|上场|登场|走上|appears|出现/i.test(e)&&(t.move="enter"),/kneel|跪/i.test(e)?t.gesture="kneel":/bow|鞠躬/i.test(e)?t.gesture="bow":/hug|embrace|拥抱/i.test(e)?t.gesture="hug":/point|指/i.test(e)?t.gesture="point":/laugh|大笑/i.test(e)?t.gesture="laugh":/wave|挥手/i.test(e)&&(t.gesture="wave"),t.emotion=Fc(e),t}function rg(i,t=120){const e=i.replace(/\s+/g," ").trim().match(/[^.!?。！？;；]+[.!?。！？;；]*["'”’)]*/g)||[i],n=[];let s="";for(const r of e){const a=r.trim();a&&(s&&(s+" "+a).length>t?(n.push(s),s=a):s=s?s+" "+a:a,s.length>=40&&/[.!?。！？]$/.test(s)&&(n.push(s),s=""))}return s&&n.push(s),n}const ag={hamlet:{en:{names:["Hamlet","Ghost"],body:[["B","Hamlet… Hamlet. Look upon me.","tender","talk","enter"],["A","Stay back! Angels and ministers of grace defend us!","afraid","gasp","away:B",.8],["A","Be thou a spirit of health, or a goblin damned? Speak!","angry","point"],["B","I am thy father's spirit, doomed for a time to walk the night.","sad","talk"],["A","My father…? Alas, poor ghost.","sad","sad"],["B","Pity me not. Listen well — I was murdered, foully, by one who now wears my crown.","angry","point","toward:A",.8],["A","Murder! Tell me who, that I may sweep to my revenge!","angry","angry","toward:B",.95]],end:[["B","The dawn is near. Adieu, adieu… remember me.","sad","talk","exit"],["A","I will. I swear it, upon my life.","proud","kneel"]]},zh:{names:["哈姆雷特","鬼魂"],body:[["B","哈姆雷特……哈姆雷特。看着我。","tender","talk","enter"],["A","退后！天使与神明，请保佑我们！","afraid","gasp","away:B",.8],["A","你是善良的精灵，还是该死的妖魔？说话！","angry","point"],["B","我是你父亲的灵魂，注定在黑夜里徘徊。","sad","talk"],["A","父亲……？可怜的亡魂。","sad","sad"],["B","不要可怜我。听好了——我被人害死了，凶手如今戴着我的王冠。","angry","point","toward:A",.8],["A","谋杀！告诉我是谁，我要立刻复仇！","angry","angry","toward:B",.95]],end:[["B","天快亮了。再见，再见……记住我。","sad","talk","exit"],["A","我会的。我以生命起誓。","proud","kneel"]]}},ghost:{en:{names:["Alice","Ghost"],body:[["B","Do not be afraid… I only want to be heard.","tender","talk","enter"],["A","Who… who is there?!","afraid","gasp","away:B",.8],["B","I lived in this house long before you. I never found rest.","sad","talk"],["A","Why are you still here?","contemplative","talk"],["B","A letter. I hid it under the stage, and I never sent it.","sad","sad"],["A","Then I will find it. I promise.","proud","proud","toward:B"]],end:[["B","Thank you. Now I can finally leave.","tender","bow","exit"],["A","Goodbye… and sleep well.","sad","wave"]]},zh:{names:["小雨","幽灵"],body:[["B","别怕……我只是想有人听我说话。","tender","talk","enter"],["A","谁……谁在那里？！","afraid","gasp","away:B",.8],["B","在你来之前，我就住在这座剧院里。我一直没能安息。","sad","talk"],["A","你为什么还不离开？","contemplative","talk"],["B","一封信。我把它藏在舞台底下，却再也没寄出去。","sad","sad"],["A","那我去找出来。我答应你。","proud","proud","toward:B"]],end:[["B","谢谢你。现在，我终于可以走了。","tender","bow","exit"],["A","再见……好好安息。","sad","wave"]]}},quarrel:{en:{names:["Marcus","Lena"],body:[["A","{B}, we need to talk. Right now.","angry","point","toward:B"],["B","Oh? Now you want to talk?","contemplative","shrug"],["A","You promised! You promised, and you broke it!","angry","angry","stay",.85],["B","I had no choice! You never listen to me!","angry","point","toward:A",.85],["A","Listen? I have done nothing but listen!","angry","angry","stay",.95],["B","Then why am I shouting at an empty room?","sad","shrug","away:A"],["A","…Maybe we are both too proud.","proud","proud"]],end:[["B","I am sorry, {A}. Truly.","tender","bow","toward:A"],["A","Me too. Come here.","tender","hug","toward:B"]]},zh:{names:["老马","阿莲"],body:[["A","{B}，我们得谈谈。现在就谈！","angry","point","toward:B"],["B","哦？你现在想谈了？","contemplative","shrug"],["A","你答应过我的！你答应了，却又食言！","angry","angry","stay",.85],["B","我没有选择！你从来都不听我说！","angry","point","toward:A",.85],["A","不听？我除了听还做过什么！","angry","angry","stay",.95],["B","那我为什么总是对着空房间吼叫？","sad","shrug","away:A"],["A","……也许，我们都太骄傲了。","proud","proud"]],end:[["B","对不起，{A}。真的。","tender","bow","toward:A"],["A","我也是。过来。","tender","hug","toward:B"]]}},detective:{en:{names:["Detective","Thief"],body:[["A","Good evening. Don't move.","neutral","point","toward:B"],["B","Detective! What a pleasant surprise.","happy","bow","away:A"],["A","The jewels vanished at midnight. You were the only one in the room.","contemplative","think"],["B","Me? I was admiring the paintings!","happy","shrug"],["A","Then why is there a ruby in your left pocket?!","angry","point","toward:B",.9],["B","A… souvenir. A very shiny souvenir.","afraid","gasp","away:A"]],end:[["A","The game is over. Hand it over.","proud","proud"],["B","You win this time. But I will be back!","happy","bow","exit"]]},zh:{names:["侦探","小偷"],body:[["A","晚上好。别动。","neutral","point","toward:B"],["B","侦探大人！真是意外的惊喜。","happy","bow","away:A"],["A","午夜时宝石不见了。房间里只有你一个人。","contemplative","think"],["B","我？我只是在欣赏墙上的画！","happy","shrug"],["A","那你左边口袋里为什么有一颗红宝石？！","angry","point","toward:B",.9],["B","这……是纪念品。一件很闪亮的纪念品。","afraid","gasp","away:A"]],end:[["A","游戏结束了。交出来。","proud","proud"],["B","这次算你赢。但我还会回来的！","happy","bow","exit"]]}},love:{en:{names:["Romeo","Julia"],body:[["A","{B}… I have waited all evening to say something.","tender","talk","toward:B"],["B","Then say it. The stage is yours.","happy","talk"],["A","Every time you laugh, the lights seem to grow warmer.","tender","proud"],["B","You are a terrible poet, and I adore it.","happy","laugh"],["A","Will you stay? Not just tonight — every night?","contemplative","kneel"]],end:[["B","Yes. A thousand times, yes.","happy","hug","toward:A"],["A","Then let the curtain fall on a happy ending!","happy","bow"]]},zh:{names:["阿明","小雪"],body:[["A","{B}……我等了一整晚，就想对你说一句话。","tender","talk","toward:B"],["B","那就说吧。舞台是你的。","happy","talk"],["A","每次你笑，舞台的灯光都好像更暖了。","tender","proud"],["B","你真是个糟糕的诗人，可我喜欢。","happy","laugh"],["A","你愿意留下来吗？不只是今晚，是每一个夜晚。","contemplative","kneel"]],end:[["B","愿意。一千次都愿意。","happy","hug","toward:A"],["A","那就让大幕在幸福的结局中落下吧！","happy","bow"]]}},comedy:{en:{names:["Pip","Dot"],body:[["A","{B}! There you are! I have been looking everywhere!","happy","wave","toward:B"],["B","Everywhere? I have been standing right here for an hour.","contemplative","shrug"],["A","Impossible! I checked here twice. You were not here!","gasp","point","stay",.8],["B","Then we have a mystery on our hands.","proud","think"],["A","Or the audience moved the furniture again.","contemplative","think"],["B","Ha! Whatever it is, I vote we blame the audience.","happy","laugh"]],end:[["A","Agreed! Ladies and gentlemen — it was all your fault!","happy","point","stay",.7],["B","Thank you, goodnight!","happy","bow"]]},zh:{names:["小皮","点点"],body:[["A","{B}！原来你在这儿！我找你找遍了！","happy","wave","toward:B"],["B","找遍了？我在这里站了一个小时呀。","contemplative","shrug"],["A","不可能！我来这儿看过两次，你根本不在！","gasp","point","stay",.8],["B","那我们遇到了一桩悬案。","proud","think"],["A","或者是观众又把家具挪了位置。","contemplative","think"],["B","哈！不管怎样，我投票怪观众。","happy","laugh"]],end:[["A","同意！各位观众——都是你们的错！","happy","point","stay",.7],["B","谢谢大家，晚安！","happy","bow"]]}}},og={en:[(i,t)=>[[i,"Wait. I have been wrong about everything.","sad","sad","toward:"+t],[t,"So have I. Let us start again.","tender","hug","toward:"+i],[i,"Together, then.","happy","bow"]],(i,t)=>[[t,"No. I am done. Do not follow me.","angry","angry","exit",.9],[i,"And so I am left alone with the empty seats…","sad","sad","center"],[i,"Perhaps the audience will remember me.","contemplative","bow"]],(i,t)=>[[i,"Hold on — what is that sound?","gasp","gasp"],[t,"The audience! They are applauding! This was all a play!","happy","laugh"],[i,"Then let us take our bow!","proud","bow"]]],zh:[(i,t)=>[[i,"等等。我一直都错了。","sad","sad","toward:"+t],[t,"我也是。我们重新开始吧。","tender","hug","toward:"+i],[i,"那就一起吧。","happy","bow"]],(i,t)=>[[t,"不。我受够了。不要跟来。","angry","angry","exit",.9],[i,"于是，只剩我一个人面对空荡荡的座位……","sad","sad","center"],[i,"也许，观众会记得我。","contemplative","bow"]],(i,t)=>[[i,"等一下——那是什么声音？","gasp","gasp"],[t,"是观众！他们在鼓掌！原来这一切只是一出戏！","happy","laugh"],[i,"那我们就谢幕吧！","proud","bow"]]]},qs=i=>new Promise(t=>setTimeout(t,i)),sr=i=>{const t=i.trim().replace(/^[*_]+|[*_]+$/g,"");return/^[A-Z][A-Z'’\- ]+$/.test(t)&&t.length>1?t.charAt(0)+t.slice(1).toLowerCase():t},lg=/^\s*[[(（【]\s*(.+?)\s*[\])）】]\s*$/,cg=/^\s*([^\s:：.,!?;'"“”()（）[\]【】][^:：.,!?;()（）[\]【】]{0,22}?)\s*[:：]\s*(.*)$/,hg=/^\s*([A-Z][A-Z'’\- ]{1,24})\.\s+(.*)$/,ug=/^\s*([A-Z][A-Z'’\-. ]{1,24})\s*$/;function dg(i){const t=i.split(/\r?\n/),e=[];let n=null;const s=()=>{n&&n.text.trim()&&e.push(n),n=null};let r=0;for(let a=0;a<t.length;a++){const l=t[a].trim();if(!l){s();continue}let c;if((c=lg.exec(l))||(c=/^\*(.+)\*$/.exec(l))||(c=/^(Enter|Exit|Exeunt|上场|下场)\b\s*(.*)$/i.exec(l))){s(),e.push({type:"dir",text:c[0]===l&&c.length===2||c[1]&&!/^(Enter|Exit|Exeunt)/i.test(c[1])?c[1]:l});continue}if((c=cg.exec(l))&&!/^\d/.test(c[1])&&!/^https?$/i.test(c[1])){s(),n={type:"say",name:sr(c[1]),text:c[2]},r++;continue}if(c=hg.exec(l)){s(),n={type:"say",name:sr(c[1]),text:c[2]},r++;continue}if(ug.test(l)&&!n&&t[a+1]&&t[a+1].trim()){n={type:"say",name:sr(l),text:""},r++;continue}n?n.text+=" "+l:e.push({type:"dir",text:l})}return s(),{items:e,said:r}}const fg=/\b(quarrel(s|ing)?|argue[sd]?|arguing|fight(s|ing)?|meet(s|ing)?|confronts?|kiss(es)?|love[sd]?|haunts?)\b|吵架|争吵|打架|对峙|相遇|拌嘴|表白/gi,pg=/\b(?:meets?|meeting|confronts?|and|vs\.?|versus|argues? with|quarrels? with|fights?|loves?|kisses|haunts?|with)\b/i,mg=/遇见|遇到|碰到|对峙|爱上|和|与|跟|对|吵架/;function Ol(i,t){let e=i.replace(fg," ").trim().replace(/^(the|a|an|one)\s+/i,"").replace(/^(一个|一位|那个|一名)/,"").replace(/[,.!?，。！？"“”]/g," ").trim();return t?e=e.replace(/\s+/g,"").slice(0,6):e=e.split(/\s+/).slice(0,2).join(" ").replace(/\b\w/g,n=>n.toUpperCase()),e}function gg(i,t){const e=i.split(t?mg:pg),n=Ol(e[0]||"",t),s=e.slice(1).join(" "),r=Ol(s,t);return[n,r]}function _g(i){return/hamlet|哈姆雷特/i.test(i)?"hamlet":/ghost|spirit|haunt|phantom|鬼|幽灵|亡魂/i.test(i)?"ghost":/detective|thief|murder|steal|侦探|小偷|谋杀|盗/i.test(i)?"detective":/quarrel|argu|fight|angry|row\b|吵|争|打架|怒/i.test(i)?"quarrel":/love|kiss|date|romance|propos|爱|约会|表白|情/i.test(i)?"love":"comedy"}function vg(i){const t=Q0(i),e=t?"zh":"en",n=_g(i),s=ag[n][e];let[r,a]=gg(i,t);if(n==="hamlet")r=s.names[0],a=/ghost|鬼|幽灵/i.test(i)?s.names[1]:a&&!/hamlet|哈姆雷特/i.test(a)?a:s.names[1],/ghost|鬼|幽灵/i.test(i)&&(a=s.names[1]);else if(n==="ghost"){const c=/ghost|spirit|phantom|鬼|幽灵|亡魂/i;if(r&&c.test(r)){const h=r;r=a,a=h}a=s.names[1],(!r||c.test(r))&&(r=s.names[0])}else r||(r=s.names[0]),a||(a=s.names[1]),r===a&&(a=s.names[1]);const o=c=>c.replace(/\{A\}/g,r).replace(/\{B\}/g,a),l=(c,h)=>{const[d,f,p,g,_,m]=c;return{who:d==="A"?r:d==="B"?a:d,line:o(f),emotion:p,gesture:g,move:_||"stay",intensity:m,ending:h}};return{genre:n,lang:t?"zh-CN":"en-US",cast:[r,a],beats:[...s.body.map(c=>l(c,!1)),...s.end.map(c=>l(c,!0))]}}function xg(i,t,e,n=0){const s=og[e==="zh-CN"||e==="zh"?"zh":"en"];return s[n%s.length](i,t).map(([r,a,o,l,c,h])=>({speaker:r,line:a,emotion:o,gesture:l,move:c||"stay",intensity:h??Oi(a,o),lookAt:r===i?t:i,lang:Vn(a),pause:400,ending:!0}))}const yg=i=>{let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}},Mg={zh:[["{X}来回踱了两步，若有所思","think","contemplative","stay"],["{X}望向台下观众，耸了耸肩","shrug","neutral","stay"],["{X}深吸一口气，稳住情绪","talk","contemplative","stay"],["{X}忍不住笑了一下","laugh","happy","stay"],["{X}别过脸去，退开半步","sad","sad","away:{Y}"],["{X}向{Y}走近一步","talk","neutral","toward:{Y}"]],en:[["{X} paces a step, thinking","think","contemplative","stay"],["{X} glances at the audience and shrugs","shrug","neutral","stay"],["{X} takes a steadying breath","talk","contemplative","stay"],["{X} lets out a nervous laugh","laugh","happy","stay"],["{X} turns away, one step back","sad","sad","away:{Y}"],["{X} steps closer to {Y}","talk","neutral","toward:{Y}"]]};function Sg(i,t,e,n){const s=yg(n??Date.now()^Math.random()*1e9|0),r=[],a=Mg[e==="zh"?"zh":"en"];let o=0,l=-9;return i.forEach((c,h)=>{let d=c;if(h>0&&!c.ending&&(d={...c},d.gesture==="talk"&&s()<.3&&(d.gesture=["point","shrug","think"][Math.floor(s()*3)]),d.move==="stay"&&s()<.18&&(d.move=s()<.5?"center":"upstage"),d.intensity=Math.max(.1,Math.min(1,(d.intensity??.5)+(s()-.5)*.2))),h>=2&&!c.ending&&o<3&&h-l>=3&&s()<.45){const[f,p,g,_]=a[Math.floor(s()*a.length)],m=c.who,u=m===t[0]?t[1]:t[0];r.push({who:m,line:"",direction:f.replace(/\{X\}/g,m).replace(/\{Y\}/g,u),emotion:g,gesture:p,move:_.replace(/\{Y\}/g,u),intensity:.45,hold:1500,business:!0}),o++,l=h}r.push(d)}),r}async function*Oc(i,t={}){const e=t.delayMs||0,n=(i||"").trim();if(!n){yield{kind:"end"};return}if(n[0]==="{")try{const m=JSON.parse(n);if(Array.isArray(m.beats)){for(const u of m.actors||[])yield{kind:"actor",...u};for(const u of m.beats)yield{kind:"beat",beat:u},e?await qs(e):await 0;yield{kind:"end"};return}}catch{}const s=new Map,r=m=>{const u=m.toLowerCase();return s.has(u)?null:(s.set(u,m),{kind:"actor",name:m,...Nc(m,s.size-1)})},a=m=>s.get(m.toLowerCase())||m,{items:o,said:l}=dg(n);if(!(l>=2)){const m=vg(n);t.vary!==!1&&(m.beats=Sg(m.beats,m.cast,m.lang==="zh-CN"?"zh":"en",t.seed));for(const S of m.cast)yield r(S);let u=!0;for(let S=0;S<m.beats.length;S++){const b=m.beats[S],x=b.who===m.cast[0]?m.cast[1]:m.cast[0],L={speaker:b.who,line:b.line,emotion:b.emotion,gesture:b.gesture,move:b.move,lookAt:(b.move&&b.move.startsWith("away"),x),intensity:b.intensity??Oi(b.line,b.emotion),lang:m.lang,pause:350,ending:b.ending,...b.business?{hold:b.hold,direction:b.direction,pause:250}:{}};!u&&e?await qs(e):u||await 0,u=!1,yield{kind:"beat",beat:L}}yield{kind:"end"};return}const h=o.map(m=>m.type).lastIndexOf("say");let d=null,f=0,p=0;const g=[];let _="";for(let m=0;m<o.length;m++){const u=o[m],S=m>=h&&h>=0&&o.filter(z=>z.type==="say").length>3;if(p&&e?await qs(e):p&&await 0,u.type==="dir"){const z=Fl(u.text),O=[],G=/^(?:enter|enters|exit|exeunt|上场|下场)\s*(.*)$/i.exec(u.text.replace(/^[[(（【]|[\])）】]$/g,"").trim());if(G&&G[1])for(const q of G[1].split(/\band\b|,|、|和/i).map(X=>X.replace(/^the\s+/i,"").trim()).filter(Boolean))q.length<=24&&O.push(sr(q));if(!O.length)for(const[q,X]of s)u.text.toLowerCase().includes(q)&&O.push(X);!O.length&&d&&z.gesture&&O.push(d);for(const q of O){const X=z.move==="exit"?null:r(a(q));X&&(yield X)}const $=O.map(a),H=u.text.replace(/^[[(（【]|[\])）】]$/g,"").trim();if(!$.length&&p===0){_=_?_+" "+H:H;continue}if(!$.length)yield{kind:"beat",beat:{speaker:null,line:"",direction:H,emotion:"neutral",gesture:"none",move:"stay",lookAt:null,lang:Vn(H),pause:600,ending:S}},p++;else if(z.move==="enter"&&!z.gesture)_=_?_+" "+H:H;else for(const q of $)yield{kind:"beat",beat:{speaker:q,line:"",direction:H,emotion:z.emotion||"neutral",gesture:z.gesture||"none",move:z.move||"stay",lookAt:d&&d!==q?d:null,lang:Vn(H),pause:500,ending:S}},p++;continue}const b=a(u.name),x=r(b);x&&(yield x),g.includes(b)||g.push(b);let L=u.text;const A=[];if(L=L.replace(/[(（[]([^)）\]]{1,40})[)）\]]/g,(z,O)=>(A.push(O)," ")).replace(/\s+/g," ").trim(),!L)continue;const R=A[0]||"",D=R?Fl(R):{gesture:null,emotion:null},E=D.emotion||Fc(R),y=g.find(z=>z!==b)||(d&&d!==b?d:null),T=rg(L);for(let z=0;z<T.length;z++){const O=T[z],G=E||nr(O),$=z===0&&D.gesture||ir(O,G,p+z);let H="stay";z===0&&y?G==="angry"&&f%2===1?H="toward:"+y:G==="afraid"?H="away:"+y:f%4===3&&(H="toward:"+y):z===0&&!y&&f===0&&(H="center");const q=z===T.length-1;yield{kind:"beat",beat:{speaker:b,line:O,emotion:G,gesture:$,move:H,..._&&z===0?{direction:_}:{},lookAt:y||"audience",intensity:Oi(O,G),lang:Vn(O),pause:q?450:220,ending:S}},z===0&&(_=""),p++,!q&&e?await qs(e):q||await 0}d=b,f++}yield{kind:"end"}}const kc="theater.lang",ur={zh:{title:"AI 现场戏剧",tagline:"输入一句想法或一段剧本，演员立刻登台开演；演出中还能随时现场导演。",scriptLabel:"剧本 / 一句话创意 / 公版台词",scriptPh:`例如：哈姆雷特遇见鬼魂
或者  名字：台词  格式的剧本`,start:"开演",pause:"暂停",resume:"继续",stop:"停止",replay:"重播",slowParse:"模拟慢速解析（演示边解析边演出）",mute:"静音（仍显示字幕）",status:"状态",ttfl:"开演→首句",firstBeat:"首个节拍就绪",directLabel:"现场导演（演出中随时提交）",directPh:"例如：更生气一点 / 换个结局 / 他们拥抱",send:"提交",viewLabel:"视角",viewAuto:"自动运镜",viewAud:"观众席",viewClose:"特写",viewFree:"自由",beatsLabel:"节拍流",export:"导出 JSON",import:"导入 JSON",aiSummary:"AI 解析器（可选）",aiNote:"密钥只保存在本机浏览器 localStorage，不会写入代码或仓库。没有密钥时使用本地规则解析器。",keySave:"保存密钥",keyClear:"清除密钥",parserLabel:"解析器",parserLocal:"本地规则解析（无需密钥）",parserAi:"AI 流式解析（需要密钥）",stIdle:"空闲",stParsing:"解析中…",stFirst:"首个节拍就绪",stPerf:i=>`正在演出第 ${i} 拍`,stPaused:"已暂停",stDone:"演出结束 · 谢幕",stStopped:"已停止",stDirective:i=>`已应用现场指令：${i}`,stAiFallback:"AI 解析不可用，已回退到本地解析器",dirNone:"没听懂这条指令。试试：更生气 / 温柔点 / 快一点 / 换个结局 / 他们拥抱 / 看观众 / 重播",dirNoShow:"请先开演。",dirStage:i=>`舞台提示：${i}`,dirAdd:i=>`${i} 登场`,dirAngrier:"更生气",dirSofter:"更温柔",dirSadder:"更悲伤",dirHappier:"更开心",dirScarier:"更害怕",dirProuder:"更骄傲",dirFaster:"加快节奏",dirSlower:"放慢节奏",dirEnding:"换个结局",dirHug:"拥抱",dirAudience:"看向观众",dirReplay:"重播",dirReset:"恢复原样",chips:["更生气","温柔点","更悲伤","快一点","慢一点","换个结局","他们拥抱","看观众","来个侍卫","重播"],adlibs:{angry:["你敢！","够了！","这简直岂有此理！","我再也忍不下去了！"],sad:["……我只是觉得好难过。","唉，也许一切都晚了。","（声音哽住了）"],tender:["（轻声）没事的，我在这里。","（压低声音）别怕。","慢慢说，我听着。"],happy:["哈哈，太好了！","这真是个好消息！","我忍不住要笑了！"],afraid:["那是什么声音？！","别、别过来！","我……我好怕。"],gasp:["啊！","天哪！","什么？！"],proud:["我从不后悔。","这是我应得的荣耀。","谁敢与我相比？"],contemplative:["……让我想想。","也许，事情没那么简单。"],neutral:["嗯。","是这样。"],enter:["打扰了，是谁叫我？","我来了，有什么吩咐？","听说这里很热闹。"]},sampleHamletIdea:"哈姆雷特遇见鬼魂",sampleHamletText:"哈姆雷特选段（公版）",sampleSkit:"原创短剧：深夜便利店",sampleLove:"一句话：侦探对峙小偷",sampleEn:"一句话：国王和小丑吵架",nowSpeaking:"节拍",noScript:"请先输入内容，或点一个示例。",imported:"已导入 JSON",importBad:"导入失败：不是有效的演出 JSON",exported:"已导出",keySaved:"密钥已保存在本机",keyCleared:"密钥已清除",finished:"— 终 —",restart:"重新开演",setLabel:"场景",you:"你",emo:{neutral:"平静",angry:"愤怒",sad:"悲伤",proud:"骄傲",contemplative:"沉思",gasp:"惊讶",happy:"开心",afraid:"害怕",tender:"温柔"},gest:{none:"站定",talk:"说话",point:"指向",bow:"鞠躬",kneel:"跪下",stand:"起身",gasp:"惊呼",angry:"怒吼",sad:"垂泪",proud:"挺胸",think:"沉思",hug:"拥抱",wave:"挥手",shrug:"耸肩",laugh:"大笑"}},en:{title:"AI Live Theater",tagline:"Type an idea or a script. Actors walk on instantly — and you can direct live, mid-show.",scriptLabel:"Script / one-line idea / public-domain scene",scriptPh:`e.g. Hamlet meets the ghost
or a script in  NAME: line  format`,start:"Start",pause:"Pause",resume:"Resume",stop:"Stop",replay:"Replay",slowParse:"Simulate slow parser (shows streaming)",mute:"Mute voices (subtitles stay)",status:"Status",ttfl:"Start → first line",firstBeat:"First beat ready",directLabel:"Live direction (submit any time mid-show)",directPh:"e.g. angrier / change ending / they hug",send:"Send",viewLabel:"Camera",viewAuto:"Auto",viewAud:"Audience",viewClose:"Close",viewFree:"Free",beatsLabel:"Beat stream",export:"Export JSON",import:"Import JSON",aiSummary:"AI parser (optional)",aiNote:"Your key is stored only in this browser's localStorage — never in code or git. Without a key the local rule parser is used.",keySave:"Save key",keyClear:"Clear key",parserLabel:"Parser",parserLocal:"Local rules (no key needed)",parserAi:"AI streaming (key required)",stIdle:"Idle",stParsing:"Parsing…",stFirst:"First beat ready",stPerf:i=>`Performing beat ${i}`,stPaused:"Paused",stDone:"Show finished · curtain call",stStopped:"Stopped",stDirective:i=>`Live directive applied: ${i}`,stAiFallback:"AI parser unavailable — fell back to local parser",dirNone:"Directive not understood. Try: angrier / softer / faster / change ending / they hug / look at the audience / replay",dirNoShow:"Start a show first.",dirStage:i=>`Stage direction: ${i}`,dirAdd:i=>`${i} enters`,dirAngrier:"angrier",dirSofter:"softer",dirSadder:"sadder",dirHappier:"happier",dirScarier:"more afraid",dirProuder:"prouder",dirFaster:"faster",dirSlower:"slower",dirEnding:"change ending",dirHug:"hug",dirAudience:"look at the audience",dirReplay:"replay",dirReset:"reset style",chips:["angrier","softer","sadder","faster","slower","change ending","they hug","look at the audience","enter a guard","replay"],adlibs:{angry:["How dare you!","Enough!","This is outrageous!","I will not stand for this!"],sad:["...I just feel so low.","Alas, perhaps it is too late.","(voice breaking)"],tender:["(softly) It is all right. I am here.","(a whisper) Do not be afraid.","Take your time. I am listening."],happy:["Ha! Wonderful!","What splendid news!","I cannot help but laugh!"],afraid:["What was that sound?!","S-stay back!","I... I am so afraid."],gasp:["Ah!","Good heavens!","What?!"],proud:["I regret nothing.","This honour is mine by right.","Who dares compare?"],contemplative:["...Let me think.","Perhaps it is not so simple."],neutral:["Hm.","So it is."],enter:["Pardon me, did someone call?","I came as soon as I could. What is it?","I heard there was a commotion."]},sampleHamletIdea:"Hamlet meets the ghost",sampleHamletText:"Hamlet excerpt (public domain)",sampleSkit:"Original skit: Midnight Shop",sampleLove:"Idea: detective confronts thief",sampleEn:"Idea: a king and a jester quarrel",nowSpeaking:"Beat",noScript:"Type something first, or click a sample.",imported:"JSON imported",importBad:"Import failed: not a valid performance JSON",exported:"Exported",keySaved:"Key saved locally",keyCleared:"Key cleared",finished:"— The End —",restart:"Restart show",setLabel:"Set",you:"You",emo:{neutral:"calm",angry:"angry",sad:"sad",proud:"proud",contemplative:"pensive",gasp:"shocked",happy:"happy",afraid:"afraid",tender:"tender"},gest:{none:"hold",talk:"talk",point:"point",bow:"bow",kneel:"kneel",stand:"rise",gasp:"gasp",angry:"rage",sad:"weep",proud:"chest out",think:"ponder",hug:"hug",wave:"wave",shrug:"shrug",laugh:"laugh"}}};let ds=localStorage.getItem(kc)==="en"?"en":"zh";const Bc=[],gr=()=>ds;function ae(i,...t){const e=ur[ds][i]??ur.zh[i]??i;return typeof e=="function"?e(...t):e}function bg(i){ds=i,localStorage.setItem(kc,i),document.documentElement.lang=i,zc(),Bc.forEach(t=>t(i))}const kl=(i,t,e=0)=>{const n=ur[t==="en"?"en":"zh"].adlibs[i]||ur.zh.adlibs.neutral;return n[Math.abs(e)%n.length]},Eg=i=>Bc.push(i);function zc(){document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=ae(e.dataset.i18n)});const i=document.getElementById("script");i&&(i.placeholder=ae("scriptPh"));const t=document.getElementById("directIn");t&&(t.placeholder=ae("directPh")),document.getElementById("langBtn").textContent=ds==="zh"?"EN":"中文",document.title=ds==="zh"?"AI 现场戏剧 · AI Live Theater":"AI Live Theater · AI 现场戏剧"}const Bl=[[-2.4,.3],[2.4,.3],[0,-1.8],[-4.4,-.8],[4.4,-.8],[-1.2,1.6],[1.2,1.6],[0,1.9]],ia={angry:"angry",sad:"sad",proud:"proud",contemplative:"think",gasp:"gasp",afraid:"gasp",happy:"laugh",tender:"talk",neutral:"talk"},sa={angry:"#ff9a8a",sad:"#9ab8ff",proud:"#ffd27a",afraid:"#c9b8ff",happy:"#fff0a0",tender:"#ffd0e0",gasp:"#e8f4ff",contemplative:"#d8e6ff",neutral:"#fff1d0"},wg={sad:"sad",gasp:"gasp",afraid:"afraid",happy:"happy",tender:"tender"},ln=(i,t,e)=>Math.max(t,Math.min(e,i));function Tg(i,t,e){if(!i.length)return[];const n=i.map(o=>{const l=/[㐀-鿿]/.test(t[o.i]);return(l?1:.5+o.len*.18)+(/[,.;:!?，。；：！？、…—]/.test(t[o.i+o.len]||"")?l?1.2:1.4:0)}),s=n.reduce((o,l)=>o+l,0),r=e*.88;let a=120;return n.map(o=>{const l=a;return a+=o/s*r,l})}const ra=()=>({intensity:0,emotion:null,emoLeft:0,rate:1,audience:0});class Ag{constructor(t,e={}){this.theater=t,this.hooks=e,this.actors=new Map,this.queue=[],this.performed=[],this.cur=null,this.token=0,this.paused=!1,this.state="idle",this.streamDone=!0,this.style=ra(),this.seq=0,this.beatNo=0,this.skipEnding=!1,this.pendingAlt=!1,this.altVariant=0,this.t0=0,this.firstLine=!1,this.lastSpeakers=[],this.lang="zh-CN",this.actorSpecs=[],this.endedAt=0,this.setId="moon",this.setExplicit=!1,this.closeNext=!1,this.idleT=0,this.adN=0}status(t,...e){var n,s;(s=(n=this.hooks).onStatus)==null||s.call(n,t,...e)}async start(t,e,n={}){var a,o,l;this.reset(!1);const s=++this.token;this.t0=performance.now(),this.firstLine=!1,this.tfb=!1,this.abort=new AbortController,this.streamDone=!1,this.state="parsing",this.theater.openCurtain(!0),this.status("stParsing"),(o=(a=this.hooks).onRunning)==null||o.call(a,!0),this.source={text:t,parser:e,ctx:n},this.chooseSet();let r=!1;try{for await(const c of e.parse(t,{...n,signal:(l=this.abort)==null?void 0:l.signal})){if(s!==this.token)return;r=!0,this.ingest(c)}}catch{if(s!==this.token)return;if(e.id!=="local"&&!r){this.status("stAiFallback");try{for await(const h of Oc(t,{delayMs:n.delayMs})){if(s!==this.token)return;this.ingest(h)}}catch{}}}s===this.token&&(this.streamDone=!0,this.flushPendingAlt())}chooseSet(t){var s,r,a;if(t)this.setExplicit=!0;else if(this.setExplicit||this.beatNo>0)return;const e=[...this.actors.values()].map(o=>o.name),n=t||W0(((s=this.source)==null?void 0:s.text)||"",e)||"moon";n!==this.setId&&(this.setId=this.theater.setSet(n),(a=(r=this.hooks).onSet)==null||a.call(r,this.setId))}replay(){const t=this.actorSpecs.slice(),e=[...this.performed,...this.queue].map(r=>({...r}));if(!e.length)return;const n=this.setId,s={id:"local",parse:async function*(){yield{kind:"scene",set:n||"moon"};for(const r of t)yield{kind:"actor",...r};for(const r of e)yield{kind:"beat",beat:r},await 0;yield{kind:"end"}}};return this.start("",s,{})}reset(t=!0){var e,n,s;this.token++,Fe.cancel(),(e=this.abort)==null||e.abort(),this.queue=[],this.cur=null,this.paused=!1,this.style=ra(),this.skipEnding=!1,this.pendingAlt=!1,this.beatNo=0,this.endedAt=0,this.closeNext=!1,this.idleT=0;for(const r of this.actors.values())this.theater.scene.remove(r.root);this.actors.clear(),this.lastSpeakers=[],this.setExplicit=!1,this.source=null,t||(this.performed=[],this.actorSpecs=[]),(s=(n=this.hooks).onSubtitle)==null||s.call(n,null),this.theater.applaud(0)}stop(){var t,e,n,s,r;this.token++,Fe.cancel(),(t=this.abort)==null||t.abort(),this.cur=null,this.streamDone=!0,this.paused=!1;for(const a of this.actors.values())a.setSpeaking(!1),a.exit();this.theater.openCurtain(!1),this.state="stopped",(n=(e=this.hooks).onSubtitle)==null||n.call(e,null),this.status("stStopped"),(r=(s=this.hooks).onRunning)==null||r.call(s,!1)}pause(){var t,e;this.state==="idle"||this.state==="stopped"||(this.paused=!0,Fe.pause(),this.status("stPaused"),(e=(t=this.hooks).onPaused)==null||e.call(t,!0))}resume(){var t,e;this.paused=!1,Fe.resume(),this.status(this.cur?"stPerf":"stParsing",this.beatNo),(e=(t=this.hooks).onPaused)==null||e.call(t,!1)}ingest(t){var n,s,r,a;if(t.kind==="actor"){this.declare(t);return}if(t.kind==="scene"){(t.set||t.name)&&this.chooseSet(t.set||t.name);return}if(t.kind==="end"||t.kind!=="beat"||!t.beat)return;const e={...t.beat,id:++this.seq};e.speaker&&this.ensureActor(e.speaker),!(e.ending&&this.skipEnding)&&(e.lang==null&&e.line&&(e.lang=Vn(e.line)),e.emotion==null&&(e.emotion=nr(e.line||"")),e.gesture==null&&(e.gesture=ir(e.line||"",e.emotion,e.id)),e.intensity==null&&(e.intensity=Oi(e.line||"",e.emotion)),e.line&&(this.lang=e.lang),this.queue.push(e),(s=(n=this.hooks).onBeatQueued)==null||s.call(n,e),this.tfb||(this.tfb=!0,(a=(r=this.hooks).onMetric)==null||a.call(r,{tfb:performance.now()-this.t0}),this.status("stFirst")),!this.cur&&!this.paused&&this.next())}declare(t){var c,h;const e=t.name.toLowerCase();if(this.actors.has(e))return this.actors.get(e);const n=this.actors.size,s=Nc(t.name,n),r={name:t.name,look:{...s.look,...t.look||{}},voice:{...s.voice,...t.voice||{}}},[a,o]=Bl[n%Bl.length],l=new $0(r,n,{x:a,z:o});return this.theater.scene.add(l.root),this.actors.set(e,l),this.actorSpecs.push(r),this.beatNo===0&&l.enter(),(h=(c=this.hooks).onActor)==null||h.call(c,l),this.chooseSet(),l}ensureActor(t){return this.actors.get(t.toLowerCase())||this.declare({name:t})}getActor(t){return t?this.actors.get(String(t).toLowerCase()):null}next(){var d,f,p,g,_,m,u,S,b,x;if(this.paused||this.cur||this.state==="stopped")return;const t=this.queue.shift();if(!t)return;const e=this.applyStyle(t);this.beatNo++;const n=this.getActor(e.speaker);this.idleT=0,this.idleStage=0;const s=!!n&&!n.onstage;n&&!n.onstage&&n.enter();const r=[...this.actors.values()].filter(L=>L.onstage);e.emotion&&e.emotion!=="neutral"&&(this.theater.react(e.emotion,e.intensity),this.beatNo>=2&&((f=(d=this.hooks).onAudience)==null||f.call(d,e.emotion,e.intensity))),this.doMove(n,e);const a=L=>this.lookPt(L);for(const L of r)L!==n&&(e.everyone?(L.setLook(a(e.lookAt)),L.setEmotion(e.emotion,e.intensity),L.setGesture(e.gesture==="none"?"none":e.gesture,1)):n&&L.setLook(a(n.name)),e.everyone||(L.setGesture("none"),L.setSpeaking(!1),L.setEmotion(wg[e.emotion]||"neutral",.35)));if(n){let L=e.lookAt&&e.lookAt!=="speaker"?e.lookAt:this.lastSpeakers.find(E=>E!==n.name)||"audience";n.setLook(a(L));const A=this.getActor(L),R=A&&A!==n&&A.onstage?A:null;if(this.theater.cue({speaker:n,listener:R,intensity:e.intensity,emotion:e.emotion,close:this.closeNext||!!e.close,beatNo:this.beatNo,entrance:this.beatNo===1||s||/^enter/.test(e.move||"")}),this.closeNext=!1,n.setEmotion(e.emotion,e.intensity),n.setGesture(e.gesture,.7+e.intensity*.6),n.setSpeaking(!!e.line),e.with){const E=this.getActor(e.with);E&&(E.setGesture(e.gesture,1),E.setEmotion(e.emotion,e.intensity),E.setLook(a(n.name)))}this.lastSpeakers=[n.name,...this.lastSpeakers.filter(E=>E!==n.name)].slice(0,3);const D=n.headPos();this.theater.setFocus(new C(n.pos.x,D.y,n.pos.y),sa[e.emotion]||sa.neutral,.8+e.intensity*.5)}const o=e.rateMul||1,l=e.line?Fe.estimateMs(e.line,o):e.hold??(/^enter:/.test(e.move||"")?900:1500),c=e.line?Fe.words(e.line):[],h={beat:e,actor:n,t:0,est:l,speechDone:!1,spoke:!1,phase:"say",pauseMs:(e.pause??300)/o,rate:o,words:c,wi:-1,gotBoundary:!1,wClock:Tg(c,e.line||"",l)};if(this.cur=h,this.state="performing",e.line&&n){const L=e.intensity,A=Fe.speak(e.line,{lang:e.lang||Vn(e.line),pitch:(n.voice.pitch||1)*(.92+L*.16),rate:(n.voice.rate||1)*o*(.95+L*.1),volume:.55+.45*L,voiceIndex:n.index},{onend:()=>{this.cur===h&&h.phase==="say"&&(h.speechDone=!0)},onboundary:R=>{if(this.cur!==h)return;h.gotBoundary=!0;let D=h.words.findIndex(E=>R>=E.i&&R<E.i+E.len);D<0&&(D=h.words.findIndex(E=>E.i>=R)),D>h.wi&&this.reveal(h,D)}});h.spoke=A,this.firstLine||(this.firstLine=!0,(g=(p=this.hooks).onMetric)==null||g.call(p,{ttfl:performance.now()-this.t0}))}else e.line&&!this.firstLine&&(this.firstLine=!0,(m=(_=this.hooks).onMetric)==null||m.call(_,{ttfl:performance.now()-this.t0}));(S=(u=this.hooks).onSubtitle)==null||S.call(u,{name:(n==null?void 0:n.name)||"",color:(n==null?void 0:n.look.color)||"#fff",ghost:n==null?void 0:n.ghost,text:e.line,direction:e.direction,words:c}),(x=(b=this.hooks).onBeat)==null||x.call(b,e,this.beatNo),this.status("stPerf",this.beatNo)}lookPt(t){if(!t||t==="audience")return()=>this.theater.audienceTarget;const e=this.getActor(t);if(!e)return()=>this.theater.audienceTarget;const n=new C;return()=>(n.set(e.pos.x,1.5,e.pos.y),n)}avoid(){var n;const t=[...this.actors.values()].filter(s=>s.onstage&&!s.leaving&&Math.abs(s.pos.x)<5.9);for(let s=0;s<t.length;s++)for(let r=s+1;r<t.length;r++){const a=t[s],o=t[r];if(a.ghost!==o.ghost&&(a.fade??1)<.3||((n=this.cur)==null?void 0:n.beat.gesture)==="hug"&&this.cur.beat.with&&(a===this.cur.actor||o===this.cur.actor))continue;let l=o.pos.x-a.pos.x,c=o.pos.y-a.pos.y;const h=Math.hypot(l,c),d=.68;if(h>=d)continue;h<.001?(l=1,c=0):(l/=h,c/=h);const f=(d-Math.max(h,.001))*.5,p=a.moving?.4:1,g=o.moving?.4:1,_=1/(p+g);a.pos.x-=l*f*2*p*_,a.pos.y-=c*f*2*p*_,o.pos.x+=l*f*2*g*_,o.pos.y+=c*f*2*g*_}const e=this.theater.sets.obstacles;if(e.length)for(const s of t)for(const r of e){const o=ln(s.pos.x,r.x0,r.x1),l=ln(s.pos.y,r.z0,r.z1);let c=s.pos.x-o,h=s.pos.y-l;const d=Math.hypot(c,h);if(!(d>=.32))if(d<1e-4){const f=r.z1+.32-s.pos.y,p=s.pos.x-(r.x0-.32),g=r.x1+.32-s.pos.x;f<=Math.min(p,g)+.6?s.pos.y=r.z1+.32:p<g?s.pos.x=r.x0-.32:s.pos.x=r.x1+.32}else s.pos.x=o+c/d*.32,s.pos.y=l+h/d*.32}for(const s of t)s.root.position.set(s.pos.x,0,s.pos.y)}anticipate(t){var s;t.anticip=!0;const e=this.queue[0];if(!e)return;const n=this.getActor(e.speaker);if(t.actor&&t.beat.line)for(const r of this.actors.values())r!==t.actor&&r.onstage&&!r.ghost&&Math.random()<.6&&((s=r.nod)==null||s.call(r));!n||n===t.actor||!n.onstage||(t.actor&&n.setLook(this.lookPt(t.actor.name)),/^(center|left|right|upstage|downstage|toward:|away:)/.test(e.move||"")&&!n.moving&&this.doMove(n,e))}idleBusiness(t){var a;this.idleT+=t;const e=[...this.actors.values()].filter(o=>o.onstage&&!o.leaving);if(!e.length)return;const n=this.idleStage||0,s=this.getActor(this.lastSpeakers[0])||e[0],r=e.find(o=>o!==s);if(n===0&&this.idleT>.9)this.idleStage=1,s.setSpeaking(!1),s.setGesture("think",.8),s.setEmotion("contemplative",.45),s.setLook(()=>this.theater.audienceTarget);else if(n===1&&this.idleT>2.8)this.idleStage=2,r&&(r.setGesture("shrug",.8),r.setLook(this.lookPt(s.name))),s.setLook(r?this.lookPt(r.name):()=>this.theater.audienceTarget);else if(n===2&&this.idleT>5.2){this.idleStage=3,s.setGesture("none"),r&&r.setGesture("none");for(const o of e)(a=o.nod)==null||a.call(o)}}reveal(t,e){var o,l,c;if(e<=t.wi||!t.words.length)return;const n=e;t.wi=e;const s=t.words[e],r=/[㐀-鿿]/.test(t.beat.line[s.i]),a=/[,.;:!?，。；：！？、…—]/.test(t.beat.line[s.i+s.len]||"");(!r||e%2===0||a)&&((o=t.actor)==null||o.pulse(Math.min(1,.35+s.len*(r?.2:.07)+(a?.35:0))*(.6+t.beat.intensity*.6))),(c=(l=this.hooks).onWord)==null||c.call(l,n,s)}doMove(t,e){const n=e.move||"stay",s=(a,o)=>[ln(a,-5.6,5.6),ln(o,-3.3,2.1)];if(n.startsWith("enter:")){for(const a of n.slice(6).split("|")){const o=this.getActor(a);o&&!o.onstage&&o.enter()}return}if(t&&n==="stay"){this.nudge(t,e);return}if(!t)return;if(n==="enter"){(!t.onstage||t.leaving)&&t.enter();return}if(n==="exit"){t.exit();return}const r=t.home;if(n==="center")t.walkTo(...s(t.index%2?.7:-.7,.2));else if(n==="left")t.walkTo(...s(-4.2,r.z));else if(n==="right")t.walkTo(...s(4.2,r.z));else if(n==="upstage")t.walkTo(...s(r.x,-3));else if(n==="downstage")t.walkTo(...s(r.x,1.9));else if(n.startsWith("toward:")||n.startsWith("away:")){const a=this.getActor(n.slice(n.indexOf(":")+1));if(!a||a===t)return;let o=t.pos.x-a.pos.x,l=t.pos.y-a.pos.y;const c=Math.hypot(o,l)||1;o/=c,l/=c;const h=n.startsWith("toward"),d=h?e.gesture==="hug"?.85:1.5:Math.max(c,1)+2;if(h&&c<d+.2)return;t.walkTo(...s(a.pos.x+o*d,a.pos.y+l*d))}}nudge(t,e){if(!e.line||!t.onstage||t.moving||t.leaving||t.ghost||t.kneelState)return;const n=(e.intensity??.5)>=.55,s=(e.id||0)%3;if(!n&&s!==0)return;const r=e.lookAt&&e.lookAt!=="audience"&&e.lookAt!=="speaker"?this.getActor(e.lookAt):this.getActor(this.lastSpeakers.find(o=>o!==t.name)),a=(o,l)=>[ln(o,-5.4,5.4),ln(l,-3.2,2)];if(r&&r!==t){let o=r.pos.x-t.pos.x,l=r.pos.y-t.pos.y;const c=Math.hypot(o,l)||1;o/=c,l/=c;const h=e.emotion==="afraid"||e.emotion==="sad"||e.emotion==="gasp";h&&c<5?t.walkTo(...a(t.pos.x-o*.7,t.pos.y-l*.7)):!h&&c>1.7?t.walkTo(...a(t.pos.x+o*Math.min(.8,c-1.4),t.pos.y+l*Math.min(.8,c-1.4))):s===0&&t.walkTo(...a(t.pos.x-l*.5,t.pos.y+o*.25))}else t.walkTo(...a(t.pos.x+(t.pos.x>0?-.6:.6),t.pos.y+.3))}applyStyle(t){const e=this.style,n={...t};return n.intensity=ln((n.intensity??.5)+e.intensity,.05,1),(n.line||n.speaker)&&(e.emotion&&e.emoLeft>0&&n.gesture!=="hug"&&(n.emotion=e.emotion,e.emoLeft--,(!n.gesture||n.gesture==="talk"||n.gesture==="none")&&(n.gesture=ia[e.emotion]||"talk")),e.audience>0&&n.line&&(n.lookAt="audience",e.audience--)),n.rateMul=(n.rateMul||1)*e.rate,n}update(t){const e=Math.max(1,Math.ceil(t/.04));for(let n=0;n<e;n++)this.step(t/e);this.theater.update(t)}step(t){var e;for(const n of this.actors.values())n.update(t,0);if(this.avoid(),(this.state==="performing"||this.state==="parsing")&&this.frameShot(),!this.paused&&this.state!=="stopped"){const n=this.cur;if(n){if(n.t+=t*1e3,n.phase==="say"&&n.words.length&&(!n.spoke||!n.gotBoundary&&n.t>700))for(;n.wi+1<n.words.length&&n.t>=n.wClock[n.wi+1];)this.reveal(n,n.wi+1);if(n.phase==="say"){const s=n.spoke;((s?n.speechDone&&n.t>250||n.t>n.est*1.8+2500:n.t>=n.est)||!n.beat.line&&n.t>=n.est)&&(n.beat.line&&s&&!n.speechDone&&Fe.cancel(),n.words.length&&this.reveal(n,n.words.length-1),n.phase="pause",n.t=0,(e=n.actor)==null||e.setSpeaking(!1),this.performed.push(this.stripRuntime(n.beat)))}else!n.anticip&&n.t>Math.min(160,n.pauseMs*.5)&&this.anticipate(n),n.t>=n.pauseMs&&(this.cur=null,this.next())}else this.queue.length?this.next():!this.streamDone&&this.actors.size?this.idleBusiness(t):this.streamDone&&(this.state==="performing"||this.state==="parsing")&&this.finish()}}frameShot(){var n;const t=((n=this.cur)==null?void 0:n.actor)||this.getActor(this.lastSpeakers[0]);if(!t||!t.onstage)return;const e=[{x:t.pos.x,z:t.pos.y}];for(const s of this.actors.values())s!==t&&s.onstage&&!s.leaving&&!(s.ghost&&s.fade<.3)&&e.push({x:s.pos.x,z:s.pos.y});this.theater.setShot(e)}stripRuntime(t){const{id:e,rateMul:n,...s}=t;return s}finish(){var t,e,n,s,r,a;this.state="finished",this.endedAt=performance.now();for(const o of this.actors.values())o.onstage&&(o.setLook(()=>this.theater.audienceTarget),!o.ghost&&!o.kneelState&&o.setGesture("bow"),o.setEmotion("happy",.6),o.setSpeaking(!1));this.theater.cue({type:"finish"}),this.theater.setFocus(new C(0,1.5,0),"#fff1d0",1.1),this.theater.applaud(5),(e=(t=this.hooks).onAudienceApplause)==null||e.call(t,4.5),this.theater.openCurtain(!0),(s=(n=this.hooks).onSubtitle)==null||s.call(n,{name:"",text:"",direction:"",end:!0}),this.status("stDone"),(a=(r=this.hooks).onRunning)==null||a.call(r,!1,!0),setTimeout(()=>{this.state==="finished"&&this.theater.openCurtain(!1)},5200)}direct(t,e){var r,a,o,l;if(t=(t||"").trim(),!t)return{ok:!1,empty:!0};const n=ng(t);if(n.some(c=>c.type==="replay"))return this.replay(),{ok:!0,labels:[e("dirReplay")]};if(this.state==="idle"||this.state==="stopped")return{ok:!1,noShow:!0};const s=[];n.length||n.push({type:"stage",text:t});for(const c of n)switch(c.type){case"mood":{this.style.emotion=c.emotion,this.style.emoLeft=8,this.style.intensity=ln(this.style.intensity+c.delta,-.5,.6);for(const h of c.labels||[c.label])s.push(e(h));this.moodAdlib(c);break}case"rate":this.style.rate=ln(this.style.rate*c.mul,.55,2),s.push(e(c.label));break;case"reset":this.style=ra(),s.push(e("dirReset"));break;case"audience":{this.style.audience=3,s.push(e("dirAudience"));for(const h of this.actors.values())h.onstage&&h.setLook(()=>this.theater.audienceTarget);(r=this.cur)!=null&&r.beat&&(this.cur.beat.lookAt="audience");break}case"hug":{const[h,d]=this.pair();if(!h)break;this.injectFront({speaker:h.name,line:"",direction:e("dirHug"),emotion:"tender",gesture:"hug",move:"toward:"+d.name,lookAt:d.name,with:d.name,intensity:.7,hold:2600,pause:600},{interrupt:!0}),this.theater.react("tender",.7),s.push(e("dirHug"));break}case"ending":this.changeEnding(),s.push(e("dirEnding"));break;case"addchar":{if(this.actors.has(c.name.toLowerCase())){s.push(e("dirAdd",c.name));break}const h=this.beatNo;this.beatNo=Math.max(1,this.beatNo);const d=this.declare({name:c.name});this.beatNo=h;const[f]=this.pair(),p=(this.lang||"").startsWith("en")?"en":"zh";this.injectFront({speaker:d.name,line:kl("enter",p,this.adN++),emotion:"happy",gesture:"wave",move:"enter",lookAt:f?f.name:"audience",intensity:.55,lang:p,entrance:!0,pause:500},{interrupt:!0}),this.theater.react("happy",.5),s.push(e("dirAdd",c.name));break}case"line":{const h=this.getActor(c.speaker)||this.actors.values().next().value;if(!h)break;const d=nr(c.text);this.injectFront({speaker:h.name,line:c.text,emotion:d,gesture:ir(c.text,d,1),move:"stay",lookAt:this.lastSpeakers.find(f=>f!==h.name)||"audience",intensity:Oi(c.text,d),lang:Vn(c.text),pause:350},{interrupt:!0}),s.push(h.name+": "+c.text.slice(0,18));break}case"stage":{const h=((a=this.cur)==null?void 0:a.actor)||this.getActor(this.lastSpeakers[0])||[...this.actors.values()].find(_=>_.onstage);if(!h)break;const d=nr(c.text),f=this.pair().find(_=>_!==h),p=ir(c.text,d,3),g=Oi(c.text,d);this.injectFront({speaker:h.name,line:"",direction:c.text,stage:!0,emotion:d==="neutral"?"contemplative":d,gesture:p==="talk"?ia[d]||"think":p,move:"stay",lookAt:f?f.name:"audience",intensity:Math.max(.5,g),hold:2600,pause:400},{interrupt:!0}),s.push(e("dirStage",c.text.length>24?c.text.slice(0,24)+"…":c.text));break}}return(l=(o=this.hooks).onDirective)==null||l.call(o,s),this.status("stDirective",s.join(" + ")),{ok:!0,labels:s}}moodAdlib(t){var p,g,_;const e=(p=this.cur)==null?void 0:p.actor,n=this.pair(),s=e&&e.onstage?e:n[0];if(!s)return;const r=n.find(m=>m!==s)||null,a=t.emotion,o=(a==="afraid"||a==="gasp")&&r?r:s,l=o===s?r:s,c=(this.lang||"").startsWith("en")?"en":"zh",h=ln(.55+t.delta*1.2,.4,1),d=a==="afraid"||a==="sad",f={speaker:o.name,line:kl(a,c,this.adN++),emotion:a,gesture:ia[a]||"talk",lookAt:l?l.name:"audience",intensity:h,lang:c,pause:300,move:l&&!o.ghost?(d?"away:":"toward:")+l.name:"stay",close:a==="angry"||a==="afraid"||a==="gasp"};this.injectFront(f,{interrupt:!0}),this.theater.react(a,h),(_=(g=this.hooks).onAudience)==null||_.call(g,a,h),this.theater.setFocus(null,sa[a],1.1)}pair(){const t=[...this.lastSpeakers,...[...this.actors.values()].map(n=>n.name)],e=[...new Set(t)].map(n=>this.getActor(n)).filter(n=>n&&n.onstage);return e.length>=2?[e[0],e[1]]:[]}injectFront(t,{interrupt:e=!1}={}){var s,r,a,o;const n={...t,id:++this.seq,lang:t.lang||Vn(t.line||t.direction||"")};this.queue.unshift(n),(r=(s=this.hooks).onBeatQueued)==null||r.call(s,n,!0),this.state==="finished"&&(this.state="performing",this.theater.openCurtain(!0),(o=(a=this.hooks).onRunning)==null||o.call(a,!0)),!this.paused&&(this.cur&&e&&this.interruptCur(),this.cur||this.next())}interruptCur(){var e;const t=this.cur;t&&(t.phase==="say"&&(t.beat.line&&t.spoke&&Fe.cancel(),this.performed.push(this.stripRuntime(t.beat))),(e=t.actor)==null||e.setSpeaking(!1),t.speechDone=!0,t.phase="pause",this.cur=null)}changeEnding(){var e,n;const t=this.queue.filter(s=>s.ending).map(s=>s.id);this.queue=this.queue.filter(s=>!s.ending),t.length&&((n=(e=this.hooks).onBeatsDropped)==null||n.call(e,t)),this.skipEnding=!0,this.pendingAlt=!0,this.streamDone&&this.flushPendingAlt()}flushPendingAlt(){var s,r,a,o;if(!this.pendingAlt)return;this.pendingAlt=!1;const[t,e]=this.pair().length?this.pair():[...this.actors.values()];if(!t||!e)return;const n=xg(t.name,e.name,this.lang,this.altVariant++);for(const l of n){const c={...l,id:++this.seq};this.queue.push(c),(r=(s=this.hooks).onBeatQueued)==null||r.call(s,c,!1)}this.skipEnding=!1,this.state==="finished"&&(this.state="performing",this.theater.openCurtain(!0),(o=(a=this.hooks).onRunning)==null||o.call(a,!0)),!this.cur&&!this.paused&&this.next()}exportDoc(){return{format:"ai-live-theater/performance",version:1,lang:this.lang,actors:this.actorSpecs,beats:[...this.performed,...this.queue.map(t=>this.stripRuntime(t))]}}}const Hc=[{id:"hamletIdea",label:"sampleHamletIdea",text:{zh:"哈姆雷特遇见鬼魂",en:"Hamlet meets the ghost"}},{id:"hamletText",label:"sampleHamletText",text:{zh:null,en:`[Enter GHOST and HAMLET]
HAMLET: Whither wilt thou lead me? Speak; I'll go no further.
GHOST: Mark me.
HAMLET: I will.
GHOST: My hour is almost come, when I to sulphurous and tormenting flames must render up myself.
HAMLET: Alas, poor ghost!
GHOST: Pity me not, but lend thy serious hearing to what I shall unfold.
HAMLET: Speak; I am bound to hear.
GHOST: So art thou to revenge, when thou shalt hear.
HAMLET: What?
GHOST: I am thy father's spirit, doomed for a certain term to walk the night.
GHOST: If thou didst ever thy dear father love —
HAMLET: O God!
GHOST: Revenge his foul and most unnatural murder.
HAMLET: Murder!
GHOST: Adieu, adieu, adieu! Remember me.
[Exit GHOST]
HAMLET: (kneels) O all you host of heaven! O earth! What else? Remember thee? Yea, from the table of my memory I'll wipe away all trivial fond records. Thy commandment all alone shall live within the book and volume of my brain.`}},{id:"skit",label:"sampleSkit",text:{zh:`（深夜便利店。店员小满在柜台后打哈欠，机器人老K推门而入。）
小满：欢迎光临……Welcome, 欢迎！这么晚还不睡？
老K：（环顾四周）我不是来买东西的。我是来问一个问题！
小满：什么问题？
老K：Do robots dream? 我昨晚梦见自己被充满了电，然后飞上了天！
小满：（大笑）飞上天？你确定那不是短路吗？
老K：（愤怒地）你怎么能这样说！那是我这辈子最美的梦！
小满：好好好，对不起，对不起！（鞠躬）我请你喝一杯热机油。
老K：（低下头）……其实，我只是怕天亮以后，我又变回一台机器。
小满：别怕。天亮了，我还在这里值班。你随时可以来。
老K：谢谢你，小满。Goodnight, 晚安。`,en:`(A midnight shop. Clerk MAN yawns behind the counter; robot KAY rolls in.)
MAN: Welcome… 欢迎! Up this late?
KAY: (looking around) I'm not here to buy anything. I came to ask a question!
MAN: What question?
KAY: Do robots dream? Last night I dreamed I was fully charged — and I flew!
MAN: (laughs) Flew? Are you sure it wasn't a short circuit?
KAY: (angrily) How dare you! That was the most beautiful dream of my life!
MAN: Okay, okay, I'm sorry! (bows) Let me buy you a hot cup of motor oil.
KAY: (head down) …Truly, I'm only afraid that when the sun comes up, I'll be just a machine again.
MAN: Don't be. When it's day, I'll still be on shift. Come any time.
KAY: Thank you, Man. Goodnight, 晚安.`}},{id:"detective",label:"sampleLove",text:{zh:"侦探对峙小偷",en:"A detective confronts a thief"}},{id:"king",label:"sampleEn",text:{zh:"国王和小丑吵架",en:"A king and a jester quarrel"}}],Xi="theater.aiKey",dr="theater.aiModel";async function*Rg(i){let t="";for await(const n of i){t+=n;let s;for(;(s=t.indexOf(`
`))>=0;){const r=t.slice(0,s).trim();if(t=t.slice(s+1),!(!r||r.startsWith("```")))try{yield JSON.parse(r)}catch{}}}const e=t.trim();if(e)try{yield JSON.parse(e)}catch{}}const Cg=`You are a stage director. Convert the user's script or idea into a performance.
Output NDJSON only: one JSON object per line, no prose, no code fences.
First lines: {"kind":"actor","name":"NAME"} for each character.
Then one line per beat: {"kind":"beat","beat":{"speaker":"NAME or null","line":"spoken text","direction":"optional stage direction",
"emotion":"neutral|angry|sad|proud|contemplative|gasp|happy|afraid|tender","gesture":"none|talk|point|bow|kneel|stand|gasp|angry|sad|proud|think|hug|wave|shrug|laugh",
"move":"stay|center|left|right|upstage|downstage|exit|enter|toward:NAME|away:NAME","lookAt":"NAME|audience","intensity":0.0-1.0,"lang":"zh-CN|en-US","ending":false}}
Emit the FIRST beat as quickly as possible. Keep lines short (under 25 words). 8-16 beats. Mark the last 2 beats "ending":true.`;async function*Pg(i){var s;const t=i.body.getReader(),e=new TextDecoder;let n="";for(;;){const{value:r,done:a}=await t.read();if(a)break;n+=e.decode(r,{stream:!0});let o;for(;(o=n.indexOf(`
`))>=0;){const l=n.slice(0,o).trim();if(n=n.slice(o+1),!!l.startsWith("data:"))try{const c=JSON.parse(l.slice(5));c.type==="content_block_delta"&&((s=c.delta)!=null&&s.text)&&(yield c.delta.text)}catch{}}}}const Lg={id:"ai",available:()=>!!localStorage.getItem(Xi),async*parse(i,t={}){const e=t.apiKey||localStorage.getItem(Xi);if(!e)throw new Error("no-key");const n=localStorage.getItem(dr)||"claude-haiku-5-5",s=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",signal:t.signal,headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:n,max_tokens:2e3,stream:!0,system:Cg,messages:[{role:"user",content:i}]})});if(!s.ok)throw new Error("ai-http-"+s.status);yield*Rg(Pg(s))}},Gc={id:"local",available:()=>!0,parse:(i,t={})=>Oc(i,{delayMs:t.delayMs||0})},uo={local:Gc,ai:Lg};function Dg(i){const t=uo[i];return t&&t.available()?t:Gc}let pe=null,rr=null,Vc=null,Wc=!1,zl=0;const Hl=typeof window<"u"?window.AudioContext||window.webkitAudioContext:null;if(typeof window<"u"){const i=()=>{var t;Wc=!0,(t=pe==null?void 0:pe.resume)==null||t.call(pe)};window.addEventListener("pointerdown",i,{passive:!0}),window.addEventListener("keydown",i,{passive:!0})}function Gl(){var i,t,e;if(!Hl||!Wc)return!1;if(!pe)try{pe=new Hl,rr=pe.createGain(),rr.gain.value=.55,rr.connect(pe.destination);const n=pe.sampleRate,s=pe.createBuffer(1,n,pe.sampleRate),r=s.getChannelData(0);for(let a=0;a<n;a++)r[a]=Math.random()*2-1;Vc=s}catch{return pe=null,!1}return pe.state==="suspended"&&((e=(i=pe.resume)==null?void 0:(t=i.call(pe)).catch)==null||e.call(t,()=>{})),pe.state!=="closed"}function Pi(i,t,e,n,s,r,a="bandpass"){const o=pe.createBufferSource();o.buffer=Vc,o.loop=!0,o.playbackRate.value=.8+Math.random()*.4;const l=pe.createBiquadFilter();l.type=a,l.Q.value=s,l.frequency.setValueAtTime(e,i),l.frequency.exponentialRampToValueAtTime(Math.max(40,n),i+t);const c=pe.createGain();c.gain.setValueAtTime(1e-4,i),c.gain.linearRampToValueAtTime(r,i+t*.3),c.gain.exponentialRampToValueAtTime(1e-4,i+t),o.connect(l),l.connect(c),c.connect(rr),o.start(i,Math.random()),o.stop(i+t+.05)}const Vl={gasp(){const i=pe.currentTime+.02;Pi(i,.42,700,2600,1.2,.22),Pi(i+.05,.3,1500,3200,.8,.08,"highpass")},laugh(i=.5){const t=pe.currentTime+.02,e=5+Math.round(i*5);for(let n=0;n<e;n++)Pi(t+n*.13+Math.random()*.05,.11,600+Math.random()*500,400+Math.random()*300,3,.07+i*.06)},murmur(){const i=pe.currentTime+.02;Pi(i,1.1,380,300,2,.08),Pi(i+.2,.9,520,420,2.5,.05)},applause(i=4){const t=pe.currentTime+.05;for(let e=0;e<i*22;e++)Pi(t+Math.random()*i,.04+Math.random()*.05,1800+Math.random()*2500,900+Math.random()*600,.9,.05*Math.sin(Math.min(1,e/(i*22))*Math.PI)+.02,"bandpass")}},Ig={gasp:"gasp",afraid:"gasp",happy:"laugh",sad:"murmur",tender:"murmur"},Wl={react(i,t=.5){const e=Ig[i];if(!e||Fe.muted)return;const n=performance.now();n-zl<1400||(zl=n,Gl()&&Vl[e](t))},applause(i=4){Fe.muted||!Gl()||Vl.applause(i)}},Zt=i=>document.getElementById(i),lt={script:Zt("script"),start:Zt("startBtn"),pause:Zt("pauseBtn"),stop:Zt("stopBtn"),replay:Zt("replayBtn"),status:Zt("status"),ttfl:Zt("ttfl"),tfb:Zt("tfb"),directIn:Zt("directIn"),directBtn:Zt("directBtn"),directLog:Zt("directLog"),beatLog:Zt("beatLog"),sub:Zt("subtitle"),subDir:Zt("subDir"),subName:Zt("subName"),subText:Zt("subText"),toast:Zt("toast"),setName:Zt("setName"),slow:Zt("slowParse"),mute:Zt("muteChk"),parserSel:Zt("parserSel"),key:Zt("apiKey"),model:Zt("aiModel")},fs=j0(Zt("stage"));let Xc="moon";const fo=()=>{lt.setName.textContent=G0[gr()][Xc]||"—"};function _r(){lt.start.textContent=ae(document.body.classList.contains("live")?"restart":"start")}let Yc=["stIdle"];const qc=(i,...t)=>{Yc=[i,...t],lt.status.textContent=ae(i,...t)};let Xl=0;function jn(i){lt.toast.textContent=i,lt.toast.classList.add("on"),clearTimeout(Xl),Xl=setTimeout(()=>lt.toast.classList.remove("on"),3200)}const Ug=i=>{const t=parseInt(i.slice(1),16),e=n=>Math.round(n+(255-n)*.6);return`rgb(${e(t>>16)},${e(t>>8&255)},${e(t&255)})`},Yl=i=>i==null?"— ms":Math.round(i)+" ms";let js=[];const Ge=new Ag(fs,{onAudience:(i,t)=>Wl.react(i,t),onAudienceApplause:i=>Wl.applause(i),onWord:i=>{for(let t=0;t<=i&&t<js.length;t++)js[t].classList.add("on")},onStatus:qc,onMetric:i=>{i.ttfl!=null&&(lt.ttfl.textContent=Yl(i.ttfl),console.info("[theater] start → first line:",Math.round(i.ttfl),"ms")),i.tfb!=null&&(lt.tfb.textContent=Yl(i.tfb))},onSubtitle:i=>{var t;if(!i){lt.sub.classList.remove("on");return}if(i.end){lt.subDir.textContent="",lt.subName.textContent="",lt.subText.textContent=ae("finished"),lt.sub.classList.add("on");return}if(lt.subName.textContent=i.name,lt.subName.style.color=i.ghost?"#bfe3ff":Ug(i.color),lt.subText.textContent="",js=[],i.text&&((t=i.words)!=null&&t.length)){let e=0;for(const n of i.words){n.i>e&&lt.subText.append(document.createTextNode(i.text.slice(e,n.i)));const s=document.createElement("span");s.className="w",s.textContent=i.text.slice(n.i,n.i+n.len),lt.subText.append(s),js.push(s),e=n.i+n.len}e<i.text.length&&lt.subText.append(document.createTextNode(i.text.slice(e)))}else lt.subText.textContent=i.text||(i.direction?`（${i.direction}）`:"");lt.subText.classList.toggle("dir",!i.text),lt.subDir.textContent=i.text&&i.direction?`（${i.direction}）`:"",lt.sub.classList.add("on")},onSet:i=>{Xc=i,fo()},onBeatQueued:(i,t)=>Ng(i,t),onBeatsDropped:i=>i.forEach(t=>{var e;return(e=lt.beatLog.querySelector(`li[data-id="${t}"]`))==null?void 0:e.remove()}),onBeat:(i,t)=>{for(const n of lt.beatLog.querySelectorAll("li.now"))n.classList.remove("now");const e=lt.beatLog.querySelector(`li[data-id="${i.id}"]`);e&&(e.classList.add("now"),e.scrollIntoView({block:"nearest"}))},onRunning:(i,t)=>{lt.pause.disabled=!i,lt.stop.disabled=!i&&!t,lt.replay.disabled=!1,lt.start.disabled=!1,document.body.classList.toggle("live",!!i),_r(),i||(lt.pause.textContent=ae("pause"))},onPaused:i=>{lt.pause.textContent=ae(i?"resume":"pause")},onDirective:i=>{Fg(i.join(" + "))}});function Ng(i,t){const e=document.createElement("li");e.dataset.id=i.id,t&&e.classList.add("inj");const n=document.createElement("b");n.textContent=i.speaker||"·";const s=document.createElement("span");s.textContent=i.line||(i.direction?`（${i.direction}）`:"");const r=document.createElement("i");r.dataset.e=i.emotion,r.dataset.g=i.gesture,jc(r),e.append(n,s,r),t&&lt.beatLog.querySelector("li.now")?lt.beatLog.querySelector("li.now").after(e):lt.beatLog.append(e)}function jc(i){i.textContent="";const t=document.createElement("span");t.className="e e-"+i.dataset.e,t.textContent=ae("emo")[i.dataset.e]||i.dataset.e;const e=document.createElement("span");e.textContent=ae("gest")[i.dataset.g]||i.dataset.g,i.append(t,e)}function Fg(i){const t=document.createElement("div");for(t.textContent="▸ "+i,lt.directLog.prepend(t);lt.directLog.children.length>4;)lt.directLog.lastChild.remove()}function Zc(){const i=Zt("samples");i.textContent="";for(const e of Hc){const n=document.createElement("button");n.className="chip",n.textContent=ae(e.label),n.onclick=()=>{lt.script.value=e.text[gr()]??e.text.en},i.append(n)}const t=Zt("chips");t.textContent="";for(const e of ae("chips")){const n=document.createElement("button");n.className="chip",n.textContent=e,n.onclick=()=>mo(e),t.append(n)}}function po(){const i=Zt("views");i.textContent="";for(const[t,e]of[["auto","viewAuto"],["audience","viewAud"],["close","viewClose"],["free","viewFree"]]){const n=document.createElement("button");n.className="small"+(fs.view===t?" active":""),n.textContent=ae(e),n.onclick=()=>{fs.setView(t),po()},i.append(n)}}function vr(){const i=lt.parserSel.value||"local";lt.parserSel.textContent="";const t=new Option(ae("parserLocal"),"local");lt.parserSel.add(t);const e=new Option(ae("parserAi"),"ai");e.disabled=!uo.ai.available(),lt.parserSel.add(e),lt.parserSel.value=i==="ai"&&!e.disabled?"ai":"local"}function Kc(){const i=lt.script.value.trim();if(!i){jn(ae("noScript"));return}lt.beatLog.textContent="",lt.ttfl.textContent="— ms",lt.tfb.textContent="— ms",lt.directLog.textContent="",lt.start.disabled=!1,lt.pause.disabled=!1,lt.stop.disabled=!1,lt.pause.textContent=ae("pause"),document.body.classList.add("live"),_r();const t=Dg(lt.parserSel.value);Ge.start(i,t,{delayMs:lt.slow.checked?450:0})}function mo(i){var e;if(i=(i??lt.directIn.value).trim(),!i)return;const t=Ge.direct(i,ae);t.ok?(lt.directIn.value="",(/replay|重播|重来/.test(i)||((e=t.labels)==null?void 0:e[0])===ae("dirReplay"))&&(lt.beatLog.textContent="")):jn(t.noShow?ae("dirNoShow"):ae("dirNone"))}lt.start.onclick=Kc;lt.pause.onclick=()=>Ge.paused?Ge.resume():Ge.pause();lt.stop.onclick=()=>{Ge.stop(),lt.pause.disabled=!0,lt.stop.disabled=!0};lt.replay.onclick=()=>{lt.beatLog.textContent="",lt.ttfl.textContent="— ms",Ge.replay()||jn(ae("dirNoShow"))};lt.directBtn.onclick=()=>mo();lt.directIn.addEventListener("keydown",i=>{i.key==="Enter"&&mo()});lt.mute.checked=localStorage.getItem("theater.mute")==="1";Fe.muted=lt.mute.checked;lt.mute.onchange=()=>{Fe.muted=lt.mute.checked,localStorage.setItem("theater.mute",lt.mute.checked?"1":"0"),Fe.muted&&Fe.cancel()};Zt("exportBtn").onclick=()=>{const i=new Blob([JSON.stringify(Ge.exportDoc(),null,2)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(i),t.download="performance.json",t.click(),URL.revokeObjectURL(t.href),jn(ae("exported"))};Zt("importBtn").onclick=()=>Zt("importFile").click();Zt("importFile").onchange=async i=>{const t=i.target.files[0];if(!t)return;const e=await t.text();i.target.value="";try{const n=JSON.parse(e);if(!Array.isArray(n.beats))throw 0;lt.script.value=JSON.stringify(n),jn(ae("imported")),Kc()}catch{jn(ae("importBad"))}};lt.key.value=localStorage.getItem(Xi)?"••••••••":"";lt.model.value=localStorage.getItem(dr)||"";Zt("keySave").onclick=()=>{const i=lt.key.value.trim();i&&!/^•+$/.test(i)&&localStorage.setItem(Xi,i),lt.model.value.trim()?localStorage.setItem(dr,lt.model.value.trim()):localStorage.removeItem(dr),lt.key.value=localStorage.getItem(Xi)?"••••••••":"",vr(),uo.ai.available()&&(lt.parserSel.value="ai"),jn(ae("keySaved"))};Zt("keyClear").onclick=()=>{localStorage.removeItem(Xi),lt.key.value="",vr(),jn(ae("keyCleared"))};Zt("langBtn").onclick=()=>bg(gr()==="zh"?"en":"zh");Eg(()=>{fo(),_r(),lt.beatLog.querySelectorAll("li i").forEach(jc),Zc(),po(),vr(),lt.status.textContent=ae(...Yc),lt.pause.textContent=ae(Ge.paused?"resume":"pause")});zc();_r();fo();Zc();po();vr();lt.script.value=Hc[0].text[gr()];qc("stIdle");let ql=performance.now();function $c(i){const t=Math.min(.3,(i-ql)/1e3);ql=i,Ge.update(t),requestAnimationFrame($c)}requestAnimationFrame($c);(function i(t=0){const e=["ramparts","shop","alley","hall"];t>=e.length||setTimeout(()=>{if(!Ge.firstLine||Ge.state==="finished"||Ge.state==="idle"){try{fs.sets.warm(e[t])}catch{}i(t+1)}else i(t)},700)})();window.__theater={director:Ge,theater:fs};
