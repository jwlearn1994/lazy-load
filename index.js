"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).LazyLoad=t()}(void 0,function(){return function(t,e){var n=1<arguments.length&&void 0!==e?e:200,o=function(){return function(){var e=document.querySelectorAll(t);0<e.length?e.forEach(function(e){e.offsetTop<window.innerHeight+window.pageYOffset+n&&(e.src=e.dataset.src,e.addEventListener("load",function(){this.classList.add("lazyloadFadeIn"),this.classList.remove(t.replace(".",""))}))}):(window.removeEventListener("scroll",o),window.removeEventListener("resize",o))}()};!function(e){var t="@keyframes lazyloadFadeIn{0%{opacity:0}100%{opacity:1}}.lazyloadFadeIn{animation:lazyloadFadeIn 1s;}",n=document.createElement("style");t+=e,n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t)),document.getElementsByTagName("head")[0].appendChild(n)}("".concat(t,"{opacity:0;}")),document.querySelectorAll(t).forEach(function(e){if(e.dataset.ratio){var t=e.dataset.ratio.split("/");e.src=function(e,t){return'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(e," ").concat(t,'"%3E%3C/svg%3E')}(t[0],t[1])}}),o(),window.addEventListener("scroll",o),window.addEventListener("resize",o)}});