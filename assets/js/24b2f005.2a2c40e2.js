"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33543],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=d(a),k=r,u=c["".concat(o,".").concat(k)]||c[k]||s[k]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40044:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={id:"data-types",title:"Data types",sidebar_label:"Data types"},o=void 0,d={unversionedId:"reference-guide/data-types",id:"reference-guide/data-types",title:"Data types",description:"Since Memgraph is a graph database management system, data is stored in the form",source:"@site/docs/reference-guide/data-types.md",sourceDirName:"reference-guide",slug:"/reference-guide/data-types",permalink:"/docs/memgraph/next/reference-guide/data-types",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/data-types.md",tags:[],version:"current",frontMatter:{id:"data-types",title:"Data types",sidebar_label:"Data types"},sidebar:"memgraph",previous:{title:"Data durability and backup",permalink:"/docs/memgraph/next/reference-guide/backup"},next:{title:"Docker",permalink:"/docs/memgraph/next/reference-guide/deployment/docker"}},m={},s=[{value:"Node labels &amp; relationship types",id:"node-labels--relationship-types",level:2},{value:"Property types",id:"property-types",level:2},{value:"Temporal types",id:"temporal-types",level:2},{value:"Duration",id:"duration",level:3},{value:"Date",id:"date",level:3},{value:"LocalTime",id:"localtime",level:3},{value:"LocalDateTime",id:"localdatetime",level:3},{value:"Temporal types arithmetic",id:"temporal-types-arithmetic",level:2},{value:"Procedures API",id:"procedures-api",level:2}],c={toc:s};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Since Memgraph is a graph database management system, data is stored in the form\nof graph elements: nodes and relationships. Each graph element can contain\nvarious types of data. This page describes which data types are supported in\nMemgraph."),(0,l.kt)("h2",{id:"node-labels--relationship-types"},"Node labels & relationship types"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Nodes")," can have labels that are used to label or group nodes. A label is of\nthe type ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),", and each node can have none or multiple labels. Labels can be\nchanged at any time."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Relationships")," have a type, also represented in the form of a ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),".\nUnlike nodes, relationships must have exactly one relationship type and once it\nis set upon creation, it can never be modified again."),(0,l.kt)("h2",{id:"property-types"},"Property types"),(0,l.kt)("p",null,"Nodes and relationships can store various properties. Properties are similar to\nmappings or tables containing property names and their accompanying values.\nProperty names are represented as text, while values can be of different types."),(0,l.kt)("p",null,"Each property can store a single value, and it is not possible to have multiple\nproperties with the same name on a single graph element. But, the same property\nnames can be found across multiple graph elements."),(0,l.kt)("p",null,"Also, there are no restrictions on the number of properties that can be stored\nin a single graph element. The only restriction is that the values must be of\nthe supported types. Below is a table of supported data types."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Null")),(0,l.kt)("td",{parentName:"tr",align:null},"Property has no value, which is the same as if the property doesn't exist.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"A character string (text).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value, either ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null},"An integer number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Float")),(0,l.kt)("td",{parentName:"tr",align:null},"A floating-point number (real number).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List")),(0,l.kt)("td",{parentName:"tr",align:null},"A list containing any number of property values of any supported type under a single property name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Map")),(0,l.kt)("td",{parentName:"tr",align:null},"A mapping of string keys to values of any supported type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#duration"},(0,l.kt)("inlineCode",{parentName:"a"},"Duration"))),(0,l.kt)("td",{parentName:"tr",align:null},"A period of time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))),(0,l.kt)("td",{parentName:"tr",align:null},"A date with year, month, and day.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#localtime"},(0,l.kt)("inlineCode",{parentName:"a"},"LocalTime"))),(0,l.kt)("td",{parentName:"tr",align:null},"Time without the time zone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#localdatetime"},(0,l.kt)("inlineCode",{parentName:"a"},"LocalDateTime"))),(0,l.kt)("td",{parentName:"tr",align:null},"Date and time without the time zone.")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you want to modify ",(0,l.kt)("inlineCode",{parentName:"p"},"List")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Map")," property values, you need to replace them\nentirely."),(0,l.kt)("p",{parentName:"div"},"The following queries are valid:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:Node {property: [1, 2, 3]});\nCREATE (:Node {property: {key: "value"}});\n')),(0,l.kt)("p",{parentName:"div"},"But these are not:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Node) SET n.property[0] = 0;\nMATCH (n:Node) SET n.property.key = "other value";\n')))),(0,l.kt)("h2",{id:"temporal-types"},"Temporal types"),(0,l.kt)("h3",{id:"duration"},"Duration"),(0,l.kt)("p",null,"You can create a property of temporal type ",(0,l.kt)("inlineCode",{parentName:"p"},"Duration")," from a string or a map by\ncalling the function ",(0,l.kt)("inlineCode",{parentName:"p"},"duration"),"."),(0,l.kt)("p",null,"For strings, the duration format is: ",(0,l.kt)("inlineCode",{parentName:"p"},"P[nD]T[nH][nM][nS]")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," stands for\na number, and the capital letters are used as a separator with each field in ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),"\nmarked optional. For strings, Memgraph only allows the last field to be a\ndouble, e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"P2DT2.5H"),". However, for maps, every field can be a double, an int\nor a mixture of both. Memgraph also supports negative durations."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"D"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Days")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"H"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Hours")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"M"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Minutes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"S"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Seconds")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:F1Laps {lap: duration("PT2M2.33S")});\n')),(0,l.kt)("p",null,"Maps can contain the following six fields: ",(0,l.kt)("inlineCode",{parentName:"p"},"day"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"hour"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"minute"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"second"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"millisecond")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"microsecond"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:F1Laps {lap: duration({minute:2, second:2, microsecond:33})});\n")),(0,l.kt)("p",null,"At this point, it must be pointed out that durations internally hold\nmicroseconds. Each of the fields specified above is first converted to\nmicroseconds and then reduced by addition to a single value. This has an\ninteresting use case:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:F1Laps {lap: duration({minute:2, second:-2, microsecond:-33})});\n")),(0,l.kt)("p",null,"This converts ",(0,l.kt)("inlineCode",{parentName:"p"},"minutes"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"seconds")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"microseconds")," and effectively produces\nthe following equation: ",(0,l.kt)("inlineCode",{parentName:"p"},"minutes - seconds - microseconds"),"."),(0,l.kt)("p",null,"Each of the individual fields of a duration can be accessed through its\nproperties as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"day"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Converts all the microseconds back to days and returns the value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"hour"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Subtracts days and returns the leftover value as hours.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"minute"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Subtracts the days and returns the leftover value as minutes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"second"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Subtracts the days and returns the leftover value as seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"millisecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Subtracts the days and returns the leftover value as milliseconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"microsecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Subtracts the days and returns the leftover value as microseconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"nanosecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Subtracts the days and returns the leftover value as nanoseconds.")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:F1Laps {lap: duration({day:1, hour: 2, minute:3, second:4})});\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (f:F1Laps) RETURN f.lap.day;\n// Result\n>> 1\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (f:F1Laps) RETURN f.lap.hour;\n// Result\n>> 2\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (f:F1Laps) RETURN f.lap.minute;\n// Result\n>> 123 // The value without days is 2 hours and 3  minutes, that is 123 minutes\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (f:F1Laps) RETURN f.lap.second;\n// Result\n>> 7384 // The value without days is 2 hours, 3 minutes and 4 seconds, that is 7384 minutes\n")),(0,l.kt)("h3",{id:"date"},"Date"),(0,l.kt)("p",null,"You can create a property of temporal type ",(0,l.kt)("inlineCode",{parentName:"p"},"Date")," from a string or map by\ncalling the function ",(0,l.kt)("inlineCode",{parentName:"p"},"Date"),". For strings, the date format is specified by the\nISO 8601: ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYYMMDD")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Year")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"M"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"D"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Day")))),(0,l.kt)("p",null,"The smallest year is ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and the highest is ",(0,l.kt)("inlineCode",{parentName:"p"},"9999"),"."),(0,l.kt)("p",null,"You can call ",(0,l.kt)("inlineCode",{parentName:"p"},"date")," without arguments. This effectively sets the date field to\nthe current date of the calendar (UTC clock)."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:Person {birthday: date("1947-07-30")});\n')),(0,l.kt)("p",null,"For maps, three fields are available: ",(0,l.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"day"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:Person {birthday: date({year:1947, month:7, day:30})});\n")),(0,l.kt)("p",null,"You can access the individual fields of a date through its properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"year"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the year field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"month"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the month field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"day"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the day field")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (b:Person) RETURN b.birthday.year;\n")),(0,l.kt)("h3",{id:"localtime"},"LocalTime"),(0,l.kt)("p",null,"You can create a property of temporal type ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalTime")," from a string or map by\ncalling the function ",(0,l.kt)("inlineCode",{parentName:"p"},"localTime"),". For strings, the local time format is\nspecified by the ISO 8601: ",(0,l.kt)("inlineCode",{parentName:"p"},"[T]hh:mm:ss")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"[T]hh:mm")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"[T]hhmmss")," or\n",(0,l.kt)("inlineCode",{parentName:"p"},"[T]hhmm")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"[T]hh"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"h"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Hours")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"m"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Minutes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Seconds")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"seconds")," can be defined as decimal fractions with up to 6 digits. The first 3\ndigits represent milliseconds, and the last 3 digits microseconds. For example,\nthe string ",(0,l.kt)("inlineCode",{parentName:"p"},"T22:10:32.300600")," specifies ",(0,l.kt)("inlineCode",{parentName:"p"},"300")," milliseconds and ",(0,l.kt)("inlineCode",{parentName:"p"},"600"),"\nmicroseconds."),(0,l.kt)("p",null,"You can call ",(0,l.kt)("inlineCode",{parentName:"p"},"localTime")," without arguments. This effectively sets the time field\nto the current time of the calendar (UTC clock)."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:School {Calculus: localTime("09:15:00")});\n')),(0,l.kt)("p",null,"For maps, there are 5 fields available: ",(0,l.kt)("inlineCode",{parentName:"p"},"hour"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"minute"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"second"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"millisecond")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"microsecond"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:School {Calculus: localTime({hour:9, minute:15})});\n")),(0,l.kt)("p",null,"You can access the individual fields of a LocalTime through its properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"hour"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the hour field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"minute"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the minute field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"second"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the second field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"millisecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the millisecond field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"microsecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the microsecond field")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (s:School) RETURN s.Calculus.hour;\n")),(0,l.kt)("h3",{id:"localdatetime"},"LocalDateTime"),(0,l.kt)("p",null,"You can create a property of temporal type ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalDateTime")," from a string or map\nby calling the function ",(0,l.kt)("inlineCode",{parentName:"p"},"localDateTime"),". For strings, the local time format is\nspecified by the ISO 8601: ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDThh:mm:ss")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDThh:mm")," or\n",(0,l.kt)("inlineCode",{parentName:"p"},"YYYYMMDDThhmmss")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYYMMDDThhmm")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYYMMDDThh"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Year")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"M"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"D"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Day")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"h"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Hours")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"m"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Minutes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Seconds")))),(0,l.kt)("p",null,"You can call ",(0,l.kt)("inlineCode",{parentName:"p"},"localDateTime")," without arguments. This effectively sets the date\nand time fields to the current date and time of the calendar (UTC clock).\nExample:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:Flights {AIR123: localDateTime("2021-10-05T14:15:00")});\n')),(0,l.kt)("p",null,"For maps the following fields are available: ",(0,l.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"day"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"hour"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"minute"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"second"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"millisecond")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"microsecond"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:Flights {AIR123: localDateTime(year:2021, month:10, day:5, hour:14, minute:15)});\n")),(0,l.kt)("p",null,"You can access the individual fields of LocalDateTime through its properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"year"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the year field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"month"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the month field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"day"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the day field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"hour"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the hour field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"minute"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the minute field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"second"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the second field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"millisecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the millisecond field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"microsecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the microsecond field")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (f:Flights) RETURN f.AIR123.year;\n")),(0,l.kt)("h2",{id:"temporal-types-arithmetic"},"Temporal types arithmetic"),(0,l.kt)("p",null,"Temporal types ",(0,l.kt)("inlineCode",{parentName:"p"},"Duration"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalTime")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalDateTime")," support\nnative arithmetic, and the operations are summarized in the following table:"),(0,l.kt)("p",null,"Duration operations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"op"),(0,l.kt)("th",{parentName:"tr",align:"center"},"result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration + Duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration - Duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"- Duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration")))),(0,l.kt)("p",null,"Date operations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"op"),(0,l.kt)("th",{parentName:"tr",align:"center"},"result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Date + Duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration + Date"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Date - Duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Date - Date"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration")))),(0,l.kt)("p",null,"LocalTime operations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"op"),(0,l.kt)("th",{parentName:"tr",align:"center"},"result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalTime + Duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration + LocalTime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalTime - Duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalTime - LocalTime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration")))),(0,l.kt)("p",null,"LocalDateTime operations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"operation"),(0,l.kt)("th",{parentName:"tr",align:"center"},"result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalDateTime + Duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalDateTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration + LocalTateTime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalDateTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalDateTime - Duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalDateTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalDateTime - LocalDateTime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration")))),(0,l.kt)("h2",{id:"procedures-api"},"Procedures API"),(0,l.kt)("p",null,"Data types are also used within query modules. Check out the documentation for\nthe ",(0,l.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/api/python-api"},"Python\nAPI"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/api/c-api"},"C\nAPI"),"."))}k.isMDXComponent=!0}}]);