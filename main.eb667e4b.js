parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oAZJ":[function(require,module,exports) {
"use strict";var n='<svg version="1.1" class="extention__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17.412 17.412" style="enable-background:new 0 0 17.412 17.412;" xml:space="preserve"><path style="fill:#030104;" d="M12.253,8.654c-0.692,0-0.994,0.782-0.994,1.761c-0.015,1.023,0.331,1.762,0.994,1.762\nc0.647,0,0.963-0.663,0.963-1.762C13.216,9.422,12.96,8.654,12.253,8.654z"/>\n<path style="fill:#030104;" d="M15.962,0.001H1.452C0.65,0.001,0,0.651,0,1.452v14.509c0,0.801,0.65,1.451,1.452,1.451h14.51\nc0.801,0,1.45-0.65,1.45-1.451V1.453C17.412,0.651,16.763,0.001,15.962,0.001z M2.496,6.41c0-1.747,1.069-3.071,2.74-3.071\nc1.687,0,2.635,1.234,2.635,2.906c0,2.047-1.295,3.117-2.71,3.117C3.671,9.361,2.496,8.247,2.496,6.41z M5.281,13.456\nl5.616-10.117h1.235L6.5,13.456H5.281z M12.207,13.427c-1.476,0-2.649-1.114-2.664-2.952c0-1.746,1.068-3.07,2.739-3.07\nc1.687,0,2.636,1.234,2.636,2.905C14.918,12.357,13.623,13.427,12.207,13.427z"/>\n   <path style="fill:#030104;" d="M5.191,4.588c-0.677,0-0.994,0.782-0.994,1.762c0,1.023,0.346,1.761,1.009,1.761\n       c0.648,0,0.963-0.662,0.963-1.761C6.169,5.356,5.899,4.588,5.191,4.588z"/>\n</svg>';module.exports={extentionIcon:n};
},{}],"KIzB":[function(require,module,exports) {
"use strict";document.addEventListener("DOMContentLoaded",function(){var e=require("./icon").extentionIcon,s=document.querySelector(".extention"),t=document.querySelector(".preloader"),c=document.querySelector(".slider__inner"),i=document.querySelector(".slider__controls");s.insertAdjacentHTML("beforeend",e),s.addEventListener("click",function(){s.className.includes("clicked")?(s.classList.remove("clicked"),c.style.display="none",i.style.display="none"):(s.classList.add("clicked"),t.classList.add("active"),setTimeout(function(){t.classList.remove("active"),c.style.display="flex",i.style.display="flex"},900))});i.addEventListener("click",function(e){var s=e.target.closest(".slider__controls-item"),t=c.classList[c.classList.length-1];switch(s){case i.querySelector("#firstSlideBtn"):c.classList.remove(t),c.classList.add("first-slide");break;case i.querySelector("#secondSlideBtn"):c.classList.remove(t),c.classList.add("second-slide");break;case i.querySelector("#thirdSlideBtn"):c.classList.remove(t),c.classList.add("third-slide");break;default:i.querySelector(":nth-child(1)")}})});
},{"./icon":"oAZJ"}]},{},["KIzB"], null)
//# sourceMappingURL=main.eb667e4b.js.map