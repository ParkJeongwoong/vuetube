(function(e){function t(t){for(var o,s,a=t[0],c=t[1],l=t[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],o=!0,a=1;a<i.length;a++){var c=i[a];0!==n[c]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=i[0]))}return e}var o={},n={app:0},r=[];function s(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=o,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(i,o,function(t){return e[t]}.bind(null,o));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vuetube/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"03a1":function(e,t,i){"use strict";i("c947")},"35f0":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("h1",{staticClass:"clickable",on:{click:e.Reset}},[o("span",{staticClass:"vue_title"},[e._v("Vue")]),o("span",{staticClass:"tube_title"},[e._v("Tube")])]),o("img",{staticClass:"clickable mb-2",attrs:{alt:"Vue logo",src:i("cf05")},on:{click:e.Reset}}),o("SearchBar"),e.isVideoSelected?o("VideoDetail"):e._e(),e.isVideoSearched?o("VideoList",{staticClass:"mb-5"}):e._e()],1)},r=[],s=i("5530"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"input-group mb-3 mx-auto",staticStyle:{width:"250px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"form-control",attrs:{placeholder:"Search","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:e.query},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchVideo(e.query)},input:function(t){t.target.composing||(e.query=t.target.value)}}}),i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:function(t){return e.searchVideo(e.query)}}},[i("i",{staticClass:"fas fa-search"})])])])},c=[],l=i("2f62"),u={name:"SearchBar",data:function(){return{query:""}},methods:Object(s["a"])({},Object(l["b"])(["searchVideo"]))},d=u,p=i("2877"),f=Object(p["a"])(d,a,c,!1,null,null,null),m=f.exports,v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"list-group detail mb-5",attrs:{id:"video-player"}},[i("div",[i("span",{staticClass:"clickable badge rounded-pill",class:{repeat:e.loop},on:{click:e.repeatVideo}},[e._v("Repeat")])]),i("li",{staticClass:"list-group-item frame"},[i("div",{staticClass:"ratio ratio-16x9"},[i("iframe",{attrs:{src:"https://www.youtube.com/embed/"+e.selectedVideo.id.videoId+"?loop="+e.loop+"&playlist="+e.selectedVideo.id.videoId,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),i("li",{staticClass:"list-group-item fs-4 fw-bold title"},[e._v(" "+e._s(e.selectedVideo.snippet.title)+" ")]),i("li",{staticClass:"list-group-item desc"},[e._v(" "+e._s(e.selectedVideo.snippet.description)+" ")])])},b=[],h={name:"VideoDetail",computed:{selectedVideo:function(){return this.$store.state.SelectedVideo}},data:function(){return{loop:0}},methods:{repeatVideo:function(){this.loop=0===this.loop?1:0}}},g=h,V=(i("d45e"),Object(p["a"])(g,v,b,!1,null,null,null)),_=V.exports,y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"row gx-2"},[i("div",{staticClass:"col"},[i("div",{staticClass:"ps-5 mb-3"},[e._v("Video List")]),e._l(e.videos,(function(t,o){return i("VideoListItem",{directives:[{name:"show",rawName:"v-show",value:o<e.pageSearch,expression:"idx<pageSearch"}],key:t.etag,attrs:{video:t}})})),e.pageSearch<20?i("li",{staticClass:"list-group-item video-item clickable mb-4 more",on:{click:e.onMoreVideo}},[e._v("More")]):e._e()],2),e.isVideoSelected?i("div",{staticClass:"col"},[i("div",{staticClass:"mb-3"},[e._v("Related Video")]),e._l(e.videosR,(function(t,o){return i("VideoListItem",{directives:[{name:"show",rawName:"v-show",value:o<e.pageRelated,expression:"idx<pageRelated"}],key:t.etag,attrs:{video:t}})})),e.pageRelated<20?i("li",{staticClass:"list-group-item video-item clickable mb-4 more",on:{click:e.onMoreVideoR}},[e._v("More")]):e._e()],2):e._e()])])},S=[],E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"list-group-item video-item",on:{click:function(t){return e.onVideoClick(e.video)}}},[i("img",{staticClass:"me-3",attrs:{src:""+e.video.snippet.thumbnails.default.url,alt:"video-thumbnail"}}),i("div",{staticClass:"media-body d-flex flex-column justify-content-center"},[i("span",[e._v(" "+e._s(e.video.snippet.title)+" ")])])])},R=[],O={name:"VideoListItem",props:{video:Object},methods:Object(s["a"])({},Object(l["b"])(["onVideoClick"]))},w=O,C=(i("03a1"),Object(p["a"])(w,E,R,!1,null,"247ddf94",null)),k=C.exports,j={name:"VideoList",components:{VideoListItem:k},computed:{videos:function(){return this.$store.state.videos},videosR:function(){return this.$store.state.videosR},isVideoSelected:function(){return this.$store.getters.isVideoSelected},pageSearch:function(){return this.$store.state.pageSearch},pageRelated:function(){return this.$store.state.pageRelated}},methods:Object(s["a"])({},Object(l["b"])(["onMoreVideo","onMoreVideoR"]))},x=j,I=(i("7ed9"),Object(p["a"])(x,y,S,!1,null,null,null)),D=I.exports,T={name:"App",components:{SearchBar:m,VideoDetail:_,VideoList:D},computed:{isVideoSelected:function(){return this.$store.getters.isVideoSelected},isVideoSearched:function(){return this.$store.getters.isVideoSearched}},methods:Object(s["a"])({},Object(l["b"])(["Reset"]))},M=T,A=(i("034f"),Object(p["a"])(M,n,r,!1,null,null,null)),P=A.exports,$=(i("b64b"),i("bc3a")),L=i.n($);o["a"].use(l["a"]);var q=new l["a"].Store({state:{videos:[],SelectedVideo:{},videosR:[],pageSearch:5,pageRelated:5},getters:{isVideoSelected:function(e){return!!Object.keys(e.SelectedVideo).length},isVideoSearched:function(e){return!!e.videos.length}},mutations:{SEARCH_VIDEO:function(e,t){e.videos=t},SELECT_VIDEO:function(e,t){e.SelectedVideo=t},RESET:function(e){e.SelectedVideo={},e.videos=[]},RELATED_VIDEO:function(e,t){e.videosR=t},MORE_VIDEOS:function(e){return e.pageSearch+=5},MORE_VIDEOS_R:function(e){return e.pageRelated+=5},RESET_PAGE:function(e){return e.pageSearch=5},RESET_PAGE_R:function(e){return e.pageRelated=5}},actions:{searchVideo:function(e,t){var i=e.commit;L.a.get("https://www.googleapis.com/youtube/v3/search",{params:{key:"AIzaSyDfH3J3A2iN-fn-PDW1NbIh4lFQr0XqjtA",type:"video",part:"snippet",q:t,maxResults:20}}).then((function(e){return i("SEARCH_VIDEO",e.data.items)})).catch((function(e){return console.error(e)})),i("RESET_PAGE")},onVideoClick:function(e,t){var i=e.commit;i("SELECT_VIDEO",t),setTimeout((function(){var e=document.querySelector("#video-player").offsetTop;window.scrollTo({top:e,behavior:"smooth"})}),0),L.a.get("https://www.googleapis.com/youtube/v3/search",{params:{key:"AIzaSyDfH3J3A2iN-fn-PDW1NbIh4lFQr0XqjtA",type:"video",part:"snippet",relatedToVideoId:t.id.videoId,maxResults:20}}).then((function(e){return i("RELATED_VIDEO",e.data.items)})).catch((function(e){return console.error(e)})),i("RESET_PAGE_R")},Reset:function(e){var t=e.commit;t("RESET")},onMoreVideo:function(e){var t=e.commit;t("MORE_VIDEOS")},onMoreVideoR:function(e){var t=e.commit;t("MORE_VIDEOS_R")}},modules:{}});o["a"].config.productionTip=!1,new o["a"]({store:q,render:function(e){return e(P)}}).$mount("#app")},"7ed9":function(e,t,i){"use strict";i("35f0")},"85ec":function(e,t,i){},c947:function(e,t,i){},cf05:function(e,t,i){e.exports=i.p+"img/logo.82b9c7a5.png"},d3ff:function(e,t,i){},d45e:function(e,t,i){"use strict";i("d3ff")}});
//# sourceMappingURL=app.b6aa02ba.js.map