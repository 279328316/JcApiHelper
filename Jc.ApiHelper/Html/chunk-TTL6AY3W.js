import{A as ue,Aa as ji,B,Ba as Bi,C as Ii,Ca as qi,D as Ae,Da as Gi,E as Ei,Ea as Hi,F as Di,Fa as nt,G as Pi,Ga as rt,H as ke,Ha as Zi,I as D,Ia as Ki,J as ne,Ja as Ft,K as Se,Ka as ft,L as _e,M as ve,N as ze,Na as at,Oa as ot,P as Li,Pa as Re,Q as Dt,Qa as ht,R as Fi,Ra as Ve,S as Ai,Sa as Ue,T as zt,Ta as We,Ua as je,Va as Be,W as Ye,Wa as $i,X as De,Xa as Xi,Y as Oi,Ya as st,Za as Qi,_a as Yi,a as vt,ab as Ji,b as wi,bb as en,c as Si,ca as Je,cb as tn,da as et,e as Nt,eb as qe,f as Ee,fb as nn,g as kt,gb as rn,h as Ti,ha as pt,hb as an,i as oe,ia as ci,ib as on,j as se,ja as Pt,jb as sn,k as b,ka as Pe,kb as J,l as Te,lb as ln,m as ee,ma as ct,mb as Ze,n as F,na as Le,nb as Ke,o as It,oa as Lt,ob as $e,p as xi,pa as ut,pb as Xe,q as pi,qa as Mi,qb as Qe,r as Et,ra as Ri,rb as dn,s as dt,t as mt,u as S,ua as Vi,v as C,va as tt,w as ge,wa as it,x as Ni,y as ki,ya as Ui,z as ye,za as Wi}from"./chunk-XIFTBYTA.js";var cn=wi((pn,_i)=>{(function(a){typeof pn=="object"&&typeof _i<"u"?_i.exports=a():typeof define=="function"&&define.amd?define([],a):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=a()})(function(){return function a(t,e,r){function i(d,f){if(!e[d]){if(!t[d]){var _=typeof vt=="function"&&vt;if(!f&&_)return _(d,!0);if(n)return n(d,!0);var h=new Error("Cannot find module '"+d+"'");throw h.code="MODULE_NOT_FOUND",h}var p=e[d]={exports:{}};t[d][0].call(p.exports,function(g){var m=t[d][1][g];return i(m||g)},p,p.exports,a,t,e,r)}return e[d].exports}for(var n=typeof vt=="function"&&vt,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(a,t,e){"use strict";var r=a("./utils"),i=a("./support"),n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.encode=function(s){for(var d,f,_,h,p,g,m,u=[],c=0,v=s.length,T=v,k=r.getTypeOf(s)!=="string";c<s.length;)T=v-c,_=k?(d=s[c++],f=c<v?s[c++]:0,c<v?s[c++]:0):(d=s.charCodeAt(c++),f=c<v?s.charCodeAt(c++):0,c<v?s.charCodeAt(c++):0),h=d>>2,p=(3&d)<<4|f>>4,g=1<T?(15&f)<<2|_>>6:64,m=2<T?63&_:64,u.push(n.charAt(h)+n.charAt(p)+n.charAt(g)+n.charAt(m));return u.join("")},e.decode=function(s){var d,f,_,h,p,g,m=0,u=0,c="data:";if(s.substr(0,c.length)===c)throw new Error("Invalid base64 input, it looks like a data url.");var v,T=3*(s=s.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(s.charAt(s.length-1)===n.charAt(64)&&T--,s.charAt(s.length-2)===n.charAt(64)&&T--,T%1!=0)throw new Error("Invalid base64 input, bad content length.");for(v=i.uint8array?new Uint8Array(0|T):new Array(0|T);m<s.length;)d=n.indexOf(s.charAt(m++))<<2|(h=n.indexOf(s.charAt(m++)))>>4,f=(15&h)<<4|(p=n.indexOf(s.charAt(m++)))>>2,_=(3&p)<<6|(g=n.indexOf(s.charAt(m++))),v[u++]=d,p!==64&&(v[u++]=f),g!==64&&(v[u++]=_);return v}},{"./support":30,"./utils":32}],2:[function(a,t,e){"use strict";var r=a("./external"),i=a("./stream/DataWorker"),n=a("./stream/Crc32Probe"),s=a("./stream/DataLengthProbe");function d(f,_,h,p,g){this.compressedSize=f,this.uncompressedSize=_,this.crc32=h,this.compression=p,this.compressedContent=g}d.prototype={getContentWorker:function(){var f=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new s("data_length")),_=this;return f.on("end",function(){if(this.streamInfo.data_length!==_.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},d.createWorkerFrom=function(f,_,h){return f.pipe(new n).pipe(new s("uncompressedSize")).pipe(_.compressWorker(h)).pipe(new s("compressedSize")).withStreamInfo("compression",_)},t.exports=d},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(a,t,e){"use strict";var r=a("./stream/GenericWorker");e.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},e.DEFLATE=a("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(a,t,e){"use strict";var r=a("./utils"),i=function(){for(var n,s=[],d=0;d<256;d++){n=d;for(var f=0;f<8;f++)n=1&n?3988292384^n>>>1:n>>>1;s[d]=n}return s}();t.exports=function(n,s){return n!==void 0&&n.length?r.getTypeOf(n)!=="string"?function(d,f,_,h){var p=i,g=h+_;d^=-1;for(var m=h;m<g;m++)d=d>>>8^p[255&(d^f[m])];return-1^d}(0|s,n,n.length,0):function(d,f,_,h){var p=i,g=h+_;d^=-1;for(var m=h;m<g;m++)d=d>>>8^p[255&(d^f.charCodeAt(m))];return-1^d}(0|s,n,n.length,0):0}},{"./utils":32}],5:[function(a,t,e){"use strict";e.base64=!1,e.binary=!1,e.dir=!1,e.createFolders=!0,e.date=null,e.compression=null,e.compressionOptions=null,e.comment=null,e.unixPermissions=null,e.dosPermissions=null},{}],6:[function(a,t,e){"use strict";var r=null;r=typeof Promise<"u"?Promise:a("lie"),t.exports={Promise:r}},{lie:37}],7:[function(a,t,e){"use strict";var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",i=a("pako"),n=a("./utils"),s=a("./stream/GenericWorker"),d=r?"uint8array":"array";function f(_,h){s.call(this,"FlateWorker/"+_),this._pako=null,this._pakoAction=_,this._pakoOptions=h,this.meta={}}e.magic="\b\0",n.inherits(f,s),f.prototype.processChunk=function(_){this.meta=_.meta,this._pako===null&&this._createPako(),this._pako.push(n.transformTo(d,_.data),!1)},f.prototype.flush=function(){s.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var _=this;this._pako.onData=function(h){_.push({data:h,meta:_.meta})}},e.compressWorker=function(_){return new f("Deflate",_)},e.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(a,t,e){"use strict";function r(p,g){var m,u="";for(m=0;m<g;m++)u+=String.fromCharCode(255&p),p>>>=8;return u}function i(p,g,m,u,c,v){var T,k,N=p.file,U=p.compression,O=v!==d.utf8encode,G=n.transformTo("string",v(N.name)),A=n.transformTo("string",d.utf8encode(N.name)),$=N.comment,re=n.transformTo("string",v($)),w=n.transformTo("string",d.utf8encode($)),M=A.length!==N.name.length,l=w.length!==$.length,V="",le="",q="",de=N.dir,H=N.date,ae={crc32:0,compressedSize:0,uncompressedSize:0};g&&!m||(ae.crc32=p.crc32,ae.compressedSize=p.compressedSize,ae.uncompressedSize=p.uncompressedSize);var P=0;g&&(P|=8),O||!M&&!l||(P|=2048);var E=0,ie=0;de&&(E|=16),c==="UNIX"?(ie=798,E|=function(X,Ce){var Ne=X;return X||(Ne=Ce?16893:33204),(65535&Ne)<<16}(N.unixPermissions,de)):(ie=20,E|=function(X){return 63&(X||0)}(N.dosPermissions)),T=H.getUTCHours(),T<<=6,T|=H.getUTCMinutes(),T<<=5,T|=H.getUTCSeconds()/2,k=H.getUTCFullYear()-1980,k<<=4,k|=H.getUTCMonth()+1,k<<=5,k|=H.getUTCDate(),M&&(le=r(1,1)+r(f(G),4)+A,V+="up"+r(le.length,2)+le),l&&(q=r(1,1)+r(f(re),4)+w,V+="uc"+r(q.length,2)+q);var Q="";return Q+=`
\0`,Q+=r(P,2),Q+=U.magic,Q+=r(T,2),Q+=r(k,2),Q+=r(ae.crc32,4),Q+=r(ae.compressedSize,4),Q+=r(ae.uncompressedSize,4),Q+=r(G.length,2),Q+=r(V.length,2),{fileRecord:_.LOCAL_FILE_HEADER+Q+G+V,dirRecord:_.CENTRAL_FILE_HEADER+r(ie,2)+Q+r(re.length,2)+"\0\0\0\0"+r(E,4)+r(u,4)+G+V+re}}var n=a("../utils"),s=a("../stream/GenericWorker"),d=a("../utf8"),f=a("../crc32"),_=a("../signature");function h(p,g,m,u){s.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=m,this.encodeFileName=u,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}n.inherits(h,s),h.prototype.push=function(p){var g=p.meta.percent||0,m=this.entriesCount,u=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,s.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:m?(g+100*(m-u-1))/m:100}}))},h.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var g=this.streamFiles&&!p.file.dir;if(g){var m=i(p,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(p){this.accumulate=!1;var g=this.streamFiles&&!p.file.dir,m=i(p,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),g)this.push({data:function(u){return _.DATA_DESCRIPTOR+r(u.crc32,4)+r(u.compressedSize,4)+r(u.uncompressedSize,4)}(p),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var p=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var m=this.bytesWritten-p,u=function(c,v,T,k,N){var U=n.transformTo("string",N(k));return _.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(c,2)+r(c,2)+r(v,4)+r(T,4)+r(U.length,2)+U}(this.dirRecords.length,m,p,this.zipComment,this.encodeFileName);this.push({data:u,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(p){this._sources.push(p);var g=this;return p.on("data",function(m){g.processChunk(m)}),p.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),p.on("error",function(m){g.error(m)}),this},h.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(p){var g=this._sources;if(!s.prototype.error.call(this,p))return!1;for(var m=0;m<g.length;m++)try{g[m].error(p)}catch{}return!0},h.prototype.lock=function(){s.prototype.lock.call(this);for(var p=this._sources,g=0;g<p.length;g++)p[g].lock()},t.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(a,t,e){"use strict";var r=a("../compressions"),i=a("./ZipFileWorker");e.generateWorker=function(n,s,d){var f=new i(s.streamFiles,d,s.platform,s.encodeFileName),_=0;try{n.forEach(function(h,p){_++;var g=function(v,T){var k=v||T,N=r[k];if(!N)throw new Error(k+" is not a valid compression method !");return N}(p.options.compression,s.compression),m=p.options.compressionOptions||s.compressionOptions||{},u=p.dir,c=p.date;p._compressWorker(g,m).withStreamInfo("file",{name:h,dir:u,date:c,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(f)}),f.entriesCount=_}catch(h){f.error(h)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(a,t,e){"use strict";function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var i=new r;for(var n in this)typeof this[n]!="function"&&(i[n]=this[n]);return i}}(r.prototype=a("./object")).loadAsync=a("./load"),r.support=a("./support"),r.defaults=a("./defaults"),r.version="3.10.1",r.loadAsync=function(i,n){return new r().loadAsync(i,n)},r.external=a("./external"),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(a,t,e){"use strict";var r=a("./utils"),i=a("./external"),n=a("./utf8"),s=a("./zipEntries"),d=a("./stream/Crc32Probe"),f=a("./nodejsUtils");function _(h){return new i.Promise(function(p,g){var m=h.decompressed.getContentWorker().pipe(new d);m.on("error",function(u){g(u)}).on("end",function(){m.streamInfo.crc32!==h.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}t.exports=function(h,p){var g=this;return p=r.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),f.isNode&&f.isStream(h)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",h,!0,p.optimizedBinaryString,p.base64).then(function(m){var u=new s(p);return u.load(m),u}).then(function(m){var u=[i.Promise.resolve(m)],c=m.files;if(p.checkCRC32)for(var v=0;v<c.length;v++)u.push(_(c[v]));return i.Promise.all(u)}).then(function(m){for(var u=m.shift(),c=u.files,v=0;v<c.length;v++){var T=c[v],k=T.fileNameStr,N=r.resolve(T.fileNameStr);g.file(N,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:p.createFolders}),T.dir||(g.file(N).unsafeOriginalName=k)}return u.zipComment.length&&(g.comment=u.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(a,t,e){"use strict";var r=a("../utils"),i=a("../stream/GenericWorker");function n(s,d){i.call(this,"Nodejs stream input adapter for "+s),this._upstreamEnded=!1,this._bindStream(d)}r.inherits(n,i),n.prototype._bindStream=function(s){var d=this;(this._stream=s).pause(),s.on("data",function(f){d.push({data:f,meta:{percent:0}})}).on("error",function(f){d.isPaused?this.generatedError=f:d.error(f)}).on("end",function(){d.isPaused?d._upstreamEnded=!0:d.end()})},n.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},n.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=n},{"../stream/GenericWorker":28,"../utils":32}],13:[function(a,t,e){"use strict";var r=a("readable-stream").Readable;function i(n,s,d){r.call(this,s),this._helper=n;var f=this;n.on("data",function(_,h){f.push(_)||f._helper.pause(),d&&d(h)}).on("error",function(_){f.emit("error",_)}).on("end",function(){f.push(null)})}a("../utils").inherits(i,r),i.prototype._read=function(){this._helper.resume()},t.exports=i},{"../utils":32,"readable-stream":16}],14:[function(a,t,e){"use strict";t.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,i){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,i);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,i)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var i=new Buffer(r);return i.fill(0),i},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(a,t,e){"use strict";function r(N,U,O){var G,A=n.getTypeOf(U),$=n.extend(O||{},f);$.date=$.date||new Date,$.compression!==null&&($.compression=$.compression.toUpperCase()),typeof $.unixPermissions=="string"&&($.unixPermissions=parseInt($.unixPermissions,8)),$.unixPermissions&&16384&$.unixPermissions&&($.dir=!0),$.dosPermissions&&16&$.dosPermissions&&($.dir=!0),$.dir&&(N=c(N)),$.createFolders&&(G=u(N))&&v.call(this,G,!0);var re=A==="string"&&$.binary===!1&&$.base64===!1;O&&O.binary!==void 0||($.binary=!re),(U instanceof _&&U.uncompressedSize===0||$.dir||!U||U.length===0)&&($.base64=!1,$.binary=!0,U="",$.compression="STORE",A="string");var w=null;w=U instanceof _||U instanceof s?U:g.isNode&&g.isStream(U)?new m(N,U):n.prepareContent(N,U,$.binary,$.optimizedBinaryString,$.base64);var M=new h(N,w,$);this.files[N]=M}var i=a("./utf8"),n=a("./utils"),s=a("./stream/GenericWorker"),d=a("./stream/StreamHelper"),f=a("./defaults"),_=a("./compressedObject"),h=a("./zipObject"),p=a("./generate"),g=a("./nodejsUtils"),m=a("./nodejs/NodejsStreamInputAdapter"),u=function(N){N.slice(-1)==="/"&&(N=N.substring(0,N.length-1));var U=N.lastIndexOf("/");return 0<U?N.substring(0,U):""},c=function(N){return N.slice(-1)!=="/"&&(N+="/"),N},v=function(N,U){return U=U!==void 0?U:f.createFolders,N=c(N),this.files[N]||r.call(this,N,null,{dir:!0,createFolders:U}),this.files[N]};function T(N){return Object.prototype.toString.call(N)==="[object RegExp]"}var k={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(N){var U,O,G;for(U in this.files)G=this.files[U],(O=U.slice(this.root.length,U.length))&&U.slice(0,this.root.length)===this.root&&N(O,G)},filter:function(N){var U=[];return this.forEach(function(O,G){N(O,G)&&U.push(G)}),U},file:function(N,U,O){if(arguments.length!==1)return N=this.root+N,r.call(this,N,U,O),this;if(T(N)){var G=N;return this.filter(function($,re){return!re.dir&&G.test($)})}var A=this.files[this.root+N];return A&&!A.dir?A:null},folder:function(N){if(!N)return this;if(T(N))return this.filter(function(A,$){return $.dir&&N.test(A)});var U=this.root+N,O=v.call(this,U),G=this.clone();return G.root=O.name,G},remove:function(N){N=this.root+N;var U=this.files[N];if(U||(N.slice(-1)!=="/"&&(N+="/"),U=this.files[N]),U&&!U.dir)delete this.files[N];else for(var O=this.filter(function(A,$){return $.name.slice(0,N.length)===N}),G=0;G<O.length;G++)delete this.files[O[G].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(N){var U,O={};try{if((O=n.extend(N||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");n.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var G=O.comment||this.comment||"";U=p.generateWorker(this,O,G)}catch(A){(U=new s("error")).error(A)}return new d(U,O.type||"string",O.mimeType)},generateAsync:function(N,U){return this.generateInternalStream(N).accumulate(U)},generateNodeStream:function(N,U){return(N=N||{}).type||(N.type="nodebuffer"),this.generateInternalStream(N).toNodejsStream(U)}};t.exports=k},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(a,t,e){"use strict";t.exports=a("stream")},{stream:void 0}],17:[function(a,t,e){"use strict";var r=a("./DataReader");function i(n){r.call(this,n);for(var s=0;s<this.data.length;s++)n[s]=255&n[s]}a("../utils").inherits(i,r),i.prototype.byteAt=function(n){return this.data[this.zero+n]},i.prototype.lastIndexOfSignature=function(n){for(var s=n.charCodeAt(0),d=n.charCodeAt(1),f=n.charCodeAt(2),_=n.charCodeAt(3),h=this.length-4;0<=h;--h)if(this.data[h]===s&&this.data[h+1]===d&&this.data[h+2]===f&&this.data[h+3]===_)return h-this.zero;return-1},i.prototype.readAndCheckSignature=function(n){var s=n.charCodeAt(0),d=n.charCodeAt(1),f=n.charCodeAt(2),_=n.charCodeAt(3),h=this.readData(4);return s===h[0]&&d===h[1]&&f===h[2]&&_===h[3]},i.prototype.readData=function(n){if(this.checkOffset(n),n===0)return[];var s=this.data.slice(this.zero+this.index,this.zero+this.index+n);return this.index+=n,s},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(a,t,e){"use strict";var r=a("../utils");function i(n){this.data=n,this.length=n.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(n){this.checkIndex(this.index+n)},checkIndex:function(n){if(this.length<this.zero+n||n<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+n+"). Corrupted zip ?")},setIndex:function(n){this.checkIndex(n),this.index=n},skip:function(n){this.setIndex(this.index+n)},byteAt:function(){},readInt:function(n){var s,d=0;for(this.checkOffset(n),s=this.index+n-1;s>=this.index;s--)d=(d<<8)+this.byteAt(s);return this.index+=n,d},readString:function(n){return r.transformTo("string",this.readData(n))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var n=this.readInt(4);return new Date(Date.UTC(1980+(n>>25&127),(n>>21&15)-1,n>>16&31,n>>11&31,n>>5&63,(31&n)<<1))}},t.exports=i},{"../utils":32}],19:[function(a,t,e){"use strict";var r=a("./Uint8ArrayReader");function i(n){r.call(this,n)}a("../utils").inherits(i,r),i.prototype.readData=function(n){this.checkOffset(n);var s=this.data.slice(this.zero+this.index,this.zero+this.index+n);return this.index+=n,s},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(a,t,e){"use strict";var r=a("./DataReader");function i(n){r.call(this,n)}a("../utils").inherits(i,r),i.prototype.byteAt=function(n){return this.data.charCodeAt(this.zero+n)},i.prototype.lastIndexOfSignature=function(n){return this.data.lastIndexOf(n)-this.zero},i.prototype.readAndCheckSignature=function(n){return n===this.readData(4)},i.prototype.readData=function(n){this.checkOffset(n);var s=this.data.slice(this.zero+this.index,this.zero+this.index+n);return this.index+=n,s},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(a,t,e){"use strict";var r=a("./ArrayReader");function i(n){r.call(this,n)}a("../utils").inherits(i,r),i.prototype.readData=function(n){if(this.checkOffset(n),n===0)return new Uint8Array(0);var s=this.data.subarray(this.zero+this.index,this.zero+this.index+n);return this.index+=n,s},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(a,t,e){"use strict";var r=a("../utils"),i=a("../support"),n=a("./ArrayReader"),s=a("./StringReader"),d=a("./NodeBufferReader"),f=a("./Uint8ArrayReader");t.exports=function(_){var h=r.getTypeOf(_);return r.checkSupport(h),h!=="string"||i.uint8array?h==="nodebuffer"?new d(_):i.uint8array?new f(r.transformTo("uint8array",_)):new n(r.transformTo("array",_)):new s(_)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(a,t,e){"use strict";e.LOCAL_FILE_HEADER="PK",e.CENTRAL_FILE_HEADER="PK",e.CENTRAL_DIRECTORY_END="PK",e.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",e.ZIP64_CENTRAL_DIRECTORY_END="PK",e.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(a,t,e){"use strict";var r=a("./GenericWorker"),i=a("../utils");function n(s){r.call(this,"ConvertWorker to "+s),this.destType=s}i.inherits(n,r),n.prototype.processChunk=function(s){this.push({data:i.transformTo(this.destType,s.data),meta:s.meta})},t.exports=n},{"../utils":32,"./GenericWorker":28}],25:[function(a,t,e){"use strict";var r=a("./GenericWorker"),i=a("../crc32");function n(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}a("../utils").inherits(n,r),n.prototype.processChunk=function(s){this.streamInfo.crc32=i(s.data,this.streamInfo.crc32||0),this.push(s)},t.exports=n},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(a,t,e){"use strict";var r=a("../utils"),i=a("./GenericWorker");function n(s){i.call(this,"DataLengthProbe for "+s),this.propName=s,this.withStreamInfo(s,0)}r.inherits(n,i),n.prototype.processChunk=function(s){if(s){var d=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=d+s.data.length}i.prototype.processChunk.call(this,s)},t.exports=n},{"../utils":32,"./GenericWorker":28}],27:[function(a,t,e){"use strict";var r=a("../utils"),i=a("./GenericWorker");function n(s){i.call(this,"DataWorker");var d=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,s.then(function(f){d.dataIsReady=!0,d.data=f,d.max=f&&f.length||0,d.type=r.getTypeOf(f),d.isPaused||d._tickAndRepeat()},function(f){d.error(f)})}r.inherits(n,i),n.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},n.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},n.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},n.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var s=null,d=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":s=this.data.substring(this.index,d);break;case"uint8array":s=this.data.subarray(this.index,d);break;case"array":case"nodebuffer":s=this.data.slice(this.index,d)}return this.index=d,this.push({data:s,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=n},{"../utils":32,"./GenericWorker":28}],28:[function(a,t,e){"use strict";function r(i){this.name=i||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(i){this.emit("data",i)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(i){this.emit("error",i)}return!0},error:function(i){return!this.isFinished&&(this.isPaused?this.generatedError=i:(this.isFinished=!0,this.emit("error",i),this.previous&&this.previous.error(i),this.cleanUp()),!0)},on:function(i,n){return this._listeners[i].push(n),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(i,n){if(this._listeners[i])for(var s=0;s<this._listeners[i].length;s++)this._listeners[i][s].call(this,n)},pipe:function(i){return i.registerPrevious(this)},registerPrevious:function(i){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=i.streamInfo,this.mergeStreamInfo(),this.previous=i;var n=this;return i.on("data",function(s){n.processChunk(s)}),i.on("end",function(){n.end()}),i.on("error",function(s){n.error(s)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var i=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),i=!0),this.previous&&this.previous.resume(),!i},flush:function(){},processChunk:function(i){this.push(i)},withStreamInfo:function(i,n){return this.extraStreamInfo[i]=n,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var i in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,i)&&(this.streamInfo[i]=this.extraStreamInfo[i])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var i="Worker "+this.name;return this.previous?this.previous+" -> "+i:i}},t.exports=r},{}],29:[function(a,t,e){"use strict";var r=a("../utils"),i=a("./ConvertWorker"),n=a("./GenericWorker"),s=a("../base64"),d=a("../support"),f=a("../external"),_=null;if(d.nodestream)try{_=a("../nodejs/NodejsStreamOutputAdapter")}catch{}function h(g,m){return new f.Promise(function(u,c){var v=[],T=g._internalType,k=g._outputType,N=g._mimeType;g.on("data",function(U,O){v.push(U),m&&m(O)}).on("error",function(U){v=[],c(U)}).on("end",function(){try{var U=function(O,G,A){switch(O){case"blob":return r.newBlob(r.transformTo("arraybuffer",G),A);case"base64":return s.encode(G);default:return r.transformTo(O,G)}}(k,function(O,G){var A,$=0,re=null,w=0;for(A=0;A<G.length;A++)w+=G[A].length;switch(O){case"string":return G.join("");case"array":return Array.prototype.concat.apply([],G);case"uint8array":for(re=new Uint8Array(w),A=0;A<G.length;A++)re.set(G[A],$),$+=G[A].length;return re;case"nodebuffer":return Buffer.concat(G);default:throw new Error("concat : unsupported type '"+O+"'")}}(T,v),N);u(U)}catch(O){c(O)}v=[]}).resume()})}function p(g,m,u){var c=m;switch(m){case"blob":case"arraybuffer":c="uint8array";break;case"base64":c="string"}try{this._internalType=c,this._outputType=m,this._mimeType=u,r.checkSupport(c),this._worker=g.pipe(new i(c)),g.lock()}catch(v){this._worker=new n("error"),this._worker.error(v)}}p.prototype={accumulate:function(g){return h(this,g)},on:function(g,m){var u=this;return g==="data"?this._worker.on(g,function(c){m.call(u,c.data,c.meta)}):this._worker.on(g,function(){r.delay(m,arguments,u)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new _(this,{objectMode:this._outputType!=="nodebuffer"},g)}},t.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(a,t,e){"use strict";if(e.base64=!0,e.array=!0,e.string=!0,e.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",e.nodebuffer=typeof Buffer<"u",e.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")e.blob=!1;else{var r=new ArrayBuffer(0);try{e.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),e.blob=i.getBlob("application/zip").size===0}catch{e.blob=!1}}}try{e.nodestream=!!a("readable-stream").Readable}catch{e.nodestream=!1}},{"readable-stream":16}],31:[function(a,t,e){"use strict";for(var r=a("./utils"),i=a("./support"),n=a("./nodejsUtils"),s=a("./stream/GenericWorker"),d=new Array(256),f=0;f<256;f++)d[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;d[254]=d[254]=1;function _(){s.call(this,"utf-8 decode"),this.leftOver=null}function h(){s.call(this,"utf-8 encode")}e.utf8encode=function(p){return i.nodebuffer?n.newBufferFrom(p,"utf-8"):function(g){var m,u,c,v,T,k=g.length,N=0;for(v=0;v<k;v++)(64512&(u=g.charCodeAt(v)))==55296&&v+1<k&&(64512&(c=g.charCodeAt(v+1)))==56320&&(u=65536+(u-55296<<10)+(c-56320),v++),N+=u<128?1:u<2048?2:u<65536?3:4;for(m=i.uint8array?new Uint8Array(N):new Array(N),v=T=0;T<N;v++)(64512&(u=g.charCodeAt(v)))==55296&&v+1<k&&(64512&(c=g.charCodeAt(v+1)))==56320&&(u=65536+(u-55296<<10)+(c-56320),v++),u<128?m[T++]=u:(u<2048?m[T++]=192|u>>>6:(u<65536?m[T++]=224|u>>>12:(m[T++]=240|u>>>18,m[T++]=128|u>>>12&63),m[T++]=128|u>>>6&63),m[T++]=128|63&u);return m}(p)},e.utf8decode=function(p){return i.nodebuffer?r.transformTo("nodebuffer",p).toString("utf-8"):function(g){var m,u,c,v,T=g.length,k=new Array(2*T);for(m=u=0;m<T;)if((c=g[m++])<128)k[u++]=c;else if(4<(v=d[c]))k[u++]=65533,m+=v-1;else{for(c&=v===2?31:v===3?15:7;1<v&&m<T;)c=c<<6|63&g[m++],v--;1<v?k[u++]=65533:c<65536?k[u++]=c:(c-=65536,k[u++]=55296|c>>10&1023,k[u++]=56320|1023&c)}return k.length!==u&&(k.subarray?k=k.subarray(0,u):k.length=u),r.applyFromCharCode(k)}(p=r.transformTo(i.uint8array?"uint8array":"array",p))},r.inherits(_,s),_.prototype.processChunk=function(p){var g=r.transformTo(i.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var m=g;(g=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),g.set(m,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var u=function(v,T){var k;for((T=T||v.length)>v.length&&(T=v.length),k=T-1;0<=k&&(192&v[k])==128;)k--;return k<0||k===0?T:k+d[v[k]]>T?k:T}(g),c=g;u!==g.length&&(i.uint8array?(c=g.subarray(0,u),this.leftOver=g.subarray(u,g.length)):(c=g.slice(0,u),this.leftOver=g.slice(u,g.length))),this.push({data:e.utf8decode(c),meta:p.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:e.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},e.Utf8DecodeWorker=_,r.inherits(h,s),h.prototype.processChunk=function(p){this.push({data:e.utf8encode(p.data),meta:p.meta})},e.Utf8EncodeWorker=h},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(a,t,e){"use strict";var r=a("./support"),i=a("./base64"),n=a("./nodejsUtils"),s=a("./external");function d(m){return m}function f(m,u){for(var c=0;c<m.length;++c)u[c]=255&m.charCodeAt(c);return u}a("setimmediate"),e.newBlob=function(m,u){e.checkSupport("blob");try{return new Blob([m],{type:u})}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return c.append(m),c.getBlob(u)}catch{throw new Error("Bug : can't construct the Blob.")}}};var _={stringifyByChunk:function(m,u,c){var v=[],T=0,k=m.length;if(k<=c)return String.fromCharCode.apply(null,m);for(;T<k;)u==="array"||u==="nodebuffer"?v.push(String.fromCharCode.apply(null,m.slice(T,Math.min(T+c,k)))):v.push(String.fromCharCode.apply(null,m.subarray(T,Math.min(T+c,k)))),T+=c;return v.join("")},stringifyByChar:function(m){for(var u="",c=0;c<m.length;c++)u+=String.fromCharCode(m[c]);return u},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,n.allocBuffer(1)).length===1}catch{return!1}}()}};function h(m){var u=65536,c=e.getTypeOf(m),v=!0;if(c==="uint8array"?v=_.applyCanBeUsed.uint8array:c==="nodebuffer"&&(v=_.applyCanBeUsed.nodebuffer),v)for(;1<u;)try{return _.stringifyByChunk(m,c,u)}catch{u=Math.floor(u/2)}return _.stringifyByChar(m)}function p(m,u){for(var c=0;c<m.length;c++)u[c]=m[c];return u}e.applyFromCharCode=h;var g={};g.string={string:d,array:function(m){return f(m,new Array(m.length))},arraybuffer:function(m){return g.string.uint8array(m).buffer},uint8array:function(m){return f(m,new Uint8Array(m.length))},nodebuffer:function(m){return f(m,n.allocBuffer(m.length))}},g.array={string:h,array:d,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return n.newBufferFrom(m)}},g.arraybuffer={string:function(m){return h(new Uint8Array(m))},array:function(m){return p(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:d,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return n.newBufferFrom(new Uint8Array(m))}},g.uint8array={string:h,array:function(m){return p(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:d,nodebuffer:function(m){return n.newBufferFrom(m)}},g.nodebuffer={string:h,array:function(m){return p(m,new Array(m.length))},arraybuffer:function(m){return g.nodebuffer.uint8array(m).buffer},uint8array:function(m){return p(m,new Uint8Array(m.length))},nodebuffer:d},e.transformTo=function(m,u){if(u=u||"",!m)return u;e.checkSupport(m);var c=e.getTypeOf(u);return g[c][m](u)},e.resolve=function(m){for(var u=m.split("/"),c=[],v=0;v<u.length;v++){var T=u[v];T==="."||T===""&&v!==0&&v!==u.length-1||(T===".."?c.pop():c.push(T))}return c.join("/")},e.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":r.nodebuffer&&n.isBuffer(m)?"nodebuffer":r.uint8array&&m instanceof Uint8Array?"uint8array":r.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},e.checkSupport=function(m){if(!r[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},e.MAX_VALUE_16BITS=65535,e.MAX_VALUE_32BITS=-1,e.pretty=function(m){var u,c,v="";for(c=0;c<(m||"").length;c++)v+="\\x"+((u=m.charCodeAt(c))<16?"0":"")+u.toString(16).toUpperCase();return v},e.delay=function(m,u,c){setImmediate(function(){m.apply(c||null,u||[])})},e.inherits=function(m,u){function c(){}c.prototype=u.prototype,m.prototype=new c},e.extend=function(){var m,u,c={};for(m=0;m<arguments.length;m++)for(u in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],u)&&c[u]===void 0&&(c[u]=arguments[m][u]);return c},e.prepareContent=function(m,u,c,v,T){return s.Promise.resolve(u).then(function(k){return r.blob&&(k instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(k))!==-1)&&typeof FileReader<"u"?new s.Promise(function(N,U){var O=new FileReader;O.onload=function(G){N(G.target.result)},O.onerror=function(G){U(G.target.error)},O.readAsArrayBuffer(k)}):k}).then(function(k){var N=e.getTypeOf(k);return N?(N==="arraybuffer"?k=e.transformTo("uint8array",k):N==="string"&&(T?k=i.decode(k):c&&v!==!0&&(k=function(U){return f(U,r.uint8array?new Uint8Array(U.length):new Array(U.length))}(k))),k):s.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(a,t,e){"use strict";var r=a("./reader/readerFor"),i=a("./utils"),n=a("./signature"),s=a("./zipEntry"),d=a("./support");function f(_){this.files=[],this.loadOptions=_}f.prototype={checkSignature:function(_){if(!this.reader.readAndCheckSignature(_)){this.reader.index-=4;var h=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(h)+", expected "+i.pretty(_)+")")}},isSignature:function(_,h){var p=this.reader.index;this.reader.setIndex(_);var g=this.reader.readString(4)===h;return this.reader.setIndex(p),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var _=this.reader.readData(this.zipCommentLength),h=d.uint8array?"uint8array":"array",p=i.transformTo(h,_);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var _,h,p,g=this.zip64EndOfCentralSize-44;0<g;)_=this.reader.readInt(2),h=this.reader.readInt(4),p=this.reader.readData(h),this.zip64ExtensibleData[_]={id:_,length:h,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var _,h;for(_=0;_<this.files.length;_++)h=this.files[_],this.reader.setIndex(h.localHeaderOffset),this.checkSignature(n.LOCAL_FILE_HEADER),h.readLocalPart(this.reader),h.handleUTF8(),h.processAttributes()},readCentralDir:function(){var _;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER);)(_=new s({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(_);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var _=this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);if(_<0)throw this.isSignature(0,n.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(_);var h=_;if(this.checkSignature(n.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(_=this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(_),this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,n.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var g=h-p;if(0<g)this.isSignature(h,n.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(_){this.reader=r(_)},load:function(_){this.prepareReader(_),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(a,t,e){"use strict";var r=a("./reader/readerFor"),i=a("./utils"),n=a("./compressedObject"),s=a("./crc32"),d=a("./utf8"),f=a("./compressions"),_=a("./support");function h(p,g){this.options=p,this.loadOptions=g}h.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var g,m;if(p.skip(22),this.fileNameLength=p.readInt(2),m=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=function(u){for(var c in f)if(Object.prototype.hasOwnProperty.call(f,c)&&f[c].magic===u)return f[c];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+i.pretty(this.compressionMethod)+" unknown (inner file : "+i.transformTo("string",this.fileName)+")");this.decompressed=new n(this.compressedSize,this.uncompressedSize,this.crc32,g,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var g=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(g),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var g,m,u,c=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<c;)g=p.readInt(2),m=p.readInt(2),u=p.readData(m),this.extraFields[g]={id:g,length:m,value:u};p.setIndex(c)},handleUTF8:function(){var p=_.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=d.utf8decode(this.fileName),this.fileCommentStr=d.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var m=i.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var u=this.findExtraFieldUnicodeComment();if(u!==null)this.fileCommentStr=u;else{var c=i.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(c)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var g=r(p.value);return g.readInt(1)!==1||s(this.fileName)!==g.readInt(4)?null:d.utf8decode(g.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var g=r(p.value);return g.readInt(1)!==1||s(this.fileComment)!==g.readInt(4)?null:d.utf8decode(g.readData(p.length-5))}return null}},t.exports=h},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(a,t,e){"use strict";function r(g,m,u){this.name=g,this.dir=u.dir,this.date=u.date,this.comment=u.comment,this.unixPermissions=u.unixPermissions,this.dosPermissions=u.dosPermissions,this._data=m,this._dataBinary=u.binary,this.options={compression:u.compression,compressionOptions:u.compressionOptions}}var i=a("./stream/StreamHelper"),n=a("./stream/DataWorker"),s=a("./utf8"),d=a("./compressedObject"),f=a("./stream/GenericWorker");r.prototype={internalStream:function(g){var m=null,u="string";try{if(!g)throw new Error("No output type specified.");var c=(u=g.toLowerCase())==="string"||u==="text";u!=="binarystring"&&u!=="text"||(u="string"),m=this._decompressWorker();var v=!this._dataBinary;v&&!c&&(m=m.pipe(new s.Utf8EncodeWorker)),!v&&c&&(m=m.pipe(new s.Utf8DecodeWorker))}catch(T){(m=new f("error")).error(T)}return new i(m,u,"")},async:function(g,m){return this.internalStream(g).accumulate(m)},nodeStream:function(g,m){return this.internalStream(g||"nodebuffer").toNodejsStream(m)},_compressWorker:function(g,m){if(this._data instanceof d&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var u=this._decompressWorker();return this._dataBinary||(u=u.pipe(new s.Utf8EncodeWorker)),d.createWorkerFrom(u,g,m)},_decompressWorker:function(){return this._data instanceof d?this._data.getContentWorker():this._data instanceof f?this._data:new n(this._data)}};for(var _=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],h=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<_.length;p++)r.prototype[_[p]]=h;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(a,t,e){(function(r){"use strict";var i,n,s=r.MutationObserver||r.WebKitMutationObserver;if(s){var d=0,f=new s(g),_=r.document.createTextNode("");f.observe(_,{characterData:!0}),i=function(){_.data=d=++d%2}}else if(r.setImmediate||r.MessageChannel===void 0)i="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var m=r.document.createElement("script");m.onreadystatechange=function(){g(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},r.document.documentElement.appendChild(m)}:function(){setTimeout(g,0)};else{var h=new r.MessageChannel;h.port1.onmessage=g,i=function(){h.port2.postMessage(0)}}var p=[];function g(){var m,u;n=!0;for(var c=p.length;c;){for(u=p,p=[],m=-1;++m<c;)u[m]();c=p.length}n=!1}t.exports=function(m){p.push(m)!==1||n||i()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(a,t,e){"use strict";var r=a("immediate");function i(){}var n={},s=["REJECTED"],d=["FULFILLED"],f=["PENDING"];function _(c){if(typeof c!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,c!==i&&m(this,c)}function h(c,v,T){this.promise=c,typeof v=="function"&&(this.onFulfilled=v,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}function p(c,v,T){r(function(){var k;try{k=v(T)}catch(N){return n.reject(c,N)}k===c?n.reject(c,new TypeError("Cannot resolve promise with itself")):n.resolve(c,k)})}function g(c){var v=c&&c.then;if(c&&(typeof c=="object"||typeof c=="function")&&typeof v=="function")return function(){v.apply(c,arguments)}}function m(c,v){var T=!1;function k(O){T||(T=!0,n.reject(c,O))}function N(O){T||(T=!0,n.resolve(c,O))}var U=u(function(){v(N,k)});U.status==="error"&&k(U.value)}function u(c,v){var T={};try{T.value=c(v),T.status="success"}catch(k){T.status="error",T.value=k}return T}(t.exports=_).prototype.finally=function(c){if(typeof c!="function")return this;var v=this.constructor;return this.then(function(T){return v.resolve(c()).then(function(){return T})},function(T){return v.resolve(c()).then(function(){throw T})})},_.prototype.catch=function(c){return this.then(null,c)},_.prototype.then=function(c,v){if(typeof c!="function"&&this.state===d||typeof v!="function"&&this.state===s)return this;var T=new this.constructor(i);return this.state!==f?p(T,this.state===d?c:v,this.outcome):this.queue.push(new h(T,c,v)),T},h.prototype.callFulfilled=function(c){n.resolve(this.promise,c)},h.prototype.otherCallFulfilled=function(c){p(this.promise,this.onFulfilled,c)},h.prototype.callRejected=function(c){n.reject(this.promise,c)},h.prototype.otherCallRejected=function(c){p(this.promise,this.onRejected,c)},n.resolve=function(c,v){var T=u(g,v);if(T.status==="error")return n.reject(c,T.value);var k=T.value;if(k)m(c,k);else{c.state=d,c.outcome=v;for(var N=-1,U=c.queue.length;++N<U;)c.queue[N].callFulfilled(v)}return c},n.reject=function(c,v){c.state=s,c.outcome=v;for(var T=-1,k=c.queue.length;++T<k;)c.queue[T].callRejected(v);return c},_.resolve=function(c){return c instanceof this?c:n.resolve(new this(i),c)},_.reject=function(c){var v=new this(i);return n.reject(v,c)},_.all=function(c){var v=this;if(Object.prototype.toString.call(c)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=c.length,k=!1;if(!T)return this.resolve([]);for(var N=new Array(T),U=0,O=-1,G=new this(i);++O<T;)A(c[O],O);return G;function A($,re){v.resolve($).then(function(w){N[re]=w,++U!==T||k||(k=!0,n.resolve(G,N))},function(w){k||(k=!0,n.reject(G,w))})}},_.race=function(c){var v=this;if(Object.prototype.toString.call(c)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=c.length,k=!1;if(!T)return this.resolve([]);for(var N=-1,U=new this(i);++N<T;)O=c[N],v.resolve(O).then(function(G){k||(k=!0,n.resolve(U,G))},function(G){k||(k=!0,n.reject(U,G))});var O;return U}},{immediate:36}],38:[function(a,t,e){"use strict";var r={};(0,a("./lib/utils/common").assign)(r,a("./lib/deflate"),a("./lib/inflate"),a("./lib/zlib/constants")),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(a,t,e){"use strict";var r=a("./zlib/deflate"),i=a("./utils/common"),n=a("./utils/strings"),s=a("./zlib/messages"),d=a("./zlib/zstream"),f=Object.prototype.toString,_=0,h=-1,p=0,g=8;function m(c){if(!(this instanceof m))return new m(c);this.options=i.assign({level:h,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},c||{});var v=this.options;v.raw&&0<v.windowBits?v.windowBits=-v.windowBits:v.gzip&&0<v.windowBits&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var T=r.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(T!==_)throw new Error(s[T]);if(v.header&&r.deflateSetHeader(this.strm,v.header),v.dictionary){var k;if(k=typeof v.dictionary=="string"?n.string2buf(v.dictionary):f.call(v.dictionary)==="[object ArrayBuffer]"?new Uint8Array(v.dictionary):v.dictionary,(T=r.deflateSetDictionary(this.strm,k))!==_)throw new Error(s[T]);this._dict_set=!0}}function u(c,v){var T=new m(v);if(T.push(c,!0),T.err)throw T.msg||s[T.err];return T.result}m.prototype.push=function(c,v){var T,k,N=this.strm,U=this.options.chunkSize;if(this.ended)return!1;k=v===~~v?v:v===!0?4:0,typeof c=="string"?N.input=n.string2buf(c):f.call(c)==="[object ArrayBuffer]"?N.input=new Uint8Array(c):N.input=c,N.next_in=0,N.avail_in=N.input.length;do{if(N.avail_out===0&&(N.output=new i.Buf8(U),N.next_out=0,N.avail_out=U),(T=r.deflate(N,k))!==1&&T!==_)return this.onEnd(T),!(this.ended=!0);N.avail_out!==0&&(N.avail_in!==0||k!==4&&k!==2)||(this.options.to==="string"?this.onData(n.buf2binstring(i.shrinkBuf(N.output,N.next_out))):this.onData(i.shrinkBuf(N.output,N.next_out)))}while((0<N.avail_in||N.avail_out===0)&&T!==1);return k===4?(T=r.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===_):k!==2||(this.onEnd(_),!(N.avail_out=0))},m.prototype.onData=function(c){this.chunks.push(c)},m.prototype.onEnd=function(c){c===_&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg},e.Deflate=m,e.deflate=u,e.deflateRaw=function(c,v){return(v=v||{}).raw=!0,u(c,v)},e.gzip=function(c,v){return(v=v||{}).gzip=!0,u(c,v)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(a,t,e){"use strict";var r=a("./zlib/inflate"),i=a("./utils/common"),n=a("./utils/strings"),s=a("./zlib/constants"),d=a("./zlib/messages"),f=a("./zlib/zstream"),_=a("./zlib/gzheader"),h=Object.prototype.toString;function p(m){if(!(this instanceof p))return new p(m);this.options=i.assign({chunkSize:16384,windowBits:0,to:""},m||{});var u=this.options;u.raw&&0<=u.windowBits&&u.windowBits<16&&(u.windowBits=-u.windowBits,u.windowBits===0&&(u.windowBits=-15)),!(0<=u.windowBits&&u.windowBits<16)||m&&m.windowBits||(u.windowBits+=32),15<u.windowBits&&u.windowBits<48&&!(15&u.windowBits)&&(u.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var c=r.inflateInit2(this.strm,u.windowBits);if(c!==s.Z_OK)throw new Error(d[c]);this.header=new _,r.inflateGetHeader(this.strm,this.header)}function g(m,u){var c=new p(u);if(c.push(m,!0),c.err)throw c.msg||d[c.err];return c.result}p.prototype.push=function(m,u){var c,v,T,k,N,U,O=this.strm,G=this.options.chunkSize,A=this.options.dictionary,$=!1;if(this.ended)return!1;v=u===~~u?u:u===!0?s.Z_FINISH:s.Z_NO_FLUSH,typeof m=="string"?O.input=n.binstring2buf(m):h.call(m)==="[object ArrayBuffer]"?O.input=new Uint8Array(m):O.input=m,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new i.Buf8(G),O.next_out=0,O.avail_out=G),(c=r.inflate(O,s.Z_NO_FLUSH))===s.Z_NEED_DICT&&A&&(U=typeof A=="string"?n.string2buf(A):h.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,c=r.inflateSetDictionary(this.strm,U)),c===s.Z_BUF_ERROR&&$===!0&&(c=s.Z_OK,$=!1),c!==s.Z_STREAM_END&&c!==s.Z_OK)return this.onEnd(c),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&c!==s.Z_STREAM_END&&(O.avail_in!==0||v!==s.Z_FINISH&&v!==s.Z_SYNC_FLUSH)||(this.options.to==="string"?(T=n.utf8border(O.output,O.next_out),k=O.next_out-T,N=n.buf2string(O.output,T),O.next_out=k,O.avail_out=G-k,k&&i.arraySet(O.output,O.output,T,k,0),this.onData(N)):this.onData(i.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&($=!0)}while((0<O.avail_in||O.avail_out===0)&&c!==s.Z_STREAM_END);return c===s.Z_STREAM_END&&(v=s.Z_FINISH),v===s.Z_FINISH?(c=r.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===s.Z_OK):v!==s.Z_SYNC_FLUSH||(this.onEnd(s.Z_OK),!(O.avail_out=0))},p.prototype.onData=function(m){this.chunks.push(m)},p.prototype.onEnd=function(m){m===s.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},e.Inflate=p,e.inflate=g,e.inflateRaw=function(m,u){return(u=u||{}).raw=!0,g(m,u)},e.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(a,t,e){"use strict";var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";e.assign=function(s){for(var d=Array.prototype.slice.call(arguments,1);d.length;){var f=d.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var _ in f)f.hasOwnProperty(_)&&(s[_]=f[_])}}return s},e.shrinkBuf=function(s,d){return s.length===d?s:s.subarray?s.subarray(0,d):(s.length=d,s)};var i={arraySet:function(s,d,f,_,h){if(d.subarray&&s.subarray)s.set(d.subarray(f,f+_),h);else for(var p=0;p<_;p++)s[h+p]=d[f+p]},flattenChunks:function(s){var d,f,_,h,p,g;for(d=_=0,f=s.length;d<f;d++)_+=s[d].length;for(g=new Uint8Array(_),d=h=0,f=s.length;d<f;d++)p=s[d],g.set(p,h),h+=p.length;return g}},n={arraySet:function(s,d,f,_,h){for(var p=0;p<_;p++)s[h+p]=d[f+p]},flattenChunks:function(s){return[].concat.apply([],s)}};e.setTyped=function(s){s?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,i)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,n))},e.setTyped(r)},{}],42:[function(a,t,e){"use strict";var r=a("./common"),i=!0,n=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{n=!1}for(var s=new r.Buf8(256),d=0;d<256;d++)s[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;function f(_,h){if(h<65537&&(_.subarray&&n||!_.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(_,h));for(var p="",g=0;g<h;g++)p+=String.fromCharCode(_[g]);return p}s[254]=s[254]=1,e.string2buf=function(_){var h,p,g,m,u,c=_.length,v=0;for(m=0;m<c;m++)(64512&(p=_.charCodeAt(m)))==55296&&m+1<c&&(64512&(g=_.charCodeAt(m+1)))==56320&&(p=65536+(p-55296<<10)+(g-56320),m++),v+=p<128?1:p<2048?2:p<65536?3:4;for(h=new r.Buf8(v),m=u=0;u<v;m++)(64512&(p=_.charCodeAt(m)))==55296&&m+1<c&&(64512&(g=_.charCodeAt(m+1)))==56320&&(p=65536+(p-55296<<10)+(g-56320),m++),p<128?h[u++]=p:(p<2048?h[u++]=192|p>>>6:(p<65536?h[u++]=224|p>>>12:(h[u++]=240|p>>>18,h[u++]=128|p>>>12&63),h[u++]=128|p>>>6&63),h[u++]=128|63&p);return h},e.buf2binstring=function(_){return f(_,_.length)},e.binstring2buf=function(_){for(var h=new r.Buf8(_.length),p=0,g=h.length;p<g;p++)h[p]=_.charCodeAt(p);return h},e.buf2string=function(_,h){var p,g,m,u,c=h||_.length,v=new Array(2*c);for(p=g=0;p<c;)if((m=_[p++])<128)v[g++]=m;else if(4<(u=s[m]))v[g++]=65533,p+=u-1;else{for(m&=u===2?31:u===3?15:7;1<u&&p<c;)m=m<<6|63&_[p++],u--;1<u?v[g++]=65533:m<65536?v[g++]=m:(m-=65536,v[g++]=55296|m>>10&1023,v[g++]=56320|1023&m)}return f(v,g)},e.utf8border=function(_,h){var p;for((h=h||_.length)>_.length&&(h=_.length),p=h-1;0<=p&&(192&_[p])==128;)p--;return p<0||p===0?h:p+s[_[p]]>h?p:h}},{"./common":41}],43:[function(a,t,e){"use strict";t.exports=function(r,i,n,s){for(var d=65535&r|0,f=r>>>16&65535|0,_=0;n!==0;){for(n-=_=2e3<n?2e3:n;f=f+(d=d+i[s++]|0)|0,--_;);d%=65521,f%=65521}return d|f<<16|0}},{}],44:[function(a,t,e){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(a,t,e){"use strict";var r=function(){for(var i,n=[],s=0;s<256;s++){i=s;for(var d=0;d<8;d++)i=1&i?3988292384^i>>>1:i>>>1;n[s]=i}return n}();t.exports=function(i,n,s,d){var f=r,_=d+s;i^=-1;for(var h=d;h<_;h++)i=i>>>8^f[255&(i^n[h])];return-1^i}},{}],46:[function(a,t,e){"use strict";var r,i=a("../utils/common"),n=a("./trees"),s=a("./adler32"),d=a("./crc32"),f=a("./messages"),_=0,h=4,p=0,g=-2,m=-1,u=4,c=2,v=8,T=9,k=286,N=30,U=19,O=2*k+1,G=15,A=3,$=258,re=$+A+1,w=42,M=113,l=1,V=2,le=3,q=4;function de(o,R){return o.msg=f[R],R}function H(o){return(o<<1)-(4<o?9:0)}function ae(o){for(var R=o.length;0<=--R;)o[R]=0}function P(o){var R=o.state,L=R.pending;L>o.avail_out&&(L=o.avail_out),L!==0&&(i.arraySet(o.output,R.pending_buf,R.pending_out,L,o.next_out),o.next_out+=L,R.pending_out+=L,o.total_out+=L,o.avail_out-=L,R.pending-=L,R.pending===0&&(R.pending_out=0))}function E(o,R){n._tr_flush_block(o,0<=o.block_start?o.block_start:-1,o.strstart-o.block_start,R),o.block_start=o.strstart,P(o.strm)}function ie(o,R){o.pending_buf[o.pending++]=R}function Q(o,R){o.pending_buf[o.pending++]=R>>>8&255,o.pending_buf[o.pending++]=255&R}function X(o,R){var L,z,y=o.max_chain_length,x=o.strstart,W=o.prev_length,j=o.nice_match,I=o.strstart>o.w_size-re?o.strstart-(o.w_size-re):0,Z=o.window,Y=o.w_mask,K=o.prev,te=o.strstart+$,he=Z[x+W-1],ce=Z[x+W];o.prev_length>=o.good_match&&(y>>=2),j>o.lookahead&&(j=o.lookahead);do if(Z[(L=R)+W]===ce&&Z[L+W-1]===he&&Z[L]===Z[x]&&Z[++L]===Z[x+1]){x+=2,L++;do;while(Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&Z[++x]===Z[++L]&&x<te);if(z=$-(te-x),x=te-$,W<z){if(o.match_start=R,j<=(W=z))break;he=Z[x+W-1],ce=Z[x+W]}}while((R=K[R&Y])>I&&--y!=0);return W<=o.lookahead?W:o.lookahead}function Ce(o){var R,L,z,y,x,W,j,I,Z,Y,K=o.w_size;do{if(y=o.window_size-o.lookahead-o.strstart,o.strstart>=K+(K-re)){for(i.arraySet(o.window,o.window,K,K,0),o.match_start-=K,o.strstart-=K,o.block_start-=K,R=L=o.hash_size;z=o.head[--R],o.head[R]=K<=z?z-K:0,--L;);for(R=L=K;z=o.prev[--R],o.prev[R]=K<=z?z-K:0,--L;);y+=K}if(o.strm.avail_in===0)break;if(W=o.strm,j=o.window,I=o.strstart+o.lookahead,Z=y,Y=void 0,Y=W.avail_in,Z<Y&&(Y=Z),L=Y===0?0:(W.avail_in-=Y,i.arraySet(j,W.input,W.next_in,Y,I),W.state.wrap===1?W.adler=s(W.adler,j,Y,I):W.state.wrap===2&&(W.adler=d(W.adler,j,Y,I)),W.next_in+=Y,W.total_in+=Y,Y),o.lookahead+=L,o.lookahead+o.insert>=A)for(x=o.strstart-o.insert,o.ins_h=o.window[x],o.ins_h=(o.ins_h<<o.hash_shift^o.window[x+1])&o.hash_mask;o.insert&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[x+A-1])&o.hash_mask,o.prev[x&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=x,x++,o.insert--,!(o.lookahead+o.insert<A)););}while(o.lookahead<re&&o.strm.avail_in!==0)}function Ne(o,R){for(var L,z;;){if(o.lookahead<re){if(Ce(o),o.lookahead<re&&R===_)return l;if(o.lookahead===0)break}if(L=0,o.lookahead>=A&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+A-1])&o.hash_mask,L=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),L!==0&&o.strstart-L<=o.w_size-re&&(o.match_length=X(o,L)),o.match_length>=A)if(z=n._tr_tally(o,o.strstart-o.match_start,o.match_length-A),o.lookahead-=o.match_length,o.match_length<=o.max_lazy_match&&o.lookahead>=A){for(o.match_length--;o.strstart++,o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+A-1])&o.hash_mask,L=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart,--o.match_length!=0;);o.strstart++}else o.strstart+=o.match_length,o.match_length=0,o.ins_h=o.window[o.strstart],o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+1])&o.hash_mask;else z=n._tr_tally(o,0,o.window[o.strstart]),o.lookahead--,o.strstart++;if(z&&(E(o,!1),o.strm.avail_out===0))return l}return o.insert=o.strstart<A-1?o.strstart:A-1,R===h?(E(o,!0),o.strm.avail_out===0?le:q):o.last_lit&&(E(o,!1),o.strm.avail_out===0)?l:V}function pe(o,R){for(var L,z,y;;){if(o.lookahead<re){if(Ce(o),o.lookahead<re&&R===_)return l;if(o.lookahead===0)break}if(L=0,o.lookahead>=A&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+A-1])&o.hash_mask,L=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),o.prev_length=o.match_length,o.prev_match=o.match_start,o.match_length=A-1,L!==0&&o.prev_length<o.max_lazy_match&&o.strstart-L<=o.w_size-re&&(o.match_length=X(o,L),o.match_length<=5&&(o.strategy===1||o.match_length===A&&4096<o.strstart-o.match_start)&&(o.match_length=A-1)),o.prev_length>=A&&o.match_length<=o.prev_length){for(y=o.strstart+o.lookahead-A,z=n._tr_tally(o,o.strstart-1-o.prev_match,o.prev_length-A),o.lookahead-=o.prev_length-1,o.prev_length-=2;++o.strstart<=y&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+A-1])&o.hash_mask,L=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),--o.prev_length!=0;);if(o.match_available=0,o.match_length=A-1,o.strstart++,z&&(E(o,!1),o.strm.avail_out===0))return l}else if(o.match_available){if((z=n._tr_tally(o,0,o.window[o.strstart-1]))&&E(o,!1),o.strstart++,o.lookahead--,o.strm.avail_out===0)return l}else o.match_available=1,o.strstart++,o.lookahead--}return o.match_available&&(z=n._tr_tally(o,0,o.window[o.strstart-1]),o.match_available=0),o.insert=o.strstart<A-1?o.strstart:A-1,R===h?(E(o,!0),o.strm.avail_out===0?le:q):o.last_lit&&(E(o,!1),o.strm.avail_out===0)?l:V}function fe(o,R,L,z,y){this.good_length=o,this.max_lazy=R,this.nice_length=L,this.max_chain=z,this.func=y}function xe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*O),this.dyn_dtree=new i.Buf16(2*(2*N+1)),this.bl_tree=new i.Buf16(2*(2*U+1)),ae(this.dyn_ltree),ae(this.dyn_dtree),ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(G+1),this.heap=new i.Buf16(2*k+1),ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*k+1),ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function be(o){var R;return o&&o.state?(o.total_in=o.total_out=0,o.data_type=c,(R=o.state).pending=0,R.pending_out=0,R.wrap<0&&(R.wrap=-R.wrap),R.status=R.wrap?w:M,o.adler=R.wrap===2?0:1,R.last_flush=_,n._tr_init(R),p):de(o,g)}function Oe(o){var R=be(o);return R===p&&function(L){L.window_size=2*L.w_size,ae(L.head),L.max_lazy_match=r[L.level].max_lazy,L.good_match=r[L.level].good_length,L.nice_match=r[L.level].nice_length,L.max_chain_length=r[L.level].max_chain,L.strstart=0,L.block_start=0,L.lookahead=0,L.insert=0,L.match_length=L.prev_length=A-1,L.match_available=0,L.ins_h=0}(o.state),R}function Fe(o,R,L,z,y,x){if(!o)return g;var W=1;if(R===m&&(R=6),z<0?(W=0,z=-z):15<z&&(W=2,z-=16),y<1||T<y||L!==v||z<8||15<z||R<0||9<R||x<0||u<x)return de(o,g);z===8&&(z=9);var j=new xe;return(o.state=j).strm=o,j.wrap=W,j.gzhead=null,j.w_bits=z,j.w_size=1<<j.w_bits,j.w_mask=j.w_size-1,j.hash_bits=y+7,j.hash_size=1<<j.hash_bits,j.hash_mask=j.hash_size-1,j.hash_shift=~~((j.hash_bits+A-1)/A),j.window=new i.Buf8(2*j.w_size),j.head=new i.Buf16(j.hash_size),j.prev=new i.Buf16(j.w_size),j.lit_bufsize=1<<y+6,j.pending_buf_size=4*j.lit_bufsize,j.pending_buf=new i.Buf8(j.pending_buf_size),j.d_buf=1*j.lit_bufsize,j.l_buf=3*j.lit_bufsize,j.level=R,j.strategy=x,j.method=L,Oe(o)}r=[new fe(0,0,0,0,function(o,R){var L=65535;for(L>o.pending_buf_size-5&&(L=o.pending_buf_size-5);;){if(o.lookahead<=1){if(Ce(o),o.lookahead===0&&R===_)return l;if(o.lookahead===0)break}o.strstart+=o.lookahead,o.lookahead=0;var z=o.block_start+L;if((o.strstart===0||o.strstart>=z)&&(o.lookahead=o.strstart-z,o.strstart=z,E(o,!1),o.strm.avail_out===0)||o.strstart-o.block_start>=o.w_size-re&&(E(o,!1),o.strm.avail_out===0))return l}return o.insert=0,R===h?(E(o,!0),o.strm.avail_out===0?le:q):(o.strstart>o.block_start&&(E(o,!1),o.strm.avail_out),l)}),new fe(4,4,8,4,Ne),new fe(4,5,16,8,Ne),new fe(4,6,32,32,Ne),new fe(4,4,16,16,pe),new fe(8,16,32,32,pe),new fe(8,16,128,128,pe),new fe(8,32,128,256,pe),new fe(32,128,258,1024,pe),new fe(32,258,258,4096,pe)],e.deflateInit=function(o,R){return Fe(o,R,v,15,8,0)},e.deflateInit2=Fe,e.deflateReset=Oe,e.deflateResetKeep=be,e.deflateSetHeader=function(o,R){return o&&o.state?o.state.wrap!==2?g:(o.state.gzhead=R,p):g},e.deflate=function(o,R){var L,z,y,x;if(!o||!o.state||5<R||R<0)return o?de(o,g):g;if(z=o.state,!o.output||!o.input&&o.avail_in!==0||z.status===666&&R!==h)return de(o,o.avail_out===0?-5:g);if(z.strm=o,L=z.last_flush,z.last_flush=R,z.status===w)if(z.wrap===2)o.adler=0,ie(z,31),ie(z,139),ie(z,8),z.gzhead?(ie(z,(z.gzhead.text?1:0)+(z.gzhead.hcrc?2:0)+(z.gzhead.extra?4:0)+(z.gzhead.name?8:0)+(z.gzhead.comment?16:0)),ie(z,255&z.gzhead.time),ie(z,z.gzhead.time>>8&255),ie(z,z.gzhead.time>>16&255),ie(z,z.gzhead.time>>24&255),ie(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),ie(z,255&z.gzhead.os),z.gzhead.extra&&z.gzhead.extra.length&&(ie(z,255&z.gzhead.extra.length),ie(z,z.gzhead.extra.length>>8&255)),z.gzhead.hcrc&&(o.adler=d(o.adler,z.pending_buf,z.pending,0)),z.gzindex=0,z.status=69):(ie(z,0),ie(z,0),ie(z,0),ie(z,0),ie(z,0),ie(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),ie(z,3),z.status=M);else{var W=v+(z.w_bits-8<<4)<<8;W|=(2<=z.strategy||z.level<2?0:z.level<6?1:z.level===6?2:3)<<6,z.strstart!==0&&(W|=32),W+=31-W%31,z.status=M,Q(z,W),z.strstart!==0&&(Q(z,o.adler>>>16),Q(z,65535&o.adler)),o.adler=1}if(z.status===69)if(z.gzhead.extra){for(y=z.pending;z.gzindex<(65535&z.gzhead.extra.length)&&(z.pending!==z.pending_buf_size||(z.gzhead.hcrc&&z.pending>y&&(o.adler=d(o.adler,z.pending_buf,z.pending-y,y)),P(o),y=z.pending,z.pending!==z.pending_buf_size));)ie(z,255&z.gzhead.extra[z.gzindex]),z.gzindex++;z.gzhead.hcrc&&z.pending>y&&(o.adler=d(o.adler,z.pending_buf,z.pending-y,y)),z.gzindex===z.gzhead.extra.length&&(z.gzindex=0,z.status=73)}else z.status=73;if(z.status===73)if(z.gzhead.name){y=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>y&&(o.adler=d(o.adler,z.pending_buf,z.pending-y,y)),P(o),y=z.pending,z.pending===z.pending_buf_size)){x=1;break}x=z.gzindex<z.gzhead.name.length?255&z.gzhead.name.charCodeAt(z.gzindex++):0,ie(z,x)}while(x!==0);z.gzhead.hcrc&&z.pending>y&&(o.adler=d(o.adler,z.pending_buf,z.pending-y,y)),x===0&&(z.gzindex=0,z.status=91)}else z.status=91;if(z.status===91)if(z.gzhead.comment){y=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>y&&(o.adler=d(o.adler,z.pending_buf,z.pending-y,y)),P(o),y=z.pending,z.pending===z.pending_buf_size)){x=1;break}x=z.gzindex<z.gzhead.comment.length?255&z.gzhead.comment.charCodeAt(z.gzindex++):0,ie(z,x)}while(x!==0);z.gzhead.hcrc&&z.pending>y&&(o.adler=d(o.adler,z.pending_buf,z.pending-y,y)),x===0&&(z.status=103)}else z.status=103;if(z.status===103&&(z.gzhead.hcrc?(z.pending+2>z.pending_buf_size&&P(o),z.pending+2<=z.pending_buf_size&&(ie(z,255&o.adler),ie(z,o.adler>>8&255),o.adler=0,z.status=M)):z.status=M),z.pending!==0){if(P(o),o.avail_out===0)return z.last_flush=-1,p}else if(o.avail_in===0&&H(R)<=H(L)&&R!==h)return de(o,-5);if(z.status===666&&o.avail_in!==0)return de(o,-5);if(o.avail_in!==0||z.lookahead!==0||R!==_&&z.status!==666){var j=z.strategy===2?function(I,Z){for(var Y;;){if(I.lookahead===0&&(Ce(I),I.lookahead===0)){if(Z===_)return l;break}if(I.match_length=0,Y=n._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++,Y&&(E(I,!1),I.strm.avail_out===0))return l}return I.insert=0,Z===h?(E(I,!0),I.strm.avail_out===0?le:q):I.last_lit&&(E(I,!1),I.strm.avail_out===0)?l:V}(z,R):z.strategy===3?function(I,Z){for(var Y,K,te,he,ce=I.window;;){if(I.lookahead<=$){if(Ce(I),I.lookahead<=$&&Z===_)return l;if(I.lookahead===0)break}if(I.match_length=0,I.lookahead>=A&&0<I.strstart&&(K=ce[te=I.strstart-1])===ce[++te]&&K===ce[++te]&&K===ce[++te]){he=I.strstart+$;do;while(K===ce[++te]&&K===ce[++te]&&K===ce[++te]&&K===ce[++te]&&K===ce[++te]&&K===ce[++te]&&K===ce[++te]&&K===ce[++te]&&te<he);I.match_length=$-(he-te),I.match_length>I.lookahead&&(I.match_length=I.lookahead)}if(I.match_length>=A?(Y=n._tr_tally(I,1,I.match_length-A),I.lookahead-=I.match_length,I.strstart+=I.match_length,I.match_length=0):(Y=n._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++),Y&&(E(I,!1),I.strm.avail_out===0))return l}return I.insert=0,Z===h?(E(I,!0),I.strm.avail_out===0?le:q):I.last_lit&&(E(I,!1),I.strm.avail_out===0)?l:V}(z,R):r[z.level].func(z,R);if(j!==le&&j!==q||(z.status=666),j===l||j===le)return o.avail_out===0&&(z.last_flush=-1),p;if(j===V&&(R===1?n._tr_align(z):R!==5&&(n._tr_stored_block(z,0,0,!1),R===3&&(ae(z.head),z.lookahead===0&&(z.strstart=0,z.block_start=0,z.insert=0))),P(o),o.avail_out===0))return z.last_flush=-1,p}return R!==h?p:z.wrap<=0?1:(z.wrap===2?(ie(z,255&o.adler),ie(z,o.adler>>8&255),ie(z,o.adler>>16&255),ie(z,o.adler>>24&255),ie(z,255&o.total_in),ie(z,o.total_in>>8&255),ie(z,o.total_in>>16&255),ie(z,o.total_in>>24&255)):(Q(z,o.adler>>>16),Q(z,65535&o.adler)),P(o),0<z.wrap&&(z.wrap=-z.wrap),z.pending!==0?p:1)},e.deflateEnd=function(o){var R;return o&&o.state?(R=o.state.status)!==w&&R!==69&&R!==73&&R!==91&&R!==103&&R!==M&&R!==666?de(o,g):(o.state=null,R===M?de(o,-3):p):g},e.deflateSetDictionary=function(o,R){var L,z,y,x,W,j,I,Z,Y=R.length;if(!o||!o.state||(x=(L=o.state).wrap)===2||x===1&&L.status!==w||L.lookahead)return g;for(x===1&&(o.adler=s(o.adler,R,Y,0)),L.wrap=0,Y>=L.w_size&&(x===0&&(ae(L.head),L.strstart=0,L.block_start=0,L.insert=0),Z=new i.Buf8(L.w_size),i.arraySet(Z,R,Y-L.w_size,L.w_size,0),R=Z,Y=L.w_size),W=o.avail_in,j=o.next_in,I=o.input,o.avail_in=Y,o.next_in=0,o.input=R,Ce(L);L.lookahead>=A;){for(z=L.strstart,y=L.lookahead-(A-1);L.ins_h=(L.ins_h<<L.hash_shift^L.window[z+A-1])&L.hash_mask,L.prev[z&L.w_mask]=L.head[L.ins_h],L.head[L.ins_h]=z,z++,--y;);L.strstart=z,L.lookahead=A-1,Ce(L)}return L.strstart+=L.lookahead,L.block_start=L.strstart,L.insert=L.lookahead,L.lookahead=0,L.match_length=L.prev_length=A-1,L.match_available=0,o.next_in=j,o.input=I,o.avail_in=W,L.wrap=x,p},e.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(a,t,e){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(a,t,e){"use strict";t.exports=function(r,i){var n,s,d,f,_,h,p,g,m,u,c,v,T,k,N,U,O,G,A,$,re,w,M,l,V;n=r.state,s=r.next_in,l=r.input,d=s+(r.avail_in-5),f=r.next_out,V=r.output,_=f-(i-r.avail_out),h=f+(r.avail_out-257),p=n.dmax,g=n.wsize,m=n.whave,u=n.wnext,c=n.window,v=n.hold,T=n.bits,k=n.lencode,N=n.distcode,U=(1<<n.lenbits)-1,O=(1<<n.distbits)-1;e:do{T<15&&(v+=l[s++]<<T,T+=8,v+=l[s++]<<T,T+=8),G=k[v&U];t:for(;;){if(v>>>=A=G>>>24,T-=A,(A=G>>>16&255)===0)V[f++]=65535&G;else{if(!(16&A)){if(!(64&A)){G=k[(65535&G)+(v&(1<<A)-1)];continue t}if(32&A){n.mode=12;break e}r.msg="invalid literal/length code",n.mode=30;break e}$=65535&G,(A&=15)&&(T<A&&(v+=l[s++]<<T,T+=8),$+=v&(1<<A)-1,v>>>=A,T-=A),T<15&&(v+=l[s++]<<T,T+=8,v+=l[s++]<<T,T+=8),G=N[v&O];i:for(;;){if(v>>>=A=G>>>24,T-=A,!(16&(A=G>>>16&255))){if(!(64&A)){G=N[(65535&G)+(v&(1<<A)-1)];continue i}r.msg="invalid distance code",n.mode=30;break e}if(re=65535&G,T<(A&=15)&&(v+=l[s++]<<T,(T+=8)<A&&(v+=l[s++]<<T,T+=8)),p<(re+=v&(1<<A)-1)){r.msg="invalid distance too far back",n.mode=30;break e}if(v>>>=A,T-=A,(A=f-_)<re){if(m<(A=re-A)&&n.sane){r.msg="invalid distance too far back",n.mode=30;break e}if(M=c,(w=0)===u){if(w+=g-A,A<$){for($-=A;V[f++]=c[w++],--A;);w=f-re,M=V}}else if(u<A){if(w+=g+u-A,(A-=u)<$){for($-=A;V[f++]=c[w++],--A;);if(w=0,u<$){for($-=A=u;V[f++]=c[w++],--A;);w=f-re,M=V}}}else if(w+=u-A,A<$){for($-=A;V[f++]=c[w++],--A;);w=f-re,M=V}for(;2<$;)V[f++]=M[w++],V[f++]=M[w++],V[f++]=M[w++],$-=3;$&&(V[f++]=M[w++],1<$&&(V[f++]=M[w++]))}else{for(w=f-re;V[f++]=V[w++],V[f++]=V[w++],V[f++]=V[w++],2<($-=3););$&&(V[f++]=V[w++],1<$&&(V[f++]=V[w++]))}break}}break}}while(s<d&&f<h);s-=$=T>>3,v&=(1<<(T-=$<<3))-1,r.next_in=s,r.next_out=f,r.avail_in=s<d?d-s+5:5-(s-d),r.avail_out=f<h?h-f+257:257-(f-h),n.hold=v,n.bits=T}},{}],49:[function(a,t,e){"use strict";var r=a("../utils/common"),i=a("./adler32"),n=a("./crc32"),s=a("./inffast"),d=a("./inftrees"),f=1,_=2,h=0,p=-2,g=1,m=852,u=592;function c(w){return(w>>>24&255)+(w>>>8&65280)+((65280&w)<<8)+((255&w)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function T(w){var M;return w&&w.state?(M=w.state,w.total_in=w.total_out=M.total=0,w.msg="",M.wrap&&(w.adler=1&M.wrap),M.mode=g,M.last=0,M.havedict=0,M.dmax=32768,M.head=null,M.hold=0,M.bits=0,M.lencode=M.lendyn=new r.Buf32(m),M.distcode=M.distdyn=new r.Buf32(u),M.sane=1,M.back=-1,h):p}function k(w){var M;return w&&w.state?((M=w.state).wsize=0,M.whave=0,M.wnext=0,T(w)):p}function N(w,M){var l,V;return w&&w.state?(V=w.state,M<0?(l=0,M=-M):(l=1+(M>>4),M<48&&(M&=15)),M&&(M<8||15<M)?p:(V.window!==null&&V.wbits!==M&&(V.window=null),V.wrap=l,V.wbits=M,k(w))):p}function U(w,M){var l,V;return w?(V=new v,(w.state=V).window=null,(l=N(w,M))!==h&&(w.state=null),l):p}var O,G,A=!0;function $(w){if(A){var M;for(O=new r.Buf32(512),G=new r.Buf32(32),M=0;M<144;)w.lens[M++]=8;for(;M<256;)w.lens[M++]=9;for(;M<280;)w.lens[M++]=7;for(;M<288;)w.lens[M++]=8;for(d(f,w.lens,0,288,O,0,w.work,{bits:9}),M=0;M<32;)w.lens[M++]=5;d(_,w.lens,0,32,G,0,w.work,{bits:5}),A=!1}w.lencode=O,w.lenbits=9,w.distcode=G,w.distbits=5}function re(w,M,l,V){var le,q=w.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new r.Buf8(q.wsize)),V>=q.wsize?(r.arraySet(q.window,M,l-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):(V<(le=q.wsize-q.wnext)&&(le=V),r.arraySet(q.window,M,l-V,le,q.wnext),(V-=le)?(r.arraySet(q.window,M,l-V,V,0),q.wnext=V,q.whave=q.wsize):(q.wnext+=le,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=le))),0}e.inflateReset=k,e.inflateReset2=N,e.inflateResetKeep=T,e.inflateInit=function(w){return U(w,15)},e.inflateInit2=U,e.inflate=function(w,M){var l,V,le,q,de,H,ae,P,E,ie,Q,X,Ce,Ne,pe,fe,xe,be,Oe,Fe,o,R,L,z,y=0,x=new r.Buf8(4),W=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!w||!w.state||!w.output||!w.input&&w.avail_in!==0)return p;(l=w.state).mode===12&&(l.mode=13),de=w.next_out,le=w.output,ae=w.avail_out,q=w.next_in,V=w.input,H=w.avail_in,P=l.hold,E=l.bits,ie=H,Q=ae,R=h;e:for(;;)switch(l.mode){case g:if(l.wrap===0){l.mode=13;break}for(;E<16;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}if(2&l.wrap&&P===35615){x[l.check=0]=255&P,x[1]=P>>>8&255,l.check=n(l.check,x,2,0),E=P=0,l.mode=2;break}if(l.flags=0,l.head&&(l.head.done=!1),!(1&l.wrap)||(((255&P)<<8)+(P>>8))%31){w.msg="incorrect header check",l.mode=30;break}if((15&P)!=8){w.msg="unknown compression method",l.mode=30;break}if(E-=4,o=8+(15&(P>>>=4)),l.wbits===0)l.wbits=o;else if(o>l.wbits){w.msg="invalid window size",l.mode=30;break}l.dmax=1<<o,w.adler=l.check=1,l.mode=512&P?10:12,E=P=0;break;case 2:for(;E<16;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}if(l.flags=P,(255&l.flags)!=8){w.msg="unknown compression method",l.mode=30;break}if(57344&l.flags){w.msg="unknown header flags set",l.mode=30;break}l.head&&(l.head.text=P>>8&1),512&l.flags&&(x[0]=255&P,x[1]=P>>>8&255,l.check=n(l.check,x,2,0)),E=P=0,l.mode=3;case 3:for(;E<32;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}l.head&&(l.head.time=P),512&l.flags&&(x[0]=255&P,x[1]=P>>>8&255,x[2]=P>>>16&255,x[3]=P>>>24&255,l.check=n(l.check,x,4,0)),E=P=0,l.mode=4;case 4:for(;E<16;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}l.head&&(l.head.xflags=255&P,l.head.os=P>>8),512&l.flags&&(x[0]=255&P,x[1]=P>>>8&255,l.check=n(l.check,x,2,0)),E=P=0,l.mode=5;case 5:if(1024&l.flags){for(;E<16;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}l.length=P,l.head&&(l.head.extra_len=P),512&l.flags&&(x[0]=255&P,x[1]=P>>>8&255,l.check=n(l.check,x,2,0)),E=P=0}else l.head&&(l.head.extra=null);l.mode=6;case 6:if(1024&l.flags&&(H<(X=l.length)&&(X=H),X&&(l.head&&(o=l.head.extra_len-l.length,l.head.extra||(l.head.extra=new Array(l.head.extra_len)),r.arraySet(l.head.extra,V,q,X,o)),512&l.flags&&(l.check=n(l.check,V,X,q)),H-=X,q+=X,l.length-=X),l.length))break e;l.length=0,l.mode=7;case 7:if(2048&l.flags){if(H===0)break e;for(X=0;o=V[q+X++],l.head&&o&&l.length<65536&&(l.head.name+=String.fromCharCode(o)),o&&X<H;);if(512&l.flags&&(l.check=n(l.check,V,X,q)),H-=X,q+=X,o)break e}else l.head&&(l.head.name=null);l.length=0,l.mode=8;case 8:if(4096&l.flags){if(H===0)break e;for(X=0;o=V[q+X++],l.head&&o&&l.length<65536&&(l.head.comment+=String.fromCharCode(o)),o&&X<H;);if(512&l.flags&&(l.check=n(l.check,V,X,q)),H-=X,q+=X,o)break e}else l.head&&(l.head.comment=null);l.mode=9;case 9:if(512&l.flags){for(;E<16;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}if(P!==(65535&l.check)){w.msg="header crc mismatch",l.mode=30;break}E=P=0}l.head&&(l.head.hcrc=l.flags>>9&1,l.head.done=!0),w.adler=l.check=0,l.mode=12;break;case 10:for(;E<32;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}w.adler=l.check=c(P),E=P=0,l.mode=11;case 11:if(l.havedict===0)return w.next_out=de,w.avail_out=ae,w.next_in=q,w.avail_in=H,l.hold=P,l.bits=E,2;w.adler=l.check=1,l.mode=12;case 12:if(M===5||M===6)break e;case 13:if(l.last){P>>>=7&E,E-=7&E,l.mode=27;break}for(;E<3;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}switch(l.last=1&P,E-=1,3&(P>>>=1)){case 0:l.mode=14;break;case 1:if($(l),l.mode=20,M!==6)break;P>>>=2,E-=2;break e;case 2:l.mode=17;break;case 3:w.msg="invalid block type",l.mode=30}P>>>=2,E-=2;break;case 14:for(P>>>=7&E,E-=7&E;E<32;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}if((65535&P)!=(P>>>16^65535)){w.msg="invalid stored block lengths",l.mode=30;break}if(l.length=65535&P,E=P=0,l.mode=15,M===6)break e;case 15:l.mode=16;case 16:if(X=l.length){if(H<X&&(X=H),ae<X&&(X=ae),X===0)break e;r.arraySet(le,V,q,X,de),H-=X,q+=X,ae-=X,de+=X,l.length-=X;break}l.mode=12;break;case 17:for(;E<14;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}if(l.nlen=257+(31&P),P>>>=5,E-=5,l.ndist=1+(31&P),P>>>=5,E-=5,l.ncode=4+(15&P),P>>>=4,E-=4,286<l.nlen||30<l.ndist){w.msg="too many length or distance symbols",l.mode=30;break}l.have=0,l.mode=18;case 18:for(;l.have<l.ncode;){for(;E<3;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}l.lens[W[l.have++]]=7&P,P>>>=3,E-=3}for(;l.have<19;)l.lens[W[l.have++]]=0;if(l.lencode=l.lendyn,l.lenbits=7,L={bits:l.lenbits},R=d(0,l.lens,0,19,l.lencode,0,l.work,L),l.lenbits=L.bits,R){w.msg="invalid code lengths set",l.mode=30;break}l.have=0,l.mode=19;case 19:for(;l.have<l.nlen+l.ndist;){for(;fe=(y=l.lencode[P&(1<<l.lenbits)-1])>>>16&255,xe=65535&y,!((pe=y>>>24)<=E);){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}if(xe<16)P>>>=pe,E-=pe,l.lens[l.have++]=xe;else{if(xe===16){for(z=pe+2;E<z;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}if(P>>>=pe,E-=pe,l.have===0){w.msg="invalid bit length repeat",l.mode=30;break}o=l.lens[l.have-1],X=3+(3&P),P>>>=2,E-=2}else if(xe===17){for(z=pe+3;E<z;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}E-=pe,o=0,X=3+(7&(P>>>=pe)),P>>>=3,E-=3}else{for(z=pe+7;E<z;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}E-=pe,o=0,X=11+(127&(P>>>=pe)),P>>>=7,E-=7}if(l.have+X>l.nlen+l.ndist){w.msg="invalid bit length repeat",l.mode=30;break}for(;X--;)l.lens[l.have++]=o}}if(l.mode===30)break;if(l.lens[256]===0){w.msg="invalid code -- missing end-of-block",l.mode=30;break}if(l.lenbits=9,L={bits:l.lenbits},R=d(f,l.lens,0,l.nlen,l.lencode,0,l.work,L),l.lenbits=L.bits,R){w.msg="invalid literal/lengths set",l.mode=30;break}if(l.distbits=6,l.distcode=l.distdyn,L={bits:l.distbits},R=d(_,l.lens,l.nlen,l.ndist,l.distcode,0,l.work,L),l.distbits=L.bits,R){w.msg="invalid distances set",l.mode=30;break}if(l.mode=20,M===6)break e;case 20:l.mode=21;case 21:if(6<=H&&258<=ae){w.next_out=de,w.avail_out=ae,w.next_in=q,w.avail_in=H,l.hold=P,l.bits=E,s(w,Q),de=w.next_out,le=w.output,ae=w.avail_out,q=w.next_in,V=w.input,H=w.avail_in,P=l.hold,E=l.bits,l.mode===12&&(l.back=-1);break}for(l.back=0;fe=(y=l.lencode[P&(1<<l.lenbits)-1])>>>16&255,xe=65535&y,!((pe=y>>>24)<=E);){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}if(fe&&!(240&fe)){for(be=pe,Oe=fe,Fe=xe;fe=(y=l.lencode[Fe+((P&(1<<be+Oe)-1)>>be)])>>>16&255,xe=65535&y,!(be+(pe=y>>>24)<=E);){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}P>>>=be,E-=be,l.back+=be}if(P>>>=pe,E-=pe,l.back+=pe,l.length=xe,fe===0){l.mode=26;break}if(32&fe){l.back=-1,l.mode=12;break}if(64&fe){w.msg="invalid literal/length code",l.mode=30;break}l.extra=15&fe,l.mode=22;case 22:if(l.extra){for(z=l.extra;E<z;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}l.length+=P&(1<<l.extra)-1,P>>>=l.extra,E-=l.extra,l.back+=l.extra}l.was=l.length,l.mode=23;case 23:for(;fe=(y=l.distcode[P&(1<<l.distbits)-1])>>>16&255,xe=65535&y,!((pe=y>>>24)<=E);){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}if(!(240&fe)){for(be=pe,Oe=fe,Fe=xe;fe=(y=l.distcode[Fe+((P&(1<<be+Oe)-1)>>be)])>>>16&255,xe=65535&y,!(be+(pe=y>>>24)<=E);){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}P>>>=be,E-=be,l.back+=be}if(P>>>=pe,E-=pe,l.back+=pe,64&fe){w.msg="invalid distance code",l.mode=30;break}l.offset=xe,l.extra=15&fe,l.mode=24;case 24:if(l.extra){for(z=l.extra;E<z;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}l.offset+=P&(1<<l.extra)-1,P>>>=l.extra,E-=l.extra,l.back+=l.extra}if(l.offset>l.dmax){w.msg="invalid distance too far back",l.mode=30;break}l.mode=25;case 25:if(ae===0)break e;if(X=Q-ae,l.offset>X){if((X=l.offset-X)>l.whave&&l.sane){w.msg="invalid distance too far back",l.mode=30;break}Ce=X>l.wnext?(X-=l.wnext,l.wsize-X):l.wnext-X,X>l.length&&(X=l.length),Ne=l.window}else Ne=le,Ce=de-l.offset,X=l.length;for(ae<X&&(X=ae),ae-=X,l.length-=X;le[de++]=Ne[Ce++],--X;);l.length===0&&(l.mode=21);break;case 26:if(ae===0)break e;le[de++]=l.length,ae--,l.mode=21;break;case 27:if(l.wrap){for(;E<32;){if(H===0)break e;H--,P|=V[q++]<<E,E+=8}if(Q-=ae,w.total_out+=Q,l.total+=Q,Q&&(w.adler=l.check=l.flags?n(l.check,le,Q,de-Q):i(l.check,le,Q,de-Q)),Q=ae,(l.flags?P:c(P))!==l.check){w.msg="incorrect data check",l.mode=30;break}E=P=0}l.mode=28;case 28:if(l.wrap&&l.flags){for(;E<32;){if(H===0)break e;H--,P+=V[q++]<<E,E+=8}if(P!==(4294967295&l.total)){w.msg="incorrect length check",l.mode=30;break}E=P=0}l.mode=29;case 29:R=1;break e;case 30:R=-3;break e;case 31:return-4;case 32:default:return p}return w.next_out=de,w.avail_out=ae,w.next_in=q,w.avail_in=H,l.hold=P,l.bits=E,(l.wsize||Q!==w.avail_out&&l.mode<30&&(l.mode<27||M!==4))&&re(w,w.output,w.next_out,Q-w.avail_out)?(l.mode=31,-4):(ie-=w.avail_in,Q-=w.avail_out,w.total_in+=ie,w.total_out+=Q,l.total+=Q,l.wrap&&Q&&(w.adler=l.check=l.flags?n(l.check,le,Q,w.next_out-Q):i(l.check,le,Q,w.next_out-Q)),w.data_type=l.bits+(l.last?64:0)+(l.mode===12?128:0)+(l.mode===20||l.mode===15?256:0),(ie==0&&Q===0||M===4)&&R===h&&(R=-5),R)},e.inflateEnd=function(w){if(!w||!w.state)return p;var M=w.state;return M.window&&(M.window=null),w.state=null,h},e.inflateGetHeader=function(w,M){var l;return w&&w.state&&2&(l=w.state).wrap?((l.head=M).done=!1,h):p},e.inflateSetDictionary=function(w,M){var l,V=M.length;return w&&w.state?(l=w.state).wrap!==0&&l.mode!==11?p:l.mode===11&&i(1,M,V,0)!==l.check?-3:re(w,M,V,V)?(l.mode=31,-4):(l.havedict=1,h):p},e.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(a,t,e){"use strict";var r=a("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],n=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],s=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],d=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(f,_,h,p,g,m,u,c){var v,T,k,N,U,O,G,A,$,re=c.bits,w=0,M=0,l=0,V=0,le=0,q=0,de=0,H=0,ae=0,P=0,E=null,ie=0,Q=new r.Buf16(16),X=new r.Buf16(16),Ce=null,Ne=0;for(w=0;w<=15;w++)Q[w]=0;for(M=0;M<p;M++)Q[_[h+M]]++;for(le=re,V=15;1<=V&&Q[V]===0;V--);if(V<le&&(le=V),V===0)return g[m++]=20971520,g[m++]=20971520,c.bits=1,0;for(l=1;l<V&&Q[l]===0;l++);for(le<l&&(le=l),w=H=1;w<=15;w++)if(H<<=1,(H-=Q[w])<0)return-1;if(0<H&&(f===0||V!==1))return-1;for(X[1]=0,w=1;w<15;w++)X[w+1]=X[w]+Q[w];for(M=0;M<p;M++)_[h+M]!==0&&(u[X[_[h+M]]++]=M);if(O=f===0?(E=Ce=u,19):f===1?(E=i,ie-=257,Ce=n,Ne-=257,256):(E=s,Ce=d,-1),w=l,U=m,de=M=P=0,k=-1,N=(ae=1<<(q=le))-1,f===1&&852<ae||f===2&&592<ae)return 1;for(;;){for(G=w-de,$=u[M]<O?(A=0,u[M]):u[M]>O?(A=Ce[Ne+u[M]],E[ie+u[M]]):(A=96,0),v=1<<w-de,l=T=1<<q;g[U+(P>>de)+(T-=v)]=G<<24|A<<16|$|0,T!==0;);for(v=1<<w-1;P&v;)v>>=1;if(v!==0?(P&=v-1,P+=v):P=0,M++,--Q[w]==0){if(w===V)break;w=_[h+u[M]]}if(le<w&&(P&N)!==k){for(de===0&&(de=le),U+=l,H=1<<(q=w-de);q+de<V&&!((H-=Q[q+de])<=0);)q++,H<<=1;if(ae+=1<<q,f===1&&852<ae||f===2&&592<ae)return 1;g[k=P&N]=le<<24|q<<16|U-m|0}}return P!==0&&(g[U+P]=w-de<<24|64<<16|0),c.bits=le,0}},{"../utils/common":41}],51:[function(a,t,e){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(a,t,e){"use strict";var r=a("../utils/common"),i=0,n=1;function s(y){for(var x=y.length;0<=--x;)y[x]=0}var d=0,f=29,_=256,h=_+1+f,p=30,g=19,m=2*h+1,u=15,c=16,v=7,T=256,k=16,N=17,U=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],G=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],$=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],re=new Array(2*(h+2));s(re);var w=new Array(2*p);s(w);var M=new Array(512);s(M);var l=new Array(256);s(l);var V=new Array(f);s(V);var le,q,de,H=new Array(p);function ae(y,x,W,j,I){this.static_tree=y,this.extra_bits=x,this.extra_base=W,this.elems=j,this.max_length=I,this.has_stree=y&&y.length}function P(y,x){this.dyn_tree=y,this.max_code=0,this.stat_desc=x}function E(y){return y<256?M[y]:M[256+(y>>>7)]}function ie(y,x){y.pending_buf[y.pending++]=255&x,y.pending_buf[y.pending++]=x>>>8&255}function Q(y,x,W){y.bi_valid>c-W?(y.bi_buf|=x<<y.bi_valid&65535,ie(y,y.bi_buf),y.bi_buf=x>>c-y.bi_valid,y.bi_valid+=W-c):(y.bi_buf|=x<<y.bi_valid&65535,y.bi_valid+=W)}function X(y,x,W){Q(y,W[2*x],W[2*x+1])}function Ce(y,x){for(var W=0;W|=1&y,y>>>=1,W<<=1,0<--x;);return W>>>1}function Ne(y,x,W){var j,I,Z=new Array(u+1),Y=0;for(j=1;j<=u;j++)Z[j]=Y=Y+W[j-1]<<1;for(I=0;I<=x;I++){var K=y[2*I+1];K!==0&&(y[2*I]=Ce(Z[K]++,K))}}function pe(y){var x;for(x=0;x<h;x++)y.dyn_ltree[2*x]=0;for(x=0;x<p;x++)y.dyn_dtree[2*x]=0;for(x=0;x<g;x++)y.bl_tree[2*x]=0;y.dyn_ltree[2*T]=1,y.opt_len=y.static_len=0,y.last_lit=y.matches=0}function fe(y){8<y.bi_valid?ie(y,y.bi_buf):0<y.bi_valid&&(y.pending_buf[y.pending++]=y.bi_buf),y.bi_buf=0,y.bi_valid=0}function xe(y,x,W,j){var I=2*x,Z=2*W;return y[I]<y[Z]||y[I]===y[Z]&&j[x]<=j[W]}function be(y,x,W){for(var j=y.heap[W],I=W<<1;I<=y.heap_len&&(I<y.heap_len&&xe(x,y.heap[I+1],y.heap[I],y.depth)&&I++,!xe(x,j,y.heap[I],y.depth));)y.heap[W]=y.heap[I],W=I,I<<=1;y.heap[W]=j}function Oe(y,x,W){var j,I,Z,Y,K=0;if(y.last_lit!==0)for(;j=y.pending_buf[y.d_buf+2*K]<<8|y.pending_buf[y.d_buf+2*K+1],I=y.pending_buf[y.l_buf+K],K++,j===0?X(y,I,x):(X(y,(Z=l[I])+_+1,x),(Y=O[Z])!==0&&Q(y,I-=V[Z],Y),X(y,Z=E(--j),W),(Y=G[Z])!==0&&Q(y,j-=H[Z],Y)),K<y.last_lit;);X(y,T,x)}function Fe(y,x){var W,j,I,Z=x.dyn_tree,Y=x.stat_desc.static_tree,K=x.stat_desc.has_stree,te=x.stat_desc.elems,he=-1;for(y.heap_len=0,y.heap_max=m,W=0;W<te;W++)Z[2*W]!==0?(y.heap[++y.heap_len]=he=W,y.depth[W]=0):Z[2*W+1]=0;for(;y.heap_len<2;)Z[2*(I=y.heap[++y.heap_len]=he<2?++he:0)]=1,y.depth[I]=0,y.opt_len--,K&&(y.static_len-=Y[2*I+1]);for(x.max_code=he,W=y.heap_len>>1;1<=W;W--)be(y,Z,W);for(I=te;W=y.heap[1],y.heap[1]=y.heap[y.heap_len--],be(y,Z,1),j=y.heap[1],y.heap[--y.heap_max]=W,y.heap[--y.heap_max]=j,Z[2*I]=Z[2*W]+Z[2*j],y.depth[I]=(y.depth[W]>=y.depth[j]?y.depth[W]:y.depth[j])+1,Z[2*W+1]=Z[2*j+1]=I,y.heap[1]=I++,be(y,Z,1),2<=y.heap_len;);y.heap[--y.heap_max]=y.heap[1],function(ce,Ie){var yt,Me,gt,we,Tt,mi,He=Ie.dyn_tree,Ci=Ie.max_code,vn=Ie.stat_desc.static_tree,zn=Ie.stat_desc.has_stree,Cn=Ie.stat_desc.extra_bits,bi=Ie.stat_desc.extra_base,_t=Ie.stat_desc.max_length,xt=0;for(we=0;we<=u;we++)ce.bl_count[we]=0;for(He[2*ce.heap[ce.heap_max]+1]=0,yt=ce.heap_max+1;yt<m;yt++)_t<(we=He[2*He[2*(Me=ce.heap[yt])+1]+1]+1)&&(we=_t,xt++),He[2*Me+1]=we,Ci<Me||(ce.bl_count[we]++,Tt=0,bi<=Me&&(Tt=Cn[Me-bi]),mi=He[2*Me],ce.opt_len+=mi*(we+Tt),zn&&(ce.static_len+=mi*(vn[2*Me+1]+Tt)));if(xt!==0){do{for(we=_t-1;ce.bl_count[we]===0;)we--;ce.bl_count[we]--,ce.bl_count[we+1]+=2,ce.bl_count[_t]--,xt-=2}while(0<xt);for(we=_t;we!==0;we--)for(Me=ce.bl_count[we];Me!==0;)Ci<(gt=ce.heap[--yt])||(He[2*gt+1]!==we&&(ce.opt_len+=(we-He[2*gt+1])*He[2*gt],He[2*gt+1]=we),Me--)}}(y,x),Ne(Z,he,y.bl_count)}function o(y,x,W){var j,I,Z=-1,Y=x[1],K=0,te=7,he=4;for(Y===0&&(te=138,he=3),x[2*(W+1)+1]=65535,j=0;j<=W;j++)I=Y,Y=x[2*(j+1)+1],++K<te&&I===Y||(K<he?y.bl_tree[2*I]+=K:I!==0?(I!==Z&&y.bl_tree[2*I]++,y.bl_tree[2*k]++):K<=10?y.bl_tree[2*N]++:y.bl_tree[2*U]++,Z=I,he=(K=0)===Y?(te=138,3):I===Y?(te=6,3):(te=7,4))}function R(y,x,W){var j,I,Z=-1,Y=x[1],K=0,te=7,he=4;for(Y===0&&(te=138,he=3),j=0;j<=W;j++)if(I=Y,Y=x[2*(j+1)+1],!(++K<te&&I===Y)){if(K<he)for(;X(y,I,y.bl_tree),--K!=0;);else I!==0?(I!==Z&&(X(y,I,y.bl_tree),K--),X(y,k,y.bl_tree),Q(y,K-3,2)):K<=10?(X(y,N,y.bl_tree),Q(y,K-3,3)):(X(y,U,y.bl_tree),Q(y,K-11,7));Z=I,he=(K=0)===Y?(te=138,3):I===Y?(te=6,3):(te=7,4)}}s(H);var L=!1;function z(y,x,W,j){Q(y,(d<<1)+(j?1:0),3),function(I,Z,Y,K){fe(I),K&&(ie(I,Y),ie(I,~Y)),r.arraySet(I.pending_buf,I.window,Z,Y,I.pending),I.pending+=Y}(y,x,W,!0)}e._tr_init=function(y){L||(function(){var x,W,j,I,Z,Y=new Array(u+1);for(I=j=0;I<f-1;I++)for(V[I]=j,x=0;x<1<<O[I];x++)l[j++]=I;for(l[j-1]=I,I=Z=0;I<16;I++)for(H[I]=Z,x=0;x<1<<G[I];x++)M[Z++]=I;for(Z>>=7;I<p;I++)for(H[I]=Z<<7,x=0;x<1<<G[I]-7;x++)M[256+Z++]=I;for(W=0;W<=u;W++)Y[W]=0;for(x=0;x<=143;)re[2*x+1]=8,x++,Y[8]++;for(;x<=255;)re[2*x+1]=9,x++,Y[9]++;for(;x<=279;)re[2*x+1]=7,x++,Y[7]++;for(;x<=287;)re[2*x+1]=8,x++,Y[8]++;for(Ne(re,h+1,Y),x=0;x<p;x++)w[2*x+1]=5,w[2*x]=Ce(x,5);le=new ae(re,O,_+1,h,u),q=new ae(w,G,0,p,u),de=new ae(new Array(0),A,0,g,v)}(),L=!0),y.l_desc=new P(y.dyn_ltree,le),y.d_desc=new P(y.dyn_dtree,q),y.bl_desc=new P(y.bl_tree,de),y.bi_buf=0,y.bi_valid=0,pe(y)},e._tr_stored_block=z,e._tr_flush_block=function(y,x,W,j){var I,Z,Y=0;0<y.level?(y.strm.data_type===2&&(y.strm.data_type=function(K){var te,he=4093624447;for(te=0;te<=31;te++,he>>>=1)if(1&he&&K.dyn_ltree[2*te]!==0)return i;if(K.dyn_ltree[18]!==0||K.dyn_ltree[20]!==0||K.dyn_ltree[26]!==0)return n;for(te=32;te<_;te++)if(K.dyn_ltree[2*te]!==0)return n;return i}(y)),Fe(y,y.l_desc),Fe(y,y.d_desc),Y=function(K){var te;for(o(K,K.dyn_ltree,K.l_desc.max_code),o(K,K.dyn_dtree,K.d_desc.max_code),Fe(K,K.bl_desc),te=g-1;3<=te&&K.bl_tree[2*$[te]+1]===0;te--);return K.opt_len+=3*(te+1)+5+5+4,te}(y),I=y.opt_len+3+7>>>3,(Z=y.static_len+3+7>>>3)<=I&&(I=Z)):I=Z=W+5,W+4<=I&&x!==-1?z(y,x,W,j):y.strategy===4||Z===I?(Q(y,2+(j?1:0),3),Oe(y,re,w)):(Q(y,4+(j?1:0),3),function(K,te,he,ce){var Ie;for(Q(K,te-257,5),Q(K,he-1,5),Q(K,ce-4,4),Ie=0;Ie<ce;Ie++)Q(K,K.bl_tree[2*$[Ie]+1],3);R(K,K.dyn_ltree,te-1),R(K,K.dyn_dtree,he-1)}(y,y.l_desc.max_code+1,y.d_desc.max_code+1,Y+1),Oe(y,y.dyn_ltree,y.dyn_dtree)),pe(y),j&&fe(y)},e._tr_tally=function(y,x,W){return y.pending_buf[y.d_buf+2*y.last_lit]=x>>>8&255,y.pending_buf[y.d_buf+2*y.last_lit+1]=255&x,y.pending_buf[y.l_buf+y.last_lit]=255&W,y.last_lit++,x===0?y.dyn_ltree[2*W]++:(y.matches++,x--,y.dyn_ltree[2*(l[W]+_+1)]++,y.dyn_dtree[2*E(x)]++),y.last_lit===y.lit_bufsize-1},e._tr_align=function(y){Q(y,2,3),X(y,T,re),function(x){x.bi_valid===16?(ie(x,x.bi_buf),x.bi_buf=0,x.bi_valid=0):8<=x.bi_valid&&(x.pending_buf[x.pending++]=255&x.bi_buf,x.bi_buf>>=8,x.bi_valid-=8)}(y)}},{"../utils/common":41}],53:[function(a,t,e){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(a,t,e){(function(r){(function(i,n){"use strict";if(!i.setImmediate){var s,d,f,_,h=1,p={},g=!1,m=i.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(i);u=u&&u.setTimeout?u:i,s={}.toString.call(i.process)==="[object process]"?function(k){process.nextTick(function(){v(k)})}:function(){if(i.postMessage&&!i.importScripts){var k=!0,N=i.onmessage;return i.onmessage=function(){k=!1},i.postMessage("","*"),i.onmessage=N,k}}()?(_="setImmediate$"+Math.random()+"$",i.addEventListener?i.addEventListener("message",T,!1):i.attachEvent("onmessage",T),function(k){i.postMessage(_+k,"*")}):i.MessageChannel?((f=new MessageChannel).port1.onmessage=function(k){v(k.data)},function(k){f.port2.postMessage(k)}):m&&"onreadystatechange"in m.createElement("script")?(d=m.documentElement,function(k){var N=m.createElement("script");N.onreadystatechange=function(){v(k),N.onreadystatechange=null,d.removeChild(N),N=null},d.appendChild(N)}):function(k){setTimeout(v,0,k)},u.setImmediate=function(k){typeof k!="function"&&(k=new Function(""+k));for(var N=new Array(arguments.length-1),U=0;U<N.length;U++)N[U]=arguments[U+1];var O={callback:k,args:N};return p[h]=O,s(h),h++},u.clearImmediate=c}function c(k){delete p[k]}function v(k){if(g)setTimeout(v,0,k);else{var N=p[k];if(N){g=!0;try{(function(U){var O=U.callback,G=U.args;switch(G.length){case 0:O();break;case 1:O(G[0]);break;case 2:O(G[0],G[1]);break;case 3:O(G[0],G[1],G[2]);break;default:O.apply(n,G)}})(N)}finally{c(k),g=!1}}}}function T(k){k.source===i&&typeof k.data=="string"&&k.data.indexOf(_)===0&&v(+k.data.slice(_.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})});var un=wi((vi,zi)=>{(function(a,t){typeof define=="function"&&define.amd?define([],t):typeof vi<"u"?t():(t(),a.FileSaver={})})(vi,function(){"use strict";function a(d,f){return typeof f>"u"?f={autoBom:!1}:typeof f!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),f={autoBom:!f}),f.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type)?new Blob(["\uFEFF",d],{type:d.type}):d}function t(d,f,_){var h=new XMLHttpRequest;h.open("GET",d),h.responseType="blob",h.onload=function(){s(h.response,f,_)},h.onerror=function(){console.error("could not download file")},h.send()}function e(d){var f=new XMLHttpRequest;f.open("HEAD",d,!1);try{f.send()}catch{}return 200<=f.status&&299>=f.status}function r(d){try{d.dispatchEvent(new MouseEvent("click"))}catch{var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),d.dispatchEvent(f)}}var i=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,n=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||(typeof window!="object"||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(d,f,_){var h=i.URL||i.webkitURL,p=document.createElement("a");f=f||d.name||"download",p.download=f,p.rel="noopener",typeof d=="string"?(p.href=d,p.origin===location.origin?r(p):e(p.href)?t(d,f,_):r(p,p.target="_blank")):(p.href=h.createObjectURL(d),setTimeout(function(){h.revokeObjectURL(p.href)},4e4),setTimeout(function(){r(p)},0))}:"msSaveOrOpenBlob"in navigator?function(d,f,_){if(f=f||d.name||"download",typeof d!="string")navigator.msSaveOrOpenBlob(a(d,_),f);else if(e(d))t(d,f,_);else{var h=document.createElement("a");h.href=d,h.target="_blank",setTimeout(function(){r(h)})}}:function(d,f,_,h){if(h=h||open("","_blank"),h&&(h.document.title=h.document.body.innerText="downloading..."),typeof d=="string")return t(d,f,_);var p=d.type==="application/octet-stream",g=/constructor/i.test(i.HTMLElement)||i.safari,m=/CriOS\/[\d]+/.test(navigator.userAgent);if((m||p&&g||n)&&typeof FileReader<"u"){var u=new FileReader;u.onloadend=function(){var T=u.result;T=m?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),h?h.location.href=T:location=T,h=null},u.readAsDataURL(d)}else{var c=i.URL||i.webkitURL,v=c.createObjectURL(d);h?h.location=v:location.href=v,h=null,setTimeout(function(){c.revokeObjectURL(v)},4e4)}});i.saveAs=s.saveAs=s,typeof zi<"u"&&(zi.exports=s)})});var At=class a{transform(t,e,r){if(!t)return[];let i=t;if(e){let n=e.toLowerCase();i=t.filter(s=>{let d=!1;return d=s.areaName&&s.areaName.toLowerCase().indexOf(n)>=0||s.controllerName&&s.controllerName.toLowerCase().indexOf(n)>=0||s.summary&&s.summary.toLowerCase().indexOf(n)>=0||s.actionList.filter(f=>f.actionName.toLowerCase().indexOf(n)>=0||f.summary&&f.summary.toLowerCase().indexOf(n)>=0).length>0,d})}return i.length>0&&r&&r.length>0&&(i=i.filter(n=>r.filter(s=>s.areaName==n.areaName).length>0)),i}static \u0275fac=function(e){return new(e||a)};static \u0275pipe=Ti({name:"controllerFilter",type:a,pure:!0})};function Sn(a,t){a&1&&ge(0,"i",27)}function Tn(a,t){if(a&1){let e=ye();S(0,"div",31)(1,"label",37),ze("ngModelChange",function(i){let n=oe(e).$implicit;return ve(n.isSelected,i)||(n.isSelected=i),se(i)}),ue("ngModelChange",function(){let i=oe(e).$implicit,n=B(3);return se(n.areaSelectChange(i))}),D(2),C()()}if(a&2){let e=t.$implicit,r=t.index;b(),xi("",r>1?"mt5":""," cursor-Hand"),_e("ngModel",e.isSelected),b(),Se(" ",e.displayName,"")}}function xn(a,t){if(a&1){let e=ye();S(0,"div")(1,"div",28)(2,"div",29)(3,"div",30)(4,"div",31)(5,"label",32),D(6,"Areas"),C()(),S(7,"div",33)(8,"label",34),ze("ngModelChange",function(i){oe(e);let n=B(2);return ve(n.isAllAreaSelected,i)||(n.isAllAreaSelected=i),se(i)}),ue("ngModelChange",function(){oe(e);let i=B(2);return se(i.allSelectAreaChange())}),D(9,"All"),C()()(),S(10,"div",35),ee(11,Tn,3,5,"div",36),C()()()()}if(a&2){let e=B(2);b(8),_e("ngModel",e.isAllAreaSelected),F("nzIndeterminate",e.isAreaSelectIndeterminate),b(3),F("ngForOf",e.areaList)}}function Nn(a,t){if(a&1){let e=ye();S(0,"li",38),ue("click",function(){oe(e);let i=B(2);return se(i.displayAll())}),D(1," Display All "),C()}if(a&2){let e=B(2);F("nzSelected",e.isDisplayAllMenuSelected)}}function kn(a,t){if(a&1){let e=ye();S(0,"li",39)(1,"a",40),ue("click",function(){let i=oe(e).$implicit,n=B(2);return se(n.onSelectController(i))}),D(2),S(3,"span",41),D(4),C()()()}if(a&2){let e=t.$implicit;F("nzSelected",e.isSelected),b(2),Se(" ",e.controllerName," "),b(2),ne(e.summary)}}function In(a,t){if(a&1){let e=ye();S(0,"nz-affix")(1,"div",14)(2,"div",2)(3,"div",15)(4,"nz-input-group",16)(5,"input",17),ze("ngModelChange",function(i){oe(e);let n=B();return ve(n.searchText,i)||(n.searchText=i),se(i)}),C()(),ee(6,Sn,1,0,"ng-template",null,0,zt),C(),S(8,"div",18)(9,"a",19),ue("click",function(){oe(e);let i=B();return se(i.showAreaFilter=!i.showAreaFilter)}),ge(10,"i",20),C(),S(11,"a",21),ue("click",function(){oe(e);let i=B();return se(i.refreshControllerList())}),ge(12,"i",22),C()()(),ee(13,xn,12,3,"div",5),C(),S(14,"section",23)(15,"ul",24),ee(16,Nn,2,1,"li",25)(17,kn,5,3,"li",26),Dt(18,"controllerFilter"),C()()()}if(a&2){let e=ke(7),r=B();b(4),F("nzSuffix",e),b(),_e("ngModel",r.searchText),b(8),F("ngIf",r.showAreaFilter),b(3),F("ngIf",(r.controllerList==null?null:r.controllerList.length)>0&&!r.searchText&&!r.isAreaSelectIndeterminate),b(),F("ngForOf",Ai(18,5,r.controllerList,r.searchText,r.selectedArea))}}function En(a,t){if(a&1&&(S(0,"span")(1,"nz-tag",54),D(2),C()()),a&2){let e=t.$implicit,r=t.index,i=B(2);b(),F("nzColor",r<i.tagcolor.length-1?i.tagcolor[r]:i.tagcolor[0]),b(),Se(" ",e.name," ")}}function Dn(a,t){if(a&1&&(S(0,"label",55),D(1),C()),a&2){let e=B().$implicit;b(),Se(" ",e.summary,"")}}function Pn(a,t){if(a&1&&(S(0,"div",14)(1,"nz-tag",54),D(2),C()()),a&2){let e=t.$implicit,r=t.index,i=B(3);b(),F("nzColor",r<i.tagcolor.length-1?i.tagcolor[r]:i.tagcolor[0]),b(),Se(" ",e.name," ")}}function Ln(a,t){if(a&1&&(S(0,"tr")(1,"td")(2,"a",56),D(3),C()(),S(4,"td"),ee(5,Pn,3,2,"div",57),C(),S(6,"td"),D(7),C()()),a&2){let e=t.$implicit;b(2),Ae("routerLink","/workbench/action/",e.id,""),b(),Se(" ",(e.areaName?e.areaName+"/":"")+e.controllerName+"/"+e.actionName," "),b(2),F("ngForOf",e.customAttrList),b(2),ne(e.summary)}}function Fn(a,t){if(a&1&&(S(0,"div")(1,"div",42)(2,"div",43)(3,"div",44)(4,"h2",45),D(5),C(),S(6,"label",46),ee(7,En,3,2,"span",12),C()(),S(8,"div",47),ee(9,Dn,2,1,"label",48),S(10,"a",49),D(11,"View Code"),C()()(),S(12,"div",50)(13,"nz-table",51,1)(15,"thead")(16,"tr")(17,"th",52),D(18,"API"),C(),S(19,"th",53),D(20,"Attr"),C(),S(21,"th"),D(22,"Summary"),C()()(),S(23,"tbody"),ee(24,Ln,8,5,"tr",12),C()()()()()),a&2){let e=t.$implicit,r=ke(14),i=B();b(5),ne(e.controllerName),b(2),F("ngForOf",e.customAttrList),b(2),F("ngIf",e.summary),b(),Ae("routerLink","/workbench/codeviewer/controller/",e.id,""),b(3),F("nzShowPagination",!1)("nzSize",i.actionTableSize)("nzPageSize",1e3)("nzData",e.actionList),b(11),F("ngForOf",r.data)}}var Ot=class a{constructor(t){this.apiSvc=t;let e=localStorage.getItem("actionTableSize");this.actionTableSize=e||"middle"}showControllerList=!0;isDisplayAllMenuSelected=!0;tagcolor=["cyan","geekblue","blue","purple"];actionTableSize="middle";searchText="";controllerList=[];selectedController=[];queryAmount=3;areaList=[];selectedArea=[];showAreaFilter=!1;isAllAreaSelected=!1;isAreaSelectIndeterminate=!1;ngOnInit(){this.initControllerList()}onReuseFlag=!1;_onReuseInit(){this.onReuseFlag?(this.showControllerList=!1,setTimeout(()=>{this.showControllerList=!0},1),this.onReuseFlag=!1):this.onReuseFlag=!0}_onReuseDestroy(){}initControllerList(){this.searchText="",this.isDisplayAllMenuSelected=!1,this.controllerList=[],this.apiSvc.getControllerList().subscribe(t=>{this.controllerList=t,this.initAreaList(),this.initControllerDetail(0),this.displayAll()})}initControllerDetail(t){let e=[],r=0;for(r=0;t+r<this.controllerList.length&&(e.push(this.controllerList[t+r].id),r!=this.queryAmount-1);r++);t+=r+1,this.apiSvc.getControllerListByIds(e).subscribe({next:i=>{i.forEach(n=>{let s=this.controllerList.filter(d=>d.id==n.id);s&&s.length>0&&(s[0].summary=n.summary,s[0].actionList=n.actionList)})},error:i=>{console.log("error:",i),t<this.controllerList.length&&this.initControllerDetail(t)},complete:()=>{t<this.controllerList.length&&this.initControllerDetail(t)}})}initAreaList(){this.areaList=[],this.selectedArea=[],this.controllerList&&(this.controllerList.forEach(t=>{if(this.areaList.filter(e=>e.areaName==t.areaName).length<=0){let e={areaName:t.areaName,displayName:t.areaName?t.areaName:"None",isSelected:!1};this.areaList.push(e)}}),this.areaList.sort((t,e)=>{let r=0;return t.areaName!=e.areaName&&(r=t.areaName>=e.areaName?1:-1),r}))}allSelectAreaChange(){this.areaList.forEach(t=>{t.isSelected=this.isAllAreaSelected}),this.selectedArea=this.areaList.filter(t=>t.isSelected)}areaSelectChange(t){this.areaList.filter(e=>!e.isSelected).length<=0?(this.isAllAreaSelected=!0,this.isAreaSelectIndeterminate=!1):this.areaList.filter(e=>e.isSelected).length<=0?(this.isAllAreaSelected=!1,this.isAreaSelectIndeterminate=!1):this.isAreaSelectIndeterminate=!0,this.selectedArea=this.areaList.filter(e=>e.isSelected)}refreshControllerList(){this.initControllerList()}onSelectController(t){this.selectedController=[],this.selectedController.push(t),this.controllerList.forEach(e=>{e!=t?e.isSelected=!1:e.isSelected=!0}),this.isDisplayAllMenuSelected=!1}displayAll(){this.selectedController=this.controllerList,this.isDisplayAllMenuSelected=!0,this.controllerList.forEach(t=>{t.isSelected=!1})}actionTableSizeChanged(){localStorage.setItem("actionTableSize",this.actionTableSize)}static \u0275fac=function(e){return new(e||a)(Te(qe))};static \u0275cmp=Ee({type:a,selectors:[["app-workbench"]],decls:16,vars:3,consts:[["suffixIcon",""],["actionTable",""],["nz-row",""],["nz-col","","nzSpan","5",1,"p5"],[1,"main-menu"],[4,"ngIf"],["nz-col","","nzSpan","19",2,"width","calc(100% - 280px)"],[1,"p20",2,"min-height","calc( 100vh - 100px )"],[1,"pull-right","mrp18"],[3,"ngModelChange","ngModel"],["nz-radio","","nzValue","middle"],["nz-radio","","nzValue","small"],[4,"ngFor","ngForOf"],[1,"pb20"],[1,"mt5"],["nz-col","","nzSpan","18"],["nzSize","small",3,"nzSuffix"],["placeholder","Search","nz-input","",3,"ngModelChange","ngModel"],["nz-col","","nzSpan","4",1,"lh24"],["title","Area Filter",1,"ml5",3,"click"],["nz-icon","","nzType","appstore","nzTheme","outline"],["title","Refresh",1,"ml5",3,"click"],["nz-icon","","nzType","sync","nzTheme","outline"],[1,"main-menu-inner"],["nz-menu","","nzMode","inline"],["nz-menu-item","",3,"nzSelected","click",4,"ngIf"],["nz-menu-item","",3,"nzSelected",4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[1,"mt3"],[1,"mt3","p10","border-lightgray","border-radius"],["nz-row","",1,"border-bottom","pb10"],["nz-col","","nzSpan","12"],[1,"fw600","f-size16"],["nz-col","","nzSpan","12",1,"lh24"],["nz-checkbox","",3,"ngModelChange","ngModel","nzIndeterminate"],["nz-row","",1,"mt5"],["nz-col","","nzSpan","12",4,"ngFor","ngForOf"],["nz-checkbox","",3,"ngModelChange","ngModel"],["nz-menu-item","",3,"click","nzSelected"],["nz-menu-item","",3,"nzSelected"],[1,"overxhiden",3,"click"],[1,"ml8","f-size12",2,"color","#a5a5a5"],[1,"p10","mt10"],[1,"pl10"],[1,"vcenter"],[1,"lineblock",2,"font-size","26px"],[1,"ml40",2,"vertical-align","text-bottom"],[1,"wp90","lh24"],["class","f-size12","style","max-width: 80%;",4,"ngIf"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"pull-right","mr20","w80",3,"routerLink"],[1,"wp90","mt5"],[3,"nzShowPagination","nzSize","nzPageSize","nzData"],[1,"wp33"],[1,"wp15"],[3,"nzColor"],[1,"f-size12",2,"max-width","80%"],[1,"actionLink",3,"routerLink"],["class","mt5",4,"ngFor","ngForOf"]],template:function(e,r){e&1&&(S(0,"div")(1,"div",2)(2,"div",3)(3,"div",4),ee(4,In,19,9,"nz-affix",5),C()(),S(5,"div",6)(6,"div",7)(7,"div",8)(8,"nz-radio-group",9),ze("ngModelChange",function(n){return ve(r.actionTableSize,n)||(r.actionTableSize=n),n}),ue("ngModelChange",function(){return r.actionTableSizeChanged()}),S(9,"label",10),D(10,"Large"),C(),S(11,"label",11),D(12,"Small"),C()()(),ee(13,Fn,25,10,"div",12),C(),S(14,"div",13),ge(15,"layout-footer"),C()()()()),e&2&&(b(4),F("ngIf",r.showControllerList),b(4),_e("ngModel",r.actionTableSize),b(5),F("ngForOf",r.selectedController))},dependencies:[Ye,De,Vi,tt,it,pt,Ui,Le,Pe,ft,Gi,qi,ot,at,Pt,Wi,Bi,ji,rt,nt,We,Re,Ve,Be,Ue,je,st,tn,At],styles:[".ant-menu-vertical>.ant-menu-item, .ant-menu-vertical-left[_ngcontent-%COMP%] > .ant-menu-item[_ngcontent-%COMP%], .ant-menu-vertical-right[_ngcontent-%COMP%] > .ant-menu-item[_ngcontent-%COMP%], .ant-menu-inline[_ngcontent-%COMP%] > .ant-menu-item[_ngcontent-%COMP%], .ant-menu-vertical[_ngcontent-%COMP%] > .ant-menu-submenu[_ngcontent-%COMP%] > .ant-menu-submenu-title[_ngcontent-%COMP%], .ant-menu-vertical-left[_ngcontent-%COMP%] > .ant-menu-submenu[_ngcontent-%COMP%] > .ant-menu-submenu-title[_ngcontent-%COMP%], .ant-menu-vertical-right[_ngcontent-%COMP%] > .ant-menu-submenu[_ngcontent-%COMP%] > .ant-menu-submenu-title[_ngcontent-%COMP%], .ant-menu-inline[_ngcontent-%COMP%] > .ant-menu-submenu[_ngcontent-%COMP%] > .ant-menu-submenu-title[_ngcontent-%COMP%]{height:35px;line-height:35px;min-height:35px;padding:0 10px!important}.main-menu-inner[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:hidden;max-height:calc(100vh - 100px)}.main-menu[_ngcontent-%COMP%]:hover   .main-menu-inner[_ngcontent-%COMP%]{overflow-y:auto}a[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer;color:#2ea7e7}a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#2f8bfa}.actionLink[_ngcontent-%COMP%]{color:#2ea7e7}"]})};function An(a,t){if(a&1&&(S(0,"span")(1,"nz-tag",20),D(2),C()()),a&2){let e=t.$implicit,r=t.index,i=B(2);b(),F("nzColor",r<i.tagcolor.length-1?i.tagcolor[r]:i.tagcolor[0]),b(),Se(" ",e.name," ")}}function On(a,t){if(a&1&&(S(0,"div",21)(1,"label",22),D(2),C()()),a&2){let e=B(2);b(2),ne(e.action.summary)}}function Mn(a,t){if(a&1&&(S(0,"span")(1,"nz-tag",20),D(2),C()()),a&2){let e=t.$implicit,r=t.index,i=B(5);b(),F("nzColor",r<i.tagcolor.length-1?i.tagcolor[r]:i.tagcolor[0]),b(),Se(" ",e.name," ")}}function Rn(a,t){if(a&1&&(S(0,"span")(1,"span"),D(2),C(),D(3," : "),S(4,"a",26),D(5),C(),S(6,"label",8),ee(7,Mn,3,2,"span",9),C(),S(8,"span",27),D(9),C()()),a&2){let e=B().$implicit;b(2),ne(e.name),b(2),Ae("routerLink","/workbench/ptype/",e.isIEnumerable?e.enumItemId:e.typeId,""),b(),ne(e.typeName),b(2),F("ngForOf",e.customAttrList),b(2),ne(e.summary)}}function Vn(a,t){if(a&1&&(S(0,"label",25),ee(1,Rn,10,6,"span",3),C()),a&2){let e=t.$implicit;b(),F("ngIf",e.hasPiList)}}function Un(a,t){if(a&1&&(S(0,"div",23),ee(1,Vn,2,1,"label",24),C()),a&2){let e=B(2);b(),F("ngForOf",e.action.inputParameters)}}function Wn(a,t){a&1&&(S(0,"label",28),D(1,"(none)"),C())}function jn(a,t){if(a&1&&(S(0,"span"),D(1),C()),a&2){let e=B().$implicit;b(),ne(e.typeName)}}function Bn(a,t){if(a&1&&(S(0,"a",26),D(1),C()),a&2){let e=B().$implicit;Ae("routerLink","/workbench/ptype/",e.isIEnumerable?e.enumItemId:e.typeId,""),b(),ne(e.typeName)}}function qn(a,t){if(a&1&&(S(0,"div",23)(1,"nz-tag",20),D(2),C()()),a&2){let e=t.$implicit,r=t.index,i=B(4);b(),F("nzColor",r<i.tagcolor.length-1?i.tagcolor[r]:i.tagcolor[0]),b(),Se(" ",e.name," ")}}function Gn(a,t){if(a&1&&(S(0,"tr")(1,"td")(2,"span"),D(3),C()(),S(4,"td")(5,"span"),D(6),C()(),S(7,"td"),ee(8,jn,2,1,"span",3)(9,Bn,2,3,"a",34),C(),S(10,"td"),ee(11,qn,3,2,"div",35),C(),S(12,"td"),D(13),C(),ge(14,"td"),C()),a&2){let e=t.$implicit;b(3),ne(e.name),b(3),ne(e.summary),b(2),F("ngIf",!e.hasPiList),b(),F("ngIf",e.hasPiList),b(2),F("ngForOf",e.customAttrList),b(2),ne(e.defaultValue)}}function Hn(a,t){if(a&1&&(S(0,"div")(1,"nz-table",29,0)(3,"thead")(4,"tr")(5,"th",30),D(6,"Name"),C(),S(7,"th",31),D(8,"Summary"),C(),S(9,"th",30),D(10,"Type"),C(),S(11,"th",32),D(12,"Attr"),C(),S(13,"th",33),D(14,"Default"),C(),ge(15,"th"),C()(),S(16,"tbody"),ee(17,Gn,15,6,"tr",9),C()()()),a&2){let e=ke(2),r=B(2);b(),F("nzShowPagination",!1)("nzPageSize",1e3)("nzData",r.inputParams),b(4),F("nzShowSort",!0)("nzSortFn",r.nameSortFn),b(4),F("nzShowSort",!0)("nzSortFn",r.typeSortFn),b(8),F("ngForOf",e.data)}}function Zn(a,t){if(a&1&&(S(0,"span"),D(1),C()),a&2){let e=B().$implicit;b(),ne(e.typeName)}}function Kn(a,t){if(a&1&&(S(0,"a",26),D(1),C()),a&2){let e=B().$implicit;Ae("routerLink","/workbench/ptype/",e.isIEnumerable?e.enumItemId:e.typeId,""),b(),ne(e.typeName)}}function $n(a,t){if(a&1&&(S(0,"tr")(1,"td")(2,"span"),D(3),C()(),S(4,"td")(5,"span"),D(6),C()(),S(7,"td"),ee(8,Zn,2,1,"span",3)(9,Kn,2,3,"a",34),C(),ge(10,"td"),C()),a&2){let e=t.$implicit;b(3),ne(e.name),b(3),ne(e.summary),b(2),F("ngIf",!e.hasPiList),b(),F("ngIf",e.hasPiList)}}function Xn(a,t){if(a&1&&(S(0,"div")(1,"div",15)(2,"label",16),D(3,"ReturnParamters"),C(),S(4,"div",36)(5,"a",26),D(6),C(),S(7,"span",27),D(8),C()()(),S(9,"div")(10,"nz-table",29,1)(12,"thead")(13,"tr")(14,"th",30),D(15,"Name"),C(),S(16,"th",31),D(17,"Summary"),C(),S(18,"th",30),D(19,"Type"),C(),ge(20,"th"),C()(),S(21,"tbody"),ee(22,$n,11,4,"tr",9),C()()()()),a&2){let e=ke(11),r=B(2);b(5),Ae("routerLink","/workbench/ptype/",r.action.returnParameter.typeId,""),b(),ne(r.action.returnParameter.typeName),b(2),ne(r.action.returnParameter.summary),b(2),F("nzShowPagination",!1)("nzPageSize",1e3)("nzData",r.returnParams),b(4),F("nzShowSort",!0)("nzSortFn",r.nameSortFn),b(4),F("nzShowSort",!0)("nzSortFn",r.typeSortFn),b(4),F("ngForOf",e.data)}}function Qn(a,t){a&1&&(S(0,"label",42),D(1,"(none)"),C())}function Yn(a,t){if(a&1&&(S(0,"span"),D(1),C()),a&2){let e=B().$implicit;b(),ne(e.typeName)}}function Jn(a,t){if(a&1&&(S(0,"a"),D(1),C()),a&2){let e=B().$implicit;b(),ne(e.typeName)}}function er(a,t){if(a&1&&(S(0,"tr")(1,"td"),ee(2,Yn,2,1,"span",3)(3,Jn,2,1,"a",3),C(),S(4,"td")(5,"span"),D(6),C()(),ge(7,"td"),C()),a&2){let e=t.$implicit;b(2),F("ngIf",!e.hasPiList),b(),F("ngIf",e.hasPiList),b(3),ne(e.summary)}}function tr(a,t){if(a&1&&(S(0,"div",37)(1,"div",38)(2,"label",39),D(3,"ReturnParamters"),C(),ee(4,Qn,2,0,"label",40),C(),S(5,"div")(6,"nz-table",41,1)(8,"thead")(9,"tr")(10,"th",33),D(11,"Type"),C(),S(12,"th",31),D(13,"Summary"),C(),ge(14,"th"),C()(),S(15,"tbody"),ee(16,er,8,3,"tr",9),C()()()()),a&2){let e=ke(7),r=B(2);b(4),F("ngIf",(r.returnParams==null?null:r.returnParams.length)<=0),b(2),F("nzShowPagination",!1)("nzData",r.returnParams),b(10),F("ngForOf",e.data)}}function ir(a,t){if(a&1&&(S(0,"div")(1,"div")(2,"div",4)(3,"div",5)(4,"div",6)(5,"label",7),D(6),C(),S(7,"label",8),ee(8,An,3,2,"span",9),C(),S(9,"a",10),D(10,"View Code"),C()(),ee(11,On,3,1,"div",11),C(),S(12,"div",12)(13,"a",13),D(14,"Return"),C()()()(),S(15,"div",14)(16,"div")(17,"div")(18,"div",15)(19,"label",16),D(20,"InputParamters"),C(),ee(21,Un,2,1,"div",17)(22,Wn,2,0,"label",18),C(),ee(23,Hn,18,8,"div",3),C()(),S(24,"div",14),ee(25,Xn,23,12,"div",3)(26,tr,17,4,"div",19),C()()()),a&2){let e=B();b(6),Se(" ",(e.action.areaName?e.action.areaName+"/":"")+e.action.controllerName+"/"+e.action.actionName," "),b(2),F("ngForOf",e.action.customAttrList),b(),Ae("routerLink","/workbench/codeviewer/action/",e.action.id,""),b(2),F("ngIf",e.action.summary),b(6),It((e.inputParams==null?null:e.inputParams.length)>0?"":"border-bottom"),b(4),F("ngIf",e.inputParams.length>0),b(),F("ngIf",e.inputParams.length<=0),b(),F("ngIf",e.inputParams.length>0),b(2),F("ngIf",e.action.returnParameter.hasPiList),b(),F("ngIf",!e.action.returnParameter.hasPiList)}}var Vt=class a{constructor(t,e){this.routerParams=t;this.apiSvc=e}actionId;action;tagcolor=["cyan","geekblue","blue","purple"];inputParams=[];returnParams=[];ngOnInit(){this.actionId=this.routerParams.snapshot.paramMap.get("actionId"),this.getAction()}getAction(){this.apiSvc.getAction(this.actionId).subscribe(t=>{this.action=t;let e=t.controllerName+"/"+t.actionName+" - Api Helper";Je.setTitle(e),t&&t.inputParameters&&t.inputParameters.forEach(r=>{r.hasPiList&&!r.isEnum?this.apiSvc.getPType(r.typeId).subscribe(i=>{i.piList.forEach(n=>{this.inputParams.filter(s=>s.name==n.name).length<=0&&this.inputParams.push(n)})}):this.inputParams.push(r)}),t&&t.returnParameter&&(t.returnParameter.hasPiList&&!t.returnParameter.isEnum?this.apiSvc.getPType(t.returnParameter.typeId).subscribe(r=>{this.returnParams=r.piList}):this.returnParams.push(t.returnParameter))})}nameSortFn(t,e,r){return t.name.localeCompare(e.name)}typeSortFn(t,e,r){return t.typeName.localeCompare(e.typeName)}static \u0275fac=function(e){return new(e||a)(Te(et),Te(qe))};static \u0275cmp=Ee({type:a,selectors:[["app-action"]],decls:2,vars:1,consts:[["inputParamsTable",""],["returnParamsTable",""],[1,"content"],[4,"ngIf"],["nz-row",""],["nz-col","","nzSpan","20"],[1,"lh40"],[1,"f-size30"],[1,"ml40"],[4,"ngFor","ngForOf"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml50","w80",3,"routerLink"],["class","mt10",4,"ngIf"],["nz-col","","nzSpan","4",1,"h60","lh60","valign-bottom"],["nz-button","","nzType","primary","nzSize","small","nzGhost","","routerLink","/workbench/index",1,"ml50","w80"],[1,"mt30"],[1,"p10"],[1,"f-size18","fw500"],["class","mt5",4,"ngIf"],["class","ml5 f-size18",4,"ngIf"],["class","border-bottom",4,"ngIf"],[3,"nzColor"],[1,"mt10"],[1,"f-size16"],[1,"mt5"],["class","f-size14",4,"ngFor","ngForOf"],[1,"f-size14"],[3,"routerLink"],[1,"ml20"],[1,"ml5","f-size18"],["nzSize","small",3,"nzShowPagination","nzPageSize","nzData"],[1,"w240",3,"nzShowSort","nzSortFn"],[1,"wp30"],[1,"wp10"],[1,"w240"],[3,"routerLink",4,"ngIf"],["class","mt5",4,"ngFor","ngForOf"],[1,"mt5","f-size14"],[1,"border-bottom"],[1,"p10","f-size18"],[1,"fw500"],["class","ml5",4,"ngIf"],["nzSize","small",3,"nzShowPagination","nzData"],[1,"ml5"]],template:function(e,r){e&1&&(S(0,"div",2),ee(1,ir,27,13,"div",3),C()),e&2&&(b(),F("ngIf",r.action))},dependencies:[Ye,De,pt,Le,Pe,ot,at,We,ht,Re,Ve,Be,Ue,je,st]})};function nr(a,t){if(a&1&&(S(0,"div",17)(1,"label",18),D(2),C()()),a&2){let e=B(2);b(2),ne(e.ptype.summary)}}function rr(a,t){if(a&1&&(S(0,"th",13),D(1,"Value"),C()),a&2){let e=B(2);F("nzShowSort",!0)("nzSortFn",e.valueSortFn)}}function ar(a,t){if(a&1&&(S(0,"th",13),D(1,"Type"),C()),a&2){let e=B(2);F("nzShowSort",!0)("nzSortFn",e.typeSortFn)}}function or(a,t){if(a&1&&(S(0,"td",20),D(1),C()),a&2){let e=B().$implicit;b(),ne(e.paramValue)}}function sr(a,t){if(a&1&&(S(0,"span"),D(1),C()),a&2){let e=B(2).$implicit;b(),ne(e.typeName)}}function lr(a,t){if(a&1){let e=ye();S(0,"a",22),ue("click",function(){oe(e);let i=B(2).$implicit,n=B(2);return se(n.viewPType(i))}),D(1),C()}if(a&2){let e=B(2).$implicit;b(),ne(e.typeName)}}function dr(a,t){if(a&1&&(S(0,"td"),ee(1,sr,2,1,"span",2)(2,lr,2,1,"a",21),C()),a&2){let e=B().$implicit;b(),F("ngIf",!e.hasPiList),b(),F("ngIf",e.hasPiList)}}function mr(a,t){if(a&1&&(S(0,"tr")(1,"td")(2,"span"),D(3),C()(),ee(4,or,2,1,"td",19),S(5,"td")(6,"span"),D(7),C()(),ee(8,dr,3,2,"td",2),ge(9,"td"),C()),a&2){let e=t.$implicit,r=B(2);b(3),ne(e.name),b(),F("ngIf",r.ptype.isEnum),b(3),ne(e.summary),b(),F("ngIf",!r.ptype.isEnum)}}function pr(a,t){if(a&1){let e=ye();S(0,"div")(1,"div")(2,"div",3)(3,"div",4)(4,"div",5)(5,"label",6),D(6),C(),S(7,"a",7),D(8,"View Code"),C()(),ee(9,nr,3,1,"div",8),C(),S(10,"div",9)(11,"a",10),ue("click",function(){oe(e);let i=B();return se(i.goback())}),D(12,"Return"),C()()()(),S(13,"div",11)(14,"nz-table",12,0)(16,"thead")(17,"tr")(18,"th",13),D(19,"Name"),C(),ee(20,rr,2,2,"th",14),S(21,"th",15),D(22,"Summary"),C(),ee(23,ar,2,2,"th",14),ge(24,"th"),C()(),S(25,"tbody"),ee(26,mr,10,4,"tr",16),C()()()()}if(a&2){let e=ke(15),r=B();b(6),Se(" ",r.ptype.typeName," "),b(),Ae("routerLink","/workbench/codeviewer/ptype/",r.ptype.isIEnumerable?r.ptype.enumItemId:r.ptype.id,""),b(2),F("ngIf",r.ptype.summary),b(5),F("nzShowPagination",!1)("nzPageSize",1e3)("nzData",r.ptype.piList),b(4),F("nzShowSort",!0)("nzSortFn",r.nameSortFn),b(2),F("ngIf",r.ptype.isEnum),b(3),F("ngIf",!r.ptype.isEnum),b(3),F("ngForOf",e.data)}}var Ut=class a{constructor(t,e){this.routerParams=t;this.apiSvc=e}ptypeId;ptype;ngOnInit(){this.routerParams.params.subscribe(t=>{this.ptypeId=t.ptypeId,this.getPType()})}getPType(){this.apiSvc.getPType(this.ptypeId).subscribe(t=>{this.ptype=t;let e=t.typeName+" - Api Helper";Je.setTitle(e)})}viewPType(t){Je.goTo("/workbench/ptype/"+(t.isIEnumerable?t.enumItemId:t.typeId),{replaceUrl:!0}),history.pushState(null,null,location.href)}nameSortFn(t,e,r){return t.name.localeCompare(e.name)}valueSortFn(t,e,r){return t.paramValue-e.paramValue}typeSortFn(t,e,r){return t.typeName.localeCompare(e.typeName)}goback(){history.back()}static \u0275fac=function(e){return new(e||a)(Te(et),Te(qe))};static \u0275cmp=Ee({type:a,selectors:[["app-ptype"]],decls:2,vars:1,consts:[["piListTable",""],[2,"padding","20px 80px"],[4,"ngIf"],["nz-row",""],["nz-col","","nzSpan","20",1,"p10"],[1,"lh40"],[1,"f-size30"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml50","w80",3,"routerLink"],["class","mt10",4,"ngIf"],["nz-col","","nzSpan","4",1,"h60","lh60","valign-bottom"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml50","w80",3,"click"],[1,"mt30"],["nzSize","small",3,"nzShowPagination","nzPageSize","nzData"],[1,"w240",3,"nzShowSort","nzSortFn"],["class","w240",3,"nzShowSort","nzSortFn",4,"ngIf"],[1,"wp30"],[4,"ngFor","ngForOf"],[1,"mt10"],[1,"f-size16"],["class","pl20",4,"ngIf"],[1,"pl20"],[3,"click",4,"ngIf"],[3,"click"]],template:function(e,r){e&1&&(S(0,"div",1),ee(1,pr,27,12,"div",2),C()),e&2&&(b(),F("ngIf",r.ptype))},dependencies:[Ye,De,pt,Le,Pe,ot,at,We,ht,Re,Ve,Be,Ue,je]})};var yn=Si(cn()),gn=Si(un());var Wt=class{static getListPageHtmlCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=`<div>
    <nz-page-header class="contentPageHeader">
        <nz-page-header-subtitle>@modelSummary</nz-page-header-subtitle>
        <nz-page-header-extra>
            <button nz-button [nzType]="'primary'" (click)="add@modelName()">\u65B0\u589E</button>
        </nz-page-header-extra>
    </nz-page-header>
    <!--Content-->
    <nz-card [nzSize]="'small'">
        @queryFormCode
    </nz-card>
    <nz-card class="mt5">
        @tableListCode
    </nz-card>
</div>`,d=this.getQueryFormCode(t),f=this.getTableListCode(t);return n=s.replace(/@modelName/g,e).replace(/@modelSummary/g,i).replace(/@queryFormCode/g,d).replace(/@tableListCode/g,f),n}static getQueryFormCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=`<form nz-form>
            <div class="pt24">@queryItemCode
            </div>
            <div *ngIf="isShowMore">@queryMoreItemCode
            </div>
            <div nz-row>
                <div nz-col [nzSpan]="24" class="tar">
                    <button nz-button [nzType]="'primary'" (click)="query@modelClassNameList(true)">\u67E5\u8BE2</button>
                    <button nz-button (click)="resetForm()" class="ml20 mr20">\u91CD\u7F6E</button>
                    <a class="collapse" (click)="isShowMore = !isShowMore">
                        {{ isShowMore ? '\u6536\u8D77' : '\u9AD8\u7EA7' }}
                        <span nz-icon [nzType]="isShowMore ? 'up' : 'down'"></span>
                    </a>
                </div>
            </div>
        </form>`,d=0,f=t.piList.filter(p=>p.isQuery),_="",h="";for(let p of f){let g=this.getQueryItemCode(t,p);d<=5?(d%3==0&&(_+=`
                <div nz-row [nzGutter]="24">`),_+=g,(d%3==2||d==f.length-1)&&(_+=`
                </div>`)):(d%3==0&&(h+=`
                <div nz-row [nzGutter]="24">`),h+=g,(d%3==2||d==f.length-1)&&(h+=`
                </div>`)),d++}return n=s.replace(/@queryItemCode/g,_).replace(/@queryMoreItemCode/g,h).replace(/@modelClassName/g,r),n}static getQueryItemCode(t,e){let r="",i="",n=J.firstToLower(t.name),s=t.name,d=t.summary?t.summary:n,f=J.firstToLower(e.name),_=e.summary?e.summary:f;return e.queryDisplayType=="RadioGroup"?i=`<div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="10" [nzLg]="10">
                        <nz-form-item>
                            <nz-form-label class="w80">@piSummary</nz-form-label>
                            <nz-form-control>
                                <nz-radio-group name="@piName" [(ngModel)]="queryObj.@piName"
                                    (ngModelChange)="query@modelClassNameList(true)">
                                    <label nz-radio [nzValue]="null">\u5168\u90E8</label>
                                    <label nz-radio *ngFor="let @piName of @piNames" [nzValue]="@piName.value">{{@piName.displayName}}</label>
                                </nz-radio-group>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`:e.queryDisplayType=="Select"?i=`<div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="10" [nzLg]="10">
                        <nz-form-item>
                            <nz-form-label class="w80">@piSummary</nz-form-label>
                            <nz-form-control>
                                <nz-select name="@piName" [(ngModel)]="queryObj.@piName" nzAllowClear nzPlaceHolder="-- \u8BF7 \u9009 \u62E9 --">
                                    <nz-option *ngFor="let @piName of @piNames" [nzValue]="@piName.value"
                                        [nzLabel]="@piName.displayName"></nz-option>
                                </nz-select>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`:e.queryDisplayType=="DatePicker"?i=`
                    <div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="8" [nzLg]="8">
                        <nz-form-item>
                            <nz-form-label class="w80">@piSummary</nz-form-label>
                            <nz-form-control>
                                <nz-date-picker name="@piName" [(ngModel)]="queryObj.@piNameRange"></nz-date-picker>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`:e.queryDisplayType=="RangePicker"?i=`
                    <div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="8" [nzLg]="8">
                        <nz-form-item>
                            <nz-form-label class="w80">@piSummary</nz-form-label>
                            <nz-form-control>
                                <nz-range-picker name="@piName" [(ngModel)]="queryObj.@piNameRange"></nz-range-picker>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`:e.queryDisplayType=="Checkbox"?i=`
                    <div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="8" [nzLg]="8">
                        <nz-form-item>
                            <nz-form-label class="w80">@piSummary</nz-form-label>
                            <nz-form-control>                            
                                <label nz-checkbox name="@piName" [(ngModel)]="queryObj.@piName">@piSummary</label>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`:e.queryDisplayType=="InputNumber"?i=`
                    <div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="8" [nzLg]="8">
                        <nz-form-item>
                            <nz-form-label class="w80">@piName</nz-form-label>
                            <nz-form-control>
                                <nz-input-group [nzSuffix]="inputClearTpl">
                                    <input nz-input name="@piName" type="number" [(ngModel)]="queryObj.@piName"
                                        placeholder="\u8BF7\u8F93\u5165@piSummary" />
                                </nz-input-group>
                                <ng-template #inputClearTpl>
                                    @if (queryObj.@piName) {
                                    <span nz-icon class="ant-input-clear-icon" nzTheme="fill" nzType="close-circle"
                                        (click)="queryObj.@piName = null"></span>
                                    }
                                </ng-template>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`:i=`
                    <div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="8" [nzLg]="8">
                        <nz-form-item>
                            <nz-form-label class="w80">@piName</nz-form-label>
                            <nz-form-control>
                                <nz-input-group [nzSuffix]="inputClearTpl">
                                    <input nz-input name="@piName" [(ngModel)]="queryObj.@piName"
                                        placeholder="\u8BF7\u8F93\u5165@piSummary" />
                                </nz-input-group>
                                <ng-template #inputClearTpl>
                                    @if (queryObj.@piName) {
                                    <span nz-icon class="ant-input-clear-icon" nzTheme="fill" nzType="close-circle"
                                        (click)="queryObj.@piName = null"></span>
                                    }
                                </ng-template>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`,r=i.replace(/@modelClassName/g,s).replace(/@piName/g,f).replace(/@piSummary/g,_),r}static getTableListCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n=`<nz-table #@modelName nzSize='default' [nzFrontPagination]='false' nzShowSizeChanger [nzData]='@modelNameList'
          [nzLoading]='loading' [nzTotal]="totalCount" [nzShowTotal]="totalTemplate"
          [nzPageIndex]="queryObj.pageIndex" [nzPageSize]="queryObj.pageSize"
          (nzQueryParams)="onQueryParamsChange($event)">
          <thead>
              <tr>@theadListCode
              </tr>
          </thead>
          <tbody>
              @for (@modelName of @modelNameList; track $index) {
              <tr>@tbodyListCode
              </tr>
              }
          </tbody>
          <ng-template #totalTemplate let-total>
              <span class="mr10">\u5171 {{ total }} \u6761\u8BB0\u5F55</span>
          </ng-template>
      </nz-table>`,s=t.piList.filter(p=>p.isList),d="",f="";for(let p of s){let g=J.firstToLower(p.name),m=p.summary?p.summary:g,c=`
                <th nz-th${p.isListSort?' [nzSortFn]="true" nzColumnKey="@piName"':""}>@piSummary</th>`,v=`
                <td>{{ @modelName.@piName }}</td>`;p.listDisplayType=="Text"&&(p.tsType=="Date"?v=`
                <td>{{ @modelName.@piName | date:'yyyy-MM-dd HH:mm:ss' }}</td>`:v=`
                <td>{{ @modelName.@piName }}</td>`),p.listDisplayType=="Tag"&&(v=`
                <td><nz-tag [nzColor]="'cyan'">{{ @modelName.@piName }}</nz-tag></td>`),p.listDisplayType=="Pre"?v=`
                <td><pre>{{ @modelName.@piName }}</pre></td>`:p.listDisplayType=="ProgressBar"?v=`
                <td><nz-progress [nzPercent]="@modelName.@piName" nzSize="small"></nz-progress></td>`:p.listDisplayType=="Rate"?v=`
                <td><nz-rate [ngModel]="@modelName.@piName" nzAllowHalf nzDisabled></nz-rate></td>`:p.listDisplayType=="Switch"?v=`
                <td><nz-switch [ngModel]="@modelName.@piName" nzDisabled></nz-switch></td>`:p.listDisplayType=="Checkbox"&&(v=`
                <td><label nz-checkbox [ngModel]="@modelName.@piName" nzDisabled></label></td>`),c=c.replace(/@piName/g,g).replace(/@piSummary/g,m),v=v.replace(/@modelName/g,e).replace(/@piName/g,g),d+=c,f+=v}let _=`
                <th nz-th>\u64CD\u4F5C</th>`,h=`
                <td>
                    <a (click)="view@modelClassName(@modelName)">\u67E5\u770B</a>
                    <a (click)="edit@modelClassName(@modelName)" class="ml10">\u7F16\u8F91</a>
                    <a (click)="delete@modelClassName(@modelName)" class="ml10" [nzType]="'danger'">\u5220\u9664</a>
                </td>`;return d+=_,f+=h,n=n.replace("@theadListCode",d),n=n.replace("@tbodyListCode",f),n=n.replace(/@modelName/g,e),n=n.replace(/@modelClassName/g,r),n}};var me=class{static getEnumPiInitCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n=`
  /**
   * \u521D\u59CB\u5316@piSummary
   */
  init@piClassName(): void {
    this.enumSvc.getEnumItem('@piClassName').subscribe((items: EnumItem[]) => {
      this.@piNames = items;
    });
  }`;return n=n.replace(/@piSummary/g,i).replace(/@piName/g,e).replace(/@piClassName/g,r),n}static getKeyvalueItemPiInitCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n=`
  /**
   * \u521D\u59CB\u5316@piSummary\u5217\u8868
   */
  init@piClassNames(): void {
    this.keyvalueItemSvc.getKeyValueItemByCode("@piClassName").subscribe((items: KeyValueItem[]) => {
      // this.@piNameItems = items;
    });
  }`;return n=n.replace(/@piSummary/g,i).replace(/@piName/g,e).replace(/@piClassName/g,r),n}static getAddFunctionCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="";return t.editPageType=="Page"?n=`
  /*\u6DFB\u52A0@modelSummary*/
  add@modelClassName(): void {
    Util.goTo("/@modelNameedit/add");
  }`:n=`
  /*\u6DFB\u52A0@modelSummary*/
  add@modelClassName(): void {
    let @modelName = new @modelClassName();
    this.edit@modelClassName(@modelName);
  }`,n=n.replace(/@modelName/g,e).replace(/@modelClassName/g,r).replace(/@modelSummary/g,i),n}static getEditFunctionCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="";return t.editPageType=="Page"?n=`
  /*\u7F16\u8F91@modelSummary*/
  edit@modelClassName(@modelName: @modelClassName): void {
    Util.goTo("/@modelNameedit/edit/" + @modelName.id);
  }`:n=`
  /*\u7F16\u8F91@modelSummary*/
  edit@modelClassName(@modelName: @modelClassName): void {
    let title = @modelName.id ? "\u7F16\u8F91@modelSummary" : "\u6DFB\u52A0@modelSummary";
    const modal: NzModalRef = this.modalSvc.create({
      nzTitle: title,
      nzWidth: 720,
      nzContent: @modelClassNameEditModalComponent,
      nzData: { @modelName: @modelName },
      nzCentered: true,
      nzMaskClosable: false,
      nzNoAnimation: true,
      nzOkText: null,
      nzCancelText: null,
    });
    modal.afterClose.subscribe((result) => {
      if (result) {
        this.query@modelClassNameList(true);
      }
    });
  }`,n=n.replace(/@modelName/g,e).replace(/@modelClassName/g,r).replace(/@modelSummary/g,i),n}static getViewDetailFunctionCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="";return t.editPageType=="Page"?n=`
  /*\u67E5\u770B@modelSummary\u8BE6\u60C5*/
  view@modelClassName(@modelName: @modelClassName): void {
    Util.goTo("/systemmanage/@modelNamedetail/" + @modelName.id);
    //this.view@modelClassNameModal(@modelName);
  }`:n=`
  /*\u67E5\u770B@modelSummary\u8BE6\u60C5*/
  view@modelClassName(@modelName: @modelClassName): void {
    this.modalSvc.create({
      nzTitle: "\u67E5\u770B@modelSummary",
      nzWidth: 720,
      nzContent: @modelClassNameDetailModalComponent,
      nzData: { @modelNameId: @modelName.id },
      nzCentered: true,
      nzMaskClosable: false,
      nzNoAnimation: true,
      nzOkText: null,
      nzCancelText: null,
    });
  }`,n=n.replace(/@modelName/g,e).replace(/@modelClassName/g,r).replace(/@modelSummary/g,i),n}static geteditCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n=`
  /**
   * \u521D\u59CB\u5316@piSummary\u5217\u8868
   */
  init@piClassNames(): void {
    this.keyvalueItemSvc.getKeyValueItemByCode("@piClassName").subscribe((items: KeyValueItem[]) => {
      // this.@piNameItems = items;
    });
  }`;return n=n.replace(/@piSummary/g,i).replace(/@piName/g,e).replace(/@piClassName/g,r),n}static getPiQueryDisplayType(t){let e="Input";return t.isEnum||t.isKeyvalueItem?e=Ze.defaultQueryType:t.tsType==="Date"?e=Xe.defaultQueryType:t.tsType=="boolean"?e=$e.defaultQueryType:t.tsType=="number"?e=Ke.defaultQueryType:t.tsType=="string"?e=Qe.defaultQueryType:e="Input",e}static getPiListDisplayType(t){let e="Text";return t.isEnum||t.isKeyvalueItem?e=Ze.defaultListType:t.tsType=="Date"?e=Xe.defaultListType:t.tsType=="boolean"?e=$e.defaultListType:t.tsType=="number"?e=Ke.defaultListType:t.tsType=="string"?e=Qe.defaultListType:e="Text",e}static getPiEditDisplayType(t){let e="Input";return t.isEnum||t.isKeyvalueItem?e=Ze.defaultEditType:t.tsType=="Date"?e=Xe.defaultEditType:t.tsType=="boolean"?e=$e.defaultEditType:t.tsType=="number"?e=Ke.defaultEditType:t.tsType=="string"?e=Qe.defaultEditType:e="Input",e}static getPiDetailDisplayType(t){let e="Text";return t.isEnum||t.isKeyvalueItem?e=Ze.defaultDisplayType:t.tsType=="Date"?e=Xe.defaultDisplayType:t.tsType=="boolean"?e=$e.defaultDisplayType:t.tsType=="number"?e=Ke.defaultDisplayType:t.tsType=="string"?e=Qe.defaultDisplayType:e="Text",e}static getPiQueryDisplayTypeList(t){let e=["Input"];return t.isEnum||t.isKeyvalueItem?e=Ze.getQueryType():t.tsType=="Date"?e=Xe.getQueryType():t.tsType=="boolean"?e=$e.getQueryType():t.tsType=="number"?e=Ke.getQueryType():t.tsType=="string"?e=Qe.getQueryType():e=["Input"],e}static getPiListDisplayTypeList(t){let e=["Text"];return t.isEnum||t.isKeyvalueItem?e=Ze.getDisplayType():t.tsType=="Date"?e=Xe.getDisplayType():t.tsType=="boolean"?e=$e.getDisplayType():t.tsType=="number"?e=Ke.getDisplayType():t.tsType=="string"?e=Qe.getDisplayType():e.Text,e}static getPiEditDisplayTypeList(t){let e=["Input"];return t.isEnum||t.isKeyvalueItem?e=Ze.getEditType():t.tsType=="Date"?e=Xe.getEditType():t.tsType=="boolean"?e=$e.getEditType():t.tsType=="number"?e=Ke.getEditType():t.tsType=="string"?e=Qe.getEditType():e=["Input"],e}static getPiDetailDisplayTypeList(t){let e=["Input"];return t.isEnum||t.isKeyvalueItem?e=Ze.getDisplayType():t.tsType=="Date"?e=Xe.getDisplayType():t.tsType=="boolean"?e=$e.getDisplayType():t.tsType=="number"?e=Ke.getDisplayType():t.tsType=="string"?e=Qe.getDisplayType():e=["Input"],e}};var jt=class a{static getListPageTsCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=a.getTsTemplate(),d="",f="",_="",h=t.piList.filter(p=>p.isQuery);if(h.filter(p=>p.isKeyvalueItem).length>0){let p=h.filter(g=>g.isKeyvalueItem);for(let g of p){let m=J.firstToLower(g.name),u=g.name;d+=`
  ${m}s: KeyvalueItem[] = [];`,_+=me.getKeyvalueItemPiInitCode(g),f+=`
    this.init${u}();`}}else if(h.filter(p=>p.isEnum).length>0){let p=h.filter(g=>g.isEnum);for(let g of p){let m=J.firstToLower(g.name),u=g.name;d+=`
  ${m}s: EnumItem[] = [];`,_+=me.getEnumPiInitCode(g),f+=`
    this.init${u}();`}}return _+=me.getAddFunctionCode(t),_+=me.getEditFunctionCode(t),_+=me.getViewDetailFunctionCode(t),n=s.replace(/@expandPropertyCode/g,d).replace(/@expandInitCode/g,f).replace(/@expandFunctionCode/g,_).replace(/@modelName/g,e).replace(/@modelClassName/g,r).replace(/@modelSummary/g,i),n}static getTsTemplate(){return`import { Component, OnInit } from "@angular/core";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { Util } from "@core/util";
import { @modelClassName, @modelClassNameQueryObj } from "@models/@modelName";
import { PageResult } from "@models/page";
import { EnumItem } from "@models/enumitem";
import { KeyValueItem } from "@models/keyvalue";
import { @modelClassNameService } from "@services/@modelNameservice";
import { EnumService } from "@services/enumservice";
import { KeyValueItemService } from "@services/keyvalueitemservice";
import { @modelClassNameEditModalComponent } from "../@modelNameeditmodal/@modelNameedit.component";
import { @modelClassNameDetailModalComponent } from "../@modelNamedetailmodal/@modelNamedetailmodal.component";

@Component({
  selector: "@modelName-@modelNamelist",
  templateUrl: "./@modelNamelist.component.html",
  styleUrl: "./@modelNamelist.component.less",
})
export class @modelClassNameListComponent implements OnInit {
  loading = false;
  totalCount: number = 0;
  queryObj: @modelClassNameQueryObj = new @modelClassNameQueryObj();
  @modelNameList: @modelClassName[] = [];  
  @expandPropertyCode

  constructor(
    private modalSvc: NzModalService,
    private enumSvc: EnumService,
    private keyvalueItemSvc: KeyValueItemService,
    private @modelNameSvc: @modelClassNameService
  ) {}

  ngOnInit(): void {
    Util.setTitle("@modelSummary\u7BA1\u7406");    
    @expandInitCode
    this.query@modelClassNameList();
  }
  
  /**
   * \u67E5\u8BE2\u53C2\u6570\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570
   *
   * @param params \u67E5\u8BE2\u53C2\u6570\u5BF9\u8C61
   * @returns \u65E0\u8FD4\u56DE\u503C
   */
  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    if (
      this.queryObj.pageSize != pageSize ||
      this.queryObj.pageIndex != pageIndex ||
      this.queryObj.sort != sortField ||
      this.queryObj.order != sortOrder
    ) {
      // \u89E3\u51B3\u754C\u9762\u521D\u59CB\u5316\u65F6,\u81EA\u52A8\u89E6\u53D1\u67E5\u8BE2\u95EE\u9898,\u754C\u9762\u4FEE\u6539\u4E3A\u5355\u5411\u7ED1\u5B9A,\u53EA\u6709\u4E0EqueryObj\u7684\u503C\u5BF9\u6BD4\u53D8\u5316\u65F6\u624D\u91CD\u65B0\u67E5\u8BE2
      this.queryObj.pageSize = pageSize;
      this.queryObj.pageIndex = pageIndex;
      this.queryObj.sort = sortField || null;
      this.queryObj.order = sortOrder ? sortOrder.replace("end", "") : null;
      this.query@modelClassNameList();
    }
  }

  /**
   * \u67E5\u8BE2@modelSummary\u5217\u8868
   *
   * @param isReload \u662F\u5426\u91CD\u65B0\u52A0\u8F7D\u5217\u8868\uFF0C\u9ED8\u8BA4\u4E3A false
   */
  query@modelClassNameList(isReload: boolean = false): void {
    this.loading = true;
    if (isReload) {
      this.queryObj.pageIndex = 1;
    }
    this.@modelNameSvc.query@modelClassNameList(this.queryObj).subscribe({
      next: (pgResult: PageResult<@modelClassName>) => {
        this.@modelNameList = pgResult.rows;
        this.totalCount = pgResult.total;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
      },
    });
  }
  @expandFunctionCode

  /*\u5220\u9664@modelSummary*/
  delete@modelClassName(@modelName: @modelClassName): void {
    Util.showConfirmBox("\u786E\u8BA4\u8981\u5220\u9664@modelSummary" + @modelName.name + "\u5417?").subscribe((res) => {
      if (res) {
        this.@modelNameSvc.delete@modelClassName(@modelName.id).subscribe(() => {
          this.query@modelClassNameList();
        });
      }
    });
  }
}`}};var Bt=class{static getListPageLessCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n=`::ng-deep {
@ngcss
}`,s="",d=t.piList;return d.filter(f=>f.isList&&f.listDisplayType=="Switch").length>0&&(s+=`
  .ant-switch-loading,
  .ant-switch-disabled {
    cursor: not-allowed;
    opacity: 1;
  }
`),d.filter(f=>f.isList&&f.listDisplayType=="Checkbox").length>0&&(s+=`
  .ant-checkbox-disabled .ant-checkbox-inner {
    background-color: #fff !important;
    border-color: var(--ant-primary-color) !important;
  }
  .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: var(--ant-primary-color);
  }
`),n=n.replace(/@ngcss/g,s),n}};var qt=class{static getListPageNode(t){let e=t.id.toLowerCase(),r=t.name.toLowerCase(),i={title:r+"list",key:e+"list",expanded:!1,children:[]},n={title:r+"list.component.html",key:e+"list.component.html",isLeaf:!0,code:Wt.getListPageHtmlCode(t),language:"html"},s={title:r+"list.component.less",key:e+"list.component.less",isLeaf:!0,code:Bt.getListPageLessCode(t),language:"less"},d={title:r+"list.component.ts",key:e+"list.component.ts",isLeaf:!0,code:jt.getListPageTsCode(t),language:"typescript"};return i.children.push(n),i.children.push(s),i.children.push(d),i}};var Gt=class{static getEditPageHtmlCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=`<nz-page-header>
    <nz-page-header-subtitle>{{@modelNameId ? '\u7F16\u8F91@modelSummary':'\u65B0\u589E@modelSummary'}}</nz-page-header-subtitle>
</nz-page-header>
<!--Content-->
<nz-card nzBordered="false">
    @editFormCode
</nz-card>
</div>`,d=this.getEditFormCode(t);return n=s.replace(/@modelName/g,e).replace(/@modelSummary/g,i).replace(/@editFormCode/g,d),n}static getEditFormCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=`<nz-form [formGroup]="editForm" nzLayout="vertical">@editItemCode
        <div nz-row class="mt35">
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12" class="tac">
                <button nz-button nzType="primary" class="w100" (click)="save()">\u4FDD\u5B58</button>
                <button nz-button nzType="primary" class="w100 ml50" (click)="back()">\u53D6\u6D88</button>
            </div>
        </div>
    </nz-form>`,d=0,f=t.piList.filter(h=>h.isEdit),_="";for(let h of f){let p=this.getEditItemCode(t,h);_+=p,d++}return n=s.replace(/@editItemCode/g,_).replace(/@modelName/g,e).replace(/@modelClassName/g,r),n}static getEditItemCode(t,e){let r="",i="",n=J.firstToLower(t.name),s=t.name,d=t.summary?t.summary:n,f=J.firstToLower(e.name),_=e.summary?e.summary:f,h=e.isRequire??f;return e.editDisplayType=="Select"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label nzRequired class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u9009\u62E9@piSummary"':""}>
                        <nz-select formControlName="@piName" nzAllowClear nzPlaceHolder="-- \u8BF7 \u9009 \u62E9 --">
                            <nz-option *ngFor="let @piName of @piNames" [nzValue]="@piName.value"
                                [nzLabel]="@piName.displayName"></nz-option>
                        </nz-select>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="RadioGroup"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control>
                        <nz-radio-group formControlName="@piName">
                            <label nz-radio *ngFor="let @piName of @piNames" [nzValue]="@piName.value">{{@piName.displayName}}</label>
                        </nz-radio-group>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="Switch"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control>
                        <nz-switch formControlName="@piName"></nz-switch>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="Checkbox"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control>
                        <label nz-checkbox formControlName="@piName"></label>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="DatePicker"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u9009\u62E9@piSummary"':""}>
                        <nz-date-picker formControlName="@piName"></nz-date-picker>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="Rate"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u8BBE\u7F6E@piSummary"':""}>
                        <nz-rate formControlName="@piName" nzAllowHalf></nz-rate>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="UploadFile"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u8BBE\u7F6E@piSummary"':""}>   
                        @if (!uploadFile)                     
                        <a style="position: relative;" href="javascript:void(0)">
                            <button nz-button class="w120 mr10" nzType="primary" nzGhost>\u9009\u62E9\u6587\u4EF6</button>
                            <input type="file" accept=".doc" name="file" (change)="selectUploadFiles($event)"
                                style="position: absolute; top: 0; left: 0; opacity: 0;" />
                        </a>
                        }
                        @else if (uploadFile.fileStatus ==1) {
                        <div nz-row [nzGutter]="16">
                            <div nz-col nzSpan="10">
                                <nz-progress [nzPercent]="uploadFile.progress"></nz-progress>
                            </div>
                            <div nz-col nzSpan="12">
                                <a (click)='cancelUpload()'>
                                    \u53D6\u6D88\u4E0A\u4F20
                                </a>
                            </div>
                        </div>
                        } @else if (uploadFile.fileStatus!=1) {
                        <a [title]="uploadFile.fileName" class="maxw200">
                            {{uploadFile.fileName}}
                        </a>
                        <a class="ml10" (click)='deleteUploadFile()'>
                            <span nz-icon nzType="delete" nzTheme="outline"></span>
                        </a>
                        <span *ngIf="uploadFile.fileStatus==2 || uploadFile.fileStatus == 3" class="ml10 color-red">
                            {{uploadFile.fileStatusStr}}
                            <span class="ml10 maxw200" [title]="uploadFile.fileStatusNote">
                                {{uploadFile.fileStatusNote |nzEllipsis:36:'...'}}
                            </span>
                        </span>
                        }
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="TextArea"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u8BBE\u7F6E@piSummary"':""}>
                        <textarea nz-input formControlName="@piName" rows="4" placeholder="\u8BF7\u8F93\u5165@piSummary" nzAutoSize></textarea>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="InputNumber"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u8F93\u5165@piSummary"':""}>
                        <input nz-input type="number" formControlName="@piName" placeholder="\u8BF7\u8F93\u5165@piSummary" />
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piName</nz-form-label>
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u8F93\u5165@piSummary"':""}>
                        <input nz-input formControlName="@piName" placeholder="\u8BF7\u8F93\u5165@piSummary" />
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`,r=i.replace(/@modelClassName/g,s).replace(/@piName/g,f).replace(/@piSummary/g,_),r}};var Ht=class a{static getEditPageTsCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=a.getTsTemplate(),d=t.piList.filter(m=>m.isEdit),f="",_="";for(let m of d){let u=J.firstToLower(m.name),c=m.tsType,v=m.isRequire,T="''";switch(c){case"string":T="''";break;case"number":T="0";break;case"boolean":T="false";break;case"date":T="null";break;default:T="null";break}f+=`    ${u}: FormControl<${c}>;`,_+=`      ${u}: [${T}, ${v?"Validators.required":""}],`}let h="",p="",g="";if(d.filter(m=>m.isKeyvalueItem).length>0){let m=d.filter(u=>u.isKeyvalueItem);for(let u of m){let c=J.firstToLower(u.name),v=u.name;h+=`
  ${c}s: KeyvalueItem[] = [];`,g+=me.getKeyvalueItemPiInitCode(u),p+=`
    this.init${v}();`}}else if(d.filter(m=>m.isEnum).length>0){let m=d.filter(u=>u.isEnum);for(let u of m){let c=J.firstToLower(u.name),v=u.name;h+=`  ${c}s: EnumItem[] = [];`,g+=me.getEnumPiInitCode(u),p+=`
    this.init${v}();`}}return d.filter(m=>m.editDisplayType=="UploadFile").length>0&&(h+="",g+=a.getUploadFileFunctionCode()),n=s.replace(/@expandPropertyCode/g,h).replace(/@expandInitCode/g,p).replace(/@expandFunctionCode/g,g).replace(/@editItemCode/g,f).replace(/@editItemBuildCode/g,_).replace(/@modelName/g,e).replace(/@modelClassName/g,r).replace(/@modelSummary/g,i),n}static getTsTemplate(){return`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { @modelClassName } from '@models/@modelName';
import { @modelClassNameService } from '@services/@modelNameservice';
import { EnumService } from '@services/enumservice';
import { EnumItem } from '@models/enumitem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-@modelNameeditpage',
  templateUrl: './@modelNameedit.component.html',
  styleUrl: './@modelNameedit.component.less',
})
export class @modelClassNameEditComponent implements OnInit {
  @modelNameId: string;
  @modelName: @modelClassName = new @modelClassName();  
  @expandPropertyCode
  editForm!: FormGroup<{
    @editItemCode
  }>;

  loading = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private enumSvc: EnumService,
    private @modelNameSvc: @modelClassNameService
  ) {}

  ngOnInit(): void {
    this.@modelNameId = this.route.snapshot.params['id'];    
    this.editForm = this.formBuilder.group({
      @editItemBuildCode
    });
    @expandInitCode
    if (this.@modelNameId) {
      this.get@modelClassName();
    }
  }

  /*\u83B7\u53D6@modelSummary*/
  get@modelClassName(): void {
    this.@modelNameSvc.get@modelClassNameById(this.@modelNameId).subscribe((@modelName) => {
      this.@modelName = @modelName;
      this.editForm.patchValue(this.@modelName);
    });
  }  
  @expandFunctionCode

  /**
   * \u63D0\u4EA4\u8868\u5355\uFF0C\u4FDD\u5B58@modelSummary
   */
  save() {
    if (!this.editForm.valid) {
      Object.values(this.editForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    let formValue = this.editForm.value;
    this.@modelName = { ...this.@modelName, ...formValue };
    this.@modelNameSvc.set@modelClassName(this.@modelName).subscribe((res) => {
      this.back();
    });
  }

  /**
   * \u8FD4\u56DE\u4E0A\u4E00\u9875
   */
  back(): void {
    history.back();
  }
}
`}static getUploadFileFunctionCode(){return`
  /*\u9009\u62E9\u6587\u4EF6*/
  selectUploadFiles(event): void {
    const file = event.target.files[0];
    let fileObj = new FileObj();
    fileObj.fileName = file.name;
    fileObj.fileSize = file.size;
    fileObj.fileType = file.extension || "";
    fileObj.progress = 0;
    fileObj.progressStr = "";
    fileObj.file = file;
    fileObj.fileStatus = file.size > 0 ? 0 : -1;
    this.uploadFile = fileObj;
    this.editForm.patchValue({ fileName: fileObj.fileName });
  }
  
  /**
   * \u4E0A\u4F20\u6587\u4EF6\u524D\u7684\u9884\u5904\u7406
   *
   * @param orderSeriesObj \u8BA2\u5355\u7CFB\u5217\u5BF9\u8C61
   * @returns \u65E0\u8FD4\u56DE\u503C
   */
  preUploadFile(uploadFile: FileObj): void {
    // \u521B\u5EFA UploadApply \u5BF9\u8C61
    uploadFile.fileStatus = 1;
    uploadFile.fileStatusStr = "\u4E0A\u4F20\u4E2D";
    const uploadApply = new UploadApply();
    uploadApply.bussinessId = this.@modelName.id;
    uploadApply.name = uploadFile.fileName;
    uploadApply.fileType = uploadFile.fileType;
    uploadApply.fileSize = uploadFile.fileSize;
    uploadApply.md5 = uploadFile.md5;
    this.@modelNameSvc.preUploadFile(uploadApply).subscribe((token: StsTokenUpload) => {
      this.uploadOssFile(token, uploadFile.file);
    });
  }

  /*\u4E0A\u4F20\u6587\u4EF6*/
  uploadOssFile(token: StsTokenUpload, file: File): void {
    this.updateUploadStatus(1, "\u6B63\u5728\u4E0A\u4F20", 0);
    let ossAccess = token;
    let ossClient = new OSS({
      region: "oss-cn-beijing",
      accessKeyId: ossAccess.authToken.accessId,
      accessKeySecret: ossAccess.authToken.accessSecrect,
      stsToken: ossAccess.authToken.securityToken,
      accessDir: ossAccess.authToken.accessDir,
      accessPath: ossAccess.authToken.accessPath,
      bucket: ossAccess.authToken.bucketName,
    });
    ossClient
      .multipartUpload(ossAccess.authToken.accessPath, file, {
        progress: (p) => {
          if (this.uploadFile.fileStatus == 3) {
            throw new Error("\u5DF2\u53D6\u6D88\u4E0A\u4F20");
          }
          this.updateProgress(p);
        },
      })
      .then((result) => {
        this.finishUpload(token);
      })
      .catch((err) => {
        if (this.uploadFile.fileStatus != 3) {
          this.updateUploadStatus(2, "\u4E0A\u4F20\u5F02\u5E38", err.message || "\u4E0A\u4F20\u5931\u8D25");
        }
      });
  }

  /*\u53D6\u6D88\u4E0A\u4F20\u6587\u4EF6*/
  cancelUpload() {
    this.updateUploadStatus(3, "\u5DF2\u53D6\u6D88\u4E0A\u4F20", "");
  }

  /*\u4E0A\u4F20\u72B6\u6001\u66F4\u65B0*/
  updateUploadStatus(status, statusStr, statusNote): void {
    this.uploadFile.fileStatus = status;
    this.uploadFile.fileStatusStr = statusStr;
    this.uploadFile.fileStatusNote = statusNote;
  }

  /*\u8FDB\u5EA6\u6761\u8BBE\u7F6E*/
  updateProgress(p) {
    let progress = Math.floor(p * 100); // \u8F6C\u6362\u4E3A\u767E\u5206\u6BD4\u6574\u6570
    this.uploadFile.progress = progress;
    this.uploadFile.progressStr = progress.toString() + '%';
  }

  /*\u5B8C\u6210\u4E0A\u4F20\u6587\u4EF6*/
  finishUpload(token: StsTokenUpload): void {
    this.@modelNameSvc.finishUpload(token.uploadKey).subscribe((ossFileId: string) => {
      this.updateUploadStatus(4, "\u5DF2\u4E0A\u4F20", 100);
      this.@modelName.ossFileId = ossFileId;
      if (this.saveMode == 0) {
        // \u4FDD\u5B58
        this.save();
      }
    });
  }  
  `}};var Zt=class{static getEditPageNode(t){let e=t.id.toLowerCase(),r=t.name.toLowerCase(),i={title:r+"edit",key:e+"edit",expanded:!1,children:[]},n={title:r+"edit.component.html",key:e+"edit.component.html",isLeaf:!0,code:Gt.getEditPageHtmlCode(t),language:"html"},s={title:r+"edit.component.less",key:e+"edit.component.less",isLeaf:!0,code:"",language:"less"},d={title:r+"edit.component.ts",key:e+"edit.component.ts",isLeaf:!0,code:Ht.getEditPageTsCode(t),language:"typescript"};return i.children.push(n),i.children.push(s),i.children.push(d),i}};var Kt=class{static getEditModalHtmlCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=`<nz-card nzBordered="false" [nzSize]="'small'">
    @editFormCode
</nz-card>`,d=this.getEditFormCode(t);return n=s.replace(/@modelName/g,e).replace(/@modelSummary/g,i).replace(/@editFormCode/g,d),n}static getEditFormCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=`<nz-form [formGroup]="editForm" nzLayout="vertical">@editItemCode
        <div nz-row class="mt35">
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12" class="tac">
                <button nz-button nzType="primary" class="w80" (click)="save()">\u4FDD\u5B58</button>
                <button nz-button nzType="primary" class="w80 ml50" (click)="back()">\u53D6\u6D88</button>
            </div>
        </div>
    </nz-form>`,d=0,f=t.piList.filter(h=>h.isEdit),_="";for(let h of f){let p=this.getEditItemCode(t,h);_+=p,d++}return n=s.replace(/@editItemCode/g,_).replace(/@modelName/g,e).replace(/@modelClassName/g,r),n}static getEditItemCode(t,e){let r="",i="",n=J.firstToLower(t.name),s=t.name,d=t.summary?t.summary:n,f=J.firstToLower(e.name),_=e.summary?e.summary:f,h=e.isRequire??f;return e.editDisplayType=="Select"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label nzRequired class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u9009\u62E9@piSummary"':""}>
                        <nz-select formControlName="@piName" nzAllowClear nzPlaceHolder="-- \u8BF7 \u9009 \u62E9 --">
                            <nz-option *ngFor="let @piName of @piNames" [nzValue]="@piName.value"
                                [nzLabel]="@piName.displayName"></nz-option>
                        </nz-select>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="RadioGroup"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control>
                        <nz-radio-group formControlName="@piName">
                            <label nz-radio *ngFor="let @piName of @piNames" [nzValue]="@piName.value">{{@piName.displayName}}</label>
                        </nz-radio-group>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="Switch"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control>
                        <nz-switch formControlName="@piName"></nz-switch>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="Checkbox"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control>
                        <label nz-checkbox formControlName="@piName"></label>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="DatePicker"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u9009\u62E9@piSummary"':""}>
                        <nz-date-picker formControlName="@piName"></nz-date-picker>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="Rate"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u8BBE\u7F6E@piSummary"':""}>
                        <nz-rate formControlName="@piName" nzAllowHalf></nz-rate>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="UploadFile"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u8BBE\u7F6E@piSummary"':""}>   
                        @if (!uploadFile)                     
                        <a style="position: relative;" href="javascript:void(0)">
                            <button nz-button class="w120 mr10" nzType="primary" nzGhost>\u9009\u62E9\u6587\u4EF6</button>
                            <input type="file" accept=".doc" name="file" (change)="selectUploadFiles($event)"
                                style="position: absolute; top: 0; left: 0; opacity: 0;" />
                        </a>
                        }
                        @else if (uploadFile.fileStatus ==1) {
                        <div nz-row [nzGutter]="16">
                            <div nz-col nzSpan="10">
                                <nz-progress [nzPercent]="uploadFile.progress"></nz-progress>
                            </div>
                            <div nz-col nzSpan="12">
                                <a (click)='cancelUpload()'>
                                    \u53D6\u6D88\u4E0A\u4F20
                                </a>
                            </div>
                        </div>
                        } @else if (uploadFile.fileStatus!=1) {
                        <a [title]="uploadFile.fileName" class="maxw200">
                            {{uploadFile.fileName}}
                        </a>
                        <a class="ml10" (click)='deleteUploadFile()'>
                            <span nz-icon nzType="delete" nzTheme="outline"></span>
                        </a>
                        <span *ngIf="uploadFile.fileStatus==2 || uploadFile.fileStatus == 3" class="ml10 color-red">
                            {{uploadFile.fileStatusStr}}
                            <span class="ml10 maxw200" [title]="uploadFile.fileStatusNote">
                                {{uploadFile.fileStatusNote |nzEllipsis:36:'...'}}
                            </span>
                        </span>
                        }
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="TextArea"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u8BBE\u7F6E@piSummary"':""}>
                        <textarea nz-input formControlName="@piName" rows="4" placeholder="\u8BF7\u8F93\u5165@piSummary" nzAutoSize></textarea>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="InputNumber"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u8F93\u5165@piSummary"':""}>
                        <input nz-input type="number" formControlName="@piName" placeholder="\u8BF7\u8F93\u5165@piSummary" />
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piName</nz-form-label>
                    <nz-form-control ${h?'nzErrorTip="\u8BF7\u8F93\u5165@piSummary"':""}>
                        <input nz-input formControlName="@piName" placeholder="\u8BF7\u8F93\u5165@piSummary" />
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`,r=i.replace(/@modelClassName/g,s).replace(/@piName/g,f).replace(/@piSummary/g,_),r}};var $t=class a{static getEditModalTsCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=a.getTsTemplate(),d=t.piList.filter(m=>m.isEdit),f="",_="";for(let m of d){let u=J.firstToLower(m.name),c=m.tsType,v=m.isRequire,T="''";switch(c){case"string":T="''";break;case"number":T="0";break;case"boolean":T="false";break;case"date":T="null";break;default:T="null";break}f+=`    ${u}: FormControl<${c}>;`,_+=`      ${u}: [${T}, ${v?"Validators.required":""}],`}let h="",p="",g="";if(d.filter(m=>m.isKeyvalueItem).length>0){let m=d.filter(u=>u.isKeyvalueItem);for(let u of m){let c=J.firstToLower(u.name),v=u.name;h+=`
  ${c}s: KeyvalueItem[] = [];`,g+=me.getKeyvalueItemPiInitCode(u),p+=`
    this.init${v}();`}}else if(d.filter(m=>m.isEnum).length>0){let m=d.filter(u=>u.isEnum);for(let u of m){let c=J.firstToLower(u.name),v=u.name;h+=`  ${c}s: EnumItem[] = [];`,g+=me.getEnumPiInitCode(u),p+=`
    this.init${v}();`}}return d.filter(m=>m.editDisplayType=="UploadFile").length>0&&(h+="",g+=a.getUploadFileFunctionCode()),n=s.replace(/@expandPropertyCode/g,h).replace(/@expandInitCode/g,p).replace(/@expandFunctionCode/g,g).replace(/@editItemCode/g,f).replace(/@editItemBuildCode/g,_).replace(/@modelName/g,e).replace(/@modelClassName/g,r).replace(/@modelSummary/g,i),n}static getTsTemplate(){return`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from "ng-zorro-antd/modal";
import { @modelClassName } from '@models/@modelName';
import { @modelClassNameService } from '@services/@modelNameservice';
import { EnumService } from '@services/enumservice';
import { EnumItem } from '@models/enumitem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-@modelNameeditpage',
  templateUrl: './@modelNameedit.component.html',
  styleUrl: './@modelNameedit.component.less',
})
export class @modelClassNameEditComponent implements OnInit {
  action: string;
  @modelNameId: string;
  @modelName: @modelClassName = new @modelClassName();
  @expandPropertyCode
  editForm!: FormGroup<{
    @editItemCode
  }>;

  loading = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private enumSvc: EnumService,
    private @modelNameSvc: @modelClassNameService,
    private modal: NzModalRef
  ) {}

  ngOnInit(): void {
    this.@modelNameId = this.route.snapshot.params['id'];    
    this.editForm = this.formBuilder.group({
      @editItemBuildCode
    });
    @expandInitCode
    if (this.@modelNameId) {
      this.get@modelClassName();
    }
  }

  /*\u83B7\u53D6@modelSummary*/
  get@modelClassName(): void {
    this.@modelNameSvc.get@modelClassNameById(this.@modelNameId).subscribe((@modelName) => {
      this.@modelName = @modelName;
      this.editForm.patchValue(this.@modelName);
    });
  }
  @expandFunctionCode

  /**
   * \u63D0\u4EA4\u8868\u5355\uFF0C\u4FDD\u5B58@modelSummary
   */
  save() {
    if (!this.editForm.valid) {
      Object.values(this.editForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    let formValue = this.editForm.value;
    this.@modelName = { ...this.@modelName, ...formValue };
    this.@modelNameSvc.set@modelClassName(this.@modelName).subscribe((res) => {
      this.modal.close(true);
    });
  }

  /**
   * \u53D6\u6D88\u64CD\u4F5C
   *
   * @description \u5173\u95ED\u6A21\u6001\u6846\u5E76\u8FD4\u56DEfalse
   */
  cancel() {
    this.modal.close(false);
  }
}
`}static getUploadFileFunctionCode(){return`
  /*\u9009\u62E9\u6587\u4EF6*/
  selectUploadFiles(event): void {
    const file = event.target.files[0];
    let fileObj = new FileObj();
    fileObj.fileName = file.name;
    fileObj.fileSize = file.size;
    fileObj.fileType = file.extension || "";
    fileObj.progress = 0;
    fileObj.progressStr = "";
    fileObj.file = file;
    fileObj.fileStatus = file.size > 0 ? 0 : -1;
    this.uploadFile = fileObj;
    this.editForm.patchValue({ fileName: fileObj.fileName });
  }
  
  /**
   * \u4E0A\u4F20\u6587\u4EF6\u524D\u7684\u9884\u5904\u7406
   *
   * @param orderSeriesObj \u8BA2\u5355\u7CFB\u5217\u5BF9\u8C61
   * @returns \u65E0\u8FD4\u56DE\u503C
   */
  preUploadFile(uploadFile: FileObj): void {
    // \u521B\u5EFA UploadApply \u5BF9\u8C61
    uploadFile.fileStatus = 1;
    uploadFile.fileStatusStr = "\u4E0A\u4F20\u4E2D";
    const uploadApply = new UploadApply();
    uploadApply.bussinessId = this.@modelName.id;
    uploadApply.name = uploadFile.fileName;
    uploadApply.fileType = uploadFile.fileType;
    uploadApply.fileSize = uploadFile.fileSize;
    uploadApply.md5 = uploadFile.md5;
    this.@modelNameSvc.preUploadFile(uploadApply).subscribe((token: StsTokenUpload) => {
      this.uploadOssFile(token, uploadFile.file);
    });
  }

  /*\u4E0A\u4F20\u6587\u4EF6*/
  uploadOssFile(token: StsTokenUpload, file: File): void {
    this.updateUploadStatus(1, "\u6B63\u5728\u4E0A\u4F20", 0);
    let ossAccess = token;
    let ossClient = new OSS({
      region: "oss-cn-beijing",
      accessKeyId: ossAccess.authToken.accessId,
      accessKeySecret: ossAccess.authToken.accessSecrect,
      stsToken: ossAccess.authToken.securityToken,
      accessDir: ossAccess.authToken.accessDir,
      accessPath: ossAccess.authToken.accessPath,
      bucket: ossAccess.authToken.bucketName,
    });
    ossClient
      .multipartUpload(ossAccess.authToken.accessPath, file, {
        progress: (p) => {
          if (this.uploadFile.fileStatus == 3) {
            throw new Error("\u5DF2\u53D6\u6D88\u4E0A\u4F20");
          }
          this.updateProgress(p);
        },
      })
      .then((result) => {
        this.finishUpload(token);
      })
      .catch((err) => {
        if (this.uploadFile.fileStatus != 3) {
          this.updateUploadStatus(2, "\u4E0A\u4F20\u5F02\u5E38", err.message || "\u4E0A\u4F20\u5931\u8D25");
        }
      });
  }

  /*\u53D6\u6D88\u4E0A\u4F20\u6587\u4EF6*/
  cancelUpload() {
    this.updateUploadStatus(3, "\u5DF2\u53D6\u6D88\u4E0A\u4F20", "");
  }

  /*\u4E0A\u4F20\u72B6\u6001\u66F4\u65B0*/
  updateUploadStatus(status, statusStr, statusNote): void {
    this.uploadFile.fileStatus = status;
    this.uploadFile.fileStatusStr = statusStr;
    this.uploadFile.fileStatusNote = statusNote;
  }

  /*\u8FDB\u5EA6\u6761\u8BBE\u7F6E*/
  updateProgress(p) {
    let progress = Math.floor(p * 100); // \u8F6C\u6362\u4E3A\u767E\u5206\u6BD4\u6574\u6570
    this.uploadFile.progress = progress;
    this.uploadFile.progressStr = progress.toString() + '%';
  }

  /*\u5B8C\u6210\u4E0A\u4F20\u6587\u4EF6*/
  finishUpload(token: StsTokenUpload): void {
    this.@modelNameSvc.finishUpload(token.uploadKey).subscribe((ossFileId: string) => {
      this.updateUploadStatus(4, "\u5DF2\u4E0A\u4F20", 100);
      this.@modelName.ossFileId = ossFileId;
      if (this.saveMode == 0) {
        // \u4FDD\u5B58
        this.save();
      }
    });
  }  
  `}};var Xt=class{static getEditModalNode(t){let e=t.id.toLowerCase(),r=t.name.toLowerCase(),i={title:r+"editmodal",key:e+"editmodal",expanded:!1,children:[]},n={title:r+"edit.component.html",key:e+"editmodal.component.html",isLeaf:!0,code:Kt.getEditModalHtmlCode(t),language:"html"},s={title:r+"edit.component.less",key:e+"editmodal.component.less",isLeaf:!0,code:"",language:"less"},d={title:r+"edit.component.ts",key:e+"editmodal.component.ts",isLeaf:!0,code:$t.getEditModalTsCode(t),language:"typescript"};return i.children.push(n),i.children.push(s),i.children.push(d),i}};var Qt=class{static getDetailPageHtmlCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=`<nz-page-header>
    <nz-page-header-subtitle>\u5E94\u7528\u8BE6\u60C5--{{app.name}}</nz-page-header-subtitle>
    <nz-page-header-extra>
        <button nz-button class="w100 mr30" [nzType]="'primary'" (click)="detailApp()">\u7F16\u8F91</button>
        <button nz-button class="w100 mr30" [nzType]="'primary'" nzGhost nzDanger (click)="deleteApp()">\u5220\u9664</button>
        <button nz-button class="w80 mr30" [nzType]="'primary'" nzGhost (click)="back()">\u8FD4\u56DE</button>
        <button nz-button nzType="primary" nzGhost nz-dropdown [nzDropdownMenu]="menu" nzDropdownTrigger="click">
            ...
        </button>
        <nz-dropdown-menu #menu="nzDropdownMenu">
            <ul nz-menu class="minw100">
                <li nz-menu-item (click)="back()">\u66F4\u591A</li>
            </ul>
        </nz-dropdown-menu>
    </nz-page-header-extra>
</nz-page-header>
<nz-card class="minh360">
    <div nz-row>
        <div nz-col [nzSpan]="24">
            <label>\u57FA\u672C\u4FE1\u606F</label>
        </div>
    </div>
    <div class="ml10">
        @detailCode
    </div>
</nz-card>`,d=this.getDetailCode(t);return n=s.replace(/@modelName/g,e).replace(/@modelSummary/g,i).replace(/@detailCode/g,d),n}static getDetailCode(t){let e="",r=0,i=t.piList.filter(n=>n.isDetail);for(let n of i){let s=this.getDetailItemCode(t,n);r%3==0&&(e+=`
        <div nz-row [nzGutter]="32" class="mt20">`),e+=s,(r%3==2||r==i.length-1)&&(e+=`
        </div>`),r++}return e}static getDetailItemCode(t,e){let r="",i="",n=J.firstToLower(t.name),s=J.firstToLower(e.name),d=e.summary?e.summary:s;return e.detailDisplayType=="Text"?e.tsType=="Date"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <span>{{ @modelName.@piName | date:'yyyy-MM-dd HH:mm:ss' }}</span>
            </div>`:i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <span>{{ @modelName.@piName }}</span>
            </div>`:e.detailDisplayType=="Tag"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-tag [nzColor]="'cyan'">{{ @modelName.@piName }}</nz-tag>
            </div>`:e.detailDisplayType=="Pre"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <pre>{{ @modelName.@piName }}</pre>
            </div>`:e.detailDisplayType=="ProgressBar"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-progress [nzPercent]="@modelName.@piName"></nz-progress>
            </div>`:e.detailDisplayType=="Rate"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-rate [ngModel]="@modelName.@piName" nzAllowHalf nzDisabled></nz-rate>
            </div>`:e.detailDisplayType=="Switch"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-switch [ngModel]="@modelName.@piName" nzDisabled></nz-switch>
            </div>`:e.detailDisplayType=="Checkbox"&&(i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <label nz-checkbox [ngModel]="@modelName.@piName" nzDisabled></label>
            </div>`),r=i.replace(/@modelName/g,n).replace(/@piName/g,s).replace(/@piSummary/g,d),r}};var Yt=class a{static getDetailPageTsCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=a.getTsTemplate(),d="",f="",_="";return _+=me.getEditFunctionCode(t),n=s.replace(/@expandPropertyCode/g,d).replace(/@expandInitCode/g,f).replace(/@expandFunctionCode/g,_).replace(/@modelName/g,e).replace(/@modelClassName/g,r).replace(/@modelSummary/g,i),n}static getTsTemplate(){return`import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { Util } from "@core/util";
import { @modelClassName } from "@models/@modelName";
import { @modelClassNameService } from "@services/@modelNameservice";
import { @modelClassNameEditModalComponent } from "../@modelNameeditmodal/@modelNameedit.component";

@Component({
  selector: "app-@modelNamedetail",
  templateUrl: "./@modelNamedetail.component.html",
  styleUrl: "./@modelNamedetail.component.less",
})
export class @modelClassNameDetailComponent implements OnInit {
  @modelNameId: string;
  @modelName: @modelClassName = new @modelClassName();
  @expandPropertyCode

  constructor(
    private route: ActivatedRoute,
    private modalSvc: NzModalService,
    private @modelNameSvc: @modelClassNameService,
    private @modelNameVersionSvc: @modelClassNameVersionService
  ) {}

  ngOnInit() {
    this.@modelNameId = this.route.snapshot.params["id"];
    if (this.@modelNameId) {
      this.get@modelClassName();
    }
    @expandInitCode
  }

  /*\u83B7\u53D6@modelSummary*/
  get@modelClassName(): void {
    this.@modelNameSvc.get@modelClassNameById(this.@modelNameId).subscribe((@modelName) => {
      this.@modelName = @modelName;
    });
  }
  @expandFunctionCode

  /*\u5220\u9664@modelSummary*/
  delete@modelClassName(): void {
    Util.showConfirmBox('\u786E\u8BA4\u8981\u5220\u9664@modelSummary' + this.@modelName.name + '?').subscribe((res) => {
      if (res) {
        this.@modelNameSvc.delete@modelClassName(this.@modelNameId).subscribe(() => {
          Util.goTo("/@modelNamelist");
        });
      }
    });
  }
  
  /*\u8FD4\u56DE*/
  back(): void {
    history.back();
  }
}
`}};var Jt=class{static getDetailPageLessCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n=`::ng-deep {
@ngcss
}`,s="",d=t.piList;return d.filter(f=>f.isDetail&&f.detailDisplayType=="Switch").length>0&&(s+=`
  .ant-switch-loading,
  .ant-switch-disabled {
    cursor: not-allowed;
    opacity: 1;
  }
`),d.filter(f=>f.isDetail&&f.detailDisplayType=="Checkbox").length>0&&(s+=`
  .ant-checkbox-disabled .ant-checkbox-inner {
    background-color: #fff !important;
    border-color: var(--ant-primary-color) !important;
  }
  .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: var(--ant-primary-color);
  }
`),n=n.replace(/@ngcss/g,s),n}};var ei=class{static getDetailPageNode(t){let e=t.id.toLowerCase(),r=t.name.toLowerCase(),i={title:r+"detail",key:e+"detail",expanded:!1,children:[]},n={title:r+"detail.component.html",key:e+"detail.component.html",isLeaf:!0,code:Qt.getDetailPageHtmlCode(t),language:"html"},s={title:r+"detail.component.less",key:e+"detail.component.less",isLeaf:!0,code:Jt.getDetailPageLessCode(t),language:"less"},d={title:r+"detail.component.ts",key:e+"detail.component.ts",isLeaf:!0,code:Yt.getDetailPageTsCode(t),language:"typescript"};return i.children.push(n),i.children.push(s),i.children.push(d),i}};var ti=class{static getDetailModalHtmlCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=`
<div class="ml20">@detailCode
</div>
<div class="tac mt50">
    <button nz-button class="w100 mr30" [nzType]="'primary'" (click)="edit@modelClassName()">\u7F16\u8F91</button>
    <button nz-button class="w100 mr30" [nzType]="'primary'" nzGhost nzDanger (click)="delete@modelClassName()">\u5220\u9664</button>
    <button nz-button class="w80" [nzType]="'primary'" nzGhost (click)="cancel()">\u8FD4\u56DE</button>
</div>`,d=this.getDetailCode(t);return n=s.replace(/@modelName/g,e).replace(/@modelClassName/g,r).replace(/@modelSummary/g,i).replace(/@detailCode/g,d),n}static getDetailCode(t){let e="",r=0,i=t.piList.filter(n=>n.isDetail);for(let n of i){let s=this.getDetailItemCode(t,n);r%3==0&&(e+=`
    <div nz-row [nzGutter]="32" class="mt20">`),e+=s,(r%3==2||r==i.length-1)&&(e+=`
    </div>`),r++}return e}static getDetailItemCode(t,e){let r="",i="",n=J.firstToLower(t.name),s=J.firstToLower(e.name),d=e.summary?e.summary:s;return e.detailDisplayType=="Text"?e.tsType=="Date"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <span>{{ @modelName.@piName | date:'yyyy-MM-dd HH:mm:ss' }}</span>
            </div>`:i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <span>{{ @modelName.@piName }}</span>
            </div>`:e.detailDisplayType=="Tag"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-tag [nzColor]="'cyan'">{{ @modelName.@piName }}</nz-tag>
            </div>`:e.detailDisplayType=="Pre"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <pre>{{ @modelName.@piName }}</pre>
            </div>`:e.detailDisplayType=="ProgressBar"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-progress [nzPercent]="@modelName.@piName"></nz-progress>
            </div>`:e.detailDisplayType=="Rate"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-rate [ngModel]="@modelName.@piName" nzAllowHalf nzDisabled></nz-rate>
            </div>`:e.detailDisplayType=="Switch"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-switch [ngModel]="@modelName.@piName" nzDisabled></nz-switch>
            </div>`:e.detailDisplayType=="Checkbox"&&(i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <label nz-checkbox [ngModel]="@modelName.@piName" nzDisabled></label>
            </div>`),r=i.replace(/@modelName/g,n).replace(/@piName/g,s).replace(/@piSummary/g,d),r}};var ii=class a{static getDetailModalTsCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n="",s=a.getTsTemplate(),d="",f="",_="";return _+=me.getEditFunctionCode(t),n=s.replace(/@expandPropertyCode/g,d).replace(/@expandInitCode/g,f).replace(/@expandFunctionCode/g,_).replace(/@modelName/g,e).replace(/@modelClassName/g,r).replace(/@modelSummary/g,i),n}static getTsTemplate(){return`import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { Util } from "@core/util";
import { @modelClassName } from "@models/@modelName";
import { @modelClassNameService } from "@services/@modelNameservice";
import { @modelClassNameEditModalComponent } from "../@modelNameeditmodal/@modelNameedit.component";

@Component({
  selector: "app-@modelNamedetail",
  templateUrl: "./@modelNamedetail.component.html",
  styleUrl: "./@modelNamedetail.component.less",
})
export class @modelClassNameDetailComponent implements OnInit {
  @modelNameId: string;
  @modelName: @modelClassName = new @modelClassName();
  @expandPropertyCode

  constructor(
    private route: ActivatedRoute,
    private modalSvc: NzModalService,
    private modal: NzModalRef,
    private @modelNameSvc: @modelClassNameService,
    private @modelNameVersionSvc: @modelClassNameVersionService
  ) {}

  ngOnInit() {
    this.@modelNameId = this.modal.getConfig().nzData.@modelNameId;
    if (this.@modelNameId) {
      this.get@modelClassName();
    }
    @expandInitCode
  }

  /*\u83B7\u53D6@modelSummary*/
  get@modelClassName(): void {
    this.@modelNameSvc.get@modelClassNameById(this.@modelNameId).subscribe((@modelName) => {
      this.@modelName = @modelName;
    });
  }
  @expandFunctionCode

  /*\u5220\u9664@modelSummary*/
  delete@modelClassName(): void {
    Util.showConfirmBox('\u786E\u8BA4\u8981\u5220\u9664@modelSummary' + this.@modelName.name + '?').subscribe((res) => {
      if (res) {
        this.@modelNameSvc.delete@modelClassName(this.@modelNameId).subscribe(() => {
          this.modal.close(true);
        });
      }
    });
  }
  
  /*\u8FD4\u56DE*/
  cancel(): void {
    this.modal.close(false);
  }
}
`}};var ni=class{static getDetailModalLessCode(t){let e=J.firstToLower(t.name),r=t.name,i=t.summary?t.summary:e,n=`::ng-deep {
@ngcss
}`,s="",d=t.piList;return d.filter(f=>f.isDetail&&f.detailDisplayType=="Switch").length>0&&(s+=`
  .ant-switch-loading,
  .ant-switch-disabled {
    cursor: not-allowed;
    opacity: 1;
  }
`),d.filter(f=>f.isDetail&&f.detailDisplayType=="Checkbox").length>0&&(s+=`
  .ant-checkbox-disabled .ant-checkbox-inner {
    background-color: #fff !important;
    border-color: var(--ant-primary-color) !important;
  }
  .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: var(--ant-primary-color);
  }
`),n=n.replace(/@ngcss/g,s),n}};var ri=class{static getDetailModalNode(t){let e=t.id.toLowerCase(),r=t.name.toLowerCase(),i={title:r+"detailmodal",key:e+"detailmodal",expanded:!1,children:[]},n={title:r+"detail.component.html",key:e+"detailmodal.component.html",isLeaf:!0,code:ti.getDetailModalHtmlCode(t),language:"html"},s={title:r+"detail.component.less",key:e+"detailmodal.component.less",isLeaf:!0,code:ni.getDetailModalLessCode(t),language:"less"},d={title:r+"detail.component.ts",key:e+"detailmodal.component.ts",isLeaf:!0,code:ii.getDetailModalTsCode(t),language:"typescript"};return i.children.push(n),i.children.push(s),i.children.push(d),i}};var ai=class{static generatePageNode(t){if(!t)return null;let e=t.id.toLocaleLowerCase(),i={title:t.name.toLocaleLowerCase(),key:e,expanded:!0,children:[]},n=qt.getListPageNode(t),s=Zt.getEditPageNode(t),d=Xt.getEditModalNode(t),f=ei.getDetailPageNode(t),_=ri.getDetailModalNode(t);return i.children.push(n),i.children.push(s),i.children.push(d),i.children.push(f),i.children.push(_),i}};function fr(a,t){if(a&1&&(S(0,"div")(1,"label",7),D(2),C()()),a&2){let e=t.$implicit;b(),F("nzValue",e),b(),ne(e)}}function hr(a,t){if(a&1){let e=ye();S(0,"label",8),ze("ngModelChange",function(i){oe(e);let n=B();return ve(n.isSort,i)||(n.isSort=i),se(i)}),D(1,"Sortable"),C()}if(a&2){let e=B();_e("ngModel",e.isSort)}}function yr(a,t){if(a&1){let e=ye();S(0,"label",8),ze("ngModelChange",function(i){oe(e);let n=B();return ve(n.isRequire,i)||(n.isRequire=i),se(i)}),D(1,"Require"),C()}if(a&2){let e=B();_e("ngModel",e.isRequire)}}var oi=class a{constructor(t,e){this.modalSvc=t;this.modal=e}pi=new ln;display="query";piDisplayType;displayTypeList=[];isSort=!1;isRequire=!1;ngOnInit(){this.pi=this.modal.getConfig().nzData.pi,this.display=this.modal.getConfig().nzData.display,this.display=="query"?(this.displayTypeList=me.getPiQueryDisplayTypeList(this.pi),this.piDisplayType=this.pi.queryDisplayType??me.getPiQueryDisplayType(this.pi)):this.display=="list"?(this.displayTypeList=me.getPiListDisplayTypeList(this.pi),this.piDisplayType=this.pi.listDisplayType??me.getPiListDisplayType(this.pi),this.isSort=this.pi.isListSort==null?!0:this.pi.isListSort):this.display=="edit"?(this.displayTypeList=me.getPiEditDisplayTypeList(this.pi),this.piDisplayType=this.pi.editDisplayType??me.getPiEditDisplayType(this.pi),this.isRequire=this.pi.isRequire==null?!0:this.pi.isRequire):this.display=="detail"&&(this.displayTypeList=me.getPiDetailDisplayTypeList(this.pi),this.piDisplayType=this.pi.detailDisplayType??me.getPiDetailDisplayType(this.pi))}save(){this.display=="query"?this.pi.queryDisplayType=this.piDisplayType:this.display=="list"?(this.pi.listDisplayType=this.piDisplayType,this.pi.isListSort=this.isSort):this.display=="edit"?(this.pi.editDisplayType=this.piDisplayType,this.pi.isRequire=this.isRequire):this.display=="detail"&&(this.pi.detailDisplayType=this.piDisplayType),this.modal.close(!0)}cancel(){this.modal.close(!1)}static \u0275fac=function(e){return new(e||a)(Te(ut),Te(Lt))};static \u0275cmp=Ee({type:a,selectors:[["app-pidisplayconfig"]],decls:15,vars:5,consts:[[1,"mb20"],[1,"mb10"],[3,"ngModelChange","ngModel"],["nz-checkbox","","class","mt20",3,"ngModel","ngModelChange",4,"ngIf"],[1,"tac","mt50"],["nz-button","","nzSize","small",1,"w80","mr50",3,"click","nzType"],["nz-button","","nzGhost","","nzSize","small",1,"w80",3,"click","nzType"],["nz-radio","",3,"nzValue"],["nz-checkbox","",1,"mt20",3,"ngModelChange","ngModel"]],template:function(e,r){e&1&&(S(0,"nz-card",0)(1,"div")(2,"div",1),D(3,"Display Type"),C(),S(4,"nz-radio-group",2),ze("ngModelChange",function(n){return ve(r.piDisplayType,n)||(r.piDisplayType=n),n}),dt(5,fr,3,2,"div",null,Et),C(),S(7,"div"),ee(8,hr,2,1,"label",3)(9,yr,2,1,"label",3),C()(),S(10,"div",4)(11,"button",5),ue("click",function(){return r.save()}),D(12,"\u786E\u5B9A"),C(),S(13,"button",6),ue("click",function(){return r.cancel()}),D(14,"\u53D6\u6D88"),C()()()),e&2&&(b(4),_e("ngModel",r.piDisplayType),b(),mt(r.displayTypeList),b(3),F("ngIf",r.display=="list"),b(),F("ngIf",r.display=="edit"),b(2),F("nzType","primary"),b(2),F("nzType","primary"))},dependencies:[De,tt,it,Le,Pe,ct,Ft,ft,rt,nt]})};var gr=()=>({y:"400px"});function _r(a,t){if(a&1){let e=ye();S(0,"a",18),ue("click",function(){oe(e);let i=B().$implicit,n=B();return se(n.setDisplayType(i,"query"))}),D(1),C()}if(a&2){let e=B().$implicit;b(),ne(e.queryDisplayType)}}function vr(a,t){if(a&1&&(S(0,"span",20)(1,"nz-tag",21),D(2),C()()),a&2){let e=B(2).$implicit;b(2),ne(e.isListSort?"Sortable":"")}}function zr(a,t){if(a&1){let e=ye();S(0,"a",18),ue("click",function(){oe(e);let i=B().$implicit,n=B();return se(n.setDisplayType(i,"list"))}),S(1,"span"),D(2),C(),ee(3,vr,3,1,"span",19),C()}if(a&2){let e=B().$implicit;b(2),ne(e.listDisplayType),b(),F("ngIf",e.isListSort)}}function Cr(a,t){if(a&1&&(S(0,"span",20)(1,"nz-tag",22),D(2),C()()),a&2){let e=B(2).$implicit;b(2),ne(e.isRequire?"Require":"")}}function br(a,t){if(a&1){let e=ye();S(0,"a",18),ue("click",function(){oe(e);let i=B().$implicit,n=B();return se(n.setDisplayType(i,"edit"))}),S(1,"span"),D(2),C(),ee(3,Cr,3,1,"span",19),C()}if(a&2){let e=B().$implicit;b(2),ne(e.editDisplayType),b(),F("ngIf",e.isRequire)}}function wr(a,t){if(a&1){let e=ye();S(0,"a",18),ue("click",function(){oe(e);let i=B().$implicit,n=B();return se(n.setDisplayType(i,"detail"))}),D(1),C()}if(a&2){let e=B().$implicit;b(),ne(e.detailDisplayType)}}function Sr(a,t){if(a&1){let e=ye();S(0,"tr")(1,"td")(2,"span",14),D(3),C()(),S(4,"td")(5,"span",14),D(6),C()(),S(7,"td"),D(8),C(),S(9,"td",15)(10,"label",16),ze("ngModelChange",function(i){let n=oe(e).$implicit;return ve(n.isEnum,i)||(n.isEnum=i),se(i)}),C()(),S(11,"td",15)(12,"label",16),ze("ngModelChange",function(i){let n=oe(e).$implicit;return ve(n.isKeyvalueItem,i)||(n.isKeyvalueItem=i),se(i)}),C()(),S(13,"td",15)(14,"label",16),ze("ngModelChange",function(i){let n=oe(e).$implicit;return ve(n.isQuery,i)||(n.isQuery=i),se(i)}),C()(),S(15,"td"),ee(16,_r,2,1,"a",17),C(),S(17,"td",15)(18,"label",16),ze("ngModelChange",function(i){let n=oe(e).$implicit;return ve(n.isList,i)||(n.isList=i),se(i)}),C()(),S(19,"td"),ee(20,zr,4,2,"a",17),C(),S(21,"td",15)(22,"label",16),ze("ngModelChange",function(i){let n=oe(e).$implicit;return ve(n.isEdit,i)||(n.isEdit=i),se(i)}),C()(),S(23,"td"),ee(24,br,4,2,"a",17),C(),S(25,"td",15)(26,"label",16),ze("ngModelChange",function(i){let n=oe(e).$implicit;return ve(n.isDetail,i)||(n.isDetail=i),se(i)}),C()(),S(27,"td"),ee(28,wr,2,1,"a",17),C()()}if(a&2){let e=t.$implicit;b(2),F("title",e.summary),b(),ne(e.summary),b(2),F("title",e.name),b(),ne(e.name),b(2),ne(e.tsType),b(2),_e("ngModel",e.isEnum),b(2),_e("ngModel",e.isKeyvalueItem),b(2),_e("ngModel",e.isQuery),b(2),F("ngIf",e.isQuery),b(2),_e("ngModel",e.isList),b(2),F("ngIf",e.isList),b(2),_e("ngModel",e.isEdit),b(2),F("ngIf",e.isEdit),b(2),_e("ngModel",e.isDetail),b(2),F("ngIf",e.isDetail)}}var si=class a{constructor(t,e,r){this.route=t;this.modalSvc=e;this.modal=r}config=new sn;ngOnInit(){this.config=this.modal.getConfig().nzData.configModel,this.checkPiDisplayTypeList(this.config)}checkPiDisplayTypeList(t){t.editPageType||(t.editPageType="Page"),t.detailPageType||(t.detailPageType="Page"),t.piList.forEach(e=>{let r=me.getPiQueryDisplayTypeList(e),i=me.getPiListDisplayTypeList(e),n=me.getPiEditDisplayTypeList(e),s=me.getPiDetailDisplayTypeList(e);(!e.queryDisplayType||r.filter(d=>d==e.queryDisplayType).length==0)&&(e.queryDisplayType=me.getPiQueryDisplayType(e)),(!e.listDisplayType||i.filter(d=>d==e.listDisplayType).length==0)&&(e.listDisplayType=me.getPiListDisplayType(e),e.isListSort=!0),(!e.editDisplayType||n.filter(d=>d==e.editDisplayType).length==0)&&(e.editDisplayType=me.getPiEditDisplayType(e),e.isRequire=!0),(!e.detailDisplayType||s.filter(d=>d==e.detailDisplayType).length==0)&&(e.detailDisplayType=me.getPiDetailDisplayType(e))})}setDisplayType(t,e="query"){this.modalSvc.create({nzTitle:"Set DisplayType",nzWidth:320,nzContent:oi,nzData:{pi:t,display:e},nzCentered:!0,nzMaskClosable:!1,nzNoAnimation:!0,nzFooter:null,nzOkText:null,nzCancelText:null}).afterClose.subscribe(i=>{})}generate(){this.modal.close(!0)}cancel(){this.modal.close(!1)}static \u0275fac=function(e){return new(e||a)(Te(et),Te(ut),Te(Lt))};static \u0275cmp=Ee({type:a,selectors:[["app-codegenerateconfig"]],decls:58,vars:24,consts:[[1,"ml20"],["nzShowPagination","false","nzBordered","","nzSize","small",1,"configTable",3,"nzData","nzScroll"],[3,"nzWidth"],[1,"tac",3,"nzWidth"],["title","enumItem \u6570\u636E\u6E90\u6765\u81EAenumItem"],["title","keyvalueItem \u6570\u636E\u6E90\u6765\u81EAKeyvalueItem"],[1,"mt20"],[1,"mr10"],[3,"ngModelChange","ngModel"],["nz-radio","",3,"nzValue"],[1,"ml50"],[1,"tac","mt50","mb35"],["nz-button","",1,"w100","mr50",3,"click","nzType"],["nz-button","","nzGhost","",1,"w100",3,"click","nzType"],[3,"title"],[1,"tac"],["nz-checkbox","",3,"ngModelChange","ngModel"],[3,"click",4,"ngIf"],[3,"click"],["class","ml10",4,"ngIf"],[1,"ml10"],["nzColor","cyan"],["nzColor","magenta"]],template:function(e,r){e&1&&(S(0,"div",0)(1,"div")(2,"nz-table",1)(3,"thead")(4,"tr")(5,"th",2),D(6,"summary"),C(),S(7,"th",2),D(8,"name"),C(),S(9,"th",2),D(10,"type"),C(),S(11,"th",3)(12,"span",4),D(13,"enum"),C()(),S(14,"th",3)(15,"span",5),D(16,"keyval"),C()(),S(17,"th",3),D(18,"query"),C(),S(19,"th",2),D(20,"queryDisplay"),C(),S(21,"th",3),D(22,"list"),C(),S(23,"th",2),D(24,"listDisplay"),C(),S(25,"th",3),D(26,"edit"),C(),S(27,"th",2),D(28,"editDisplay"),C(),S(29,"th",3),D(30,"detail"),C(),S(31,"th",2),D(32,"detailDisplay"),C()()(),S(33,"tbody"),dt(34,Sr,29,15,"tr",null,Et),C()()(),S(36,"div",6)(37,"span")(38,"span",7),D(39,"\u7F16\u8F91\u9875\u9762\uFF1A"),C(),S(40,"nz-radio-group",8),ze("ngModelChange",function(n){return ve(r.config.editPageType,n)||(r.config.editPageType=n),n}),S(41,"label",9),D(42,"Page"),C(),S(43,"label",9),D(44,"Modal"),C()()(),S(45,"span",10)(46,"span",7),D(47,"\u8BE6\u60C5\u9875\u9762\uFF1A"),C(),S(48,"nz-radio-group",8),ze("ngModelChange",function(n){return ve(r.config.detailPageType,n)||(r.config.detailPageType=n),n}),S(49,"label",9),D(50,"Page"),C(),S(51,"label",9),D(52,"Modal"),C()()()()(),S(53,"div",11)(54,"button",12),ue("click",function(){return r.generate()}),D(55,"\u751F\u6210"),C(),S(56,"button",13),ue("click",function(){return r.cancel()}),D(57,"\u8FD4\u56DE"),C()()),e&2&&(b(2),F("nzData",r.config.piList)("nzScroll",Li(23,gr)),b(3),F("nzWidth","150px"),b(2),F("nzWidth","120px"),b(2),F("nzWidth","70px"),b(2),F("nzWidth","60px"),b(3),F("nzWidth","60px"),b(3),F("nzWidth","60px"),b(2),F("nzWidth","100px"),b(2),F("nzWidth","60px"),b(2),F("nzWidth","140px"),b(2),F("nzWidth","60px"),b(2),F("nzWidth","180px"),b(2),F("nzWidth","60px"),b(2),F("nzWidth","100px"),b(3),mt(r.config.piList),b(6),_e("ngModel",r.config.editPageType),b(),F("nzValue","Page"),b(2),F("nzValue","Modal"),b(5),_e("ngModel",r.config.detailPageType),b(),F("nzValue","Page"),b(2),F("nzValue","Modal"),b(3),F("nzType","primary"),b(2),F("nzType","primary"))},dependencies:[De,tt,it,Le,Pe,ct,ft,rt,nt,We,Re,Ve,Be,Ue,je,st],styles:[".modelTable tbody>tr.selected{background-color:#e8f8fe}  .modelTable tbody>tr:hover{background-color:#e8f8fe}  .ant-modal-body{padding:12px 24px 5px}  .configTable td{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]})};var Tr=["nzTree"],xr=(a,t)=>t.id;function Nr(a,t){if(a&1&&(S(0,"span",39),D(1),C()),a&2){let e=B(2);b(),ne(e.tsResult.summary)}}function kr(a,t){if(a&1){let e=ye();S(0,"button",40),ue("click",function(){oe(e);let i=B(2);return se(i.exportTsCode())}),ge(1,"span",41),D(2," Export "),C()}}function Ir(a,t){if(a&1&&(S(0,"label",57),D(1),C()),a&2){let e=B().$implicit;b(),Se(" (",e.sourceName,") ")}}function Er(a,t){a&1&&(S(0,"nz-tag",58),D(1,"IsEnum"),C())}function Dr(a,t){if(a&1){let e=ye();S(0,"tr",59),ue("click",function(){let i=oe(e),n=i.$implicit,s=i.index,d=B().$implicit,f=B(3);return se(f.selectPi(d,n,s))}),S(1,"td"),D(2),C(),S(3,"td"),D(4),C(),S(5,"td"),D(6),C()()}if(a&2){let e=t.$implicit;It(e.isSelected?"selected":""),b(2),ne(e.name),b(2),ne(e.tsType),b(2),ne(e.summary)}}function Pr(a,t){if(a&1){let e=ye();S(0,"div",44)(1,"div")(2,"div",45)(3,"label",46),D(4),C(),ee(5,Ir,2,1,"label",47)(6,Er,2,0,"nz-tag",48),S(7,"label",49),D(8),C(),S(9,"div",50)(10,"a",51),ue("click",function(){let i=oe(e).$implicit,n=B(3);return se(n.viewLambda(i))}),D(11,"\u5FEB\u6377Lambda"),C()()()(),S(12,"div",52),ue("keyup",function(i){oe(e);let n=B(3);return se(n.onKeyUpHandler(i))})("keydown",function(i){oe(e);let n=B(3);return se(n.onKeyDownHandler(i))}),S(13,"nz-table",53,3)(15,"thead")(16,"tr")(17,"th",54),D(18,"Name"),C(),S(19,"th",55),D(20,"Type"),C(),S(21,"th"),D(22,"Summary"),C()()(),S(23,"tbody"),ee(24,Dr,7,6,"tr",56),C()()()()}if(a&2){let e=t.$implicit,r=ke(14),i=B(3);b(4),Se(" ",e.name," "),b(),F("ngIf",e.name!=e.sourceName),b(),F("ngIf",e.isEnum),b(),Ii("title",e.summary),b(),Se(" ",e.summary," "),b(5),F("nzBordered",!0)("nzShowPagination",!1)("nzPageSize",1e3)("nzData",e.piList),b(4),F("nzShowSort",!0)("nzSortFn",i.nameSortFn),b(2),F("nzShowSort",!0)("nzSortFn",i.typeSortFn),b(5),F("ngForOf",r.data)}}function Lr(a,t){if(a&1&&(S(0,"div")(1,"nz-card",42),ee(2,Pr,25,14,"div",43),C()()),a&2){let e=B(2);b(2),F("ngForOf",e.tsResult.tsModelList)}}function Fr(a,t){if(a&1&&(S(0,"div"),ge(1,"app-syntax-highlight",37),C()),a&2){let e=B(2);b(),F("title","Typescript")("code",e.tsResult.tsCode==null?null:e.tsResult.tsCode.tsModelCode)("language","typescript")}}function Ar(a,t){if(a&1&&(S(0,"span",61),D(1),C()),a&2){let e=B().$implicit;b(),Se(" ",e.sourceName," ")}}function Or(a,t){if(a&1&&(S(0,"nz-option",26)(1,"span")(2,"span"),D(3),C(),ee(4,Ar,2,1,"span",60),C()()),a&2){let e=t.$implicit;F("nzLabel",e.name)("nzValue",e),b(3),Se(" ",e.name," "),b(),F("ngIf",e.name!=e.sourceName)}}function Mr(a,t){if(a&1){let e=ye();S(0,"div",62)(1,"div",63)(2,"div",64)(3,"span",65),ue("click",function(){oe(e);let i=B().$implicit,n=B(2);return se(n.openFolder(i))}),C()(),S(4,"div",66)(5,"span",67),D(6),C()()()()}if(a&2){let e=B().$implicit;b(3),F("nzType",e.isExpanded?"folder-open":"folder"),b(3),ne(e.title)}}function Rr(a,t){if(a&1&&(S(0,"div",62)(1,"div",63)(2,"div",64),ge(3,"span",68),C(),S(4,"div",66)(5,"span",69),D(6),C()()()()),a&2){let e=B().$implicit;b(6),ne(e.title)}}function Vr(a,t){if(a&1&&ee(0,Mr,7,2,"div",62)(1,Rr,7,1,"div",62),a&2){let e=t.$implicit;pi(e.isLeaf?1:0)}}function Ur(a,t){if(a&1&&ge(0,"app-syntax-highlight",37),a&2){let e=B(2);F("title","Typescript")("code",e.tsResult.tsCode==null?null:e.tsResult.tsCode.tsServiceCode)("language","typescript")}}function Wr(a,t){if(a&1&&ge(0,"app-syntax-highlight",37),a&2){let e=B(2);F("title","C#")("code",e.tsResult.tsCode==null?null:e.tsResult.tsCode.apiCode)("language","csharp")}}function jr(a,t){if(a&1){let e=ye();S(0,"div")(1,"div")(2,"div",8)(3,"div",9)(4,"div",10)(5,"label",11),D(6),Dt(7,"titlecase"),S(8,"span",12),D(9),C()(),ee(10,Nr,2,1,"span",13),C()(),S(11,"div",14)(12,"a",15),ue("click",function(){oe(e);let i=B();return se(i.goback())}),D(13,"Return"),C()()(),S(14,"div")(15,"nz-card",16),ee(16,kr,3,0,"ng-template",null,0,zt),S(18,"nz-tabset",17)(19,"nz-tab",18)(20,"div")(21,"div",10)(22,"label",19),D(23,"Ts Models"),C(),S(24,"div",20)(25,"nz-radio-group",21),ze("ngModelChange",function(i){oe(e);let n=B();return ve(n.tsModelViewType,i)||(n.tsModelViewType=i),se(i)}),ue("ngModelChange",function(){oe(e);let i=B();return se(i.modelViewTypeChanged())}),S(26,"label",22),D(27,"TableView"),C(),S(28,"label",23),D(29,"CodeView"),C()()()(),S(30,"div"),ee(31,Lr,3,1,"div",5)(32,Fr,2,3,"div",5),C()()(),S(33,"nz-tab",24)(34,"div")(35,"div",10)(36,"label",19),D(37,"Ts Pages"),C(),S(38,"div",20)(39,"label"),D(40,"Base Model"),C(),S(41,"nz-select",25),ze("ngModelChange",function(i){oe(e);let n=B();return ve(n.pageBaseModel,i)||(n.pageBaseModel=i),se(i)}),ue("ngModelChange",function(i){oe(e);let n=B();return se(n.pageBaseModelChange(i))}),dt(42,Or,5,4,"nz-option",26,xr),C(),S(44,"button",27),ue("click",function(){oe(e);let i=B();return se(i.generatePages())}),D(45,"Generate"),C()()(),S(46,"div",28)(47,"div",29)(48,"div",30)(49,"nz-tree",31,1),ue("nzClick",function(i){oe(e);let n=B();return se(n.activeNode(i))})("nzDblClick",function(i){oe(e);let n=B();return se(n.openFolder(i))}),C(),ee(51,Vr,2,1,"ng-template",null,2,zt),C()(),S(53,"div",32),ge(54,"app-syntax-highlight",33),C()()()(),S(55,"nz-tab",34)(56,"div")(57,"div",10)(58,"label",35),D(59,"Api Services"),C(),S(60,"div",36)(61,"nz-radio-group",21),ze("ngModelChange",function(i){oe(e);let n=B();return ve(n.tsServiceType,i)||(n.tsServiceType=i),se(i)}),ue("ngModelChange",function(){oe(e);let i=B();return se(i.tsServiceTypeChanged())}),S(62,"label",22),D(63,"Ts Service"),C(),S(64,"label",23),D(65,"ApiCode"),C()()()(),S(66,"div"),ee(67,Ur,1,3,"app-syntax-highlight",37)(68,Wr,1,3,"app-syntax-highlight",37),C()()()(),S(69,"div")(70,"label",38),D(71,"Not all code is useful, the generated code is for reference only"),C()()()()()()}if(a&2){let e=ke(17),r=ke(52),i=B();b(6),Se(" Ts For ",Fi(7,20,i.itemType)," "),b(3),ne(i.tsResult.name),b(),F("ngIf",i.tsResult.summary),b(5),F("nzSize","small"),b(3),F("nzSize","small")("nzAnimated",!1)("nzTabBarExtraContent",e),b(7),_e("ngModel",i.tsModelViewType),b(6),F("ngIf",i.tsModelViewType=="1"),b(),F("ngIf",i.tsModelViewType=="2"),b(9),_e("ngModel",i.pageBaseModel),F("nzShowArrow",!0),b(),mt(i.pageModelList),b(7),F("nzData",i.pageNodes)("nzTreeTemplate",r),b(5),F("title",i.pageCodeTitle)("size","middle")("code",i.pageCode)("language",i.pageLanguage),b(7),_e("ngModel",i.tsServiceType),b(6),pi(i.tsServiceType=="1"?67:68)}}function Br(a,t){if(a&1&&(Ni(0),ge(1,"app-syntax-highlight",70),ki()),a&2){let e=B();b(),F("title","Typescript")("code",e.tsCode)("language","typescript")}}var li=class a{constructor(t,e,r,i){this.routerParams=t;this.nzContextMenuService=e;this.modalSvc=r;this.apiSvc=i;let n=localStorage.getItem("tsServiceType");this.tsServiceType=n||"1";let s=localStorage.getItem("tsModelViewType");this.tsModelViewType=s||"1"}nzTree;itemId;itemType;tsServiceType="1";tsModelViewType="1";isAfterViewInit=!1;tsResult=new on;tsModelList=[];pageModelList=[];tsModelCode;tsModelCodeWithPgQuery;pageBaseModel;showCode=!1;codeTitle;tsCode;isCtrlDown=!1;isShiftDown=!1;rootNode;rootNodeOptions={title:"pages",key:"pages",isLeaf:!1,expanded:!0,children:[]};pageNodes=[this.rootNodeOptions];activatedNode;pageCode="";pageCodeTitle="";pageLanguage="html";ngOnInit(){this.itemId=this.routerParams.snapshot.paramMap.get("itemId"),this.itemType=this.routerParams.snapshot.paramMap.get("itemType")}ngAfterViewInit(){this.isAfterViewInit=!0,this.rootNode=this.nzTree.getTreeNodeByKey(this.rootNodeOptions.key),this.getTsModel()}getTsModel(){this.apiSvc.GetTsModel(this.itemId,this.itemType).subscribe(t=>{if(this.tsResult=t,this.tsModelList=this.tsResult.tsModelList,this.pageModelList=this.tsModelList?.filter(e=>!e.isEnum&&e.name.indexOf("<")<0),this.pageModelList?.length>0){let e=this.tsModelList.filter(r=>r.name.toLowerCase()===this.tsResult.name.toLowerCase());e.length>0?this.pageBaseModel=e[0]:this.pageBaseModel=this.pageModelList[0],this.pageBaseModel&&this.generatePages(!0)}})}pageBaseModelChange(t){}generatePages(t=!1){if(this.pageBaseModel)if(this.loadConfigFromStorage(this.pageBaseModel),t)this.doGeneratePages();else{let e="Pages Generate Config for "+this.pageBaseModel.name;this.modalSvc.create({nzTitle:e,nzWidth:1360,nzContent:si,nzData:{configModel:this.pageBaseModel},nzCentered:!0,nzDraggable:!0,nzMaskClosable:!1,nzNoAnimation:!0,nzFooter:null,nzOkText:null,nzCancelText:null}).afterClose.subscribe(i=>{i&&(localStorage.setItem("generateConfig"+this.pageBaseModel.id,JSON.stringify(this.pageBaseModel)),this.doGeneratePages())})}}doGeneratePages(){if(!(!this.pageBaseModel||!this.rootNode))try{let t=this.rootNode.getChildren(),e=t.find(s=>s.key===this.pageBaseModel.id.toLowerCase()),r=t.findIndex(s=>s.key===e?.key);e&&e.remove();let n=ai.generatePageNode(this.pageBaseModel);r!=-1?this.rootNode.addChildren([n],r):this.rootNode.addChildren([n])}catch(t){Je.showErrorMessageBox(t)}}loadConfigFromStorage(t){let e=localStorage.getItem("generateConfig"+this.pageBaseModel?.id),r=JSON.parse(e);if(r){t.editPageType=r.editPageType,t.detailPageType=r.detailPageType;let i=t.piList,n=r.piList;i?.forEach(s=>{let d=n.filter(f=>f.name===s.name)[0];d&&d.tsType===s.tsType&&(s.isKeyvalueItem=d.isKeyvalueItem,s.isQuery=d.isQuery,s.queryDisplayType=d.queryDisplayType,s.isList=d.isList,s.isListSort=d.isListSort,s.listDisplayType=d.listDisplayType,s.isEdit=d.isEdit,s.isRequire=d.isRequire,s.editDisplayType=d.editDisplayType,s.isDetail=d.isDetail,s.detailDisplayType=d.detailDisplayType)})}}openFolder(t){if(t instanceof Qi)t.isExpanded=!t.isExpanded;else{let e=t.node;e&&(e.isExpanded=!e.isExpanded)}}activeNode(t){if(this.activatedNode=t.node,!this.activatedNode.isLeaf)this.activatedNode.isExpanded=!this.activatedNode.isExpanded,this.pageCode="",this.pageLanguage="html",this.pageCodeTitle=this.activatedNode.title;else{let e=this.activatedNode?.origin;this.pageCode=e.code,this.pageLanguage=e.language,this.pageCodeTitle=e?.title}}contextMenu(t,e){this.nzContextMenuService.create(t,e)}selectPi(t,e,r){if(this.tsResult.tsModelList.forEach(i=>{i!==t&&i.piList.forEach(n=>{n.isSelected=!1})}),!this.isCtrlDown&&!this.isShiftDown)t.piList.filter(i=>i.isSelected===!0).forEach((i,n)=>{i!=e&&(i.isSelected=!1)}),e.isSelected=!e.isSelected;else if(this.isCtrlDown)e.isSelected=!e.isSelected;else if(this.isShiftDown){let i=-1,n=-1;if(t.piList.filter(s=>s.isSelected===!0).forEach(s=>{let d=t.piList.indexOf(s);(i===-1||i>d)&&(i=d),(n===-1||n<d)&&(n=d)}),i===-1){e.isSelected=!e.isSelected;return}if(r===i||r===n){e.isSelected=!e.isSelected;return}if(r<i)for(let s=r;s<=n;s++)t.piList[s].isSelected=!0;else if(r>n)for(let s=i;s<=r;s++)t.piList[s].isSelected=!0;else{for(let s=i;s<=r;s++)t.piList[s].isSelected=!0;for(let s=r+1;s<=n;s++)t.piList[s].isSelected=!1}}}nameSortFn(t,e,r){return t.name.localeCompare(e.name)}valueSortFn(t,e,r){return t.paramValue-e.paramValue}typeSortFn(t,e,r){return t.tsType.localeCompare(e.tsType)}viewLambda(t){if(t.piList.filter(s=>s.isSelected).length<=0){Je.showInfoBox("No record is selected.");return}let e=t.piList.filter(s=>s.isSelected),r=`//1 SetValue \r
`;r+=t.name+" "+J.firstToLower(t.name)+" = new "+t.name+`();\r
`,e.forEach((s,d)=>{r+=J.firstToLower(t.name)+"."+J.firstToLower(s.name)+" = source."+J.firstToLower(s.name)+`;\r
`});let i=`//2 C# Ctor \r
`;i+=t.name+" "+J.firstToLower(t.name)+" = new "+t.name+`(){\r
`,e.forEach((s,d)=>{i+="  "+s.name+" = source."+s.name,d<e.length-1&&(i+=","),i+=`\r
`}),i+=`};\r
`;let n=`//3 Expression Lambda \r
`;e.length==1?n+="a => a."+e[0].name+`\r
`:(n+="var exp = ExpressionHelper.CreateExpression<"+t.name+`>(a => new {\r
`,e.forEach((s,d)=>{n+="  a."+s.name,d<e.length-1&&(n+=","),n+=`\r
`}),n+=`};\r
`),this.tsCode=`\r
`+r+`\r
`+i+`\r
`+n,this.codeTitle=t.name+" Lambda",this.showCode=!0}closeModal(){this.showCode=!1}modelViewTypeChanged(){localStorage.setItem("tsModelViewType",this.tsModelViewType)}tsServiceTypeChanged(){localStorage.setItem("tsServiceType",this.tsServiceType)}onKeyDownHandler(t){switch(t.keyCode){case 16:this.isShiftDown=!0,t.preventDefault();break;case 17:this.isCtrlDown=!0,t.preventDefault();break;case 37:break;case 38:this.isCtrlDown||this.isShiftDown,t.preventDefault();break;case 39:break;case 40:this.isCtrlDown||this.isShiftDown,t.preventDefault();break;default:break}}onKeyUpHandler(t){switch(t.keyCode){case 16:this.isShiftDown=!1,t.preventDefault();break;case 17:this.isCtrlDown=!1,t.preventDefault();break;default:break}}exportTsCode(){if(!this.rootNode||!this.tsResult?.tsCode)return;let t=new yn.default,e="Code_"+this.tsResult.controllerName+"_"+dn.formatDate(new Date,"yyyyMMddhhmmss"),r=t.folder(e);if(this.tsResult.tsCode?.tsModelCode){let i=r.folder("models"),n=this.tsResult.controllerName.toLowerCase()+".model.ts";i.file(n,this.tsResult.tsCode.tsModelCode)}if(this.tsResult.tsCode?.tsServiceCode){let i=r.folder("services"),n=this.tsResult.controllerName.toLowerCase()+".service.ts";i.file(n,this.tsResult.tsCode.tsServiceCode)}this.addTreeNodeToZip(r,this.rootNode),t.generateAsync({type:"blob"}).then(i=>{(0,gn.saveAs)(i,e+".zip")})}addTreeNodeToZip(t,e){let r=e.origin;if(r.isLeaf)t.file(r.title,r.code);else{let i=t.folder(r.title);e.getChildren().forEach(n=>{this.addTreeNodeToZip(i,n)})}}goback(){history.back()}static \u0275fac=function(e){return new(e||a)(Te(et),Te(Hi),Te(ut),Te(qe))};static \u0275cmp=Ee({type:a,selectors:[["app-codeviewer"]],viewQuery:function(e,r){if(e&1&&Ei(Tr,5),e&2){let i;Di(i=Pi())&&(r.nzTree=i.first)}},decls:4,vars:4,consts:[["extraTemplate",""],["nzTree",""],["nzTreeTemplate",""],["tsModelTable",""],[2,"padding","20px 80px"],[4,"ngIf"],["nzWidth","720px",3,"nzVisibleChange","nzOnCancel","nzOnOk","nzVisible","nzTitle","nzCancelText"],[4,"nzModalContent"],["nz-row",""],["nz-col","","nzSpan","20"],[1,"lh40"],[1,"f-size20"],[1,"color-lightblue"],["class","f-size16 ml30",4,"ngIf"],["nz-col","","nzSpan","4",1,"lh40","valign-bottom"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml50","w80",3,"click"],[1,"mt10","minh500",3,"nzSize"],[3,"nzSize","nzAnimated","nzTabBarExtraContent"],["nzTitle","Models"],[1,"f-size18","w80"],[1,"lineblock","ml50"],[3,"ngModelChange","ngModel"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","2"],["nzTitle","Pages"],["nzPlaceHolder","select base model for pages",1,"w300","ml20",3,"ngModelChange","ngModel","nzShowArrow"],["nzCustomContent","",3,"nzLabel","nzValue"],["nz-button","","nzType","primary",1,"ml30","w100",3,"click"],["nz-row","","nzGutter","32",1,"mt10"],["nz-col","","nzSpan","6",2,"overflow-x","hidden","overflow-y","auto"],[1,"h420","w350"],["nzBlockNode","",3,"nzClick","nzDblClick","nzData","nzTreeTemplate"],["nz-col","","nzSpan","18"],[3,"title","size","code","language"],["nzTitle","Services"],[1,"f-size18","w100"],[1,"lineblock","ml30"],[3,"title","code","language"],[1,"mt20","ml16","f-size12"],[1,"f-size16","ml30"],["nz-button","","nzType","link",3,"click"],["nz-icon","","nzType","export"],["nzSize","small"],["class","mt10 mb20 pr56",4,"ngFor","ngForOf"],[1,"mt10","mb20","pr56"],[1,"pl5"],[1,"f-size16","color-primary"],["class","f-size16 ml10 color-darkgray",4,"ngIf"],["nzColor","cyan","class","ml10",4,"ngIf"],[1,"ml10",2,"max-width","60%",3,"title"],[1,"pull-right","mr80"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"w100",3,"click"],["tabindex","1",3,"keyup","keydown"],["nzSize","small",1,"mt5","modelTable",3,"nzBordered","nzShowPagination","nzPageSize","nzData"],[1,"wp25",3,"nzShowSort","nzSortFn"],[1,"wp15",3,"nzShowSort","nzSortFn"],[3,"class","click",4,"ngFor","ngForOf"],[1,"f-size16","ml10","color-darkgray"],["nzColor","cyan",1,"ml10"],[3,"click"],["class","ml10 color-darkgray",4,"ngIf"],[1,"ml10","color-darkgray"],[1,"custom-node"],["nz-row","","nzGutter","5"],["nz-col","","nzSpan","1"],["nz-icon","",3,"click","nzType"],["nz-col","","nzSpan","23"],[1,"folder-name","ml8"],["nz-icon","","nzType","file"],[1,"file-name","ml8"],["size","middle",3,"title","code","language"]],template:function(e,r){e&1&&(S(0,"div",4),ee(1,jr,72,22,"div",5),S(2,"nz-modal",6),ze("nzVisibleChange",function(n){return ve(r.showCode,n)||(r.showCode=n),n}),ue("nzOnCancel",function(){return r.closeModal()})("nzOnOk",function(){return r.closeModal()}),ee(3,Br,2,3,"ng-container",7),C()()),e&2&&(b(),F("ngIf",r.itemId),b(),_e("nzVisible",r.showCode),F("nzTitle",r.codeTitle)("nzCancelText",null))},dependencies:[Ye,De,tt,it,Le,Pe,ct,Ft,ot,at,Pt,Ri,Mi,rt,nt,Zi,Ki,We,ht,Re,Ve,Be,Ue,je,Xi,$i,st,Yi,Ji,Oi],styles:[".modelTable tbody>tr:hover{background-color:#e8f8fe}  .modelTable tbody>tr.selected{background-color:#e8f8fe}  .ant-modal-body{padding:12px 24px 5px}div[_ngcontent-%COMP%]::selection{background:transparent!important;color:inherit}div[_ngcontent-%COMP%]:focus{outline:-webkit-focus-ring-color auto 0px;outline-style:auto;outline-width:0px}nz-tree[_ngcontent-%COMP%]{overflow:hidden;margin:0 -24px;padding:0 20px}.custom-node[_ngcontent-%COMP%]{cursor:pointer;line-height:28px;margin-left:4px;display:inline-block;width:100%}.file-name[_ngcontent-%COMP%], .folder-name[_ngcontent-%COMP%]{margin-left:4px}.file-desc[_ngcontent-%COMP%], .folder-desc[_ngcontent-%COMP%]{padding:0 8px;display:inline-block;background:#1890ff;color:#fff;position:relative;left:12px}"]})};var qr=[{path:"",component:nn,children:[{path:"",redirectTo:"/workbench/index",pathMatch:"full"},{path:"action/:actionId",component:Vt},{path:"ptype/:ptypeId",component:Ut},{path:"codeviewer/:itemType/:itemId",component:li,data:{title:"Ts"}}]},{path:"index",component:rn,children:[{path:"",component:Ot,data:{reuse:!0}}]}],di=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=kt({type:a});static \u0275inj=Nt({imports:[ci.forChild(qr),ci]})};var _n=class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=kt({type:a});static \u0275inj=Nt({providers:[qe],imports:[en,an,di]})};export{_n as WorkbenchModule};
