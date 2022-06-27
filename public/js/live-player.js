(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([[479],{19455:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>f});s(22362);var a=s(21443),i=s.n(a),n=s(67631),r=s.n(n),o=s(78657),d=s(52526),l=s(23952),c=s(80041),m=s(39169),u=s(65981);const f={props:{id:{type:String}},components:{"stream-loading":o.default,"stream-offline":d.default,"profile-card":l.default,"stream-info-card":c.default,"stream-comments":m.default,"settings-card":u.default},data:function(){return{loggedIn:!1,enabled:!0,isLoaded:!1,user:void 0,profile:void 0,stream:{name:"Offline",description:void 0},streamState:"loading",streamSource:void 0,showSettingsCard:!1,streamInvokeInterval:void 0,streamInvokeIntervalLength:2e3}},mounted:function(){this.fetchProfile()},methods:{fetchProfile:function(){var t=this;axios.get("/api/pixelfed/v1/accounts/"+this.id).then((function(e){t.profile=e.data,t.user=e.data,t.fetchAuthState()}))},fetchAuthState:function(){var t=this;axios.get("/api/v1/accounts/verify_credentials").then((function(e){window._sharedData.curUser=e.data,window._sharedData.user=e.data,t.loggedIn=!0,t.fetchInitialStreamState(!0)})).catch((function(e){t.fetchInitialStreamState(!1)}))},fetchInitialStreamState:function(t){var e=this,s=1==t?"/api/live/accounts/stream":"/api/live/accounts/stream/guest";axios.get(s,{params:{profile_id:this.profile.id}}).then((function(t){if(e.isLoaded=!0,t.data&&t.data.hls_url&&t.data.hls_url.length){e.stream=t.data;var s=t.data.hls_url;axios.head(t.data.hls_url).then((function(t){e.streamState="ready",e.streamSource=s,e.initVideo(),clearInterval(e.streamInvokeInterval)})).catch((function(t){e.streamState="offline"}))}else e.streamState="offline"})).catch((function(t){e.isLoaded=!0}))},initVideo:function(){var t=this;this.$nextTick((function(){var e=t.$refs.liveVid,s=(new(i())(e,{controls:["play","mute","volume","fullscreen"]}),t.streamSource);if(r().isSupported())try{var a=new(r());a.loadSource(s),a.attachMedia(e),window.hls=a}catch(t){console.log("Error loading manifest")}else e.src=s}))},openSettings:function(){this.showSettingsCard=!this.showSettingsCard},closeSettings:function(){this.showSettingsCard=!1},triggerStreamStart:function(){this.setStreamInvokeInterval()},triggerStreamEnd:function(){this.streamState="offline"},setStreamInvokeInterval:function(){var t=this;this.streamInvokeInterval=setInterval((function(){t.fetchInitialStreamState(t.loggedIn)}),this.streamInvokeIntervalLength)}}}},1791:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const a={props:{profile:{type:Object},stream:{type:Object},showSettings:{type:Boolean,default:!1}},computed:{isOwner:function(){return window._sharedData.user.id===this.profile.id&&this.stream.hls_url}},methods:{openSettings:function(){event.currentTarget.blur(),this.$emit("settings")}}}},40038:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const a={props:{profile:{type:Object},stream:{type:Object}},data:function(){return{hasChanged:!1}},watch:{stream:{deep:!0,handler:function(t,e){this.hasChanged=JSON.stringify(t)===JSON.stringify(this.getOriginal)}}},computed:{getOriginal:function(){return this.originalStream}},mounted:function(){this.originalStream=this.stream},methods:{closeSettings:function(){event.currentTarget.blur(),this.$emit("close")},updateSettings:function(){var t=this;event.currentTarget.blur(),axios.post("/api/live/stream/edit",{name:this.stream.name,description:this.stream.description}).then((function(e){t.$emit("close")}))}}}},53282:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var a=s(84554);window.Pusher=s(86606),window.Echo=new a.default({broadcaster:"pusher",key:window._pushr.key,wsHost:window._pushr.host,wsPort:window._pushr.port,wssPort:window._pushr.port,disableStats:!0,enabledTransports:["ws","wss"],forceTLS:!1});const i={props:{show:{type:String},profile:{type:Object},stream:{type:Object}},data:function(){return{user:{id:-1},comment:void 0,comments:[],state:"loading",modMode:!1,viewerCount:1,isBannedFromChat:!1,commentMenuIndex:void 0,commentMenuObject:void 0,pinnedMessage:void 0,commentFormDisabled:!1,isUnpinning:!1,formError:void 0}},computed:{isOwner:function(){return!!window._sharedData.curUser&&window._sharedData.curUser.id==this.profile.id}},mounted:function(){this.user=window._sharedData.curUser?window._sharedData.curUser:{id:-1},this.fetchComments(),this.bootWebsockets()},methods:{addComment:function(t){var e=this;t.currentTarget.blur(),this.commentFormDisabled=!0,axios.post("/api/live/chat/message",{profile_id:this.profile.id,message:this.comment}).then((function(t){e.comment=void 0,setTimeout((function(){e.commentFormDisabled=!1}),1e3)})).catch((function(t){e.formError=t.response.data.errors.message[0],setTimeout((function(){e.formError=void 0}),5e3),e.commentFormDisabled=!1}))},fetchComments:function(){var t=this;axios.get("/api/live/chat/latest",{params:{profile_id:this.profile.id}}).then((function(e){t.comments=e.data,t.state=t.stream.hls_url?"loaded":"offline"}))},toggleModMode:function(){event.currentTarget.blur(),this.modMode=!this.modMode},deleteComment:function(t){var e=this;event.currentTarget.blur(),axios.post("/api/live/chat/delete",{profile_id:this.profile.id,message:this.comments[t]}).then((function(s){e.comments.splice(t,1),e.commentMenuObject&&e.closeMenu()}))},banUser:function(t){confirm("Are you sure you want to ban this user? This will remove all messages from them and prevent them from commenting again.");axios.post("/api/live/chat/ban-user",{profile_id:this.comments[t].pid})},bootWebsockets:function(){var t=this;window.Echo.private("live.chat.".concat(this.profile.id)).listen(".chat.new-message",(function(e){t.comments.unshift(e.msg)})).listen(".chat.delete-message",(function(e){t.comments=t.comments.filter((function(t){return t.id!=e.id}))})).listen(".chat.ban-user",(function(e){t.comments=t.comments.filter((function(t){return t.pid!=e.id})),e.id==window._sharedData.curUser.id&&(t.isBannedFromChat=!0)})).listen(".chat.pin-message",(function(e){t.pinnedMessage=e})).listen(".chat.unpin-message",(function(e){t.pinnedMessage=void 0})).listen(".stream.start",(function(e){t.$emit("stream-start")})).listen(".stream.end",(function(e){t.$emit("stream-end")})),window.Echo.join("live.presence.".concat(this.profile.id)).here((function(e){t.viewerCount=e.length})).joining((function(e){t.viewerCount++})).leaving((function(e){t.viewerCount--}))},openMenu:function(t){var e=this;event.currentTarget.blur(),this.commentMenuIndex=t,this.commentMenuObject=this.comments[t],this.$nextTick((function(){return e.$refs.commentMenu.show()}))},closeMenu:function(){var t=this;this.$nextTick((function(){t.$refs.commentMenu.hide(),t.commentMenuIndex=void 0,t.commentMenuObject=void 0}))},pinMessage:function(t){this.closeMenu(),axios.post("/api/live/chat/pin",{profile_id:this.profile.id,message:this.comments[t]})},unpinMessage:function(){var t=this;this.isUnpinning=!0,axios.post("/api/live/chat/unpin",{profile_id:this.profile.id,message:this.pinnedMessage}).then((function(e){t.pinnedMessage=void 0,setTimeout((function(){t.isUnpinning=!1}),2e3)}))}}}},96690:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const a={props:{profile:{type:Object},stream:{type:Object}}}},62831:(t,e,s)=>{Vue.component("live-player",s(27365).default)},89954:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(23645),i=s.n(a)()((function(t){return t[1]}));i.push([t.id,".livestream-player .plyr--video{border-radius:20px;box-shadow:0 1rem 3rem rgba(0,0,0,.18)!important}.livestream-player .header-badge{margin-bottom:1rem}.livestream-player .header-badge .live-badge{border:2px solid #fff;border-radius:10px;color:#fff;font-size:14px;font-weight:700;margin-left:1rem;padding:5px 10px}",""]);const n=i},9091:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(23645),i=s.n(a)()((function(t){return t[1]}));i.push([t.id,".media[data-v-656eef2a]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.media .btn-outline-primary[data-v-656eef2a]{background-color:transparent;border-color:var(--primary);color:var(--primary)}.media-body[data-v-656eef2a]{color:#fff}",""]);const n=i},84866:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(23645),i=s.n(a)()((function(t){return t[1]}));i.push([t.id,".livestream-settings{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.livestream-settings,.livestream-settings .card-header{border-top-left-radius:10px;border-top-right-radius:10px}.livestream-settings .card-footer{border-bottom-left-radius:10px;border-bottom-right-radius:10px}",""]);const n=i},94783:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(23645),i=s.n(a)()((function(t){return t[1]}));i.push([t.id,".live-chat{border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-top-left-radius:10px;border-top-right-radius:10px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin-left:10px;max-width:400px;min-width:300px}.live-chat .form-control{color:var(--body-color)}.live-chat .card-header{border-top-left-radius:10px;border-top-right-radius:10px}.live-chat .card-footer{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.live-chat-msg{font-size:13px}.live-chat .pinned-msg{background-color:rgba(253,224,71,.1);border:1px solid rgba(253,224,71,.3);border-radius:2px}.live-chat .pinned-msg .live-chat-msg{margin:10px 4px}",""]);const n=i},20740:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});var a=s(93379),i=s.n(a),n=s(89954),r={insert:"head",singleton:!1};i()(n.default,r);const o=n.default.locals||{}},78126:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});var a=s(93379),i=s.n(a),n=s(9091),r={insert:"head",singleton:!1};i()(n.default,r);const o=n.default.locals||{}},79368:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});var a=s(93379),i=s.n(a),n=s(84866),r={insert:"head",singleton:!1};i()(n.default,r);const o=n.default.locals||{}},65696:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});var a=s(93379),i=s.n(a),n=s(94783),r={insert:"head",singleton:!1};i()(n.default,r);const o=n.default.locals||{}},27365:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(73125),i=s(10640),n={};for(const t in i)"default"!==t&&(n[t]=()=>i[t]);s.d(e,n);s(22204);const r=(0,s(51900).default)(i.default,a.render,a.staticRenderFns,!1,null,null,null).exports},23952:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(51638),i=s(1965),n={};for(const t in i)"default"!==t&&(n[t]=()=>i[t]);s.d(e,n);s(13832);const r=(0,s(51900).default)(i.default,a.render,a.staticRenderFns,!1,null,"656eef2a",null).exports},65981:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(40194),i=s(94319),n={};for(const t in i)"default"!==t&&(n[t]=()=>i[t]);s.d(e,n);s(7128);const r=(0,s(51900).default)(i.default,a.render,a.staticRenderFns,!1,null,null,null).exports},39169:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(46127),i=s(5346),n={};for(const t in i)"default"!==t&&(n[t]=()=>i[t]);s.d(e,n);s(66949);const r=(0,s(51900).default)(i.default,a.render,a.staticRenderFns,!1,null,null,null).exports},80041:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(27628),i=s(25417),n={};for(const t in i)"default"!==t&&(n[t]=()=>i[t]);s.d(e,n);const r=(0,s(51900).default)(i.default,a.render,a.staticRenderFns,!1,null,null,null).exports},78657:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var a=s(32494);const i=(0,s(51900).default)({},a.render,a.staticRenderFns,!1,null,null,null).exports},52526:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var a=s(54548);const i=(0,s(51900).default)({},a.render,a.staticRenderFns,!1,null,null,null).exports},10640:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(19455),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i);const n=a.default},1965:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(1791),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i);const n=a.default},94319:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(40038),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i);const n=a.default},5346:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(53282),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i);const n=a.default},25417:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(96690),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i);const n=a.default},22204:(t,e,s)=>{"use strict";s.r(e);var a=s(20740),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i)},13832:(t,e,s)=>{"use strict";s.r(e);var a=s(78126),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i)},7128:(t,e,s)=>{"use strict";s.r(e);var a=s(79368),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i)},66949:(t,e,s)=>{"use strict";s.r(e);var a=s(65696),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i)},73125:(t,e,s)=>{"use strict";s.r(e);var a=s(13478),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i)},51638:(t,e,s)=>{"use strict";s.r(e);var a=s(45290),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i)},40194:(t,e,s)=>{"use strict";s.r(e);var a=s(87183),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i)},46127:(t,e,s)=>{"use strict";s.r(e);var a=s(75172),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i)},27628:(t,e,s)=>{"use strict";s.r(e);var a=s(45361),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i)},32494:(t,e,s)=>{"use strict";s.r(e);var a=s(53331),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i)},54548:(t,e,s)=>{"use strict";s.r(e);var a=s(79366),i={};for(const t in a)"default"!==t&&(i[t]=()=>a[t]);s.d(e,i)},13478:(t,e,s)=>{"use strict";s.r(e),s.d(e,{render:()=>a,staticRenderFns:()=>i});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"livestream-player web-wrapper"},[t.isLoaded?s("div",{staticClass:"container-fluid mt-3"},[t.enabled?s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-8"},[t._m(0),t._v(" "),s("div",{staticClass:"d-block d-md-flex justify-content-center"},[s("div",{staticStyle:{"min-width":"300px","min-height":"80vh",position:"relative"}},[s("div",{staticStyle:{width:"100%",position:"absolute",top:"0",left:"0","z-index":"2",padding:"10px 0 4px 10px","background-color":"rgba(0,0,0,0.3)"}},[s("profile-card",{attrs:{profile:t.profile,stream:t.stream,showSettings:t.showSettingsCard},on:{settings:t.openSettings}})],1),t._v(" "),s("div",{staticStyle:{width:"100%",position:"absolute",top:"0"}},["loading"===t.streamState?s("stream-loading"):"offline"===t.streamState?s("stream-offline"):"ready"===t.streamState?s("div",{staticClass:"d-flex"},[s("div",{staticStyle:{width:"100%"}},[t._m(1)])]):t._e()],1)]),t._v(" "),s("stream-comments",{attrs:{show:t.streamState,profile:t.profile,stream:t.stream},on:{"stream-start":function(e){return t.triggerStreamStart()},"stream-end":function(e){return t.triggerStreamEnd()}}})],1)])]):s("div",[s("p",{staticClass:"font-weight-bold text-center"},[t._v("Live Streaming is not enabled on this instance.")]),t._v(" "),s("p",{staticClass:"text-center"},[s("router-link",{staticClass:"btn btn-primary rounded-pill font-weight-bold",attrs:{to:"/i/web?x=1&src=hls"}},[t._v("Go back home")])],1)])]):t._e()])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center header-badge"},[s("div",{staticClass:"media align-items-center"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:"/img/pixelfed-icon-color.png",width:"50"}})]),t._v(" "),s("div",{staticClass:"media-body"},[s("div",{staticClass:"live-badge"},[t._v("Live")])])])])},function(){var t=this.$createElement;return(this._self._c||t)("video",{ref:"liveVid",attrs:{id:"lplyr",playsinline:"",controls:""}})}]},45290:(t,e,s)=>{"use strict";s.r(e),s.d(e,{render:()=>a,staticRenderFns:()=>i});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media mb-2 align-items-center"},[s("img",{staticClass:"rounded-circle mr-2",attrs:{src:t.profile.avatar,width:"40"}}),t._v(" "),s("div",{staticClass:"media-body"},[s("p",{staticClass:"lead font-weight-bold mb-n2"},[t._v(t._s(t.stream.name))]),t._v(" "),s("div",{staticClass:"small"},[t._v("\n\t\t\tby "),s("span",[t._v("@"+t._s(t.profile.acct))])])])])},i=[]},87183:(t,e,s)=>{"use strict";s.r(e),s.d(e,{render:()=>a,staticRenderFns:()=>i});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card shadow-sm livestream-settings"},[s("div",{staticClass:"card-header d-inline-flex align-items-center justify-content-between"},[s("div",{staticClass:"align-items-center"},[s("button",{staticClass:"btn btn-link btn-sm mr-2",on:{click:t.closeSettings}},[s("i",{staticClass:"fas fa-chevron-left"})]),t._v(" "),s("span",{staticClass:"mb-0 font-weight-bold"},[t._v("Livestream Settings")])]),t._v(" "),s("button",{staticClass:"btn btn-primary btn-sm font-weight-bold rounded-pill mb-0",attrs:{disabled:!t.hasChanged},on:{click:t.updateSettings}},[t._v("Save")])]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"streamName"}},[t._v("Stream Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.stream.name,expression:"stream.name"}],staticClass:"form-control",attrs:{type:"text",id:"streamName"},domProps:{value:t.stream.name},on:{input:function(e){e.target.composing||t.$set(t.stream,"name",e.target.value)}}}),t._v(" "),s("div",{staticClass:"help-text small text-muted d-flex justify-content-between"},[s("div",[t._v("An optional stream name")]),t._v(" "),s("div",[t._v(t._s(t.stream.name?t.stream.name.length:0)+"/80")])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"streamDescription"}},[t._v("Description")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.stream.description,expression:"stream.description"}],staticClass:"form-control",attrs:{id:"streamDescription",rows:"3"},domProps:{value:t.stream.description},on:{input:function(e){e.target.composing||t.$set(t.stream,"description",e.target.value)}}}),t._v(" "),s("div",{staticClass:"help-text small text-muted d-flex justify-content-between"},[s("div",[t._v("An optional description")]),t._v(" "),s("div",[t._v(t._s(t.stream.description?t.stream.description.length:0)+"/140")])])]),t._v(" "),s("hr"),t._v(" "),t._m(0)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"streamChat",checked:"",disabled:""}}),t._v(" "),s("label",{staticClass:"custom-control-label font-weight-bold",attrs:{for:"streamChat"}},[t._v("Enable live chat")])])}]},75172:(t,e,s)=>{"use strict";s.r(e),s.d(e,{render:()=>a,staticRenderFns:()=>i});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:"ready"===t.show,expression:"show === 'ready'"}],staticClass:"card shadow-sm live-chat"},[s("div",{staticClass:"card-header d-inline-flex align-items-center justify-content-between"},[s("p",{staticClass:"mb-0 font-weight-bold"},[t._v("Live Chat")]),t._v(" "),s("div",[t.isOwner?s("button",{staticClass:"btn btn-sm rounded-pill",class:[t.modMode?"btn-danger font-weight-bold":"btn-light"],on:{click:t.toggleModMode}},[s("i",{staticClass:"far fa-badge-sheriff"}),t._v(" Moderate\n\t\t\t")]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-dark disabled btn-sm rounded-pill"},[s("i",{staticClass:"far fa-user"}),t._v(" "),s("span",{staticClass:"font-weight-bold ml-1"},[t._v(t._s(t.viewerCount))])])])]),t._v(" "),s("div",{staticClass:"card-body d-flex flex-column-reverse pl-0 pr-1",staticStyle:{height:"40vh","overflow-y":"auto"}},["loaded"===t.state?t._l(t.comments,(function(e,a){return s("div",{staticClass:"media rounded-lg p-1 live-chat-msg align-items-start"},[t.modMode?[s("a",{staticClass:"text-danger mr-2",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.deleteComment(a)}}},[s("i",{staticClass:"far fa-map-pin"})]),t._v(" "),e.pid!=t.profile.id?s("a",{staticClass:"text-danger mr-2",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.banUser(a)}}},[s("i",{staticClass:"far fa-ban"})]):t._e()]:t._e(),t._v(" "),s("img",{staticClass:"rounded-circle mr-1",attrs:{src:e.avatar,width:"20"}}),t._v(" "),s("div",{staticClass:"media-body"},[e.pid===t.profile.id?[s("span",{staticClass:"font-weight-bold",style:{color:"red"}},[t._v(t._s(e.username))]),t._v(":\n\t\t\t\t\t")]:[s("span",{staticClass:"font-weight-bold primary"},[t._v(t._s(e.username))]),t._v(":\n\t\t\t\t\t")],t._v(" "),s("span",{staticClass:"ml-1 text-break"},[t._v("\n\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t")])],2),t._v(" "),s("button",{staticClass:"btn btn-light btn-sm ml-1",on:{click:function(e){return t.openMenu(a)}}},[s("i",{staticClass:"fas fa-ellipsis-v text-lighter"})])],2)})):"loading"===t.state?[s("div",{staticClass:"text-center"},[s("b-spinner",{attrs:{type:"grow"}}),t._v(" "),s("p",{staticClass:"font-weight-bold mb-0"},[t._v("Loading comments...")])],1)]:"offline"===t.state?s("div",{staticClass:"align-items-center"},[t._m(0)]):t._e()],2),t._v(" "),t.pinnedMessage?[s("div",{staticClass:"card-body d-flex pl-0 pr-1 mt-n3 py-0 mb-3 align-items-start pinned-msg"},[s("div",{staticClass:"media rounded-lg p-1 live-chat-msg"},[s("img",{staticClass:"rounded-circle mr-1",attrs:{src:t.pinnedMessage.avatar,width:"20"}}),t._v(" "),s("div",{staticClass:"media-body"},[t.pinnedMessage.pid===t.profile.id?[s("span",{staticClass:"font-weight-bold",style:{color:"red"}},[t._v(t._s(t.pinnedMessage.username))]),t._v(":\n\t\t\t\t\t")]:[s("span",{staticClass:"font-weight-bold primary"},[t._v(t._s(t.pinnedMessage.username))]),t._v(":\n\t\t\t\t\t")],t._v(" "),s("span",{staticClass:"ml-1 text-break"},[t._v("\n\t\t\t\t\t\t"+t._s(t.pinnedMessage.text)+"\n\t\t\t\t\t")])],2)])]),t._v(" "),t.isOwner?s("div",{staticClass:"mb-3 mt-n4"},[s("button",{staticClass:"btn btn-dark btn-sm font-weight-bold small text-muted rounded-pill",attrs:{disabled:t.isUnpinning},on:{click:function(e){return t.unpinMessage()}}},[s("i",{staticClass:"far fa-times-circle mr-1"}),t._v("Remove pin\n\t\t\t")])]):t._e()]:t._e(),t._v(" "),"loaded"===t.state?s("div",{staticClass:"card-body pt-0 px-2 pb-2"},[t.isBannedFromChat?s("div",[t._m(1)]):[s("div",{staticClass:"d-flex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control rounded-pill bg-light",attrs:{type:"text",placeholder:"Add a comment...",disabled:t.commentFormDisabled},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-primary rounded-circle ml-2",attrs:{disabled:t.commentFormDisabled},on:{click:t.addComment}},[s("i",{staticClass:"far fa-paper-plane"})])]),t._v(" "),t.formError?s("p",{staticClass:"text-danger font-weight-bold mb-0 small mt-1"},[t._v(t._s(t.formError))]):t._e()]],2):t._e(),t._v(" "),t.commentMenuObject?s("b-modal",{ref:"commentMenu",attrs:{size:"sm","hide-header":"","hide-footer":"",centered:"","return-focus":"body","body-class":"list-group list-group-flush p-0 text-center"}},[t.commentMenuIndex?s("div",{staticClass:"list-group-item border-dark bg-dark p-4"},[s("div",{staticClass:"media rounded-lg p-1 live-chat-msg text-left"},[s("img",{staticClass:"rounded-circle mr-1",attrs:{src:t.comments[t.commentMenuIndex].avatar,width:"20"}}),t._v(" "),s("div",{staticClass:"media-body"},[t.comments[t.commentMenuIndex].pid===t.profile.id?[s("span",{staticClass:"font-weight-bold",style:{color:"red"}},[t._v(t._s(t.comments[t.commentMenuIndex].username))]),t._v(":\n\t\t\t\t\t")]:[s("span",{staticClass:"font-weight-bold primary"},[t._v(t._s(t.comments[t.commentMenuIndex].username))]),t._v(":\n\t\t\t\t\t")],t._v(" "),s("span",{staticClass:"ml-1 text-break"},[t._v("\n\t\t\t\t\t\t"+t._s(t.comments[t.commentMenuIndex].text)+"\n\t\t\t\t\t")])],2)])]):t._e(),t._v(" "),t.isOwner||t.commentMenuObject.pid===t.user.id?t._e():s("li",{staticClass:"list-group-item border-dark"},[t._v("Report")]),t._v(" "),t.isOwner?s("a",{staticClass:"list-group-item border-dark text-warning text-decoration-none",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.pinMessage(t.commentMenuIndex)}}},[t._v("\n\t\t\tPin\n\t\t")]):t._e(),t._v(" "),t.isOwner?s("a",{staticClass:"list-group-item border-dark text-danger text-decoration-none",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.banUser(t.commentMenuIndex)}}},[t._v("\n\t\t\tBan User\n\t\t")]):t._e(),t._v(" "),t.isOwner||t.commentMenuObject.pid==t.user.id?s("a",{staticClass:"list-group-item border-dark text-danger text-decoration-none",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.deleteComment(t.commentMenuIndex)}}},[t._v("\n\t\t\tDelete\n\t\t")]):t._e()]):t._e()],2)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("p",{staticClass:"font-weight-bold mb-0"},[t._v("Comments are disabled as the stream is offline")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"font-weight-bold mb-0 small"},[t._v("\n\t\t\t\tBanned from this live stream chat by the streamer. For more info, visit the "),s("a",{attrs:{href:"/site/kb/stories"}},[t._v("help center")])])}]},45361:(t,e,s)=>{"use strict";s.r(e),s.d(e,{render:()=>a,staticRenderFns:()=>i});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.stream.description&&t.stream.description.length?s("div",{staticClass:"card mt-3 shadow-none"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-body"},[s("div",{staticClass:"text-muted"},[t._v("\n\t\t\t\t\t"+t._s(t.stream.description)+"\n\t\t\t\t")])])])])]):t._e()},i=[]},53331:(t,e,s)=>{"use strict";s.r(e),s.d(e,{render:()=>a,staticRenderFns:()=>i});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light d-flex align-items-center justify-content-center",staticStyle:{"min-height":"385px","border-radius":"20px"}},[s("div",{staticClass:"text-center"},[s("b-spinner",{attrs:{type:"grow"}}),t._v(" "),s("p",{staticClass:"font-weight-bold mb-0"},[t._v("Loading stream...")])],1)])},i=[]},79366:(t,e,s)=>{"use strict";s.r(e),s.d(e,{render:()=>a,staticRenderFns:()=>i});var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-dark text-light d-flex align-items-center justify-content-center",staticStyle:{"min-height":"600px","border-radius":"20px"}},[s("div",{staticClass:"text-center"},[s("p",[s("i",{staticClass:"far fa-eye-slash fa-3x"})]),t._v(" "),s("p",{staticClass:"lead font-weight-bold mb-0"},[t._v("Stream offline")])])])}]}},t=>{t.O(0,[898],(()=>{return e=62831,t(t.s=e);var e}));t.O()}]);