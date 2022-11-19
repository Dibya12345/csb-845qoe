(this["webpackJsonpdibya-urlshortner"]=this["webpackJsonpdibya-urlshortner"]||[]).push([[0],{24:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(25),s=n(18),i=n(3),l=n(8),o=n(9),j=n(10),h=n(11),u=(n(34),n(2)),d=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Layout",children:[Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/",children:"HOME"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/contact",children:"CONTACT"})})]})}),Object(u.jsx)(i.a,{})]})}}]),n}(c.a.Component),b=n(4),O=n(7);n(24);function p(e){return"string"===typeof e?e:e.message}var x=function(){var e=Object(O.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.shrtco.de/v2/shorten?url=".concat(t));case 3:if((n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:throw e.sent.error||"something went wrong !";case 11:return e.abrupt("return",n.json());case 12:e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();n(36);var m=function(e){return Object(u.jsxs)("div",{className:"url-input-container",children:[Object(u.jsx)("input",{placeholder:e.placeholder,onChange:e.onChange,value:e.value,className:e.validated?"":"error"}),!e.validated&&Object(u.jsx)("div",{className:"error-text",children:e.validationText})]})},v=n(22),f=(n(37),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).copyToClipboard=function(e){a.textArea.select(),document.execCommand("copy"),e.target.focus(),a.setState({copySuccess:"Copied!"})},a.state={copySuccess:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"clipboard",children:[Object(u.jsx)("form",{children:Object(u.jsx)("textarea",{className:"dan",ref:function(t){return e.textArea=t},value:this.props.my})}),document.queryCommandSupported("copy")&&Object(u.jsx)("div",{children:this.state.copySuccess?Object(u.jsx)(v.a,{}):Object(u.jsx)("button",{onClick:this.copyToClipboard,children:Object(u.jsx)(v.b,{})})})]})}}]),n}(c.a.Component)),g=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={inputUrl:"",outputUrl:"",loading:!1,error:""},e.handleUrlChange=function(t){e.setState({inputUrl:t.target.value})},e.handleShortenUrlClick=Object(O.a)(Object(b.a)().mark((function t(){var n,a;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.prev=1,t.next=4,x(e.state.inputUrl);case 4:n=t.sent,e.setState({outputUrl:n.result.short_link}),e.setState({validate:!1}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),a=p(t.t0),e.setState({error:a});case 13:e.setState({loading:!1});case 14:case"end":return t.stop()}}),t,null,[[1,9]])}))),e}return Object(o.a)(n,[{key:"render",value:function(){var e,t=(e=this.state.inputUrl,!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e));return Object(u.jsx)("div",{className:"Home",children:Object(u.jsxs)("div",{className:"homie",children:[Object(u.jsx)("div",{className:"home-text",children:Object(u.jsxs)("h2",{children:["Turn your url into short",Object(u.jsx)("div",{className:"mask",children:Object(u.jsx)("span",{children:"and simple"})})]})}),Object(u.jsx)("div",{className:"home-container",children:Object(u.jsxs)("div",{className:"home",children:[Object(u.jsxs)("div",{className:"home-container",children:[Object(u.jsx)(m,{type:"text",value:this.state.inputUrl,onChange:this.handleUrlChange,placeholder:"Enter Url",validated:!this.state.inputUrl||t,validationText:"Enter a valid url"}),Object(u.jsx)("button",{onClick:this.handleShortenUrlClick,disabled:this.state.loading,children:this.state.loading?"Working...":"Shorten Url"})]}),Object(u.jsx)("div",{className:"output",children:this.state.outputUrl?Object(u.jsx)(f,{my:this.state.outputUrl}):null}),this.state.error&&Object(u.jsx)("div",{className:"no-param",style:{color:"red"},children:this.state.error})]})})]})})}}]),n}(c.a.Component),C=n(6),y=n(17),S=(n(38),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){console.log(e),a.setState(Object(C.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),alert("Thanks for contacting us, "+a.state.name+"!"),a.setState({name:"",email:"",message:""})},a.state={name:"",email:"",message:""},a.handleChange=a.handleChange.bind(Object(y.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(y.a)(a)),a}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"contact",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("h1",{children:"CONTACT US"}),Object(u.jsx)("label",{children:"NAME "}),Object(u.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:this.handleChange}),Object(u.jsx)("label",{children:"EMAIL "}),Object(u.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange}),Object(u.jsx)("label",{children:"MESSAGE "}),Object(u.jsx)("textarea",{type:"text",name:"message",placeholder:"Message",value:this.state.message,onChange:this.handleChange}),Object(u.jsx)("button",{type:"submit",children:"SUBMIT"})]})})}}]),n}(c.a.Component)),k=(n(39),function(){return Object(u.jsx)("h1",{children:"404"})});function N(){return Object(u.jsx)(s.a,{children:Object(u.jsx)(i.d,{children:Object(u.jsxs)(i.b,{path:"/",element:Object(u.jsx)(d,{}),children:[Object(u.jsx)(i.b,{index:!0,element:Object(u.jsx)(g,{})}),Object(u.jsx)(i.b,{path:"contact",element:Object(u.jsx)(S,{})}),Object(u.jsx)(i.b,{path:"*",element:Object(u.jsx)(k,{})})]})})})}var U=document.getElementById("root");Object(r.createRoot)(U).render(Object(u.jsx)(a.StrictMode,{children:Object(u.jsx)(N,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.63b8624e.chunk.js.map