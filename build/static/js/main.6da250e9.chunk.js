(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var c=n(14),r=function(e){return!!e};function o(e){var t=e.map((function(e){return e.filter(r).length})),n=Object(c.a)(t,3),o=n[0],l=n[1],a=n[2];return!!l&&(a?o===a:o===l)}function l(e){var t=e.index,n=e.cells,r=e.cols,o=e.rows,l=!!n[t],a=function(e){var t=e.index,n=e.cells,r=function(e){var t=e.index,n=e.cols,c=e.rows;return{left:[t-1,t>n%c],right:[t+1,t%n<n],bottom:[t+n,t<n*(c-1)],top:[t-n,t>n],topLeft:[t-n-1,t%n>1],topRight:[t-n+1,t%n<n-1],bottomLeft:[t+n-1,t%(n*c)<n*(c-1)],bottomRight:[t+n+1,t%(n*c)<n*(c-2)]}}({index:t,cols:e.cols,rows:e.rows});return Object.values(r).filter((function(e){var t=Object(c.a)(e,2),r=t[0];return!!t[1]&&n[r]})).length}({index:t,cells:n,cols:r,rows:o});return l&&2===a||3===a}},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0),r=n(6),o=n(2),l=n(7);function a(){var e=Object(r.b)(),t=Object(r.c)(l.b),n=Object(r.c)(l.c),a=Object(r.c)(l.e),i=Object(r.c)(l.f),u=Object(r.c)(l.d),s=Object(r.c)(l.a),f=Object(c.useCallback)((function(){e(Object(o.a)())}),[e]),b=Object(c.useCallback)((function(){e(Object(o.c)())}),[e]),d=Object(c.useCallback)((function(){e(Object(o.d)())}),[e]),p=Object(c.useCallback)((function(){e(Object(o.b)())}),[e]),v=Object(c.useCallback)((function(t){e(Object(o.e)({index:t}))}),[e]);return{cells:t,play:u,cols:n,rows:a,step:i,isLooping:s,reset:d,random:b,setPlay:p,setCells:Object(c.useCallback)((function(t){e(Object(o.f)({cells:t}))}),[e]),nextStep:f,toggleCell:v}}},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return u}));var c=n(3),r=Object(c.b)("gol/NEXT_STEP"),o=Object(c.b)("gol/RESET"),l=Object(c.b)("gol/RANDOM"),a=Object(c.b)("gol/TOGGLE_PLAY"),i=Object(c.b)("gol/SET_CELL"),u=Object(c.b)("gol/SET_CELLS")},20:function(e,t){},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var c,r=n(8),o=n(23),l=n(4),a=n(3),i=n(2),u={cells:Array.from({length:5e3}).map((function(){return!1})),history:[],rows:50,cols:100,step:0,isPlaying:!1},s=n(13),f=Object(a.c)(u,(c={},Object(r.a)(c,i.a.type,(function(e){var t=e.cells,n=e.cols,c=e.rows,r=e.step,a=t.map((function(e,r){return Object(s.a)({index:r,cells:t,cols:n,rows:c})}));return Object(l.a)(Object(l.a)({},e),{},{cells:a,history:[a].concat(Object(o.a)(e.history)).slice(0,3),step:r+1})})),Object(r.a)(c,i.b.type,(function(e){return Object(l.a)(Object(l.a)({},e),{},{isPlaying:!e.isPlaying})})),Object(r.a)(c,i.d.type,(function(e){var t=e.cols,n=e.rows;return{cells:Array.from({length:t*n}).fill(!1),history:[],rows:n,cols:t,step:0,isPlaying:!1}})),Object(r.a)(c,i.c.type,(function(e){var t=e.cols,n=e.rows;return{cells:Array.from({length:t*n}).map((function(){return Math.random()<.3})),history:[],rows:n,cols:t,step:0,isPlaying:!1}})),Object(r.a)(c,i.e.type,(function(e,t){var n=t.payload.index,c=e.cells.map((function(e,t){return t===n?!e:e}));return Object(l.a)(Object(l.a)({},e),{},{cells:c})})),Object(r.a)(c,i.f.type,(function(e,t){var n=t.payload.cells,c=e.cols,r=e.rows;return Object(l.a)(Object(l.a)({},e),{},{cells:n.slice(0,c*r),step:0})})),c))},24:function(e,t,n){e.exports=n(35)},35:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(11),l=n.n(o),a=function(e){var t=e.alive,n=void 0!==t&&t,o=e.width,l=e.children,a=e.onClick,i=Object(c.useMemo)((function(){return n?"#34495e":"#ecf0f1"}),[n]),u=Object(c.useMemo)((function(){return n?"#ecf0f1":"#34495e"}),[n]);return r.a.createElement("div",{style:{width:o,minHeight:"16px",padding:0,backgroundColor:i,color:u},role:"button",onClick:a},l)},i=n(4),u={backgroundColor:"transparent",border:"none",outline:"none",textAlign:"center"},s=function(e){var t=e.children,n=e.style,c=void 0===n?{}:n,o=e.onClick;return r.a.createElement("button",{onClick:o,style:Object(i.a)(Object(i.a)({},u),c)},t)},f={width:"100px",fontSize:"40px"},b={display:"block",width:"100%",fontSize:"20px",textAlign:"center"},d=function(e){var t=e.icon,n=e.label,c=e.onClick;return r.a.createElement(s,{onClick:c,style:f},t,r.a.createElement("span",{style:b},n))},p=function(e){var t=e.play,n=e.onClick,o=Object(c.useMemo)((function(){return t?"\u23f8\ufe0f":"\u25b6\ufe0f"}),[t]),l=Object(c.useMemo)((function(){return t?"Pause":"Play"}),[t]);return r.a.createElement(d,{icon:o,label:l,onClick:n})},v=function(e){var t=e.play,n=e.cells,o=e.cols,l=e.rows,i=e.nextStep,u=e.toggleCell,s=Object(c.useMemo)((function(){return"".concat(100/o,"%")}),[o]),f=Object(c.useCallback)((function(e,t){return r.a.createElement(a,{key:t,alive:e,width:s,onClick:function(){return u(t)}})}),[s,u]),b=Object(c.useMemo)((function(){return n.map(f)}),[n,f]);return Object(c.useEffect)((function(){var e=setInterval((function(){i()}),100);return t||clearInterval(e),function(){return clearInterval(e)}}),[o,i,t,l]),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},b)},O=n(9),g={display:"flex",margin:"auto",height:"100%",textAlign:"center",flexDirection:"column",justifyContent:"space-evenly"};function j(){var e=Object(O.useGol)(),t=e.step,n=e.play,o=e.isLooping,l=e.reset,a=e.random,i=e.setPlay,u=Object(c.useMemo)((function(){return o?"\ud83d\ude35":"\ud83d\udc4c"}),[o]),s=Object(c.useMemo)((function(){return o?"Loop":"Ok"}),[o]);return r.a.createElement("div",{style:g},r.a.createElement(d,{icon:"\ud83d\udd00",label:"Random",onClick:a}),r.a.createElement(p,{play:n,onClick:i}),r.a.createElement(d,{icon:"\ud83c\udd91",label:"Clear",onClick:l}),r.a.createElement(d,{icon:"".concat(t),label:"Step"}),r.a.createElement(d,{icon:u,label:s}))}var m={flex:.05},y={flex:.95};function h(){var e=Object(O.useGol)(),t=e.play,n=e.cells,c=e.cols,o=e.rows,l=e.nextStep,a=e.toggleCell;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:m},r.a.createElement(j,null)),r.a.createElement("div",{style:y},r.a.createElement(v,{play:t,cells:n,cols:c,rows:o,nextStep:l,toggleCell:a})))}var w=n(3),k=n(6),E=Object(w.a)({reducer:O.gofReducer,devTools:!1});var C=function(){return r.a.createElement(k.a,{store:E},r.a.createElement(h,null))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/game-of-life",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/game-of-life","/service-worker.js");x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return f}));var c=n(1),r=n(13);function o(e){return e}var l=Object(c.a)(o,(function(e){return e.cells})),a=Object(c.a)(o,(function(e){return e.cols})),i=Object(c.a)(o,(function(e){return e.cols})),u=Object(c.a)(o,(function(e){return e.step})),s=Object(c.a)(o,(function(e){return e.isPlaying})),f=Object(c.a)(o,(function(e){var t=e.history;return Object(r.b)(t)}))},9:function(e,t,n){"use strict";var c=n(19);n.d(t,"useGol",(function(){return c.a}));var r=n(20);n.o(r,"gofReducer")&&n.d(t,"gofReducer",(function(){return r.gofReducer}));n(2);var o=n(21);n.d(t,"gofReducer",(function(){return o.a}));n(7)}},[[24,1,2]]]);
//# sourceMappingURL=main.6da250e9.chunk.js.map