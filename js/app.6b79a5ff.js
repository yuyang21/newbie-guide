(function(t){function e(e){for(var n,a,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)a=r[d],s[a]&&p.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0240":function(t,e,i){},"0e7a":function(t,e,i){},1:function(t,e){},"1b64":function(t,e,i){"use strict";var n=i("e031"),s=i.n(n);s.a},2464:function(t,e,i){},"2d61":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAhFBMVEUAAABQyHhQyXhR/IxWy3lRx3hQyXhQyXhRyXlPyXhQyHhQyXhQyXhQyHhRxnRQyHhQyXhQyHdQyHhQyXhQy3hQyXhOyHhQyXhQyHhRyXhRyHhQyHlPyHhQyHdQyXdPyXlQzHtNzHdNzIBQyXdQynhQyHhQy3tQyXdQyHdQyHhQyHhQyHg4IW6XAAAAK3RSTlMA8V8CBSufw1A/5N3q3w/Rk36uZR/5FLSoh9fKd29tLiMeCo1W9DZEvTPVlj2rggAAAwtJREFUWMOs1Ndym0AAheGznQ6iqfdiJ+f93y8TrHHscRCLxHcN/zDsmcUwZYKNdXmcNE0S585uAqPwMrMrBX8Q5c7gBYdZTJLp/FyF+7rVuq33YXWepyQZzw54ipKOZGTlET8cpY1IOqkwlq5iUtg3hR7qzQoyrjRGkRG5kic8dJIrMpLwZxyZXxQGqUtOOgM/etkwkfAkEzZLDQ/1miwyeMsKcl1jUCCY3jDKLaUIMGBGlhlGykpyhkdUQW7xhC1ZqAfHtuA1wFOCKxcaPdSCIsSTQsFF3zcXFHs8bS9Y9J3bNcQLwuv/TzAgA3jzL9SCW7xoS1H/GMSaJV5Wcq3x3ZJphpdlKZf4xjS8YQI3NgZfORaYREGHLySTDJPIEkp80hElJiIZ/Tu/ijkmk7PCnYp5wWQujNXn168UJqNWlJ+TkJiQpEPnQHHCgNYo+DoJHu63mh161ArxO4Qve7/lYg69sxR/LTX8hIwBwDBSeCwSnfcDvKiIBsCOFgPEXXTx/Rc7ACWlV7hjM79dlIASPPqE50lXzn9h2JFCwTCFT1ju11052SoMSmkQcO4XxqkQnbLFkDkDbHj2DAPBxzziNww4cwPLyjuM+l14TbqihWPoH4aeiY57POmQDjmNb7gTrj4mLfGAYY6U9agw2oXoWIVeNVMkbMeFgepj0hK9WiZoqMeGYbpJO/TSbP40ZzYrDMJAEC4UDyGN6clIsQbpQSTv/36lZOkPxTgbGNQHyCFxZ2bnqzp48cDBFVcx5qu4l6/C1j7eo/h49uRTrPndXDHyxuSVA3IeRPOnrQHRjXQX4JFWidBscRHCZfOtEwGSTVzoJ1G2ARN62Jr6rMU3A1qT0kz7DjRTnf1fRtj+VYHFL3hgwSLWFcwU8s3JgqGwDWIZcCiEY2w0rSrGsoI3bVWgLTesdYy2QLJWXtaSTqsVWEUIrbphlU2seoxV6LEqSFppyqp5WcU0qUpnlf8sXMECLCQktD/E+mA3s47djGC3o4DCP7TZZLTZfKPN48HYH3zsXvjYwfj4CWhyVJHZCdrFAAAAAElFTkSuQmCC"},"3eae":function(t,e,i){},4263:function(t,e,i){"use strict";var n=i("e42a"),s=i.n(n);s.a},"485f":function(t,e,i){},"4afe":function(t,e,i){"use strict";var n=i("0240"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("ac6a"),i("456d");var n=i("543e"),s=i("2bb1"),o=i("5596"),a=i("5e46"),r=i("0b33"),l=i("b650"),c=(i("cadf"),i("551c"),i("097d"),i("2b0e")),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},d=[],p={name:"App",data:function(){return{}}},h=p,v=(i("7c55"),i("2877")),f=Object(v["a"])(h,u,d,!1,null,null,null);f.options.__file="App.vue";var y=f.exports,m=i("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{src:i("9d64")}}),t._v("\n  "+t._s(t.msg)+"\n  "),n("HelloWorld",{model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}),n("button",{on:{click:t.getListData}},[t._v("点击请求接口")]),n("van-button",{attrs:{type:"default"}},[t._v("默认按钮")]),n("van-button",{attrs:{type:"danger"},on:{click:function(e){t.$router.push("news")}}},[t._v("危险按钮")]),n("br"),n("ul",t._l(t.list,function(e,i){return n("li",{key:i},[n("h2",[t._v(t._s(e.message))]),n("img",{attrs:{src:e.imgUrl}})])}),0)],1)},w=[],b=(i("96cf"),i("1da1")),x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._m(0),i("h3",[t._v("Installed CLI Plugins")]),i("Test",{attrs:{value:t.value},on:{input:function(e){t.$emit("input",e)}}})],1)},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("\n    For guide and recipes on how to configure / customize this project,\n    "),i("br"),t._v("check out the\n    "),i("a",{attrs:{target:"_blank",href:"https://github.com/vuejs/vue-cli/tree/dev/docs"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])}],P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v(t._s(t.value))])},C=[],A={props:{value:String},data:function(){return{haha:""}},watch:{haha:function(t){this.$emit("input",t)}}},k=A,O=Object(v["a"])(k,P,C,!1,null,null,null);O.options.__file="Test.vue";var _=O.exports,j={components:{Test:_},name:"HelloWorld",props:{msg:String,value:String}},T=j,E=(i("b13a"),Object(v["a"])(T,x,S,!1,null,"4060acb6",null));E.options.__file="HelloWorld.vue";var L=E.exports,Q=i("be94"),$=(i("a481"),i("bc3a")),R=i.n($),N="/",H=function(t,e){if(e)return e(t);ne.replace(t)},B=function(t,e,i,n){switch(i.errno){case 0:t(i.data);break;case 505:window.location.href="/";break;default:n?e(i):H("/error")}},X=function(t,e,i,n){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return new Promise(function(o,a){console.log("".concat(t," 请求数据，参数=>"),JSON.stringify(i)),R()(Object(Q["a"])({},s,{method:e,url:N+t,params:"get"===e?i:null,data:"get"!==e?i:null})).then(function(e){var s=e.data;console.log("%c ".concat(t," %c 请求数据，参数=> %c ").concat(JSON.stringify(i)),"background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff","background: #fff; padding: 1px; border-radius: 0 3px 3px 0;  color: #000","background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff"),console.group(e),console.groupEnd(),B(o,a,s,n)}).catch(function(){return H("/error")})})},M={get:function(){var t=Object(b["a"])(regeneratorRuntime.mark(function t(e,i,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X(e,"get",i,n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e,i,n){return t.apply(this,arguments)}return e}(),post:function(){var t=Object(b["a"])(regeneratorRuntime.mark(function t(e,i,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X(e,"post",i,n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e,i,n){return t.apply(this,arguments)}return e}()},V={getList:function(){var t=Object(b["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M.get("/mock/75/getList");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),postList:function(){var t=Object(b["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M.post("/mock/75/postList",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},I={name:"Home",components:{HelloWorld:L},data:function(){return{msg:"哈哈",list:[]}},methods:{update:function(t){console.log(t),this.msg=t},getListData:function(){var t=Object(b["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$router.push({path:"/details",query:{id:111,initialSwipe:0}});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},U=I,F=Object(v["a"])(U,g,w,!1,null,null,null);F.options.__file="index.vue";var q=F.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"p-news"},[i("Swiper",{on:{slideNext:t.slideNext,slidePrev:t.slidePrev}},[i("div",{staticClass:"slide-1"},[i("video-view",{ref:"video",attrs:{videoUrl:t.videoUrl,videoPic:t.poster,picArr:t.picArr}})],1),t._l(t.picArr,function(t,e){return i("div",{key:e,staticClass:"slide-1"},[i("img",{attrs:{src:t.picPath,alt:"",srcset:""}})])})],2)],1)},D=[],W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"swiperContainer",staticClass:"swiper-container"},[i("div",{ref:"swiperWrapper",staticClass:"swiper-wrapper"},[t._t("default")],2)])},J=[],Z=(i("3b2b"),i("28a5"),i("c5f6"),i("b619")),G={name:"swiper",props:{loop:{type:Boolean,default:!1},direction:{type:String,default:"horizontal"},autoPlay:{type:Boolean,default:!1},interval:{type:Number,default:4e3},disableOnInteraction:{type:Boolean,default:!0}},data:function(){return{}},components:{Swiper:Z["a"]},updated:function(){if(!this.mySwiper&&this.$refs.swiperWrapper.children.length>1){for(var t=this.$refs.swiperWrapper.children,e=0;e<t.length;e++)this.addClass(t[e],"swiper-slide");var i=this;this.mySwiper=new Z["a"](this.$refs.swiperContainer,{direction:this.direction,loop:this.loop,autoplay:this.autoPlay?{delay:this.interval,centeredSlides:!0,disableOnInteraction:this.disableOnInteraction}:this.autoplay,on:{slideNextTransitionStart:function(){console.log(11),i.$emit("slideNext",this.activeIndex)},slidePrevTransitionStart:function(){i.$emit("slidePrev",this.activeIndex)},slideChangeTransitionStart:function(){i.$emit("slideChange",this.activeIndex)}}})}},mounted:function(){},methods:{addClass:function(t,e){if(!this.hasClass(t,e)){var i=t.className.split(" ");i.push(e),t.className=i.join(" ")}},hasClass:function(t,e){var i=new RegExp("(^|\\s)"+e+"(\\s|$)");return i.test(t.className)}}},Y=G,K=(i("a00f"),Object(v["a"])(Y,W,J,!1,null,null,null));K.options.__file="Swiper.vue";var tt=K.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"video-view"},[i("video",{ref:"video",staticClass:"video",attrs:{src:t.videoUrl,poster:t.videoPic,"webkit-playsinline":"",playsinline:"","x5-playsinline":"","x-webkit-airplay":"”allow”"},on:{click:t.pause,pause:t.onPause,ended:function(e){t.onEnd(e)},play:t.onPlay,error:function(e){t.onError(e)}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPlay,expression:"!isPlay"}],staticClass:"video-control",on:{click:t.toggle}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isPause,expression:"isPause"}],staticClass:"video-control pause-btn",on:{click:t.pauseClick}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.LoadingShow,expression:"LoadingShow"}],staticClass:"v-loading"},[i("loading",{attrs:{size:"45px"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.reloadFlag,expression:"reloadFlag"}],staticClass:"v-reload-box"},[i("div",{staticClass:"reload-text"},[t._v("视频加载失败")]),i("span",{on:{click:t.vReload}},[t._v("点击重试")])])])},it=[],nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"m-loading",style:{width:t.size,height:t.size}},[i("svg",{staticClass:"m-circular",attrs:{viewBox:"25 25 50 50"}},[i("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])},st=[],ot={name:"loading",props:{size:{type:String,default:"30px"}},data:function(){return{}},components:{},mounted:function(){},methods:{}},at=ot,rt=(i("4afe"),Object(v["a"])(at,nt,st,!1,null,null,null));rt.options.__file="Loading.vue";var lt=rt.exports,ct={name:"videoView",props:{videoUrl:{type:String,default:""},videoPic:{type:String,default:""}},data:function(){return{isPlay:!1,firstPlay:!1,reloadFlag:!1,isPause:!1,LoadingShow:!1}},components:{Loading:lt},mounted:function(){},methods:{onEnd:function(t){console.log("end",t),this.isPlay=!1},onPause:function(){this.isPlay=!1},onPlay:function(){this.isPlay=!0},vReload:function(){this.$refs.video.load(),this.play()},play:function(){if(!this.isPlay){this.$refs.video.play();var t=this;this.$refs.video.addEventListener("waiting",function(e){console.log("waiting1"),t.waitingFun()},!1),this.$refs.video.addEventListener("playing",function(e){t.playingFun(),console.log("playing")},!1)}},waitingFun:function(){this.LoadingShow=!0},playingFun:function(){this.LoadingShow=!1},pause:function(){var t=this;clearInterval(this.timer),this.isPlay&&(this.isPause=!0),this.timer=setInterval(function(){t.isPause=!1},2e3)},toggle:function(){this.isPlay?this.pause():this.play()},pauseClick:function(){this.isPause=!1,clearInterval(this.timer),this.isPlay=!1,this.LoadingShow=!1,this.$refs.video.pause()},onError:function(){this.LoadingShow=!1,this.reloadFlag=!0,console.log("视频加载失败")},reload:function(){this.$refs.video.load()}},destroyed:function(){var t=this;t.$refs.video.removeEventListener("waiting",t.waitingFun,!1),t.$refs.video.removeEventListener("playing",t.playingFun,!1)}},ut=ct,dt=(i("4263"),Object(v["a"])(ut,et,it,!1,null,null,null));dt.options.__file="VideoView.vue";var pt=dt.exports,ht={name:"",data:function(){return{videoUrl:"http://fastcdn.chinastock.com.cn/cdn/roadshow/video/xuanyuantouzi20200309.mp4",poster:"https://cdns.chinastock.com.cn/cdn/roadshow-1-1/CRM/crm/rsVideo/ff26d01b5d1c47d2ab9144fcf7fc4af7.png",playerOptions:{autoplay:!1,loop:!1,controls:!0,muted:!0,sources:[{type:"video/mp4",src:"http://vjs.zencdn.net/v/oceans.mp4"}],notSupportedMessage:"此视频暂无法播放，请稍后再试",language:"zh-CN"},picArr:[]}},props:{},components:{VideoView:pt,Swiper:tt,Loading:lt},mounted:function(){this.picArr=[{picPath:i("d8b0")},{picPath:i("9feb")},{picPath:i("df60")}]},methods:{slideNext:function(t){console.log("index",t),1===t&&this.$refs.video.pauseClick()},slidePrev:function(t){}}},vt=ht,ft=(i("ac4c"),Object(v["a"])(vt,z,D,!1,null,"06a52ac2",null));ft.options.__file="index.vue";var yt=ft.exports,mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"p-hot"},[i("div",{staticClass:"video-style"},[i("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{"x5-playsinline":!0,"webkit-playsinline":t.playsinline,playsinline:t.playsinline,options:t.playerOptions},on:{play:function(e){t.videoPlay(e)}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.durationShow,expression:"durationShow"}],staticClass:"video-poster vjs-seeking",on:{click:t.videoPlay}},[i("img",{attrs:{src:t.poster,alt:""}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.spinnerShow,expression:"spinnerShow"}],staticClass:"vjs-loading-spinner"})])],1)])},gt=[],wt=(i("4917"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-player"},[t.showVideo?n("video",{ref:"video",staticStyle:{"object-fit":"fill"},attrs:{"webkit-playsinline":"true",playsinline:"true","x-webkit-airplay":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true","x5-video-orientation":"portraint",preload:"auto",poster:t.poster,src:t.src},on:{waiting:t.handleWaiting,canplaythrough:function(e){t.state.isLoading=!1},playing:function(e){t.state.isLoading=!1,t.state.controlBtnShow=!1,t.state.playing=!0},stalled:function(e){t.state.isLoading=!0},error:t.handleError}},[t._v("您的浏览器不支持HTML5")]):t._e(),n("img",{directives:[{name:"show",rawName:"v-show",value:!t.showVideo||t.state.isEnd,expression:"!showVideo || state.isEnd"}],staticClass:"poster",attrs:{src:t.poster,alt:""}}),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.state.isError,expression:"!state.isError"}],ref:"control",staticClass:"control",on:{touchstart:t.touchEnterVideo,touchend:t.touchLeaveVideo}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.state.controlBtnShow,expression:"state.controlBtnShow"}],staticClass:"play",on:{touchstart:function(e){return e.stopPropagation(),t.clickPlayBtn(e)}}},[n("img",{directives:[{name:"show",rawName:"v-show",value:!t.state.playing&&!t.state.isLoading,expression:"!state.playing && !state.isLoading"}],attrs:{src:i("2d61")}}),n("img",{directives:[{name:"show",rawName:"v-show",value:t.state.playing&&!t.state.isLoading,expression:"state.playing  && !state.isLoading"}],attrs:{src:i("e5af")}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.state.isLoading,expression:"state.isLoading"}],staticClass:"loader"},[t._m(0)])]),n("div",{staticClass:"control-bar",style:{visibility:t.state.controlBarShow?"visible":"hidden"}},[n("span",{staticClass:"time"},[t._v(t._s(t.video.displayTime))]),n("span",{ref:"progress",staticClass:"progress"},[t._e(),n("span",{staticClass:"progress-loaded",style:{width:t.video.loaded+"%"}}),n("span",{staticClass:"progress-move",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.moveIng(e)},touchstart:function(e){e.stopPropagation(),t.moveStart(e)},touchend:function(e){e.stopPropagation(),t.moveEnd(e)}}})]),n("span",{staticClass:"total-time"},[t._v(t._s(t.video.totalTime))]),t._e()])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.state.isError,expression:"state.isError"}],staticClass:"error"},[n("p",{staticClass:"lose"},[t._v("视频加载失败")]),n("p",{staticClass:"retry",on:{click:t.retry}},[t._v("点击重试")])])])}),bt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loader-inner ball-clip-rotate"},[i("div")])}],xt=function(t,e,i){if(1===i)var n=0;else if(2===i)var s;return function(){var o=this,a=arguments;if(1===i){var r=Date.now();r-n>e&&(t.apply(o,a),n=r)}else 2===i&&(s||(s=setTimeout(function(){s=null,t.apply(o,a)},e)))}},St=function(t){return t=Math.floor(t),t<10?"0"+t:t+""},Pt=function(t){var e=0;return e=Math.floor(t/60),t-=60*e,St(e)+":"+St(t)},Ct={name:"t-video",props:{src:{type:String,required:!0},poster:{type:String,required:!0},showVideo:{type:Boolean,default:!0}},data:function(){return{$video:null,player:{$player:null,pos:null},progressBar:{$progress:null,pos:null},video:{loaded:0,displayTime:"00:00",totalTime:"00:00",progress:{width:0,current:0}},hideTimer:null,state:{controlBtnShow:!0,controlBarShow:!1,fullScreen:!1,playing:!1,isLoading:!1,isEnd:!1,isError:!1},isFirstTouch:!0,isPauseTouch:!1,isfullScreen:!1}},methods:{init:function(){this.$video=this.$el.getElementsByTagName("video")[0],this.initPlayer()},initPlayer:function(){var t=this.$el,e=this.$el.getElementsByClassName("progress")[0];this.player.$player=t,this.progressBar.$progress=e,this.player.pos=t.getBoundingClientRect(),this.progressBar.pos=e.getBoundingClientRect(),this.video.progress.width=Math.round(e.getBoundingClientRect().width)},clickPlayBtn:function(){var t=this;if(!this.state.isLoading&&(this.isFirstTouch=!1,this.state.playing=!this.state.playing,this.state.isEnd=!1,this.$video))if(this.state.playing)try{this.$video.play(),this.isPauseTouch=!1,this.$video.addEventListener("progress",function(e){t.getLoadTime()}),this.$video.addEventListener("timeupdate",xt(this.getPlayTime,100,1)),this.$video.addEventListener("ended",function(e){t.state.playing=!1,t.state.isEnd=!0,t.state.controlBtnShow=!0,t.video.displayTime="00:00",t.video.progress.current=0,t.$video.currentTime=0,t.src=t.src})}catch(e){}else this.isPauseTouch=!0,this.$video.pause()},touchEnterVideo:function(){this.isFirstTouch||(this.hideTimer&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.state.controlBtnShow=!0,this.state.controlBarShow=!0)},touchLeaveVideo:function(){var t=this;this.isFirstTouch||(this.hideTimer&&clearTimeout(this.hideTimer),this.isPauseTouch?(this.state.controlBtnShow=!0,this.state.controlBarShow=!0):this.hideTimer=setTimeout(function(){t.state.controlBarShow=!1,t.state.isLoading?t.state.controlBtnShow=!0:t.state.controlBtnShow=!1,t.hideTimer=null},3e3))},handleWaiting:function(){this.state.controlBtnShow=!0,this.state.isLoading=!0},handleError:function(){this.state.isError=!0},retry:function(){this.state.isError=!1,this.init()},getPlayTime:function(){var t=this.$video.currentTime/this.$video.duration;this.video.progress.current=Math.round(this.video.progress.width*t),this.video.totalTime=Pt(this.$video.duration),this.video.displayTime=Pt(this.$video.currentTime)},getLoadTime:function(){this.video.loaded=this.$video.buffered.end(0)/this.$video.duration*100},moveStart:function(t){},moveIng:function(t){var e=t.targetTouches[0].pageX,i=e-this.progressBar.pos.left;i<=0&&(i=0),i>=this.video.progress.width&&(i=this.video.progress.width),this.video.progress.current=i;var n=this.video.progress.current/this.video.progress.width;this.$video.duration&&this.setPlayTime(n,this.$video.duration)},moveEnd:function(t){var e=t.changedTouches[0].pageX,i=e-this.progressBar.pos.left;this.video.progress.current=i;var n=i/this.video.progress.width;this.$video.duration&&this.setPlayTime(n,this.$video.duration)},setPlayTime:function(t,e){this.$video.currentTime=Math.floor(t*e)},fullScreen:function(){console.log("点击全屏..."),this.state.fullScreen?(this.state.fullScreen=!1,document.webkitCancelFullScreen()):(this.state.fullScreen=!0,this.$video.webkitRequestFullScreen())}},mounted:function(){var t=this;setTimeout(function(){t.init()},20)},beforeDestroy:function(){}},At=Ct,kt=(i("f236"),Object(v["a"])(At,wt,bt,!1,null,"09e964b4",null));kt.options.__file="index.vue";var Ot=kt.exports,_t={name:"",data:function(){return{durationShow:!0,spinnerShow:!1,playerOptions:{language:"zh-CN",aspectRatio:"16:9",fluid:!0,autoplay:!1,playbackRates:[.7,1,1.5,2],preload:"auto",sources:[{type:"video/mp4",src:"http://fastcdn.chinastock.com.cn/cdn/roadshow/video/xuanyuantouzi20200309.mp4"}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试"},videoUrl:"http://fastcdn.chinastock.com.cn/cdn/roadshow/video/xuanyuantouzi20200309.mp4",poster:"https://cdns.chinastock.com.cn/cdn/roadshow-1-1/CRM/crm/rsVideo/ff26d01b5d1c47d2ab9144fcf7fc4af7.png",options:{video:{url:"http://static.smartisanos.cn/common/video/t1-ui.mp4",pic:"http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg"},autoplay:!1,contextmenu:[{text:"GitHub",link:"https://github.com/MoePlayer/vue-dplayer"}]}}},props:{},components:{Video:Ot},computed:{playsinline:function(){var t=navigator.userAgent.toLocaleLowerCase();return null==t.match(/tencenttraveler/)&&null==t.match(/qqbrowse/)}},mounted:function(){},methods:{videoPlay:function(t){var e=this;t.isFullscreen(!1),this.spinnerShow=!0;var i=setInterval(function(){var n=t.el_.firstChild.currentTime;n>.1&&(clearInterval(i),e.durationShow=!1,e.spinnerShow=!1)},50)}}},jt=_t,Tt=(i("1b64"),Object(v["a"])(jt,mt,gt,!1,null,"7d78d787",null));Tt.options.__file="index.vue";var Et=Tt.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-hot"},[n("van-swipe",{staticClass:"my-swipe",attrs:{"initial-swipe":t.initialSwipe,autoplay:1e17,"show-indicators":!1},on:{change:t.onChange}},[n("van-swipe-item",[n("div",{staticClass:"video-wrap"},[n("van-swipe",{attrs:{"show-indicators":!1,loop:!1},on:{change:t.onChangeMedia}},[n("van-swipe-item",[n("BaseVideo",{ref:"video",attrs:{videoUrl:t.url,videoPic:t.poster}})],1),n("van-swipe-item",[n("img",{attrs:{src:i("9d64")}})]),n("van-swipe-item",[n("img",{attrs:{src:t.poster,width:"100%"}})]),n("van-swipe-item",[n("img",{attrs:{src:t.options.video.pic,width:"100%"}})]),n("div",{staticClass:"custom-indicator",attrs:{slot:"indicator"},slot:"indicator"},[t._v("\n              "+t._s(t.current+1)+"/4\n            ")])],1)],1)]),n("van-swipe-item",[n("div",[n("VueDPlayer",{ref:"player",attrs:{options:t.options},on:{play:t.play}})],1)]),n("van-swipe-item",[n("BaseVideo",{ref:"video",attrs:{videoUrl:t.url,videoPic:t.poster}}),t._v("\n      这里是3")],1),n("van-swipe-item",[n("BaseVideo",{ref:"video",attrs:{videoUrl:t.url,videoPic:t.poster}}),t._v("\n      这里是4")],1)],1),n("div",{staticClass:"footer"},[n("span",[t._v(t._s(t.index))]),n("span",[t._v("/")]),n("span",[t._v(t._s(t.total))]),n("div",{staticClass:"columns"})])],1)},Qt=[],$t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"video-view"},[i("video",{ref:"video",staticClass:"video",attrs:{src:t.videoUrl,poster:t.videoPic,"webkit-playsinline":"",playsinline:"","x5-playsinline":"","x-webkit-airplay":"”allow”"},on:{click:t.pause,pause:t.onPause,ended:t.onEnd,play:t.onPlay}}),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPlay,expression:"!isPlay"}],staticClass:"video-control",on:{click:t.toggle}})])},Rt=[],Nt={name:"videoView",props:{videoUrl:{type:String,default:""},videoPic:{type:String,default:""}},data:function(){return{isPlay:!1}},methods:{onEnd:function(){this.isPlay=!1},onPause:function(){this.isPlay=!1},onPlay:function(){this.isPlay=!0},play:function(){this.isPlay||this.$refs.video.play()},pause:function(){this.isPlay&&this.$refs.video.pause()},pause2:function(){this.$refs.video.pause()},toggle:function(){this.isPlay?this.pause():this.play()}}},Ht=Nt,Bt=(i("7432"),Object(v["a"])(Ht,$t,Rt,!1,null,null,null));Bt.options.__file="index.vue";var Xt=Bt.exports,Mt=i("71ee"),Vt=i.n(Mt),It=(i("4da9"),{name:"",data:function(){return{current:0,initialSwipe:parseInt(this.$route.query.initialSwipe),index:parseInt(this.$route.query.initialSwipe)+1,total:4,url:"http://fastcdn.chinastock.com.cn/cdn/roadshow/video/xuanyuantouzi20200309.mp4",poster:"https://cdns.chinastock.com.cn/cdn/roadshow-1-1/CRM/crm/rsVideo/ff26d01b5d1c47d2ab9144fcf7fc4af7.png",options:{video:{url:"http://static.smartisanos.cn/common/video/t1-ui.mp4",pic:"http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg"},autoplay:!1,contextmenu:[{text:"GitHub",link:"https://github.com/MoePlayer/vue-dplayer"}]}}},props:{},components:{VueDPlayer:Vt.a,BaseVideo:Xt},mounted:function(){document.title=10*Math.random()+"to.meta.title"},methods:{onChangeMedia:function(t){this.current=t,0!==t&&this.$refs.video.pause()},onChange:function(t){this.index=t+1,document.title=10*Math.random()+"to.meta.title"},play:function(){console.log("play callback")}}}),Ut=It,Ft=(i("b825"),Object(v["a"])(Ut,Lt,Qt,!1,null,"3350746e",null));Ft.options.__file="index.vue";var qt=Ft.exports,zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"p-hot"},[i("div",{staticClass:"video-style"},[i("vue-video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:t.playerOptions},on:{play:function(e){t.videoPlay(e)}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.durationShow,expression:"durationShow"}],staticClass:"video-poster vjs-seeking",on:{click:t.videoPlay}},[i("img",{attrs:{src:t.poster,alt:""}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.spinnerShow,expression:"spinnerShow"}],staticClass:"vjs-loading-spinner"})])],1)])},Dt=[],Wt={name:"",data:function(){return{durationShow:!0,spinnerShow:!1,playerOptions:{language:"zh-CN",aspectRatio:"16:9",fluid:!0,autoplay:!1,playbackRates:[.7,1,1.5,2],preload:"auto",sources:[{type:"video/mp4",src:"http://fastcdn.chinastock.com.cn/cdn/roadshow/video/xuanyuantouzi20200309.mp4"}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试"},videoUrl:"http://fastcdn.chinastock.com.cn/cdn/roadshow/video/xuanyuantouzi20200309.mp4",poster:"https://cdns.chinastock.com.cn/cdn/roadshow-1-1/CRM/crm/rsVideo/ff26d01b5d1c47d2ab9144fcf7fc4af7.png",options:{video:{url:"http://static.smartisanos.cn/common/video/t1-ui.mp4",pic:"http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg"},autoplay:!1,contextmenu:[{text:"GitHub",link:"https://github.com/MoePlayer/vue-dplayer"}]}}},props:{},components:{},mounted:function(){},methods:{videoPlay:function(){var t=this;this.spinnerShow=!0;var e=setInterval(function(){var i=t.$refs.videoPlayer.player.el_.firstChild.currentTime;i>.1&&(clearInterval(e),t.durationShow=!1,t.spinnerShow=!1)},50)}}},Jt=Wt,Zt=(i("67c4"),Object(v["a"])(Jt,zt,Dt,!1,null,"2d3f5c4e",null));Zt.options.__file="index.vue";var Gt=Zt.exports,Yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rest-con",staticStyle:{color:"#fff"}},[t._v("\n  error 页面\n")])},Kt=[],te=(i("6c72"),{}),ee=Object(v["a"])(te,Yt,Kt,!1,null,null,null);ee.options.__file="error.vue";var ie=ee.exports;c["a"].use(m["a"]);var ne=new m["a"]({routes:[{path:"/",name:"home",component:q},{path:"/hot",name:"hot",component:Et},{path:"/news",name:"news",component:yt},{path:"/details",name:"details",component:qt},{path:"/det",name:"det",component:Gt},{path:"/error",name:"error",component:ie}]}),se=i("2f62"),oe=(i("6b54"),i("386d"),i("53ca")),ae={session:window.localStorage,local:window.localStorage,set:function(t,e,i){if(this.isString(i))return this[t].setItem(e,i);if(this.isObject(i)){try{i=JSON.stringify(i)}catch(ie){console.log()}return this[t].setItem(e,i)}return this[t].setItem(e,i)},get:function(t,e){var i=this[t].getItem(e);if(this.isParse(i))try{i=JSON.parse(i)}catch(ie){i=this[t].getItem(e)}return i},setSession:function(t,e){this.set("session",t,e)},getSession:function(t){return this.get("session",t)},setLocal:function(t,e){this.set("local",t,e)},getLocal:function(t){return this.get("local",t)},isString:function(t){return"string"===typeof t},isObject:function(t){return"object"===Object(oe["a"])(t)},remove:function(t){this.session.removeItem(t),this.local.removeItem(t)},clear:function(){this.session.clear(),this.local.clear()},isParse:function(t){return!!t&&!(-1===t.indexOf("{")&&-1===t.indexOf("[")&&!t.indexOf("("))},getItemKeyBykey:function(t){var e=[];for(var i in this.local)i.indexOf(t)>-1&&e.push(i);return e}};function re(t,e){var i;return function(){var n=this,s=arguments;clearTimeout(i),i=setTimeout(function(){t.apply(n,s)},e)}}function le(t,e){var i=0;return function(){var n=+new Date;if(n>=i+e){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return t.apply(this,o),void(i=n)}}}function ce(t){t=t||window.location.search;var e={},i="";if(-1!=t.indexOf("?")){var n=t.substr(1);i=n.split("&");for(var s=0;s<i.length;s++)e[i[s].split("=")[0]]=decodeURIComponent(i[s].split("=")[1])}return e}function ue(t){return!t||"null"==t&&"undefined"==t}function de(t){return t&&t instanceof Array}function pe(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"String",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=ae.getLocal(t);try{n=he()[e](n)?n:i}catch(s){n=i}return n}function he(){for(var t,e={types:["Array","Function","Boolean","Date","Number","Object","RegExp","String","Window","HTMLDocument"]},i=0;t=e.types[i++];)e[t]=function(t){return function(e){return("Number"!=t||!isNaN(e))&&Object.prototype.toString.call(e)=="[object "+t+"]"}}(t);return e}function ve(t){return JSON.parse(JSON.stringify(t))}c["a"].prototype.$storage=ae;var fe={URLObject:ce,isNull:ue,isArray:de,OParse:ve,debounce:re,throttle:le,is:he,attrData:pe};c["a"].use(se["a"]);var ye=fe.attrData,me=new se["a"].Store({state:{id:ye("id","String","")},mutations:{updateId:function(t,e){t.id=e}},actions:{initConfig:function(){var t=Object(b["a"])(regeneratorRuntime.mark(function t(e){var i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.next=3,V.queryConfig();case 3:n=t.sent,console.log("-------"+JSON.stringify(n,null,4)),i("updateId",n);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},getters:{id:function(t){return t.id}}}),ge=(i("157a"),i("3a34")),we=i.n(ge),be=new we.a,xe=be,Se=i("d6d3"),Pe=i.n(Se),Ce=(i("fda2"),i("451f"),i("7f7f"),i("3d33")),Ae=i.n(Ce),ke=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.reseted?i("div",{staticClass:"video-player"},[i("video",{ref:"video",staticClass:"video-js"},t._l(t.trackList,function(t){return i("track",{attrs:{kind:t.kind,label:t.label,src:t.src,srcLang:t.srcLang,default:t.default}})}),0)]):t._e()},Oe=[],_e=i("ade3"),je=(i("f751"),window.videojs||Ae.a);"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var s=arguments[n];if(null!=s)for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(i[o]=s[o])}return i},writable:!0,configurable:!0});var Te=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"],Ee={name:"vue-video-player",props:{start:{type:Number,default:0},crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{controls:!0,controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}},trackList:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var t=this,e=Object.assign({},this.globalOptions,this.options);this.playsinline&&(this.$refs.video.setAttribute("playsinline",this.playsinline),this.$refs.video.setAttribute("webkit-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-playsinline",this.playsinline),this.$refs.video.setAttribute("x5-video-player-type","h5"),this.$refs.video.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(this.$refs.video.crossOrigin=this.crossOrigin,this.$refs.video.setAttribute("crossOrigin",this.crossOrigin));var i=function(e,i){e&&t.$emit(e,t.player),i&&t.$emit(t.customEventName,Object(_e["a"])({},e,i))};e.plugins&&delete e.plugins.__ob__;var n=this;this.player=je(this.$refs.video,e,function(){for(var t=this,e=Te.concat(n.events).concat(n.globalEvents),s={},o=0;o<e.length;o++)"string"===typeof e[o]&&void 0===s[e[o]]&&function(e){s[e]=null,t.on(e,function(){i(e,!0)})}(e[o]);this.on("timeupdate",function(){i("timeupdate",this.currentTime())}),n.$emit("ready",this)})},dispose:function(t){var e=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick(function(){e.reseted=!1,e.$nextTick(function(){e.reseted=!0,e.$nextTick(function(){t&&t()})})}))}},watch:{options:{deep:!0,handler:function(t,e){var i=this;this.dispose(function(){t&&t.sources&&t.sources.length&&i.initialize()})}}}},Le=Ee,Qe=Object(v["a"])(Le,ke,Oe,!1,null,null,null);Qe.options.__file="player.vue";var $e=Qe.exports,Re=window.videojs||Ae.a,Ne=function(t,e){e&&(e.options&&($e.props.globalOptions.default=function(){return e.options}),e.events&&($e.props.globalEvents.default=function(){return e.events})),t.component($e.name,$e)},He={videojs:Re,videoPlayer:$e,install:Ne},Be=He;console.log(xe);var Xe={Button:l["a"],Tab:r["a"],Tabs:a["a"],Swipe:o["a"],SwipeItem:s["a"],VueVideoPlayer:Pe.a,Loading:n["a"],VueDPlayer:Vt.a,vueVideoPlayer:Be};Object.keys(Xe).map(function(t){return c["a"].use(Xe[t])}),c["a"].config.productionTip=!1,new c["a"]({router:ne,store:me,render:function(t){return t(y)}}).$mount("#app")},"67c4":function(t,e,i){"use strict";var n=i("0e7a"),s=i.n(n);s.a},"6c72":function(t,e,i){"use strict";var n=i("9954"),s=i.n(n);s.a},7432:function(t,e,i){"use strict";var n=i("8bd4"),s=i.n(n);s.a},"76de":function(t,e,i){},"7c55":function(t,e,i){"use strict";var n=i("2464"),s=i.n(n);s.a},8065:function(t,e,i){},"8bd4":function(t,e,i){},9954:function(t,e,i){},"9d64":function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},"9feb":function(t,e,i){t.exports=i.p+"img/2.c0badf6a.jpg"},a00f:function(t,e,i){"use strict";var n=i("76de"),s=i.n(n);s.a},ac4c:function(t,e,i){"use strict";var n=i("3eae"),s=i.n(n);s.a},b13a:function(t,e,i){"use strict";var n=i("485f"),s=i.n(n);s.a},b2ce:function(t,e,i){},b825:function(t,e,i){"use strict";var n=i("8065"),s=i.n(n);s.a},d8b0:function(t,e,i){t.exports=i.p+"img/1.95951645.jpg"},df60:function(t,e,i){t.exports=i.p+"img/3.ac1fb2f7.jpg"},e031:function(t,e,i){},e42a:function(t,e,i){},e5af:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAclBMVEUAAABQyXlRyXhQyXhVzHtQyHdQyXhQyXhQyXhPyHhQyXhPyXhQyXlQyXlRx3ZQyHhPy3hQxnVQyXdQyXhQyHdQyXdPyXdQyHhQyXhPyHhRx3dQyXlRyHhQyHlQynhQzHxRyHlOyHpQz3hSyHZRyXhQyHhMxYn4AAAAJXRSTlMAM47eBl3tsPflw59kUA3RHyzxk35uP6iIdygU18lVIytBIBxC8X8MTQAAAmdJREFUWMOs1deO2zAURdEjkyLVqyX3MmX//y8mTgxnBo41Llxv5MMGgUuQusO6XOVZbVySOFNn+apc63XHwTuuOD8c9YLD3AAYPyvGttlYu2nasZj5v7vzg55i4wxI87jRlSbOUyCL7ePZwkCXf+qmz7wDUzyYjlPYFpUmVcUW0lj3azOo97rDvoas1X3sMnngHHFKsrS6Q7ODvtLdqh52jX5UOkykh0QGV+oHc/CVHlR5mGtSD4OeMEA/NbYFSamnlAkLq1sWdKOeNHYsdENPF+lpUUd/a27JqBeMyf8nWEKpp0wX3h2DXjTg3q8uxA6vl3l2Vt8tMZVeVhmW+qZNiBRARNLqq4xeQfRk+iImrRRElRLrwp5WgcSk/+ZXUCuYmkJn1rBXMHuMvZx+q4C2xJcrUSiggkx/HOgqTVj7emm//rW1X2tC1XE4v2q5JmwcsNDFAnAbTcjPr5zhTRNWnHzo7IOTlSa8YfRbS6opM04inUWczDQlpZU0kIcO5wySPHHocIyX5GhChxuctMYodFiGtUp8+LCn1IpZ+PCMlXKK8OGCXBlj+PBIpppj+PCRWoYmfLjByLEJH97glGDDhy3Jr+bs4AZAEIiCqIkFAB0gkf5b9KAJByIHwotuARwg7O6fYQezq3CPF2paf3CqgX0Q9qVZE2JtkzV6NZrYMGXjXy0smaxYZ93ZUsjWWLV4s6jAwo2KYyxAqsirQjrDChaEeHSzxTWwKSo8poCeQpAKmjLMC8G0R+ke/rcqM7qiKMGClND3Eqtpt2OAlB7t9hdR2KnNfKvN3KnNyUpvMjZt42L6+AKU1nAT/Z1LJwAAAABJRU5ErkJggg=="},f236:function(t,e,i){"use strict";var n=i("b2ce"),s=i.n(n);s.a}});