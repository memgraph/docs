"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79040],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8077:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"triggers",title:"Triggers",sidebar_label:"Triggers"},s=void 0,d={unversionedId:"database-functionalities/triggers",id:"version-1.5.0/database-functionalities/triggers",isDocsHomePage:!1,title:"Triggers",description:"This article is a part of a series intended to showcase Memgraph's features",source:"@site/memgraph_versioned_docs/version-1.5.0/database-functionalities/triggers.md",sourceDirName:"database-functionalities",slug:"/database-functionalities/triggers",permalink:"/docs/memgraph/1.5.0/database-functionalities/triggers",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.5.0/database-functionalities/triggers.md",tags:[],version:"1.5.0",frontMatter:{id:"triggers",title:"Triggers",sidebar_label:"Triggers"},sidebar:"version-1.5.0/memgraph",previous:{title:"Replication",permalink:"/docs/memgraph/1.5.0/database-functionalities/replication"},next:{title:"Backup",permalink:"/docs/memgraph/1.5.0/reference-guide/backup"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Creating a trigger",id:"creating-a-trigger",children:[{value:"Trigger name",id:"trigger-name",children:[]},{value:"Event type",id:"event-type",children:[]},{value:"Statement execution phase",id:"statement-execution-phase",children:[]},{value:"Execute statements",id:"execute-statements",children:[]},{value:"Predefined variables",id:"predefined-variables",children:[]}]},{value:"Dropping a trigger",id:"dropping-a-trigger",children:[]},{value:"Trigger info",id:"trigger-info",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This article is a part of a series intended to showcase Memgraph's features\nand bring the user up to speed on developing with Memgraph."),(0,l.kt)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",(0,l.kt)("a",{parentName:"p",href:"/docs/memgraph/1.5.0/database-functionalities"},"database functionalities section"),"."),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Memgraph supports running openCypher statements after a certain event happens during transaction execution, i.e. triggers."),(0,l.kt)("p",null,"You can create triggers, delete them, and print them out.\nAll the triggers are persisted on the disk, so no information is lost between the runs."),(0,l.kt)("h2",{id:"creating-a-trigger"},"Creating a trigger"),(0,l.kt)("p",null,"To create a new trigger, a query of the following format should be used:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"CREATE TRIGGER trigger_name ( ON ( () | --\x3e ) CREATE | UPDATE | DELETE )\n( BEFORE | AFTER ) COMMIT\nEXECUTE openCypherStatements\n")),(0,l.kt)("p",null,"The query may seem complex, so let's break it down."),(0,l.kt)("h3",{id:"trigger-name"},"Trigger name"),(0,l.kt)("p",null,"Each created trigger must have a globally unique name.\nThis implies that you can't have a pair of triggers with the same name, even if they apply to different events."),(0,l.kt)("h3",{id:"event-type"},"Event type"),(0,l.kt)("p",null,"Optionally, users can define on which event a trigger should execute its statements.\nThe event type is defined using the following part:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"ON ( () | --\x3e ) CREATE | UPDATE | DELETE\n")),(0,l.kt)("p",null,"There are three main event types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CREATE"),(0,l.kt)("li",{parentName:"ul"},"UPDATE"),(0,l.kt)("li",{parentName:"ul"},"DELETE")),(0,l.kt)("p",null,"For each event type, users can specify whether to execute the trigger statements only on the events\nthat happened on a vertex, or on an edge. Vertices are denoted with ",(0,l.kt)("inlineCode",{parentName:"p"},"()"),", and edges with ",(0,l.kt)("inlineCode",{parentName:"p"},"--\x3e"),"."),(0,l.kt)("p",null,"Few examples would be:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ON CREATE")," - trigger the statements only if an object (vertex and/or edge) was created during the transaction execution."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ON () UPDATE")," - trigger the statements only if a vertex was updated (e.g. property was set on it) during the transaction execution."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ON --\x3e DELETE")," - trigger the statements only if an edge was deleted during the transaction execution.")),(0,l.kt)("p",null,"Each event comes with certain information that can be used in the openCypher statements the trigger executes. The information is contained in the\nform of ",(0,l.kt)("a",{parentName:"p",href:"#predefined-variables"},"predefined variables"),"."),(0,l.kt)("p",null,"If no event type is specified, the trigger executes its statements every time, and all the predefined variables can be used."),(0,l.kt)("h3",{id:"statement-execution-phase"},"Statement execution phase"),(0,l.kt)("p",null,"A trigger can execute its statements at a specified phase, before or after committing the transaction that triggered it.\nIf the ",(0,l.kt)("inlineCode",{parentName:"p"},"BEFORE COMMIT")," option is used, the trigger will execute its statements as part of that transaction before it's committed.\nIf the ",(0,l.kt)("inlineCode",{parentName:"p"},"AFTER COMMIT")," option is used, the trigger will execute its statements asynchronously after that transaction is committed."),(0,l.kt)("h3",{id:"execute-statements"},"Execute statements"),(0,l.kt)("p",null,"A trigger can execute any valid openCypher query. No specific constraints are imposed on the queries. The only way trigger queries (i.e. statements) differ from standard queries is that a trigger query may use predefined variables, which are based on the event type specified for the trigger."),(0,l.kt)("h3",{id:"predefined-variables"},"Predefined variables"),(0,l.kt)("p",null,"Statements that a trigger executes can contain certain predefined variables which contain information about the event that triggered it."),(0,l.kt)("p",null,"Based on the event type, the following predefined variables are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event type"),(0,l.kt)("th",{parentName:"tr",align:null},"Predefined variables"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ON CREATE"),(0,l.kt)("td",{parentName:"tr",align:null},"createdVertices, createdEdges, createdObjects")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ON () CREATE"),(0,l.kt)("td",{parentName:"tr",align:null},"createdVertices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ON --\x3e CREATE"),(0,l.kt)("td",{parentName:"tr",align:null},"createdEdges")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ON UPDATE"),(0,l.kt)("td",{parentName:"tr",align:null},"setVertexProperties, setEdgeProperties, removedVertexProperties, removedEdgeProperties, setVertexLabels, removedVertexLabels, updatedVertices, updatedEdges, updatedObjects")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ON () UPDATE"),(0,l.kt)("td",{parentName:"tr",align:null},"setVertexProperties, removedVertexProperties, setVertexLabels, removedVertexLabels, updatedVertices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ON --\x3e UPDATE"),(0,l.kt)("td",{parentName:"tr",align:null},"setEdgeProperties, removedEdgeProperties, updatedEdges")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ON DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"deletedVertices, deletedEdges, deletedObjects")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ON () DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"deletedVertices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ON --\x3e DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"deletedEdges")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no event type specified"),(0,l.kt)("td",{parentName:"tr",align:null},"All predefined variables can be used")))),(0,l.kt)("h4",{id:"createdvertices"},"createdVertices"),(0,l.kt)("p",null,"List of all created vertices."),(0,l.kt)("h4",{id:"creatededges"},"createdEdges"),(0,l.kt)("p",null,"List of all created edges"),(0,l.kt)("h4",{id:"createdobjects"},"createdObjects"),(0,l.kt)("p",null,"List of all created objects where each element is a map.\nIf the element contains a created vertex, it will be in the following format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "created_vertex",\n  "vertex": created_vertex_object\n}\n')),(0,l.kt)("p",null,"If the element contains a created edge, it will be in the following format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "created_edge",\n  "edge": created_edge_object\n}\n')),(0,l.kt)("h4",{id:"deletedvertices"},"deletedVertices"),(0,l.kt)("p",null,"List of all deleted vertices."),(0,l.kt)("h4",{id:"deletededges"},"deletedEdges"),(0,l.kt)("p",null,"List of all deleted edges"),(0,l.kt)("h4",{id:"deletedobjects"},"deletedObjects"),(0,l.kt)("p",null,"List of all deleted objects where each element is a map.\nIf the element contains a deleted vertex, it will be in the following format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "deleted_vertex",\n  "vertex": deleted_vertex_object\n}\n')),(0,l.kt)("p",null,"If the element contains a deleted edge, it will be in the following format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "deleted_edge",\n  "edge": deleted_edge_object\n}\n')),(0,l.kt)("h4",{id:"general-notes-about-the-predefined-variables-for-updates"},"General notes about the predefined variables for updates"),(0,l.kt)("p",null,"Setting an element to ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," is counted as a removal.\nThe changes are looked at on the transaction level only. That means if the value under a property on the same object was changed multiple times, only one update will be generated. The same applies for the labels on the vertex."),(0,l.kt)("h4",{id:"setvertexproperties"},"setVertexProperties"),(0,l.kt)("p",null,"List of all set vertex properties.\nEach element is in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "vertex": updated_vertex_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property,\n  "new": new_value_of_that_property\n}\n')),(0,l.kt)("h4",{id:"setedgeproperties"},"setEdgeProperties"),(0,l.kt)("p",null,"List of all set edge properties.\nEach element is in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "edge": updated_vertex_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property,\n  "new": new_value_of_that_property\n}\n')),(0,l.kt)("h4",{id:"removedvertexproperties"},"removedVertexProperties"),(0,l.kt)("p",null,"List of all removed vertex properties.\nEach element is in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "vertex": updated_vertex_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property\n}\n')),(0,l.kt)("h4",{id:"removededgeproperties"},"removedEdgeProperties"),(0,l.kt)("p",null,"List of all removed edge properties.\nEach element is in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "vertex": updated_vertex_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property\n}\n')),(0,l.kt)("h4",{id:"setvertexlabels"},"setVertexLabels"),(0,l.kt)("p",null,"List of all set vertex labels.\nEach element is in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "label": label,\n  "vertices": list_of_updated_vertices\n}\n')),(0,l.kt)("h4",{id:"removedvertexlabels"},"removedVertexLabels"),(0,l.kt)("p",null,"List of all removed vertex labels.\nEach element is in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "label": label,\n  "vertices": list_of_updated_vertices\n}\n')),(0,l.kt)("h4",{id:"updatedvertices"},"updatedVertices"),(0,l.kt)("p",null,"List of updates consisting of set and removed properties, and set and removed labels on vertices."),(0,l.kt)("h4",{id:"updatededges"},"updatedEdges"),(0,l.kt)("p",null,"List of updates consisting of set and removed properties on edges."),(0,l.kt)("h4",{id:"updatedobjects"},"updatedObjects"),(0,l.kt)("p",null,"List of updates consisting of set and removed properties on edges and vertices, and set and removed labels on vertices."),(0,l.kt)("h4",{id:"elements-of-the-predefined-variables-for-update"},"Elements of the predefined variables for update"),(0,l.kt)("p",null,"Each element has a similar format as the previously defined elements."),(0,l.kt)("p",null,"If the element contains information about a set vertex property, it's in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "set_vertex_property",\n  "vertex": updated_vertex_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property,\n  "new": new_value_of_that_property\n}\n')),(0,l.kt)("p",null,"If the element contains information about a removed vertex property, it's in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "removed_vertex_property",\n  "vertex": updated_vertex_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property\n}\n')),(0,l.kt)("p",null,"If the element contains information about a set edge property, it's in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "set_edge_property",\n  "edge": updated_edge_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property,\n  "new": new_value_of_that_property\n}\n')),(0,l.kt)("p",null,"If the element contains information about a removed edge property, it's in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "removed_edge_property",\n  "edge": updated_edge_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property\n}\n')),(0,l.kt)("p",null,"If the element contains information about a set vertex label, it's in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "set_vertex_label",\n  "vertex": updated_vertex_object,\n  "label": label\n}\n')),(0,l.kt)("p",null,"If the element contains information about a removed vertex label, it's in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "removed_vertex_label",\n  "vertex": updated_vertex_object,\n  "label": label\n}\n')),(0,l.kt)("h2",{id:"dropping-a-trigger"},"Dropping a trigger"),(0,l.kt)("p",null,"A trigger can be removed by running the following query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"DROP TRIGGER trigger_name;\n")),(0,l.kt)("h2",{id:"trigger-info"},"Trigger info"),(0,l.kt)("p",null,"Users can get info about all the triggers by using the following query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"SHOW TRIGGERS;\n")),(0,l.kt)("p",null,"which returns results in the following format:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"trigger name"),(0,l.kt)("th",{parentName:"tr",align:null},"statement"),(0,l.kt)("th",{parentName:"tr",align:null},"event type"),(0,l.kt)("th",{parentName:"tr",align:null},"phase"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name of the trigger"),(0,l.kt)("td",{parentName:"tr",align:null},"statement which the trigger executes"),(0,l.kt)("td",{parentName:"tr",align:null},"event which triggers the statement"),(0,l.kt)("td",{parentName:"tr",align:null},"phase at which the trigger executes its statement")))))}c.isMDXComponent=!0}}]);