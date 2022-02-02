(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(143)),c={id:"websockets",title:"Real-time data"},l={unversionedId:"websockets",id:"websockets",isDocsHomePage:!1,title:"Real-time data",description:"YAWE allows you to listen to changes on your endpoints using websockets.",source:"@site/docs/websockets.md",slug:"/websockets",permalink:"/docs/websockets",version:"current",sidebar:"docs",previous:{title:"Delete a file (DELETE)",permalink:"/docs/file-uploads/upload-delete"},next:{title:"JSONata, query and transform",permalink:"/docs/jsonata"}},s=[{value:"Example",id:"example",children:[{value:"Usage example",id:"usage-example",children:[]}]},{value:"Connection",id:"connection",children:[{value:"Request Cookies",id:"request-cookies",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]}]},{value:"Response data / messages",id:"response-data--messages",children:[{value:"Error codes",id:"error-codes",children:[]},{value:"Successful response",id:"successful-response",children:[]}]}],b={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"YAWE allows you to listen to changes on your endpoints using ",Object(o.b)("strong",{parentName:"p"},"websockets"),"."),Object(o.b)("p",null,"To do this, you use the same endpoint created under projects, using the protocol ",Object(o.b)("strong",{parentName:"p"},"wss")," instead of ",Object(o.b)("strong",{parentName:"p"},"https"),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Your endpoint:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"https"),"://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd"),Object(o.b)("p",null),Object(o.b)("p",null,"Usage with websockets:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"wss"),"://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd"),Object(o.b)("h3",{id:"usage-example"},"Usage example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"function websocketExample() {\n  console.log('Creating socket');\n  let socket = new WebSocket(\n    'wss://app.yawe.dev/api/1/ce/examples/unsecure-endpoint?key=d59eb2859c284168ac48aef65046d5dd'\n  );\n\n  socket.onopen = () => {\n    console.log('Socket open.');\n  };\n\n  socket.onmessage = (message) => {\n    const data = JSON.parse(message.data);\n    console.log('Socket server message', data);\n  };\n\n  socket.onerror = (error) => {\n    console.error('Error ', error);\n  };\n\n  socket.onclose = (error) => {\n    console.error('Close ', error);\n  };\n}\n")),Object(o.b)("h2",{id:"connection"},"Connection"),Object(o.b)("p",null,"When opening a connection to a websocket, the parameters of the URL are validated like we do for HTTP requests, such as, endpoint name, key, origin, data access and authentication. If any of the checks fail, the connection fails and an error is sent to the user."),Object(o.b)("p",null,"If the endpoint is secure, your user needs to be logged in first. As the cookie with the access token is HTTP-only, it is sent automatically with the request."),Object(o.b)("h3",{id:"request-cookies"},"Request Cookies"),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("td",null,"Header"),Object(o.b)("td",null,"Description"),Object(o.b)("td",null,"Required")),Object(o.b)("tr",null,Object(o.b)("td",null,"yawe_access_token"),Object(o.b)("td",null,"The Access token is required for secure endpoints.",Object(o.b)("p",null,"It is set when login in and is automatically sent in the websocket request."),Object(o.b)("p",null),Object(o.b)("p",null,"For more information check ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/secure-endpoints"}),"Secure Endpoints"),".")),Object(o.b)("td",null,"No"))),Object(o.b)("h3",{id:"request-parameters"},"Request Parameters"),Object(o.b)("p",null,"The following table describes the Request parameters to open a connection. Parameters not listed below are ignored."),Object(o.b)("p",null,"URL example: ",Object(o.b)("strong",{parentName:"p"},"wss"),"://",Object(o.b)("strong",{parentName:"p"},"app.yawe.dev/api"),"/",Object(o.b)("strong",{parentName:"p"},"1"),"/",Object(o.b)("strong",{parentName:"p"},"ce"),"/",Object(o.b)("strong",{parentName:"p"},"examples/unsecure-endpoint"),"?key=",Object(o.b)("strong",{parentName:"p"},"d59eb2859c284168ac48aef65046d5dd")),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("td",null,"Parameter"),Object(o.b)("td",null,"Description"),Object(o.b)("td",null,"Required")),Object(o.b)("tr",null,Object(o.b)("td",null,"protocol"),Object(o.b)("td",null,Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"wss"),":// -  Secure websocket over HTTPS.")),Object(o.b)("td",null,"Yes")),Object(o.b)("tr",null,Object(o.b)("td",null,"baseUrl"),Object(o.b)("td",null,"Base url for calling the API.",Object(o.b)("p",null,"Value: app.yawe.dev/api")),Object(o.b)("td",null,"Yes")),Object(o.b)("tr",null,Object(o.b)("td",null,"versionNumber"),Object(o.b)("td",null,"Service version.",Object(o.b)("p",null,"Value: The current value is ",Object(o.b)("strong",{parentName:"p"},"1"),".")),Object(o.b)("td",null,"Yes")),Object(o.b)("tr",null,Object(o.b)("td",null,"customEndpointRoute"),Object(o.b)("td",null,"The route which identifies custom endpoints.",Object(o.b)("p",null,"Default value: ce")),Object(o.b)("td",null,"Yes")),Object(o.b)("tr",null,Object(o.b)("td",null,"userEndpoint"),Object(o.b)("td",null,"The endpoint name generated by the user.",Object(o.b)("p",null,"Value: the name created at ",Object(o.b)("a",{href:"https://app.yawe.dev"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yawe.dev"}),"https://app.yawe.dev")))),Object(o.b)("td",null,"Yes")),Object(o.b)("tr",null,Object(o.b)("td",null,"apiKey"),Object(o.b)("td",null,"The API Key of the project."),Object(o.b)("td",null,"Yes"))),Object(o.b)("h2",{id:"response-data--messages"},"Response data / messages"),Object(o.b)("h3",{id:"error-codes"},"Error codes"),Object(o.b)("p",null,"The connection to the websocket can fail or be terminated due to one of the reasons listed in the table below. You will be able to read the error message in the ",Object(o.b)("inlineCode",{parentName:"p"},"reason")," property of the error message."),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("td",null,"Error code"),Object(o.b)("td",null,"Description")),Object(o.b)("tr",null,Object(o.b)("td",null,"4000"),Object(o.b)("td",null,"Possible reasons:",Object(o.b)("ul",null,Object(o.b)("li",null,"Endpoint or API Key not valid."),Object(o.b)("li",null,"No Access token or invalid."),Object(o.b)("li",null,"Origin not allowed.")))),Object(o.b)("tr",null,Object(o.b)("td",null,"1000"),Object(o.b)("td",null,"Possible reasons:",Object(o.b)("ul",null,Object(o.b)("li",null,"Access token expired."),Object(o.b)("li",null,"Options of the endpoint are changed."))))),Object(o.b)("h3",{id:"successful-response"},"Successful response"),Object(o.b)("p",null,"If the connection is successful, when there's new data in the endpoint or an update you will receive the affect record in the websocket message. Below is an example of such message:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'/*\ndata(received as a string):\ndata: "{"type":"POST","record":{"data":{"someNewData":"test"},"uniqueId":"3cc236ed09ef4768ba1fe6dcaf43edea","updatedAt":"2021-06-28T17:18:44.000Z","createdAt":"2021-06-28T17:18:44.000Z"}}"\n*/\n\n{\n    record: {\n        createdAt: "2021-06-28T17:18:44.000Z",\n        data: {\n            someNewData: "test"\n        },\n        uniqueId: "3cc236ed09ef4768ba1fe6dcaf43edea",\n        updatedAt: "2021-06-28T17:18:44.000Z",\n    },\n    type: "POST"\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," For files, if there are multiple uploads you will receive an array of records in the message."))}u.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),i=u(n),d=r,O=i["".concat(c,".").concat(d)]||i[d]||p[d]||o;return n?a.a.createElement(O,l(l({ref:t},b),{},{components:n})):a.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);