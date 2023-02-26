(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return j}));var a=n(3),r=n(7),l=n(0),s=n.n(l),o=n(143),c=n(273),u=n(272);function i(){return s.a.createElement("div",null,s.a.createElement("p",null,"The following table describes the Request parameters."),s.a.createElement("table",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Parameter"),s.a.createElement("td",null,"Description"),s.a.createElement("td",null,"Required")),s.a.createElement("tr",null,s.a.createElement("td",null,"baseUrl"),s.a.createElement("td",null,s.a.createElement("p",null,"Base url for calling the API"),"Value: app.yawe.dev/api"),s.a.createElement("td",null,"Yes")),s.a.createElement("tr",null,s.a.createElement("td",null,"versionNumber"),s.a.createElement("td",null,s.a.createElement("p",null,"Service version."),"Value: The current value is 1."),s.a.createElement("td",null,"Yes")),s.a.createElement("tr",null,s.a.createElement("td",null,"customEndpointRoute"),s.a.createElement("td",null,"The route which identifies custom endpoints. Default value: ce"),s.a.createElement("td",null,"Yes")),s.a.createElement("tr",null,s.a.createElement("td",null,"userEndpoint"),s.a.createElement("td",null,"The endpoint name generated by the user. Value: the name created at ",s.a.createElement("a",{href:"https://app.yawe.dev"},"https://app.yawe.dev")),s.a.createElement("td",null,"Yes")),s.a.createElement("tr",null,s.a.createElement("td",null,"key"),s.a.createElement("td",null,"The API Key of the project."),s.a.createElement("td",null,"Yes")),s.a.createElement("tr",null,s.a.createElement("td",null,"masterKey"),s.a.createElement("td",null,s.a.createElement("p",null,"Overrides the need for ",s.a.createElement("i",null,"Access tokens")," or restrictions applied to secure endpoints."),s.a.createElement("p",null,"Don","'","t use this key in your client application."),s.a.createElement("p",null,"For more information please refer to ",s.a.createElement("a",{href:"/docs/getting-started/projects"},"projects"),"."),s.a.createElement("p",null,"Value: the masterKey created at ",s.a.createElement("a",{href:"https://app.yawe.dev"},"https://app.yawe.dev"),".")),s.a.createElement("td",null,"No"))))}var d={id:"email-endpoints",title:"Email endpoints"},b={unversionedId:"email-endpoints",id:"email-endpoints",isDocsHomePage:!1,title:"Email endpoints",description:"Email endpoints allow you to send emails to your users by doing a POST request to our service. These are created under the project view.",source:"@site/docs/email-endpoints.md",slug:"/email-endpoints",permalink:"/docs/email-endpoints",version:"current",sidebar:"docs",previous:{title:"Secure endpoints",permalink:"/docs/secure-endpoints"},next:{title:"File Uploads",permalink:"/docs/file-uploads/file-uploads"}},m=[{value:"Request data",id:"request-data",children:[{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Request Cookies",id:"request-cookies",children:[]},{value:"Request Headers",id:"request-headers",children:[]},{value:"POST body",id:"post-body",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],p={toc:m};function j(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Email endpoints")," allow you to send emails to your users by doing a POST request to our service. These are created under the project view."),Object(o.b)("p",null,"To be able to send emails you need to add an email configuration to your project - the configuration is stored as a JSON with your email provider settings. YAWE uses ",Object(o.b)("b",null,Object(o.b)("a",{href:"https://nodemailer.com/about/",target:"_blank",rel:"noopener noreferrer"},"nodemailer"))," internally, the provided options need to be compatible with nodemailer ",Object(o.b)("a",{href:"https://nodemailer.com/about/#example",target:"_blank",rel:"noopener noreferrer"},"transporter"),". This is done in the project view, under configuration."),Object(o.b)("p",null,"The email endpoint also supports ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"crud/crud-create"}),"GET requests")," to read the emails sent, and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"crud/crud-delete"}),"DELETE requests")," requests to delete emails. It does not support PUT requests as the data stored for emails cannot be modified."),Object(o.b)("h2",{id:"request-data"},"Request data"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP method:")," ",Object(o.b)("inlineCode",{parentName:"p"},"POST")),Object(o.b)("p",null,"URL format:\nhttps://",Object(o.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(o.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(o.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(o.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(o.b)("strong",{parentName:"p"},"apiKey")),Object(o.b)("p",null,"Example:\nhttps://",Object(o.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(o.b)("strong",{parentName:"p"},"1"),"/",Object(o.b)("strong",{parentName:"p"},"ce"),"/",Object(o.b)("strong",{parentName:"p"},"project/email-endpoint"),"?key=",Object(o.b)("strong",{parentName:"p"},"d59eb2859c284168..")),Object(o.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(o.b)(i,{mdxType:"RequestParams"}),Object(o.b)("h3",{id:"request-cookies"},"Request Cookies"),Object(o.b)(c.a,{mdxType:"RequestCookies"}),Object(o.b)("h3",{id:"request-headers"},"Request Headers"),Object(o.b)(u.a,{hasContentTypeHeader:!0,mdxType:"RequestHeaders"}),Object(o.b)("h3",{id:"post-body"},"POST body"),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("td",null,"Parameter"),Object(o.b)("td",null,"Description"),Object(o.b)("td",null,"Required")),Object(o.b)("tr",null,Object(o.b)("td",null,"email"),Object(o.b)("td",null,"The recepient of the email."),Object(o.b)("td",null,"Yes")),Object(o.b)("tr",null,Object(o.b)("td",null,"body"),Object(o.b)("td",null,"The body of the email. This can be plain text or HTML."),Object(o.b)("td",null,"Yes")),Object(o.b)("tr",null,Object(o.b)("td",null,"subject"),Object(o.b)("td",null,"The subject of the email."),Object(o.b)("td",null,"No")),Object(o.b)("tr",null,Object(o.b)("td",null,"from"),Object(o.b)("td",null,"The sender of the email"),Object(o.b)("td",null,"No"))),Object(o.b)("h2",{id:"response-data"},"Response data"),Object(o.b)("h3",{id:"error-codes"},"Error codes"),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("td",null,"Error code"),Object(o.b)("td",null,"Description")),Object(o.b)("tr",null,Object(o.b)("td",null,"400"),Object(o.b)("td",null,Object(o.b)("p",null,"Possible reasons:"),Object(o.b)("ul",null,Object(o.b)("li",null,"email not provided or not valid;"),Object(o.b)("li",null,"body of the email not provided.")))),Object(o.b)("tr",null,Object(o.b)("td",null,"412"),Object(o.b)("td",null,"Email configuration not set in the project.")),Object(o.b)("tr",null,Object(o.b)("td",null,"424"),Object(o.b)("td",null,"There was a problem sending the email, this error is thrown by nodemailer. The reason could be wrong email configuration."))),Object(o.b)("h3",{id:"successful-response"},"Successful response"),Object(o.b)("p",null,"If the email is sent successfully the service will respond with 200."))}j.isMDXComponent=!0},271:function(e,t,n){var a=n(276),r=n(290),l="poaYUITERNM&XBnudycp\u20ac9TIFVAsadasdjikoihvA_SiyutrhgHJHGs#3jmndlkjMVfsdfsolasdbNC12X1257asd!QPLK3";t.ACCESS_TOKEN_COOKIE_NAME="__Secure-yawe-access-token",t.COOKIE_EXPIRY_TIME=43200,t.decodeAccessToken=function(e){var t=a.decode(e,l),n=t.sub,s=t.exp;return{uniqueId:n,expiryDateUnix:r.unix(s)}},t.generateJWT=function(e){var t=r().add(43200,"minutes"),n={exp:t.unix(),iat:r().unix(),sub:e};return{accessToken:a.encode(n,l),expiresIn:t}}},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a);function l(e){var t=e.contentTypeUserOptions,n=e.hasAuthorizationHeader,a=void 0!==n&&n,l=e.hasContentTypeHeader,s=void 0!==l&&l,o=e.hasCacheControlHeader,c=void 0!==o&&o,u=["application/json","text/plain"];return r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Header"),r.a.createElement("td",null,"Description"),r.a.createElement("td",null,"Required")),s&&r.a.createElement("tr",null,r.a.createElement("td",null,"Content-Type"),r.a.createElement("td",null,r.a.createElement("p",null,"Specifies the MIME type of the body of the Request. Options:"),r.a.createElement("ul",null,function(){var e=t||u;if(!Array.isArray(e))throw new Error("Content type options should be an array.");return e.map((function(e){return r.a.createElement("li",{key:e},e)}))}())),r.a.createElement("td",null,"Yes")),a&&r.a.createElement("tr",null,r.a.createElement("td",null,"Authorization"),r.a.createElement("td",null,r.a.createElement("p",null,"The Access token is required for secure endpoints."),r.a.createElement("p",null,"You should use this header if you are not using the httpOnly cookie to access a Secure endpoint."),r.a.createElement("p",null,"For more information please refer to \xa0the\xa0",r.a.createElement("a",{href:"/docs/authentication/authentication-login"},"login documentation"),"\xa0and\xa0",r.a.createElement("a",{href:"/docs/secure-endpoints"},"Secure Endpoints documentation"),".")),r.a.createElement("td",null,"Yes - if endpoint is secure and httpOnly cookie is not used")),c&&r.a.createElement("tr",null,r.a.createElement("td",null,"Cache-Control"),r.a.createElement("td",null,r.a.createElement("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control")),r.a.createElement("td",null,"No")))}},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a),l=n(832),s=n(831);function o(e){var t=e.code,n=e.language,a=void 0===n?"javascript":n;return r.a.createElement("pre",null,r.a.createElement(l.a,{language:a,style:s.a,PreTag:"div",children:t}))}var c=n(271);function u(){return r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Header"),r.a.createElement("td",null,"Description"),r.a.createElement("td",null,"Required")),r.a.createElement("tr",null,r.a.createElement("td",null,c.ACCESS_TOKEN_COOKIE_NAME),r.a.createElement("td",null,r.a.createElement("p",null,"The Access token is required for secure endpoints."),r.a.createElement("p",null,"It is obtained when doing a login and it is stored in an httpOnly cookie. To automatically include it in the request you need to set the following property:"),r.a.createElement(o,{code:"// using fetch\n{ credentials: 'include' }\n\n// using axios\n{ withCredentials: true }"}),r.a.createElement("p",null,"Alternatively you can also use the Authorization header."),"For more information please refer to \xa0the ",r.a.createElement("a",{href:"/docs/authentication/authentication-login"},"login documentation"),"\xa0and ",r.a.createElement("a",{href:"/docs/secure-endpoints"},"Secure Endpoints documentation"),"."),r.a.createElement("td",null,"Yes - if endpoint is secure and Authorization header is not used")))}},278:function(e,t){},279:function(e,t){},280:function(e,t){},281:function(e,t){},282:function(e,t){},283:function(e,t){},284:function(e,t){},285:function(e,t){},286:function(e,t){},287:function(e,t){},288:function(e,t){},289:function(e,t){},291:function(e,t,n){var a={"./af":146,"./af.js":146,"./ar":147,"./ar-dz":148,"./ar-dz.js":148,"./ar-kw":149,"./ar-kw.js":149,"./ar-ly":150,"./ar-ly.js":150,"./ar-ma":151,"./ar-ma.js":151,"./ar-sa":152,"./ar-sa.js":152,"./ar-tn":153,"./ar-tn.js":153,"./ar.js":147,"./az":154,"./az.js":154,"./be":155,"./be.js":155,"./bg":156,"./bg.js":156,"./bm":157,"./bm.js":157,"./bn":158,"./bn.js":158,"./bo":159,"./bo.js":159,"./br":160,"./br.js":160,"./bs":161,"./bs.js":161,"./ca":162,"./ca.js":162,"./cs":163,"./cs.js":163,"./cv":164,"./cv.js":164,"./cy":165,"./cy.js":165,"./da":166,"./da.js":166,"./de":167,"./de-at":168,"./de-at.js":168,"./de-ch":169,"./de-ch.js":169,"./de.js":167,"./dv":170,"./dv.js":170,"./el":171,"./el.js":171,"./en-au":172,"./en-au.js":172,"./en-ca":173,"./en-ca.js":173,"./en-gb":174,"./en-gb.js":174,"./en-ie":175,"./en-ie.js":175,"./en-il":176,"./en-il.js":176,"./en-nz":177,"./en-nz.js":177,"./eo":178,"./eo.js":178,"./es":179,"./es-do":180,"./es-do.js":180,"./es-us":181,"./es-us.js":181,"./es.js":179,"./et":182,"./et.js":182,"./eu":183,"./eu.js":183,"./fa":184,"./fa.js":184,"./fi":185,"./fi.js":185,"./fo":186,"./fo.js":186,"./fr":187,"./fr-ca":188,"./fr-ca.js":188,"./fr-ch":189,"./fr-ch.js":189,"./fr.js":187,"./fy":190,"./fy.js":190,"./gd":191,"./gd.js":191,"./gl":192,"./gl.js":192,"./gom-latn":193,"./gom-latn.js":193,"./gu":194,"./gu.js":194,"./he":195,"./he.js":195,"./hi":196,"./hi.js":196,"./hr":197,"./hr.js":197,"./hu":198,"./hu.js":198,"./hy-am":199,"./hy-am.js":199,"./id":200,"./id.js":200,"./is":201,"./is.js":201,"./it":202,"./it.js":202,"./ja":203,"./ja.js":203,"./jv":204,"./jv.js":204,"./ka":205,"./ka.js":205,"./kk":206,"./kk.js":206,"./km":207,"./km.js":207,"./kn":208,"./kn.js":208,"./ko":209,"./ko.js":209,"./ky":210,"./ky.js":210,"./lb":211,"./lb.js":211,"./lo":212,"./lo.js":212,"./lt":213,"./lt.js":213,"./lv":214,"./lv.js":214,"./me":215,"./me.js":215,"./mi":216,"./mi.js":216,"./mk":217,"./mk.js":217,"./ml":218,"./ml.js":218,"./mn":219,"./mn.js":219,"./mr":220,"./mr.js":220,"./ms":221,"./ms-my":222,"./ms-my.js":222,"./ms.js":221,"./mt":223,"./mt.js":223,"./my":224,"./my.js":224,"./nb":225,"./nb.js":225,"./ne":226,"./ne.js":226,"./nl":227,"./nl-be":228,"./nl-be.js":228,"./nl.js":227,"./nn":229,"./nn.js":229,"./pa-in":230,"./pa-in.js":230,"./pl":231,"./pl.js":231,"./pt":232,"./pt-br":233,"./pt-br.js":233,"./pt.js":232,"./ro":234,"./ro.js":234,"./ru":235,"./ru.js":235,"./sd":236,"./sd.js":236,"./se":237,"./se.js":237,"./si":238,"./si.js":238,"./sk":239,"./sk.js":239,"./sl":240,"./sl.js":240,"./sq":241,"./sq.js":241,"./sr":242,"./sr-cyrl":243,"./sr-cyrl.js":243,"./sr.js":242,"./ss":244,"./ss.js":244,"./sv":245,"./sv.js":245,"./sw":246,"./sw.js":246,"./ta":247,"./ta.js":247,"./te":248,"./te.js":248,"./tet":249,"./tet.js":249,"./tg":250,"./tg.js":250,"./th":251,"./th.js":251,"./tl-ph":252,"./tl-ph.js":252,"./tlh":253,"./tlh.js":253,"./tr":254,"./tr.js":254,"./tzl":255,"./tzl.js":255,"./tzm":256,"./tzm-latn":257,"./tzm-latn.js":257,"./tzm.js":256,"./ug-cn":258,"./ug-cn.js":258,"./uk":259,"./uk.js":259,"./ur":260,"./ur.js":260,"./uz":261,"./uz-latn":262,"./uz-latn.js":262,"./uz.js":261,"./vi":263,"./vi.js":263,"./x-pseudo":264,"./x-pseudo.js":264,"./yo":265,"./yo.js":265,"./zh-cn":266,"./zh-cn.js":266,"./zh-hk":267,"./zh-hk.js":267,"./zh-tw":268,"./zh-tw.js":268};function r(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=291}}]);