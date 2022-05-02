(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{141:function(s,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return l})),t.d(e,"metadata",(function(){return m})),t.d(e,"toc",(function(){return d})),t.d(e,"default",(function(){return b}));var n=t(3),a=t(7),j=t(0),r=t.n(j),u=t(143),c=t(276),o=t.n(c);function i(){var s=Object(j.useState)(0),e=s[0],t=s[1];return Object(j.useEffect)((function(){fetch("https://app.yawe.dev/api/1/status-plus").then((function(s){return s.json()})).then((function(s){var e=s.requestsPerDay.filter((function(s){return o()(new Date(s.date)).isAfter(o()(new Date).subtract(2,"months"))})),n=document.getElementById("myChart");new window.Chart(n,{type:"bar",data:{datasets:[{label:"Requests per day",data:e}]},options:{parsing:{xAxisKey:"date",yAxisKey:"totalRequests"}}});t(Object.values(s.clientsPerInstance).reduce((function(s,e){return s+parseInt(e,10)}),0))}))}),[]),r.a.createElement("div",null,r.a.createElement("canvas",{id:"myChart",style:{height:"300px",width:"100%"}}),r.a.createElement("br",null),r.a.createElement("h2",null,"Clients connected: ",e),r.a.createElement("p",null,"Total number of clients connected using websockets."))}var l={title:"Status",description:"YAWE API status"},m={type:"mdx",permalink:"/status",source:"@site/src/pages/status.mdx"},d=[{value:"Uptime",id:"uptime",children:[]},{value:"Requests per day",id:"requests-per-day",children:[]}],p={toc:d};function b(s){var e=s.components,t=Object(a.a)(s,["components"]);return Object(u.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"status"},"Status"),Object(u.b)("h2",{id:"uptime"},"Uptime"),Object(u.b)("p",null,"We monitor our API using statuscake, below you can see the uptime for the past 30 days."),Object(u.b)("a",{href:"https://www.statuscake.com",title:"Website Uptime Monitoring"},Object(u.b)("img",{src:"https://app.statuscake.com/button/index.php?Track=5822480&Days=30&Design=2"})),Object(u.b)("p",null),Object(u.b)("h2",{id:"requests-per-day"},"Requests per day"),Object(u.b)("p",null,"In the following graph we show the total number of requests per day in the last two months."),Object(u.b)(i,{mdxType:"UsageGraph"}))}b.isMDXComponent=!0},277:function(s,e,t){var n={"./af":146,"./af.js":146,"./ar":147,"./ar-dz":148,"./ar-dz.js":148,"./ar-kw":149,"./ar-kw.js":149,"./ar-ly":150,"./ar-ly.js":150,"./ar-ma":151,"./ar-ma.js":151,"./ar-sa":152,"./ar-sa.js":152,"./ar-tn":153,"./ar-tn.js":153,"./ar.js":147,"./az":154,"./az.js":154,"./be":155,"./be.js":155,"./bg":156,"./bg.js":156,"./bm":157,"./bm.js":157,"./bn":158,"./bn.js":158,"./bo":159,"./bo.js":159,"./br":160,"./br.js":160,"./bs":161,"./bs.js":161,"./ca":162,"./ca.js":162,"./cs":163,"./cs.js":163,"./cv":164,"./cv.js":164,"./cy":165,"./cy.js":165,"./da":166,"./da.js":166,"./de":167,"./de-at":168,"./de-at.js":168,"./de-ch":169,"./de-ch.js":169,"./de.js":167,"./dv":170,"./dv.js":170,"./el":171,"./el.js":171,"./en-au":172,"./en-au.js":172,"./en-ca":173,"./en-ca.js":173,"./en-gb":174,"./en-gb.js":174,"./en-ie":175,"./en-ie.js":175,"./en-il":176,"./en-il.js":176,"./en-nz":177,"./en-nz.js":177,"./eo":178,"./eo.js":178,"./es":179,"./es-do":180,"./es-do.js":180,"./es-us":181,"./es-us.js":181,"./es.js":179,"./et":182,"./et.js":182,"./eu":183,"./eu.js":183,"./fa":184,"./fa.js":184,"./fi":185,"./fi.js":185,"./fo":186,"./fo.js":186,"./fr":187,"./fr-ca":188,"./fr-ca.js":188,"./fr-ch":189,"./fr-ch.js":189,"./fr.js":187,"./fy":190,"./fy.js":190,"./gd":191,"./gd.js":191,"./gl":192,"./gl.js":192,"./gom-latn":193,"./gom-latn.js":193,"./gu":194,"./gu.js":194,"./he":195,"./he.js":195,"./hi":196,"./hi.js":196,"./hr":197,"./hr.js":197,"./hu":198,"./hu.js":198,"./hy-am":199,"./hy-am.js":199,"./id":200,"./id.js":200,"./is":201,"./is.js":201,"./it":202,"./it.js":202,"./ja":203,"./ja.js":203,"./jv":204,"./jv.js":204,"./ka":205,"./ka.js":205,"./kk":206,"./kk.js":206,"./km":207,"./km.js":207,"./kn":208,"./kn.js":208,"./ko":209,"./ko.js":209,"./ky":210,"./ky.js":210,"./lb":211,"./lb.js":211,"./lo":212,"./lo.js":212,"./lt":213,"./lt.js":213,"./lv":214,"./lv.js":214,"./me":215,"./me.js":215,"./mi":216,"./mi.js":216,"./mk":217,"./mk.js":217,"./ml":218,"./ml.js":218,"./mn":219,"./mn.js":219,"./mr":220,"./mr.js":220,"./ms":221,"./ms-my":222,"./ms-my.js":222,"./ms.js":221,"./mt":223,"./mt.js":223,"./my":224,"./my.js":224,"./nb":225,"./nb.js":225,"./ne":226,"./ne.js":226,"./nl":227,"./nl-be":228,"./nl-be.js":228,"./nl.js":227,"./nn":229,"./nn.js":229,"./pa-in":230,"./pa-in.js":230,"./pl":231,"./pl.js":231,"./pt":232,"./pt-br":233,"./pt-br.js":233,"./pt.js":232,"./ro":234,"./ro.js":234,"./ru":235,"./ru.js":235,"./sd":236,"./sd.js":236,"./se":237,"./se.js":237,"./si":238,"./si.js":238,"./sk":239,"./sk.js":239,"./sl":240,"./sl.js":240,"./sq":241,"./sq.js":241,"./sr":242,"./sr-cyrl":243,"./sr-cyrl.js":243,"./sr.js":242,"./ss":244,"./ss.js":244,"./sv":245,"./sv.js":245,"./sw":246,"./sw.js":246,"./ta":247,"./ta.js":247,"./te":248,"./te.js":248,"./tet":249,"./tet.js":249,"./tg":250,"./tg.js":250,"./th":251,"./th.js":251,"./tl-ph":252,"./tl-ph.js":252,"./tlh":253,"./tlh.js":253,"./tr":254,"./tr.js":254,"./tzl":255,"./tzl.js":255,"./tzm":256,"./tzm-latn":257,"./tzm-latn.js":257,"./tzm.js":256,"./ug-cn":258,"./ug-cn.js":258,"./uk":259,"./uk.js":259,"./ur":260,"./ur.js":260,"./uz":261,"./uz-latn":262,"./uz-latn.js":262,"./uz.js":261,"./vi":263,"./vi.js":263,"./x-pseudo":264,"./x-pseudo.js":264,"./yo":265,"./yo.js":265,"./zh-cn":266,"./zh-cn.js":266,"./zh-hk":267,"./zh-hk.js":267,"./zh-tw":268,"./zh-tw.js":268};function a(s){var e=j(s);return t(e)}function j(s){if(!t.o(n,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return n[s]}a.keys=function(){return Object.keys(n)},a.resolve=j,s.exports=a,a.id=277}}]);