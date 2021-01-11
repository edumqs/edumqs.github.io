(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),c=n(7),a=(n(0),n(109)),l={id:"crud-delete",title:"Delete (DELETE)"},b={unversionedId:"crud/crud-delete",id:"crud/crud-delete",isDocsHomePage:!1,title:"Delete (DELETE)",description:"Use the DELETE method to delete a record.",source:"@site/docs/crud/delete.md",slug:"/crud/crud-delete",permalink:"/docs/crud/crud-delete",version:"current",sidebar:"docs",previous:{title:"Update (PUT)",permalink:"/docs/crud/crud-update"},next:{title:"Authentication Endpoint",permalink:"/docs/authentication/authentication-endpoint"}},u=[{value:"Request data",id:"request-data",children:[{value:"Request Parameters",id:"request-parameters",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],o={toc:u};function d(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use the DELETE method to delete a record."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"uniqueId")," - The uniqueId is required to delete the record."),Object(a.b)("h2",{id:"request-data"},"Request data"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"HTTP method:")," ",Object(a.b)("inlineCode",{parentName:"p"},"DELETE")),Object(a.b)("p",null,"URL format:\nhttps://",Object(a.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(a.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(a.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(a.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(a.b)("strong",{parentName:"p"},"apiKey"),"&uniqueId=",Object(a.b)("strong",{parentName:"p"},"uniqueId")),Object(a.b)("p",null,"Example:"),Object(a.b)("p",null,"https://",Object(a.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(a.b)("strong",{parentName:"p"},"1"),"/",Object(a.b)("strong",{parentName:"p"},"ce"),"/",Object(a.b)("strong",{parentName:"p"},"examples/unsecure-endpoint"),"?key=",Object(a.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"&uniqueId=",Object(a.b)("strong",{parentName:"p"},"45e964d5b6ed49b1a2e14d8ac724109e")),Object(a.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(a.b)("p",null,"The following table describes the Request parameters."),Object(a.b)("table",null,Object(a.b)("tr",null,Object(a.b)("td",null,"Parameter"),Object(a.b)("td",null,"Description"),Object(a.b)("td",null,"Required")),Object(a.b)("tr",null,Object(a.b)("td",null,"baseUrl"),Object(a.b)("td",null,"Base url for calling the API.",Object(a.b)("p",null,"Value: app.yawe.dev/api")),Object(a.b)("td",null,"Yes")),Object(a.b)("tr",null,Object(a.b)("td",null,"versionNumber"),Object(a.b)("td",null,"Service version.",Object(a.b)("p",null,"Value: The current value is 1.")),Object(a.b)("td",null,"Yes")),Object(a.b)("tr",null,Object(a.b)("td",null,"customEndpointRoute"),Object(a.b)("td",null,"The route which identifies custom endpoints.",Object(a.b)("p",null,"Default value: ce")),Object(a.b)("td",null,"Yes")),Object(a.b)("tr",null,Object(a.b)("td",null,"userEndpoint"),Object(a.b)("td",null,"The endpoint name generated by the user.",Object(a.b)("p",null,"Value: the name created at ",Object(a.b)("a",{href:"https://app.yawe.dev"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(a.b)("td",null,"Yes")),Object(a.b)("tr",null,Object(a.b)("td",null,"apiKey"),Object(a.b)("td",null,"The API Key of the project."),Object(a.b)("td",null,"Yes")),Object(a.b)("tr",null,Object(a.b)("td",null,"uniqueId"),Object(a.b)("td",null,"_uniqueId_ of the record to be deleted."),Object(a.b)("td",null,"Yes"))),Object(a.b)("p",null,"Usage example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const url = \"https://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd&uniqueId=45e964d5b6ed49b1a2e14d8ac724109e\";\n\nfetch(url, {\n  method: 'DELETE',\n})\n")),Object(a.b)("h2",{id:"response-data"},"Response data"),Object(a.b)("h3",{id:"error-codes"},"Error codes"),Object(a.b)("table",null,Object(a.b)("tr",null,Object(a.b)("td",null,"Error code"),Object(a.b)("td",null,"Description")),Object(a.b)("tr",null,Object(a.b)("td",null,"400"),Object(a.b)("td",null,"Possible reasons:",Object(a.b)("ul",null,Object(a.b)("li",null,"Endpoint or API Key not valid.")))),Object(a.b)("tr",null,Object(a.b)("td",null,"401"),Object(a.b)("td",null,"If the endpoint is ",Object(a.b)("strong",null,"secured")," and the access token is missing or is not valid.",Object(a.b)("p",null,"It may also return this error if the user no longer exists."))),Object(a.b)("tr",null,Object(a.b)("td",null,"403"),Object(a.b)("td",null,"Missing API Key."))),Object(a.b)("h3",{id:"successful-response"},"Successful response"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"{\ndeleted: true,\nmessage: 'Data deleted.'\n}\n")))}d.isMDXComponent=!0},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),d=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=d(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},i=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),s=d(n),i=r,O=s["".concat(l,".").concat(i)]||s[i]||p[i]||a;return n?c.a.createElement(O,b(b({ref:t},o),{},{components:n})):c.a.createElement(O,b({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=i;var b={};for(var u in t)hasOwnProperty.call(t,u)&&(b[u]=t[u]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var o=2;o<a;o++)l[o]=n[o];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"}}]);