!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={},r={},o=t.parcelRequire7bc7;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},t.parcelRequire7bc7=o);var i=o("iU1Pc"),u={},f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var a="Expected a function",c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,s=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,y=v||m||Function("return this")(),b=Object.prototype.toString,g=Math.max,h=Math.min,j=function(){return y.Date.now()};function w(t,e,n){var r,o,i,u,f,c,l=0,d=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError(a);function v(e){var n=r,i=o;return r=o=void 0,l=e,u=t.apply(i,n)}function m(t){return l=t,f=setTimeout(b,e),d?v(t):u}function y(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=i}function b(){var t=j();if(y(t))return w(t);f=setTimeout(b,function(t){var n=e-(t-c);return s?h(n,i-(t-l)):n}(t))}function w(t){return f=void 0,p&&r?v(t):(r=o=void 0,u)}function T(){var t=j(),n=y(t);if(r=arguments,o=this,c=t,n){if(void 0===f)return m(c);if(s)return f=setTimeout(b,e),v(c)}return void 0===f&&(f=setTimeout(b,e)),u}return e=O(e)||0,x(n)&&(d=!!n.leading,i=(s="maxWait"in n)?g(O(n.maxWait)||0,e):i,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?u:w(j())},T}function x(t){var n=void 0===t?"undefined":e(f)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(f)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==b.call(t)}(t))return NaN;if(x(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=x(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var r=d.test(t);return r||s.test(t)?p(t.slice(2),r?2:8):l.test(t)?NaN:+t}u=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(a);return x(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),w(t,e,{leading:r,maxWait:e,trailing:o})};var T={button:document.querySelector("button"),form:document.querySelector(".form"),inputArray:document.querySelectorAll("input")},N={};function E(t,e){return new Promise((function(n,r){var o=Math.random()>.3;setTimeout((function(){o?n({position:t,delay:e}):r({position:t,delay:e})}),e)}))}function M(t){var e=t.position,n=t.delay;i.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))}function S(t){var e=t.position,n=t.delay;i.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}T.form.addEventListener("submit",(function(t){t.preventDefault();for(var e=N.delay,n=N.step,r=N.amount,o=e,i=1;i<=r;i+=1)E(i,o).then(M).catch(S),o+=n;T.form.reset()})),T.form.addEventListener("input",u((function(t){return N[t.target.name]=Number(t.target.value),N}),500))}();
//# sourceMappingURL=03-promises.160e7284.js.map