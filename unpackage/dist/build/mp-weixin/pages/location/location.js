(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/location/location"],{"22c8":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{title:"map",latitude:39.909,longitude:116.39742,covers:[{id:0,latitude:39.909,longitude:116.39742,iconPath:"/static/img/location.png",width:30,height:30}]}},onLoad:function(){},methods:{getLocation:function(){var n=this;t.getLocation({type:"gcj02",success:function(t){n.latitude=t.latitude,n.longitude=t.longitude,n.covers[0].latitude=t.latitude,n.covers[0].longitude=t.longitude}})}}};n.default=e}).call(this,e("543d")["default"])},"3e14":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return u}));var c=function(){var t=this,n=t.$createElement;t._self._c},i=[]},6224:function(t,n,e){},a902:function(t,n,e){"use strict";var u=e("6224"),c=e.n(u);c.a},ccf7:function(t,n,e){"use strict";(function(t){e("4fad");u(e("66fd"));var n=u(e("f98c"));function u(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},e672:function(t,n,e){"use strict";e.r(n);var u=e("22c8"),c=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);n["default"]=c.a},f98c:function(t,n,e){"use strict";e.r(n);var u=e("3e14"),c=e("e672");for(var i in c)"default"!==i&&function(t){e.d(n,t,(function(){return c[t]}))}(i);e("a902");var o,a=e("f0c5"),r=Object(a["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);n["default"]=r.exports}},[["ccf7","common/runtime","common/vendor"]]]);