(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detailCpns/DetailNavBar"],{"17d4":function(n,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return a}));var a={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,"2cc4"))}},c=function(){var n=this,t=n.$createElement;n._self._c},u=[]},"25be":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){e.e("components/common/navBar/NavBar").then(function(){return resolve(e("5f5f"))}.bind(null,e)).catch(e.oe)},c={name:"DetailNavBar",components:{NavBar:a},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{clickBack:function(){1===getCurrentPages().length?n.switchTab({url:"/pages/home/home"}):n.navigateBack()},itemClick:function(n){this.currentIndex=n,this.$emit("clickItem",n)}}};t.default=c}).call(this,e("543d")["default"])},"2f3a":function(n,t,e){"use strict";var a=e("5942"),c=e.n(a);c.a},"4da0":function(n,t,e){"use strict";e.r(t);var a=e("25be"),c=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);t["default"]=c.a},5942:function(n,t,e){},d78d:function(n,t,e){"use strict";e.r(t);var a=e("17d4"),c=e("4da0");for(var u in c)"default"!==u&&function(n){e.d(t,n,(function(){return c[n]}))}(u);e("2f3a");var i,o=e("f0c5"),r=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,"47e157a6",null,!1,a["a"],i);t["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/detail/detailCpns/DetailNavBar-create-component',
    {
        'pages/detail/detailCpns/DetailNavBar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d78d"))
        })
    },
    [['pages/detail/detailCpns/DetailNavBar-create-component']]
]);
