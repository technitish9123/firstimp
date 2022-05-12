(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[30],{1191:function(t,e,n){},1230:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(1190),c=n(624),s=n(13),o=n.n(s),u=n(31),i=n(46),p=n(19),l=n(37),d=n(25),h=n.n(d),f=function(){var t=Object(u.a)(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("".concat("http://localhost:8000/api","/create-payment-integration"),{couponApplied:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),b=n(8),j=n(1231),m=n(247),O=n(1247),x=n(630),y=n(225),v=n(9),g=n(237),k=n(2),w=function(){var t=Object(l.c)((function(t){return Object(p.a)({},t)})),e=t.user,n=t.coupon,a=t.pageState,s=t.shippingAdd,d=Object(l.b)(),h=Object(v.f)(),w=Object(r.useState)(!1),S=Object(i.a)(w,2),N=S[0],C=S[1],I=Object(r.useState)(null),A=Object(i.a)(I,2),E=A[0],P=A[1],F=Object(r.useState)(""),D=Object(i.a)(F,2),T=D[0],_=D[1],L=Object(r.useState)(!0),Y=Object(i.a)(L,2),B=Y[0],G=Y[1],J=Object(r.useState)(""),R=Object(i.a)(J,2),z=R[0],H=R[1],W=Object(r.useState)(0),Z=Object(i.a)(W,2),K=Z[0],Q=Z[1],U=Object(r.useState)(0),V=Object(i.a)(U,2),q=V[0],M=V[1],X=Object(r.useState)(0),$=Object(i.a)(X,2),tt=$[0],et=$[1],nt=Object(c.useStripe)(),rt=Object(c.useElements)(),at={shippingAdd:s},ct=function(){var t=Object(u.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),_(!0),nt&&rt){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,nt.confirmCardPayment(z,{payment_method:{card:rt.getElement(c.CardElement),billing_details:{name:e.name,email:e.email}}});case 6:if(r=t.sent,console.log(s),!r.error){t.next=21;break}return t.t0=P,t.t1="Payment Failed ",t.next=13,r;case 13:t.t2=t.sent.error.message,t.t3=t.t1.concat.call(t.t1,t.t2),(0,t.t0)(t.t3),console.log(E),_(!1),t.next=41;break;case 21:if("succeeded"!==r.paymentIntent.status){t.next=36;break}return t.t4=r.paymentIntent.id,t.t5=r.paymentIntent.status,t.next=26,r;case 26:return t.t6=t.sent.paymentIntent,at.paymentInfo={id:t.t4,status:t.t5,stripeResponse:t.t6},t.t7=console,t.next=31,r;case 31:t.t8=t.sent.paymentIntent,t.t7.log.call(t.t7,t.t8),Object(g.c)(at,e.token).then((function(t){t.data.ok&&(void 0!==typeof window&&localStorage.removeItem("cart"),void 0!==typeof window&&localStorage.removeItem("shippingAddress"),d({type:"ADD_TO_CART",payload:[]}),d({type:"SHIPPING_ADDRESS",payload:null}),Object(g.d)(e.token),d({type:"COUPON_APPLIED",payload:!1}))})),t.next=37;break;case 36:alert.error("There's some issue while processing payment ");case 37:console.log(r),P(null),_(!1),C(!0);case 41:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),st=function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(e.error?e.error.message:""),G(e.empty);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){f(e.token,n).then((function(t){console.log(t.data),H(t.data.clientSecret),Q(t.data.cartTotal),M(t.data.totalAfterDiscount),et(t.data.payable)}))}),[]),Object(k.jsx)(k.Fragment,{children:a?Object(k.jsxs)("form",{id:"payment-form",className:"stripe-form",onSubmit:ct,children:[!N&&Object(k.jsx)("div",{children:n&&void 0!==q?Object(k.jsxs)("p",{className:"alert alert-success",children:["Coupon Applied. You Save: \u20b9",(K-q).toLocaleString("en-IN")]}):Object(k.jsx)("p",{className:"alert alert-danger",children:"No Coupon Applied"})}),Object(k.jsx)("div",{className:"text-center pb-5",children:Object(k.jsx)(j.a,{cover:Object(k.jsx)("img",{src:y.a,style:{height:"50px",objectFit:"cover",marginBottom:"-50px"}}),actions:[Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(O.a,{className:"text-info mt-1"}),Object(k.jsx)("br",{})," Total : \u20b9 ",K.toLocaleString("en-IN")]}),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(x.a,{className:"text-info mt-1"}),Object(k.jsx)("br",{})," payable: \u20b9 ",(tt/100).toLocaleString("en-IN")]})]})}),Object(k.jsx)(c.CardElement,{id:"card-element",onChange:st,options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}}),Object(k.jsx)("button",{className:"stripe-button",disabled:T||B||T,children:Object(k.jsx)("span",{id:"button-text",children:T?Object(k.jsx)("div",{className:"spinner",id:"sinner"}):"Pay"})}),Object(k.jsx)("br",{}),E?Object(k.jsx)("div",{className:"card-error text-danger",role:"alert",children:E}):" ",Object(k.jsxs)("p",{className:N?"result-message":"result-message hidden",children:["Payment Successful"," ",Object(k.jsx)(m.a,{type:"link",className:N?"result-message":"result-message hidden",onClick:function(){h.push("/user/history"),d({type:"SESSION",payload:!1})},children:"Check Your Order status here"})]})]}):Object(k.jsx)("div",{className:"h-100 w-100",children:Object(k.jsxs)("p",{className:"alert alert-secondary mx-auto my-auto",children:["Session Expired. ",Object(k.jsx)(b.b,{to:"/cart",children:"Try Again."})]})})})},S=(n(1191),Object(a.a)("pk_test_51JzfLZSC0ElNP4bYmxjQ0TKZg9mCmCTWjL1COYjfI9nJaHA16VWC3oGB8Pehw7w3P6FrBOuOFegj5Ywvbb81EOG100BkGmnvo9"));e.default=function(){return Object(k.jsxs)("div",{className:"container p-5 text-center",children:[Object(k.jsx)("h4",{children:"Complete your purchase"}),Object(k.jsx)("p",{className:"text-secondary",children:'"Do not Refresh or Navigate"'}),Object(k.jsx)("p",{className:"text-secondary",children:"For testing purposes :- use Card number as : 4242 4242 4242 4242 "}),Object(k.jsx)(c.Elements,{stripe:S,children:Object(k.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(k.jsx)(w,{})})})]})}},225:function(t,e,n){"use strict";e.a=n.p+"static/media/laptop.0ec78e2c.png"},237:function(t,e,n){"use strict";n.d(e,"i",(function(){return u})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"f",(function(){return h})),n.d(e,"a",(function(){return f})),n.d(e,"g",(function(){return b})),n.d(e,"h",(function(){return j}));var r=n(13),a=n.n(r),c=n(31),s=n(25),o=n.n(s),u=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("http://localhost:8000/api","/user/cart"),{cart:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),i=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("http://localhost:8000/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("".concat("http://localhost:8000/api","/user/cart"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("http://localhost:8000/api","/user/cart/coupon"),e,{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("http://localhost:8000/api","/user/order"),{paymentIntent:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("http://localhost:8000/api","/user/orders"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("http://localhost:8000/api","/user/wishlist"),{productId:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat("http://localhost:8000/api","/user/wishlist"),{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("".concat("http://localhost:8000/api","/user/wishlist/").concat(n),{},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=30.bc3d2577.chunk.js.map