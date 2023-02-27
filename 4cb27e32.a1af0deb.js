(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),s=n(7),l=(n(0),n(143)),r=n(273),u=n(272),o={id:"authentication-update-user",title:"Update user"},c={unversionedId:"authentication/authentication-update-user",id:"authentication/authentication-update-user",isDocsHomePage:!1,title:"Update user",description:"Perform an UPDATE request to the Authentication endpoint to update the user data.",source:"@site/docs/authentication/update-user.md",slug:"/authentication/authentication-update-user",permalink:"/docs/authentication/authentication-update-user",version:"current",sidebar:"docs",previous:{title:"Get logged-in user",permalink:"/docs/authentication/authentication-get-logged-in-user"},next:{title:"Delete user",permalink:"/docs/authentication/authentication-delete-user"}},i=[{value:"Request data",id:"request-data",children:[{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Request Cookies",id:"request-cookies",children:[]},{value:"Request Headers",id:"request-headers",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],b={toc:i};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Perform an UPDATE request to the Authentication endpoint to update the user data."),Object(l.b)("p",null,"Only the owner of the data can update it. This mechanism was implemented to prevent other authenticated users from updating other users data."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note that Authentication endpoints are secured by default, so you have to include the Access token in the request. See below Request Cookies or Request headers.")),Object(l.b)("h2",{id:"request-data"},"Request data"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"HTTP method:")," ",Object(l.b)("inlineCode",{parentName:"p"},"PUT")),Object(l.b)("p",null,"URL format:\nhttps://",Object(l.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(l.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(l.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(l.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(l.b)("strong",{parentName:"p"},"apiKey"),"&uniqueId=",Object(l.b)("strong",{parentName:"p"},"uniqueId"),"[&",Object(l.b)("strong",{parentName:"p"},"dataOnly"),"=true]"),Object(l.b)("p",null,"Example:"),Object(l.b)("p",null,"https://",Object(l.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(l.b)("strong",{parentName:"p"},"1"),"/",Object(l.b)("strong",{parentName:"p"},"ce"),"/",Object(l.b)("strong",{parentName:"p"},"examples/auth"),"?key=",Object(l.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"&uniqueId=lhgsdfisgdifgsiy47f7s47f","[&",Object(l.b)("strong",{parentName:"p"},"dataOnly"),"=true]"),Object(l.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(l.b)("p",null,"The following table describes the Request parameters."),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Parameter"),Object(l.b)("td",null,"Description"),Object(l.b)("td",null,"Required")),Object(l.b)("tr",null,Object(l.b)("td",null,"baseUrl"),Object(l.b)("td",null,"Base url for calling the API.",Object(l.b)("p",null,"Value: app.yawe.dev/api")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"versionNumber"),Object(l.b)("td",null,"Service version.",Object(l.b)("p",null,"Value: The current value is 1.")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"customEndpointRoute"),Object(l.b)("td",null,"The route which identifies custom endpoints.",Object(l.b)("p",null,"Default value: ce")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"userEndpoint"),Object(l.b)("td",null,"The endpoint name generated by the user.",Object(l.b)("p",null,"Value: the name created at ",Object(l.b)("a",{href:"https://app.yawe.dev"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"key"),Object(l.b)("td",null,"The API Key of the project."),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"uniqueId"),Object(l.b)("td",null,"The identifier of the record to be updated."),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"dataOnly"),Object(l.b)("td",null,"If used, the endpoint response will be the POST body, without additional information such as \u2018uniqueId\u2019.",Object(l.b)("p",null,"Value: true")),Object(l.b)("td",null,"No")),Object(l.b)("tr",null,Object(l.b)("td",null,"masterKey"),Object(l.b)("td",null,"Overrides the need for ",Object(l.b)("i",null,"Access tokens")," or restrictions applied to Authentication endpoints.",Object(l.b)("p",null,"Don't use this key in your client application."),Object(l.b)("p",null,"For more information please refer to ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/projects"}),"projects"),"."),Object(l.b)("p",null,"Value: the masterKey created at ",Object(l.b)("a",{href:"https://app.yawe.dev"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")),".")),Object(l.b)("td",null,"No")),Object(l.b)("tr",null,Object(l.b)("td",null,"strategy"),Object(l.b)("td",null,"A strategy allows you to choose how the data is updated.",Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("i",null,"Values:"),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("li",null,Object(l.b)("b",null,"force")," - (default) replaces the content regardless of the type."),Object(l.b)("li",null,Object(l.b)("b",null,"merge")," - merges objects, it only works with JSON."),Object(l.b)("li",null,Object(l.b)("b",null,"replace")," - replaces the entire content, types must be the same.")),"Remember that, in authentication endpoints, ",Object(l.b)("b",null,"username and password")," are required fields. If after the update these values are not present the endpoint will return an error."),Object(l.b)("td",null,"No"))),Object(l.b)("h3",{id:"request-cookies"},"Request Cookies"),Object(l.b)(r.a,{mdxType:"RequestCookies"}),Object(l.b)("h3",{id:"request-headers"},"Request Headers"),Object(l.b)(u.a,{hasAuthorizationHeader:!0,mdxType:"RequestHeaders"}),Object(l.b)("h2",{id:"response-data"},"Response data"),Object(l.b)("h3",{id:"error-codes"},"Error codes"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Error code"),Object(l.b)("td",null,"Description")),Object(l.b)("tr",null,Object(l.b)("td",null,"400"),Object(l.b)("td",null,"Possible reasons:",Object(l.b)("ul",null,Object(l.b)("li",null,"Endpoint or API Key not valid."),Object(l.b)("li",null,'Wrong Content-Type, it only accepts "text/plain" or "application/json".'),Object(l.b)("li",null,"Empty Request body."),Object(l.b)("li",null,"uniqueId is not present in the URL."),Object(l.b)("li",null,"No record was found."),Object(l.b)("li",null,Object(l.b)("strong",null,"username")," or ",Object(l.b)("strong",null,"password")," are not present in the request body."),Object(l.b)("li",null,"User is not the owner of the data.")))),Object(l.b)("tr",null,Object(l.b)("td",null,"401"),Object(l.b)("td",null,"Possible reasons:",Object(l.b)("ul",null,Object(l.b)("li",null,"Missing Access Token."),Object(l.b)("li",null,"Invalid credentials."),Object(l.b)("li",null,"Token expired."),Object(l.b)("li",null,"No user found.")))),Object(l.b)("tr",null,Object(l.b)("td",null,"403"),Object(l.b)("td",null,"Missing API Key, not allowed origin or disallowed request without orign."))),Object(l.b)("h3",{id:"successful-response"},"Successful response"),Object(l.b)("p",null,"The new data in the record."),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\nuniqueId: "3f38bf9e1bb54d2396d1f1b8fbba1630",\ndata: { username: "usernameeee" },\ncreatedAt: "2020-12-27T10:58:45.000Z",\nupdatedAt: "2020-12-27T10:58:45.000Z"\n}\n')))}d.isMDXComponent=!0},271:function(e,t,n){var a=n(278),s=n(276),l="poaYUITERNM&XBnudycp\u20ac9TIFVAsadasdjikoihvA_SiyutrhgHJHGs#3jmndlkjMVfsdfsolasdbNC12X1257asd!QPLK3";t.ACCESS_TOKEN_COOKIE_NAME="__Secure-yawe-access-token",t.COOKIE_EXPIRY_TIME=43200,t.decodeAccessToken=function(e){var t=a.decode(e,l),n=t.sub,r=t.exp;return{uniqueId:n,expiryDateUnix:s.unix(r)}},t.generateJWT=function(e){var t=s().add(43200,"minutes"),n={exp:t.unix(),iat:s().unix(),sub:e};return{accessToken:a.encode(n,l),expiresIn:t}}},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),s=n.n(a);function l(e){var t=e.contentTypeUserOptions,n=e.hasAuthorizationHeader,a=void 0!==n&&n,l=e.hasContentTypeHeader,r=void 0!==l&&l,u=e.hasCacheControlHeader,o=void 0!==u&&u,c=["application/json","text/plain"];return s.a.createElement("table",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Header"),s.a.createElement("td",null,"Description"),s.a.createElement("td",null,"Required")),r&&s.a.createElement("tr",null,s.a.createElement("td",null,"Content-Type"),s.a.createElement("td",null,s.a.createElement("p",null,"Specifies the MIME type of the body of the Request. Options:"),s.a.createElement("ul",null,function(){var e=t||c;if(!Array.isArray(e))throw new Error("Content type options should be an array.");return e.map((function(e){return s.a.createElement("li",{key:e},e)}))}())),s.a.createElement("td",null,"Yes")),a&&s.a.createElement("tr",null,s.a.createElement("td",null,"Authorization"),s.a.createElement("td",null,s.a.createElement("p",null,"The Access token is required for secure endpoints."),s.a.createElement("p",null,"You should use this header if you are not using the httpOnly cookie to access a Secure endpoint."),s.a.createElement("p",null,"For more information please refer to \xa0the\xa0",s.a.createElement("a",{href:"/docs/authentication/authentication-login"},"login documentation"),"\xa0and\xa0",s.a.createElement("a",{href:"/docs/secure-endpoints"},"Secure Endpoints documentation"),".")),s.a.createElement("td",null,"Yes - if endpoint is secure and httpOnly cookie is not used")),o&&s.a.createElement("tr",null,s.a.createElement("td",null,"Cache-Control"),s.a.createElement("td",null,s.a.createElement("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control")),s.a.createElement("td",null,"No")))}},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),s=n.n(a),l=n(832),r=n(831);function u(e){var t=e.code,n=e.language,a=void 0===n?"javascript":n;return s.a.createElement("pre",null,s.a.createElement(l.a,{language:a,style:r.a,PreTag:"div",children:t}))}var o=n(271);function c(){return s.a.createElement("table",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Header"),s.a.createElement("td",null,"Description"),s.a.createElement("td",null,"Required")),s.a.createElement("tr",null,s.a.createElement("td",null,o.ACCESS_TOKEN_COOKIE_NAME),s.a.createElement("td",null,s.a.createElement("p",null,"The Access token is required for secure endpoints."),s.a.createElement("p",null,"It is obtained when doing a login and it is stored in an httpOnly cookie. To automatically include it in the request you need to set the following property:"),s.a.createElement(u,{code:"// using fetch\n{ credentials: 'include' }\n\n// using axios\n{ withCredentials: true }"}),s.a.createElement("p",null,"Alternatively you can also use the Authorization header."),"For more information please refer to \xa0the ",s.a.createElement("a",{href:"/docs/authentication/authentication-login"},"login documentation"),"\xa0and ",s.a.createElement("a",{href:"/docs/secure-endpoints"},"Secure Endpoints documentation"),"."),s.a.createElement("td",null,"Yes - if endpoint is secure and Authorization header is not used")))}},277:function(e,t,n){var a={"./af":146,"./af.js":146,"./ar":147,"./ar-dz":148,"./ar-dz.js":148,"./ar-kw":149,"./ar-kw.js":149,"./ar-ly":150,"./ar-ly.js":150,"./ar-ma":151,"./ar-ma.js":151,"./ar-sa":152,"./ar-sa.js":152,"./ar-tn":153,"./ar-tn.js":153,"./ar.js":147,"./az":154,"./az.js":154,"./be":155,"./be.js":155,"./bg":156,"./bg.js":156,"./bm":157,"./bm.js":157,"./bn":158,"./bn.js":158,"./bo":159,"./bo.js":159,"./br":160,"./br.js":160,"./bs":161,"./bs.js":161,"./ca":162,"./ca.js":162,"./cs":163,"./cs.js":163,"./cv":164,"./cv.js":164,"./cy":165,"./cy.js":165,"./da":166,"./da.js":166,"./de":167,"./de-at":168,"./de-at.js":168,"./de-ch":169,"./de-ch.js":169,"./de.js":167,"./dv":170,"./dv.js":170,"./el":171,"./el.js":171,"./en-au":172,"./en-au.js":172,"./en-ca":173,"./en-ca.js":173,"./en-gb":174,"./en-gb.js":174,"./en-ie":175,"./en-ie.js":175,"./en-il":176,"./en-il.js":176,"./en-nz":177,"./en-nz.js":177,"./eo":178,"./eo.js":178,"./es":179,"./es-do":180,"./es-do.js":180,"./es-us":181,"./es-us.js":181,"./es.js":179,"./et":182,"./et.js":182,"./eu":183,"./eu.js":183,"./fa":184,"./fa.js":184,"./fi":185,"./fi.js":185,"./fo":186,"./fo.js":186,"./fr":187,"./fr-ca":188,"./fr-ca.js":188,"./fr-ch":189,"./fr-ch.js":189,"./fr.js":187,"./fy":190,"./fy.js":190,"./gd":191,"./gd.js":191,"./gl":192,"./gl.js":192,"./gom-latn":193,"./gom-latn.js":193,"./gu":194,"./gu.js":194,"./he":195,"./he.js":195,"./hi":196,"./hi.js":196,"./hr":197,"./hr.js":197,"./hu":198,"./hu.js":198,"./hy-am":199,"./hy-am.js":199,"./id":200,"./id.js":200,"./is":201,"./is.js":201,"./it":202,"./it.js":202,"./ja":203,"./ja.js":203,"./jv":204,"./jv.js":204,"./ka":205,"./ka.js":205,"./kk":206,"./kk.js":206,"./km":207,"./km.js":207,"./kn":208,"./kn.js":208,"./ko":209,"./ko.js":209,"./ky":210,"./ky.js":210,"./lb":211,"./lb.js":211,"./lo":212,"./lo.js":212,"./lt":213,"./lt.js":213,"./lv":214,"./lv.js":214,"./me":215,"./me.js":215,"./mi":216,"./mi.js":216,"./mk":217,"./mk.js":217,"./ml":218,"./ml.js":218,"./mn":219,"./mn.js":219,"./mr":220,"./mr.js":220,"./ms":221,"./ms-my":222,"./ms-my.js":222,"./ms.js":221,"./mt":223,"./mt.js":223,"./my":224,"./my.js":224,"./nb":225,"./nb.js":225,"./ne":226,"./ne.js":226,"./nl":227,"./nl-be":228,"./nl-be.js":228,"./nl.js":227,"./nn":229,"./nn.js":229,"./pa-in":230,"./pa-in.js":230,"./pl":231,"./pl.js":231,"./pt":232,"./pt-br":233,"./pt-br.js":233,"./pt.js":232,"./ro":234,"./ro.js":234,"./ru":235,"./ru.js":235,"./sd":236,"./sd.js":236,"./se":237,"./se.js":237,"./si":238,"./si.js":238,"./sk":239,"./sk.js":239,"./sl":240,"./sl.js":240,"./sq":241,"./sq.js":241,"./sr":242,"./sr-cyrl":243,"./sr-cyrl.js":243,"./sr.js":242,"./ss":244,"./ss.js":244,"./sv":245,"./sv.js":245,"./sw":246,"./sw.js":246,"./ta":247,"./ta.js":247,"./te":248,"./te.js":248,"./tet":249,"./tet.js":249,"./tg":250,"./tg.js":250,"./th":251,"./th.js":251,"./tl-ph":252,"./tl-ph.js":252,"./tlh":253,"./tlh.js":253,"./tr":254,"./tr.js":254,"./tzl":255,"./tzl.js":255,"./tzm":256,"./tzm-latn":257,"./tzm-latn.js":257,"./tzm.js":256,"./ug-cn":258,"./ug-cn.js":258,"./uk":259,"./uk.js":259,"./ur":260,"./ur.js":260,"./uz":261,"./uz-latn":262,"./uz-latn.js":262,"./uz.js":261,"./vi":263,"./vi.js":263,"./x-pseudo":264,"./x-pseudo.js":264,"./yo":265,"./yo.js":265,"./zh-cn":266,"./zh-cn.js":266,"./zh-hk":267,"./zh-hk.js":267,"./zh-tw":268,"./zh-tw.js":268};function s(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=l,e.exports=s,s.id=277},280:function(e,t){},281:function(e,t){},282:function(e,t){},283:function(e,t){},284:function(e,t){},285:function(e,t){},286:function(e,t){},287:function(e,t){},288:function(e,t){},289:function(e,t){},290:function(e,t){},291:function(e,t){}}]);