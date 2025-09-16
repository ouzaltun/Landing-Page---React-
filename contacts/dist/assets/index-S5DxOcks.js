(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Zh={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function ZT(){if(x0)return il;x0=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:c,ref:o!==void 0?o:null,props:u}}return il.Fragment=t,il.jsx=n,il.jsxs=n,il}var S0;function QT(){return S0||(S0=1,Zh.exports=ZT()),Zh.exports}var Re=QT(),Qh={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function JT(){if(M0)return fe;M0=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function M(N,$,yt){this.props=N,this.context=$,this.refs=b,this.updater=yt||S}M.prototype.isReactComponent={},M.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=M.prototype;function O(N,$,yt){this.props=N,this.context=$,this.refs=b,this.updater=yt||S}var D=O.prototype=new y;D.constructor=O,T(D,M.prototype),D.isPureReactComponent=!0;var C=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function z(N,$,yt,xt,Dt,zt){return yt=zt.ref,{$$typeof:i,type:N,key:$,ref:yt!==void 0?yt:null,props:zt}}function k(N,$){return z(N.type,$,void 0,void 0,void 0,N.props)}function U(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function w(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(yt){return $[yt]})}var H=/\/+/g;function nt(N,$){return typeof N=="object"&&N!==null&&N.key!=null?w(""+N.key):$.toString(36)}function ft(){}function ht(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ft,ft):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ct(N,$,yt,xt,Dt){var zt=typeof N;(zt==="undefined"||zt==="boolean")&&(N=null);var et=!1;if(N===null)et=!0;else switch(zt){case"bigint":case"string":case"number":et=!0;break;case"object":switch(N.$$typeof){case i:case t:et=!0;break;case g:return et=N._init,ct(et(N._payload),$,yt,xt,Dt)}}if(et)return Dt=Dt(N),et=xt===""?"."+nt(N,0):xt,C(Dt)?(yt="",et!=null&&(yt=et.replace(H,"$&/")+"/"),ct(Dt,$,yt,"",function(Kt){return Kt})):Dt!=null&&(U(Dt)&&(Dt=k(Dt,yt+(Dt.key==null||N&&N.key===Dt.key?"":(""+Dt.key).replace(H,"$&/")+"/")+et)),$.push(Dt)),1;et=0;var mt=xt===""?".":xt+":";if(C(N))for(var St=0;St<N.length;St++)xt=N[St],zt=mt+nt(xt,St),et+=ct(xt,$,yt,zt,Dt);else if(St=_(N),typeof St=="function")for(N=St.call(N),St=0;!(xt=N.next()).done;)xt=xt.value,zt=mt+nt(xt,St++),et+=ct(xt,$,yt,zt,Dt);else if(zt==="object"){if(typeof N.then=="function")return ct(ht(N),$,yt,xt,Dt);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return et}function B(N,$,yt){if(N==null)return N;var xt=[],Dt=0;return ct(N,xt,"","",function(zt){return $.call(yt,zt,Dt++)}),xt}function Y(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(yt){(N._status===0||N._status===-1)&&(N._status=1,N._result=yt)},function(yt){(N._status===0||N._status===-1)&&(N._status=2,N._result=yt)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var W=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function gt(){}return fe.Children={map:B,forEach:function(N,$,yt){B(N,function(){$.apply(this,arguments)},yt)},count:function(N){var $=0;return B(N,function(){$++}),$},toArray:function(N){return B(N,function($){return $})||[]},only:function(N){if(!U(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},fe.Component=M,fe.Fragment=n,fe.Profiler=o,fe.PureComponent=O,fe.StrictMode=s,fe.Suspense=p,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,fe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},fe.cache=function(N){return function(){return N.apply(null,arguments)}},fe.cloneElement=function(N,$,yt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var xt=T({},N.props),Dt=N.key,zt=void 0;if($!=null)for(et in $.ref!==void 0&&(zt=void 0),$.key!==void 0&&(Dt=""+$.key),$)!F.call($,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&$.ref===void 0||(xt[et]=$[et]);var et=arguments.length-2;if(et===1)xt.children=yt;else if(1<et){for(var mt=Array(et),St=0;St<et;St++)mt[St]=arguments[St+2];xt.children=mt}return z(N.type,Dt,void 0,void 0,zt,xt)},fe.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},fe.createElement=function(N,$,yt){var xt,Dt={},zt=null;if($!=null)for(xt in $.key!==void 0&&(zt=""+$.key),$)F.call($,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Dt[xt]=$[xt]);var et=arguments.length-2;if(et===1)Dt.children=yt;else if(1<et){for(var mt=Array(et),St=0;St<et;St++)mt[St]=arguments[St+2];Dt.children=mt}if(N&&N.defaultProps)for(xt in et=N.defaultProps,et)Dt[xt]===void 0&&(Dt[xt]=et[xt]);return z(N,zt,void 0,void 0,null,Dt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(N){return{$$typeof:h,render:N}},fe.isValidElement=U,fe.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Y}},fe.memo=function(N,$){return{$$typeof:d,type:N,compare:$===void 0?null:$}},fe.startTransition=function(N){var $=P.T,yt={};P.T=yt;try{var xt=N(),Dt=P.S;Dt!==null&&Dt(yt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(gt,W)}catch(zt){W(zt)}finally{P.T=$}},fe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},fe.use=function(N){return P.H.use(N)},fe.useActionState=function(N,$,yt){return P.H.useActionState(N,$,yt)},fe.useCallback=function(N,$){return P.H.useCallback(N,$)},fe.useContext=function(N){return P.H.useContext(N)},fe.useDebugValue=function(){},fe.useDeferredValue=function(N,$){return P.H.useDeferredValue(N,$)},fe.useEffect=function(N,$,yt){var xt=P.H;if(typeof yt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(N,$)},fe.useId=function(){return P.H.useId()},fe.useImperativeHandle=function(N,$,yt){return P.H.useImperativeHandle(N,$,yt)},fe.useInsertionEffect=function(N,$){return P.H.useInsertionEffect(N,$)},fe.useLayoutEffect=function(N,$){return P.H.useLayoutEffect(N,$)},fe.useMemo=function(N,$){return P.H.useMemo(N,$)},fe.useOptimistic=function(N,$){return P.H.useOptimistic(N,$)},fe.useReducer=function(N,$,yt){return P.H.useReducer(N,$,yt)},fe.useRef=function(N){return P.H.useRef(N)},fe.useState=function(N){return P.H.useState(N)},fe.useSyncExternalStore=function(N,$,yt){return P.H.useSyncExternalStore(N,$,yt)},fe.useTransition=function(){return P.H.useTransition()},fe.version="19.1.1",fe}var E0;function rm(){return E0||(E0=1,Qh.exports=JT()),Qh.exports}var Yt=rm(),Jh={exports:{}},al={},$h={exports:{}},td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function $T(){return T0||(T0=1,(function(i){function t(B,Y){var W=B.length;B.push(Y);t:for(;0<W;){var gt=W-1>>>1,N=B[gt];if(0<o(N,Y))B[gt]=Y,B[W]=N,W=gt;else break t}}function n(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Y=B[0],W=B.pop();if(W!==Y){B[0]=W;t:for(var gt=0,N=B.length,$=N>>>1;gt<$;){var yt=2*(gt+1)-1,xt=B[yt],Dt=yt+1,zt=B[Dt];if(0>o(xt,W))Dt<N&&0>o(zt,xt)?(B[gt]=zt,B[Dt]=W,gt=Dt):(B[gt]=xt,B[yt]=W,gt=yt);else if(Dt<N&&0>o(zt,W))B[gt]=zt,B[Dt]=W,gt=Dt;else break t}}return Y}function o(B,Y){var W=B.sortIndex-Y.sortIndex;return W!==0?W:B.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();i.unstable_now=function(){return c.now()-h}}var p=[],d=[],g=1,v=null,_=3,S=!1,T=!1,b=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var Y=n(d);Y!==null;){if(Y.callback===null)s(d);else if(Y.startTime<=B)s(d),Y.sortIndex=Y.expirationTime,t(p,Y);else break;Y=n(d)}}function P(B){if(b=!1,C(B),!T)if(n(p)!==null)T=!0,F||(F=!0,nt());else{var Y=n(d);Y!==null&&ct(P,Y.startTime-B)}}var F=!1,z=-1,k=5,U=-1;function w(){return M?!0:!(i.unstable_now()-U<k)}function H(){if(M=!1,F){var B=i.unstable_now();U=B;var Y=!0;try{t:{T=!1,b&&(b=!1,O(z),z=-1),S=!0;var W=_;try{e:{for(C(B),v=n(p);v!==null&&!(v.expirationTime>B&&w());){var gt=v.callback;if(typeof gt=="function"){v.callback=null,_=v.priorityLevel;var N=gt(v.expirationTime<=B);if(B=i.unstable_now(),typeof N=="function"){v.callback=N,C(B),Y=!0;break e}v===n(p)&&s(p),C(B)}else s(p);v=n(p)}if(v!==null)Y=!0;else{var $=n(d);$!==null&&ct(P,$.startTime-B),Y=!1}}break t}finally{v=null,_=W,S=!1}Y=void 0}}finally{Y?nt():F=!1}}}var nt;if(typeof D=="function")nt=function(){D(H)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,ht=ft.port2;ft.port1.onmessage=H,nt=function(){ht.postMessage(null)}}else nt=function(){y(H,0)};function ct(B,Y){z=y(function(){B(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(B){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var W=_;_=Y;try{return B()}finally{_=W}},i.unstable_requestPaint=function(){M=!0},i.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=_;_=B;try{return Y()}finally{_=W}},i.unstable_scheduleCallback=function(B,Y,W){var gt=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?gt+W:gt):W=gt,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=W+N,B={id:g++,callback:Y,priorityLevel:B,startTime:W,expirationTime:N,sortIndex:-1},W>gt?(B.sortIndex=W,t(d,B),n(p)===null&&B===n(d)&&(b?(O(z),z=-1):b=!0,ct(P,W-gt))):(B.sortIndex=N,t(p,B),T||S||(T=!0,F||(F=!0,nt()))),B},i.unstable_shouldYield=w,i.unstable_wrapCallback=function(B){var Y=_;return function(){var W=_;_=Y;try{return B.apply(this,arguments)}finally{_=W}}}})(td)),td}var b0;function tb(){return b0||(b0=1,$h.exports=$T()),$h.exports}var ed={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function eb(){if(A0)return Nn;A0=1;var i=rm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:g}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(p,d,null,g)},Nn.flushSync=function(p){var d=c.T,g=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=d,s.p=g,s.d.f()}},Nn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(p,d))},Nn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Nn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):g==="script"&&s.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(p)},Nn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin);s.d.L(p,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);s.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(p)},Nn.requestFormReset=function(p){s.d.r(p)},Nn.unstable_batchedUpdates=function(p,d){return p(d)},Nn.useFormState=function(p,d,g){return c.H.useFormState(p,d,g)},Nn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Nn.version="19.1.1",Nn}var R0;function nb(){if(R0)return ed.exports;R0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),ed.exports=eb(),ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function ib(){if(C0)return al;C0=1;var i=tb(),t=rm(),n=nb();function s(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function c(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(s(188))}function p(e){var a=e.alternate;if(!a){if(a=u(e),a===null)throw Error(s(188));return a!==e?null:e}for(var r=e,l=a;;){var f=r.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===r)return h(f),e;if(m===l)return h(f),a;m=m.sibling}throw Error(s(188))}if(r.return!==l.return)r=f,l=m;else{for(var E=!1,A=f.child;A;){if(A===r){E=!0,r=f,l=m;break}if(A===l){E=!0,l=f,r=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===r){E=!0,r=m,l=f;break}if(A===l){E=!0,l=m,r=f;break}A=A.sibling}if(!E)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:a}function d(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=d(e),a!==null)return a;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case M:return"Profiler";case b:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case D:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case C:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return a=e.displayName||null,a!==null?a:ht(e.type)||"Memo";case k:a=e._payload,e=e._init;try{return ht(e(a))}catch{}}return null}var ct=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},gt=[],N=-1;function $(e){return{current:e}}function yt(e){0>N||(e.current=gt[N],gt[N]=null,N--)}function xt(e,a){N++,gt[N]=e.current,e.current=a}var Dt=$(null),zt=$(null),et=$(null),mt=$(null);function St(e,a){switch(xt(et,a),xt(zt,e),xt(Dt,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?j_(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=j_(a),e=K_(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yt(Dt),xt(Dt,e)}function Kt(){yt(Dt),yt(zt),yt(et)}function Wt(e){e.memoizedState!==null&&xt(mt,e);var a=Dt.current,r=K_(a,e.type);a!==r&&(xt(zt,e),xt(Dt,r))}function ce(e){zt.current===e&&(yt(Dt),yt(zt)),mt.current===e&&(yt(mt),Jo._currentValue=W)}var Qe=Object.prototype.hasOwnProperty,V=i.unstable_scheduleCallback,Ue=i.unstable_cancelCallback,re=i.unstable_shouldYield,$t=i.unstable_requestPaint,Ot=i.unstable_now,Me=i.unstable_getCurrentPriorityLevel,Vt=i.unstable_ImmediatePriority,oe=i.unstable_UserBlockingPriority,Ge=i.unstable_NormalPriority,ke=i.unstable_LowPriority,L=i.unstable_IdlePriority,x=i.log,G=i.unstable_setDisableYieldValue,Q=null,lt=null;function it(e){if(typeof x=="function"&&G(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(Q,e)}catch{}}var Rt=Math.clz32?Math.clz32:Gt,At=Math.log,Ft=Math.LN2;function Gt(e){return e>>>=0,e===0?32:31-(At(e)/Ft|0)|0}var Mt=256,Lt=4194304;function Zt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xt(e,a,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=Zt(l):(E&=A,E!==0?f=Zt(E):r||(r=A&~e,r!==0&&(f=Zt(r))))):(A=l&~m,A!==0?f=Zt(A):E!==0?f=Zt(E):r||(r=l&~e,r!==0&&(f=Zt(r)))),f===0?0:a!==0&&a!==f&&(a&m)===0&&(m=f&-f,r=a&-a,m>=r||m===32&&(r&4194048)!==0)?a:f}function wt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function le(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function bt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function Ct(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function Bt(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,a,r,l,f,m){var E=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,tt=e.hiddenUpdates;for(r=E&~r;0<r;){var dt=31-Rt(r),vt=1<<dt;A[dt]=0,I[dt]=-1;var at=tt[dt];if(at!==null)for(tt[dt]=null,dt=0;dt<at.length;dt++){var st=at[dt];st!==null&&(st.lane&=-536870913)}r&=~vt}l!==0&&_t(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~a))}function _t(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Rt(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|r&4194090}function kt(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var l=31-Rt(r),f=1<<l;f&a|e[l]&a&&(e[l]|=a),r&=~f}}function se(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Le(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:p0(e.type))}function Ei(e,a){var r=Y.p;try{return Y.p=e,a()}finally{Y.p=r}}var pn=Math.random().toString(36).slice(2),mn="__reactFiber$"+pn,Je="__reactProps$"+pn,Bi="__reactContainer$"+pn,qs="__reactEvents$"+pn,zl="__reactListeners$"+pn,Ys="__reactHandles$"+pn,uo="__reactResources$"+pn,Fi="__reactMarker$"+pn;function js(e){delete e[mn],delete e[Je],delete e[qs],delete e[zl],delete e[Ys]}function Ki(e){var a=e[mn];if(a)return a;for(var r=e.parentNode;r;){if(a=r[Bi]||r[mn]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=$_(e);e!==null;){if(r=e[mn])return r;e=$_(e)}return a}e=r,r=e.parentNode}return null}function ba(e){if(e=e[mn]||e[Bi]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function cs(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(s(33))}function Aa(e){var a=e[uo];return a||(a=e[uo]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ln(e){e[Fi]=!0}var Vl=new Set,Hl={};function R(e,a){j(e,a),j(e+"Capture",a)}function j(e,a){for(Hl[e]=a,e=0;e<a.length;e++)Vl.add(a[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ut={},Z={};function Tt(e){return Qe.call(Z,e)?!0:Qe.call(ut,e)?!1:ot.test(e)?Z[e]=!0:(ut[e]=!0,!1)}function Ut(e,a,r){if(Tt(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function It(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function Nt(e,a,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+l)}}var Jt,ee;function qt(e){if(Jt===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);Jt=a&&a[1]||"",ee=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+ee}var de=!1;function be(e,a){if(!e||de)return"";de=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(st){var at=st}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(st){at=st}e.call(vt.prototype)}}else{try{throw Error()}catch(st){at=st}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],A=m[1];if(E&&A){var I=E.split(`
`),tt=A.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<tt.length&&!tt[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===tt.length)for(l=I.length-1,f=tt.length-1;1<=l&&0<=f&&I[l]!==tt[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==tt[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==tt[f]){var dt=`
`+I[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=f);break}}}finally{de=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?qt(r):""}function qe(e){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return qt("Activity");default:return""}}function Oe(e){try{var a="";do a+=qe(e),e=e.return;while(e);return a}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qt(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function We(e){var a=Qt(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),l=""+e[a];if(!e.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(e,a,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function _e(e){e._valueTracker||(e._valueTracker=We(e))}function Dn(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),l="";return e&&(l=Qt(e)?e.checked?"true":"false":e.value),e=l,e!==r?(a.setValue(e),!0):!1}function Ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fn=/[\n"\\]/g;function xn(e){return e.replace(Fn,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ve(e,a,r,l,f,m,E,A){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),a!=null?E==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+pe(a)):e.value!==""+pe(a)&&(e.value=""+pe(a)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),a!=null?Un(e,E,pe(a)):r!=null?Un(e,E,pe(r)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+pe(A):e.removeAttribute("name")}function In(e,a,r,l,f,m,E,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;r=r!=null?""+pe(r):"",a=a!=null?""+pe(a):r,A||a===e.value||(e.value=a),e.defaultValue=a}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Un(e,a,r){a==="number"&&Ti(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function $e(e,a,r,l){if(e=e.options,a){a={};for(var f=0;f<r.length;f++)a["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=a.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+pe(r),a=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}a!==null||e[f].disabled||(a=e[f])}a!==null&&(a.selected=!0)}}function bn(e,a,r){if(a!=null&&(a=""+pe(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+pe(r):""}function Ks(e,a,r,l){if(a==null){if(l!=null){if(r!=null)throw Error(s(92));if(ct(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),a=r}r=pe(a),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l)}function kn(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var YM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jm(e,a,r){var l=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,r):typeof r!="number"||r===0||YM.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function Km(e,a,r){if(a!=null&&typeof a!="object")throw Error(s(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in a)l=a[f],a.hasOwnProperty(f)&&r[f]!==l&&jm(e,f,l)}else for(var m in a)a.hasOwnProperty(m)&&jm(e,m,a[m])}function jc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),KM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gl(e){return KM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Kc=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,Qs=null;function Zm(e){var a=ba(e);if(a&&(e=a.stateNode)){var r=e[Je]||null;t:switch(e=a.stateNode,a.type){case"input":if(Ve(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+xn(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var l=r[a];if(l!==e&&l.form===e.form){var f=l[Je]||null;if(!f)throw Error(s(90));Ve(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<r.length;a++)l=r[a],l.form===e.form&&Dn(l)}break t;case"textarea":bn(e,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&$e(e,!!r.multiple,a,!1)}}}var Qc=!1;function Qm(e,a,r){if(Qc)return e(a,r);Qc=!0;try{var l=e(a);return l}finally{if(Qc=!1,(Zs!==null||Qs!==null)&&(Ru(),Zs&&(a=Zs,e=Qs,Qs=Zs=null,Zm(a),e)))for(a=0;a<e.length;a++)Zm(e[a])}}function co(e,a){var r=e.stateNode;if(r===null)return null;var l=r[Je]||null;if(l===null)return null;r=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,a,typeof r));return r}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(Zi)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Jc=!1}var Ra=null,$c=null,kl=null;function Jm(){if(kl)return kl;var e,a=$c,r=a.length,l,f="value"in Ra?Ra.value:Ra.textContent,m=f.length;for(e=0;e<r&&a[e]===f[e];e++);var E=r-e;for(l=1;l<=E&&a[r-l]===f[m-l];l++);return kl=f.slice(e,1<l?1-l:void 0)}function Xl(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Wl(){return!0}function $m(){return!1}function Xn(e){function a(r,l,f,m,E){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(r=e[A],this[A]=r?r(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Wl:$m,this.isPropagationStopped=$m,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),a}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Xn(fs),ho=g({},fs,{view:0,detail:0}),ZM=Xn(ho),tf,ef,po,Yl=g({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==po&&(po&&e.type==="mousemove"?(tf=e.screenX-po.screenX,ef=e.screenY-po.screenY):ef=tf=0,po=e),tf)},movementY:function(e){return"movementY"in e?e.movementY:ef}}),tg=Xn(Yl),QM=g({},Yl,{dataTransfer:0}),JM=Xn(QM),$M=g({},ho,{relatedTarget:0}),nf=Xn($M),tE=g({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),eE=Xn(tE),nE=g({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iE=Xn(nE),aE=g({},fs,{data:0}),eg=Xn(aE),sE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lE(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=oE[e])?!!a[e]:!1}function af(){return lE}var uE=g({},ho,{key:function(e){if(e.key){var a=sE[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(e){return e.type==="keypress"?Xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cE=Xn(uE),fE=g({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ng=Xn(fE),hE=g({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),dE=Xn(hE),pE=g({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),mE=Xn(pE),gE=g({},Yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vE=Xn(gE),_E=g({},fs,{newState:0,oldState:0}),yE=Xn(_E),xE=[9,13,27,32],sf=Zi&&"CompositionEvent"in window,mo=null;Zi&&"documentMode"in document&&(mo=document.documentMode);var SE=Zi&&"TextEvent"in window&&!mo,ig=Zi&&(!sf||mo&&8<mo&&11>=mo),ag=" ",sg=!1;function rg(e,a){switch(e){case"keyup":return xE.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Js=!1;function ME(e,a){switch(e){case"compositionend":return og(a);case"keypress":return a.which!==32?null:(sg=!0,ag);case"textInput":return e=a.data,e===ag&&sg?null:e;default:return null}}function EE(e,a){if(Js)return e==="compositionend"||!sf&&rg(e,a)?(e=Jm(),kl=$c=Ra=null,Js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ig&&a.locale!=="ko"?null:a.data;default:return null}}var TE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!TE[e.type]:a==="textarea"}function ug(e,a,r,l){Zs?Qs?Qs.push(l):Qs=[l]:Zs=l,a=Nu(a,"onChange"),0<a.length&&(r=new ql("onChange","change",null,r,l),e.push({event:r,listeners:a}))}var go=null,vo=null;function bE(e){k_(e,0)}function jl(e){var a=cs(e);if(Dn(a))return e}function cg(e,a){if(e==="change")return a}var fg=!1;if(Zi){var rf;if(Zi){var of="oninput"in document;if(!of){var hg=document.createElement("div");hg.setAttribute("oninput","return;"),of=typeof hg.oninput=="function"}rf=of}else rf=!1;fg=rf&&(!document.documentMode||9<document.documentMode)}function dg(){go&&(go.detachEvent("onpropertychange",pg),vo=go=null)}function pg(e){if(e.propertyName==="value"&&jl(vo)){var a=[];ug(a,vo,e,Zc(e)),Qm(bE,a)}}function AE(e,a,r){e==="focusin"?(dg(),go=a,vo=r,go.attachEvent("onpropertychange",pg)):e==="focusout"&&dg()}function RE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(vo)}function CE(e,a){if(e==="click")return jl(a)}function wE(e,a){if(e==="input"||e==="change")return jl(a)}function DE(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var $n=typeof Object.is=="function"?Object.is:DE;function _o(e,a){if($n(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),l=Object.keys(a);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!Qe.call(a,f)||!$n(e[f],a[f]))return!1}return!0}function mg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gg(e,a){var r=mg(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=a&&l>=a)return{node:r,offset:a-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=mg(r)}}function vg(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?vg(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function _g(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Ti(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=Ti(e.document)}return a}function lf(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var UE=Zi&&"documentMode"in document&&11>=document.documentMode,$s=null,uf=null,yo=null,cf=!1;function yg(e,a,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;cf||$s==null||$s!==Ti(l)||(l=$s,"selectionStart"in l&&lf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),yo&&_o(yo,l)||(yo=l,l=Nu(uf,"onSelect"),0<l.length&&(a=new ql("onSelect","select",null,a,r),e.push({event:a,listeners:l}),a.target=$s)))}function hs(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var tr={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},ff={},xg={};Zi&&(xg=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function ds(e){if(ff[e])return ff[e];if(!tr[e])return e;var a=tr[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in xg)return ff[e]=a[r];return e}var Sg=ds("animationend"),Mg=ds("animationiteration"),Eg=ds("animationstart"),LE=ds("transitionrun"),NE=ds("transitionstart"),PE=ds("transitioncancel"),Tg=ds("transitionend"),bg=new Map,hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hf.push("scrollEnd");function bi(e,a){bg.set(e,a),R(a,[e])}var Ag=new WeakMap;function ui(e,a){if(typeof e=="object"&&e!==null){var r=Ag.get(e);return r!==void 0?r:(a={value:e,source:a,stack:Oe(a)},Ag.set(e,a),a)}return{value:e,source:a,stack:Oe(a)}}var ci=[],er=0,df=0;function Kl(){for(var e=er,a=df=er=0;a<e;){var r=ci[a];ci[a++]=null;var l=ci[a];ci[a++]=null;var f=ci[a];ci[a++]=null;var m=ci[a];if(ci[a++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}m!==0&&Rg(r,f,m)}}function Zl(e,a,r,l){ci[er++]=e,ci[er++]=a,ci[er++]=r,ci[er++]=l,df|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function pf(e,a,r,l){return Zl(e,a,r,l),Ql(e)}function nr(e,a){return Zl(e,null,null,a),Ql(e)}function Rg(e,a,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&a!==null&&(f=31-Rt(r),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[a]:l.push(a),a.lane=r|536870912),m):null}function Ql(e){if(50<Xo)throw Xo=0,xh=null,Error(s(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var ir={};function OE(e,a,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,a,r,l){return new OE(e,a,r,l)}function mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,a){var r=e.alternate;return r===null?(r=ti(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Cg(e,a){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Jl(e,a,r,l,f,m){var E=0;if(l=e,typeof e=="function")mf(e)&&(E=1);else if(typeof e=="string")E=FT(e,r,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=ti(31,r,a,f),e.elementType=U,e.lanes=m,e;case T:return ps(r.children,f,m,a);case b:E=8,f|=24;break;case M:return e=ti(12,r,a,f|2),e.elementType=M,e.lanes=m,e;case P:return e=ti(13,r,a,f),e.elementType=P,e.lanes=m,e;case F:return e=ti(19,r,a,f),e.elementType=F,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case D:E=10;break t;case O:E=9;break t;case C:E=11;break t;case z:E=14;break t;case k:E=16,l=null;break t}E=29,r=Error(s(130,e===null?"null":typeof e,"")),l=null}return a=ti(E,r,a,f),a.elementType=e,a.type=l,a.lanes=m,a}function ps(e,a,r,l){return e=ti(7,e,l,a),e.lanes=r,e}function gf(e,a,r){return e=ti(6,e,null,a),e.lanes=r,e}function vf(e,a,r){return a=ti(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var ar=[],sr=0,$l=null,tu=0,fi=[],hi=0,ms=null,Ji=1,$i="";function gs(e,a){ar[sr++]=tu,ar[sr++]=$l,$l=e,tu=a}function wg(e,a,r){fi[hi++]=Ji,fi[hi++]=$i,fi[hi++]=ms,ms=e;var l=Ji;e=$i;var f=32-Rt(l)-1;l&=~(1<<f),r+=1;var m=32-Rt(a)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Ji=1<<32-Rt(a)+f|r<<f|l,$i=m+e}else Ji=1<<m|r<<f|l,$i=e}function _f(e){e.return!==null&&(gs(e,1),wg(e,1,0))}function yf(e){for(;e===$l;)$l=ar[--sr],ar[sr]=null,tu=ar[--sr],ar[sr]=null;for(;e===ms;)ms=fi[--hi],fi[hi]=null,$i=fi[--hi],fi[hi]=null,Ji=fi[--hi],fi[hi]=null}var zn=null,tn=null,we=!1,vs=null,Ii=!1,xf=Error(s(519));function _s(e){var a=Error(s(418,""));throw Mo(ui(a,e)),xf}function Dg(e){var a=e.stateNode,r=e.type,l=e.memoizedProps;switch(a[mn]=e,a[Je]=l,r){case"dialog":xe("cancel",a),xe("close",a);break;case"iframe":case"object":case"embed":xe("load",a);break;case"video":case"audio":for(r=0;r<qo.length;r++)xe(qo[r],a);break;case"source":xe("error",a);break;case"img":case"image":case"link":xe("error",a),xe("load",a);break;case"details":xe("toggle",a);break;case"input":xe("invalid",a),In(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),_e(a);break;case"select":xe("invalid",a);break;case"textarea":xe("invalid",a),Ks(a,l.value,l.defaultValue,l.children),_e(a)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||l.suppressHydrationWarning===!0||Y_(a.textContent,r)?(l.popover!=null&&(xe("beforetoggle",a),xe("toggle",a)),l.onScroll!=null&&xe("scroll",a),l.onScrollEnd!=null&&xe("scrollend",a),l.onClick!=null&&(a.onclick=Pu),a=!0):a=!1,a||_s(e)}function Ug(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:zn=zn.return}}function xo(e){if(e!==zn)return!1;if(!we)return Ug(e),we=!0,!1;var a=e.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Bh(e.type,e.memoizedProps)),r=!r),r&&tn&&_s(e),Ug(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(a===0){tn=Ri(e.nextSibling);break t}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++;e=e.nextSibling}tn=null}}else a===27?(a=tn,ka(e.type)?(e=Vh,Vh=null,tn=e):tn=a):tn=zn?Ri(e.stateNode.nextSibling):null;return!0}function So(){tn=zn=null,we=!1}function Lg(){var e=vs;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),vs=null),e}function Mo(e){vs===null?vs=[e]:vs.push(e)}var Sf=$(null),ys=null,ta=null;function Ca(e,a,r){xt(Sf,a._currentValue),a._currentValue=r}function ea(e){e._currentValue=Sf.current,yt(Sf)}function Mf(e,a,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===r)break;e=e.return}}function Ef(e,a,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=f;for(var I=0;I<a.length;I++)if(A.context===a[I]){m.lanes|=r,A=m.alternate,A!==null&&(A.lanes|=r),Mf(m.return,r,e),l||(E=null);break t}m=A.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=r,m=E.alternate,m!==null&&(m.lanes|=r),Mf(E,r,e),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===e){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Eo(e,a,r,l){e=null;for(var f=a,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var A=f.type;$n(f.pendingProps.value,E.value)||(e!==null?e.push(A):e=[A])}}else if(f===mt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Jo):e=[Jo])}f=f.return}e!==null&&Ef(a,e,r,l),a.flags|=262144}function eu(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xs(e){ys=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return Ng(ys,e)}function nu(e,a){return ys===null&&xs(e),Ng(e,a)}function Ng(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},ta===null){if(e===null)throw Error(s(308));ta=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ta=ta.next=a;return r}var BE=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},FE=i.unstable_scheduleCallback,IE=i.unstable_NormalPriority,gn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tf(){return{controller:new BE,data:new Map,refCount:0}}function To(e){e.refCount--,e.refCount===0&&FE(IE,function(){e.controller.abort()})}var bo=null,bf=0,rr=0,or=null;function zE(e,a){if(bo===null){var r=bo=[];bf=0,rr=Rh(),or={status:"pending",value:void 0,then:function(l){r.push(l)}}}return bf++,a.then(Pg,Pg),a}function Pg(){if(--bf===0&&bo!==null){or!==null&&(or.status="fulfilled");var e=bo;bo=null,rr=0,or=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function VE(e,a){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var f=0;f<r.length;f++)(0,r[f])(a)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var Og=B.S;B.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&zE(e,a),Og!==null&&Og(e,a)};var Ss=$(null);function Af(){var e=Ss.current;return e!==null?e:Xe.pooledCache}function iu(e,a){a===null?xt(Ss,Ss.current):xt(Ss,a.pool)}function Bg(){var e=Af();return e===null?null:{parent:gn._currentValue,pool:e}}var Ao=Error(s(460)),Fg=Error(s(474)),au=Error(s(542)),Rf={then:function(){}};function Ig(e){return e=e.status,e==="fulfilled"||e==="rejected"}function su(){}function zg(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(su,su),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Hg(e),e;default:if(typeof a.status=="string")a.then(su,su);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=l}},function(l){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Hg(e),e}throw Ro=a,Ao}}var Ro=null;function Vg(){if(Ro===null)throw Error(s(459));var e=Ro;return Ro=null,e}function Hg(e){if(e===Ao||e===au)throw Error(s(483))}var wa=!1;function Cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wf(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,a,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var f=l.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),l.pending=a,a=Ql(e),Rg(e,null,r),a}return Zl(e,l,a,r),Ql(e)}function Co(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,kt(e,r)}}function Df(e,a){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,r=r.next}while(r!==null);m===null?f=m=a:m=m.next=a}else f=m=a;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var Uf=!1;function wo(){if(Uf){var e=or;if(e!==null)throw e}}function Do(e,a,r,l){Uf=!1;var f=e.updateQueue;wa=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var I=A,tt=I.next;I.next=null,E===null?m=tt:E.next=tt,E=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==E&&(A===null?dt.firstBaseUpdate=tt:A.next=tt,dt.lastBaseUpdate=I))}if(m!==null){var vt=f.baseState;E=0,dt=tt=I=null,A=m;do{var at=A.lane&-536870913,st=at!==A.lane;if(st?(Ee&at)===at:(l&at)===at){at!==0&&at===rr&&(Uf=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ie=e,te=A;at=a;var Ie=r;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){vt=ie.call(Ie,vt,at);break t}vt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,at=typeof ie=="function"?ie.call(Ie,vt,at):ie,at==null)break t;vt=g({},vt,at);break t;case 2:wa=!0}}at=A.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=f.callbacks,st===null?f.callbacks=[at]:st.push(at))}else st={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(tt=dt=st,I=vt):dt=dt.next=st,E|=at;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;st=A,A=st.next,st.next=null,f.lastBaseUpdate=st,f.shared.pending=null}}while(!0);dt===null&&(I=vt),f.baseState=I,f.firstBaseUpdate=tt,f.lastBaseUpdate=dt,m===null&&(f.shared.lanes=0),za|=E,e.lanes=E,e.memoizedState=vt}}function Gg(e,a){if(typeof e!="function")throw Error(s(191,e));e.call(a)}function kg(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Gg(r[e],a)}var lr=$(null),ru=$(0);function Xg(e,a){e=la,xt(ru,e),xt(lr,a),la=e|a.baseLanes}function Lf(){xt(ru,la),xt(lr,lr.current)}function Nf(){la=ru.current,yt(lr),yt(ru)}var La=0,ge=null,Be=null,un=null,ou=!1,ur=!1,Ms=!1,lu=0,Uo=0,cr=null,HE=0;function sn(){throw Error(s(321))}function Pf(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!$n(e[r],a[r]))return!1;return!0}function Of(e,a,r,l,f,m){return La=m,ge=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,B.H=e===null||e.memoizedState===null?Rv:Cv,Ms=!1,m=r(l,f),Ms=!1,ur&&(m=qg(a,r,l,f)),Wg(e),m}function Wg(e){B.H=pu;var a=Be!==null&&Be.next!==null;if(La=0,un=Be=ge=null,ou=!1,Uo=0,cr=null,a)throw Error(s(300));e===null||Sn||(e=e.dependencies,e!==null&&eu(e)&&(Sn=!0))}function qg(e,a,r,l){ge=e;var f=0;do{if(ur&&(cr=null),Uo=0,ur=!1,25<=f)throw Error(s(301));if(f+=1,un=Be=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=jE,m=a(r,l)}while(ur);return m}function GE(){var e=B.H,a=e.useState()[0];return a=typeof a.then=="function"?Lo(a):a,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ge.flags|=1024),a}function Bf(){var e=lu!==0;return lu=0,e}function Ff(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function If(e){if(ou){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}ou=!1}La=0,un=Be=ge=null,ur=!1,Uo=lu=0,cr=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ge.memoizedState=un=e:un=un.next=e,un}function cn(){if(Be===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var a=un===null?ge.memoizedState:un.next;if(a!==null)un=a,Be=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},un===null?ge.memoizedState=un=e:un=un.next=e}return un}function zf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var a=Uo;return Uo+=1,cr===null&&(cr=[]),e=zg(cr,e,a),a=ge,(un===null?a.memoizedState:un.next)===null&&(a=a.alternate,B.H=a===null||a.memoizedState===null?Rv:Cv),e}function uu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Lo(e);if(e.$$typeof===D)return Ln(e)}throw Error(s(438,String(e)))}function Vf(e){var a=null,r=ge.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var l=ge.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=zf(),ge.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),l=0;l<e;l++)r[l]=w;return a.index++,r}function na(e,a){return typeof a=="function"?a(e):a}function cu(e){var a=cn();return Hf(a,Be,e)}function Hf(e,a,r){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}a.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{a=f.next;var A=E=null,I=null,tt=a,dt=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(Ee&vt)===vt:(La&vt)===vt){var at=tt.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===rr&&(dt=!0);else if((La&at)===at){tt=tt.next,at===rr&&(dt=!0);continue}else vt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=vt,E=m):I=I.next=vt,ge.lanes|=at,za|=at;vt=tt.action,Ms&&r(m,vt),m=tt.hasEagerState?tt.eagerState:r(m,vt)}else at={lane:vt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=at,E=m):I=I.next=at,ge.lanes|=vt,za|=vt;tt=tt.next}while(tt!==null&&tt!==a);if(I===null?E=m:I.next=A,!$n(m,e.memoizedState)&&(Sn=!0,dt&&(r=or,r!==null)))throw r;e.memoizedState=m,e.baseState=E,e.baseQueue=I,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Gf(e){var a=cn(),r=a.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,m=a.memoizedState;if(f!==null){r.pending=null;var E=f=f.next;do m=e(m,E.action),E=E.next;while(E!==f);$n(m,a.memoizedState)||(Sn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),r.lastRenderedState=m}return[m,l]}function Yg(e,a,r){var l=ge,f=cn(),m=we;if(m){if(r===void 0)throw Error(s(407));r=r()}else r=a();var E=!$n((Be||f).memoizedState,r);E&&(f.memoizedState=r,Sn=!0),f=f.queue;var A=Zg.bind(null,l,f,e);if(No(2048,8,A,[e]),f.getSnapshot!==a||E||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,fr(9,fu(),Kg.bind(null,l,f,r,a),null),Xe===null)throw Error(s(349));m||(La&124)!==0||jg(l,a,r)}return r}function jg(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=ge.updateQueue,a===null?(a=zf(),ge.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function Kg(e,a,r,l){a.value=r,a.getSnapshot=l,Qg(a)&&Jg(e)}function Zg(e,a,r){return r(function(){Qg(a)&&Jg(e)})}function Qg(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!$n(e,r)}catch{return!0}}function Jg(e){var a=nr(e,2);a!==null&&si(a,e,2)}function kf(e){var a=Wn();if(typeof e=="function"){var r=e;if(e=r(),Ms){it(!0);try{r()}finally{it(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},a}function $g(e,a,r,l){return e.baseState=r,Hf(e,Be,typeof l=="function"?l:na)}function kE(e,a,r,l,f){if(du(e))throw Error(s(485));if(e=a.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};B.T!==null?r(!0):m.isTransition=!1,l(m),r=a.pending,r===null?(m.next=a.pending=m,tv(a,m)):(m.next=r.next,a.pending=r.next=m)}}function tv(e,a){var r=a.action,l=a.payload,f=e.state;if(a.isTransition){var m=B.T,E={};B.T=E;try{var A=r(f,l),I=B.S;I!==null&&I(E,A),ev(e,a,A)}catch(tt){Xf(e,a,tt)}finally{B.T=m}}else try{m=r(f,l),ev(e,a,m)}catch(tt){Xf(e,a,tt)}}function ev(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){nv(e,a,l)},function(l){return Xf(e,a,l)}):nv(e,a,r)}function nv(e,a,r){a.status="fulfilled",a.value=r,iv(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,tv(e,r)))}function Xf(e,a,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=r,iv(a),a=a.next;while(a!==l)}e.action=null}function iv(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function av(e,a){return a}function sv(e,a){if(we){var r=Xe.formState;if(r!==null){t:{var l=ge;if(we){if(tn){e:{for(var f=tn,m=Ii;f.nodeType!==8;){if(!m){f=null;break e}if(f=Ri(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){tn=Ri(f.nextSibling),l=f.data==="F!";break t}}_s(l)}l=!1}l&&(a=r[0])}}return r=Wn(),r.memoizedState=r.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:av,lastRenderedState:a},r.queue=l,r=Tv.bind(null,ge,l),l.dispatch=r,l=kf(!1),m=Kf.bind(null,ge,!1,l.queue),l=Wn(),f={state:a,dispatch:null,action:e,pending:null},l.queue=f,r=kE.bind(null,ge,f,m,r),f.dispatch=r,l.memoizedState=e,[a,r,!1]}function rv(e){var a=cn();return ov(a,Be,e)}function ov(e,a,r){if(a=Hf(e,a,av)[0],e=cu(na)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Lo(a)}catch(E){throw E===Ao?au:E}else l=a;a=cn();var f=a.queue,m=f.dispatch;return r!==a.memoizedState&&(ge.flags|=2048,fr(9,fu(),XE.bind(null,f,r),null)),[l,m,e]}function XE(e,a){e.action=a}function lv(e){var a=cn(),r=Be;if(r!==null)return ov(a,r,e);cn(),a=a.memoizedState,r=cn();var l=r.queue.dispatch;return r.memoizedState=e,[a,l,!1]}function fr(e,a,r,l){return e={tag:e,create:r,deps:l,inst:a,next:null},a=ge.updateQueue,a===null&&(a=zf(),ge.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,a.lastEffect=e),e}function fu(){return{destroy:void 0,resource:void 0}}function uv(){return cn().memoizedState}function hu(e,a,r,l){var f=Wn();l=l===void 0?null:l,ge.flags|=e,f.memoizedState=fr(1|a,fu(),r,l)}function No(e,a,r,l){var f=cn();l=l===void 0?null:l;var m=f.memoizedState.inst;Be!==null&&l!==null&&Pf(l,Be.memoizedState.deps)?f.memoizedState=fr(a,m,r,l):(ge.flags|=e,f.memoizedState=fr(1|a,m,r,l))}function cv(e,a){hu(8390656,8,e,a)}function fv(e,a){No(2048,8,e,a)}function hv(e,a){return No(4,2,e,a)}function dv(e,a){return No(4,4,e,a)}function pv(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function mv(e,a,r){r=r!=null?r.concat([e]):null,No(4,4,pv.bind(null,a,e),r)}function Wf(){}function gv(e,a){var r=cn();a=a===void 0?null:a;var l=r.memoizedState;return a!==null&&Pf(a,l[1])?l[0]:(r.memoizedState=[e,a],e)}function vv(e,a){var r=cn();a=a===void 0?null:a;var l=r.memoizedState;if(a!==null&&Pf(a,l[1]))return l[0];if(l=e(),Ms){it(!0);try{e()}finally{it(!1)}}return r.memoizedState=[l,a],l}function qf(e,a,r){return r===void 0||(La&1073741824)!==0?e.memoizedState=a:(e.memoizedState=r,e=x_(),ge.lanes|=e,za|=e,r)}function _v(e,a,r,l){return $n(r,a)?r:lr.current!==null?(e=qf(e,r,l),$n(e,a)||(Sn=!0),e):(La&42)===0?(Sn=!0,e.memoizedState=r):(e=x_(),ge.lanes|=e,za|=e,a)}function yv(e,a,r,l,f){var m=Y.p;Y.p=m!==0&&8>m?m:8;var E=B.T,A={};B.T=A,Kf(e,!1,a,r);try{var I=f(),tt=B.S;if(tt!==null&&tt(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=VE(I,l);Po(e,a,dt,ai(e))}else Po(e,a,l,ai(e))}catch(vt){Po(e,a,{then:function(){},status:"rejected",reason:vt},ai())}finally{Y.p=m,B.T=E}}function WE(){}function Yf(e,a,r,l){if(e.tag!==5)throw Error(s(476));var f=xv(e).queue;yv(e,f,a,W,r===null?WE:function(){return Sv(e),r(l)})}function xv(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:W},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Sv(e){var a=xv(e).next.queue;Po(e,a,{},ai())}function jf(){return Ln(Jo)}function Mv(){return cn().memoizedState}function Ev(){return cn().memoizedState}function qE(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=ai();e=Da(r);var l=Ua(a,e,r);l!==null&&(si(l,a,r),Co(l,a,r)),a={cache:Tf()},e.payload=a;return}a=a.return}}function YE(e,a,r){var l=ai();r={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},du(e)?bv(a,r):(r=pf(e,a,r,l),r!==null&&(si(r,e,l),Av(r,a,l)))}function Tv(e,a,r){var l=ai();Po(e,a,r,l)}function Po(e,a,r,l){var f={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(du(e))bv(a,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var E=a.lastRenderedState,A=m(E,r);if(f.hasEagerState=!0,f.eagerState=A,$n(A,E))return Zl(e,a,f,0),Xe===null&&Kl(),!1}catch{}finally{}if(r=pf(e,a,f,l),r!==null)return si(r,e,l),Av(r,a,l),!0}return!1}function Kf(e,a,r,l){if(l={lane:2,revertLane:Rh(),action:l,hasEagerState:!1,eagerState:null,next:null},du(e)){if(a)throw Error(s(479))}else a=pf(e,r,l,2),a!==null&&si(a,e,2)}function du(e){var a=e.alternate;return e===ge||a!==null&&a===ge}function bv(e,a){ur=ou=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function Av(e,a,r){if((r&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,kt(e,r)}}var pu={readContext:Ln,use:uu,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},Rv={readContext:Ln,use:uu,useCallback:function(e,a){return Wn().memoizedState=[e,a===void 0?null:a],e},useContext:Ln,useEffect:cv,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,hu(4194308,4,pv.bind(null,a,e),r)},useLayoutEffect:function(e,a){return hu(4194308,4,e,a)},useInsertionEffect:function(e,a){hu(4,2,e,a)},useMemo:function(e,a){var r=Wn();a=a===void 0?null:a;var l=e();if(Ms){it(!0);try{e()}finally{it(!1)}}return r.memoizedState=[l,a],l},useReducer:function(e,a,r){var l=Wn();if(r!==void 0){var f=r(a);if(Ms){it(!0);try{r(a)}finally{it(!1)}}}else f=a;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=YE.bind(null,ge,e),[l.memoizedState,e]},useRef:function(e){var a=Wn();return e={current:e},a.memoizedState=e},useState:function(e){e=kf(e);var a=e.queue,r=Tv.bind(null,ge,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:Wf,useDeferredValue:function(e,a){var r=Wn();return qf(r,e,a)},useTransition:function(){var e=kf(!1);return e=yv.bind(null,ge,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var l=ge,f=Wn();if(we){if(r===void 0)throw Error(s(407));r=r()}else{if(r=a(),Xe===null)throw Error(s(349));(Ee&124)!==0||jg(l,a,r)}f.memoizedState=r;var m={value:r,getSnapshot:a};return f.queue=m,cv(Zg.bind(null,l,m,e),[e]),l.flags|=2048,fr(9,fu(),Kg.bind(null,l,m,r,a),null),r},useId:function(){var e=Wn(),a=Xe.identifierPrefix;if(we){var r=$i,l=Ji;r=(l&~(1<<32-Rt(l)-1)).toString(32)+r,a="«"+a+"R"+r,r=lu++,0<r&&(a+="H"+r.toString(32)),a+="»"}else r=HE++,a="«"+a+"r"+r.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:jf,useFormState:sv,useActionState:sv,useOptimistic:function(e){var a=Wn();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Kf.bind(null,ge,!0,r),r.dispatch=a,[e,a]},useMemoCache:Vf,useCacheRefresh:function(){return Wn().memoizedState=qE.bind(null,ge)}},Cv={readContext:Ln,use:uu,useCallback:gv,useContext:Ln,useEffect:fv,useImperativeHandle:mv,useInsertionEffect:hv,useLayoutEffect:dv,useMemo:vv,useReducer:cu,useRef:uv,useState:function(){return cu(na)},useDebugValue:Wf,useDeferredValue:function(e,a){var r=cn();return _v(r,Be.memoizedState,e,a)},useTransition:function(){var e=cu(na)[0],a=cn().memoizedState;return[typeof e=="boolean"?e:Lo(e),a]},useSyncExternalStore:Yg,useId:Mv,useHostTransitionStatus:jf,useFormState:rv,useActionState:rv,useOptimistic:function(e,a){var r=cn();return $g(r,Be,e,a)},useMemoCache:Vf,useCacheRefresh:Ev},jE={readContext:Ln,use:uu,useCallback:gv,useContext:Ln,useEffect:fv,useImperativeHandle:mv,useInsertionEffect:hv,useLayoutEffect:dv,useMemo:vv,useReducer:Gf,useRef:uv,useState:function(){return Gf(na)},useDebugValue:Wf,useDeferredValue:function(e,a){var r=cn();return Be===null?qf(r,e,a):_v(r,Be.memoizedState,e,a)},useTransition:function(){var e=Gf(na)[0],a=cn().memoizedState;return[typeof e=="boolean"?e:Lo(e),a]},useSyncExternalStore:Yg,useId:Mv,useHostTransitionStatus:jf,useFormState:lv,useActionState:lv,useOptimistic:function(e,a){var r=cn();return Be!==null?$g(r,Be,e,a):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Vf,useCacheRefresh:Ev},hr=null,Oo=0;function mu(e){var a=Oo;return Oo+=1,hr===null&&(hr=[]),zg(hr,e,a)}function Bo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function gu(e,a){throw a.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(a),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function wv(e){var a=e._init;return a(e._payload)}function Dv(e){function a(K,X){if(e){var J=K.deletions;J===null?(K.deletions=[X],K.flags|=16):J.push(X)}}function r(K,X){if(!e)return null;for(;X!==null;)a(K,X),X=X.sibling;return null}function l(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function f(K,X){return K=Qi(K,X),K.index=0,K.sibling=null,K}function m(K,X,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<X?(K.flags|=67108866,X):J):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function E(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,X,J,pt){return X===null||X.tag!==6?(X=gf(J,K.mode,pt),X.return=K,X):(X=f(X,J),X.return=K,X)}function I(K,X,J,pt){var Ht=J.type;return Ht===T?dt(K,X,J.props.children,pt,J.key):X!==null&&(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===k&&wv(Ht)===X.type)?(X=f(X,J.props),Bo(X,J),X.return=K,X):(X=Jl(J.type,J.key,J.props,null,K.mode,pt),Bo(X,J),X.return=K,X)}function tt(K,X,J,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=vf(J,K.mode,pt),X.return=K,X):(X=f(X,J.children||[]),X.return=K,X)}function dt(K,X,J,pt,Ht){return X===null||X.tag!==7?(X=ps(J,K.mode,pt,Ht),X.return=K,X):(X=f(X,J),X.return=K,X)}function vt(K,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=gf(""+X,K.mode,J),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case _:return J=Jl(X.type,X.key,X.props,null,K.mode,J),Bo(J,X),J.return=K,J;case S:return X=vf(X,K.mode,J),X.return=K,X;case k:var pt=X._init;return X=pt(X._payload),vt(K,X,J)}if(ct(X)||nt(X))return X=ps(X,K.mode,J,null),X.return=K,X;if(typeof X.then=="function")return vt(K,mu(X),J);if(X.$$typeof===D)return vt(K,nu(K,X),J);gu(K,X)}return null}function at(K,X,J,pt){var Ht=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:A(K,X,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case _:return J.key===Ht?I(K,X,J,pt):null;case S:return J.key===Ht?tt(K,X,J,pt):null;case k:return Ht=J._init,J=Ht(J._payload),at(K,X,J,pt)}if(ct(J)||nt(J))return Ht!==null?null:dt(K,X,J,pt,null);if(typeof J.then=="function")return at(K,X,mu(J),pt);if(J.$$typeof===D)return at(K,X,nu(K,J),pt);gu(K,J)}return null}function st(K,X,J,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(J)||null,A(X,K,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case _:return K=K.get(pt.key===null?J:pt.key)||null,I(X,K,pt,Ht);case S:return K=K.get(pt.key===null?J:pt.key)||null,tt(X,K,pt,Ht);case k:var ve=pt._init;return pt=ve(pt._payload),st(K,X,J,pt,Ht)}if(ct(pt)||nt(pt))return K=K.get(J)||null,dt(X,K,pt,Ht,null);if(typeof pt.then=="function")return st(K,X,J,mu(pt),Ht);if(pt.$$typeof===D)return st(K,X,J,nu(X,pt),Ht);gu(X,pt)}return null}function ie(K,X,J,pt){for(var Ht=null,ve=null,jt=X,ne=X=0,En=null;jt!==null&&ne<J.length;ne++){jt.index>ne?(En=jt,jt=null):En=jt.sibling;var Ae=at(K,jt,J[ne],pt);if(Ae===null){jt===null&&(jt=En);break}e&&jt&&Ae.alternate===null&&a(K,jt),X=m(Ae,X,ne),ve===null?Ht=Ae:ve.sibling=Ae,ve=Ae,jt=En}if(ne===J.length)return r(K,jt),we&&gs(K,ne),Ht;if(jt===null){for(;ne<J.length;ne++)jt=vt(K,J[ne],pt),jt!==null&&(X=m(jt,X,ne),ve===null?Ht=jt:ve.sibling=jt,ve=jt);return we&&gs(K,ne),Ht}for(jt=l(jt);ne<J.length;ne++)En=st(jt,K,ne,J[ne],pt),En!==null&&(e&&En.alternate!==null&&jt.delete(En.key===null?ne:En.key),X=m(En,X,ne),ve===null?Ht=En:ve.sibling=En,ve=En);return e&&jt.forEach(function(ja){return a(K,ja)}),we&&gs(K,ne),Ht}function te(K,X,J,pt){if(J==null)throw Error(s(151));for(var Ht=null,ve=null,jt=X,ne=X=0,En=null,Ae=J.next();jt!==null&&!Ae.done;ne++,Ae=J.next()){jt.index>ne?(En=jt,jt=null):En=jt.sibling;var ja=at(K,jt,Ae.value,pt);if(ja===null){jt===null&&(jt=En);break}e&&jt&&ja.alternate===null&&a(K,jt),X=m(ja,X,ne),ve===null?Ht=ja:ve.sibling=ja,ve=ja,jt=En}if(Ae.done)return r(K,jt),we&&gs(K,ne),Ht;if(jt===null){for(;!Ae.done;ne++,Ae=J.next())Ae=vt(K,Ae.value,pt),Ae!==null&&(X=m(Ae,X,ne),ve===null?Ht=Ae:ve.sibling=Ae,ve=Ae);return we&&gs(K,ne),Ht}for(jt=l(jt);!Ae.done;ne++,Ae=J.next())Ae=st(jt,K,ne,Ae.value,pt),Ae!==null&&(e&&Ae.alternate!==null&&jt.delete(Ae.key===null?ne:Ae.key),X=m(Ae,X,ne),ve===null?Ht=Ae:ve.sibling=Ae,ve=Ae);return e&&jt.forEach(function(KT){return a(K,KT)}),we&&gs(K,ne),Ht}function Ie(K,X,J,pt){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case _:t:{for(var Ht=J.key;X!==null;){if(X.key===Ht){if(Ht=J.type,Ht===T){if(X.tag===7){r(K,X.sibling),pt=f(X,J.props.children),pt.return=K,K=pt;break t}}else if(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===k&&wv(Ht)===X.type){r(K,X.sibling),pt=f(X,J.props),Bo(pt,J),pt.return=K,K=pt;break t}r(K,X);break}else a(K,X);X=X.sibling}J.type===T?(pt=ps(J.props.children,K.mode,pt,J.key),pt.return=K,K=pt):(pt=Jl(J.type,J.key,J.props,null,K.mode,pt),Bo(pt,J),pt.return=K,K=pt)}return E(K);case S:t:{for(Ht=J.key;X!==null;){if(X.key===Ht)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){r(K,X.sibling),pt=f(X,J.children||[]),pt.return=K,K=pt;break t}else{r(K,X);break}else a(K,X);X=X.sibling}pt=vf(J,K.mode,pt),pt.return=K,K=pt}return E(K);case k:return Ht=J._init,J=Ht(J._payload),Ie(K,X,J,pt)}if(ct(J))return ie(K,X,J,pt);if(nt(J)){if(Ht=nt(J),typeof Ht!="function")throw Error(s(150));return J=Ht.call(J),te(K,X,J,pt)}if(typeof J.then=="function")return Ie(K,X,mu(J),pt);if(J.$$typeof===D)return Ie(K,X,nu(K,J),pt);gu(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(r(K,X.sibling),pt=f(X,J),pt.return=K,K=pt):(r(K,X),pt=gf(J,K.mode,pt),pt.return=K,K=pt),E(K)):r(K,X)}return function(K,X,J,pt){try{Oo=0;var Ht=Ie(K,X,J,pt);return hr=null,Ht}catch(jt){if(jt===Ao||jt===au)throw jt;var ve=ti(29,jt,null,K.mode);return ve.lanes=pt,ve.return=K,ve}finally{}}}var dr=Dv(!0),Uv=Dv(!1),di=$(null),zi=null;function Na(e){var a=e.alternate;xt(vn,vn.current&1),xt(di,e),zi===null&&(a===null||lr.current!==null||a.memoizedState!==null)&&(zi=e)}function Lv(e){if(e.tag===22){if(xt(vn,vn.current),xt(di,e),zi===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(zi=e)}}else Pa()}function Pa(){xt(vn,vn.current),xt(di,di.current)}function ia(e){yt(di),zi===e&&(zi=null),yt(vn)}var vn=$(0);function vu(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||zh(r)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Zf(e,a,r,l){a=e.memoizedState,r=r(l,a),r=r==null?a:g({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Qf={enqueueSetState:function(e,a,r){e=e._reactInternals;var l=ai(),f=Da(l);f.payload=a,r!=null&&(f.callback=r),a=Ua(e,f,l),a!==null&&(si(a,e,l),Co(a,e,l))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var l=ai(),f=Da(l);f.tag=1,f.payload=a,r!=null&&(f.callback=r),a=Ua(e,f,l),a!==null&&(si(a,e,l),Co(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=ai(),l=Da(r);l.tag=2,a!=null&&(l.callback=a),a=Ua(e,l,r),a!==null&&(si(a,e,r),Co(a,e,r))}};function Nv(e,a,r,l,f,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,E):a.prototype&&a.prototype.isPureReactComponent?!_o(r,l)||!_o(f,m):!0}function Pv(e,a,r,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,l),a.state!==e&&Qf.enqueueReplaceState(a,a.state,null)}function Es(e,a){var r=a;if("ref"in a){r={};for(var l in a)l!=="ref"&&(r[l]=a[l])}if(e=e.defaultProps){r===a&&(r=g({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}var _u=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ov(e){_u(e)}function Bv(e){console.error(e)}function Fv(e){_u(e)}function yu(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Iv(e,a,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Jf(e,a,r){return r=Da(r),r.tag=3,r.payload={element:null},r.callback=function(){yu(e,a)},r}function zv(e){return e=Da(e),e.tag=3,e}function Vv(e,a,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){Iv(a,r,l)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Iv(a,r,l),typeof f!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function KE(e,a,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=r.alternate,a!==null&&Eo(a,r,f,!0),r=di.current,r!==null){switch(r.tag){case 13:return zi===null?Mh():r.alternate===null&&en===0&&(en=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Rf?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([l]):a.add(l),Th(e,l,f)),!1;case 22:return r.flags|=65536,l===Rf?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([l]):r.add(l)),Th(e,l,f)),!1}throw Error(s(435,r.tag))}return Th(e,l,f),Mh(),!1}if(we)return a=di.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,l!==xf&&(e=Error(s(422),{cause:l}),Mo(ui(e,r)))):(l!==xf&&(a=Error(s(423),{cause:l}),Mo(ui(a,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=ui(l,r),f=Jf(e.stateNode,l,f),Df(e,f),en!==4&&(en=2)),!1;var m=Error(s(520),{cause:l});if(m=ui(m,r),ko===null?ko=[m]:ko.push(m),en!==4&&(en=2),a===null)return!0;l=ui(l,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=Jf(r.stateNode,l,e),Df(r,e),!1;case 1:if(a=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Va===null||!Va.has(m))))return r.flags|=65536,f&=-f,r.lanes|=f,f=zv(f),Vv(f,e,r,l),Df(r,f),!1}r=r.return}while(r!==null);return!1}var Hv=Error(s(461)),Sn=!1;function An(e,a,r,l){a.child=e===null?Uv(a,null,r,l):dr(a,e.child,r,l)}function Gv(e,a,r,l,f){r=r.render;var m=a.ref;if("ref"in l){var E={};for(var A in l)A!=="ref"&&(E[A]=l[A])}else E=l;return xs(a),l=Of(e,a,r,E,m,f),A=Bf(),e!==null&&!Sn?(Ff(e,a,f),aa(e,a,f)):(we&&A&&_f(a),a.flags|=1,An(e,a,l,f),a.child)}function kv(e,a,r,l,f){if(e===null){var m=r.type;return typeof m=="function"&&!mf(m)&&m.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=m,Xv(e,a,m,l,f)):(e=Jl(r.type,null,l,a,a.mode,f),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!rh(e,f)){var E=m.memoizedProps;if(r=r.compare,r=r!==null?r:_o,r(E,l)&&e.ref===a.ref)return aa(e,a,f)}return a.flags|=1,e=Qi(m,l),e.ref=a.ref,e.return=a,a.child=e}function Xv(e,a,r,l,f){if(e!==null){var m=e.memoizedProps;if(_o(m,l)&&e.ref===a.ref)if(Sn=!1,a.pendingProps=l=m,rh(e,f))(e.flags&131072)!==0&&(Sn=!0);else return a.lanes=e.lanes,aa(e,a,f)}return $f(e,a,r,l,f)}function Wv(e,a,r){var l=a.pendingProps,f=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((a.flags&128)!==0){if(l=m!==null?m.baseLanes|r:r,e!==null){for(f=a.child=e.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;a.childLanes=m&~l}else a.childLanes=0,a.child=null;return qv(e,a,l,r)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&iu(a,m!==null?m.cachePool:null),m!==null?Xg(a,m):Lf(),Lv(a);else return a.lanes=a.childLanes=536870912,qv(e,a,m!==null?m.baseLanes|r:r,r)}else m!==null?(iu(a,m.cachePool),Xg(a,m),Pa(),a.memoizedState=null):(e!==null&&iu(a,null),Lf(),Pa());return An(e,a,f,r),a.child}function qv(e,a,r,l){var f=Af();return f=f===null?null:{parent:gn._currentValue,pool:f},a.memoizedState={baseLanes:r,cachePool:f},e!==null&&iu(a,null),Lf(),Lv(a),e!==null&&Eo(e,a,l,!0),null}function xu(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(a.flags|=4194816)}}function $f(e,a,r,l,f){return xs(a),r=Of(e,a,r,l,void 0,f),l=Bf(),e!==null&&!Sn?(Ff(e,a,f),aa(e,a,f)):(we&&l&&_f(a),a.flags|=1,An(e,a,r,f),a.child)}function Yv(e,a,r,l,f,m){return xs(a),a.updateQueue=null,r=qg(a,l,r,f),Wg(e),l=Bf(),e!==null&&!Sn?(Ff(e,a,m),aa(e,a,m)):(we&&l&&_f(a),a.flags|=1,An(e,a,r,m),a.child)}function jv(e,a,r,l,f){if(xs(a),a.stateNode===null){var m=ir,E=r.contextType;typeof E=="object"&&E!==null&&(m=Ln(E)),m=new r(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Qf,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},Cf(a),E=r.contextType,m.context=typeof E=="object"&&E!==null?Ln(E):ir,m.state=a.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(Zf(a,r,E,l),m.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Qf.enqueueReplaceState(m,m.state,null),Do(a,l,m,f),wo(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){m=a.stateNode;var A=a.memoizedProps,I=Es(r,A);m.props=I;var tt=m.context,dt=r.contextType;E=ir,typeof dt=="object"&&dt!==null&&(E=Ln(dt));var vt=r.getDerivedStateFromProps;dt=typeof vt=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,dt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||tt!==E)&&Pv(a,m,l,E),wa=!1;var at=a.memoizedState;m.state=at,Do(a,l,m,f),wo(),tt=a.memoizedState,A||at!==tt||wa?(typeof vt=="function"&&(Zf(a,r,vt,l),tt=a.memoizedState),(I=wa||Nv(a,r,I,l,at,tt,E))?(dt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=tt),m.props=l,m.state=tt,m.context=E,l=I):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,wf(e,a),E=a.memoizedProps,dt=Es(r,E),m.props=dt,vt=a.pendingProps,at=m.context,tt=r.contextType,I=ir,typeof tt=="object"&&tt!==null&&(I=Ln(tt)),A=r.getDerivedStateFromProps,(tt=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==vt||at!==I)&&Pv(a,m,l,I),wa=!1,at=a.memoizedState,m.state=at,Do(a,l,m,f),wo();var st=a.memoizedState;E!==vt||at!==st||wa||e!==null&&e.dependencies!==null&&eu(e.dependencies)?(typeof A=="function"&&(Zf(a,r,A,l),st=a.memoizedState),(dt=wa||Nv(a,r,dt,l,at,st,I)||e!==null&&e.dependencies!==null&&eu(e.dependencies))?(tt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,st,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,st,I)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=st),m.props=l,m.state=st,m.context=I,l=dt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&at===e.memoizedState||(a.flags|=1024),l=!1)}return m=l,xu(e,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&l?(a.child=dr(a,e.child,null,f),a.child=dr(a,null,r,f)):An(e,a,r,f),a.memoizedState=m.state,e=a.child):e=aa(e,a,f),e}function Kv(e,a,r,l){return So(),a.flags|=256,An(e,a,r,l),a.child}var th={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eh(e){return{baseLanes:e,cachePool:Bg()}}function nh(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=pi),e}function Zv(e,a,r){var l=a.pendingProps,f=!1,m=(a.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(vn.current&2)!==0),E&&(f=!0,a.flags&=-129),E=(a.flags&32)!==0,a.flags&=-33,e===null){if(we){if(f?Na(a):Pa(),we){var A=tn,I;if(I=A){t:{for(I=A,A=Ii;I.nodeType!==8;){if(!A){A=null;break t}if(I=Ri(I.nextSibling),I===null){A=null;break t}}A=I}A!==null?(a.memoizedState={dehydrated:A,treeContext:ms!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},I=ti(18,null,null,0),I.stateNode=A,I.return=a,a.child=I,zn=a,tn=null,I=!0):I=!1}I||_s(a)}if(A=a.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return zh(A)?a.lanes=32:a.lanes=536870912,null;ia(a)}return A=l.children,l=l.fallback,f?(Pa(),f=a.mode,A=Su({mode:"hidden",children:A},f),l=ps(l,f,r,null),A.return=a,l.return=a,A.sibling=l,a.child=A,f=a.child,f.memoizedState=eh(r),f.childLanes=nh(e,E,r),a.memoizedState=th,l):(Na(a),ih(a,A))}if(I=e.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(m)a.flags&256?(Na(a),a.flags&=-257,a=ah(e,a,r)):a.memoizedState!==null?(Pa(),a.child=e.child,a.flags|=128,a=null):(Pa(),f=l.fallback,A=a.mode,l=Su({mode:"visible",children:l.children},A),f=ps(f,A,r,null),f.flags|=2,l.return=a,f.return=a,l.sibling=f,a.child=l,dr(a,e.child,null,r),l=a.child,l.memoizedState=eh(r),l.childLanes=nh(e,E,r),a.memoizedState=th,a=f);else if(Na(a),zh(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var tt=E.dgst;E=tt,l=Error(s(419)),l.stack="",l.digest=E,Mo({value:l,source:null,stack:null}),a=ah(e,a,r)}else if(Sn||Eo(e,a,r,!1),E=(r&e.childLanes)!==0,Sn||E){if(E=Xe,E!==null&&(l=r&-r,l=(l&42)!==0?1:se(l),l=(l&(E.suspendedLanes|r))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,nr(e,l),si(E,e,l),Hv;A.data==="$?"||Mh(),a=ah(e,a,r)}else A.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=I.treeContext,tn=Ri(A.nextSibling),zn=a,we=!0,vs=null,Ii=!1,e!==null&&(fi[hi++]=Ji,fi[hi++]=$i,fi[hi++]=ms,Ji=e.id,$i=e.overflow,ms=a),a=ih(a,l.children),a.flags|=4096);return a}return f?(Pa(),f=l.fallback,A=a.mode,I=e.child,tt=I.sibling,l=Qi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,tt!==null?f=Qi(tt,f):(f=ps(f,A,r,null),f.flags|=2),f.return=a,l.return=a,l.sibling=f,a.child=l,l=f,f=a.child,A=e.child.memoizedState,A===null?A=eh(r):(I=A.cachePool,I!==null?(tt=gn._currentValue,I=I.parent!==tt?{parent:tt,pool:tt}:I):I=Bg(),A={baseLanes:A.baseLanes|r,cachePool:I}),f.memoizedState=A,f.childLanes=nh(e,E,r),a.memoizedState=th,l):(Na(a),r=e.child,e=r.sibling,r=Qi(r,{mode:"visible",children:l.children}),r.return=a,r.sibling=null,e!==null&&(E=a.deletions,E===null?(a.deletions=[e],a.flags|=16):E.push(e)),a.child=r,a.memoizedState=null,r)}function ih(e,a){return a=Su({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Su(e,a){return e=ti(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ah(e,a,r){return dr(a,e.child,null,r),e=ih(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Qv(e,a,r){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Mf(e.return,a,r)}function sh(e,a,r,l,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=r,m.tailMode=f)}function Jv(e,a,r){var l=a.pendingProps,f=l.revealOrder,m=l.tail;if(An(e,a,l.children,r),l=vn.current,(l&2)!==0)l=l&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qv(e,r,a);else if(e.tag===19)Qv(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(xt(vn,l),f){case"forwards":for(r=a.child,f=null;r!==null;)e=r.alternate,e!==null&&vu(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=a.child,a.child=null):(f=r.sibling,r.sibling=null),sh(a,!1,f,r,m);break;case"backwards":for(r=null,f=a.child,a.child=null;f!==null;){if(e=f.alternate,e!==null&&vu(e)===null){a.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}sh(a,!0,r,null,m);break;case"together":sh(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function aa(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),za|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(Eo(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(s(153));if(a.child!==null){for(e=a.child,r=Qi(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=Qi(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function rh(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&eu(e)))}function ZE(e,a,r){switch(a.tag){case 3:St(a,a.stateNode.containerInfo),Ca(a,gn,e.memoizedState.cache),So();break;case 27:case 5:Wt(a);break;case 4:St(a,a.stateNode.containerInfo);break;case 10:Ca(a,a.type,a.memoizedProps.value);break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Na(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Zv(e,a,r):(Na(a),e=aa(e,a,r),e!==null?e.sibling:null);Na(a);break;case 19:var f=(e.flags&128)!==0;if(l=(r&a.childLanes)!==0,l||(Eo(e,a,r,!1),l=(r&a.childLanes)!==0),f){if(l)return Jv(e,a,r);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),xt(vn,vn.current),l)break;return null;case 22:case 23:return a.lanes=0,Wv(e,a,r);case 24:Ca(a,gn,e.memoizedState.cache)}return aa(e,a,r)}function $v(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)Sn=!0;else{if(!rh(e,r)&&(a.flags&128)===0)return Sn=!1,ZE(e,a,r);Sn=(e.flags&131072)!==0}else Sn=!1,we&&(a.flags&1048576)!==0&&wg(a,tu,a.index);switch(a.lanes=0,a.tag){case 16:t:{e=a.pendingProps;var l=a.elementType,f=l._init;if(l=f(l._payload),a.type=l,typeof l=="function")mf(l)?(e=Es(l,e),a.tag=1,a=jv(null,a,l,e,r)):(a.tag=0,a=$f(null,a,l,e,r));else{if(l!=null){if(f=l.$$typeof,f===C){a.tag=11,a=Gv(null,a,l,e,r);break t}else if(f===z){a.tag=14,a=kv(null,a,l,e,r);break t}}throw a=ht(l)||l,Error(s(306,a,""))}}return a;case 0:return $f(e,a,a.type,a.pendingProps,r);case 1:return l=a.type,f=Es(l,a.pendingProps),jv(e,a,l,f,r);case 3:t:{if(St(a,a.stateNode.containerInfo),e===null)throw Error(s(387));l=a.pendingProps;var m=a.memoizedState;f=m.element,wf(e,a),Do(a,l,null,r);var E=a.memoizedState;if(l=E.cache,Ca(a,gn,l),l!==m.cache&&Ef(a,[gn],r,!0),wo(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=Kv(e,a,l,r);break t}else if(l!==f){f=ui(Error(s(424)),a),Mo(f),a=Kv(e,a,l,r);break t}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=Ri(e.firstChild),zn=a,we=!0,vs=null,Ii=!0,r=Uv(a,null,l,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(So(),l===f){a=aa(e,a,r);break t}An(e,a,l,r)}a=a.child}return a;case 26:return xu(e,a),e===null?(r=i0(a.type,null,a.pendingProps,null))?a.memoizedState=r:we||(r=a.type,e=a.pendingProps,l=Ou(et.current).createElement(r),l[mn]=a,l[Je]=e,Cn(l,r,e),ln(l),a.stateNode=l):a.memoizedState=i0(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Wt(a),e===null&&we&&(l=a.stateNode=t0(a.type,a.pendingProps,et.current),zn=a,Ii=!0,f=tn,ka(a.type)?(Vh=f,tn=Ri(l.firstChild)):tn=f),An(e,a,a.pendingProps.children,r),xu(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&we&&((f=l=tn)&&(l=TT(l,a.type,a.pendingProps,Ii),l!==null?(a.stateNode=l,zn=a,tn=Ri(l.firstChild),Ii=!1,f=!0):f=!1),f||_s(a)),Wt(a),f=a.type,m=a.pendingProps,E=e!==null?e.memoizedProps:null,l=m.children,Bh(f,m)?l=null:E!==null&&Bh(f,E)&&(a.flags|=32),a.memoizedState!==null&&(f=Of(e,a,GE,null,null,r),Jo._currentValue=f),xu(e,a),An(e,a,l,r),a.child;case 6:return e===null&&we&&((e=r=tn)&&(r=bT(r,a.pendingProps,Ii),r!==null?(a.stateNode=r,zn=a,tn=null,e=!0):e=!1),e||_s(a)),null;case 13:return Zv(e,a,r);case 4:return St(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=dr(a,null,l,r):An(e,a,l,r),a.child;case 11:return Gv(e,a,a.type,a.pendingProps,r);case 7:return An(e,a,a.pendingProps,r),a.child;case 8:return An(e,a,a.pendingProps.children,r),a.child;case 12:return An(e,a,a.pendingProps.children,r),a.child;case 10:return l=a.pendingProps,Ca(a,a.type,l.value),An(e,a,l.children,r),a.child;case 9:return f=a.type._context,l=a.pendingProps.children,xs(a),f=Ln(f),l=l(f),a.flags|=1,An(e,a,l,r),a.child;case 14:return kv(e,a,a.type,a.pendingProps,r);case 15:return Xv(e,a,a.type,a.pendingProps,r);case 19:return Jv(e,a,r);case 31:return l=a.pendingProps,r=a.mode,l={mode:l.mode,children:l.children},e===null?(r=Su(l,r),r.ref=a.ref,a.child=r,r.return=a,a=r):(r=Qi(e.child,l),r.ref=a.ref,a.child=r,r.return=a,a=r),a;case 22:return Wv(e,a,r);case 24:return xs(a),l=Ln(gn),e===null?(f=Af(),f===null&&(f=Xe,m=Tf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=r),f=m),a.memoizedState={parent:l,cache:f},Cf(a),Ca(a,gn,f)):((e.lanes&r)!==0&&(wf(e,a),Do(a,null,null,r),wo()),f=e.memoizedState,m=a.memoizedState,f.parent!==l?(f={parent:l,cache:l},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),Ca(a,gn,l)):(l=m.cache,Ca(a,gn,l),l!==f.cache&&Ef(a,[gn],r,!0))),An(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function sa(e){e.flags|=4}function t_(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!l0(a)){if(a=di.current,a!==null&&((Ee&4194048)===Ee?zi!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||a!==zi))throw Ro=Rf,Fg;e.flags|=8192}}function Mu(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?bt():536870912,e.lanes|=a,vr|=a)}function Fo(e,a){if(!we)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ke(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(a)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,a}function QE(e,a,r){var l=a.pendingProps;switch(yf(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(a),null;case 1:return Ke(a),null;case 3:return r=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ea(gn),Kt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xo(a)?sa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Lg())),Ke(a),null;case 26:return r=a.memoizedState,e===null?(sa(a),r!==null?(Ke(a),t_(a,r)):(Ke(a),a.flags&=-16777217)):r?r!==e.memoizedState?(sa(a),Ke(a),t_(a,r)):(Ke(a),a.flags&=-16777217):(e.memoizedProps!==l&&sa(a),Ke(a),a.flags&=-16777217),null;case 27:ce(a),r=et.current;var f=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==l&&sa(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Ke(a),null}e=Dt.current,xo(a)?Dg(a):(e=t0(f,l,r),a.stateNode=e,sa(a))}return Ke(a),null;case 5:if(ce(a),r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&sa(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Ke(a),null}if(e=Dt.current,xo(a))Dg(a);else{switch(f=Ou(et.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(r,{is:l.is}):f.createElement(r)}}e[mn]=a,e[Je]=l;t:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break t;for(;f.sibling===null;){if(f.return===null||f.return===a)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=e;t:switch(Cn(e,r,l),r){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&sa(a)}}return Ke(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&sa(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(s(166));if(e=et.current,xo(a)){if(e=a.stateNode,r=a.memoizedProps,l=null,f=zn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[mn]=a,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Y_(e.nodeValue,r)),e||_s(a)}else e=Ou(e).createTextNode(l),e[mn]=a,a.stateNode=e}return Ke(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=xo(a),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(s(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[mn]=a}else So(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ke(a),f=!1}else f=Lg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(ia(a),a):(ia(a),null)}if(ia(a),(a.flags&128)!==0)return a.lanes=r,a;if(r=l!==null,e=e!==null&&e.memoizedState!==null,r){l=a.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return r!==e&&r&&(a.child.flags|=8192),Mu(a,a.updateQueue),Ke(a),null;case 4:return Kt(),e===null&&Uh(a.stateNode.containerInfo),Ke(a),null;case 10:return ea(a.type),Ke(a),null;case 19:if(yt(vn),f=a.memoizedState,f===null)return Ke(a),null;if(l=(a.flags&128)!==0,m=f.rendering,m===null)if(l)Fo(f,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=vu(e),m!==null){for(a.flags|=128,Fo(f,!1),e=m.updateQueue,a.updateQueue=e,Mu(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)Cg(r,e),r=r.sibling;return xt(vn,vn.current&1|2),a.child}e=e.sibling}f.tail!==null&&Ot()>bu&&(a.flags|=128,l=!0,Fo(f,!1),a.lanes=4194304)}else{if(!l)if(e=vu(m),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,Mu(a,e),Fo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!we)return Ke(a),null}else 2*Ot()-f.renderingStartTime>bu&&r!==536870912&&(a.flags|=128,l=!0,Fo(f,!1),a.lanes=4194304);f.isBackwards?(m.sibling=a.child,a.child=m):(e=f.last,e!==null?e.sibling=m:a.child=m,f.last=m)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=Ot(),a.sibling=null,e=vn.current,xt(vn,l?e&1|2:e&1),a):(Ke(a),null);case 22:case 23:return ia(a),Nf(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(r&536870912)!==0&&(a.flags&128)===0&&(Ke(a),a.subtreeFlags&6&&(a.flags|=8192)):Ke(a),r=a.updateQueue,r!==null&&Mu(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048),e!==null&&yt(Ss),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),ea(gn),Ke(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function JE(e,a){switch(yf(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return ea(gn),Kt(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return ce(a),null;case 13:if(ia(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(s(340));So()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return yt(vn),null;case 4:return Kt(),null;case 10:return ea(a.type),null;case 22:case 23:return ia(a),Nf(),e!==null&&yt(Ss),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return ea(gn),null;case 25:return null;default:return null}}function e_(e,a){switch(yf(a),a.tag){case 3:ea(gn),Kt();break;case 26:case 27:case 5:ce(a);break;case 4:Kt();break;case 13:ia(a);break;case 19:yt(vn);break;case 10:ea(a.type);break;case 22:case 23:ia(a),Nf(),e!==null&&yt(Ss);break;case 24:ea(gn)}}function Io(e,a){try{var r=a.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var m=r.create,E=r.inst;l=m(),E.destroy=l}r=r.next}while(r!==f)}}catch(A){He(a,a.return,A)}}function Oa(e,a,r){try{var l=a.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var E=l.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,f=a;var I=r,tt=A;try{tt()}catch(dt){He(f,I,dt)}}}l=l.next}while(l!==m)}}catch(dt){He(a,a.return,dt)}}function n_(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{kg(a,r)}catch(l){He(e,e.return,l)}}}function i_(e,a,r){r.props=Es(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){He(e,a,l)}}function zo(e,a){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){He(e,a,f)}}function Vi(e,a){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){He(e,a,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){He(e,a,f)}else r.current=null}function a_(e){var a=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){He(e,e.return,f)}}function oh(e,a,r){try{var l=e.stateNode;yT(l,e.type,r,a),l[Je]=a}catch(f){He(e,e.return,f)}}function s_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function lh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||s_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uh(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(e),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Pu));else if(l!==4&&(l===27&&ka(e.type)&&(r=e.stateNode,a=null),e=e.child,e!==null))for(uh(e,a,r),e=e.sibling;e!==null;)uh(e,a,r),e=e.sibling}function Eu(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(l!==4&&(l===27&&ka(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Eu(e,a,r),e=e.sibling;e!==null;)Eu(e,a,r),e=e.sibling}function r_(e){var a=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);Cn(a,l,r),a[mn]=e,a[Je]=r}catch(m){He(e,e.return,m)}}var ra=!1,rn=!1,ch=!1,o_=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function $E(e,a){if(e=e.containerInfo,Ph=Hu,e=_g(e),lf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,A=-1,I=-1,tt=0,dt=0,vt=e,at=null;e:for(;;){for(var st;vt!==r||f!==0&&vt.nodeType!==3||(A=E+f),vt!==m||l!==0&&vt.nodeType!==3||(I=E+l),vt.nodeType===3&&(E+=vt.nodeValue.length),(st=vt.firstChild)!==null;)at=vt,vt=st;for(;;){if(vt===e)break e;if(at===r&&++tt===f&&(A=E),at===m&&++dt===l&&(I=E),(st=vt.nextSibling)!==null)break;vt=at,at=vt.parentNode}vt=st}r=A===-1||I===-1?null:{start:A,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(Oh={focusedElem:e,selectionRange:r},Hu=!1,Mn=a;Mn!==null;)if(a=Mn,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,Mn=e;else for(;Mn!==null;){switch(a=Mn,m=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=a,f=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var ie=Es(r.type,f,r.elementType===r.type);e=l.getSnapshotBeforeUpdate(ie,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){He(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)Ih(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ih(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=a.sibling,e!==null){e.return=a.return,Mn=e;break}Mn=a.return}}function l_(e,a,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ba(e,r),l&4&&Io(5,r);break;case 1:if(Ba(e,r),l&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(E){He(r,r.return,E)}else{var f=Es(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(f,a,e.__reactInternalSnapshotBeforeUpdate)}catch(E){He(r,r.return,E)}}l&64&&n_(r),l&512&&zo(r,r.return);break;case 3:if(Ba(e,r),l&64&&(e=r.updateQueue,e!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{kg(e,a)}catch(E){He(r,r.return,E)}}break;case 27:a===null&&l&4&&r_(r);case 26:case 5:Ba(e,r),a===null&&l&4&&a_(r),l&512&&zo(r,r.return);break;case 12:Ba(e,r);break;case 13:Ba(e,r),l&4&&f_(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=lT.bind(null,r),AT(e,r))));break;case 22:if(l=r.memoizedState!==null||ra,!l){a=a!==null&&a.memoizedState!==null||rn,f=ra;var m=rn;ra=l,(rn=a)&&!m?Fa(e,r,(r.subtreeFlags&8772)!==0):Ba(e,r),ra=f,rn=m}break;case 30:break;default:Ba(e,r)}}function u_(e){var a=e.alternate;a!==null&&(e.alternate=null,u_(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&js(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,qn=!1;function oa(e,a,r){for(r=r.child;r!==null;)c_(e,a,r),r=r.sibling}function c_(e,a,r){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Q,r)}catch{}switch(r.tag){case 26:rn||Vi(r,a),oa(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:rn||Vi(r,a);var l=Ye,f=qn;ka(r.type)&&(Ye=r.stateNode,qn=!1),oa(e,a,r),jo(r.stateNode),Ye=l,qn=f;break;case 5:rn||Vi(r,a);case 6:if(l=Ye,f=qn,Ye=null,oa(e,a,r),Ye=l,qn=f,Ye!==null)if(qn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(r.stateNode)}catch(m){He(r,a,m)}else try{Ye.removeChild(r.stateNode)}catch(m){He(r,a,m)}break;case 18:Ye!==null&&(qn?(e=Ye,J_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),nl(e)):J_(Ye,r.stateNode));break;case 4:l=Ye,f=qn,Ye=r.stateNode.containerInfo,qn=!0,oa(e,a,r),Ye=l,qn=f;break;case 0:case 11:case 14:case 15:rn||Oa(2,r,a),rn||Oa(4,r,a),oa(e,a,r);break;case 1:rn||(Vi(r,a),l=r.stateNode,typeof l.componentWillUnmount=="function"&&i_(r,a,l)),oa(e,a,r);break;case 21:oa(e,a,r);break;case 22:rn=(l=rn)||r.memoizedState!==null,oa(e,a,r),rn=l;break;default:oa(e,a,r)}}function f_(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{nl(e)}catch(r){He(a,a.return,r)}}function tT(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new o_),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new o_),a;default:throw Error(s(435,e.tag))}}function fh(e,a){var r=tT(e);a.forEach(function(l){var f=uT.bind(null,e,l);r.has(l)||(r.add(l),l.then(f,f))})}function ei(e,a){var r=a.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],m=e,E=a,A=E;t:for(;A!==null;){switch(A.tag){case 27:if(ka(A.type)){Ye=A.stateNode,qn=!1;break t}break;case 5:Ye=A.stateNode,qn=!1;break t;case 3:case 4:Ye=A.stateNode.containerInfo,qn=!0;break t}A=A.return}if(Ye===null)throw Error(s(160));c_(m,E,f),Ye=null,qn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)h_(a,e),a=a.sibling}var Ai=null;function h_(e,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(a,e),ni(e),l&4&&(Oa(3,e,e.return),Io(3,e),Oa(5,e,e.return));break;case 1:ei(a,e),ni(e),l&512&&(rn||r===null||Vi(r,r.return)),l&64&&ra&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Ai;if(ei(a,e),ni(e),l&512&&(rn||r===null||Vi(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Fi]||m[mn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Cn(m,l,r),m[mn]=e,ln(m),l=m;break t;case"link":var E=r0("link","href",f).get(l+(r.href||""));if(E){for(var A=0;A<E.length;A++)if(m=E[A],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(A,1);break e}}m=f.createElement(l),Cn(m,l,r),f.head.appendChild(m);break;case"meta":if(E=r0("meta","content",f).get(l+(r.content||""))){for(A=0;A<E.length;A++)if(m=E[A],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(A,1);break e}}m=f.createElement(l),Cn(m,l,r),f.head.appendChild(m);break;default:throw Error(s(468,l))}m[mn]=e,ln(m),l=m}e.stateNode=l}else o0(f,e.type,e.stateNode);else e.stateNode=s0(f,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?o0(f,e.type,e.stateNode):s0(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&oh(e,e.memoizedProps,r.memoizedProps)}break;case 27:ei(a,e),ni(e),l&512&&(rn||r===null||Vi(r,r.return)),r!==null&&l&4&&oh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(ei(a,e),ni(e),l&512&&(rn||r===null||Vi(r,r.return)),e.flags&32){f=e.stateNode;try{kn(f,"")}catch(st){He(e,e.return,st)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,oh(e,f,r!==null?r.memoizedProps:f)),l&1024&&(ch=!0);break;case 6:if(ei(a,e),ni(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(st){He(e,e.return,st)}}break;case 3:if(Iu=null,f=Ai,Ai=Bu(a.containerInfo),ei(a,e),Ai=f,ni(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{nl(a.containerInfo)}catch(st){He(e,e.return,st)}ch&&(ch=!1,d_(e));break;case 4:l=Ai,Ai=Bu(e.stateNode.containerInfo),ei(a,e),ni(e),Ai=l;break;case 12:ei(a,e),ni(e);break;case 13:ei(a,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(vh=Ot()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fh(e,l)));break;case 22:f=e.memoizedState!==null;var I=r!==null&&r.memoizedState!==null,tt=ra,dt=rn;if(ra=tt||f,rn=dt||I,ei(a,e),rn=dt,ra=tt,ni(e),l&8192)t:for(a=e.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(r===null||I||ra||rn||Ts(e)),r=null,a=e;;){if(a.tag===5||a.tag===26){if(r===null){I=r=a;try{if(m=I.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=I.stateNode;var vt=I.memoizedProps.style,at=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){He(I,I.return,st)}}}else if(a.tag===6){if(r===null){I=a;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(st){He(I,I.return,st)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,fh(e,r))));break;case 19:ei(a,e),ni(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fh(e,l)));break;case 30:break;case 21:break;default:ei(a,e),ni(e)}}function ni(e){var a=e.flags;if(a&2){try{for(var r,l=e.return;l!==null;){if(s_(l)){r=l;break}l=l.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var f=r.stateNode,m=lh(e);Eu(e,m,f);break;case 5:var E=r.stateNode;r.flags&32&&(kn(E,""),r.flags&=-33);var A=lh(e);Eu(e,A,E);break;case 3:case 4:var I=r.stateNode.containerInfo,tt=lh(e);uh(e,tt,I);break;default:throw Error(s(161))}}catch(dt){He(e,e.return,dt)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function d_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;d_(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Ba(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)l_(e,a.alternate,a),a=a.sibling}function Ts(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Oa(4,a,a.return),Ts(a);break;case 1:Vi(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&i_(a,a.return,r),Ts(a);break;case 27:jo(a.stateNode);case 26:case 5:Vi(a,a.return),Ts(a);break;case 22:a.memoizedState===null&&Ts(a);break;case 30:Ts(a);break;default:Ts(a)}e=e.sibling}}function Fa(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,f=e,m=a,E=m.flags;switch(m.tag){case 0:case 11:case 15:Fa(f,m,r),Io(4,m);break;case 1:if(Fa(f,m,r),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(tt){He(l,l.return,tt)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)Gg(I[f],A)}catch(tt){He(l,l.return,tt)}}r&&E&64&&n_(m),zo(m,m.return);break;case 27:r_(m);case 26:case 5:Fa(f,m,r),r&&l===null&&E&4&&a_(m),zo(m,m.return);break;case 12:Fa(f,m,r);break;case 13:Fa(f,m,r),r&&E&4&&f_(f,m);break;case 22:m.memoizedState===null&&Fa(f,m,r),zo(m,m.return);break;case 30:break;default:Fa(f,m,r)}a=a.sibling}}function hh(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&To(r))}function dh(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&To(e))}function Hi(e,a,r,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)p_(e,a,r,l),a=a.sibling}function p_(e,a,r,l){var f=a.flags;switch(a.tag){case 0:case 11:case 15:Hi(e,a,r,l),f&2048&&Io(9,a);break;case 1:Hi(e,a,r,l);break;case 3:Hi(e,a,r,l),f&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&To(e)));break;case 12:if(f&2048){Hi(e,a,r,l),e=a.stateNode;try{var m=a.memoizedProps,E=m.id,A=m.onPostCommit;typeof A=="function"&&A(E,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){He(a,a.return,I)}}else Hi(e,a,r,l);break;case 13:Hi(e,a,r,l);break;case 23:break;case 22:m=a.stateNode,E=a.alternate,a.memoizedState!==null?m._visibility&2?Hi(e,a,r,l):Vo(e,a):m._visibility&2?Hi(e,a,r,l):(m._visibility|=2,pr(e,a,r,l,(a.subtreeFlags&10256)!==0)),f&2048&&hh(E,a);break;case 24:Hi(e,a,r,l),f&2048&&dh(a.alternate,a);break;default:Hi(e,a,r,l)}}function pr(e,a,r,l,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=e,E=a,A=r,I=l,tt=E.flags;switch(E.tag){case 0:case 11:case 15:pr(m,E,A,I,f),Io(8,E);break;case 23:break;case 22:var dt=E.stateNode;E.memoizedState!==null?dt._visibility&2?pr(m,E,A,I,f):Vo(m,E):(dt._visibility|=2,pr(m,E,A,I,f)),f&&tt&2048&&hh(E.alternate,E);break;case 24:pr(m,E,A,I,f),f&&tt&2048&&dh(E.alternate,E);break;default:pr(m,E,A,I,f)}a=a.sibling}}function Vo(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,l=a,f=l.flags;switch(l.tag){case 22:Vo(r,l),f&2048&&hh(l.alternate,l);break;case 24:Vo(r,l),f&2048&&dh(l.alternate,l);break;default:Vo(r,l)}a=a.sibling}}var Ho=8192;function mr(e){if(e.subtreeFlags&Ho)for(e=e.child;e!==null;)m_(e),e=e.sibling}function m_(e){switch(e.tag){case 26:mr(e),e.flags&Ho&&e.memoizedState!==null&&zT(Ai,e.memoizedState,e.memoizedProps);break;case 5:mr(e);break;case 3:case 4:var a=Ai;Ai=Bu(e.stateNode.containerInfo),mr(e),Ai=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ho,Ho=16777216,mr(e),Ho=a):mr(e));break;default:mr(e)}}function g_(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Go(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Mn=l,__(l,e)}g_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)v_(e),e=e.sibling}function v_(e){switch(e.tag){case 0:case 11:case 15:Go(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:Go(e);break;case 12:Go(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Tu(e)):Go(e);break;default:Go(e)}}function Tu(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Mn=l,__(l,e)}g_(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Oa(8,a,a.return),Tu(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,Tu(a));break;default:Tu(a)}e=e.sibling}}function __(e,a){for(;Mn!==null;){var r=Mn;switch(r.tag){case 0:case 11:case 15:Oa(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:To(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Mn=l;else t:for(r=e;Mn!==null;){l=Mn;var f=l.sibling,m=l.return;if(u_(l),l===r){Mn=null;break t}if(f!==null){f.return=m,Mn=f;break t}Mn=m}}}var eT={getCacheForType:function(e){var a=Ln(gn),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r}},nT=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Xe=null,ye=null,Ee=0,Pe=0,ii=null,Ia=!1,gr=!1,ph=!1,la=0,en=0,za=0,bs=0,mh=0,pi=0,vr=0,ko=null,Yn=null,gh=!1,vh=0,bu=1/0,Au=null,Va=null,Rn=0,Ha=null,_r=null,yr=0,_h=0,yh=null,y_=null,Xo=0,xh=null;function ai(){if((Ne&2)!==0&&Ee!==0)return Ee&-Ee;if(B.T!==null){var e=rr;return e!==0?e:Rh()}return Te()}function x_(){pi===0&&(pi=(Ee&536870912)===0||we?q():536870912);var e=di.current;return e!==null&&(e.flags|=32),pi}function si(e,a,r){(e===Xe&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(xr(e,0),Ga(e,Ee,pi,!1)),Bt(e,r),((Ne&2)===0||e!==Xe)&&(e===Xe&&((Ne&2)===0&&(bs|=r),en===4&&Ga(e,Ee,pi,!1)),Gi(e))}function S_(e,a,r){if((Ne&6)!==0)throw Error(s(327));var l=!r&&(a&124)===0&&(a&e.expiredLanes)===0||wt(e,a),f=l?sT(e,a):Eh(e,a,!0),m=l;do{if(f===0){gr&&!l&&Ga(e,a,0,!1);break}else{if(r=e.current.alternate,m&&!iT(r)){f=Eh(e,a,!1),m=!1;continue}if(f===2){if(m=a,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){a=E;t:{var A=e;f=ko;var I=A.current.memoizedState.isDehydrated;if(I&&(xr(A,E).flags|=256),E=Eh(A,E,!1),E!==2){if(ph&&!I){A.errorRecoveryDisabledLanes|=m,bs|=m,f=4;break t}m=Yn,Yn=f,m!==null&&(Yn===null?Yn=m:Yn.push.apply(Yn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){xr(e,0),Ga(e,a,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:Ga(l,a,pi,!Ia);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(f=vh+300-Ot(),10<f)){if(Ga(l,a,pi,!Ia),Xt(l,0,!0)!==0)break t;l.timeoutHandle=Z_(M_.bind(null,l,r,Yn,Au,gh,a,pi,bs,vr,Ia,m,2,-0,0),f);break t}M_(l,r,Yn,Au,gh,a,pi,bs,vr,Ia,m,0,-0,0)}}break}while(!0);Gi(e)}function M_(e,a,r,l,f,m,E,A,I,tt,dt,vt,at,st){if(e.timeoutHandle=-1,vt=a.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Qo={stylesheets:null,count:0,unsuspend:IT},m_(a),vt=VT(),vt!==null)){e.cancelPendingCommit=vt(w_.bind(null,e,a,m,r,l,f,E,A,I,dt,1,at,st)),Ga(e,m,E,!tt);return}w_(e,a,m,r,l,f,E,A,I)}function iT(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],m=f.getSnapshot;f=f.value;try{if(!$n(m(),f))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ga(e,a,r,l){a&=~mh,a&=~bs,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var f=a;0<f;){var m=31-Rt(f),E=1<<m;l[m]=-1,f&=~E}r!==0&&_t(e,r,a)}function Ru(){return(Ne&6)===0?(Wo(0),!1):!0}function Sh(){if(ye!==null){if(Pe===0)var e=ye.return;else e=ye,ta=ys=null,If(e),hr=null,Oo=0,e=ye;for(;e!==null;)e_(e.alternate,e),e=e.return;ye=null}}function xr(e,a){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,ST(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Sh(),Xe=e,ye=r=Qi(e.current,null),Ee=a,Pe=0,ii=null,Ia=!1,gr=wt(e,a),ph=!1,vr=pi=mh=bs=za=en=0,Yn=ko=null,gh=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var f=31-Rt(l),m=1<<f;a|=e[f],l&=~m}return la=a,Kl(),r}function E_(e,a){ge=null,B.H=pu,a===Ao||a===au?(a=Vg(),Pe=3):a===Fg?(a=Vg(),Pe=4):Pe=a===Hv?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ii=a,ye===null&&(en=1,yu(e,ui(a,e.current)))}function T_(){var e=B.H;return B.H=pu,e===null?pu:e}function b_(){var e=B.A;return B.A=eT,e}function Mh(){en=4,Ia||(Ee&4194048)!==Ee&&di.current!==null||(gr=!0),(za&134217727)===0&&(bs&134217727)===0||Xe===null||Ga(Xe,Ee,pi,!1)}function Eh(e,a,r){var l=Ne;Ne|=2;var f=T_(),m=b_();(Xe!==e||Ee!==a)&&(Au=null,xr(e,a)),a=!1;var E=en;t:do try{if(Pe!==0&&ye!==null){var A=ye,I=ii;switch(Pe){case 8:Sh(),E=6;break t;case 3:case 2:case 9:case 6:di.current===null&&(a=!0);var tt=Pe;if(Pe=0,ii=null,Sr(e,A,I,tt),r&&gr){E=0;break t}break;default:tt=Pe,Pe=0,ii=null,Sr(e,A,I,tt)}}aT(),E=en;break}catch(dt){E_(e,dt)}while(!0);return a&&e.shellSuspendCounter++,ta=ys=null,Ne=l,B.H=f,B.A=m,ye===null&&(Xe=null,Ee=0,Kl()),E}function aT(){for(;ye!==null;)A_(ye)}function sT(e,a){var r=Ne;Ne|=2;var l=T_(),f=b_();Xe!==e||Ee!==a?(Au=null,bu=Ot()+500,xr(e,a)):gr=wt(e,a);t:do try{if(Pe!==0&&ye!==null){a=ye;var m=ii;e:switch(Pe){case 1:Pe=0,ii=null,Sr(e,a,m,1);break;case 2:case 9:if(Ig(m)){Pe=0,ii=null,R_(a);break}a=function(){Pe!==2&&Pe!==9||Xe!==e||(Pe=7),Gi(e)},m.then(a,a);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Ig(m)?(Pe=0,ii=null,R_(a)):(Pe=0,ii=null,Sr(e,a,m,7));break;case 5:var E=null;switch(ye.tag){case 26:E=ye.memoizedState;case 5:case 27:var A=ye;if(!E||l0(E)){Pe=0,ii=null;var I=A.sibling;if(I!==null)ye=I;else{var tt=A.return;tt!==null?(ye=tt,Cu(tt)):ye=null}break e}}Pe=0,ii=null,Sr(e,a,m,5);break;case 6:Pe=0,ii=null,Sr(e,a,m,6);break;case 8:Sh(),en=6;break t;default:throw Error(s(462))}}rT();break}catch(dt){E_(e,dt)}while(!0);return ta=ys=null,B.H=l,B.A=f,Ne=r,ye!==null?0:(Xe=null,Ee=0,Kl(),en)}function rT(){for(;ye!==null&&!re();)A_(ye)}function A_(e){var a=$v(e.alternate,e,la);e.memoizedProps=e.pendingProps,a===null?Cu(e):ye=a}function R_(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=Yv(r,a,a.pendingProps,a.type,void 0,Ee);break;case 11:a=Yv(r,a,a.pendingProps,a.type.render,a.ref,Ee);break;case 5:If(a);default:e_(r,a),a=ye=Cg(a,la),a=$v(r,a,la)}e.memoizedProps=e.pendingProps,a===null?Cu(e):ye=a}function Sr(e,a,r,l){ta=ys=null,If(a),hr=null,Oo=0;var f=a.return;try{if(KE(e,f,a,r,Ee)){en=1,yu(e,ui(r,e.current)),ye=null;return}}catch(m){if(f!==null)throw ye=f,m;en=1,yu(e,ui(r,e.current)),ye=null;return}a.flags&32768?(we||l===1?e=!0:gr||(Ee&536870912)!==0?e=!1:(Ia=e=!0,(l===2||l===9||l===3||l===6)&&(l=di.current,l!==null&&l.tag===13&&(l.flags|=16384))),C_(a,e)):Cu(a)}function Cu(e){var a=e;do{if((a.flags&32768)!==0){C_(a,Ia);return}e=a.return;var r=QE(a.alternate,a,la);if(r!==null){ye=r;return}if(a=a.sibling,a!==null){ye=a;return}ye=a=e}while(a!==null);en===0&&(en=5)}function C_(e,a){do{var r=JE(e.alternate,e);if(r!==null){r.flags&=32767,ye=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){ye=e;return}ye=e=r}while(e!==null);en=6,ye=null}function w_(e,a,r,l,f,m,E,A,I){e.cancelPendingCommit=null;do wu();while(Rn!==0);if((Ne&6)!==0)throw Error(s(327));if(a!==null){if(a===e.current)throw Error(s(177));if(m=a.lanes|a.childLanes,m|=df,Et(e,r,m,E,A,I),e===Xe&&(ye=Xe=null,Ee=0),_r=a,Ha=e,yr=r,_h=m,yh=f,y_=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cT(Ge,function(){return P_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=Y.p,Y.p=2,E=Ne,Ne|=4;try{$E(e,a,r)}finally{Ne=E,Y.p=f,B.T=l}}Rn=1,D_(),U_(),L_()}}function D_(){if(Rn===1){Rn=0;var e=Ha,a=_r,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var l=Y.p;Y.p=2;var f=Ne;Ne|=4;try{h_(a,e);var m=Oh,E=_g(e.containerInfo),A=m.focusedElem,I=m.selectionRange;if(E!==A&&A&&A.ownerDocument&&vg(A.ownerDocument.documentElement,A)){if(I!==null&&lf(A)){var tt=I.start,dt=I.end;if(dt===void 0&&(dt=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(dt,A.value.length);else{var vt=A.ownerDocument||document,at=vt&&vt.defaultView||window;if(at.getSelection){var st=at.getSelection(),ie=A.textContent.length,te=Math.min(I.start,ie),Ie=I.end===void 0?te:Math.min(I.end,ie);!st.extend&&te>Ie&&(E=Ie,Ie=te,te=E);var K=gg(A,te),X=gg(A,Ie);if(K&&X&&(st.rangeCount!==1||st.anchorNode!==K.node||st.anchorOffset!==K.offset||st.focusNode!==X.node||st.focusOffset!==X.offset)){var J=vt.createRange();J.setStart(K.node,K.offset),st.removeAllRanges(),te>Ie?(st.addRange(J),st.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),st.addRange(J))}}}}for(vt=[],st=A;st=st.parentNode;)st.nodeType===1&&vt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var pt=vt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Hu=!!Ph,Oh=Ph=null}finally{Ne=f,Y.p=l,B.T=r}}e.current=a,Rn=2}}function U_(){if(Rn===2){Rn=0;var e=Ha,a=_r,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var l=Y.p;Y.p=2;var f=Ne;Ne|=4;try{l_(e,a.alternate,a)}finally{Ne=f,Y.p=l,B.T=r}}Rn=3}}function L_(){if(Rn===4||Rn===3){Rn=0,$t();var e=Ha,a=_r,r=yr,l=y_;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Rn=5:(Rn=0,_r=Ha=null,N_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Va=null),Le(r),a=a.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Q,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=B.T,f=Y.p,Y.p=2,B.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var A=l[E];m(A.value,{componentStack:A.stack})}}finally{B.T=a,Y.p=f}}(yr&3)!==0&&wu(),Gi(e),f=e.pendingLanes,(r&4194090)!==0&&(f&42)!==0?e===xh?Xo++:(Xo=0,xh=e):Xo=0,Wo(0)}}function N_(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,To(a)))}function wu(e){return D_(),U_(),L_(),P_()}function P_(){if(Rn!==5)return!1;var e=Ha,a=_h;_h=0;var r=Le(yr),l=B.T,f=Y.p;try{Y.p=32>r?32:r,B.T=null,r=yh,yh=null;var m=Ha,E=yr;if(Rn=0,_r=Ha=null,yr=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,v_(m.current),p_(m,m.current,E,r),Ne=A,Wo(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Q,m)}catch{}return!0}finally{Y.p=f,B.T=l,N_(e,a)}}function O_(e,a,r){a=ui(r,a),a=Jf(e.stateNode,a,2),e=Ua(e,a,2),e!==null&&(Bt(e,2),Gi(e))}function He(e,a,r){if(e.tag===3)O_(e,e,r);else for(;a!==null;){if(a.tag===3){O_(a,e,r);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Va===null||!Va.has(l))){e=ui(r,e),r=zv(2),l=Ua(a,r,2),l!==null&&(Vv(r,l,a,e),Bt(l,2),Gi(l));break}}a=a.return}}function Th(e,a,r){var l=e.pingCache;if(l===null){l=e.pingCache=new nT;var f=new Set;l.set(a,f)}else f=l.get(a),f===void 0&&(f=new Set,l.set(a,f));f.has(r)||(ph=!0,f.add(r),e=oT.bind(null,e,a,r),a.then(e,e))}function oT(e,a,r){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Xe===e&&(Ee&r)===r&&(en===4||en===3&&(Ee&62914560)===Ee&&300>Ot()-vh?(Ne&2)===0&&xr(e,0):mh|=r,vr===Ee&&(vr=0)),Gi(e)}function B_(e,a){a===0&&(a=bt()),e=nr(e,a),e!==null&&(Bt(e,a),Gi(e))}function lT(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),B_(e,r)}function uT(e,a){var r=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(a),B_(e,r)}function cT(e,a){return V(e,a)}var Du=null,Mr=null,bh=!1,Uu=!1,Ah=!1,As=0;function Gi(e){e!==Mr&&e.next===null&&(Mr===null?Du=Mr=e:Mr=Mr.next=e),Uu=!0,bh||(bh=!0,hT())}function Wo(e,a){if(!Ah&&Uu){Ah=!0;do for(var r=!1,l=Du;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var E=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Rt(42|e)+1)-1,m&=f&~(E&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,V_(l,m))}else m=Ee,m=Xt(l,l===Xe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||wt(l,m)||(r=!0,V_(l,m));l=l.next}while(r);Ah=!1}}function fT(){F_()}function F_(){Uu=bh=!1;var e=0;As!==0&&(xT()&&(e=As),As=0);for(var a=Ot(),r=null,l=Du;l!==null;){var f=l.next,m=I_(l,a);m===0?(l.next=null,r===null?Du=f:r.next=f,f===null&&(Mr=r)):(r=l,(e!==0||(m&3)!==0)&&(Uu=!0)),l=f}Wo(e)}function I_(e,a){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-Rt(m),A=1<<E,I=f[E];I===-1?((A&r)===0||(A&l)!==0)&&(f[E]=le(A,a)):I<=a&&(e.expiredLanes|=A),m&=~A}if(a=Xe,r=Ee,r=Xt(e,e===a?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===a&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ue(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||wt(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(l!==null&&Ue(l),Le(r)){case 2:case 8:r=oe;break;case 32:r=Ge;break;case 268435456:r=L;break;default:r=Ge}return l=z_.bind(null,e),r=V(r,l),e.callbackPriority=a,e.callbackNode=r,a}return l!==null&&l!==null&&Ue(l),e.callbackPriority=2,e.callbackNode=null,2}function z_(e,a){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(wu()&&e.callbackNode!==r)return null;var l=Ee;return l=Xt(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(S_(e,l,a),I_(e,Ot()),e.callbackNode!=null&&e.callbackNode===r?z_.bind(null,e):null)}function V_(e,a){if(wu())return null;S_(e,a,!0)}function hT(){MT(function(){(Ne&6)!==0?V(Vt,fT):F_()})}function Rh(){return As===0&&(As=q()),As}function H_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gl(""+e)}function G_(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function dT(e,a,r,l,f){if(a==="submit"&&r&&r.stateNode===f){var m=H_((f[Je]||null).action),E=l.submitter;E&&(a=(a=E[Je]||null)?H_(a.formAction):E.getAttribute("formAction"),a!==null&&(m=a,E=null));var A=new ql("action","action",null,l,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(As!==0){var I=E?G_(f,E):new FormData(f);Yf(r,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(A.preventDefault(),I=E?G_(f,E):new FormData(f),Yf(r,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var Ch=0;Ch<hf.length;Ch++){var wh=hf[Ch],pT=wh.toLowerCase(),mT=wh[0].toUpperCase()+wh.slice(1);bi(pT,"on"+mT)}bi(Sg,"onAnimationEnd"),bi(Mg,"onAnimationIteration"),bi(Eg,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(LE,"onTransitionRun"),bi(NE,"onTransitionStart"),bi(PE,"onTransitionCancel"),bi(Tg,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function k_(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var m=void 0;if(a)for(var E=l.length-1;0<=E;E--){var A=l[E],I=A.instance,tt=A.currentTarget;if(A=A.listener,I!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=tt;try{m(f)}catch(dt){_u(dt)}f.currentTarget=null,m=I}else for(E=0;E<l.length;E++){if(A=l[E],I=A.instance,tt=A.currentTarget,A=A.listener,I!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=tt;try{m(f)}catch(dt){_u(dt)}f.currentTarget=null,m=I}}}}function xe(e,a){var r=a[qs];r===void 0&&(r=a[qs]=new Set);var l=e+"__bubble";r.has(l)||(X_(a,e,2,!1),r.add(l))}function Dh(e,a,r){var l=0;a&&(l|=4),X_(r,e,l,a)}var Lu="_reactListening"+Math.random().toString(36).slice(2);function Uh(e){if(!e[Lu]){e[Lu]=!0,Vl.forEach(function(r){r!=="selectionchange"&&(gT.has(r)||Dh(r,!1,e),Dh(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Lu]||(a[Lu]=!0,Dh("selectionchange",!1,a))}}function X_(e,a,r,l){switch(p0(a)){case 2:var f=kT;break;case 8:f=XT;break;default:f=Wh}r=f.bind(null,a,r,e),f=void 0,!Jc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(a,r,{capture:!0,passive:f}):e.addEventListener(a,r,!0):f!==void 0?e.addEventListener(a,r,{passive:f}):e.addEventListener(a,r,!1)}function Lh(e,a,r,l,f){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var A=l.stateNode.containerInfo;if(A===f)break;if(E===4)for(E=l.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;A!==null;){if(E=Ki(A),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){l=m=E;continue t}A=A.parentNode}}l=l.return}Qm(function(){var tt=m,dt=Zc(r),vt=[];t:{var at=bg.get(e);if(at!==void 0){var st=ql,ie=e;switch(e){case"keypress":if(Xl(r)===0)break t;case"keydown":case"keyup":st=cE;break;case"focusin":ie="focus",st=nf;break;case"focusout":ie="blur",st=nf;break;case"beforeblur":case"afterblur":st=nf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=JM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=dE;break;case Sg:case Mg:case Eg:st=eE;break;case Tg:st=mE;break;case"scroll":case"scrollend":st=ZM;break;case"wheel":st=vE;break;case"copy":case"cut":case"paste":st=iE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=ng;break;case"toggle":case"beforetoggle":st=yE}var te=(a&4)!==0,Ie=!te&&(e==="scroll"||e==="scrollend"),K=te?at!==null?at+"Capture":null:at;te=[];for(var X=tt,J;X!==null;){var pt=X;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||K===null||(pt=co(X,K),pt!=null&&te.push(Yo(X,pt,J))),Ie)break;X=X.return}0<te.length&&(at=new st(at,ie,null,r,dt),vt.push({event:at,listeners:te}))}}if((a&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&r!==Kc&&(ie=r.relatedTarget||r.fromElement)&&(Ki(ie)||ie[Bi]))break t;if((st||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,st?(ie=r.relatedTarget||r.toElement,st=tt,ie=ie?Ki(ie):null,ie!==null&&(Ie=u(ie),te=ie.tag,ie!==Ie||te!==5&&te!==27&&te!==6)&&(ie=null)):(st=null,ie=tt),st!==ie)){if(te=tg,pt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(te=ng,pt="onPointerLeave",K="onPointerEnter",X="pointer"),Ie=st==null?at:cs(st),J=ie==null?at:cs(ie),at=new te(pt,X+"leave",st,r,dt),at.target=Ie,at.relatedTarget=J,pt=null,Ki(dt)===tt&&(te=new te(K,X+"enter",ie,r,dt),te.target=J,te.relatedTarget=Ie,pt=te),Ie=pt,st&&ie)e:{for(te=st,K=ie,X=0,J=te;J;J=Er(J))X++;for(J=0,pt=K;pt;pt=Er(pt))J++;for(;0<X-J;)te=Er(te),X--;for(;0<J-X;)K=Er(K),J--;for(;X--;){if(te===K||K!==null&&te===K.alternate)break e;te=Er(te),K=Er(K)}te=null}else te=null;st!==null&&W_(vt,at,st,te,!1),ie!==null&&Ie!==null&&W_(vt,Ie,ie,te,!0)}}t:{if(at=tt?cs(tt):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Ht=cg;else if(lg(at))if(fg)Ht=wE;else{Ht=RE;var ve=AE}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?tt&&jc(tt.elementType)&&(Ht=cg):Ht=CE;if(Ht&&(Ht=Ht(e,tt))){ug(vt,Ht,r,dt);break t}ve&&ve(e,at,tt),e==="focusout"&&tt&&at.type==="number"&&tt.memoizedProps.value!=null&&Un(at,"number",at.value)}switch(ve=tt?cs(tt):window,e){case"focusin":(lg(ve)||ve.contentEditable==="true")&&($s=ve,uf=tt,yo=null);break;case"focusout":yo=uf=$s=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,yg(vt,r,dt);break;case"selectionchange":if(UE)break;case"keydown":case"keyup":yg(vt,r,dt)}var jt;if(sf)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Js?rg(e,r)&&(ne="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ne="onCompositionStart");ne&&(ig&&r.locale!=="ko"&&(Js||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Js&&(jt=Jm()):(Ra=dt,$c="value"in Ra?Ra.value:Ra.textContent,Js=!0)),ve=Nu(tt,ne),0<ve.length&&(ne=new eg(ne,e,null,r,dt),vt.push({event:ne,listeners:ve}),jt?ne.data=jt:(jt=og(r),jt!==null&&(ne.data=jt)))),(jt=SE?ME(e,r):EE(e,r))&&(ne=Nu(tt,"onBeforeInput"),0<ne.length&&(ve=new eg("onBeforeInput","beforeinput",null,r,dt),vt.push({event:ve,listeners:ne}),ve.data=jt)),dT(vt,e,tt,r,dt)}k_(vt,a)})}function Yo(e,a,r){return{instance:e,listener:a,currentTarget:r}}function Nu(e,a){for(var r=a+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=co(e,r),f!=null&&l.unshift(Yo(e,f,m)),f=co(e,a),f!=null&&l.push(Yo(e,f,m))),e.tag===3)return l;e=e.return}return[]}function Er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function W_(e,a,r,l,f){for(var m=a._reactName,E=[];r!==null&&r!==l;){var A=r,I=A.alternate,tt=A.stateNode;if(A=A.tag,I!==null&&I===l)break;A!==5&&A!==26&&A!==27||tt===null||(I=tt,f?(tt=co(r,m),tt!=null&&E.unshift(Yo(r,tt,I))):f||(tt=co(r,m),tt!=null&&E.push(Yo(r,tt,I)))),r=r.return}E.length!==0&&e.push({event:a,listeners:E})}var vT=/\r\n?/g,_T=/\u0000|\uFFFD/g;function q_(e){return(typeof e=="string"?e:""+e).replace(vT,`
`).replace(_T,"")}function Y_(e,a){return a=q_(a),q_(e)===a}function Pu(){}function Fe(e,a,r,l,f,m){switch(r){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||kn(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&kn(e,""+l);break;case"className":It(e,"class",l);break;case"tabIndex":It(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,r,l);break;case"style":Km(e,l,m);break;case"data":if(a!=="object"){It(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Gl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(a!=="input"&&Fe(e,a,"name",f.name,f,null),Fe(e,a,"formEncType",f.formEncType,f,null),Fe(e,a,"formMethod",f.formMethod,f,null),Fe(e,a,"formTarget",f.formTarget,f,null)):(Fe(e,a,"encType",f.encType,f,null),Fe(e,a,"method",f.method,f,null),Fe(e,a,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Gl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Pu);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Gl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Ut(e,"popover",l);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ut(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=jM.get(r)||r,Ut(e,r,l))}}function Nh(e,a,r,l,f,m){switch(r){case"style":Km(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof l=="string"?kn(e,l):(typeof l=="number"||typeof l=="bigint")&&kn(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Pu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hl.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),a=r.slice(2,f?r.length-7:void 0),m=e[Je]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(a,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Ut(e,r,l)}}}function Cn(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,f=!1,m;for(m in r)if(r.hasOwnProperty(m)){var E=r[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Fe(e,a,m,E,r,null)}}f&&Fe(e,a,"srcSet",r.srcSet,r,null),l&&Fe(e,a,"src",r.src,r,null);return;case"input":xe("invalid",e);var A=m=E=f=null,I=null,tt=null;for(l in r)if(r.hasOwnProperty(l)){var dt=r[l];if(dt!=null)switch(l){case"name":f=dt;break;case"type":E=dt;break;case"checked":I=dt;break;case"defaultChecked":tt=dt;break;case"value":m=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,a));break;default:Fe(e,a,l,dt,r,null)}}In(e,m,A,I,tt,E,f,!1),_e(e);return;case"select":xe("invalid",e),l=E=m=null;for(f in r)if(r.hasOwnProperty(f)&&(A=r[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":E=A;break;case"multiple":l=A;default:Fe(e,a,f,A,r,null)}a=m,r=E,e.multiple=!!l,a!=null?$e(e,!!l,a,!1):r!=null&&$e(e,!!l,r,!0);return;case"textarea":xe("invalid",e),m=f=l=null;for(E in r)if(r.hasOwnProperty(E)&&(A=r[E],A!=null))switch(E){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Fe(e,a,E,A,r,null)}Ks(e,l,f,m),_e(e);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(l=r[I],l!=null))switch(I){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Fe(e,a,I,l,r,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<qo.length;l++)xe(qo[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in r)if(r.hasOwnProperty(tt)&&(l=r[tt],l!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Fe(e,a,tt,l,r,null)}return;default:if(jc(a)){for(dt in r)r.hasOwnProperty(dt)&&(l=r[dt],l!==void 0&&Nh(e,a,dt,l,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(l=r[A],l!=null&&Fe(e,a,A,l,r,null))}function yT(e,a,r,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,A=null,I=null,tt=null,dt=null;for(st in r){var vt=r[st];if(r.hasOwnProperty(st)&&vt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=vt;default:l.hasOwnProperty(st)||Fe(e,a,st,null,l,vt)}}for(var at in l){var st=l[at];if(vt=r[at],l.hasOwnProperty(at)&&(st!=null||vt!=null))switch(at){case"type":m=st;break;case"name":f=st;break;case"checked":tt=st;break;case"defaultChecked":dt=st;break;case"value":E=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,a));break;default:st!==vt&&Fe(e,a,at,st,l,vt)}}Ve(e,E,A,I,tt,dt,m,f);return;case"select":st=E=A=at=null;for(m in r)if(I=r[m],r.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":st=I;default:l.hasOwnProperty(m)||Fe(e,a,m,null,l,I)}for(f in l)if(m=l[f],I=r[f],l.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":at=m;break;case"defaultValue":A=m;break;case"multiple":E=m;default:m!==I&&Fe(e,a,f,m,l,I)}a=A,r=E,l=st,at!=null?$e(e,!!r,at,!1):!!l!=!!r&&(a!=null?$e(e,!!r,a,!0):$e(e,!!r,r?[]:"",!1));return;case"textarea":st=at=null;for(A in r)if(f=r[A],r.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(e,a,A,null,l,f)}for(E in l)if(f=l[E],m=r[E],l.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":at=f;break;case"defaultValue":st=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&Fe(e,a,E,f,l,m)}bn(e,at,st);return;case"option":for(var ie in r)if(at=r[ie],r.hasOwnProperty(ie)&&at!=null&&!l.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Fe(e,a,ie,null,l,at)}for(I in l)if(at=l[I],st=r[I],l.hasOwnProperty(I)&&at!==st&&(at!=null||st!=null))switch(I){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Fe(e,a,I,at,l,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)at=r[te],r.hasOwnProperty(te)&&at!=null&&!l.hasOwnProperty(te)&&Fe(e,a,te,null,l,at);for(tt in l)if(at=l[tt],st=r[tt],l.hasOwnProperty(tt)&&at!==st&&(at!=null||st!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,a));break;default:Fe(e,a,tt,at,l,st)}return;default:if(jc(a)){for(var Ie in r)at=r[Ie],r.hasOwnProperty(Ie)&&at!==void 0&&!l.hasOwnProperty(Ie)&&Nh(e,a,Ie,void 0,l,at);for(dt in l)at=l[dt],st=r[dt],!l.hasOwnProperty(dt)||at===st||at===void 0&&st===void 0||Nh(e,a,dt,at,l,st);return}}for(var K in r)at=r[K],r.hasOwnProperty(K)&&at!=null&&!l.hasOwnProperty(K)&&Fe(e,a,K,null,l,at);for(vt in l)at=l[vt],st=r[vt],!l.hasOwnProperty(vt)||at===st||at==null&&st==null||Fe(e,a,vt,at,l,st)}var Ph=null,Oh=null;function Ou(e){return e.nodeType===9?e:e.ownerDocument}function j_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function K_(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Bh(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Fh=null;function xT(){var e=window.event;return e&&e.type==="popstate"?e===Fh?!1:(Fh=e,!0):(Fh=null,!1)}var Z_=typeof setTimeout=="function"?setTimeout:void 0,ST=typeof clearTimeout=="function"?clearTimeout:void 0,Q_=typeof Promise=="function"?Promise:void 0,MT=typeof queueMicrotask=="function"?queueMicrotask:typeof Q_<"u"?function(e){return Q_.resolve(null).then(e).catch(ET)}:Z_;function ET(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function J_(e,a){var r=a,l=0,f=0;do{var m=r.nextSibling;if(e.removeChild(r),m&&m.nodeType===8)if(r=m.data,r==="/$"){if(0<l&&8>l){r=l;var E=e.ownerDocument;if(r&1&&jo(E.documentElement),r&2&&jo(E.body),r&4)for(r=E.head,jo(r),E=r.firstChild;E;){var A=E.nextSibling,I=E.nodeName;E[Fi]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||r.removeChild(E),E=A}}if(f===0){e.removeChild(m),nl(a);return}f--}else r==="$"||r==="$?"||r==="$!"?f++:l=r.charCodeAt(0)-48;else l=0;r=m}while(r);nl(a)}function Ih(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Ih(r),js(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function TT(e,a,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Fi])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function bT(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ri(e.nextSibling),e===null))return null;return e}function zh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function AT(e,a){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")a();else{var l=function(){a(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ri(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var Vh=null;function $_(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return e;a--}else r==="/$"&&a++}e=e.previousSibling}return null}function t0(e,a,r){switch(a=Ou(r),e){case"html":if(e=a.documentElement,!e)throw Error(s(452));return e;case"head":if(e=a.head,!e)throw Error(s(453));return e;case"body":if(e=a.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function jo(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);js(e)}var mi=new Map,e0=new Set;function Bu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=Y.d;Y.d={f:RT,r:CT,D:wT,C:DT,L:UT,m:LT,X:PT,S:NT,M:OT};function RT(){var e=ua.f(),a=Ru();return e||a}function CT(e){var a=ba(e);a!==null&&a.tag===5&&a.type==="form"?Sv(a):ua.r(e)}var Tr=typeof document>"u"?null:document;function n0(e,a,r){var l=Tr;if(l&&typeof a=="string"&&a){var f=xn(a);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),e0.has(f)||(e0.add(f),e={rel:e,crossOrigin:r,href:a},l.querySelector(f)===null&&(a=l.createElement("link"),Cn(a,"link",e),ln(a),l.head.appendChild(a)))}}function wT(e){ua.D(e),n0("dns-prefetch",e,null)}function DT(e,a){ua.C(e,a),n0("preconnect",e,a)}function UT(e,a,r){ua.L(e,a,r);var l=Tr;if(l&&e&&a){var f='link[rel="preload"][as="'+xn(a)+'"]';a==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+xn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+xn(r.imageSizes)+'"]')):f+='[href="'+xn(e)+'"]';var m=f;switch(a){case"style":m=br(e);break;case"script":m=Ar(e)}mi.has(m)||(e=g({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),mi.set(m,e),l.querySelector(f)!==null||a==="style"&&l.querySelector(Ko(m))||a==="script"&&l.querySelector(Zo(m))||(a=l.createElement("link"),Cn(a,"link",e),ln(a),l.head.appendChild(a)))}}function LT(e,a){ua.m(e,a);var r=Tr;if(r&&e){var l=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+xn(l)+'"][href="'+xn(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ar(e)}if(!mi.has(m)&&(e=g({rel:"modulepreload",href:e},a),mi.set(m,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Zo(m)))return}l=r.createElement("link"),Cn(l,"link",e),ln(l),r.head.appendChild(l)}}}function NT(e,a,r){ua.S(e,a,r);var l=Tr;if(l&&e){var f=Aa(l).hoistableStyles,m=br(e);a=a||"default";var E=f.get(m);if(!E){var A={loading:0,preload:null};if(E=l.querySelector(Ko(m)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":a},r),(r=mi.get(m))&&Hh(e,r);var I=E=l.createElement("link");ln(I),Cn(I,"link",e),I._p=new Promise(function(tt,dt){I.onload=tt,I.onerror=dt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Fu(E,a,l)}E={type:"stylesheet",instance:E,count:1,state:A},f.set(m,E)}}}function PT(e,a){ua.X(e,a);var r=Tr;if(r&&e){var l=Aa(r).hoistableScripts,f=Ar(e),m=l.get(f);m||(m=r.querySelector(Zo(f)),m||(e=g({src:e,async:!0},a),(a=mi.get(f))&&Gh(e,a),m=r.createElement("script"),ln(m),Cn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function OT(e,a){ua.M(e,a);var r=Tr;if(r&&e){var l=Aa(r).hoistableScripts,f=Ar(e),m=l.get(f);m||(m=r.querySelector(Zo(f)),m||(e=g({src:e,async:!0,type:"module"},a),(a=mi.get(f))&&Gh(e,a),m=r.createElement("script"),ln(m),Cn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function i0(e,a,r,l){var f=(f=et.current)?Bu(f):null;if(!f)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=br(r.href),r=Aa(f).hoistableStyles,l=r.get(a),l||(l={type:"style",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=br(r.href);var m=Aa(f).hoistableStyles,E=m.get(e);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=f.querySelector(Ko(e)))&&!m._p&&(E.instance=m,E.state.loading=5),mi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},mi.set(e,r),m||BT(f,e,r,E.state))),a&&l===null)throw Error(s(528,""));return E}if(a&&l!==null)throw Error(s(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Ar(r),r=Aa(f).hoistableScripts,l=r.get(a),l||(l={type:"script",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function br(e){return'href="'+xn(e)+'"'}function Ko(e){return'link[rel="stylesheet"]['+e+"]"}function a0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function BT(e,a,r,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Cn(a,"link",r),ln(a),e.head.appendChild(a))}function Ar(e){return'[src="'+xn(e)+'"]'}function Zo(e){return"script[async]"+e}function s0(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+xn(r.href)+'"]');if(l)return a.instance=l,ln(l),l;var f=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ln(l),Cn(l,"style",f),Fu(l,r.precedence,e),a.instance=l;case"stylesheet":f=br(r.href);var m=e.querySelector(Ko(f));if(m)return a.state.loading|=4,a.instance=m,ln(m),m;l=a0(r),(f=mi.get(f))&&Hh(l,f),m=(e.ownerDocument||e).createElement("link"),ln(m);var E=m;return E._p=new Promise(function(A,I){E.onload=A,E.onerror=I}),Cn(m,"link",l),a.state.loading|=4,Fu(m,r.precedence,e),a.instance=m;case"script":return m=Ar(r.src),(f=e.querySelector(Zo(m)))?(a.instance=f,ln(f),f):(l=r,(f=mi.get(m))&&(l=g({},r),Gh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),ln(f),Cn(f,"link",l),e.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Fu(l,r.precedence,e));return a.instance}function Fu(e,a,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,E=0;E<l.length;E++){var A=l[E];if(A.dataset.precedence===a)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function Hh(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Gh(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Iu=null;function r0(e,a,r){if(Iu===null){var l=new Map,f=Iu=new Map;f.set(r,l)}else f=Iu,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var m=r[f];if(!(m[Fi]||m[mn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(a)||"";E=e+E;var A=l.get(E);A?A.push(m):l.set(E,[m])}}return l}function o0(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function FT(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function l0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Qo=null;function IT(){}function zT(e,a,r){if(Qo===null)throw Error(s(475));var l=Qo;if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=br(r.href),m=e.querySelector(Ko(f));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=zu.bind(l),e.then(l,l)),a.state.loading|=4,a.instance=m,ln(m);return}m=e.ownerDocument||e,r=a0(r),(f=mi.get(f))&&Hh(r,f),m=m.createElement("link"),ln(m);var E=m;E._p=new Promise(function(A,I){E.onload=A,E.onerror=I}),Cn(m,"link",r),a.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=zu.bind(l),e.addEventListener("load",a),e.addEventListener("error",a))}}function VT(){if(Qo===null)throw Error(s(475));var e=Qo;return e.stylesheets&&e.count===0&&kh(e,e.stylesheets),0<e.count?function(a){var r=setTimeout(function(){if(e.stylesheets&&kh(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r)}}:null}function zu(){if(this.count--,this.count===0){if(this.stylesheets)kh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vu=null;function kh(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vu=new Map,a.forEach(HT,e),Vu=null,zu.call(e))}function HT(e,a){if(!(a.state.loading&4)){var r=Vu.get(e);if(r)var l=r.get(null);else{r=new Map,Vu.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),l=E)}l&&r.set(null,l)}f=a.instance,E=f.getAttribute("data-precedence"),m=r.get(E)||l,m===l&&r.set(null,f),r.set(E,f),this.count++,l=zu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),a.state.loading|=4}}var Jo={$$typeof:D,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function GT(e,a,r,l,f,m,E,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function u0(e,a,r,l,f,m,E,A,I,tt,dt,vt){return e=new GT(e,a,r,E,A,I,tt,vt),a=1,m===!0&&(a|=24),m=ti(3,null,null,a),e.current=m,m.stateNode=e,a=Tf(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:a},Cf(m),e}function c0(e){return e?(e=ir,e):ir}function f0(e,a,r,l,f,m){f=c0(f),l.context===null?l.context=f:l.pendingContext=f,l=Da(a),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=Ua(e,l,a),r!==null&&(si(r,e,a),Co(r,e,a))}function h0(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function Xh(e,a){h0(e,a),(e=e.alternate)&&h0(e,a)}function d0(e){if(e.tag===13){var a=nr(e,67108864);a!==null&&si(a,e,67108864),Xh(e,67108864)}}var Hu=!0;function kT(e,a,r,l){var f=B.T;B.T=null;var m=Y.p;try{Y.p=2,Wh(e,a,r,l)}finally{Y.p=m,B.T=f}}function XT(e,a,r,l){var f=B.T;B.T=null;var m=Y.p;try{Y.p=8,Wh(e,a,r,l)}finally{Y.p=m,B.T=f}}function Wh(e,a,r,l){if(Hu){var f=qh(l);if(f===null)Lh(e,a,l,Gu,r),m0(e,l);else if(qT(f,e,a,r,l))l.stopPropagation();else if(m0(e,l),a&4&&-1<WT.indexOf(e)){for(;f!==null;){var m=ba(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Zt(m.pendingLanes);if(E!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var I=1<<31-Rt(E);A.entanglements[1]|=I,E&=~I}Gi(m),(Ne&6)===0&&(bu=Ot()+500,Wo(0))}}break;case 13:A=nr(m,2),A!==null&&si(A,m,2),Ru(),Xh(m,2)}if(m=qh(l),m===null&&Lh(e,a,l,Gu,r),m===f)break;f=m}f!==null&&l.stopPropagation()}else Lh(e,a,l,null,r)}}function qh(e){return e=Zc(e),Yh(e)}var Gu=null;function Yh(e){if(Gu=null,e=Ki(e),e!==null){var a=u(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=c(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Gu=e,null}function p0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Me()){case Vt:return 2;case oe:return 8;case Ge:case ke:return 32;case L:return 268435456;default:return 32}default:return 32}}var jh=!1,Xa=null,Wa=null,qa=null,$o=new Map,tl=new Map,Ya=[],WT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m0(e,a){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":$o.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(a.pointerId)}}function el(e,a,r,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},a!==null&&(a=ba(a),a!==null&&d0(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),e)}function qT(e,a,r,l,f){switch(a){case"focusin":return Xa=el(Xa,e,a,r,l,f),!0;case"dragenter":return Wa=el(Wa,e,a,r,l,f),!0;case"mouseover":return qa=el(qa,e,a,r,l,f),!0;case"pointerover":var m=f.pointerId;return $o.set(m,el($o.get(m)||null,e,a,r,l,f)),!0;case"gotpointercapture":return m=f.pointerId,tl.set(m,el(tl.get(m)||null,e,a,r,l,f)),!0}return!1}function g0(e){var a=Ki(e.target);if(a!==null){var r=u(a);if(r!==null){if(a=r.tag,a===13){if(a=c(r),a!==null){e.blockedOn=a,Ei(e.priority,function(){if(r.tag===13){var l=ai();l=se(l);var f=nr(r,l);f!==null&&si(f,r,l),Xh(r,l)}});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ku(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=qh(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Kc=l,r.target.dispatchEvent(l),Kc=null}else return a=ba(r),a!==null&&d0(a),e.blockedOn=r,!1;a.shift()}return!0}function v0(e,a,r){ku(e)&&r.delete(a)}function YT(){jh=!1,Xa!==null&&ku(Xa)&&(Xa=null),Wa!==null&&ku(Wa)&&(Wa=null),qa!==null&&ku(qa)&&(qa=null),$o.forEach(v0),tl.forEach(v0)}function Xu(e,a){e.blockedOn===a&&(e.blockedOn=null,jh||(jh=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,YT)))}var Wu=null;function _0(e){Wu!==e&&(Wu=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Wu===e&&(Wu=null);for(var a=0;a<e.length;a+=3){var r=e[a],l=e[a+1],f=e[a+2];if(typeof l!="function"){if(Yh(l||r)===null)continue;break}var m=ba(r);m!==null&&(e.splice(a,3),a-=3,Yf(m,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function nl(e){function a(I){return Xu(I,e)}Xa!==null&&Xu(Xa,e),Wa!==null&&Xu(Wa,e),qa!==null&&Xu(qa,e),$o.forEach(a),tl.forEach(a);for(var r=0;r<Ya.length;r++){var l=Ya[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ya.length&&(r=Ya[0],r.blockedOn===null);)g0(r),r.blockedOn===null&&Ya.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],m=r[l+1],E=f[Je]||null;if(typeof m=="function")E||_0(r);else if(E){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Je]||null)A=E.formAction;else if(Yh(f)!==null)continue}else A=E.action;typeof A=="function"?r[l+1]=A:(r.splice(l,3),l-=3),_0(r)}}}function Kh(e){this._internalRoot=e}qu.prototype.render=Kh.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(s(409));var r=a.current,l=ai();f0(r,l,e,a,null,null)},qu.prototype.unmount=Kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;f0(e.current,2,null,e,null,null),Ru(),a[Bi]=null}};function qu(e){this._internalRoot=e}qu.prototype.unstable_scheduleHydration=function(e){if(e){var a=Te();e={blockedOn:null,target:e,priority:a};for(var r=0;r<Ya.length&&a!==0&&a<Ya[r].priority;r++);Ya.splice(r,0,e),r===0&&g0(e)}};var y0=t.version;if(y0!=="19.1.1")throw Error(s(527,y0,"19.1.1"));Y.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(a),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var jT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yu.isDisabled&&Yu.supportsFiber)try{Q=Yu.inject(jT),lt=Yu}catch{}}return al.createRoot=function(e,a){if(!o(e))throw Error(s(299));var r=!1,l="",f=Ov,m=Bv,E=Fv,A=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks)),a=u0(e,1,!1,null,null,r,l,f,m,E,A,null),e[Bi]=a.current,Uh(e),new Kh(a)},al.hydrateRoot=function(e,a,r){if(!o(e))throw Error(s(299));var l=!1,f="",m=Ov,E=Bv,A=Fv,I=null,tt=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(I=r.unstable_transitionCallbacks),r.formState!==void 0&&(tt=r.formState)),a=u0(e,1,!0,a,r??null,l,f,m,E,A,I,tt),a.context=c0(null),r=a.current,l=ai(),l=se(l),f=Da(l),f.callback=null,Ua(r,f,l),r=l,a.current.lanes=r,Bt(a,r),Gi(a),e[Bi]=a.current,Uh(e),new qu(a)},al.version="19.1.1",al}var w0;function ab(){if(w0)return Jh.exports;w0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Jh.exports=ib(),Jh.exports}var sb=ab();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const om="180",rb=0,D0=1,ob=2,Vx=1,lb=2,ma=3,ss=0,Qn=1,ga=2,is=0,Yr=1,Kd=2,U0=3,L0=4,ub=5,Fs=100,cb=101,fb=102,hb=103,db=104,pb=200,mb=201,gb=202,vb=203,Zd=204,Qd=205,_b=206,yb=207,xb=208,Sb=209,Mb=210,Eb=211,Tb=212,bb=213,Ab=214,Jd=0,$d=1,tp=2,Zr=3,ep=4,np=5,ip=6,ap=7,Hx=0,Rb=1,Cb=2,as=0,wb=1,Db=2,Ub=3,Lb=4,Nb=5,Pb=6,Ob=7,Gx=300,Qr=301,Jr=302,sp=303,rp=304,Gc=306,op=1e3,Pi=1001,lp=1002,li=1003,Bb=1004,ju=1005,Kn=1006,nd=1007,zs=1008,ya=1009,kx=1010,Xx=1011,yl=1012,lm=1013,Ws=1014,Xi=1015,io=1016,um=1017,cm=1018,xl=1020,Wx=35902,qx=35899,Yx=1021,jx=1022,xi=1023,Sl=1026,Ml=1027,Kx=1028,fm=1029,Zx=1030,hm=1031,dm=1033,Mc=33776,Ec=33777,Tc=33778,bc=33779,up=35840,cp=35841,fp=35842,hp=35843,dp=36196,pp=37492,mp=37496,gp=37808,vp=37809,_p=37810,yp=37811,xp=37812,Sp=37813,Mp=37814,Ep=37815,Tp=37816,bp=37817,Ap=37818,Rp=37819,Cp=37820,wp=37821,Dp=36492,Up=36494,Lp=36495,Np=36283,Pp=36284,Op=36285,Bp=36286,Fb=3200,Ib=3201,zb=0,Vb=1,ns="",yi="srgb",$r="srgb-linear",Uc="linear",ze="srgb",Rr=7680,N0=519,Hb=512,Gb=513,kb=514,Qx=515,Xb=516,Wb=517,qb=518,Yb=519,P0=35044,O0="300 es",Wi=2e3,Lc=2001;class ao{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=Math.PI/180,Fp=180/Math.PI;function Dl(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Se(i,t,n){return Math.max(t,Math.min(n,i))}function jb(i,t){return(i%t+t)%t}function ad(i,t,n){return(1-n)*i+n*t}function sl(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ue{constructor(t=0,n=0){ue.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),u=this.x-t.x,c=this.y-t.y;return this.x=u*s-c*o+t.x,this.y=u*o+c*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ul{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,u,c,h){let p=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];const _=u[c+0],S=u[c+1],T=u[c+2],b=u[c+3];if(h===0){t[n+0]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=S,t[n+2]=T,t[n+3]=b;return}if(v!==b||p!==_||d!==S||g!==T){let M=1-h;const y=p*_+d*S+g*T+v*b,O=y>=0?1:-1,D=1-y*y;if(D>Number.EPSILON){const P=Math.sqrt(D),F=Math.atan2(P,y*O);M=Math.sin(M*F)/P,h=Math.sin(h*F)/P}const C=h*O;if(p=p*M+_*C,d=d*M+S*C,g=g*M+T*C,v=v*M+b*C,M===1-h){const P=1/Math.sqrt(p*p+d*d+g*g+v*v);p*=P,d*=P,g*=P,v*=P}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,s,o,u,c){const h=s[o],p=s[o+1],d=s[o+2],g=s[o+3],v=u[c],_=u[c+1],S=u[c+2],T=u[c+3];return t[n]=h*T+g*v+p*S-d*_,t[n+1]=p*T+g*_+d*v-h*S,t[n+2]=d*T+g*S+h*_-p*v,t[n+3]=g*T-h*v-p*_-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,u=t._z,c=t._order,h=Math.cos,p=Math.sin,d=h(s/2),g=h(o/2),v=h(u/2),_=p(s/2),S=p(o/2),T=p(u/2);switch(c){case"XYZ":this._x=_*g*v+d*S*T,this._y=d*S*v-_*g*T,this._z=d*g*T+_*S*v,this._w=d*g*v-_*S*T;break;case"YXZ":this._x=_*g*v+d*S*T,this._y=d*S*v-_*g*T,this._z=d*g*T-_*S*v,this._w=d*g*v+_*S*T;break;case"ZXY":this._x=_*g*v-d*S*T,this._y=d*S*v+_*g*T,this._z=d*g*T+_*S*v,this._w=d*g*v-_*S*T;break;case"ZYX":this._x=_*g*v-d*S*T,this._y=d*S*v+_*g*T,this._z=d*g*T-_*S*v,this._w=d*g*v+_*S*T;break;case"YZX":this._x=_*g*v+d*S*T,this._y=d*S*v+_*g*T,this._z=d*g*T-_*S*v,this._w=d*g*v-_*S*T;break;case"XZY":this._x=_*g*v-d*S*T,this._y=d*S*v-_*g*T,this._z=d*g*T+_*S*v,this._w=d*g*v+_*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],u=n[8],c=n[1],h=n[5],p=n[9],d=n[2],g=n[6],v=n[10],_=s+h+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-p)*S,this._y=(u-d)*S,this._z=(c-o)*S}else if(s>h&&s>v){const S=2*Math.sqrt(1+s-h-v);this._w=(g-p)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(u+d)/S}else if(h>v){const S=2*Math.sqrt(1+h-s-v);this._w=(u-d)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+v-s-h);this._w=(c-o)/S,this._x=(u+d)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,u=t._z,c=t._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=s*g+c*h+o*d-u*p,this._y=o*g+c*p+u*h-s*d,this._z=u*g+c*d+s*p-o*h,this._w=c*g-s*h-o*p-u*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const s=this._x,o=this._y,u=this._z,c=this._w;let h=c*t._w+s*t._x+o*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=c,this._x=s,this._y=o,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const S=1-n;return this._w=S*c+n*this._w,this._x=S*s+n*this._x,this._y=S*o+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),v=Math.sin((1-n)*g)/d,_=Math.sin(n*g)/d;return this._w=c*v+this._w*_,this._x=s*v+this._x*_,this._y=o*v+this._y*_,this._z=u*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,n=0,s=0){rt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(B0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(B0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[3]*s+u[6]*o,this.y=u[1]*n+u[4]*s+u[7]*o,this.z=u[2]*n+u[5]*s+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,u=t.elements,c=1/(u[3]*n+u[7]*s+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*s+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*s+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*s+u[10]*o+u[14])*c,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,u=t.x,c=t.y,h=t.z,p=t.w,d=2*(c*o-h*s),g=2*(h*n-u*o),v=2*(u*s-c*n);return this.x=n+p*d+c*v-h*g,this.y=s+p*g+h*d-u*v,this.z=o+p*v+u*g-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*o,this.y=u[1]*n+u[5]*s+u[9]*o,this.z=u[2]*n+u[6]*s+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,u=t.z,c=n.x,h=n.y,p=n.z;return this.x=o*p-u*h,this.y=u*c-s*p,this.z=s*h-o*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return sd.copy(this).projectOnVector(t),this.sub(sd)}reflect(t){return this.sub(sd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sd=new rt,B0=new Ul;class he{constructor(t,n,s,o,u,c,h,p,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,u,c,h,p,d)}set(t,n,s,o,u,c,h,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=u,g[5]=p,g[6]=s,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,u=this.elements,c=s[0],h=s[3],p=s[6],d=s[1],g=s[4],v=s[7],_=s[2],S=s[5],T=s[8],b=o[0],M=o[3],y=o[6],O=o[1],D=o[4],C=o[7],P=o[2],F=o[5],z=o[8];return u[0]=c*b+h*O+p*P,u[3]=c*M+h*D+p*F,u[6]=c*y+h*C+p*z,u[1]=d*b+g*O+v*P,u[4]=d*M+g*D+v*F,u[7]=d*y+g*C+v*z,u[2]=_*b+S*O+T*P,u[5]=_*M+S*D+T*F,u[8]=_*y+S*C+T*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return n*c*g-n*h*d-s*u*g+s*h*p+o*u*d-o*c*p}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=g*c-h*d,_=h*p-g*u,S=d*u-c*p,T=n*v+s*_+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=v*b,t[1]=(o*d-g*s)*b,t[2]=(h*s-o*c)*b,t[3]=_*b,t[4]=(g*n-o*p)*b,t[5]=(o*u-h*n)*b,t[6]=S*b,t[7]=(s*p-d*n)*b,t[8]=(c*n-s*u)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,u,c,h){const p=Math.cos(u),d=Math.sin(u);return this.set(s*p,s*d,-s*(p*c+d*h)+c+t,-o*d,o*p,-o*(-d*c+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(rd.makeScale(t,n)),this}rotate(t){return this.premultiply(rd.makeRotation(-t)),this}translate(t,n){return this.premultiply(rd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new he;function Jx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kb(){const i=Nc("canvas");return i.style.display="block",i}const F0={};function El(i){i in F0||(F0[i]=!0,console.warn(i))}function Zb(i,t,n){return new Promise(function(s,o){function u(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:s()}}setTimeout(u,n)})}const I0=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z0=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qb(){const i={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===ze&&(o.r=va(o.r),o.g=va(o.g),o.b=va(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===ze&&(o.r=jr(o.r),o.g=jr(o.g),o.b=jr(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ns?Uc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return El("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return El("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[$r]:{primaries:t,whitePoint:s,transfer:Uc,toXYZ:I0,fromXYZ:z0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:s,transfer:ze,toXYZ:I0,fromXYZ:z0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),i}const Ce=Qb();function va(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Cr;class Jb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Cr===void 0&&(Cr=Nc("canvas")),Cr.width=t.width,Cr.height=t.height;const o=Cr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=Cr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Nc("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=va(u[c]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(va(n[s]/255)*255):n[s]=va(n[s]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $b=0;class pm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=Dl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?u.push(od(o[c].image)):u.push(od(o[c]))}else u=od(o);s.url=u}return n||(t.images[this.uuid]=s),s}}function od(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jb.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tA=0;const ld=new rt;class Gn extends ao{constructor(t=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,s=Pi,o=Pi,u=Kn,c=zs,h=xi,p=ya,d=Gn.DEFAULT_ANISOTROPY,g=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tA++}),this.uuid=Dl(),this.name="",this.source=new pm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case op:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case lp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case op:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case lp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Gx;Gn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,n=0,s=0,o=1){an.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,u=this.w,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*s+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*s+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*s+c[11]*o+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,u;const p=t.elements,d=p[0],g=p[4],v=p[8],_=p[1],S=p[5],T=p[9],b=p[2],M=p[6],y=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(T-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(T+M)<.1&&Math.abs(d+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(d+1)/2,C=(S+1)/2,P=(y+1)/2,F=(g+_)/4,z=(v+b)/4,k=(T+M)/4;return D>C&&D>P?D<.01?(s=0,o=.707106781,u=.707106781):(s=Math.sqrt(D),o=F/s,u=z/s):C>P?C<.01?(s=.707106781,o=0,u=.707106781):(o=Math.sqrt(C),s=F/o,u=k/o):P<.01?(s=.707106781,o=.707106781,u=0):(u=Math.sqrt(P),s=z/u,o=k/u),this.set(s,o,u,n),this}let O=Math.sqrt((M-T)*(M-T)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(M-T)/O,this.y=(v-b)/O,this.z=(_-g)/O,this.w=Math.acos((d+S+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this.w=Se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this.w=Se(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eA extends ao{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new an(0,0,t,n),this.scissorTest=!1,this.viewport=new an(0,0,t,n);const o={width:t,height:n,depth:s.depth},u=new Gn(o);this.textures=[];const c=s.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new pm(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends eA{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class $x extends Gn{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=li,this.minFilter=li,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nA extends Gn{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=li,this.minFilter=li,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll{constructor(t=new rt(1/0,1/0,1/0),n=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Ci.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Ci.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Ci.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,Ci):Ci.fromBufferAttribute(u,c),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ku.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ku.copy(s.boundingBox)),Ku.applyMatrix4(t.matrixWorld),this.union(Ku)}const o=t.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rl),Zu.subVectors(this.max,rl),wr.subVectors(t.a,rl),Dr.subVectors(t.b,rl),Ur.subVectors(t.c,rl),Ka.subVectors(Dr,wr),Za.subVectors(Ur,Dr),Rs.subVectors(wr,Ur);let n=[0,-Ka.z,Ka.y,0,-Za.z,Za.y,0,-Rs.z,Rs.y,Ka.z,0,-Ka.x,Za.z,0,-Za.x,Rs.z,0,-Rs.x,-Ka.y,Ka.x,0,-Za.y,Za.x,0,-Rs.y,Rs.x,0];return!ud(n,wr,Dr,Ur,Zu)||(n=[1,0,0,0,1,0,0,0,1],!ud(n,wr,Dr,Ur,Zu))?!1:(Qu.crossVectors(Ka,Za),n=[Qu.x,Qu.y,Qu.z],ud(n,wr,Dr,Ur,Zu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ca=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Ci=new rt,Ku=new Ll,wr=new rt,Dr=new rt,Ur=new rt,Ka=new rt,Za=new rt,Rs=new rt,rl=new rt,Zu=new rt,Qu=new rt,Cs=new rt;function ud(i,t,n,s,o){for(let u=0,c=i.length-3;u<=c;u+=3){Cs.fromArray(i,u);const h=o.x*Math.abs(Cs.x)+o.y*Math.abs(Cs.y)+o.z*Math.abs(Cs.z),p=t.dot(Cs),d=n.dot(Cs),g=s.dot(Cs);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const iA=new Ll,ol=new rt,cd=new rt;class kc{constructor(t=new rt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):iA.setFromPoints(t).getCenter(s);let o=0;for(let u=0,c=t.length;u<c;u++)o=Math.max(o,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ol.subVectors(t,this.center);const n=ol.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(ol,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ol.copy(t.center).add(cd)),this.expandByPoint(ol.copy(t.center).sub(cd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fa=new rt,fd=new rt,Ju=new rt,Qa=new rt,hd=new rt,$u=new rt,dd=new rt;class tS{constructor(t=new rt,n=new rt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=fa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,n),fa.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){fd.copy(t).add(n).multiplyScalar(.5),Ju.copy(n).sub(t).normalize(),Qa.copy(this.origin).sub(fd);const u=t.distanceTo(n)*.5,c=-this.direction.dot(Ju),h=Qa.dot(this.direction),p=-Qa.dot(Ju),d=Qa.lengthSq(),g=Math.abs(1-c*c);let v,_,S,T;if(g>0)if(v=c*p-h,_=c*h-p,T=u*g,v>=0)if(_>=-T)if(_<=T){const b=1/g;v*=b,_*=b,S=v*(v+c*_+2*h)+_*(c*v+_+2*p)+d}else _=u,v=Math.max(0,-(c*_+h)),S=-v*v+_*(_+2*p)+d;else _=-u,v=Math.max(0,-(c*_+h)),S=-v*v+_*(_+2*p)+d;else _<=-T?(v=Math.max(0,-(-c*u+h)),_=v>0?-u:Math.min(Math.max(-u,-p),u),S=-v*v+_*(_+2*p)+d):_<=T?(v=0,_=Math.min(Math.max(-u,-p),u),S=_*(_+2*p)+d):(v=Math.max(0,-(c*u+h)),_=v>0?u:Math.min(Math.max(-u,-p),u),S=-v*v+_*(_+2*p)+d);else _=c>0?-u:u,v=Math.max(0,-(c*_+h)),S=-v*v+_*(_+2*p)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(fd).addScaledVector(Ju,_),S}intersectSphere(t,n){fa.subVectors(t.center,this.origin);const s=fa.dot(this.direction),o=fa.dot(fa)-s*s,u=t.radius*t.radius;if(o>u)return null;const c=Math.sqrt(u-o),h=s-c,p=s+c;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,u,c,h,p;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(s=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(s=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),g>=0?(u=(t.min.y-_.y)*g,c=(t.max.y-_.y)*g):(u=(t.max.y-_.y)*g,c=(t.min.y-_.y)*g),s>c||u>o||((u>s||isNaN(s))&&(s=u),(c<o||isNaN(o))&&(o=c),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),s>p||h>o)||((h>s||s!==s)&&(s=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,n,s,o,u){hd.subVectors(n,t),$u.subVectors(s,t),dd.crossVectors(hd,$u);let c=this.direction.dot(dd),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;Qa.subVectors(this.origin,t);const p=h*this.direction.dot($u.crossVectors(Qa,$u));if(p<0)return null;const d=h*this.direction.dot(hd.cross(Qa));if(d<0||p+d>c)return null;const g=-h*Qa.dot(dd);return g<0?null:this.at(g/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(t,n,s,o,u,c,h,p,d,g,v,_,S,T,b,M){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,u,c,h,p,d,g,v,_,S,T,b,M)}set(t,n,s,o,u,c,h,p,d,g,v,_,S,T,b,M){const y=this.elements;return y[0]=t,y[4]=n,y[8]=s,y[12]=o,y[1]=u,y[5]=c,y[9]=h,y[13]=p,y[2]=d,y[6]=g,y[10]=v,y[14]=_,y[3]=S,y[7]=T,y[11]=b,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,s=t.elements,o=1/Lr.setFromMatrixColumn(t,0).length(),u=1/Lr.setFromMatrixColumn(t,1).length(),c=1/Lr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*u,n[5]=s[5]*u,n[6]=s[6]*u,n[7]=0,n[8]=s[8]*c,n[9]=s[9]*c,n[10]=s[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,u=t.z,c=Math.cos(s),h=Math.sin(s),p=Math.cos(o),d=Math.sin(o),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const _=c*g,S=c*v,T=h*g,b=h*v;n[0]=p*g,n[4]=-p*v,n[8]=d,n[1]=S+T*d,n[5]=_-b*d,n[9]=-h*p,n[2]=b-_*d,n[6]=T+S*d,n[10]=c*p}else if(t.order==="YXZ"){const _=p*g,S=p*v,T=d*g,b=d*v;n[0]=_+b*h,n[4]=T*h-S,n[8]=c*d,n[1]=c*v,n[5]=c*g,n[9]=-h,n[2]=S*h-T,n[6]=b+_*h,n[10]=c*p}else if(t.order==="ZXY"){const _=p*g,S=p*v,T=d*g,b=d*v;n[0]=_-b*h,n[4]=-c*v,n[8]=T+S*h,n[1]=S+T*h,n[5]=c*g,n[9]=b-_*h,n[2]=-c*d,n[6]=h,n[10]=c*p}else if(t.order==="ZYX"){const _=c*g,S=c*v,T=h*g,b=h*v;n[0]=p*g,n[4]=T*d-S,n[8]=_*d+b,n[1]=p*v,n[5]=b*d+_,n[9]=S*d-T,n[2]=-d,n[6]=h*p,n[10]=c*p}else if(t.order==="YZX"){const _=c*p,S=c*d,T=h*p,b=h*d;n[0]=p*g,n[4]=b-_*v,n[8]=T*v+S,n[1]=v,n[5]=c*g,n[9]=-h*g,n[2]=-d*g,n[6]=S*v+T,n[10]=_-b*v}else if(t.order==="XZY"){const _=c*p,S=c*d,T=h*p,b=h*d;n[0]=p*g,n[4]=-v,n[8]=d*g,n[1]=_*v+b,n[5]=c*g,n[9]=S*v-T,n[2]=T*v-S,n[6]=h*g,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(aA,t,sA)}lookAt(t,n,s){const o=this.elements;return ri.subVectors(t,n),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ja.crossVectors(s,ri),Ja.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ja.crossVectors(s,ri)),Ja.normalize(),tc.crossVectors(ri,Ja),o[0]=Ja.x,o[4]=tc.x,o[8]=ri.x,o[1]=Ja.y,o[5]=tc.y,o[9]=ri.y,o[2]=Ja.z,o[6]=tc.z,o[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,u=this.elements,c=s[0],h=s[4],p=s[8],d=s[12],g=s[1],v=s[5],_=s[9],S=s[13],T=s[2],b=s[6],M=s[10],y=s[14],O=s[3],D=s[7],C=s[11],P=s[15],F=o[0],z=o[4],k=o[8],U=o[12],w=o[1],H=o[5],nt=o[9],ft=o[13],ht=o[2],ct=o[6],B=o[10],Y=o[14],W=o[3],gt=o[7],N=o[11],$=o[15];return u[0]=c*F+h*w+p*ht+d*W,u[4]=c*z+h*H+p*ct+d*gt,u[8]=c*k+h*nt+p*B+d*N,u[12]=c*U+h*ft+p*Y+d*$,u[1]=g*F+v*w+_*ht+S*W,u[5]=g*z+v*H+_*ct+S*gt,u[9]=g*k+v*nt+_*B+S*N,u[13]=g*U+v*ft+_*Y+S*$,u[2]=T*F+b*w+M*ht+y*W,u[6]=T*z+b*H+M*ct+y*gt,u[10]=T*k+b*nt+M*B+y*N,u[14]=T*U+b*ft+M*Y+y*$,u[3]=O*F+D*w+C*ht+P*W,u[7]=O*z+D*H+C*ct+P*gt,u[11]=O*k+D*nt+C*B+P*N,u[15]=O*U+D*ft+C*Y+P*$,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],u=t[12],c=t[1],h=t[5],p=t[9],d=t[13],g=t[2],v=t[6],_=t[10],S=t[14],T=t[3],b=t[7],M=t[11],y=t[15];return T*(+u*p*v-o*d*v-u*h*_+s*d*_+o*h*S-s*p*S)+b*(+n*p*S-n*d*_+u*c*_-o*c*S+o*d*g-u*p*g)+M*(+n*d*v-n*h*S-u*c*v+s*c*S+u*h*g-s*d*g)+y*(-o*h*g-n*p*v+n*h*_+o*c*v-s*c*_+s*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=t[9],_=t[10],S=t[11],T=t[12],b=t[13],M=t[14],y=t[15],O=v*M*d-b*_*d+b*p*S-h*M*S-v*p*y+h*_*y,D=T*_*d-g*M*d-T*p*S+c*M*S+g*p*y-c*_*y,C=g*b*d-T*v*d+T*h*S-c*b*S-g*h*y+c*v*y,P=T*v*p-g*b*p-T*h*_+c*b*_+g*h*M-c*v*M,F=n*O+s*D+o*C+u*P;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return t[0]=O*z,t[1]=(b*_*u-v*M*u-b*o*S+s*M*S+v*o*y-s*_*y)*z,t[2]=(h*M*u-b*p*u+b*o*d-s*M*d-h*o*y+s*p*y)*z,t[3]=(v*p*u-h*_*u-v*o*d+s*_*d+h*o*S-s*p*S)*z,t[4]=D*z,t[5]=(g*M*u-T*_*u+T*o*S-n*M*S-g*o*y+n*_*y)*z,t[6]=(T*p*u-c*M*u-T*o*d+n*M*d+c*o*y-n*p*y)*z,t[7]=(c*_*u-g*p*u+g*o*d-n*_*d-c*o*S+n*p*S)*z,t[8]=C*z,t[9]=(T*v*u-g*b*u-T*s*S+n*b*S+g*s*y-n*v*y)*z,t[10]=(c*b*u-T*h*u+T*s*d-n*b*d-c*s*y+n*h*y)*z,t[11]=(g*h*u-c*v*u-g*s*d+n*v*d+c*s*S-n*h*S)*z,t[12]=P*z,t[13]=(g*b*o-T*v*o+T*s*_-n*b*_-g*s*M+n*v*M)*z,t[14]=(T*h*o-c*b*o-T*s*p+n*b*p+c*s*M-n*h*M)*z,t[15]=(c*v*o-g*h*o+g*s*p-n*v*p-c*s*_+n*h*_)*z,this}scale(t){const n=this.elements,s=t.x,o=t.y,u=t.z;return n[0]*=s,n[4]*=o,n[8]*=u,n[1]*=s,n[5]*=o,n[9]*=u,n[2]*=s,n[6]*=o,n[10]*=u,n[3]*=s,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),u=1-s,c=t.x,h=t.y,p=t.z,d=u*c,g=u*h;return this.set(d*c+s,d*h-o*p,d*p+o*h,0,d*h+o*p,g*h+s,g*p-o*c,0,d*p-o*h,g*p+o*c,u*p*p+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,u,c){return this.set(1,s,u,0,t,1,c,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,u=n._x,c=n._y,h=n._z,p=n._w,d=u+u,g=c+c,v=h+h,_=u*d,S=u*g,T=u*v,b=c*g,M=c*v,y=h*v,O=p*d,D=p*g,C=p*v,P=s.x,F=s.y,z=s.z;return o[0]=(1-(b+y))*P,o[1]=(S+C)*P,o[2]=(T-D)*P,o[3]=0,o[4]=(S-C)*F,o[5]=(1-(_+y))*F,o[6]=(M+O)*F,o[7]=0,o[8]=(T+D)*z,o[9]=(M-O)*z,o[10]=(1-(_+b))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;let u=Lr.set(o[0],o[1],o[2]).length();const c=Lr.set(o[4],o[5],o[6]).length(),h=Lr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),t.x=o[12],t.y=o[13],t.z=o[14],wi.copy(this);const d=1/u,g=1/c,v=1/h;return wi.elements[0]*=d,wi.elements[1]*=d,wi.elements[2]*=d,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=v,wi.elements[9]*=v,wi.elements[10]*=v,n.setFromRotationMatrix(wi),s.x=u,s.y=c,s.z=h,this}makePerspective(t,n,s,o,u,c,h=Wi,p=!1){const d=this.elements,g=2*u/(n-t),v=2*u/(s-o),_=(n+t)/(n-t),S=(s+o)/(s-o);let T,b;if(p)T=u/(c-u),b=c*u/(c-u);else if(h===Wi)T=-(c+u)/(c-u),b=-2*c*u/(c-u);else if(h===Lc)T=-c/(c-u),b=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,s,o,u,c,h=Wi,p=!1){const d=this.elements,g=2/(n-t),v=2/(s-o),_=-(n+t)/(n-t),S=-(s+o)/(s-o);let T,b;if(p)T=1/(c-u),b=c/(c-u);else if(h===Wi)T=-2/(c-u),b=-(c+u)/(c-u);else if(h===Lc)T=-1/(c-u),b=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=T,d[14]=b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Lr=new rt,wi=new dn,aA=new rt(0,0,0),sA=new rt(1,1,1),Ja=new rt,tc=new rt,ri=new rt,V0=new dn,H0=new Ul;class xa{constructor(t=0,n=0,s=0,o=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,u=o[0],c=o[4],h=o[8],p=o[1],d=o[5],g=o[9],v=o[2],_=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return V0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(V0,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return H0.setFromEuler(this),this.setFromQuaternion(H0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class eS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rA=0;const G0=new rt,Nr=new Ul,ha=new dn,ec=new rt,ll=new rt,oA=new rt,lA=new Ul,k0=new rt(1,0,0),X0=new rt(0,1,0),W0=new rt(0,0,1),q0={type:"added"},uA={type:"removed"},Pr={type:"childadded",child:null},pd={type:"childremoved",child:null};class Jn extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=Dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const t=new rt,n=new xa,s=new Ul,o=new rt(1,1,1);function u(){s.setFromEuler(n,!1)}function c(){n.setFromQuaternion(s,void 0,!1)}n._onChange(u),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new he}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Nr.setFromAxisAngle(t,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,n){return Nr.setFromAxisAngle(t,n),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(k0,t)}rotateY(t){return this.rotateOnAxis(X0,t)}rotateZ(t){return this.rotateOnAxis(W0,t)}translateOnAxis(t,n){return G0.copy(t).applyQuaternion(this.quaternion),this.position.add(G0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(k0,t)}translateY(t){return this.translateOnAxis(X0,t)}translateZ(t){return this.translateOnAxis(W0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?ec.copy(t):ec.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(ll,ec,this.up):ha.lookAt(ec,ll,this.up),this.quaternion.setFromRotationMatrix(ha),o&&(ha.extractRotation(o.matrixWorld),Nr.setFromRotationMatrix(ha),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(q0),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(uA),pd.child=t,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(q0),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,t,oA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,lA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const v=p[d];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(u(t.materials,this.material[p]));o.material=h}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(u(t.animations,p))}}if(n){const h=c(t.geometries),p=c(t.materials),d=c(t.textures),g=c(t.images),v=c(t.shapes),_=c(t.skeletons),S=c(t.animations),T=c(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=o,s;function c(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}Jn.DEFAULT_UP=new rt(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new rt,da=new rt,md=new rt,pa=new rt,Or=new rt,Br=new rt,Y0=new rt,gd=new rt,vd=new rt,_d=new rt,yd=new an,xd=new an,Sd=new an;class Ni{constructor(t=new rt,n=new rt,s=new rt){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),Di.subVectors(t,n),o.cross(Di);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(t,n,s,o,u){Di.subVectors(o,n),da.subVectors(s,n),md.subVectors(t,n);const c=Di.dot(Di),h=Di.dot(da),p=Di.dot(md),d=da.dot(da),g=da.dot(md),v=c*d-h*h;if(v===0)return u.set(0,0,0),null;const _=1/v,S=(d*p-h*g)*_,T=(c*g-h*p)*_;return u.set(1-S-T,T,S)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,n,s,o,u,c,h,p){return this.getBarycoord(t,n,s,o,pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,pa.x),p.addScaledVector(c,pa.y),p.addScaledVector(h,pa.z),p)}static getInterpolatedAttribute(t,n,s,o,u,c){return yd.setScalar(0),xd.setScalar(0),Sd.setScalar(0),yd.fromBufferAttribute(t,n),xd.fromBufferAttribute(t,s),Sd.fromBufferAttribute(t,o),c.setScalar(0),c.addScaledVector(yd,u.x),c.addScaledVector(xd,u.y),c.addScaledVector(Sd,u.z),c}static isFrontFacing(t,n,s,o){return Di.subVectors(s,n),da.subVectors(t,n),Di.cross(da).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Di.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ni.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,u){return Ni.getInterpolation(t,this.a,this.b,this.c,n,s,o,u)}containsPoint(t){return Ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,u=this.c;let c,h;Or.subVectors(o,s),Br.subVectors(u,s),gd.subVectors(t,s);const p=Or.dot(gd),d=Br.dot(gd);if(p<=0&&d<=0)return n.copy(s);vd.subVectors(t,o);const g=Or.dot(vd),v=Br.dot(vd);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*d;if(_<=0&&p>=0&&g<=0)return c=p/(p-g),n.copy(s).addScaledVector(Or,c);_d.subVectors(t,u);const S=Or.dot(_d),T=Br.dot(_d);if(T>=0&&S<=T)return n.copy(u);const b=S*d-p*T;if(b<=0&&d>=0&&T<=0)return h=d/(d-T),n.copy(s).addScaledVector(Br,h);const M=g*T-S*v;if(M<=0&&v-g>=0&&S-T>=0)return Y0.subVectors(u,o),h=(v-g)/(v-g+(S-T)),n.copy(o).addScaledVector(Y0,h);const y=1/(M+b+_);return c=b*y,h=_*y,n.copy(s).addScaledVector(Or,c).addScaledVector(Br,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Md(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class De{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=Ce.workingColorSpace){return this.r=t,this.g=n,this.b=s,Ce.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=Ce.workingColorSpace){if(t=jb(t,1),n=Se(n,0,1),s=Se(s,0,1),n===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+n):s+n-s*n,c=2*s-u;this.r=Md(c,u,t+1/3),this.g=Md(c,u,t),this.b=Md(c,u,t-1/3)}return Ce.colorSpaceToWorking(this,o),this}setStyle(t,n=yi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=yi){const s=nS[t.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return Ce.workingToColorSpace(On.copy(this),t),Math.round(Se(On.r*255,0,255))*65536+Math.round(Se(On.g*255,0,255))*256+Math.round(Se(On.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ce.workingColorSpace){Ce.workingToColorSpace(On.copy(this),n);const s=On.r,o=On.g,u=On.b,c=Math.max(s,o,u),h=Math.min(s,o,u);let p,d;const g=(h+c)/2;if(h===c)p=0,d=0;else{const v=c-h;switch(d=g<=.5?v/(c+h):v/(2-c-h),c){case s:p=(o-u)/v+(o<u?6:0);break;case o:p=(u-s)/v+2;break;case u:p=(s-o)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=Ce.workingColorSpace){return Ce.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=yi){Ce.workingToColorSpace(On.copy(this),t);const n=On.r,s=On.g,o=On.b;return t!==yi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL($a),this.setHSL($a.h+t,$a.s+n,$a.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL($a),t.getHSL(nc);const s=ad($a.h,nc.h,n),o=ad($a.s,nc.s,n),u=ad($a.l,nc.l,n);return this.setHSL(s,o,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,u=t.elements;return this.r=u[0]*n+u[3]*s+u[6]*o,this.g=u[1]*n+u[4]*s+u[7]*o,this.b=u[2]*n+u[5]*s+u[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new De;De.NAMES=nS;let cA=0;class Nl extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cA++}),this.uuid=Dl(),this.name="",this.type="Material",this.blending=Yr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Qd,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(s.blending=this.blending),this.side!==ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Qd&&(s.blendDst=this.blendDst),this.blendEquation!==Fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(u){const c=[];for(const h in u){const p=u[h];delete p.metadata,c.push(p)}return c}if(n){const u=o(t.textures),c=o(t.images);u.length>0&&(s.textures=u),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let u=0;u!==o;++u)s[u]=n[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class iS extends Nl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=Hx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new rt,ic=new ue;let fA=0;class Oi{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=P0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)ic.fromBufferAttribute(this,n),ic.applyMatrix3(t),this.setXY(n,ic.x,ic.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=sl(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=sl(n,this.array)),n}setX(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=sl(n,this.array)),n}setY(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=sl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=sl(n,this.array)),n}setW(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),s=jn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),s=jn(s,this.array),o=jn(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,u){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),s=jn(s,this.array),o=jn(o,this.array),u=jn(u,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==P0&&(t.usage=this.usage),t}}class aS extends Oi{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class sS extends Oi{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class _a extends Oi{constructor(t,n,s){super(new Float32Array(t),n,s)}}let hA=0;const gi=new dn,Ed=new Jn,Fr=new rt,oi=new Ll,ul=new Ll,Tn=new rt;class Ta extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hA++}),this.uuid=Dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jx(t)?sS:aS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new he().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,n,s){return gi.makeTranslation(t,n,s),this.applyMatrix4(gi),this}scale(t,n,s){return gi.makeScale(t,n,s),this.applyMatrix4(gi),this}lookAt(t){return Ed.lookAt(t),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,u=t.length;o<u;o++){const c=t[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new _a(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const u=t[o];n.setXYZ(o,u.x,u.y,u.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ll);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const u=n[s];oi.setFromBufferAttribute(u),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),n)for(let u=0,c=n.length;u<c;u++){const h=n[u];ul.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(oi.min,ul.min),oi.expandByPoint(Tn),Tn.addVectors(oi.max,ul.max),oi.expandByPoint(Tn)):(oi.expandByPoint(ul.min),oi.expandByPoint(ul.max))}oi.getCenter(s);let o=0;for(let u=0,c=t.count;u<c;u++)Tn.fromBufferAttribute(t,u),o=Math.max(o,s.distanceToSquared(Tn));if(n)for(let u=0,c=n.length;u<c;u++){const h=n[u],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Tn.fromBufferAttribute(h,d),p&&(Fr.fromBufferAttribute(t,d),Tn.add(Fr)),o=Math.max(o,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),h=[],p=[];for(let k=0;k<s.count;k++)h[k]=new rt,p[k]=new rt;const d=new rt,g=new rt,v=new rt,_=new ue,S=new ue,T=new ue,b=new rt,M=new rt;function y(k,U,w){d.fromBufferAttribute(s,k),g.fromBufferAttribute(s,U),v.fromBufferAttribute(s,w),_.fromBufferAttribute(u,k),S.fromBufferAttribute(u,U),T.fromBufferAttribute(u,w),g.sub(d),v.sub(d),S.sub(_),T.sub(_);const H=1/(S.x*T.y-T.x*S.y);isFinite(H)&&(b.copy(g).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(H),M.copy(v).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(H),h[k].add(b),h[U].add(b),h[w].add(b),p[k].add(M),p[U].add(M),p[w].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let k=0,U=O.length;k<U;++k){const w=O[k],H=w.start,nt=w.count;for(let ft=H,ht=H+nt;ft<ht;ft+=3)y(t.getX(ft+0),t.getX(ft+1),t.getX(ft+2))}const D=new rt,C=new rt,P=new rt,F=new rt;function z(k){P.fromBufferAttribute(o,k),F.copy(P);const U=h[k];D.copy(U),D.sub(P.multiplyScalar(P.dot(U))).normalize(),C.crossVectors(F,U);const H=C.dot(p[k])<0?-1:1;c.setXYZW(k,D.x,D.y,D.z,H)}for(let k=0,U=O.length;k<U;++k){const w=O[k],H=w.start,nt=w.count;for(let ft=H,ht=H+nt;ft<ht;ft+=3)z(t.getX(ft+0)),z(t.getX(ft+1)),z(t.getX(ft+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const o=new rt,u=new rt,c=new rt,h=new rt,p=new rt,d=new rt,g=new rt,v=new rt;if(t)for(let _=0,S=t.count;_<S;_+=3){const T=t.getX(_+0),b=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),c.fromBufferAttribute(n,M),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,b),d.fromBufferAttribute(s,M),h.add(g),p.add(g),d.add(g),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,S=n.count;_<S;_+=3)o.fromBufferAttribute(n,_+0),u.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),g.subVectors(c,u),v.subVectors(o,u),g.cross(v),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)Tn.fromBufferAttribute(t,n),Tn.normalize(),t.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(p.length*g);let S=0,T=0;for(let b=0,M=p.length;b<M;b++){h.isInterleavedBufferAttribute?S=p[b]*h.data.stride+h.offset:S=p[b]*g;for(let y=0;y<g;y++)_[T++]=d[S++]}return new Oi(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ta,s=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=t(p,s);n.setAttribute(h,d)}const u=this.morphAttributes;for(const h in u){const p=[],d=u[h];for(let g=0,v=d.length;g<v;g++){const _=d[g],S=t(_,s);p.push(S)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const d=c[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const d=s[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let v=0,_=d.length;v<_;v++){const S=d[v];g.push(S.toJSON(t.data))}g.length>0&&(o[p]=g,u=!0)}u&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const u=t.morphAttributes;for(const d in u){const g=[],v=u[d];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,g=c.length;d<g;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j0=new dn,ws=new tS,ac=new kc,K0=new rt,sc=new rt,rc=new rt,oc=new rt,Td=new rt,lc=new rt,Z0=new rt,uc=new rt;class Si extends Jn{constructor(t=new Ta,n=new iS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,u=s.morphAttributes.position,c=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(u&&h){lc.set(0,0,0);for(let p=0,d=u.length;p<d;p++){const g=h[p],v=u[p];g!==0&&(Td.fromBufferAttribute(v,t),c?lc.addScaledVector(Td,g):lc.addScaledVector(Td.sub(n),g))}n.add(lc)}return n}raycast(t,n){const s=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ac.copy(s.boundingSphere),ac.applyMatrix4(u),ws.copy(t.ray).recast(t.near),!(ac.containsPoint(ws.origin)===!1&&(ws.intersectSphere(ac,K0)===null||ws.origin.distanceToSquared(K0)>(t.far-t.near)**2))&&(j0.copy(u).invert(),ws.copy(t.ray).applyMatrix4(j0),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,ws)))}_computeIntersections(t,n,s){let o;const u=this.geometry,c=this.material,h=u.index,p=u.attributes.position,d=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(c))for(let T=0,b=_.length;T<b;T++){const M=_[T],y=c[M.materialIndex],O=Math.max(M.start,S.start),D=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let C=O,P=D;C<P;C+=3){const F=h.getX(C),z=h.getX(C+1),k=h.getX(C+2);o=cc(this,y,t,s,d,g,v,F,z,k),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),b=Math.min(h.count,S.start+S.count);for(let M=T,y=b;M<y;M+=3){const O=h.getX(M),D=h.getX(M+1),C=h.getX(M+2);o=cc(this,c,t,s,d,g,v,O,D,C),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let T=0,b=_.length;T<b;T++){const M=_[T],y=c[M.materialIndex],O=Math.max(M.start,S.start),D=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let C=O,P=D;C<P;C+=3){const F=C,z=C+1,k=C+2;o=cc(this,y,t,s,d,g,v,F,z,k),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let M=T,y=b;M<y;M+=3){const O=M,D=M+1,C=M+2;o=cc(this,c,t,s,d,g,v,O,D,C),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function dA(i,t,n,s,o,u,c,h){let p;if(t.side===Qn?p=s.intersectTriangle(c,u,o,!0,h):p=s.intersectTriangle(o,u,c,t.side===ss,h),p===null)return null;uc.copy(h),uc.applyMatrix4(i.matrixWorld);const d=n.ray.origin.distanceTo(uc);return d<n.near||d>n.far?null:{distance:d,point:uc.clone(),object:i}}function cc(i,t,n,s,o,u,c,h,p,d){i.getVertexPosition(h,sc),i.getVertexPosition(p,rc),i.getVertexPosition(d,oc);const g=dA(i,t,n,s,sc,rc,oc,Z0);if(g){const v=new rt;Ni.getBarycoord(Z0,sc,rc,oc,v),o&&(g.uv=Ni.getInterpolatedAttribute(o,h,p,d,v,new ue)),u&&(g.uv1=Ni.getInterpolatedAttribute(u,h,p,d,v,new ue)),c&&(g.normal=Ni.getInterpolatedAttribute(c,h,p,d,v,new rt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:d,normal:new rt,materialIndex:0};Ni.getNormal(sc,rc,oc,_.normal),g.face=_,g.barycoord=v}return g}class Pl extends Ta{constructor(t=1,n=1,s=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:u,depthSegments:c};const h=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],d=[],g=[],v=[];let _=0,S=0;T("z","y","x",-1,-1,s,n,t,c,u,0),T("z","y","x",1,-1,s,n,-t,c,u,1),T("x","z","y",1,1,t,s,n,o,c,2),T("x","z","y",1,-1,t,s,-n,o,c,3),T("x","y","z",1,-1,t,n,s,o,u,4),T("x","y","z",-1,-1,t,n,-s,o,u,5),this.setIndex(p),this.setAttribute("position",new _a(d,3)),this.setAttribute("normal",new _a(g,3)),this.setAttribute("uv",new _a(v,2));function T(b,M,y,O,D,C,P,F,z,k,U){const w=C/z,H=P/k,nt=C/2,ft=P/2,ht=F/2,ct=z+1,B=k+1;let Y=0,W=0;const gt=new rt;for(let N=0;N<B;N++){const $=N*H-ft;for(let yt=0;yt<ct;yt++){const xt=yt*w-nt;gt[b]=xt*O,gt[M]=$*D,gt[y]=ht,d.push(gt.x,gt.y,gt.z),gt[b]=0,gt[M]=0,gt[y]=F>0?1:-1,g.push(gt.x,gt.y,gt.z),v.push(yt/z),v.push(1-N/k),Y+=1}}for(let N=0;N<k;N++)for(let $=0;$<z;$++){const yt=_+$+ct*N,xt=_+$+ct*(N+1),Dt=_+($+1)+ct*(N+1),zt=_+($+1)+ct*N;p.push(yt,xt,zt),p.push(xt,Dt,zt),W+=6}h.addGroup(S,W,U),S+=W,_+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function to(i){const t={};for(const n in i){t[n]={};for(const s in i[n]){const o=i[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone():Array.isArray(o)?t[n][s]=o.slice():t[n][s]=o}}return t}function Vn(i){const t={};for(let n=0;n<i.length;n++){const s=to(i[n]);for(const o in s)t[o]=s[o]}return t}function pA(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function rS(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const mA={clone:to,merge:Vn};var gA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends Nl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gA,this.fragmentShader=vA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=pA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Pc extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new rt,Q0=new ue,J0=new ue;class Li extends Pc{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Fp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(id*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fp*2*Math.atan(Math.tan(id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,n){return this.getViewBounds(t,Q0,J0),n.subVectors(J0,Q0)}setViewOffset(t,n,s,o,u,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(id*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*s/d,o*=c.width/p,s*=c.height/d}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ir=-90,zr=1;class _A extends Jn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Li(Ir,zr,t,n);o.layers=this.layers,this.add(o);const u=new Li(Ir,zr,t,n);u.layers=this.layers,this.add(u);const c=new Li(Ir,zr,t,n);c.layers=this.layers,this.add(c);const h=new Li(Ir,zr,t,n);h.layers=this.layers,this.add(h);const p=new Li(Ir,zr,t,n);p.layers=this.layers,this.add(p);const d=new Li(Ir,zr,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,u,c,h,p]=n;for(const d of n)this.remove(d);if(t===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Lc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,p,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,o),t.render(n,u),t.setRenderTarget(s,1,o),t.render(n,c),t.setRenderTarget(s,2,o),t.render(n,h),t.setRenderTarget(s,3,o),t.render(n,p),t.setRenderTarget(s,4,o),t.render(n,d),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,o),t.render(n,g),t.setRenderTarget(v,_,S),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class oS extends Gn{constructor(t=[],n=Qr,s,o,u,c,h,p,d,g){super(t,n,s,o,u,c,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yA extends rs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new oS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Pl(5,5,5),u=new Sa({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:is});u.uniforms.tEquirect.value=n;const c=new Si(o,u),h=n.minFilter;return n.minFilter===zs&&(n.minFilter=Kn),new _A(1,10,this).update(t,c),n.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,s,o);t.setRenderTarget(u)}}class fc extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xA={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,u=null,c=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const b of t.hand.values()){const M=n.getJointPose(b,s),y=this._getHandJoint(d,b);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,T=.005;d.inputState.pinching&&_>S+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=S-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(xA)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=u!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class $0 extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class SA extends Gn{constructor(t=null,n=1,s=1,o,u,c,h,p,d=li,g=li,v,_){super(null,c,h,p,d,g,o,u,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ad=new rt,MA=new rt,EA=new he;class Ps{constructor(t=new rt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=Ad.subVectors(s,n).cross(MA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(Ad),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||EA.getNormalMatrix(t),o=this.coplanarPoint(Ad).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new kc,TA=new ue(.5,.5),hc=new rt;class lS{constructor(t=new Ps,n=new Ps,s=new Ps,o=new Ps,u=new Ps,c=new Ps){this.planes=[t,n,s,o,u,c]}set(t,n,s,o,u,c){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(o),h[4].copy(u),h[5].copy(c),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=Wi,s=!1){const o=this.planes,u=t.elements,c=u[0],h=u[1],p=u[2],d=u[3],g=u[4],v=u[5],_=u[6],S=u[7],T=u[8],b=u[9],M=u[10],y=u[11],O=u[12],D=u[13],C=u[14],P=u[15];if(o[0].setComponents(d-c,S-g,y-T,P-O).normalize(),o[1].setComponents(d+c,S+g,y+T,P+O).normalize(),o[2].setComponents(d+h,S+v,y+b,P+D).normalize(),o[3].setComponents(d-h,S-v,y-b,P-D).normalize(),s)o[4].setComponents(p,_,M,C).normalize(),o[5].setComponents(d-p,S-_,y-M,P-C).normalize();else if(o[4].setComponents(d-p,S-_,y-M,P-C).normalize(),n===Wi)o[5].setComponents(d+p,S+_,y+M,P+C).normalize();else if(n===Lc)o[5].setComponents(p,_,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const n=TA.distanceTo(t.center);return Ds.radius=.7071067811865476+n,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(hc.x=o.normal.x>0?t.max.x:t.min.x,hc.y=o.normal.y>0?t.max.y:t.min.y,hc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(hc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bA extends Nl{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oc=new rt,Bc=new rt,ty=new dn,cl=new tS,dc=new kc,Rd=new rt,ey=new rt;class AA extends Jn{constructor(t=new Ta,n=new bA){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[0];for(let o=1,u=n.count;o<u;o++)Oc.fromBufferAttribute(n,o-1),Bc.fromBufferAttribute(n,o),s[o]=s[o-1],s[o]+=Oc.distanceTo(Bc);t.setAttribute("lineDistance",new _a(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const s=this.geometry,o=this.matrixWorld,u=t.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),dc.copy(s.boundingSphere),dc.applyMatrix4(o),dc.radius+=u,t.ray.intersectsSphere(dc)===!1)return;ty.copy(o).invert(),cl.copy(t.ray).applyMatrix4(ty);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){const S=Math.max(0,c.start),T=Math.min(g.count,c.start+c.count);for(let b=S,M=T-1;b<M;b+=d){const y=g.getX(b),O=g.getX(b+1),D=pc(this,t,cl,p,y,O,b);D&&n.push(D)}if(this.isLineLoop){const b=g.getX(T-1),M=g.getX(S),y=pc(this,t,cl,p,b,M,T-1);y&&n.push(y)}}else{const S=Math.max(0,c.start),T=Math.min(_.count,c.start+c.count);for(let b=S,M=T-1;b<M;b+=d){const y=pc(this,t,cl,p,b,b+1,b);y&&n.push(y)}if(this.isLineLoop){const b=pc(this,t,cl,p,T-1,S,T-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function pc(i,t,n,s,o,u,c){const h=i.geometry.attributes.position;if(Oc.fromBufferAttribute(h,o),Bc.fromBufferAttribute(h,u),n.distanceSqToSegment(Oc,Bc,Rd,ey)>s)return;Rd.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Rd);if(!(d<t.near||d>t.far))return{distance:d,point:ey.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}const ny=new rt,iy=new rt;class RA extends AA{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[];for(let o=0,u=n.count;o<u;o+=2)ny.fromBufferAttribute(n,o),iy.fromBufferAttribute(n,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+ny.distanceTo(iy);t.setAttribute("lineDistance",new _a(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uS extends Gn{constructor(t,n,s=Ws,o,u,c,h=li,p=li,d,g=Sl,v=1){if(g!==Sl&&g!==Ml)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,o,u,c,h,p,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cS extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gs extends Ta{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const u=t/2,c=n/2,h=Math.floor(s),p=Math.floor(o),d=h+1,g=p+1,v=t/h,_=n/p,S=[],T=[],b=[],M=[];for(let y=0;y<g;y++){const O=y*_-c;for(let D=0;D<d;D++){const C=D*v-u;T.push(C,-O,0),b.push(0,0,1),M.push(D/h),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let O=0;O<h;O++){const D=O+d*y,C=O+d*(y+1),P=O+1+d*(y+1),F=O+1+d*y;S.push(D,C,F),S.push(C,P,F)}this.setIndex(S),this.setAttribute("position",new _a(T,3)),this.setAttribute("normal",new _a(b,3)),this.setAttribute("uv",new _a(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.width,t.height,t.widthSegments,t.heightSegments)}}class mc extends Sa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CA extends Nl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wA extends Nl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class DA extends Pc{constructor(t=-1,n=1,s=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=s-t,c=s+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,c=u+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class UA extends Li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class LA{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function ay(i,t,n,s){const o=NA(s);switch(n){case Yx:return i*t;case Kx:return i*t/o.components*o.byteLength;case fm:return i*t/o.components*o.byteLength;case Zx:return i*t*2/o.components*o.byteLength;case hm:return i*t*2/o.components*o.byteLength;case jx:return i*t*3/o.components*o.byteLength;case xi:return i*t*4/o.components*o.byteLength;case dm:return i*t*4/o.components*o.byteLength;case Mc:case Ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tc:case bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cp:case hp:return Math.max(i,16)*Math.max(t,8)/4;case up:case fp:return Math.max(i,8)*Math.max(t,8)/2;case dp:case pp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vp:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _p:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yp:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xp:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sp:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mp:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ep:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Tp:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bp:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ap:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Rp:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Cp:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wp:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Dp:case Up:case Lp:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Np:case Pp:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Op:case Bp:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function NA(i){switch(i){case ya:case kx:return{byteLength:1,components:1};case yl:case Xx:case io:return{byteLength:2,components:1};case um:case cm:return{byteLength:2,components:4};case Ws:case lm:case Xi:return{byteLength:4,components:1};case Wx:case qx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:om}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=om);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fS(){let i=null,t=!1,n=null,s=null;function o(u,c){n(u,c),s=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(s=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){i=u}}}function PA(i){const t=new WeakMap;function n(h,p){const d=h.array,g=h.usage,v=d.byteLength,_=i.createBuffer();i.bindBuffer(p,_),i.bufferData(p,d,g),h.onUploadCallback();let S;if(d instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=i.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=i.SHORT;else if(d instanceof Uint32Array)S=i.UNSIGNED_INT;else if(d instanceof Int32Array)S=i.INT;else if(d instanceof Int8Array)S=i.BYTE;else if(d instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,p,d){const g=p.array,v=p.updateRanges;if(i.bindBuffer(d,h),v.length===0)i.bufferSubData(d,0,g);else{v.sort((S,T)=>S.start-T.start);let _=0;for(let S=1;S<v.length;S++){const T=v[_],b=v[S];b.start<=T.start+T.count+1?T.count=Math.max(T.count,b.start+b.count-T.start):(++_,v[_]=b)}v.length=_+1;for(let S=0,T=v.length;S<T;S++){const b=v[S];i.bufferSubData(d,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(i.deleteBuffer(p.buffer),t.delete(h))}function c(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,h,p),d.version=h.version}}return{get:o,remove:u,update:c}}var OA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BA=`#ifdef USE_ALPHAHASH
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
#endif`,FA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HA=`#ifdef USE_AOMAP
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
#endif`,GA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kA=`#ifdef USE_BATCHING
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
#endif`,XA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jA=`#ifdef USE_IRIDESCENCE
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
#endif`,KA=`#ifdef USE_BUMPMAP
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
#endif`,ZA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a1=`#define PI 3.141592653589793
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
} // validated`,s1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r1=`vec3 transformedNormal = objectNormal;
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
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f1="gl_FragColor = linearToOutputTexel( gl_FragColor );",h1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d1=`#ifdef USE_ENVMAP
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
#endif`,p1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
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
#endif`,_1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M1=`#ifdef USE_GRADIENTMAP
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
}`,E1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A1=`uniform bool receiveShadow;
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
#endif`,R1=`#ifdef USE_ENVMAP
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
#endif`,C1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L1=`PhysicalMaterial material;
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
#endif`,N1=`struct PhysicalMaterial {
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
}`,P1=`
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
#endif`,O1=`#if defined( RE_IndirectDiffuse )
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
#endif`,B1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X1=`#if defined( USE_POINTS_UV )
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
#endif`,W1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
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
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iR=`#ifdef USE_NORMALMAP
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
#endif`,aR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_R=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yR=`float getShadowMask() {
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
}`,xR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SR=`#ifdef USE_SKINNING
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
#endif`,MR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ER=`#ifdef USE_SKINNING
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
#endif`,TR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CR=`#ifdef USE_TRANSMISSION
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
#endif`,wR=`#ifdef USE_TRANSMISSION
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
#endif`,DR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OR=`uniform sampler2D t2D;
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
}`,BR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VR=`#include <common>
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
}`,HR=`#if DEPTH_PACKING == 3200
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
}`,GR=`#define DISTANCE
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
}`,kR=`#define DISTANCE
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
}`,XR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qR=`uniform float scale;
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
}`,YR=`uniform vec3 diffuse;
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
}`,jR=`#include <common>
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
}`,KR=`uniform vec3 diffuse;
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
}`,ZR=`#define LAMBERT
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
}`,QR=`#define LAMBERT
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
}`,JR=`#define MATCAP
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
}`,$R=`#define MATCAP
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
}`,tC=`#define NORMAL
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
}`,eC=`#define NORMAL
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
}`,nC=`#define PHONG
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
}`,iC=`#define PHONG
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
}`,aC=`#define STANDARD
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
}`,sC=`#define STANDARD
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
}`,rC=`#define TOON
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
}`,oC=`#define TOON
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
}`,lC=`uniform float size;
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
}`,uC=`uniform vec3 diffuse;
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
}`,cC=`#include <common>
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
}`,fC=`uniform vec3 color;
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
}`,hC=`uniform float rotation;
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
}`,dC=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:OA,alphahash_pars_fragment:BA,alphamap_fragment:FA,alphamap_pars_fragment:IA,alphatest_fragment:zA,alphatest_pars_fragment:VA,aomap_fragment:HA,aomap_pars_fragment:GA,batching_pars_vertex:kA,batching_vertex:XA,begin_vertex:WA,beginnormal_vertex:qA,bsdfs:YA,iridescence_fragment:jA,bumpmap_pars_fragment:KA,clipping_planes_fragment:ZA,clipping_planes_pars_fragment:QA,clipping_planes_pars_vertex:JA,clipping_planes_vertex:$A,color_fragment:t1,color_pars_fragment:e1,color_pars_vertex:n1,color_vertex:i1,common:a1,cube_uv_reflection_fragment:s1,defaultnormal_vertex:r1,displacementmap_pars_vertex:o1,displacementmap_vertex:l1,emissivemap_fragment:u1,emissivemap_pars_fragment:c1,colorspace_fragment:f1,colorspace_pars_fragment:h1,envmap_fragment:d1,envmap_common_pars_fragment:p1,envmap_pars_fragment:m1,envmap_pars_vertex:g1,envmap_physical_pars_fragment:R1,envmap_vertex:v1,fog_vertex:_1,fog_pars_vertex:y1,fog_fragment:x1,fog_pars_fragment:S1,gradientmap_pars_fragment:M1,lightmap_pars_fragment:E1,lights_lambert_fragment:T1,lights_lambert_pars_fragment:b1,lights_pars_begin:A1,lights_toon_fragment:C1,lights_toon_pars_fragment:w1,lights_phong_fragment:D1,lights_phong_pars_fragment:U1,lights_physical_fragment:L1,lights_physical_pars_fragment:N1,lights_fragment_begin:P1,lights_fragment_maps:O1,lights_fragment_end:B1,logdepthbuf_fragment:F1,logdepthbuf_pars_fragment:I1,logdepthbuf_pars_vertex:z1,logdepthbuf_vertex:V1,map_fragment:H1,map_pars_fragment:G1,map_particle_fragment:k1,map_particle_pars_fragment:X1,metalnessmap_fragment:W1,metalnessmap_pars_fragment:q1,morphinstance_vertex:Y1,morphcolor_vertex:j1,morphnormal_vertex:K1,morphtarget_pars_vertex:Z1,morphtarget_vertex:Q1,normal_fragment_begin:J1,normal_fragment_maps:$1,normal_pars_fragment:tR,normal_pars_vertex:eR,normal_vertex:nR,normalmap_pars_fragment:iR,clearcoat_normal_fragment_begin:aR,clearcoat_normal_fragment_maps:sR,clearcoat_pars_fragment:rR,iridescence_pars_fragment:oR,opaque_fragment:lR,packing:uR,premultiplied_alpha_fragment:cR,project_vertex:fR,dithering_fragment:hR,dithering_pars_fragment:dR,roughnessmap_fragment:pR,roughnessmap_pars_fragment:mR,shadowmap_pars_fragment:gR,shadowmap_pars_vertex:vR,shadowmap_vertex:_R,shadowmask_pars_fragment:yR,skinbase_vertex:xR,skinning_pars_vertex:SR,skinning_vertex:MR,skinnormal_vertex:ER,specularmap_fragment:TR,specularmap_pars_fragment:bR,tonemapping_fragment:AR,tonemapping_pars_fragment:RR,transmission_fragment:CR,transmission_pars_fragment:wR,uv_pars_fragment:DR,uv_pars_vertex:UR,uv_vertex:LR,worldpos_vertex:NR,background_vert:PR,background_frag:OR,backgroundCube_vert:BR,backgroundCube_frag:FR,cube_vert:IR,cube_frag:zR,depth_vert:VR,depth_frag:HR,distanceRGBA_vert:GR,distanceRGBA_frag:kR,equirect_vert:XR,equirect_frag:WR,linedashed_vert:qR,linedashed_frag:YR,meshbasic_vert:jR,meshbasic_frag:KR,meshlambert_vert:ZR,meshlambert_frag:QR,meshmatcap_vert:JR,meshmatcap_frag:$R,meshnormal_vert:tC,meshnormal_frag:eC,meshphong_vert:nC,meshphong_frag:iC,meshphysical_vert:aC,meshphysical_frag:sC,meshtoon_vert:rC,meshtoon_frag:oC,points_vert:lC,points_frag:uC,shadow_vert:cC,shadow_frag:fC,sprite_vert:hC,sprite_frag:dC},Pt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ki={basic:{uniforms:Vn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Vn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new De(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Vn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Vn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Vn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new De(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Vn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Vn([Pt.points,Pt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Vn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Vn([Pt.common,Pt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Vn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Vn([Pt.sprite,Pt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Vn([Pt.common,Pt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Vn([Pt.lights,Pt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ki.physical={uniforms:Vn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const gc={r:0,b:0,g:0},Us=new xa,pC=new dn;function mC(i,t,n,s,o,u,c){const h=new De(0);let p=u===!0?0:1,d,g,v=null,_=0,S=null;function T(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?n:t).get(C)),C}function b(D){let C=!1;const P=T(D);P===null?y(h,p):P&&P.isColor&&(y(P,1),C=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(D,C){const P=T(C);P&&(P.isCubeTexture||P.mapping===Gc)?(g===void 0&&(g=new Si(new Pl(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:to(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Us.copy(C.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(pC.makeRotationFromEuler(Us)),g.material.toneMapped=Ce.getTransfer(P.colorSpace)!==ze,(v!==P||_!==P.version||S!==i.toneMapping)&&(g.material.needsUpdate=!0,v=P,_=P.version,S=i.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new Si(new Gs(2,2),new Sa({name:"BackgroundMaterial",uniforms:to(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=Ce.getTransfer(P.colorSpace)!==ze,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||_!==P.version||S!==i.toneMapping)&&(d.material.needsUpdate=!0,v=P,_=P.version,S=i.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function y(D,C){D.getRGB(gc,rS(i)),s.buffers.color.setClear(gc.r,gc.g,gc.b,C,c)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,C=1){h.set(D),p=C,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,y(h,p)},render:b,addToRenderList:M,dispose:O}}function gC(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=_(null);let u=o,c=!1;function h(w,H,nt,ft,ht){let ct=!1;const B=v(ft,nt,H);u!==B&&(u=B,d(u.object)),ct=S(w,ft,nt,ht),ct&&T(w,ft,nt,ht),ht!==null&&t.update(ht,i.ELEMENT_ARRAY_BUFFER),(ct||c)&&(c=!1,C(w,H,nt,ft),ht!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function p(){return i.createVertexArray()}function d(w){return i.bindVertexArray(w)}function g(w){return i.deleteVertexArray(w)}function v(w,H,nt){const ft=nt.wireframe===!0;let ht=s[w.id];ht===void 0&&(ht={},s[w.id]=ht);let ct=ht[H.id];ct===void 0&&(ct={},ht[H.id]=ct);let B=ct[ft];return B===void 0&&(B=_(p()),ct[ft]=B),B}function _(w){const H=[],nt=[],ft=[];for(let ht=0;ht<n;ht++)H[ht]=0,nt[ht]=0,ft[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:nt,attributeDivisors:ft,object:w,attributes:{},index:null}}function S(w,H,nt,ft){const ht=u.attributes,ct=H.attributes;let B=0;const Y=nt.getAttributes();for(const W in Y)if(Y[W].location>=0){const N=ht[W];let $=ct[W];if($===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),N===void 0||N.attribute!==$||$&&N.data!==$.data)return!0;B++}return u.attributesNum!==B||u.index!==ft}function T(w,H,nt,ft){const ht={},ct=H.attributes;let B=0;const Y=nt.getAttributes();for(const W in Y)if(Y[W].location>=0){let N=ct[W];N===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(N=w.instanceColor));const $={};$.attribute=N,N&&N.data&&($.data=N.data),ht[W]=$,B++}u.attributes=ht,u.attributesNum=B,u.index=ft}function b(){const w=u.newAttributes;for(let H=0,nt=w.length;H<nt;H++)w[H]=0}function M(w){y(w,0)}function y(w,H){const nt=u.newAttributes,ft=u.enabledAttributes,ht=u.attributeDivisors;nt[w]=1,ft[w]===0&&(i.enableVertexAttribArray(w),ft[w]=1),ht[w]!==H&&(i.vertexAttribDivisor(w,H),ht[w]=H)}function O(){const w=u.newAttributes,H=u.enabledAttributes;for(let nt=0,ft=H.length;nt<ft;nt++)H[nt]!==w[nt]&&(i.disableVertexAttribArray(nt),H[nt]=0)}function D(w,H,nt,ft,ht,ct,B){B===!0?i.vertexAttribIPointer(w,H,nt,ht,ct):i.vertexAttribPointer(w,H,nt,ft,ht,ct)}function C(w,H,nt,ft){b();const ht=ft.attributes,ct=nt.getAttributes(),B=H.defaultAttributeValues;for(const Y in ct){const W=ct[Y];if(W.location>=0){let gt=ht[Y];if(gt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(gt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(gt=w.instanceColor)),gt!==void 0){const N=gt.normalized,$=gt.itemSize,yt=t.get(gt);if(yt===void 0)continue;const xt=yt.buffer,Dt=yt.type,zt=yt.bytesPerElement,et=Dt===i.INT||Dt===i.UNSIGNED_INT||gt.gpuType===lm;if(gt.isInterleavedBufferAttribute){const mt=gt.data,St=mt.stride,Kt=gt.offset;if(mt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<W.locationSize;Wt++)y(W.location+Wt,mt.meshPerAttribute);w.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Wt=0;Wt<W.locationSize;Wt++)M(W.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Wt=0;Wt<W.locationSize;Wt++)D(W.location+Wt,$/W.locationSize,Dt,N,St*zt,(Kt+$/W.locationSize*Wt)*zt,et)}else{if(gt.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)y(W.location+mt,gt.meshPerAttribute);w.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let mt=0;mt<W.locationSize;mt++)M(W.location+mt);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let mt=0;mt<W.locationSize;mt++)D(W.location+mt,$/W.locationSize,Dt,N,$*zt,$/W.locationSize*mt*zt,et)}}else if(B!==void 0){const N=B[Y];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(W.location,N);break;case 3:i.vertexAttrib3fv(W.location,N);break;case 4:i.vertexAttrib4fv(W.location,N);break;default:i.vertexAttrib1fv(W.location,N)}}}}O()}function P(){k();for(const w in s){const H=s[w];for(const nt in H){const ft=H[nt];for(const ht in ft)g(ft[ht].object),delete ft[ht];delete H[nt]}delete s[w]}}function F(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const nt in H){const ft=H[nt];for(const ht in ft)g(ft[ht].object),delete ft[ht];delete H[nt]}delete s[w.id]}function z(w){for(const H in s){const nt=s[H];if(nt[w.id]===void 0)continue;const ft=nt[w.id];for(const ht in ft)g(ft[ht].object),delete ft[ht];delete nt[w.id]}}function k(){U(),c=!0,u!==o&&(u=o,d(u.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:k,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:M,disableUnusedAttributes:O}}function vC(i,t,n){let s;function o(d){s=d}function u(d,g){i.drawArrays(s,d,g),n.update(g,s,1)}function c(d,g,v){v!==0&&(i.drawArraysInstanced(s,d,g,v),n.update(g,s,v))}function h(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,v);let S=0;for(let T=0;T<v;T++)S+=g[T];n.update(S,s,1)}function p(d,g,v,_){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<d.length;T++)c(d[T],g[T],_[T]);else{S.multiDrawArraysInstancedWEBGL(s,d,0,g,0,_,0,v);let T=0;for(let b=0;b<v;b++)T+=g[b]*_[b];n.update(T,s,1)}}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function _C(i,t,n,s){let o;function u(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(z){return!(z!==xi&&s.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const k=z===io&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ya&&s.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Xi&&!k)}function p(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=T>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:T,maxTextureSize:b,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:P,maxSamples:F}}function yC(i){const t=this;let n=null,s=0,o=!1,u=!1;const c=new Ps,h=new he,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||s!==0||o;return o=_,s=v.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,S){const T=v.clippingPlanes,b=v.clipIntersection,M=v.clipShadows,y=i.get(v);if(!o||T===null||T.length===0||u&&!M)u?g(null):d();else{const O=u?0:s,D=O*4;let C=y.clippingState||null;p.value=C,C=g(T,_,D,S);for(let P=0;P!==D;++P)C[P]=n[P];y.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,_,S,T){const b=v!==null?v.length:0;let M=null;if(b!==0){if(M=p.value,T!==!0||M===null){const y=S+b*4,O=_.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<y)&&(M=new Float32Array(y));for(let D=0,C=S;D!==b;++D,C+=4)c.copy(v[D]).applyMatrix4(O,h),c.normal.toArray(M,C),M[C+3]=c.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function xC(i){let t=new WeakMap;function n(c,h){return h===sp?c.mapping=Qr:h===rp&&(c.mapping=Jr),c}function s(c){if(c&&c.isTexture){const h=c.mapping;if(h===sp||h===rp)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new yA(p.height);return d.fromEquirectangularTexture(i,c),t.set(c,d),c.addEventListener("dispose",o),n(d.texture,c.mapping)}else return null}}return c}function o(c){const h=c.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Hr=4,sy=[.125,.215,.35,.446,.526,.582],Is=20,Cd=new DA,ry=new De;let wd=null,Dd=0,Ud=0,Ld=!1;const Os=(1+Math.sqrt(5))/2,Vr=1/Os,oy=[new rt(-Os,Vr,0),new rt(Os,Vr,0),new rt(-Vr,0,Os),new rt(Vr,0,Os),new rt(0,Os,-Vr),new rt(0,Os,Vr),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],SC=new rt;class ly{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,s=.1,o=100,u={}){const{size:c=256,position:h=SC}=u;wd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wd,Dd,Ud),this._renderer.xr.enabled=Ld,t.scissorTest=!1,vc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Qr||t.mapping===Jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:io,format:xi,colorSpace:$r,depthBuffer:!1},o=uy(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uy(t,n,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MC(u)),this._blurMaterial=EC(u,t,n)}return o}_compileMaterial(t){const n=new Si(this._lodPlanes[0],t);this._renderer.compile(n,Cd)}_sceneToCubeUV(t,n,s,o,u){const p=new Li(90,1,n,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(ry),v.toneMapping=as,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null));const b=new iS({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),M=new Si(new Pl,b);let y=!1;const O=t.background;O?O.isColor&&(b.color.copy(O),t.background=null,y=!0):(b.color.copy(ry),y=!0);for(let D=0;D<6;D++){const C=D%3;C===0?(p.up.set(0,d[D],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[D],u.y,u.z)):C===1?(p.up.set(0,0,d[D]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[D],u.z)):(p.up.set(0,d[D],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[D]));const P=this._cubeSize;vc(o,C*P,D>2?P:0,P,P),v.setRenderTarget(o),y&&v.render(M,p),v.render(t,p)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=S,v.autoClear=_,t.background=O}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===Qr||t.mapping===Jr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=fy()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cy());const u=o?this._cubemapMaterial:this._equirectMaterial,c=new Si(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;vc(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(c,Cd)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let u=1;u<o;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=oy[(o-u-1)%oy.length];this._blur(t,u-1,u,c,h)}n.autoClear=s}_blur(t,n,s,o,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,s,o,"latitudinal",u),this._halfBlur(c,t,s,s,o,"longitudinal",u)}_halfBlur(t,n,s,o,u,c,h){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Si(this._lodPlanes[o],d),_=d.uniforms,S=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Is-1),b=u/T,M=isFinite(u)?1+Math.floor(g*b):Is;M>Is&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Is}`);const y=[];let O=0;for(let z=0;z<Is;++z){const k=z/b,U=Math.exp(-k*k/2);y.push(U),z===0?O+=U:z<M&&(O+=2*U)}for(let z=0;z<y.length;z++)y[z]=y[z]/O;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=c==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:D}=this;_.dTheta.value=T,_.mipInt.value=D-s;const C=this._sizeLods[o],P=3*C*(o>D-Hr?o-D+Hr:0),F=4*(this._cubeSize-C);vc(n,P,F,3*C,2*C),p.setRenderTarget(n),p.render(v,Cd)}}function MC(i){const t=[],n=[],s=[];let o=i;const u=i-Hr+1+sy.length;for(let c=0;c<u;c++){const h=Math.pow(2,o);n.push(h);let p=1/h;c>i-Hr?p=sy[c-i+Hr-1]:c===0&&(p=0),s.push(p);const d=1/(h-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,T=6,b=3,M=2,y=1,O=new Float32Array(b*T*S),D=new Float32Array(M*T*S),C=new Float32Array(y*T*S);for(let F=0;F<S;F++){const z=F%3*2/3-1,k=F>2?0:-1,U=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];O.set(U,b*T*F),D.set(_,M*T*F);const w=[F,F,F,F,F,F];C.set(w,y*T*F)}const P=new Ta;P.setAttribute("position",new Oi(O,b)),P.setAttribute("uv",new Oi(D,M)),P.setAttribute("faceIndex",new Oi(C,y)),t.push(P),o>Hr&&o--}return{lodPlanes:t,sizeLods:n,sigmas:s}}function uy(i,t,n){const s=new rs(i,t,n);return s.texture.mapping=Gc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function vc(i,t,n,s,o){i.viewport.set(t,n,s,o),i.scissor.set(t,n,s,o)}function EC(i,t,n){const s=new Float32Array(Is),o=new rt(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:mm(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function cy(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mm(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function fy(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function mm(){return`

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
	`}function TC(i){let t=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const p=h.mapping,d=p===sp||p===rp,g=p===Qr||p===Jr;if(d||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new ly(i)),v=d?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const S=h.image;return d&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new ly(i)),v=d?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function o(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function u(h){const p=h.target;p.removeEventListener("dispose",u);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:c}}function bC(i){const t={};function n(s){if(t[s]!==void 0)return t[s];let o;switch(s){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(s)}return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&El("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function AC(i,t,n,s){const o={},u=new WeakMap;function c(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const T in _.attributes)t.remove(_.attributes[T]);_.removeEventListener("dispose",c),delete o[_.id];const S=u.get(_);S&&(t.remove(S),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const S in _)t.update(_[S],i.ARRAY_BUFFER)}function d(v){const _=[],S=v.index,T=v.attributes.position;let b=0;if(S!==null){const O=S.array;b=S.version;for(let D=0,C=O.length;D<C;D+=3){const P=O[D+0],F=O[D+1],z=O[D+2];_.push(P,F,F,z,z,P)}}else if(T!==void 0){const O=T.array;b=T.version;for(let D=0,C=O.length/3-1;D<C;D+=3){const P=D+0,F=D+1,z=D+2;_.push(P,F,F,z,z,P)}}else return;const M=new(Jx(_)?sS:aS)(_,1);M.version=b;const y=u.get(v);y&&t.remove(y),u.set(v,M)}function g(v){const _=u.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&d(v)}else d(v);return u.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function RC(i,t,n){let s;function o(_){s=_}let u,c;function h(_){u=_.type,c=_.bytesPerElement}function p(_,S){i.drawElements(s,S,u,_*c),n.update(S,s,1)}function d(_,S,T){T!==0&&(i.drawElementsInstanced(s,S,u,_*c,T),n.update(S,s,T))}function g(_,S,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,u,_,0,T);let M=0;for(let y=0;y<T;y++)M+=S[y];n.update(M,s,1)}function v(_,S,T,b){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)d(_[y]/c,S[y],b[y]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,u,_,0,b,0,T);let y=0;for(let O=0;O<T;O++)y+=S[O]*b[O];n.update(y,s,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function CC(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,c,h){switch(n.calls++,c){case i.TRIANGLES:n.triangles+=h*(u/3);break;case i.LINES:n.lines+=h*(u/2);break;case i.LINE_STRIP:n.lines+=h*(u-1);break;case i.LINE_LOOP:n.lines+=h*u;break;case i.POINTS:n.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function wC(i,t,n){const s=new WeakMap,o=new an;function u(c,h,p){const d=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let w=function(){k.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var S=w;_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let C=0;T===!0&&(C=1),b===!0&&(C=2),M===!0&&(C=3);let P=h.attributes.position.count*C,F=1;P>t.maxTextureSize&&(F=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const z=new Float32Array(P*F*4*v),k=new $x(z,P,F,v);k.type=Xi,k.needsUpdate=!0;const U=C*4;for(let H=0;H<v;H++){const nt=y[H],ft=O[H],ht=D[H],ct=P*F*4*H;for(let B=0;B<nt.count;B++){const Y=B*U;T===!0&&(o.fromBufferAttribute(nt,B),z[ct+Y+0]=o.x,z[ct+Y+1]=o.y,z[ct+Y+2]=o.z,z[ct+Y+3]=0),b===!0&&(o.fromBufferAttribute(ft,B),z[ct+Y+4]=o.x,z[ct+Y+5]=o.y,z[ct+Y+6]=o.z,z[ct+Y+7]=0),M===!0&&(o.fromBufferAttribute(ht,B),z[ct+Y+8]=o.x,z[ct+Y+9]=o.y,z[ct+Y+10]=o.z,z[ct+Y+11]=ht.itemSize===4?o.w:1)}}_={count:v,texture:k,size:new ue(P,F)},s.set(h,_),h.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",c.morphTexture,n);else{let T=0;for(let M=0;M<d.length;M++)T+=d[M];const b=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:u}}function DC(i,t,n,s){let o=new WeakMap;function u(p){const d=s.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==d&&(t.update(v),o.set(v,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==d&&(n.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return v}function c(){o=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:u,dispose:c}}const hS=new Gn,hy=new uS(1,1),dS=new $x,pS=new nA,mS=new oS,dy=[],py=[],my=new Float32Array(16),gy=new Float32Array(9),vy=new Float32Array(4);function so(i,t,n){const s=i[0];if(s<=0||s>0)return i;const o=t*n;let u=dy[o];if(u===void 0&&(u=new Float32Array(o),dy[o]=u),t!==0){s.toArray(u,0);for(let c=1,h=0;c!==t;++c)h+=n,i[c].toArray(u,h)}return u}function _n(i,t){if(i.length!==t.length)return!1;for(let n=0,s=i.length;n<s;n++)if(i[n]!==t[n])return!1;return!0}function yn(i,t){for(let n=0,s=t.length;n<s;n++)i[n]=t[n]}function Xc(i,t){let n=py[t];n===void 0&&(n=new Int32Array(t),py[t]=n);for(let s=0;s!==t;++s)n[s]=i.allocateTextureUnit();return n}function UC(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function LC(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;i.uniform2fv(this.addr,t),yn(n,t)}}function NC(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_n(n,t))return;i.uniform3fv(this.addr,t),yn(n,t)}}function PC(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;i.uniform4fv(this.addr,t),yn(n,t)}}function OC(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),yn(n,t)}else{if(_n(n,s))return;vy.set(s),i.uniformMatrix2fv(this.addr,!1,vy),yn(n,s)}}function BC(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),yn(n,t)}else{if(_n(n,s))return;gy.set(s),i.uniformMatrix3fv(this.addr,!1,gy),yn(n,s)}}function FC(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),yn(n,t)}else{if(_n(n,s))return;my.set(s),i.uniformMatrix4fv(this.addr,!1,my),yn(n,s)}}function IC(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function zC(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;i.uniform2iv(this.addr,t),yn(n,t)}}function VC(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;i.uniform3iv(this.addr,t),yn(n,t)}}function HC(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;i.uniform4iv(this.addr,t),yn(n,t)}}function GC(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function kC(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;i.uniform2uiv(this.addr,t),yn(n,t)}}function XC(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;i.uniform3uiv(this.addr,t),yn(n,t)}}function WC(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;i.uniform4uiv(this.addr,t),yn(n,t)}}function qC(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let u;this.type===i.SAMPLER_2D_SHADOW?(hy.compareFunction=Qx,u=hy):u=hS,n.setTexture2D(t||u,o)}function YC(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||pS,o)}function jC(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||mS,o)}function KC(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||dS,o)}function ZC(i){switch(i){case 5126:return UC;case 35664:return LC;case 35665:return NC;case 35666:return PC;case 35674:return OC;case 35675:return BC;case 35676:return FC;case 5124:case 35670:return IC;case 35667:case 35671:return zC;case 35668:case 35672:return VC;case 35669:case 35673:return HC;case 5125:return GC;case 36294:return kC;case 36295:return XC;case 36296:return WC;case 35678:case 36198:case 36298:case 36306:case 35682:return qC;case 35679:case 36299:case 36307:return YC;case 35680:case 36300:case 36308:case 36293:return jC;case 36289:case 36303:case 36311:case 36292:return KC}}function QC(i,t){i.uniform1fv(this.addr,t)}function JC(i,t){const n=so(t,this.size,2);i.uniform2fv(this.addr,n)}function $C(i,t){const n=so(t,this.size,3);i.uniform3fv(this.addr,n)}function tw(i,t){const n=so(t,this.size,4);i.uniform4fv(this.addr,n)}function ew(i,t){const n=so(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function nw(i,t){const n=so(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function iw(i,t){const n=so(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function aw(i,t){i.uniform1iv(this.addr,t)}function sw(i,t){i.uniform2iv(this.addr,t)}function rw(i,t){i.uniform3iv(this.addr,t)}function ow(i,t){i.uniform4iv(this.addr,t)}function lw(i,t){i.uniform1uiv(this.addr,t)}function uw(i,t){i.uniform2uiv(this.addr,t)}function cw(i,t){i.uniform3uiv(this.addr,t)}function fw(i,t){i.uniform4uiv(this.addr,t)}function hw(i,t,n){const s=this.cache,o=t.length,u=Xc(n,o);_n(s,u)||(i.uniform1iv(this.addr,u),yn(s,u));for(let c=0;c!==o;++c)n.setTexture2D(t[c]||hS,u[c])}function dw(i,t,n){const s=this.cache,o=t.length,u=Xc(n,o);_n(s,u)||(i.uniform1iv(this.addr,u),yn(s,u));for(let c=0;c!==o;++c)n.setTexture3D(t[c]||pS,u[c])}function pw(i,t,n){const s=this.cache,o=t.length,u=Xc(n,o);_n(s,u)||(i.uniform1iv(this.addr,u),yn(s,u));for(let c=0;c!==o;++c)n.setTextureCube(t[c]||mS,u[c])}function mw(i,t,n){const s=this.cache,o=t.length,u=Xc(n,o);_n(s,u)||(i.uniform1iv(this.addr,u),yn(s,u));for(let c=0;c!==o;++c)n.setTexture2DArray(t[c]||dS,u[c])}function gw(i){switch(i){case 5126:return QC;case 35664:return JC;case 35665:return $C;case 35666:return tw;case 35674:return ew;case 35675:return nw;case 35676:return iw;case 5124:case 35670:return aw;case 35667:case 35671:return sw;case 35668:case 35672:return rw;case 35669:case 35673:return ow;case 5125:return lw;case 36294:return uw;case 36295:return cw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}class vw{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=ZC(n.type)}}class _w{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gw(n.type)}}class yw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const h=o[u];h.setValue(t,n[h.id],s)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function _y(i,t){i.seq.push(t),i.map[t.id]=t}function xw(i,t,n){const s=i.name,o=s.length;for(Nd.lastIndex=0;;){const u=Nd.exec(s),c=Nd.lastIndex;let h=u[1];const p=u[2]==="]",d=u[3];if(p&&(h=h|0),d===void 0||d==="["&&c+2===o){_y(n,d===void 0?new vw(h,i,t):new _w(h,i,t));break}else{let v=n.map[h];v===void 0&&(v=new yw(h),_y(n,v)),n=v}}}class Ac{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const u=t.getActiveUniform(n,o),c=t.getUniformLocation(n,u.name);xw(u,c,this)}}setValue(t,n,s,o){const u=this.map[n];u!==void 0&&u.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let u=0,c=n.length;u!==c;++u){const h=n[u],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,u=t.length;o!==u;++o){const c=t[o];c.id in n&&s.push(c)}return s}}function yy(i,t,n){const s=i.createShader(t);return i.shaderSource(s,n),i.compileShader(s),s}const Sw=37297;let Mw=0;function Ew(i,t){const n=i.split(`
`),s=[],o=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let c=o;c<u;c++){const h=c+1;s.push(`${h===t?">":" "} ${h}: ${n[c]}`)}return s.join(`
`)}const xy=new he;function Tw(i){Ce._getMatrix(xy,Ce.workingColorSpace,i);const t=`mat3( ${xy.elements.map(n=>n.toFixed(4))} )`;switch(Ce.getTransfer(i)){case Uc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sy(i,t,n){const s=i.getShaderParameter(t,i.COMPILE_STATUS),u=(i.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const h=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+Ew(i.getShaderSource(t),h)}else return u}function bw(i,t){const n=Tw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Aw(i,t){let n;switch(t){case wb:n="Linear";break;case Db:n="Reinhard";break;case Ub:n="Cineon";break;case Lb:n="ACESFilmic";break;case Pb:n="AgX";break;case Ob:n="Neutral";break;case Nb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _c=new rt;function Rw(){Ce.getLuminanceCoefficients(_c);const i=_c.x.toFixed(4),t=_c.y.toFixed(4),n=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function ww(i){const t=[];for(const n in i){const s=i[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function Dw(i,t){const n={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const u=i.getActiveAttrib(t,o),c=u.name;let h=1;u.type===i.FLOAT_MAT2&&(h=2),u.type===i.FLOAT_MAT3&&(h=3),u.type===i.FLOAT_MAT4&&(h=4),n[c]={type:u.type,location:i.getAttribLocation(t,c),locationSize:h}}return n}function hl(i){return i!==""}function My(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ey(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(i){return i.replace(Uw,Nw)}const Lw=new Map;function Nw(i,t){let n=me[t];if(n===void 0){const s=Lw.get(t);if(s!==void 0)n=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ip(n)}const Pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ty(i){return i.replace(Pw,Ow)}function Ow(i,t,n,s){let o="";for(let u=parseInt(t);u<parseInt(n);u++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function by(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Bw(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vx?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lb?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ma&&(t="SHADOWMAP_TYPE_VSM"),t}function Fw(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qr:case Jr:t="ENVMAP_TYPE_CUBE";break;case Gc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Iw(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Jr:t="ENVMAP_MODE_REFRACTION";break}return t}function zw(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hx:t="ENVMAP_BLENDING_MULTIPLY";break;case Rb:t="ENVMAP_BLENDING_MIX";break;case Cb:t="ENVMAP_BLENDING_ADD";break}return t}function Vw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function Hw(i,t,n,s){const o=i.getContext(),u=n.defines;let c=n.vertexShader,h=n.fragmentShader;const p=Bw(n),d=Fw(n),g=Iw(n),v=zw(n),_=Vw(n),S=Cw(n),T=ww(u),b=o.createProgram();let M,y,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(hl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(hl).join(`
`),y.length>0&&(y+=`
`)):(M=[by(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),y=[by(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==as?"#define TONE_MAPPING":"",n.toneMapping!==as?me.tonemapping_pars_fragment:"",n.toneMapping!==as?Aw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,bw("linearToOutputTexel",n.outputColorSpace),Rw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hl).join(`
`)),c=Ip(c),c=My(c,n),c=Ey(c,n),h=Ip(h),h=My(h,n),h=Ey(h,n),c=Ty(c),h=Ty(h),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===O0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===O0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=O+M+c,C=O+y+h,P=yy(o,o.VERTEX_SHADER,D),F=yy(o,o.FRAGMENT_SHADER,C);o.attachShader(b,P),o.attachShader(b,F),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function z(H){if(i.debug.checkShaderErrors){const nt=o.getProgramInfoLog(b)||"",ft=o.getShaderInfoLog(P)||"",ht=o.getShaderInfoLog(F)||"",ct=nt.trim(),B=ft.trim(),Y=ht.trim();let W=!0,gt=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,b,P,F);else{const N=Sy(o,P,"vertex"),$=Sy(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ct+`
`+N+`
`+$)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(B===""||Y==="")&&(gt=!1);gt&&(H.diagnostics={runnable:W,programLog:ct,vertexShader:{log:B,prefix:M},fragmentShader:{log:Y,prefix:y}})}o.deleteShader(P),o.deleteShader(F),k=new Ac(o,b),U=Dw(o,b)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(b,Sw)),w},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Mw++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=F,this}let Gw=0;class kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(s),c=this._getShaderCacheForMaterial(t);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new Xw(t),n.set(t,s)),s}}class Xw{constructor(t){this.id=Gw++,this.code=t,this.usedTimes=0}}function Ww(i,t,n,s,o,u,c){const h=new eS,p=new kw,d=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return d.add(U),U===0?"uv":`uv${U}`}function M(U,w,H,nt,ft){const ht=nt.fog,ct=ft.geometry,B=U.isMeshStandardMaterial?nt.environment:null,Y=(U.isMeshStandardMaterial?n:t).get(U.envMap||B),W=Y&&Y.mapping===Gc?Y.image.height:null,gt=T[U.type];U.precision!==null&&(S=o.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const N=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,$=N!==void 0?N.length:0;let yt=0;ct.morphAttributes.position!==void 0&&(yt=1),ct.morphAttributes.normal!==void 0&&(yt=2),ct.morphAttributes.color!==void 0&&(yt=3);let xt,Dt,zt,et;if(gt){const Te=ki[gt];xt=Te.vertexShader,Dt=Te.fragmentShader}else xt=U.vertexShader,Dt=U.fragmentShader,p.update(U),zt=p.getVertexShaderID(U),et=p.getFragmentShaderID(U);const mt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Kt=ft.isInstancedMesh===!0,Wt=ft.isBatchedMesh===!0,ce=!!U.map,Qe=!!U.matcap,V=!!Y,Ue=!!U.aoMap,re=!!U.lightMap,$t=!!U.bumpMap,Ot=!!U.normalMap,Me=!!U.displacementMap,Vt=!!U.emissiveMap,oe=!!U.metalnessMap,Ge=!!U.roughnessMap,ke=U.anisotropy>0,L=U.clearcoat>0,x=U.dispersion>0,G=U.iridescence>0,Q=U.sheen>0,lt=U.transmission>0,it=ke&&!!U.anisotropyMap,Rt=L&&!!U.clearcoatMap,At=L&&!!U.clearcoatNormalMap,Ft=L&&!!U.clearcoatRoughnessMap,Gt=G&&!!U.iridescenceMap,Mt=G&&!!U.iridescenceThicknessMap,Lt=Q&&!!U.sheenColorMap,Zt=Q&&!!U.sheenRoughnessMap,Xt=!!U.specularMap,wt=!!U.specularColorMap,le=!!U.specularIntensityMap,q=lt&&!!U.transmissionMap,bt=lt&&!!U.thicknessMap,Ct=!!U.gradientMap,Bt=!!U.alphaMap,Et=U.alphaTest>0,_t=!!U.alphaHash,kt=!!U.extensions;let se=as;U.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(se=i.toneMapping);const Le={shaderID:gt,shaderType:U.type,shaderName:U.name,vertexShader:xt,fragmentShader:Dt,defines:U.defines,customVertexShaderID:zt,customFragmentShaderID:et,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:Wt,batchingColor:Wt&&ft._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&ft.instanceColor!==null,instancingMorph:Kt&&ft.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:$r,alphaToCoverage:!!U.alphaToCoverage,map:ce,matcap:Qe,envMap:V,envMapMode:V&&Y.mapping,envMapCubeUVHeight:W,aoMap:Ue,lightMap:re,bumpMap:$t,normalMap:Ot,displacementMap:_&&Me,emissiveMap:Vt,normalMapObjectSpace:Ot&&U.normalMapType===Vb,normalMapTangentSpace:Ot&&U.normalMapType===zb,metalnessMap:oe,roughnessMap:Ge,anisotropy:ke,anisotropyMap:it,clearcoat:L,clearcoatMap:Rt,clearcoatNormalMap:At,clearcoatRoughnessMap:Ft,dispersion:x,iridescence:G,iridescenceMap:Gt,iridescenceThicknessMap:Mt,sheen:Q,sheenColorMap:Lt,sheenRoughnessMap:Zt,specularMap:Xt,specularColorMap:wt,specularIntensityMap:le,transmission:lt,transmissionMap:q,thicknessMap:bt,gradientMap:Ct,opaque:U.transparent===!1&&U.blending===Yr&&U.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:_t,combine:U.combine,mapUv:ce&&b(U.map.channel),aoMapUv:Ue&&b(U.aoMap.channel),lightMapUv:re&&b(U.lightMap.channel),bumpMapUv:$t&&b(U.bumpMap.channel),normalMapUv:Ot&&b(U.normalMap.channel),displacementMapUv:Me&&b(U.displacementMap.channel),emissiveMapUv:Vt&&b(U.emissiveMap.channel),metalnessMapUv:oe&&b(U.metalnessMap.channel),roughnessMapUv:Ge&&b(U.roughnessMap.channel),anisotropyMapUv:it&&b(U.anisotropyMap.channel),clearcoatMapUv:Rt&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:At&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&b(U.sheenRoughnessMap.channel),specularMapUv:Xt&&b(U.specularMap.channel),specularColorMapUv:wt&&b(U.specularColorMap.channel),specularIntensityMapUv:le&&b(U.specularIntensityMap.channel),transmissionMapUv:q&&b(U.transmissionMap.channel),thicknessMapUv:bt&&b(U.thicknessMap.channel),alphaMapUv:Bt&&b(U.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Ot||ke),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!ct.attributes.uv&&(ce||Bt),fog:!!ht,useFog:U.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:St,skinning:ft.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:yt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:U.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:ce&&U.map.isVideoTexture===!0&&Ce.getTransfer(U.map.colorSpace)===ze,decodeVideoTextureEmissive:Vt&&U.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(U.emissiveMap.colorSpace)===ze,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ga,flipSided:U.side===Qn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:kt&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&U.extensions.multiDraw===!0||Wt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Le.vertexUv1s=d.has(1),Le.vertexUv2s=d.has(2),Le.vertexUv3s=d.has(3),d.clear(),Le}function y(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)w.push(H),w.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(O(w,U),D(w,U),w.push(i.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function O(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function D(U,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),U.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),U.push(h.mask)}function C(U){const w=T[U.type];let H;if(w){const nt=ki[w];H=mA.clone(nt.uniforms)}else H=U.uniforms;return H}function P(U,w){let H;for(let nt=0,ft=g.length;nt<ft;nt++){const ht=g[nt];if(ht.cacheKey===w){H=ht,++H.usedTimes;break}}return H===void 0&&(H=new Hw(i,w,U,u),g.push(H)),H}function F(U){if(--U.usedTimes===0){const w=g.indexOf(U);g[w]=g[g.length-1],g.pop(),U.destroy()}}function z(U){p.remove(U)}function k(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:C,acquireProgram:P,releaseProgram:F,releaseShaderCache:z,programs:g,dispose:k}}function qw(){let i=new WeakMap;function t(c){return i.has(c)}function n(c){let h=i.get(c);return h===void 0&&(h={},i.set(c,h)),h}function s(c){i.delete(c)}function o(c,h,p){i.get(c)[h]=p}function u(){i=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:u}}function Yw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ay(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ry(){const i=[];let t=0;const n=[],s=[],o=[];function u(){t=0,n.length=0,s.length=0,o.length=0}function c(v,_,S,T,b,M){let y=i[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:S,groupOrder:T,renderOrder:v.renderOrder,z:b,group:M},i[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=S,y.groupOrder=T,y.renderOrder=v.renderOrder,y.z=b,y.group=M),t++,y}function h(v,_,S,T,b,M){const y=c(v,_,S,T,b,M);S.transmission>0?s.push(y):S.transparent===!0?o.push(y):n.push(y)}function p(v,_,S,T,b,M){const y=c(v,_,S,T,b,M);S.transmission>0?s.unshift(y):S.transparent===!0?o.unshift(y):n.unshift(y)}function d(v,_){n.length>1&&n.sort(v||Yw),s.length>1&&s.sort(_||Ay),o.length>1&&o.sort(_||Ay)}function g(){for(let v=t,_=i.length;v<_;v++){const S=i[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:s,transparent:o,init:u,push:h,unshift:p,finish:g,sort:d}}function jw(){let i=new WeakMap;function t(s,o){const u=i.get(s);let c;return u===void 0?(c=new Ry,i.set(s,[c])):o>=u.length?(c=new Ry,u.push(c)):c=u[o],c}function n(){i=new WeakMap}return{get:t,dispose:n}}function Kw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new rt,color:new De};break;case"SpotLight":n={position:new rt,direction:new rt,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new rt,color:new De,distance:0,decay:0};break;case"HemisphereLight":n={direction:new rt,skyColor:new De,groundColor:new De};break;case"RectAreaLight":n={color:new De,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return i[t.id]=n,n}}}function Zw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let Qw=0;function Jw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $w(i){const t=new Kw,n=Zw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new rt);const o=new rt,u=new dn,c=new dn;function h(d){let g=0,v=0,_=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let S=0,T=0,b=0,M=0,y=0,O=0,D=0,C=0,P=0,F=0,z=0;d.sort(Jw);for(let U=0,w=d.length;U<w;U++){const H=d[U],nt=H.color,ft=H.intensity,ht=H.distance,ct=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=nt.r*ft,v+=nt.g*ft,_+=nt.b*ft;else if(H.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(H.sh.coefficients[B],ft);z++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,s.directionalShadow[S]=W,s.directionalShadowMap[S]=ct,s.directionalShadowMatrix[S]=H.shadow.matrix,O++}s.directional[S]=B,S++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(nt).multiplyScalar(ft),B.distance=ht,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,s.spot[b]=B;const Y=H.shadow;if(H.map&&(s.spotLightMap[P]=H.map,P++,Y.updateMatrices(H),H.castShadow&&F++),s.spotLightMatrix[b]=Y.matrix,H.castShadow){const W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,s.spotShadow[b]=W,s.spotShadowMap[b]=ct,C++}b++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(nt).multiplyScalar(ft),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=B,M++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const Y=H.shadow,W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,s.pointShadow[T]=W,s.pointShadowMap[T]=ct,s.pointShadowMatrix[T]=H.shadow.matrix,D++}s.point[T]=B,T++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(ft),B.groundColor.copy(H.groundColor).multiplyScalar(ft),s.hemi[y]=B,y++}}M>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=_;const k=s.hash;(k.directionalLength!==S||k.pointLength!==T||k.spotLength!==b||k.rectAreaLength!==M||k.hemiLength!==y||k.numDirectionalShadows!==O||k.numPointShadows!==D||k.numSpotShadows!==C||k.numSpotMaps!==P||k.numLightProbes!==z)&&(s.directional.length=S,s.spot.length=b,s.rectArea.length=M,s.point.length=T,s.hemi.length=y,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=C+P-F,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,k.directionalLength=S,k.pointLength=T,k.spotLength=b,k.rectAreaLength=M,k.hemiLength=y,k.numDirectionalShadows=O,k.numPointShadows=D,k.numSpotShadows=C,k.numSpotMaps=P,k.numLightProbes=z,s.version=Qw++)}function p(d,g){let v=0,_=0,S=0,T=0,b=0;const M=g.matrixWorldInverse;for(let y=0,O=d.length;y<O;y++){const D=d[y];if(D.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),v++}else if(D.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),S++}else if(D.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(M),c.identity(),u.copy(D.matrixWorld),u.premultiply(M),c.extractRotation(u),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),T++}else if(D.isPointLight){const C=s.point[_];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(M),_++}else if(D.isHemisphereLight){const C=s.hemi[b];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(M),b++}}}return{setup:h,setupView:p,state:s}}function Cy(i){const t=new $w(i),n=[],s=[];function o(g){d.camera=g,n.length=0,s.length=0}function u(g){n.push(g)}function c(g){s.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:c}}function t2(i){let t=new WeakMap;function n(o,u=0){const c=t.get(o);let h;return c===void 0?(h=new Cy(i),t.set(o,[h])):u>=c.length?(h=new Cy(i),c.push(h)):h=c[u],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const e2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n2=`uniform sampler2D shadow_pass;
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
}`;function i2(i,t,n){let s=new lS;const o=new ue,u=new ue,c=new an,h=new CA({depthPacking:Ib}),p=new wA,d={},g=n.maxTextureSize,v={[ss]:Qn,[Qn]:ss,[ga]:ga},_=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:e2,fragmentShader:n2}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const T=new Ta;T.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Si(T,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vx;let y=this.type;this.render=function(F,z,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const U=i.getRenderTarget(),w=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),nt=i.state;nt.setBlending(is),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ft=y!==ma&&this.type===ma,ht=y===ma&&this.type!==ma;for(let ct=0,B=F.length;ct<B;ct++){const Y=F[ct],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const gt=W.getFrameExtents();if(o.multiply(gt),u.copy(W.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/gt.x),o.x=u.x*gt.x,W.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/gt.y),o.y=u.y*gt.y,W.mapSize.y=u.y)),W.map===null||ft===!0||ht===!0){const $=this.type!==ma?{minFilter:li,magFilter:li}:{};W.map!==null&&W.map.dispose(),W.map=new rs(o.x,o.y,$),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const N=W.getViewportCount();for(let $=0;$<N;$++){const yt=W.getViewport($);c.set(u.x*yt.x,u.y*yt.y,u.x*yt.z,u.y*yt.w),nt.viewport(c),W.updateMatrices(Y,$),s=W.getFrustum(),C(z,k,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===ma&&O(W,k),W.needsUpdate=!1}y=this.type,M.needsUpdate=!1,i.setRenderTarget(U,w,H)};function O(F,z){const k=t.update(b);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new rs(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(z,null,k,_,b,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(z,null,k,S,b,null)}function D(F,z,k,U){let w=null;const H=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)w=H;else if(w=k.isPointLight===!0?p:h,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const nt=w.uuid,ft=z.uuid;let ht=d[nt];ht===void 0&&(ht={},d[nt]=ht);let ct=ht[ft];ct===void 0&&(ct=w.clone(),ht[ft]=ct,z.addEventListener("dispose",P)),w=ct}if(w.visible=z.visible,w.wireframe=z.wireframe,U===ma?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:v[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const nt=i.properties.get(w);nt.light=k}return w}function C(F,z,k,U,w){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===ma)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const ft=t.update(F),ht=F.material;if(Array.isArray(ht)){const ct=ft.groups;for(let B=0,Y=ct.length;B<Y;B++){const W=ct[B],gt=ht[W.materialIndex];if(gt&&gt.visible){const N=D(F,gt,U,w);F.onBeforeShadow(i,F,z,k,ft,N,W),i.renderBufferDirect(k,null,ft,N,F,W),F.onAfterShadow(i,F,z,k,ft,N,W)}}}else if(ht.visible){const ct=D(F,ht,U,w);F.onBeforeShadow(i,F,z,k,ft,ct,null),i.renderBufferDirect(k,null,ft,ct,F,null),F.onAfterShadow(i,F,z,k,ft,ct,null)}}const nt=F.children;for(let ft=0,ht=nt.length;ft<ht;ft++)C(nt[ft],z,k,U,w)}function P(F){F.target.removeEventListener("dispose",P);for(const k in d){const U=d[k],w=F.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}const a2={[Jd]:$d,[tp]:ip,[ep]:ap,[Zr]:np,[$d]:Jd,[ip]:tp,[ap]:ep,[np]:Zr};function s2(i,t){function n(){let q=!1;const bt=new an;let Ct=null;const Bt=new an(0,0,0,0);return{setMask:function(Et){Ct!==Et&&!q&&(i.colorMask(Et,Et,Et,Et),Ct=Et)},setLocked:function(Et){q=Et},setClear:function(Et,_t,kt,se,Le){Le===!0&&(Et*=se,_t*=se,kt*=se),bt.set(Et,_t,kt,se),Bt.equals(bt)===!1&&(i.clearColor(Et,_t,kt,se),Bt.copy(bt))},reset:function(){q=!1,Ct=null,Bt.set(-1,0,0,0)}}}function s(){let q=!1,bt=!1,Ct=null,Bt=null,Et=null;return{setReversed:function(_t){if(bt!==_t){const kt=t.get("EXT_clip_control");_t?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),bt=_t;const se=Et;Et=null,this.setClear(se)}},getReversed:function(){return bt},setTest:function(_t){_t?mt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(_t){Ct!==_t&&!q&&(i.depthMask(_t),Ct=_t)},setFunc:function(_t){if(bt&&(_t=a2[_t]),Bt!==_t){switch(_t){case Jd:i.depthFunc(i.NEVER);break;case $d:i.depthFunc(i.ALWAYS);break;case tp:i.depthFunc(i.LESS);break;case Zr:i.depthFunc(i.LEQUAL);break;case ep:i.depthFunc(i.EQUAL);break;case np:i.depthFunc(i.GEQUAL);break;case ip:i.depthFunc(i.GREATER);break;case ap:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Bt=_t}},setLocked:function(_t){q=_t},setClear:function(_t){Et!==_t&&(bt&&(_t=1-_t),i.clearDepth(_t),Et=_t)},reset:function(){q=!1,Ct=null,Bt=null,Et=null,bt=!1}}}function o(){let q=!1,bt=null,Ct=null,Bt=null,Et=null,_t=null,kt=null,se=null,Le=null;return{setTest:function(Te){q||(Te?mt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Te){bt!==Te&&!q&&(i.stencilMask(Te),bt=Te)},setFunc:function(Te,Ei,pn){(Ct!==Te||Bt!==Ei||Et!==pn)&&(i.stencilFunc(Te,Ei,pn),Ct=Te,Bt=Ei,Et=pn)},setOp:function(Te,Ei,pn){(_t!==Te||kt!==Ei||se!==pn)&&(i.stencilOp(Te,Ei,pn),_t=Te,kt=Ei,se=pn)},setLocked:function(Te){q=Te},setClear:function(Te){Le!==Te&&(i.clearStencil(Te),Le=Te)},reset:function(){q=!1,bt=null,Ct=null,Bt=null,Et=null,_t=null,kt=null,se=null,Le=null}}}const u=new n,c=new s,h=new o,p=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,S=[],T=null,b=!1,M=null,y=null,O=null,D=null,C=null,P=null,F=null,z=new De(0,0,0),k=0,U=!1,w=null,H=null,nt=null,ft=null,ht=null;const ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Y>=2);let gt=null,N={};const $=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),xt=new an().fromArray($),Dt=new an().fromArray(yt);function zt(q,bt,Ct,Bt){const Et=new Uint8Array(4),_t=i.createTexture();i.bindTexture(q,_t),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Ct;kt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Bt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(bt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return _t}const et={};et[i.TEXTURE_2D]=zt(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),mt(i.DEPTH_TEST),c.setFunc(Zr),$t(!1),Ot(D0),mt(i.CULL_FACE),Ue(is);function mt(q){g[q]!==!0&&(i.enable(q),g[q]=!0)}function St(q){g[q]!==!1&&(i.disable(q),g[q]=!1)}function Kt(q,bt){return v[q]!==bt?(i.bindFramebuffer(q,bt),v[q]=bt,q===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=bt),q===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Wt(q,bt){let Ct=S,Bt=!1;if(q){Ct=_.get(bt),Ct===void 0&&(Ct=[],_.set(bt,Ct));const Et=q.textures;if(Ct.length!==Et.length||Ct[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,kt=Et.length;_t<kt;_t++)Ct[_t]=i.COLOR_ATTACHMENT0+_t;Ct.length=Et.length,Bt=!0}}else Ct[0]!==i.BACK&&(Ct[0]=i.BACK,Bt=!0);Bt&&i.drawBuffers(Ct)}function ce(q){return T!==q?(i.useProgram(q),T=q,!0):!1}const Qe={[Fs]:i.FUNC_ADD,[cb]:i.FUNC_SUBTRACT,[fb]:i.FUNC_REVERSE_SUBTRACT};Qe[hb]=i.MIN,Qe[db]=i.MAX;const V={[pb]:i.ZERO,[mb]:i.ONE,[gb]:i.SRC_COLOR,[Zd]:i.SRC_ALPHA,[Mb]:i.SRC_ALPHA_SATURATE,[xb]:i.DST_COLOR,[_b]:i.DST_ALPHA,[vb]:i.ONE_MINUS_SRC_COLOR,[Qd]:i.ONE_MINUS_SRC_ALPHA,[Sb]:i.ONE_MINUS_DST_COLOR,[yb]:i.ONE_MINUS_DST_ALPHA,[Eb]:i.CONSTANT_COLOR,[Tb]:i.ONE_MINUS_CONSTANT_COLOR,[bb]:i.CONSTANT_ALPHA,[Ab]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(q,bt,Ct,Bt,Et,_t,kt,se,Le,Te){if(q===is){b===!0&&(St(i.BLEND),b=!1);return}if(b===!1&&(mt(i.BLEND),b=!0),q!==ub){if(q!==M||Te!==U){if((y!==Fs||C!==Fs)&&(i.blendEquation(i.FUNC_ADD),y=Fs,C=Fs),Te)switch(q){case Yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kd:i.blendFunc(i.ONE,i.ONE);break;case U0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case L0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case U0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case L0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}O=null,D=null,P=null,F=null,z.set(0,0,0),k=0,M=q,U=Te}return}Et=Et||bt,_t=_t||Ct,kt=kt||Bt,(bt!==y||Et!==C)&&(i.blendEquationSeparate(Qe[bt],Qe[Et]),y=bt,C=Et),(Ct!==O||Bt!==D||_t!==P||kt!==F)&&(i.blendFuncSeparate(V[Ct],V[Bt],V[_t],V[kt]),O=Ct,D=Bt,P=_t,F=kt),(se.equals(z)===!1||Le!==k)&&(i.blendColor(se.r,se.g,se.b,Le),z.copy(se),k=Le),M=q,U=!1}function re(q,bt){q.side===ga?St(i.CULL_FACE):mt(i.CULL_FACE);let Ct=q.side===Qn;bt&&(Ct=!Ct),$t(Ct),q.blending===Yr&&q.transparent===!1?Ue(is):Ue(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),u.setMask(q.colorWrite);const Bt=q.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Vt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(q){w!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),w=q)}function Ot(q){q!==rb?(mt(i.CULL_FACE),q!==H&&(q===D0?i.cullFace(i.BACK):q===ob?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),H=q}function Me(q){q!==nt&&(B&&i.lineWidth(q),nt=q)}function Vt(q,bt,Ct){q?(mt(i.POLYGON_OFFSET_FILL),(ft!==bt||ht!==Ct)&&(i.polygonOffset(bt,Ct),ft=bt,ht=Ct)):St(i.POLYGON_OFFSET_FILL)}function oe(q){q?mt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Ge(q){q===void 0&&(q=i.TEXTURE0+ct-1),gt!==q&&(i.activeTexture(q),gt=q)}function ke(q,bt,Ct){Ct===void 0&&(gt===null?Ct=i.TEXTURE0+ct-1:Ct=gt);let Bt=N[Ct];Bt===void 0&&(Bt={type:void 0,texture:void 0},N[Ct]=Bt),(Bt.type!==q||Bt.texture!==bt)&&(gt!==Ct&&(i.activeTexture(Ct),gt=Ct),i.bindTexture(q,bt||et[q]),Bt.type=q,Bt.texture=bt)}function L(){const q=N[gt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Q(){try{i.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function lt(){try{i.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{i.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{i.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Gt(){try{i.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{i.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Lt(q){xt.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),xt.copy(q))}function Zt(q){Dt.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Dt.copy(q))}function Xt(q,bt){let Ct=d.get(bt);Ct===void 0&&(Ct=new WeakMap,d.set(bt,Ct));let Bt=Ct.get(q);Bt===void 0&&(Bt=i.getUniformBlockIndex(bt,q.name),Ct.set(q,Bt))}function wt(q,bt){const Bt=d.get(bt).get(q);p.get(bt)!==Bt&&(i.uniformBlockBinding(bt,Bt,q.__bindingPointIndex),p.set(bt,Bt))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},gt=null,N={},v={},_=new WeakMap,S=[],T=null,b=!1,M=null,y=null,O=null,D=null,C=null,P=null,F=null,z=new De(0,0,0),k=0,U=!1,w=null,H=null,nt=null,ft=null,ht=null,xt.set(0,0,i.canvas.width,i.canvas.height),Dt.set(0,0,i.canvas.width,i.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:mt,disable:St,bindFramebuffer:Kt,drawBuffers:Wt,useProgram:ce,setBlending:Ue,setMaterial:re,setFlipSided:$t,setCullFace:Ot,setLineWidth:Me,setPolygonOffset:Vt,setScissorTest:oe,activeTexture:Ge,bindTexture:ke,unbindTexture:L,compressedTexImage2D:x,compressedTexImage3D:G,texImage2D:Gt,texImage3D:Mt,updateUBOMapping:Xt,uniformBlockBinding:wt,texStorage2D:At,texStorage3D:Ft,texSubImage2D:Q,texSubImage3D:lt,compressedTexSubImage2D:it,compressedTexSubImage3D:Rt,scissor:Lt,viewport:Zt,reset:le}}function r2(i,t,n,s,o,u,c){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ue,g=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,x){return S?new OffscreenCanvas(L,x):Nc("canvas")}function b(L,x,G){let Q=1;const lt=ke(L);if((lt.width>G||lt.height>G)&&(Q=G/Math.max(lt.width,lt.height)),Q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const it=Math.floor(Q*lt.width),Rt=Math.floor(Q*lt.height);v===void 0&&(v=T(it,Rt));const At=x?T(it,Rt):v;return At.width=it,At.height=Rt,At.getContext("2d").drawImage(L,0,0,it,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+it+"x"+Rt+")."),At}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),L;return L}function M(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(L,x,G,Q,lt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let it=x;if(x===i.RED&&(G===i.FLOAT&&(it=i.R32F),G===i.HALF_FLOAT&&(it=i.R16F),G===i.UNSIGNED_BYTE&&(it=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(it=i.R8UI),G===i.UNSIGNED_SHORT&&(it=i.R16UI),G===i.UNSIGNED_INT&&(it=i.R32UI),G===i.BYTE&&(it=i.R8I),G===i.SHORT&&(it=i.R16I),G===i.INT&&(it=i.R32I)),x===i.RG&&(G===i.FLOAT&&(it=i.RG32F),G===i.HALF_FLOAT&&(it=i.RG16F),G===i.UNSIGNED_BYTE&&(it=i.RG8)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(it=i.RG8UI),G===i.UNSIGNED_SHORT&&(it=i.RG16UI),G===i.UNSIGNED_INT&&(it=i.RG32UI),G===i.BYTE&&(it=i.RG8I),G===i.SHORT&&(it=i.RG16I),G===i.INT&&(it=i.RG32I)),x===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(it=i.RGB8UI),G===i.UNSIGNED_SHORT&&(it=i.RGB16UI),G===i.UNSIGNED_INT&&(it=i.RGB32UI),G===i.BYTE&&(it=i.RGB8I),G===i.SHORT&&(it=i.RGB16I),G===i.INT&&(it=i.RGB32I)),x===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),G===i.UNSIGNED_INT&&(it=i.RGBA32UI),G===i.BYTE&&(it=i.RGBA8I),G===i.SHORT&&(it=i.RGBA16I),G===i.INT&&(it=i.RGBA32I)),x===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),x===i.RGBA){const Rt=lt?Uc:Ce.getTransfer(Q);G===i.FLOAT&&(it=i.RGBA32F),G===i.HALF_FLOAT&&(it=i.RGBA16F),G===i.UNSIGNED_BYTE&&(it=Rt===ze?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function C(L,x){let G;return L?x===null||x===Ws||x===xl?G=i.DEPTH24_STENCIL8:x===Xi?G=i.DEPTH32F_STENCIL8:x===yl&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ws||x===xl?G=i.DEPTH_COMPONENT24:x===Xi?G=i.DEPTH_COMPONENT32F:x===yl&&(G=i.DEPTH_COMPONENT16),G}function P(L,x){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==li&&L.minFilter!==Kn?Math.log2(Math.max(x.width,x.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?x.mipmaps.length:1}function F(L){const x=L.target;x.removeEventListener("dispose",F),k(x),x.isVideoTexture&&g.delete(x)}function z(L){const x=L.target;x.removeEventListener("dispose",z),w(x)}function k(L){const x=s.get(L);if(x.__webglInit===void 0)return;const G=L.source,Q=_.get(G);if(Q){const lt=Q[x.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&U(L),Object.keys(Q).length===0&&_.delete(G)}s.remove(L)}function U(L){const x=s.get(L);i.deleteTexture(x.__webglTexture);const G=L.source,Q=_.get(G);delete Q[x.__cacheKey],c.memory.textures--}function w(L){const x=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let lt=0;lt<x.__webglFramebuffer[Q].length;lt++)i.deleteFramebuffer(x.__webglFramebuffer[Q][lt]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=L.textures;for(let Q=0,lt=G.length;Q<lt;Q++){const it=s.get(G[Q]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),c.memory.textures--),s.remove(G[Q])}s.remove(L)}let H=0;function nt(){H=0}function ft(){const L=H;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),H+=1,L}function ht(L){const x=[];return x.push(L.wrapS),x.push(L.wrapT),x.push(L.wrapR||0),x.push(L.magFilter),x.push(L.minFilter),x.push(L.anisotropy),x.push(L.internalFormat),x.push(L.format),x.push(L.type),x.push(L.generateMipmaps),x.push(L.premultiplyAlpha),x.push(L.flipY),x.push(L.unpackAlignment),x.push(L.colorSpace),x.join()}function ct(L,x){const G=s.get(L);if(L.isVideoTexture&&oe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const Q=L.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(G,L,x);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function B(L,x){const G=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){et(G,L,x);return}n.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function Y(L,x){const G=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){et(G,L,x);return}n.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function W(L,x){const G=s.get(L);if(L.version>0&&G.__version!==L.version){mt(G,L,x);return}n.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const gt={[op]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[lp]:i.MIRRORED_REPEAT},N={[li]:i.NEAREST,[Bb]:i.NEAREST_MIPMAP_NEAREST,[ju]:i.NEAREST_MIPMAP_LINEAR,[Kn]:i.LINEAR,[nd]:i.LINEAR_MIPMAP_NEAREST,[zs]:i.LINEAR_MIPMAP_LINEAR},$={[Hb]:i.NEVER,[Yb]:i.ALWAYS,[Gb]:i.LESS,[Qx]:i.LEQUAL,[kb]:i.EQUAL,[qb]:i.GEQUAL,[Xb]:i.GREATER,[Wb]:i.NOTEQUAL};function yt(L,x){if(x.type===Xi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Kn||x.magFilter===nd||x.magFilter===ju||x.magFilter===zs||x.minFilter===Kn||x.minFilter===nd||x.minFilter===ju||x.minFilter===zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,gt[x.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,gt[x.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,gt[x.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,N[x.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,N[x.minFilter]),x.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,$[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===li||x.minFilter!==ju&&x.minFilter!==zs||x.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||s.get(x).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,o.getMaxAnisotropy())),s.get(x).__currentAnisotropy=x.anisotropy}}}function xt(L,x){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,x.addEventListener("dispose",F));const Q=x.source;let lt=_.get(Q);lt===void 0&&(lt={},_.set(Q,lt));const it=ht(x);if(it!==L.__cacheKey){lt[it]===void 0&&(lt[it]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,G=!0),lt[it].usedTimes++;const Rt=lt[L.__cacheKey];Rt!==void 0&&(lt[L.__cacheKey].usedTimes--,Rt.usedTimes===0&&U(x)),L.__cacheKey=it,L.__webglTexture=lt[it].texture}return G}function Dt(L,x,G){return Math.floor(Math.floor(L/G)/x)}function zt(L,x,G,Q){const it=L.updateRanges;if(it.length===0)n.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,G,Q,x.data);else{it.sort((Mt,Lt)=>Mt.start-Lt.start);let Rt=0;for(let Mt=1;Mt<it.length;Mt++){const Lt=it[Rt],Zt=it[Mt],Xt=Lt.start+Lt.count,wt=Dt(Zt.start,x.width,4),le=Dt(Lt.start,x.width,4);Zt.start<=Xt+1&&wt===le&&Dt(Zt.start+Zt.count-1,x.width,4)===wt?Lt.count=Math.max(Lt.count,Zt.start+Zt.count-Lt.start):(++Rt,it[Rt]=Zt)}it.length=Rt+1;const At=i.getParameter(i.UNPACK_ROW_LENGTH),Ft=i.getParameter(i.UNPACK_SKIP_PIXELS),Gt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Mt=0,Lt=it.length;Mt<Lt;Mt++){const Zt=it[Mt],Xt=Math.floor(Zt.start/4),wt=Math.ceil(Zt.count/4),le=Xt%x.width,q=Math.floor(Xt/x.width),bt=wt,Ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,le),i.pixelStorei(i.UNPACK_SKIP_ROWS,q),n.texSubImage2D(i.TEXTURE_2D,0,le,q,bt,Ct,G,Q,x.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,At),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),i.pixelStorei(i.UNPACK_SKIP_ROWS,Gt)}}function et(L,x,G){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);const lt=xt(L,x),it=x.source;n.bindTexture(Q,L.__webglTexture,i.TEXTURE0+G);const Rt=s.get(it);if(it.version!==Rt.__version||lt===!0){n.activeTexture(i.TEXTURE0+G);const At=Ce.getPrimaries(Ce.workingColorSpace),Ft=x.colorSpace===ns?null:Ce.getPrimaries(x.colorSpace),Gt=x.colorSpace===ns||At===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Mt=b(x.image,!1,o.maxTextureSize);Mt=Ge(x,Mt);const Lt=u.convert(x.format,x.colorSpace),Zt=u.convert(x.type);let Xt=D(x.internalFormat,Lt,Zt,x.colorSpace,x.isVideoTexture);yt(Q,x);let wt;const le=x.mipmaps,q=x.isVideoTexture!==!0,bt=Rt.__version===void 0||lt===!0,Ct=it.dataReady,Bt=P(x,Mt);if(x.isDepthTexture)Xt=C(x.format===Ml,x.type),bt&&(q?n.texStorage2D(i.TEXTURE_2D,1,Xt,Mt.width,Mt.height):n.texImage2D(i.TEXTURE_2D,0,Xt,Mt.width,Mt.height,0,Lt,Zt,null));else if(x.isDataTexture)if(le.length>0){q&&bt&&n.texStorage2D(i.TEXTURE_2D,Bt,Xt,le[0].width,le[0].height);for(let Et=0,_t=le.length;Et<_t;Et++)wt=le[Et],q?Ct&&n.texSubImage2D(i.TEXTURE_2D,Et,0,0,wt.width,wt.height,Lt,Zt,wt.data):n.texImage2D(i.TEXTURE_2D,Et,Xt,wt.width,wt.height,0,Lt,Zt,wt.data);x.generateMipmaps=!1}else q?(bt&&n.texStorage2D(i.TEXTURE_2D,Bt,Xt,Mt.width,Mt.height),Ct&&zt(x,Mt,Lt,Zt)):n.texImage2D(i.TEXTURE_2D,0,Xt,Mt.width,Mt.height,0,Lt,Zt,Mt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){q&&bt&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,Xt,le[0].width,le[0].height,Mt.depth);for(let Et=0,_t=le.length;Et<_t;Et++)if(wt=le[Et],x.format!==xi)if(Lt!==null)if(q){if(Ct)if(x.layerUpdates.size>0){const kt=ay(wt.width,wt.height,x.format,x.type);for(const se of x.layerUpdates){const Le=wt.data.subarray(se*kt/wt.data.BYTES_PER_ELEMENT,(se+1)*kt/wt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,se,wt.width,wt.height,1,Lt,Le)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,wt.width,wt.height,Mt.depth,Lt,wt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Et,Xt,wt.width,wt.height,Mt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ct&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,wt.width,wt.height,Mt.depth,Lt,Zt,wt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,Et,Xt,wt.width,wt.height,Mt.depth,0,Lt,Zt,wt.data)}else{q&&bt&&n.texStorage2D(i.TEXTURE_2D,Bt,Xt,le[0].width,le[0].height);for(let Et=0,_t=le.length;Et<_t;Et++)wt=le[Et],x.format!==xi?Lt!==null?q?Ct&&n.compressedTexSubImage2D(i.TEXTURE_2D,Et,0,0,wt.width,wt.height,Lt,wt.data):n.compressedTexImage2D(i.TEXTURE_2D,Et,Xt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ct&&n.texSubImage2D(i.TEXTURE_2D,Et,0,0,wt.width,wt.height,Lt,Zt,wt.data):n.texImage2D(i.TEXTURE_2D,Et,Xt,wt.width,wt.height,0,Lt,Zt,wt.data)}else if(x.isDataArrayTexture)if(q){if(bt&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,Xt,Mt.width,Mt.height,Mt.depth),Ct)if(x.layerUpdates.size>0){const Et=ay(Mt.width,Mt.height,x.format,x.type);for(const _t of x.layerUpdates){const kt=Mt.data.subarray(_t*Et/Mt.data.BYTES_PER_ELEMENT,(_t+1)*Et/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Lt,Zt,kt)}x.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Zt,Mt.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,Mt.width,Mt.height,Mt.depth,0,Lt,Zt,Mt.data);else if(x.isData3DTexture)q?(bt&&n.texStorage3D(i.TEXTURE_3D,Bt,Xt,Mt.width,Mt.height,Mt.depth),Ct&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Zt,Mt.data)):n.texImage3D(i.TEXTURE_3D,0,Xt,Mt.width,Mt.height,Mt.depth,0,Lt,Zt,Mt.data);else if(x.isFramebufferTexture){if(bt)if(q)n.texStorage2D(i.TEXTURE_2D,Bt,Xt,Mt.width,Mt.height);else{let Et=Mt.width,_t=Mt.height;for(let kt=0;kt<Bt;kt++)n.texImage2D(i.TEXTURE_2D,kt,Xt,Et,_t,0,Lt,Zt,null),Et>>=1,_t>>=1}}else if(le.length>0){if(q&&bt){const Et=ke(le[0]);n.texStorage2D(i.TEXTURE_2D,Bt,Xt,Et.width,Et.height)}for(let Et=0,_t=le.length;Et<_t;Et++)wt=le[Et],q?Ct&&n.texSubImage2D(i.TEXTURE_2D,Et,0,0,Lt,Zt,wt):n.texImage2D(i.TEXTURE_2D,Et,Xt,Lt,Zt,wt);x.generateMipmaps=!1}else if(q){if(bt){const Et=ke(Mt);n.texStorage2D(i.TEXTURE_2D,Bt,Xt,Et.width,Et.height)}Ct&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Zt,Mt)}else n.texImage2D(i.TEXTURE_2D,0,Xt,Lt,Zt,Mt);M(x)&&y(Q),Rt.__version=it.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function mt(L,x,G){if(x.image.length!==6)return;const Q=xt(L,x),lt=x.source;n.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+G);const it=s.get(lt);if(lt.version!==it.__version||Q===!0){n.activeTexture(i.TEXTURE0+G);const Rt=Ce.getPrimaries(Ce.workingColorSpace),At=x.colorSpace===ns?null:Ce.getPrimaries(x.colorSpace),Ft=x.colorSpace===ns||Rt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,Mt=x.image[0]&&x.image[0].isDataTexture,Lt=[];for(let _t=0;_t<6;_t++)!Gt&&!Mt?Lt[_t]=b(x.image[_t],!0,o.maxCubemapSize):Lt[_t]=Mt?x.image[_t].image:x.image[_t],Lt[_t]=Ge(x,Lt[_t]);const Zt=Lt[0],Xt=u.convert(x.format,x.colorSpace),wt=u.convert(x.type),le=D(x.internalFormat,Xt,wt,x.colorSpace),q=x.isVideoTexture!==!0,bt=it.__version===void 0||Q===!0,Ct=lt.dataReady;let Bt=P(x,Zt);yt(i.TEXTURE_CUBE_MAP,x);let Et;if(Gt){q&&bt&&n.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,le,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){Et=Lt[_t].mipmaps;for(let kt=0;kt<Et.length;kt++){const se=Et[kt];x.format!==xi?Xt!==null?q?Ct&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,0,0,se.width,se.height,Xt,se.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,le,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ct&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,0,0,se.width,se.height,Xt,wt,se.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,le,se.width,se.height,0,Xt,wt,se.data)}}}else{if(Et=x.mipmaps,q&&bt){Et.length>0&&Bt++;const _t=ke(Lt[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){q?Ct&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt[_t].width,Lt[_t].height,Xt,wt,Lt[_t].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Lt[_t].width,Lt[_t].height,0,Xt,wt,Lt[_t].data);for(let kt=0;kt<Et.length;kt++){const Le=Et[kt].image[_t].image;q?Ct&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,0,0,Le.width,Le.height,Xt,wt,Le.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,le,Le.width,Le.height,0,Xt,wt,Le.data)}}else{q?Ct&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,wt,Lt[_t]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Xt,wt,Lt[_t]);for(let kt=0;kt<Et.length;kt++){const se=Et[kt];q?Ct&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,0,0,Xt,wt,se.image[_t]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,le,Xt,wt,se.image[_t])}}}M(x)&&y(i.TEXTURE_CUBE_MAP),it.__version=lt.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function St(L,x,G,Q,lt,it){const Rt=u.convert(G.format,G.colorSpace),At=u.convert(G.type),Ft=D(G.internalFormat,Rt,At,G.colorSpace),Gt=s.get(x),Mt=s.get(G);if(Mt.__renderTarget=x,!Gt.__hasExternalTextures){const Lt=Math.max(1,x.width>>it),Zt=Math.max(1,x.height>>it);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?n.texImage3D(lt,it,Ft,Lt,Zt,x.depth,0,Rt,At,null):n.texImage2D(lt,it,Ft,Lt,Zt,0,Rt,At,null)}n.bindFramebuffer(i.FRAMEBUFFER,L),Vt(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,lt,Mt.__webglTexture,0,Me(x)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,lt,Mt.__webglTexture,it),n.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(L,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,L),x.depthBuffer){const Q=x.depthTexture,lt=Q&&Q.isDepthTexture?Q.type:null,it=C(x.stencilBuffer,lt),Rt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=Me(x);Vt(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,it,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,it,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,it,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,L)}else{const Q=x.textures;for(let lt=0;lt<Q.length;lt++){const it=Q[lt],Rt=u.convert(it.format,it.colorSpace),At=u.convert(it.type),Ft=D(it.internalFormat,Rt,At,it.colorSpace),Gt=Me(x);G&&Vt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Ft,x.width,x.height):Vt(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,Ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Wt(L,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(i.FRAMEBUFFER,L),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=s.get(x.depthTexture);Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ct(x.depthTexture,0);const lt=Q.__webglTexture,it=Me(x);if(x.depthTexture.format===Sl)Vt(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(x.depthTexture.format===Ml)Vt(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function ce(L){const x=s.get(L),G=L.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==L.depthTexture){const Q=L.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){const lt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",lt)};Q.addEventListener("dispose",lt),x.__depthDisposeCallback=lt}x.__boundDepthTexture=Q}if(L.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Q=L.texture.mipmaps;Q&&Q.length>0?Wt(x.__webglFramebuffer[0],L):Wt(x.__webglFramebuffer,L)}else if(G){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=i.createRenderbuffer(),Kt(x.__webglDepthbuffer[Q],L,!1);else{const lt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,it)}}else{const Q=L.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Kt(x.__webglDepthbuffer,L,!1);else{const lt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,it)}}n.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(L,x,G){const Q=s.get(L);x!==void 0&&St(Q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ce(L)}function V(L){const x=L.texture,G=s.get(L),Q=s.get(x);L.addEventListener("dispose",z);const lt=L.textures,it=L.isWebGLCubeRenderTarget===!0,Rt=lt.length>1;if(Rt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,c.memory.textures++),it){G.__webglFramebuffer=[];for(let At=0;At<6;At++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[At]=[];for(let Ft=0;Ft<x.mipmaps.length;Ft++)G.__webglFramebuffer[At][Ft]=i.createFramebuffer()}else G.__webglFramebuffer[At]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let At=0;At<x.mipmaps.length;At++)G.__webglFramebuffer[At]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let At=0,Ft=lt.length;At<Ft;At++){const Gt=s.get(lt[At]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),c.memory.textures++)}if(L.samples>0&&Vt(L)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let At=0;At<lt.length;At++){const Ft=lt[At];G.__webglColorRenderbuffer[At]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[At]);const Gt=u.convert(Ft.format,Ft.colorSpace),Mt=u.convert(Ft.type),Lt=D(Ft.internalFormat,Gt,Mt,Ft.colorSpace,L.isXRRenderTarget===!0),Zt=Me(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,Lt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,G.__webglColorRenderbuffer[At])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Kt(G.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){n.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),yt(i.TEXTURE_CUBE_MAP,x);for(let At=0;At<6;At++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ft=0;Ft<x.mipmaps.length;Ft++)St(G.__webglFramebuffer[At][Ft],L,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ft);else St(G.__webglFramebuffer[At],L,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(x)&&y(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Rt){for(let At=0,Ft=lt.length;At<Ft;At++){const Gt=lt[At],Mt=s.get(Gt);let Lt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Lt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Lt,Mt.__webglTexture),yt(Lt,Gt),St(G.__webglFramebuffer,L,Gt,i.COLOR_ATTACHMENT0+At,Lt,0),M(Gt)&&y(Lt)}n.unbindTexture()}else{let At=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(At,Q.__webglTexture),yt(At,x),x.mipmaps&&x.mipmaps.length>0)for(let Ft=0;Ft<x.mipmaps.length;Ft++)St(G.__webglFramebuffer[Ft],L,x,i.COLOR_ATTACHMENT0,At,Ft);else St(G.__webglFramebuffer,L,x,i.COLOR_ATTACHMENT0,At,0);M(x)&&y(At),n.unbindTexture()}L.depthBuffer&&ce(L)}function Ue(L){const x=L.textures;for(let G=0,Q=x.length;G<Q;G++){const lt=x[G];if(M(lt)){const it=O(L),Rt=s.get(lt).__webglTexture;n.bindTexture(it,Rt),y(it),n.unbindTexture()}}}const re=[],$t=[];function Ot(L){if(L.samples>0){if(Vt(L)===!1){const x=L.textures,G=L.width,Q=L.height;let lt=i.COLOR_BUFFER_BIT;const it=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=s.get(L),At=x.length>1;if(At)for(let Gt=0;Gt<x.length;Gt++)n.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const Ft=L.texture.mipmaps;Ft&&Ft.length>0?n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Gt=0;Gt<x.length;Gt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),At){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Gt]);const Mt=s.get(x[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Mt,0)}i.blitFramebuffer(0,0,G,Q,0,0,G,Q,lt,i.NEAREST),p===!0&&(re.length=0,$t.length=0,re.push(i.COLOR_ATTACHMENT0+Gt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(re.push(it),$t.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),At)for(let Gt=0;Gt<x.length;Gt++){n.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Gt]);const Mt=s.get(x[Gt]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,Mt,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const x=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Me(L){return Math.min(o.maxSamples,L.samples)}function Vt(L){const x=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function oe(L){const x=c.render.frame;g.get(L)!==x&&(g.set(L,x),L.update())}function Ge(L,x){const G=L.colorSpace,Q=L.format,lt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==$r&&G!==ns&&(Ce.getTransfer(G)===ze?(Q!==xi||lt!==ya)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=ft,this.resetTextureUnits=nt,this.setTexture2D=ct,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Qe,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Vt}function o2(i,t){function n(s,o=ns){let u;const c=Ce.getTransfer(o);if(s===ya)return i.UNSIGNED_BYTE;if(s===um)return i.UNSIGNED_SHORT_4_4_4_4;if(s===cm)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Wx)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===qx)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===kx)return i.BYTE;if(s===Xx)return i.SHORT;if(s===yl)return i.UNSIGNED_SHORT;if(s===lm)return i.INT;if(s===Ws)return i.UNSIGNED_INT;if(s===Xi)return i.FLOAT;if(s===io)return i.HALF_FLOAT;if(s===Yx)return i.ALPHA;if(s===jx)return i.RGB;if(s===xi)return i.RGBA;if(s===Sl)return i.DEPTH_COMPONENT;if(s===Ml)return i.DEPTH_STENCIL;if(s===Kx)return i.RED;if(s===fm)return i.RED_INTEGER;if(s===Zx)return i.RG;if(s===hm)return i.RG_INTEGER;if(s===dm)return i.RGBA_INTEGER;if(s===Mc||s===Ec||s===Tc||s===bc)if(c===ze)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Mc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Mc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===up||s===cp||s===fp||s===hp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===up)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dp||s===pp||s===mp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===dp||s===pp)return c===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===mp)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gp||s===vp||s===_p||s===yp||s===xp||s===Sp||s===Mp||s===Ep||s===Tp||s===bp||s===Ap||s===Rp||s===Cp||s===wp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===gp)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vp)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_p)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yp)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xp)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sp)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mp)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ep)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tp)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bp)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ap)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rp)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cp)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wp)return c===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dp||s===Up||s===Lp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Dp)return c===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Up)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Lp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Np||s===Pp||s===Op||s===Bp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Np)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Pp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Op)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xl?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:n}}const l2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u2=`
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

}`;class c2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new cS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Sa({vertexShader:l2,fragmentShader:u2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new Gs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f2 extends ao{constructor(t,n){super();const s=this;let o=null,u=1,c=null,h="local-floor",p=1,d=null,g=null,v=null,_=null,S=null,T=null;const b=typeof XRWebGLBinding<"u",M=new c2,y={},O=n.getContextAttributes();let D=null,C=null;const P=[],F=[],z=new ue;let k=null;const U=new Li;U.viewport=new an;const w=new Li;w.viewport=new an;const H=[U,w],nt=new UA;let ft=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let mt=P[et];return mt===void 0&&(mt=new bd,P[et]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(et){let mt=P[et];return mt===void 0&&(mt=new bd,P[et]=mt),mt.getGripSpace()},this.getHand=function(et){let mt=P[et];return mt===void 0&&(mt=new bd,P[et]=mt),mt.getHandSpace()};function ct(et){const mt=F.indexOf(et.inputSource);if(mt===-1)return;const St=P[mt];St!==void 0&&(St.update(et.inputSource,et.frame,d||c),St.dispatchEvent({type:et.type,data:et.inputSource}))}function B(){o.removeEventListener("select",ct),o.removeEventListener("selectstart",ct),o.removeEventListener("selectend",ct),o.removeEventListener("squeeze",ct),o.removeEventListener("squeezestart",ct),o.removeEventListener("squeezeend",ct),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",Y);for(let et=0;et<P.length;et++){const mt=F[et];mt!==null&&(F[et]=null,P[et].disconnect(mt))}ft=null,ht=null,M.reset();for(const et in y)delete y[et];t.setRenderTarget(D),S=null,_=null,v=null,o=null,C=null,zt.stop(),s.isPresenting=!1,t.setPixelRatio(k),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(et){d=et},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(et){if(o=et,o!==null){if(D=t.getRenderTarget(),o.addEventListener("select",ct),o.addEventListener("selectstart",ct),o.addEventListener("selectend",ct),o.addEventListener("squeeze",ct),o.addEventListener("squeezestart",ct),o.addEventListener("squeezeend",ct),o.addEventListener("end",B),o.addEventListener("inputsourceschange",Y),O.xrCompatible!==!0&&await n.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(z),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Kt=null,Wt=null;O.depth&&(Wt=O.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,St=O.stencil?Ml:Sl,Kt=O.stencil?xl:Ws);const ce={colorFormat:n.RGBA8,depthFormat:Wt,scaleFactor:u};v=this.getBinding(),_=v.createProjectionLayer(ce),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new rs(_.textureWidth,_.textureHeight,{format:xi,type:ya,depthTexture:new uS(_.textureWidth,_.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const St={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(o,n,St),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new rs(S.framebufferWidth,S.framebufferHeight,{format:xi,type:ya,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await o.requestReferenceSpace(h),zt.setContext(o),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Y(et){for(let mt=0;mt<et.removed.length;mt++){const St=et.removed[mt],Kt=F.indexOf(St);Kt>=0&&(F[Kt]=null,P[Kt].disconnect(St))}for(let mt=0;mt<et.added.length;mt++){const St=et.added[mt];let Kt=F.indexOf(St);if(Kt===-1){for(let ce=0;ce<P.length;ce++)if(ce>=F.length){F.push(St),Kt=ce;break}else if(F[ce]===null){F[ce]=St,Kt=ce;break}if(Kt===-1)break}const Wt=P[Kt];Wt&&Wt.connect(St)}}const W=new rt,gt=new rt;function N(et,mt,St){W.setFromMatrixPosition(mt.matrixWorld),gt.setFromMatrixPosition(St.matrixWorld);const Kt=W.distanceTo(gt),Wt=mt.projectionMatrix.elements,ce=St.projectionMatrix.elements,Qe=Wt[14]/(Wt[10]-1),V=Wt[14]/(Wt[10]+1),Ue=(Wt[9]+1)/Wt[5],re=(Wt[9]-1)/Wt[5],$t=(Wt[8]-1)/Wt[0],Ot=(ce[8]+1)/ce[0],Me=Qe*$t,Vt=Qe*Ot,oe=Kt/(-$t+Ot),Ge=oe*-$t;if(mt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ge),et.translateZ(oe),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Wt[10]===-1)et.projectionMatrix.copy(mt.projectionMatrix),et.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const ke=Qe+oe,L=V+oe,x=Me-Ge,G=Vt+(Kt-Ge),Q=Ue*V/L*ke,lt=re*V/L*ke;et.projectionMatrix.makePerspective(x,G,Q,lt,ke,L),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function $(et,mt){mt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(mt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(o===null)return;let mt=et.near,St=et.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(St=M.depthFar)),nt.near=w.near=U.near=mt,nt.far=w.far=U.far=St,(ft!==nt.near||ht!==nt.far)&&(o.updateRenderState({depthNear:nt.near,depthFar:nt.far}),ft=nt.near,ht=nt.far),nt.layers.mask=et.layers.mask|6,U.layers.mask=nt.layers.mask&3,w.layers.mask=nt.layers.mask&5;const Kt=et.parent,Wt=nt.cameras;$(nt,Kt);for(let ce=0;ce<Wt.length;ce++)$(Wt[ce],Kt);Wt.length===2?N(nt,U,w):nt.projectionMatrix.copy(U.projectionMatrix),yt(et,nt,Kt)};function yt(et,mt,St){St===null?et.matrix.copy(mt.matrixWorld):(et.matrix.copy(St.matrixWorld),et.matrix.invert(),et.matrix.multiply(mt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(mt.projectionMatrix),et.projectionMatrixInverse.copy(mt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Fp*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(et){p=et,_!==null&&(_.fixedFoveation=et),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(nt)},this.getCameraTexture=function(et){return y[et]};let xt=null;function Dt(et,mt){if(g=mt.getViewerPose(d||c),T=mt,g!==null){const St=g.views;S!==null&&(t.setRenderTargetFramebuffer(C,S.framebuffer),t.setRenderTarget(C));let Kt=!1;St.length!==nt.cameras.length&&(nt.cameras.length=0,Kt=!0);for(let V=0;V<St.length;V++){const Ue=St[V];let re=null;if(S!==null)re=S.getViewport(Ue);else{const Ot=v.getViewSubImage(_,Ue);re=Ot.viewport,V===0&&(t.setRenderTargetTextures(C,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(C))}let $t=H[V];$t===void 0&&($t=new Li,$t.layers.enable(V),$t.viewport=new an,H[V]=$t),$t.matrix.fromArray(Ue.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ue.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(re.x,re.y,re.width,re.height),V===0&&(nt.matrix.copy($t.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Kt===!0&&nt.cameras.push($t)}const Wt=o.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){v=s.getBinding();const V=v.getDepthInformation(St[0]);V&&V.isValid&&V.texture&&M.init(V,o.renderState)}if(Wt&&Wt.includes("camera-access")&&b){t.state.unbindTexture(),v=s.getBinding();for(let V=0;V<St.length;V++){const Ue=St[V].camera;if(Ue){let re=y[Ue];re||(re=new cS,y[Ue]=re);const $t=v.getCameraImage(Ue);re.sourceTexture=$t}}}}for(let St=0;St<P.length;St++){const Kt=F[St],Wt=P[St];Kt!==null&&Wt!==void 0&&Wt.update(Kt,mt,d||c)}xt&&xt(et,mt),mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:mt}),T=null}const zt=new fS;zt.setAnimationLoop(Dt),this.setAnimationLoop=function(et){xt=et},this.dispose=function(){}}}const Ls=new xa,h2=new dn;function d2(i,t){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,rS(i)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,O,D,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?u(M,y):y.isMeshToonMaterial?(u(M,y),v(M,y)):y.isMeshPhongMaterial?(u(M,y),g(M,y)):y.isMeshStandardMaterial?(u(M,y),_(M,y),y.isMeshPhysicalMaterial&&S(M,y,C)):y.isMeshMatcapMaterial?(u(M,y),T(M,y)):y.isMeshDepthMaterial?u(M,y):y.isMeshDistanceMaterial?(u(M,y),b(M,y)):y.isMeshNormalMaterial?u(M,y):y.isLineBasicMaterial?(c(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?p(M,y,O,D):y.isSpriteMaterial?d(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Qn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Qn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const O=t.get(y),D=O.envMap,C=O.envMapRotation;D&&(M.envMap.value=D,Ls.copy(C),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),M.envMapRotation.value.setFromMatrix4(h2.makeRotationFromEuler(Ls)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function c(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,O,D){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*O,M.scale.value=D*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,O){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Qn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function b(M,y){const O=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function p2(i,t,n,s){let o={},u={},c=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,D){const C=D.program;s.uniformBlockBinding(O,C)}function d(O,D){let C=o[O.id];C===void 0&&(T(O),C=g(O),o[O.id]=C,O.addEventListener("dispose",M));const P=D.program;s.updateUBOMapping(O,P);const F=t.render.frame;u[O.id]!==F&&(_(O),u[O.id]=F)}function g(O){const D=v();O.__bindingPointIndex=D;const C=i.createBuffer(),P=O.__size,F=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,P,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,C),C}function v(){for(let O=0;O<h;O++)if(c.indexOf(O)===-1)return c.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const D=o[O.id],C=O.uniforms,P=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let F=0,z=C.length;F<z;F++){const k=Array.isArray(C[F])?C[F]:[C[F]];for(let U=0,w=k.length;U<w;U++){const H=k[U];if(S(H,F,U,P)===!0){const nt=H.__offset,ft=Array.isArray(H.value)?H.value:[H.value];let ht=0;for(let ct=0;ct<ft.length;ct++){const B=ft[ct],Y=b(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,nt+ht,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,ht),ht+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,nt,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(O,D,C,P){const F=O.value,z=D+"_"+C;if(P[z]===void 0)return typeof F=="number"||typeof F=="boolean"?P[z]=F:P[z]=F.clone(),!0;{const k=P[z];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return P[z]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function T(O){const D=O.uniforms;let C=0;const P=16;for(let z=0,k=D.length;z<k;z++){const U=Array.isArray(D[z])?D[z]:[D[z]];for(let w=0,H=U.length;w<H;w++){const nt=U[w],ft=Array.isArray(nt.value)?nt.value:[nt.value];for(let ht=0,ct=ft.length;ht<ct;ht++){const B=ft[ht],Y=b(B),W=C%P,gt=W%Y.boundary,N=W+gt;C+=gt,N!==0&&P-N<Y.storage&&(C+=P-N),nt.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=C,C+=Y.storage}}}const F=C%P;return F>0&&(C+=P-F),O.__size=C,O.__cache={},this}function b(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function M(O){const D=O.target;D.removeEventListener("dispose",M);const C=c.indexOf(D.__bindingPointIndex);c.splice(C,1),i.deleteBuffer(o[D.id]),delete o[D.id],delete u[D.id]}function y(){for(const O in o)i.deleteBuffer(o[O]);c=[],o={},u={}}return{bind:p,update:d,dispose:y}}class m2{constructor(t={}){const{canvas:n=Kb(),context:s=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),b=new Int32Array(4);let M=null,y=null;const O=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=as,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1;this._outputColorSpace=yi;let F=0,z=0,k=null,U=-1,w=null;const H=new an,nt=new an;let ft=null;const ht=new De(0);let ct=0,B=n.width,Y=n.height,W=1,gt=null,N=null;const $=new an(0,0,B,Y),yt=new an(0,0,B,Y);let xt=!1;const Dt=new lS;let zt=!1,et=!1;const mt=new dn,St=new rt,Kt=new an,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Qe(){return k===null?W:1}let V=s;function Ue(R,j){return n.getContext(R,j)}try{const R={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${om}`),n.addEventListener("webglcontextlost",Ct,!1),n.addEventListener("webglcontextrestored",Bt,!1),n.addEventListener("webglcontextcreationerror",Et,!1),V===null){const j="webgl2";if(V=Ue(j,R),V===null)throw Ue(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let re,$t,Ot,Me,Vt,oe,Ge,ke,L,x,G,Q,lt,it,Rt,At,Ft,Gt,Mt,Lt,Zt,Xt,wt,le;function q(){re=new bC(V),re.init(),Xt=new o2(V,re),$t=new _C(V,re,t,Xt),Ot=new s2(V,re),$t.reversedDepthBuffer&&_&&Ot.buffers.depth.setReversed(!0),Me=new CC(V),Vt=new qw,oe=new r2(V,re,Ot,Vt,$t,Xt,Me),Ge=new xC(C),ke=new TC(C),L=new PA(V),wt=new gC(V,L),x=new AC(V,L,Me,wt),G=new DC(V,x,L,Me),Mt=new wC(V,$t,oe),At=new yC(Vt),Q=new Ww(C,Ge,ke,re,$t,wt,At),lt=new d2(C,Vt),it=new jw,Rt=new t2(re),Gt=new mC(C,Ge,ke,Ot,G,S,p),Ft=new i2(C,G,$t),le=new p2(V,Me,$t,Ot),Lt=new vC(V,re,Me),Zt=new RC(V,re,Me),Me.programs=Q.programs,C.capabilities=$t,C.extensions=re,C.properties=Vt,C.renderLists=it,C.shadowMap=Ft,C.state=Ot,C.info=Me}q();const bt=new f2(C,V);this.xr=bt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(B,Y,!1))},this.getSize=function(R){return R.set(B,Y)},this.setSize=function(R,j,ot=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Y=j,n.width=Math.floor(R*W),n.height=Math.floor(j*W),ot===!0&&(n.style.width=R+"px",n.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(B*W,Y*W).floor()},this.setDrawingBufferSize=function(R,j,ot){B=R,Y=j,W=ot,n.width=Math.floor(R*ot),n.height=Math.floor(j*ot),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,j,ot,ut){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,j,ot,ut),Ot.viewport(H.copy($).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,j,ot,ut){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,j,ot,ut),Ot.scissor(nt.copy(yt).multiplyScalar(W).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){Ot.setScissorTest(xt=R)},this.setOpaqueSort=function(R){gt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,ot=!0){let ut=0;if(R){let Z=!1;if(k!==null){const Tt=k.texture.format;Z=Tt===dm||Tt===hm||Tt===fm}if(Z){const Tt=k.texture.type,Ut=Tt===ya||Tt===Ws||Tt===yl||Tt===xl||Tt===um||Tt===cm,It=Gt.getClearColor(),Nt=Gt.getClearAlpha(),Jt=It.r,ee=It.g,qt=It.b;Ut?(T[0]=Jt,T[1]=ee,T[2]=qt,T[3]=Nt,V.clearBufferuiv(V.COLOR,0,T)):(b[0]=Jt,b[1]=ee,b[2]=qt,b[3]=Nt,V.clearBufferiv(V.COLOR,0,b))}else ut|=V.COLOR_BUFFER_BIT}j&&(ut|=V.DEPTH_BUFFER_BIT),ot&&(ut|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ct,!1),n.removeEventListener("webglcontextrestored",Bt,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),Gt.dispose(),it.dispose(),Rt.dispose(),Vt.dispose(),Ge.dispose(),ke.dispose(),G.dispose(),wt.dispose(),le.dispose(),Q.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",pn),bt.removeEventListener("sessionend",mn),Je.stop()};function Ct(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=Me.autoReset,j=Ft.enabled,ot=Ft.autoUpdate,ut=Ft.needsUpdate,Z=Ft.type;q(),Me.autoReset=R,Ft.enabled=j,Ft.autoUpdate=ot,Ft.needsUpdate=ut,Ft.type=Z}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const j=R.target;j.removeEventListener("dispose",_t),kt(j)}function kt(R){se(R),Vt.remove(R)}function se(R){const j=Vt.get(R).programs;j!==void 0&&(j.forEach(function(ot){Q.releaseProgram(ot)}),R.isShaderMaterial&&Q.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ot,ut,Z,Tt){j===null&&(j=Wt);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,It=ba(R,j,ot,ut,Z);Ot.setMaterial(ut,Ut);let Nt=ot.index,Jt=1;if(ut.wireframe===!0){if(Nt=x.getWireframeAttribute(ot),Nt===void 0)return;Jt=2}const ee=ot.drawRange,qt=ot.attributes.position;let de=ee.start*Jt,be=(ee.start+ee.count)*Jt;Tt!==null&&(de=Math.max(de,Tt.start*Jt),be=Math.min(be,(Tt.start+Tt.count)*Jt)),Nt!==null?(de=Math.max(de,0),be=Math.min(be,Nt.count)):qt!=null&&(de=Math.max(de,0),be=Math.min(be,qt.count));const qe=be-de;if(qe<0||qe===1/0)return;wt.setup(Z,ut,It,ot,Nt);let Oe,pe=Lt;if(Nt!==null&&(Oe=L.get(Nt),pe=Zt,pe.setIndex(Oe)),Z.isMesh)ut.wireframe===!0?(Ot.setLineWidth(ut.wireframeLinewidth*Qe()),pe.setMode(V.LINES)):pe.setMode(V.TRIANGLES);else if(Z.isLine){let Qt=ut.linewidth;Qt===void 0&&(Qt=1),Ot.setLineWidth(Qt*Qe()),Z.isLineSegments?pe.setMode(V.LINES):Z.isLineLoop?pe.setMode(V.LINE_LOOP):pe.setMode(V.LINE_STRIP)}else Z.isPoints?pe.setMode(V.POINTS):Z.isSprite&&pe.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)El("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))pe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qt=Z._multiDrawStarts,We=Z._multiDrawCounts,_e=Z._multiDrawCount,Dn=Nt?L.get(Nt).bytesPerElement:1,Ti=Vt.get(ut).currentProgram.getUniforms();for(let Fn=0;Fn<_e;Fn++)Ti.setValue(V,"_gl_DrawID",Fn),pe.render(Qt[Fn]/Dn,We[Fn])}else if(Z.isInstancedMesh)pe.renderInstances(de,qe,Z.count);else if(ot.isInstancedBufferGeometry){const Qt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,We=Math.min(ot.instanceCount,Qt);pe.renderInstances(de,qe,We)}else pe.render(de,qe)};function Le(R,j,ot){R.transparent===!0&&R.side===ga&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,Fi(R,j,ot),R.side=ss,R.needsUpdate=!0,Fi(R,j,ot),R.side=ga):Fi(R,j,ot)}this.compile=function(R,j,ot=null){ot===null&&(ot=R),y=Rt.get(ot),y.init(j),D.push(y),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),R!==ot&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),y.setupLights();const ut=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const It=Tt[Ut];Le(It,ot,Z),ut.add(It)}else Le(Tt,ot,Z),ut.add(Tt)}),y=D.pop(),ut},this.compileAsync=function(R,j,ot=null){const ut=this.compile(R,j,ot);return new Promise(Z=>{function Tt(){if(ut.forEach(function(Ut){Vt.get(Ut).currentProgram.isReady()&&ut.delete(Ut)}),ut.size===0){Z(R);return}setTimeout(Tt,10)}re.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Te=null;function Ei(R){Te&&Te(R)}function pn(){Je.stop()}function mn(){Je.start()}const Je=new fS;Je.setAnimationLoop(Ei),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(R){Te=R,bt.setAnimationLoop(R),R===null?Je.stop():Je.start()},bt.addEventListener("sessionstart",pn),bt.addEventListener("sessionend",mn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(j),j=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,j,k),y=Rt.get(R,D.length),y.init(j),D.push(y),mt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Dt.setFromProjectionMatrix(mt,Wi,j.reversedDepth),et=this.localClippingEnabled,zt=At.init(this.clippingPlanes,et),M=it.get(R,O.length),M.init(),O.push(M),bt.enabled===!0&&bt.isPresenting===!0){const Tt=C.xr.getDepthSensingMesh();Tt!==null&&Bi(Tt,j,-1/0,C.sortObjects)}Bi(R,j,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(gt,N),ce=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ce&&Gt.addToRenderList(M,R),this.info.render.frame++,zt===!0&&At.beginShadows();const ot=y.state.shadowsArray;Ft.render(ot,R,j),zt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=M.opaque,Z=M.transmissive;if(y.setupLights(),j.isArrayCamera){const Tt=j.cameras;if(Z.length>0)for(let Ut=0,It=Tt.length;Ut<It;Ut++){const Nt=Tt[Ut];zl(ut,Z,R,Nt)}ce&&Gt.render(R);for(let Ut=0,It=Tt.length;Ut<It;Ut++){const Nt=Tt[Ut];qs(M,R,Nt,Nt.viewport)}}else Z.length>0&&zl(ut,Z,R,j),ce&&Gt.render(R),qs(M,R,j);k!==null&&z===0&&(oe.updateMultisampleRenderTarget(k),oe.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(C,R,j),wt.resetDefaultState(),U=-1,w=null,D.pop(),D.length>0?(y=D[D.length-1],zt===!0&&At.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function Bi(R,j,ot,ut){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Dt.intersectsSprite(R)){ut&&Kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);const Ut=G.update(R),It=R.material;It.visible&&M.push(R,Ut,It,ot,Kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Dt.intersectsObject(R))){const Ut=G.update(R),It=R.material;if(ut&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Kt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Kt.copy(Ut.boundingSphere.center)),Kt.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(It)){const Nt=Ut.groups;for(let Jt=0,ee=Nt.length;Jt<ee;Jt++){const qt=Nt[Jt],de=It[qt.materialIndex];de&&de.visible&&M.push(R,Ut,de,ot,Kt.z,qt)}}else It.visible&&M.push(R,Ut,It,ot,Kt.z,null)}}const Tt=R.children;for(let Ut=0,It=Tt.length;Ut<It;Ut++)Bi(Tt[Ut],j,ot,ut)}function qs(R,j,ot,ut){const Z=R.opaque,Tt=R.transmissive,Ut=R.transparent;y.setupLightsView(ot),zt===!0&&At.setGlobalState(C.clippingPlanes,ot),ut&&Ot.viewport(H.copy(ut)),Z.length>0&&Ys(Z,j,ot),Tt.length>0&&Ys(Tt,j,ot),Ut.length>0&&Ys(Ut,j,ot),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function zl(R,j,ot,ut){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ut.id]===void 0&&(y.state.transmissionRenderTarget[ut.id]=new rs(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?io:ya,minFilter:zs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[ut.id],Ut=ut.viewport||H;Tt.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);const It=C.getRenderTarget(),Nt=C.getActiveCubeFace(),Jt=C.getActiveMipmapLevel();C.setRenderTarget(Tt),C.getClearColor(ht),ct=C.getClearAlpha(),ct<1&&C.setClearColor(16777215,.5),C.clear(),ce&&Gt.render(ot);const ee=C.toneMapping;C.toneMapping=as;const qt=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),y.setupLightsView(ut),zt===!0&&At.setGlobalState(C.clippingPlanes,ut),Ys(R,ot,ut),oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt),re.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let be=0,qe=j.length;be<qe;be++){const Oe=j[be],pe=Oe.object,Qt=Oe.geometry,We=Oe.material,_e=Oe.group;if(We.side===ga&&pe.layers.test(ut.layers)){const Dn=We.side;We.side=Qn,We.needsUpdate=!0,uo(pe,ot,ut,Qt,We,_e),We.side=Dn,We.needsUpdate=!0,de=!0}}de===!0&&(oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt))}C.setRenderTarget(It,Nt,Jt),C.setClearColor(ht,ct),qt!==void 0&&(ut.viewport=qt),C.toneMapping=ee}function Ys(R,j,ot){const ut=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Tt=R.length;Z<Tt;Z++){const Ut=R[Z],It=Ut.object,Nt=Ut.geometry,Jt=Ut.group;let ee=Ut.material;ee.allowOverride===!0&&ut!==null&&(ee=ut),It.layers.test(ot.layers)&&uo(It,j,ot,Nt,ee,Jt)}}function uo(R,j,ot,ut,Z,Tt){R.onBeforeRender(C,j,ot,ut,Z,Tt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,j,ot,ut,R,Tt),Z.transparent===!0&&Z.side===ga&&Z.forceSinglePass===!1?(Z.side=Qn,Z.needsUpdate=!0,C.renderBufferDirect(ot,j,ut,Z,R,Tt),Z.side=ss,Z.needsUpdate=!0,C.renderBufferDirect(ot,j,ut,Z,R,Tt),Z.side=ga):C.renderBufferDirect(ot,j,ut,Z,R,Tt),R.onAfterRender(C,j,ot,ut,Z,Tt)}function Fi(R,j,ot){j.isScene!==!0&&(j=Wt);const ut=Vt.get(R),Z=y.state.lights,Tt=y.state.shadowsArray,Ut=Z.state.version,It=Q.getParameters(R,Z.state,Tt,j,ot),Nt=Q.getProgramCacheKey(It);let Jt=ut.programs;ut.environment=R.isMeshStandardMaterial?j.environment:null,ut.fog=j.fog,ut.envMap=(R.isMeshStandardMaterial?ke:Ge).get(R.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Jt===void 0&&(R.addEventListener("dispose",_t),Jt=new Map,ut.programs=Jt);let ee=Jt.get(Nt);if(ee!==void 0){if(ut.currentProgram===ee&&ut.lightsStateVersion===Ut)return Ki(R,It),ee}else It.uniforms=Q.getUniforms(R),R.onBeforeCompile(It,C),ee=Q.acquireProgram(It,Nt),Jt.set(Nt,ee),ut.uniforms=It.uniforms;const qt=ut.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=At.uniform),Ki(R,It),ut.needsLights=Aa(R),ut.lightsStateVersion=Ut,ut.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMap.value=Z.state.directionalShadowMap,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotShadowMap.value=Z.state.spotShadowMap,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMap.value=Z.state.pointShadowMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ut.currentProgram=ee,ut.uniformsList=null,ee}function js(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Ac.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Ki(R,j){const ot=Vt.get(R);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function ba(R,j,ot,ut,Z){j.isScene!==!0&&(j=Wt),oe.resetTextureUnits();const Tt=j.fog,Ut=ut.isMeshStandardMaterial?j.environment:null,It=k===null?C.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:$r,Nt=(ut.isMeshStandardMaterial?ke:Ge).get(ut.envMap||Ut),Jt=ut.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ee=!!ot.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),qt=!!ot.morphAttributes.position,de=!!ot.morphAttributes.normal,be=!!ot.morphAttributes.color;let qe=as;ut.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(qe=C.toneMapping);const Oe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,pe=Oe!==void 0?Oe.length:0,Qt=Vt.get(ut),We=y.state.lights;if(zt===!0&&(et===!0||R!==w)){const $e=R===w&&ut.id===U;At.setState(ut,R,$e)}let _e=!1;ut.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==We.state.version||Qt.outputColorSpace!==It||Z.isBatchedMesh&&Qt.batching===!1||!Z.isBatchedMesh&&Qt.batching===!0||Z.isBatchedMesh&&Qt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qt.instancing===!1||!Z.isInstancedMesh&&Qt.instancing===!0||Z.isSkinnedMesh&&Qt.skinning===!1||!Z.isSkinnedMesh&&Qt.skinning===!0||Z.isInstancedMesh&&Qt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qt.instancingMorph===!1&&Z.morphTexture!==null||Qt.envMap!==Nt||ut.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==At.numPlanes||Qt.numIntersection!==At.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==ee||Qt.morphTargets!==qt||Qt.morphNormals!==de||Qt.morphColors!==be||Qt.toneMapping!==qe||Qt.morphTargetsCount!==pe)&&(_e=!0):(_e=!0,Qt.__version=ut.version);let Dn=Qt.currentProgram;_e===!0&&(Dn=Fi(ut,j,Z));let Ti=!1,Fn=!1,xn=!1;const Ve=Dn.getUniforms(),In=Qt.uniforms;if(Ot.useProgram(Dn.program)&&(Ti=!0,Fn=!0,xn=!0),ut.id!==U&&(U=ut.id,Fn=!0),Ti||w!==R){Ot.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ve.setValue(V,"projectionMatrix",R.projectionMatrix),Ve.setValue(V,"viewMatrix",R.matrixWorldInverse);const bn=Ve.map.cameraPosition;bn!==void 0&&bn.setValue(V,St.setFromMatrixPosition(R.matrixWorld)),$t.logarithmicDepthBuffer&&Ve.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Ve.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Fn=!0,xn=!0)}if(Z.isSkinnedMesh){Ve.setOptional(V,Z,"bindMatrix"),Ve.setOptional(V,Z,"bindMatrixInverse");const $e=Z.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Ve.setValue(V,"boneTexture",$e.boneTexture,oe))}Z.isBatchedMesh&&(Ve.setOptional(V,Z,"batchingTexture"),Ve.setValue(V,"batchingTexture",Z._matricesTexture,oe),Ve.setOptional(V,Z,"batchingIdTexture"),Ve.setValue(V,"batchingIdTexture",Z._indirectTexture,oe),Ve.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ve.setValue(V,"batchingColorTexture",Z._colorsTexture,oe));const Un=ot.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Mt.update(Z,ot,Dn),(Fn||Qt.receiveShadow!==Z.receiveShadow)&&(Qt.receiveShadow=Z.receiveShadow,Ve.setValue(V,"receiveShadow",Z.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(In.envMap.value=Nt,In.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&j.environment!==null&&(In.envMapIntensity.value=j.environmentIntensity),Fn&&(Ve.setValue(V,"toneMappingExposure",C.toneMappingExposure),Qt.needsLights&&cs(In,xn),Tt&&ut.fog===!0&&lt.refreshFogUniforms(In,Tt),lt.refreshMaterialUniforms(In,ut,W,Y,y.state.transmissionRenderTarget[R.id]),Ac.upload(V,js(Qt),In,oe)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Ac.upload(V,js(Qt),In,oe),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Ve.setValue(V,"center",Z.center),Ve.setValue(V,"modelViewMatrix",Z.modelViewMatrix),Ve.setValue(V,"normalMatrix",Z.normalMatrix),Ve.setValue(V,"modelMatrix",Z.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const $e=ut.uniformsGroups;for(let bn=0,Ks=$e.length;bn<Ks;bn++){const kn=$e[bn];le.update(kn,Dn),le.bind(kn,Dn)}}return Dn}function cs(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,j,ot){const ut=Vt.get(R);ut.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),Vt.get(R.texture).__webglTexture=j,Vt.get(R.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:ot,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const ot=Vt.get(R);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0};const ln=V.createFramebuffer();this.setRenderTarget=function(R,j=0,ot=0){k=R,F=j,z=ot;let ut=!0,Z=null,Tt=!1,Ut=!1;if(R){const Nt=Vt.get(R);if(Nt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(V.FRAMEBUFFER,null),ut=!1;else if(Nt.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(Nt.__hasExternalTextures)oe.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(Nt.__boundDepthTexture!==qt){if(qt!==null&&Vt.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}const Jt=R.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ut=!0);const ee=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[j])?Z=ee[j][ot]:Z=ee[j],Tt=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?Z=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[ot]:Z=ee,H.copy(R.viewport),nt.copy(R.scissor),ft=R.scissorTest}else H.copy($).multiplyScalar(W).floor(),nt.copy(yt).multiplyScalar(W).floor(),ft=xt;if(ot!==0&&(Z=ln),Ot.bindFramebuffer(V.FRAMEBUFFER,Z)&&ut&&Ot.drawBuffers(R,Z),Ot.viewport(H),Ot.scissor(nt),Ot.setScissorTest(ft),Tt){const Nt=Vt.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Nt.__webglTexture,ot)}else if(Ut){const Nt=j;for(let Jt=0;Jt<R.textures.length;Jt++){const ee=Vt.get(R.textures[Jt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Jt,ee.__webglTexture,ot,Nt)}}else if(R!==null&&ot!==0){const Nt=Vt.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nt.__webglTexture,ot)}U=-1},this.readRenderTargetPixels=function(R,j,ot,ut,Z,Tt,Ut,It=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Ot.bindFramebuffer(V.FRAMEBUFFER,Nt);try{const Jt=R.textures[It],ee=Jt.format,qt=Jt.type;if(!$t.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ut&&ot>=0&&ot<=R.height-Z&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+It),V.readPixels(j,ot,ut,Z,Xt.convert(ee),Xt.convert(qt),Tt))}finally{const Jt=k!==null?Vt.get(k).__webglFramebuffer:null;Ot.bindFramebuffer(V.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(R,j,ot,ut,Z,Tt,Ut,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(j>=0&&j<=R.width-ut&&ot>=0&&ot<=R.height-Z){Ot.bindFramebuffer(V.FRAMEBUFFER,Nt);const Jt=R.textures[It],ee=Jt.format,qt=Jt.type;if(!$t.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,de),V.bufferData(V.PIXEL_PACK_BUFFER,Tt.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+It),V.readPixels(j,ot,ut,Z,Xt.convert(ee),Xt.convert(qt),0);const be=k!==null?Vt.get(k).__webglFramebuffer:null;Ot.bindFramebuffer(V.FRAMEBUFFER,be);const qe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Zb(V,qe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,de),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Tt),V.deleteBuffer(de),V.deleteSync(qe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,ot=0){const ut=Math.pow(2,-ot),Z=Math.floor(R.image.width*ut),Tt=Math.floor(R.image.height*ut),Ut=j!==null?j.x:0,It=j!==null?j.y:0;oe.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ot,0,0,Ut,It,Z,Tt),Ot.unbindTexture()};const Vl=V.createFramebuffer(),Hl=V.createFramebuffer();this.copyTextureToTexture=function(R,j,ot=null,ut=null,Z=0,Tt=null){Tt===null&&(Z!==0?(El("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let Ut,It,Nt,Jt,ee,qt,de,be,qe;const Oe=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(ot!==null)Ut=ot.max.x-ot.min.x,It=ot.max.y-ot.min.y,Nt=ot.isBox3?ot.max.z-ot.min.z:1,Jt=ot.min.x,ee=ot.min.y,qt=ot.isBox3?ot.min.z:0;else{const Un=Math.pow(2,-Z);Ut=Math.floor(Oe.width*Un),It=Math.floor(Oe.height*Un),R.isDataArrayTexture?Nt=Oe.depth:R.isData3DTexture?Nt=Math.floor(Oe.depth*Un):Nt=1,Jt=0,ee=0,qt=0}ut!==null?(de=ut.x,be=ut.y,qe=ut.z):(de=0,be=0,qe=0);const pe=Xt.convert(j.format),Qt=Xt.convert(j.type);let We;j.isData3DTexture?(oe.setTexture3D(j,0),We=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(oe.setTexture2DArray(j,0),We=V.TEXTURE_2D_ARRAY):(oe.setTexture2D(j,0),We=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const _e=V.getParameter(V.UNPACK_ROW_LENGTH),Dn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ti=V.getParameter(V.UNPACK_SKIP_PIXELS),Fn=V.getParameter(V.UNPACK_SKIP_ROWS),xn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Oe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Oe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qt);const Ve=R.isDataArrayTexture||R.isData3DTexture,In=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const Un=Vt.get(R),$e=Vt.get(j),bn=Vt.get(Un.__renderTarget),Ks=Vt.get($e.__renderTarget);Ot.bindFramebuffer(V.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ot.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let kn=0;kn<Nt;kn++)Ve&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,Z,qt+kn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Vt.get(j).__webglTexture,Tt,qe+kn)),V.blitFramebuffer(Jt,ee,Ut,It,de,be,Ut,It,V.DEPTH_BUFFER_BIT,V.NEAREST);Ot.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Vt.has(R)){const Un=Vt.get(R),$e=Vt.get(j);Ot.bindFramebuffer(V.READ_FRAMEBUFFER,Vl),Ot.bindFramebuffer(V.DRAW_FRAMEBUFFER,Hl);for(let bn=0;bn<Nt;bn++)Ve?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Un.__webglTexture,Z,qt+bn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Un.__webglTexture,Z),In?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$e.__webglTexture,Tt,qe+bn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,$e.__webglTexture,Tt),Z!==0?V.blitFramebuffer(Jt,ee,Ut,It,de,be,Ut,It,V.COLOR_BUFFER_BIT,V.NEAREST):In?V.copyTexSubImage3D(We,Tt,de,be,qe+bn,Jt,ee,Ut,It):V.copyTexSubImage2D(We,Tt,de,be,Jt,ee,Ut,It);Ot.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else In?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(We,Tt,de,be,qe,Ut,It,Nt,pe,Qt,Oe.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(We,Tt,de,be,qe,Ut,It,Nt,pe,Oe.data):V.texSubImage3D(We,Tt,de,be,qe,Ut,It,Nt,pe,Qt,Oe):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Tt,de,be,Ut,It,pe,Qt,Oe.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Tt,de,be,Oe.width,Oe.height,pe,Oe.data):V.texSubImage2D(V.TEXTURE_2D,Tt,de,be,Ut,It,pe,Qt,Oe);V.pixelStorei(V.UNPACK_ROW_LENGTH,_e),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Dn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ti),V.pixelStorei(V.UNPACK_SKIP_ROWS,Fn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,xn),Tt===0&&j.generateMipmaps&&V.generateMipmap(We),Ot.unbindTexture()},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),Ot.unbindTexture()},this.resetState=function(){F=0,z=0,k=null,Ot.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ce._getUnpackColorSpace()}}function g2({mouseForce:i=20,cursorSize:t=100,isViscous:n=!1,viscous:s=30,iterationsViscous:o=32,iterationsPoisson:u=32,dt:c=.014,BFECC:h=!0,resolution:p=.5,isBounce:d=!1,colors:g=["#5227FF","#FF9FFC","#B19EEF"],style:v={},className:_="",autoDemo:S=!0,autoSpeed:T=.5,autoIntensity:b=2.2,takeoverDuration:M=.25,autoResumeDelay:y=1e3,autoRampDuration:O=.6}){const D=Yt.useRef(null),C=Yt.useRef(null),P=Yt.useRef(null),F=Yt.useRef(null),z=Yt.useRef(null),k=Yt.useRef(!0),U=Yt.useRef(null);return Yt.useEffect(()=>{if(!D.current)return;function w(L){let x;Array.isArray(L)&&L.length>0?L.length===1?x=[L[0],L[0]]:x=L:x=["#ffffff","#ffffff"];const G=x.length,Q=new Uint8Array(G*4);for(let it=0;it<G;it++){const Rt=new De(x[it]);Q[it*4+0]=Math.round(Rt.r*255),Q[it*4+1]=Math.round(Rt.g*255),Q[it*4+2]=Math.round(Rt.b*255),Q[it*4+3]=255}const lt=new SA(Q,G,1,xi);return lt.magFilter=Kn,lt.minFilter=Kn,lt.wrapS=Pi,lt.wrapT=Pi,lt.generateMipmaps=!1,lt.needsUpdate=!0,lt}const H=w(g),nt=new an(0,0,0,0);class ft{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(x){this.container=x,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new m2({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new De(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new LA,this.clock.start()}resize(){if(!this.container)return;const x=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(x.width)),this.height=Math.max(1,Math.floor(x.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ht=new ft;class ct{constructor(){this.mouseMoved=!1,this.coords=new ue,this.coords_old=new ue,this.diff=new ue,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ue,this.takeoverTo=new ue,this.onInteract=null}init(x){this.container=x,x.addEventListener("mousemove",this._onMouseMove,!1),x.addEventListener("touchstart",this._onTouchStart,!1),x.addEventListener("touchmove",this._onTouchMove,!1),x.addEventListener("mouseenter",this._onMouseEnter,!1),x.addEventListener("mouseleave",this._onMouseLeave,!1),x.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(x,G){if(!this.container)return;this.timer&&clearTimeout(this.timer);const Q=this.container.getBoundingClientRect(),lt=(x-Q.left)/Q.width,it=(G-Q.top)/Q.height;this.coords.set(lt*2-1,-(it*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(x,G){this.coords.set(x,G),this.mouseMoved=!0}onDocumentMouseMove(x){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const G=this.container.getBoundingClientRect(),Q=(x.clientX-G.left)/G.width,lt=(x.clientY-G.top)/G.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Q*2-1,-(lt*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(x.clientX,x.clientY),this.hasUserControl=!0}onDocumentTouchStart(x){if(x.touches.length===1){const G=x.touches[0];this.onInteract&&this.onInteract(),this.setCoords(G.pageX,G.pageY),this.hasUserControl=!0}}onDocumentTouchMove(x){if(x.touches.length===1){const G=x.touches[0];this.onInteract&&this.onInteract(),this.setCoords(G.pageX,G.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const x=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(x>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const G=x*x*(3-2*x);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,G)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const B=new ct;class Y{constructor(x,G,Q){this.mouse=x,this.manager=G,this.enabled=Q.enabled,this.speed=Q.speed,this.resumeDelay=Q.resumeDelay||3e3,this.rampDurationMs=(Q.rampDuration||0)*1e3,this.active=!1,this.current=new ue(0,0),this.target=new ue,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ue,this.pickNewTarget()}pickNewTarget(){const x=Math.random;this.target.set((x()*2-1)*(1-this.margin),(x()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const x=performance.now();if(x-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=x,this.activationTime=x),!this.active)return;this.mouse.isAutoActive=!0;let Q=(x-this.lastTime)/1e3;this.lastTime=x,Q>.2&&(Q=.016);const lt=this._tmpDir.subVectors(this.target,this.current),it=lt.length();if(it<.01){this.pickNewTarget();return}lt.normalize();let Rt=1;if(this.rampDurationMs>0){const Gt=Math.min(1,(x-this.activationTime)/this.rampDurationMs);Rt=Gt*Gt*(3-2*Gt)}const At=this.speed*Q*Rt,Ft=Math.min(At,it);this.current.addScaledVector(lt,Ft),this.mouse.setNormalized(this.current.x,this.current.y)}}const W=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,gt=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,N=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,$=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,yt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,xt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Dt=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,zt=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,et=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,mt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class St{constructor(x){this.props=x||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new $0,this.camera=new Pc,this.uniforms&&(this.material=new mc(this.props.material),this.geometry=new Gs(2,2),this.plane=new Si(this.geometry,this.material),this.scene.add(this.plane))}update(){ht.renderer.setRenderTarget(this.props.output||null),ht.renderer.render(this.scene,this.camera),ht.renderer.setRenderTarget(null)}}class Kt extends St{constructor(x){super({material:{vertexShader:W,fragmentShader:$,uniforms:{boundarySpace:{value:x.cellScale},px:{value:x.cellScale},fboSize:{value:x.fboSize},velocity:{value:x.src.texture},dt:{value:x.dt},isBFECC:{value:!0}}},output:x.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const x=new Ta,G=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);x.setAttribute("position",new Oi(G,3));const Q=new mc({vertexShader:gt,fragmentShader:$,uniforms:this.uniforms});this.line=new RA(x,Q),this.scene.add(this.line)}update({dt:x,isBounce:G,BFECC:Q}){this.uniforms.dt.value=x,this.line.visible=G,this.uniforms.isBFECC.value=Q,super.update()}}class Wt extends St{constructor(x){super({output:x.dst}),this.init(x)}init(x){super.init();const G=new Gs(1,1),Q=new mc({vertexShader:N,fragmentShader:Dt,blending:Kd,depthWrite:!1,uniforms:{px:{value:x.cellScale},force:{value:new ue(0,0)},center:{value:new ue(0,0)},scale:{value:new ue(x.cursor_size,x.cursor_size)}}});this.mouse=new Si(G,Q),this.scene.add(this.mouse)}update(x){const G=B.diff.x/2*x.mouse_force,Q=B.diff.y/2*x.mouse_force,lt=x.cursor_size*x.cellScale.x,it=x.cursor_size*x.cellScale.y,Rt=Math.min(Math.max(B.coords.x,-1+lt+x.cellScale.x*2),1-lt-x.cellScale.x*2),At=Math.min(Math.max(B.coords.y,-1+it+x.cellScale.y*2),1-it-x.cellScale.y*2),Ft=this.mouse.material.uniforms;Ft.force.value.set(G,Q),Ft.center.value.set(Rt,At),Ft.scale.value.set(x.cursor_size,x.cursor_size),super.update()}}class ce extends St{constructor(x){super({material:{vertexShader:W,fragmentShader:mt,uniforms:{boundarySpace:{value:x.boundarySpace},velocity:{value:x.src.texture},velocity_new:{value:x.dst_.texture},v:{value:x.viscous},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst,output0:x.dst_,output1:x.dst}),this.init()}update({viscous:x,iterations:G,dt:Q}){let lt,it;this.uniforms.v.value=x;for(let Rt=0;Rt<G;Rt++)Rt%2===0?(lt=this.props.output0,it=this.props.output1):(lt=this.props.output1,it=this.props.output0),this.uniforms.velocity_new.value=lt.texture,this.props.output=it,this.uniforms.dt.value=Q,super.update();return it}}class Qe extends St{constructor(x){super({material:{vertexShader:W,fragmentShader:xt,uniforms:{boundarySpace:{value:x.boundarySpace},velocity:{value:x.src.texture},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst}),this.init()}update({vel:x}){this.uniforms.velocity.value=x.texture,super.update()}}class V extends St{constructor(x){super({material:{vertexShader:W,fragmentShader:zt,uniforms:{boundarySpace:{value:x.boundarySpace},pressure:{value:x.dst_.texture},divergence:{value:x.src.texture},px:{value:x.cellScale}}},output:x.dst,output0:x.dst_,output1:x.dst}),this.init()}update({iterations:x}){let G,Q;for(let lt=0;lt<x;lt++)lt%2===0?(G=this.props.output0,Q=this.props.output1):(G=this.props.output1,Q=this.props.output0),this.uniforms.pressure.value=G.texture,this.props.output=Q,super.update();return Q}}class Ue extends St{constructor(x){super({material:{vertexShader:W,fragmentShader:et,uniforms:{boundarySpace:{value:x.boundarySpace},pressure:{value:x.src_p.texture},velocity:{value:x.src_v.texture},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst}),this.init()}update({vel:x,pressure:G}){this.uniforms.velocity.value=x.texture,this.uniforms.pressure.value=G.texture,super.update()}}class re{constructor(x){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...x},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ue,this.cellScale=new ue,this.boundarySpace=new ue,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?io:Xi}createAllFBO(){const G={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Kn,magFilter:Kn,wrapS:Pi,wrapT:Pi};for(let Q in this.fbos)this.fbos[Q]=new rs(this.fboSize.x,this.fboSize.y,G)}createShaderPass(){this.advection=new Kt({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Wt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ce({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Qe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new V({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Ue({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const x=Math.max(1,Math.round(this.options.resolution*ht.width)),G=Math.max(1,Math.round(this.options.resolution*ht.height)),Q=1/x,lt=1/G;this.cellScale.set(Q,lt),this.fboSize.set(x,G)}resize(){this.calcSize();for(let x in this.fbos)this.fbos[x].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let x=this.fbos.vel_1;this.options.isViscous&&(x=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:x});const G=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:x,pressure:G})}}class $t{constructor(){this.init()}init(){this.simulation=new re,this.scene=new $0,this.camera=new Pc,this.output=new Si(new Gs(2,2),new mc({vertexShader:W,fragmentShader:yt,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ue},palette:{value:H},bgColor:{value:nt}}})),this.scene.add(this.output)}addScene(x){this.scene.add(x)}resize(){this.simulation.resize()}render(){ht.renderer.setRenderTarget(null),ht.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Ot{constructor(x){this.props=x,ht.init(x.$wrapper),B.init(x.$wrapper),B.autoIntensity=x.autoIntensity,B.takeoverDuration=x.takeoverDuration,this.lastUserInteraction=performance.now(),B.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new Y(B,this,{enabled:x.autoDemo,speed:x.autoSpeed,resumeDelay:x.autoResumeDelay,rampDuration:x.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():k.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ht.renderer.domElement),this.output=new $t}resize(){ht.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),B.update(),ht.update(),this.output.update()}loop(){this.running&&(this.render(),F.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,F.current&&(cancelAnimationFrame(F.current),F.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),B.dispose(),ht.renderer){const x=ht.renderer.domElement;x&&x.parentNode&&x.parentNode.removeChild(x),ht.renderer.dispose()}}catch{}}}const Me=D.current;Me.style.position=Me.style.position||"relative",Me.style.overflow=Me.style.overflow||"hidden";const Vt=new Ot({$wrapper:Me,autoDemo:S,autoSpeed:T,autoIntensity:b,takeoverDuration:M,autoResumeDelay:y,autoRampDuration:O});C.current=Vt,(()=>{if(!C.current)return;const L=C.current.output?.simulation;if(!L)return;const x=L.options.resolution;Object.assign(L.options,{mouse_force:i,cursor_size:t,isViscous:n,viscous:s,iterations_viscous:o,iterations_poisson:u,dt:c,BFECC:h,resolution:p,isBounce:d}),p!==x&&L.resize()})(),Vt.start();const Ge=new IntersectionObserver(L=>{const x=L[0],G=x.isIntersecting&&x.intersectionRatio>0;k.current=G,C.current&&(G&&!document.hidden?C.current.start():C.current.pause())},{threshold:[0,.01,.1]});Ge.observe(Me),z.current=Ge;const ke=new ResizeObserver(()=>{C.current&&(U.current&&cancelAnimationFrame(U.current),U.current=requestAnimationFrame(()=>{C.current&&C.current.resize()}))});return ke.observe(Me),P.current=ke,()=>{if(F.current&&cancelAnimationFrame(F.current),P.current)try{P.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}C.current&&C.current.dispose(),C.current=null}},[h,t,c,d,n,u,o,i,p,s,g,S,T,b,M,y,O]),Yt.useEffect(()=>{const w=C.current;if(!w)return;const H=w.output?.simulation;if(!H)return;const nt=H.options.resolution;Object.assign(H.options,{mouse_force:i,cursor_size:t,isViscous:n,viscous:s,iterations_viscous:o,iterations_poisson:u,dt:c,BFECC:h,resolution:p,isBounce:d}),w.autoDriver&&(w.autoDriver.enabled=S,w.autoDriver.speed=T,w.autoDriver.resumeDelay=y,w.autoDriver.rampDurationMs=O*1e3,w.autoDriver.mouse&&(w.autoDriver.mouse.autoIntensity=b,w.autoDriver.mouse.takeoverDuration=M)),p!==nt&&H.resize()},[i,t,n,s,o,u,c,h,p,d,S,T,b,M,y,O]),Re.jsx("div",{ref:D,className:`liquid-ether-container ${_||""}`,style:v})}const gS=Yt.createContext({});function v2(i){const t=Yt.useRef(null);return t.current===null&&(t.current=i()),t.current}const gm=typeof window<"u",_2=gm?Yt.useLayoutEffect:Yt.useEffect,vm=Yt.createContext(null);function _m(i,t){i.indexOf(t)===-1&&i.push(t)}function ym(i,t){const n=i.indexOf(t);n>-1&&i.splice(n,1)}const Ma=(i,t,n)=>n>t?t:n<i?i:n;let xm=()=>{};const Ea={},vS=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function _S(i){return typeof i=="object"&&i!==null}const yS=i=>/^0[^.\s]+$/u.test(i);function Sm(i){let t;return()=>(t===void 0&&(t=i()),t)}const Mi=i=>i,y2=(i,t)=>n=>t(i(n)),Ol=(...i)=>i.reduce(y2),Tl=(i,t,n)=>{const s=t-i;return s===0?1:(n-i)/s};class Mm{constructor(){this.subscriptions=[]}add(t){return _m(this.subscriptions,t),()=>ym(this.subscriptions,t)}notify(t,n,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,s);else for(let u=0;u<o;u++){const c=this.subscriptions[u];c&&c(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const qi=i=>i*1e3,Yi=i=>i/1e3;function xS(i,t){return t?i*(1e3/t):0}const SS=(i,t,n)=>(((1-3*n+3*t)*i+(3*n-6*t))*i+3*t)*i,x2=1e-7,S2=12;function M2(i,t,n,s,o){let u,c,h=0;do c=t+(n-t)/2,u=SS(c,s,o)-i,u>0?n=c:t=c;while(Math.abs(u)>x2&&++h<S2);return c}function Bl(i,t,n,s){if(i===t&&n===s)return Mi;const o=u=>M2(u,0,1,i,n);return u=>u===0||u===1?u:SS(o(u),t,s)}const MS=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,ES=i=>t=>1-i(1-t),TS=Bl(.33,1.53,.69,.99),Em=ES(TS),bS=MS(Em),AS=i=>(i*=2)<1?.5*Em(i):.5*(2-Math.pow(2,-10*(i-1))),Tm=i=>1-Math.sin(Math.acos(i)),RS=ES(Tm),CS=MS(Tm),E2=Bl(.42,0,1,1),T2=Bl(0,0,.58,1),wS=Bl(.42,0,.58,1),b2=i=>Array.isArray(i)&&typeof i[0]!="number",DS=i=>Array.isArray(i)&&typeof i[0]=="number",A2={linear:Mi,easeIn:E2,easeInOut:wS,easeOut:T2,circIn:Tm,circInOut:CS,circOut:RS,backIn:Em,backInOut:bS,backOut:TS,anticipate:AS},R2=i=>typeof i=="string",wy=i=>{if(DS(i)){xm(i.length===4);const[t,n,s,o]=i;return Bl(t,n,s,o)}else if(R2(i))return A2[i];return i},yc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function C2(i,t){let n=new Set,s=new Set,o=!1,u=!1;const c=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(g){c.has(g)&&(d.schedule(g),i()),g(h)}const d={schedule:(g,v=!1,_=!1)=>{const T=_&&o?n:s;return v&&c.add(g),T.has(g)||T.add(g),g},cancel:g=>{s.delete(g),c.delete(g)},process:g=>{if(h=g,o){u=!0;return}o=!0,[n,s]=[s,n],n.forEach(p),n.clear(),o=!1,u&&(u=!1,d.process(g))}};return d}const w2=40;function US(i,t){let n=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},u=()=>n=!0,c=yc.reduce((D,C)=>(D[C]=C2(u),D),{}),{setup:h,read:p,resolveKeyframes:d,preUpdate:g,update:v,preRender:_,render:S,postRender:T}=c,b=()=>{const D=Ea.useManualTiming?o.timestamp:performance.now();n=!1,Ea.useManualTiming||(o.delta=s?1e3/60:Math.max(Math.min(D-o.timestamp,w2),1)),o.timestamp=D,o.isProcessing=!0,h.process(o),p.process(o),d.process(o),g.process(o),v.process(o),_.process(o),S.process(o),T.process(o),o.isProcessing=!1,n&&t&&(s=!1,i(b))},M=()=>{n=!0,s=!0,o.isProcessing||i(b)};return{schedule:yc.reduce((D,C)=>{const P=c[C];return D[C]=(F,z=!1,k=!1)=>(n||M(),P.schedule(F,z,k)),D},{}),cancel:D=>{for(let C=0;C<yc.length;C++)c[yc[C]].cancel(D)},state:o,steps:c}}const{schedule:je,cancel:os,state:wn,steps:Pd}=US(typeof requestAnimationFrame<"u"?requestAnimationFrame:Mi,!0);let Rc;function D2(){Rc=void 0}const Zn={now:()=>(Rc===void 0&&Zn.set(wn.isProcessing||Ea.useManualTiming?wn.timestamp:performance.now()),Rc),set:i=>{Rc=i,queueMicrotask(D2)}},LS=i=>t=>typeof t=="string"&&t.startsWith(i),bm=LS("--"),U2=LS("var(--"),Am=i=>U2(i)?L2.test(i.split("/*")[0].trim()):!1,L2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ro={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},bl={...ro,transform:i=>Ma(0,1,i)},xc={...ro,default:1},pl=i=>Math.round(i*1e5)/1e5,Rm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function N2(i){return i==null}const P2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cm=(i,t)=>n=>!!(typeof n=="string"&&P2.test(n)&&n.startsWith(i)||t&&!N2(n)&&Object.prototype.hasOwnProperty.call(n,t)),NS=(i,t,n)=>s=>{if(typeof s!="string")return s;const[o,u,c,h]=s.match(Rm);return{[i]:parseFloat(o),[t]:parseFloat(u),[n]:parseFloat(c),alpha:h!==void 0?parseFloat(h):1}},O2=i=>Ma(0,255,i),Od={...ro,transform:i=>Math.round(O2(i))},Vs={test:Cm("rgb","red"),parse:NS("red","green","blue"),transform:({red:i,green:t,blue:n,alpha:s=1})=>"rgba("+Od.transform(i)+", "+Od.transform(t)+", "+Od.transform(n)+", "+pl(bl.transform(s))+")"};function B2(i){let t="",n="",s="",o="";return i.length>5?(t=i.substring(1,3),n=i.substring(3,5),s=i.substring(5,7),o=i.substring(7,9)):(t=i.substring(1,2),n=i.substring(2,3),s=i.substring(3,4),o=i.substring(4,5),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const zp={test:Cm("#"),parse:B2,transform:Vs.transform},Fl=i=>({test:t=>typeof t=="string"&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),es=Fl("deg"),ji=Fl("%"),ae=Fl("px"),F2=Fl("vh"),I2=Fl("vw"),Dy={...ji,parse:i=>ji.parse(i)/100,transform:i=>ji.transform(i*100)},Gr={test:Cm("hsl","hue"),parse:NS("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(i)+", "+ji.transform(pl(t))+", "+ji.transform(pl(n))+", "+pl(bl.transform(s))+")"},hn={test:i=>Vs.test(i)||zp.test(i)||Gr.test(i),parse:i=>Vs.test(i)?Vs.parse(i):Gr.test(i)?Gr.parse(i):zp.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?Vs.transform(i):Gr.transform(i),getAnimatableNone:i=>{const t=hn.parse(i);return t.alpha=0,hn.transform(t)}},z2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function V2(i){return isNaN(i)&&typeof i=="string"&&(i.match(Rm)?.length||0)+(i.match(z2)?.length||0)>0}const PS="number",OS="color",H2="var",G2="var(",Uy="${}",k2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Al(i){const t=i.toString(),n=[],s={color:[],number:[],var:[]},o=[];let u=0;const h=t.replace(k2,p=>(hn.test(p)?(s.color.push(u),o.push(OS),n.push(hn.parse(p))):p.startsWith(G2)?(s.var.push(u),o.push(H2),n.push(p)):(s.number.push(u),o.push(PS),n.push(parseFloat(p))),++u,Uy)).split(Uy);return{values:n,split:h,indexes:s,types:o}}function BS(i){return Al(i).values}function FS(i){const{split:t,types:n}=Al(i),s=t.length;return o=>{let u="";for(let c=0;c<s;c++)if(u+=t[c],o[c]!==void 0){const h=n[c];h===PS?u+=pl(o[c]):h===OS?u+=hn.transform(o[c]):u+=o[c]}return u}}const X2=i=>typeof i=="number"?0:hn.test(i)?hn.getAnimatableNone(i):i;function W2(i){const t=BS(i);return FS(i)(t.map(X2))}const ls={test:V2,parse:BS,createTransformer:FS,getAnimatableNone:W2};function Bd(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*(2/3-n)*6:i}function q2({hue:i,saturation:t,lightness:n,alpha:s}){i/=360,t/=100,n/=100;let o=0,u=0,c=0;if(!t)o=u=c=n;else{const h=n<.5?n*(1+t):n+t-n*t,p=2*n-h;o=Bd(p,h,i+1/3),u=Bd(p,h,i),c=Bd(p,h,i-1/3)}return{red:Math.round(o*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:s}}function Fc(i,t){return n=>n>0?t:i}const Ze=(i,t,n)=>i+(t-i)*n,Fd=(i,t,n)=>{const s=i*i,o=n*(t*t-s)+s;return o<0?0:Math.sqrt(o)},Y2=[zp,Vs,Gr],j2=i=>Y2.find(t=>t.test(i));function Ly(i){const t=j2(i);if(!t)return!1;let n=t.parse(i);return t===Gr&&(n=q2(n)),n}const Ny=(i,t)=>{const n=Ly(i),s=Ly(t);if(!n||!s)return Fc(i,t);const o={...n};return u=>(o.red=Fd(n.red,s.red,u),o.green=Fd(n.green,s.green,u),o.blue=Fd(n.blue,s.blue,u),o.alpha=Ze(n.alpha,s.alpha,u),Vs.transform(o))},Vp=new Set(["none","hidden"]);function K2(i,t){return Vp.has(i)?n=>n<=0?i:t:n=>n>=1?t:i}function Z2(i,t){return n=>Ze(i,t,n)}function wm(i){return typeof i=="number"?Z2:typeof i=="string"?Am(i)?Fc:hn.test(i)?Ny:$2:Array.isArray(i)?IS:typeof i=="object"?hn.test(i)?Ny:Q2:Fc}function IS(i,t){const n=[...i],s=n.length,o=i.map((u,c)=>wm(u)(u,t[c]));return u=>{for(let c=0;c<s;c++)n[c]=o[c](u);return n}}function Q2(i,t){const n={...i,...t},s={};for(const o in n)i[o]!==void 0&&t[o]!==void 0&&(s[o]=wm(i[o])(i[o],t[o]));return o=>{for(const u in s)n[u]=s[u](o);return n}}function J2(i,t){const n=[],s={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const u=t.types[o],c=i.indexes[u][s[u]],h=i.values[c]??0;n[o]=h,s[u]++}return n}const $2=(i,t)=>{const n=ls.createTransformer(t),s=Al(i),o=Al(t);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?Vp.has(i)&&!o.values.length||Vp.has(t)&&!s.values.length?K2(i,t):Ol(IS(J2(s,o),o.values),n):Fc(i,t)};function zS(i,t,n){return typeof i=="number"&&typeof t=="number"&&typeof n=="number"?Ze(i,t,n):wm(i)(i,t)}const tD=i=>{const t=({timestamp:n})=>i(n);return{start:(n=!0)=>je.update(t,n),stop:()=>os(t),now:()=>wn.isProcessing?wn.timestamp:Zn.now()}},VS=(i,t,n=10)=>{let s="";const o=Math.max(Math.round(t/n),2);for(let u=0;u<o;u++)s+=Math.round(i(u/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Ic=2e4;function Dm(i){let t=0;const n=50;let s=i.next(t);for(;!s.done&&t<Ic;)t+=n,s=i.next(t);return t>=Ic?1/0:t}function eD(i,t=100,n){const s=n({...i,keyframes:[0,t]}),o=Math.min(Dm(s),Ic);return{type:"keyframes",ease:u=>s.next(o*u).value/t,duration:Yi(o)}}const nD=5;function HS(i,t,n){const s=Math.max(t-nD,0);return xS(n-i(s),t-s)}const nn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Id=.001;function iD({duration:i=nn.duration,bounce:t=nn.bounce,velocity:n=nn.velocity,mass:s=nn.mass}){let o,u,c=1-t;c=Ma(nn.minDamping,nn.maxDamping,c),i=Ma(nn.minDuration,nn.maxDuration,Yi(i)),c<1?(o=d=>{const g=d*c,v=g*i,_=g-n,S=Hp(d,c),T=Math.exp(-v);return Id-_/S*T},u=d=>{const v=d*c*i,_=v*n+n,S=Math.pow(c,2)*Math.pow(d,2)*i,T=Math.exp(-v),b=Hp(Math.pow(d,2),c);return(-o(d)+Id>0?-1:1)*((_-S)*T)/b}):(o=d=>{const g=Math.exp(-d*i),v=(d-n)*i+1;return-Id+g*v},u=d=>{const g=Math.exp(-d*i),v=(n-d)*(i*i);return g*v});const h=5/i,p=sD(o,u,h);if(i=qi(i),isNaN(p))return{stiffness:nn.stiffness,damping:nn.damping,duration:i};{const d=Math.pow(p,2)*s;return{stiffness:d,damping:c*2*Math.sqrt(s*d),duration:i}}}const aD=12;function sD(i,t,n){let s=n;for(let o=1;o<aD;o++)s=s-i(s)/t(s);return s}function Hp(i,t){return i*Math.sqrt(1-t*t)}const rD=["duration","bounce"],oD=["stiffness","damping","mass"];function Py(i,t){return t.some(n=>i[n]!==void 0)}function lD(i){let t={velocity:nn.velocity,stiffness:nn.stiffness,damping:nn.damping,mass:nn.mass,isResolvedFromDuration:!1,...i};if(!Py(i,oD)&&Py(i,rD))if(i.visualDuration){const n=i.visualDuration,s=2*Math.PI/(n*1.2),o=s*s,u=2*Ma(.05,1,1-(i.bounce||0))*Math.sqrt(o);t={...t,mass:nn.mass,stiffness:o,damping:u}}else{const n=iD(i);t={...t,...n,mass:nn.mass},t.isResolvedFromDuration=!0}return t}function zc(i=nn.visualDuration,t=nn.bounce){const n=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:t}:i;let{restSpeed:s,restDelta:o}=n;const u=n.keyframes[0],c=n.keyframes[n.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:d,mass:g,duration:v,velocity:_,isResolvedFromDuration:S}=lD({...n,velocity:-Yi(n.velocity||0)}),T=_||0,b=d/(2*Math.sqrt(p*g)),M=c-u,y=Yi(Math.sqrt(p/g)),O=Math.abs(M)<5;s||(s=O?nn.restSpeed.granular:nn.restSpeed.default),o||(o=O?nn.restDelta.granular:nn.restDelta.default);let D;if(b<1){const P=Hp(y,b);D=F=>{const z=Math.exp(-b*y*F);return c-z*((T+b*y*M)/P*Math.sin(P*F)+M*Math.cos(P*F))}}else if(b===1)D=P=>c-Math.exp(-y*P)*(M+(T+y*M)*P);else{const P=y*Math.sqrt(b*b-1);D=F=>{const z=Math.exp(-b*y*F),k=Math.min(P*F,300);return c-z*((T+b*y*M)*Math.sinh(k)+P*M*Math.cosh(k))/P}}const C={calculatedDuration:S&&v||null,next:P=>{const F=D(P);if(S)h.done=P>=v;else{let z=P===0?T:0;b<1&&(z=P===0?qi(T):HS(D,P,F));const k=Math.abs(z)<=s,U=Math.abs(c-F)<=o;h.done=k&&U}return h.value=h.done?c:F,h},toString:()=>{const P=Math.min(Dm(C),Ic),F=VS(z=>C.next(P*z).value,P,30);return P+"ms "+F},toTransition:()=>{}};return C}zc.applyToOptions=i=>{const t=eD(i,100,zc);return i.ease=t.ease,i.duration=qi(t.duration),i.type="keyframes",i};function Gp({keyframes:i,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:u=500,modifyTarget:c,min:h,max:p,restDelta:d=.5,restSpeed:g}){const v=i[0],_={done:!1,value:v},S=k=>h!==void 0&&k<h||p!==void 0&&k>p,T=k=>h===void 0?p:p===void 0||Math.abs(h-k)<Math.abs(p-k)?h:p;let b=n*t;const M=v+b,y=c===void 0?M:c(M);y!==M&&(b=y-v);const O=k=>-b*Math.exp(-k/s),D=k=>y+O(k),C=k=>{const U=O(k),w=D(k);_.done=Math.abs(U)<=d,_.value=_.done?y:w};let P,F;const z=k=>{S(_.value)&&(P=k,F=zc({keyframes:[_.value,T(_.value)],velocity:HS(D,k,_.value),damping:o,stiffness:u,restDelta:d,restSpeed:g}))};return z(0),{calculatedDuration:null,next:k=>{let U=!1;return!F&&P===void 0&&(U=!0,C(k),z(k)),P!==void 0&&k>=P?F.next(k-P):(!U&&C(k),_)}}}function uD(i,t,n){const s=[],o=n||Ea.mix||zS,u=i.length-1;for(let c=0;c<u;c++){let h=o(i[c],i[c+1]);if(t){const p=Array.isArray(t)?t[c]||Mi:t;h=Ol(p,h)}s.push(h)}return s}function cD(i,t,{clamp:n=!0,ease:s,mixer:o}={}){const u=i.length;if(xm(u===t.length),u===1)return()=>t[0];if(u===2&&t[0]===t[1])return()=>t[1];const c=i[0]===i[1];i[0]>i[u-1]&&(i=[...i].reverse(),t=[...t].reverse());const h=uD(t,s,o),p=h.length,d=g=>{if(c&&g<i[0])return t[0];let v=0;if(p>1)for(;v<i.length-2&&!(g<i[v+1]);v++);const _=Tl(i[v],i[v+1],g);return h[v](_)};return n?g=>d(Ma(i[0],i[u-1],g)):d}function fD(i,t){const n=i[i.length-1];for(let s=1;s<=t;s++){const o=Tl(0,t,s);i.push(Ze(n,1,o))}}function hD(i){const t=[0];return fD(t,i.length-1),t}function dD(i,t){return i.map(n=>n*t)}function pD(i,t){return i.map(()=>t||wS).splice(0,i.length-1)}function ml({duration:i=300,keyframes:t,times:n,ease:s="easeInOut"}){const o=b2(s)?s.map(wy):wy(s),u={done:!1,value:t[0]},c=dD(n&&n.length===t.length?n:hD(t),i),h=cD(c,t,{ease:Array.isArray(o)?o:pD(t,o)});return{calculatedDuration:i,next:p=>(u.value=h(p),u.done=p>=i,u)}}const mD=i=>i!==null;function Um(i,{repeat:t,repeatType:n="loop"},s,o=1){const u=i.filter(mD),h=o<0||t&&n!=="loop"&&t%2===1?0:u.length-1;return!h||s===void 0?u[h]:s}const gD={decay:Gp,inertia:Gp,tween:ml,keyframes:ml,spring:zc};function GS(i){typeof i.type=="string"&&(i.type=gD[i.type])}class Lm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const vD=i=>i/100;class Nm extends Lm{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==Zn.now()&&this.tick(Zn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;GS(t);const{type:n=ml,repeat:s=0,repeatDelay:o=0,repeatType:u,velocity:c=0}=t;let{keyframes:h}=t;const p=n||ml;p!==ml&&typeof h[0]!="number"&&(this.mixKeyframes=Ol(vD,zS(h[0],h[1])),h=[0,100]);const d=p({...t,keyframes:h});u==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...h].reverse(),velocity:-c})),d.calculatedDuration===null&&(d.calculatedDuration=Dm(d));const{calculatedDuration:g}=d;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:s,totalDuration:o,mixKeyframes:u,mirroredGenerator:c,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:d=0,keyframes:g,repeat:v,repeatType:_,repeatDelay:S,type:T,onUpdate:b,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const y=this.currentTime-d*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let D=this.currentTime,C=s;if(v){const k=Math.min(this.currentTime,o)/h;let U=Math.floor(k),w=k%1;!w&&k>=1&&(w=1),w===1&&U--,U=Math.min(U,v+1),!!(U%2)&&(_==="reverse"?(w=1-w,S&&(w-=S/h)):_==="mirror"&&(C=c)),D=Ma(0,1,w)*h}const P=O?{done:!1,value:g[0]}:C.next(D);u&&(P.value=u(P.value));let{done:F}=P;!O&&p!==null&&(F=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return z&&T!==Gp&&(P.value=Um(g,this.options,M,this.speed)),b&&b(P.value),z&&this.finish(),P}then(t,n){return this.finished.then(t,n)}get duration(){return Yi(this.calculatedDuration)}get time(){return Yi(this.currentTime)}set time(t){t=qi(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Zn.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Yi(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=tD,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Zn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function _D(i){for(let t=1;t<i.length;t++)i[t]??(i[t]=i[t-1])}const Hs=i=>i*180/Math.PI,kp=i=>{const t=Hs(Math.atan2(i[1],i[0]));return Xp(t)},yD={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:kp,rotateZ:kp,skewX:i=>Hs(Math.atan(i[1])),skewY:i=>Hs(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},Xp=i=>(i=i%360,i<0&&(i+=360),i),Oy=kp,By=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),Fy=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),xD={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:By,scaleY:Fy,scale:i=>(By(i)+Fy(i))/2,rotateX:i=>Xp(Hs(Math.atan2(i[6],i[5]))),rotateY:i=>Xp(Hs(Math.atan2(-i[2],i[0]))),rotateZ:Oy,rotate:Oy,skewX:i=>Hs(Math.atan(i[4])),skewY:i=>Hs(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function Wp(i){return i.includes("scale")?1:0}function qp(i,t){if(!i||i==="none")return Wp(t);const n=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(n)s=xD,o=n;else{const h=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=yD,o=h}if(!o)return Wp(t);const u=s[t],c=o[1].split(",").map(MD);return typeof u=="function"?u(c):c[u]}const SD=(i,t)=>{const{transform:n="none"}=getComputedStyle(i);return qp(n,t)};function MD(i){return parseFloat(i.trim())}const oo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],lo=new Set(oo),Iy=i=>i===ro||i===ae,ED=new Set(["x","y","z"]),TD=oo.filter(i=>!ED.has(i));function bD(i){const t=[];return TD.forEach(n=>{const s=i.getValue(n);s!==void 0&&(t.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),t}const ks={width:({x:i},{paddingLeft:t="0",paddingRight:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),height:({y:i},{paddingTop:t="0",paddingBottom:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:(i,{transform:t})=>qp(t,"x"),y:(i,{transform:t})=>qp(t,"y")};ks.translateX=ks.x;ks.translateY=ks.y;const Xs=new Set;let Yp=!1,jp=!1,Kp=!1;function kS(){if(jp){const i=Array.from(Xs).filter(s=>s.needsMeasurement),t=new Set(i.map(s=>s.element)),n=new Map;t.forEach(s=>{const o=bD(s);o.length&&(n.set(s,o),s.render())}),i.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const o=n.get(s);o&&o.forEach(([u,c])=>{s.getValue(u)?.set(c)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}jp=!1,Yp=!1,Xs.forEach(i=>i.complete(Kp)),Xs.clear()}function XS(){Xs.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(jp=!0)})}function AD(){Kp=!0,XS(),kS(),Kp=!1}class Pm{constructor(t,n,s,o,u,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=s,this.motionValue=o,this.element=u,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Xs.add(this),Yp||(Yp=!0,je.read(XS),je.resolveKeyframes(kS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:s,motionValue:o}=this;if(t[0]===null){const u=o?.get(),c=t[t.length-1];if(u!==void 0)t[0]=u;else if(s&&n){const h=s.readValue(n,c);h!=null&&(t[0]=h)}t[0]===void 0&&(t[0]=c),o&&u===void 0&&o.set(t[0])}_D(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Xs.delete(this)}cancel(){this.state==="scheduled"&&(Xs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const RD=i=>i.startsWith("--");function CD(i,t,n){RD(t)?i.style.setProperty(t,n):i.style[t]=n}const wD=Sm(()=>window.ScrollTimeline!==void 0),DD={};function UD(i,t){const n=Sm(i);return()=>DD[t]??n()}const WS=UD(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),dl=([i,t,n,s])=>`cubic-bezier(${i}, ${t}, ${n}, ${s})`,zy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:dl([0,.65,.55,1]),circOut:dl([.55,0,1,.45]),backIn:dl([.31,.01,.66,-.59]),backOut:dl([.33,1.53,.69,.99])};function qS(i,t){if(i)return typeof i=="function"?WS()?VS(i,t):"ease-out":DS(i)?dl(i):Array.isArray(i)?i.map(n=>qS(n,t)||zy.easeOut):zy[i]}function LD(i,t,n,{delay:s=0,duration:o=300,repeat:u=0,repeatType:c="loop",ease:h="easeOut",times:p}={},d=void 0){const g={[t]:n};p&&(g.offset=p);const v=qS(h,o);Array.isArray(v)&&(g.easing=v);const _={delay:s,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal"};return d&&(_.pseudoElement=d),i.animate(g,_)}function YS(i){return typeof i=="function"&&"applyToOptions"in i}function ND({type:i,...t}){return YS(i)&&WS()?i.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class PD extends Lm{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:s,keyframes:o,pseudoElement:u,allowFlatten:c=!1,finalKeyframe:h,onComplete:p}=t;this.isPseudoElement=!!u,this.allowFlatten=c,this.options=t,xm(typeof t.type!="string");const d=ND(t);this.animation=LD(n,s,o,d,u),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Um(o,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(g):CD(n,s,g),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return Yi(Number(t))}get time(){return Yi(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=qi(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&wD()?(this.animation.timeline=t,Mi):n(this)}}const jS={anticipate:AS,backInOut:bS,circInOut:CS};function OD(i){return i in jS}function BD(i){typeof i.ease=="string"&&OD(i.ease)&&(i.ease=jS[i.ease])}const Vy=10;class FD extends PD{constructor(t){BD(t),GS(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:s,onComplete:o,element:u,...c}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const h=new Nm({...c,autoplay:!1}),p=qi(this.finishedTime??this.time);n.setWithVelocity(h.sample(p-Vy).value,h.sample(p).value,Vy),h.stop()}}const Hy=(i,t)=>t==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(ls.test(i)||i==="0")&&!i.startsWith("url("));function ID(i){const t=i[0];if(i.length===1)return!0;for(let n=0;n<i.length;n++)if(i[n]!==t)return!0}function zD(i,t,n,s){const o=i[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const u=i[i.length-1],c=Hy(o,t),h=Hy(u,t);return!c||!h?!1:ID(i)||(n==="spring"||YS(n))&&s}function Zp(i){i.duration=0,i.type}const VD=new Set(["opacity","clipPath","filter","transform"]),HD=Sm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function GD(i){const{motionValue:t,name:n,repeatDelay:s,repeatType:o,damping:u,type:c}=i;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:d}=t.owner.getProps();return HD()&&n&&VD.has(n)&&(n!=="transform"||!d)&&!p&&!s&&o!=="mirror"&&u!==0&&c!=="inertia"}const kD=40;class XD extends Lm{constructor({autoplay:t=!0,delay:n=0,type:s="keyframes",repeat:o=0,repeatDelay:u=0,repeatType:c="loop",keyframes:h,name:p,motionValue:d,element:g,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Zn.now();const _={autoplay:t,delay:n,type:s,repeat:o,repeatDelay:u,repeatType:c,name:p,motionValue:d,element:g,...v},S=g?.KeyframeResolver||Pm;this.keyframeResolver=new S(h,(T,b,M)=>this.onKeyframesResolved(T,b,_,!M),p,d,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,n,s,o){this.keyframeResolver=void 0;const{name:u,type:c,velocity:h,delay:p,isHandoff:d,onUpdate:g}=s;this.resolvedAt=Zn.now(),zD(t,u,c,h)||((Ea.instantAnimations||!p)&&g?.(Um(t,s,n)),t[0]=t[t.length-1],Zp(s),s.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>kD?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:t},S=!d&&GD(_)?new FD({..._,element:_.motionValue.owner.current}):new Nm(_);S.finished.then(()=>this.notifyFinished()).catch(Mi),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),AD()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const WD=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function qD(i){const t=WD.exec(i);if(!t)return[,];const[,n,s,o]=t;return[`--${n??s}`,o]}function KS(i,t,n=1){const[s,o]=qD(i);if(!s)return;const u=window.getComputedStyle(t).getPropertyValue(s);if(u){const c=u.trim();return vS(c)?parseFloat(c):c}return Am(o)?KS(o,t,n+1):o}function Om(i,t){return i?.[t]??i?.default??i}const ZS=new Set(["width","height","top","left","right","bottom",...oo]),YD={test:i=>i==="auto",parse:i=>i},QS=i=>t=>t.test(i),JS=[ro,ae,ji,es,I2,F2,YD],Gy=i=>JS.find(QS(i));function jD(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||yS(i):!0}const KD=new Set(["brightness","contrast","saturate","opacity"]);function ZD(i){const[t,n]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[s]=n.match(Rm)||[];if(!s)return i;const o=n.replace(s,"");let u=KD.has(t)?1:0;return s!==n&&(u*=100),t+"("+u+o+")"}const QD=/\b([a-z-]*)\(.*?\)/gu,Qp={...ls,getAnimatableNone:i=>{const t=i.match(QD);return t?t.map(ZD).join(" "):i}},ky={...ro,transform:Math.round},JD={rotate:es,rotateX:es,rotateY:es,rotateZ:es,scale:xc,scaleX:xc,scaleY:xc,scaleZ:xc,skew:es,skewX:es,skewY:es,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:bl,originX:Dy,originY:Dy,originZ:ae},Bm={borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,backgroundPositionX:ae,backgroundPositionY:ae,...JD,zIndex:ky,fillOpacity:bl,strokeOpacity:bl,numOctaves:ky},$D={...Bm,color:hn,backgroundColor:hn,outlineColor:hn,fill:hn,stroke:hn,borderColor:hn,borderTopColor:hn,borderRightColor:hn,borderBottomColor:hn,borderLeftColor:hn,filter:Qp,WebkitFilter:Qp},$S=i=>$D[i];function tM(i,t){let n=$S(i);return n!==Qp&&(n=ls),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const tU=new Set(["auto","none","0"]);function eU(i,t,n){let s=0,o;for(;s<i.length&&!o;){const u=i[s];typeof u=="string"&&!tU.has(u)&&Al(u).values.length&&(o=i[s]),s++}if(o&&n)for(const u of t)i[u]=tM(n,o)}class nU extends Pm{constructor(t,n,s,o,u){super(t,n,s,o,u,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let p=0;p<t.length;p++){let d=t[p];if(typeof d=="string"&&(d=d.trim(),Am(d))){const g=KS(d,n.current);g!==void 0&&(t[p]=g),p===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!ZS.has(s)||t.length!==2)return;const[o,u]=t,c=Gy(o),h=Gy(u);if(c!==h)if(Iy(c)&&Iy(h))for(let p=0;p<t.length;p++){const d=t[p];typeof d=="string"&&(t[p]=parseFloat(d))}else ks[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,s=[];for(let o=0;o<t.length;o++)(t[o]===null||jD(t[o]))&&s.push(o);s.length&&eU(t,s,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ks[s](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(s,o).jump(o,!1)}measureEndState(){const{element:t,name:n,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const u=s.length-1,c=s[u];s[u]=ks[n](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),this.removedTransforms?.length&&this.removedTransforms.forEach(([h,p])=>{t.getValue(h).set(p)}),this.resolveNoneKeyframes()}}function iU(i,t,n){if(i instanceof EventTarget)return[i];if(typeof i=="string"){let s=document;const o=n?.[i]??s.querySelectorAll(i);return o?Array.from(o):[]}return Array.from(i)}const eM=(i,t)=>t&&typeof i=="number"?t.transform(i):i;function aU(i){return _S(i)&&"offsetHeight"in i}const Xy=30,sU=i=>!isNaN(parseFloat(i));class rU{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const o=Zn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Zn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=sU(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Mm);const s=this.events[t].add(n);return t==="change"?()=>{s(),je.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Zn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Xy)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Xy);return xS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function eo(i,t){return new rU(i,t)}const{schedule:Fm}=US(queueMicrotask,!1),Ui={x:!1,y:!1};function nM(){return Ui.x||Ui.y}function oU(i){return i==="x"||i==="y"?Ui[i]?null:(Ui[i]=!0,()=>{Ui[i]=!1}):Ui.x||Ui.y?null:(Ui.x=Ui.y=!0,()=>{Ui.x=Ui.y=!1})}function iM(i,t){const n=iU(i),s=new AbortController,o={passive:!0,...t,signal:s.signal};return[n,o,()=>s.abort()]}function Wy(i){return!(i.pointerType==="touch"||nM())}function lU(i,t,n={}){const[s,o,u]=iM(i,n),c=h=>{if(!Wy(h))return;const{target:p}=h,d=t(p,h);if(typeof d!="function"||!p)return;const g=v=>{Wy(v)&&(d(v),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,o)};return s.forEach(h=>{h.addEventListener("pointerenter",c,o)}),u}const aM=(i,t)=>t?i===t?!0:aM(i,t.parentElement):!1,Im=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,uU=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function cU(i){return uU.has(i.tagName)||i.tabIndex!==-1}const Cc=new WeakSet;function qy(i){return t=>{t.key==="Enter"&&i(t)}}function zd(i,t){i.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const fU=(i,t)=>{const n=i.currentTarget;if(!n)return;const s=qy(()=>{if(Cc.has(n))return;zd(n,"down");const o=qy(()=>{zd(n,"up")}),u=()=>zd(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",u,t)});n.addEventListener("keydown",s,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),t)};function Yy(i){return Im(i)&&!nM()}function hU(i,t,n={}){const[s,o,u]=iM(i,n),c=h=>{const p=h.currentTarget;if(!Yy(h))return;Cc.add(p);const d=t(p,h),g=(S,T)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",_),Cc.has(p)&&Cc.delete(p),Yy(S)&&typeof d=="function"&&d(S,{success:T})},v=S=>{g(S,p===window||p===document||n.useGlobalTarget||aM(p,S.target))},_=S=>{g(S,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",_,o)};return s.forEach(h=>{(n.useGlobalTarget?window:h).addEventListener("pointerdown",c,o),aU(h)&&(h.addEventListener("focus",d=>fU(d,o)),!cU(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),u}function sM(i){return _S(i)&&"ownerSVGElement"in i}function dU(i){return sM(i)&&i.tagName==="svg"}const Bn=i=>!!(i&&i.getVelocity),pU=[...JS,hn,ls],mU=i=>pU.find(QS(i)),rM=Yt.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function gU(i=!0){const t=Yt.useContext(vm);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,u=Yt.useId();Yt.useEffect(()=>{if(i)return o(u)},[i]);const c=Yt.useCallback(()=>i&&s&&s(u),[u,s,i]);return!n&&s?[!1,c]:[!0]}const oM=Yt.createContext({strict:!1}),jy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},no={};for(const i in jy)no[i]={isEnabled:t=>jy[i].some(n=>!!t[n])};function vU(i){for(const t in i)no[t]={...no[t],...i[t]}}const _U=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Vc(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||_U.has(i)}let lM=i=>!Vc(i);function yU(i){typeof i=="function"&&(lM=t=>t.startsWith("on")?!Vc(t):i(t))}try{yU(require("@emotion/is-prop-valid").default)}catch{}function xU(i,t,n){const s={};for(const o in i)o==="values"&&typeof i.values=="object"||(lM(o)||n===!0&&Vc(o)||!t&&!Vc(o)||i.draggable&&o.startsWith("onDrag"))&&(s[o]=i[o]);return s}const Wc=Yt.createContext({});function qc(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function Rl(i){return typeof i=="string"||Array.isArray(i)}const zm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vm=["initial",...zm];function Yc(i){return qc(i.animate)||Vm.some(t=>Rl(i[t]))}function uM(i){return!!(Yc(i)||i.variants)}function SU(i,t){if(Yc(i)){const{initial:n,animate:s}=i;return{initial:n===!1||Rl(n)?n:void 0,animate:Rl(s)?s:void 0}}return i.inherit!==!1?t:{}}function MU(i){const{initial:t,animate:n}=SU(i,Yt.useContext(Wc));return Yt.useMemo(()=>({initial:t,animate:n}),[Ky(t),Ky(n)])}function Ky(i){return Array.isArray(i)?i.join(" "):i}const Cl={};function EU(i){for(const t in i)Cl[t]=i[t],bm(t)&&(Cl[t].isCSSVariable=!0)}function cM(i,{layout:t,layoutId:n}){return lo.has(i)||i.startsWith("origin")||(t||n!==void 0)&&(!!Cl[i]||i==="opacity")}const TU={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bU=oo.length;function AU(i,t,n){let s="",o=!0;for(let u=0;u<bU;u++){const c=oo[u],h=i[c];if(h===void 0)continue;let p=!0;if(typeof h=="number"?p=h===(c.startsWith("scale")?1:0):p=parseFloat(h)===0,!p||n){const d=eM(h,Bm[c]);if(!p){o=!1;const g=TU[c]||c;s+=`${g}(${d}) `}n&&(t[c]=d)}}return s=s.trim(),n?s=n(t,o?"":s):o&&(s="none"),s}function Hm(i,t,n){const{style:s,vars:o,transformOrigin:u}=i;let c=!1,h=!1;for(const p in t){const d=t[p];if(lo.has(p)){c=!0;continue}else if(bm(p)){o[p]=d;continue}else{const g=eM(d,Bm[p]);p.startsWith("origin")?(h=!0,u[p]=g):s[p]=g}}if(t.transform||(c||n?s.transform=AU(t,i.transform,n):s.transform&&(s.transform="none")),h){const{originX:p="50%",originY:d="50%",originZ:g=0}=u;s.transformOrigin=`${p} ${d} ${g}`}}const Gm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function fM(i,t,n){for(const s in t)!Bn(t[s])&&!cM(s,n)&&(i[s]=t[s])}function RU({transformTemplate:i},t){return Yt.useMemo(()=>{const n=Gm();return Hm(n,t,i),Object.assign({},n.vars,n.style)},[t])}function CU(i,t){const n=i.style||{},s={};return fM(s,n,i),Object.assign(s,RU(i,t)),s}function wU(i,t){const n={},s=CU(i,t);return i.drag&&i.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(n.tabIndex=0),n.style=s,n}const DU={offset:"stroke-dashoffset",array:"stroke-dasharray"},UU={offset:"strokeDashoffset",array:"strokeDasharray"};function LU(i,t,n=1,s=0,o=!0){i.pathLength=1;const u=o?DU:UU;i[u.offset]=ae.transform(-s);const c=ae.transform(t),h=ae.transform(n);i[u.array]=`${c} ${h}`}function hM(i,{attrX:t,attrY:n,attrScale:s,pathLength:o,pathSpacing:u=1,pathOffset:c=0,...h},p,d,g){if(Hm(i,h,d),p){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:v,style:_}=i;v.transform&&(_.transform=v.transform,delete v.transform),(_.transform||v.transformOrigin)&&(_.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),_.transform&&(_.transformBox=g?.transformBox??"fill-box",delete v.transformBox),t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),s!==void 0&&(v.scale=s),o!==void 0&&LU(v,o,u,c,!1)}const dM=()=>({...Gm(),attrs:{}}),pM=i=>typeof i=="string"&&i.toLowerCase()==="svg";function NU(i,t,n,s){const o=Yt.useMemo(()=>{const u=dM();return hM(u,t,pM(s),i.transformTemplate,i.style),{...u.attrs,style:{...u.style}}},[t]);if(i.style){const u={};fM(u,i.style,i),o.style={...u,...o.style}}return o}const PU=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function km(i){return typeof i!="string"||i.includes("-")?!1:!!(PU.indexOf(i)>-1||/[A-Z]/u.test(i))}function OU(i,t,n,{latestValues:s},o,u=!1){const h=(km(i)?NU:wU)(t,s,o,i),p=xU(t,typeof i=="string",u),d=i!==Yt.Fragment?{...p,...h,ref:n}:{},{children:g}=t,v=Yt.useMemo(()=>Bn(g)?g.get():g,[g]);return Yt.createElement(i,{...d,children:v})}function Zy(i){const t=[{},{}];return i?.values.forEach((n,s)=>{t[0][s]=n.get(),t[1][s]=n.getVelocity()}),t}function Xm(i,t,n,s){if(typeof t=="function"){const[o,u]=Zy(s);t=t(n!==void 0?n:i.custom,o,u)}if(typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"){const[o,u]=Zy(s);t=t(n!==void 0?n:i.custom,o,u)}return t}function wc(i){return Bn(i)?i.get():i}function BU({scrapeMotionValuesFromProps:i,createRenderState:t},n,s,o){return{latestValues:FU(n,s,o,i),renderState:t()}}function FU(i,t,n,s){const o={},u=s(i,{});for(const _ in u)o[_]=wc(u[_]);let{initial:c,animate:h}=i;const p=Yc(i),d=uM(i);t&&d&&!p&&i.inherit!==!1&&(c===void 0&&(c=t.initial),h===void 0&&(h=t.animate));let g=n?n.initial===!1:!1;g=g||c===!1;const v=g?h:c;if(v&&typeof v!="boolean"&&!qc(v)){const _=Array.isArray(v)?v:[v];for(let S=0;S<_.length;S++){const T=Xm(i,_[S]);if(T){const{transitionEnd:b,transition:M,...y}=T;for(const O in y){let D=y[O];if(Array.isArray(D)){const C=g?D.length-1:0;D=D[C]}D!==null&&(o[O]=D)}for(const O in b)o[O]=b[O]}}}return o}const mM=i=>(t,n)=>{const s=Yt.useContext(Wc),o=Yt.useContext(vm),u=()=>BU(i,t,s,o);return n?u():v2(u)};function Wm(i,t,n){const{style:s}=i,o={};for(const u in s)(Bn(s[u])||t.style&&Bn(t.style[u])||cM(u,i)||n?.getValue(u)?.liveStyle!==void 0)&&(o[u]=s[u]);return o}const IU=mM({scrapeMotionValuesFromProps:Wm,createRenderState:Gm});function gM(i,t,n){const s=Wm(i,t,n);for(const o in i)if(Bn(i[o])||Bn(t[o])){const u=oo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[u]=i[o]}return s}const zU=mM({scrapeMotionValuesFromProps:gM,createRenderState:dM}),VU=Symbol.for("motionComponentSymbol");function kr(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function HU(i,t,n){return Yt.useCallback(s=>{s&&i.onMount&&i.onMount(s),t&&(s?t.mount(s):t.unmount()),n&&(typeof n=="function"?n(s):kr(n)&&(n.current=s))},[t,n])}const qm=i=>i.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),GU="framerAppearId",vM="data-"+qm(GU),_M=Yt.createContext({});function kU(i,t,n,s,o){const{visualElement:u}=Yt.useContext(Wc),c=Yt.useContext(oM),h=Yt.useContext(vm),p=Yt.useContext(rM).reducedMotion,d=Yt.useRef(null);s=s||c.renderer,!d.current&&s&&(d.current=s(i,{visualState:t,parent:u,props:n,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const g=d.current,v=Yt.useContext(_M);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&XU(d.current,n,o,v);const _=Yt.useRef(!1);Yt.useInsertionEffect(()=>{g&&_.current&&g.update(n,h)});const S=n[vM],T=Yt.useRef(!!S&&!window.MotionHandoffIsComplete?.(S)&&window.MotionHasOptimisedAnimation?.(S));return _2(()=>{g&&(_.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),T.current&&g.animationState&&g.animationState.animateChanges())}),Yt.useEffect(()=>{g&&(!T.current&&g.animationState&&g.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(S)}),T.current=!1),g.enteringChildren=void 0)}),g}function XU(i,t,n,s){const{layoutId:o,layout:u,drag:c,dragConstraints:h,layoutScroll:p,layoutRoot:d,layoutCrossfade:g}=t;i.projection=new n(i.latestValues,t["data-framer-portal-id"]?void 0:yM(i.parent)),i.projection.setOptions({layoutId:o,layout:u,alwaysMeasureLayout:!!c||h&&kr(h),visualElement:i,animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,crossfade:g,layoutScroll:p,layoutRoot:d})}function yM(i){if(i)return i.options.allowProjection!==!1?i.projection:yM(i.parent)}function Vd(i,{forwardMotionProps:t=!1}={},n,s){n&&vU(n);const o=km(i)?zU:IU;function u(h,p){let d;const g={...Yt.useContext(rM),...h,layoutId:WU(h)},{isStatic:v}=g,_=MU(h),S=o(h,v);if(!v&&gm){qU();const T=YU(g);d=T.MeasureLayout,_.visualElement=kU(i,S,g,s,T.ProjectionNode)}return Re.jsxs(Wc.Provider,{value:_,children:[d&&_.visualElement?Re.jsx(d,{visualElement:_.visualElement,...g}):null,OU(i,h,HU(S,_.visualElement,p),S,v,t)]})}u.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const c=Yt.forwardRef(u);return c[VU]=i,c}function WU({layoutId:i}){const t=Yt.useContext(gS).id;return t&&i!==void 0?t+"-"+i:i}function qU(i,t){Yt.useContext(oM).strict}function YU(i){const{drag:t,layout:n}=no;if(!t&&!n)return{};const s={...t,...n};return{MeasureLayout:t?.isEnabled(i)||n?.isEnabled(i)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function jU(i,t){if(typeof Proxy>"u")return Vd;const n=new Map,s=(u,c)=>Vd(u,c,i,t),o=(u,c)=>s(u,c);return new Proxy(o,{get:(u,c)=>c==="create"?s:(n.has(c)||n.set(c,Vd(c,void 0,i,t)),n.get(c))})}function xM({top:i,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:i,max:s}}}function KU({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function ZU(i,t){if(!t)return i;const n=t({x:i.left,y:i.top}),s=t({x:i.right,y:i.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function Hd(i){return i===void 0||i===1}function Jp({scale:i,scaleX:t,scaleY:n}){return!Hd(i)||!Hd(t)||!Hd(n)}function Bs(i){return Jp(i)||SM(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function SM(i){return Qy(i.x)||Qy(i.y)}function Qy(i){return i&&i!=="0%"}function Hc(i,t,n){const s=i-n,o=t*s;return n+o}function Jy(i,t,n,s,o){return o!==void 0&&(i=Hc(i,o,s)),Hc(i,n,s)+t}function $p(i,t=0,n=1,s,o){i.min=Jy(i.min,t,n,s,o),i.max=Jy(i.max,t,n,s,o)}function MM(i,{x:t,y:n}){$p(i.x,t.translate,t.scale,t.originPoint),$p(i.y,n.translate,n.scale,n.originPoint)}const $y=.999999999999,tx=1.0000000000001;function QU(i,t,n,s=!1){const o=n.length;if(!o)return;t.x=t.y=1;let u,c;for(let h=0;h<o;h++){u=n[h],c=u.projectionDelta;const{visualElement:p}=u.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Wr(i,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(t.x*=c.x.scale,t.y*=c.y.scale,MM(i,c)),s&&Bs(u.latestValues)&&Wr(i,u.latestValues))}t.x<tx&&t.x>$y&&(t.x=1),t.y<tx&&t.y>$y&&(t.y=1)}function Xr(i,t){i.min=i.min+t,i.max=i.max+t}function ex(i,t,n,s,o=.5){const u=Ze(i.min,i.max,o);$p(i,t,n,u,s)}function Wr(i,t){ex(i.x,t.x,t.scaleX,t.scale,t.originX),ex(i.y,t.y,t.scaleY,t.scale,t.originY)}function EM(i,t){return xM(ZU(i.getBoundingClientRect(),t))}function JU(i,t,n){const s=EM(i,n),{scroll:o}=t;return o&&(Xr(s.x,o.offset.x),Xr(s.y,o.offset.y)),s}const nx=()=>({translate:0,scale:1,origin:0,originPoint:0}),qr=()=>({x:nx(),y:nx()}),ix=()=>({min:0,max:0}),on=()=>({x:ix(),y:ix()}),tm={current:null},TM={current:!1};function $U(){if(TM.current=!0,!!gm)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>tm.current=i.matches;i.addEventListener("change",t),t()}else tm.current=!1}const t3=new WeakMap;function e3(i,t,n){for(const s in t){const o=t[s],u=n[s];if(Bn(o))i.addValue(s,o);else if(Bn(u))i.addValue(s,eo(o,{owner:i}));else if(u!==o)if(i.hasValue(s)){const c=i.getValue(s);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=i.getStaticValue(s);i.addValue(s,eo(c!==void 0?c:o,{owner:i}))}}for(const s in n)t[s]===void 0&&i.removeValue(s);return t}const ax=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class n3{scrapeMotionValuesFromProps(t,n,s){return{}}constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:o,blockInitialAnimation:u,visualState:c},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Pm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Zn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,je.render(this.render,!1,!0))};const{latestValues:p,renderState:d}=c;this.latestValues=p,this.baseTarget={...p},this.initialValues=n.initial?{...p}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=h,this.blockInitialAnimation=!!u,this.isControllingVariants=Yc(n),this.isVariantNode=uM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const _ in v){const S=v[_];p[_]!==void 0&&Bn(S)&&S.set(p[_])}}mount(t){this.current=t,t3.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,s)=>this.bindToMotionValue(s,n)),TM.current||$U(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:tm.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),os(this.notifyUpdate),os(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const s=lo.has(t);s&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",c=>{this.latestValues[t]=c,this.props.onUpdate&&je.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),u&&u(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in no){const n=no[t];if(!n)continue;const{isEnabled:s,Feature:o}=n;if(!this.features[t]&&o&&s(this.props)&&(this.features[t]=new o(this)),this.features[t]){const u=this.features[t];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):on()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<ax.length;s++){const o=ax[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const u="on"+o,c=t[u];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=e3(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const s=this.values.get(t);n!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=eo(n===null?void 0:n,{owner:this}),this.addValue(t,s)),s}readValue(t,n){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(vS(s)||yS(s))?s=parseFloat(s):!mU(s)&&ls.test(n)&&(s=tM(t,n)),this.setBaseTarget(t,Bn(s)?s.get():s)),Bn(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const u=Xm(this.props,n,this.presenceContext?.custom);u&&(s=u[t])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Bn(o)?o:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Mm),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Fm.render(this.render)}}class bM extends n3{constructor(){super(...arguments),this.KeyframeResolver=nU}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Bn(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function AM(i,{style:t,vars:n},s,o){const u=i.style;let c;for(c in t)u[c]=t[c];o?.applyProjectionStyles(u,s);for(c in n)u.setProperty(c,n[c])}function i3(i){return window.getComputedStyle(i)}class a3 extends bM{constructor(){super(...arguments),this.type="html",this.renderInstance=AM}readValueFromInstance(t,n){if(lo.has(n))return this.projection?.isProjecting?Wp(n):SD(t,n);{const s=i3(t),o=(bm(n)?s.getPropertyValue(n):s[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return EM(t,n)}build(t,n,s){Hm(t,n,s.transformTemplate)}scrapeMotionValuesFromProps(t,n,s){return Wm(t,n,s)}}const RM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function s3(i,t,n,s){AM(i,t,void 0,s);for(const o in t.attrs)i.setAttribute(RM.has(o)?o:qm(o),t.attrs[o])}class r3 extends bM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=on}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(lo.has(n)){const s=$S(n);return s&&s.default||0}return n=RM.has(n)?n:qm(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,s){return gM(t,n,s)}build(t,n,s){hM(t,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,n,s,o){s3(t,n,s,o)}mount(t){this.isSVGTag=pM(t.tagName),super.mount(t)}}const o3=(i,t)=>km(i)?new r3(t):new a3(t,{allowProjection:i!==Yt.Fragment});function Kr(i,t,n){const s=i.getProps();return Xm(s,t,n!==void 0?n:s.custom,i)}const em=i=>Array.isArray(i);function l3(i,t,n){i.hasValue(t)?i.getValue(t).set(n):i.addValue(t,eo(n))}function u3(i){return em(i)?i[i.length-1]||0:i}function c3(i,t){const n=Kr(i,t);let{transitionEnd:s={},transition:o={},...u}=n||{};u={...u,...s};for(const c in u){const h=u3(u[c]);l3(i,c,h)}}function f3(i){return!!(Bn(i)&&i.add)}function nm(i,t){const n=i.getValue("willChange");if(f3(n))return n.add(t);if(!n&&Ea.WillChange){const s=new Ea.WillChange("auto");i.addValue("willChange",s),s.add(t)}}function CM(i){return i.props[vM]}const h3=i=>i!==null;function d3(i,{repeat:t,repeatType:n="loop"},s){const o=i.filter(h3),u=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[u]}const p3={type:"spring",stiffness:500,damping:25,restSpeed:10},m3=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),g3={type:"keyframes",duration:.8},v3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},_3=(i,{keyframes:t})=>t.length>2?g3:lo.has(i)?i.startsWith("scale")?m3(t[1]):p3:v3;function y3({when:i,delay:t,delayChildren:n,staggerChildren:s,staggerDirection:o,repeat:u,repeatType:c,repeatDelay:h,from:p,elapsed:d,...g}){return!!Object.keys(g).length}const Ym=(i,t,n,s={},o,u)=>c=>{const h=Om(s,i)||{},p=h.delay||s.delay||0;let{elapsed:d=0}=s;d=d-qi(p);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...h,delay:-d,onUpdate:_=>{t.set(_),h.onUpdate&&h.onUpdate(_)},onComplete:()=>{c(),h.onComplete&&h.onComplete()},name:i,motionValue:t,element:u?void 0:o};y3(h)||Object.assign(g,_3(i,g)),g.duration&&(g.duration=qi(g.duration)),g.repeatDelay&&(g.repeatDelay=qi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Zp(g),g.delay===0&&(v=!0)),(Ea.instantAnimations||Ea.skipAnimations)&&(v=!0,Zp(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,v&&!u&&t.get()!==void 0){const _=d3(g.keyframes,h);if(_!==void 0){je.update(()=>{g.onUpdate(_),g.onComplete()});return}}return h.isSync?new Nm(g):new XD(g)};function x3({protectedKeys:i,needsAnimating:t},n){const s=i.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function wM(i,t,{delay:n=0,transitionOverride:s,type:o}={}){let{transition:u=i.getDefaultTransition(),transitionEnd:c,...h}=t;s&&(u=s);const p=[],d=o&&i.animationState&&i.animationState.getState()[o];for(const g in h){const v=i.getValue(g,i.latestValues[g]??null),_=h[g];if(_===void 0||d&&x3(d,g))continue;const S={delay:n,...Om(u||{},g)},T=v.get();if(T!==void 0&&!v.isAnimating&&!Array.isArray(_)&&_===T&&!S.velocity)continue;let b=!1;if(window.MotionHandoffAnimation){const y=CM(i);if(y){const O=window.MotionHandoffAnimation(y,g,je);O!==null&&(S.startTime=O,b=!0)}}nm(i,g),v.start(Ym(g,v,_,i.shouldReduceMotion&&ZS.has(g)?{type:!1}:S,i,b));const M=v.animation;M&&p.push(M)}return c&&Promise.all(p).then(()=>{je.update(()=>{c&&c3(i,c)})}),p}function DM(i,t,n,s=0,o=1){const u=Array.from(i).sort((d,g)=>d.sortNodePosition(g)).indexOf(t),c=i.size,h=(c-1)*s;return typeof n=="function"?n(u,c):o===1?u*s:h-u*s}function im(i,t,n={}){const s=Kr(i,t,n.type==="exit"?i.presenceContext?.custom:void 0);let{transition:o=i.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const u=s?()=>Promise.all(wM(i,s,n)):()=>Promise.resolve(),c=i.variantChildren&&i.variantChildren.size?(p=0)=>{const{delayChildren:d=0,staggerChildren:g,staggerDirection:v}=o;return S3(i,t,p,d,g,v,n)}:()=>Promise.resolve(),{when:h}=o;if(h){const[p,d]=h==="beforeChildren"?[u,c]:[c,u];return p().then(()=>d())}else return Promise.all([u(),c(n.delay)])}function S3(i,t,n=0,s=0,o=0,u=1,c){const h=[];for(const p of i.variantChildren)p.notify("AnimationStart",t),h.push(im(p,t,{...c,delay:n+(typeof s=="function"?0:s)+DM(i.variantChildren,p,s,o,u)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(h)}function M3(i,t,n={}){i.notify("AnimationStart",t);let s;if(Array.isArray(t)){const o=t.map(u=>im(i,u,n));s=Promise.all(o)}else if(typeof t=="string")s=im(i,t,n);else{const o=typeof t=="function"?Kr(i,t,n.custom):t;s=Promise.all(wM(i,o,n))}return s.then(()=>{i.notify("AnimationComplete",t)})}function UM(i,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==i.length)return!1;for(let s=0;s<n;s++)if(t[s]!==i[s])return!1;return!0}const E3=Vm.length;function LM(i){if(!i)return;if(!i.isControllingVariants){const n=i.parent?LM(i.parent)||{}:{};return i.props.initial!==void 0&&(n.initial=i.props.initial),n}const t={};for(let n=0;n<E3;n++){const s=Vm[n],o=i.props[s];(Rl(o)||o===!1)&&(t[s]=o)}return t}const T3=[...zm].reverse(),b3=zm.length;function A3(i){return t=>Promise.all(t.map(({animation:n,options:s})=>M3(i,n,s)))}function R3(i){let t=A3(i),n=sx(),s=!0;const o=p=>(d,g)=>{const v=Kr(i,g,p==="exit"?i.presenceContext?.custom:void 0);if(v){const{transition:_,transitionEnd:S,...T}=v;d={...d,...T,...S}}return d};function u(p){t=p(i)}function c(p){const{props:d}=i,g=LM(i.parent)||{},v=[],_=new Set;let S={},T=1/0;for(let M=0;M<b3;M++){const y=T3[M],O=n[y],D=d[y]!==void 0?d[y]:g[y],C=Rl(D),P=y===p?O.isActive:null;P===!1&&(T=M);let F=D===g[y]&&D!==d[y]&&C;if(F&&s&&i.manuallyAnimateOnMount&&(F=!1),O.protectedKeys={...S},!O.isActive&&P===null||!D&&!O.prevProp||qc(D)||typeof D=="boolean")continue;const z=C3(O.prevProp,D);let k=z||y===p&&O.isActive&&!F&&C||M>T&&C,U=!1;const w=Array.isArray(D)?D:[D];let H=w.reduce(o(y),{});P===!1&&(H={});const{prevResolvedValues:nt={}}=O,ft={...nt,...H},ht=Y=>{k=!0,_.has(Y)&&(U=!0,_.delete(Y)),O.needsAnimating[Y]=!0;const W=i.getValue(Y);W&&(W.liveStyle=!1)};for(const Y in ft){const W=H[Y],gt=nt[Y];if(S.hasOwnProperty(Y))continue;let N=!1;em(W)&&em(gt)?N=!UM(W,gt):N=W!==gt,N?W!=null?ht(Y):_.add(Y):W!==void 0&&_.has(Y)?ht(Y):O.protectedKeys[Y]=!0}O.prevProp=D,O.prevResolvedValues=H,O.isActive&&(S={...S,...H}),s&&i.blockInitialAnimation&&(k=!1);const ct=F&&z;k&&(!ct||U)&&v.push(...w.map(Y=>{const W={type:y};if(typeof Y=="string"&&s&&!ct&&i.manuallyAnimateOnMount&&i.parent){const{parent:gt}=i,N=Kr(gt,Y);if(gt.enteringChildren&&N){const{delayChildren:$}=N.transition||{};W.delay=DM(gt.enteringChildren,i,$)}}return{animation:Y,options:W}}))}if(_.size){const M={};if(typeof d.initial!="boolean"){const y=Kr(i,Array.isArray(d.initial)?d.initial[0]:d.initial);y&&y.transition&&(M.transition=y.transition)}_.forEach(y=>{const O=i.getBaseTarget(y),D=i.getValue(y);D&&(D.liveStyle=!0),M[y]=O??null}),v.push({animation:M})}let b=!!v.length;return s&&(d.initial===!1||d.initial===d.animate)&&!i.manuallyAnimateOnMount&&(b=!1),s=!1,b?t(v):Promise.resolve()}function h(p,d){if(n[p].isActive===d)return Promise.resolve();i.variantChildren?.forEach(v=>v.animationState?.setActive(p,d)),n[p].isActive=d;const g=c(p);for(const v in n)n[v].protectedKeys={};return g}return{animateChanges:c,setActive:h,setAnimateFunction:u,getState:()=>n,reset:()=>{n=sx(),s=!0}}}function C3(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!UM(t,i):!1}function Ns(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function sx(){return{animate:Ns(!0),whileInView:Ns(),whileHover:Ns(),whileTap:Ns(),whileDrag:Ns(),whileFocus:Ns(),exit:Ns()}}class us{constructor(t){this.isMounted=!1,this.node=t}update(){}}class w3 extends us{constructor(t){super(t),t.animationState||(t.animationState=R3(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();qc(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let D3=0;class U3 extends us{constructor(){super(...arguments),this.id=D3++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const L3={animation:{Feature:w3},exit:{Feature:U3}};function wl(i,t,n,s={passive:!0}){return i.addEventListener(t,n,s),()=>i.removeEventListener(t,n)}function Il(i){return{point:{x:i.pageX,y:i.pageY}}}const N3=i=>t=>Im(t)&&i(t,Il(t));function gl(i,t,n,s){return wl(i,t,N3(n),s)}const NM=1e-4,P3=1-NM,O3=1+NM,PM=.01,B3=0-PM,F3=0+PM;function Hn(i){return i.max-i.min}function I3(i,t,n){return Math.abs(i-t)<=n}function rx(i,t,n,s=.5){i.origin=s,i.originPoint=Ze(t.min,t.max,i.origin),i.scale=Hn(n)/Hn(t),i.translate=Ze(n.min,n.max,i.origin)-i.originPoint,(i.scale>=P3&&i.scale<=O3||isNaN(i.scale))&&(i.scale=1),(i.translate>=B3&&i.translate<=F3||isNaN(i.translate))&&(i.translate=0)}function vl(i,t,n,s){rx(i.x,t.x,n.x,s?s.originX:void 0),rx(i.y,t.y,n.y,s?s.originY:void 0)}function ox(i,t,n){i.min=n.min+t.min,i.max=i.min+Hn(t)}function z3(i,t,n){ox(i.x,t.x,n.x),ox(i.y,t.y,n.y)}function lx(i,t,n){i.min=t.min-n.min,i.max=i.min+Hn(t)}function _l(i,t,n){lx(i.x,t.x,n.x),lx(i.y,t.y,n.y)}function _i(i){return[i("x"),i("y")]}const OM=({current:i})=>i?i.ownerDocument.defaultView:null,ux=(i,t)=>Math.abs(i-t);function V3(i,t){const n=ux(i.x,t.x),s=ux(i.y,t.y);return Math.sqrt(n**2+s**2)}class BM{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:u=!1,distanceThreshold:c=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=kd(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,T=V3(_.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!T)return;const{point:b}=_,{timestamp:M}=wn;this.history.push({...b,timestamp:M});const{onStart:y,onMove:O}=this.handlers;S||(y&&y(this.lastMoveEvent,_),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,_)},this.handlePointerMove=(_,S)=>{this.lastMoveEvent=_,this.lastMoveEventInfo=Gd(S,this.transformPagePoint),je.update(this.updatePoint,!0)},this.handlePointerUp=(_,S)=>{this.end();const{onEnd:T,onSessionEnd:b,resumeAnimation:M}=this.handlers;if(this.dragSnapToOrigin&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=kd(_.type==="pointercancel"?this.lastMoveEventInfo:Gd(S,this.transformPagePoint),this.history);this.startEvent&&T&&T(_,y),b&&b(_,y)},!Im(t))return;this.dragSnapToOrigin=u,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=c,this.contextWindow=o||window;const h=Il(t),p=Gd(h,this.transformPagePoint),{point:d}=p,{timestamp:g}=wn;this.history=[{...d,timestamp:g}];const{onSessionStart:v}=n;v&&v(t,kd(p,this.history)),this.removeListeners=Ol(gl(this.contextWindow,"pointermove",this.handlePointerMove),gl(this.contextWindow,"pointerup",this.handlePointerUp),gl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),os(this.updatePoint)}}function Gd(i,t){return t?{point:t(i.point)}:i}function cx(i,t){return{x:i.x-t.x,y:i.y-t.y}}function kd({point:i},t){return{point:i,delta:cx(i,FM(t)),offset:cx(i,H3(t)),velocity:G3(t,.1)}}function H3(i){return i[0]}function FM(i){return i[i.length-1]}function G3(i,t){if(i.length<2)return{x:0,y:0};let n=i.length-1,s=null;const o=FM(i);for(;n>=0&&(s=i[n],!(o.timestamp-s.timestamp>qi(t)));)n--;if(!s)return{x:0,y:0};const u=Yi(o.timestamp-s.timestamp);if(u===0)return{x:0,y:0};const c={x:(o.x-s.x)/u,y:(o.y-s.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function k3(i,{min:t,max:n},s){return t!==void 0&&i<t?i=s?Ze(t,i,s.min):Math.max(i,t):n!==void 0&&i>n&&(i=s?Ze(n,i,s.max):Math.min(i,n)),i}function fx(i,t,n){return{min:t!==void 0?i.min+t:void 0,max:n!==void 0?i.max+n-(i.max-i.min):void 0}}function X3(i,{top:t,left:n,bottom:s,right:o}){return{x:fx(i.x,n,o),y:fx(i.y,t,s)}}function hx(i,t){let n=t.min-i.min,s=t.max-i.max;return t.max-t.min<i.max-i.min&&([n,s]=[s,n]),{min:n,max:s}}function W3(i,t){return{x:hx(i.x,t.x),y:hx(i.y,t.y)}}function q3(i,t){let n=.5;const s=Hn(i),o=Hn(t);return o>s?n=Tl(t.min,t.max-s,i.min):s>o&&(n=Tl(i.min,i.max-o,t.min)),Ma(0,1,n)}function Y3(i,t){const n={};return t.min!==void 0&&(n.min=t.min-i.min),t.max!==void 0&&(n.max=t.max-i.min),n}const am=.35;function j3(i=am){return i===!1?i=0:i===!0&&(i=am),{x:dx(i,"left","right"),y:dx(i,"top","bottom")}}function dx(i,t,n){return{min:px(i,t),max:px(i,n)}}function px(i,t){return typeof i=="number"?i:i[t]||0}const K3=new WeakMap;class Z3{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=on(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const u=v=>{const{dragSnapToOrigin:_}=this.getProps();_?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Il(v).point)},c=(v,_)=>{const{drag:S,dragPropagation:T,onDragStart:b}=this.getProps();if(S&&!T&&(this.openDragLock&&this.openDragLock(),this.openDragLock=oU(S),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=_,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_i(y=>{let O=this.getAxisMotionValue(y).get()||0;if(ji.test(O)){const{projection:D}=this.visualElement;if(D&&D.layout){const C=D.layout.layoutBox[y];C&&(O=Hn(C)*(parseFloat(O)/100))}}this.originPoint[y]=O}),b&&je.postRender(()=>b(v,_)),nm(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},h=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_;const{dragPropagation:S,dragDirectionLock:T,onDirectionLock:b,onDrag:M}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:y}=_;if(T&&this.currentDirection===null){this.currentDirection=Q3(y),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",_.point,y),this.updateAxis("y",_.point,y),this.visualElement.render(),M&&M(v,_)},p=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_,this.stop(v,_),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>_i(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:g}=this.getProps();this.panSession=new BM(t,{onSessionStart:u,onStart:c,onMove:h,onSessionEnd:p,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:s,contextWindow:OM(this.visualElement)})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!o||!s)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:h}=this.getProps();h&&je.postRender(()=>h(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!Sc(t,o,this.currentDirection))return;const u=this.getAxisMotionValue(t);let c=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(c=k3(c,this.constraints[t],this.elastic[t])),u.set(c)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;t&&kr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=X3(s.layoutBox,t):this.constraints=!1,this.elastic=j3(n),o!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&_i(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=Y3(s.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!kr(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const u=JU(s,o.root,this.visualElement.getTransformPagePoint());let c=W3(o.layout.layoutBox,u);if(n){const h=n(KU(c));this.hasMutatedConstraints=!!h,h&&(c=xM(h))}return c}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},d=_i(g=>{if(!Sc(g,n,this.currentDirection))return;let v=p&&p[g]||{};c&&(v={min:0,max:0});const _=o?200:1e6,S=o?40:1e7,T={type:"inertia",velocity:s?t[g]:0,bounceStiffness:_,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...v};return this.startAxisValueAnimation(g,T)});return Promise.all(d).then(h)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return nm(this.visualElement,t),s.start(Ym(t,s,0,n,this.visualElement,!1))}stopAnimation(){_i(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){_i(t=>this.getAxisMotionValue(t).animation?.pause())}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){_i(n=>{const{drag:s}=this.getProps();if(!Sc(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,u=this.getAxisMotionValue(n);if(o&&o.layout){const{min:c,max:h}=o.layout.layoutBox[n];u.set(t[n]-Ze(c,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!kr(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};_i(c=>{const h=this.getAxisMotionValue(c);if(h&&this.constraints!==!1){const p=h.get();o[c]=q3({min:p,max:p},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),_i(c=>{if(!Sc(c,t,null))return;const h=this.getAxisMotionValue(c),{min:p,max:d}=this.constraints[c];h.set(Ze(p,d,o[c]))})}addListeners(){if(!this.visualElement.current)return;K3.set(this.visualElement,this);const t=this.visualElement.current,n=gl(t,"pointerdown",p=>{const{drag:d,dragListener:g=!0}=this.getProps();d&&g&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();kr(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,u=o.addEventListener("measure",s);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),je.read(s);const c=wl(window,"resize",()=>this.scalePositionWithinConstraints()),h=o.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:d})=>{this.isDragging&&d&&(_i(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=p[g].translate,v.set(v.get()+p[g].translate))}),this.visualElement.render())}));return()=>{c(),n(),u(),h&&h()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:u=!1,dragElastic:c=am,dragMomentum:h=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:u,dragElastic:c,dragMomentum:h}}}function Sc(i,t,n){return(t===!0||t===i)&&(n===null||n===i)}function Q3(i,t=10){let n=null;return Math.abs(i.y)>t?n="y":Math.abs(i.x)>t&&(n="x"),n}class J3 extends us{constructor(t){super(t),this.removeGroupControls=Mi,this.removeListeners=Mi,this.controls=new Z3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Mi}unmount(){this.removeGroupControls(),this.removeListeners()}}const mx=i=>(t,n)=>{i&&je.postRender(()=>i(t,n))};class $3 extends us{constructor(){super(...arguments),this.removePointerDownListener=Mi}onPointerDown(t){this.session=new BM(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:OM(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:mx(t),onStart:mx(n),onMove:s,onEnd:(u,c)=>{delete this.session,o&&je.postRender(()=>o(u,c))}}}mount(){this.removePointerDownListener=gl(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Dc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function gx(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const fl={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(ae.test(i))i=parseFloat(i);else return i;const n=gx(i,t.target.x),s=gx(i,t.target.y);return`${n}% ${s}%`}},tL={correct:(i,{treeScale:t,projectionDelta:n})=>{const s=i,o=ls.parse(i);if(o.length>5)return s;const u=ls.createTransformer(i),c=typeof o[0]!="number"?1:0,h=n.x.scale*t.x,p=n.y.scale*t.y;o[0+c]/=h,o[1+c]/=p;const d=Ze(h,p,.5);return typeof o[2+c]=="number"&&(o[2+c]/=d),typeof o[3+c]=="number"&&(o[3+c]/=d),u(o)}};let Xd=!1;class eL extends Yt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:u}=t;EU(nL),u&&(n.group&&n.group.add(u),s&&s.register&&o&&s.register(u),Xd&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),Dc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:u}=this.props,{projection:c}=s;return c&&(c.isPresent=u,Xd=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==u?c.willUpdate():this.safeToRemove(),t.isPresent!==u&&(u?c.promote():c.relegate()||je.postRender(()=>{const h=c.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Fm.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;Xd=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function IM(i){const[t,n]=gU(),s=Yt.useContext(gS);return Re.jsx(eL,{...i,layoutGroup:s,switchLayoutGroup:Yt.useContext(_M),isPresent:t,safeToRemove:n})}const nL={borderRadius:{...fl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fl,borderTopRightRadius:fl,borderBottomLeftRadius:fl,borderBottomRightRadius:fl,boxShadow:tL};function iL(i,t,n){const s=Bn(i)?i:eo(i);return s.start(Ym("",s,t,n)),s.animation}const aL=(i,t)=>i.depth-t.depth;class sL{constructor(){this.children=[],this.isDirty=!1}add(t){_m(this.children,t),this.isDirty=!0}remove(t){ym(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(aL),this.isDirty=!1,this.children.forEach(t)}}function rL(i,t){const n=Zn.now(),s=({timestamp:o})=>{const u=o-n;u>=t&&(os(s),i(u-t))};return je.setup(s,!0),()=>os(s)}const zM=["TopLeft","TopRight","BottomLeft","BottomRight"],oL=zM.length,vx=i=>typeof i=="string"?parseFloat(i):i,_x=i=>typeof i=="number"||ae.test(i);function lL(i,t,n,s,o,u){o?(i.opacity=Ze(0,n.opacity??1,uL(s)),i.opacityExit=Ze(t.opacity??1,0,cL(s))):u&&(i.opacity=Ze(t.opacity??1,n.opacity??1,s));for(let c=0;c<oL;c++){const h=`border${zM[c]}Radius`;let p=yx(t,h),d=yx(n,h);if(p===void 0&&d===void 0)continue;p||(p=0),d||(d=0),p===0||d===0||_x(p)===_x(d)?(i[h]=Math.max(Ze(vx(p),vx(d),s),0),(ji.test(d)||ji.test(p))&&(i[h]+="%")):i[h]=d}(t.rotate||n.rotate)&&(i.rotate=Ze(t.rotate||0,n.rotate||0,s))}function yx(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const uL=VM(0,.5,RS),cL=VM(.5,.95,Mi);function VM(i,t,n){return s=>s<i?0:s>t?1:n(Tl(i,t,s))}function xx(i,t){i.min=t.min,i.max=t.max}function vi(i,t){xx(i.x,t.x),xx(i.y,t.y)}function Sx(i,t){i.translate=t.translate,i.scale=t.scale,i.originPoint=t.originPoint,i.origin=t.origin}function Mx(i,t,n,s,o){return i-=t,i=Hc(i,1/n,s),o!==void 0&&(i=Hc(i,1/o,s)),i}function fL(i,t=0,n=1,s=.5,o,u=i,c=i){if(ji.test(t)&&(t=parseFloat(t),t=Ze(c.min,c.max,t/100)-c.min),typeof t!="number")return;let h=Ze(u.min,u.max,s);i===u&&(h-=t),i.min=Mx(i.min,t,n,h,o),i.max=Mx(i.max,t,n,h,o)}function Ex(i,t,[n,s,o],u,c){fL(i,t[n],t[s],t[o],t.scale,u,c)}const hL=["x","scaleX","originX"],dL=["y","scaleY","originY"];function Tx(i,t,n,s){Ex(i.x,t,hL,n?n.x:void 0,s?s.x:void 0),Ex(i.y,t,dL,n?n.y:void 0,s?s.y:void 0)}function bx(i){return i.translate===0&&i.scale===1}function HM(i){return bx(i.x)&&bx(i.y)}function Ax(i,t){return i.min===t.min&&i.max===t.max}function pL(i,t){return Ax(i.x,t.x)&&Ax(i.y,t.y)}function Rx(i,t){return Math.round(i.min)===Math.round(t.min)&&Math.round(i.max)===Math.round(t.max)}function GM(i,t){return Rx(i.x,t.x)&&Rx(i.y,t.y)}function Cx(i){return Hn(i.x)/Hn(i.y)}function wx(i,t){return i.translate===t.translate&&i.scale===t.scale&&i.originPoint===t.originPoint}class mL{constructor(){this.members=[]}add(t){_m(this.members,t),t.scheduleRender()}remove(t){if(ym(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let s;for(let o=n;o>=0;o--){const u=this.members[o];if(u.isPresent!==!1){s=u;break}}return s?(this.promote(s),!0):!1}promote(t,n){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender(),t.resumeFrom=s,n&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:s}=t;n.onExitComplete&&n.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function gL(i,t,n){let s="";const o=i.x.translate/t.x,u=i.y.translate/t.y,c=n?.z||0;if((o||u||c)&&(s=`translate3d(${o}px, ${u}px, ${c}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:g,rotateX:v,rotateY:_,skewX:S,skewY:T}=n;d&&(s=`perspective(${d}px) ${s}`),g&&(s+=`rotate(${g}deg) `),v&&(s+=`rotateX(${v}deg) `),_&&(s+=`rotateY(${_}deg) `),S&&(s+=`skewX(${S}deg) `),T&&(s+=`skewY(${T}deg) `)}const h=i.x.scale*t.x,p=i.y.scale*t.y;return(h!==1||p!==1)&&(s+=`scale(${h}, ${p})`),s||"none"}const Wd=["","X","Y","Z"],vL=1e3;let _L=0;function qd(i,t,n,s){const{latestValues:o}=t;o[i]&&(n[i]=o[i],t.setStaticValue(i,0),s&&(s[i]=0))}function kM(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:t}=i.options;if(!t)return;const n=CM(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:u}=i.options;window.MotionCancelOptimisedAnimation(n,"transform",je,!(o||u))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&kM(s)}function XM({attachResizeListener:i,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(c={},h=t?.()){this.id=_L++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(SL),this.nodes.forEach(bL),this.nodes.forEach(AL),this.nodes.forEach(ML)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new sL)}addEventListener(c,h){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Mm),this.eventHandlers.get(c).add(h)}notifyListeners(c,...h){const p=this.eventHandlers.get(c);p&&p.notify(...h)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=sM(c)&&!dU(c),this.instance=c;const{layoutId:h,layout:p,visualElement:d}=this.options;if(d&&!d.current&&d.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),i){let g,v=0;const _=()=>this.root.updateBlockedByResize=!1;je.read(()=>{v=window.innerWidth}),i(c,()=>{const S=window.innerWidth;S!==v&&(v=S,this.root.updateBlockedByResize=!0,g&&g(),g=rL(_,250),Dc.hasAnimatedSinceResize&&(Dc.hasAnimatedSinceResize=!1,this.nodes.forEach(Lx)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&d&&(h||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:_,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||d.getDefaultTransition()||UL,{onLayoutAnimationStart:b,onLayoutAnimationComplete:M}=d.getProps(),y=!this.targetLayout||!GM(this.targetLayout,S),O=!v&&_;if(this.options.layoutRoot||this.resumeFrom||O||v&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const D={...Om(T,"layout"),onPlay:b,onComplete:M};(d.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D),this.setAnimationOrigin(g,O)}else v||Lx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),os(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(RL),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&kM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Dx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ux);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(TL),this.nodes.forEach(yL),this.nodes.forEach(xL)):this.nodes.forEach(Ux),this.clearAllSnapshots();const h=Zn.now();wn.delta=Ma(0,1e3/60,h-wn.timestamp),wn.timestamp=h,wn.isProcessing=!0,Pd.update.process(wn),Pd.preRender.process(wn),Pd.render.process(wn),wn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Fm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(EL),this.sharedNodes.forEach(CL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,je.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Hn(this.snapshot.measuredBox.x)&&!Hn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=on(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(h=!1),h&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:p,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!HM(this.projectionDelta),p=this.getTransformTemplate(),d=p?p(this.latestValues,""):void 0,g=d!==this.prevTransformTemplateValue;c&&this.instance&&(h||Bs(this.latestValues)||g)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return c&&(p=this.removeTransform(p)),LL(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:c}=this.options;if(!c)return on();const h=c.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(NL))){const{scroll:d}=this.root;d&&(Xr(h.x,d.offset.x),Xr(h.y,d.offset.y))}return h}removeElementScroll(c){const h=on();if(vi(h,c),this.scroll?.wasRoot)return h;for(let p=0;p<this.path.length;p++){const d=this.path[p],{scroll:g,options:v}=d;d!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&vi(h,c),Xr(h.x,g.offset.x),Xr(h.y,g.offset.y))}return h}applyTransform(c,h=!1){const p=on();vi(p,c);for(let d=0;d<this.path.length;d++){const g=this.path[d];!h&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Wr(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Bs(g.latestValues)&&Wr(p,g.latestValues)}return Bs(this.latestValues)&&Wr(p,this.latestValues),p}removeTransform(c){const h=on();vi(h,c);for(let p=0;p<this.path.length;p++){const d=this.path[p];if(!d.instance||!Bs(d.latestValues))continue;Jp(d.latestValues)&&d.updateSnapshot();const g=on(),v=d.measurePageBox();vi(g,v),Tx(h,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,g)}return Bs(this.latestValues)&&Tx(h,this.latestValues),h}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==wn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(c||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=wn.timestamp,!this.targetDelta&&!this.relativeTarget){const _=this.getClosestProjectingParent();_&&_.layout&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=on(),this.relativeTargetOrigin=on(),_l(this.relativeTargetOrigin,this.layout.layoutBox,_.layout.layoutBox),vi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=on(),this.targetWithTransforms=on()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),z3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):vi(this.target,this.layout.layoutBox),MM(this.target,this.targetDelta)):vi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const _=this.getClosestProjectingParent();_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=on(),this.relativeTargetOrigin=on(),_l(this.relativeTargetOrigin,this.target,_.target),vi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Jp(this.parent.latestValues)||SM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const c=this.getLead(),h=!!this.resumingFrom||this!==c;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===wn.timestamp&&(p=!1),p)return;const{layout:d,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||g))return;vi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,_=this.treeScale.y;QU(this.layoutCorrected,this.treeScale,this.path,h),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=on());const{target:S}=c;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Sx(this.prevProjectionDelta.x,this.projectionDelta.x),Sx(this.prevProjectionDelta.y,this.projectionDelta.y)),vl(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==_||!wx(this.projectionDelta.x,this.prevProjectionDelta.x)||!wx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){if(this.options.visualElement?.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=qr(),this.projectionDelta=qr(),this.projectionDeltaWithTransform=qr()}setAnimationOrigin(c,h=!1){const p=this.snapshot,d=p?p.latestValues:{},g={...this.latestValues},v=qr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const _=on(),S=p?p.source:void 0,T=this.layout?this.layout.source:void 0,b=S!==T,M=this.getStack(),y=!M||M.members.length<=1,O=!!(b&&!y&&this.options.crossfade===!0&&!this.path.some(DL));this.animationProgress=0;let D;this.mixTargetDelta=C=>{const P=C/1e3;Nx(v.x,c.x,P),Nx(v.y,c.y,P),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(_l(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox),wL(this.relativeTarget,this.relativeTargetOrigin,_,P),D&&pL(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=on()),vi(D,this.relativeTarget)),b&&(this.animationValues=g,lL(g,d,this.latestValues,P,O,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(os(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=je.update(()=>{Dc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=eo(0)),this.currentAnimation=iL(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),c.onUpdate&&c.onUpdate(h)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(vL),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:h,target:p,layout:d,latestValues:g}=c;if(!(!h||!p||!d)){if(this!==c&&this.layout&&d&&WM(this.options.animationType,this.layout.layoutBox,d.layoutBox)){p=this.target||on();const v=Hn(this.layout.layoutBox.x);p.x.min=c.target.x.min,p.x.max=p.x.min+v;const _=Hn(this.layout.layoutBox.y);p.y.min=c.target.y.min,p.y.max=p.y.min+_}vi(h,p),Wr(h,g),vl(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(c,h){this.sharedNodes.has(c)||this.sharedNodes.set(c,new mL),this.sharedNodes.get(c).add(h);const d=h.options.initialPromotionConfig;h.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(h):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){const{layoutId:c}=this.options;return c?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:c}=this.options;return c?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:h,preserveFollowOpacity:p}={}){const d=this.getStack();d&&d.promote(this,p),c&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let h=!1;const{latestValues:p}=c;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const d={};p.z&&qd("z",c,d,this.animationValues);for(let g=0;g<Wd.length;g++)qd(`rotate${Wd[g]}`,c,d,this.animationValues),qd(`skew${Wd[g]}`,c,d,this.animationValues);c.render();for(const g in d)c.setStaticValue(g,d[g]),this.animationValues&&(this.animationValues[g]=d[g]);c.scheduleRender()}applyProjectionStyles(c,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=wc(h?.pointerEvents)||"",c.transform=p?p(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=wc(h?.pointerEvents)||""),this.hasProjected&&!Bs(this.latestValues)&&(c.transform=p?p({},""):"none",this.hasProjected=!1);return}c.visibility="";const g=d.animationValues||d.latestValues;this.applyTransformsToTarget();let v=gL(this.projectionDeltaWithTransform,this.treeScale,g);p&&(v=p(g,v)),c.transform=v;const{x:_,y:S}=this.projectionDelta;c.transformOrigin=`${_.origin*100}% ${S.origin*100}% 0`,d.animationValues?c.opacity=d===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:c.opacity=d===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const T in Cl){if(g[T]===void 0)continue;const{correct:b,applyTo:M,isCSSVariable:y}=Cl[T],O=v==="none"?g[T]:b(g[T],d);if(M){const D=M.length;for(let C=0;C<D;C++)c[M[C]]=O}else y?this.options.visualElement.renderState.vars[T]=O:c[T]=O}this.options.layoutId&&(c.pointerEvents=d===this?wc(h?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>c.currentAnimation?.stop()),this.root.nodes.forEach(Dx),this.root.sharedNodes.clear()}}}function yL(i){i.updateLayout()}function xL(i){const t=i.resumeFrom?.snapshot||i.snapshot;if(i.isLead()&&i.layout&&t&&i.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:s}=i.layout,{animationType:o}=i.options,u=t.source!==i.layout.source;o==="size"?_i(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],_=Hn(v);v.min=n[g].min,v.max=v.min+_}):WM(o,t.layoutBox,n)&&_i(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],_=Hn(n[g]);v.max=v.min+_,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[g].max=i.relativeTarget[g].min+_)});const c=qr();vl(c,n,t.layoutBox);const h=qr();u?vl(h,i.applyTransform(s,!0),t.measuredBox):vl(h,n,t.layoutBox);const p=!HM(c);let d=!1;if(!i.resumeFrom){const g=i.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:_}=g;if(v&&_){const S=on();_l(S,t.layoutBox,v.layoutBox);const T=on();_l(T,n,_.layoutBox),GM(S,T)||(d=!0),g.options.layoutRoot&&(i.relativeTarget=T,i.relativeTargetOrigin=S,i.relativeParent=g)}}}i.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:h,layoutDelta:c,hasLayoutChanged:p,hasRelativeLayoutChanged:d})}else if(i.isLead()){const{onExitComplete:n}=i.options;n&&n()}i.options.transition=void 0}function SL(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function ML(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function EL(i){i.clearSnapshot()}function Dx(i){i.clearMeasurements()}function Ux(i){i.isLayoutDirty=!1}function TL(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function Lx(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function bL(i){i.resolveTargetDelta()}function AL(i){i.calcProjection()}function RL(i){i.resetSkewAndRotation()}function CL(i){i.removeLeadSnapshot()}function Nx(i,t,n){i.translate=Ze(t.translate,0,n),i.scale=Ze(t.scale,1,n),i.origin=t.origin,i.originPoint=t.originPoint}function Px(i,t,n,s){i.min=Ze(t.min,n.min,s),i.max=Ze(t.max,n.max,s)}function wL(i,t,n,s){Px(i.x,t.x,n.x,s),Px(i.y,t.y,n.y,s)}function DL(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const UL={duration:.45,ease:[.4,0,.1,1]},Ox=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),Bx=Ox("applewebkit/")&&!Ox("chrome/")?Math.round:Mi;function Fx(i){i.min=Bx(i.min),i.max=Bx(i.max)}function LL(i){Fx(i.x),Fx(i.y)}function WM(i,t,n){return i==="position"||i==="preserve-aspect"&&!I3(Cx(t),Cx(n),.2)}function NL(i){return i!==i.root&&i.scroll?.wasRoot}const PL=XM({attachResizeListener:(i,t)=>wl(i,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Yd={current:void 0},qM=XM({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!Yd.current){const i=new PL({});i.mount(window),i.setOptions({layoutScroll:!0}),Yd.current=i}return Yd.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),OL={pan:{Feature:$3},drag:{Feature:J3,ProjectionNode:qM,MeasureLayout:IM}};function Ix(i,t,n){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,u=s[o];u&&je.postRender(()=>u(t,Il(t)))}class BL extends us{mount(){const{current:t}=this.node;t&&(this.unmount=lU(t,(n,s)=>(Ix(this.node,s,"Start"),o=>Ix(this.node,o,"End"))))}unmount(){}}class FL extends us{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ol(wl(this.node.current,"focus",()=>this.onFocus()),wl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function zx(i,t,n){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),u=s[o];u&&je.postRender(()=>u(t,Il(t)))}class IL extends us{mount(){const{current:t}=this.node;t&&(this.unmount=hU(t,(n,s)=>(zx(this.node,s,"Start"),(o,{success:u})=>zx(this.node,o,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const sm=new WeakMap,jd=new WeakMap,zL=i=>{const t=sm.get(i.target);t&&t(i)},VL=i=>{i.forEach(zL)};function HL({root:i,...t}){const n=i||document;jd.has(n)||jd.set(n,{});const s=jd.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver(VL,{root:i,...t})),s[o]}function GL(i,t,n){const s=HL(t);return sm.set(i,n),s.observe(i),()=>{sm.delete(i),s.unobserve(i)}}const kL={some:0,all:1};class XL extends us{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:u}=t,c={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:kL[o]},h=p=>{const{isIntersecting:d}=p;if(this.isInView===d||(this.isInView=d,u&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),_=d?g:v;_&&_(p)};return GL(this.node.current,c,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(WL(t,n))&&this.startObserver()}unmount(){}}function WL({viewport:i={}},{viewport:t={}}={}){return n=>i[n]!==t[n]}const qL={inView:{Feature:XL},tap:{Feature:IL},focus:{Feature:FL},hover:{Feature:BL}},YL={layout:{ProjectionNode:qM,MeasureLayout:IM}},jL={...L3,...qL,...OL,...YL},KL=jU(jL,o3);function ZL({sentence:i="Dijital Odak",manualMode:t=!1,blurAmount:n=5,borderColor:s="#FF5E2E",glowColor:o="rgba(255,94,46,.6)",animationDuration:u=.5,pauseBetweenAnimations:c=1,className:h=""}){const p=i.split(" "),[d,g]=Yt.useState(0),[v,_]=Yt.useState(null),S=Yt.useRef(null),T=Yt.useRef([]),[b,M]=Yt.useState({x:0,y:0,width:0,height:0});Yt.useEffect(()=>{if(!t){const D=setInterval(()=>g(C=>(C+1)%p.length),(u+c)*1e3);return()=>clearInterval(D)}},[t,u,c,p.length]),Yt.useEffect(()=>{if(!T.current[d]||!S.current)return;const D=S.current.getBoundingClientRect(),C=T.current[d].getBoundingClientRect();M({x:C.left-D.left,y:C.top-D.top,width:C.width,height:C.height})},[d,p.length]);const y=D=>{t&&(_(D),g(D))},O=()=>{t&&g(v)};return Re.jsxs("div",{className:`focus-container ${h}`,ref:S,children:[p.map((D,C)=>{const P=C===d;return Re.jsx("span",{ref:F=>T.current[C]=F,className:`focus-word ${t?"manual":""} ${P&&!t?"active":""}`,style:{filter:P?"blur(0px)":`blur(${n}px)`,"--border-color":s,"--glow-color":o,transition:`filter ${u}s ease`},onMouseEnter:()=>y(C),onMouseLeave:O,children:D},C)}),Re.jsxs(KL.div,{className:"focus-frame",animate:{x:b.x,y:b.y,width:b.width,height:b.height,opacity:d>=0?1:0},transition:{duration:u},style:{"--border-color":s,"--glow-color":o},children:[Re.jsx("span",{className:"corner top-left"}),Re.jsx("span",{className:"corner top-right"}),Re.jsx("span",{className:"corner bottom-left"}),Re.jsx("span",{className:"corner bottom-right"})]})]})}function QL({as:i="a",className:t="",color:n="#FF5E2E",speed:s="6s",thickness:o=2,children:u,style:c,...h}){return Re.jsxs(i,{className:`star-wrap ${t}`,style:{"--star-color":n,"--star-speed":s,"--star-thickness":`${o}px`,...c},...h,children:[Re.jsx("div",{className:"star-bottom"}),Re.jsx("div",{className:"star-top"}),Re.jsx("div",{className:"star-inner",children:u})]})}function JL(){return Re.jsxs("section",{className:"hero-wrap",children:[Re.jsxs("div",{className:"hero-bg",children:[Re.jsx(g2,{colors:["#FF5E2E","#FF9F68","#FFD2A0"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6}),Re.jsx("div",{className:"hero-vignette"})]}),Re.jsxs("div",{className:"hero-inner",children:[Re.jsx("span",{className:"pill",children:"Markanız için"}),Re.jsx(ZL,{sentence:"Dijital Odak",blurAmount:5,borderColor:"#FF5E2E",glowColor:"rgba(255,94,46,.6)",animationDuration:.5,pauseBetweenAnimations:1}),Re.jsx("h1",{className:"hero-title",children:"ETKİ YARATAN DENEYİMLER"}),Re.jsx("p",{className:"hero-sub",children:"Hedef kitlenizin ilgisini çeken, hafızada kalan, reklam performansınızı yükselten yaratıcı prodüksiyon"}),Re.jsxs("div",{className:"cta-row",children:[Re.jsx(QL,{as:"a",href:"#stories",color:"#FF5E2E",speed:"5s",thickness:2,"aria-label":"Hikayelerimizi izleyin",children:"Hikayelerimizi izleyin"}),Re.jsx("a",{href:"#contact",className:"btn btn-primary",children:"Projenizi Konuşalım"})]})]})]})}function $L(){return Re.jsx(Re.Fragment,{children:Re.jsx(JL,{})})}sb.createRoot(document.getElementById("root")).render(Re.jsx(Yt.StrictMode,{children:Re.jsx($L,{})}));
