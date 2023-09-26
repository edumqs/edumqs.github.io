"use strict";(self.webpackChunkrested_landing_page=self.webpackChunkrested_landing_page||[]).push([[4503],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),s=p(n),h=o,f=s["".concat(u,".").concat(h)]||s[h]||d[h]||i;return n?r.createElement(f,a(a({ref:e},l),{},{components:n})):r.createElement(f,a({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c[s]="string"==typeof t?t:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55968:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"authentication-endpoint",title:"Authentication Endpoint"},a=void 0,c={unversionedId:"authentication/authentication-endpoint",id:"authentication/authentication-endpoint",title:"Authentication Endpoint",description:"The purpose of Authentication endpoints is to allow you to add authentication to your application with minimal effort as well as securing other endpoints used in your project.",source:"@site/docs/authentication/authentication-endpoint.md",sourceDirName:"authentication",slug:"/authentication/authentication-endpoint",permalink:"/docs/authentication/authentication-endpoint",draft:!1,tags:[],version:"current",frontMatter:{id:"authentication-endpoint",title:"Authentication Endpoint"},sidebar:"docs",previous:{title:"Delete (DELETE)",permalink:"/docs/crud/crud-delete"},next:{title:"New user registration",permalink:"/docs/authentication/authentication-register-user"}},u={},p=[],l={toc:p},s="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(s,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The purpose of ",(0,o.kt)("em",{parentName:"p"},"Authentication endpoints")," is to allow you to add authentication to your application with minimal effort as well as securing other endpoints used in your project."),(0,o.kt)("p",null,"These endpoints are created in the same place as the others, there's a checkbox to mark them as 'Authentication endpoint'."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using authentication")),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/authentication/authentication-login"},"login documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/secure-endpoints"},"Secure Endpoints documentation"),", these pages explain how to obtain the ",(0,o.kt)("em",{parentName:"p"},"Access Token")," and include them in the requests for Authentication endpoints."),(0,o.kt)("p",null,"Other considerations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET, PUT and DELETE requests are secured by default."),(0,o.kt)("li",{parentName:"ul"},"POST is open, for registration, login (",(0,o.kt)("strong",{parentName:"li"},"&login=true"),") and logout (",(0,o.kt)("strong",{parentName:"li"},"&logout=true"),")."),(0,o.kt)("li",{parentName:"ul"},"For this endpoint, only the owner of the data can modify it.")))}d.isMDXComponent=!0}}]);