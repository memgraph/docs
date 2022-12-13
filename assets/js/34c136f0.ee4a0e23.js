"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9365],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(67294),a=t(86010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(87462),a=t(67294),o=t(86010),l=t(72389),i=t(67392),s=t(7094),u=t(12466);const p="tabList__CuJ",m="tabItem_LNqP";function d(e){var n;const{lazy:t,block:l,defaultValue:d,values:c,groupId:h,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??k.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),v=(0,i.l)(f,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===d?d:d??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==E&&!f.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:T}=(0,s.U)(),[b,C]=(0,a.useState)(E),N=[],{blockElementScrollPositionUntilNextRender:A}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==b&&f.some((n=>n.value===e))&&C(e)}const R=e=>{const n=e.currentTarget,t=N.indexOf(n),r=f[t].value;r!==b&&(A(n),C(r),null!=h&&T(h,String(r)))},w=e=>{var n;let t=null;switch(e.key){case"Enter":R(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},f.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,key:n,ref:e=>N.push(e),onKeyDown:w,onClick:R},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":b===n})}),t??n)}))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==b})))))}function c(e){const n=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},95338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=t(87462),a=(t(67294),t(3905)),o=t(65488),l=t(85162);const i={id:"cypherl",title:"Importing Cypher queries (CYPHERL format)",sidebar_label:"CYPHERL",pagination_prev:"import-data/overview"},s=void 0,u={unversionedId:"import-data/files/cypherl",id:"version-2.4.2/import-data/files/cypherl",title:"Importing Cypher queries (CYPHERL format)",description:"If your data is in the form of Cypher queries (for example, CREATE and MERGE",source:"@site/memgraph_versioned_docs/version-2.4.2/import-data/files/cypherl.md",sourceDirName:"import-data/files",slug:"/import-data/files/cypherl",permalink:"/docs/memgraph/2.4.2/import-data/files/cypherl",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.4.2/import-data/files/cypherl.md",tags:[],version:"2.4.2",frontMatter:{id:"cypherl",title:"Importing Cypher queries (CYPHERL format)",sidebar_label:"CYPHERL",pagination_prev:"import-data/overview"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/2.4.2/import-data"},next:{title:"Connect to data streams",permalink:"/docs/memgraph/2.4.2/import-data/data-streams/overview"}},p={},m=[{value:"Importing via Memgraph Lab",id:"importing-via-memgraph-lab",level:2},{value:"Importing via mgconsole",id:"importing-via-mgconsole",level:2},{value:"One type of nodes and relationships",id:"one-type-of-nodes-and-relationships",level:3},{value:"Multiple types of nodes and relationships",id:"multiple-types-of-nodes-and-relationships",level:3}],d={toc:m};function c(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If your data is in the form of Cypher queries (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MERGE"),"\nclauses) within a ",(0,a.kt)("strong",{parentName:"p"},"CYPHERL")," file it can be imported via Memgraph Lab or\nmgconsole."),(0,a.kt)("p",null,"The benefit of importing data using the CYPHERL file is that you need only\none file to import both nodes and relationships. But it can be tricky to\nactually write the queries for creating nodes and relationships yourself. If you\nhaven't written any queries yet, check our ",(0,a.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher manual"),"."),(0,a.kt)("h2",{id:"importing-via-memgraph-lab"},"Importing via Memgraph Lab"),(0,a.kt)("p",null,"Once you Memgraph instance in running and you've connected to it via Memgraph\nLab, go to the ",(0,a.kt)("strong",{parentName:"p"},"Import & Export")," section. To ",(0,a.kt)("strong",{parentName:"p"},"Import Data")," select the\nCYPHERL file or drag and drop it into Memgraph Lab. "),(0,a.kt)("img",{src:t(79441).Z,className:"imgBorder"}),(0,a.kt)("h2",{id:"importing-via-mgconsole"},"Importing via mgconsole"),(0,a.kt)("p",null,"Once Memgraph is running, Cypher queries are imported by running\n",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.2/connect-to-memgraph/mgconsole"},"mgconsole")," in a non-interactive mode and\nimporting data saved in a CYPHERL file. "),(0,a.kt)("p",null,"You can import queries saved in e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"queries.cypherl")," by issuing the following\nshell command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"mgconsole < queries.cypherl\n")),(0,a.kt)("p",null,"If you installed and started Memgraph using Docker, you will need to run the\nclient using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl\n")),(0,a.kt)("p",null,"Remember to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," with ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/how-to-guides/work-with-docker#how-to-retrieve-a-docker-container-ip-address"},"valid IP of the\ncontainer"),"\nand to define the correct Memgraph Docker image you are using as well as the\ncorrect path to the file. "),(0,a.kt)("p",null,"Below, you can find two examples of how to import data within the ",(0,a.kt)("inlineCode",{parentName:"p"},".cypherl")," file\nbased on the complexity of your data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#one-type-of-nodes-and-relationships"},"One type of nodes and relationships")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships")," ")),(0,a.kt)("h3",{id:"one-type-of-nodes-and-relationships"},"One type of nodes and relationships"),(0,a.kt)("p",null,"Let's import data from ",(0,a.kt)("inlineCode",{parentName:"p"},"queries.cypherl")," file with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},'CREATE (:Person {id: "100", name: "Daniel", age: 30, city: "London"});\nCREATE (:Person {id: "101", name: "Alex", age: 15, city: "Paris"});\nCREATE (:Person {id: "102", name: "Sarah", age: 101, city: "London"});\nCREATE (:Person {id: "103", name: "Mia", age: 25, city: "Zagreb"});\nCREATE (:Person {id: "104", name: "Lucy", age: 21, city: "Paris"});\nMATCH (u:Person), (v:Person) WHERE u.id = "100" AND v.id = "102" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "100" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "101" AND v.id = "104" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "101" AND v.id = "102" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "102" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "103" AND v.id = "101" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "104" AND v.id = "100" CREATE (u)-[:IS_FRIENDS_WITH]->(v);\n')),(0,a.kt)("p",null,"The first five queries create nodes for people, and the rest of the queries create\nrelationships between these nodes."),(0,a.kt)(o.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("p",null,"If you installed Memgraph using Docker, run the client using the following\ncommand, but be careful of four things:"),(0,a.kt)("ol",null,(0,a.kt)("li",null,"Use the first command in Docker installed on Linux and macOS, but use the second command in Windows because PowerShell doesn't support the < character."),(0,a.kt)("p",null," "),(0,a.kt)("li",null,"Check the image name you are using is correct:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"If you downloaded ",(0,a.kt)("b",null,"Memgraph Platform"),", leave the current image name ",(0,a.kt)("code",null,"memgraph/memgraph-platform"),"."),(0,a.kt)("li",null,"If you downloaded ",(0,a.kt)("b",null,"MemgraphDB"),", replace the current image name with ",(0,a.kt)("code",null,"memgraph/memgraph"),"."),(0,a.kt)("li",null,"If you downloaded ",(0,a.kt)("b",null,"MAGE"),", replace the current image name with ",(0,a.kt)("code",null,"memgraph/memgraph-mage"),".")),(0,a.kt)("p",null," "),(0,a.kt)("li",null,"Remember to replace ",(0,a.kt)("code",null,"HOST")," with a valid IP of the container (see the",(0,a.kt)("a",{href:"/memgraph/how-to-guides/work-with-docker#how-to-retrieve-a-docker-container-ip-address"}," guide on working with Docker"),")."),(0,a.kt)("p",null," "),(0,a.kt)("li",null,"Check that the paths of the files you want to import are correct.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linux")," and ",(0,a.kt)("strong",{parentName:"p"},"macOS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows PowerShell"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'cmd.exe /c "docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl"\n')),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --help\n"))),(0,a.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole < queries.cypherl\n")),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole --help\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),(0,a.kt)("div",null,(0,a.kt)("img",{src:t(60066).Z}))),(0,a.kt)("h3",{id:"multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"),(0,a.kt)("p",null,"Let's import data from ",(0,a.kt)("inlineCode",{parentName:"p"},"queries.cypherl")," file with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},'CREATE (p:Person {id: "100", name: "Daniel", age: 30, city: "London"});\nCREATE (p:Person {id: "101", name: "Alex", age: 15, city: "Paris"});\nCREATE (p:Person {id: "102", name: "Sarah", age: 17, city: "London"});\nCREATE (p:Person {id: "103", name: "Mia", age: 25, city: "Zagreb"});\nCREATE (p:Person {id: "104", name: "Lucy", age: 21, city: "Paris"});\nCREATE (r:Restaurant {id: "200", name: "McDonalds", menu: "Fries BigMac McChicken Apple Pie"});\nCREATE (r:Restaurant {id: "201", name: "KFC", menu: "Fried Chicken Fries Chicken Bucket"});\nCREATE (r:Restaurant {id: "202", name: "Subway", menu: "Ham Sandwich Turkey Sandwich Foot-long"});\nCREATE (r:Restaurant {id: "203", name: "Dominos", menu: "Pepperoni Pizza Double Dish Pizza Cheese filled Crust"});\nMATCH (u:Person), (v:Person) WHERE u.id = "100" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2014"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "101" AND v.id = "104" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2001"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "102" AND v.id = "100" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2005"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "102" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2017"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "103" AND v.id = "104" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2005"}]->(v);\nMATCH (u:Person), (v:Person) WHERE u.id = "104" AND v.id = "102" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2021"}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "100" AND v.id = "200" CREATE (u)-[:ATE_AT {liked: true}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "102" AND v.id = "202" CREATE (u)-[:ATE_AT {liked: false}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "102" AND v.id = "203" CREATE (u)-[:ATE_AT {liked: false}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "102" AND v.id = "200" CREATE (u)-[:ATE_AT {liked: true}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "103" AND v.id = "201" CREATE (u)-[:ATE_AT {liked: true}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "104" AND v.id = "201" CREATE (u)-[:ATE_AT {liked: false}]->(v);\nMATCH (u:Person), (v:Restaurant) WHERE u.id = "101" AND v.id = "200" CREATE (u)-[:ATE_AT {liked: true}]->(v);\n')),(0,a.kt)("p",null,"The first five queries create nodes for people, and the following four queries\ncreate nodes for restaurants. The rest of the queries are used to define\nrelationships between nodes. As said before, you can define different types of\nnodes and relationships in one file."),(0,a.kt)(o.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("p",null,"If you installed Memgraph using Docker, run the client using the following\ncommand, but be careful of four things:"),(0,a.kt)("ol",null,(0,a.kt)("li",null,"Use the first command in Docker installed on Linux and macOS, but use the second command in Windows because PowerShell doesn't support the < character."),(0,a.kt)("p",null," "),(0,a.kt)("li",null,"Check the image name you are using is correct:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"If you downloaded ",(0,a.kt)("b",null,"Memgraph Platform"),", leave the current image name ",(0,a.kt)("code",null,"memgraph/memgraph-platform"),"."),(0,a.kt)("li",null,"If you downloaded ",(0,a.kt)("b",null,"MemgraphDB"),", replace the current image name with ",(0,a.kt)("code",null,"memgraph/memgraph"),"."),(0,a.kt)("li",null,"If you downloaded ",(0,a.kt)("b",null,"MAGE"),", replace the current image name with ",(0,a.kt)("code",null,"memgraph/memgraph-mage"),".")),(0,a.kt)("p",null," "),(0,a.kt)("li",null,"Remember to replace ",(0,a.kt)("code",null,"HOST")," with a valid IP of the container (see the",(0,a.kt)("a",{href:"/memgraph/how-to-guides/work-with-docker#how-to-retrieve-a-docker-container-ip-address"}," guide on working with Docker"),")."),(0,a.kt)("p",null," "),(0,a.kt)("li",null,"Check that the paths of the files you want to import are correct.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linux")," and ",(0,a.kt)("strong",{parentName:"p"},"macOS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows Powershell")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'cmd.exe /c "docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl"\n')),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --help\n"))),(0,a.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole < queries.cypherl\n")),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole --help\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),(0,a.kt)("div",null,(0,a.kt)("img",{src:t(27505).Z}))))}c.isMDXComponent=!0},27505:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/cypherl_multiple_type_nodes_and_relationships-c7fd68198e41c7a61f0e7f4e3fe1f573.png"},60066:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/cypherl_one_type_nodes_and_relationships-a1d7f6ffb9dd64eed6c3f7b8e68b1151.png"},79441:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/import-lab-10bd0ab80316b2807b5a0c7f157f28d7.png"}}]);