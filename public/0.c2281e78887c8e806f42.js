webpackJsonp([0],{441:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(68),r=n(208),s=n(460),o={getMetcasts:r.b,loginUser:r.c,registerUser:r.d,showLogInForm:r.e,setUser:r.f,signOut:r.a,vote:r.g,removeVote:r.h},i=function(e){return{home:e.home}};t.default=n.i(a.connect)(i,o)(s.a)},442:function(e,t,n){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments[1],n=l[t.type];return n?n(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r,s=n(445),o=n.n(s),i=n(446),c=n.n(i),u=n(123),l=(r={},o()(r,u.a,function(e,t){return Object.assign({},e,{metcasts:t.payload.metcasts})}),o()(r,u.e,function(e,t){return Object.assign({},e,{user:t.payload.user})}),o()(r,u.f,function(e,t){return Object.assign({},e,{showLoginForm:t.payload.show})}),o()(r,u.g,function(e){return Object.assign({},e,{user:null})}),o()(r,u.h,function(e,t){return Object.assign({},e,{metcasts:e.metcasts.map(function(e){return e._id===t.payload.like.metcast_id?Object.assign({},e,{rating:t.payload.newRating}):Object.assign({},e)}),user:Object.assign({},e.user,{likes:[].concat(c()(e.user.likes),[t.payload.like])})})}),o()(r,u.j,function(e,t){return Object.assign({},e,{metcasts:e.metcasts.map(function(e){return e._id===t.payload.metcastID?Object.assign({},e,{rating:t.payload.newRating}):Object.assign({},e)}),user:Object.assign({},e.user,{likes:e.user.likes.filter(function(e){return e.metcast_id!==t.payload.metcastID})})})}),r),m={user:null,showLoginForm:!1,metcasts:[]}},443:function(e,t,n){"use strict";var a=n(204),r=n.n(a),s=n(205),o=n.n(s),i=n(207),c=n.n(i),u=n(206),l=n.n(u),m=n(6),f=n.n(m),p=n(7),g=n.n(p),d=n(51),v=function(e){function t(){var e,n,a,s;r()(this,t);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return n=a=c()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a._handleSignIn=function(){a.props.showLogInForm&&a.props.showLogInForm(!0)},s=n,c()(a,s)}return l()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.signOut;return f.a.createElement("div",{className:"header"},f.a.createElement("div",{className:"wrapper"},f.a.createElement(d.IndexLink,{to:"/",activeClassName:"active",className:"nav-item home"}),f.a.createElement("div",{className:"title"},"Top weather forecasts"),t?"":f.a.createElement(d.Link,{to:"#",activeClassName:"active",className:"nav-item log-in",onClick:this._handleSignIn},"Sign In"),t?f.a.createElement(d.Link,{to:"#",activeClassName:"active",className:"nav-item log-in",onClick:n},"Sign Out"):"",t&&t.roles.some(function(e){return"admin"===e})?f.a.createElement(d.Link,{to:"/admin",activeClassName:"active",className:"nav-item admin"},"Admin"):""))}}]),t}(m.Component);v.propTypes={user:g.a.object,signOut:g.a.func,showLogInForm:g.a.func},t.a=v},444:function(e,t,n){e.exports={default:n(447),__esModule:!0}},445:function(e,t,n){"use strict";t.__esModule=!0;var a=n(209),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e,t,n){return t in e?(0,r.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},446:function(e,t,n){"use strict";t.__esModule=!0;var a=n(444),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,r.default)(e)}},447:function(e,t,n){n(212),n(454),e.exports=n(21).Array.from},448:function(e,t,n){var a=n(120),r=n(26)("toStringTag"),s="Arguments"==a(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=o(t=Object(e),r))?n:s?a(t):"Object"==(i=a(t))&&"function"==typeof t.callee?"Arguments":i}},449:function(e,t,n){"use strict";var a=n(22),r=n(50);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},450:function(e,t,n){var a=n(67),r=n(26)("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(a.Array===e||s[r]===e)}},451:function(e,t,n){var a=n(39);e.exports=function(e,t,n,r){try{return r?t(a(n)[0],n[1]):t(n)}catch(t){var s=e.return;throw void 0!==s&&a(s.call(e)),t}}},452:function(e,t,n){var a=n(26)("iterator"),r=!1;try{var s=[7][a]();s.return=function(){r=!0},Array.from(s,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!r)return!1;var n=!1;try{var s=[7],o=s[a]();o.next=function(){return{done:n=!0}},s[a]=function(){return o},e(s)}catch(e){}return n}},453:function(e,t,n){var a=n(448),r=n(26)("iterator"),s=n(67);e.exports=n(21).getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||s[a(e)]}},454:function(e,t,n){"use strict";var a=n(121),r=n(40),s=n(211),o=n(451),i=n(450),c=n(210),u=n(449),l=n(453);r(r.S+r.F*!n(452)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,r,m,f=s(e),p="function"==typeof this?this:Array,g=arguments.length,d=g>1?arguments[1]:void 0,v=void 0!==d,h=0,y=l(f);if(v&&(d=a(d,g>2?arguments[2]:void 0,2)),void 0==y||p==Array&&i(y))for(t=c(f.length),n=new p(t);t>h;h++)u(n,h,v?d(f[h],h):f[h]);else for(m=y.call(f),n=new p;!(r=m.next()).done;h++)u(n,h,v?o(m,d,[r.value,h],!0):r.value);return n.length=h,n}})},456:function(e,t){},460:function(e,t,n){"use strict";var a=n(204),r=n.n(a),s=n(205),o=n.n(s),i=n(207),c=n.n(i),u=n(206),l=n.n(u),m=n(6),f=n.n(m),p=n(7),g=n.n(p),d=n(456),v=(n.n(d),n(443)),h=n(461),y=n(462),b=function(e){function t(){return r()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l()(t,e),o()(t,[{key:"componentDidMount",value:function(){this.props.getMetcasts()}},{key:"render",value:function(){var e=this.props,t=e.home,n=e.setUser,a=e.signOut,r=e.vote,s=e.removeVote;return f.a.createElement("div",null,f.a.createElement(v.a,{user:t.user,signOut:a,showLogInForm:this.props.showLogInForm}),f.a.createElement("ul",{className:"metcasts-list"},t.metcasts.map(function(e){return f.a.createElement(y.a,{key:e._id,item:e,vote:r,removeVote:s,user:t.user})})),t.showLoginForm?f.a.createElement(h.a,{showLogInForm:this.props.showLogInForm,loginUser:this.props.loginUser,registerUser:this.props.registerUser,setUser:n}):"")}}]),t}(m.Component);b.propTypes={getMetcasts:g.a.func,home:g.a.object,showLogInForm:g.a.func,loginUser:g.a.func,registerUser:g.a.func,setUser:g.a.func,signOut:g.a.func,vote:g.a.func,removeVote:g.a.func},t.a=b},461:function(e,t,n){"use strict";var a=n(204),r=n.n(a),s=n(205),o=n.n(s),i=n(207),c=n.n(i),u=n(206),l=n.n(u),m=n(6),f=n.n(m),p=n(7),g=n.n(p),d=n(463),v=(n.n(d),function(e){function t(e){r()(this,t);var n=c()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.login=function(){fetch("/login",{method:"POST",body:JSON.stringify({user:{name:n.refs.name.value,password:n.refs.password.value}}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.user?(n.props.setUser(e.user),n.setState({error:!1,message:""}),n.props.showLogInForm(!1)):n.setState({error:!0,message:"Username or password is invalid."})}).catch(function(e){console.log(e)})},n.register=function(){fetch("/register",{method:"POST",body:JSON.stringify({user:{name:n.refs.name.value,password:n.refs.password.value}}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.user?(n.setState({error:!1,message:"Account was successfully created"}),n.refs.name.value="",n.refs.password.value=""):n.setState({error:!0,message:e.message})}).catch(function(e){console.log(e)})},n.state={error:!1,message:""},n}return l()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=(e.login,e.home,e.showLogInForm);return f.a.createElement("div",{className:"overlay"},f.a.createElement("div",{className:"login-form-wrapper"},f.a.createElement("button",{className:"close-login-form",onClick:function(){t(!1)}}),f.a.createElement("div",{className:"login-form"},f.a.createElement("div",{className:"name-field"},f.a.createElement("div",{className:"message-box"},this.state.error?f.a.createElement("span",{className:"alert-message"},this.state.message):"",!this.state.error&&this.state.message.length?f.a.createElement("span",{className:"success-message"},this.state.message):""),f.a.createElement("label",{className:"name-label"},"Username: "),f.a.createElement("input",{className:"name-input",ref:"name",type:"text"})),f.a.createElement("div",{className:"password-field"},f.a.createElement("label",{className:"password-label"},"Password: "),f.a.createElement("input",{className:"password-input",ref:"password",type:"text"}))),f.a.createElement("button",{className:"btn",onClick:this.login},"Sing In"),f.a.createElement("button",{className:"btn",onClick:this.register},"Register")))}}]),t}(m.Component));v.propTypes={login:g.a.object,home:g.a.object,setUser:g.a.func,registerUser:g.a.func,showLogInForm:g.a.func},t.a=v},462:function(e,t,n){"use strict";var a=n(204),r=n.n(a),s=n(205),o=n.n(s),i=n(207),c=n.n(i),u=n(206),l=n.n(u),m=n(6),f=n.n(m),p=n(7),g=n.n(p),d=n(456),v=(n.n(d),function(e){function t(){return r()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.vote,a=e.user,r=e.removeVote,s=a&&a.likes.some(function(e){return e.metcast_id===t._id});return f.a.createElement("li",{className:"metcast",key:t._id},f.a.createElement("div",{className:"left-col"},f.a.createElement("img",{className:"icon",src:t.images,alt:t.name})),f.a.createElement("div",{className:"right-col"},f.a.createElement("div",{className:"name"},t.name),f.a.createElement("a",{className:"link",href:"//"+t.url},t.url),f.a.createElement("div",{className:"rating"},f.a.createElement("div",{className:"rating-icon"}),f.a.createElement("span",{className:"rating-value"},t.rating),a?f.a.createElement("div",{className:"vote-block"},s?f.a.createElement("button",{className:"btn remove-vote-btn",onClick:function(){return r(t._id)}},"Remove Vote"):f.a.createElement("div",{className:"btn-group mr-2"},f.a.createElement("button",{type:"button",className:"btn",onClick:function(){return n(1,t._id)}},"1"),f.a.createElement("button",{type:"button",className:"btn",onClick:function(){return n(2,t._id)}},"2"),f.a.createElement("button",{type:"button",className:"btn",onClick:function(){return n(3,t._id)}},"3"),f.a.createElement("button",{type:"button",className:"btn",onClick:function(){return n(4,t._id)}},"4"),f.a.createElement("button",{type:"button",className:"btn",onClick:function(){return n(5,t._id)}},"5"))):"")))}}]),t}(m.Component));v.propTypes={item:g.a.object,vote:g.a.func,user:g.a.object,removeVote:g.a.func},t.a=v},463:function(e,t){}});
//# sourceMappingURL=0.c2281e78887c8e806f42.js.map