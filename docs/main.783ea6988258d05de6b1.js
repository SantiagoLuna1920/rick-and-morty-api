(()=>{"use strict";var n={662:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([n.id,"body {\n    background-color: #202329;\n}\n\nheader {\n    position: sticky;\n    top: -.75rem;\n}\n\nheader >  .divHeader {\n    --bg-color: rgb(26, 24, 22);\n    background-color: var(--bg-color);\n    padding: 1.5rem;\n    width: 100%;\n    padding-bottom: 2rem;\n}\n\nheader >  .divHeader > .headerContainer> div {\n    display: inline-block;\n    height: auto;\n    margin-left: 4vw;\n    margin-top: 2vh;\n}\n\nheader >  .divHeader > .headerContainer > div > span {\n    --color-text: aliceblue;\n    color: var(--color-text);\n    cursor: pointer;\n    display: inline-block;\n    font-size: 2rem;\n}\n\n.headerContainer {\n    width: 80%;\n    margin: 0 auto;\n    text-align: center;\n}\n\n/* Creacion del hover para cada uno de los spans */\n\nheader > .divHeader > .headerContainer > div > .characters:hover, .locations:hover, .episodes:hover {\n    opacity: .6;\n    text-decoration: underline;\n}\n\n/* //clases para elementos creados por js */\n\n.divDOM {\n    color: rgb(83, 81, 81);\n    text-align: center;\n    padding: 2rem;\n    font-family: 'Courier New', Courier, monospace;\n}\n.container-cards {\n    width: 90%;\n    margin: 0 auto;\n}\n\n@media (min-width: 240px) {\n    .container-cards .cards {\n        background-color: #3c4046;\n        border-radius: 1rem;\n        width: 100%;\n        height: auto;\n        margin: 1rem 1%;\n        border: solid 5px #3c4046;\n        overflow: hidden;\n        color: aliceblue;\n        padding-bottom: 1.5rem;\n    }\n    .container-cards .cards > img {\n        display: inline-block;\n        width: 100%;\n    }\n    .containerB {\n        position: sticky;\n        top: 10rem !important;\n    }\n  }\n\n\n@media (min-width: 320px) {\n    .container-cards .cards {\n        width: 98%;\n    }\n    .container-cards .cards > img {\n        display: inline-block;\n        width: 100%;\n    }\n\n  }\n\n  @media (min-width: 490px) {\n    .container-cards .cards {\n        display: inline-block;\n        width: 48%;\n        height: clamp( 80vh, 80vh+2vh, 87vh );\n    }\n    .container-cards .cards > img {\n        display: inline-block;\n        width: 100%;\n    }\n  }\n  \n@media ( min-width: 768px ) {\n    .container-cards .cards {\n        display: inline-block;\n        width: 31%;\n    }\n    .container-cards .cards > img {\n        width: 100%;\n    }\n    .containerB {\n        position: sticky;\n        top: 4.5rem !important;\n    }\n}\n\n@media ( min-width: 992px ) {\n    .container-cards .cards {\n        display: inline-block;\n        width: 23%;\n    }\n    .container-cards .cards > img {\n        width: 100%;\n    }\n    .containerB {\n        position: sticky;\n        top: 4.5rem !important;\n    }\n}\n\n.containerB {\n    --bg-color: rgb(26, 24, 22);\n    --color-text: aliceblue;\n    text-align: center;\n    padding: 2rem;\n    top: 4.5rem;\n}\n\n.prevB, .nextB, .prevBL, .nextBL, .prevBE, .nextBE {\n    cursor: pointer;\n    font-size: 1.5rem;\n padding: .5rem 1.5rem;\n margin: .8rem;\n border-radius: .3rem;\n border-style: none;\n background-color: var(--bg-color);\n color: var(--color-text);\n}\n\n/* .prevB:hover, .nextB:hover {\n    opacity: .9;\n} */\n\n.prevB:hover > span, .nextB:hover span {\n    text-decoration: underline;\n}\n\n.prevBL:hover > span, .nextBL:hover span {\n    text-decoration: underline;\n}\n\n.divSummary {\n    border: 2px solid #3c4046;\n    color: aliceblue;\n    height: auto;\n    padding: 1rem .5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n}\n\nsummary {\n    cursor: pointer;\n}\n\n.divSummary:hover {\n    background-color: #3c4046;\n}",""]);const i=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:v,references:1})}c.push(l)}return c}function o(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),u=0;u<a.length;u++){var d=t(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{function n(n,e,t,r,o,a,c){try{var i=n[a](c),s=i.value}catch(n){return void t(n)}i.done?e(s):Promise.resolve(s).then(r,o)}function e(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var c=e.apply(t,r);function i(e){n(c,o,a,i,s,"next",e)}function s(e){n(c,o,a,i,s,"throw",e)}i(void 0)}))}}var r=function(){var n=e(regeneratorRuntime.mark((function n(e){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="https://rickandmortyapi.com/api/character?page=".concat(e),n.next=4,fetch(t);case 4:if((r=n.sent).ok){n.next=7;break}throw"No se encontro la peticion a: ".concat(t);case 7:return n.next=9,r.json();case 9:return n.abrupt("return",n.sent);case 12:throw n.prev=12,n.t0=n.catch(0),n.t0;case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=e(regeneratorRuntime.mark((function n(e){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="https://rickandmortyapi.com/api/location/".concat(e),n.next=4,fetch(t);case 4:if((r=n.sent).ok){n.next=7;break}throw"No se encontro la peticion a: ".concat(t);case 7:return n.next=9,r.json();case 9:return n.abrupt("return",n.sent);case 12:throw n.prev=12,n.t0=n.catch(0),n.t0;case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}(),a=function(){var n=e(regeneratorRuntime.mark((function n(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=e(regeneratorRuntime.mark((function n(e){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="https://rickandmortyapi.com/api/episode/".concat(e),n.next=4,fetch(t);case 4:if((r=n.sent).ok){n.next=7;break}throw"No se encontro la peticion a: ".concat(t);case 7:return n.next=9,r.json();case 9:return n.abrupt("return",n.sent);case 12:throw n.prev=12,n.t0=n.catch(0),n.t0;case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=e(regeneratorRuntime.mark((function n(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function s(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return u(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return c=n.done,n},e:function(n){i=!0,a=n},f:function(){try{c||null==t.return||t.return()}finally{if(i)throw a}}}}function u(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var d=1,l=function(n){var e=document.querySelector("aside"),t=document.createElement("div");t.classList.add("container-cards"),e.innerHTML="",t.innerHTML='<div class="containerB">\n                        <button class="prevB"><span>Prev</span></button>\n                        <button class="nextB"><span>Next</span></button>\n                    </div>';var r,o=s(n.results);try{for(o.s();!(r=o.n()).done;){var a=r.value;t.innerHTML+='<div class="cards">\n                            <img src="'.concat(a.image,'">\n                            <div style="text-align: center; padding-bottom: 1rem; padding-top: 1rem;">\n                                <h2>').concat(a.name,'</h2>\n                                <div style="display: flex; justify-content: center; align-items: center;">\n                                <div style="background-color: ').concat("Alive"===a.status?"green":"Dead"===a.status?"red":"#e0e0e0",'; border-radius: 50%; width: 1.2rem; height: 1.2rem;"></div>\n                                </div>\n                                <h3> ').concat(a.status," - ").concat(a.species,' </h3>\n                                <h3 style="color: #978c8c;">Last know location:</h3>\n                                <h2>').concat(a.location.name,'</h2>\n                                <h3 style="color: #978c8c;">Gender:</h3>\n                                <h2> ').concat(a.gender,' </h2>\n                                <h3 style="color: #978c8c;">Type:</h3>\n                                <h2> ').concat(""===a.type?"Unknown":a.type," </h2>\n                            </div>\n                        </div>")}}catch(n){o.e(n)}finally{o.f()}e.append(t),p()},p=function(){var n=document.querySelector(".prevB"),e=document.querySelector(".nextB");n.addEventListener("click",(function(){1!==d&&(d--,r(d).then((function(n){return l(n)})))})),e.addEventListener("click",(function(){42!==d&&(d++,r(d).then((function(n){return l(n)})))}))};function f(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return v(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return c=n.done,n},e:function(n){i=!0,a=n},f:function(){try{c||null==t.return||t.return()}finally{if(i)throw a}}}}function v(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var h=0,m=function(n){var e=document.querySelector("aside"),t=document.querySelector(".container-cards");t.innerHTML+='<div class="cards">\n                            <img src="'.concat(n.image,'">\n                            <div style="text-align: center; padding-bottom: 1rem; padding-top: 1rem;">\n                                <h2>').concat(n.name,'</h2>\n                                <div style="display: flex; justify-content: center; align-items: center;">\n                                <div style="background-color: ').concat("Alive"===n.status?"green":"Dead"===n.status?"red":"#e0e0e0",'; border-radius: 50%; width: 1.2rem; height: 1.2rem;"></div>\n                                </div>\n                                <h3> ').concat(n.status," - ").concat(n.species,' </h3>\n                                <h3 style="color: #978c8c;">Last know location:</h3>\n                                <h2>').concat(n.location.name,'</h2>\n                                <h3 style="color: #978c8c;">Gender:</h3>\n                                <h2> ').concat(n.gender,' </h2>\n                                <h3 style="color: #978c8c;">Type:</h3>\n                                <h2> ').concat(""===n.type?"Unknown":n.type," </h2>\n                            </div>\n                        </div>"),e.append(t),k()},y=function(n){var e=document.querySelector("aside"),t=document.createElement("div");e.innerHTML="",t.classList.add("container-cards"),t.innerHTML='<div class="containerB">\n                        <button class="prevBE"><span>Prev</span></button>\n                        <button class="nextBE"><span>Next</span></button>\n                        <div><h1 style="color: #d1d1d1;">name: '.concat(n.name,' </h1></div>\n                        <div><h2 style="color: #d1d1d1;">name: ').concat(n.episode," </h2></div>\n                    </div>"),e.append(t),k()},g=function(n){var e=document.querySelector("aside"),t=document.createElement("div");e.innerHTML="",t.classList.add("container-cards"),t.innerHTML='<div class="containerB">\n                        <button class="prevBL"><span>Prev</span></button>\n                        <button class="nextBL"><span>Next</span></button>\n                        <div><h1 style="color: #d1d1d1;"> '.concat(n.name," </h1></div>\n                    </div>"),e.append(t),w()},b=function(){return h=1,1},x=function(n){var e=document.querySelector("aside"),t=document.querySelector(".container-cards");t.innerHTML+='<div class="cards">\n                            <img src="'.concat(n.image,'">\n                            <div style="text-align: center; padding-bottom: 1rem; padding-top: 1rem;">\n                                <h2>').concat(n.name,'</h2>\n                                <div style="display: flex; justify-content: center; align-items: center;">\n                                <div style="background-color: ').concat("Alive"===n.status?"green":"Dead"===n.status?"red":"#e0e0e0",'; border-radius: 50%; width: 1.2rem; height: 1.2rem;"></div>\n                                </div>\n                                <h3> ').concat(n.status," - ").concat(n.species,' </h3>\n                                <h3 style="color: #978c8c;">Last know location:</h3>\n                                <h2>').concat(n.location.name,'</h2>\n                                <h3 style="color: #978c8c;">Gender:</h3>\n                                <h2> ').concat(n.gender,' </h2>\n                                <h3 style="color: #978c8c;">Type:</h3>\n                                <h2> ').concat(""===n.type?"Unknown":n.type," </h2>\n                            </div>\n                        </div>"),e.append(t),w()},w=function(){var n=document.querySelector(".prevBL"),e=document.querySelector(".nextBL");n.addEventListener("click",(function(){1!==h&&(h--,o(h).then((function(n){g(n);var e,t=f(n.residents);try{for(t.s();!(e=t.n()).done;){var r=e.value;a(r).then((function(n){x(n)}))}}catch(n){t.e(n)}finally{t.f()}})))})),e.addEventListener("click",(function(){126!==h&&(h++,console.log(h),o(h).then((function(n){g(n);var e,t=f(n.residents);try{for(t.s();!(e=t.n()).done;){var r=e.value;a(r).then((function(n){x(n)}))}}catch(n){t.e(n)}finally{t.f()}})))}))},k=function(){var n=document.querySelector(".prevBE"),e=document.querySelector(".nextBE");n.addEventListener("click",(function(){1!==h&&(h--,c(h).then((function(n){y(n);var e,t=f(n.characters);try{for(t.s();!(e=t.n()).done;){var r=e.value;console.log(r),i(r).then((function(n){m(n)}))}}catch(n){t.e(n)}finally{t.f()}})))})),e.addEventListener("click",(function(){51!==h&&(h++,c(h).then((function(n){y(n);var e,t=f(n.characters);try{for(t.s();!(e=t.n()).done;){var r=e.value;console.log(r),i(r).then((function(n){m(n)}))}}catch(n){t.e(n)}finally{t.f()}})))}))};function S(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return L(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return c=n.done,n},e:function(n){i=!0,a=n},f:function(){try{c||null==t.return||t.return()}finally{if(i)throw a}}}}function L(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var B=function(){document.querySelector(".characters").addEventListener("click",(function(){d=1,r().then((function(n){l(n)}))})),document.querySelector(".locations").addEventListener("click",(function(){o(b()).then((function(n){g(n);var e,t=S(n.residents);try{for(t.s();!(e=t.n()).done;){var r=e.value;a(r).then((function(n){x(n)}))}}catch(n){t.e(n)}finally{t.f()}}))})),document.querySelector(".episodes").addEventListener("click",(function(){c(b()).then((function(n){y(n);var e,t=S(n.characters);try{for(t.s();!(e=t.n()).done;){var r=e.value;i(r).then((function(n){m(n)}))}}catch(n){t.e(n)}finally{t.f()}}))}))},E=t(379),A=t.n(E),T=t(795),j=t.n(T),M=t(569),q=t.n(M),C=t(565),H=t.n(C),I=t(216),O=t.n(I),R=t(589),N=t.n(R),P=t(662),U={};U.styleTagTransform=N(),U.setAttributes=H(),U.insert=q().bind(null,"head"),U.domAPI=j(),U.insertStyleElement=O();A()(P.Z,U);P.Z&&P.Z.locals&&P.Z.locals;var D,Z,z,G;D=document.querySelector("body"),Z=document.createElement("aside"),z=document.createElement("h2"),G=document.createElement("div"),z.innerText="Hola, por favor, elige una de las tres opciones del menu para poder interactuar con estos, espero te guste, muchas gracias.",G.classList.add("divDOM"),G.append(z),Z.append(G),D.append(Z),B()})()})();