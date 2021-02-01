(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(123)),c={id:"introduction",title:"Introduction",slug:"/"},i={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"With YAWE you can create a REST API connected to a database in just a few minutes!",source:"@site/docs/introduction.md",slug:"/",permalink:"/docs/",version:"current",sidebar:"docs",next:{title:"Registration",permalink:"/docs/getting-started/registration"}},p=[],u={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With YAWE you can create a REST API connected to a database in just a few minutes!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"No back-end code")," - You can plug your client application into a database without having to write your own back-end or maintain a database."),Object(o.b)("p",null,"Accessing and managing your data is done with standard HTTP requests using the endpoints you generate at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev"),". These are CRUD endpoints, which means that each endpoint is ready to receive CREATE, READ, UPDATE and DELETE requests."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"fetch('https://app.yawe.dev/api/1/ce/' +\n'examples/unsecure-endpoint?' +\n'key=d59eb2859c284168ac48aef65046d5dd')\n.then(response => response.json())\n.then((data) => {\n    console.log(data);\n});\n")),Object(o.b)("p",null,"Authentication endpoint - We provide an authentication endpoint, with which you can authenticate users in your application and secure endpoints."),Object(o.b)("p",null,"Do you want to see it in action before reading further? Check out these examples: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://codesandbox.io/s/yawe-examples-1zyin"}),"https://codesandbox.io/s/yawe-examples-1zyin")))}s.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,f=d["".concat(c,".").concat(b)]||d[b]||l[b]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);