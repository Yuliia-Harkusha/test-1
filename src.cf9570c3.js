parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdeU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"},{preview:"https://cdn.pixabay.com/photo/2018/12/15/02/53/flower-3876195_960_720.jpg",original:"https://cdn.pixabay.com/photo/2018/12/15/02/53/flower-3876195_960_720.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2018/03/26/16/38/nature-3263198_960_720.jpg",original:"https://cdn.pixabay.com/photo/2018/03/26/16/38/nature-3263198_960_720.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529_960_720.jpg",original:"https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529_960_720.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg",original:"https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg",description:"Lighthouse Coast Sea"},{preview:"https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_960_720.jpg",original:"https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_960_720.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631_960_720.jpg",original:"https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631_960_720.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_960_720.jpg",original:"https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_960_720.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_960_720.jpg",original:"https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_960_720.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg",original:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg",original:"https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg",original:"https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg",original:"https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2021/05/14/10/00/flowers-6253005_960_720.jpg",original:"https://cdn.pixabay.com/photo/2021/05/14/10/00/flowers-6253005_960_720.jpg",description:"Lighthouse Coast Sea"},{preview:"https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295436_960_720.jpg",original:"https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295436_960_720.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_960_720.jpg",original:"https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_960_720.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295431_960_720.jpg",original:"https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295431_960_720.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_960_720.jpg",original:"https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_960_720.jpg",description:"Lighthouse Coast Sea"},{preview:"https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_960_720.jpg",original:"https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_960_720.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg",original:"https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/12/14/owl-1834152_960_720.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/12/14/owl-1834152_960_720.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg",original:"https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2015/08/09/13/30/kingfisher-881594_960_720.jpg",original:"https://cdn.pixabay.com/photo/2015/08/09/13/30/kingfisher-881594_960_720.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2014/11/28/01/01/jay-548381_960_720.jpg",original:"https://cdn.pixabay.com/photo/2014/11/28/01/01/jay-548381_960_720.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg",original:"https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg",original:"https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2011/09/27/18/52/bird-9950_960_720.jpg",original:"https://cdn.pixabay.com/photo/2011/09/27/18/52/bird-9950_960_720.jpg",description:"Lighthouse Coast Sea"},{preview:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",original:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830_960_720.jpg",original:"https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830_960_720.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg",original:"https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg",original:"https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"chxP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.gallery=void 0;var e=t(require("./app.js"));function t(e){return e&&e.__esModule?e:{default:e}}const n=()=>{const t={ulJsEl:document.querySelector(".js-gallery"),liEl:document.querySelector(".gallery__item"),divJSLightboxEl:document.querySelector(".js-lightbox"),closeBtn:document.querySelector('[data-action="close-lightbox"]')},n=t.divJSLightboxEl.querySelector(".lightbox__image");let l=!1,o=null;function a(){l&&(o.classList.remove("is-open"),n.src="",n.alt="",l=!1)}t.ulJsEl.insertAdjacentHTML("beforeend",function(e){return e.reduce((e,{preview:t,original:n,description:l})=>e=`${e} <li class="gallery__item">\n    <a\n    class="gallery__link"\n    href="${n}"\n    >\n    <img\n    class="gallery__image"\n    loading="lazy"\n    data-src="${t}"\n    data-source="${n}"\n    alt="${l}"\n    width="390px"\n    higth="240px"\n    />\n    </a>\n    </li>\n    `,"")}(e.default)),t.ulJsEl.addEventListener("click",function(e){e.preventDefault(),e.target.classList.contains("gallery__image")&&function(e){l=!0;const{source:t}=e.dataset,a=e.closest(".gallery");(o=a.nextElementSibling).classList.add("is-open"),n.src=t,n.alt=e.alt}(e.target)}),t.closeBtn.addEventListener("click",a),document.addEventListener("click",function(e){e.target.classList.contains("lightbox__overlay")&&a()}),window.addEventListener("keydown",function(e){27===e.keyCode&&a()}),window.addEventListener("keydown",function(t){const o=37===t.keyCode,a=39===t.keyCode;if(l&&(o||a)){const{src:t}=n,l=e.default.findIndex(e=>e.original===t);let i=null;(i=0===l&&o?e.default[e.default.length-1]:l===e.default.length-1&&a?e.default[0]:o?e.default[l-1]:e.default[l+1])&&(n.src=i.original,n.alt=i.description)}}),"loading"in HTMLImageElement.prototype?(console.log("Браузер поддерживает lazyload"),function(){const e=document.querySelectorAll('img[loading="lazy"]');function t(e){console.log("Картинка загрузилась")}e.forEach(e=>e.addEventListener("load",t,{once:!0})),e.forEach(e=>{e.src=e.dataset.src})}()):(console.log("Браузер НЕ поддерживает lazyload"),function(){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js",e.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==",e.crossorigin="anonymous",e.referrerpolicy="no-referrer",document.body.appendChild(e)}())};exports.gallery=n;
},{"./app.js":"QdeU"}],"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"Focm":[function(require,module,exports) {
"use strict";var s=require("./js/gallery");require("./sass/main.scss"),(0,s.gallery)();
},{"./js/gallery":"chxP","./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/test-1/src.cf9570c3.js.map