(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detailCpns/DetailShopInfo"],{"6edf":function(t,n,e){"use strict";var o=e("e894"),u=e.n(o);u.a},7508:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"DetailShopInfo",props:{shopInfo:{type:Object,default:function(){return{}}}},methods:{sellCouontFilter:function(t){var n=0;return t>=1e4&&(n=(t/1e4).toFixed(1)+"万"),n}}};n.default=o},"7d66":function(t,n,e){"use strict";e.r(n);var o=e("7508"),u=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n["default"]=u.a},"956c":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return o}));var u=function(){var t=this,n=t.$createElement,e=(t._self._c,Object.keys(t.shopInfo)),o=0!==e.length?t.sellCouontFilter(t.shopInfo.sells):null;t.$mp.data=Object.assign({},{$root:{g0:e,m0:o}})},r=[]},a4c9:function(t,n,e){"use strict";e.r(n);var o=e("956c"),u=e("7d66");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("6edf");var a,l=e("f0c5"),c=Object(l["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=c.exports},e894:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/detail/detailCpns/DetailShopInfo-create-component',
    {
        'pages/detail/detailCpns/DetailShopInfo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a4c9"))
        })
    },
    [['pages/detail/detailCpns/DetailShopInfo-create-component']]
]);
