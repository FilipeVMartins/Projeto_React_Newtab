(this.webpackJsonpprojeto_react=this.webpackJsonpprojeto_react||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(20),r=n.n(a),i=(n(26),n(11)),o=n.n(i),l=n(13),u=n(6),d=n(7),h=n(9),p=n(8),j=n(15),b=n(2),m=n.p+"static/media/logo2.9050ce99.png",O=(n(28),n(0)),f=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"page-title",children:[Object(O.jsx)("h2",{children:this.props.title}),this.props.scroll?Object(O.jsxs)("div",{onClick:this.props.scrollFunction,children:[Object(O.jsx)("p",{children:"Back To Top"}),Object(O.jsx)("i",{className:"fa fa-arrow-circle-up","aria-hidden":"true"})]}):null]})}}]),n}(c.a.Component),x=(n(30),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsx)("button",{className:this.props.classN,onClick:this.props.onClickFunction,children:this.props.displayText})}}]),n}(c.a.Component)),v=(n(31),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"closeFunction",value:function(e){e.target.parentNode.parentNode.parentNode.style.display="none"}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"payment-modal-wrapper",children:[Object(O.jsxs)("div",{className:"payment-modal",children:[Object(O.jsxs)("div",{className:"modal-title",children:[Object(O.jsxs)("p",{children:["Pagamento para ",Object(O.jsx)("span",{children:this.props.username})]}),Object(O.jsx)("i",{className:"fa fa-times-circle","aria-hidden":"true",onClick:function(t){return e.closeFunction(t)}})]}),Object(O.jsxs)("div",{className:"modal-body",children:[Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"number",placeholder:"R$ 0,00"})}),Object(O.jsx)("div",{children:Object(O.jsxs)("select",{children:[Object(O.jsx)("option",{children:"AAA"}),Object(O.jsx)("option",{children:"BBB"})]})}),Object(O.jsx)("div",{children:Object(O.jsx)(x,{classN:"pay-button",displayText:"Pagar"})})]})]}),Object(O.jsx)("div",{className:"screen-block"})]})}}]),n}(c.a.Component)),g=(n(32),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={usersData:[],contentScrollIndex:6},e.handleContentScroll=function(t){var n=t.target;n.scrollHeight-n.scrollTop===n.clientHeight&&(e.state.contentScrollIndex<=e.state.usersData.length?(console.log("end of scroll at scroll-index ".concat(e.state.contentScrollIndex," rendering new users...")),e.setState({contentScrollIndex:e.state.contentScrollIndex+4})):console.log("end of scroll at scroll-index ".concat(e.state.contentScrollIndex," there are no more users to be rendered...")))},e.contentScrollToTop=function(e){window.scrollTo({top:0,behavior:"smooth"}),document.querySelector(".user-list").scrollTo({top:0,behavior:"smooth"})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://www.mocky.io/v2/5d531c4f2e0000620081ddce",{method:"GET"}).then((function(e){return e.json()})).then((function(e){t.setState({usersData:e})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"showPaymentModal",value:function(){}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"App-user-listing",children:[Object(O.jsx)(f,{title:"Listagem de Usu\xe1rios",scroll:"true",scrollFunction:this.contentScrollToTop}),Object(O.jsx)("div",{className:"user-list",onScroll:this.handleContentScroll,children:this.state.usersData.map((function(t,n){if(n<e.state.contentScrollIndex)return Object(O.jsx)("div",{className:"user-row",children:Object(O.jsxs)("div",{className:"user-wrapper",children:[Object(O.jsxs)("div",{className:"user-data-wrapper",children:[Object(O.jsx)("figure",{children:Object(O.jsx)("img",{src:t.img,alt:"Foto do Usu\xe1rio"+t.name})}),Object(O.jsxs)("div",{className:"user-data",children:[Object(O.jsx)("div",{className:"user-name",children:t.name}),Object(O.jsxs)("div",{className:"user-id-username",children:["ID: ",t.id," - Username: ",t.username]})]})]}),Object(O.jsx)("div",{children:Object(O.jsx)(x,{classN:"pay-button",onClickFunction:e.showPaymentModal(),displayText:"Pagar"})})]})},"user-row-"+n)}))}),Object(O.jsx)(v,{username:"testeuser"})]})}}]),n}(c.a.Component)),y=(n(33),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={usersData:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://www.mocky.io/v2/5d531c4f2e0000620081ddce",{method:"GET"}).then((function(e){return e.json()})).then((function(e){t.setState({usersData:e})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"home-content",children:[Object(O.jsx)(f,{title:"Home"}),Object(O.jsxs)("div",{className:"App-description-wrapper",children:[Object(O.jsx)("div",{className:"App-description-title",children:Object(O.jsx)("h3",{children:"Application Description"})}),Object(O.jsx)("div",{className:"App-description-text",children:Object(O.jsx)("p",{children:"Here i shall tell a bit more about this project. It's based on Picpay's test but with a few more stuff. Using react to build a SPA where a user could use it to pay others users from a list, this list should be brought from an API request. The user then could scroll down the list with infinite scrolling technique, which makes it more mobile friendly rather than clicking paginations while keeping performance on loading, and choose an user to click on its pay button. After that, a payment modal would open and then allow the user to input the payment value, choose one of the registered credit cards and click the submit button. When the payment modal is submitted, the application would start an API post request sending along with it the inputed data and the incoming data from the selected user to be paid, this API would answer confirmation or failure and a response modal would be shown to the user with the respective confirmation answer."})})]})]})}}]),n}(c.a.Component)),w=(n(34),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={firstLoading:!0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(j.a,{children:[1==this.state.firstLoading?Object(O.jsx)(b.a,{to:"/UserListing"}):this.setState({firstLoading:!1}),Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("img",{src:m,className:"App-logo asda",alt:"logo"}),Object(O.jsx)("h1",{className:"App-title",children:"Payments App"}),Object(O.jsxs)("nav",{className:"App-nav",children:[Object(O.jsx)(j.b,{exact:!0,to:"/",className:"App-link",activeClassName:"App-link-CurrentPage",children:"Home"}),Object(O.jsx)(j.b,{exact:!0,to:"/UserListing",className:"App-link",activeClassName:"App-link-CurrentPage",children:"Users"})]})]}),Object(O.jsx)("div",{className:"App-content",children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{path:"/",exact:!0,component:y}),Object(O.jsx)(b.b,{path:"/UserListing",exact:!0,component:function(){return Object(O.jsx)(g,{scrollFunction:"this.contentScrollPage"})}})]})}),Object(O.jsx)("footer",{className:"App-footer",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"This is the Footer Title"}),Object(O.jsx)("p",{children:"This is the footer paragraph, to write nothing or anything you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae quam mauris. Maecenas convallis luctus sem, euismod rutrum odio tempus ut."}),Object(O.jsx)("small",{children:"\xa9 2021 BrandGoesHere. All Rights Reserved."})]})})]})})}}]),n}(c.a.Component)),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),N()}},[[43,1,2]]]);
//# sourceMappingURL=main.0769d56c.chunk.js.map