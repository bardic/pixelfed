(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1tI1":function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,"\n.media-drawer-filters[data-v-46b5a111] {\n\t\toverflow-x: scroll;\n\t\tflex-wrap:unset;\n}\n.media-drawer-filters .nav-link[data-v-46b5a111] {\n\t\tmin-width:100px;\n\t\tpadding-top: 1rem;\n\t\tpadding-bottom: 1rem;\n}\n.media-drawer-filters .active[data-v-46b5a111] {\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n}\n@media (hover: none) and (pointer: coarse) {\n.media-drawer-filters[data-v-46b5a111]::-webkit-scrollbar {\n\t        display: none;\n}\n}\n",""])},7:function(t,e,i){t.exports=i("K0g3")},"9tPo":function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,o=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var s,n=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(n)?t:(s=0===n.indexOf("//")?n:0===n.indexOf("/")?i+n:o+n.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")})}},BWSG:function(t,e,i){"use strict";var o=i("QGNr");i.n(o).a},I1BE:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",o=t[3];if(!o)return i;if(e&&"function"==typeof btoa){var s=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),n=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[i].concat(n).concat([s]).join("\n")}var a;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},s=0;s<this.length;s++){var n=this[s][0];"number"==typeof n&&(o[n]=!0)}for(s=0;s<t.length;s++){var a=t[s];"number"==typeof a[0]&&o[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),e.push(a))}},e}},K0g3:function(t,e,i){Vue.component("compose-modal",i("zlB4").default)},"KHd+":function(t,e,i){"use strict";function o(t,e,i,o,s,n,a,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),o&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):s&&(l=r?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}i.d(e,"a",function(){return o})},QGNr:function(t,e,i){var o=i("1tI1");"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(o,s);o.locals&&(t.exports=o.locals)},"aET+":function(t,e,i){var o,s,n={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=o.apply(this,arguments)),s}),r=function(t){var e={};return function(t,i){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,i);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),l=null,c=0,d=[],u=i("9tPo");function p(t,e){for(var i=0;i<t.length;i++){var o=t[i],s=n[o.id];if(s){s.refs++;for(var a=0;a<s.parts.length;a++)s.parts[a](o.parts[a]);for(;a<o.parts.length;a++)s.parts.push(g(o.parts[a],e))}else{var r=[];for(a=0;a<o.parts.length;a++)r.push(g(o.parts[a],e));n[o.id]={id:o.id,refs:1,parts:r}}}}function f(t,e){for(var i=[],o={},s=0;s<t.length;s++){var n=t[s],a=e.base?n[0]+e.base:n[0],r={css:n[1],media:n[2],sourceMap:n[3]};o[a]?o[a].parts.push(r):i.push(o[a]={id:a,parts:[r]})}return i}function m(t,e){var i=r(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===t.insertAt)o?o.nextSibling?i.insertBefore(e,o.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),d.push(e);else if("bottom"===t.insertAt)i.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=r(t.insertAt.before,i);i.insertBefore(e,s)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function h(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return i.nc}();o&&(t.attrs.nonce=o)}return b(e,t.attrs),m(t,e),e}function b(t,e){Object.keys(e).forEach(function(i){t.setAttribute(i,e[i])})}function g(t,e){var i,o,s,n;if(e.transform&&t.css){if(!(n="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=n}if(e.singleton){var a=c++;i=l||(l=h(e)),o=_.bind(null,i,a,!1),s=_.bind(null,i,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),m(t,e),e}(e),o=function(t,e,i){var o=i.css,s=i.sourceMap,n=void 0===e.convertToAbsoluteUrls&&s;(e.convertToAbsoluteUrls||n)&&(o=u(o));s&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var a=new Blob([o],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(a),r&&URL.revokeObjectURL(r)}.bind(null,i,e),s=function(){v(i),i.href&&URL.revokeObjectURL(i.href)}):(i=h(e),o=function(t,e){var i=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,i),s=function(){v(i)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else s()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=f(t,e);return p(i,e),function(t){for(var o=[],s=0;s<i.length;s++){var a=i[s];(r=n[a.id]).refs--,o.push(r)}t&&p(f(t,e),e);for(s=0;s<o.length;s++){var r;if(0===(r=o[s]).refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete n[r.id]}}}};var w,y=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function _(t,e,i,o){var s=i?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var n=document.createTextNode(s),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(n,a[e]):t.appendChild(n)}}},zlB4:function(t,e,i){"use strict";i.r(e);var o={data:function(){return{config:{uploader:{media_types:""}},profile:{},composeText:"",composeTextLength:0,nsfw:!1,filters:[],ids:[],media:[],carouselCursor:0,visibility:"public",mediaDrawer:!1,composeState:"publish",uploading:!1,uploadProgress:0,composeType:!1}},beforeMount:function(){this.fetchConfig(),this.fetchProfile()},mounted:function(){this.mediaWatcher(),this.filters=[["1977","filter-1977"],["Aden","filter-aden"],["Amaro","filter-amaro"],["Ashby","filter-ashby"],["Brannan","filter-brannan"],["Brooklyn","filter-brooklyn"],["Charmes","filter-charmes"],["Clarendon","filter-clarendon"],["Crema","filter-crema"],["Dogpatch","filter-dogpatch"],["Earlybird","filter-earlybird"],["Gingham","filter-gingham"],["Ginza","filter-ginza"],["Hefe","filter-hefe"],["Helena","filter-helena"],["Hudson","filter-hudson"],["Inkwell","filter-inkwell"],["Kelvin","filter-kelvin"],["Kuno","filter-juno"],["Lark","filter-lark"],["Lo-Fi","filter-lofi"],["Ludwig","filter-ludwig"],["Maven","filter-maven"],["Mayfair","filter-mayfair"],["Moon","filter-moon"],["Nashville","filter-nashville"],["Perpetua","filter-perpetua"],["Poprocket","filter-poprocket"],["Reyes","filter-reyes"],["Rise","filter-rise"],["Sierra","filter-sierra"],["Skyline","filter-skyline"],["Slumber","filter-slumber"],["Stinson","filter-stinson"],["Sutro","filter-sutro"],["Toaster","filter-toaster"],["Valencia","filter-valencia"],["Vesper","filter-vesper"],["Walden","filter-walden"],["Willow","filter-willow"],["X-Pro II","filter-xpro-ii"]]},methods:{fetchConfig:function(){var t=this;axios.get("/api/v2/config").then(function(e){t.config=e.data,0==t.config.uploader.media_types.includes("video/mp4")&&(t.composeType="post")})},fetchProfile:function(){var t=this;axios.get("/api/v1/accounts/verify_credentials").then(function(e){t.profile=e.data,1==e.data.locked&&(t.visibility="private")}).catch(function(t){console.log(t)})},addMedia:function(t){var e=$(t.target);e.attr("disabled",""),$('.file-input[name="media"]').trigger("click"),e.blur(),e.removeAttr("disabled")},mediaWatcher:function(){var t=this;$(document).on("change",".file-input",function(e){var i=document.querySelector(".file-input");Array.prototype.forEach.call(i.files,function(e,i){if(t.uploading=!0,t.media&&t.media.length+i>=t.config.uploader.album_limit)swal("Error","You can only upload "+t.config.uploader.album_limit+" photos per album","error");else{var o=e.type,s=t.config.uploader.media_types.split(",");if(-1!=$.inArray(o,s)){var n=new FormData;n.append("file",e);var a={onUploadProgress:function(e){var i=Math.round(100*e.loaded/e.total);t.uploadProgress=i}};axios.post("/api/v1/media",n,a).then(function(e){t.uploadProgress=100,t.ids.push(e.data.id),t.media.push(e.data),setTimeout(function(){t.uploading=!1},1e3)}).catch(function(i){t.uploading=!1,e.value=null,swal("Oops, something went wrong!","An unexpected error occurred.","error")}),e.value=null,t.uploadProgress=0}else swal("Invalid File Type","The file you are trying to add is not a valid mime type. Please upload a "+t.config.uploader.media_types+" only.","error")}})})},toggleFilter:function(t,e){this.media[this.carouselCursor].filter_class=e},updateMedia:function(){this.mediaDrawer=!1},deleteMedia:function(){var t=this;if(0!=window.confirm("Are you sure you want to delete this photo?")){var e=this.media[this.carouselCursor].id;axios.delete("/api/v1/media",{params:{id:e}}).then(function(e){1==t.media.length&&(t.mediaDrawer=!1,t.ids=[],t.media=[],t.carouselCursor=0),t.ids.splice(t.carouselCursor,1),t.media.splice(t.carouselCursor,1)}).catch(function(t){swal("Whoops!","An error occured when attempting to delete this, please try again","error")})}},mediaAltText:function(){},mediaLicense:function(){},compose:function(){var t=this.composeState;if(100==this.uploadProgress&&0!=this.ids.length)switch(t){case"publish":if(0==this.media.length)return void swal("Whoops!","You need to add media before you can save this!","warning");"Add optional caption..."==this.composeText&&(this.composeText="");var e={media:this.media,caption:this.composeText,visibility:this.visibility,cw:this.nsfw};return void axios.post("/api/v2/status/compose",e).then(function(t){var e=t.data;window.location.href=e}).catch(function(t){swal("Oops, something went wrong!","An unexpected error occurred.","error")});case"delete":return this.mediaDrawer=!1,this.ids=[],this.media=[],this.carouselCursor=0,this.composeText="",this.composeTextLength=0,void $("#composeModal").modal("hide")}},about:function(){var t=document.createElement("div");t.innerHTML='\n\t\t\t\t<p class="small font-weight-bold">Please visit the <a href="/site/kb/sharing-media">Sharing Media</a> page for more info.</p>\n\t\t\t',swal({title:"Compose UI v3",content:t,icon:"info"})},closeModal:function(){this.composeType="",$("#composeModal").modal("hide")},composeMessage:function(){var t=this.config;this.composeType;return t.uploader.media_types.includes("video/mp4")?"Click here to add photos or videos":"Click here to add photos"}}},s=(i("BWSG"),i("KHd+")),n=Object(s.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.composeType?t._e():i("div",[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("button",{staticClass:"btn btn-primary btn-block font-weight-bold",attrs:{type:"button"},on:{click:function(e){t.composeType="post"}}},[t._v("Compose Post")]),t._v(" "),i("hr"),t._v(" "),i("button",{staticClass:"btn btn-outline-secondary btn-block font-weight-bold",attrs:{type:"button"},on:{click:function(e){t.composeType="loop"}}},[t._v("Create Loop")])])])]),t._v(" "),"post"==t.composeType?i("div",[i("input",{staticClass:"d-none file-input",attrs:{type:"file",name:"media",multiple:"",accept:t.config.uploader.media_types}}),t._v(" "),i("div",{staticClass:"timeline"},[i("div",{staticClass:"card status-card card-md-rounded-0"},[i("div",{staticClass:"card-header d-inline-flex align-items-center bg-white"},[i("img",{staticClass:"box-shadow",staticStyle:{"border-radius":"32px"},attrs:{src:t.profile.avatar,width:"32px",height:"32px"}}),t._v(" "),i("a",{staticClass:"username font-weight-bold pl-2 text-dark",attrs:{href:t.profile.url}},[t._v("\n\t\t\t\t\t"+t._s(t.profile.username)+"\n\t\t\t\t")]),t._v(" "),i("div",{staticClass:"text-right",staticStyle:{"flex-grow":"1"}},[i("div",{staticClass:"dropdown"},[t._m(0),t._v(" "),i("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"dropdownMenuButton"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.media.length>0,expression:"media.length > 0"}],staticClass:"dropdown-item small font-weight-bold",on:{click:function(e){t.mediaDrawer=!t.mediaDrawer}}},[t._v(t._s(t.mediaDrawer?"Hide":"Show")+" Media Toolbar")]),t._v(" "),i("div",{staticClass:"dropdown-item small font-weight-bold",on:{click:t.about}},[t._v("About")]),t._v(" "),i("a",{staticClass:"dropdown-item small font-weight-bold",attrs:{href:"/i/compose"}},[t._v("Classic Compose UI")]),t._v(" "),i("div",{staticClass:"dropdown-divider"}),t._v(" "),i("div",{staticClass:"dropdown-item small font-weight-bold",on:{click:t.closeModal}},[t._v("Close")])])])])]),t._v(" "),i("div",{staticClass:"postPresenterContainer"},[t.uploading?i("div",[i("div",{staticClass:"w-100 h-100 bg-light py-5",staticStyle:{"border-bottom":"1px solid #f1f1f1"}},[i("div",{staticClass:"p-5"},[i("b-progress",{attrs:{value:t.uploadProgress,max:100,striped:"",animated:!0}}),t._v(" "),i("p",{staticClass:"text-center mb-0 font-weight-bold"},[t._v("Uploading ... ("+t._s(t.uploadProgress)+"%)")])],1)])]):i("div",[t.ids.length>0&&t.ids.length!=t.config.uploader.album_limit?i("div",{staticClass:"card-header py-2 bg-primary m-2 rounded cursor-pointer",on:{click:function(e){return t.addMedia(e)}}},[t._m(1)]):t._e(),t._v(" "),0==t.ids.length?i("div",{staticClass:"w-100 h-100 bg-light py-5 cursor-pointer",staticStyle:{"border-bottom":"1px solid #f1f1f1"},on:{click:function(e){return t.addMedia(e)}}},[i("p",{staticClass:"text-center mb-0 font-weight-bold p-5"},[t._v(t._s(t.composeMessage()))])]):t._e(),t._v(" "),t.ids.length>0?i("div",[i("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"p-carousel",controls:"",indicators:"",background:"#ffffff",interval:0},model:{value:t.carouselCursor,callback:function(e){t.carouselCursor=e},expression:"carouselCursor"}},t._l(t.media,function(e,o){return t.ids.length>0?i("b-carousel-slide",{key:"preview_media_"+o},[i("div",{class:[t.media[o].filter_class?t.media[o].filter_class:""],staticStyle:{display:"flex","min-height":"320px","align-items":"center"},attrs:{slot:"img"},slot:"img"},[i("img",{staticClass:"d-block img-fluid w-100",attrs:{src:e.url,alt:e.description,title:e.description}})])]):t._e()}),1)],1):t._e(),t._v(" "),t.ids.length>0&&"Image"==t.media[t.carouselCursor].type?i("div",{staticClass:"bg-dark align-items-center"},[i("ul",{staticClass:"nav media-drawer-filters text-center"},[i("li",{staticClass:"nav-item"},[i("div",{staticClass:"p-1 pt-3"},[i("img",{staticClass:"cursor-pointer",attrs:{src:t.media[t.carouselCursor].url,width:"100px",height:"60px"},on:{click:function(e){return e.preventDefault(),t.toggleFilter(e,null)}}})]),t._v(" "),i("a",{class:[null==t.media[t.carouselCursor].filter_class?"nav-link text-white active":"nav-link text-muted"],attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleFilter(e,null)}}},[t._v("No Filter")])]),t._v(" "),t._l(t.filters,function(e,o){return i("li",{staticClass:"nav-item"},[i("div",{staticClass:"p-1 pt-3"},[i("img",{class:e[1],attrs:{src:t.media[t.carouselCursor].url,width:"100px",height:"60px"},on:{click:function(i){return i.preventDefault(),t.toggleFilter(i,e[1])}}})]),t._v(" "),i("a",{class:[t.media[t.carouselCursor].filter_class==e[1]?"nav-link text-white active":"nav-link text-muted"],attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.toggleFilter(i,e[1])}}},[t._v(t._s(e[0]))])])})],2)]):t._e()]),t._v(" "),t.mediaDrawer?i("div",{staticClass:"bg-lighter p-2 row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.media[t.carouselCursor].alt,expression:"media[carouselCursor].alt"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Optional image description"},domProps:{value:t.media[t.carouselCursor].alt},on:{input:function(e){e.target.composing||t.$set(t.media[t.carouselCursor],"alt",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.media[t.carouselCursor].license,expression:"media[carouselCursor].license"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Optional media license"},domProps:{value:t.media[t.carouselCursor].license},on:{input:function(e){e.target.composing||t.$set(t.media[t.carouselCursor],"license",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-12 text-right pt-2"},[i("button",{staticClass:"btn btn-outline-danger btn-sm font-weight-bold mr-1",on:{click:function(e){return t.deleteMedia()}}},[t._v("Delete Photo")]),t._v(" "),i("button",{staticClass:"btn btn-outline-secondary btn-sm font-weight-bold",on:{click:function(e){return t.updateMedia()}}},[t._v("Hide Media Toolbar")])])]):t._e()]),t._v(" "),i("div",{staticClass:"card-body p-0"},[i("div",{staticClass:"caption"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.composeText,expression:"composeText"}],staticClass:"form-control mb-0 border-0 rounded-0",attrs:{rows:"3",placeholder:"Add an optional caption"},domProps:{value:t.composeText},on:{input:function(e){e.target.composing||(t.composeText=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"card-footer"},[i("div",{staticClass:"d-flex justify-content-between align-items-center"},[i("div",[i("div",{staticClass:"custom-control custom-switch d-inline mr-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.nsfw,expression:"nsfw"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"nsfwToggle"},domProps:{checked:Array.isArray(t.nsfw)?t._i(t.nsfw,null)>-1:t.nsfw},on:{change:function(e){var i=t.nsfw,o=e.target,s=!!o.checked;if(Array.isArray(i)){var n=t._i(i,null);o.checked?n<0&&(t.nsfw=i.concat([null])):n>-1&&(t.nsfw=i.slice(0,n).concat(i.slice(n+1)))}else t.nsfw=s}}}),t._v(" "),i("label",{staticClass:"custom-control-label small font-weight-bold text-muted pt-1",attrs:{for:"nsfwToggle"}},[t._v("NSFW")])]),t._v(" "),i("div",{staticClass:"dropdown d-inline"},[i("button",{staticClass:"btn btn-outline-secondary btn-sm py-0 dropdown-toggle",attrs:{type:"button",id:"visibility","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.visibility[0].toUpperCase()+t.visibility.slice(1))+"\n\t\t\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"dropdown-menu",staticStyle:{width:"200px"},attrs:{"aria-labelledby":"visibility"}},[i("a",{class:["public"==t.visibility?"dropdown-item active":"dropdown-item"],attrs:{href:"#","data-id":"public","data-title":"Public"},on:{click:function(e){e.preventDefault(),t.visibility="public"}}},[t._m(2)]),t._v(" "),i("a",{class:["private"==t.visibility?"dropdown-item active":"dropdown-item"],attrs:{href:"#","data-id":"private","data-title":"Followers Only"},on:{click:function(e){e.preventDefault(),t.visibility="private"}}},[t._m(3)]),t._v(" "),i("a",{class:["unlisted"==t.visibility?"dropdown-item active":"dropdown-item"],attrs:{href:"#","data-id":"private","data-title":"Unlisted"},on:{click:function(e){e.preventDefault(),t.visibility="unlisted"}}},[t._m(4)])])])]),t._v(" "),i("div",{staticClass:"small text-muted font-weight-bold"},[t._v("\n\t\t\t\t\t\t"+t._s(t.composeText.length)+" / "+t._s(t.config.uploader.max_caption_length)+"\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"pl-md-5"},[i("div",{staticClass:"btn-group"},[i("button",{staticClass:"btn btn-primary btn-sm font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.compose()}}},[t._v(t._s(t.composeState[0].toUpperCase()+t.composeState.slice(1)))]),t._v(" "),t._m(5),t._v(" "),i("div",{staticClass:"dropdown-menu dropdown-menu-right"},[i("a",{class:["publish"==t.composeState?"dropdown-item font-weight-bold active":"dropdown-item font-weight-bold "],attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.composeState="publish"}}},[t._v("Publish now")])])])])])]),t._v(" "),t._m(6)])])]):t._e(),t._v(" "),"loop"==t.composeType?i("div",[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("button",{staticClass:"btn btn-primary btn-block font-weight-bold",attrs:{type:"button"},on:{click:function(e){t.composeType="post"}}},[t._v("Upload Loop")]),t._v(" "),i("hr"),t._v(" "),i("button",{staticClass:"btn btn-outline-secondary btn-block font-weight-bold",attrs:{type:"button"},on:{click:function(e){t.composeType=""}}},[t._v("Back")])])])]):t._e(),t._v(" "),"story"==t.composeType?i("div",[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("button",{staticClass:"btn btn-primary btn-block font-weight-bold",attrs:{type:"button"},on:{click:function(e){t.composeType="post"}}},[t._v("Add to Story")]),t._v(" "),i("hr"),t._v(" "),i("button",{staticClass:"btn btn-outline-primary btn-block font-weight-bold",attrs:{type:"button"},on:{click:function(e){t.composeType="post"}}},[t._v("New Story")]),t._v(" "),i("hr"),t._v(" "),i("button",{staticClass:"btn btn-outline-secondary btn-block font-weight-bold",attrs:{type:"button"},on:{click:function(e){t.composeType=""}}},[t._v("Back")])])])]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-link text-dark no-caret dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",title:"Post options"}},[e("span",{staticClass:"fas fa-ellipsis-v fa-lg text-muted"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text-center mb-0 font-weight-bold text-white"},[e("i",{staticClass:"fas fa-plus mr-1"}),this._v(" Add Photo")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"d-none d-block-sm col-sm-2 px-0 text-center"},[e("i",{staticClass:"fas fa-globe"})]),this._v(" "),e("div",{staticClass:"col-12 col-sm-10 pl-2"},[e("p",{staticClass:"font-weight-bold mb-0"},[this._v("Public")]),this._v(" "),e("p",{staticClass:"small mb-0"},[this._v("Anyone can see")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"d-none d-block-sm col-sm-2 px-0 text-center"},[e("i",{staticClass:"fas fa-lock"})]),this._v(" "),e("div",{staticClass:"col-12 col-sm-10 pl-2"},[e("p",{staticClass:"font-weight-bold mb-0"},[this._v("Followers Only")]),this._v(" "),e("p",{staticClass:"small mb-0"},[this._v("Only followers can see")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"d-none d-block-sm col-sm-2 px-0 text-center"},[e("i",{staticClass:"fas fa-lock"})]),this._v(" "),e("div",{staticClass:"col-12 col-sm-10 pl-2"},[e("p",{staticClass:"font-weight-bold mb-0"},[this._v("Unlisted")]),this._v(" "),e("p",{staticClass:"small mb-0"},[this._v("Not listed on public timelines")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("span",{staticClass:"sr-only"},[this._v("Toggle Dropdown")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-footer py-1"},[e("p",{staticClass:"text-center mb-0 font-weight-bold text-muted small"},[this._v("Having issues? You can also use the "),e("a",{attrs:{href:"/i/compose"}},[this._v("Classic Compose UI")]),this._v(".")])])}],!1,null,"46b5a111",null);e.default=n.exports}},[[7,0]]]);