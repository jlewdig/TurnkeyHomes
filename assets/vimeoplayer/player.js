/*
 @vimeo/player v2.14.1 | (c) 2020 Vimeo | MIT License | https://github.com/vimeo/player.js  weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
 https://github.com/polygonplanet/weakmap-polyfill
 Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
 @license MIT
 Native Promise Only
      v0.8.1 (c) Kyle Simpson
      MIT License: http://getify.mit-license.org
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);$jscomp.checkEs6ConformanceViaProxy=function(){try{var c={},g=Object.create(new $jscomp.global.Proxy(c,{get:function(k,l,f){return k==c&&"q"==l&&f==g}}));return!0===g.q}catch(k){return!1}};$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS=!1;
$jscomp.ES6_CONFORMANCE=$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS&&$jscomp.checkEs6ConformanceViaProxy();$jscomp.arrayIteratorImpl=function(c){var g=0;return function(){return g<c.length?{done:!1,value:c[g++]}:{done:!0}}};$jscomp.arrayIterator=function(c){return{next:$jscomp.arrayIteratorImpl(c)}};$jscomp.makeIterator=function(c){var g="undefined"!=typeof Symbol&&Symbol.iterator&&c[Symbol.iterator];return g?g.call(c):$jscomp.arrayIterator(c)};$jscomp.ASSUME_ES5=!1;
$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(c,g,k){c!=Array.prototype&&c!=Object.prototype&&(c[g]=k.value)};$jscomp.owns=function(c,g){return Object.prototype.hasOwnProperty.call(c,g)};
$jscomp.polyfill=function(c,g,k,l){if(g){k=$jscomp.global;c=c.split(".");for(l=0;l<c.length-1;l++){var f=c[l];f in k||(k[f]={});k=k[f]}c=c[c.length-1];l=k[c];g=g(l);g!=l&&null!=g&&$jscomp.defineProperty(k,c,{configurable:!0,writable:!0,value:g})}};
$jscomp.polyfill("WeakMap",function(c){function g(){if(!c||!Object.seal)return!1;try{var b=Object.seal({}),e=Object.seal({}),f=new c([[b,2],[e,3]]);if(2!=f.get(b)||3!=f.get(e))return!1;f.delete(b);f.set(e,4);return!f.has(b)&&4==f.get(e)}catch(C){return!1}}function k(){}function l(b){var m=typeof b;return"object"===m&&null!==b||"function"===m}function f(m){if(!$jscomp.owns(m,b)){var e=new k;$jscomp.defineProperty(m,b,{value:e})}}function p(b){var e=Object[b];e&&(Object[b]=function(b){if(b instanceof
k)return b;f(b);return e(b)})}if($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(c&&$jscomp.ES6_CONFORMANCE)return c}else if(g())return c;var b="$jscomp_hidden_"+Math.random();p("freeze");p("preventExtensions");p("seal");var e=0,n=function(b){this.id_=(e+=Math.random()+1).toString();if(b){b=$jscomp.makeIterator(b);for(var c;!(c=b.next()).done;)c=c.value,this.set(c[0],c[1])}};n.prototype.set=function(e,c){if(!l(e))throw Error("Invalid WeakMap key");f(e);if(!$jscomp.owns(e,b))throw Error("WeakMap key fail: "+
e);e[b][this.id_]=c;return this};n.prototype.get=function(e){return l(e)&&$jscomp.owns(e,b)?e[b][this.id_]:void 0};n.prototype.has=function(e){return l(e)&&$jscomp.owns(e,b)&&$jscomp.owns(e[b],this.id_)};n.prototype.delete=function(e){return l(e)&&$jscomp.owns(e,b)&&$jscomp.owns(e[b],this.id_)?delete e[b][this.id_]:!1};return n},"es6","es3");$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(c){function g(){this.batch_=null}function k(b){return b instanceof f?b:new f(function(e,c){e(b)})}if(c&&!$jscomp.FORCE_POLYFILL_PROMISE)return c;g.prototype.asyncExecute=function(b){if(null==this.batch_){this.batch_=[];var e=this;this.asyncExecuteFunction(function(){e.executeBatch_()})}this.batch_.push(b)};var l=$jscomp.global.setTimeout;g.prototype.asyncExecuteFunction=function(b){l(b,0)};g.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var b=
this.batch_;this.batch_=[];for(var e=0;e<b.length;++e){var c=b[e];b[e]=null;try{c()}catch(m){this.asyncThrow_(m)}}}this.batch_=null};g.prototype.asyncThrow_=function(b){this.asyncExecuteFunction(function(){throw b;})};var f=function(b){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var e=this.createResolveAndReject_();try{b(e.resolve,e.reject)}catch(n){e.reject(n)}};f.prototype.createResolveAndReject_=function(){function b(b){return function(f){c||(c=!0,b.call(e,f))}}var e=this,c=!1;
return{resolve:b(this.resolveTo_),reject:b(this.reject_)}};f.prototype.resolveTo_=function(b){if(b===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof f)this.settleSameAsPromise_(b);else{a:switch(typeof b){case "object":var e=null!=b;break a;case "function":e=!0;break a;default:e=!1}e?this.resolveToNonPromiseObj_(b):this.fulfill_(b)}};f.prototype.resolveToNonPromiseObj_=function(b){var e=void 0;try{e=b.then}catch(n){this.reject_(n);return}"function"==typeof e?
this.settleSameAsThenable_(e,b):this.fulfill_(b)};f.prototype.reject_=function(b){this.settle_(2,b)};f.prototype.fulfill_=function(b){this.settle_(1,b)};f.prototype.settle_=function(b,e){if(0!=this.state_)throw Error("Cannot settle("+b+", "+e+"): Promise already settled in state"+this.state_);this.state_=b;this.result_=e;this.executeOnSettledCallbacks_()};f.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var b=0;b<this.onSettledCallbacks_.length;++b)p.asyncExecute(this.onSettledCallbacks_[b]);
this.onSettledCallbacks_=null}};var p=new g;f.prototype.settleSameAsPromise_=function(b){var e=this.createResolveAndReject_();b.callWhenSettled_(e.resolve,e.reject)};f.prototype.settleSameAsThenable_=function(b,e){var c=this.createResolveAndReject_();try{b.call(e,c.resolve,c.reject)}catch(m){c.reject(m)}};f.prototype.then=function(b,e){function c(b,e){return"function"==typeof b?function(e){try{g(b(e))}catch(u){k(u)}}:e}var g,k,l=new f(function(b,e){g=b;k=e});this.callWhenSettled_(c(b,g),c(e,k));return l};
f.prototype.catch=function(b){return this.then(void 0,b)};f.prototype.callWhenSettled_=function(b,e){function c(){switch(f.state_){case 1:b(f.result_);break;case 2:e(f.result_);break;default:throw Error("Unexpected state: "+f.state_);}}var f=this;null==this.onSettledCallbacks_?p.asyncExecute(c):this.onSettledCallbacks_.push(c)};f.resolve=k;f.reject=function(b){return new f(function(e,c){c(b)})};f.race=function(b){return new f(function(e,c){for(var f=$jscomp.makeIterator(b),g=f.next();!g.done;g=f.next())k(g.value).callWhenSettled_(e,
c)})};f.all=function(b){var e=$jscomp.makeIterator(b),c=e.next();return c.done?k([]):new f(function(b,f){function g(c){return function(e){l[c]=e;m--;0==m&&b(l)}}var l=[],m=0;do l.push(void 0),m++,k(c.value).callWhenSettled_(g(l.length-1),f),c=e.next();while(!c.done)})};return f},"es6","es3");
(function(c,g){"object"===typeof exports&&"undefined"!==typeof module?module.exports=g():"function"===typeof define&&define.amd?define(g):(c="undefined"!==typeof globalThis?globalThis:c||self,c.Vimeo=c.Vimeo||{},c.Vimeo.Player=g())})(this,function(){function c(b,a){for(var d=0;d<a.length;d++){var h=a[d];h.enumerable=h.enumerable||!1;h.configurable=!0;"value"in h&&(h.writable=!0);Object.defineProperty(b,h.key,h)}}function g(b,a,d){a&&c(b.prototype,a);d&&c(b,d);return b}function k(b,a){return 0===b.indexOf(a.toLowerCase())?
b:"".concat(a.toLowerCase()).concat(b.substr(0,1).toUpperCase()).concat(b.substr(1))}function l(b){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(b)}function f(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=b.id;b=b.url;b=a||b;if(!b)throw Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(!isNaN(parseFloat(b))&&isFinite(b)&&Math.floor(b)==b)return"https://vimeo.com/".concat(b);if(l(b))return b.replace("http:",
"https:");if(a)throw new TypeError("\u201c".concat(a,"\u201d is not a valid video id."));throw new TypeError("\u201c".concat(b,"\u201d is not a vimeo.com url."));}function p(b,a,d){var h=r.get(b.element)||{};a in h||(h[a]=[]);h[a].push(d);r.set(b.element,h)}function b(b,a){return(r.get(b.element)||{})[a]||[]}function e(b,a,d){var h=r.get(b.element)||{};if(!h[a])return!0;if(!d)return h[a]=[],r.set(b.element,h),!0;d=h[a].indexOf(d);-1!==d&&h[a].splice(d,1);r.set(b.element,h);return h[a]&&0===h[a].length}
function n(c,a){var d=b(c,a);if(1>d.length)return!1;d=d.shift();e(c,a,d);return d}function m(b){return H.reduce(function(a,d){var h=b.getAttribute("data-vimeo-".concat(d));if(h||""===h)a[d]=""===h?1:h;return a},1<arguments.length&&void 0!==arguments[1]?arguments[1]:{})}function w(b,a){b=b.html;if(!a)throw new TypeError("An element must be provided");if(null!==a.getAttribute("data-vimeo-initialized"))return a.querySelector("iframe");var d=document.createElement("div");d.innerHTML=b;a.appendChild(d.firstChild);
a.setAttribute("data-vimeo-initialized","true");return a.querySelector("iframe")}function B(b){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=2<arguments.length?arguments[2]:void 0;return new Promise(function(h,c){if(!l(b))throw new TypeError("\u201c".concat(b,"\u201d is not a vimeo.com url."));var e="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(b)),f;for(f in a)a.hasOwnProperty(f)&&(e+="&".concat(f,"=").concat(encodeURIComponent(a[f])));var g="XDomainRequest"in
window?new XDomainRequest:new XMLHttpRequest;g.open("GET",e,!0);g.onload=function(){if(404===g.status)c(Error("\u201c".concat(b,"\u201d was not found.")));else if(403===g.status)c(Error("\u201c".concat(b,"\u201d is not embeddable.")));else try{var a=JSON.parse(g.responseText);403===a.domain_status_code?(w(a,d),c(Error("\u201c".concat(b,"\u201d is not embeddable.")))):h(a)}catch(x){c(x)}};g.onerror=function(){var a=g.status?" (".concat(g.status,")"):"";c(Error("There was an error fetching the embed code from Vimeo".concat(a,
".")))};g.send()})}function C(){var b=function(a){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(a))};[].slice.call((0<arguments.length&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function(a){try{if(null===a.getAttribute("data-vimeo-defer")){var d=m(a),c=f(d);B(c,d,a).then(function(b){return w(b,a)}).catch(b)}}catch(I){b(I)}})}function G(){var b=0<arguments.length&&void 0!==arguments[0]?
arguments[0]:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",function(a){if(l(a.origin)&&a.data&&"spacechange"===a.data.event)for(var d=b.querySelectorAll("iframe"),c=0;c<d.length;c++)if(d[c].contentWindow===a.source){d[c].parentElement.style.paddingBottom="".concat(a.data.data[0].bottom,"px");break}}))}function D(b){if("string"===typeof b)try{b=JSON.parse(b)}catch(a){return console.warn(a),{}}return b}function u(b,a,d){b.element.contentWindow&&
b.element.contentWindow.postMessage&&(a={method:a},void 0!==d&&(a.value=d),d=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1")),8<=d&&10>d&&(a=JSON.stringify(a)),b.element.contentWindow.postMessage(a,b.origin))}function K(c,a){a=D(a);var d=[];if(a.event){"error"===a.event&&b(c,a.data.method).forEach(function(b){var d=Error(a.data.message);d.name=a.data.name;b.reject(d);e(c,a.data.method,b)});d=b(c,"event:".concat(a.event));var h=a.data}else if(a.method){var f=n(c,a.method);
f&&(d.push(f),h=a.value)}d.forEach(function(a){try{"function"===typeof a?a.call(c,h):a.resolve(h)}catch(R){}})}function L(){var b=function(){for(var a,b=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")],d=0,c=b.length,e={};d<c;d++)if((a=b[d])&&a[1]in document){for(d=0;d<a.length;d++)e[b[0][d]]=a[d];return e}return!1}(),a={fullscreenchange:b.fullscreenchange,fullscreenerror:b.fullscreenerror},d={request:function(a){return new Promise(function(c,
e){var h=function x(){d.off("fullscreenchange",x);c()};d.on("fullscreenchange",h);a=a||document.documentElement;var f=a[b.requestFullscreen]();f instanceof Promise&&f.then(h).catch(e)})},exit:function(){return new Promise(function(a,c){if(d.isFullscreen){var e=function J(){d.off("fullscreenchange",J);a()};d.on("fullscreenchange",e);var h=document[b.exitFullscreen]();h instanceof Promise&&h.then(e).catch(c)}else a()})},on:function(b,d){(b=a[b])&&document.addEventListener(b,d)},off:function(b,d){(b=
a[b])&&document.removeEventListener(b,d)}};Object.defineProperties(d,{isFullscreen:{get:function(){return!!document[b.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[b.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return!!document[b.fullscreenEnabled]}}});return d}var E="undefined"!==typeof global&&"[object global]"==={}.toString.call(global),y="undefined"!==typeof Array.prototype.indexOf,M="undefined"!==typeof window&&"undefined"!==typeof window.postMessage;
if(!(E||y&&M))throw Error("Sorry, the Vimeo Player API is not available in this browser.");var F="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};(function(b){if(!b.WeakMap){var a=Object.prototype.hasOwnProperty,d=function(a,b,d){Object.defineProperty?Object.defineProperty(a,b,{configurable:!0,writable:!0,value:d}):a[b]=d};b.WeakMap=function(){function b(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");
d(this,"_id","_WeakMap_"+Math.random().toString().substring(2)+"."+Math.random().toString().substring(2));if(0<arguments.length)throw new TypeError("WeakMap iterable is not supported");}function c(b,d){if(Object(b)!==b||!a.call(b,"_id"))throw new TypeError(d+" method called on incompatible receiver "+typeof b);}d(b.prototype,"delete",function(a){c(this,"delete");if(Object(a)!==a)return!1;var b=a[this._id];return b&&b[0]===a?(delete a[this._id],!0):!1});d(b.prototype,"get",function(a){c(this,"get");
if(Object(a)===a){var b=a[this._id];if(b&&b[0]===a)return b[1]}});d(b.prototype,"has",function(a){c(this,"has");if(Object(a)!==a)return!1;var b=a[this._id];return b&&b[0]===a?!0:!1});d(b.prototype,"set",function(a,b){c(this,"set");if(Object(a)!==a)throw new TypeError("Invalid value used as weak map key");var e=a[this._id];if(e&&e[0]===a)return e[1]=b,this;d(a,this._id,[a,b]);return this});d(b,"_polyfill",!0);return b}()}})("undefined"!==typeof self?self:"undefined"!==typeof window?window:F);var t=
function(b,a){return a={exports:{}},b(a,a.exports),a.exports}(function(b){(function(a,d,c){d[a]=d[a]||c();b.exports&&(b.exports=d[a])})("Promise",F,function(){function a(a,b){r.add(a,b);z||(z=q(r.drain))}function b(a){var b=typeof a;if(null!=a&&("object"==b||"function"==b))var d=a.then;return"function"==typeof d?d:!1}function c(){for(var a=0;a<this.chain.length;a++){var d=void 0,c=void 0,e=1===this.state?this.chain[a].success:this.chain[a].failure,f=this.chain[a];try{!1===e?f.reject(this.msg):(c=
!0===e?this.msg:e.call(void 0,this.msg),c===f.promise?f.reject(TypeError("Promise-chain cycle")):(d=b(c))?d.call(c,f.resolve,f.reject):f.resolve(c))}catch(Q){f.reject(Q)}}this.chain.length=0}function e(d){var g,h=this;if(!h.triggered){h.triggered=!0;h.def&&(h=h.def);try{(g=b(d))?a(function(){var a=new l(h);try{g.call(d,function(){e.apply(a,arguments)},function(){f.apply(a,arguments)})}catch(P){f.call(a,P)}}):(h.msg=d,h.state=1,0<h.chain.length&&a(c,h))}catch(O){f.call(new l(h),O)}}}function f(b){var d=
this;d.triggered||(d.triggered=!0,d.def&&(d=d.def),d.msg=b,d.state=2,0<d.chain.length&&a(c,d))}function g(a,b,d,c){for(var e=0;e<b.length;e++)(function(e){a.resolve(b[e]).then(function(a){d(e,a)},c)})(e)}function l(a){this.def=a;this.triggered=!1}function k(a){this.promise=a;this.state=0;this.triggered=!1;this.chain=[];this.msg=void 0}function m(b){if("function"!=typeof b)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var d=new k(this);this.then=
function(b,e){var f={success:"function"==typeof b?b:!0,failure:"function"==typeof e?e:!1};f.promise=new this.constructor(function(a,b){if("function"!=typeof a||"function"!=typeof b)throw TypeError("Not a function");f.resolve=a;f.reject=b});d.chain.push(f);0!==d.state&&a(c,d);return f.promise};this["catch"]=function(a){return this.then(void 0,a)};try{b.call(void 0,function(a){e.call(d,a)},function(a){f.call(d,a)})}catch(N){f.call(d,N)}}var z,p=Object.prototype.toString,q="undefined"!=typeof setImmediate?
function(a){return setImmediate(a)}:setTimeout;try{Object.defineProperty({},"x",{});var n=function(a,b,d,c){return Object.defineProperty(a,b,{value:d,writable:!0,configurable:!1!==c})}}catch(S){n=function(a,b,d){a[b]=d;return a}}var r=function(){function a(a,b){this.fn=a;this.self=b;this.next=void 0}var b,d,c;return{add:function(e,f){c=new a(e,f);d?d.next=c:b=c;d=c;c=void 0},drain:function(){var a=b;for(b=d=z=void 0;a;)a.fn.call(a.self),a=a.next}}}();var t=n({},"constructor",m,!1);m.prototype=t;n(t,
"__NPO__",0,!1);n(m,"resolve",function(a){return a&&"object"==typeof a&&1===a.__NPO__?a:new this(function(b,d){if("function"!=typeof b||"function"!=typeof d)throw TypeError("Not a function");b(a)})});n(m,"reject",function(a){return new this(function(b,d){if("function"!=typeof b||"function"!=typeof d)throw TypeError("Not a function");d(a)})});n(m,"all",function(a){var b=this;return"[object Array]"!=p.call(a)?b.reject(TypeError("Not an array")):0===a.length?b.resolve([]):new b(function(d,c){if("function"!=
typeof d||"function"!=typeof c)throw TypeError("Not a function");var e=a.length,f=Array(e),h=0;g(b,a,function(a,b){f[a]=b;++h===e&&d(f)},c)})});n(m,"race",function(a){var b=this;return"[object Array]"!=p.call(a)?b.reject(TypeError("Not an array")):new b(function(d,c){if("function"!=typeof d||"function"!=typeof c)throw TypeError("Not a function");g(b,a,function(a,b){d(b)},c)})});return m})}),r=new WeakMap,H="autopause autoplay background byline color controls dnt height id loop maxheight maxwidth muted playsinline portrait responsive speed texttrack title transparent url width".split(" "),
v=new WeakMap,A=new WeakMap,q={};y=function(){function c(a){var b=this,h=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!(this instanceof c))throw new TypeError("Cannot call a class as a function");window.jQuery&&a instanceof jQuery&&(1<a.length&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),a=a[0]);"undefined"!==typeof document&&"string"===typeof a&&(a=document.getElementById(a));if(!(a&&1===a.nodeType&&"nodeName"in
a&&a.ownerDocument&&a.ownerDocument.defaultView))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==a.nodeName){var g=a.querySelector("iframe");g&&(a=g)}if("IFRAME"===a.nodeName&&!l(a.getAttribute("src")||""))throw Error("The player element passed isn\u2019t a Vimeo embed.");if(v.has(a))return v.get(a);this._window=a.ownerDocument.defaultView;this.element=a;this.origin="*";g=new t(function(d,c){b._onMessage=function(a){if(l(a.origin)&&b.element.contentWindow===
a.source)if("*"===b.origin&&(b.origin=a.origin),(a=D(a.data))&&"error"===a.event&&a.data&&"ready"===a.data.method){var e=Error(a.data.message);e.name=a.data.name;c(e)}else e=a&&"ping"===a.method,a&&"ready"===a.event||e?(b.element.setAttribute("data-ready","true"),d()):K(b,a)};b._window.addEventListener("message",b._onMessage);if("IFRAME"!==b.element.nodeName){var e=m(a,h),g=f(e);B(g,e,a).then(function(d){var c=w(d,a);b.element=c;var e=b._originalElement=a,f=r.get(e);r.set(c,f);r.delete(e);v.set(b.element,
b);return d}).catch(c)}});A.set(this,g);v.set(this.element,this);"IFRAME"===this.element.nodeName&&u(this,"ping");if(q.isEnabled){var k=function(){return q.exit()};q.on("fullscreenchange",function(){q.isFullscreen?p(b,"event:exitFullscreen",k):e(b,"event:exitFullscreen",k);b.ready().then(function(){u(b,"fullscreenchange",q.isFullscreen)})})}return this}g(c,[{key:"callMethod",value:function(a){var b=this,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return new t(function(d,e){return b.ready().then(function(){p(b,
a,{resolve:d,reject:e});u(b,a,c)}).catch(e)})}},{key:"get",value:function(a){var b=this;return new t(function(d,c){a=k(a,"get");return b.ready().then(function(){p(b,a,{resolve:d,reject:c});u(b,a)}).catch(c)})}},{key:"set",value:function(a,b){var c=this;return new t(function(d,e){a=k(a,"set");if(void 0===b||null===b)throw new TypeError("There must be a value to set.");return c.ready().then(function(){p(c,a,{resolve:d,reject:e});u(c,a,b)}).catch(e)})}},{key:"on",value:function(a,c){if(!a)throw new TypeError("You must pass an event name.");
if(!c)throw new TypeError("You must pass a callback function.");if("function"!==typeof c)throw new TypeError("The callback must be a function.");0===b(this,"event:".concat(a)).length&&this.callMethod("addEventListener",a).catch(function(){});p(this,"event:".concat(a),c)}},{key:"off",value:function(a,b){if(!a)throw new TypeError("You must pass an event name.");if(b&&"function"!==typeof b)throw new TypeError("The callback must be a function.");e(this,"event:".concat(a),b)&&this.callMethod("removeEventListener",
a).catch(function(a){})}},{key:"loadVideo",value:function(a){return this.callMethod("loadVideo",a)}},{key:"ready",value:function(){var a=A.get(this)||new t(function(a,b){b(Error("Unknown player. Probably unloaded."))});return t.resolve(a)}},{key:"addCuePoint",value:function(a){return this.callMethod("addCuePoint",{time:a,data:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}})}},{key:"removeCuePoint",value:function(a){return this.callMethod("removeCuePoint",a)}},{key:"enableTextTrack",value:function(a,
b){if(!a)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:a,kind:b})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return q.isEnabled?q.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return q.isEnabled?
q.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return q.isEnabled?t.resolve(q.isFullscreen):this.get("fullscreen")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var a=this;return new t(function(b){A.delete(a);v.delete(a.element);a._originalElement&&(v.delete(a._originalElement),a._originalElement.removeAttribute("data-vimeo-initialized"));a.element&&"IFRAME"===a.element.nodeName&&a.element.parentNode&&a.element.parentNode.removeChild(a.element);
if(a.element&&"DIV"===a.element.nodeName&&a.element.parentNode){a.element.removeAttribute("data-vimeo-initialized");var c=a.element.querySelector("iframe");c&&c.parentNode&&c.parentNode.removeChild(c)}a._window.removeEventListener("message",a._onMessage);b()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(a){return this.set("autopause",a)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},
{key:"setCameraProps",value:function(a){return this.set("cameraProps",a)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(a){return this.set("color",a)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",
value:function(a){return this.set("currentTime",a)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(a){return this.set("loop",a)}},{key:"setMuted",value:function(a){return this.set("muted",a)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",
value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(a){return this.set("playbackRate",a)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(a){return this.set("quality",a)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},
{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",
value:function(){return this.get("volume")}},{key:"setVolume",value:function(a){return this.set("volume",a)}}]);return c}();E||(q=L(),C(),G());return y});
