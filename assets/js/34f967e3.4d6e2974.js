"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35036],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,c=m["".concat(s,".").concat(u)]||m[u]||h[u]||r;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31213:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"import-data",title:"Import data",sidebar_label:"Import data"},s=void 0,p={unversionedId:"database-functionalities/import-data",id:"version-1.4.0/database-functionalities/import-data",isDocsHomePage:!1,title:"Import data",description:"Memgraph comes with tools for importing data into the database. Data can be",source:"@site/memgraph_versioned_docs/version-1.4.0/database-functionalities/import-data.md",sourceDirName:"database-functionalities",slug:"/database-functionalities/import-data",permalink:"/memgraph/1.4.0/database-functionalities/import-data",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/database-functionalities/import-data.md",version:"1.4.0",frontMatter:{id:"import-data",title:"Import data",sidebar_label:"Import data"},sidebar:"version-1.4.0/memgraph",previous:{title:"Database functionalities overview",permalink:"/memgraph/1.4.0/database-functionalities"},next:{title:"Inspecting queries",permalink:"/memgraph/1.4.0/database-functionalities/inspecting-queries"}},d=[{value:"CSV Import Tool",id:"csv-import-tool",children:[{value:"CSV File Format",id:"csv-file-format",children:[]},{value:"CSV Importer Flags",id:"csv-importer-flags",children:[]},{value:"How to Use the CSV Import Tool?",id:"how-to-use-the-csv-import-tool",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Importing Cypher queries",id:"importing-cypher-queries",children:[]},{value:"Using the <code>LOAD CSV</code> Cypher clause",id:"using-the-load-csv-cypher-clause",children:[]}],h={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Memgraph comes with tools for importing data into the database. Data can be\nimported programatically using the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," Cypher clause, using the ",(0,r.kt)("a",{parentName:"p",href:"#csv-import-tool"},"CSV import tool"),",\nor using saved ",(0,r.kt)("a",{parentName:"p",href:"#importing-cypher-queries"},"cypher queries")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_client")," running\nin non-interactive mode."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_client")," is a deprecated tool still coming within the Memgraph package.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole"},"mgconsole")," will replace ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_client")," in\nthe future. If possible, please use ",(0,r.kt)("inlineCode",{parentName:"p"},"mgconsole")," instead."))),(0,r.kt)("h2",{id:"csv-import-tool"},"CSV Import Tool"),(0,r.kt)("p",null,"CSV is a universal and very versatile data format used to store large\nquantities of data.  Each Memgraph database instance has a CSV import tool\ninstalled called ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),".  The CSV import tool should be used for\ninitial bulk ingestion of data into the database.  Upon ingestion, the CSV\nimporter creates a snapshot that will be used by the database to recover its\nstate on its next startup."),(0,r.kt)("p",null,"If you are already familiar with the Neo4j bulk import tool, then using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," tool should be easy.  The CSV import tool is fully compatible\nwith the ",(0,r.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/operations-manual/current/tools/import/"},"Neo4j CSV\nformat"),".  If\nyou already have a pipeline set-up for Neo4j, you should only replace\n",(0,r.kt)("inlineCode",{parentName:"p"},"neo4j-admin import")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),"."),(0,r.kt)("h3",{id:"csv-file-format"},"CSV File Format"),(0,r.kt)("p",null,"Each row of a CSV file represents a single entry that should be imported into\nthe database.  Both nodes and relationships can be imported into the database\nusing CSV files."),(0,r.kt)("p",null,"Each set of CSV files must have a header that describes the data that is stored\nin the CSV files.  Each field in the CSV header is in the format\n",(0,r.kt)("inlineCode",{parentName:"p"},"<name>[:<type>]")," which identifies the name that should be used for that column\nand the type that should be used for that column.  The type is optional and\ndefaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," (see the following chapter)."),(0,r.kt)("p",null,"Each CSV field must be divided using the delimiter (",(0,r.kt)("inlineCode",{parentName:"p"},"--delimiter")," flag) and\neach CSV field can either be quoted or unquoted.  When the field is quoted, the\nfirst and last character in the field ",(0,r.kt)("em",{parentName:"p"},"must")," be the quote character (",(0,r.kt)("inlineCode",{parentName:"p"},"--quote"),"\nflag).  If the field isn't quoted, and a quote character appears in it, it is\ntreated as a regular character.  If a quote character appears inside a quoted\nstring then the quote character must be doubled in order to escape it.  Line\nfeeds and carriage returns are ignored in the CSV file, also, the file can't\ncontain a NULL character."),(0,r.kt)("p",null,"The CSV parser uses the same logic as the standard Python CSV parser.  The data\nis parsed in the same way as the following snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import csv\nfor row in csv.reader(stream, strict=True):\n    # process 'row'\n")),(0,r.kt)("p",null,"Python uses 'excel' as the default dialect when parsing CSV files and the\ndefault settings for the CSV parser are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"delimiter: ",(0,r.kt)("inlineCode",{parentName:"li"},"','")),(0,r.kt)("li",{parentName:"ul"},"doublequote: ",(0,r.kt)("inlineCode",{parentName:"li"},"True")),(0,r.kt)("li",{parentName:"ul"},"escapechar: ",(0,r.kt)("inlineCode",{parentName:"li"},"None")),(0,r.kt)("li",{parentName:"ul"},"lineterminator: ",(0,r.kt)("inlineCode",{parentName:"li"},"'\\r\\n'")),(0,r.kt)("li",{parentName:"ul"},"quotechar: ",(0,r.kt)("inlineCode",{parentName:"li"},"'\"'")),(0,r.kt)("li",{parentName:"ul"},"skipinitialspace: ",(0,r.kt)("inlineCode",{parentName:"li"},"False"))),(0,r.kt)("p",null,"The above snippet can be expanded to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import csv\nfor row in csv.reader(stream, delimiter=',', doublequote=True,\n                      escapechar=None, lineterminator='\\r\\n',\n                      quotechar='\"', skipinitialspace=False,\n                      strict=True):\n    # process 'row'\n")),(0,r.kt)("p",null,"For more information about the meaning of the above values, see:\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/csv.html#csv.Dialect"},"https://docs.python.org/3/library/csv.html#csv.Dialect")),(0,r.kt)("h4",{id:"properties"},"Properties"),(0,r.kt)("p",null,"Both nodes and relationships can have properties added to them.  When importing\nproperties, the CSV importer uses the name specified in the header of the\ncorresponding CSV column for the name of the property.  A property is\ndesignated by specifying one of the following types in the header:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"integer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"long"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"byte"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"short"),": creates an integer property"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"float"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"double"),": creates a float property"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bool"),": creates a boolean property"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"char"),": creates a string property")),(0,r.kt)("p",null,"When importing a boolean value, the CSV field should contain exactly the text\n",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to import a ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," boolean value.  All other text values are treated as\na boolean value ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,r.kt)("p",null,"If you want to import an array of values, you can do so by appending ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," to\nany of the above types.  The values of the array are then determined by\nsplitting the raw CSV value using the array delimiter (",(0,r.kt)("inlineCode",{parentName:"p"},"--array-delimiter"),"\nflag) character."),(0,r.kt)("p",null,"Assuming that the array delimiter is ",(0,r.kt)("inlineCode",{parentName:"p"},";"),", the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"first_name,last_name:string,number:integer,aliases:string[]\nJohn,Doe,1,Johnny;Jo;J-man\nMelissa,Doe,2,Mel\n")),(0,r.kt)("p",null,"Will yield these results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'CREATE ({first_name: "John", last_name: "Doe", number: 1, aliases: ["Johnny", "Jo", "J-man"]});\nCREATE ({first_name: "Melissa", last_name: "Doe", number: 2, aliases: ["Mel"]});\n')),(0,r.kt)("h4",{id:"nodes"},"Nodes"),(0,r.kt)("p",null,"When importing nodes, several more types can be specified in the header of the\nCSV file (along with all property types):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ID"),": id of the node that should be used as the node ID when importing relationships"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LABEL"),": designates that the field contains additional labels for the node"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IGNORE"),": designates that the field should be ignored")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," field type sets the internal ID that will be used for the node when\ncreating relationships.  It is optional and nodes that don't have an ID value\nspecified will be imported, but can't be connected to any relationships.  If\nyou want to save the ID value as a property in the database, just specify a\nname for the ID (",(0,r.kt)("inlineCode",{parentName:"p"},"user_id:ID"),").  If you just want to use the ID during the\nimport, leave out the name of the field (",(0,r.kt)("inlineCode",{parentName:"p"},":ID"),").  The ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," field also supports\ncreating separate ID spaces.  The ID space is specified with the ID space name\nappended to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," type in parentheses (",(0,r.kt)("inlineCode",{parentName:"p"},"ID(user)"),").  That allows you to have\nthe same IDs (by value) for multiple different node files (for example, numbers\nfrom 1 to N).  The IDs in each ID space will be treated as an independent set\nof IDs that don't interfere with IDs in another ID space."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LABEL")," field type adds additional labels to the node.  The value is\ntreated as an array type so that multiple additional labels can be specified\nfor each node.  The value is split using the array delimiter\n(",(0,r.kt)("inlineCode",{parentName:"p"},"--array-delimiter")," flag)."),(0,r.kt)("h4",{id:"relationships"},"Relationships"),(0,r.kt)("p",null,"In order to be able to import relationships, you must import the nodes in the\nsame invocation of ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," that is used to import the relationships."),(0,r.kt)("p",null,"When importing relationships, several more types can be specified in the header\nof the CSV file (along with all property types):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"START_ID"),": id of the start node that should be connected with the relationship"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"END_ID"),": id of the end node that should be connected with the relationship"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TYPE"),": designates the type of the relationship"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IGNORE"),": designates that the field should be ignored")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"START_ID")," field type sets the start node that should be connected with the\nrelationship to the end node.  The field ",(0,r.kt)("em",{parentName:"p"},"must")," be specified and the node ID\nmust be one of the node IDs that were specified in the node CSV files.  The\nname of this field is ignored.  If the node ID is in an ID space, you can\nspecify the ID space for the in the same way as for the node ID\n(",(0,r.kt)("inlineCode",{parentName:"p"},"START_ID(user)"),")."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"END_ID")," field type sets the end node that should be connected with the\nrelationship to the start node.  The field ",(0,r.kt)("em",{parentName:"p"},"must")," be specified and the node ID\nmust be one of the node IDs that were specified in the node CSV files.  The\nname of this field is ignored.  If the node ID is in an ID space, you can\nspecify the ID space for the in the same way as for the node ID\n(",(0,r.kt)("inlineCode",{parentName:"p"},"END_ID(user)"),")."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TYPE")," field type sets the type of the relationship.  Each relationship\n",(0,r.kt)("em",{parentName:"p"},"must")," have a relationship type, but it doesn't necessarily need to be\nspecified in the CSV file, it can also be set externally for the whole CSV\nfile.  The name of this field is ignored."),(0,r.kt)("h3",{id:"csv-importer-flags"},"CSV Importer Flags"),(0,r.kt)("p",null,"The importer has many command line options that allow you to customize the way\nthe importer loads your data."),(0,r.kt)("p",null,"The two main flags that are used to specify the input CSV files are ",(0,r.kt)("inlineCode",{parentName:"p"},"--nodes"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"--relationships"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--nodes")," flag is used to specify CSV files that contain the nodes to the\nimporter.  Multiple files can be specified in each supplied ",(0,r.kt)("inlineCode",{parentName:"p"},"--nodes")," flag.\nFiles that are supplied in one ",(0,r.kt)("inlineCode",{parentName:"p"},"--nodes")," flag are treated by the CSV parser as\none big CSV file.  Only the first line of the first file is parsed for the CSV\nheader, all other files (and rows) are treated as data.  This is useful when\nyou have a very large CSV file and don't want to edit its first line just to\nadd a CSV header.  Instead, you can specify the header in a separate file (e.g.\n",(0,r.kt)("inlineCode",{parentName:"p"},"users_header.csv"),") and have the data intact in the large file (e.g.\n",(0,r.kt)("inlineCode",{parentName:"p"},"users.csv"),").  Also, you can supply additional labels for each set of node\nfiles.  The format of this flag is:\n",(0,r.kt)("inlineCode",{parentName:"p"},"[<label>[:<label>]...=]<file>[,<file>][,<file>]..."),".  Take note that only the\n",(0,r.kt)("inlineCode",{parentName:"p"},"<file>")," part is mandatory, all other parts of the flag value are optional.\nMultiple ",(0,r.kt)("inlineCode",{parentName:"p"},"--nodes")," flags can be supplied to describe multiple sets of different\nnode files.  For the importer to work, at least one ",(0,r.kt)("inlineCode",{parentName:"p"},"--nodes")," flag must be\nsupplied."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--relationships")," flag is used to specify CSV files that contain the\nrelationships to the importer.  Multiple files can be specified in each\nsupplied ",(0,r.kt)("inlineCode",{parentName:"p"},"--relationships")," flag.  Files that are supplied in one\n",(0,r.kt)("inlineCode",{parentName:"p"},"--relationships")," flag are treated by the CSV parser as one big CSV file.  Only\nthe first line of the first file is parsed for the CSV header, all other files\n(and rows) are treated as data.  This is useful when you have a very large CSV\nfile and don't want to edit its first line just to add a CSV header.  Instead,\nyou can specify the header in a separate file (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"friendships_header.csv"),")\nand have the data intact in the large file (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"friendships.csv"),").  Also, you\ncan set the type of all relationships in the files for each set of\nrelationships files.  The format of this flag is:\n",(0,r.kt)("inlineCode",{parentName:"p"},"[<type>=]<file>[,<file>][,<file>]..."),".  Take note that only the ",(0,r.kt)("inlineCode",{parentName:"p"},"<file>")," part\nis mandatory, all other parts of the flag value are optional.  Multiple\n",(0,r.kt)("inlineCode",{parentName:"p"},"--relationships")," flags can be supplied to describe multiple sets of different\nrelationship files.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"--relationships")," flag isn't mandatory."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--delimiter")," flag (default ",(0,r.kt)("inlineCode",{parentName:"p"},","),") sets the delimiter that should be used\nwhen splitting the CSV fields."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--quote")," flag (default ",(0,r.kt)("inlineCode",{parentName:"p"},'"'),") sets the quote character that should be used\nto quote a CSV field."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--array-delimiter")," flag (default ",(0,r.kt)("inlineCode",{parentName:"p"},";"),") sets the delimiter that should be\nused when splitting array values."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--id-type")," flag (default ",(0,r.kt)("inlineCode",{parentName:"p"},"STRING"),") specifies which data type should be\nused to store the supplied node IDs when storing them as properties (if the\nfield name is supplied).  The supported values are either ",(0,r.kt)("inlineCode",{parentName:"p"},"STRING")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"INTEGER"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-empty-strings")," flag (default ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),") tells the importer to treat\nall empty strings as ",(0,r.kt)("inlineCode",{parentName:"p"},"Null")," values instead of an empty string value."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-extra-columns")," flag (default ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),") tells the importer to\nignore all columns (instead of raising an error) that aren't specified after\nthe last specified column in the CSV header."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--skip-bad-relationships")," flag (default ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),") tells the importer to\nignore all relationships (instead of raising an error) that refer to nodes that\ndon't exist in the node files."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--skip-duplicate-nodes")," flag (default ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),") tells the importer to\nignore all duplicate nodes (instead of raising an error).  Duplicate nodes are\nnodes that have an ID that is the same as another node that was already\nimported."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--trim-strings")," flag (default ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),") tells the importer to trim all of\nthe loaded CSV field values before processing them further.  Trimming the\nfields removes all leading and trailing whitespace from them."),(0,r.kt)("h3",{id:"how-to-use-the-csv-import-tool"},"How to Use the CSV Import Tool?"),(0,r.kt)("p",null,"The import tool is run from the console, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," command.\nThe tool should be run as user ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph"),", using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo -u memgraph mg_import_csv\n")),(0,r.kt)("p",null,"If you installed Memgraph using Docker, you will need to run the importer\nusing the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph\n")),(0,r.kt)("p",null,"You can pass CSV files containing node data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--nodes")," option.\nMultiple files can be specified by repeating the ",(0,r.kt)("inlineCode",{parentName:"p"},"--nodes")," option.  At least\none node file should be specified. Similarly, graph edges (also known as\nrelationships) are passed via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--relationships")," option.  Multiple\nrelationship files are imported by repeating the option. Unlike nodes,\nrelationships are not required."),(0,r.kt)("p",null,"Internally, the CSV import tool creates a database snapshot from the CSV files.\nBy default, the tool will search for the installed Memgraph configuration and\nwill store the snapshot inside its configured data directory using the\nconfigured properties on edges setting. If the configuration isn't found, you\nwill need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--data-directory")," option to specify the data directory\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"--storage-properties-on-edges")," to specify whether properties on edges are\nenabled. Naturally, you can use the same options to override the default\nbehavior. Memgraph will recover the imported data on the next startup by\nlooking in the data directory. For more details on Memgraph's durability and\ndata recovery features, please check out the appropriate\n",(0,r.kt)("a",{parentName:"p",href:"/memgraph/1.4.0/concepts/storage"},"article"),"."),(0,r.kt)("p",null,"It is also important to note that importing CSV data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),"\ncommand should be a one-time operation before running Memgraph. In other\nwords, this tool should not be used to import data into an already running\nMemgraph instance."),(0,r.kt)("p",null,"For information on other options, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --help\n")),(0,r.kt)("p",null,"When using Docker, this translates to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --entrypoint=mg_import_csv memgraph --help\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's import a simple dataset."),(0,r.kt)("p",null,"Store the following in ",(0,r.kt)("inlineCode",{parentName:"p"},"comment_nodes.csv"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(COMMENT_ID),country:string,browser:string,content:string,:LABEL\n0,Croatia,Chrome,yes,Message;Comment\n1,United Kingdom,Chrome,thanks,Message;Comment\n2,Germany,,LOL,Message;Comment\n3,France,Firefox,I see,Message;Comment\n4,Italy,Internet Explorer,fine,Message;Comment\n")),(0,r.kt)("p",null,"Now, let's add ",(0,r.kt)("inlineCode",{parentName:"p"},"forum_nodes.csv"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(FORUM_ID),title:string,:LABEL\n0,General,Forum\n1,Support,Forum\n2,Music,Forum\n3,Film,Forum\n4,Programming,Forum\n")),(0,r.kt)("p",null,"And finally, set relationships between comments and forums in\n",(0,r.kt)("inlineCode",{parentName:"p"},"relationships.csv"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(COMMENT_ID),:END_ID(FORUM_ID),:TYPE\n0,0,POSTED_ON\n1,1,POSTED_ON\n2,2,POSTED_ON\n3,3,POSTED_ON\n4,4,POSTED_ON\n")),(0,r.kt)("p",null,"Now, you can import the dataset using the CSV importer tool."),(0,r.kt)("p",null,"WARNING: Your existing snapshot and WAL data will be considered obsolete, and\nMemgraph will load the new dataset."),(0,r.kt)("p",null,"Use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --nodes comment_nodes.csv --nodes forum_nodes.csv --relationships relationships.csv\n")),(0,r.kt)("p",null,"If using Docker, things are a bit more complicated. First you need to copy the\nCSV files where the Docker image can see them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker container create --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp comment_nodes.csv mg_import_helper:/import-data\ndocker cp forum_nodes.csv mg_import_helper:/import-data\ndocker cp relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),(0,r.kt)("p",null,"Then, run the importer with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph \\\n  --nodes /import-data/comment_nodes.csv --nodes /import-data/forum_nodes.csv \\\n  --relationships /import-data/relationships.csv\n")),(0,r.kt)("p",null,"Next time you run Memgraph, the dataset will be loaded."),(0,r.kt)("h2",{id:"importing-cypher-queries"},"Importing Cypher queries"),(0,r.kt)("p",null,"When Memgraph is running, cypher queries are imported by running ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_client")," in\nnon-interactive mode. The user can import queries saved in e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"queries.txt"),"\nby issuing the following shell command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"mg_client --use-ssl=False < queries.txt\n")),(0,r.kt)("p",null,"If you installed Memgraph using Docker, you will need to run the client using\nthe following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker run -i --entrypoint=mg_client memgraph --host HOST --use-ssl=False < queries.txt\n")),(0,r.kt)("p",null,"Remember to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"HOST")," with valid IP of the container (see\n",(0,r.kt)("a",{parentName:"p",href:"/memgraph/1.4.0/how-to-work-with-docker#docker-container-ip-address"},"Note for Docker users"),")."),(0,r.kt)("p",null,"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_client")," options run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"mg_client --help\n")),(0,r.kt)("h2",{id:"using-the-load-csv-cypher-clause"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"LOAD CSV")," Cypher clause"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause enables you to load and use data from a CSV file of your\nchoosing in a row-based manner, within a query. We support the Excel CSV dialect,\nas it's the most commonly used one."),(0,r.kt)("p",null,"The syntax of the clause is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"LOAD CSV FROM <csv-file-path> ( WITH | NO ) HEADER [IGNORE BAD] [DELIMITER <delimiter-string>] [QUOTE <quote-string>] AS <variable-name>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<csv-file-path")," is a string holding the path to the CSV file. There are no\nrestrictions on where in your filesystem the file can be located, as long as\nthe path is valid (i.e. the file exists).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"( WITH | NO ) HEADER ")," flag specifies whether the CSV file is to be\nparsed as though it has or hasn't got a header.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"IGNORE BAD")," flag specifies whether rows containing errors should be ignored or\nnot. If it's set, the parser attempts to return the first valid row from the CSV\nfile. If it isn't set, an exception will be thrown on first invalid row\nencountered.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DELIMITER <delimiter-string>")," option enables you to specify the CSV delimiter\ncharacter. If it isn't set, the default delimiter character ",(0,r.kt)("inlineCode",{parentName:"p"},",")," is assumed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"QUOTE <quote-string>")," option enables you to specify the CSV quote character.\nIf it isn't set, the default quote character ",(0,r.kt)("inlineCode",{parentName:"p"},'"')," is assumed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<variable-name>")," is a symbolic name representing the variable to which the\ncontents of the parsed row will be bound to, enabling access to the row contents\nlater in the query."))),(0,r.kt)("p",null,"The clause reads row by row from a CSV file, and binds the contents of the\nparsed row to the variable you specified."),(0,r.kt)("p",null,"It's important to note that the parser parses the values as strings. It's up to\nthe user to convert the parsed row values to the appropriate type. This can be\ndone using the built-in conversion functions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ToInteger"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ToFloat"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"ToBoolean")," etc. Consult the documentation on the available conversion functions."),(0,r.kt)("p",null,"Depending on how you set the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEADER")," option (",(0,r.kt)("inlineCode",{parentName:"p"},"WITH")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"NO"),"), a row will\nbe parsed as either a map or a list."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH HEADER")," option is set, the very first line in the file will be\nparsed as the header, and any remaining rows will be parsed as regular rows.\nThe value bound to the row variable will be a map of the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'{ ( "header_field" : "row_value" )? ( , "header_field" : "row_value" )* }\n')),(0,r.kt)("p",null,"To access a given field, you can use the property lookup syntax. Let's assume\nthat the CSV file contents are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"x|y|z\n1|2|3\n4|5|6\n")),(0,r.kt)("p",null,"The following query will load row by row from the file, and create a new node\nfor each row with properties based on the parsed row values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "xyz.csv" WITH HEADER DELIMITER "|" AS row\nCREATE (n:A {x: ToInteger(row.x), y: ToInteger(row.y), z: ToInteger(row.z)}) ; \n')),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"NO HEADER")," option is set, then each row is parsed as a list of values.\nThe contents of the row can be accessed using the list index syntax. Note that\nin this mode, there are no restrictions on the number of values a row contains.\nThis isn't recommended, as the user must manually handle the varying number of\nvalues in a row."),(0,r.kt)("p",null,"Let's assume that the CSV file contents are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"1|2|3\n4|5|6\n")),(0,r.kt)("p",null,"The following query will load row by row from the file, and create a new node\nfor each row with properties based on the parsed row values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "xyz.csv" NO HEADER DELIMITER "|" AS row\nCREATE (n:A {x: ToInteger(row[0]), y: ToInteger(row[1]), z: ToInteger(row[2])}) ; \n')),(0,r.kt)("p",null,"The clause can't stand on its own, meaning there has to be at least one more\nclause in the query, in addition to it. In other words, the following query will\nthrow an exception:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "file.csv" WITH HEADER AS row ;\n')),(0,r.kt)("p",null,"On the other hand, the following query is valid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MERGE (n:A) LOAD CSV FROM "file.csv" WITH HEADER AS row ;\n')),(0,r.kt)("p",null,"Note that the row variable doesn't have to be used in any subsequent clause."),(0,r.kt)("p",null,"Also, it's important to note how the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," result exhaustion works. Let's\nassume the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)\nLOAD CSV FROM "file.csv" WITH HEADER as row\nSET n.p = row ;\n')),(0,r.kt)("p",null,"Let's say the ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH (n)"),' clause finds five nodes, whereas the "file.csv" has\nonly 2 rows. Then only the first two nodes returned by the ',(0,r.kt)("inlineCode",{parentName:"p"},"MATCH (n)")," will have\ntheir properties set, using the two rows from the file.\nSimilarly, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH (n)"),' clause finds two nodes, whereas the "file.csv" has\nfive rows, the two nodes returned by ',(0,r.kt)("inlineCode",{parentName:"p"},"MATCH (n)"),' will have their properties\nset with values from the first two rows of the file.\nIn general, the clause that exhausts its results sooner will dictate how many\ntimes the "loop" will be executed.'),(0,r.kt)("p",null,"Finally, note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause can be used at most once per query.\nTrying to use multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clauses within a single query will throw an exception.\nIn other words, queries such as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "x.csv" WITH HEADER as x\nLOAD CSV FROM "y.csv" WITH HEADER as y\nCREATE (n:A { p1 : x, p2 : y });\n')),(0,r.kt)("p",null,"are invalid."))}m.isMDXComponent=!0}}]);