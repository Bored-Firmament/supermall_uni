(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"359b":function(e,t,n){},"608a":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("4b27"),i=n("4c15"),a=function(){n.e("pages/detail/detailCpns/DetailNavBar").then(function(){return resolve(n("d78d"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("pages/detail/detailCpns/DetailSwiper").then(function(){return resolve(n("04ea"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("pages/detail/detailCpns/DetailBaseInfo").then(function(){return resolve(n("8f06"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("pages/detail/detailCpns/DetailShopInfo").then(function(){return resolve(n("a4c9"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("pages/detail/detailCpns/DetailGoodsInfo").then(function(){return resolve(n("e442"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("pages/detail/detailCpns/DetailParamInfo").then(function(){return resolve(n("2108"))}.bind(null,n)).catch(n.oe)},d=function(){Promise.all([n.e("common/vendor"),n.e("pages/detail/detailCpns/DetailComment")]).then(function(){return resolve(n("a41e"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("pages/detail/detailCpns/DetailRecommend").then(function(){return resolve(n("64e0"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("pages/detail/detailCpns/DetailBottomBar").then(function(){return resolve(n("6508"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/content/backTop/BackTop").then(function(){return resolve(n("6b3d"))}.bind(null,n)).catch(n.oe)},p={mixins:[o.backTopOperationMixin],components:{DetailNavBar:a,DetailSwiper:c,DetailBaseInfo:l,DetailShopInfo:s,DetailGoodsInfo:r,DetailParamInfo:u,DetailComment:d,DetailRecommend:f,DetailBottomBar:m,BackTop:h},data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{},comments:[],recommends:[],themeNames:["detailSwiper","detailParamInfo","detailComment","detailRecommend"],currentIndex:0}},onLoad:function(e){this.iid=e.iid,this.getDetail(e.iid),this.getDetailRecommend()},computed:{statusHeight:function(){return e.getSystemInfoSync().statusBarHeight||10}},methods:{clickItem:function(t){e.showToast({title:"不支持锚点",icon:"none"})},scroll:function(e){},scrollReachBottom:function(){e.showToast({title:"没有更多数据了",icon:"none"})},addGoods:function(){var t=this,n={};n.iid=this.iid,n.title=this.goods.title,n.image=this.topImages[0],n.price=this.goods.realPrice,n.desc=this.detailInfo.desc,this.$store.dispatch("addGoods",n).then((function(n){e.showToast({title:n,icon:"none"}),t.$refs.bottomBar.options[2].info=t.$store.getters.cartLength}))},getDetail:function(e){var t=this;(0,i.getDetail)(e).then((function(e){var n=e.result;t.topImages=n.itemInfo.topImages,t.goods=new i.Goods(n.itemInfo,n.columns,n.shopInfo.services),t.shop=new i.Shop(n.shopInfo),t.detailInfo=n.detailInfo,t.paramInfo=new i.GoodsParam(n.itemParams.info,n.itemParams.rule),n.rate.list&&(t.comments=n.rate.list)})).catch((function(e){console.log("请求商品详情资源出错啦！",e)}))},getDetailRecommend:function(){var e=this;(0,i.getDetailRecommend)().then((function(t){e.recommends=t.data.list})).catch((function(e){console.log("请求推荐商品资源出错啦！",e)}))}}};t.default=p}).call(this,n("543d")["default"])},"921b":function(e,t,n){"use strict";n.r(t);var o=n("aeff"),i=n("ffef");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("9850");var c,l=n("f0c5"),s=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=s.exports},"935a":function(e,t,n){"use strict";(function(e){n("4fad");o(n("66fd"));var t=o(n("921b"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},9850:function(e,t,n){"use strict";var o=n("359b"),i=n.n(o);i.a},aeff:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement;e._self._c},a=[]},ffef:function(e,t,n){"use strict";n.r(t);var o=n("608a"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a}},[["935a","common/runtime","common/vendor"]]]);