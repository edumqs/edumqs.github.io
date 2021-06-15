(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{138:function(s,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return l})),t.d(e,"metadata",(function(){return m})),t.d(e,"toc",(function(){return d})),t.d(e,"default",(function(){return b}));var n=t(3),a=t(7),j=t(0),r=t.n(j),u=t(140),c=t(311),o=t.n(c);function i(){var s=Object(j.useState)(0),e=s[0],t=s[1];return Object(j.useEffect)((function(){fetch("https://app.yawe.dev/api/1/status-plus").then((function(s){return s.json()})).then((function(s){var e=s.requestsPerDay.filter((function(s){return o()(new Date(s.date)).isAfter(o()(new Date).subtract(2,"months"))})),n=document.getElementById("myChart");new window.Chart(n,{type:"bar",data:{datasets:[{label:"Requests per day",data:e}]},options:{parsing:{xAxisKey:"date",yAxisKey:"totalRequests"}}});t(Object.values(s.clientsPerInstance).reduce((function(s,e){return s+parseInt(e,10)}),0))}))}),[]),r.a.createElement("div",null,r.a.createElement("canvas",{id:"myChart",style:{height:"300px",width:"100%"}}),r.a.createElement("br",null),r.a.createElement("h2",null,"Clients connected: ",e),r.a.createElement("p",null,"This number shows the total number of clients connected using websockets."))}var l={title:"Status",description:"YAWE API status"},m={type:"mdx",permalink:"/status",source:"@site/src/pages/status.mdx"},d=[{value:"Uptime",id:"uptime",children:[]},{value:"Requests per day",id:"requests-per-day",children:[]}],p={toc:d};function b(s){var e=s.components,t=Object(a.a)(s,["components"]);return Object(u.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"status"},"Status"),Object(u.b)("h2",{id:"uptime"},"Uptime"),Object(u.b)("p",null,"We monitor our API using statuscake, below you can see the uptime for the past 30 days."),Object(u.b)("a",{href:"https://www.statuscake.com",title:"Website Uptime Monitoring"},Object(u.b)("img",{src:"https://app.statuscake.com/button/index.php?Track=5822480&Days=30&Design=2"})),Object(u.b)("p",null),Object(u.b)("h2",{id:"requests-per-day"},"Requests per day"),Object(u.b)("p",null,"In the following graph we show the total number of requests per day in the last two months."),Object(u.b)(i,{mdxType:"UsageGraph"}))}b.isMDXComponent=!0},314:function(s,e,t){var n={"./af":179,"./af.js":179,"./ar":180,"./ar-dz":181,"./ar-dz.js":181,"./ar-kw":182,"./ar-kw.js":182,"./ar-ly":183,"./ar-ly.js":183,"./ar-ma":184,"./ar-ma.js":184,"./ar-sa":185,"./ar-sa.js":185,"./ar-tn":186,"./ar-tn.js":186,"./ar.js":180,"./az":187,"./az.js":187,"./be":188,"./be.js":188,"./bg":189,"./bg.js":189,"./bm":190,"./bm.js":190,"./bn":191,"./bn.js":191,"./bo":192,"./bo.js":192,"./br":193,"./br.js":193,"./bs":194,"./bs.js":194,"./ca":195,"./ca.js":195,"./cs":196,"./cs.js":196,"./cv":197,"./cv.js":197,"./cy":198,"./cy.js":198,"./da":199,"./da.js":199,"./de":200,"./de-at":201,"./de-at.js":201,"./de-ch":202,"./de-ch.js":202,"./de.js":200,"./dv":203,"./dv.js":203,"./el":204,"./el.js":204,"./en-au":205,"./en-au.js":205,"./en-ca":206,"./en-ca.js":206,"./en-gb":207,"./en-gb.js":207,"./en-ie":208,"./en-ie.js":208,"./en-il":209,"./en-il.js":209,"./en-nz":210,"./en-nz.js":210,"./eo":211,"./eo.js":211,"./es":212,"./es-do":213,"./es-do.js":213,"./es-us":214,"./es-us.js":214,"./es.js":212,"./et":215,"./et.js":215,"./eu":216,"./eu.js":216,"./fa":217,"./fa.js":217,"./fi":218,"./fi.js":218,"./fo":219,"./fo.js":219,"./fr":220,"./fr-ca":221,"./fr-ca.js":221,"./fr-ch":222,"./fr-ch.js":222,"./fr.js":220,"./fy":223,"./fy.js":223,"./gd":224,"./gd.js":224,"./gl":225,"./gl.js":225,"./gom-latn":226,"./gom-latn.js":226,"./gu":227,"./gu.js":227,"./he":228,"./he.js":228,"./hi":229,"./hi.js":229,"./hr":230,"./hr.js":230,"./hu":231,"./hu.js":231,"./hy-am":232,"./hy-am.js":232,"./id":233,"./id.js":233,"./is":234,"./is.js":234,"./it":235,"./it.js":235,"./ja":236,"./ja.js":236,"./jv":237,"./jv.js":237,"./ka":238,"./ka.js":238,"./kk":239,"./kk.js":239,"./km":240,"./km.js":240,"./kn":241,"./kn.js":241,"./ko":242,"./ko.js":242,"./ky":243,"./ky.js":243,"./lb":244,"./lb.js":244,"./lo":245,"./lo.js":245,"./lt":246,"./lt.js":246,"./lv":247,"./lv.js":247,"./me":248,"./me.js":248,"./mi":249,"./mi.js":249,"./mk":250,"./mk.js":250,"./ml":251,"./ml.js":251,"./mn":252,"./mn.js":252,"./mr":253,"./mr.js":253,"./ms":254,"./ms-my":255,"./ms-my.js":255,"./ms.js":254,"./mt":256,"./mt.js":256,"./my":257,"./my.js":257,"./nb":258,"./nb.js":258,"./ne":259,"./ne.js":259,"./nl":260,"./nl-be":261,"./nl-be.js":261,"./nl.js":260,"./nn":262,"./nn.js":262,"./pa-in":263,"./pa-in.js":263,"./pl":264,"./pl.js":264,"./pt":265,"./pt-br":266,"./pt-br.js":266,"./pt.js":265,"./ro":267,"./ro.js":267,"./ru":268,"./ru.js":268,"./sd":269,"./sd.js":269,"./se":270,"./se.js":270,"./si":271,"./si.js":271,"./sk":272,"./sk.js":272,"./sl":273,"./sl.js":273,"./sq":274,"./sq.js":274,"./sr":275,"./sr-cyrl":276,"./sr-cyrl.js":276,"./sr.js":275,"./ss":277,"./ss.js":277,"./sv":278,"./sv.js":278,"./sw":279,"./sw.js":279,"./ta":280,"./ta.js":280,"./te":281,"./te.js":281,"./tet":282,"./tet.js":282,"./tg":283,"./tg.js":283,"./th":284,"./th.js":284,"./tl-ph":285,"./tl-ph.js":285,"./tlh":286,"./tlh.js":286,"./tr":287,"./tr.js":287,"./tzl":288,"./tzl.js":288,"./tzm":289,"./tzm-latn":290,"./tzm-latn.js":290,"./tzm.js":289,"./ug-cn":291,"./ug-cn.js":291,"./uk":292,"./uk.js":292,"./ur":293,"./ur.js":293,"./uz":294,"./uz-latn":295,"./uz-latn.js":295,"./uz.js":294,"./vi":296,"./vi.js":296,"./x-pseudo":297,"./x-pseudo.js":297,"./yo":298,"./yo.js":298,"./zh-cn":299,"./zh-cn.js":299,"./zh-hk":300,"./zh-hk.js":300,"./zh-tw":301,"./zh-tw.js":301};function a(s){var e=j(s);return t(e)}function j(s){if(!t.o(n,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return n[s]}a.keys=function(){return Object.keys(n)},a.resolve=j,s.exports=a,a.id=314}}]);