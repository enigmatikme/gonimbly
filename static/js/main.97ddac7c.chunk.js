(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(67)},40:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(29),o=n.n(r),l=(n(40),n(5)),c=n.n(l),s=n(9),d=n(14),m=n(4),p=n(10),u=n(11),f=n(2);function g(){var e=Object(u.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  &.open {\n    form {\n      width: 100%;\n    }\n  }\n\n  form {\n    transition: all .3s ease-in-out;\n    position: absolute;\n    width: 0;\n    bottom: 0;\n    right: 0;\n    border-bottom: solid 1px white;\n    padding-bottom: 5px;\n\n    input {\n      background: none;\n      border: none;\n      width: 100%;\n      outline: none;\n      color: white;\n      font-size: 20px;\n    }\n  }\n\n  .search-icon {\n    position: absolute;\n    bottom: 10px;\n    right: 0;\n    transform: rotate(45deg);\n    font-size: 20px;\n    transition: transform .3s ease;\n\n    &.open {\n      transform: rotate(0deg);\n    }\n\n    path {\n      fill: white;\n      stroke-width: 1;\n    }\n  }\n\n  .error {\n    position: absolute;\n    bottom: -20px;\n    left: 0;\n    color: white;\n    font-size: 12px;\n\n    p {\n      margin: 0;\n    }\n  }\n"]);return g=function(){return e},e}var h=f.a.div(g()),b=n(12),x=n.n(b);function y(e){var t=e.addCity,n=Object(a.useState)(""),r=Object(m.a)(n,2),o=r[0],l=r[1],d=Object(a.useState)(!1),u=Object(m.a)(d,2),f=u[0],g=u[1],b=Object(a.useState)(""),y=Object(m.a)(b,2),v=y[0],w=y[1],E=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),w(""),a=o.split(" ").join("%20"),e.next=5,x.a.get("/city/?query=".concat(a)).catch(function(e){return console.log(e)});case 5:(i=e.sent).data&&i.data.length?(t(i.data[0]),g(!f),l("")):w("No cities found");case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(h,{className:f?"open":"closed"},i.a.createElement("form",{onSubmit:E},i.a.createElement("input",{ref:function(e){e&&e.focus()},type:"text",value:o,onChange:function(e){return l(e.target.value)}})),i.a.createElement(p.a,{className:"search-icon ".concat(f?"open":""),icon:["far","times-circle"],onClick:function(){return g(!f)}}),v&&i.a.createElement("div",{className:"error"},i.a.createElement("p",null,v)))}var v=f.a.div.withConfig({displayName:"cityListstyles__CityListContainer",componentId:"r431ye-0"})(["div{border:white solid 1px;padding:10px;text-align:center;margin-bottom:10px;color:white;position:relative;min-width:180px;border-radius:20px;transition:box-shadow .3s ease;&:last-of-type{border-bottom:white solid 1px;}&.active,&:hover{box-shadow:0px 0px 0px 3px white;}&.loading{pointer-events:none;}p{position:absolute;margin:0;right:12px;top:12px;}}}"]);function w(e){var t=e.cities,n=e.activeCity,a=e.fetchWeatherData,r=e.loading,o=e.editing,l=e.deleteCity,c=e.handleDragStart,s=e.handleDragOver;return i.a.createElement(v,null,t.map(function(e,t){var d=e.woeid,m=e.title;return i.a.createElement("div",{key:t,className:(n===d?"active ":" ")+(r?"loading":""),onClick:function(){return!o&&a(d)},draggable:!!o,onDragStart:function(){return c(t)},onDragOver:function(e){return s(e,t)}},m,o&&i.a.createElement("p",{className:"close",onClick:function(){return l(t)}},"X"))}))}var E=n(19),C=n.n(E);var O=function(e){var t="Moon",n="Sun",a="Blood",i=parseInt(e.substring(11,13));return i>=5&&i<=11?t:i>=12&&i<=18?n:a},k=function(e,t){return"C"===t?e:9*e/5+32},_={darkP:"#57435B",midP:"#A37B8D",lightP:"#D7959A",yellow:"#D39559",lightB:"#A4CFC7",midB:"#7BC3CA",grey:"#D9E1CE",red:"#E57873"},j={morning:{one:_.lightP,two:_.darkP,three:_.grey,four:_.white},afternoon:{one:_.grey,two:_.yellow,three:_.lightB,four:_.midB},evening:{one:_.grey,two:_.midP,three:_.lightP,four:_.red}},D=f.a.div.withConfig({displayName:"loaderstyles__LoaderContainer",componentId:"grk0ok-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;padding-bottom:115px;#ld4{position:relative;display:flex;width:25%;justify-content:space-between;}#ld4 div{height:15px;width:15px;border-radius:50%;}#ld4 div:nth-child(1){animation:ld4 3s linear infinite 0s;}#ld4 div:nth-child(2){animation:ld4 3s linear infinite 0.15s;}#ld4 div:nth-child(3){animation:ld4 3s linear infinite 0.3s;}#ld4 div:nth-child(4){animation:ld4 3s linear infinite 0.45s;}@keyframes ld4{0%{opacity:0;transform:scale(0.3);background:#59CD90;background:",";}25%{opacity:1;transform:scale(1.8);background:#0072BB;background:",";}50%{opacity:0;transform:scale(0.3);background:#FE4A49;background:",";}75%{opacity:1;transform:scale(1.8);background:#FED766;background:",";}100%{opacity:0;}}"],function(e){return j[e.timeOfDay].one},function(e){return j[e.timeOfDay].two},function(e){return j[e.timeOfDay].three},function(e){return j[e.timeOfDay].four});function N(e){var t=e.timeOfDay;return i.a.createElement(D,{timeOfDay:t},i.a.createElement("div",{id:"ld4"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)))}var S=f.a.div.withConfig({displayName:"cardstyles__CardContainer",componentId:"sc-11sl3si-0"})(["width:375px;height:100%;display:flex;border-radius:20px;position:relative;-webkit-box-shadow:7px 7px 42px 1px rgba(0,0,0,0.75);-moz-box-shadow:7px 7px 42px 1px rgba(0,0,0,0.75);box-shadow:7px 7px 42px 1px rgba(0,0,0,0.75);.close{position:absolute;top:20px;right:20px;font-size:20px;path{fill:white !important;}}.city{position:absolute;padding-bottom:2px;top:20px;left:20px;font-size:10px;color:white;font-weight:100;transform:translateZ(1px);margin:0;p{margin:0;}}"]),I=f.a.div.withConfig({displayName:"cardstyles__WeatherContainer",componentId:"sc-11sl3si-1"})(["position:absolute;overflow:hidden;width:100%;height:100%;top:0;bottom:0;transform:translateZ(1px);"]),z=f.a.div.withConfig({displayName:"cardstyles__ImageContainer",componentId:"sc-11sl3si-2"})(["position:absolute;top:0;bottom:0;right:0;left:0;img{height:100%;width:100%;border-radius:20px;}"]),B=f.a.div.withConfig({displayName:"cardstyles__ContentContainer",componentId:"sc-11sl3si-3"})(["display:flex;flex-direction:column;justify-content:space-between;padding:100px 20px 20px;transform:translateZ(1px);width:100%;"]),T=f.a.div.withConfig({displayName:"cardstyles__Today",componentId:"sc-11sl3si-4"})(['text-align:center;h1{margin:0;font-size:75px;font-weight:lighter;color:white;line-height:70px;&.temp{&:after{content:"\\00b0";position:absolute;}}}h3{margin:0;font-size:20px;color:white;}']),A=f.a.div.withConfig({displayName:"cardstyles__DayContainer",componentId:"sc-11sl3si-5"})(['display:flex;flex-direction:column;overflow-y:scroll;height:140px;.day-row{margin-bottom:15px;min-height:55px;display:flex;justify-content:space-between;align-items:center;border-bottom:solid 1.5px white;color:white;font-weight:bold;.details{text-align:right;display:flex;flex-direction:column;p{margin:0;&.state{font-weight:normal;}}}}.temp{&:after{content:"\\00b0";}}']);function M(){var e=Object(u.a)(["\nheight: 100%;\n.drop {\n  background:-webkit-gradient(linear,0% 0%,0% 100%, from(rgba(13,52,58,1) ), to(rgba(255,255,255,0.6))  );\n  background: -moz-linear-gradient(top, rgba(13,52,58,1) 0%, rgba(255,255,255,.6) 100%);\n\twidth:1px;\n\theight:89px;\n\tposition: absolute;\n\tbottom:200px;\n\t-webkit-animation: fall .63s linear infinite;\n  -moz-animation: fall .63s linear infinite;\n  \n}\n\n/* animate the drops*/\n@-webkit-keyframes fall {\n\tto {margin-top:900px;}\n}\n@-moz-keyframes fall {\n\tto {margin-top:900px;}\n}\n"]);return M=function(){return e},e}var P=f.a.div(M()),F=function(e){var t=e.drops;function n(e,t){return Math.floor(Math.random()*(t-e+1))+e}return Object(a.useEffect)(function(){!function(){for(var e=document.getElementById("Rain"),a=1;a<t;a++){var i=n(0,1600),r=n(-1e3,1400),o=document.createElement("div");o.setAttribute("class","drop"),o.setAttribute("id","drop".concat(a)),e.appendChild(o),o.style.left="".concat(i,"px"),o.style.top="".concat(r,"px")}}()},[]),i.a.createElement(P,{id:"Rain"})},W=function(e){var t,n={hr:500,lr:200,s:100},a=e.consolidated_weather[0].weather_state_abbr;return n[a]?(t=n[a],i.a.createElement(I,null,i.a.createElement(F,{drops:t}))):null},L=function(e){var t=C()(e.applicable_date).format("dddd");return i.a.createElement("div",{className:"day-row"},i.a.createElement("p",null,t),i.a.createElement("div",{className:"details"},i.a.createElement("p",{className:"temp"},Math.round(k(e.the_temp,e.tempScale))),i.a.createElement("p",{className:"state"},e.weather_state_name)))},J=function(e){var t=e.img,n=e.children;return i.a.createElement(S,null,i.a.createElement(z,null,i.a.createElement("img",{alt:"".concat(t),src:"/img/".concat(t,".png")})),n)},q=function(e){var t=e.imgToTimeOfDay,n=e.img;return i.a.createElement(J,{img:n},i.a.createElement(N,{timeOfDay:t[n]}))},Z=function(e){var t=e.img,n=e.consolidated_weather,a=e.title,r=e.currentTime,o=e.closeCard,l=e.tempScale,c=e.today;return i.a.createElement(J,{img:t},i.a.createElement(W,{consolidated_weather:n}),i.a.createElement(B,null,i.a.createElement("div",{className:"city"},i.a.createElement("p",null,a),i.a.createElement("p",null,r)),i.a.createElement(p.a,{className:"close",icon:["far","times-circle"],onClick:o}),i.a.createElement(T,null,""!==c&&i.a.createElement("div",null,i.a.createElement("h1",{className:"temp"},Math.round(k(c.the_temp,l))),i.a.createElement("h3",null,c.weather_state_name))),i.a.createElement(A,{style:{display:"flex"}},n.map(function(e,t){if(0!==t)return i.a.createElement(L,Object.assign({tempScale:l,key:t},e,{index:t}))}))))},R=function(e){var t=e.img;return i.a.createElement(J,{img:t},i.a.createElement(B,null,i.a.createElement(T,null,i.a.createElement("div",null,i.a.createElement("h1",{style:{fontSize:"20px"}},"Choose city")))))};function X(e){var t,n,a=e.consolidated_weather,r=e.closeCard,o=e.title,l=e.time,c=e.tempScale,s=e.loading,d=e.timezone,m="Blood",p={Moon:"morning",Sun:"afternoon",Blood:"evening"};if(a){var u=a[0];t=void 0===u?"Not shown":u;l.substring(0,19);return n=C()().tz(d).format("LT"),m=O(l),s?i.a.createElement(q,{imgToTimeOfDay:p,img:m}):i.a.createElement(Z,{img:m,consolidated_weather:a,title:o,currentTime:n,closeCard:r,tempScale:c,today:t})}return s?i.a.createElement(q,{imgToTimeOfDay:p,img:m}):i.a.createElement(R,{img:m})}var G=n(7),$=n.n(G),H=f.a.div.withConfig({displayName:"appstyles__AppContainer",componentId:"sc-1n1esid-0"})(["height:100%;display:flex;align-items:center;background:#a37b8d;background:-moz-linear-gradient(-45deg,#a37b8d 0%,#57435b 100%);background:-webkit-linear-gradient(-45deg,#a37b8d 0%,#57435b 100%);background:linear-gradient(135deg,#a37b8d 0%,#57435b 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#a37b8d',endColorstr='#57435b',GradientType=1 );"]),K=f.a.div.withConfig({displayName:"appstyles__ContentWrapper",componentId:"sc-1n1esid-1"})(["display:flex;flex-direction:row;align-items:center;max-width:800px;height:667px;margin:0 auto;"]),Q=f.a.div.withConfig({displayName:"appstyles__SideBar",componentId:"sc-1n1esid-2"})(["display:flex;flex-direction:column;width:35%;height:100%;margin-right:20px;position:relative;.features{font-size:18px;position:absolute;bottom:6px;color:white;transition:opacity .3s ease;display:flex;.conversion{margin-right:20px;cursor:pointer;}.edit{cursor:pointer;}}.open{& + .features{opacity:0;pointer-events:none;}}"]);var U=function(){var e=Object(a.useState)([{title:"San Francisco",location_type:"City",woeid:2487956,latt_long:"37.777119, -122.41964"},{title:"Taipei",location_type:"City",woeid:2306179,latt_long:"25.085960,121.561478"},{title:"Dubai",location_type:"City",woeid:1940345,latt_long:"25.269440,55.308651"}]),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(),l=Object(m.a)(o,2),p=l[0],u=l[1],f=Object(a.useState)(""),g=Object(m.a)(f,2),h=g[0],b=g[1],v=Object(a.useState)("C"),E=Object(m.a)(v,2),C=E[0],O=E[1],k=Object(a.useState)(!1),_=Object(m.a)(k,2),j=_[0],D=_[1],N=Object(a.useState)(!1),S=Object(m.a)(N,2),I=S[0],z=S[1],B=Object(a.useState)(null),T=Object(m.a)(B,2),A=T[0],M=T[1],P=function(){var e=Object(s.a)(c.a.mark(function e(t){var n,a,i,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(D(!0),!(n=localStorage.getItem(t))){e.next=11;break}if(a=JSON.parse(n),i=a.requestTime,!($()().unix()-i<=60)){e.next=11;break}return u(a),b(t),D(!1),e.abrupt("return");case 11:return e.next=13,x.a.get("/location/".concat(t,"/")).catch(function(e){return console.log(e)});case 13:(r=e.sent).data.requestTime=$()().unix(),r&&r.data?(u(r.data),b(t),localStorage.setItem(t,JSON.stringify(r.data)),D(!1)):alert("Error fetching data");case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(H,null,i.a.createElement(K,null,i.a.createElement(Q,null,i.a.createElement(w,{loading:j,cities:n,activeCity:h,fetchWeatherData:P,editing:I,deleteCity:function(e){var t=Object(d.a)(n).filter(function(t,n){return n!==e});r(t)},handleDragStart:function(e){M(n[e])},handleDragOver:function(e,t){if(e.preventDefault(),A!==n[t]){var a=Object(d.a)(n).filter(function(e){return e!==A});a.splice(t,0,A),r(a)}},onDragEnd:function(){return M(null)}}),i.a.createElement(y,{setLoading:D,addCity:function(e){r([].concat(Object(d.a)(n),[e])),P(e.woeid)}}),i.a.createElement("div",{className:"features"},i.a.createElement("div",{className:"conversion",onClick:function(){O("C"===C?"F":"C")}},"C/F"),i.a.createElement("div",{className:"edit",onClick:function(){return z(!I)}},I?"Editing...":"Edit"))),i.a.createElement(X,Object.assign({},p,{loading:j,closeCard:function(){b(""),u({})},tempScale:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=n(8),Y=n(13),ee=n(32);n(66);V.b.add(ee.a,Y.c,Y.a,Y.b),o.a.render(i.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);