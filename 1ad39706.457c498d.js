(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(134)),i={slug:"masterkey",title:"Master keys",author:"Eduardo Marques",author_title:"Software Engineer @ Yawe",author_image_url:"/img/edu.png",tags:["yawe","rest","api","service","master","key"]},c={permalink:"/blog/masterkey",source:"@site/blog/2021-01-26-master-key.md",description:"Hi all!",date:"2021-01-26T00:00:00.000Z",tags:[{label:"yawe",permalink:"/blog/tags/yawe"},{label:"rest",permalink:"/blog/tags/rest"},{label:"api",permalink:"/blog/tags/api"},{label:"service",permalink:"/blog/tags/service"},{label:"master",permalink:"/blog/tags/master"},{label:"key",permalink:"/blog/tags/key"}],title:"Master keys",readingTime:.91,truncated:!1,prevItem:{title:"Importance of platforms like Reddit",permalink:"/blog/redditimportance"},nextItem:{title:"Welcome to YAWE",permalink:"/blog/welcome"}},l=[],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hi all!"),Object(o.b)("p",null,"There\u2019s a new feature available: ",Object(o.b)("strong",{parentName:"p"},"Master Keys!!")),Object(o.b)("p",null,"Now, let me give you a bit of background why these keys are important."),Object(o.b)("p",null,"I also use YAWE for other projects as it is a good way to test the service and see what\u2019s missing. During one of those projects I realized that there was no way to access the data stored in secure endpoints, and the same for Authentication endpoints. Secure endpoints require you to be logged in, and Authentication endpoints data is only accessible to its creator."),Object(o.b)("p",null,"This was problematic because, as a developer I might need to check the data stored, or modify it in case of problems."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"TLDR:")," Master Keys allow you to access the data in all your endpoints, it removes the need for Access tokens or restrictions applied to Authentication endpoints."),Object(o.b)("p",null,"And ah, one tip, don\u2019t use Master keys directly in your application, it leaves the endpoint unprotected."),Object(o.b)("p",null,"You can find more details in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/projects#master-key"}),"Project documentation"),"."),Object(o.b)("p",null,"I hope you guys find this feature useful. If you have any questions don\u2019t hesitate to contact us!"),Object(o.b)("p",null,"Stay safe!"))}p.isMDXComponent=!0}}]);