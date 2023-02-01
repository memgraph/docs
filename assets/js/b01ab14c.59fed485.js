"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),s=n(16550),u=n(91980),i=n(67392),c=n(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,i]=g({queryString:n,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=u??m;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),h(e)}),[i,h,o]),tabValues:o}}var f=n(72389);const k="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==s&&(m(t),u(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},78414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const s={id:"mgconsole",title:"Querying with mgconsole",sidebar_label:"mgconsole"},u=void 0,i={unversionedId:"connect-to-memgraph/mgconsole",id:"version-2.5.0/connect-to-memgraph/mgconsole",title:"Querying with mgconsole",description:"The easiest way to execute Cypher queries against Memgraph is by using",source:"@site/memgraph_versioned_docs/version-2.5.0/connect-to-memgraph/mgconsole.md",sourceDirName:"connect-to-memgraph",slug:"/connect-to-memgraph/mgconsole",permalink:"/docs/memgraph/2.5.0/connect-to-memgraph/mgconsole",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.0/connect-to-memgraph/mgconsole.md",tags:[],version:"2.5.0",frontMatter:{id:"mgconsole",title:"Querying with mgconsole",sidebar_label:"mgconsole"},sidebar:"memgraph",previous:{title:"Connection methods overview",permalink:"/docs/memgraph/2.5.0/connect-to-memgraph"},next:{title:"Drivers overview",permalink:"/docs/memgraph/2.5.0/connect-to-memgraph/drivers"}},c={},m=[{value:"1. Install mgconsole",id:"1-install-mgconsole",level:2},{value:"2. Execute a Cypher query",id:"execute-cypher-queries",level:2},{value:"Where to next?",id:"where-to-next",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The easiest way to execute Cypher queries against Memgraph is by using\nMemgraph's command-line tool, ",(0,r.kt)("strong",{parentName:"p"},"mgconsole"),"."),(0,r.kt)("h2",{id:"1-install-mgconsole"},"1. Install mgconsole"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you installed ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Platform")," with the Docker image\n(",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph/memgraph-platform"),"), mgconsole will start automatically when you run\nthe container. Skip the installation steps and continue with ",(0,r.kt)("a",{parentName:"p",href:"#execute-cypher-queries"},"executing\nCypher queries"),"."),(0,r.kt)("p",{parentName:"admonition"},"If you installed any other Docker image, you need to manually run mgconsole\nfollowing the steps described below.")),(0,r.kt)("p",null,"If you want to install or run mgconsole to query a running Memgraph database\ninstance, use the following steps:"),(0,r.kt)(o.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," If you installed MemgraphDB using Docker, you can run the client from your\nDocker image. First, you need to find the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID")," of your Memgraph\ncontainer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"docker ps\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Once you know the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID"),", find the IP address of the container by\nexecuting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER_ID\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Now, you can start mgconsole by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"docker run -it --entrypoint=mgconsole memgraph/memgraph --host CONTAINER_IP\n"))),(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Download mgconsole from the ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/download#mgconsole"},"Download\nHub"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," From PowerShell, start mgconsole with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host HOST --port PORT\n")),(0,r.kt)("p",null,"If Memgraph is running locally using the default configuration, start\nmgconsole\xa0with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687\n"))),(0,r.kt)(l.Z,{value:"macos",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Download mgconsole from the ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/download#mgconsole"},"Download\nHub"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," From the terminal, provide execution permission to the current user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"chmod u+x ./mgconsole\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Start mgconsole with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host HOST --port PORT\n")),(0,r.kt)("p",null,"If Memgraph is running locally using the default configuration, start\nmgconsole\xa0with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687\n"))),(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We will soon release a downloadable Debian package, so you don't have to install\nmgconsole from source.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Follow the instructions on how to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole#building-and-installing"},"build and\ninstall"),"\nmgconsole from source."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Start mgconsole with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host HOST --port PORT\n")),(0,r.kt)("p",null,"If Memgraph is running locally using the default configuration, start\nmgconsole\xa0with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687\n")))),(0,r.kt)("h2",{id:"execute-cypher-queries"},"2. Execute a Cypher query"),(0,r.kt)("p",null,"After the client has started, it should present a command prompt similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mgconsole X.X\nConnected to 'memgraph://127.0.0.1:7687'\nType :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nmemgraph>\n")),(0,r.kt)("p",null,"At this point, it is possible to execute Cypher queries against a running\nMemgraph database instance. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"TAB")," key to autocomplete commands in mgconsole.")),(0,r.kt)("p",null,"Each query needs to end with the ",(0,r.kt)("inlineCode",{parentName:"p"},";")," (",(0,r.kt)("em",{parentName:"p"},"semicolon"),") character. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),(0,r.kt)("p",null,'The above query will create 2 nodes in the database, one labeled "User" with name\n"Alice" and the other labeled "Software" with name "Memgraph". It will also\ncreate a relationship that "Alice" ',(0,r.kt)("em",{parentName:"p"},"likes"),' "Memgraph".'),(0,r.kt)("p",null,"To find created nodes and relationships, execute the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"If you want to learn more about graph databases and Cypher queries, visit\n",(0,r.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and go through the\nguided lessons. All the datasets and most of the queries used in the guided\nlessons can also be explored in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.5.0/tutorials"},"Tutorials")," section,\nand knowledge about Cypher is gathered in the ",(0,r.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher manual"),"."),(0,r.kt)("p",null,"If you are all good to go on your own - ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.5.0/import-data"},"import your\ndata"),"!"))}d.isMDXComponent=!0}}]);