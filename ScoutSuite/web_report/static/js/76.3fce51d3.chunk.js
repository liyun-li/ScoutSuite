(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[76],{518:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(669)),c=n(80),i=n(81);t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.c,{label:"ARN",valuePath:"arn",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Description",valuePath:"description",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Last Modified",valuePath:"last_modified",renderValue:c.h}),Object(a.jsx)(r.c,{label:"Runtime",valuePath:"runtime",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Version",valuePath:"version",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Revision ID",valuePath:"revision_id",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Execution Role",valuePath:"execution_role",renderValue:function(e){return e?Object(a.jsx)(i.a,{service:"iam",resource:"roles",id:e.RoleId,name:e.RoleName}):"None"}}),Object(a.jsx)(r.c,{label:"Handler",valuePath:"handler",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Code Size",valuePath:"code_size",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Memory Size",valuePath:"memory_size",renderValue:c.q}),Object(a.jsx)(r.c,{label:"Timeout",valuePath:"timeout",renderValue:c.q})]})}},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),l=r.a.createContext(""),o=r.a.createContext((function(){}))},667:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(666),i=n(80);t.a=function(e){var t=e.path,n=e.children,l=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(l,t),children:n})}},668:function(e,t,n){"use strict";var a=n(11),r=n(1),c=n(0),i=n(663),l=n(7),o=n.n(l),u=n(13),s=n.n(u),d=n(10),b=n.n(d),j=n(666),v=n(80),f=n(88),h=(n(670),n(659)),p=n(201),x=n.n(p),O=n(671),m=n.n(O),P=n(202),V=n(140),g=function(e){var t=e.service,n=e.finding,a=e.path,l=Object(c.useContext)(V.a),o=l.exceptions,u=l.addException,d=l.removeException,b=Object(P.b)().enqueueSnackbar,j=s()(o,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:j?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(h.a,{size:"small",className:"exception-btn",onClick:j?function(){d(t,n,a),b("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:j?Object(r.jsx)(m.a,{}):Object(r.jsx)(x.a,{})})})},_=n(29),q=function(e){var t,n=e.label,l=e.separator,u=e.valuePath,d=e.errorPath,h=e.className,p=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,V=Object(_.g)(),q=Object(c.useContext)(j.a),C=Object(c.useContext)(j.b),R=Object(c.useContext)(j.c),z=Object(v.a)(P||C,u),E=m(e.value||s()(q.item,z,e.value));("boolean"===typeof E&&(E=String(E)),d)?t=(b()(d)?d:[d]).map((function(e){return Object(v.a)(P||C,e)})):t=[z];var N=t.some((function(e){return q.path_to_issues.includes(e)})),A=q.level;if(Object(c.useEffect)((function(){N&&R(A)}),[A]),void 0===E||null===E)return null;var y=Object(r.jsx)(g,{service:V.service,finding:V.finding,path:"".concat(q.path,".").concat(t[0])}),D=Object(r.jsxs)("span",{className:o()(N&&o()("issue",A)),children:[E,N&&y]});return Object(r.jsx)(f.a,{className:o()(h,"partial-value",{inline:p}),label:n,separator:l,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:E},O),{},{children:D})):D})};q.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=q},669:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return l.a}));var a=n(1),r=(n(0),n(666)),c=(n(80),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(667),l=n(668)},670:function(e,t,n){},671:function(e,t,n){"use strict";var a=n(35),r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i}}]);
//# sourceMappingURL=76.3fce51d3.chunk.js.map