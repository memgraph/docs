"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40866],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"load-csv-clause",title:"LOAD CSV Cypher clause",sidebar_label:"LOAD CSV Cypher clause"},s=void 0,p={unversionedId:"reference-guide/import-data/load-csv-clause",id:"version-2.3.1/reference-guide/import-data/load-csv-clause",title:"LOAD CSV Cypher clause",description:"The LOAD CSV clause enables you to load and use data from a CSV file of your",source:"@site/memgraph_versioned_docs/version-2.3.1/reference-guide/import-data/load-csv-clause.md",sourceDirName:"reference-guide/import-data",slug:"/reference-guide/import-data/load-csv-clause",permalink:"/docs/memgraph/reference-guide/import-data/load-csv-clause",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/reference-guide/import-data/load-csv-clause.md",tags:[],version:"2.3.1",frontMatter:{id:"load-csv-clause",title:"LOAD CSV Cypher clause",sidebar_label:"LOAD CSV Cypher clause"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/reference-guide/import-data/overview"},next:{title:"Cypher queries (.cypherl format)",permalink:"/docs/memgraph/reference-guide/import-data/cypherl"}},u={},c=[{value:"Header options",id:"header-options",level:3},{value:"Notes about the clause",id:"notes-about-the-clause",level:3}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause enables you to load and use data from a CSV file of your\nchoosing in a row-based manner, within a query. We support the Excel CSV\ndialect, as it's the most commonly used one. "),(0,o.kt)("p",null,"The syntax of the clause is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"LOAD CSV FROM <csv-file-path> ( WITH | NO ) HEADER [IGNORE BAD] [DELIMITER <delimiter-string>] [QUOTE <quote-string>] AS <variable-name>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<csv-file-path>")," is a string holding the path to the CSV file. There are no\nrestrictions on where in your filesystem the file can be located, as long as\nthe path is valid (i.e., the file exists).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"( WITH | NO ) HEADER ")," flag specifies whether the CSV file is to be parsed as\nthough it has or hasn't got a header.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"IGNORE BAD")," flag specifies whether rows containing errors should be ignored\nor not. If it's set, the parser attempts to return the first valid row from\nthe CSV file. If it isn't set, an exception will be thrown on the first\ninvalid row encountered.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DELIMITER <delimiter-string>")," option enables you to specify the CSV delimiter\ncharacter. If it isn't set, the default delimiter character ",(0,o.kt)("inlineCode",{parentName:"p"},",")," is assumed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"QUOTE <quote-string>")," option enables you to specify the CSV quote character.\nIf it isn't set, the default quote character ",(0,o.kt)("inlineCode",{parentName:"p"},'"')," is assumed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<variable-name>")," is a symbolic name representing the variable to which the\ncontents of the parsed row will be bound to, enabling access to the row\ncontents later in the query."))),(0,o.kt)("p",null,"The clause reads row by row from a CSV file and binds the contents of the parsed\nrow to the variable you specified."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's important to note that the parser parses the values as strings. It's up to\nthe user to convert the parsed row values to the appropriate type. This can be\ndone using the built-in conversion functions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ToInteger"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ToFloat"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"ToBoolean")," etc. Consult the documentation on the available conversion\nfunctions."))),(0,o.kt)("h3",{id:"header-options"},"Header options"),(0,o.kt)("p",null,"Depending on how you set the ",(0,o.kt)("inlineCode",{parentName:"p"},"HEADER")," option (",(0,o.kt)("inlineCode",{parentName:"p"},"WITH")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"NO"),"), a row will be\nparsed as either a map or a list."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"WITH HEADER")," option is set, the very first line in the file will be\nparsed as the header, and any remaining rows will be parsed as regular rows. The\nvalue bound to the row variable will be a map of the form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'{ ( "header_field" : "row_value" )? ( , "header_field" : "row_value" )* }\n')),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"NO HEADER")," option is set, then each row is parsed as a list of values.\nThe contents of the row can be accessed using the list index syntax. Note that\nin this mode, there are no restrictions on the number of values a row contains.\nThis isn't recommended, as the user must manually handle the varying number of\nvalues in a row."),(0,o.kt)("h3",{id:"notes-about-the-clause"},"Notes about the clause"),(0,o.kt)("p",null,"The clause can't stand on its own, meaning there has to be at least one more\nclause in the query, in addition to it. In other words, the following query will\nthrow an exception:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "file.csv" WITH HEADER AS row;\n')),(0,o.kt)("p",null,"On the other hand, the following query is valid:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MERGE (n:A) LOAD CSV FROM "file.csv" WITH HEADER AS row;\n')),(0,o.kt)("p",null,"Note that the row variable doesn't have to be used in any subsequent clause."),(0,o.kt)("p",null,"Also, it's important to note how the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," result exhaustion works. Let's\nassume the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)\nLOAD CSV FROM "file.csv" WITH HEADER as row\nSET n.p = row;\n')),(0,o.kt)("p",null,"Let's say the ",(0,o.kt)("inlineCode",{parentName:"p"},"MATCH (n)"),' clause finds five nodes, whereas the "file.csv" has\nonly 2 rows. Then only the first two nodes returned by the ',(0,o.kt)("inlineCode",{parentName:"p"},"MATCH (n)")," will have\ntheir properties set, using the two rows from the file. Similarly, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"MATCH\n(n)"),' clause finds two nodes, whereas the "file.csv" has five rows, the two nodes\nreturned by ',(0,o.kt)("inlineCode",{parentName:"p"},"MATCH (n)"),' will have their properties set with values from the\nfirst two rows of the file. In general, the clause that exhausts its results\nsooner will dictate how many times the "loop" will be executed.'),(0,o.kt)("p",null,"Finally, note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause can be used at most once per query.\nTrying to use multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clauses within a single query will throw an\nexception. In other words, queries such as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "x.csv" WITH HEADER as x\nLOAD CSV FROM "y.csv" WITH HEADER as y\nCREATE (n:A {p1 : x, p2 : y});\n')),(0,o.kt)("p",null,"are invalid."))}h.isMDXComponent=!0}}]);