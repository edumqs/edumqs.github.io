(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),d=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},i=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),s=d(n),i=r,O=s["".concat(l,".").concat(i)]||s[i]||p[i]||c;return n?a.a.createElement(O,b(b({ref:t},o),{},{components:n})):a.a.createElement(O,b({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=i;var b={};for(var u in t)hasOwnProperty.call(t,u)&&(b[u]=t[u]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var o=2;o<c;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),c=(n(0),n(141)),l={id:"crud-read",title:"Read (GET)"},b={unversionedId:"crud/crud-read",id:"crud/crud-read",isDocsHomePage:!1,title:"Read (GET)",description:"Use the GET method to fetch data from your endpoint.",source:"@site/docs/crud/read.md",slug:"/crud/crud-read",permalink:"/docs/crud/crud-read",version:"current",sidebar:"docs",previous:{title:"Create (POST)",permalink:"/docs/crud/crud-create"},next:{title:"Update (PUT)",permalink:"/docs/crud/crud-update"}},u=[{value:"Request data",id:"request-data",children:[{value:"Request Cookies",id:"request-cookies",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],o={toc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Use the GET method to fetch data from your endpoint."),Object(c.b)("p",null,"Use one or more ",Object(c.b)("em",{parentName:"p"},"uniqueId"),"\u2019s to fetch specific records from the database. If not specified all records will be returned."),Object(c.b)("h2",{id:"request-data"},"Request data"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"HTTP method:")," ",Object(c.b)("inlineCode",{parentName:"p"},"GET")),Object(c.b)("p",null,"URL format: https://",Object(c.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(c.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(c.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(c.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(c.b)("strong",{parentName:"p"},"apiKey["),"&uniqueId=",Object(c.b)("strong",{parentName:"p"},"uniqueId]"),"[&",Object(c.b)("strong",{parentName:"p"},"dataOnly"),"=true]"),Object(c.b)("p",null,"Example:"),Object(c.b)("p",null,"https://",Object(c.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(c.b)("strong",{parentName:"p"},"1"),"/",Object(c.b)("strong",{parentName:"p"},"ce"),"/",Object(c.b)("strong",{parentName:"p"},"examples/unsecure-endpoint"),"?key=",Object(c.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"[&uniqueId=",Object(c.b)("strong",{parentName:"p"},"45e964d5b6ed49b1a2e14d8ac724109e"),"][&dataOnly=true]"),Object(c.b)("h3",{id:"request-cookies"},"Request Cookies"),Object(c.b)("table",null,Object(c.b)("tr",null,Object(c.b)("td",null,"Header"),Object(c.b)("td",null,"Description"),Object(c.b)("td",null,"Required")),Object(c.b)("tr",null,Object(c.b)("td",null,"yawe_access_token"),Object(c.b)("td",null,"The Access token is required for secure endpoints.",Object(c.b)("p",null,"It is obtained when doing a login. To automatically include it in the request you need to set the following property:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"})," // using fetch\n{ credentials: 'include' }\n\n// using axios\n{ withCredentials: true }\n")),Object(c.b)("p",null,"For more information check ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/secure-endpoints"}),"Secure Endpoints"),".")),Object(c.b)("td",null,"No"))),Object(c.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(c.b)("p",null,"The following table describes the Request parameters."),Object(c.b)("table",null,Object(c.b)("tr",null,Object(c.b)("td",null,"Parameter"),Object(c.b)("td",null,"Description"),Object(c.b)("td",null,"Required")),Object(c.b)("tr",null,Object(c.b)("td",null,"baseUrl"),Object(c.b)("td",null,"Base url for calling the API.",Object(c.b)("p",null,"Value: app.yawe.dev/api")),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"versionNumber"),Object(c.b)("td",null,"Service version.",Object(c.b)("p",null,"Value: The current value is 1.")),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"customEndpointRoute"),Object(c.b)("td",null,"The route which identifies custom endpoints.",Object(c.b)("p",null,"Default value: ce")),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"userEndpoint"),Object(c.b)("td",null,"The endpoint name generated by the user.",Object(c.b)("p",null,"Value: the name created at ",Object(c.b)("a",{href:"https://app.yawe.dev"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"apiKey"),Object(c.b)("td",null,"The API Key of the project."),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"uniqueId"),Object(c.b)("td",null,"If used, the endpoint will only serve the record with a matching uniqueId.",Object(c.b)("p",null,"   It is also possible to provide multiple uniqueId's."),Object(c.b)("p",null,"If none is passed, the endpoint will serve all the records.")),Object(c.b)("td",null,"No")),Object(c.b)("tr",null,Object(c.b)("td",null,"dataOnly"),Object(c.b)("td",null,"If used, the endpoint will only serve the user data. It won\u2019t include fields such as ",Object(c.b)("em",null,"uniqueId, createdAt, updateAt"),".",Object(c.b)("p",null,"Value: true")),Object(c.b)("td",null,"No")),Object(c.b)("tr",null,Object(c.b)("td",null,"masterKey"),Object(c.b)("td",null,"Overrides the need for ",Object(c.b)("i",null,"Access tokens")," or restrictions applied to Authentication endpoints.",Object(c.b)("p",null,"Don't use this key in your client application."),Object(c.b)("p",null,"For more information please refer to ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/projects"}),"projects"),"."),Object(c.b)("p",null,"Value: the masterKey created at ",Object(c.b)("a",{href:"https://app.yawe.dev"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")),".")),Object(c.b)("td",null,"No")),Object(c.b)("tr",null,Object(c.b)("td",null,"jsonata"),Object(c.b)("td",null,Object(c.b)("p",null,"Use this parameter to query, filter, sort and transform your data (and more!)"),Object(c.b)("p",null,"It accepts ",Object(c.b)("a",{target:"_blank",href:"https://docs.jsonata.org/overview.html"},"JSONata")," compatible expressions."),Object(c.b)("p",null,"The evaluation of the expression is applied to the output of the endpoint, including when other parameters are used (e.g. dataOnly)."),Object(c.b)("p",null,"Check the JSONata documentation on their ",Object(c.b)("a",{target:"_blank",href:"https://docs.jsonata.org/overview.html"},"page"),", or check our quick guide, ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/jsonata"}),"JSONata, query and transform"),".")),Object(c.b)("td",null,"No"))),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"https://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd&uniqueId=45e964d5b6ed49b1a2e14d8ac724109e\n\n// With multiple uniqueIds:\n\nhttps://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd&uniqueId=45e964d5b6ed49b1a2e14d8ac724109e&uniqueId=3f38bf9e1bb54d2396d1f1b8fbba1630\n")),Object(c.b)("h2",{id:"response-data"},"Response data"),Object(c.b)("h3",{id:"error-codes"},"Error codes"),Object(c.b)("table",null,Object(c.b)("tr",null,Object(c.b)("td",null,"Error code"),Object(c.b)("td",null,"Description")),Object(c.b)("tr",null,Object(c.b)("td",null,"400"),Object(c.b)("td",null,"Possible reasons:",Object(c.b)("ul",null,Object(c.b)("li",null,"Endpoint or API Key not valid.")))),Object(c.b)("tr",null,Object(c.b)("td",null,"401"),Object(c.b)("td",null,"If the endpoint is ",Object(c.b)("strong",null,"secure")," and the access token is missing or is not valid.",Object(c.b)("p",null,"It may also return this error if the user no longer exists."))),Object(c.b)("tr",null,Object(c.b)("td",null,"403"),Object(c.b)("td",null,"Missing API Key, not allowed origin or disallowed request without orign."))),Object(c.b)("h3",{id:"successful-response"},"Successful response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    uniqueId: "3f38bf9e1bb54d2396d1f1b8fbba1630",\n    data: { property: "data" },\n    createdAt: "2020-12-27T10:58:45.000Z",\n    updatedAt: "2020-12-27T10:58:45.000Z"\n}\n')),Object(c.b)("p",null,"Example of a successful response using ",Object(c.b)("strong",{parentName:"p"},"dataOnly=true"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'{\n"propertyFive": "555"\n}\n')),Object(c.b)("p",null,"If the response includes multiple records it returns an Array[] of records:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'[{\n    uniqueId: "3f38bf9e1bb54d2396d1f1b8fbba1630",\n    data: { property: "data" },\n    createdAt: "2020-12-27T10:58:45.000Z",\n    updatedAt: "2020-12-27T10:58:45.000Z"\n}, {\n    uniqueId: "3f38bf9e1bb54d2396d1f1b8fbba1630",\n    data: { property: "data2" },\n    createdAt: "2020-12-27T10:58:45.000Z",\n    updatedAt: "2020-12-27T10:58:45.000Z"\n}]\n')))}d.isMDXComponent=!0}}]);