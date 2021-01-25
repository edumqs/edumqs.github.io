(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),c=n(7),l=(n(0),n(114)),a={id:"crud-delete",title:"Delete (DELETE)"},b={unversionedId:"crud/crud-delete",id:"crud/crud-delete",isDocsHomePage:!1,title:"Delete (DELETE)",description:"Use the DELETE method to delete a record.",source:"@site/docs/crud/delete.md",slug:"/crud/crud-delete",permalink:"/docs/crud/crud-delete",version:"current",sidebar:"docs",previous:{title:"Update (PUT)",permalink:"/docs/crud/crud-update"},next:{title:"Authentication Endpoint",permalink:"/docs/authentication/authentication-endpoint"}},u=[{value:"Request data",id:"request-data",children:[{value:"Request Cookies",id:"request-cookies",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],o={toc:u};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Use the DELETE method to delete a record."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"uniqueId")," - The uniqueId is required to delete the record."),Object(l.b)("h2",{id:"request-data"},"Request data"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"HTTP method:")," ",Object(l.b)("inlineCode",{parentName:"p"},"DELETE")),Object(l.b)("p",null,"URL format:\nhttps://",Object(l.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(l.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(l.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(l.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(l.b)("strong",{parentName:"p"},"apiKey"),"&uniqueId=",Object(l.b)("strong",{parentName:"p"},"uniqueId")),Object(l.b)("p",null,"Example:"),Object(l.b)("p",null,"https://",Object(l.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(l.b)("strong",{parentName:"p"},"1"),"/",Object(l.b)("strong",{parentName:"p"},"ce"),"/",Object(l.b)("strong",{parentName:"p"},"examples/unsecure-endpoint"),"?key=",Object(l.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"&uniqueId=",Object(l.b)("strong",{parentName:"p"},"45e964d5b6ed49b1a2e14d8ac724109e")),Object(l.b)("h3",{id:"request-cookies"},"Request Cookies"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Header"),Object(l.b)("td",null,"Description"),Object(l.b)("td",null,"Required")),Object(l.b)("tr",null,Object(l.b)("td",null,"yawe_access_token"),Object(l.b)("td",null,"The Access token is required for secure endpoints.",Object(l.b)("p",null,"It is obtained when doing a login. To automatically include it in the request you need to set the following property:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"})," // using fetch\n{ crendentials: 'include' }\n\n// using axios\n{ withCrendentials: true }\n")),Object(l.b)("p",null,"For more information check ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/secure-endpoints"}),"Secure Endpoints"),".")),Object(l.b)("td",null,"No"))),Object(l.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(l.b)("p",null,"The following table describes the Request parameters."),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Parameter"),Object(l.b)("td",null,"Description"),Object(l.b)("td",null,"Required")),Object(l.b)("tr",null,Object(l.b)("td",null,"baseUrl"),Object(l.b)("td",null,"Base url for calling the API.",Object(l.b)("p",null,"Value: app.yawe.dev/api")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"versionNumber"),Object(l.b)("td",null,"Service version.",Object(l.b)("p",null,"Value: The current value is 1.")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"customEndpointRoute"),Object(l.b)("td",null,"The route which identifies custom endpoints.",Object(l.b)("p",null,"Default value: ce")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"userEndpoint"),Object(l.b)("td",null,"The endpoint name generated by the user.",Object(l.b)("p",null,"Value: the name created at ",Object(l.b)("a",{href:"https://app.yawe.dev"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"apiKey"),Object(l.b)("td",null,"The API Key of the project."),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"uniqueId"),Object(l.b)("td",null,"_uniqueId_ of the record to be deleted."),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"masterKey"),Object(l.b)("td",null,"Overrides the need for ",Object(l.b)("i",null,"Access tokens")," or restrictions applied to Authentication endpoints.",Object(l.b)("p",null,"Don't use this key in your client application."),Object(l.b)("p",null,"For more information please refer to ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/projects"}),"projects"),"."),Object(l.b)("p",null,"Value: the masterKey created at ",Object(l.b)("a",{href:"https://app.yawe.dev"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")),".")),Object(l.b)("td",null,"No"))),Object(l.b)("p",null,"Usage example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const url = \"https://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd&uniqueId=45e964d5b6ed49b1a2e14d8ac724109e\";\n\nfetch(url, {\n  method: 'DELETE',\n})\n")),Object(l.b)("h2",{id:"response-data"},"Response data"),Object(l.b)("h3",{id:"error-codes"},"Error codes"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Error code"),Object(l.b)("td",null,"Description")),Object(l.b)("tr",null,Object(l.b)("td",null,"400"),Object(l.b)("td",null,"Possible reasons:",Object(l.b)("ul",null,Object(l.b)("li",null,"Endpoint or API Key not valid.")))),Object(l.b)("tr",null,Object(l.b)("td",null,"401"),Object(l.b)("td",null,"If the endpoint is ",Object(l.b)("strong",null,"secured")," and the access token is missing or is not valid.",Object(l.b)("p",null,"It may also return this error if the user no longer exists."))),Object(l.b)("tr",null,Object(l.b)("td",null,"403"),Object(l.b)("td",null,"Missing API Key."))),Object(l.b)("h3",{id:"successful-response"},"Successful response"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"{\ndeleted: true,\nmessage: 'Data deleted.'\n}\n")))}s.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),s=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=s(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,O=d["".concat(a,".").concat(p)]||d[p]||i[p]||l;return n?c.a.createElement(O,b(b({ref:t},o),{},{components:n})):c.a.createElement(O,b({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=p;var b={};for(var u in t)hasOwnProperty.call(t,u)&&(b[u]=t[u]);b.originalType=e,b.mdxType="string"==typeof e?e:r,a[1]=b;for(var o=2;o<l;o++)a[o]=n[o];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);