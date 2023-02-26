(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{141:function(s,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return l})),t.d(e,"metadata",(function(){return m})),t.d(e,"toc",(function(){return d})),t.d(e,"default",(function(){return b}));var n=t(3),a=t(7),j=t(0),r=t.n(j),u=t(143),c=t(620),o=t.n(c);function i(){var s=Object(j.useState)(0),e=s[0],t=s[1];return Object(j.useEffect)((function(){fetch("https://app.yawe.dev/api/1/status-plus").then((function(s){return s.json()})).then((function(s){var e=s.requestsPerDay.filter((function(s){return o()(new Date(s.date)).isAfter(o()(new Date).subtract(2,"months"))})),n=document.getElementById("myChart");new window.Chart(n,{type:"bar",data:{datasets:[{label:"Requests per day",data:e}]},options:{parsing:{xAxisKey:"date",yAxisKey:"totalRequests"}}});t(Object.values(s.clientsPerInstance).reduce((function(s,e){return s+parseInt(e,10)}),0))}))}),[]),r.a.createElement("div",null,r.a.createElement("canvas",{id:"myChart",style:{height:"300px",width:"100%"}}),r.a.createElement("br",null),r.a.createElement("h2",null,"Clients connected: ",e),r.a.createElement("p",null,"Total number of clients connected using websockets."))}var l={title:"Status",description:"YAWE API status"},m={type:"mdx",permalink:"/status",source:"@site/src/pages/status.mdx"},d=[{value:"Uptime",id:"uptime",children:[]},{value:"Requests per day",id:"requests-per-day",children:[]}],p={toc:d};function b(s){var e=s.components,t=Object(a.a)(s,["components"]);return Object(u.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"status"},"Status"),Object(u.b)("h2",{id:"uptime"},"Uptime"),Object(u.b)("p",null,"We monitor our API using statuscake, below you can see the uptime for the past 30 days."),Object(u.b)("a",{href:"https://www.statuscake.com",title:"Website Uptime Monitoring"},Object(u.b)("img",{src:"https://app.statuscake.com/button/index.php?Track=5822480&Days=30&Design=2"})),Object(u.b)("p",null),Object(u.b)("h2",{id:"requests-per-day"},"Requests per day"),Object(u.b)("p",null,"In the following graph we show the total number of requests per day in the last two months."),Object(u.b)(i,{mdxType:"UsageGraph"}))}b.isMDXComponent=!0},623:function(s,e,t){var n={"./af":214,"./af.js":214,"./ar":215,"./ar-dz":216,"./ar-dz.js":216,"./ar-kw":217,"./ar-kw.js":217,"./ar-ly":218,"./ar-ly.js":218,"./ar-ma":219,"./ar-ma.js":219,"./ar-sa":220,"./ar-sa.js":220,"./ar-tn":221,"./ar-tn.js":221,"./ar.js":215,"./az":222,"./az.js":222,"./be":223,"./be.js":223,"./bg":224,"./bg.js":224,"./bm":225,"./bm.js":225,"./bn":226,"./bn.js":226,"./bo":227,"./bo.js":227,"./br":228,"./br.js":228,"./bs":229,"./bs.js":229,"./ca":230,"./ca.js":230,"./cs":231,"./cs.js":231,"./cv":232,"./cv.js":232,"./cy":233,"./cy.js":233,"./da":234,"./da.js":234,"./de":235,"./de-at":236,"./de-at.js":236,"./de-ch":237,"./de-ch.js":237,"./de.js":235,"./dv":238,"./dv.js":238,"./el":239,"./el.js":239,"./en-au":240,"./en-au.js":240,"./en-ca":241,"./en-ca.js":241,"./en-gb":242,"./en-gb.js":242,"./en-ie":243,"./en-ie.js":243,"./en-il":244,"./en-il.js":244,"./en-nz":245,"./en-nz.js":245,"./eo":246,"./eo.js":246,"./es":247,"./es-do":248,"./es-do.js":248,"./es-us":249,"./es-us.js":249,"./es.js":247,"./et":250,"./et.js":250,"./eu":251,"./eu.js":251,"./fa":252,"./fa.js":252,"./fi":253,"./fi.js":253,"./fo":254,"./fo.js":254,"./fr":255,"./fr-ca":256,"./fr-ca.js":256,"./fr-ch":257,"./fr-ch.js":257,"./fr.js":255,"./fy":258,"./fy.js":258,"./gd":259,"./gd.js":259,"./gl":260,"./gl.js":260,"./gom-latn":261,"./gom-latn.js":261,"./gu":262,"./gu.js":262,"./he":263,"./he.js":263,"./hi":264,"./hi.js":264,"./hr":265,"./hr.js":265,"./hu":266,"./hu.js":266,"./hy-am":267,"./hy-am.js":267,"./id":268,"./id.js":268,"./is":269,"./is.js":269,"./it":270,"./it.js":270,"./ja":271,"./ja.js":271,"./jv":272,"./jv.js":272,"./ka":273,"./ka.js":273,"./kk":274,"./kk.js":274,"./km":275,"./km.js":275,"./kn":276,"./kn.js":276,"./ko":277,"./ko.js":277,"./ky":278,"./ky.js":278,"./lb":279,"./lb.js":279,"./lo":280,"./lo.js":280,"./lt":281,"./lt.js":281,"./lv":282,"./lv.js":282,"./me":283,"./me.js":283,"./mi":284,"./mi.js":284,"./mk":285,"./mk.js":285,"./ml":286,"./ml.js":286,"./mn":287,"./mn.js":287,"./mr":288,"./mr.js":288,"./ms":289,"./ms-my":290,"./ms-my.js":290,"./ms.js":289,"./mt":291,"./mt.js":291,"./my":292,"./my.js":292,"./nb":293,"./nb.js":293,"./ne":294,"./ne.js":294,"./nl":295,"./nl-be":296,"./nl-be.js":296,"./nl.js":295,"./nn":297,"./nn.js":297,"./pa-in":298,"./pa-in.js":298,"./pl":299,"./pl.js":299,"./pt":300,"./pt-br":301,"./pt-br.js":301,"./pt.js":300,"./ro":302,"./ro.js":302,"./ru":303,"./ru.js":303,"./sd":304,"./sd.js":304,"./se":305,"./se.js":305,"./si":306,"./si.js":306,"./sk":307,"./sk.js":307,"./sl":308,"./sl.js":308,"./sq":309,"./sq.js":309,"./sr":310,"./sr-cyrl":311,"./sr-cyrl.js":311,"./sr.js":310,"./ss":312,"./ss.js":312,"./sv":313,"./sv.js":313,"./sw":314,"./sw.js":314,"./ta":315,"./ta.js":315,"./te":316,"./te.js":316,"./tet":317,"./tet.js":317,"./tg":318,"./tg.js":318,"./th":319,"./th.js":319,"./tl-ph":320,"./tl-ph.js":320,"./tlh":321,"./tlh.js":321,"./tr":322,"./tr.js":322,"./tzl":323,"./tzl.js":323,"./tzm":324,"./tzm-latn":325,"./tzm-latn.js":325,"./tzm.js":324,"./ug-cn":326,"./ug-cn.js":326,"./uk":327,"./uk.js":327,"./ur":328,"./ur.js":328,"./uz":329,"./uz-latn":330,"./uz-latn.js":330,"./uz.js":329,"./vi":331,"./vi.js":331,"./x-pseudo":332,"./x-pseudo.js":332,"./yo":333,"./yo.js":333,"./zh-cn":334,"./zh-cn.js":334,"./zh-hk":335,"./zh-hk.js":335,"./zh-tw":336,"./zh-tw.js":336};function a(s){var e=j(s);return t(e)}function j(s){if(!t.o(n,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return n[s]}a.keys=function(){return Object.keys(n)},a.resolve=j,s.exports=a,a.id=623}}]);