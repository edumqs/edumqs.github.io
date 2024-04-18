(self.webpackChunkrested_landing_page=self.webpackChunkrested_landing_page||[]).push([[174],{13024:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var l=n(67294),r=n(34209),a=n(30703);function o(e){let{code:t,language:n="javascript"}=e;return l.createElement("pre",null,l.createElement(r.Z,{language:n,style:a.Z,PreTag:"div",children:t}))}var s=n(51211);function i(){return l.createElement("table",null,l.createElement("tr",null,l.createElement("td",null,"Header"),l.createElement("td",null,"Description"),l.createElement("td",null,"Required")),l.createElement("tr",null,l.createElement("td",null,s.x),l.createElement("td",null,l.createElement("p",null,"The Access token is required for secure endpoints."),l.createElement("p",null,"It is obtained when doing a login and it is stored in an httpOnly cookie. To automatically include it in the request you need to set the following property:"),l.createElement(o,{code:"// using fetch\n{ credentials: 'include' }\n\n// using axios\n{ withCredentials: true }"}),l.createElement("p",null,"Alternatively you can also use the Authorization header."),"For more information please refer to \xa0the ",l.createElement("a",{href:"/docs/authentication/authentication-login"},"login documentation"),"\xa0and ",l.createElement("a",{href:"/docs/secure-endpoints"},"Secure Endpoints documentation"),"."),l.createElement("td",null,"Yes - if endpoint is secure and Authorization header is not used")))}},55209:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var l=n(67294);function r(e){let{contentTypeUserOptions:t,hasAuthorizationHeader:n=!1,hasContentTypeHeader:r=!1,hasCacheControlHeader:a=!1}=e;const o=["application/json","text/plain"];return l.createElement("table",null,l.createElement("tr",null,l.createElement("td",null,"Header"),l.createElement("td",null,"Description"),l.createElement("td",null,"Required")),r&&l.createElement("tr",null,l.createElement("td",null,"Content-Type"),l.createElement("td",null,l.createElement("p",null,"Specifies the MIME type of the body of the Request. Options:"),l.createElement("ul",null,function(){const e=t||o;if(!Array.isArray(e))throw new Error("Content type options should be an array.");return e.map((e=>l.createElement("li",{key:e},e)))}())),l.createElement("td",null,"Yes")),n&&l.createElement("tr",null,l.createElement("td",null,"Authorization"),l.createElement("td",null,l.createElement("p",null,"The Access token is required for secure endpoints."),l.createElement("p",null,"You should use this header if you are not using the httpOnly cookie to access a Secure endpoint."),l.createElement("p",null,"For more information please refer to \xa0the\xa0",l.createElement("a",{href:"/docs/authentication/authentication-login"},"login documentation"),"\xa0and\xa0",l.createElement("a",{href:"/docs/secure-endpoints"},"Secure Endpoints documentation"),".")),l.createElement("td",null,"Yes - if endpoint is secure and httpOnly cookie is not used")),a&&l.createElement("tr",null,l.createElement("td",null,"Cache-Control"),l.createElement("td",null,l.createElement("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control")),l.createElement("td",null,"No")))}},51211:(e,t)=>{t.x="__Secure-rested-access-token"},71791:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var l=n(87462),r=n(67294),a=n(3905),o=n(13024),s=n(55209);function i(){return r.createElement("div",null,r.createElement("p",null,"The following table describes the Request parameters."),r.createElement("table",null,r.createElement("tr",null,r.createElement("td",null,"Parameter"),r.createElement("td",null,"Description"),r.createElement("td",null,"Required")),r.createElement("tr",null,r.createElement("td",null,"baseUrl"),r.createElement("td",null,r.createElement("p",null,"Base url for calling the API"),"Value: app.rested.dev/api"),r.createElement("td",null,"Yes")),r.createElement("tr",null,r.createElement("td",null,"versionNumber"),r.createElement("td",null,r.createElement("p",null,"Service version."),"Value: The current value is 1."),r.createElement("td",null,"Yes")),r.createElement("tr",null,r.createElement("td",null,"customEndpointRoute"),r.createElement("td",null,"The route which identifies custom endpoints. Default value: ce"),r.createElement("td",null,"Yes")),r.createElement("tr",null,r.createElement("td",null,"userEndpoint"),r.createElement("td",null,"The endpoint name generated by the user. Value: the name created at ",r.createElement("a",{href:"https://app.rested.dev"},"https://app.rested.dev")),r.createElement("td",null,"Yes")),r.createElement("tr",null,r.createElement("td",null,"key"),r.createElement("td",null,"The API Key of the project."),r.createElement("td",null,"Yes")),r.createElement("tr",null,r.createElement("td",null,"masterKey"),r.createElement("td",null,r.createElement("p",null,"Overrides the need for ",r.createElement("i",null,"Access tokens")," or restrictions applied to secure endpoints."),r.createElement("p",null,"Don","'","t use this key in your client application."),r.createElement("p",null,"For more information please refer to ",r.createElement("a",{href:"/docs/getting-started/projects"},"projects"),"."),r.createElement("p",null,"Value: the masterKey created at ",r.createElement("a",{href:"https://app.rested.dev"},"https://app.rested.dev"),".")),r.createElement("td",null,"No"))))}const u={id:"email-endpoints",title:"Email endpoints"},d=void 0,c={unversionedId:"email-endpoints",id:"email-endpoints",title:"Email endpoints",description:"Email endpoints allow you to send emails to your users by doing a POST request to our service. These are created under the project view.",source:"@site/docs/email-endpoints.md",sourceDirName:".",slug:"/email-endpoints",permalink:"/docs/email-endpoints",draft:!1,tags:[],version:"current",frontMatter:{id:"email-endpoints",title:"Email endpoints"},sidebar:"docs",previous:{title:"Secure endpoints",permalink:"/docs/secure-endpoints"},next:{title:"File Uploads",permalink:"/docs/file-uploads/"}},p={},m=[{value:"Request data",id:"request-data",level:2},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Cookies",id:"request-cookies",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"POST body",id:"post-body",level:3},{value:"Response data",id:"response-data",level:2},{value:"Error codes",id:"error-codes",level:3},{value:"Successful response",id:"successful-response",level:3}],h={toc:m},E="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(E,(0,l.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Email endpoints")," allow you to send emails to your users by doing a POST request to our service. These are created under the project view."),(0,a.kt)("p",null,"To be able to send emails you need to add an email configuration to your project - the configuration is stored as a JSON with your email provider settings. RESTED_DEV uses ",(0,a.kt)("b",null,(0,a.kt)("a",{href:"https://nodemailer.com/about/",target:"_blank",rel:"noopener noreferrer"},"nodemailer"))," internally, the provided options need to be compatible with nodemailer ",(0,a.kt)("a",{href:"https://nodemailer.com/about/#example",target:"_blank",rel:"noopener noreferrer"},"transporter"),". This is done in the project view, under configuration."),(0,a.kt)("p",null,"The email endpoint also supports ",(0,a.kt)("a",{parentName:"p",href:"crud/crud-create"},"GET requests")," to read the emails sent, and ",(0,a.kt)("a",{parentName:"p",href:"crud/crud-delete"},"DELETE requests")," requests to delete emails. It does not support PUT requests as the data stored for emails cannot be modified."),(0,a.kt)("h2",{id:"request-data"},"Request data"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"HTTP method:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")),(0,a.kt)("p",null,"URL format:\nhttps://",(0,a.kt)("strong",{parentName:"p"},"baseUrl"),"/",(0,a.kt)("strong",{parentName:"p"},"versionNumber"),"/",(0,a.kt)("strong",{parentName:"p"},"customEndpointRoute"),"/",(0,a.kt)("strong",{parentName:"p"},"userEndpoint"),"?key=",(0,a.kt)("strong",{parentName:"p"},"apiKey")),(0,a.kt)("p",null,"Example:\nhttps://",(0,a.kt)("strong",{parentName:"p"},"app.rested.dev/api"),"/",(0,a.kt)("strong",{parentName:"p"},"1"),"/",(0,a.kt)("strong",{parentName:"p"},"ce"),"/",(0,a.kt)("strong",{parentName:"p"},"project/email-endpoint"),"?key=",(0,a.kt)("strong",{parentName:"p"},"d59eb2859c284168..")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)(i,{mdxType:"RequestParams"}),(0,a.kt)("h3",{id:"request-cookies"},"Request Cookies"),(0,a.kt)(o.Z,{mdxType:"RequestCookies"}),(0,a.kt)("h3",{id:"request-headers"},"Request Headers"),(0,a.kt)(s.Z,{hasContentTypeHeader:!0,mdxType:"RequestHeaders"}),(0,a.kt)("h3",{id:"post-body"},"POST body"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description"),(0,a.kt)("td",null,"Required")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"email"),(0,a.kt)("td",null,"The recepient of the email."),(0,a.kt)("td",null,"Yes")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"body"),(0,a.kt)("td",null,"The body of the email. This can be plain text or HTML."),(0,a.kt)("td",null,"Yes")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"subject"),(0,a.kt)("td",null,"The subject of the email."),(0,a.kt)("td",null,"No")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"from"),(0,a.kt)("td",null,"The sender of the email"),(0,a.kt)("td",null,"No"))),(0,a.kt)("h2",{id:"response-data"},"Response data"),(0,a.kt)("h3",{id:"error-codes"},"Error codes"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Error code"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"400"),(0,a.kt)("td",null,(0,a.kt)("p",null,"Possible reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"email not provided or not valid;"),(0,a.kt)("li",null,"body of the email not provided.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"412"),(0,a.kt)("td",null,"Email configuration not set in the project.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"424"),(0,a.kt)("td",null,"There was a problem sending the email, this error is thrown by nodemailer. The reason could be wrong email configuration."))),(0,a.kt)("h3",{id:"successful-response"},"Successful response"),(0,a.kt)("p",null,"If the email is sent successfully the service will respond with 200."))}k.isMDXComponent=!0}}]);