(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[23],{116:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(125);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},120:function(t,e,n){var r=n(139),a="object"==typeof self&&self&&self.Object===Object&&self,c=r||a||Function("return this")();t.exports=c},121:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},1216:function(t,e,n){"use strict";n.r(e);var r=n(31),a=n(116),c=n(0),i=n(168),o=n(205),s=n(181),u=n(1209),l=n(157),p=n(978),f=n(509),d=n(30),b=n(1),v=u.a.Meta,h=function(t){var e=t.product,n=t.handleDeleteProduct,r=e.images,a=e.description,c=e.slug,i=e.title;return Object(b.jsx)(u.a,{cover:Object(b.jsx)("img",{src:r&&r.length>0?r[0].url:l.a,style:{height:"200px",objectFit:"cover"},className:"p-1"}),actions:[Object(b.jsx)(d.b,{to:"/admin/product/".concat(c),children:Object(b.jsx)(p.a,{className:"text-primary"})}),Object(b.jsx)(f.a,{className:"text-danger",onClick:function(){return n(c,i)}})],children:Object(b.jsx)(v,{title:i,description:"".concat(a&&a.substring(0,50),"...")})})},m=n(25),j=n(43);e.default=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],u=e[1],l=Object(c.useState)(!1),p=Object(a.a)(l,2),f=p[0],d=p[1],v=Object(m.c)((function(t){return Object(r.a)({},t)})).user;Object(c.useEffect)((function(){O()}),[]);var O=function(){d(!0),Object(o.f)(100).then((function(t){d(!1),u(t.data)})).catch((function(t){d(!1),console.log(t)}))},x=function(t,e){d(!0),Object(o.b)(t,v.token).then((function(t){d(!1),console.log(t),j.b.error("".concat(e," successfully deleted")),O()})).catch((function(t){d(!1),j.b.error(t.response.data.err),console.log(t)}))};return Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-2",children:Object(b.jsx)(i.a,{})}),Object(b.jsxs)("div",{className:"col",children:[f?Object(b.jsx)(s.a,{}):Object(b.jsx)("h1",{children:"All Products"}),Object(b.jsx)("div",{className:"row",children:n.map((function(t){return Object(b.jsx)("div",{className:"col-md-4 pb-3",children:Object(b.jsx)(h,{product:t,handleDeleteProduct:x})},t._id)}))})]})]})})}},124:function(t,e,n){var r=n(120).Symbol;t.exports=r},125:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(126);function a(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},126:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},135:function(t,e,n){var r=n(124),a=n(143),c=n(144),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?a(t):c(t)}},136:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},137:function(t,e,n){var r=n(135),a=n(136);t.exports=function(t){return"symbol"==typeof t||a(t)&&"[object Symbol]"==r(t)}},139:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(24))},140:function(t,e,n){var r=n(141),a=n(121),c=n(137),i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(c(t))return NaN;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=o.test(t);return n||s.test(t)?u(t.slice(2),n?2:8):i.test(t)?NaN:+t}},141:function(t,e,n){var r=n(142),a=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(a,""):t}},142:function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},143:function(t,e,n){var r=n(124),a=Object.prototype,c=a.hasOwnProperty,i=a.toString,o=r?r.toStringTag:void 0;t.exports=function(t){var e=c.call(t,o),n=t[o];try{t[o]=void 0;var r=!0}catch(s){}var a=i.call(t);return r&&(e?t[o]=n:delete t[o]),a}},144:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},146:function(t,e,n){var r=n(121),a=n(147),c=n(140),i=Math.max,o=Math.min;t.exports=function(t,e,n){var s,u,l,p,f,d,b=0,v=!1,h=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function j(e){var n=s,r=u;return s=u=void 0,b=e,p=t.apply(r,n)}function O(t){return b=t,f=setTimeout(y,e),v?j(t):p}function x(t){var n=t-d;return void 0===d||n>=e||n<0||h&&t-b>=l}function y(){var t=a();if(x(t))return g(t);f=setTimeout(y,function(t){var n=e-(t-d);return h?o(n,l-(t-b)):n}(t))}function g(t){return f=void 0,m&&s?j(t):(s=u=void 0,p)}function N(){var t=a(),n=x(t);if(s=arguments,u=this,d=t,n){if(void 0===f)return O(d);if(h)return clearTimeout(f),f=setTimeout(y,e),j(d)}return void 0===f&&(f=setTimeout(y,e)),p}return e=c(e)||0,r(n)&&(v=!!n.leading,l=(h="maxWait"in n)?i(c(n.maxWait)||0,e):l,m="trailing"in n?!!n.trailing:m),N.cancel=function(){void 0!==f&&clearTimeout(f),b=0,s=d=u=f=void 0},N.flush=function(){return void 0===f?p:g(a())},N}},147:function(t,e,n){var r=n(120);t.exports=function(){return r.Date.now()}},157:function(t,e,n){"use strict";e.a=n.p+"static/media/laptop.0ec78e2c.png"},168:function(t,e,n){"use strict";n(0);var r=n(30),a=n(1);e.a=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"nav flex-column",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/product",className:"nav-link",children:"Product"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/products",className:"nav-link",children:"Products"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/category",className:"nav-link",children:"Category"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/sub",className:"nav-link",children:"Sub Category"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/admin/coupon",className:"nav-link",children:"Coupon"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/user/password",className:"nav-link",children:"Password"})})]})})}},181:function(t,e,n){"use strict";var r=n(108),a=n(110),c=n(123),i=n(129),o=n(132),s=n(131),u=n(0),l=n(39),p=n.n(l),f=n(122),d=n(146),b=n.n(d),v=n(328),h=n(128),m=n(118),j=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n},O=(Object(h.a)("small","default","large"),null);var x=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(t){var i;Object(c.a)(this,n),(i=e.call(this,t)).debouncifyUpdateSpinning=function(t){var e=(t||i.props).delay;e&&(i.cancelExistingSpin(),i.updateSpinning=b()(i.originalUpdateSpinning,e))},i.updateSpinning=function(){var t=i.props.spinning;i.state.spinning!==t&&i.setState({spinning:t})},i.renderSpin=function(t){var e,n=t.getPrefixCls,c=t.direction,o=i.props,s=o.prefixCls,l=o.className,d=o.size,b=o.tip,v=o.wrapperClassName,h=o.style,x=j(o,["prefixCls","className","size","tip","wrapperClassName","style"]),y=i.state.spinning,g=n("spin",s),N=p()(g,(e={},Object(a.a)(e,"".concat(g,"-sm"),"small"===d),Object(a.a)(e,"".concat(g,"-lg"),"large"===d),Object(a.a)(e,"".concat(g,"-spinning"),y),Object(a.a)(e,"".concat(g,"-show-text"),!!b),Object(a.a)(e,"".concat(g,"-rtl"),"rtl"===c),e),l),w=Object(f.a)(x,["spinning","delay","indicator"]),k=u.createElement("div",Object(r.a)({},w,{style:h,className:N}),function(t,e){var n=e.indicator,r="".concat(t,"-dot");return null===n?null:Object(m.b)(n)?Object(m.a)(n,{className:p()(n.props.className,r)}):Object(m.b)(O)?Object(m.a)(O,{className:p()(O.props.className,r)}):u.createElement("span",{className:p()(r,"".concat(t,"-dot-spin"))},u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}))}(g,i.props),b?u.createElement("div",{className:"".concat(g,"-text")},b):null);if(i.isNestedPattern()){var S=p()("".concat(g,"-container"),Object(a.a)({},"".concat(g,"-blur"),y));return u.createElement("div",Object(r.a)({},w,{className:p()("".concat(g,"-nested-loading"),v)}),y&&u.createElement("div",{key:"loading"},k),u.createElement("div",{className:S,key:"container"},i.props.children))}return k};var o=t.spinning,s=function(t,e){return!!t&&!!e&&!isNaN(Number(e))}(o,t.delay);return i.state={spinning:o&&!s},i.originalUpdateSpinning=i.updateSpinning,i.debouncifyUpdateSpinning(t),i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var t=this.updateSpinning;t&&t.cancel&&t.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return u.createElement(v.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(t){O=t}}]),n}(u.Component);x.defaultProps={spinning:!0,size:"default",wrapperClassName:""},e.a=x},205:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"d",(function(){return p})),n.d(e,"j",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"g",(function(){return b})),n.d(e,"i",(function(){return v})),n.d(e,"h",(function(){return h})),n.d(e,"c",(function(){return m}));var r=n(13),a=n.n(r),c=n(19),i=n(26),o=n.n(i),s=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("http://localhost:8000/api","/product"),e,{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),u=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("http://localhost:8000/api","/products/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("".concat("http://localhost:8000/api","/product/").concat(e),{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("http://localhost:8000/api","/product/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("".concat("http://localhost:8000/api","/product/").concat(e),n,{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("http://localhost:8000/api","/products"),{sort:e,order:n,page:r});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("http://localhost:8000/api","/products/total"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("".concat("http://localhost:8000/api","/product/star/").concat(e),{star:n},{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("http://localhost:8000/api","/product/related/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("http://localhost:8000/api","/search/filters"),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},509:function(t,e,n){"use strict";var r=n(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},c=n(40),i=function(t,e){return r.createElement(c.a,Object.assign({},t,{ref:e,icon:a}))};i.displayName="DeleteOutlined";e.a=r.forwardRef(i)},978:function(t,e,n){"use strict";var r=n(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},c=n(40),i=function(t,e){return r.createElement(c.a,Object.assign({},t,{ref:e,icon:a}))};i.displayName="EditOutlined";e.a=r.forwardRef(i)}}]);
//# sourceMappingURL=23.f2f3fb83.chunk.js.map