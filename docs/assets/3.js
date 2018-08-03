(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{706:function(e,r,t){"use strict";t.r(r);var n=t(67),o=t(32),a=t(179),i=t.n(a),s=t(113),u=t(88),l=t.n(u),c=t(66),f=t(72),p=t(2),d=t(44),v=t(699),m=t(86),g=(t(178),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(r,t,n,o){var a=r&&r.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}return{$$typeof:e,type:r,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}()),h=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),w=function(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}(["\n  margin-left: 10px;\n"],["\n  margin-left: 10px;\n"]);function b(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}var y=d.b.button(w),O=g("legend",{},void 0,"Register"),P=g("label",{htmlFor:"inputEmail",className:"col-lg-2 control-label"},void 0,"Email"),j=g("label",{htmlFor:"inputPassword",className:"col-lg-2 control-label"},void 0,"Password"),k=g(v.a,{className:"btn btn-default",to:"/"},void 0,"Cancel"),C=function(e){function r(){var e,t,n,o=this;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return t=n=b(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(i))),n.state={viewEntersAnim:!0,email:"",password:"",warning:null},n.handlesOnEmailChange=function(e){if(e){e.preventDefault();var r=e.target.value;n.setState({email:r})}},n.handlesOnPasswordChange=function(e){e&&(e.preventDefault(),n.setState({password:e.target.value}))},n.handlesOnRegister=function(){var e=function(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function n(o,a){try{var i=r[o](a),s=i.value}catch(e){return void t(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}("next")})}}(regeneratorRuntime.mark(function e(r){var t,a,i,s,u,l,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.preventDefault(),t=n.props,a=t.registerUser,i=t.history,s=n.state,u=s.email,l=s.password,c={username:u,password:l},n.setState({warning:null}),n.isValidEmail(u)){e.next=8;break}return n.setState({warning:{message:"Email is not valid."}}),e.abrupt("return");case 8:if(n.isValidPassword(l)){e.next=11;break}return n.setState({warning:{message:"Password is empty or not valid."}}),e.abrupt("return");case 11:return e.prev=11,e.next=14,a({user:c});case 14:i.push({pathname:"/protected"}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(11),console.log("register user went wrong..., error: ",e.t0);case 20:case"end":return e.stop()}},e,o,[[11,17]])}));return function(r){return e.apply(this,arguments)}}(),n.closeError=function(e){e&&e.preventDefault()},n.closeWarning=function(e){e&&e.preventDefault(),n.setState({warning:null})},b(n,t)}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,p["PureComponent"]),h(r,[{key:"componentDidMount",value:function(){(0,this.props.enterRegister)()}},{key:"componentWillUnmount",value:function(){(0,this.props.leaveRegister)()}},{key:"render",value:function(){var e=this.state,r=e.email,t=e.password,n=e.warning,o=this.props,a=o.mutationLoading,i=o.error;return g("div",{},void 0,g("div",{className:"row"},void 0,g("div",{className:"col-md-4 col-md-offset-4"},void 0,g("form",{className:"form-horizontal",noValidate:!0},void 0,g("fieldset",{},void 0,O,g("div",{className:"form-group"},void 0,P,g("div",{className:"col-lg-10"},void 0,g("input",{type:"text",className:"form-control",id:"inputEmail",placeholder:"Email",value:r,onChange:this.handlesOnEmailChange}))),g("div",{className:"form-group"},void 0,j,g("div",{className:"col-lg-10"},void 0,g("input",{type:"password",className:"form-control",id:"inputPassword",placeholder:"Password",value:t,onChange:this.handlesOnPasswordChange}))),g("div",{className:"form-group"},void 0,g("div",{className:"col-lg-10 col-lg-offset-2"},void 0,k,g(y,{className:"btn btn-primary",disabled:a,onClick:this.handlesOnRegister},void 0,"Register"))))),g("div",{style:{height:"150px"}},void 0,g(m.d,{showAlert:!!n,warningTitle:"Warning",warningMessage:n?n.message:"",onClose:this.closeWarning}),g(m.b,{showAlert:!!i,errorTitle:"Error",errorMessage:i?i.message:"",onClose:this.closeError})))))}},{key:"isValidEmail",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!!(e&&e.trim().length>0)}},{key:"isValidPassword",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!!(e&&e.trim().length>0)}}]),r}(),x=t(89),E=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},R=function(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}(["\n  mutation CreateUser($user: CreateUserInput!) {\n    createUser(input: $user) {\n      token\n    }\n  }\n"],["\n  mutation CreateUser($user: CreateUserInput!) {\n    createUser(input: $user) {\n      token\n    }\n  }\n"]);var N=i()(R),U={props:function(e){var r=e.ownProps,t=e.mutate;return{registerUser:function(e){var n=this;return function(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function n(o,a){try{var i=r[o](a),s=i.value}catch(e){return void t(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}("next")})}}(regeneratorRuntime.mark(function o(){var a,i,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.setLoadingStateForUserRegister(),n.prev=1,a={variables:E({},e)},n.next=5,t(a);case 5:return i=n.sent,s=i.data.createUser.token,r.receivedUserRegister(s,e),r.unsetLoadingStateForUserRegister(),n.abrupt("return",Promise.resolve());case 12:return n.prev=12,n.t0=n.catch(1),r.errorUserRegister(n.t0),r.unsetLoadingStateForUserRegister(),n.abrupt("return",Promise.reject(n.t0));case 17:case"end":return n.stop()}},o,n,[[1,12]])}))()}}}};r.default=l()(Object(x.a)(),Object(n.b)(function(e){return{currentView:e.views.currentView,userIsAuthenticated:e.userAuth.isAuthenticated,mutationLoading:e.userAuth.mutationLoading,error:e.userAuth.error}},function(e){return Object(o.bindActionCreators)(E({},c,f),e)}),Object(s.graphql)(N,U))(C)}}]);