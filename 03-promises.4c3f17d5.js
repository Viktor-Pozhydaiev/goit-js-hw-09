var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequire7bc7=r);var i=r("eWCmQ"),o={},u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=s||d||Function("return this")(),m=Object.prototype.toString,y=Math.max,v=Math.min,b=function(){return p.Date.now()};function g(t,e,n){var r,i,o,u,f,a,c=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=r,o=i;return r=i=void 0,c=e,u=t.apply(o,n)}function m(t){return c=t,f=setTimeout(x,e),l?p(t):u}function g(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=o}function x(){var t=b();if(g(t))return j(t);f=setTimeout(x,function(t){var n=e-(t-a);return s?v(n,o-(t-c)):n}(t))}function j(t){return f=void 0,d&&r?p(t):(r=i=void 0,u)}function T(){var t=b(),n=g(t);if(r=arguments,i=this,a=t,n){if(void 0===f)return m(a);if(s)return f=setTimeout(x,e),p(a)}return void 0===f&&(f=setTimeout(x,e)),u}return e=w(e)||0,h(n)&&(l=!!n.leading,o=(s="maxWait"in n)?y(w(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=a=i=f=void 0},T.flush=function(){return void 0===f?u:j(b())},T}function h(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(h(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=h(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=a.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):f.test(t)?NaN:+t}o=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return h(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(t,e,{leading:r,maxWait:e,trailing:i})};const x={button:document.querySelector("button"),form:document.querySelector(".form"),inputArray:document.querySelectorAll("input")};let j={};function T(t,e){return new Promise(((n,r)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:t,delay:e}):r({position:t,delay:e})}),e)}))}function O({position:t,delay:e}){i.Notify.success(`✅ Fulfilled promise ${t} in ${e}ms`)}function N({position:t,delay:e}){i.Notify.failure(`❌ Rejected promise ${t} in ${e}ms`)}x.form.addEventListener("submit",(function(t){t.preventDefault();const{delay:e,step:n,amount:r}=j;let i=e;for(let t=1;t<=r;t+=1)T(t,i).then(O).catch(N),i+=n;x.form.reset()})),x.form.addEventListener("input",o((function(t){return j[t.target.name]=Number(t.target.value),j}),500));
//# sourceMappingURL=03-promises.4c3f17d5.js.map
