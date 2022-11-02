"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,g=u["".concat(i,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),s=n(67392),i=n(7094),m=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function u(e){var t;const{lazy:n,block:l,defaultValue:u,values:d,groupId:g,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,i.U)(),[w,T]=(0,r.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,m.o5)();if(null!=g){const e=v[g];null!=e&&e!==w&&f.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==w&&(O(t),T(a),null!=g&&N(g,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:E,onClick:C},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},92078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const s={id:"mgconsole",title:"Querying with mgconsole",sidebar_label:"mgconsole"},i=void 0,m={unversionedId:"connect-to-memgraph/mgconsole",id:"version-2.2.1/connect-to-memgraph/mgconsole",title:"Querying with mgconsole",description:"The easiest way to execute Cypher queries against Memgraph is by using",source:"@site/memgraph_versioned_docs/version-2.2.1/connect-to-memgraph/mgconsole.md",sourceDirName:"connect-to-memgraph",slug:"/connect-to-memgraph/mgconsole",permalink:"/docs/memgraph/2.2.1/connect-to-memgraph/mgconsole",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.1/connect-to-memgraph/mgconsole.md",tags:[],version:"2.2.1",frontMatter:{id:"mgconsole",title:"Querying with mgconsole",sidebar_label:"mgconsole"},sidebar:"memgraph",previous:{title:"Connection methods overview",permalink:"/docs/memgraph/2.2.1/connect-to-memgraph"},next:{title:"Drivers overview",permalink:"/docs/memgraph/2.2.1/connect-to-memgraph/drivers"}},p={},c=[{value:"1. Install mgconsole",id:"1-install-mgconsole",level:2},{value:"2. Execute a Cypher query",id:"execute-cypher-queries",level:2},{value:"Where to next?",id:"where-to-next",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The easiest way to execute Cypher queries against Memgraph is by using\nMemgraph's command-line tool, ",(0,r.kt)("strong",{parentName:"p"},"mgconsole"),"."),(0,r.kt)("h2",{id:"1-install-mgconsole"},"1. Install mgconsole"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you installed ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Platform")," with the Docker image\n(",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph/memgraph-platform"),"), mgconsole will start automatically when you run\nthe container. Skip the installation steps and continue with ",(0,r.kt)("a",{parentName:"p",href:"#execute-cypher-queries"},"executing\nCypher queries"),".")),(0,r.kt)("p",null,"If you want to install mgconsole to query a running Memgraph database\ninstance, follow the installation steps."),(0,r.kt)(o.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," If you installed MemgraphDB using Docker, you can run the client from your\nDocker image. First, you need to find the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID")," of your Memgraph\ncontainer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"docker ps\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Once you know the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID"),", find the IP address of the container by\nexecuting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER_ID\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Now, you can start mgconsole by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"docker run -it --entrypoint=mgconsole memgraph --host CONTAINER_IP\n"))),(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Download mgconsole from the ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/download#mgconsole"},"Download\nHub"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," From PowerShell, start mgconsole with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host HOST --port PORT\n")),(0,r.kt)("p",null,"If Memgraph is running locally using the default configuration, start\nmgconsole\xa0with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687\n"))),(0,r.kt)(l.Z,{value:"macos",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Download mgconsole from the ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/download#mgconsole"},"Download\nHub"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," From the terminal, provide execution permission to the current user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"chmod u+x ./mgconsole\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Start mgconsole with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host HOST --port PORT\n")),(0,r.kt)("p",null,"If Memgraph is running locally using the default configuration, start\nmgconsole\xa0with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687\n"))),(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We will soon release a downloadable Debian package, so you don't have to install\nmgconsole from source.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Follow the instructions on how to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole#building-and-installing"},"build and\ninstall"),"\nmgconsole from source."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Start mgconsole with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host HOST --port PORT\n")),(0,r.kt)("p",null,"If Memgraph is running locally using the default configuration, start\nmgconsole\xa0with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687\n")))),(0,r.kt)("h2",{id:"execute-cypher-queries"},"2. Execute a Cypher query"),(0,r.kt)("p",null,"After the client has started, it should present a command prompt similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mgconsole X.X\nConnected to 'memgraph://127.0.0.1:7687'\nType :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nmemgraph>\n")),(0,r.kt)("p",null,"At this point, it is possible to execute Cypher queries against a running\nMemgraph database instance. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"TAB")," key to autocomplete commands in mgconsole.")),(0,r.kt)("p",null,"Each query needs to end with the ",(0,r.kt)("inlineCode",{parentName:"p"},";")," (",(0,r.kt)("em",{parentName:"p"},"semicolon"),") character. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),(0,r.kt)("p",null,'The above query will create 2 nodes in the database, one labeled "User" with name\n"Alice" and the other labeled "Software" with name "Memgraph". It will also\ncreate a relationship that "Alice" ',(0,r.kt)("em",{parentName:"p"},"likes"),' "Memgraph".'),(0,r.kt)("p",null,"To find created nodes and relationships, execute the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"If you want to learn more about graph databases and Cypher queries, visit\n",(0,r.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and go through the\nguided lessons. All the datasets and most of the queries used in the guided\nlessons can also be explored in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/tutorials"},"Tutorials")," section,\nand knowledge about Cypher is gathered in the ",(0,r.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher manual"),"."),(0,r.kt)("p",null,"If you are all good to go on your own - ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/import-data"},"import your\ndata"),"!"))}d.isMDXComponent=!0}}]);