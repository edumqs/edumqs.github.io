(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return h})),n.d(t,"toc",(function(){return j})),n.d(t,"default",(function(){return O}));var l=n(3),a=n(7),r=n(0),o=n.n(r),c=n(143),s=n(628),u=n(627);function i(e){var t=e.code,n=e.language,l=void 0===n?"javascript":n;return o.a.createElement("pre",null,o.a.createElement(s.a,{language:l,style:u.a,PreTag:"div",children:t}))}function d(){return o.a.createElement("table",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Header"),o.a.createElement("td",null,"Description"),o.a.createElement("td",null,"Required")),o.a.createElement("tr",null,o.a.createElement("td",null,"yawe_access_token"),o.a.createElement("td",null,o.a.createElement("p",null,"The Access token is required for secure endpoints."),o.a.createElement("p",null,"It is obtained when doing a login and it is stored in an httpOnly cookie. To automatically include it in the request you need to set the following property:"),o.a.createElement(i,{code:"// using fetch\n{ credentials: 'include' }\n\n// using axios\n{ withCredentials: true }"}),"For more information check ",o.a.createElement("a",{href:"/docs/secure-endpoints"},"Secure Endpoints"),"."),o.a.createElement("td",null,"No")))}function b(e){var t=e.contentTypeUserOptions,n=["application/json","text/plain"];return o.a.createElement("table",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Header"),o.a.createElement("td",null,"Description"),o.a.createElement("td",null,"Required")),o.a.createElement("tr",null,o.a.createElement("td",null,"Content-Type"),o.a.createElement("td",null,o.a.createElement("p",null,"Specifies the MIME type of the body of the Request. Options:"),o.a.createElement("ul",null,function(){var e=t||n;if(!Array.isArray(e))throw new Error("Content type options should be an array.");return e.map((function(e){return o.a.createElement("li",{key:e},e)}))}())),o.a.createElement("td",null,"Yes")))}function p(){return o.a.createElement("div",null,o.a.createElement("p",null,"The following table describes the Request parameters."),o.a.createElement("table",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Parameter"),o.a.createElement("td",null,"Description"),o.a.createElement("td",null,"Required")),o.a.createElement("tr",null,o.a.createElement("td",null,"baseUrl"),o.a.createElement("td",null,o.a.createElement("p",null,"Base url for calling the API"),"Value: app.yawe.dev/api"),o.a.createElement("td",null,"Yes")),o.a.createElement("tr",null,o.a.createElement("td",null,"versionNumber"),o.a.createElement("td",null,o.a.createElement("p",null,"Service version."),"Value: The current value is 1."),o.a.createElement("td",null,"Yes")),o.a.createElement("tr",null,o.a.createElement("td",null,"customEndpointRoute"),o.a.createElement("td",null,"The route which identifies custom endpoints. Default value: ce"),o.a.createElement("td",null,"Yes")),o.a.createElement("tr",null,o.a.createElement("td",null,"userEndpoint"),o.a.createElement("td",null,"The endpoint name generated by the user. Value: the name created at ",o.a.createElement("a",{href:"https://app.yawe.dev"},"https://app.yawe.dev")),o.a.createElement("td",null,"Yes")),o.a.createElement("tr",null,o.a.createElement("td",null,"key"),o.a.createElement("td",null,"The API Key of the project."),o.a.createElement("td",null,"Yes")),o.a.createElement("tr",null,o.a.createElement("td",null,"masterKey"),o.a.createElement("td",null,o.a.createElement("p",null,"Overrides the need for ",o.a.createElement("i",null,"Access tokens")," or restrictions applied to secure endpoints."),o.a.createElement("p",null,"Don","'","t use this key in your client application."),o.a.createElement("p",null,"For more information please refer to ",o.a.createElement("a",{href:"/docs/getting-started/projects"},"projects"),"."),o.a.createElement("p",null,"Value: the masterKey created at ",o.a.createElement("a",{href:"https://app.yawe.dev"},"https://app.yawe.dev"),".")),o.a.createElement("td",null,"No"))))}var m={id:"email-endpoints",title:"Email endpoints"},h={unversionedId:"email-endpoints",id:"email-endpoints",isDocsHomePage:!1,title:"Email endpoints",description:"Email endpoints allow you to send emails to your users by doing a POST request to our service. These are created under the project view.",source:"@site/docs/email-endpoints.mdx",slug:"/email-endpoints",permalink:"/docs/email-endpoints",version:"current",sidebar:"docs",previous:{title:"Secure endpoints",permalink:"/docs/secure-endpoints"},next:{title:"File Uploads",permalink:"/docs/file-uploads/file-uploads"}},j=[{value:"Request data",id:"request-data",children:[{value:"Request Cookies",id:"request-cookies",children:[]},{value:"Request Headers",id:"request-headers",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]},{value:"POST body",id:"post-body",children:[]}]},{value:"Response data",id:"response-data",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],E={toc:j};function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(l.a)({},E,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Email endpoints")," allow you to send emails to your users by doing a POST request to our service. These are created under the project view."),Object(c.b)("p",null,"To be able to send emails you need to add an email configuration to your project - the configuration is stored as a JSON with your email provider settings. YAWE uses ",Object(c.b)("b",null,Object(c.b)("a",{href:"https://nodemailer.com/about/",target:"_blank",rel:"noopener noreferrer"},"nodemailer"))," internally, the provided options need to be compatible with nodemailer ",Object(c.b)("a",{href:"https://nodemailer.com/about/#example",target:"_blank",rel:"noopener noreferrer"},"transporter"),". This is done in the project view, under configuration."),Object(c.b)("p",null,"The email endpoint also supports ",Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"crud/crud-create"}),"GET requests")," to read the emails sent, and ",Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"crud/crud-delete"}),"DELETE requests")," requests to delete emails. It does not support PUT requests as the data stored for emails cannot be modified."),Object(c.b)("h2",{id:"request-data"},"Request data"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"HTTP method:")," ",Object(c.b)("inlineCode",{parentName:"p"},"POST")),Object(c.b)("p",null,"URL format:\nhttps://",Object(c.b)("strong",{parentName:"p"},"baseUrl"),"/",Object(c.b)("strong",{parentName:"p"},"versionNumber"),"/",Object(c.b)("strong",{parentName:"p"},"customEndpointRoute"),"/",Object(c.b)("strong",{parentName:"p"},"userEndpoint"),"?key=",Object(c.b)("strong",{parentName:"p"},"apiKey")),Object(c.b)("p",null,"Example:\nhttps://",Object(c.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(c.b)("strong",{parentName:"p"},"1"),"/",Object(c.b)("strong",{parentName:"p"},"ce"),"/",Object(c.b)("strong",{parentName:"p"},"project/email-endpoint"),"?key=",Object(c.b)("strong",{parentName:"p"},"d59eb2859c284168..")),Object(c.b)("h3",{id:"request-cookies"},"Request Cookies"),Object(c.b)(d,{mdxType:"RequestCookies"}),Object(c.b)("h3",{id:"request-headers"},"Request Headers"),Object(c.b)(b,{mdxType:"RequestHeaders"}),Object(c.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(c.b)(p,{mdxType:"RequestParams"}),Object(c.b)("h3",{id:"post-body"},"POST body"),Object(c.b)("table",null,Object(c.b)("tr",null,Object(c.b)("td",null,"Parameter"),Object(c.b)("td",null,"Description"),Object(c.b)("td",null,"Required")),Object(c.b)("tr",null,Object(c.b)("td",null,"email"),Object(c.b)("td",null,"The recepient of the email."),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"body"),Object(c.b)("td",null,"The body of the email. This can be plain text or HTML."),Object(c.b)("td",null,"Yes")),Object(c.b)("tr",null,Object(c.b)("td",null,"subject"),Object(c.b)("td",null,"The subject of the email."),Object(c.b)("td",null,"No")),Object(c.b)("tr",null,Object(c.b)("td",null,"from"),Object(c.b)("td",null,"The sender of the email"),Object(c.b)("td",null,"No"))),Object(c.b)("h2",{id:"response-data"},"Response data"),Object(c.b)("h3",{id:"error-codes"},"Error codes"),Object(c.b)("table",null,Object(c.b)("tr",null,Object(c.b)("td",null,"Error code"),Object(c.b)("td",null,"Description")),Object(c.b)("tr",null,Object(c.b)("td",null,"400"),Object(c.b)("td",null,Object(c.b)("p",null,"Possible reasons:"),Object(c.b)("ul",null,Object(c.b)("li",null,"email not provided or not valid;"),Object(c.b)("li",null,"body of the email not provided.")))),Object(c.b)("tr",null,Object(c.b)("td",null,"412"),Object(c.b)("td",null,"Email configuration not set in the project.")),Object(c.b)("tr",null,Object(c.b)("td",null,"424"),Object(c.b)("td",null,"There was a problem sending the email, this error is thrown by nodemailer. The reason could be wrong email configuration."))),Object(c.b)("h3",{id:"successful-response"},"Successful response"),Object(c.b)("p",null,"If the email is sent successfully the service will respond with 200."))}O.isMDXComponent=!0}}]);