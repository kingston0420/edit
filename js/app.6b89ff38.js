(function(e){function t(t){for(var o,c,i=t[0],u=t[1],s=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c9026fbd"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/edit/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3785:function(e,t,n){"use strict";n("4570")},4570:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},a=Object(o["e"])("Home"),c=Object(o["e"])(" | "),i=Object(o["e"])("About");function u(e,t){var n=Object(o["v"])("router-link"),u=Object(o["v"])("router-view");return Object(o["o"])(),Object(o["d"])(o["a"],null,[Object(o["f"])("div",r,[Object(o["f"])(n,{to:"/"},{default:Object(o["A"])((function(){return[a]})),_:1}),c,Object(o["f"])(n,{to:"/about"},{default:Object(o["A"])((function(){return[i]})),_:1})]),Object(o["f"])(u)],64)}n("3785");const s={};s.render=u;var d=s,l=n("9483");Object(l["a"])("".concat("/edit/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var f=n("6c02"),b={class:"home"};function p(e,t,n,r,a,c){var i=Object(o["v"])("HelloWorld");return Object(o["o"])(),Object(o["d"])("div",b,[Object(o["f"])(i,{msg:"Welcome to Your Vue.js App"})])}var m=Object(o["B"])("data-v-42c1db03");Object(o["r"])("data-v-42c1db03");var v={class:"hello"};Object(o["p"])();var O=m((function(e,t,n,r,a,c){return Object(o["o"])(),Object(o["d"])("div",v,[Object(o["f"])("table",null,[(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(a.mat,(function(e,t){return Object(o["o"])(),Object(o["d"])("tr",{key:t},[(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(e,(function(e,n){return Object(o["o"])(),Object(o["d"])("td",{key:n},[Object(o["f"])("div",{contenteditable:"",onInput:function(e){return c.set(t,n,e)}},Object(o["x"])(e),41,["onInput"])])})),128))])})),128))]),Object(o["e"])(" "+Object(o["x"])(a.mat),1)])})),j=(n("159b"),n("260b")),h=(n("e71f"),j["a"].initializeApp({apiKey:"AIzaSyAQxzSAsjmT3L5ru8sQOcQw4Am9S3A4yAo",authDomain:"edit-76d35.firebaseapp.com",projectId:"edit-76d35",storageBucket:"edit-76d35.appspot.com",messagingSenderId:"508197995981",appId:"1:508197995981:web:26ca4050f5fd41228ab084",measurementId:"G-8N7D1HKXLE"}).firestore()),g=j["a"].firestore;g.Timestamp,g.GeoPoint;h.settings({timestampsInSnapshots:!0});var y={name:"HelloWorld",props:{msg:String},methods:{set:function(e,t,n){this.mat[e][t]=n.target.innerText,localStorage.mat=JSON.stringify(this.mat);var o=h.collection("mat").doc("mat");o.set({data:JSON.stringify(this.mat)})}},data:function(){return{mat:[["Edit","Edit","Edit","Edit"],["Edit","Edit","Edit","Edit"],["Edit","Edit","Edit","Edit"]],db:h}},mounted:function(){var e=this;localStorage.mat;var t=h.collection("mat");t.onSnapshot((function(t){t.forEach((function(t){e.mat=JSON.parse(t.data().data)}))}))},watch:{mat:function(e){localStorage.mat=JSON.stringify(e);var t=h.collection("mat").doc("mat");t.set({data:JSON.stringify(this.mat)})}}};n("a7b6");y.render=O,y.__scopeId="data-v-42c1db03";var w=y,S={name:"Home",components:{HelloWorld:w}};S.render=p;var E=S,A=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],k=Object(f["a"])({history:Object(f["b"])(),routes:A}),x=k;Object(o["c"])(d).use(x).mount("#app")},7237:function(e,t,n){},a7b6:function(e,t,n){"use strict";n("7237")}});
//# sourceMappingURL=app.6b89ff38.js.map