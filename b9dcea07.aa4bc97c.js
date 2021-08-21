(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),l=n(7),b=(n(0),n(142)),c={id:"crud-update",title:"Update (PUT)"},a={unversionedId:"crud/crud-update",id:"crud/crud-update",isDocsHomePage:!1,title:"Update (PUT)",description:"Use the PUT method to update a record.",source:"@site/docs/crud/update.md",slug:"/crud/crud-update",permalink:"/docs/crud/crud-update",version:"current",sidebar:"docs",previous:{title:"Read (GET)",permalink:"/docs/crud/crud-read"},next:{title:"Delete (DELETE)",permalink:"/docs/crud/crud-delete"}},u=[{value:"Request data",id:"request-data",children:[{value:"Request Cookies",id:"request-cookies",children:[]},{value:"Request Headers",id:"request-headers",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]},{value:"POST body",id:"post-body",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],o={toc:u};function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Use the PUT method to update a record."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Content types"),' supported are "text/plain" or "application/json" - You can send plain text to the server or JSON. We recommend using "application/json" but also give the option of "text/plain" requests to give developers more freedom.'),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"uniqueId")," - The uniqueId is required to replace the existing data of the record."),Object(b.b)("h2",{id:"request-data"},"Request data"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"HTTP method")," ",Object(b.b)("inlineCode",{parentName:"p"},"PUT")),Object(b.b)("p",null,"URL format: https://",Object(b.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(b.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(b.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(b.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(b.b)("strong",{parentName:"p"},"apiKey"),"&uniqueId=",Object(b.b)("strong",{parentName:"p"},"uniqueId"),"[&dataOnly=",Object(b.b)("strong",{parentName:"p"},"true"),"]"),Object(b.b)("p",null,"Example:"),Object(b.b)("p",null,"https://",Object(b.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(b.b)("strong",{parentName:"p"},"1"),"/",Object(b.b)("strong",{parentName:"p"},"ce"),"/",Object(b.b)("strong",{parentName:"p"},"examples/unsecure-endpoint"),"?key=",Object(b.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"&uniqueId=",Object(b.b)("strong",{parentName:"p"},"45e964d5b6ed49b1a2e14d8ac724109e"),"[&dataOnly=true]"),Object(b.b)("h3",{id:"request-cookies"},"Request Cookies"),Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("td",null,"Header"),Object(b.b)("td",null,"Description"),Object(b.b)("td",null,"Required")),Object(b.b)("tr",null,Object(b.b)("td",null,"yawe_access_token"),Object(b.b)("td",null,"The Access token is required for secure endpoints.",Object(b.b)("p",null,"It is obtained when doing a login. To automatically include it in the request you need to set the following property:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"})," // using fetch\n{ credentials: 'include' }\n\n// using axios\n{ withCredentials: true }\n")),Object(b.b)("p",null,"For more information check ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/secure-endpoints"}),"Secure Endpoints"),".")),Object(b.b)("td",null,"No"))),Object(b.b)("h3",{id:"request-headers"},"Request Headers"),Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("td",null,"Header"),Object(b.b)("td",null,"Required"),Object(b.b)("td",null,"Description")),Object(b.b)("tr",null,Object(b.b)("td",null,"Content-Type"),Object(b.b)("td",null,"Yes"),Object(b.b)("td",null,"Specifies the MIME type of the body of the Request. It may be:",Object(b.b)("ul",null,Object(b.b)("li",null,"application/json"),Object(b.b)("li",null,"text/plain"))))),Object(b.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(b.b)("p",null,"The following table describes the Request parameters."),Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("td",null,"Parameter"),Object(b.b)("td",null,"Description"),Object(b.b)("td",null,"Required")),Object(b.b)("tr",null,Object(b.b)("td",null,"baseUrl"),Object(b.b)("td",null,"Base url for calling the API.",Object(b.b)("p",null,"Value: app.yawe.dev/api")),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"versionNumber"),Object(b.b)("td",null,"Service version.",Object(b.b)("p",null,"Value: The current value is 1.")),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"customEndpointRoute"),Object(b.b)("td",null,"The route which identifies custom endpoints.",Object(b.b)("p",null,"Default value: ce")),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"userEndpoint"),Object(b.b)("td",null,Object(b.b)("p",null,"The endpoint name generated by the user."),Object(b.b)("p",null,"Value: the name created at ",Object(b.b)("a",{href:"https://app.yawe.dev"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"key"),Object(b.b)("td",null,"The API Key of the project."),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"uniqueId"),Object(b.b)("td",null,"The identifier of the record."),Object(b.b)("td",null,"Yes")),Object(b.b)("tr",null,Object(b.b)("td",null,"dataOnly"),Object(b.b)("td",null,Object(b.b)("p",null,"If used, the endpoint response will be the POST body, without additional information such as \u2018uniqueId\u2019."),Object(b.b)("p",null,"Value: true")),Object(b.b)("td",null,"No")),Object(b.b)("tr",null,Object(b.b)("td",null,"masterKey"),Object(b.b)("td",null,"Overrides the need for ",Object(b.b)("i",null,"Access tokens")," or restrictions applied to Authentication endpoints.",Object(b.b)("p",null,"Don't use this key in your client application."),Object(b.b)("p",null,"For more information please refer to ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/projects"}),"projects"),"."),Object(b.b)("p",null,"Value: the masterKey created at ",Object(b.b)("a",{href:"https://app.yawe.dev"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")),".")),Object(b.b)("td",null,"No")),Object(b.b)("tr",null,Object(b.b)("td",null,"strategy"),Object(b.b)("td",null,"A strategy allows you to choose how the data is updated.",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("i",null,"Values:"),Object(b.b)("br",null),Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("b",null,"force")," - (default) replaces the content regardless of the type."),Object(b.b)("li",null,Object(b.b)("b",null,"merge")," - merges objects, it only works with JSON."),Object(b.b)("li",null,Object(b.b)("b",null,"replace")," - replaces the entire content, types must be the same."))),Object(b.b)("td",null,"No"))),Object(b.b)("h3",{id:"post-body"},"POST body"),Object(b.b)("p",null,"You can post JSON or plain text, just make sure you set the appropriate Content-Type header."),Object(b.b)("h2",{id:"response-data"},"Response data"),Object(b.b)("h3",{id:"error-codes"},"Error codes"),Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("td",null,"Error code"),Object(b.b)("td",null,"Description")),Object(b.b)("tr",null,Object(b.b)("td",null,"400"),Object(b.b)("td",null,"Possible reasons:",Object(b.b)("ul",null,Object(b.b)("li",null,"Endpoint or API Key not valid."),Object(b.b)("li",null,'Wrong Content-Type, it only accepts "text/plain" or "application/json".'),Object(b.b)("li",null,"Empty Request body."),Object(b.b)("li",null,"uniqueId is not present in the URL."),Object(b.b)("li",null,"No record was found.")))),Object(b.b)("tr",null,Object(b.b)("td",null,"401"),Object(b.b)("td",null,"If the endpoint is ",Object(b.b)("strong",null,"secure")," and the access token is missing or is not valid.",Object(b.b)("p",null,"It may also return this error if the user no longer exists."))),Object(b.b)("tr",null,Object(b.b)("td",null,"403"),Object(b.b)("td",null,"Missing API Key, not allowed origin or disallowed request without orign."))),Object(b.b)("h3",{id:"successful-response"},"Successful response"),Object(b.b)("p",null,"This endpoint returns the new updated record."),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    uniqueId: "3f38bf9e1bb54d2396d1f1b8fbba1630",\n    data: { newProperty: "data" },\n    createdAt: "2020-12-27T10:58:45.000Z",\n    updatedAt: "2020-12-27T10:58:45.000Z"\n}\n')))}s.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),l=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),s=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,O=d["".concat(c,".").concat(p)]||d[p]||i[p]||b;return n?l.a.createElement(O,a(a({ref:t},o),{},{components:n})):l.a.createElement(O,a({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var o=2;o<b;o++)c[o]=n[o];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);