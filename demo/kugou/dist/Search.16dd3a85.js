(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"7kCV":function(e,t,s){},LZAx:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"search"},[s("PubModuleTitle",{staticClass:"search__title",attrs:{title:e.title}}),s("div",{ref:"searchCont",staticClass:"search__cont"},[s("form",{staticClass:"search__form",on:{submit:function(e){e.preventDefault()}}},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.keyword,expression:"keyword",modifiers:{trim:!0}}],staticClass:"search__input",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.keyword},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.getSearchRes(t):null},input:function(t){t.target.composing||(e.keyword=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),s("button",{class:e.isSearchResShow?"search__btn search__btn--active":"search__btn",attrs:{type:"button"},on:{click:e.getSearchRes}},[e._v(e._s(e.title))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isSearchRecShow,expression:"isSearchRecShow"}],staticClass:"search__rec"},[s("h6",{staticClass:"search__type"},[e._v(e._s(e.searchType))]),s("ul",{staticClass:"search__list"},e._l(e.searchRecArr,function(t,a){return s("li",{key:a,staticClass:"search__item main_border_bottom",on:{click:function(s){e.keyword=t.keyword,e.getSearchRes()}}},[e._v(e._s(t.keyword))])}))]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isSearchResShow,expression:"isSearchResShow"}],staticClass:"search__res"},[s("div",{staticClass:"search__count"},[e._v("共有"+e._s(e.searchRes.info.length)+"条结果")]),s("AppMusicList",{staticClass:"search__res-list",attrs:{"music-list":e.searchRes.info}})],1)])],1)},i=[],r=(s("pIFo"),s("OG14"),s("yT7P")),c=(s("VRzm"),s("uo/n")),o=s("PxLW"),n=s("vDqi"),h=s.n(n),l=s("pHQ6"),u=s("nc4g"),d=s("eToF"),p=s("L2JU"),f={name:"Search",mixins:[d["a"]],components:{PubModuleTitle:c["a"],AppMusicList:o["a"]},data:function(){return{title:"搜索",searchType:"最近热门",placeholder:"歌手/歌名/拼音"}},computed:Object(r["a"])({},Object(p["d"])("search",["searchRecArr","searchRes","isSearchRecShow","isSearchResShow"]),{keyword:{get:function(){return this.$store.state.search.keyword},set:function(e){this.replaceProperty({paths:"search.keyword",data:e})}},isSearchRecShow:{get:function(){return this.$store.state.search.isSearchRecShow},set:function(e){this.replaceProperty({paths:"search.isSearchRecShow",data:e})}},isSearchResShow:{get:function(){return this.$store.state.search.isSearchResShow},set:function(e){this.replaceProperty({paths:"search.isSearchResShow",data:e})}}}),created:function(){this.init()},mounted:function(){u["a"].$on("searchBtnClicked",this.scrollTopSearchCont),this.initQqBugDetect()},destroyed:function(){u["a"].$off("searchBtnClicked",this.scrollTopSearchCont)},methods:Object(r["a"])({},Object(p["c"])(["replaceProperty"]),{init:function(){var e=this.$route.query.keyword,t="string"===typeof this.keyword&&""!==this.keyword,s="string"===typeof e&&""!==e;s&&e!==this.keyword?(this.keyword=e,this.getSearchRes()):t?(this.isSearchRecShow=!1,this.isSearchResShow=!0):this.getSearchRec()},getSearchRec:function(){var e=this;if(0!==this.searchRecArr.length)return this.isSearchResShow=!1,void(this.isSearchRecShow=!0);this.setLoadingExcludeSearchForm(),this.startLoading(),h.a.get(l["a"].hotSearch).then(function(t){var s=t.data;e.replaceProperty({paths:"search.searchRecArr",data:s.data.info}),e.stopLoading(),e.isSearchResShow=!1,e.isSearchRecShow=!0}).catch(function(e){alert(e)})},getSearchRes:function(){var e=this;if(""!==this.keyword){this.$router.replace({query:{keyword:this.keyword}});var t=l["a"].searchResult+encodeURIComponent(this.keyword);this.setLoadingExcludeSearchForm(),this.startLoading(),h.a.get(t).then(function(t){var s=t.data.data;e.replaceProperty({paths:"search.searchRes",data:s}),e.isSearchRecShow=!1,e.isSearchResShow=!0,e.stopLoading()}).catch(function(e){return alert(e)})}},initQqBugDetect:function(){var e=document.getElementsByClassName("search__cont")[0];window.search__cont=e;//! bug with qq browser
var t=function(){e.scrollTop};window.addEventListener("touchstart",t),window.addEventListener("touchmove",t)},scrollTopSearchCont:function(){this.$refs.searchCont&&(this.$refs.searchCont.scrollTop=0)}})},_=f,m=(s("T7BO"),s("KHd+")),w=Object(m["a"])(_,a,i,!1,null,"10316733",null);t["default"]=w.exports},OG14:function(e,t,s){s("IU+Z")("search",1,function(e,t,s){return[function(s){"use strict";var a=e(this),i=void 0==s?void 0:s[t];return void 0!==i?i.call(s,a):new RegExp(s)[t](String(a))},s]})},PxLW:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"music_list"},e._l(e.musicList,function(t,a){return s("li",{key:a,staticClass:"music_list__item main_border_bottom"},[s("div",{staticClass:"music_list__info",on:{click:function(s){e.wantPlay(t)}}},[e._t("index",null,{data:a}),s("div",{staticClass:"music_list__name"},[e._v(e._s(t.filename))])],2),s("button",{staticClass:"music_list__download"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-download"}})])])])}))},i=[],r={name:"AppMusicList",props:{musicList:{type:Array,default:function(){return[]}}},methods:{wantPlay:function(e){this.$store.commit("player/wantPlay",{music:e,musicList:this.$props.musicList})}}},c=r,o=(s("VvY7"),s("KHd+")),n=Object(o["a"])(c,a,i,!1,null,"39bf58b4",null);t["a"]=n.exports},T7BO:function(e,t,s){"use strict";var a=s("7kCV"),i=s.n(a);i.a},VvY7:function(e,t,s){"use strict";var a=s("vVRU"),i=s.n(a);i.a},eToF:function(e,t,s){"use strict";var a=s("yT7P"),i=s("L2JU");t["a"]={updated:function(){this.stopLoading()},methods:Object(a["a"])({},Object(i["c"])(["replaceProperty"]),{startLoading:function(){this.replaceProperty({paths:"loading.isShow",data:!0})},stopLoading:function(){this.replaceProperty({paths:"loading.isShow",data:!1})},setLoadingExcludeHeader:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_header"})},setLoadingExcludeNav:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_nav"})},setLoadingExcludeModuleTitle:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_module_title"})},setLoadingExcludeSearchForm:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_search_form"})}})}},u5pF:function(e,t,s){},"uo/n":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h4",{staticClass:"module_title main_box_shadow",on:{click:function(t){e.$emit("click",arguments[0])}}},[e._v(e._s(e.title))])},i=[],r={name:"PubModuleTitle",props:{title:{type:String,default:function(){return""}}}},c=r,o=(s("yuGp"),s("KHd+")),n=Object(o["a"])(c,a,i,!1,null,"95e615fa",null);t["a"]=n.exports},vVRU:function(e,t,s){},yuGp:function(e,t,s){"use strict";var a=s("u5pF"),i=s.n(a);i.a}}]);
//# sourceMappingURL=Search.16dd3a85.js.map