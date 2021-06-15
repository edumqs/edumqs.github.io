(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,O=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return n?o.a.createElement(O,i(i({ref:t},b),{},{components:n})):o.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<r;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(139)),c={id:"endpoints",title:"Endpoints"},i={unversionedId:"getting-started/endpoints",id:"getting-started/endpoints",isDocsHomePage:!1,title:"Endpoints",description:"Endpoints are created under projects and are used to store your data.",source:"@site/docs/getting-started/endpoints.md",slug:"/getting-started/endpoints",permalink:"/docs/getting-started/endpoints",version:"current",sidebar:"docs",previous:{title:"Projects",permalink:"/docs/getting-started/projects"},next:{title:"Create (POST)",permalink:"/docs/crud/crud-create"}},l=[{value:"Endpoint options",id:"endpoint-options",children:[]},{value:"Additional data access options",id:"additional-data-access-options",children:[]}],b={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Endpoints are created under ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yawe.dev/manage"}),"projects")," and are used to store your data."),Object(r.b)("p",null,"These REST endpoints use the HTTP protocol\u2019s request types, they receive ",Object(r.b)("strong",{parentName:"p"},"CREATE, READ, UPDATE and DELETE")," requests, regardless of the technology used in your application."),Object(r.b)("h4",{id:"example"},"Example:"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd"}),"https://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd")),Object(r.b)("p",null,"Breakdown:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"https://app.yawe.dev/api/1/ce")," -> Base URL"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"examples/unsecure-endpoint")," -> Endpoint name"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd")," -> API Key of the project"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"TIP: You should create different endpoints to manage different types of data. For example, you can create an endpoint for users and one endpoint for companies.")),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you delete an ",Object(r.b)("strong",{parentName:"p"},"endpoint"),", all the data associated with it is ",Object(r.b)("strong",{parentName:"p"},"deleted permanently and it is NOT recoverable"),"."))),Object(r.b)("h3",{id:"endpoint-options"},"Endpoint options"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("strong",null,"Property name")),Object(r.b)("td",null,Object(r.b)("strong",null,"Definition"))),Object(r.b)("tr",null,Object(r.b)("td",null,"Endpoint name"),Object(r.b)("td",null,Object(r.b)("p",null,"This is the name of your endpoint and needs to be unique, if it already exists there will be an error."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Validation rule:"),' Must only contain lowercase letters, numbers, hyphens and "/". Also, it must not start or end with "/" or "-", not contain double "-" and the length must be between 5 and 254.'),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'"my-project/cars"\n')))),Object(r.b)("tr",null,Object(r.b)("td",null,"Description"),Object(r.b)("td",null,"Not mandatory. You can use this field to add additional information about this endpoint.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Authentication endpoint"),Object(r.b)("td",null,"With this option enabled you can use this endpoint to authenticate your users, and you can also secure other endpoints.",Object(r.b)("p",null,"For more information about authentication endpoints please check the documentation for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/authentication/authentication-endpoint"}),"Authentication endpoints.")))),Object(r.b)("tr",null,Object(r.b)("td",null,"Secure"),Object(r.b)("td",null,Object(r.b)("p",null,"When an endpoint is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/secure-endpoints"}),"secure"),", the user needs to login first using the Authentication endpoint, otherwise the data is not accessible."),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"Access Token")," received from the Authentication endpoint needs to be sent with the requests."),Object(r.b)("p",null,"The token is stored in a HTTP only cookie, to send it in other requests use the ",Object(r.b)("em",{parentName:"p"},"credentials")," property."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"})," // using fetch\n{ credentials: 'include' }\n\n// using axios\n{ withCredentials: true }\n"))))),Object(r.b)("h2",{id:"additional-data-access-options"},"Additional data access options"),Object(r.b)("p",null,"Use these options to control who can access the data stored in your secure endpoints."),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("strong",null,"Option")),Object(r.b)("td",null,Object(r.b)("strong",null,"Definition"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("b",null,"Data can be READ by other authenticated users")),Object(r.b)("td",null,Object(r.b)("p",null,"This option is selected by default."),Object(r.b)("p",null,"With this option enabled, authenticated users can access the data created by other users. If this option is disabled, the next two options are disabled automatically."))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("b",null,"Data can be MODIFIED by other authenticated users")),Object(r.b)("td",null,Object(r.b)("p",null,"This option is selected by default."),Object(r.b)("p",null,"With this option enabled, authenticated users can modify the data created by other users."))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("b",null,"Data can be READ by non-authenticated users")),Object(r.b)("td",null,Object(r.b)("p",null,"This option is NOT selected by default."),Object(r.b)("p",null,"With this option enabled, non-authenticated users can access all the data existing in the endpoint.")))),Object(r.b)("p",null,"Continue reading to check all what you can do with YAWE endpoints."))}s.isMDXComponent=!0}}]);