(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(142)),i={id:"password-reset-overview",title:"Password reset overview"},s={unversionedId:"authentication/password-reset-overview",id:"authentication/password-reset-overview",isDocsHomePage:!1,title:"Password reset overview",description:"With the password reset feature your users can safely reset their passwords when they forget it.",source:"@site/docs/authentication/password-reset-overview.md",slug:"/authentication/password-reset-overview",permalink:"/docs/authentication/password-reset-overview",version:"current",sidebar:"docs",previous:{title:"Delete user",permalink:"/docs/authentication/authentication-delete-user"},next:{title:"Secure endpoints",permalink:"/docs/secure-endpoints"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With the ",Object(o.b)("strong",{parentName:"p"},"password reset")," feature your users can safely reset their passwords when they forget it."),Object(o.b)("p",null,"An email is sent to your users with a ",Object(o.b)("strong",{parentName:"p"},"verification token")," which is used later by your application when submitting the new password."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To use this feature you need to make sure your users are registered with an email."))),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"To set use this feature you need to follow the steps below:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add an email configuration to your project.")),Object(o.b)("p",null,"You need to provide a configuration JSON with your email provider settings. YAWE uses ",Object(o.b)("b",null,Object(o.b)("a",{href:"https://nodemailer.com/about/",target:"_blank",rel:"noopener noreferrer"},"nodemailer"))," internally, the provided options need to be compatible with nodemailer ",Object(o.b)("a",{href:"https://nodemailer.com/about/#example",target:"_blank",rel:"noopener noreferrer"},"transporter"),"."),Object(o.b)("p",null,"This is done in the project view, where you also create endpoints."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a Reset email template.")),Object(o.b)("p",null,"These HTML templates are used to send emails to your users with the ",Object(o.b)("strong",{parentName:"p"},"verification token"),". The template must include the placeholders ",Object(o.b)("inlineCode",{parentName:"p"},"{{verificationtoken}}")," and ",Object(o.b)("inlineCode",{parentName:"p"},"{{email}}"),"."),Object(o.b)("p",null,"In the template, you should also provide a link to your application, where your users can enter the verification token, the password and password confirmation."),Object(o.b)("p",null,"You can create multiple templates, this is useful for example when your application is available in multiple languages."),Object(o.b)("p",null,"This is done in the project view, where you also create endpoints."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Send a email to reset the password to a specific user email.")),Object(o.b)("p",null,"To send an email to reset the password, you use the existing Authentication endpoint with the query parameter ",Object(o.b)("inlineCode",{parentName:"p"},"passwordreset=true"),". You need to send a POST request, the body needs to include ",Object(o.b)("inlineCode",{parentName:"p"},"email")," and ",Object(o.b)("inlineCode",{parentName:"p"},"templateName"),"."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'await axios({\n    method: "POST",\n    url: "https://app.yawe.dev/api/1/ce/project1-auth?key=4c1224a62bd74174be63f0026354b98a&passwordreset=true",\n    data: {\n      email: "some.email@gmail.com",\n      templateName: "your-template-name"\n    }\n);\n')),Object(o.b)("p",null,"If the email configuration is correct and the provided email exists in the data of the used authentication endpoint, en email will be send to your user."),Object(o.b)("p",null,"The verification token is only valid for 1 hour."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Submit the new password.")),Object(o.b)("p",null,"After receiving the email, your user should be redirected to a page in your application for password reset confirmation, where he enters the verification token (verificationtToken), password and password confirmation (passwordConfirmation)."),Object(o.b)("p",null,"These details are sent in a POST request to the Authentication endpoint with the query parameter ",Object(o.b)("inlineCode",{parentName:"p"},"passwordresetconfirmation=true"),"."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'await axios({\n    method: "POST",\n    url: "https://app.yawe.dev/api/1/ce/project1-auth?key=4c1224a62bd74174be63f0026354b98a&passwordresetconfirmation=true",\n    data: {\n      verificationToken: "13cc15faf7c4197fc285b84dfe5a3d515a383516",\n      password: "some-new-password",\n      passwordConfirmation: "some-new-password"\n    }\n);\n')),Object(o.b)("p",null,"If everything is correct the password will be changed for your user and he can now login again."))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);