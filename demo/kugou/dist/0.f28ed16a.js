(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"8a7r":function(t,e,r){"use strict";var i=r("hswa"),s=r("RjD/");t.exports=function(t,e,r){e in t?i.f(t,e,s(0,r)):t[e]=r}},Avi0:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.music?r("section",{staticClass:"player"},[r("div",{staticClass:"player__mask",style:t.playerBgImg}),r("div",{staticClass:"player__cont"},[r("h6",{staticClass:"player__song_name"},[t._v(t._s(t.songName))]),r("img",{class:t.isPlaying?"player__singer_img player__singer_img--active":"player__singer_img",attrs:{src:t.singerImg}}),r("PlayerLyrics",{staticClass:"player__lyrics"}),r("PlayerProgress",{staticClass:"player__progress"}),r("div",{staticClass:"player__buttons"},[r("PrevButton",{staticClass:"player__btn_prev"}),r("PlayButton",{staticClass:"player__btn_status"}),r("NextButton",{staticClass:"play__btn_next"})],1),r("button",{staticClass:"player__download"})],1)]):t._e()},s=[],n=(r("pIFo"),r("yT7P")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"player_lyric",on:{touchstart:function(e){t.isTouching=!0},touchend:function(e){t.isTouching=!1}}},t._l(t.lyricItems,function(e,i){return r("p",t._b({key:e.millisecond,ref:e.millisecond,refInFor:!0,class:i===t.prevLyricIndex+1?"player_lyric_text player_lyric_text--active ":"player_lyric_text"},"p",t.vBindAttr("millisecond-"+e.millisecond),!1),[t._v(t._s(e.text))])}))},o=[],c=(r("INYr"),r("L2JU")),u=r("G2KY"),l={name:"PlayerLyrics",mixins:[u["a"]],data:function(){return{prevLyricIndex:0,isTouching:!1}},computed:Object(n["a"])({},Object(c["d"])("player",["audioEl"]),Object(c["b"])("player",["lyricItems"]),{lyricMillisecond:function(){return this.lyricItems.map(function(t){return t.millisecond})}}),mounted:function(){var t=this;this.$nextTick(function(){t.audioEl.addEventListener("timeupdate",t.timeUpdateCb)})},destroyed:function(){this.audioEl.removeEventListener("timeupdate",this.timeUpdateCb)},methods:{timeUpdateCb:function(t){if(!this.isTouching){var e=Math.floor(1e3*t.target.currentTime),r=this.lyricMillisecond.findIndex(function(t){return t>1.005*e}),i=r>1?r-2:0,s=this.$refs&&this.$refs[this.lyricMillisecond[i]];s&&this.$refs[this.lyricMillisecond[i]][0].scrollIntoView(),this.prevLyricIndex=i}}}},d=l,h=(r("HHI1"),r("KHd+")),m=Object(h["a"])(d,a,o,!1,null,"417b8a05",null),p=m.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"player_progress",on:{touchstart:t.setCurTime}},[r("div",{staticClass:"player_progress__song_cur_time"},[t._v(t._s(t.secondToMin(t.currentTime)))]),r("div",{ref:"progressBar",staticClass:"player_progress__progress_bar",style:t.progressBarStyle},[r("div",{staticClass:"player_progress__progress_bar_pointer",style:"left:"+t.currentProgress+"%;"})]),r("div",{staticClass:"player_progress__song_duration"},[t._v(t._s(t.secondToMin(t.audioEl.duration)))])])},f=[],y=(r("VRzm"),{name:"PlayerProgress",mixins:[u["a"]],data:function(){return{currentTime:0,loadProgress:0,isTouching:!1,touchStartX:0,progressBarRect:null}},computed:Object(n["a"])({},Object(c["d"])("player",["song","audioEl"]),{currentProgress:function(){return Math.floor(100*this.currentTime/this.audioEl.duration)},progressBarStyle:function(){return"background-image:linear-gradient(to right, #2ca2f9 ".concat(this.currentProgress,"%, transparent ").concat(this.currentProgress,"%),linear-gradient(to right, #6c6b70 ").concat(this.loadProgress,"%, transparent ").concat(this.loadProgress,"%)")}}),mounted:function(){var t=this;this.$nextTick(function(){t.audioEl.addEventListener("progress",t.progressCb),t.audioEl.addEventListener("timeupdate",t.timeUpdateCb)})},destroyed:function(){this.audioEl.removeEventListener("progress",this.progressCb),this.audioEl.removeEventListener("timeupdate",this.timeUpdateCb)},methods:{progressCb:function(){if(!(this.audioEl.readyState<2)){var t=this.audioEl.buffered.length;this.loadProgress=Math.floor(100*this.audioEl.buffered.end(t-1)/this.audioEl.duration)}},timeUpdateCb:function(t){this.isTouching||(this.currentTime=t.target.currentTime)},setCurTime:function(t){this.isTouching=!0,this.progressBarRect||(this.progressBarRect=this.$refs.progressBar.getBoundingClientRect());var e=t.touches[0].clientX;this.currentTime=this.calcCurTime(e,this.progressBarRect.left,0),this.touchStartX=e,window.addEventListener("touchmove",this.setCurTimeOnMove),window.addEventListener("touchend",this.touchEndCb)},setCurTimeOnMove:function(t){var e=t.touches[0].clientX;this.currentTime=this.calcCurTime(e,this.touchStartX,1),this.touchStartX=e},touchEndCb:function(){this.isTouching=!1,this.audioEl.currentTime=this.currentTime,window.removeEventListener("touchmove",this.setCurTimeOnMove),window.removeEventListener("touchend",this.touchEndCb)},calcCurTime:function(t,e,r){var i,s=t-e,n=s/this.progressBarRect.width;switch(r){case 0:i=this.audioEl.duration*n;break;case 1:i=this.currentTime+this.audioEl.duration*n;break}return i<0?i=0:i>this.audioEl.duration&&(i=this.audioEl.duration),i}}}),_=y,v=(r("hoSW"),Object(h["a"])(_,g,f,!1,null,"98e7d5e6",null)),b=v.exports,E=r("/Q5G"),C=r("4OHh"),P=r("8w1d"),T=r("vDqi"),w=r.n(T),L=r("pHQ6"),x=r("Q2AE"),I={name:"PlayerMax",components:{PlayerLyrics:p,PlayerProgress:b,PlayButton:E["a"],NextButton:C["a"],PrevButton:P["a"]},computed:Object(n["a"])({},Object(c["d"])("images",["logo__theme"]),Object(c["d"])("player",["audioEl","isPlaying","song","music"]),Object(c["b"])("player",["songName","singerName","singerImg"]),{playerBgImg:function(){return"background-image:url(".concat(this.singerImg,"),linear-gradient(to right, rgb(48, 67, 82), rgb(215, 210, 204));")}}),watch:{"music.hash":function(t){this.$router.replace({query:{musicHash:t}})}},beforeRouteEnter:function(t,e,r){var i=t.query.musicHash;if(i)return t.params.fromPlayerMed?r():w.a.get(L["a"].songInfo+i).then(function(t){var e=t.data;e.filename=e.fileName,x["a"].commit("player/wantPlay",{music:e,musicList:[e]}),r()}).catch(function(t){return alert(t)})},mounted:function(){this.replaceProperty({paths:"player.isPlayerMedShow",data:!1})},destroyed:function(){this.replaceProperty({paths:"player.isPlayerMedShow",data:!0}),this.replaceProperty({paths:"player.isPlayerMedSmall",data:!1})},methods:Object(n["a"])({},Object(c["c"])(["replaceProperty"]))},O=I,B=(r("rKzJ"),Object(h["a"])(O,i,s,!1,null,"094baac5",null));e["default"]=B.exports},G2KY:function(t,e,r){"use strict";r("HEwt"),r("rGqo");var i=r("oyJW"),s=r("yT7P"),n=(r("VRzm"),r("LxRX"));e["a"]={data:function(){return{imgSize:400,isLoaded:!1}},methods:Object(s["a"])({},n["a"],{vBindAttr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data-";return Object(i["a"])({},"".concat(e+t),"")},$_xsl__detectToLoadImgLazy:function(t,e,r){var i=this;t&&0!==t.length?this.$_xsl__loadImgLazy(t):this.$_xsl__watchRefs(e,r).then(function(t){i.$_xsl__loadImgLazy(t)})},$_xsl__watchRefs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return new Promise(function(r){var i=new MutationObserver(n),s={childList:!0,subtree:!0};function n(i,s){i.forEach(function(i){if("childList"==i.type){var n=t.querySelectorAll(e);0!==n.length&&(s.disconnect(),r(Array.from(n)))}})}i.observe(t,s)})},$_xsl__loadImgLazy:function(t){var e=this;if(Array.isArray(t)){var r=t.filter(function(t){return!t.dataset.isLoaded});r.forEach(function(t){var r=t.getBoundingClientRect().top;r<e.$store.state.device.vh&&(t.src=t.dataset.src,t.dataset.isLoaded=!0)})}}})}},HEwt:function(t,e,r){"use strict";var i=r("m0Pp"),s=r("XKFU"),n=r("S/j/"),a=r("H6hf"),o=r("M6Qj"),c=r("ne8i"),u=r("8a7r"),l=r("J+6e");s(s.S+s.F*!r("XMVh")(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,s,d,h=n(t),m="function"==typeof this?this:Array,p=arguments.length,g=p>1?arguments[1]:void 0,f=void 0!==g,y=0,_=l(h);if(f&&(g=i(g,p>2?arguments[2]:void 0,2)),void 0==_||m==Array&&o(_))for(e=c(h.length),r=new m(e);e>y;y++)u(r,y,f?g(h[y],y):h[y]);else for(d=_.call(h),r=new m;!(s=d.next()).done;y++)u(r,y,f?a(d,g,[s.value,y],!0):s.value);return r.length=y,r}})},HHI1:function(t,e,r){"use strict";var i=r("O7gS"),s=r.n(i);s.a},K8cI:function(t,e,r){},O7gS:function(t,e,r){},aI8N:function(t,e,r){},hoSW:function(t,e,r){"use strict";var i=r("aI8N"),s=r.n(i);s.a},rKzJ:function(t,e,r){"use strict";var i=r("K8cI"),s=r.n(i);s.a}}]);
//# sourceMappingURL=0.f28ed16a.js.map