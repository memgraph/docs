"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30341],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,h=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(67294),a=t(86010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(87462),a=t(67294),o=t(86010),l=t(12466),i=t(16550),u=t(91980),s=t(67392),p=t(50012);function m(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function c(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??m(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=c(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,s]=h({queryString:t,groupId:r}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,p.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),f=(()=>{const e=u??m;return d({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var f=t(72389);const k="tabList__CuJ",v="tabItem_LNqP";function E(e){let{className:n,block:t,selectedValue:i,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),c=e=>{const n=e.currentTarget,t=p.indexOf(n),r=s[t].value;r!==i&&(m(n),u(r))},d=e=>{var n;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>p.push(e),onKeyDown:d,onClick:c},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":i===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:r}=e;if(n){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function b(e){const n=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k)},a.createElement(E,(0,r.Z)({},e,n)),a.createElement(y,(0,r.Z)({},e,n)))}function T(e){const n=(0,f.Z)();return a.createElement(b,(0,r.Z)({key:String(n)},e))}},22406:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=t(87462),a=(t(67294),t(3905)),o=t(74866),l=t(85162);const i={id:"cypherl",title:"Importing Cypher queries (CYPHERL format)",sidebar_label:"CYPHERL",pagination_prev:"import-data/overview"},u=void 0,s={unversionedId:"import-data/files/cypherl",id:"version-2.3.1/import-data/files/cypherl",title:"Importing Cypher queries (CYPHERL format)",description:"If your data is in the form of Cypher queries (for example, CREATE and MERGE",source:"@site/memgraph_versioned_docs/version-2.3.1/import-data/files/cypherl.md",sourceDirName:"import-data/files",slug:"/import-data/files/cypherl",permalink:"/docs/memgraph/2.3.1/import-data/files/cypherl",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/import-data/files/cypherl.md",tags:[],version:"2.3.1",frontMatter:{id:"cypherl",title:"Importing Cypher queries (CYPHERL format)",sidebar_label:"CYPHERL",pagination_prev:"import-data/overview"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/2.3.1/import-data"},next:{title:"Connect to data streams",permalink:"/docs/memgraph/2.3.1/import-data/data-streams/overview"}},p={},m=[{value:"Importing via Memgraph Lab",id:"importing-via-memgraph-lab",level:2},{value:"Importing via mgconsole",id:"importing-via-mgconsole",level:2},{value:"One type of nodes and relationships",id:"one-type-of-nodes-and-relationships",level:3},{value:"Multiple types of nodes and relationships",id:"multiple-types-of-nodes-and-relationships",level:3}],c={toc:m};function d(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If your data is in the form of Cypher queries (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MERGE"),"\nclauses) within a ",(0,a.kt)("strong",{parentName:"p"},"CYPHERL")," file it can be imported via Memgraph Lab or\nmgconsole."),(0,a.kt)("p",null,"The benefit of importing data using the CYPHERL file is that you need only\none file to import both nodes and relationships. But it can be tricky to\nactually write the queries for creating nodes and relationships yourself. If you\nhaven't written any queries yet, check our ",(0,a.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher manual"),"."),(0,a.kt)("h2",{id:"importing-via-memgraph-lab"},"Importing via Memgraph Lab"),(0,a.kt)("p",null,"Once you Memgraph instance in running and you've connected to it via Memgraph\nLab, go to the ",(0,a.kt)("strong",{parentName:"p"},"Import & Export")," section. To ",(0,a.kt)("strong",{parentName:"p"},"Import Data")," select the\nCYPHERL file or drag and drop it into Memgraph Lab. "),(0,a.kt)("img",{src:t(29389).Z,className:"imgBorder"}),(0,a.kt)("h2",{id:"importing-via-mgconsole"},"Importing via mgconsole"),(0,a.kt)("p",null,"Once Memgraph is running, Cypher queries are imported by running\n",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.1/connect-to-memgraph/mgconsole"},"mgconsole")," in a non-interactive mode and\nimporting data saved in a CYPHERL file. "),(0,a.kt)("p",null,"You can import queries saved in e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"queries.cypherl")," by issuing the following\nshell command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"mgconsole < queries.cypherl\n")),(0,a.kt)("p",null,"If you installed and started Memgraph using Docker, you will need to run the\nclient using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl\n")),(0,a.kt)("p",null,"Remember to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," with ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/how-to-guides/work-with-docker#how-to-retrieve-a-docker-container-ip-address"},"valid IP of the\ncontainer"),"\nand to define the correct Memgraph Docker image you are using as well as the\ncorrect path to the file. "),(0,a.kt)("p",null,"Below, you can find two examples of how to import data within the ",(0,a.kt)("inlineCode",{parentName:"p"},".cypherl")," file\nbased on the complexity of your data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#one-type-of-nodes-and-relationships"},"One type of nodes and relationships")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships")," ")),(0,a.kt)("h3",{id:"one-type-of-nodes-and-relationships"},"One type of nodes and relationships"),(0,a.kt)("p",null,"Let's import data from ",(0,a.kt)("inlineCode",{parentName:"p"},"queries.cypherl")," file with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},'CREATE (:Person {id: "100", name: "Daniel", age: 30, city: "London"});\nCREATE (:Person {id: "101", name: "Alex", age: 15, city: "Paris"});\nCREATE (:Person {id: "102", name: "Sarah", age: 101, city: "London"});\nCREATE (:Person {id: "103", name: "Mia", age: 25, city: "Zagreb"});\nCREATE (:Person {id: "104", name: "Lucy", age: 21, city: "Paris"});\nMATCH (u:Person), (v:Person) WHERE u.id = "100" AND v.id = "102" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "100" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "101" AND v.id = "104" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "101" AND v.id = "102" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "102" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "103" AND v.id = "101" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "104" AND v.id = "100" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\n')),(0,a.kt)("p",null,"The first five queries create nodes for people, and the rest of the queries create\nrelationships between these nodes."),(0,a.kt)(o.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("p",null,"If you installed Memgraph using Docker, run the client using the following\ncommand, but be careful of four things:"),(0,a.kt)("ol",null,(0,a.kt)("li",null,"Use the first command in Docker installed on Linux and macOS, but use the second command in Windows because PowerShell doesn't support the < character."),(0,a.kt)("p",null," "),(0,a.kt)("li",null,"Check the image name you are using is correct:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"If you downloaded ",(0,a.kt)("b",null,"Memgraph Platform"),", leave the current image name ",(0,a.kt)("code",null,"memgraph/memgraph-platform"),"."),(0,a.kt)("li",null,"If you downloaded ",(0,a.kt)("b",null,"MemgraphDB"),", replace the current image name with ",(0,a.kt)("code",null,"memgraph/memgraph"),"."),(0,a.kt)("li",null,"If you downloaded ",(0,a.kt)("b",null,"MAGE"),", replace the current image name with ",(0,a.kt)("code",null,"memgraph/memgraph-mage"),".")),(0,a.kt)("p",null," "),(0,a.kt)("li",null,"Remember to replace ",(0,a.kt)("code",null,"HOST")," with a valid IP of the container (see the",(0,a.kt)("a",{href:"/memgraph/how-to-guides/work-with-docker#how-to-retrieve-a-docker-container-ip-address"}," guide on working with Docker"),")."),(0,a.kt)("p",null," "),(0,a.kt)("li",null,"Check that the paths of the files you want to import are correct.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linux")," and ",(0,a.kt)("strong",{parentName:"p"},"macOS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows PowerShell"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'cmd.exe /c "docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl"\n')),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --help\n"))),(0,a.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole < queries.cypherl\n")),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole --help\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),(0,a.kt)("div",null,(0,a.kt)("img",{src:t(92878).Z}))),(0,a.kt)("h3",{id:"multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"),(0,a.kt)("p",null,"Let's import data from ",(0,a.kt)("inlineCode",{parentName:"p"},"queries.cypherl")," file with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},'CREATE (p:Person {id: "100", name: "Daniel", age: 30, city: "London"});\nCREATE (p:Person {id: "101", name: "Alex", age: 15, city: "Paris"});\nCREATE (p:Person {id: "102", name: "Sarah", age: 17, city: "London"});\nCREATE (p:Person {id: "103", name: "Mia", age: 25, city: "Zagreb"});\nCREATE (p:Person {id: "104", name: "Lucy", age: 21, city: "Paris"});\nCREATE (r:Restaurant {id: "200", name: "McDonalds", menu: "Fries BigMac McChicken Apple Pie"});\nCREATE (r:Restaurant {id: "201", name: "KFC", menu: "Fried Chicken Fries Chicken Bucket"});\nCREATE (r:Restaurant {id: "202", name: "Subway", menu: "Ham Sandwich Turkey Sandwich Foot-long"});\nCREATE (r:Restaurant {id: "203", name: "Dominos", menu: "Pepperoni Pizza Double Dish Pizza Cheese filled Crust"});\nMATCH (u:Person), (v:Person) WHERE u.id = "100" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2014"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "101" AND v.id = "104" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2001"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "102" AND v.id = "100" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2005"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "102" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2017"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "103" AND v.id = "104" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2005"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "104" AND v.id = "102" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2021"}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "100" AND v.id = "200" CREATE (u)-[:ATE_AT {liked: true}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "102" AND v.id = "202" CREATE (u)-[:ATE_AT {liked: false}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "102" AND v.id = "203" CREATE (u)-[:ATE_AT {liked: false}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "102" AND v.id = "200" CREATE (u)-[:ATE_AT {liked: true}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "103" AND v.id = "201" CREATE (u)-[:ATE_AT {liked: true}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "104" AND v.id = "201" CREATE (u)-[:ATE_AT {liked: false}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "101" AND v.id = "200" CREATE (u)-[:ATE_AT {liked: true}]->(v);\n')),(0,a.kt)("p",null,"The first five queries create nodes for people, and the following four queries\ncreate nodes for restaurants. The rest of the queries are used to define\nrelationships between nodes. As said before, you can define different types of\nnodes and relationships in one file."),(0,a.kt)(o.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("p",null,"If you installed Memgraph using Docker, run the client using the following\ncommand, but be careful of four things:"),(0,a.kt)("ol",null,(0,a.kt)("li",null,"Use the first command in Docker installed on Linux and macOS, but use the second command in Windows because PowerShell doesn't support the < character."),(0,a.kt)("p",null," "),(0,a.kt)("li",null,"Check the image name you are using is correct:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"If you downloaded ",(0,a.kt)("b",null,"Memgraph Platform"),", leave the current image name ",(0,a.kt)("code",null,"memgraph/memgraph-platform"),"."),(0,a.kt)("li",null,"If you downloaded ",(0,a.kt)("b",null,"MemgraphDB"),", replace the current image name with ",(0,a.kt)("code",null,"memgraph/memgraph"),"."),(0,a.kt)("li",null,"If you downloaded ",(0,a.kt)("b",null,"MAGE"),", replace the current image name with ",(0,a.kt)("code",null,"memgraph/memgraph-mage"),".")),(0,a.kt)("p",null," "),(0,a.kt)("li",null,"Remember to replace ",(0,a.kt)("code",null,"HOST")," with a valid IP of the container (see the",(0,a.kt)("a",{href:"/memgraph/how-to-guides/work-with-docker#how-to-retrieve-a-docker-container-ip-address"}," guide on working with Docker"),")."),(0,a.kt)("p",null," "),(0,a.kt)("li",null,"Check that the paths of the files you want to import are correct.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linux")," and ",(0,a.kt)("strong",{parentName:"p"},"macOS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows Powershell")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'cmd.exe /c "docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl"\n')),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --help\n"))),(0,a.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole < queries.cypherl\n")),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole --help\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),(0,a.kt)("div",null,(0,a.kt)("img",{src:t(28854).Z}))))}d.isMDXComponent=!0},28854:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/cypherl_multiple_type_nodes_and_relationships-c7fd68198e41c7a61f0e7f4e3fe1f573.png"},92878:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/cypherl_one_type_nodes_and_relationships-a1d7f6ffb9dd64eed6c3f7b8e68b1151.png"},29389:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/import-lab-10bd0ab80316b2807b5a0c7f157f28d7.png"}}]);