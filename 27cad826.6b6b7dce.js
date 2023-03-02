(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{271:function(e,t,n){const s=n(278),a=n(276),l="poaYUITERNM&XBnudycp\u20ac9TIFVAsadasdjikoihvA_SiyutrhgHJHGs#3jmndlkjMVfsdfsolasdbNC12X1257asd!QPLK3";t.ACCESS_TOKEN_COOKIE_NAME="__Secure-rested-access-token",t.COOKIE_EXPIRY_TIME=43200,t.decodeAccessToken=e=>{const t=s.decode(e,l),{sub:n,exp:r}=t;return{uniqueId:n,expiryDateUnix:a.unix(r)}},t.generateJWT=e=>{const t=a().add(43200,"minutes"),n={exp:t.unix(),iat:a().unix(),sub:e};return{accessToken:s.encode(n,l),expiresIn:t}}},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n(0),a=n.n(s),l=n(832),r=n(831);function o(e){var t=e.code,n=e.language,s=void 0===n?"javascript":n;return a.a.createElement("pre",null,a.a.createElement(l.a,{language:s,style:r.a,PreTag:"div",children:t}))}var c=n(271);function i(){return a.a.createElement("table",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Header"),a.a.createElement("td",null,"Description"),a.a.createElement("td",null,"Required")),a.a.createElement("tr",null,a.a.createElement("td",null,c.ACCESS_TOKEN_COOKIE_NAME),a.a.createElement("td",null,a.a.createElement("p",null,"The Access token is required for secure endpoints."),a.a.createElement("p",null,"It is obtained when doing a login and it is stored in an httpOnly cookie. To automatically include it in the request you need to set the following property:"),a.a.createElement(o,{code:"// using fetch\n{ credentials: 'include' }\n\n// using axios\n{ withCredentials: true }"}),a.a.createElement("p",null,"Alternatively you can also use the Authorization header."),"For more information please refer to \xa0the ",a.a.createElement("a",{href:"/docs/authentication/authentication-login"},"login documentation"),"\xa0and ",a.a.createElement("a",{href:"/docs/secure-endpoints"},"Secure Endpoints documentation"),"."),a.a.createElement("td",null,"Yes - if endpoint is secure and Authorization header is not used")))}},277:function(e,t,n){var s={"./af":146,"./af.js":146,"./ar":147,"./ar-dz":148,"./ar-dz.js":148,"./ar-kw":149,"./ar-kw.js":149,"./ar-ly":150,"./ar-ly.js":150,"./ar-ma":151,"./ar-ma.js":151,"./ar-sa":152,"./ar-sa.js":152,"./ar-tn":153,"./ar-tn.js":153,"./ar.js":147,"./az":154,"./az.js":154,"./be":155,"./be.js":155,"./bg":156,"./bg.js":156,"./bm":157,"./bm.js":157,"./bn":158,"./bn.js":158,"./bo":159,"./bo.js":159,"./br":160,"./br.js":160,"./bs":161,"./bs.js":161,"./ca":162,"./ca.js":162,"./cs":163,"./cs.js":163,"./cv":164,"./cv.js":164,"./cy":165,"./cy.js":165,"./da":166,"./da.js":166,"./de":167,"./de-at":168,"./de-at.js":168,"./de-ch":169,"./de-ch.js":169,"./de.js":167,"./dv":170,"./dv.js":170,"./el":171,"./el.js":171,"./en-au":172,"./en-au.js":172,"./en-ca":173,"./en-ca.js":173,"./en-gb":174,"./en-gb.js":174,"./en-ie":175,"./en-ie.js":175,"./en-il":176,"./en-il.js":176,"./en-nz":177,"./en-nz.js":177,"./eo":178,"./eo.js":178,"./es":179,"./es-do":180,"./es-do.js":180,"./es-us":181,"./es-us.js":181,"./es.js":179,"./et":182,"./et.js":182,"./eu":183,"./eu.js":183,"./fa":184,"./fa.js":184,"./fi":185,"./fi.js":185,"./fo":186,"./fo.js":186,"./fr":187,"./fr-ca":188,"./fr-ca.js":188,"./fr-ch":189,"./fr-ch.js":189,"./fr.js":187,"./fy":190,"./fy.js":190,"./gd":191,"./gd.js":191,"./gl":192,"./gl.js":192,"./gom-latn":193,"./gom-latn.js":193,"./gu":194,"./gu.js":194,"./he":195,"./he.js":195,"./hi":196,"./hi.js":196,"./hr":197,"./hr.js":197,"./hu":198,"./hu.js":198,"./hy-am":199,"./hy-am.js":199,"./id":200,"./id.js":200,"./is":201,"./is.js":201,"./it":202,"./it.js":202,"./ja":203,"./ja.js":203,"./jv":204,"./jv.js":204,"./ka":205,"./ka.js":205,"./kk":206,"./kk.js":206,"./km":207,"./km.js":207,"./kn":208,"./kn.js":208,"./ko":209,"./ko.js":209,"./ky":210,"./ky.js":210,"./lb":211,"./lb.js":211,"./lo":212,"./lo.js":212,"./lt":213,"./lt.js":213,"./lv":214,"./lv.js":214,"./me":215,"./me.js":215,"./mi":216,"./mi.js":216,"./mk":217,"./mk.js":217,"./ml":218,"./ml.js":218,"./mn":219,"./mn.js":219,"./mr":220,"./mr.js":220,"./ms":221,"./ms-my":222,"./ms-my.js":222,"./ms.js":221,"./mt":223,"./mt.js":223,"./my":224,"./my.js":224,"./nb":225,"./nb.js":225,"./ne":226,"./ne.js":226,"./nl":227,"./nl-be":228,"./nl-be.js":228,"./nl.js":227,"./nn":229,"./nn.js":229,"./pa-in":230,"./pa-in.js":230,"./pl":231,"./pl.js":231,"./pt":232,"./pt-br":233,"./pt-br.js":233,"./pt.js":232,"./ro":234,"./ro.js":234,"./ru":235,"./ru.js":235,"./sd":236,"./sd.js":236,"./se":237,"./se.js":237,"./si":238,"./si.js":238,"./sk":239,"./sk.js":239,"./sl":240,"./sl.js":240,"./sq":241,"./sq.js":241,"./sr":242,"./sr-cyrl":243,"./sr-cyrl.js":243,"./sr.js":242,"./ss":244,"./ss.js":244,"./sv":245,"./sv.js":245,"./sw":246,"./sw.js":246,"./ta":247,"./ta.js":247,"./te":248,"./te.js":248,"./tet":249,"./tet.js":249,"./tg":250,"./tg.js":250,"./th":251,"./th.js":251,"./tl-ph":252,"./tl-ph.js":252,"./tlh":253,"./tlh.js":253,"./tr":254,"./tr.js":254,"./tzl":255,"./tzl.js":255,"./tzm":256,"./tzm-latn":257,"./tzm-latn.js":257,"./tzm.js":256,"./ug-cn":258,"./ug-cn.js":258,"./uk":259,"./uk.js":259,"./ur":260,"./ur.js":260,"./uz":261,"./uz-latn":262,"./uz-latn.js":262,"./uz.js":261,"./vi":263,"./vi.js":263,"./x-pseudo":264,"./x-pseudo.js":264,"./yo":265,"./yo.js":265,"./zh-cn":266,"./zh-cn.js":266,"./zh-hk":267,"./zh-hk.js":267,"./zh-tw":268,"./zh-tw.js":268};function a(e){var t=l(e);return n(t)}function l(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=l,e.exports=a,a.id=277},280:function(e,t){},281:function(e,t){},282:function(e,t){},283:function(e,t){},284:function(e,t){},285:function(e,t){},286:function(e,t){},287:function(e,t){},288:function(e,t){},289:function(e,t){},290:function(e,t){},291:function(e,t){},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var s=n(3),a=n(7),l=(n(0),n(143)),r=n(273),o={id:"upload-post",title:"Upload (POST)"},c={unversionedId:"file-uploads/upload-post",id:"file-uploads/upload-post",isDocsHomePage:!1,title:"Upload (POST)",description:"Use the POST method to upload files.",source:"@site/docs/file-uploads/upload.md",slug:"/file-uploads/upload-post",permalink:"/docs/file-uploads/upload-post",version:"current",sidebar:"docs",previous:{title:"File Uploads",permalink:"/docs/file-uploads/file-uploads"},next:{title:"Read file data / Get file",permalink:"/docs/file-uploads/upload-read"}},i=[{value:"Request data",id:"request-data",children:[{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Request Cookies",id:"request-cookies",children:[]},{value:"Request Headers",id:"request-headers",children:[]},{value:"POST body",id:"post-body",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],u={toc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(s.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Use the POST method to upload files."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Content type"),' to upload files must be "multipart/form-data".'),Object(l.b)("p",null,"The ",Object(l.b)("a",Object(s.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData"}),Object(l.b)("strong",{parentName:"a"},"FormData"))," interface should be used to upload files and text fields."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Other considerations when uploading files:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Files must be sent with the fieldname ",Object(l.b)("strong",{parentName:"li"},"file"),"."),Object(l.b)("li",{parentName:"ul"},"You can upload up to 10 files in a single request."),Object(l.b)("li",{parentName:"ul"},"Each file can have up to 100 MB."),Object(l.b)("li",{parentName:"ul"},"Text fields are stored under metadata.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"uniqueId")," - For each file uploaded we generate an uniqueId to identify the record stored in the database. This id can be used for the other request types."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example:")),Object(l.b)("pre",null,Object(l.b)("code",Object(s.a)({parentName:"pre"},{className:"language-javascript"}),'fileUpload(file) {\n    const formData = new FormData();\n    formData.append("file", file);\n    formData.append("text", "additional info");\n    const config = {\n      headers: {\n        "Content-Type": "multipart/form-data"\n      }\n    };\n    return axios.post(url, formData, config);\n  }\n')),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(s.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(s.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Please remember that you are responsible for the data and files stored in your endpoints. RESTED_DEV's only objective is to provide a service to its users to make their life easier, we don't have interest in the data and we don't monitor it."))),Object(l.b)("h2",{id:"request-data"},"Request data"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"HTTP method:")," ",Object(l.b)("inlineCode",{parentName:"p"},"POST")),Object(l.b)("p",null,"URL format:\nhttps://",Object(l.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(l.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(l.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(l.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(l.b)("strong",{parentName:"p"},"apiKey"),"[&dataOnly=",Object(l.b)("strong",{parentName:"p"},"true"),"]"),Object(l.b)("p",null,"Example:\nhttps://",Object(l.b)("strong",{parentName:"p"},"app.rested.dev/api"),"/",Object(l.b)("strong",{parentName:"p"},"1"),"/",Object(l.b)("strong",{parentName:"p"},"ce"),"/",Object(l.b)("strong",{parentName:"p"},"examples/unsecure-endpoint"),"?key=",Object(l.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"[&dataOnly=",Object(l.b)("strong",{parentName:"p"},"true"),"]"),Object(l.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(l.b)("p",null,"The following table describes the Request parameters."),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Parameter"),Object(l.b)("td",null,"Description"),Object(l.b)("td",null,"Required")),Object(l.b)("tr",null,Object(l.b)("td",null,"baseUrl"),Object(l.b)("td",null,"Base url for calling the API.",Object(l.b)("p",null,"Value: app.rested.dev/api")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"versionNumber"),Object(l.b)("td",null,"Service version.",Object(l.b)("p",null,"Value: The current value is 1.")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"customEndpointRoute"),Object(l.b)("td",null,"The route which identifies custom endpoints.",Object(l.b)("p",null,"Default value: ce")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"userEndpoint"),Object(l.b)("td",null,"The endpoint name generated by the user.",Object(l.b)("p",null,"Value: the name created at ",Object(l.b)("a",{href:"https://app.rested.dev"},Object(l.b)("a",Object(s.a)({parentName:"p"},{href:"https://app.rested.dev"}),"https://app.rested.dev")))),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"key"),Object(l.b)("td",null,"The API Key of the project."),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"dataOnly"),Object(l.b)("td",null,"If used, the endpoint response will only include the data associated with the file, without additional information such as \u2018uniqueId\u2019.",Object(l.b)("p",null,"Value: true")),Object(l.b)("td",null,"No")),Object(l.b)("tr",null,Object(l.b)("td",null,"masterKey"),Object(l.b)("td",null,"Overrides the need for ",Object(l.b)("i",null,"Access tokens")," or restrictions applied to Authentication endpoints.",Object(l.b)("p",null,"Don't use this key in your client application."),Object(l.b)("p",null,"For more information please refer to ",Object(l.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/getting-started/projects"}),"projects"),"."),Object(l.b)("p",null,"Value: the masterKey created at ",Object(l.b)("a",{href:"https://app.rested.dev"},Object(l.b)("a",Object(s.a)({parentName:"p"},{href:"https://app.rested.dev"}),"https://app.rested.dev")),".")),Object(l.b)("td",null,"No"))),Object(l.b)("h3",{id:"request-cookies"},"Request Cookies"),Object(l.b)(r.a,{mdxType:"RequestCookies"}),Object(l.b)("h3",{id:"request-headers"},"Request Headers"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Header"),Object(l.b)("td",null,"Description"),Object(l.b)("td",null,"Required")),Object(l.b)("tr",null,Object(l.b)("td",null,"Content-Type"),Object(l.b)("td",null,"Specifies the MIME type of the body of the Request. It must be ",Object(l.b)("b",null,"multipart/form-data"),"."),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"Authorization"),Object(l.b)("td",null,Object(l.b)("p",null,"The Access token is required for secure endpoints."),Object(l.b)("p",null,"You should use this header if you are not using the httpOnly cookie to access a Secure endpoint."),Object(l.b)("p",null,"For more information please refer to \xa0the\xa0",Object(l.b)("a",{href:"/docs/authentication/authentication-login"},"login documentation"),"\xa0and\xa0",Object(l.b)("a",{href:"/docs/secure-endpoints"},"Secure Endpoints documentation"),".")),Object(l.b)("td",null,"Yes - if endpoint is secure and httpOnly cookie is not used"))),Object(l.b)("h3",{id:"post-body"},"POST body"),Object(l.b)("p",null,"You can include an array of files (up to 10), and text fields. For files, they must be sent using the fieldname ",Object(l.b)("strong",{parentName:"p"},"file"),"."),Object(l.b)("h2",{id:"response-data"},"Response data"),Object(l.b)("h3",{id:"error-codes"},"Error codes"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Error code"),Object(l.b)("td",null,"Description")),Object(l.b)("tr",null,Object(l.b)("td",null,"400"),Object(l.b)("td",null,"Possible reasons:",Object(l.b)("ul",null,Object(l.b)("li",null,"Endpoint or API Key not valid."),Object(l.b)("li",null,"Wrong Content-Type."),Object(l.b)("li",null,"No files sent."),Object(l.b)("li",null,"Problems uploading the file.")))),Object(l.b)("tr",null,Object(l.b)("td",null,"401"),Object(l.b)("td",null,"If the endpoint is ",Object(l.b)("strong",null,"secured")," and the access token is missing or is not valid.",Object(l.b)("p",null,"It may also return this error if the user no longer exists."))),Object(l.b)("tr",null,Object(l.b)("td",null,"403"),Object(l.b)("td",null,"Missing API Key, not allowed origin or disallowed request without orign."))),Object(l.b)("h3",{id:"successful-response"},"Successful response"),Object(l.b)("pre",null,Object(l.b)("code",Object(s.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "data": {\n    "metadata": {\n      "prop": "test"\n    },\n    "contentType": "video/mp4",\n    "mimetype": "video/mp4",\n    "size": 20163178,\n    "originalname": "internetEvolve.mp4",\n    "fileURL": "https://localhost:8443/api/1/ce/files/files%3E%3E%3EinternetEvolve.mp4?key=4c1224a62bd74174be63f0026354b98a&uniqueId=2d61418864814dc2aa00eedba876c677&fileOnly=true"\n  },\n  "uniqueId": "2d61418864814dc2aa00eedba876c677",\n  "updatedAt": "2021-03-08T20:24:01.000Z",\n  "createdAt": "2021-03-08T20:24:01.000Z"\n}\n')))}d.isMDXComponent=!0}}]);