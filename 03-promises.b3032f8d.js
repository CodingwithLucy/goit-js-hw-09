!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("ejkSG");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var n=Number(t.target.elements.delay.value),o=Number(t.target.elements.step.value),r=Number(t.target.elements.amount.value),l=Array.from({length:r},(function(e,t){return function(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}(t+1,n+t*o)}));Promise.allSettled(l).then((function(t){t.forEach((function(t,n){"fulfilled"===t.status?e(i).Notify.success("✅ Fulfilled promise ".concat(n+1," in ").concat(t.value.delay,"ms")):e(i).Notify.failure("❌ Rejected promise ".concat(n+1," in ").concat(t.reason.delay,"ms"))}))}))}))}();
//# sourceMappingURL=03-promises.b3032f8d.js.map
