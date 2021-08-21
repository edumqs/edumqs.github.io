(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var l=n(3),a=n(7),r=(n(0),n(142)),b={id:"upload-read",title:"Read file data / Get file"},c={unversionedId:"file-uploads/upload-read",id:"file-uploads/upload-read",isDocsHomePage:!1,title:"Read file data / Get file",description:"The GET method can be used in two ways:",source:"@site/docs/file-uploads/read.md",slug:"/file-uploads/upload-read",permalink:"/docs/file-uploads/upload-read",version:"current",sidebar:"docs",previous:{title:"Upload (POST)",permalink:"/docs/file-uploads/upload-post"},next:{title:"Delete a file (DELETE)",permalink:"/docs/file-uploads/upload-delete"}},o=[{value:"Request data",id:"request-data",children:[{value:"Request Headers",id:"request-headers",children:[]},{value:"Request Cookies",id:"request-cookies",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],u={toc:o};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The GET method can be used in two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Read data associated with the file."),Object(r.b)("li",{parentName:"ul"},"Download the file.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reading data")," from the endpoint is done like in the ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/crud/crud-read"}),"CRUD READ endpoint"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"To download the file")," you simply need to specify a single ",Object(r.b)("em",{parentName:"p"},"uniqueId")," and use the parameter ",Object(r.b)("strong",{parentName:"p"},"fileOnly=true")," in the URL."),Object(r.b)("h2",{id:"request-data"},"Request data"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"HTTP method:")," ",Object(r.b)("inlineCode",{parentName:"p"},"GET")),Object(r.b)("p",null,"URL format: https://",Object(r.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(r.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(r.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(r.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(r.b)("strong",{parentName:"p"},"apiKey["),"&uniqueId=",Object(r.b)("strong",{parentName:"p"},"uniqueId]"),"[&",Object(r.b)("strong",{parentName:"p"},"fileOnly"),"=true]"),Object(r.b)("p",null,"Example:"),Object(r.b)("p",null,"https://",Object(r.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(r.b)("strong",{parentName:"p"},"1"),"/",Object(r.b)("strong",{parentName:"p"},"ce"),"/",Object(r.b)("strong",{parentName:"p"},"examples/unsecure-endpoint"),"?key=",Object(r.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"[&uniqueId=",Object(r.b)("strong",{parentName:"p"},"45e964d5b6ed49b1a2e14d8ac724109e"),"][&fileOnly=true]"),Object(r.b)("h3",{id:"request-headers"},"Request Headers"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Header"),Object(r.b)("td",null,"Description"),Object(r.b)("td",null,"Required")),Object(r.b)("tr",null,Object(r.b)("td",null,"Cache-Control"),Object(r.b)("td",null,Object(r.b)("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control")),Object(r.b)("td",null,"No"))),Object(r.b)("h3",{id:"request-cookies"},"Request Cookies"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Name"),Object(r.b)("td",null,"Description"),Object(r.b)("td",null,"Required")),Object(r.b)("tr",null,Object(r.b)("td",null,"yawe_access_token"),Object(r.b)("td",null,"The Access token is required for secure endpoints.",Object(r.b)("p",null,"It is obtained when doing a login. To automatically include it in the request you need to set the following property:"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"})," // using fetch\n{ credentials: 'include' }\n\n// using axios\n{ withCredentials: true }\n")),Object(r.b)("p",null,"For more information check ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/secure-endpoints"}),"Secure Endpoints"),".")),Object(r.b)("td",null,"No"))),Object(r.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(r.b)("p",null,"The following table describes the Request parameters."),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Parameter"),Object(r.b)("td",null,"Description"),Object(r.b)("td",null,"Required")),Object(r.b)("tr",null,Object(r.b)("td",null,"baseUrl"),Object(r.b)("td",null,"Base url for calling the API.",Object(r.b)("p",null,"Value: app.yawe.dev/api")),Object(r.b)("td",null,"Yes")),Object(r.b)("tr",null,Object(r.b)("td",null,"versionNumber"),Object(r.b)("td",null,"Service version.",Object(r.b)("p",null,"Value: The current value is 1.")),Object(r.b)("td",null,"Yes")),Object(r.b)("tr",null,Object(r.b)("td",null,"customEndpointRoute"),Object(r.b)("td",null,"The route which identifies custom endpoints.",Object(r.b)("p",null,"Default value: ce")),Object(r.b)("td",null,"Yes")),Object(r.b)("tr",null,Object(r.b)("td",null,"userEndpoint"),Object(r.b)("td",null,"The endpoint name generated by the user.",Object(r.b)("p",null,"Value: the name created at ",Object(r.b)("a",{href:"https://app.yawe.dev"},Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(r.b)("td",null,"Yes")),Object(r.b)("tr",null,Object(r.b)("td",null,"apiKey"),Object(r.b)("td",null,"The API Key of the project."),Object(r.b)("td",null,"Yes")),Object(r.b)("tr",null,Object(r.b)("td",null,"uniqueId"),Object(r.b)("td",null,"If used, the endpoint will only serve the record with a matching uniqueId.",Object(r.b)("p",null,"   It is also possible to provide multiple uniqueId's."),Object(r.b)("p",null,"If none is passed, the endpoint will serve all the records.")),Object(r.b)("td",null,"No")),Object(r.b)("tr",null,Object(r.b)("td",null,"fileOnly"),Object(r.b)("td",null,"Use this to download the file, or use it in a HTML tag, such as ",Object(r.b)("i",null,"img")," or ",Object(r.b)("i",null,"video"),".",Object(r.b)("p",null,"To use this you must provide a single uniqueId."),Object(r.b)("b",null,"Value: true")),Object(r.b)("td",null,"No")),Object(r.b)("tr",null,Object(r.b)("td",null,"dataOnly"),Object(r.b)("td",null,"If used, the endpoint will only serve the user data. It won\u2019t include fields such as ",Object(r.b)("em",null,"uniqueId, createdAt, updateAt"),".",Object(r.b)("p",null,"Value: true")),Object(r.b)("td",null,"No")),Object(r.b)("tr",null,Object(r.b)("td",null,"masterKey"),Object(r.b)("td",null,"Overrides the need for ",Object(r.b)("i",null,"Access tokens")," or restrictions applied to Authentication endpoints.",Object(r.b)("p",null,"Don't use this key in your client application."),Object(r.b)("p",null,"For more information please refer to ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/getting-started/projects"}),"projects"),"."),Object(r.b)("p",null,"Value: the masterKey created at ",Object(r.b)("a",{href:"https://app.yawe.dev"},Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")),".")),Object(r.b)("td",null,"No")),Object(r.b)("tr",null,Object(r.b)("td",null,"jsonata"),Object(r.b)("td",null,Object(r.b)("p",null,"Use this parameter to query, filter, sort and transform your data (and more!)"),Object(r.b)("p",null,"It accepts ",Object(r.b)("a",{target:"_blank",href:"https://docs.jsonata.org/overview.html"},"JSONata")," compatible expressions."),Object(r.b)("p",null,"The evaluation of the expression is applied to the output of the endpoint, including when other parameters are used (e.g. dataOnly)."),Object(r.b)("p",null,"Check the JSONata documentation on their ",Object(r.b)("a",{target:"_blank",href:"https://docs.jsonata.org/overview.html"},"page"),", or check our quick guide, ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/jsonata"}),"JSONata, query and transform"),"."),Object(r.b)("p",null,"Note: Not applicable when ",Object(r.b)("i",null,"fileOnly")," is used.")),Object(r.b)("td",null,"No"))),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),"// to get all the data associated with files existing in the endpoint:\n\nhttps://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd\n\n// With a single uniqueId:\n\nhttps://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd&uniqueId=45e964d5b6ed49b1a2e14d8ac724109e\n\n// With multiple uniqueIds:\n\nhttps://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd&uniqueId=45e964d5b6ed49b1a2e14d8ac724109e&uniqueId=3f38bf9e1bb54d2396d1f1b8fbba1630\n\n// To download the file:\n\nhttps://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd&uniqueId=45e964d5b6ed49b1a2e14d8ac724109e&fileOnly=true\n")),Object(r.b)("h2",{id:"response-data"},"Response data"),Object(r.b)("h3",{id:"error-codes"},"Error codes"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Error code"),Object(r.b)("td",null,"Description")),Object(r.b)("tr",null,Object(r.b)("td",null,"400"),Object(r.b)("td",null,"Possible reasons:",Object(r.b)("ul",null,Object(r.b)("li",null,"Endpoint or API Key not valid."),Object(r.b)("li",null,"No file."),Object(r.b)("li",null,"fileOnly parameter used without a single uniqueId.")))),Object(r.b)("tr",null,Object(r.b)("td",null,"401"),Object(r.b)("td",null,"If the endpoint is ",Object(r.b)("strong",null,"secure")," and the access token is missing or is not valid.",Object(r.b)("p",null,"It may also return this error if the user no longer exists."))),Object(r.b)("tr",null,Object(r.b)("td",null,"403"),Object(r.b)("td",null,"Missing API Key, not allowed origin or disallowed request without orign."))),Object(r.b)("h3",{id:"successful-response"},"Successful response"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "uniqueId": "0bbf487842334d2d906d7473689886d5",\n  "data": {\n    "metadata": {},\n    "contentType": "image/png",\n    "mimetype": "image/png",\n    "size": 295217,\n    "originalname": "Screenshot from 2021-01-12 11-09-05.png",\n    "fileURL": "https://localhost:8443/api/1/ce/files%3E%3E%3EScreenshot%20from%202021-01-12%2011-09-05.png?key=1ca09ab323ac4c12b82c4ca4591e922e&uniqueId=0bbf487842334d2d906d7473689886d5&fileOnly=true"\n  },\n  "createdAt": "2021-02-19T15:56:13.000Z",\n  "updatedAt": "2021-02-19T15:56:13.000Z"\n}\n')),Object(r.b)("p",null,"To download the file you can use the ",Object(r.b)("strong",{parentName:"p"},"fileURL")," provided in the response."))}d.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var l=n(0),a=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,b=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),i=d(n),p=l,O=i["".concat(b,".").concat(p)]||i[p]||s[p]||r;return n?a.a.createElement(O,c(c({ref:t},u),{},{components:n})):a.a.createElement(O,c({ref:t},u))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,b=new Array(r);b[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,b[1]=c;for(var u=2;u<r;u++)b[u]=n[u];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);