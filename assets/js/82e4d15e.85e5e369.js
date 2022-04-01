"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32517],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),o=a(72389),l=a(63725),i=a(86010),p="tabItem_LplD";function s(e){var t,a,o,s=e.lazy,m=e.block,u=e.defaultValue,c=e.values,d=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===u?u:null!=(t=null!=u?u:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=k[0])?void 0:o.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),_=b.tabGroupChoices,y=b.setTabGroupChoices,N=(0,r.useState)(f),w=N[0],I=N[1],T=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var D=_[d];null!=D&&D!==w&&g.some((function(e){return e.value===D}))&&I(D)}var E=function(e){var t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==w&&(S(t),I(n),null!=d&&y(d,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},h)},g.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,o.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},85655:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(9877),i=a(58215),p=["components"],s={id:"csv-import-tool",title:"CSV import tool",sidebar_label:"CSV import tool",pagination_prev:"import-data/overview",slug:"/import-data/csv-import-tool"},m=void 0,u={unversionedId:"import-data/csv/csv-import-tool",id:"import-data/csv/csv-import-tool",title:"CSV import tool",description:"Related - Reference Guide",source:"@site/docs/import-data/csv/csv-import-tool.md",sourceDirName:"import-data/csv",slug:"/import-data/csv-import-tool",permalink:"/docs/memgraph/next/import-data/csv-import-tool",editUrl:"https://github.com/memgraph/docs/tree/master/docs/import-data/csv/csv-import-tool.md",tags:[],version:"current",frontMatter:{id:"csv-import-tool",title:"CSV import tool",sidebar_label:"CSV import tool",pagination_prev:"import-data/overview",slug:"/import-data/csv-import-tool"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/next/import-data"},next:{title:"Kafka streams overview",permalink:"/docs/memgraph/next/import-data/kafka"}},c={},d=[{value:"Examples",id:"examples",level:2},{value:"One type of nodes and relationships",id:"one-type-of-nodes-and-relationships",level:3},{value:"Multiple types of nodes and relationships",id:"multiple-types-of-nodes-and-relationships",level:3}],h={toc:d};function k(e){var t=e.components,s=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/import-data/csv-import-tool"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,o.kt)("p",null,"CSV is a universal and very versatile data format used to store large quantities\nof data. Each Memgraph database instance includes a CSV import tool called\n",(0,o.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),".  The CSV import tool should be used for initial bulk ingestion\nof data into the database.  Upon ingestion, the CSV importer creates a snapshot\nthat will be used by the database to recover its state on its next startup."),(0,o.kt)("p",null,"If you are already familiar with the Neo4j bulk import tool, then using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," tool should be easy.  The CSV import tool is fully compatible\nwith the ",(0,o.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/operations-manual/current/tools/import/"},"Neo4j CSV\nformat"),". If you\nalready have a pipeline set-up for Neo4j, you should only replace",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"p"},"neo4j-admin\nimport")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more detailed information about the CSV import tool, check our ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/import-data/csv-import-tool"},"Reference\nguide"),"."))),(0,o.kt)("p",null,"Importing CSV data using the ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," should be a one-time operation done\nbefore running Memgraph. In other words, this tool should not be used to import\ndata into an already running Memgraph instance."),(0,o.kt)("p",null,"If you are using Docker, before the import, you need to transfer CSV files where\nthe Docker container can see them. "),(0,o.kt)("p",null,"Please check the examples below to find out how to use the import tool based on\nthe complexity of your data."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Here are two examples of how to use the CSV import tool depending on\nthe complexity of your data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#one-type-of-nodes-and-relationships"},"One type of nodes and relationships")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and\nrelationships"))),(0,o.kt)("h3",{id:"one-type-of-nodes-and-relationships"},"One type of nodes and relationships"),(0,o.kt)("p",null,"Let's import a simple dataset."),(0,o.kt)("p",null,"Download the ",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/one-type-nodes/people_nodes.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"people_nodes.csv"))," file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(PERSON_ID),name:string,:LABEL\n100,Daniel,Person\n101,Alex,Person\n102,Sarah,Person\n103,Mia,Person\n104,Lucy,Person\n")),(0,o.kt)("p",null,"Download the\n",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/one-type-nodes/people_relationships.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"people_relationships.csv"))," file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(PERSON_ID),:END_ID(PERSON_ID),:TYPE\n100,102,IS_FRIENDS_WITH\n103,101,IS_FRIENDS_WITH\n102,103,IS_FRIENDS_WITH\n101,104,IS_FRIENDS_WITH\n104,100,IS_FRIENDS_WITH\n101,102,IS_FRIENDS_WITH\n100,103,IS_FRIENDS_WITH\n")),(0,o.kt)("p",null,"Let's import the dataset using the CSV import tool. We will be importing 2 CSV files. "),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Your existing snapshot and WAL data will be considered obsolete, and Memgraph\nwill load the new dataset. This means that all of your existing data will be\nlost and replaced with the newly imported data."),(0,o.kt)("p",{parentName:"div"},"If your Memgraph docker is running, you need to stop it before starting the import process."))),(0,o.kt)(l.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("p",null,"If you are using Docker, first copy the CSV files where the Docker container can see\nthem:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker container create --user memgraph --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp people_nodes.csv mg_import_helper:/import-data\ndocker cp people_relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),(0,o.kt)("p",null,"Then, run the import tool with the following command, but be careful of three things:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Check the image name you are using is correct:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"If you downloaded ",(0,o.kt)("b",null,"Memgraph Platform"),", leave the current image name ",(0,o.kt)("code",null,"memgraph/memgraph-platform"),"."),(0,o.kt)("li",null,"If you downloaded ",(0,o.kt)("b",null,"MemgraphDB"),", replace the current image name with ",(0,o.kt)("code",null,"memgraph"),"."),(0,o.kt)("li",null,"If you downloaded ",(0,o.kt)("b",null,"MAGE"),", replace the current image name with ",(0,o.kt)("code",null,"memgraph/memgraph-mage"),".")),(0,o.kt)("p",null," "),(0,o.kt)("li",null,"If you are using Docker on ",(0,o.kt)("b",null,"Windows")," and execute commands in PowerShell change the line breaks from \\ to `."),(0,o.kt)("p",null," "),(0,o.kt)("li",null,"Check that the paths of the files you want to import are correct.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --user="memgraph" -v mg_lib:/var/lib/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph/memgraph-platform \\\n  --nodes /import-data/people_nodes.csv \\\n  --relationships /import-data/people_relationships.csv\n')),(0,o.kt)("p",null,"If you get a ",(0,o.kt)("inlineCode",{parentName:"p"},"--nodes flag is required!")," error, the paths to the files are incomplete or you are missing them completely."),(0,o.kt)("p",null,"Next time you run Memgraph, the dataset will be loaded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -it -p 7687:7687 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,o.kt)("p",null,"For information on other options, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --entrypoint=mg_import_csv memgraph/memgraph-platform --help\n"))),(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --nodes people_nodes.csv --relationships people_relationships.csv\n")),(0,o.kt)("p",null,"Next time you run Memgraph, the dataset will be loaded."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"After the import, the graph in Memgraph should look like this:"),(0,o.kt)("div",null,(0,o.kt)("img",{src:a(81510).Z}))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"),(0,o.kt)("p",null,"The previous example is showcasing a simple graph with one node type and one\nrelationship type. If we have more complex graphs, the procedure is similar.\nDownload the four CSV files to define a dataset:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/multiple-types-nodes/people_nodes.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"people_nodes.csv"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_relationships.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"people_relationships.csv"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/multiple-types-nodes/restaurants_nodes.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"restaurants_nodes.csv"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/multiple-types-nodes/restaurants_relationships.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"restaurants_relationships.csv")))),(0,o.kt)("p",null,"You can check the contents of the files and its description in the tabs below."),(0,o.kt)(l.Z,{groupId:"files",defaultValue:"pn",values:[{label:"people_nodes.csv",value:"pn"},{label:"people_relationships.csv",value:"pr"},{label:"restaurants_nodes.csv",value:"rn"},{label:"restaurants_relationships.csv",value:"rr"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"pn",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/multiple-types-nodes/people_nodes.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"people_nodes.csv"))," file contains the people nodes with ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"age"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"city")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(PERSON_ID),name:string,age:int,city:string,:LABEL\n100,Daniel,30,London,Person\n101,Alex,15,Paris,Person\n102,Sarah,17,London,Person\n103,Mia,25,Zagreb,Person\n104,Lucy,21,Paris,Person\n105,Adam,23,New York,Person\n"))),(0,o.kt)(i.Z,{value:"pr",mdxType:"TabItem"},(0,o.kt)("p",null,"Each person from the ",(0,o.kt)("inlineCode",{parentName:"p"},"people_nodes.csv")," file is connected to at least one other person by\nbeing friends. ",(0,o.kt)("br",null)," In the\n",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_relationships.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"people_relationships.csv")),"\nfile each row represents one friendship and the year it started."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(PERSON_ID),:END_ID(PERSON_ID),:TYPE,met_in:int\n100,102,IS_FRIENDS_WITH,2014\n103,105,IS_FRIENDS_WITH,2021\n102,103,IS_FRIENDS_WITH,2005\n101,104,IS_FRIENDS_WITH,2005\n104,100,IS_FRIENDS_WITH,2018\n105,102,IS_FRIENDS_WITH,2017\n100,103,IS_FRIENDS_WITH,2001\n"))),(0,o.kt)(i.Z,{value:"rn",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/multiple-types-nodes/restaurants_nodes.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"restaurants_nodes.csv"))," file introduces another node type - restaurants:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(REST_ID),name:string,menu:string[],:LABEL\n200,Mc Donalds,Fries;BigMac;McChicken;Apple Pie,Restaurant\n201,KFC,Fried Chicken;Fries;Chicken Bucket,Restaurant\n202,Subway,Ham Sandwich;Turkey Sandwich;Foot-long,Restaurant\n203,Dominos,Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust,Restaurant\n"))),(0,o.kt)(i.Z,{value:"rr",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/csv-import-tool/multiple-types-nodes/restaurants_relationships.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"restaurants_relationships.csv"))," file defines what people ate at which restaurants:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(PERSON_ID),:END_ID(REST_ID),:TYPE,liked:boolean\n100,200,ATE_AT,true\n103,201,ATE_AT,false\n104,200,ATE_AT,true\n101,202,ATE_AT,false\n101,203,ATE_AT,false\n101,200,ATE_AT,true\n102,201,ATE_AT,true\n")))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's import 4 files using the CSV import tool. "),(0,o.kt)(l.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("p",null,"If you are using Docker, first copy the CSV files where the Docker container can\nsee them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker container create --user memgraph --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp people_nodes.csv mg_import_helper:/import-data\ndocker cp people_relationships.csv mg_import_helper:/import-data\ndocker cp restaurants_nodes.csv mg_import_helper:/import-data\ndocker cp restaurants_relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),(0,o.kt)("p",null,"Then, run the import tool with the following command, but be careful of three things:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Check the image name you are using is correct:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"If you downloaded ",(0,o.kt)("b",null,"Memgraph Platform")," leave the current image name ",(0,o.kt)("code",null,"memgraph/memgraph-platform"),"."),(0,o.kt)("li",null,"If you downloaded ",(0,o.kt)("b",null,"MemgraphDB")," replace the current image name with ",(0,o.kt)("code",null,"memgraph"),"."),(0,o.kt)("li",null,"If you downloaded ",(0,o.kt)("b",null,"MAGE")," replace the current image name with ",(0,o.kt)("code",null,"memgraph/memgraph-mage"),".")),(0,o.kt)("p",null," "),(0,o.kt)("li",null,"If you are using Docker on ",(0,o.kt)("b",null,"Windows")," and execute commands in PowerShell change the line breaks from \\ to `."),(0,o.kt)("p",null," "),(0,o.kt)("li",null,"Check that the paths of the files you want to import are correct.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --user="memgraph" -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph/memgraph-platform \\\n  --nodes /import-data/people_nodes.csv \\\n  --nodes /import-data/restaurants_nodes.csv \\\n  --relationships /import-data/people_relationships.csv \\\n  --relationships /import-data/restaurants_relationships.csv\n')),(0,o.kt)("p",null,"The next time you run Memgraph, the dataset will be loaded:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -it -p 7687:7687 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,o.kt)("p",null,"For information on other options, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --entrypoint=mg_import_csv memgraph/memgraph-platform --help\n"))),(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --nodes people_nodes.csv --nodes restaurants_nodes.csv --relationships people_relationships.csv --relationships restaurants_relationships.csv\n")),(0,o.kt)("p",null,"The next time you run Memgraph, the dataset will be loaded. "))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"After the import, the graph in Memgraph should look like this:"),(0,o.kt)("div",null,(0,o.kt)("img",{src:a(21744).Z}))))}k.isMDXComponent=!0},21744:function(e,t,a){t.Z=a.p+"assets/images/import_tool_multiple_type_nodes_and_relationships-3e498a18533a55dc6771ed327e0b5548.png"},81510:function(e,t,a){t.Z=a.p+"assets/images/import_tool_one_type_nodes_and_relationships-7f950536b7a520a9ecf16e1fad65499f.png"}}]);