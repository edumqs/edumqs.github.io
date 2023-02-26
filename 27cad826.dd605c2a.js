(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,O=u["".concat(o,".").concat(p)]||u[p]||d[p]||l;return n?r.a.createElement(O,b(b({ref:t},i),{},{components:n})):r.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var i=2;i<l;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(142)),o={id:"upload-post",title:"Upload (POST)"},b={unversionedId:"file-uploads/upload-post",id:"file-uploads/upload-post",isDocsHomePage:!1,title:"Upload (POST)",description:"Use the POST method to upload files.",source:"@site/docs/file-uploads/upload.md",slug:"/file-uploads/upload-post",permalink:"/docs/file-uploads/upload-post",version:"current",sidebar:"docs",previous:{title:"File Uploads",permalink:"/docs/file-uploads/file-uploads"},next:{title:"Read file data / Get file",permalink:"/docs/file-uploads/upload-read"}},c=[{value:"Request data",id:"request-data",children:[{value:"Request Cookies",id:"request-cookies",children:[]},{value:"Request Headers",id:"request-headers",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]},{value:"POST body",id:"post-body",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],i={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Use the POST method to upload files."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Content type"),' to upload files must be "multipart/form-data".'),Object(l.b)("p",null,"The ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData"}),Object(l.b)("strong",{parentName:"a"},"FormData"))," interface should be used to upload files and text fields."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Other considerations when uploading files:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Files must be sent with the fieldname ",Object(l.b)("strong",{parentName:"li"},"file"),"."),Object(l.b)("li",{parentName:"ul"},"You can upload up to 10 files in a single request."),Object(l.b)("li",{parentName:"ul"},"Each file can have up to 100 MB."),Object(l.b)("li",{parentName:"ul"},"Text fields are stored under metadata.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"uniqueId")," - For each file uploaded we generate an uniqueId to identify the record stored in the database. This id can be used for the other request types."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'fileUpload(file) {\n    const formData = new FormData();\n    formData.append("file", file);\n    formData.append("text", "additional info");\n    const config = {\n      headers: {\n        "Content-Type": "multipart/form-data"\n      }\n    };\n    return axios.post(url, formData, config);\n  }\n')),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Please remember that you are responsible for the data and files stored in your endpoints. YAWE's only objective is to provide a service to its users to make their life easier, we don't have interest in the data and we don't monitor it."))),Object(l.b)("h2",{id:"request-data"},"Request data"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"HTTP method:")," ",Object(l.b)("inlineCode",{parentName:"p"},"POST")),Object(l.b)("p",null,"URL format:\nhttps://",Object(l.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(l.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(l.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(l.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(l.b)("strong",{parentName:"p"},"apiKey"),"[&dataOnly=",Object(l.b)("strong",{parentName:"p"},"true"),"]"),Object(l.b)("p",null,"Example:\nhttps://",Object(l.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(l.b)("strong",{parentName:"p"},"1"),"/",Object(l.b)("strong",{parentName:"p"},"ce"),"/",Object(l.b)("strong",{parentName:"p"},"examples/unsecure-endpoint"),"?key=",Object(l.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd"),"[&dataOnly=",Object(l.b)("strong",{parentName:"p"},"true"),"]"),Object(l.b)("h3",{id:"request-cookies"},"Request Cookies"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Header"),Object(l.b)("td",null,"Description"),Object(l.b)("td",null,"Required")),Object(l.b)("tr",null,Object(l.b)("td",null,"yawe_access_token"),Object(l.b)("td",null,"The Access token is required for secure endpoints.",Object(l.b)("p",null,"It is obtained when doing a login. To automatically include it in the request you need to set the following property:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"})," // using fetch\n{ credentials: 'include' }\n\n// using axios\n{ withCredentials: true }\n")),Object(l.b)("p",null,"For more information check ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/secure-endpoints"}),"Secure Endpoints"),".")),Object(l.b)("td",null,"No"))),Object(l.b)("h3",{id:"request-headers"},"Request Headers"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Header"),Object(l.b)("td",null,"Description"),Object(l.b)("td",null,"Required")),Object(l.b)("tr",null,Object(l.b)("td",null,"Content-Type"),Object(l.b)("td",null,"Specifies the MIME type of the body of the Request. It must be ",Object(l.b)("b",null,"multipart/form-data"),"."),Object(l.b)("td",null,"Yes"))),Object(l.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(l.b)("p",null,"The following table describes the Request parameters."),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Parameter"),Object(l.b)("td",null,"Description"),Object(l.b)("td",null,"Required")),Object(l.b)("tr",null,Object(l.b)("td",null,"baseUrl"),Object(l.b)("td",null,"Base url for calling the API.",Object(l.b)("p",null,"Value: app.yawe.dev/api")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"versionNumber"),Object(l.b)("td",null,"Service version.",Object(l.b)("p",null,"Value: The current value is 1.")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"customEndpointRoute"),Object(l.b)("td",null,"The route which identifies custom endpoints.",Object(l.b)("p",null,"Default value: ce")),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"userEndpoint"),Object(l.b)("td",null,"The endpoint name generated by the user.",Object(l.b)("p",null,"Value: the name created at ",Object(l.b)("a",{href:"https://app.yawe.dev"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"key"),Object(l.b)("td",null,"The API Key of the project."),Object(l.b)("td",null,"Yes")),Object(l.b)("tr",null,Object(l.b)("td",null,"dataOnly"),Object(l.b)("td",null,"If used, the endpoint response will only include the data associated with the file, without additional information such as \u2018uniqueId\u2019.",Object(l.b)("p",null,"Value: true")),Object(l.b)("td",null,"No")),Object(l.b)("tr",null,Object(l.b)("td",null,"masterKey"),Object(l.b)("td",null,"Overrides the need for ",Object(l.b)("i",null,"Access tokens")," or restrictions applied to Authentication endpoints.",Object(l.b)("p",null,"Don't use this key in your client application."),Object(l.b)("p",null,"For more information please refer to ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/projects"}),"projects"),"."),Object(l.b)("p",null,"Value: the masterKey created at ",Object(l.b)("a",{href:"https://app.yawe.dev"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")),".")),Object(l.b)("td",null,"No"))),Object(l.b)("h3",{id:"post-body"},"POST body"),Object(l.b)("p",null,"You can include an array of files (up to 10), and text fields. For files, they must be sent using the fieldname ",Object(l.b)("strong",{parentName:"p"},"file"),"."),Object(l.b)("h2",{id:"response-data"},"Response data"),Object(l.b)("h3",{id:"error-codes"},"Error codes"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Error code"),Object(l.b)("td",null,"Description")),Object(l.b)("tr",null,Object(l.b)("td",null,"400"),Object(l.b)("td",null,"Possible reasons:",Object(l.b)("ul",null,Object(l.b)("li",null,"Endpoint or API Key not valid."),Object(l.b)("li",null,"Wrong Content-Type."),Object(l.b)("li",null,"No files sent."),Object(l.b)("li",null,"Problems uploading the file.")))),Object(l.b)("tr",null,Object(l.b)("td",null,"401"),Object(l.b)("td",null,"If the endpoint is ",Object(l.b)("strong",null,"secured")," and the access token is missing or is not valid.",Object(l.b)("p",null,"It may also return this error if the user no longer exists."))),Object(l.b)("tr",null,Object(l.b)("td",null,"403"),Object(l.b)("td",null,"Missing API Key, not allowed origin or disallowed request without orign."))),Object(l.b)("h3",{id:"successful-response"},"Successful response"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "data": {\n    "metadata": {\n      "prop": "test"\n    },\n    "contentType": "video/mp4",\n    "mimetype": "video/mp4",\n    "size": 20163178,\n    "originalname": "internetEvolve.mp4",\n    "fileURL": "https://localhost:8443/api/1/ce/files/files%3E%3E%3EinternetEvolve.mp4?key=4c1224a62bd74174be63f0026354b98a&uniqueId=2d61418864814dc2aa00eedba876c677&fileOnly=true"\n  },\n  "uniqueId": "2d61418864814dc2aa00eedba876c677",\n  "updatedAt": "2021-03-08T20:24:01.000Z",\n  "createdAt": "2021-03-08T20:24:01.000Z"\n}\n')))}s.isMDXComponent=!0}}]);