(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(114)),i={id:"faq",title:"Frequently asked questions",sidebar_label:"FAQ"},c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently asked questions",description:"- When I use an endpoint to save some data, where is it stored?",source:"@site/docs/faq.md",slug:"/faq",permalink:"/docs/faq",version:"current",sidebar_label:"FAQ",sidebar:"docs",previous:{title:"Change log",permalink:"/docs/change-log"}},s=[{value:"- When I use an endpoint to save some data, where is it stored?",id:"--when-i-use-an-endpoint-to-save-some-data-where-is-it-stored",children:[]},{value:"- Can I permanently delete all the data associated with an endpoint?",id:"--can-i-permanently-delete-all-the-data-associated-with-an-endpoint",children:[]},{value:"- If I use this service for a production application, can I use the same endpoints?",id:"--if-i-use-this-service-for-a-production-application-can-i-use-the-same-endpoints",children:[]},{value:"- How can I contact someone from YAWE?",id:"--how-can-i-contact-someone-from-yawe",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"--when-i-use-an-endpoint-to-save-some-data-where-is-it-stored"},"- When I use an endpoint to save some data, where is it stored?"),Object(o.b)("p",null,"Your data is stored in a shared database hosted in AWS."),Object(o.b)("h3",{id:"--can-i-permanently-delete-all-the-data-associated-with-an-endpoint"},"- Can I permanently delete all the data associated with an endpoint?"),Object(o.b)("p",null,"Yes - when you delete an endpoint, all the data is deleted."),Object(o.b)("p",null,"Remember that the data is not recoverable if you delete it."),Object(o.b)("h3",{id:"--if-i-use-this-service-for-a-production-application-can-i-use-the-same-endpoints"},"- If I use this service for a production application, can I use the same endpoints?"),Object(o.b)("p",null,"You should create separate endpoints for production. If something goes wrong during development the production data will be safe."),Object(o.b)("h3",{id:"--how-can-i-contact-someone-from-yawe"},"- How can I contact someone from YAWE?"),Object(o.b)("p",null,"Use our email: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:contact.yawe@gmail.com"}),"contact.yawe@gmail.com")))}d.isMDXComponent=!0}}]);