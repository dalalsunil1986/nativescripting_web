webpackJsonp([0xc956abe28b23],{89:function(e,t){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,c=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,p=s&&s(Object);e.exports=function e(t,l,u){if("string"!=typeof l){if(p){var f=s(l);f&&f!==p&&e(t,f,u)}var y=c(l);a&&(y=y.concat(a(l)));for(var b=0;b<y.length;++b){var h=y[b];if(!(r[h]||o[h]||u&&u[h])){var O=i(l,h);try{n(t,h,O)}catch(e){}}}return t}return t}},181:function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(5),i=r(85),s=function(e){function t(r){return o(this,t),n(this,e.call(this,r))}return c(t,e),t.prototype.render=function(){return console.log(this.props.data),a.createElement("div",null,a.createElement("h1",null,"Thi sis the home page of my site"),a.createElement(i.default,{to:"/posts"},"posts"))},t}(a.Component);t.default=s}});
//# sourceMappingURL=component---src-pages-index-tsx-cc5d867f39d6fa94c2f9.js.map