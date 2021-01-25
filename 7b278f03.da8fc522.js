(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,h=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(h,c(c({ref:t},s),{},{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(114)),a={id:"authentication-endpoint",title:"Authentication Endpoint"},c={unversionedId:"authentication/authentication-endpoint",id:"authentication/authentication-endpoint",isDocsHomePage:!1,title:"Authentication Endpoint",description:"The purpose of Authentication endpoints is to allow you to add authentication to your application with minimal effort as well as securing other endpoints used in your project.",source:"@site/docs/authentication/authentication-endpoint.md",slug:"/authentication/authentication-endpoint",permalink:"/docs/authentication/authentication-endpoint",version:"current",sidebar:"docs",previous:{title:"Delete (DELETE)",permalink:"/docs/crud/crud-delete"},next:{title:"New user registration",permalink:"/docs/authentication/authentication-register-user"}},u=[],s={toc:u};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The purpose of ",Object(o.b)("em",{parentName:"p"},"Authentication endpoints")," is to allow you to add authentication to your application with minimal effort as well as securing other endpoints used in your project."),Object(o.b)("p",null,"These endpoints are created in the same place as the others, there's a checkbox to mark it as 'Authentication endpoint'."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Using authentication")),Object(o.b)("p",null,"To use authentication you need to use HTTPS, including in your local environment. We require this because ",Object(o.b)("em",{parentName:"p"},"access tokens")," are sent in a httpOnly cookie, which requires using the secure flag."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"How is the access token stored on the client side?")),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"access token")," is stored in a httpOnly cookie. This ensures that the key is not accessible by scrips, making it very safe."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"How is the access token included in the requests after logging in?")),Object(o.b)("p",null,"The token is included in the request when the credentials flag is passed in the request options."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"})," // using fetch\n{ crendentials: 'include' }\n\n// using axios\n{ withCrendentials: true }\n")),Object(o.b)("p",null,"Other considerations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"GET, PUT and DELETE requests are secured by default."),Object(o.b)("li",{parentName:"ul"},"POST is open, for registration, login (",Object(o.b)("strong",{parentName:"li"},"&login=true"),") and logout (",Object(o.b)("strong",{parentName:"li"},"&logout=true"),")."),Object(o.b)("li",{parentName:"ul"},"For this endpoint, only the owner of the data can modify it.")))}l.isMDXComponent=!0}}]);