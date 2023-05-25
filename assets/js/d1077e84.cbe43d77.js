"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90032],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>s});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),o=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,h=m(e,["components","mdxType","originalType","parentName"]),u=o(a),s=r,g=u["".concat(p,".").concat(s)]||u[s]||d[s]||n;return a?l.createElement(g,i(i({ref:t},h),{},{components:a})):l.createElement(g,i({ref:t},h))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var o=2;o<n;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},34470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>m,toc:()=>o});var l=a(87462),r=(a(67294),a(3905));const n={id:"changelog",title:"Changelog",sidebar_label:"Changelog"},i=void 0,m={unversionedId:"changelog",id:"changelog",title:"Changelog",description:"v1.4.1 - April 19, 2023",source:"@site/gqlalchemy/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/docs/gqlalchemy/changelog",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/changelog.md",tags:[],version:"current",frontMatter:{id:"changelog",title:"Changelog",sidebar_label:"Changelog"},sidebar:"gqlalchemy",previous:{title:"Python graph translators",permalink:"/docs/gqlalchemy/under-the-hood/python-graph-translators"}},p={},o=[{value:"v1.4.1 - April 19, 2023",id:"v141---april-19-2023",level:2},{value:"Features and improvements",id:"features-and-improvements",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"v1.4 - March 10, 2023",id:"v14---march-10-2023",level:2},{value:"Features and improvements",id:"features-and-improvements-1",level:3},{value:"v1.3.3 - Dec 15, 2022",id:"v133---dec-15-2022",level:2},{value:"Bug fixes",id:"bug-fixes-1",level:3},{value:"v1.3.2 - Sep 15, 2022",id:"v132---sep-15-2022",level:2},{value:"Bug fixes",id:"bug-fixes-2",level:3},{value:"Updates",id:"updates",level:3},{value:"v1.3 - Jun 14, 2022",id:"v13---jun-14-2022",level:2},{value:"Major Features and Improvements",id:"major-features-and-improvements",level:3},{value:"Bug fixes",id:"bug-fixes-3",level:3},{value:"v1.2 - Apr 12, 2022",id:"v12---apr-12-2022",level:2},{value:"Major Features and Improvements",id:"major-features-and-improvements-1",level:3},{value:"Bug fixes",id:"bug-fixes-4",level:3},{value:"v1.1 - Jan 19, 2022",id:"v11---jan-19-2022",level:2},{value:"Major Features and Improvements",id:"major-features-and-improvements-2",level:3}],h={toc:o};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"v141---april-19-2023"},"v1.4.1 - April 19, 2023"),(0,r.kt)("h3",{id:"features-and-improvements"},"Features and improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installing and testing GQLAlchemy is now easier because Apache Arrow, PyTorch Geometric and DGL dependencies have been made optional. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/235"},"#235"))),(0,r.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed unnecessary extra argument in the call of the ",(0,r.kt)("inlineCode",{parentName:"li"},"escape_value")," method and fixed a bug in query creation for the ",(0,r.kt)("inlineCode",{parentName:"li"},"Map")," property type. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/198/files"},"#198"))),(0,r.kt)("h2",{id:"v14---march-10-2023"},"v1.4 - March 10, 2023"),(0,r.kt)("h3",{id:"features-and-improvements-1"},"Features and improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data from Memgraph can now be ",(0,r.kt)("a",{parentName:"li",href:"/docs/gqlalchemy/reference/transformations/importing/graph_importer"},"imported from")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/gqlalchemy/reference/transformations/export/graph_transporter"},"exported to")," ",(0,r.kt)("inlineCode",{parentName:"li"},"NetworkX"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DGL")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"PyG")," graph formats. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/215"},"#215")),(0,r.kt)("li",{parentName:"ul"},"Now you can execute procedures from query modules on a subgraph ",(0,r.kt)("a",{parentName:"li",href:"/docs/gqlalchemy/how-to-guides/query-builder/graph-projection"},"using the project feature"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/210"},"#210")),(0,r.kt)("li",{parentName:"ul"},"Now you can pass values from Python variables as parameters in Cypher queries. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/217"},"#217")),(0,r.kt)("li",{parentName:"ul"},"Besides BSF, DSF and WSHORTEST, now you can also run the All shortest paths algorithm with GQLAlchemy. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/200"},"#200"))),(0,r.kt)("h2",{id:"v133---dec-15-2022"},"v1.3.3 - Dec 15, 2022"),(0,r.kt)("h3",{id:"bug-fixes-1"},"Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added initial support for NumPy arrays (",(0,r.kt)("inlineCode",{parentName:"li"},"ndarray"),") and scalars (",(0,r.kt)("inlineCode",{parentName:"li"},"generic"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/208"},"#208"))),(0,r.kt)("h2",{id:"v132---sep-15-2022"},"v1.3.2 - Sep 15, 2022"),(0,r.kt)("h3",{id:"bug-fixes-2"},"Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed Unicode serialisation ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/189"},"#189")),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("inlineCode",{parentName:"li"},"GQLAlchemyWaitForConnectionError")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"GQLAlchemyDatabaseError")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/188"},"#188")),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("inlineCode",{parentName:"li"},"Datetime")," serialisation ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/185"},"#185"))),(0,r.kt)("h3",{id:"updates"},"Updates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bumped ",(0,r.kt)("inlineCode",{parentName:"li"},"pyarrow")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/193"},"#193")),(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("inlineCode",{parentName:"li"},"poetry")," to 1.2.0 and ",(0,r.kt)("inlineCode",{parentName:"li"},"pymgclient")," to 1.3.1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/191"},"#191")),(0,r.kt)("li",{parentName:"ul"},"Updated all dependencies ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/194"},"#194"))),(0,r.kt)("h2",{id:"v13---jun-14-2022"},"v1.3 - Jun 14, 2022"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("h3",{parentName:"admonition",id:"breaking-changes"},"Breaking Changes"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Renamed keyword argument ",(0,r.kt)("inlineCode",{parentName:"li"},"edge_label")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"relationship_type")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"to()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"from()")," methods in the query builder. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/145"},"#145")))),(0,r.kt)("h3",{id:"major-features-and-improvements"},"Major Features and Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added option to suppress warning ",(0,r.kt)("inlineCode",{parentName:"li"},"GQLAlchemySubclassNotFoundWarning"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/121"},"#121")),(0,r.kt)("li",{parentName:"ul"},"Added the possibility to import ",(0,r.kt)("inlineCode",{parentName:"li"},"Field")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"gqlalchemy.models"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/122"},"#122")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"set_()")," method to the query builder. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/128"},"#128")),(0,r.kt)("li",{parentName:"ul"},"Added wrapper class for query modules. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/130"},"#130")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"foreach()")," method to the query builder. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/135"},"#135")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"load_csv()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"return()")," methods from the query builder to base classes list. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/139"},"#139")),(0,r.kt)("li",{parentName:"ul"},"Added new argument types in ",(0,r.kt)("inlineCode",{parentName:"li"},"return_()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"yield_()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"with_()")," methods in the query builder. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/146"},"#146")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"IntegratedAlgorithm")," class instance as argument in ",(0,r.kt)("inlineCode",{parentName:"li"},"to()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"from()")," methods in the query builder. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/141"},"#141")," "),(0,r.kt)("li",{parentName:"ul"},"Extended ",(0,r.kt)("inlineCode",{parentName:"li"},"IntegratedAlgorithm")," class with the Breadth-first search algorithm. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/142"},"#142")),(0,r.kt)("li",{parentName:"ul"},"Extended ",(0,r.kt)("inlineCode",{parentName:"li"},"IntegratedAlgorithm")," class with the Weighted shortest path algorithm. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/143"},"#143")),(0,r.kt)("li",{parentName:"ul"},"Extended ",(0,r.kt)("inlineCode",{parentName:"li"},"IntegratedAlgorithm")," class with the Depth-first search algorithm. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/144"},"#144")),(0,r.kt)("li",{parentName:"ul"},"Removed the usage of ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo")," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"instance_runner")," module. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/148"},"#148")),(0,r.kt)("li",{parentName:"ul"},"Added support for Neo4j in the Object-Graph Mapper and the query builder. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/149"},"#149")),(0,r.kt)("li",{parentName:"ul"},"Changed string variables for Blob and S3 keyword arguments. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/151"},"#151")),(0,r.kt)("li",{parentName:"ul"},"Added variable support for node and relationship properties. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/154"},"#154")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"Tuple")," as new argument type in query modules. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/155/"},"#155")),(0,r.kt)("li",{parentName:"ul"},"Changed ",(0,r.kt)("inlineCode",{parentName:"li"},"host")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"port")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Memgraph")," properties to readonly. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/156"},"#156")),(0,r.kt)("li",{parentName:"ul"},"Changed ",(0,r.kt)("inlineCode",{parentName:"li"},"Memgraph.new_connection()")," to be a private method. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/157"},"#157")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"push()")," query modules for Kafka streams and Power BI. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/158"},"#158")),(0,r.kt)("li",{parentName:"ul"},"Added argument ",(0,r.kt)("inlineCode",{parentName:"li"},"lazy")," for configuring lazy loading in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Memgraph")," class. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/159"},"#159")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"datetime")," support for property types. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/161"},"#161")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"Operator")," enum which can be used as ",(0,r.kt)("inlineCode",{parentName:"li"},"operator")," value in ",(0,r.kt)("inlineCode",{parentName:"li"},"set_()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"where()")," methods in the query builder. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/165"},"#165")),(0,r.kt)("li",{parentName:"ul"},"Added an extension to the ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryBuilder")," class to support and autocomplete integrated and MAGE query modules. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/168"},"#168"))),(0,r.kt)("h3",{id:"bug-fixes-3"},"Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed the unbound variable error in the return statement of the Cypher query in ",(0,r.kt)("inlineCode",{parentName:"li"},"memgraph.save_relationship_with_id()"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/166"},"#166")),(0,r.kt)("li",{parentName:"ul"},"Fixed checking if ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"Optional")," properties. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/167"},"#167"))),(0,r.kt)("h2",{id:"v12---apr-12-2022"},"v1.2 - Apr 12, 2022"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("h3",{parentName:"admonition",id:"breaking-changes-1"},"Breaking Changes"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Ordering query results as in GQLAlchemy older than 1.2 will not be possible."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"where()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"and_where()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"or_where()")," methods can't be used as in\nGQLAlchemy older than 1.2."),(0,r.kt)("li",{parentName:"ul"},"Setting up the ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap_servers")," argument when creating a stream as in\nGQLAlchemy older than 1.2 will not be possible."))),(0,r.kt)("h3",{id:"major-features-and-improvements-1"},"Major Features and Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved ",(0,r.kt)("inlineCode",{parentName:"li"},"where()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"and_where()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"or_where()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"xor_where()")," methods. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/114"},"#114")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"where_not()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"and_not()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"or_not()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"xor_not()")," methods. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/114"},"#114")),(0,r.kt)("li",{parentName:"ul"},"Improved ",(0,r.kt)("inlineCode",{parentName:"li"},"order_by()")," method from query builder by changing its argument types. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/114"},"#114")),(0,r.kt)("li",{parentName:"ul"},"Added Docker and Binary Memgraph instance runners. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/91"},"#91")),(0,r.kt)("li",{parentName:"ul"},"Added methods for dropping all indexes (",(0,r.kt)("inlineCode",{parentName:"li"},"drop_all_indexes()"),") and dropping all triggers (",(0,r.kt)("inlineCode",{parentName:"li"},"drop_all_triggers()"),"). ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/100"},"#100")),(0,r.kt)("li",{parentName:"ul"},"Added table to graph importer and Amazon S3 importer. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/100"},"#100")),(0,r.kt)("li",{parentName:"ul"},"Added Azure Blob and local storage importers. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/104"},"#104")),(0,r.kt)("li",{parentName:"ul"},"Added an option to create a label index. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/113"},"#113")),(0,r.kt)("li",{parentName:"ul"},"Added batch save methods for saving nodes (",(0,r.kt)("inlineCode",{parentName:"li"},"save_nodes()"),") and saving relationships (",(0,r.kt)("inlineCode",{parentName:"li"},"save_relationships()"),"). ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/106"},"#106")),(0,r.kt)("li",{parentName:"ul"},"Added label filtering in ",(0,r.kt)("inlineCode",{parentName:"li"},"where()")," method in query builder. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/103"},"#103")),(0,r.kt)("li",{parentName:"ul"},"Added support for creating a trigger without ",(0,r.kt)("inlineCode",{parentName:"li"},"ON")," keyword in query builder. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/90"},"#90")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"execute()")," option in query builder. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/92"},"#92")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"load_csv()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"xor_where()")," methods to query builder. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/90"},"#90"))),(0,r.kt)("h3",{id:"bug-fixes-4"},"Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("inlineCode",{parentName:"li"},"save_node_with_id()")," signature in the ",(0,r.kt)("inlineCode",{parentName:"li"},"save_node()")," method. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/109"},"#109")),(0,r.kt)("li",{parentName:"ul"},"Constraints and indexes defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"Field")," now work correctly. Before, when they were added to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Field")," of the property, they were always set to ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),", regardless of their actual value. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/90"},"#90")),(0,r.kt)("li",{parentName:"ul"},"Fixed label inheritance to get all labels of base class. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/105"},"#105")),(0,r.kt)("li",{parentName:"ul"},"Removed extra argument called ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Merge")," class. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/118"},"#118")),(0,r.kt)("li",{parentName:"ul"},"Removed unnecessary quotes from the ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstraps_servers")," argument when creating a stream. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/pull/98"},"#98"))),(0,r.kt)("h2",{id:"v11---jan-19-2022"},"v1.1 - Jan 19, 2022"),(0,r.kt)("h3",{id:"major-features-and-improvements-2"},"Major Features and Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added graph schema definition and validation."),(0,r.kt)("li",{parentName:"ul"},"Added new methods to the query builder: ",(0,r.kt)("inlineCode",{parentName:"li"},"merge()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"create()"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"unwind()"),",",(0,r.kt)("inlineCode",{parentName:"li"},"with_()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"return_()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"yield_()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"order_by()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"limit()"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"skip()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"call()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"delete()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"remove()"),"."),(0,r.kt)("li",{parentName:"ul"},"Added on-disk storage for large properties that don't need to be stored in the\ngraph database."),(0,r.kt)("li",{parentName:"ul"},"Added support for managing streams and database triggers.")))}d.isMDXComponent=!0}}]);