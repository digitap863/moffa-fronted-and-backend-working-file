(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[22],{507:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(null);t.a=r},519:function(e,t,n){"use strict";var a=function(){};e.exports=a},520:function(e,t,n){"use strict";var a=n(0);var r=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=r(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}n.d(t,"a",(function(){return o}))},522:function(e,t,n){"use strict";var a,r=n(6),o=n(15),c=n(493),i=n.n(c),l=n(540),s=n(0),u=n.n(s),d=n(23),f=n(541),b=((a={})[d.b]="show",a[d.a]="show",a),m=u.a.forwardRef((function(e,t){var n=e.className,a=e.children,c=Object(o.a)(e,["className","children"]),m=Object(s.useCallback)((function(e){Object(f.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return u.a.createElement(d.e,Object(r.a)({ref:t,addEndListener:l.a},c,{onEnter:m}),(function(e,t){return u.a.cloneElement(a,Object(r.a)({},t,{className:i()("fade",n,a.props.className,b[e])}))}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",t.a=m},523:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return a(e.querySelectorAll(t))}},524:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function a(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,n);null!=t&&(r=t)}})),r}return(0,o.default)(a)};var a,r=n(525),o=(a=r)&&a.__esModule?a:{default:a};e.exports=t.default},525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,a,r,o,c){var i=r||"<<anonymous>>",l=c||a;if(null==n[a])return t?new Error("Required "+o+" `"+l+"` was not specified in `"+i+"`."):null;for(var s=arguments.length,u=Array(s>6?s-6:0),d=6;d<s;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,a,i,o,l].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},526:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(){return Object(a.useReducer)((function(e){return!e}),!1)[1]}},527:function(e,t,n){"use strict";var a=n(0),r=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=r(e),a=r(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])}},528:function(e,t,n){"use strict";var a=n(6),r=n(15),o=n(493),c=n.n(o),i=(n(524),n(0)),l=n.n(i),s=n(512),u=n(496),d=l.a.createContext(null),f=n(530),b=n(523),m=n(526),v=n(527),p=l.a.createContext(null),E=n(501),O=n(507),j=function(){},y=l.a.forwardRef((function(e,t){var n,o,c=e.as,s=void 0===c?"ul":c,u=e.onSelect,d=e.activeKey,f=e.role,y=e.onKeyDown,g=Object(r.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),h=Object(m.a)(),x=Object(i.useRef)(!1),w=Object(i.useContext)(E.a),N=Object(i.useContext)(O.a);N&&(f=f||"tablist",d=N.activeKey,n=N.getControlledId,o=N.getControllerId);var C=Object(i.useRef)(null),K=function(e){if(!C.current)return null;var t=Object(b.a)(C.current,"[data-rb-event-key]:not(.disabled)"),n=C.current.querySelector(".active"),a=t.indexOf(n);if(-1===a)return null;var r=a+e;return r>=t.length&&(r=0),r<0&&(r=t.length-1),t[r]},P=function(e,t){null!=e&&(u&&u(e,t),w&&w(e,t))};Object(i.useEffect)((function(){if(C.current&&x.current){var e=C.current.querySelector("[data-rb-event-key].active");e&&e.focus()}x.current=!1}));var I=Object(v.a)(t,C);return l.a.createElement(E.a.Provider,{value:P},l.a.createElement(p.Provider,{value:{role:f,activeKey:Object(E.b)(d),getControlledId:n||j,getControllerId:o||j}},l.a.createElement(s,Object(a.a)({},g,{onKeyDown:function(e){var t;switch(y&&y(e),e.key){case"ArrowLeft":case"ArrowUp":t=K(-1);break;case"ArrowRight":case"ArrowDown":t=K(1);break;default:return}t&&(e.preventDefault(),P(t.dataset.rbEventKey,e),x.current=!0,h())},ref:I,role:f}))))})),g=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.children,s=e.as,d=void 0===s?"div":s,f=Object(r.a)(e,["bsPrefix","className","children","as"]);return n=Object(u.b)(n,"nav-item"),l.a.createElement(d,Object(a.a)({},f,{ref:t,className:c()(o,n)}),i)}));g.displayName="NavItem";var h=g,x=n(531);function w(e){return!e||"#"===e.trim()}var N=l.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,c=e.disabled,i=e.onKeyDown,s=Object(r.a)(e,["as","disabled","onKeyDown"]),u=function(e){var t=s.href,n=s.onClick;(c||w(t))&&e.preventDefault(),c?e.stopPropagation():n&&n(e)};return w(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),c&&(s.tabIndex=-1,s["aria-disabled"]=!0),l.a.createElement(o,Object(a.a)({ref:t},s,{onClick:u,onKeyDown:Object(x.a)((function(e){" "===e.key&&(e.preventDefault(),u(e))}),i)}))}));N.displayName="SafeAnchor";var C=N,K=n(520),P=(n(519),l.a.forwardRef((function(e,t){var n=e.active,o=e.className,s=e.tabIndex,u=e.eventKey,d=e.onSelect,f=e.onClick,b=e.as,m=Object(r.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),v=Object(E.b)(u,m.href),O=Object(i.useContext)(E.a),j=Object(i.useContext)(p),y=n;if(j){m.role||"tablist"!==j.role||(m.role="tab");var g=j.getControllerId(v),h=j.getControlledId(v);m["data-rb-event-key"]=v,m.id=g||m.id,m["aria-controls"]=h||m["aria-controls"],y=null==n&&null!=v?j.activeKey===v:n}"tab"===m.role&&(m.tabIndex=y?s:-1,m["aria-selected"]=y);var x=Object(K.a)((function(e){f&&f(e),null!=v&&(d&&d(v,e),O&&O(v,e))}));return l.a.createElement(b,Object(a.a)({},m,{ref:t,onClick:x,className:c()(o,y&&"active")}))})));P.defaultProps={disabled:!1};var I=P,k={disabled:!1,as:C},S=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.disabled,i=e.className,s=e.href,d=e.eventKey,f=e.onSelect,b=e.as,m=Object(r.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(u.b)(n,"nav-link"),l.a.createElement(I,Object(a.a)({},m,{href:s,ref:t,eventKey:d,as:b,disabled:o,onSelect:f,className:c()(i,n,o&&"disabled")}))}));S.displayName="NavLink",S.defaultProps=k;var R=S,T=l.a.forwardRef((function(e,t){var n,o,b,m=Object(s.a)(e,{activeKey:"onSelect"}),v=m.as,p=void 0===v?"div":v,E=m.bsPrefix,O=m.variant,j=m.fill,g=m.justify,h=m.navbar,x=m.className,w=m.children,N=m.activeKey,C=Object(r.a)(m,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);E=Object(u.b)(E,"nav");var K=Object(i.useContext)(d),P=Object(i.useContext)(f.a);return K?(o=K.bsPrefix,h=null==h||h):P&&(b=P.cardHeaderBsPrefix),l.a.createElement(y,Object(a.a)({as:p,ref:t,activeKey:N,className:c()(x,(n={},n[E]=!h,n[o+"-nav"]=h,n[b+"-"+O]=!!b,n[E+"-"+O]=!!O,n[E+"-fill"]=j,n[E+"-justified"]=g,n))},C),w)}));T.displayName="Nav",T.defaultProps={justify:!1,fill:!1},T.Item=h,T.Link=R;t.a=T},529:function(e,t,n){"use strict";var a=n(12),r=n(0),o=n.n(r),c=n(512),i=n(507),l=n(501),s=function(e){var t=Object(c.a)(e,{activeKey:"onSelect"}),n=t.id,a=t.generateChildId,s=t.onSelect,u=t.activeKey,d=t.transition,f=t.mountOnEnter,b=t.unmountOnExit,m=t.children,v=Object(r.useMemo)((function(){return a||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,a]),p=Object(r.useMemo)((function(){return{onSelect:s,activeKey:u,transition:d,mountOnEnter:f,unmountOnExit:b,getControlledId:function(e){return v(e,"tabpane")},getControllerId:function(e){return v(e,"tab")}}}),[s,u,d,f,b,v]);return o.a.createElement(i.a.Provider,{value:p},o.a.createElement(l.a.Provider,{value:s},m))},u=n(6),d=n(15),f=n(493),b=n.n(f),m=n(496),v=o.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.as,r=void 0===a?"div":a,c=e.className,i=Object(d.a)(e,["bsPrefix","as","className"]),l=Object(m.b)(n,"tab-content");return o.a.createElement(r,Object(u.a)({ref:t},i,{className:b()(c,l)}))})),p=n(522);var E=o.a.forwardRef((function(e,t){var n=function(e){var t=Object(r.useContext)(i.a);if(!t)return e;var n=t.activeKey,a=t.getControlledId,o=t.getControllerId,c=Object(d.a)(t,["activeKey","getControlledId","getControllerId"]),s=!1!==e.transition&&!1!==c.transition,f=Object(l.b)(e.eventKey);return Object(u.a)({},e,{active:null==e.active&&null!=f?Object(l.b)(n)===f:e.active,id:a(e.eventKey),"aria-labelledby":o(e.eventKey),transition:s&&(e.transition||c.transition||p.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:c.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:c.unmountOnExit})}(e),a=n.bsPrefix,c=n.className,s=n.active,f=n.onEnter,v=n.onEntering,E=n.onEntered,O=n.onExit,j=n.onExiting,y=n.onExited,g=n.mountOnEnter,h=n.unmountOnExit,x=n.transition,w=n.as,N=void 0===w?"div":w,C=(n.eventKey,Object(d.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),K=Object(m.b)(a,"tab-pane");if(!s&&!x&&h)return null;var P=o.a.createElement(N,Object(u.a)({},C,{ref:t,role:"tabpanel","aria-hidden":!s,className:b()(c,K,{active:s})}));return x&&(P=o.a.createElement(x,{in:s,onEnter:f,onEntering:v,onEntered:E,onExit:O,onExiting:j,onExited:y,mountOnEnter:g,unmountOnExit:h},P)),o.a.createElement(i.a.Provider,{value:null},o.a.createElement(l.a.Provider,{value:null},P))}));E.displayName="TabPane";var O=E,j=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);j.Container=s,j.Content=v,j.Pane=O;t.a=j},789:function(e,t,n){"use strict";n.r(t);var a=n(497),r=n.n(a),o=n(498),c=n(492),i=n(0),l=n.n(i),s=n(504),u=n.n(s),d=n(105),f=n(150),b=n(529),m=n(528),v=n(500),p=n(502),E=n(561),O=n(148),j=n(17),y=n(153),g=n(45),h=n(151),x=n(65),w=n(106),N=n(155),C=n(152),K=n(149),P=n.n(K),I=n(86),k=n(67);t.default=Object(x.connect)((function(e){return{user:e.userData.user}}),(function(e){return{addToCart:function(t,n,a,r,o){e(Object(k.e)(t,n,a,r,o))},addToWishlist:function(t,n){e(Object(I.d)(t,n))}}}))((function(e){var t=e.location,n=e.user,a=e.addToCart,s=Object(i.useState)([]),x=Object(c.a)(s,2),K=(x[0],x[1],Object(i.useState)({})),I=Object(c.a)(K,2),k=(I[0],I[1],Object(i.useState)(!1)),S=Object(c.a)(k,2),R=(S[0],S[1],t.pathname),T=Object(O.useToasts)().addToast,D=Object(j.f)(),L=Object(E.a)(),q=L.register,A=L.handleSubmit,M=L.trigger,_=L.formState.errors;Object(i.useEffect)((function(){n&&(n.cartItems.map((function(e){a(e.product,null,e.quantity,e.selectedcolor,e.selectedsize)})),D.push("/"))}),[]);var F=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.phone,a=t.password,e.prev=2,o={headers:{"Content-type":"application/json"}},e.next=6,P.a.post("/api/user/login",{phone:n,password:a},o);case 6:c=e.sent,i=c.data,Object(g.createStore)(y.a,Object(w.load)(),Object(C.composeWithDevTools)(Object(g.applyMiddleware)(h.a,Object(w.save)()))).dispatch(Object(N.b)(i)),T("Success",{appearance:"success",autoDismiss:!0}),window.location.reload(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),T(e.t0.response.data,{appearance:"error",autoDismiss:!0});case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(O.ToastProvider,null,l.a.createElement(i.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("title",null,"Thepaaki | Login"),l.a.createElement("meta",{name:"description",content:"Login page of thepaaki website"})),l.a.createElement(f.BreadcrumbsItem,{to:"/"},"Home"),l.a.createElement(f.BreadcrumbsItem,{to:""+R},"Login-Register"),l.a.createElement(v.a,{headerTop:"visible"},l.a.createElement(p.a,null),l.a.createElement("div",{className:"login-register-area pt-100 pb-100"},l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},l.a.createElement("div",{className:"login-register-wrapper"},l.a.createElement(b.a.Container,{defaultActiveKey:"login"},l.a.createElement(m.a,{variant:"pills",className:"login-register-tab-list"},l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,{eventKey:"login"},l.a.createElement(d.b,{to:"/login-reagister"},l.a.createElement("h4",null,"Login")))),l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,{eventKey:"register"},l.a.createElement(d.b,{to:"/register"},l.a.createElement("h4",null,"Register"))))),l.a.createElement(b.a.Content,null,l.a.createElement("useGoogleOneTapLogin",null),l.a.createElement(b.a.Pane,{eventKey:"login"},l.a.createElement("div",{className:"login-form-container"},l.a.createElement("div",{className:"login-register-form"},l.a.createElement("form",{onSubmit:A(F),class:"p-3 mt-3"},l.a.createElement("input",Object.assign({type:"text",placeholder:"Phone"},q("phone",{required:"Phone Is Required",pattern:{value:/^[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/,message:"Invalid Phone Number"}}),{onKeyUp:function(){M("phone")}})),_.phone&&l.a.createElement("small",{className:"text-danger"},_.phone.message),l.a.createElement("input",Object.assign({autoComplete:"off",type:"password",name:"user-password",placeholder:"Password"},q("password",{required:"password is required"}),{onKeyUp:function(){M("password")}})),_.password&&l.a.createElement("small",{className:"text-danger"},_.password.message),l.a.createElement("div",{className:"button-box"},l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},l.a.createElement("span",null,"Login"))),l.a.createElement("div",null,l.a.createElement(d.b,{to:"/otp-login"},l.a.createElement("button",null,"OTP LOGIN")))))))))))))))))))}))}}]);
//# sourceMappingURL=22.716ba004.chunk.js.map