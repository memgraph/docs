"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),m=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,g=d["".concat(u,".").concat(c)]||d[c]||p[c]||l;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),i=n(16550),u=n(91980),m=n(67392),s=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,m]=g({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=u??p;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),h(e)}),[m,h,l]),tabValues:l}}var k=n(72389);const N="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:m}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=m[n].value;a!==i&&(p(t),u(a))},c=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},m.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:c,onClick:d},o,{className:(0,l.Z)("tabs__item",f,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},14206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),o=n(85162);const i={id:"mgconsole",title:"Querying with mgconsole",sidebar_label:"mgconsole"},u=void 0,m={unversionedId:"connect-to-memgraph/mgconsole",id:"version-2.7.0/connect-to-memgraph/mgconsole",title:"Querying with mgconsole",description:"The easiest way to execute Cypher queries against Memgraph is by using",source:"@site/memgraph_versioned_docs/version-2.7.0/connect-to-memgraph/mgconsole.md",sourceDirName:"connect-to-memgraph",slug:"/connect-to-memgraph/mgconsole",permalink:"/docs/memgraph/connect-to-memgraph/mgconsole",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.7.0/connect-to-memgraph/mgconsole.md",tags:[],version:"2.7.0",frontMatter:{id:"mgconsole",title:"Querying with mgconsole",sidebar_label:"mgconsole"},sidebar:"memgraph",previous:{title:"Connection methods overview",permalink:"/docs/memgraph/connect-to-memgraph"},next:{title:"Drivers overview",permalink:"/docs/memgraph/connect-to-memgraph/drivers"}},s={},p=[{value:"1. Install mgconsole",id:"1-install-mgconsole",level:2},{value:"2. Execute a Cypher query",id:"execute-cypher-queries",level:2},{value:"Configure mgconsole",id:"configure-mgconsole",level:2},{value:"Main",id:"main",level:3},{value:"Flags",id:"flags",level:3},{value:"Help",id:"help",level:3},{value:"Non-interactive mode",id:"non-interactive-mode",level:2},{value:"Where to next?",id:"where-to-next",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The easiest way to execute Cypher queries against Memgraph is by using\nMemgraph's command-line tool, ",(0,r.kt)("strong",{parentName:"p"},"mgconsole"),"."),(0,r.kt)("h2",{id:"1-install-mgconsole"},"1. Install mgconsole"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you installed ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Platform")," with the Docker image\n(",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph/memgraph-platform"),"), mgconsole will start automatically when you run\nthe container. Skip the installation steps and continue with ",(0,r.kt)("a",{parentName:"p",href:"#execute-cypher-queries"},"executing\nCypher queries"),"."),(0,r.kt)("p",{parentName:"admonition"},"If you installed any other Docker image, you need to manually run mgconsole\nfollowing the steps described below.")),(0,r.kt)("p",null,"If you want to install or run mgconsole to query a running Memgraph database\ninstance, use the following steps:"),(0,r.kt)(l.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," If you installed MemgraphDB using Docker, you can run the client from your\nDocker image. First, you need to find the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID")," of your Memgraph\ncontainer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"docker ps\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Once you know the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID"),", find the IP address of the container by\nexecuting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER_ID\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Now, you can start mgconsole by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"docker run -it --entrypoint=mgconsole memgraph/memgraph --host CONTAINER_IP\n"))),(0,r.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Download mgconsole from the ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/download#mgconsole"},"Download\nHub"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," From PowerShell, start mgconsole with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host HOST --port PORT\n")),(0,r.kt)("p",null,"If Memgraph is running locally using the default configuration, start\nmgconsole\xa0with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687\n"))),(0,r.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Download mgconsole from the ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/download#mgconsole"},"Download\nHub"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," From the terminal, provide execution permission to the current user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"chmod u+x ./mgconsole\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Start mgconsole with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host HOST --port PORT\n")),(0,r.kt)("p",null,"If Memgraph is running locally using the default configuration, start\nmgconsole\xa0with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687\n"))),(0,r.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We will soon release a downloadable Debian package, so you don't have to install\nmgconsole from source.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Follow the instructions on how to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole#building-and-installing"},"build and\ninstall"),"\nmgconsole from source."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Start mgconsole with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"mgconsole --host HOST --port PORT\n")),(0,r.kt)("p",null,"If Memgraph is running locally using the default configuration, start\nmgconsole\xa0with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"mgconsole --host 127.0.0.1 --port 7687\n")))),(0,r.kt)("h2",{id:"execute-cypher-queries"},"2. Execute a Cypher query"),(0,r.kt)("p",null,"After the client has started, it should present a command prompt similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mgconsole X.X\nConnected to 'memgraph://127.0.0.1:7687'\nType :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nmemgraph>\n")),(0,r.kt)("p",null,"At this point, it is possible to execute Cypher queries against a running\nMemgraph database instance. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"TAB")," key to autocomplete commands in ",(0,r.kt)("inlineCode",{parentName:"p"},"mgconsole"),".")),(0,r.kt)("p",null,"Each query needs to end with the ",(0,r.kt)("inlineCode",{parentName:"p"},";")," (",(0,r.kt)("em",{parentName:"p"},"semicolon"),") character. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),(0,r.kt)("p",null,'The above query will create 2 nodes in the database, one labeled "User" with name\n"Alice" and the other labeled "Software" with name "Memgraph". It will also\ncreate a relationship that "Alice" ',(0,r.kt)("em",{parentName:"p"},"likes"),' "Memgraph".'),(0,r.kt)("p",null,"To find created nodes and relationships, execute the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")),(0,r.kt)("p",null,"To get a breakdown of the execution time, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"-verbose_execution_info")," flag\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"Upon query execution you will get this information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Query COST estimate: 3066\nQuery PARSING time: 0.000175982 sec\nQuery PLAN EXECUTION time: 0.0154524 sec\nQuery PLANNING time: 8.054e-05 sec\n")),(0,r.kt)("p",null,"The values show:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"COST estimate - Internal planner estimation on the cost of the query. When comparing two query executions, an order of magnitude larger COST estimates might indicate the query's longer execution time. "),(0,r.kt)("li",{parentName:"ul"},"PARSING time - Time spent checking if the query is valid and normalizing it for cache."),(0,r.kt)("li",{parentName:"ul"},"PLAN EXECUTION time - Time executing the plan. "),(0,r.kt)("li",{parentName:"ul"},"PLANNING time - Time it takes the query planner to create the optimal plan to execute the query.")),(0,r.kt)("h2",{id:"configure-mgconsole"},"Configure mgconsole"),(0,r.kt)("p",null,"Below are configurational flags you can use with mgconsole:"),(0,r.kt)("h3",{id:"main"},"Main"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-csv_delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"Character used to separate fields."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'","')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-csv_doublequote"),(0,r.kt)("td",{parentName:"tr",align:null},'Controls how instances of the quotechar(") appearing inside a field should themselves be quoted. When ',(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the character is doubled. When ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", the escapechar is used as a prefix to the quotechar. If ",(0,r.kt)("inlineCode",{parentName:"td"},"csv_doublequote")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"csv_escapechar")," must be set."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-csv_escapechar"),(0,r.kt)("td",{parentName:"tr",align:null},'Character used to escape the quote character (") if ',(0,r.kt)("inlineCode",{parentName:"td"},"csv_doublequote")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-fit_to_screen"),(0,r.kt)("td",{parentName:"tr",align:null},"Fit output width to screen width."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-history"),(0,r.kt)("td",{parentName:"tr",align:null},"Use the specified directory to save history."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"~/.memgraph"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-host"),(0,r.kt)("td",{parentName:"tr",align:null},"Server address. It can be a DNS resolvable hostname."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"127.0.0.1"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-no_history"),(0,r.kt)("td",{parentName:"tr",align:null},"Do not save history."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-output_format"),(0,r.kt)("td",{parentName:"tr",align:null},"Query output format. Can be ",(0,r.kt)("inlineCode",{parentName:"td"},"csv")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"tabular"),". If the output format is not tabular ",(0,r.kt)("inlineCode",{parentName:"td"},"fit-to-screen")," flag is ignored."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"tabular"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-password"),(0,r.kt)("td",{parentName:"tr",align:null},"Database password."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-port"),(0,r.kt)("td",{parentName:"tr",align:null},"Server port."),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"7687")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-term_colors"),(0,r.kt)("td",{parentName:"tr",align:null},"Use terminal colors syntax highlighting."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-use_ssl"),(0,r.kt)("td",{parentName:"tr",align:null},"Use SSL when connecting to the server."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-username"),(0,r.kt)("td",{parentName:"tr",align:null},"Database username."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-verbose_execution_info"),(0,r.kt)("td",{parentName:"tr",align:null},"Output the additional information about query such as query cost, parsing, planning and execution times."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h3",{id:"flags"},"Flags"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-flagfile"),(0,r.kt)("td",{parentName:"tr",align:null},"Load flags from a file."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-fromenv"),(0,r.kt)("td",{parentName:"tr",align:null},"Set flags from the environment ","[example: 'export FLAGS_flag1=value']","."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-tryfromenv"),(0,r.kt)("td",{parentName:"tr",align:null},"Set flags from the environment if present."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-undefok"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma-separated list of flag names. These flags can be specified on the command line even if the program does not define a flag with that name.  IMPORTANT: Flags from the list that have arguments MUST use the flag=value format."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-tab_completion_columns"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of columns used in output for tab completion."),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-tab_completion_word"),(0,r.kt)("td",{parentName:"tr",align:null},"If non-empty, ",(0,r.kt)("inlineCode",{parentName:"td"},"HandleCommandLineCompletions()")," will hijack the process and attempt to do bash-style command line flag completion on this value."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""')))),(0,r.kt)("h3",{id:"help"},"Help"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-help"),(0,r.kt)("td",{parentName:"tr",align:null},"Show help on all flags ","[tip: all flags can have two dashes]","."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-helpfull"),(0,r.kt)("td",{parentName:"tr",align:null},"Show help on all flags -- same as -help."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-helpmatch"),(0,r.kt)("td",{parentName:"tr",align:null},"Show help on modules, names of which contain the specified substring."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-helpon"),(0,r.kt)("td",{parentName:"tr",align:null},"Show help on the modules named by this flag value."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-helppackage"),(0,r.kt)("td",{parentName:"tr",align:null},"Show help on all modules in the main package."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-helpshort"),(0,r.kt)("td",{parentName:"tr",align:null},"Show help on the main module for this program only."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-helpxml"),(0,r.kt)("td",{parentName:"tr",align:null},"Produce an .xml version of help."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-version"),(0,r.kt)("td",{parentName:"tr",align:null},"Show version and build info then exit."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When working with Memgraph Platform, you should pass configuration flags inside\nof environment variables."),(0,r.kt)("p",{parentName:"admonition"},"For example, you should start Memgraph Platform with ",(0,r.kt)("inlineCode",{parentName:"p"},'docker run -e\nMGCONSOLE="-output_format="csv"" memgraph/memgraph-platform'),".")),(0,r.kt)("h2",{id:"non-interactive-mode"},"Non-interactive mode"),(0,r.kt)("p",null,"To get the query result in bash, use the following command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mgconsole < <(echo "MATCH (n:Person) RETURN n;")\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "MATCH (n:Person) RETURN n;" | mgconsole\n')),(0,r.kt)("p",null,"To save the query results in a file, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mgconsole < <(echo "MATCH (n:Person) RETURN n;") > results.txt\n')),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"If you want to learn more about graph databases and Cypher queries, visit\n",(0,r.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and go through the\nguided lessons. All the datasets and most of the queries used in the guided\nlessons can also be explored in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials"},"Tutorials")," section,\nand knowledge about Cypher is gathered in the ",(0,r.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher manual"),"."),(0,r.kt)("p",null,"If you are all good to go on your own - ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data"},"import your\ndata"),"!"))}c.isMDXComponent=!0}}]);