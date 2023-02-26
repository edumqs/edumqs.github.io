(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(142)),i={id:"introduction",title:"Introduction",slug:"/"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"With YAWE you can create a REST API connected to a database in just a few minutes!",source:"@site/docs/introduction.md",slug:"/",permalink:"/docs/",version:"current",sidebar:"docs",next:{title:"Registration",permalink:"/docs/getting-started/registration"}},p=[],s={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With YAWE you can create a REST API connected to a database in just a few minutes!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"No back-end code")," - You can plug your client application into a database without having to write your own back-end or maintain a database."),Object(o.b)("p",null,"Accessing and managing your data is done with standard HTTP requests using the endpoints you generate at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev"),". These are CRUD endpoints, which means that each endpoint is ready to receive CREATE, READ, UPDATE and DELETE requests."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"fetch('https://app.yawe.dev/api/1/ce/' +\n'examples/unsecure-endpoint?' +\n'key=d59eb2859c284168ac48aef65046d5dd')\n.then(response => response.json())\n.then((data) => {\n    console.log(data);\n});\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Authentication endpoint")," - We provide an authentication endpoint, with which you can authenticate users in your application and secure endpoints."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"File uploads")," - YAWE endpoints also support file uploads. Use these endpoints to upload images, videos and any other formats your application requires."),Object(o.b)("p",null,"Do you want to see it in action before reading further? Check out these examples: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://codesandbox.io/s/yawe-examples-1zyin"}),"https://codesandbox.io/s/yawe-examples-1zyin")))}u.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||l[b]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);