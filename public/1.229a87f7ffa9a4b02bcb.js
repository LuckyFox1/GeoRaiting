webpackJsonp([1],{439:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(68),r=a(208),c=a(213),l=a(457),i={signOut:r.a,getMetcastsForAdmin:c.a,toggleEditForm:c.b,addMetcast:c.c,changeTab:c.d,editMetcast:c.e,remove:c.f},s=function(e){return{home:e.home,admin:e.admin}};t.default=a.i(n.connect)(s,i)(l.a)},440:function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments[1],a=u[t.type];return a?a(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r,c=a(445),l=a.n(c),i=a(446),s=a.n(i),o=a(122),u=(r={},l()(r,o.a,function(e,t){return Object.assign({},e,{metcasts:t.payload.metcasts})}),l()(r,o.b,function(e,t){return Object.assign({},e,{metcasts:e.metcasts.map(function(e){return t.payload.metcastID===e._id?Object.assign({},e,{editing:t.payload.isEdit}):Object.assign({},e)})})}),l()(r,o.c,function(e,t){return Object.assign({},e,{tab:t.payload.tabName})}),l()(r,o.d,function(e,t){return Object.assign({},e,{metcasts:[].concat(s()(e.metcasts),[t.payload.metcast]),tab:"metcasts-list"})}),l()(r,o.e,function(e,t){return Object.assign({},e,{metcasts:e.metcasts.map(function(e){return e._id===t.payload.metcast._id?Object.assign({},e,{name:t.payload.metcast.name,url:t.payload.metcast.url,images:t.payload.metcast.images,editing:!1}):Object.assign({},e)})})}),l()(r,o.f,function(e,t){return Object.assign({},e,{metcasts:e.metcasts.filter(function(e){return e._id!==t.payload.metcastID})})}),r),m={tab:"metcasts-list"}},443:function(e,t,a){"use strict";var n=a(204),r=a.n(n),c=a(205),l=a.n(c),i=a(207),s=a.n(i),o=a(206),u=a.n(o),m=a(6),d=a.n(m),f=a(7),v=a.n(f),p=a(51),g=function(e){function t(){var e,a,n,c;r()(this,t);for(var l=arguments.length,i=Array(l),o=0;o<l;o++)i[o]=arguments[o];return a=n=s()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n._handleSignIn=function(){n.props.showLogInForm&&n.props.showLogInForm(!0)},c=a,s()(n,c)}return u()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.signOut;return d.a.createElement("div",{className:"header"},d.a.createElement("div",{className:"wrapper"},d.a.createElement(p.IndexLink,{to:"/",activeClassName:"active",className:"nav-item home"}),d.a.createElement("div",{className:"title"},"Top weather forecasts"),t?"":d.a.createElement(p.Link,{to:"#",activeClassName:"active",className:"nav-item log-in",onClick:this._handleSignIn},"Sign In"),t?d.a.createElement(p.Link,{to:"#",activeClassName:"active",className:"nav-item log-in",onClick:a},"Sign Out"):"",t&&t.roles.some(function(e){return"admin"===e})?d.a.createElement(p.Link,{to:"/admin",activeClassName:"active",className:"nav-item admin"},"Admin"):""))}}]),t}(m.Component);g.propTypes={user:v.a.object,signOut:v.a.func,showLogInForm:v.a.func},t.a=g},444:function(e,t,a){e.exports={default:a(447),__esModule:!0}},445:function(e,t,a){"use strict";t.__esModule=!0;var n=a(209),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e,t,a){return t in e?(0,r.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},446:function(e,t,a){"use strict";t.__esModule=!0;var n=a(444),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,r.default)(e)}},447:function(e,t,a){a(212),a(454),e.exports=a(21).Array.from},448:function(e,t,a){var n=a(120),r=a(26)("toStringTag"),c="Arguments"==n(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,a,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=l(t=Object(e),r))?a:c?n(t):"Object"==(i=n(t))&&"function"==typeof t.callee?"Arguments":i}},449:function(e,t,a){"use strict";var n=a(22),r=a(50);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},450:function(e,t,a){var n=a(67),r=a(26)("iterator"),c=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||c[r]===e)}},451:function(e,t,a){var n=a(39);e.exports=function(e,t,a,r){try{return r?t(n(a)[0],a[1]):t(a)}catch(t){var c=e.return;throw void 0!==c&&n(c.call(e)),t}}},452:function(e,t,a){var n=a(26)("iterator"),r=!1;try{var c=[7][n]();c.return=function(){r=!0},Array.from(c,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!r)return!1;var a=!1;try{var c=[7],l=c[n]();l.next=function(){return{done:a=!0}},c[n]=function(){return l},e(c)}catch(e){}return a}},453:function(e,t,a){var n=a(448),r=a(26)("iterator"),c=a(67);e.exports=a(21).getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||c[n(e)]}},454:function(e,t,a){"use strict";var n=a(121),r=a(40),c=a(211),l=a(451),i=a(450),s=a(210),o=a(449),u=a(453);r(r.S+r.F*!a(452)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,m,d=c(e),f="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,g=void 0!==p,b=0,E=u(d);if(g&&(p=n(p,v>2?arguments[2]:void 0,2)),void 0==E||f==Array&&i(E))for(t=s(d.length),a=new f(t);t>b;b++)o(a,b,g?p(d[b],b):d[b]);else for(m=E.call(d),a=new f;!(r=m.next()).done;b++)o(a,b,g?l(m,p,[r.value,b],!0):r.value);return a.length=b,a}})},455:function(e,t){},457:function(e,t,a){"use strict";var n=a(204),r=a.n(n),c=a(205),l=a.n(c),i=a(207),s=a.n(i),o=a(206),u=a.n(o),m=a(6),d=a.n(m),f=a(7),v=a.n(f),p=a(443),g=a(458),b=a(455),E=(a.n(b),function(e){function t(){var e,a,n,c;r()(this,t);for(var l=arguments.length,i=Array(l),o=0;o<l;o++)i[o]=arguments[o];return a=n=s()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n._handleAddMetcast=function(){n.props.addMetcast({name:n.refs.addName.value,url:n.refs.addUrl.value,images:n.refs.addImage.value})},c=a,s()(n,c)}return u()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.props.getMetcastsForAdmin()}},{key:"render",value:function(){var e=this.props,t=e.home,a=e.signOut,n=e.admin,r=e.toggleEditForm,c=e.changeTab,l=e.remove;return d.a.createElement("div",{className:"admin"},d.a.createElement(p.a,{user:t.user,signOut:a}),"metcasts-list"===n.tab?d.a.createElement("div",null,d.a.createElement("ul",{className:"metcasts-list-admin list-group"},n.metcasts?n.metcasts.map(function(e){return d.a.createElement("li",{key:e._id,className:"list-group-item"},d.a.createElement("div",{className:"left-col"},d.a.createElement("div",{className:"logo"},d.a.createElement("img",{src:e.images,alt:e.name})),d.a.createElement("div",null,d.a.createElement("b",null,"Name: "),e.name),d.a.createElement("div",null,d.a.createElement("b",null,"Link: "),e.url),d.a.createElement("button",{className:"btn edit-btn",onClick:function(){return r(e._id,!0)}},"Edit"),d.a.createElement("button",{className:"btn remove-btn",onClick:function(){return l(e._id)}},"Remove")),d.a.createElement("div",{className:"right-col"},e.editing?d.a.createElement(g.a,{item:e,toggleEditForm:r}):""))}):""),d.a.createElement("button",{className:"btn add-btn",onClick:function(){return c("add-metcast")}},"Add Metcast")):d.a.createElement("div",{className:"add-metcast-form"},d.a.createElement("div",null,d.a.createElement("label",{className:"lbl"},d.a.createElement("b",null,"Name: ")),d.a.createElement("input",{ref:"addName",className:"form-control"})),d.a.createElement("div",null,d.a.createElement("label",{className:"lbl"},d.a.createElement("b",null,"Url: ")),d.a.createElement("input",{ref:"addUrl",className:"form-control"})),d.a.createElement("div",null,d.a.createElement("label",{className:"lbl"},d.a.createElement("b",null,"Image: ")),d.a.createElement("input",{ref:"addImage",className:"form-control"})),d.a.createElement("button",{className:"btn save-btn",onClick:this._handleAddMetcast},"Add"),d.a.createElement("button",{className:"btn cancel-btn",onClick:function(){return c("metcasts-list")}},"Cancel")))}}]),t}(m.Component));E.propTypes={home:v.a.object,signOut:v.a.func,getMetcastsForAdmin:v.a.func,admin:v.a.object,toggleEditForm:v.a.func,changeTab:v.a.func,addMetcast:v.a.func,editMetcast:v.a.func,remove:v.a.func},t.a=E},458:function(e,t,a){"use strict";var n=a(204),r=a.n(n),c=a(205),l=a.n(c),i=a(207),s=a.n(i),o=a(206),u=a.n(o),m=a(6),d=a.n(m),f=a(7),v=a.n(f),p=a(455),g=(a.n(p),function(e){function t(){var e,a,n,c;r()(this,t);for(var l=arguments.length,i=Array(l),o=0;o<l;o++)i[o]=arguments[o];return a=n=s()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n._handleEditMetcast=function(e){n.props.editMetcast({name:n.refs.editName.value,url:n.refs.editUrl.value,images:n.refs.editImage.value},e)},c=a,s()(n,c)}return u()(t,e),l()(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.item,n=t.toggleEditForm;return d.a.createElement("div",{className:"edit-form"},d.a.createElement("div",null,d.a.createElement("label",{className:"lbl"},d.a.createElement("b",null,"Name: ")),d.a.createElement("input",{ref:"editName",className:"form-control form-control-sm",defaultValue:a.name})),d.a.createElement("div",null,d.a.createElement("label",{className:"lbl"},d.a.createElement("b",null,"Url: ")),d.a.createElement("input",{ref:"editUrl",className:"form-control form-control-sm",defaultValue:a.url})),d.a.createElement("div",null,d.a.createElement("label",{className:"lbl"},d.a.createElement("b",null,"Image: ")),d.a.createElement("input",{ref:"editImage",className:"form-control form-control-sm",defaultValue:a.images})),d.a.createElement("button",{className:"btn btn-sm save-btn",onClick:function(){return e._handleEditMetcast(a._id)}},"Save"),d.a.createElement("button",{className:"btn btn-sm cancel-btn",onClick:function(){return n(a._id,!1)}},"Cancel"))}}]),t}(m.Component));g.propTypes={item:v.a.object,editMetcast:v.a.func,toggleEditForm:v.a.func},t.a=g}});
//# sourceMappingURL=1.229a87f7ffa9a4b02bcb.js.map