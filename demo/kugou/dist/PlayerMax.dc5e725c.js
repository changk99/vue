(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"7Qib":function(t,e,r){"use strict";r.d(e,"d",function(){return n}),r.d(e,"b",function(){return s}),r.d(e,"c",function(){return a}),r.d(e,"a",function(){return o});var i=r("oyJW");r("9XZr"),r("xfY5"),r("HEwt"),r("rGqo"),r("VRzm");function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t.length>0};return new Promise(function(i){var n=new MutationObserver(a),s={childList:!0,subtree:!0};function a(n,s){n.forEach(function(n){if("childList"==n.type){var a=Array.from(t.querySelectorAll(e));r(a)&&(s.disconnect(),i(Array.from(a)))}})}n.observe(t,s)})}function s(t){if(Array.isArray(t)){var e=t.filter(function(t){return!t.dataset.isLoaded});e.forEach(function(t){var e=t.getBoundingClientRect().top;e<window.innerHeight&&(t.src=t.dataset.src,t.dataset.isLoaded=!0)})}}function a(t){if(isNaN(Number(t)))return"00:00";t=Math.floor(t);var e=t%60,r=Math.floor(t/60);return String(r).padStart(2,"0")+":"+String(e).padStart(2,"0")}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data-";return Object(i["a"])({},"".concat(e+t),"")}},"8a7r":function(t,e,r){"use strict";var i=r("hswa"),n=r("RjD/");t.exports=function(t,e,r){e in t?i.f(t,e,n(0,r)):t[e]=r}},"9XZr":function(t,e,r){"use strict";var i=r("XKFU"),n=r("Lgjv"),s=r("ol8x");i(i.P+i.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(s),"String",{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},Avi0:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.music?r("section",{staticClass:"player"},[r("div",{staticClass:"player__mask",style:t.playerBgImg}),r("div",{staticClass:"player__cont"},[r("h6",{staticClass:"player__song_name"},[t._v(t._s(t.songName))]),r("img",{class:t.isPlaying?"player__singer_img player__singer_img--active":"player__singer_img",attrs:{src:t.singerImg}}),r("PlayerLyrics",{staticClass:"player__lyrics"}),r("PlayerProgress",{staticClass:"player__progress"}),r("div",{staticClass:"player__buttons"},[r("PrevButton",{staticClass:"player__btn_prev"}),r("PlayButton",{staticClass:"player__btn_status"}),r("NextButton",{staticClass:"play__btn_next"})],1),r("button",{staticClass:"player__download"})],1)]):t._e()},n=[],s=(r("pIFo"),r("yT7P")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"player_lyric",on:{touchstart:function(e){t.isTouching=!0},touchend:function(e){t.isTouching=!1}}},t._l(t.lyricItems,function(e,i){return r("p",t._b({key:e.millisecond,ref:e.millisecond,refInFor:!0,class:i===t.prevLyricIndex+1?"player_lyric_text player_lyric_text--active ":"player_lyric_text"},"p",t.getVBindObj("millisecond-"+e.millisecond),!1),[t._v(t._s(e.text))])}))},o=[],c=(r("INYr"),r("VRzm"),r("L2JU")),u=r("7Qib"),l={name:"PlayerLyrics",data:function(){return{getVBindObj:u["a"],prevLyricIndex:0,isTouching:!1}},computed:Object(s["a"])({},Object(c["d"])("player",["audioEl"]),Object(c["b"])("player",["lyricItems"]),{lyricMillisecond:function(){return this.lyricItems.map(function(t){return t.millisecond})}}),mounted:function(){var t=this;this.$nextTick(function(){t.audioEl.addEventListener("timeupdate",t.timeUpdateCb)})},destroyed:function(){this.audioEl.removeEventListener("timeupdate",this.timeUpdateCb)},methods:{timeUpdateCb:function(t){if(!this.isTouching){var e=Math.floor(1e3*t.target.currentTime),r=this.lyricMillisecond.findIndex(function(t){return t>1.005*e}),i=r>1?r-2:0,n=this.$refs&&this.$refs[this.lyricMillisecond[i]];n&&this.$refs[this.lyricMillisecond[i]][0].scrollIntoView(),this.prevLyricIndex=i}}}},d=l,h=(r("qmnN"),r("KHd+")),f=Object(h["a"])(d,a,o,!1,null,"6bed046c",null),g=f.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"player_progress",on:{touchstart:t.setCurTime}},[r("div",{staticClass:"player_progress__song_cur_time"},[t._v(t._s(t.secondToMin(t.currentTime)))]),r("div",{ref:"progressBar",staticClass:"player_progress__progress_bar",style:t.progressBarStyle},[r("div",{staticClass:"player_progress__progress_bar_pointer",style:"left:"+t.currentProgress+"%;"})]),r("div",{staticClass:"player_progress__song_duration"},[t._v(t._s(t.secondToMin(t.audioEl.duration)))])])},m=[],y={name:"PlayerProgress",data:function(){return{secondToMin:u["c"],currentTime:0,loadProgress:0,isTouching:!1,touchStartX:0,progressBarRect:null}},computed:Object(s["a"])({},Object(c["d"])("player",["song","audioEl"]),{currentProgress:function(){return Math.floor(100*this.currentTime/this.audioEl.duration)},progressBarStyle:function(){return"background-image:linear-gradient(to right, #2ca2f9 ".concat(this.currentProgress,"%, transparent ").concat(this.currentProgress,"%),linear-gradient(to right, #6c6b70 ").concat(this.loadProgress,"%, transparent ").concat(this.loadProgress,"%)")}}),mounted:function(){var t=this;this.$nextTick(function(){t.audioEl.addEventListener("progress",t.progressCb),t.audioEl.addEventListener("timeupdate",t.timeUpdateCb)})},destroyed:function(){this.audioEl.removeEventListener("progress",this.progressCb),this.audioEl.removeEventListener("timeupdate",this.timeUpdateCb)},methods:{progressCb:function(){if(!(this.audioEl.readyState<2)){var t=this.audioEl.buffered.length;this.loadProgress=Math.floor(100*this.audioEl.buffered.end(t-1)/this.audioEl.duration)}},timeUpdateCb:function(t){this.isTouching||(this.currentTime=t.target.currentTime)},setCurTime:function(t){this.isTouching=!0,this.progressBarRect||(this.progressBarRect=this.$refs.progressBar.getBoundingClientRect());var e=t.touches[0].clientX;this.currentTime=this.calcCurTime(e,this.progressBarRect.left,0),this.touchStartX=e,window.addEventListener("touchmove",this.setCurTimeOnMove),window.addEventListener("touchend",this.touchEndCb)},setCurTimeOnMove:function(t){var e=t.touches[0].clientX;this.currentTime=this.calcCurTime(e,this.touchStartX,1),this.touchStartX=e},touchEndCb:function(){this.isTouching=!1,this.audioEl.currentTime=this.currentTime,window.removeEventListener("touchmove",this.setCurTimeOnMove),window.removeEventListener("touchend",this.touchEndCb)},calcCurTime:function(t,e,r){var i,n=t-e,s=n/this.progressBarRect.width;switch(r){case 0:i=this.audioEl.duration*s;break;case 1:i=this.currentTime+this.audioEl.duration*s;break}return i<0?i=0:i>this.audioEl.duration&&(i=this.audioEl.duration),i}}},v=y,_=(r("Ndh4"),Object(h["a"])(v,p,m,!1,null,"eaa8757c",null)),b=_.exports,E=r("/Q5G"),C=r("4OHh"),P=r("8w1d"),w=r("vDqi"),T=r.n(w),j=r("pHQ6"),L=r("Q2AE"),M={name:"PlayerMax",components:{PlayerLyrics:g,PlayerProgress:b,PlayButton:E["a"],NextButton:C["a"],PrevButton:P["a"]},computed:Object(s["a"])({},Object(c["d"])("images",["logo__theme"]),Object(c["d"])("player",["audioEl","isPlaying","song","music"]),Object(c["b"])("player",["songName","singerName","singerImg"]),{playerBgImg:function(){return"background-image:url(".concat(this.singerImg,"),linear-gradient(to right, rgb(48, 67, 82), rgb(215, 210, 204));")}}),watch:{"music.hash":function(t){this.$router.replace({query:{musicHash:t}})}},beforeRouteEnter:function(t,e,r){var i=t.query.musicHash;if(i)return t.params.fromPlayerMed?r():T.a.get(j["a"].songInfo+i).then(function(t){var e=t.data;e.filename=e.fileName,L["a"].commit("player/wantPlay",{music:e,musicList:[e]}),r()}).catch(function(t){return alert(t)})},mounted:function(){this.replaceProperty({paths:"player.isPlayerMedShow",data:!1})},destroyed:function(){this.replaceProperty({paths:"player.isPlayerMedShow",data:!0}),this.replaceProperty({paths:"player.isPlayerMedSmall",data:!1})},methods:Object(s["a"])({},Object(c["c"])(["replaceProperty"]))},x=M,S=(r("rKzJ"),Object(h["a"])(x,i,n,!1,null,"094baac5",null));e["default"]=S.exports},HEwt:function(t,e,r){"use strict";var i=r("m0Pp"),n=r("XKFU"),s=r("S/j/"),a=r("H6hf"),o=r("M6Qj"),c=r("ne8i"),u=r("8a7r"),l=r("J+6e");n(n.S+n.F*!r("XMVh")(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,n,d,h=s(t),f="function"==typeof this?this:Array,g=arguments.length,p=g>1?arguments[1]:void 0,m=void 0!==p,y=0,v=l(h);if(m&&(p=i(p,g>2?arguments[2]:void 0,2)),void 0==v||f==Array&&o(v))for(e=c(h.length),r=new f(e);e>y;y++)u(r,y,m?p(h[y],y):h[y]);else for(d=v.call(h),r=new f;!(n=d.next()).done;y++)u(r,y,m?a(d,p,[n.value,y],!0):n.value);return r.length=y,r}})},K8cI:function(t,e,r){},Lgjv:function(t,e,r){var i=r("ne8i"),n=r("l0Rn"),s=r("vhPU");t.exports=function(t,e,r,a){var o=String(s(t)),c=o.length,u=void 0===r?" ":String(r),l=i(e);if(l<=c||""==u)return o;var d=l-c,h=n.call(u,Math.ceil(d/u.length));return h.length>d&&(h=h.slice(0,d)),a?h+o:o+h}},Ndh4:function(t,e,r){"use strict";var i=r("zDXf"),n=r.n(i);n.a},Xjb7:function(t,e,r){},l0Rn:function(t,e,r){"use strict";var i=r("RYi7"),n=r("vhPU");t.exports=function(t){var e=String(n(this)),r="",s=i(t);if(s<0||s==1/0)throw RangeError("Count can't be negative");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(r+=e);return r}},qmnN:function(t,e,r){"use strict";var i=r("Xjb7"),n=r.n(i);n.a},rKzJ:function(t,e,r){"use strict";var i=r("K8cI"),n=r.n(i);n.a},zDXf:function(t,e,r){}}]);
//# sourceMappingURL=PlayerMax.dc5e725c.js.map