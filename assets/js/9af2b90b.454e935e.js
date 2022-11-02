"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(n),c=a,m=g["".concat(d,".").concat(c)]||g[c]||u[c]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={id:"triggers",title:"Triggers",sidebar_label:"Triggers"},i=void 0,o={unversionedId:"reference-guide/triggers",id:"version-2.3.0/reference-guide/triggers",title:"Triggers",description:"This article is a part of a series intended to showcase Memgraph's features and",source:"@site/memgraph_versioned_docs/version-2.3.0/reference-guide/triggers.md",sourceDirName:"reference-guide",slug:"/reference-guide/triggers",permalink:"/docs/memgraph/2.3.0/reference-guide/triggers",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/reference-guide/triggers.md",tags:[],version:"2.3.0",frontMatter:{id:"triggers",title:"Triggers",sidebar_label:"Triggers"},sidebar:"memgraph",previous:{title:"Set up replication",permalink:"/docs/memgraph/2.3.0/how-to-guides/replication"},next:{title:"Use Font Awesome for node images",permalink:"/docs/memgraph/2.3.0/how-to-guides/font-awesome-for-node-images"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Creating a trigger",id:"creating-a-trigger",level:2},{value:"Trigger name",id:"trigger-name",level:3},{value:"Event type",id:"event-type",level:3},{value:"Statement execution phase",id:"statement-execution-phase",level:3},{value:"Execute statements",id:"execute-statements",level:3},{value:"Predefined variables",id:"predefined-variables",level:3},{value:"createdVertices",id:"createdvertices",level:4},{value:"createdEdges",id:"creatededges",level:4},{value:"createdObjects",id:"createdobjects",level:4},{value:"deletedVertices",id:"deletedvertices",level:4},{value:"deletedEdges",id:"deletededges",level:4},{value:"deletedObjects",id:"deletedobjects",level:4},{value:"General notes about the predefined variables for updates",id:"general-notes-about-the-predefined-variables-for-updates",level:4},{value:"setVertexProperties",id:"setvertexproperties",level:4},{value:"setEdgeProperties",id:"setedgeproperties",level:4},{value:"removedVertexProperties",id:"removedvertexproperties",level:4},{value:"removedEdgeProperties",id:"removededgeproperties",level:4},{value:"setVertexLabels",id:"setvertexlabels",level:4},{value:"removedVertexLabels",id:"removedvertexlabels",level:4},{value:"updatedVertices",id:"updatedvertices",level:4},{value:"updatedEdges",id:"updatededges",level:4},{value:"updatedObjects",id:"updatedobjects",level:4},{value:"Elements of the predefined variables for update",id:"elements-of-the-predefined-variables-for-update",level:4},{value:"Owner",id:"owner",level:3},{value:"Dropping a trigger",id:"dropping-a-trigger",level:2},{value:"Trigger info",id:"trigger-info",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article is a part of a series intended to showcase Memgraph's features and\nbring the user up to speed on developing with Memgraph."),(0,a.kt)("p",null,"We highly recommend checking out the other articles from this series which are\nlisted in our ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.0/how-to-guides"},"how-to guides\nsection"),"."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Memgraph supports running openCypher statements after a certain event happens\nduring transaction execution, i.e. triggers."),(0,a.kt)("p",null,"You can create triggers, delete them, and print them out. All the triggers are\npersisted on the disk, so no information is lost between the runs."),(0,a.kt)("h2",{id:"creating-a-trigger"},"Creating a trigger"),(0,a.kt)("p",null,"To create a new trigger, a query of the following format should be used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"CREATE TRIGGER trigger_name ( ON ( () | --\x3e ) CREATE | UPDATE | DELETE )\n( BEFORE | AFTER ) COMMIT\nEXECUTE openCypherStatements\n")),(0,a.kt)("p",null,"You can find detailed explanations for each part of the trigger ",(0,a.kt)("a",{parentName:"p",href:"#trigger-name"},"further\ndown"),"."),(0,a.kt)("p",null,"An example would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE TRIGGER exampleTrigger\nON UPDATE AFTER COMMIT EXECUTE\nUNWIND updatedObjects AS updatedObject\nWITH CASE\n        WHEN updatedObject.vertex IS NOT null THEN updatedObject.vertex\n        WHEN updatedObject.edge IS NOT null THEN updatedObject.edge\n    END AS object\nSET object.updated_at = timestamp();\n")),(0,a.kt)("p",null,"The query may seem complex, so let's break it down:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CREATE TRIGGER exampleTrigger"),": This statement creates the trigger."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ON UPDATE AFTER COMMIT EXECUTE"),": This statement specifies what kind of event\nshould activate the trigger. This one will be triggered for every update\noperation and the query below will be executed after the update event has been\ncommitted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UNWIND updatedObjects AS updatedObject"),": If multiple objects were updated,\nunwind the list and go over each one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WITH CASE..."),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"CASE")," expression checks what type of object was updated,\na node (vertex) or a relationship (edge)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SET object.updated_at = timestamp();"),": Add an ",(0,a.kt)("inlineCode",{parentName:"li"},"updated_at")," property to the\nobject indicating when the action happened.")),(0,a.kt)("h3",{id:"trigger-name"},"Trigger name"),(0,a.kt)("p",null,"Each created trigger must have a globally unique name. This implies that you\ncan't have a pair of triggers with the same name, even if they apply to\ndifferent events."),(0,a.kt)("h3",{id:"event-type"},"Event type"),(0,a.kt)("p",null,"Optionally, users can define on which event a trigger should execute its\nstatements. The event type is defined using the following part:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"ON ( () | --\x3e ) CREATE | UPDATE | DELETE\n")),(0,a.kt)("p",null,"There are three main event types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CREATE"),(0,a.kt)("li",{parentName:"ul"},"UPDATE"),(0,a.kt)("li",{parentName:"ul"},"DELETE")),(0,a.kt)("p",null,"For each event type, users can specify whether to execute the trigger statements\nonly on the events that happened on a vertex, or on an edge. Vertices are\ndenoted with ",(0,a.kt)("inlineCode",{parentName:"p"},"()"),", and edges with ",(0,a.kt)("inlineCode",{parentName:"p"},"--\x3e"),"."),(0,a.kt)("p",null,"Few examples would be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ON CREATE")," - trigger the statements only if an object (vertex and/or edge)\nwas created during the transaction execution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ON () UPDATE")," - trigger the statements only if a vertex was updated (e.g.\nproperty was set on it) during the transaction execution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ON --\x3e DELETE")," - trigger the statements only if an edge was deleted during\nthe transaction execution.")),(0,a.kt)("p",null,"Each event comes with certain information that can be used in the openCypher\nstatements the trigger executes. The information is contained in the form of\n",(0,a.kt)("a",{parentName:"p",href:"#predefined-variables"},"predefined variables"),"."),(0,a.kt)("p",null,"If no event type is specified, the trigger executes its statements every time,\nand all the predefined variables can be used."),(0,a.kt)("h3",{id:"statement-execution-phase"},"Statement execution phase"),(0,a.kt)("p",null,"A trigger can execute its statements at a specified phase, before or after\ncommitting the transaction that triggered it. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"BEFORE COMMIT")," option is\nused, the trigger will execute its statements as part of that transaction before\nit's committed. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"AFTER COMMIT")," option is used, the trigger will execute\nits statements asynchronously after that transaction is committed."),(0,a.kt)("h3",{id:"execute-statements"},"Execute statements"),(0,a.kt)("p",null,"A trigger can execute any valid openCypher query. No specific constraints are\nimposed on the queries. The only way trigger queries (i.e. statements) differ\nfrom standard queries is that a trigger query may use predefined variables,\nwhich are based on the event type specified for the trigger."),(0,a.kt)("h3",{id:"predefined-variables"},"Predefined variables"),(0,a.kt)("p",null,"Statements that a trigger executes can contain certain predefined variables\nwhich contain information about the event that triggered it."),(0,a.kt)("p",null,"Based on the event type, the following predefined variables are available:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event type"),(0,a.kt)("th",{parentName:"tr",align:null},"Predefined variables"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ON CREATE"),(0,a.kt)("td",{parentName:"tr",align:null},"createdVertices, createdEdges, createdObjects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ON () CREATE"),(0,a.kt)("td",{parentName:"tr",align:null},"createdVertices")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ON --\x3e CREATE"),(0,a.kt)("td",{parentName:"tr",align:null},"createdEdges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ON UPDATE"),(0,a.kt)("td",{parentName:"tr",align:null},"setVertexProperties, setEdgeProperties, removedVertexProperties, removedEdgeProperties, setVertexLabels, removedVertexLabels, updatedVertices, updatedEdges, updatedObjects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ON () UPDATE"),(0,a.kt)("td",{parentName:"tr",align:null},"setVertexProperties, removedVertexProperties, setVertexLabels, removedVertexLabels, updatedVertices")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ON --\x3e UPDATE"),(0,a.kt)("td",{parentName:"tr",align:null},"setEdgeProperties, removedEdgeProperties, updatedEdges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ON DELETE"),(0,a.kt)("td",{parentName:"tr",align:null},"deletedVertices, deletedEdges, deletedObjects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ON () DELETE"),(0,a.kt)("td",{parentName:"tr",align:null},"deletedVertices")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ON --\x3e DELETE"),(0,a.kt)("td",{parentName:"tr",align:null},"deletedEdges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"no event type specified"),(0,a.kt)("td",{parentName:"tr",align:null},"All predefined variables can be used")))),(0,a.kt)("h4",{id:"createdvertices"},"createdVertices"),(0,a.kt)("p",null,"List of all created vertices."),(0,a.kt)("h4",{id:"creatededges"},"createdEdges"),(0,a.kt)("p",null,"List of all created edges"),(0,a.kt)("h4",{id:"createdobjects"},"createdObjects"),(0,a.kt)("p",null,"List of all created objects where each element is a map. If the element contains\na created vertex, it will be in the following format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "created_vertex",\n  "vertex": created_vertex_object\n}\n')),(0,a.kt)("p",null,"If the element contains a created edge, it will be in the following format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "created_edge",\n  "edge": created_edge_object\n}\n')),(0,a.kt)("h4",{id:"deletedvertices"},"deletedVertices"),(0,a.kt)("p",null,"List of all deleted vertices."),(0,a.kt)("h4",{id:"deletededges"},"deletedEdges"),(0,a.kt)("p",null,"List of all deleted edges"),(0,a.kt)("h4",{id:"deletedobjects"},"deletedObjects"),(0,a.kt)("p",null,"List of all deleted objects where each element is a map. If the element contains\na deleted vertex, it will be in the following format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "deleted_vertex",\n  "vertex": deleted_vertex_object\n}\n')),(0,a.kt)("p",null,"If the element contains a deleted edge, it will be in the following format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "deleted_edge",\n  "edge": deleted_edge_object\n}\n')),(0,a.kt)("h4",{id:"general-notes-about-the-predefined-variables-for-updates"},"General notes about the predefined variables for updates"),(0,a.kt)("p",null,"Setting an element to ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," is counted as a removal. The changes are looked at\non the transaction level only. That means if the value under a property on the\nsame object was changed multiple times, only one update will be generated. The\nsame applies for the labels on the vertex."),(0,a.kt)("h4",{id:"setvertexproperties"},"setVertexProperties"),(0,a.kt)("p",null,"List of all set vertex properties. Each element is in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "vertex": updated_vertex_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property,\n  "new": new_value_of_that_property\n}\n')),(0,a.kt)("h4",{id:"setedgeproperties"},"setEdgeProperties"),(0,a.kt)("p",null,"List of all set edge properties. Each element is in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "edge": updated_vertex_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property,\n  "new": new_value_of_that_property\n}\n')),(0,a.kt)("h4",{id:"removedvertexproperties"},"removedVertexProperties"),(0,a.kt)("p",null,"List of all removed vertex properties. Each element is in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "vertex": updated_vertex_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property\n}\n')),(0,a.kt)("h4",{id:"removededgeproperties"},"removedEdgeProperties"),(0,a.kt)("p",null,"List of all removed edge properties. Each element is in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "vertex": updated_vertex_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property\n}\n')),(0,a.kt)("h4",{id:"setvertexlabels"},"setVertexLabels"),(0,a.kt)("p",null,"List of all set vertex labels. Each element is in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "label": label,\n  "vertices": list_of_updated_vertices\n}\n')),(0,a.kt)("h4",{id:"removedvertexlabels"},"removedVertexLabels"),(0,a.kt)("p",null,"List of all removed vertex labels. Each element is in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "label": label,\n  "vertices": list_of_updated_vertices\n}\n')),(0,a.kt)("h4",{id:"updatedvertices"},"updatedVertices"),(0,a.kt)("p",null,"List of updates consisting of set and removed properties, and set and removed\nlabels on vertices."),(0,a.kt)("h4",{id:"updatededges"},"updatedEdges"),(0,a.kt)("p",null,"List of updates consisting of set and removed properties on edges."),(0,a.kt)("h4",{id:"updatedobjects"},"updatedObjects"),(0,a.kt)("p",null,"List of updates consisting of set and removed properties on edges and vertices,\nand set and removed labels on vertices."),(0,a.kt)("h4",{id:"elements-of-the-predefined-variables-for-update"},"Elements of the predefined variables for update"),(0,a.kt)("p",null,"Each element has a similar format as the previously defined elements."),(0,a.kt)("p",null,"If the element contains information about a set vertex property, it's in the\nfollowing format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "set_vertex_property",\n  "vertex": updated_vertex_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property,\n  "new": new_value_of_that_property\n}\n')),(0,a.kt)("p",null,"If the element contains information about a removed vertex property, it's in the\nfollowing format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "removed_vertex_property",\n  "vertex": updated_vertex_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property\n}\n')),(0,a.kt)("p",null,"If the element contains information about a set edge property, it's in the\nfollowing format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "set_edge_property",\n  "edge": updated_edge_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property,\n  "new": new_value_of_that_property\n}\n')),(0,a.kt)("p",null,"If the element contains information about a removed edge property, it's in the\nfollowing format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "removed_edge_property",\n  "edge": updated_edge_object,\n  "key": property_that_was_updated,\n  "old": old_value_of_that_property\n}\n')),(0,a.kt)("p",null,"If the element contains information about a set vertex label, it's in the\nfollowing format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "set_vertex_label",\n  "vertex": updated_vertex_object,\n  "label": label\n}\n')),(0,a.kt)("p",null,"If the element contains information about a removed vertex label, it's in the\nfollowing format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_type": "removed_vertex_label",\n  "vertex": updated_vertex_object,\n  "label": label\n}\n')),(0,a.kt)("h3",{id:"owner"},"Owner"),(0,a.kt)("p",null,"The user who executes the create query is going to be the owner of the trigger.\nAuthentication and authorization are not supported in Memgraph Community, thus\nthe owner will always be ",(0,a.kt)("inlineCode",{parentName:"p"},"Null"),", and the privileges are not checked in Memgraph\nCommunity. In Memgraph Enterprise the privileges of the owner are used when\nexecuting ",(0,a.kt)("inlineCode",{parentName:"p"},"openCypherStatements"),", in other words, the execution of the\nstatements will fail if the owner doesn't have the required privileges. More\ninformation about how the owner affects the trigger can be found in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.0/reference-guide/security#owners"},"reference guide"),"."),(0,a.kt)("h2",{id:"dropping-a-trigger"},"Dropping a trigger"),(0,a.kt)("p",null,"A trigger can be removed by running the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"DROP TRIGGER trigger_name;\n")),(0,a.kt)("h2",{id:"trigger-info"},"Trigger info"),(0,a.kt)("p",null,"Users can get info about all the triggers by using the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"SHOW TRIGGERS;\n")),(0,a.kt)("p",null,"which returns results in the following format:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"trigger name"),(0,a.kt)("th",{parentName:"tr",align:null},"statement"),(0,a.kt)("th",{parentName:"tr",align:null},"event type"),(0,a.kt)("th",{parentName:"tr",align:null},"phase"),(0,a.kt)("th",{parentName:"tr",align:null},"owner"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name of the trigger"),(0,a.kt)("td",{parentName:"tr",align:null},"statement which the trigger executes"),(0,a.kt)("td",{parentName:"tr",align:null},"event which triggers the statement"),(0,a.kt)("td",{parentName:"tr",align:null},"phase at which the trigger executes its statement"),(0,a.kt)("td",{parentName:"tr",align:null},"owner of the trigger or ",(0,a.kt)("inlineCode",{parentName:"td"},"Null"))))))}u.isMDXComponent=!0}}]);