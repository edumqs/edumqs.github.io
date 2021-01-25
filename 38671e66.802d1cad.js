(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=d(n),u=a,O=l["".concat(i,".").concat(u)]||l[u]||b[u]||o;return n?r.a.createElement(O,c(c({ref:t},s),{},{components:n})):r.a.createElement(O,c({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(114)),i={id:"endpoints",title:"Endpoints"},c={unversionedId:"getting-started/endpoints",id:"getting-started/endpoints",isDocsHomePage:!1,title:"Endpoints",description:"Endpoints are created under projects and are used to store your data.",source:"@site/docs/getting-started/endpoints.md",slug:"/getting-started/endpoints",permalink:"/docs/getting-started/endpoints",version:"current",sidebar:"docs",previous:{title:"Projects",permalink:"/docs/getting-started/projects"},next:{title:"Create (POST)",permalink:"/docs/crud/crud-create"}},p=[{value:"Endpoint options",id:"endpoint-options",children:[]}],s={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Endpoints are created under ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yawe.dev/manage"}),"projects")," and are used to store your data."),Object(o.b)("p",null,"These REST endpoints use the HTTP protocol\u2019s request types, they receive ",Object(o.b)("strong",{parentName:"p"},"Create, Read, Update and Delete")," requests, regardless of the technology used in your application."),Object(o.b)("h4",{id:"example"},"Example:"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd"}),"https://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd")),Object(o.b)("p",null,"Breakdown:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"https://app.yawe.dev/api/1/ce")," -> Base URL"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"examples/unsecure-endpoint")," -> Endpoint name"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd")," -> API Key of the project"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"TIP: You should create different endpoints to manage different types of data. For example, you can create an endpoint for users and one endpoint for companies.")),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you delete an ",Object(o.b)("strong",{parentName:"p"},"endpoint"),", all the data associated with it is ",Object(o.b)("strong",{parentName:"p"},"deleted permanently and it is NOT recoverable"),"."))),Object(o.b)("h3",{id:"endpoint-options"},"Endpoint options"),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("strong",null,"Property name")),Object(o.b)("td",null,Object(o.b)("strong",null,"Definition"))),Object(o.b)("tr",null,Object(o.b)("td",null,"Endpoint name"),Object(o.b)("td",null,Object(o.b)("p",null,"This is the name of your endpoint and needs to be unique, if it already exists there will be an error."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Validation rule:"),' Must only contain lowercase letters, numbers, hyphens and "/". Also, it must not start or end with "/" and "-", not contain double "-" and the length must be between 5 and 254.'),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'"my-project/cars"\n')))),Object(o.b)("tr",null,Object(o.b)("td",null,"Description"),Object(o.b)("td",null,"Not mandatory. You can use this field to add additional information about this endpoint.")),Object(o.b)("tr",null,Object(o.b)("td",null,"Authentication endpoint"),Object(o.b)("td",null,"With this option enabled you can use this endpoint to authenticate your users, and you can also secure other endpoints.",Object(o.b)("p",null,"For more information about authentication endpoints please check the documentation for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/authentication/authentication-endpoint"}),"Authentication endpoints.")))),Object(o.b)("tr",null,Object(o.b)("td",null,"Secure"),Object(o.b)("td",null,Object(o.b)("p",null,"When an endpoint is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/secure-endpoints"}),"secure"),", the user needs to login first using the Authentication endpoint, otherwise the data is not accessible."),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"Access Token")," received from the Authentication endpoint needs to be sent with the requests."),Object(o.b)("p",null,"The token is stored in a HTTP only cookie, to send it in other requests use the ",Object(o.b)("em",{parentName:"p"},"crendentials")," property."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"})," // using fetch\n{ crendentials: 'include' }\n\n// using axios\n{ withCrendentials: true }\n"))))),Object(o.b)("p",null,"In the next few pages it\u2019s explained in detail the difference between the request types."))}d.isMDXComponent=!0}}]);