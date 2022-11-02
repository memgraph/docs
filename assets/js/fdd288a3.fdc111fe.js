"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,u=d["".concat(l,".").concat(g)]||d[g]||s[g]||o;return n?r.createElement(u,i(i({ref:t},m),{},{components:n})):r.createElement(u,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"encryption",title:"How to use SSL encryption",sidebar_label:"Use SSL encryption"},i=void 0,p={unversionedId:"how-to-guides/encryption",id:"version-2.3.1/how-to-guides/encryption",title:"How to use SSL encryption",description:"Memgraph uses SSL (Secure Sockets Layer) protocol for establishing an",source:"@site/memgraph_versioned_docs/version-2.3.1/how-to-guides/encryption.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/encryption",permalink:"/docs/memgraph/2.3.1/how-to-guides/encryption",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/how-to-guides/encryption.md",tags:[],version:"2.3.1",frontMatter:{id:"encryption",title:"How to use SSL encryption",sidebar_label:"Use SSL encryption"},sidebar:"memgraph",previous:{title:"Use query modules",permalink:"/docs/memgraph/2.3.1/how-to-guides/query-modules"},next:{title:"Work with Docker",permalink:"/docs/memgraph/2.3.1/how-to-guides/work-with-docker"}},l={},c=[{value:"Docker",id:"docker",level:2},{value:"Linux",id:"linux",level:2}],m={toc:c};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Memgraph uses SSL (Secure Sockets Layer) protocol for establishing an\nauthenticated and encrypted connection to a database instance."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.1/reference-guide/encryption"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference\nGuide"}))),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start a Memgraph instance with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," command including the ",(0,a.kt)("inlineCode",{parentName:"p"},"-v\nmg_lib:/var/lib/memgraph")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"-v mg_etc:/etc/memgraph")," volumes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.1/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container"},"Copy the SSL certificate inside of the Docker\ncontainer"),"\nor use Memgraph self-signed certificates (",(0,a.kt)("inlineCode",{parentName:"p"},"cert.pem")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"key.pem"),") located\nat ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/ssl/"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.1/how-to-guides/config-logs#file"},"Change the configuration file")," to\ninclude the following configuration flags:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"--bolt-cert-file=<path>\n--bolt-key-file=<path>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the flags to the paths of your SSL certificate."),(0,a.kt)("p",{parentName:"li"},"If you are using the Memgraph self-signed certificate, set the configuration\nflags to:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"--bolt-cert-file=/etc/memgraph/ssl/cert.pem\n--bolt-key-file=/etc/memgraph/ssl/key.pem\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.1/how-to-guides/work-with-docker#stop-image"},"Stop the Docker container"),",\nthen start it again, including the volumes you used in step 1."),(0,a.kt)("p",{parentName:"li"},"If you are running ",(0,a.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," image, pass the configuration flag"),(0,a.kt)("code",null,'MGCONSOLE="--use-ssl=true"'),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'docker run -it -p 7687:7687 -p 3000:3000 -p 7444:7444 -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -e MGCONSOLE="--use-ssl=true" memgraph/memgraph-platform\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open Memgraph Lab and switch to ",(0,a.kt)("strong",{parentName:"p"},"Connect Manually")," view, turn the ",(0,a.kt)("strong",{parentName:"p"},"SSL\nOn")," and connect."),(0,a.kt)("img",{src:n(26453).Z,className:"imgBorder"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you are using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/pymgclient"},"pymgclient")," to\nquery the database with Python, add ",(0,a.kt)("inlineCode",{parentName:"p"},"sslmode=mgclient.MG_SSLMODE_REQUIRE")," to\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"mgclient.connect")))),(0,a.kt)("p",null,"For other ways of connecting to Memgraph DB using SSL encryption, check the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.1/reference-guide/encryption"},"reference guide"),"."),(0,a.kt)("h2",{id:"linux"},"Linux"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run Memgraph.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the configuration file available at ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change the configuration file to include the following configuration flags:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"--bolt-cert-file=<path>\n--bolt-key-file=<path>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the flags to the paths of your SSL certificate, or use Memgraph\nself-signed certificates (",(0,a.kt)("inlineCode",{parentName:"p"},"cert.pem")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"key.pem"),") located at\n",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/ssl/"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"--bolt-cert-file=/etc/memgraph/ssl/cert.pem\n--bolt-key-file=/etc/memgraph/ssl/key.pem\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart Memgraph.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open Memgraph Lab and switch to ",(0,a.kt)("strong",{parentName:"p"},"Connect Manually")," view, turn the ",(0,a.kt)("strong",{parentName:"p"},"SSL\nOn")," and connect.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you are using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/pymgclient"},"pymgclient")," to\nquery the database with Python, add ",(0,a.kt)("inlineCode",{parentName:"p"},"sslmode=mgclient.MG_SSLMODE_REQUIRE")," to\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"mgclient.connect")))),(0,a.kt)("p",null,"For other ways of connecting to Memgraph DB using SSL encryption, check the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.1/reference-guide/encryption"},"reference guide"),"."))}s.isMDXComponent=!0},26453:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/memgraph_lab_ssl-4a62089750bda0627ba554500eaa3d4f.png"}}]);