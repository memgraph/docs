"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91944],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=i(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),r=a(67294),o=a(86010),l=a(72389),s=a(67392),p=a(7094),i=a(12466);const m="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:c,groupId:h,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,s.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:y}=(0,p.U)(),[N,I]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=h){const e=_[h];null!=e&&e!==N&&v.some((t=>t.value===e))&&I(e)}const S=e=>{const t=e.currentTarget,a=w.indexOf(t),n=v[a].value;n!==N&&(T(t),I(n),null!=h&&y(h,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},k)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:S},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},62780:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const s={id:"csv-import-tool",title:"CSV import tool",sidebar_label:"CSV import tool",pagination_prev:"import-data/overview",slug:"/import-data/csv-import-tool"},p=void 0,i={unversionedId:"import-data/csv/csv-import-tool",id:"version-2.1.1/import-data/csv/csv-import-tool",title:"CSV import tool",description:"CSV is a universal and very versatile data format used to store large quantities",source:"@site/memgraph_versioned_docs/version-2.1.1/import-data/csv/csv-import-tool.md",sourceDirName:"import-data/csv",slug:"/import-data/csv-import-tool",permalink:"/docs/memgraph/2.1.1/import-data/csv-import-tool",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/import-data/csv/csv-import-tool.md",tags:[],version:"2.1.1",frontMatter:{id:"csv-import-tool",title:"CSV import tool",sidebar_label:"CSV import tool",pagination_prev:"import-data/overview",slug:"/import-data/csv-import-tool"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/2.1.1/import-data"},next:{title:"Kafka streams overview",permalink:"/docs/memgraph/2.1.1/import-data/kafka"}},m={},u=[{value:"Examples",id:"examples",level:2},{value:"One type of nodes and relationships",id:"one-type-of-nodes-and-relationships",level:3},{value:"Multiple types of nodes and relationships",id:"multiple-types-of-nodes-and-relationships",level:3}],d={toc:u};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"CSV is a universal and very versatile data format used to store large quantities\nof data. Each Memgraph database instance includes a CSV import tool called\n",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),".  The CSV import tool should be used for initial bulk ingestion\nof data into the database.  Upon ingestion, the CSV importer creates a snapshot\nthat will be used by the database to recover its state on its next startup."),(0,r.kt)("p",null,"If you are already familiar with the Neo4j bulk import tool, then using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," tool should be easy.  The CSV import tool is fully compatible\nwith the ",(0,r.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/operations-manual/current/tools/import/"},"Neo4j CSV\nformat"),". If you\nalready have a pipeline set-up for Neo4j, you should only replace",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"p"},"neo4j-admin\nimport")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more detailed information about the CSV import tool, check our ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/import-data/csv-import-tool"},"Reference\nguide"),".")),(0,r.kt)("p",null,"Importing CSV data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," should be a one-time operation done\nbefore running Memgraph. In other words, this tool should not be used to import\ndata into an already running Memgraph instance."),(0,r.kt)("p",null,"If you are using Docker, before the import, you need to transfer CSV files where\nthe Docker container can see them. "),(0,r.kt)("p",null,"Please check the examples below to find out how to use the import tool based on\nthe complexity of your data."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here are two examples of how to use the CSV import tool depending on\nthe complexity of your data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#one-type-of-nodes-and-relationships"},"One type of nodes and relationships")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and\nrelationships"))),(0,r.kt)("h3",{id:"one-type-of-nodes-and-relationships"},"One type of nodes and relationships"),(0,r.kt)("p",null,"Let's import a simple dataset."),(0,r.kt)("p",null,"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/one-type-nodes/people_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_nodes.csv"))," file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(PERSON_ID),name:string,:LABEL\n100,Daniel,Person\n101,Alex,Person\n102,Sarah,Person\n103,Mia,Person\n104,Lucy,Person\n")),(0,r.kt)("p",null,"Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/one-type-nodes/people_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_relationships.csv"))," file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(PERSON_ID),:END_ID(PERSON_ID),:TYPE\n100,102,IS_FRIENDS_WITH\n103,101,IS_FRIENDS_WITH\n102,103,IS_FRIENDS_WITH\n101,104,IS_FRIENDS_WITH\n104,100,IS_FRIENDS_WITH\n101,102,IS_FRIENDS_WITH\n100,103,IS_FRIENDS_WITH\n")),(0,r.kt)("p",null,"Let's import the dataset using the CSV import tool. We will be importing 2 CSV files. "),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Your existing snapshot and WAL data will be considered obsolete, and Memgraph\nwill load the new dataset. This means that all of your existing data will be\nlost and replaced with the newly imported data."),(0,r.kt)("p",{parentName:"admonition"},"If your Memgraph docker is running, you need to stop it before starting the import process.")),(0,r.kt)(o.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("p",null,"If you are using Docker, first copy the CSV files where the Docker container can see\nthem:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker container create --user memgraph --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp people_nodes.csv mg_import_helper:/import-data\ndocker cp people_relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),(0,r.kt)("p",null,"Then, run the import tool with the following command, but be careful of three things:"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"Check the image name you are using is correct:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"If you downloaded ",(0,r.kt)("b",null,"Memgraph Platform"),", leave the current image name ",(0,r.kt)("code",null,"memgraph/memgraph-platform"),"."),(0,r.kt)("li",null,"If you downloaded ",(0,r.kt)("b",null,"MemgraphDB"),", replace the current image name with ",(0,r.kt)("code",null,"memgraph"),"."),(0,r.kt)("li",null,"If you downloaded ",(0,r.kt)("b",null,"MAGE"),", replace the current image name with ",(0,r.kt)("code",null,"memgraph/memgraph-mage"),".")),(0,r.kt)("p",null," "),(0,r.kt)("li",null,"If you are using Docker on ",(0,r.kt)("b",null,"Windows")," and execute commands in PowerShell change the line breaks from \\ to `."),(0,r.kt)("p",null," "),(0,r.kt)("li",null,"Check that the paths of the files you want to import are correct.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --user="memgraph" -v mg_lib:/var/lib/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph/memgraph-platform \\\n  --nodes /import-data/people_nodes.csv \\\n  --relationships /import-data/people_relationships.csv\n')),(0,r.kt)("p",null,"If you get a ",(0,r.kt)("inlineCode",{parentName:"p"},"--nodes flag is required!")," error, the paths to the files are incomplete or you are missing them completely."),(0,r.kt)("p",null,"Next time you run Memgraph, the dataset will be loaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -it -p 7687:7687 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,r.kt)("p",null,"For information on other options, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --entrypoint=mg_import_csv memgraph/memgraph-platform --help\n"))),(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --nodes people_nodes.csv --relationships people_relationships.csv\n")),(0,r.kt)("p",null,"Next time you run Memgraph, the dataset will be loaded."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"After the import, the graph in Memgraph should look like this:"),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(7826).Z}))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"),(0,r.kt)("p",null,"The previous example is showcasing a simple graph with one node type and one\nrelationship type. If we have more complex graphs, the procedure is similar.\nDownload the four CSV files to define a dataset:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/multiple-types-nodes/people_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_nodes.csv"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_relationships.csv"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/multiple-types-nodes/restaurants_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"restaurants_nodes.csv"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/multiple-types-nodes/restaurants_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"restaurants_relationships.csv")))),(0,r.kt)("p",null,"You can check the contents of the files and its description in the tabs below."),(0,r.kt)(o.Z,{groupId:"files",defaultValue:"pn",values:[{label:"people_nodes.csv",value:"pn"},{label:"people_relationships.csv",value:"pr"},{label:"restaurants_nodes.csv",value:"rn"},{label:"restaurants_relationships.csv",value:"rr"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"pn",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/multiple-types-nodes/people_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_nodes.csv"))," file contains the people nodes with ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(PERSON_ID),name:string,age:int,city:string,:LABEL\n100,Daniel,30,London,Person\n101,Alex,15,Paris,Person\n102,Sarah,17,London,Person\n103,Mia,25,Zagreb,Person\n104,Lucy,21,Paris,Person\n105,Adam,23,New York,Person\n"))),(0,r.kt)(l.Z,{value:"pr",mdxType:"TabItem"},(0,r.kt)("p",null,"Each person from the ",(0,r.kt)("inlineCode",{parentName:"p"},"people_nodes.csv")," file is connected to at least one other person by\nbeing friends. ",(0,r.kt)("br",null)," In the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_relationships.csv")),"\nfile each row represents one friendship and the year it started."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(PERSON_ID),:END_ID(PERSON_ID),:TYPE,met_in:int\n100,102,IS_FRIENDS_WITH,2014\n103,105,IS_FRIENDS_WITH,2021\n102,103,IS_FRIENDS_WITH,2005\n101,104,IS_FRIENDS_WITH,2005\n104,100,IS_FRIENDS_WITH,2018\n105,102,IS_FRIENDS_WITH,2017\n100,103,IS_FRIENDS_WITH,2001\n"))),(0,r.kt)(l.Z,{value:"rn",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/multiple-types-nodes/restaurants_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"restaurants_nodes.csv"))," file introduces another node type - restaurants:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(REST_ID),name:string,menu:string[],:LABEL\n200,Mc Donalds,Fries;BigMac;McChicken;Apple Pie,Restaurant\n201,KFC,Fried Chicken;Fries;Chicken Bucket,Restaurant\n202,Subway,Ham Sandwich;Turkey Sandwich;Foot-long,Restaurant\n203,Dominos,Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust,Restaurant\n"))),(0,r.kt)(l.Z,{value:"rr",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/multiple-types-nodes/restaurants_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"restaurants_relationships.csv"))," file defines what people ate at which restaurants:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(PERSON_ID),:END_ID(REST_ID),:TYPE,liked:boolean\n100,200,ATE_AT,true\n103,201,ATE_AT,false\n104,200,ATE_AT,true\n101,202,ATE_AT,false\n101,203,ATE_AT,false\n101,200,ATE_AT,true\n102,201,ATE_AT,true\n")))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's import 4 files using the CSV import tool. "),(0,r.kt)(o.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("p",null,"If you are using Docker, first copy the CSV files where the Docker container can\nsee them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker container create --user memgraph --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp people_nodes.csv mg_import_helper:/import-data\ndocker cp people_relationships.csv mg_import_helper:/import-data\ndocker cp restaurants_nodes.csv mg_import_helper:/import-data\ndocker cp restaurants_relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),(0,r.kt)("p",null,"Then, run the import tool with the following command, but be careful of three things:"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"Check the image name you are using is correct:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"If you downloaded ",(0,r.kt)("b",null,"Memgraph Platform")," leave the current image name ",(0,r.kt)("code",null,"memgraph/memgraph-platform"),"."),(0,r.kt)("li",null,"If you downloaded ",(0,r.kt)("b",null,"MemgraphDB")," replace the current image name with ",(0,r.kt)("code",null,"memgraph"),"."),(0,r.kt)("li",null,"If you downloaded ",(0,r.kt)("b",null,"MAGE")," replace the current image name with ",(0,r.kt)("code",null,"memgraph/memgraph-mage"),".")),(0,r.kt)("p",null," "),(0,r.kt)("li",null,"If you are using Docker on ",(0,r.kt)("b",null,"Windows")," and execute commands in PowerShell change the line breaks from \\ to `."),(0,r.kt)("p",null," "),(0,r.kt)("li",null,"Check that the paths of the files you want to import are correct.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --user="memgraph" -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph/memgraph-platform \\\n  --nodes /import-data/people_nodes.csv \\\n  --nodes /import-data/restaurants_nodes.csv \\\n  --relationships /import-data/people_relationships.csv \\\n  --relationships /import-data/restaurants_relationships.csv\n')),(0,r.kt)("p",null,"The next time you run Memgraph, the dataset will be loaded:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -it -p 7687:7687 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,r.kt)("p",null,"For information on other options, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --entrypoint=mg_import_csv memgraph/memgraph-platform --help\n"))),(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --nodes people_nodes.csv --nodes restaurants_nodes.csv --relationships people_relationships.csv --relationships restaurants_relationships.csv\n")),(0,r.kt)("p",null,"The next time you run Memgraph, the dataset will be loaded. "))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"After the import, the graph in Memgraph should look like this:"),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(98393).Z}))))}c.isMDXComponent=!0},98393:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import_tool_multiple_type_nodes_and_relationships-3e498a18533a55dc6771ed327e0b5548.png"},7826:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import_tool_one_type_nodes_and_relationships-7f950536b7a520a9ecf16e1fad65499f.png"}}]);