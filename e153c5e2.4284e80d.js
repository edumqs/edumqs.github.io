(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return i}));var r=n(3),o=n(7),a=(n(0),n(143)),l={id:"authentication-logout",title:"Logout"},c={unversionedId:"authentication/authentication-logout",id:"authentication/authentication-logout",isDocsHomePage:!1,title:"Logout",description:"Use the logout endpoint to logout your user. This endpoint essentially deletes the Cookie containing the access token.",source:"@site/docs/authentication/logout.md",slug:"/authentication/authentication-logout",permalink:"/docs/authentication/authentication-logout",version:"current",sidebar:"docs",previous:{title:"Login",permalink:"/docs/authentication/authentication-login"},next:{title:"Get logged-in user",permalink:"/docs/authentication/authentication-get-logged-in-user"}},u=[{value:"Request data",id:"request-data",children:[{value:"Request Parameters",id:"request-parameters",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],b={toc:u};function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use the logout endpoint to logout your user. This endpoint essentially deletes the Cookie containing the access token."),Object(a.b)("h2",{id:"request-data"},"Request data"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"HTTP method:")," ",Object(a.b)("inlineCode",{parentName:"p"},"POST")),Object(a.b)("p",null,"URL format:\nhttps://",Object(a.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(a.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(a.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(a.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(a.b)("strong",{parentName:"p"},"apiKey"),"&",Object(a.b)("strong",{parentName:"p"},"logout=true")),Object(a.b)("p",null,"Example:"),Object(a.b)("p",null,"https://",Object(a.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(a.b)("strong",{parentName:"p"},"1"),"/",Object(a.b)("strong",{parentName:"p"},"ce"),"/",Object(a.b)("strong",{parentName:"p"},"examples/auth"),"?key=",Object(a.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"&",Object(a.b)("strong",{parentName:"p"},"logout=true")),Object(a.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(a.b)("p",null,"The following table describes the Request parameters."),Object(a.b)("table",null,Object(a.b)("tr",null,Object(a.b)("td",null,"Parameter"),Object(a.b)("td",null,"Description"),Object(a.b)("td",null,"Required")),Object(a.b)("tr",null,Object(a.b)("td",null,"baseUrl"),Object(a.b)("td",null,"Base url for calling the API.",Object(a.b)("p",null,"Value: app.yawe.dev/api")),Object(a.b)("td",null,"Yes")),Object(a.b)("tr",null,Object(a.b)("td",null,"versionNumber"),Object(a.b)("td",null,"Service version.",Object(a.b)("p",null,"Value: The current value is 1.")),Object(a.b)("td",null,"Yes")),Object(a.b)("tr",null,Object(a.b)("td",null,"customEndpointRoute"),Object(a.b)("td",null,"The route which identifies custom endpoints.",Object(a.b)("p",null,"Default value: ce")),Object(a.b)("td",null,"Yes")),Object(a.b)("tr",null,Object(a.b)("td",null,"userEndpoint"),Object(a.b)("td",null,"The endpoint name generated by the user.",Object(a.b)("p",null,"Value: the name created at ",Object(a.b)("a",{href:"https://app.yawe.dev"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(a.b)("td",null,"Yes")),Object(a.b)("tr",null,Object(a.b)("td",null,"key"),Object(a.b)("td",null,"The API Key of the project."),Object(a.b)("td",null,"Yes")),Object(a.b)("tr",null,Object(a.b)("td",null,"logout"),Object(a.b)("td",null,"Required to perform a logout.",Object(a.b)("p",null,"Value: true")),Object(a.b)("td",null,"Yes"))),Object(a.b)("h2",{id:"response-data"},"Response data"),Object(a.b)("h3",{id:"error-codes"},"Error codes"),Object(a.b)("table",null,Object(a.b)("tr",null,Object(a.b)("td",null,"Error code"),Object(a.b)("td",null,"Description")),Object(a.b)("tr",null,Object(a.b)("td",null,"400"),Object(a.b)("td",null,"Possible reasons:",Object(a.b)("ul",null,Object(a.b)("li",null,"Endpoint or API Key not valid.")))),Object(a.b)("tr",null,Object(a.b)("td",null,"403"),Object(a.b)("td",null,"Missing API Key, not allowed origin or disallowed request without orign."))),Object(a.b)("h3",{id:"successful-response"},"Successful response"),Object(a.b)("p",null,"It returns a 204 after a successful logout."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Cookies:")," None"))}i.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),i=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),s=i(n),d=r,O=s["".concat(l,".").concat(d)]||s[d]||p[d]||a;return n?o.a.createElement(O,c(c({ref:t},b),{},{components:n})):o.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<a;b++)l[b]=n[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);