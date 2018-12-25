webpackJsonp([0],{439:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(67),n=a(207),r=a(447),o={getMetcasts:n.a,loginUser:n.b,registerUser:n.c,showLogInForm:n.d,setUser:n.e},c=function(e){return{home:e.home}};t.default=a.i(s.connect)(c,o)(r.a)},440:function(e,t,a){"use strict";function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1],a=i[t.type];return a?a(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n,r=a(444),o=a.n(r),c=a(119),i=(n={},o()(n,c.a,function(e,t){return Object.assign({},e,{metcasts:t.payload.metcasts})}),o()(n,c.b,function(e,t){return Object.assign({},e,{loggedIn:t.payload.loggedIn})}),o()(n,c.c,function(e,t){return Object.assign({},e,{user:t.payload.user})}),o()(n,c.d,function(e,t){return Object.assign({},e,{showLoginForm:t.payload.show})}),n),l={loggedIn:!1,user:null,showLoginForm:!1,metcasts:[]}},443:function(e,t,a){"use strict";var s=a(202),n=a.n(s),r=a(203),o=a.n(r),c=a(205),i=a.n(c),l=a(204),m=a.n(l),u=a(6),p=a.n(u),g=a(7),f=a.n(g),d=a(50),h=function(e){function t(){var e,a,s,r;n()(this,t);for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];return a=s=i()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),s._handleSignIn=function(){s.props.showLogInForm&&s.props.showLogInForm(!0)},r=a,i()(s,r)}return m()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.user;return p.a.createElement("div",{className:"header"},p.a.createElement("div",{className:"wrapper"},p.a.createElement(d.IndexLink,{to:"/",activeClassName:"active",className:"nav-item home"}),p.a.createElement("div",{className:"title"},"Top weather forecasts"),e?"":p.a.createElement(d.Link,{to:"#",activeClassName:"active",className:"nav-item log-in",onClick:this._handleSignIn},"Sign In"),e?p.a.createElement(d.Link,{to:"#",activeClassName:"active",className:"nav-item log-in"},"Sign Out"):"",e?p.a.createElement(d.Link,{to:"/admin",activeClassName:"active",className:"nav-item admin"},"Admin"):""))}}]),t}(u.Component);h.propTypes={user:f.a.object},t.a=h},444:function(e,t,a){"use strict";t.__esModule=!0;var s=a(206),n=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=function(e,t,a){return t in e?(0,n.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},447:function(e,t,a){"use strict";var s=a(202),n=a.n(s),r=a(203),o=a.n(r),c=a(205),i=a.n(c),l=a(204),m=a.n(l),u=a(6),p=a.n(u),g=a(7),f=a.n(g),d=a(451),h=(a.n(d),a(443)),v=a(448),N=function(e){function t(){return n()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m()(t,e),o()(t,[{key:"componentDidMount",value:function(){this.props.getMetcasts()}},{key:"render",value:function(){var e=this.props,t=e.home,a=e.setUser;return p.a.createElement("div",null,p.a.createElement(h.a,{user:t.user,showLogInForm:this.props.showLogInForm}),p.a.createElement("ul",{className:"metcasts-list"},t.metcasts.map(function(e){return p.a.createElement("li",{className:"metcast",key:e._id},p.a.createElement("div",{className:"left-col"},p.a.createElement("img",{className:"icon",src:e.images,alt:e.name})),p.a.createElement("div",{className:"right-col"},p.a.createElement("div",{className:"name"},e.name),p.a.createElement("a",{className:"link",href:"//"+e.url},e.url),p.a.createElement("div",{className:"rating"},p.a.createElement("div",{className:"rating-icon"}),p.a.createElement("span",{className:"rating-value"},e.rating))))})),t.showLoginForm?p.a.createElement(v.a,{showLogInForm:this.props.showLogInForm,loginUser:this.props.loginUser,registerUser:this.props.registerUser,setUser:a}):"")}}]),t}(u.Component);N.propTypes={getMetcasts:f.a.func,home:f.a.object,showLogInForm:f.a.func,loginUser:f.a.func,registerUser:f.a.func},t.a=N},448:function(e,t,a){"use strict";var s=a(202),n=a.n(s),r=a(203),o=a.n(r),c=a(205),i=a.n(c),l=a(204),m=a.n(l),u=a(6),p=a.n(u),g=a(7),f=a.n(g),d=a(452),h=(a.n(d),function(e){function t(e){n()(this,t);var a=i()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.login=function(){fetch("/login",{method:"POST",body:JSON.stringify({user:{name:a.refs.name.value,password:a.refs.password.value}}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.user?(a.props.setUser(e.user),a.setState({error:!1,message:""}),a.props.showLogInForm(!1)):a.setState({error:!0,message:"Username or password is invalid."})}).catch(function(e){console.log(e)})},a.register=function(){fetch("/register",{method:"POST",body:JSON.stringify({user:{name:a.refs.name.value,password:a.refs.password.value}}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.user?(a.setState({error:!1,message:"Account was successfully created"}),a.refs.name.value="",a.refs.password.value=""):a.setState({error:!0,message:e.message})}).catch(function(e){console.log(e)})},a.state={error:!1,message:""},a}return m()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=(e.login,e.home,e.showLogInForm);return console.log(this.props),p.a.createElement("div",{className:"overlay"},p.a.createElement("div",{className:"login-form-wrapper"},p.a.createElement("button",{className:"close-login-form",onClick:function(){t(!1)}}),p.a.createElement("div",{className:"login-form"},p.a.createElement("div",{className:"name-field"},p.a.createElement("div",{className:"message-box"},this.state.error?p.a.createElement("span",{className:"alert-message"},this.state.message):"",!this.state.error&&this.state.message.length?p.a.createElement("span",{className:"success-message"},this.state.message):""),p.a.createElement("label",{className:"name-label"},"Username: "),p.a.createElement("input",{className:"name-input",ref:"name",type:"text"})),p.a.createElement("div",{className:"password-field"},p.a.createElement("label",{className:"password-label"},"Password: "),p.a.createElement("input",{className:"password-input",ref:"password",type:"text"}))),p.a.createElement("button",{className:"btn",onClick:this.login},"Sing In"),p.a.createElement("button",{className:"btn",onClick:this.register},"Register")))}}]),t}(u.Component));h.propTypes={login:f.a.object,home:f.a.object,setUser:f.a.func,registerUser:f.a.func,showLogInForm:f.a.func},t.a=h},451:function(e,t){},452:function(e,t){}});
//# sourceMappingURL=0.9e76ec265f0e8a368e8a.js.map