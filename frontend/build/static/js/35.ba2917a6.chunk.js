(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[35],{776:function(e,a,t){"use strict";t.r(a);var l=t(497),n=t.n(l),r=t(498),c=t(492),s=t(0),i=t.n(s),o=t(105),m=t(148),d=t(504),u=t.n(d),v=t(150),E=t(500),p=t(502),b=t(65),N=t(149),f=t.n(N),h=t(17);a.default=Object(b.connect)((function(e){return{currency:e.currencyData,user:e.userData.user}}))((function(e){var a=e.location,t=e.user,l=Object(m.useToasts)().addToast,d=a.pathname,b=Object(s.useState)([]),N=Object(c.a)(b,2),g=N[0],O=N[1],y=Object(s.useState)([]),A=Object(c.a)(y,2),T=A[0],w=A[1],x=null===t||void 0===t?void 0:t.CUST_ID;Object(h.f)();return Object(s.useEffect)((function(){Object(r.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/user/get-my-orders/".concat(x));case 3:a=e.sent,t=a.data,O(t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),Object(s.useEffect)((function(){Object(r.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/user/view-my-orders-products");case 3:a=e.sent,t=a.data,w(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l("Somthing Went Wrong",{appearance:"success",autoDismiss:!0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),i.a.createElement(s.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,"Thepaaki | MyOrders"),i.a.createElement("meta",{name:"description",content:"Myorders page of thepaaki website"})),i.a.createElement(v.BreadcrumbsItem,{to:"/"},"Home"),i.a.createElement(v.BreadcrumbsItem,{to:""+d},"MyOrders"),i.a.createElement(E.a,{headerTop:"visible"},i.a.createElement(p.a,null),i.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},i.a.createElement("div",{className:"container"},g&&g.length>=1&&T.length>=1?i.a.createElement(s.Fragment,null,g.map((function(e,a){var l,n,r,c,o,m,d,u,v;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"cart-page-title mt-4",key:a},"ORDER DATE:",e.Date,i.a.createElement("br",null),"ORDER ID:",e.Id,i.a.createElement("br",null),e.wallet?i.a.createElement(i.a.Fragment,null,"AMOUNT :",parseInt(null===e||void 0===e?void 0:e.Total)+parseInt(e.wallet)):i.a.createElement(i.a.Fragment,null,"AMOUNT:",e.Total),(null===e||void 0===e?void 0:e.wallet)&&i.a.createElement("p",null,"WALLET APPLY AMOUNT:",e.wallet)),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"table-content table-responsive cart-table-content"},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Image"),i.a.createElement("th",null,"Product Name"),i.a.createElement("th",null,"QTY"),i.a.createElement("th",null,"AMOUNT"),i.a.createElement("th",null,"TOTAL"),i.a.createElement("th",null,"STATUS"))),null===e||void 0===e?void 0:e.Product.map((function(a,l){var n,r,c,o=T.find((function(e){return e.id===a.ProductID}));if(o.variation.map((function(e){e.color==(null===a||void 0===a?void 0:a.color)&&(n=e.image)})),1==t.user)if(null===a||void 0===a?void 0:a.offer){var m=(null===o||void 0===o?void 0:o.price)*(null===a||void 0===a?void 0:a.offer)/100;r=null===o||void 0===o?void 0:o.price,c=(null===o||void 0===o?void 0:o.price)-m}else if(null===o||void 0===o?void 0:o.discount){var d=(null===o||void 0===o?void 0:o.price)*(null===o||void 0===o?void 0:o.discount)/100;r=null===o||void 0===o?void 0:o.price,c=(null===o||void 0===o?void 0:o.price)-d}else c=null===o||void 0===o?void 0:o.price;else r=null===o||void 0===o?void 0:o.price,c=null===o||void 0===o?void 0:o.wholesaler;return i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{className:"product-thumbnail"},i.a.createElement("img",{style:{height:"150px",width:"120px"},className:"img-fluid",src:n,alt:""})),i.a.createElement("td",{className:"product-name"},null===o||void 0===o?void 0:o.name,i.a.createElement("div",{className:"cart-item-variation"},i.a.createElement("span",null,"Color: ",null===a||void 0===a?void 0:a.color),i.a.createElement("span",null,"Size: ",null===a||void 0===a?void 0:a.size))),i.a.createElement("td",{className:"product-price-cart"},i.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:null===a||void 0===a?void 0:a.quantity,readOnly:!0})),i.a.createElement("td",{className:"product-price-cart"},i.a.createElement(s.Fragment,null," ",r&&i.a.createElement("span",{className:"amount old"},"\u20b9"+r),i.a.createElement("span",{className:"amount"},"\u20b9"+c))),i.a.createElement("td",{className:"product-quantity"},i.a.createElement("span",{className:"amount"},"\u20b9"+a.quantity*c)),"Pending"==e.status?i.a.createElement("td",null,i.a.createElement("a",{className:"text-danger"},e.status)):i.a.createElement("td",null,i.a.createElement("a",{className:"text-success"},e.status))))})),i.a.createElement("div",{className:"row",style:{marginLeft:"1rem"}},i.a.createElement("div",{className:"col-6"},i.a.createElement("b",null,"TO:"),i.a.createElement("br",null),i.a.createElement("p",null,(null===(l=e.Address)||void 0===l?void 0:l.Name)+","+(null===(n=e.Address)||void 0===n?void 0:n.LastName),",",i.a.createElement("br",null),null===(r=e.Address)||void 0===r?void 0:r.StreetAddress,",",e.Address.State,",",null===(c=e.Address)||void 0===c?void 0:c.TownCity,",",null===(o=e.Address)||void 0===o?void 0:o.Pincode,",",i.a.createElement("br",null),null===(m=e.Address)||void 0===m?void 0:m.Email,",",i.a.createElement("br",null),null===(d=e.Address)||void 0===d?void 0:d.PhoneNumber,",",i.a.createElement("br",null),(null===(u=e.Address)||void 0===u?void 0:u.message)&&i.a.createElement("b",null,null===(v=e.Address)||void 0===v?void 0:v.message)))))))))}))):i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"item-empty-area text-center"},i.a.createElement("div",{className:"item-empty-area__icon mb-30"},i.a.createElement("i",{className:"pe-7s-cart"})),i.a.createElement("div",{className:"item-empty-area__text"},"No items found ",i.a.createElement("br",null)," ",i.a.createElement(o.b,{to:"/shop-grid-standard"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=35.ba2917a6.chunk.js.map