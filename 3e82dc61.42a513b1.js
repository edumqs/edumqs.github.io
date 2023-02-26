(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{271:function(e,t,n){var a=n(278),r=n(276),s="poaYUITERNM&XBnudycp\u20ac9TIFVAsadasdjikoihvA_SiyutrhgHJHGs#3jmndlkjMVfsdfsolasdbNC12X1257asd!QPLK3";t.ACCESS_TOKEN_COOKIE_NAME="__Secure-yawe-access-token",t.COOKIE_EXPIRY_TIME=43200,t.decodeAccessToken=function(e){var t=a.decode(e,s),n=t.sub,l=t.exp;return{uniqueId:n,expiryDateUnix:r.unix(l)}},t.generateJWT=function(e){var t=r().add(43200,"minutes"),n={exp:t.unix(),iat:r().unix(),sub:e};return{accessToken:a.encode(n,s),expiresIn:t}}},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a);function s(e){var t=e.contentTypeUserOptions,n=e.hasAuthorizationHeader,a=void 0!==n&&n,s=e.hasContentTypeHeader,l=void 0!==s&&s,c=e.hasCacheControlHeader,u=void 0!==c&&c,o=["application/json","text/plain"];return r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Header"),r.a.createElement("td",null,"Description"),r.a.createElement("td",null,"Required")),l&&r.a.createElement("tr",null,r.a.createElement("td",null,"Content-Type"),r.a.createElement("td",null,r.a.createElement("p",null,"Specifies the MIME type of the body of the Request. Options:"),r.a.createElement("ul",null,function(){var e=t||o;if(!Array.isArray(e))throw new Error("Content type options should be an array.");return e.map((function(e){return r.a.createElement("li",{key:e},e)}))}())),r.a.createElement("td",null,"Yes")),a&&r.a.createElement("tr",null,r.a.createElement("td",null,"Authorization"),r.a.createElement("td",null,r.a.createElement("p",null,"The Access token is required for secure endpoints."),r.a.createElement("p",null,"You should use this header if you are not using the httpOnly cookie to access a Secure endpoint."),r.a.createElement("p",null,"For more information please refer to \xa0the\xa0",r.a.createElement("a",{href:"/docs/authentication/authentication-login"},"login documentation"),"\xa0and\xa0",r.a.createElement("a",{href:"/docs/secure-endpoints"},"Secure Endpoints documentation"),".")),r.a.createElement("td",null,"Yes - if endpoint is secure and httpOnly cookie is not used")),u&&r.a.createElement("tr",null,r.a.createElement("td",null,"Cache-Control"),r.a.createElement("td",null,r.a.createElement("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control")),r.a.createElement("td",null,"No")))}},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),s=n(822),l=n(821);function c(e){var t=e.code,n=e.language,a=void 0===n?"javascript":n;return r.a.createElement("pre",null,r.a.createElement(s.a,{language:a,style:l.a,PreTag:"div",children:t}))}var u=n(271);function o(){return r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Header"),r.a.createElement("td",null,"Description"),r.a.createElement("td",null,"Required")),r.a.createElement("tr",null,r.a.createElement("td",null,u.ACCESS_TOKEN_COOKIE_NAME),r.a.createElement("td",null,r.a.createElement("p",null,"The Access token is required for secure endpoints."),r.a.createElement("p",null,"It is obtained when doing a login and it is stored in an httpOnly cookie. To automatically include it in the request you need to set the following property:"),r.a.createElement(c,{code:"// using fetch\n{ credentials: 'include' }\n\n// using axios\n{ withCredentials: true }"}),r.a.createElement("p",null,"Alternatively you can also use the Authorization header."),"For more information please refer to \xa0the ",r.a.createElement("a",{href:"/docs/authentication/authentication-login"},"login documentation"),"\xa0and ",r.a.createElement("a",{href:"/docs/secure-endpoints"},"Secure Endpoints documentation"),"."),r.a.createElement("td",null,"Yes - if endpoint is secure and Authorization header is not used")))}},277:function(e,t,n){var a={"./af":146,"./af.js":146,"./ar":147,"./ar-dz":148,"./ar-dz.js":148,"./ar-kw":149,"./ar-kw.js":149,"./ar-ly":150,"./ar-ly.js":150,"./ar-ma":151,"./ar-ma.js":151,"./ar-sa":152,"./ar-sa.js":152,"./ar-tn":153,"./ar-tn.js":153,"./ar.js":147,"./az":154,"./az.js":154,"./be":155,"./be.js":155,"./bg":156,"./bg.js":156,"./bm":157,"./bm.js":157,"./bn":158,"./bn.js":158,"./bo":159,"./bo.js":159,"./br":160,"./br.js":160,"./bs":161,"./bs.js":161,"./ca":162,"./ca.js":162,"./cs":163,"./cs.js":163,"./cv":164,"./cv.js":164,"./cy":165,"./cy.js":165,"./da":166,"./da.js":166,"./de":167,"./de-at":168,"./de-at.js":168,"./de-ch":169,"./de-ch.js":169,"./de.js":167,"./dv":170,"./dv.js":170,"./el":171,"./el.js":171,"./en-au":172,"./en-au.js":172,"./en-ca":173,"./en-ca.js":173,"./en-gb":174,"./en-gb.js":174,"./en-ie":175,"./en-ie.js":175,"./en-il":176,"./en-il.js":176,"./en-nz":177,"./en-nz.js":177,"./eo":178,"./eo.js":178,"./es":179,"./es-do":180,"./es-do.js":180,"./es-us":181,"./es-us.js":181,"./es.js":179,"./et":182,"./et.js":182,"./eu":183,"./eu.js":183,"./fa":184,"./fa.js":184,"./fi":185,"./fi.js":185,"./fo":186,"./fo.js":186,"./fr":187,"./fr-ca":188,"./fr-ca.js":188,"./fr-ch":189,"./fr-ch.js":189,"./fr.js":187,"./fy":190,"./fy.js":190,"./gd":191,"./gd.js":191,"./gl":192,"./gl.js":192,"./gom-latn":193,"./gom-latn.js":193,"./gu":194,"./gu.js":194,"./he":195,"./he.js":195,"./hi":196,"./hi.js":196,"./hr":197,"./hr.js":197,"./hu":198,"./hu.js":198,"./hy-am":199,"./hy-am.js":199,"./id":200,"./id.js":200,"./is":201,"./is.js":201,"./it":202,"./it.js":202,"./ja":203,"./ja.js":203,"./jv":204,"./jv.js":204,"./ka":205,"./ka.js":205,"./kk":206,"./kk.js":206,"./km":207,"./km.js":207,"./kn":208,"./kn.js":208,"./ko":209,"./ko.js":209,"./ky":210,"./ky.js":210,"./lb":211,"./lb.js":211,"./lo":212,"./lo.js":212,"./lt":213,"./lt.js":213,"./lv":214,"./lv.js":214,"./me":215,"./me.js":215,"./mi":216,"./mi.js":216,"./mk":217,"./mk.js":217,"./ml":218,"./ml.js":218,"./mn":219,"./mn.js":219,"./mr":220,"./mr.js":220,"./ms":221,"./ms-my":222,"./ms-my.js":222,"./ms.js":221,"./mt":223,"./mt.js":223,"./my":224,"./my.js":224,"./nb":225,"./nb.js":225,"./ne":226,"./ne.js":226,"./nl":227,"./nl-be":228,"./nl-be.js":228,"./nl.js":227,"./nn":229,"./nn.js":229,"./pa-in":230,"./pa-in.js":230,"./pl":231,"./pl.js":231,"./pt":232,"./pt-br":233,"./pt-br.js":233,"./pt.js":232,"./ro":234,"./ro.js":234,"./ru":235,"./ru.js":235,"./sd":236,"./sd.js":236,"./se":237,"./se.js":237,"./si":238,"./si.js":238,"./sk":239,"./sk.js":239,"./sl":240,"./sl.js":240,"./sq":241,"./sq.js":241,"./sr":242,"./sr-cyrl":243,"./sr-cyrl.js":243,"./sr.js":242,"./ss":244,"./ss.js":244,"./sv":245,"./sv.js":245,"./sw":246,"./sw.js":246,"./ta":247,"./ta.js":247,"./te":248,"./te.js":248,"./tet":249,"./tet.js":249,"./tg":250,"./tg.js":250,"./th":251,"./th.js":251,"./tl-ph":252,"./tl-ph.js":252,"./tlh":253,"./tlh.js":253,"./tr":254,"./tr.js":254,"./tzl":255,"./tzl.js":255,"./tzm":256,"./tzm-latn":257,"./tzm-latn.js":257,"./tzm.js":256,"./ug-cn":258,"./ug-cn.js":258,"./uk":259,"./uk.js":259,"./ur":260,"./ur.js":260,"./uz":261,"./uz-latn":262,"./uz-latn.js":262,"./uz.js":261,"./vi":263,"./vi.js":263,"./x-pseudo":264,"./x-pseudo.js":264,"./yo":265,"./yo.js":265,"./zh-cn":266,"./zh-cn.js":266,"./zh-hk":267,"./zh-hk.js":267,"./zh-tw":268,"./zh-tw.js":268};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=277},280:function(e,t){},281:function(e,t){},282:function(e,t){},283:function(e,t){},284:function(e,t){},285:function(e,t){},286:function(e,t){},287:function(e,t){},288:function(e,t){},289:function(e,t){},290:function(e,t){},291:function(e,t){},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),s=(n(0),n(143)),l=n(273),c=n(272),u={id:"crud-read",title:"Read (GET)"},o={unversionedId:"crud/crud-read",id:"crud/crud-read",isDocsHomePage:!1,title:"Read (GET)",description:"Use the GET method to fetch data from your endpoint.",source:"@site/docs/crud/read.md",slug:"/crud/crud-read",permalink:"/docs/crud/crud-read",version:"current",sidebar:"docs",previous:{title:"Create (POST)",permalink:"/docs/crud/crud-create"},next:{title:"Update (PUT)",permalink:"/docs/crud/crud-update"}},d=[{value:"Request data",id:"request-data",children:[{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Request Cookies",id:"request-cookies",children:[]},{value:"Request Headers",id:"request-headers",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],i={toc:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Use the GET method to fetch data from your endpoint."),Object(s.b)("p",null,"Use one or more ",Object(s.b)("em",{parentName:"p"},"uniqueId"),"\u2019s to fetch specific records from the database. If not specified all records will be returned."),Object(s.b)("h2",{id:"request-data"},"Request data"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"HTTP method:")," ",Object(s.b)("inlineCode",{parentName:"p"},"GET")),Object(s.b)("p",null,"URL format: https://",Object(s.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(s.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(s.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(s.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(s.b)("strong",{parentName:"p"},"apiKey["),"&uniqueId=",Object(s.b)("strong",{parentName:"p"},"uniqueId]"),"[&",Object(s.b)("strong",{parentName:"p"},"dataOnly"),"=true]"),Object(s.b)("p",null,"Example:"),Object(s.b)("p",null,"https://",Object(s.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(s.b)("strong",{parentName:"p"},"1"),"/",Object(s.b)("strong",{parentName:"p"},"ce"),"/",Object(s.b)("strong",{parentName:"p"},"examples/unsecure-endpoint"),"?key=",Object(s.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"[&uniqueId=",Object(s.b)("strong",{parentName:"p"},"45e964d5b6ed49b1a2e14d8ac724109e"),"][&dataOnly=true]"),Object(s.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(s.b)("p",null,"The following table describes the Request parameters."),Object(s.b)("table",null,Object(s.b)("tr",null,Object(s.b)("td",null,"Parameter"),Object(s.b)("td",null,"Description"),Object(s.b)("td",null,"Required")),Object(s.b)("tr",null,Object(s.b)("td",null,"baseUrl"),Object(s.b)("td",null,"Base url for calling the API.",Object(s.b)("p",null,"Value: app.yawe.dev/api")),Object(s.b)("td",null,"Yes")),Object(s.b)("tr",null,Object(s.b)("td",null,"versionNumber"),Object(s.b)("td",null,"Service version.",Object(s.b)("p",null,"Value: The current value is 1.")),Object(s.b)("td",null,"Yes")),Object(s.b)("tr",null,Object(s.b)("td",null,"customEndpointRoute"),Object(s.b)("td",null,"The route which identifies custom endpoints.",Object(s.b)("p",null,"Default value: ce")),Object(s.b)("td",null,"Yes")),Object(s.b)("tr",null,Object(s.b)("td",null,"userEndpoint"),Object(s.b)("td",null,"The endpoint name generated by the user.",Object(s.b)("p",null,"Value: the name created at ",Object(s.b)("a",{href:"https://app.yawe.dev"},Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(s.b)("td",null,"Yes")),Object(s.b)("tr",null,Object(s.b)("td",null,"apiKey"),Object(s.b)("td",null,"The API Key of the project."),Object(s.b)("td",null,"Yes")),Object(s.b)("tr",null,Object(s.b)("td",null,"uniqueId"),Object(s.b)("td",null,"If used, the endpoint will only serve the record with a matching uniqueId.",Object(s.b)("p",null,"   It is also possible to provide multiple uniqueId's."),Object(s.b)("p",null,"If none is passed, the endpoint will serve all the records.")),Object(s.b)("td",null,"No")),Object(s.b)("tr",null,Object(s.b)("td",null,"dataOnly"),Object(s.b)("td",null,"If used, the endpoint will only serve the user data. It won\u2019t include fields such as ",Object(s.b)("em",null,"uniqueId, createdAt, updateAt"),".",Object(s.b)("p",null,"Value: true")),Object(s.b)("td",null,"No")),Object(s.b)("tr",null,Object(s.b)("td",null,"masterKey"),Object(s.b)("td",null,"Overrides the need for ",Object(s.b)("i",null,"Access tokens")," or restrictions applied to Authentication endpoints.",Object(s.b)("p",null,"Don't use this key in your client application."),Object(s.b)("p",null,"For more information please refer to ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/projects"}),"projects"),"."),Object(s.b)("p",null,"Value: the masterKey created at ",Object(s.b)("a",{href:"https://app.yawe.dev"},Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")),".")),Object(s.b)("td",null,"No")),Object(s.b)("tr",null,Object(s.b)("td",null,"jsonata"),Object(s.b)("td",null,Object(s.b)("p",null,"Use this parameter to query, filter, sort and transform your data (and more!)"),Object(s.b)("p",null,"It accepts ",Object(s.b)("a",{target:"_blank",href:"https://docs.jsonata.org/overview.html"},"JSONata")," compatible expressions."),Object(s.b)("p",null,"The evaluation of the expression is applied to the output of the endpoint, including when other parameters are used (e.g. dataOnly)."),Object(s.b)("p",null,"Check the JSONata documentation on their ",Object(s.b)("a",{target:"_blank",href:"https://docs.jsonata.org/overview.html"},"page"),", or check our quick guide, ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/jsonata"}),"JSONata, query and transform"),".")),Object(s.b)("td",null,"No"))),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"https://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd&uniqueId=45e964d5b6ed49b1a2e14d8ac724109e\n\n// With multiple uniqueIds:\n\nhttps://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd&uniqueId=45e964d5b6ed49b1a2e14d8ac724109e&uniqueId=3f38bf9e1bb54d2396d1f1b8fbba1630\n")),Object(s.b)("h3",{id:"request-cookies"},"Request Cookies"),Object(s.b)(l.a,{mdxType:"RequestCookies"}),Object(s.b)("h3",{id:"request-headers"},"Request Headers"),Object(s.b)(c.a,{hasAuthorizationHeader:!0,mdxType:"RequestHeaders"}),Object(s.b)("h2",{id:"response-data"},"Response data"),Object(s.b)("h3",{id:"error-codes"},"Error codes"),Object(s.b)("table",null,Object(s.b)("tr",null,Object(s.b)("td",null,"Error code"),Object(s.b)("td",null,"Description")),Object(s.b)("tr",null,Object(s.b)("td",null,"400"),Object(s.b)("td",null,"Possible reasons:",Object(s.b)("ul",null,Object(s.b)("li",null,"Endpoint or API Key not valid.")))),Object(s.b)("tr",null,Object(s.b)("td",null,"401"),Object(s.b)("td",null,"If the endpoint is ",Object(s.b)("strong",null,"secure")," and the access token is missing or is not valid.",Object(s.b)("p",null,"It may also return this error if the user no longer exists."))),Object(s.b)("tr",null,Object(s.b)("td",null,"403"),Object(s.b)("td",null,"Missing API Key, not allowed origin or disallowed request without orign."))),Object(s.b)("h3",{id:"successful-response"},"Successful response"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    uniqueId: "3f38bf9e1bb54d2396d1f1b8fbba1630",\n    data: { property: "data" },\n    createdAt: "2020-12-27T10:58:45.000Z",\n    updatedAt: "2020-12-27T10:58:45.000Z"\n}\n')),Object(s.b)("p",null,"Example of a successful response using ",Object(s.b)("strong",{parentName:"p"},"dataOnly=true"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n"propertyFive": "555"\n}\n')),Object(s.b)("p",null,"If the response includes multiple records it returns an Array[] of records:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'[{\n    uniqueId: "3f38bf9e1bb54d2396d1f1b8fbba1630",\n    data: { property: "data" },\n    createdAt: "2020-12-27T10:58:45.000Z",\n    updatedAt: "2020-12-27T10:58:45.000Z"\n}, {\n    uniqueId: "3f38bf9e1bb54d2396d1f1b8fbba1630",\n    data: { property: "data2" },\n    createdAt: "2020-12-27T10:58:45.000Z",\n    updatedAt: "2020-12-27T10:58:45.000Z"\n}]\n')))}b.isMDXComponent=!0}}]);