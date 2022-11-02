"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,c=m["".concat(s,".").concat(u)]||m[u]||h[u]||r;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"csv-import-tool",title:"CSV Import Tool",sidebar_label:"CSV Import Tool"},l=void 0,o={unversionedId:"reference-guide/import-data/csv-import-tool",id:"version-2.3.0/reference-guide/import-data/csv-import-tool",title:"CSV Import Tool",description:"CSV is a universal and very versatile data format used to store large quantities",source:"@site/memgraph_versioned_docs/version-2.3.0/reference-guide/import-data/csv-import-tool.md",sourceDirName:"reference-guide/import-data",slug:"/reference-guide/import-data/csv-import-tool",permalink:"/docs/memgraph/2.3.0/reference-guide/import-data/csv-import-tool",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/reference-guide/import-data/csv-import-tool.md",tags:[],version:"2.3.0",frontMatter:{id:"csv-import-tool",title:"CSV Import Tool",sidebar_label:"CSV Import Tool"},sidebar:"memgraph",previous:{title:"LOAD CSV Cypher clause",permalink:"/docs/memgraph/2.3.0/reference-guide/import-data/load-csv-clause"},next:{title:"Cypher queries (.cypherl format)",permalink:"/docs/memgraph/2.3.0/reference-guide/import-data/cypherl"}},s={},p=[{value:"CSV File Format",id:"csv-file-format",level:3},{value:"Properties",id:"properties",level:3},{value:"Nodes",id:"nodes",level:4},{value:"Relationships",id:"relationships",level:4},{value:"CSV Importer Flags",id:"csv-importer-flags",level:3},{value:"CSV Parser Logic",id:"csv-parser-logic",level:3}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CSV is a universal and very versatile data format used to store large quantities\nof data.  Each Memgraph database instance has a CSV import tool installed called\n",(0,i.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),".  The CSV import tool should be used for initial bulk ingestion\nof data into the database.  Upon ingestion, the CSV importer creates a snapshot\nthat will be used by the database to recover its state on its next startup."),(0,i.kt)("p",null,"If you are already familiar with the Neo4j bulk import tool, then using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," tool should be easy.  The CSV import tool is fully compatible\nwith the ",(0,i.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/operations-manual/current/tools/import/"},"Neo4j CSV\nformat"),". If you\nalready have a pipeline set-up for Neo4j, you should only replace ",(0,i.kt)("inlineCode",{parentName:"p"},"neo4j-admin\nimport")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),"."),(0,i.kt)("h3",{id:"csv-file-format"},"CSV File Format"),(0,i.kt)("p",null,"Each row of a CSV file represents a single entry that should be imported into\nthe database.  Both nodes and relationships can be imported into the database\nusing CSV files."),(0,i.kt)("p",null,"Each set of CSV files must have a header that describes the data that is stored\nin the CSV files. Each field in the CSV header is in the format\n",(0,i.kt)("inlineCode",{parentName:"p"},"<name>[:<type>]")," which identifies the name that should be used for that column\nand the type that should be used for that column. The type is optional and\ndefaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," (see the following chapter)."),(0,i.kt)("p",null,"Each CSV field must be divided using the delimiter and each CSV field can either\nbe quoted or unquoted. When the field is quoted, the first and last character in\nthe field ",(0,i.kt)("em",{parentName:"p"},"must")," be the quote character. If the field isn't quoted, and a quote\ncharacter appears in it, it is treated as a regular character. If a quote\ncharacter appears inside a quoted string then the quote character must be\ndoubled in order to escape it. Line feeds and carriage returns are ignored in\nthe CSV file, also, the file can't contain a NULL character."),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("p",null,"Both nodes and relationships can have properties added to them.  When importing\nproperties, the CSV importer uses the name specified in the header of the\ncorresponding CSV column for the name of the property.  A property is designated\nby specifying one of the following types in the header:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"integer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"long"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"byte"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"short"),": creates an integer property"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"float"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"double"),": creates a float property"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bool"),": creates a boolean property"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"char"),": creates a string property")),(0,i.kt)("p",null,"When importing a boolean value, the CSV field should contain exactly the text\n",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to import a ",(0,i.kt)("inlineCode",{parentName:"p"},"True")," boolean value.  All other text values are treated as a\nboolean value ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,i.kt)("p",null,"If you want to import an array of values, you can do so by appending ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," to any\nof the above types.  The values of the array are then determined by splitting\nthe raw CSV value using the array delimiter character."),(0,i.kt)("p",null,"Assuming that the array delimiter is ",(0,i.kt)("inlineCode",{parentName:"p"},";"),", the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"first_name,last_name:string,number:integer,aliases:string[]\nJohn,Doe,1,Johnny;Jo;J-man\nMelissa,Doe,2,Mel\n")),(0,i.kt)("p",null,"Will yield these results:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},'CREATE ({first_name: "John", last_name: "Doe", number: 1, aliases: ["Johnny", "Jo", "J-man"]});\nCREATE ({first_name: "Melissa", last_name: "Doe", number: 2, aliases: ["Mel"]});\n')),(0,i.kt)("h4",{id:"nodes"},"Nodes"),(0,i.kt)("p",null,"When importing nodes, several more types can be specified in the header of the\nCSV file (along with all property types):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ID"),": id of the node that should be used as the node ID when importing\nrelationships"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LABEL"),": designates that the field contains additional labels for the node"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IGNORE"),": designates that the field should be ignored")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," field type sets the internal ID that will be used for the node when\ncreating relationships.  It is optional and nodes that don't have an ID value\nspecified will be imported, but can't be connected to any relationships.  If you\nwant to save the ID value as a property in the database, just specify a name for\nthe ID (",(0,i.kt)("inlineCode",{parentName:"p"},"user_id:ID"),").  If you just want to use the ID during the import, leave\nout the name of the field (",(0,i.kt)("inlineCode",{parentName:"p"},":ID"),").  The ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," field also supports creating\nseparate ID spaces.  The ID space is specified with the ID space name appended\nto the ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," type in parentheses (",(0,i.kt)("inlineCode",{parentName:"p"},"ID(user)"),").  That allows you to have the same\nIDs (by value) for multiple different node files (for example, numbers from 1 to\nN).  The IDs in each ID space will be treated as an independent set of IDs that\ndon't interfere with IDs in another ID space."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"LABEL")," field type adds additional labels to the node.  The value is treated\nas an array type so that multiple additional labels can be specified for each\nnode.  The value is split using the array delimiter (",(0,i.kt)("inlineCode",{parentName:"p"},"--array-delimiter")," flag)."),(0,i.kt)("h4",{id:"relationships"},"Relationships"),(0,i.kt)("p",null,"In order to be able to import relationships, you must import the nodes in the\nsame invocation of ",(0,i.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," that is used to import the relationships."),(0,i.kt)("p",null,"When importing relationships, several more types can be specified in the header\nof the CSV file (along with all property types):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"START_ID"),": id of the start node that should be connected with the\nrelationship"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"END_ID"),": id of the end node that should be connected with the relationship"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TYPE"),": designates the type of the relationship"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IGNORE"),": designates that the field should be ignored")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"START_ID")," field type sets the start node that should be connected with the\nrelationship to the end node.  The field ",(0,i.kt)("em",{parentName:"p"},"must")," be specified and the node ID\nmust be one of the node IDs that were specified in the node CSV files.  The name\nof this field is ignored.  If the node ID is in an ID space, you can specify the\nID space for the in the same way as for the node ID (",(0,i.kt)("inlineCode",{parentName:"p"},"START_ID(user)"),")."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"END_ID")," field type sets the end node that should be connected with the\nrelationship to the start node.  The field ",(0,i.kt)("em",{parentName:"p"},"must")," be specified and the node ID\nmust be one of the node IDs that were specified in the node CSV files.  The name\nof this field is ignored.  If the node ID is in an ID space, you can specify the\nID space for the in the same way as for the node ID (",(0,i.kt)("inlineCode",{parentName:"p"},"END_ID(user)"),")."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TYPE")," field type sets the type of the relationship.  Each relationship\n",(0,i.kt)("em",{parentName:"p"},"must")," have a relationship type, but it doesn't necessarily need to be specified\nin the CSV file, it can also be set externally for the whole CSV file.  The name\nof this field is ignored."),(0,i.kt)("h3",{id:"csv-importer-flags"},"CSV Importer Flags"),(0,i.kt)("p",null,"The importer has many command line options that allow you to customize the way\nthe importer loads your data."),(0,i.kt)("p",null,"The two main flags that are used to specify the input CSV files are ",(0,i.kt)("inlineCode",{parentName:"p"},"--nodes"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"--relationships"),". Basic description of these flags is provided in the table\nand more detailed explainion can be found further down bellow."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Flag"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--nodes")),(0,i.kt)("td",{parentName:"tr",align:null},"Used to specify CSV files that contain the nodes to the importer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--relationships")),(0,i.kt)("td",{parentName:"tr",align:null},"Used to specify CSV files that contain the relationships to the importer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--delimiter")),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the delimiter that should be used when splitting the CSV fields (default ",(0,i.kt)("inlineCode",{parentName:"td"},","),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--quote")),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the quote character that should be used to quote a CSV field (default ",(0,i.kt)("inlineCode",{parentName:"td"},'"'),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--array-delimiter")),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the delimiter that should be used when splitting array values (default ",(0,i.kt)("inlineCode",{parentName:"td"},";"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--id-type")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies which data type should be used to store the supplied ",(0,i.kt)("br",null)," node IDs when storing them as properties (if the field name is supplied). ",(0,i.kt)("br",null)," The supported values are either ",(0,i.kt)("inlineCode",{parentName:"td"},"STRING")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"INTEGER"),". (default ",(0,i.kt)("inlineCode",{parentName:"td"},"STRING"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--ignore-empty-strings")),(0,i.kt)("td",{parentName:"tr",align:null},"Instructs the importer to treat all empty strings as ",(0,i.kt)("inlineCode",{parentName:"td"},"Null")," values  ",(0,i.kt)("br",null)," instead of an empty string value (default ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--ignore-extra-columns")),(0,i.kt)("td",{parentName:"tr",align:null},"Instructs the importer to ignore all columns (instead of raising an error) ",(0,i.kt)("br",null)," that aren't specified after the last specified column in the CSV header. (default ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--skip-bad-relationships")),(0,i.kt)("td",{parentName:"tr",align:null},"Instructs the importer to ignore all relationships (instead of raising an error) ",(0,i.kt)("br",null)," that refer to nodes that don't exist in the node files. (default ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--skip-duplicate-nodes")),(0,i.kt)("td",{parentName:"tr",align:null},"Instructs the importer to ignore all duplicate nodes (instead of raising an error).  ",(0,i.kt)("br",null)," Duplicate nodes are nodes that have an ID that is the same as another node that was already imported. (default ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--trim-strings")),(0,i.kt)("td",{parentName:"tr",align:null},"Instructs the importer to trim all of the loaded CSV field values before processing them further. ",(0,i.kt)("br",null)," Trimming the fields removes all leading and trailing whitespace from them. (default ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),")")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--nodes")," and  ",(0,i.kt)("inlineCode",{parentName:"p"},"--relationships")," flags are used to specify CSV files that\ncontain the nodes and relationships to the importer.  Multiple files can be\nspecified in each supplied ",(0,i.kt)("inlineCode",{parentName:"p"},"--nodes")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--relationships")," flag. Files that are\nsupplied in one ",(0,i.kt)("inlineCode",{parentName:"p"},"--nodes")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--relationships")," flag are treated by the CSV\nparser as one big CSV file.  Only the first line of the first file is parsed for\nthe CSV header, all other files (and rows) are treated as data.  This is useful\nwhen you have a very large CSV file and don't want to edit its first line just\nto add a CSV header.  Instead, you can specify the header in a separate file\n(e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"users_header.csv")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"friendships_header.csv"),") and have the data intact\nin the large file (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"users.csv")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"friendships.csv"),").  Also, you can supply\nadditional labels for each set of node files."),(0,i.kt)("p",null,"The format of ",(0,i.kt)("inlineCode",{parentName:"p"},"--nodes")," flag is:\n",(0,i.kt)("inlineCode",{parentName:"p"},"[<label>[:<label>]...=]<file>[,<file>][,<file>]..."),".  Take note that only the\nfirst ",(0,i.kt)("inlineCode",{parentName:"p"},"<file>")," part is mandatory, all other parts of the flag value are\noptional. Multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"--nodes")," flags can be supplied to describe multiple sets of\ndifferent node files.  For the importer to work, at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"--nodes")," flag\n",(0,i.kt)("em",{parentName:"p"},"must")," be supplied."),(0,i.kt)("p",null,"The format of ",(0,i.kt)("inlineCode",{parentName:"p"},"--relationships")," flag is: ",(0,i.kt)("inlineCode",{parentName:"p"},"[<type>=]<file>[,<file>][,<file>]..."),".\nTake note that only the first ",(0,i.kt)("inlineCode",{parentName:"p"},"<file>")," part is mandatory, all other parts of the\nflag value are optional.  Multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"--relationships")," flags can be supplied to\ndescribe multiple sets of different relationship files.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"--relationships"),"\nflag isn't mandatory."),(0,i.kt)("h3",{id:"csv-parser-logic"},"CSV Parser Logic"),(0,i.kt)("p",null,"The CSV parser uses the same logic as the standard Python CSV parser.  The data\nis parsed in the same way as the following snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import csv\nfor row in csv.reader(stream, strict=True):\n    # process 'row'\n")),(0,i.kt)("p",null,"Python uses 'excel' as the default dialect when parsing CSV files and the\ndefault settings for the CSV parser are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"delimiter: ",(0,i.kt)("inlineCode",{parentName:"li"},"','")),(0,i.kt)("li",{parentName:"ul"},"doublequote: ",(0,i.kt)("inlineCode",{parentName:"li"},"True")),(0,i.kt)("li",{parentName:"ul"},"escapechar: ",(0,i.kt)("inlineCode",{parentName:"li"},"None")),(0,i.kt)("li",{parentName:"ul"},"lineterminator: ",(0,i.kt)("inlineCode",{parentName:"li"},"'\\r\\n'")),(0,i.kt)("li",{parentName:"ul"},"quotechar: ",(0,i.kt)("inlineCode",{parentName:"li"},"'\"'")),(0,i.kt)("li",{parentName:"ul"},"skipinitialspace: ",(0,i.kt)("inlineCode",{parentName:"li"},"False"))),(0,i.kt)("p",null,"The above snippet can be expanded to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import csv\nfor row in csv.reader(stream, delimiter=',', doublequote=True,\n                      escapechar=None, lineterminator='\\r\\n',\n                      quotechar='\"', skipinitialspace=False,\n                      strict=True):\n    # process 'row'\n")),(0,i.kt)("p",null,"For more information about the meaning of the above values, see:\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/csv.html#csv.Dialect"},"https://docs.python.org/3/library/csv.html#csv.Dialect")))}h.isMDXComponent=!0}}]);