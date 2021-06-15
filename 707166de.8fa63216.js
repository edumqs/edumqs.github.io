(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),o=(a(0),a(140)),i={slug:"jsonata",title:"JSONata",author:"Eduardo Marques",author_title:"Software Engineer @ Yawe",author_image_url:"/img/edu.png",tags:["yawe","jsonata","filter","sort","pagination"]},l={permalink:"/blog/jsonata",source:"@site/blog/2021-02-09-jsonata.md",description:"Hi all!",date:"2021-02-09T00:00:00.000Z",tags:[{label:"yawe",permalink:"/blog/tags/yawe"},{label:"jsonata",permalink:"/blog/tags/jsonata"},{label:"filter",permalink:"/blog/tags/filter"},{label:"sort",permalink:"/blog/tags/sort"},{label:"pagination",permalink:"/blog/tags/pagination"}],title:"JSONata",readingTime:1.215,truncated:!1,prevItem:{title:"File uploads",permalink:"/blog/file-uploads"},nextItem:{title:"Importance of platforms like Reddit",permalink:"/blog/redditimportance"}},c=[],s={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hi all!"),Object(o.b)("p",null,"For any REST API, operations like querying, sorting, filtering are a must have. In the beginning I assumed that it was good enough for the client to fetch all the data, and perform these operations on their side. This was good enough for a PoC or a PET project, but far from ideal for a production application, not only because of the size of the data transferred, but also had security implications, as some sensitive data could be exposed."),Object(o.b)("p",null,"I wondered for a while what would be the best and quickest solution for this. Implementing all of this came through my head, but then I thought, this is a common problem and I'm sure there are existing solutions for this."),Object(o.b)("p",null,"I was right! I came across ",Object(o.b)("strong",{parentName:"p"},"JSONata"),", a really powerful library that did everything what I was looking for and more!"),Object(o.b)("p",null,"All I had to do was add support for JSONata expressions for GET requests and it worked perfectly."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"How does it work?"),"\nGET requests accept a new parameter called ",Object(o.b)("strong",{parentName:"p"},"jsonata")," that accepts encoded JSONata expressions."),Object(o.b)("p",null,"If you want to take full advantage of this library check out the official documentation on their ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.jsonata.org/overview.html"}),"page"),", or, to get started quickly, check the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/crud/crud-read"}),"READ (GET) documentation")," and the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/jsonata"}),"JSONata documentation"),"."),Object(o.b)("p",null,"I hope you find these expressions useful. If you have any questions don't hesitate to reach out, after all, feedback is what makes any product great!"),Object(o.b)("p",null,"Take care and until the next one!"))}p.isMDXComponent=!0},140:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return a?n.a.createElement(f,l(l({ref:t},s),{},{components:a})):n.a.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);