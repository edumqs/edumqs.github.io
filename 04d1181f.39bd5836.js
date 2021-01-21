(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,O=p["".concat(c,".").concat(d)]||p[d]||s[d]||i;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(113)),c={title:"Pricing",description:"YAWE pricing information"},o={type:"mdx",permalink:"/pricing",source:"@site/src/pages/pricing.mdx"},l=[],b={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"pricing"},"Pricing"),Object(i.b)("p",null,"We charge based on your usage, which is defined by a ",Object(i.b)("strong",{parentName:"p"},"Tier"),"."),Object(i.b)("p",null,"What is a Tier?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each tier includes 250MB and 20 endpoints."),Object(i.b)("li",{parentName:"ul"},"0.10$ per day per tier."),Object(i.b)("li",{parentName:"ul"},"The first tier is for free, forever!")),Object(i.b)("p",null,"To charge our users fairly, we check daily what is the service usage (endpoints + space) to find which tier is used."),Object(i.b)("h4",{id:"check-the-following-examples"},"Check the following examples:"),Object(i.b)("table",null,Object(i.b)("tr",null,Object(i.b)("td",null,"Usage"),Object(i.b)("td",null,"Price")),Object(i.b)("tr",null,Object(i.b)("td",null,"200 MB and 10 endpoints"),Object(i.b)("td",null,"Tier 1 (free)")),Object(i.b)("tr",null,Object(i.b)("td",null,"400 MB and 10 endpoints"),Object(i.b)("td",null,"Tier 2 (0.10$)")),Object(i.b)("tr",null,Object(i.b)("td",null,"200 MB and 25 endpoints"),Object(i.b)("td",null,"Tier 2 (0.10$)")),Object(i.b)("tr",null,Object(i.b)("td",null,"200 MB and 45 endpoints"),Object(i.b)("td",null,"Tier 3 (0.20$)")),Object(i.b)("tr",null,Object(i.b)("td",null,"600 MB and 20 endpoints"),Object(i.b)("td",null,"Tier 3 (0.20$)")),Object(i.b)("tr",null,Object(i.b)("td",null,"900 MB and 20 endpoints"),Object(i.b)("td",null,"Tier 4 (0.30$)"))),Object(i.b)("p",null,"In the last example, Tier 4 means that you pay for Tier 2 + Tier 3 + Tier 4, 0.30$ in total."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Pricing is still under development, until it's completed you can use the service completely for free.\nAfter you can use our free Tier."))))}u.isMDXComponent=!0}}]);