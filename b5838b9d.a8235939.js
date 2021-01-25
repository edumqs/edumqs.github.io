(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(114)),c={id:"secure-endpoints",title:"Secure endpoints"},i={unversionedId:"secure-endpoints",id:"secure-endpoints",isDocsHomePage:!1,title:"Secure endpoints",description:"Secure endpoints are only accessible to authenticated users. This means that users need to login before doing a request to these endpoints.",source:"@site/docs/secure-endpoins.md",slug:"/secure-endpoints",permalink:"/docs/secure-endpoints",version:"current",sidebar:"docs",previous:{title:"Delete user",permalink:"/docs/authentication/authentication-delete-user"},next:{title:"Change log",permalink:"/docs/change-log"}},s=[],p={toc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Secure endpoints are only accessible to authenticated users. This means that users need to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"authentication/authentication-login"}),"login")," before doing a request to these endpoints."),Object(o.b)("p",null,"The endpoint expects a valid Access token, which is generated during login and stored in a httpOnly cookie. To include this token in the request you need to use the credentials flag in the request options."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Login:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// using axios\naxios({\n    method: 'POST',\n    url: 'https://app.yawe.dev/api/1/ce/examples/auth?key=d59eb2859c284168ac48aef65046d5dd&login=true',\n    data: { username: 'username', password: 'password' } // login credentials\n});\n\n// using fetch\nfetch('https://app.yawe.dev/api/1/ce/examples/auth?key=d59eb2859c284168ac48aef65046d5dd&login=true', {\n    method: 'POST',\n    headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({ username: 'username', password: 'password' }) // user credentials\n});\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Accessing a secure endpoint:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// using axios\naxios({\n    method: 'GET',\n    url: 'https://app.yawe.dev/api/1/ce/secure-endpoint?key=d59eb2859c284168ac48aef65046d5dd',\n    withCredentials: true\n});\n\n// using fetch\nfetch('https://app.yawe.dev/api/1/ce/secure-endpoint?key=d59eb2859c284168ac48aef65046d5dd', {\n    credentials: 'include',\n    method: 'GET',\n});\n")))}u.isMDXComponent=!0},114:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,f=d["".concat(c,".").concat(b)]||d[b]||l[b]||o;return t?a.a.createElement(f,i(i({ref:n},p),{},{components:t})):a.a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);