"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27344],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),p=a(91980),s=a(67392),c=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[p,s]=h({queryString:a,groupId:n}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=p??m;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),k(e)}),[s,k,o]),tabValues:o}}var f=a(72389);const N="tabList__CuJ",y="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:l,selectValue:p,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==l&&(m(t),p(n))},d=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:u},i,{className:(0,o.Z)("tabs__item",y,null==i?void 0:i.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",N)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},62600:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={id:"load-csv-clause",title:"LOAD CSV Cypher clause",sidebar_label:"CSV",pagination_prev:"import-data/overview",slug:"/import-data/load-csv-clause"},p=void 0,s={unversionedId:"import-data/files/load-csv-clause",id:"import-data/files/load-csv-clause",title:"LOAD CSV Cypher clause",description:"If your data is in CSV format, you can import it into a running Memgraph",source:"@site/docs/import-data/files/load-csv-clause.md",sourceDirName:"import-data/files",slug:"/import-data/load-csv-clause",permalink:"/docs/memgraph/next/import-data/load-csv-clause",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/import-data/files/load-csv-clause.md",tags:[],version:"current",frontMatter:{id:"load-csv-clause",title:"LOAD CSV Cypher clause",sidebar_label:"CSV",pagination_prev:"import-data/overview",slug:"/import-data/load-csv-clause"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/next/import-data"},next:{title:"JSON",permalink:"/docs/memgraph/next/import-data/files/load-json"}},c={},m=[{value:"Clause syntax",id:"clause-syntax",level:2},{value:"Clause specificities",id:"clause-specificities",level:2},{value:"Examples",id:"examples",level:2},{value:"One type of nodes and relationships",id:"one-type-of-nodes-and-relationships",level:3},{value:"Multiple types of nodes and relationships",id:"multiple-types-of-nodes-and-relationships",level:3}],u={toc:m};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If your data is in CSV format, you can import it into a running Memgraph\ndatabase from a designated CSV files using the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," Cypher clause. The\nclause reads row by row from a CSV file, binds the contents of the parsed row to\nthe variable you specified and populates the database if it is empty, or appends\nnew data to an existing dataset. Memgraph supports the Excel CSV dialect, as\nit's the most common one. "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause cannot be used with a Memgraph Cloud instance because at the\nmoment it is impossible to make files accessible by Memgraph. ")),(0,r.kt)("h2",{id:"clause-syntax"},"Clause syntax"),(0,r.kt)("p",null,"The syntax of the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"LOAD CSV FROM <csv-file-path> ( WITH | NO ) HEADER [IGNORE BAD] [DELIMITER <delimiter-string>] [QUOTE <quote-string>] AS <variable-name>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<csv-file-path>")," is a string of the path to the CSV file. There are no\nrestrictions on where in your filesystem the file can be located, as long as\nthe path is valid (i.e., the file exists). If you are using Docker to run\nMemgraph, you will need to ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-Docker-container"},"copy the files from your local directory into the\nDocker"),"\ncontainer where Memgraph can access them.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"( WITH | NO ) HEADER")," flag specifies whether the CSV file has a header, in\nwhich case it will be parsed as a map, or it doesn't have a header, in which\ncase it will be parsed as a list."),(0,r.kt)("p",{parentName:"li"},"If the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"WITH HEADER"))," option is set, the very first line in the file will be\nparsed as the header, and any remaining rows will be parsed as regular rows. The\nvalue bound to the row variable will be a map of the form:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'{ ( "header_field" : "row_value" )? ( , "header_field" : "row_value" )* }\n')),(0,r.kt)("p",{parentName:"li"},"If the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"NO HEADER"))," option is set, then each row is parsed as a list of values.\nThe contents of the row can be accessed using the list index syntax. Note that\nin this mode, there are no restrictions on the number of values a row contains.\nThis isn't recommended, as the user must manually handle the varying number of\nvalues in a row."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"IGNORE BAD")," flag specifies whether rows containing errors should be ignored\nor not. If it's set, the parser attempts to return the first valid row from\nthe CSV file. If it isn't set, an exception will be thrown on the first\ninvalid row encountered.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DELIMITER <delimiter-string>")," option enables the user to specify the CSV\ndelimiter character. If it isn't set, the default delimiter character ",(0,r.kt)("inlineCode",{parentName:"p"},",")," is\nassumed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"QUOTE <quote-string>")," option enables the user to specify the CSV quote\ncharacter. If it isn't set, the default quote character ",(0,r.kt)("inlineCode",{parentName:"p"},'"')," is assumed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<variable-name>")," is a symbolic name representing the variable to which the\ncontents of the parsed row will be bound to, enabling access to the row\ncontents later in the query. The variable doesn't have to be used in any\nsubsequent clause."))),(0,r.kt)("h2",{id:"clause-specificities"},"Clause specificities"),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause please keep in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"The parser parses the values as strings")," so it's up to the user to convert\nthe parsed row values to the appropriate type. This can be done using the\nbuilt-in conversion functions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ToInteger"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ToFloat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ToBoolean")," etc.\nConsult the documentation on ",(0,r.kt)("a",{parentName:"p",href:"/cypher-manual/functions"},"the available conversion\nfunctions"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"The ",(0,r.kt)("inlineCode",{parentName:"strong"},"LOAD CSV")," clause is not a standalone clause"),", which means that a valid query\nmust contain at least one more clause, for example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MERGE (n:A) LOAD CSV FROM "file.csv" WITH HEADER AS row;\n')),(0,r.kt)("p",{parentName:"li"},"In this regard, the following query will throw an exception:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "file.csv" WITH HEADER AS row;\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Because of the need to use at least two clauses, the clause that exhausts its\nresults sooner will dictate how many times the "loop" is executed. Consider the\nfollowing query: '),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)\nLOAD CSV FROM "file.csv" WITH HEADER as row\nSET n.p = row;\n')),(0,r.kt)("p",{parentName:"li"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH (n)"),' clause finds five nodes, and the "file.csv" has only two\nrows, only the first two nodes returned by the ',(0,r.kt)("inlineCode",{parentName:"p"},"MATCH (n)")," will have their\nproperties set, using the two rows from the CSV file. "),(0,r.kt)("p",{parentName:"li"},"Similarly, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH (n)"),' clause finds two nodes, whereas the "file.csv" has\nfive rows, only the two nodes returned by ',(0,r.kt)("inlineCode",{parentName:"p"},"MATCH (n)")," will have their properties\nset with the values from the first two rows of the CSV file. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"The ",(0,r.kt)("inlineCode",{parentName:"strong"},"LOAD CSV")," clause can be used at most once per query"),", so the queries like the one\nbelow wll throw an exception: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "x.csv" WITH HEADER as x\nLOAD CSV FROM "y.csv" WITH HEADER as y\nCREATE (n:A {p1 : x, p2 : y});\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause will create relationships and thus import data much\nfaster if you ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/how-to-guides/indexes"},"create indexes")," on nodes or node\nproperties once you import them: "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON Node(id);\n"))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Below, you can find two examples of how to use the LOAD CSV clause depending on\nthe complexity of your data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clause-syntax"},"Clause syntax")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clause-specificities"},"Clause specificities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Examples"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#one-type-of-nodes-and-relationships"},"One type of nodes and relationships")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"))))),(0,r.kt)("h3",{id:"one-type-of-nodes-and-relationships"},"One type of nodes and relationships"),(0,r.kt)("p",null,"Let's import a simple dataset from the ",(0,r.kt)("inlineCode",{parentName:"p"},"people_nodes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"people_relationships")," CSV files."),(0,r.kt)(o.Z,{groupId:"platform",defaultValue:"headerin",values:[{label:"WITH CSV header",value:"headerin"},{label:"NO CSV header",value:"headerout"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"headerin",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the CSV files:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/with-header/people_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_nodes.csv")),"\nfile with the following content:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"id,name\n100,Daniel\n101,Alex\n102,Sarah\n103,Mia\n104,Lucy\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/with-header/people_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_relationships.csv")),"\nfile with the following content:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"id_from,id_to\n100,101\n100,102\n100,103\n101,103\n102,104\n")))),(0,r.kt)("p",{parentName:"li"},"These CSV files have a header, which means the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEADER")," option of the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV"),"\nclause needs to be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH"),". Each row will be parsed as a map, and the\nfields can be accessed using the property lookup syntax (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"id: row.id"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the location of the CSV file. If you are working with Docker, copy the\nfiles from your local directory into the Docker container where Memgraph can\naccess them."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Transfer CSV files into a Docker container"),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance using Docker."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker ps\n")),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"3.")," Copy a file from your current directory to the container with the\ncommand:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv\n")),(0,r.kt)("p",{parentName:"li"},"   The file is now inside your Docker container, and you can import it using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The following query will load row by row from the CSV file, and create a new\nnode for each row with properties based on the parsed row values:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row\nCREATE (p:Person {id: row.id, name: row.name});\n')),(0,r.kt)("p",{parentName:"li"},"If successful, you should receive an ",(0,r.kt)("inlineCode",{parentName:"p"},"Empty set (0.014 sec)")," message. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With the initial nodes in place, you can now create relationships between\nthem by importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"people_relationships.csv")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_relationships.csv" WITH HEADER AS row\nMATCH (p1:Person {id: row.id_from}), (p2:Person {id: row.id_to})\nCREATE (p1)-[:IS_FRIENDS_WITH]->(p2);\n'))))),(0,r.kt)(i.Z,{value:"headerout",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the CSV files:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/no-header/people_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_nodes.csv")),"\nfile with the following content:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"100,Daniel\n101,Alex\n102,Sarah\n103,Mia\n104,Lucy\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/no-header/people_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_relationships.csv")),"\nfile with the following content:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"100,101\n100,102\n100,103\n101,103\n102,104\n")))),(0,r.kt)("p",{parentName:"li"},"These CSV files don't have a header, so the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEADER")," option of the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV"),"\nneeds to be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"NO"),". Each row will be parsed as a list, and you can access\nelements by defining the position of the element in the list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the location of the CSV file. If you are working with Docker, copy the\nfiles from your local directory into the Docker container where Memgraph can\naccess them."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Transfer CSV files into a Docker container"),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance using Docker."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker ps\n")),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"3.")," Copy a file from your current directory to the container with the\ncommand:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv\n")),(0,r.kt)("p",{parentName:"li"},"   The file is now inside your Docker container, and you can import it using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The following query will load row by row from the CSV file, and create a new\nnode for each row with properties based on the parsed row values:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_nodes.csv" NO HEADER AS row\nCREATE (p:Person {id: row[0], name: row[1]});\n')),(0,r.kt)("p",{parentName:"li"},"If successful, you should receive an ",(0,r.kt)("inlineCode",{parentName:"p"},"Empty set (0.014 sec)")," message. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With the initial nodes in place, you can now create relationships between\nthem by importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"people_relationships.csv")," file::"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_relationships.csv" NO HEADER AS row\nMATCH (p1:Person {id: row[0]}), (p2:Person {id: row[1]})\nCREATE (p1)-[:IS_FRIENDS_WITH]->(p2);\n')))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"This is how the graph should look like in Memgraph after the import"),"Run the following query: ",(0,r.kt)("br",null),(0,r.kt)("code",null,"MATCH p=()-[]-() RETURN p;"),(0,r.kt)("p",null),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(70796).Z}))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"),(0,r.kt)("p",null,"In the case of a more complex graph, we have to deal with multiple node and\nrelationship types. "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Let's say we want to create a graph like this:"),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(62144).Z}))),(0,r.kt)("p",null,"We will create that graph by using ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause to import four CSV files."),(0,r.kt)(o.Z,{groupId:"csv",defaultValue:"pn",values:[{label:"1. people_nodes.csv",value:"pn"},{label:"2. people_relationships.csv",value:"pr"},{label:"3. restaurants_nodes.csv",value:"rn"},{label:"4. restaurants_relationships.csv",value:"rr"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pn",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_nodes.csv")),"\nfile, content of which is:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,age,city\n100,Daniel,30,London\n101,Alex,15,Paris\n102,Sarah,17,London\n103,Mia,25,Zagreb\n104,Lucy,21,Paris\n")),(0,r.kt)("p",{parentName:"li"},"These CSV files have a header, which means the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEADER")," option of the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV"),"\nclause needs to be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH"),". Each row will be parsed as a map, and the\nfields can be accessed using the property lookup syntax (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"id: row.id"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the location of the CSV file. If you are working with Docker, copy the\nfiles from your local directory into the Docker container where Memgraph can\naccess them."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Transfer CSV files into a Docker container"),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance using Docker."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker ps\n")),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"3.")," Copy a file from your current directory to the container with the\ncommand:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv\n")),(0,r.kt)("p",{parentName:"li"},"   The file is now inside your Docker container, and you can import it using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The following query will load row by row from the file, and create a new node\nfor each row with properties based on the parsed row values:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row\nCREATE (n:Person {id: row.id, name: row.name, age: ToInteger(row.age), city: row.city});\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),"Run the following query: ",(0,r.kt)("br",null),(0,r.kt)("code",null,"MATCH (p) RETURN p;"),(0,r.kt)("p",null),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(21609).Z}))),(0,r.kt)("p",null,"Now move on to the ",(0,r.kt)("inlineCode",{parentName:"p"},"people_relationships.csv")," file.")),(0,r.kt)(i.Z,{value:"pr",mdxType:"TabItem"},(0,r.kt)("p",null,"Each person from the ",(0,r.kt)("inlineCode",{parentName:"p"},"people_nodes.csv")," file is connected to at least one other\nperson by being friends."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"people_relationships.csv")),"\nfile, where each row represents one friendship and the year it started:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"first_person,second_person,met_in\n100,102,2014\n103,101,2021\n102,103,2005\n101,104,2005\n104,100,2018\n101,102,2017\n100,103,2001\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the location of the CSV file. If you are working with Docker, copy the\nfiles from your local directory into the Docker container where Memgraph can\naccess them."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Transfer CSV files into a Docker container"),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance using Docker."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker ps\n")),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"3.")," Copy a file from your current directory to the container with the\ncommand:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv\n")),(0,r.kt)("p",{parentName:"li"},"   The file is now inside your Docker container, and you can import it using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The following query will create relationships between the people nodes:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/people_relationships.csv" WITH HEADER AS row\nMATCH (p1:Person {id: row.first_person})\nMATCH (p2:Person {id: row.second_person})\nCREATE (p1)-[f:IS_FRIENDS_WITH]->(p2)\nSET f.met_in = row.met_in;\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),"Run the following query: ",(0,r.kt)("br",null),(0,r.kt)("code",null,"MATCH p=()-[]-() RETURN p;"),(0,r.kt)("p",null),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(12486).Z}))),(0,r.kt)("p",null,"Now move on to the ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurants_nodes.csv")," file.")),(0,r.kt)(i.Z,{value:"rn",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/restaurants_nodes.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"restaurants_nodes.csv")),"\nfile that holds a list of restaurants people ate at:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,menu\n200,Mc Donalds,Fries;BigMac;McChicken;Apple Pie\n201,KFC,Fried Chicken;Fries;Chicken Bucket\n202,Subway,Ham Sandwich;Turkey Sandwich;Foot-long\n203,Dominos,Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the location of the CSV file. If you are working with Docker, copy the\nfiles from your local directory into the Docker container where Memgraph can\naccess them."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Transfer CSV files into a Docker container"),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance using Docker."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker ps\n")),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"3.")," Copy a file from your current directory to the container with the\ncommand:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv\n")),(0,r.kt)("p",{parentName:"li"},"   The file is now inside your Docker container, and you can import it using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The following query will create new nodes for each restaurant:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/restaurants_nodes.csv" WITH HEADER AS row\nCREATE (n:Restaurant {id: row.id, name: row.name, menu: row.menu});\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),"Run the following query: ",(0,r.kt)("br",null),(0,r.kt)("code",null,"MATCH (p) RETURN p;"),(0,r.kt)("p",null),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(67725).Z}))),(0,r.kt)("p",null,"Now move on to the ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurants_relationships.csv")," file.")),(0,r.kt)(i.Z,{value:"rr",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the\n",(0,r.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/restaurants_relationships.csv"},(0,r.kt)("inlineCode",{parentName:"a"},"restaurants_relationships.csv")),"\nfile that contains a list of people and the restaurants they visited:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"PERSON_ID,REST_ID,liked\n100,200,true\n103,201,false\n104,200,true\n101,202,false\n101,203,false\n101,200,true\n102,201,true\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the location of the CSV file. If you are working with Docker, copy the\nfiles from your local directory into the Docker container where Memgraph can\naccess them."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Transfer CSV files into a Docker container"),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance using Docker."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker ps\n")),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"3.")," Copy a file from your current directory to the container with the\ncommand:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv\n")),(0,r.kt)("p",{parentName:"li"},"   The file is now inside your Docker container, and you can import it using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The following query will create relationships between people and restaurants\nwhere they ate:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/path-to/restaurants_relationships.csv" WITH HEADER AS row\nMATCH (p1:Person {id: row.PERSON_ID})\nMATCH (re:Restaurant {id: row.REST_ID})\nCREATE (p1)-[ate:ATE_AT]->(re)\nSET ate.liked = ToBoolean(row.liked);\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"This is how the graph should look like in Memgraph after the import:"),"Run the following query: ",(0,r.kt)("br",null),(0,r.kt)("code",null,"MATCH p=()-[]-() RETURN p;"),(0,r.kt)("p",null),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(89674).Z}))),(0,r.kt)("p",null,"Congratulations! You've imported all the CSV files!"))))}d.isMDXComponent=!0},62144:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load_csv_multiple_nodes_and_relationships-fb6a941e357512d4865b78405589bfdf.png"},70796:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load_csv_one_type_of_nodes_and_relationships-fbca8c662fdc966692d1045f77f52b7f.png"},21609:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load_csv_people_nodes-d95a476705fb116da60c043f9f58c4ee.png"},12486:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load_csv_people_relationships-639ae6445ba349d2a0807cfd198d82b3.png"},67725:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load_csv_restaurant_nodes-6aae93ec85de20379c59b9237e71b6ad.png"},89674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/load_csv_restaurants_relationships-f83085ad2846fe598b19b27eb16698e6.png"}}]);