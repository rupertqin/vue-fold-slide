(function(t){function e(e){for(var r,l,s=e[0],a=e[1],c=e[2],f=0,p=[];f<s.length;f++)l=s[f],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},i={app:0},o=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue-fold-slide/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FoldSlider",{attrs:{imgs:t.imgs}})],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sliders no-select",class:{"left-to-right":t.left2right}},t._l(t.imgs,(function(e,r){return n("div",{key:r,staticClass:"slider",class:{active:t.locIdx===r},on:{mouseenter:function(e){return t.changeSlider(r)},mousemove:function(e){return t.changeSlider(r)},mouseleave:function(e){return t.onMouseleave(r)}}},[n("a",{staticClass:"big"},[n("img",{attrs:{src:e.big,alt:""}}),t._m(0,!0)]),n("div",{staticClass:"small"},[n("img",{attrs:{src:e.small,alt:""}})])])})),0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("h3",{staticClass:"mb19"})])}],a=n("b012"),c=n.n(a),u={data:function(){return{locIdx:0,left2right:!0,time:null,updateStatus:[]}},props:["imgs"],methods:{changeSlider:function(){},onMouseleave:function(){this.time=Date.now()}},created:function(){var t=100;function e(e){!this.time||Date.now()-this.time<t||(this.left2right=e>this.locIdx,this.locIdx=e)}this.changeSlider=c()(e,t,!1)}},f=u,p=(n("95ae"),n("2877")),d=Object(p["a"])(f,l,s,!1,null,"3f82c4a4",null),g=d.exports,m={name:"App",components:{FoldSlider:g},data:function(){return{imgs:[{big:"/img/1l.jpg",small:"/img/1s.jpg"},{big:"/img/2l.jpg",small:"/img/2s.jpg"},{big:"/img/3l.jpg",small:"/img/3s.jpg"},{big:"/img/4l.jpg",small:"/img/4s.jpg"}]}}},h=m,v=(n("034f"),Object(p["a"])(h,i,o,!1,null,null,null)),b=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,n){},"95ae":function(t,e,n){"use strict";var r=n("d2d6"),i=n.n(r);i.a},d2d6:function(t,e,n){}});
//# sourceMappingURL=app.80934186.js.map