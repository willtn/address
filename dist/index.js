!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("funfix-core")):"function"==typeof define&&define.amd?define(["funfix-core"],n):"object"==typeof exports?exports.address=n(require("funfix-core")):e.address=n(e["funfix-core"])}("undefined"!=typeof self?self:this,function(e){return function(e){function n(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var o={};return n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=o(1),i=function(){function e(e,n,o,i,r,d,f,c,u,p){void 0===n&&(n=t.Option.none()),void 0===o&&(o=t.Option.none()),void 0===i&&(i=t.Option.none()),void 0===r&&(r=t.Option.none()),void 0===d&&(d=t.Option.none()),void 0===f&&(f=t.Option.none()),void 0===c&&(c=t.Option.none()),void 0===u&&(u=t.Option.none()),void 0===p&&(p=t.Option.none()),this.id=e,this.line1=n,this.line2=o,this.zip=i,this.city=r,this.state=d,this.countryCode=f,this.comment=c,this.coordinates=u,this.geocoder=p}return e.fromRaw=function(n){return new e(n.id,t.Option.of(n.line1),t.Option.of(n.line2),t.Option.of(n.zip),t.Option.of(n.city),t.Option.of(n.state),t.Option.of(n.countryCode),t.Option.of(n.comment),t.Option.of(n.coordinates),t.Option.of(n.geocoder))},e.toRaw=function(e){return{city:e.city.orUndefined(),comment:e.comment.orUndefined(),coordinates:e.coordinates.orUndefined(),countryCode:e.countryCode.orUndefined(),geocoder:e.countryCode.orUndefined(),id:e.id,line1:e.line1.orUndefined(),line2:e.line2.orUndefined(),state:e.state.orUndefined(),zip:e.zip.orUndefined()}},e}();n.Address=i},function(n,o){n.exports=e}])});
//# sourceMappingURL=index.js.map