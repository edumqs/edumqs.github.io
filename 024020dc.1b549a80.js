(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=i(n),d=r,O=s["".concat(c,".").concat(d)]||s[d]||p[d]||l;return n?a.a.createElement(O,b(b({ref:t},u),{},{components:n})):a.a.createElement(O,b({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var u=2;u<l;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),l=(n(0),n(141)),c={id:"authentication-get-logged-in-user",title:"Get logged in user"},b={unversionedId:"authentication/authentication-get-logged-in-user",id:"authentication/authentication-get-logged-in-user",isDocsHomePage:!1,title:"Get logged in user",description:"You can get the logged in user performing a GET request to the authentication endpoint.",source:"@site/docs/authentication/get-logged-in-user.md",slug:"/authentication/authentication-get-logged-in-user",permalink:"/docs/authentication/authentication-get-logged-in-user",version:"current",sidebar:"docs",previous:{title:"Logout",permalink:"/docs/authentication/authentication-logout"},next:{title:"Update user",permalink:"/docs/authentication/authentication-update-user"}},o=[{value:"Request data",id:"request-data",children:[{value:"Request Cookies",id:"request-cookies",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],u={toc:o};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can get the logged in user performing a GET request to the authentication endpoint."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note that Authentication endpoints are secured by default, so you have to include the Access token in the request.")),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// set this property in the request options:\n{ credentials: 'include' } // using fetch\n{ withCredentials: true } // using axios\n")),Object(l.b)("h2",{id:"request-data"},"Request data"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"HTTP method:")," ",Object(l.b)("inlineCode",{parentName:"p"},"GET")),Object(l.b)("p",null,"URL format:\nhttps://",Object(l.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(l.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(l.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(l.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(l.b)("strong",{parentName:"p"},"apiKey"),"[&",Object(l.b)("strong",{parentName:"p"},"dataOnly"),"=true]"),Object(l.b)("p",null,"Example:"),Object(l.b)("p",null,"https://",Object(l.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(l.b)("strong",{parentName:"p"},"1"),"/",Object(l.b)("strong",{parentName:"p"},"ce"),"/",Object(l.b)("strong",{parentName:"p"},"examples/auth"),"?key=",Object(l.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"[&",Object(l.b)("strong",{parentName:"p"},"dataOnly"),"=true]"),Object(l.b)("h3",{id:"request-cookies"},"Request Cookies"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Header"),Object(l.b)("td",null,"Required"),Object(l.b)("td",null,"Description")),Object(l.b)("tr",null,Object(l.b)("td",null,"yawe_access_token"),Object(l.b)("td",null,"Yes"),Object(l.b)("td",null,"This token is obtained when doing a login. To automatically include it in the request you need to set the following property:",Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"})," // using fetch\n{ credentials: 'include' }\n\n// using axios\n{ withCredentials: true }\n"))))),Object(l.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(l.b)("p",null,"The following table describes the Request parameters."),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Parameter"),Object(l.b)("td",null,"Description"),Object(l.b)("td",null,"Required")),Object(l.b)("tr",null,Object(l.b)("td",null,"baseUrl"),Object(l.b)("td",null,"Base url for calling the API.",Object(l.b)("p",null,"Value: app.yawe.dev/api")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"versionNumber"),Object(l.b)("td",null,"Service version.",Object(l.b)("p",null,"Value: The current value is 1.")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"customEndpointRoute"),Object(l.b)("td",null,"The route which identifies custom endpoints.",Object(l.b)("p",null,"Default value: ce")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"userEndpoint"),Object(l.b)("td",null,"The endpoint name generated by the user.",Object(l.b)("p",null,"Value: the name created at ",Object(l.b)("a",{href:"https://app.yawe.dev"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"key"),Object(l.b)("td",null,"The API Key of the project."),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"dataOnly"),Object(l.b)("td",null,"If used, the endpoint response will be the POST body, without additional information such as \u2018uniqueId\u2019.",Object(l.b)("p",null,"Value: true")),Object(l.b)("td",null,"No")),Object(l.b)("tr",null,Object(l.b)("td",null,"masterKey"),Object(l.b)("td",null,"Overrides the need for ",Object(l.b)("i",null,"Access tokens")," or restrictions applied to Authentication endpoints.",Object(l.b)("p",null,"Don't use this key in your client application."),Object(l.b)("p",null,"For more information please refer to ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/projects"}),"projects"),"."),Object(l.b)("p",null,"Value: the masterKey created at ",Object(l.b)("a",{href:"https://app.yawe.dev"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")),".")),Object(l.b)("td",null,"No"))),Object(l.b)("h2",{id:"response-data"},"Response data"),Object(l.b)("h3",{id:"error-codes"},"Error codes"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Error code"),Object(l.b)("td",null,"Description")),Object(l.b)("tr",null,Object(l.b)("td",null,"400"),Object(l.b)("td",null,"Possible reasons:",Object(l.b)("ul",null,Object(l.b)("li",null,"Endpoint or API Key not valid.")))),Object(l.b)("tr",null,Object(l.b)("td",null,"401"),Object(l.b)("td",null,"Possible reasons:",Object(l.b)("ul",null,Object(l.b)("li",null,"Missing Access Token."),Object(l.b)("li",null,"Invalid credentials."),Object(l.b)("li",null,"Token expired."),Object(l.b)("li",null,"No user found.")))),Object(l.b)("tr",null,Object(l.b)("td",null,"403"),Object(l.b)("td",null,"Missing API Key, not allowed origin or disallowed request without orign."))),Object(l.b)("h3",{id:"successful-response"},"Successful response"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\nuniqueId: "3f38bf9e1bb54d2396d1f1b8fbba1630",\ndata: { username: "usernameeee" },\ncreatedAt: "2020-12-27T10:58:45.000Z",\nupdatedAt: "2020-12-27T10:58:45.000Z"\n}\n')))}i.isMDXComponent=!0}}]);