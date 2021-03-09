(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return i}));var l=n(3),r=n(7),b=(n(0),n(134)),a={id:"authentication-login",title:"Login"},c={unversionedId:"authentication/authentication-login",id:"authentication/authentication-login",isDocsHomePage:!1,title:"Login",description:"Use the login endpoint to authenticate your user and allow them to access secure endpoints.",source:"@site/docs/authentication/login.md",slug:"/authentication/authentication-login",permalink:"/docs/authentication/authentication-login",version:"current",sidebar:"docs",previous:{title:"New user registration",permalink:"/docs/authentication/authentication-register-user"},next:{title:"Logout",permalink:"/docs/authentication/authentication-logout"}},o=[{value:"Request data",id:"request-data",children:[{value:"Request Headers",id:"request-headers",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]},{value:"POST body",id:"post-body",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]},{value:"Cookies",id:"cookies",children:[]}]}],u={toc:o};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Use the login endpoint to authenticate your user and allow them to access secure endpoints."),Object(b.b)("h2",{id:"request-data"},"Request data"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"HTTP method:")," ",Object(b.b)("inlineCode",{parentName:"p"},"POST")),Object(b.b)("p",null,"URL format: https://",Object(b.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(b.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(b.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(b.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(b.b)("strong",{parentName:"p"},"apiKey"),"&",Object(b.b)("strong",{parentName:"p"},"login=true"),"[&",Object(b.b)("strong",{parentName:"p"},"dataOnly"),"=true]"),Object(b.b)("p",null,"Example:"),Object(b.b)("p",null,"https://",Object(b.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(b.b)("strong",{parentName:"p"},"1"),"/",Object(b.b)("strong",{parentName:"p"},"ce"),"/",Object(b.b)("strong",{parentName:"p"},"examples/auth"),"?key=",Object(b.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"&",Object(b.b)("strong",{parentName:"p"},"login=true"),"[&",Object(b.b)("strong",{parentName:"p"},"dataOnly"),"=true]"),Object(b.b)("h3",{id:"request-headers"},"Request Headers"),Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("td",null,"Header"),Object(b.b)("td",null,"Required"),Object(b.b)("td",null,"Description")),Object(b.b)("tr",null,Object(b.b)("td",null,"Content-Type"),Object(b.b)("td",null,"Yes"),Object(b.b)("td",null,"Specifies the MIME type of the body of the Request.",Object(b.b)("p",null,"It must be ",Object(b.b)("strong",null,"application/json."))))),Object(b.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(b.b)("p",null,"The following table describes the Request parameters."),Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("td",null,"Parameter"),Object(b.b)("td",null,"Description"),Object(b.b)("td",null,"Required")),Object(b.b)("tr",null,Object(b.b)("td",null,"baseUrl"),Object(b.b)("td",null,"Base url for calling the API.",Object(b.b)("p",null,"Value: app.yawe.dev/api")),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"versionNumber"),Object(b.b)("td",null,"Service version.",Object(b.b)("p",null,"Value: The current value is 1.")),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"customEndpointRoute"),Object(b.b)("td",null,"The route which identifies custom endpoints.",Object(b.b)("p",null,"Default value: ce")),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"userEndpoint"),Object(b.b)("td",null,"The endpoint name generated by the user.",Object(b.b)("p",null,"Value: the name created at ",Object(b.b)("a",{href:"https://app.yawe.dev"},Object(b.b)("a",Object(l.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"key"),Object(b.b)("td",null,"The API Key of the project."),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"login"),Object(b.b)("td",null,"Required to perform a login.",Object(b.b)("p",null,"Value: true")),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"dataOnly"),Object(b.b)("td",null,"If used, the endpoint response will be the POST body, without additional information such as \u2018uniqueId\u2019.",Object(b.b)("p",null,"Value: true")),Object(b.b)("td",null,"No"))),Object(b.b)("h3",{id:"post-body"},"POST body"),Object(b.b)("p",null,"The login endpoint expects a JSON with user credentials."),Object(b.b)("p",null,"See the table below for more details:"),Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("td",null,"Parameter"),Object(b.b)("td",null,"Description"),Object(b.b)("td",null,"Required")),Object(b.b)("tr",null,Object(b.b)("td",null,"username"),Object(b.b)("td",null,"Type: String"),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"password"),Object(b.b)("td",null,Object(b.b)("p",null,"The user password."),Object(b.b)("p",null,"Type: String")),Object(b.b)("td",null,"Yes"))),Object(b.b)("h2",{id:"response-data"},"Response data"),Object(b.b)("h3",{id:"error-codes"},"Error codes"),Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("td",null,"Error code"),Object(b.b)("td",null,"Description")),Object(b.b)("tr",null,Object(b.b)("td",null,"400"),Object(b.b)("td",null,"Possible reasons:",Object(b.b)("ul",null,Object(b.b)("li",null,"Endpoint or API Key not valid."),Object(b.b)("li",null,'Wrong Content-Type, it only accepts "application/json".'),Object(b.b)("li",null,"Empty Request body."),Object(b.b)("li",null,"If ",Object(b.b)("strong",null,"username")," or ",Object(b.b)("strong",null,"password")," are not present in the request body.")))),Object(b.b)("tr",null,Object(b.b)("td",null,"401"),Object(b.b)("td",null,"Invalid credentials.")),Object(b.b)("tr",null,Object(b.b)("td",null,"403"),Object(b.b)("td",null,"Missing API Key, not allowed origin or disallowed request without orign."))),Object(b.b)("h3",{id:"successful-response"},"Successful response"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),'{\nuniqueId: "3f38bf9e1bb54d2396d1f1b8fbba1630",\ndata: { username: "usernameeee" },\ncreatedAt: "2020-12-27T10:58:45.000Z",\nupdatedAt: "2020-12-27T10:58:45.000Z"\n}\n')),Object(b.b)("h3",{id:"cookies"},"Cookies"),Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("td",null,"Cookie"),Object(b.b)("td",null,"Description")),Object(b.b)("tr",null,Object(b.b)("td",null,"yawe_access_token"),Object(b.b)("td",null,"If the credentials are valid, the access token is sent in a httpOnly cookie as part of the response. httpOnly cookies are not accessible via JS.",Object(b.b)("p",null,"This token/cookie is valid for 30 days."),Object(b.b)("p",null,"To generate a new one a new login is required."),Object(b.b)("p",null,"This cookie is deleted when logout is performed.")))))}i.isMDXComponent=!0},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var l=n(0),r=n.n(l);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),i=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,b=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=i(n),p=l,O=s["".concat(a,".").concat(p)]||s[p]||d[p]||b;return n?r.a.createElement(O,c(c({ref:t},u),{},{components:n})):r.a.createElement(O,c({ref:t},u))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=n.length,a=new Array(b);a[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var u=2;u<b;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);