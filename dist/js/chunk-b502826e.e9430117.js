(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b502826e"],{3266:function(s,t,e){},"4f75":function(s,t,e){"use strict";var a=e("3266"),i=e.n(a);i.a},"9d59":function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"search_body"},[e("div",{staticClass:"search_input"},[e("div",{staticClass:"search_input_wrapper"},[e("i",{staticClass:"iconfont icon-sousuo"}),e("input",{directives:[{name:"model",rawName:"v-model",value:s.message,expression:"message"}],attrs:{type:"text"},domProps:{value:s.message},on:{input:function(t){t.target.composing||(s.message=t.target.value)}}})])]),e("div",{staticClass:"search_result"},[e("h3",[s._v("电影/电视剧/综艺")]),e("ul",s._l(s.moviesList,(function(t){return e("li",{key:t.id},[e("div",{staticClass:"img"},[e("img",{attrs:{src:s._f("setWH")(t.img,"128.180")}})]),e("div",{staticClass:"info"},[e("p",[e("span",[s._v(s._s(t.nm))]),e("span",[s._v(s._s(t.sc))])]),e("p",[s._v(s._s(t.enm))]),e("p",[s._v(s._s(t.cat))]),e("p",[s._v(s._s(t.rt))])])])})),0)])])},i=[],n={name:"Search",data:function(){return{message:"",moviesList:[]}},methods:{cancelRequest:function(){"function"===typeof this.source&&this.source("终止请求")}},watch:{message:function(s){var t=this,e=this;this.cancelRequest();var a=this.$store.state.city.id;this.axios.get("/api/searchList?cityId="+a+"&kw="+s,{cancelToken:new this.axios.CancelToken((function(s){e.source=s}))}).then((function(s){var e=s.data.msg,a=s.data.data.movies;e&&a&&(t.moviesList=s.data.data.movies.list)})).catch((function(s){t.axios.isCancel(s)?console.log("Rquest canceled",s.message):console.log(s)}))}}},c=n,o=(e("4f75"),e("2877")),u=Object(o["a"])(c,a,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-b502826e.e9430117.js.map