(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/content/goods/GoodsListItem"],{1063:function(t,n,o){"use strict";o.r(n);var e=o("f646"),i=o.n(e);for(var u in e)"default"!==u&&function(t){o.d(n,t,(function(){return e[t]}))}(u);n["default"]=i.a},"145b":function(t,n,o){"use strict";o.r(n);var e=o("791d"),i=o("1063");for(var u in i)"default"!==u&&function(t){o.d(n,t,(function(){return i[t]}))}(u);o("5241");var s,c=o("f0c5"),r=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);n["default"]=r.exports},5241:function(t,n,o){"use strict";var e=o("90a2"),i=o.n(e);i.a},"791d":function(t,n,o){"use strict";o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return u})),o.d(n,"a",(function(){return e}));var e={uniIcons:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(o.bind(null,"2cc4"))}},i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"90a2":function(t,n,o){},f646:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"GoodsListItem",props:{goodsItem:{type:Object,default:function(){return{}}}},methods:{clickGoodsItem:function(){this.goodsItem.iid?t.navigateTo({url:"/pages/detail/detail?iid="+this.goodsItem.iid}):t.showToast({icon:"error",title:"功能未开发"})}},computed:{showImage:function(){return this.goodsItem.show&&this.goodsItem.show.img||this.goodsItem.image||this.goodsItem.img}}};n.default=o}).call(this,o("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/content/goods/GoodsListItem-create-component',
    {
        'components/content/goods/GoodsListItem-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("145b"))
        })
    },
    [['components/content/goods/GoodsListItem-create-component']]
]);
