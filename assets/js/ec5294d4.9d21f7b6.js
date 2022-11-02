"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2368],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),s=a(67392),i=a(7094),p=a(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:m,groupId:h,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,s.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:b}=(0,i.U)(),[N,C]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:_}=(0,p.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&v.some((t=>t.value===e))&&C(e)}const D=e=>{const t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==N&&(_(t),C(n),null!=h&&b(h,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:D},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},45687:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162);const s={id:"load-csv-clause",title:"LOAD CSV Cypher clause",sidebar_label:"LOAD CSV Cypher clause",pagination_prev:"import-data/overview",slug:"/import-data/load-csv-clause"},i=void 0,p={unversionedId:"import-data/csv/load-csv-clause",id:"version-2.2.1/import-data/csv/load-csv-clause",title:"LOAD CSV Cypher clause",description:"Related - Reference Guide",source:"@site/memgraph_versioned_docs/version-2.2.1/import-data/csv/load-csv-clause.md",sourceDirName:"import-data/csv",slug:"/import-data/load-csv-clause",permalink:"/docs/memgraph/2.2.1/import-data/load-csv-clause",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.1/import-data/csv/load-csv-clause.md",tags:[],version:"2.2.1",frontMatter:{id:"load-csv-clause",title:"LOAD CSV Cypher clause",sidebar_label:"LOAD CSV Cypher clause",pagination_prev:"import-data/overview",slug:"/import-data/load-csv-clause"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/2.2.1/import-data"},next:{title:"CSV import tool",permalink:"/docs/memgraph/2.2.1/import-data/csv-import-tool"}},c={},u=[{value:"Transferring CSV files into a Docker container",id:"transfer",level:2},{value:"Examples",id:"examples",level:2},{value:"One type of nodes and relationships",id:"one-type-of-nodes-and-relationships",level:3},{value:"Multiple types of nodes and relationships",id:"multiple-types-of-nodes-and-relationships",level:3}],d={toc:u};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/reference-guide/import-data/load-csv-clause"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," Cypher clause enables you to load and use data from a CSV file of\nyour choosing in a row-based manner within a query. Memgraph supports the Excel\nCSV dialect, as it's the most common one. For the clause syntax, please check\nthe ",(0,r.kt)("a",{parentName:"p",href:"/cypher-manual/clauses/load-csv"},"Cypher manual"),"."),(0,r.kt)("p",null,"The clause reads row by row from a CSV file and binds the contents of the parsed\nrow to the variable you specified."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more detailed information about the LOAD CSV Cypher clause, check our\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.2.1/reference-guide/import-data/load-csv-clause"},"Reference guide")),".")),(0,r.kt)("h2",{id:"transfer"},"Transferring CSV files into a Docker container"),(0,r.kt)("p",null,"When working with the LOAD CSV clause, Memgraph needs to have access to the CSV\nfiles you are using.  If you are working with Docker, you need to transfer those\nfiles into the container."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Transfer CSV files into a Docker container"),"If you are using Docker to run Memgraph, you will need to copy the files from your local directory into the Docker container where Memgraph can access them.",(0,r.kt)("p",null," "),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance using Docker."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker ps\n")),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"3.")," Copy a file from your current directory to the container with the\ncommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv\n")),(0,r.kt)("p",null,"  The file is now inside your Docker container, and you can import it using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause. ")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Below, you can find two examples of how to use the LOAD CSV clause depending on\nthe complexity of your data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transferring-csv-files-into-a-docker-container-transfer"},"Transferring CSV files into a Docker container {#transfer}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Examples"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#one-type-of-nodes-and-relationships"},"One type of nodes and relationships")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"),"\nrelationships](#multiple-types-of-nodes-and-relationships)")))),(0,r.kt)("h3",{id:"one-type-of-nodes-and-relationships"},"One type of nodes and relationships"),(0,r.kt)("p",null,"Let's import a simple dataset."),(0,r.kt)("p",null,"If the CSV file has a header, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEADER")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH"),". Each row will\nbe parsed as a map, and you can use the property lookup syntax (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"id:\nrow.id"),") to access a certain field."),(0,r.kt)("p",null,"If the CSV file doesn't have a header, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEADER")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"NO"),". Each row\nwill be parsed as a list, and you can access elements by defining the position of\nthe element in the list."),(0,r.kt)(l.Z,{groupId:"platform",defaultValue:"headerin",values:[{label:"WITH CSV header",value:"headerin"},{label:"NO CSV header",value:"headerout"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"headerin",mdxType:"TabItem"},(0,r.kt)("p",null,"Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/with-header/people_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_nodes.csv")),"\nfile with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"id,name\n100,Daniel\n101,Alex\n102,Sarah\n103,Mia\n104,Lucy\n")),(0,r.kt)("p",null,"Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/with-header/people_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_relationships.csv")),"\nfile with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"id_from,id_to\n100,101\n100,102\n100,103\n101,103\n102,104\n")),(0,r.kt)("p",null,"If you are using Docker, ",(0,r.kt)("a",{parentName:"p",href:"#transfer"},"transfer the CSV files into a Docker\ncontainer"),"."),(0,r.kt)("p",null,"The following query will load row by row from the CSV file, and create a new\nnode for each row with properties based on the parsed row values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row\nCREATE (p:Person {id: row.id, name: row.name});\n')),(0,r.kt)("p",null,"If successful, you should receive an ",(0,r.kt)("inlineCode",{parentName:"p"},"Empty set (0.014 sec)")," message. "),(0,r.kt)("p",null,"With the initial nodes in place, you can now create relationships between them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_relationships.csv" WITH HEADER AS row\nMATCH (p1:Person {id: row.id_from}), (p2:Person {id: row.id_to})\nCREATE (p1)-[:IS_FRIENDS_WITH]->(p2);\n'))),(0,r.kt)(o.Z,{value:"headerout",mdxType:"TabItem"},(0,r.kt)("p",null,"Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/no-header/people_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_nodes.csv")),"\nfile with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"100,Daniel\n101,Alex\n102,Sarah\n103,Mia\n104,Lucy\n")),(0,r.kt)("p",null,"Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/no-header/people_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_relationships.csv")),"\nfile with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"100,101\n100,102\n100,103\n101,103\n102,104\n")),(0,r.kt)("p",null,"If you are using Docker, ",(0,r.kt)("a",{parentName:"p",href:"#transfer"},"transfer the CSV files into a Docker\ncontainer"),"."),(0,r.kt)("p",null,"The following query will load row by row from the CSV file, and create a new\nnode for each row with properties based on the parsed row values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_nodes.csv" NO HEADER AS row\nCREATE (p:Person {id: row[0], name: row[1]});\n')),(0,r.kt)("p",null,"With the initial nodes in place, you can now create relationships between them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_relationships.csv" NO HEADER AS row\nMATCH (p1:Person {id: row[0]}), (p2:Person {id: row[1]})\nCREATE (p1)-[:IS_FRIENDS_WITH]->(p2);\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),"Run the following query: ",(0,r.kt)("br",null),(0,r.kt)("code",null,"MATCH p=()-[]-() RETURN p;"),(0,r.kt)("p",null),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(86349).Z}))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"),(0,r.kt)("p",null,"In the case of a more complex graph, we have to deal with multiple node and\nrelationship types. "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Let's say we want to create a graph like this:"),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(5474).Z}))),(0,r.kt)("p",null,"We will create that graph by using ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause to import four CSV files."),(0,r.kt)(l.Z,{groupId:"csv",defaultValue:"pn",values:[{label:"1. people_nodes.csv",value:"pn"},{label:"2. people_relationships.csv",value:"pr"},{label:"3. restaurants_nodes.csv",value:"rn"},{label:"4. restaurants_relationships.csv",value:"rr"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"pn",mdxType:"TabItem"},(0,r.kt)("p",null,"Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_nodes.csv")),"\nfile, content of which is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,age,city\n100,Daniel,30,London\n101,Alex,15,Paris\n102,Sarah,17,London\n103,Mia,25,Zagreb\n104,Lucy,21,Paris\n")),(0,r.kt)("p",null,"If you are using Docker, ",(0,r.kt)("a",{parentName:"p",href:"#transfer"},"transfer the CSV files into a Docker\ncontainer"),"."),(0,r.kt)("p",null,"The following query will load row by row from the file, and create a new node\nfor each row with properties based on the parsed row values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row\nCREATE (n:Person {id: row.id, name: row.name, age: ToInteger(row.age), city: row.city});\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),"Run the following query: ",(0,r.kt)("br",null),(0,r.kt)("code",null,"MATCH (p) RETURN p;"),(0,r.kt)("p",null),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(61007).Z}))),(0,r.kt)("p",null,"Now move on to the ",(0,r.kt)("inlineCode",{parentName:"p"},"people_relationships.csv")," file.")),(0,r.kt)(o.Z,{value:"pr",mdxType:"TabItem"},(0,r.kt)("p",null,"Each person from the ",(0,r.kt)("inlineCode",{parentName:"p"},"people_nodes.csv")," file is connected to at least one other\nperson by being friends. ",(0,r.kt)("br",null)," Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_relationships.csv")),"\nfile, where each row represents one friendship and the year it started:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"first_person,second_person,met_in\n100,102,2014\n103,101,2021\n102,103,2005\n101,104,2005\n104,100,2018\n101,102,2017\n100,103,2001\n")),(0,r.kt)("p",null,"If you are using Docker, ",(0,r.kt)("a",{parentName:"p",href:"#transfer"},"transfer the CSV files into a Docker\ncontainer"),"."),(0,r.kt)("p",null,"The following query will create relationships between the people nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_relationships.csv" WITH HEADER AS row\nMATCH (p1:Person {id: row.first_person})\nMATCH (p2:Person {id: row.second_person})\nCREATE (p1)-[f:IS_FRIENDS_WITH]->(p2)\nSET f.met_in = row.met_in;\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),"Run the following query: ",(0,r.kt)("br",null),(0,r.kt)("code",null,"MATCH p=()-[]-() RETURN p;"),(0,r.kt)("p",null),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(24914).Z}))),(0,r.kt)("p",null,"Now move on to the ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurants_nodes.csv")," file.")),(0,r.kt)(o.Z,{value:"rn",mdxType:"TabItem"},(0,r.kt)("p",null,"Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/restaurants_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"restaurants_nodes.csv")),"\nfile that holds a list of restaurants people ate at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,menu\n200,Mc Donalds,Fries;BigMac;McChicken;Apple Pie\n201,KFC,Fried Chicken;Fries;Chicken Bucket\n202,Subway,Ham Sandwich;Turkey Sandwich;Foot-long\n203,Dominos,Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust\n")),(0,r.kt)("p",null,"If you are using Docker, ",(0,r.kt)("a",{parentName:"p",href:"#transfer"},"transfer the CSV files into a Docker\ncontainer"),"."),(0,r.kt)("p",null,"The following query will create new nodes for each restaurant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/restaurants_nodes.csv" WITH HEADER AS row\nCREATE (n:Restaurant {id: row.id, name: row.name, menu: row.menu});\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),"Run the following query: ",(0,r.kt)("br",null),(0,r.kt)("code",null,"MATCH (p) RETURN p;"),(0,r.kt)("p",null),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(90809).Z}))),(0,r.kt)("p",null,"Now move on to the ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurants_relationships.csv")," file.")),(0,r.kt)(o.Z,{value:"rr",mdxType:"TabItem"},(0,r.kt)("p",null,"Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/restaurants_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"restaurants_relationships.csv")),"\nfile that contains a list of people and the restaurants they visited:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"PERSON_ID,REST_ID,liked\n100,200,true\n103,201,false\n104,200,true\n101,202,false\n101,203,false\n101,200,true\n102,201,true\n")),(0,r.kt)("p",null,"If you are using Docker, ",(0,r.kt)("a",{parentName:"p",href:"#transfer"},"transfer the CSV files into a Docker\ncontainer"),"."),(0,r.kt)("p",null,"The following query will create relationships between people and restaurants\nwhere they ate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/restaurants_relationships.csv" WITH HEADER AS row\nMATCH (p1:Person {id: row.PERSON_ID})\nMATCH (re:Restaurant {id: row.REST_ID})\nCREATE (p1)-[ate:ATE_AT]->(re)\nSET ate.liked = ToBoolean(row.liked);\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),"Run the following query: ",(0,r.kt)("br",null),(0,r.kt)("code",null,"MATCH p=()-[]-() RETURN p;"),(0,r.kt)("p",null),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(69831).Z}))),(0,r.kt)("p",null,"Congratulations! You've imported all the CSV files!"))))}m.isMDXComponent=!0},5474:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load_csv_multiple_nodes_and_relationships-fb6a941e357512d4865b78405589bfdf.png"},86349:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load_csv_one_type_of_nodes_and_relationships-fbca8c662fdc966692d1045f77f52b7f.png"},61007:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load_csv_people_nodes-d95a476705fb116da60c043f9f58c4ee.png"},24914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load_csv_people_relationships-639ae6445ba349d2a0807cfd198d82b3.png"},90809:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load_csv_restaurant_nodes-6aae93ec85de20379c59b9237e71b6ad.png"},69831:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load_csv_restaurants_relationships-f83085ad2846fe598b19b27eb16698e6.png"}}]);