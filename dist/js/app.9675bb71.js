(function(t){function e(e){for(var r,s,o=e[0],a=e[1],c=e[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(l.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},l=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-fold-slide/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=a;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"3f1b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FoldSlider",{staticClass:"fold-slider",attrs:{imgs:t.imgs}})],1)},l=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sliders no-select",class:{"left-to-right":t.left2right}},t._l(t.imgs,(function(e,r){return n("div",{key:r,staticClass:"slider",class:{active:t.locIdx===r},on:{mouseenter:function(e){return t.changeSlider(r)},mousemove:function(e){return t.changeSlider(r)},mouseleave:function(e){return t.onMouseleave(r)}}},[n("a",{staticClass:"big"},[n("img",{attrs:{src:e.big,alt:""}}),t._m(0,!0)]),n("div",{staticClass:"small"},[n("img",{attrs:{src:e.small,alt:""}})])])})),0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("h3",{staticClass:"mb19"})])}],a=n("b012"),c=n.n(a),u={data:function(){return{locIdx:0,left2right:!0,time:null,updateStatus:[]}},props:["imgs"],methods:{changeSlider:function(){},onMouseleave:function(){this.time=Date.now()}},created:function(){var t=100;function e(e){!this.time||Date.now()-this.time<t||(this.left2right=e>this.locIdx,this.locIdx=e)}this.changeSlider=c()(e,t,!1)}},f=u,p=(n("9c77"),n("2877")),d=Object(p["a"])(f,s,o,!1,null,"9c69b0a4",null),g=d.exports,m={name:"App",components:{FoldSlider:g},data:function(){var t="/vue-fold-slide/dist/";return{imgs:[{big:t+"img/1l.jpg",small:t+"img/1s.jpg"},{big:t+"img/2l.jpg",small:t+"img/2s.jpg"},{big:t+"img/3l.jpg",small:t+"img/3s.jpg"},{big:t+"img/4l.jpg",small:t+"img/4s.jpg"}]}}},h=m,v=(n("034f"),Object(p["a"])(h,i,l,!1,null,null,null)),b=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,n){},"9c77":function(t,e,n){"use strict";var r=n("3f1b"),i=n.n(r);i.a}});
//# sourceMappingURL=app.9675bb71.js.map