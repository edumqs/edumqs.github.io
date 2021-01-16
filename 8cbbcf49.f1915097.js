(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,j=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(j,c(c({ref:t},p),{},{components:n})):o.a.createElement(j,c({ref:t},p))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(111)),l={id:"projects",title:"Projects"},c={unversionedId:"getting-started/projects",id:"getting-started/projects",isDocsHomePage:!1,title:"Projects",description:"Head to https://app.yawe.dev/manage to manage your projects.",source:"@site/docs/getting-started/projects.md",slug:"/getting-started/projects",permalink:"/docs/getting-started/projects",version:"current",sidebar:"docs",previous:{title:"Registration",permalink:"/docs/getting-started/registration"},next:{title:"Endpoints",permalink:"/docs/getting-started/endpoints"}},i=[],p={toc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Head to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev/manage"}),"https://app.yawe.dev/manage")," to manage your projects."),Object(a.b)("p",null,"A ",Object(a.b)("strong",{parentName:"p"},"Project")," is a group of endpoints. You can use a project to group endpoints, this is especially useful if you have endpoints for more than one application."),Object(a.b)("p",null,"When you create a project, an API Key is assigned to it. This key is later used in the endpoints."),Object(a.b)("p",null,"Below are the other options available for projects. These options are applied to all endpoints configured under the project."),Object(a.b)("table",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("strong",null,"Property name")),Object(a.b)("td",null,Object(a.b)("strong",null,"Definition"))),Object(a.b)("tr",null,Object(a.b)("td",null,"Project name"),Object(a.b)("td",null,Object(a.b)("p",null,"This is used to identify the project."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Validation rule:")," Must not contain special characters and the length should be between 5 and 254."))),Object(a.b)("tr",null,Object(a.b)("td",null,"Allowed origins"),Object(a.b)("td",null,Object(a.b)("p",null,"Domains/ips that are allowed to access the endpoints from the project."),Object(a.b)("p",null,"Important:"),Object(a.b)("ul",null,Object(a.b)("li",null,"To enter more than one, use a comma to separate them."),Object(a.b)("li",null,'Include "http://" or "https://".'),Object(a.b)("li",null,"Also note that if empty, all origins are allowed.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Validation rule:"),' Valid domains prefixed with http://" or "https://", commas are allowed when entering more than one domain.'),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"http://google.com,https://yawe.dev\n")))),Object(a.b)("tr",null,Object(a.b)("td",null,"Disallow no origin"),Object(a.b)("td",null,"By default, requests with no origin are allowed. If you want to disallow such requests use this option."))))}s.isMDXComponent=!0}}]);