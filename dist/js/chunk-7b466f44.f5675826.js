(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b466f44"],{"4e1c":function(t,i,n){},5361:function(t,i,n){"use strict";var s=n("4e1c"),e=n.n(s);e.a},"78a5":function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"city_body"},[n("div",{staticClass:"city_list"},[t.isLoading?n("Loading"):n("Scroller",{ref:"city_List"},[n("div",[n("div",{staticClass:"city_hot"},[n("h2",[t._v("热门城市")]),n("ul",{staticClass:"clearfix"},t._l(t.hotList,(function(i){return n("li",{key:i.id,on:{tap:function(n){return t.handleToCity(i.nm,i.id)}}},[t._v(t._s(i.nm))])})),0)]),n("div",{ref:"city_sort",staticClass:"city_sort"},t._l(t.cityList,(function(i){return n("div",{key:i.index},[n("h2",[t._v(t._s(i.index))]),n("ul",t._l(i.list,(function(i){return n("li",{key:i.id,on:{tap:function(n){return t.handleToCity(i.nm,i.id)}}},[t._v(t._s(i.nm))])})),0)])})),0)])])],1),n("div",{staticClass:"city_index"},[n("ul",t._l(t.cityList,(function(i,s){return n("li",{key:i.index,on:{touchstart:function(i){return t.handleToIndex(s)}}},[t._v(t._s(i.index))])})),0)])])},e=[],o={name:"City",data:function(){return{cityList:[],hotList:[],isLoading:!0}},mounted:function(){var t=this,i=window.localStorage.getItem("cityList"),n=window.localStorage.getItem("hotList");i&&n?(this.cityList=JSON.parse(i),this.hotList=JSON.parse(n),this.isLoading=!1):this.axios.get("/api/cityList").then((function(i){var n=i.data.msg;if("ok"===n){t.isLoading=!1;var s=i.data.data.cities,e=t.formatCityList(s),o=e.cityList,a=e.hotList;t.cityList=o,t.hotList=a,window.localStorage.setItem("cityList",JSON.stringify(o)),window.localStorage.setItem("hotList",JSON.stringify(a))}}))},methods:{formatCityList:function(t){for(var i=[],n=[],s=0;s<t.length;s++)1===t[s].isHot&&n.push(t[s]);for(s=0;s<t.length;s++){var e=t[s].py.substring(0,1).toUpperCase();if(a(e))i.push({index:e,list:[{nm:t[s].nm,id:t[s].id}]});else for(var o=0;o<i.length;o++)i[o].index===e&&i[o].list.push({nm:t[s].nm,id:t[s].id})}function a(t){for(var n=0;n<i.length;n++)if(i[n].index===t)return!1;return!0}return i.sort((function(t,i){return t.index>i.index?1:t.index<i.index?-1:0})),{cityList:i,hotList:n}},handleToIndex:function(t){var i=this.$refs.city_sort.getElementsByTagName("h2");this.$refs.city_List.ToScrollTop(-i[t].offsetTop)},handleToCity:function(t,i){this.$store.commit("city/CITY_INFO",{nm:t,id:i}),window.localStorage.setItem("nowNm",t),window.localStorage.setItem("nowId",i),this.$router.push("/movie/nowPlaying")}}},a=o,r=(n("5361"),n("2877")),c=Object(r["a"])(a,s,e,!1,null,"89a995a8",null);i["default"]=c.exports}}]);
//# sourceMappingURL=chunk-7b466f44.f5675826.js.map