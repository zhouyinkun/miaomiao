(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0989606c"],{2179:function(t,a,e){"use strict";var i=e("43c1"),n=e.n(i);n.a},3272:function(t,a,e){"use strict";var i=e("8386"),n=e.n(i);n.a},"43c1":function(t,a,e){},"4bdd":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{attrs:{id:"footer"}},[e("ul",[e("router-link",{attrs:{tag:"li",to:"/movie"}},[e("i",{staticClass:"iconfont icon-dianying"}),e("p",[t._v("电影")])]),e("router-link",{attrs:{tag:"li",to:"/cinema"}},[e("i",{staticClass:"iconfont icon-yingyuan"}),e("p",[t._v("影院")])]),e("router-link",{attrs:{tag:"li",to:"/mine"}},[e("i",{staticClass:"iconfont icon-wode"}),e("p",[t._v("我的")])])],1)])},n=[],s={name:"Footer"},r=s,c=(e("3272"),e("2877")),l=Object(c["a"])(r,i,n,!1,null,"635d41b4",null);a["a"]=l.exports},5423:function(t,a,e){"use strict";var i=e("8ae3"),n=e.n(i);n.a},"5a5b":function(t,a,e){},8386:function(t,a,e){},"8ae3":function(t,a,e){},"981c":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{attrs:{id:"header"}},[t._t("default"),t._v(" "),e("h1",[t._v(t._s(t.title))])],2)},n=[],s={name:"Header",props:{title:{type:String,default:"喵喵电影"}}},r=s,c=(e("e7df"),e("2877")),l=Object(c["a"])(r,i,n,!1,null,"153dd824",null);a["a"]=l.exports},b32a:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"main"}},[e("Header",{attrs:{title:"喵喵影院"}}),e("div",{attrs:{id:"content"}},[t._m(0),e("CiList")],1),e("TabBar")],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cinema_menu"},[e("div",{staticClass:"city_switch"},[t._v(" 全城 "),e("i",{staticClass:"iconfont icon-lower-triangle"})]),e("div",{staticClass:"brand_swtich"},[t._v(" 品牌 "),e("i",{staticClass:"iconfont icon-lower-triangle"})]),e("div",{staticClass:"feature_switch"},[t._v(" 特色 "),e("i",{staticClass:"iconfont icon-lower-triangle"})])])}],s=e("981c"),r=e("4bdd"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cinema_body"},[t.isLoading?e("Loading"):e("Scroller",[e("ul",t._l(t.cinemaList,(function(a){return e("li",{key:a.id},[e("div",[e("span",[t._v(t._s(a.nm))]),e("span",{staticClass:"q"},[e("span",{staticClass:"price"},[t._v(t._s(a.sellPrice))]),t._v(" 元起")])]),e("div",{staticClass:"address"},[e("span",[t._v(t._s(a.addr))]),e("span",[t._v(t._s(a.distance))])]),e("div",{staticClass:"card"},t._l(a.tag,(function(a,i){return 1===a?e("div",{key:i,class:t._f("classCard")(i)},[t._v(t._s(t._f("formatCard")(i)))]):t._e()})),0)])})),0)])],1)},l=[],o={name:"CiList",data:function(){return{cinemaList:[],isLoading:!0}},activated:function(){var t=this,a=this.$store.state.city.id;this.prevCityId!==a&&(this.isLoading=!0,this.axios.get("/ajax/cinemaList?day=2020-02-07&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1581082130218&cityId="+a+"&optimus_uuid=A1D1AEA0497B11EA845A71913F2FF74422B92D87198141EFB769B4BD600BAFDB&optimus_risk_level=71&optimus_code=10").then((function(e){t.cinemaList=e.data.cinemas,t.isLoading=!1,t.prevCityId=a})))},filters:{formatCard:function(t){for(var a=[{key:"allowRefund",value:"改签"},{key:"endorse",value:"退"},{key:"sell",value:"折扣卡"},{key:"snack",value:"小吃"}],e=0;e<a.length;e++)if(a[e].key===t)return a[e].value;return""},classCard:function(t){for(var a=[{key:"allowRefund",value:"bl"},{key:"endorse",value:"bl"},{key:"sell",value:"or"},{key:"snack",value:"or"}],e=0;e<a.length;e++)if(a[e].key===t)return a[e].value;return""}}},u=o,d=(e("5423"),e("2877")),v=Object(d["a"])(u,c,l,!1,null,"711950c3",null),f=v.exports,_={name:"Cinema",components:{Header:s["a"],TabBar:r["a"],CiList:f}},m=_,p=(e("2179"),Object(d["a"])(m,i,n,!1,null,"eca09652",null));a["default"]=p.exports},e7df:function(t,a,e){"use strict";var i=e("5a5b"),n=e.n(i);n.a}}]);
//# sourceMappingURL=chunk-0989606c.1836155f.js.map