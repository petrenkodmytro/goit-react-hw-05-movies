"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{4110:function(t,n,e){e.d(n,{E3:function(){return u},IV:function(){return f},KJ:function(){return c},Mc:function(){return l},wH:function(){return m}});var r=e(5861),o=e(7757),a=e.n(o),i=e(1243);function c(t){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",e={params:{api_key:"6eb92bed4e8effdfb5cc4dc890c8b1e8",language:"en-US",page:n}},t.next=4,i.Z.get("https://api.themoviedb.org/3/trending/movie/day",e);case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t,n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(n,e){var r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/search/movie",r={params:{query:n,api_key:"6eb92bed4e8effdfb5cc4dc890c8b1e8",language:"en-US",page:e,include_adult:!1}},t.next=4,i.Z.get("https://api.themoviedb.org/3/search/movie",r);case 4:return o=t.sent,t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){var e,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(n),r={params:{api_key:"6eb92bed4e8effdfb5cc4dc890c8b1e8",language:"en-US"}},t.next=4,i.Z.get(e,r);case 4:return o=t.sent,t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(n){var e,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(n,"/credits"),r={params:{api_key:"6eb92bed4e8effdfb5cc4dc890c8b1e8",language:"en-US"}},t.next=4,i.Z.get(e,r);case 4:return o=t.sent,t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function t(n){var e,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),r={params:{api_key:"6eb92bed4e8effdfb5cc4dc890c8b1e8",language:"en-US"}},t.next=4,i.Z.get(e,r);case 4:return o=t.sent,t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},2940:function(t,n,e){e.d(n,{z:function(){return c}});var r,o=e(168),a=e(6444).ZP.button(r||(r=(0,o.Z)(["\n  width: 150px;\n  text-align: center;\n  font-weight: 500;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 8px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 5px;\n  border: none;\n  background-color: ",";\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    background-color: ",";\n    color: #fff;\n    box-shadow: -2px -2px 5px #fff,\n      2px 2px 5px ",";\n  }\n"])),(function(t){return t.theme.colors.accentLight}),(function(t){return t.theme.colors.accentDark}),(function(t){return t.theme.colors.accentDark})),i=e(184),c=function(t){var n=t.loadMore;return(0,i.jsx)(a,{onClick:n,children:"Load more"})}},3695:function(t,n,e){e.d(n,{y:function(){return g}});var r,o,a,i=e(1965),c=e(168),s=e(1087),u=e(6444),p=u.ZP.li(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-width: 350px;\n  cursor: pointer;\n  text-align: center;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  > p {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: ",";\n    background-color: #fff;\n    font-weight: 700;\n  }\n"])),(function(t){return t.theme.colors.accentDark})),l=(0,u.ZP)(s.rU)(o||(o=(0,c.Z)(["\n  text-decoration: none;\n"]))),d=u.ZP.img(a||(a=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n\n  /* height: 200px; */\n  /* object-fit: cover; */\n"]))),f=e(9192),h=e(184),m=function(t){var n=t.item,e=t.state,r=n.poster_path?"https://image.tmdb.org/t/p/original".concat(n.poster_path):f;return(0,h.jsx)(l,{to:"/movies/".concat(n.id),state:e,children:(0,h.jsxs)(p,{children:[(0,h.jsxs)("p",{children:[(0,h.jsx)("span",{children:n.title.slice(0,32)})," |",(0,h.jsx)("span",{children:n.release_date.slice(0,4)})]}),(0,h.jsx)(d,{src:r,alt:n.title})]})})},g=function(t){var n=t.movies,e=t.state;return(0,h.jsx)(i.aV,{children:n.map((function(t){return(0,h.jsx)(m,{item:t,state:e},t.id)}))})}},1965:function(t,n,e){e.d(n,{aV:function(){return s},bZ:function(){return u}});var r,o,a,i=e(168),c=e(6444),s=c.ZP.ul(r||(r=(0,i.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),u=(c.ZP.h2(o||(o=(0,i.Z)(["\n  text-align: center;\n"]))),c.ZP.p(a||(a=(0,i.Z)(["\n  position: absolute;\n  top: 140px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ",";\n  padding: 20px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 20px;\n  font-style: italic;\n  color: ",";\n"])),(function(t){return t.theme.colors.accentLight}),(function(t){return t.theme.colors.error})))},854:function(t,n,e){e.d(n,{a:function(){return a}});var r=e(8402),o=e(184),a=function(t){var n=t.isLoading;return(0,o.jsx)(r.fe,{visible:n,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{display:"block",marginTop:"5px",marginLeft:"auto",marginRight:"auto"}})}},5415:function(t,n,e){e.r(n);var r=e(3433),o=e(5861),a=e(9439),i=e(7757),c=e.n(i),s=e(4110),u=e(2940),p=e(3695),l=e(1965),d=e(854),f=e(2791),h=e(7689),m=e(7821),g=e.n(m),x=e(184);n.default=function(){var t=(0,f.useState)([]),n=(0,a.Z)(t,2),e=n[0],i=n[1],m=(0,f.useState)(!1),v=(0,a.Z)(m,2),b=v[0],y=v[1],w=(0,f.useState)(null),Z=(0,a.Z)(w,2),k=Z[0],j=Z[1],S=(0,f.useState)(1),E=(0,a.Z)(S,2),_=E[0],P=E[1],O=(0,f.useState)(null),L=(0,a.Z)(O,2),C=L[0],T=L[1],z=(0,h.TH)();(0,f.useEffect)((function(){var t=function(){var t=(0,o.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(!0),j(null),t.next=5,(0,s.KJ)(_);case 5:n=t.sent,i((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(n.data.results))})),T(n.data.total_pages),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(0),T(null),i([]),j(t.t0.message),console.log(t.t0.message);case 16:return t.prev=16,y(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,10,16,19]])})));return function(){return t.apply(this,arguments)}}();t()}),[_]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.y,{movies:e,title:"Hit movies",state:{from:z}}),(0,x.jsx)(d.a,{isLoading:b}),C>_&&(0,x.jsx)(u.z,{loadMore:function(){P((function(t){return t+1}))}}),k&&(0,x.jsx)(l.bZ,{children:k}),(0,x.jsx)(g(),{})]})}},7821:function(t,n,e){var r,o=e(2791),a=(r=o)&&"object"===typeof r&&"default"in r?r.default:r,i=function(){return i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},i.apply(this,arguments)};!function(t,n){void 0===n&&(n={});var e=n.insertAt;if(t&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===e&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}(".scroll-to-top {\n  background-color: white;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 7px;\n  width: 40px;\n  height: 40px;\n  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);\n  border: none;\n}\n\n.scroll-to-top:active {\n  transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n");t.exports=function(t){var n=t.top,e=void 0===n?20:n,r=t.className,c=void 0===r?"":r,s=t.color,u=void 0===s?"black":s,p=t.smooth,l=void 0!==p&&p,d=t.component,f=void 0===d?"":d,h=t.viewBox,m=void 0===h?"0 0 256 256":h,g=t.svgPath,x=void 0===g?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":g,v=t.width,b=void 0===v?"28":v,y=t.height,w=void 0===y?"28":y,Z=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e}(t,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),k=o.useState(!1),j=k[0],S=k[1];return o.useEffect((function(){var t=function(){S(document.documentElement.scrollTop>=e)};return t(),document.addEventListener("scroll",t),function(){return document.removeEventListener("scroll",t)}}),[e]),a.createElement(a.Fragment,null,j&&a.createElement("button",i({className:"scroll-to-top "+c,onClick:function(){return function(t){void 0===t&&(t=!1),t?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}(l)},"aria-label":"Scroll to top"},Z),f||a.createElement("svg",{width:b,height:w,fill:u,viewBox:m},a.createElement("path",{d:x}))))}},9192:function(t,n,e){t.exports=e.p+"static/media/no-poster.c04952434c9e0c162278.png"}}]);
//# sourceMappingURL=415.75ec175f.chunk.js.map