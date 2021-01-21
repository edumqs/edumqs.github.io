(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),i=s(n),p=r,O=i["".concat(b,".").concat(p)]||i[p]||d[p]||c;return n?a.a.createElement(O,l(l({ref:t},u),{},{components:n})):a.a.createElement(O,l({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var u=2;u<c;u++)b[u]=n[u];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(113)),b={id:"crud-create",title:"Create (POST)"},l={unversionedId:"crud/crud-create",id:"crud/crud-create",isDocsHomePage:!1,title:"Create (POST)",description:"Use the POST method to store data.",source:"@site/docs/crud/create.md",slug:"/crud/crud-create",permalink:"/docs/crud/crud-create",version:"current",sidebar:"docs",previous:{title:"Endpoints",permalink:"/docs/getting-started/endpoints"},next:{title:"Read (GET)",permalink:"/docs/crud/crud-read"}},o=[{value:"Request data",id:"request-data",children:[]},{value:"Request Headers",id:"request-headers",children:[{value:"Request Parameters",id:"request-parameters",children:[]},{value:"POST body",id:"post-body",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],u={toc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Use the POST method to store data."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Content type"),' supported is "text/plain" or "application/json" - You can send plain text to the server or JSON. We recommend using \u201capplication/json\u201d but give the option of \u201ctext/plain\u201d requests to give developers more freedom.'),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"uniqueId")," - For each request we generate an uniqueId to identify the record stored in the database. This id can be used for the other request types."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Please remember that you are responsible for the data stored in your endpoints. YAWE's only objective is to provide a service to its users to make their life easier, we don't have interest in the data and we don't monitor it."))),Object(c.b)("h2",{id:"request-data"},"Request data"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"HTTP method:")," ",Object(c.b)("inlineCode",{parentName:"p"},"POST")),Object(c.b)("p",null,"URL format:\nhttps://",Object(c.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(c.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(c.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(c.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(c.b)("strong",{parentName:"p"},"apiKey"),"[&dataOnly=",Object(c.b)("strong",{parentName:"p"},"true"),"]"),Object(c.b)("p",null,"Example:\nhttps://",Object(c.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(c.b)("strong",{parentName:"p"},"1"),"/",Object(c.b)("strong",{parentName:"p"},"ce"),"/",Object(c.b)("strong",{parentName:"p"},"examples/unsecure-endpoint"),"?key=",Object(c.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"[&dataOnly=",Object(c.b)("strong",{parentName:"p"},"true"),"]"),Object(c.b)("h2",{id:"request-headers"},"Request Headers"),Object(c.b)("table",null,Object(c.b)("tr",null,Object(c.b)("td",null,"Header"),Object(c.b)("td",null,"Description"),Object(c.b)("td",null,"Required")),Object(c.b)("tr",null,Object(c.b)("td",null,"Content-Type"),Object(c.b)("td",null,"Specifies the MIME type of the body of the Request. It may be:",Object(c.b)("ul",null,Object(c.b)("li",null,"application/json"),Object(c.b)("li",null,"text/plain"))),Object(c.b)("td",null,"Yes"))),Object(c.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(c.b)("p",null,"The following table describes the Request parameters."),Object(c.b)("table",null,Object(c.b)("tr",null,Object(c.b)("td",null,"Parameter"),Object(c.b)("td",null,"Description"),Object(c.b)("td",null,"Required")),Object(c.b)("tr",null,Object(c.b)("td",null,"baseUrl"),Object(c.b)("td",null,"Base url for calling the API.",Object(c.b)("p",null,"Value: app.yawe.dev/api")),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"versionNumber"),Object(c.b)("td",null,"Service version.",Object(c.b)("p",null,"Value: The current value is 1.")),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"customEndpointRoute"),Object(c.b)("td",null,"The route which identifies custom endpoints.",Object(c.b)("p",null,"Default value: ce")),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"userEndpoint"),Object(c.b)("td",null,"The endpoint name generated by the user.",Object(c.b)("p",null,"Value: the name created at ",Object(c.b)("a",{href:"https://app.yawe.dev"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"key"),Object(c.b)("td",null,"The API Key of the project."),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"dataOnly"),Object(c.b)("td",null,"If used, the endpoint response will be the POST body, without additional information such as \u2018uniqueId\u2019.",Object(c.b)("p",null,"Value: true")),Object(c.b)("td",null,"No"))),Object(c.b)("h3",{id:"post-body"},"POST body"),Object(c.b)("p",null,"You can post JSON or plain text, just make sure you set the appropriate Content-Type header."),Object(c.b)("h2",{id:"response-data"},"Response data"),Object(c.b)("h3",{id:"error-codes"},"Error codes"),Object(c.b)("table",null,Object(c.b)("tr",null,Object(c.b)("td",null,"Error code"),Object(c.b)("td",null,"Description")),Object(c.b)("tr",null,Object(c.b)("td",null,"400"),Object(c.b)("td",null,"Possible reasons:",Object(c.b)("ul",null,Object(c.b)("li",null,"Endpoint or API Key not valid."),Object(c.b)("li",null,'Wrong Content-Type, it only accepts "text/plain" or "application/json".'),Object(c.b)("li",null,"Empty Request body.")))),Object(c.b)("tr",null,Object(c.b)("td",null,"401"),Object(c.b)("td",null,"If the endpoint is ",Object(c.b)("strong",null,"secured")," and the access token is missing or is not valid.",Object(c.b)("p",null,"It may also return this error if the user no longer exists."))),Object(c.b)("tr",null,Object(c.b)("td",null,"403"),Object(c.b)("td",null,"Missing API Key."))),Object(c.b)("h3",{id:"successful-response"},"Successful response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    uniqueId: "3f38bf9e1bb54d2396d1f1b8fbba1630",\n    data: { property: "data" },\n    createdAt: "2020-12-27T10:58:45.000Z",\n    updatedAt: "2020-12-27T10:58:45.000Z"\n}\n')))}s.isMDXComponent=!0}}]);