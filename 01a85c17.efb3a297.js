(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{128:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),r=t.n(n),l=t(115),s=t(117),c=t(60),i=t.n(c);function m({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:i.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:i.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},r.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))))))}},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(121),s=t(117),c=t(128);a.default=function(e){const{tags:a,sidebar:t}=e,n={};Object.keys(a).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e);n[a]=n[a]||[],n[a].push(e)}));const i=Object.entries(n).sort((([e],[a])=>e===a?0:e>a?1:-1)).map((([e,t])=>r.a.createElement("div",{key:e},r.a.createElement("h3",null,e),t.map((e=>r.a.createElement(s.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")"))),r.a.createElement("hr",null)))).filter((e=>null!=e));return r.a.createElement(l.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(c.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},i)))))}}}]);