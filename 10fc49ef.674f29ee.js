(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{143:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),b=s(n),p=r,O=b["".concat(o,".").concat(p)]||b[p]||d[p]||l;return n?a.a.createElement(O,c(c({ref:t},i),{},{components:n})):a.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r);function l(e){var t=e.contentTypeUserOptions,n=e.hasAuthorizationHeader,r=void 0!==n&&n,l=e.hasContentTypeHeader,o=void 0!==l&&l,c=e.hasCacheControlHeader,u=void 0!==c&&c,i=["application/json","text/plain"];return a.a.createElement("table",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Header"),a.a.createElement("td",null,"Description"),a.a.createElement("td",null,"Required")),o&&a.a.createElement("tr",null,a.a.createElement("td",null,"Content-Type"),a.a.createElement("td",null,a.a.createElement("p",null,"Specifies the MIME type of the body of the Request. Options:"),a.a.createElement("ul",null,function(){var e=t||i;if(!Array.isArray(e))throw new Error("Content type options should be an array.");return e.map((function(e){return a.a.createElement("li",{key:e},e)}))}())),a.a.createElement("td",null,"Yes")),r&&a.a.createElement("tr",null,a.a.createElement("td",null,"Authorization"),a.a.createElement("td",null,a.a.createElement("p",null,"The Access token is required for secure endpoints."),a.a.createElement("p",null,"You should use this header if you are not using the httpOnly cookie to access a Secure endpoint."),a.a.createElement("p",null,"For more information please refer to \xa0the\xa0",a.a.createElement("a",{href:"/docs/authentication/authentication-login"},"login documentation"),"\xa0and\xa0",a.a.createElement("a",{href:"/docs/secure-endpoints"},"Secure Endpoints documentation"),".")),a.a.createElement("td",null,"Yes - if endpoint is secure and httpOnly cookie is not used")),u&&a.a.createElement("tr",null,a.a.createElement("td",null,"Cache-Control"),a.a.createElement("td",null,a.a.createElement("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control")),a.a.createElement("td",null,"No")))}},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(143)),o=n(272),c={id:"authentication-register-user",title:"New user registration"},u={unversionedId:"authentication/authentication-register-user",id:"authentication/authentication-register-user",isDocsHomePage:!1,title:"New user registration",description:"Use the Authentication endpoint to register new users in your application.",source:"@site/docs/authentication/registration.md",slug:"/authentication/authentication-register-user",permalink:"/docs/authentication/authentication-register-user",version:"current",sidebar:"docs",previous:{title:"Authentication Endpoint",permalink:"/docs/authentication/authentication-endpoint"},next:{title:"Login",permalink:"/docs/authentication/authentication-login"}},i=[{value:"Request data",id:"request-data",children:[{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Request Headers",id:"request-headers",children:[]},{value:"POST body",id:"post-body",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],s={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Use the Authentication endpoint to register new users in your application."),Object(l.b)("h2",{id:"request-data"},"Request data"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"HTTP method:")," ",Object(l.b)("inlineCode",{parentName:"p"},"POST")),Object(l.b)("p",null,"URL format: https://",Object(l.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(l.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(l.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(l.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(l.b)("strong",{parentName:"p"},"apiKey"),"[&",Object(l.b)("strong",{parentName:"p"},"dataOnly"),"=true]"),Object(l.b)("p",null,"Example:"),Object(l.b)("p",null,"https://",Object(l.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(l.b)("strong",{parentName:"p"},"1"),"/",Object(l.b)("strong",{parentName:"p"},"ce"),"/",Object(l.b)("strong",{parentName:"p"},"examples/auth"),"?key=",Object(l.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"[&",Object(l.b)("strong",{parentName:"p"},"dataOnly=true"),"]"),Object(l.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(l.b)("p",null,"The following table describes the Request parameters."),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Parameter"),Object(l.b)("td",null,"Description"),Object(l.b)("td",null,"Required")),Object(l.b)("tr",null,Object(l.b)("td",null,"baseUrl"),Object(l.b)("td",null,"Base url for calling the API.",Object(l.b)("p",null,"Value: app.yawe.dev/api")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"versionNumber"),Object(l.b)("td",null,"Service version.",Object(l.b)("p",null,"Value: The current value is 1.")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"customEndpointRoute"),Object(l.b)("td",null,"The route which identifies custom endpoints.",Object(l.b)("p",null,"Default value: ce")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"userEndpoint"),Object(l.b)("td",null,"The endpoint name generated by the user.",Object(l.b)("p",null,"Value: the name created at ",Object(l.b)("a",{href:"https://app.yawe.dev"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"key"),Object(l.b)("td",null,"The API Key of the project."),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"dataOnly"),Object(l.b)("td",null,"If used, the endpoint response will be the POST body, without additional information such as \u2018uniqueId\u2019.",Object(l.b)("p",null,"Value: true")),Object(l.b)("td",null,"No"))),Object(l.b)("h3",{id:"request-headers"},"Request Headers"),Object(l.b)(o.a,{hasContentTypeHeader:!0,contentTypeUserOptions:["application/json"],mdxType:"RequestHeaders"}),Object(l.b)("h3",{id:"post-body"},"POST body"),Object(l.b)("p",null,"The registration endpoint expects a JSON with user credentials. It checks if username and password are provided and doesn\u2019t accept duplicate usernames."),Object(l.b)("p",null,"See the table below for more details:"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Parameter"),Object(l.b)("td",null,"Description"),Object(l.b)("td",null,"Required")),Object(l.b)("tr",null,Object(l.b)("td",null,"username"),Object(l.b)("td",null,"Type: String"),Object(l.b)("td",null,"Yes - if the email is not used")),Object(l.b)("tr",null,Object(l.b)("td",null,"email"),Object(l.b)("td",null,"Type: String"),Object(l.b)("td",null,"Yes - if the username is not used")),Object(l.b)("tr",null,Object(l.b)("td",null,"password"),Object(l.b)("td",null,"Type: String",Object(l.b)("p",null,"The password is not encrypted on the server side.")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"<otherParams>"),Object(l.b)("td",null,"It accepts more parameters."),Object(l.b)("td",null,"No"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," We recommend storing other user information in a separate endpoint, because other users won\u2019t have access to this endpoint."),Object(l.b)("h2",{id:"response-data"},"Response data"),Object(l.b)("h3",{id:"error-codes"},"Error codes"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Error code"),Object(l.b)("td",null,"Description")),Object(l.b)("tr",null,Object(l.b)("td",null,"400"),Object(l.b)("td",null,"Possible reasons:",Object(l.b)("ul",null,Object(l.b)("li",null,"Endpoint or API Key not valid."),Object(l.b)("li",null,'Wrong Content-Type, it only accepts "application/json".'),Object(l.b)("li",null,"Empty Request body."),Object(l.b)("li",null,"If ",Object(l.b)("strong",null,"username"),"/",Object(l.b)("strong",null,"email")," or ",Object(l.b)("strong",null,"password")," are not present in the request body."),Object(l.b)("li",null,"If the ",Object(l.b)("strong",null,"username")," already exists.")))),Object(l.b)("tr",null,Object(l.b)("td",null,"403"),Object(l.b)("td",null,"Missing API Key, not allowed origin or disallowed request without orign."))),Object(l.b)("h3",{id:"successful-response"},"Successful response"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\nuniqueId: "3f38bf9e1bb54d2396d1f1b8fbba1630",\ndata: { username: "usernameeee", password: "passworddddd" },\ncreatedAt: "2020-12-27T10:58:45.000Z",\nupdatedAt: "2020-12-27T10:58:45.000Z"\n}\n')))}b.isMDXComponent=!0}}]);