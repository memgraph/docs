"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62916],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(a),k=r,u=s["".concat(o,".").concat(k)]||s[k]||c[k]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},44679:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={id:"temporal-types",title:"Temporal types",sidebar_label:"Temporal types"},o=void 0,d={unversionedId:"reference-guide/temporal-types",id:"reference-guide/temporal-types",isDocsHomePage:!1,title:"Temporal types",description:"Temporal types can be stored as properties of a vertex or edge. The user can use",source:"@site/docs/reference-guide/temporal-types.md",sourceDirName:"reference-guide",slug:"/reference-guide/temporal-types",permalink:"/docs/memgraph/next/reference-guide/temporal-types",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/temporal-types.md",tags:[],version:"current",frontMatter:{id:"temporal-types",title:"Temporal types",sidebar_label:"Temporal types"},sidebar:"memgraph",previous:{title:"Python API",permalink:"/docs/memgraph/next/reference-guide/streams/transformation-modules/api/python-api"},next:{title:"TensorFlow Op",permalink:"/docs/memgraph/next/reference-guide/tensorflow"}},m=[{value:"Duration",id:"duration",children:[],level:2},{value:"Date",id:"date",children:[],level:2},{value:"LocalTime",id:"localtime",children:[],level:2},{value:"LocalDateTime",id:"localdatetime",children:[],level:2},{value:"Temporal types arithmetic",id:"temporal-types-arithmetic",children:[],level:2},{value:"Procedures API",id:"procedures-api",children:[],level:2}],c={toc:m};function s(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Temporal types can be stored as properties of a vertex or edge. The user can use\nCypher queries or procedures to read or write these properties. The following\ntable summarizes the temporal types that Memgraph currently supports:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Data type that represents a period of time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Date"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Data type that represents a date with year, month and day.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalTime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Data type that represents time within a day without timezone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LocalDateTime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Data type that represents a date and local time.")))),(0,l.kt)("p",null,"Note, that all the types excluding Durations are ISO 8601 compliant."),(0,l.kt)("h2",{id:"duration"},"Duration"),(0,l.kt)("p",null,"You can create ",(0,l.kt)("inlineCode",{parentName:"p"},"Duration")," from a string or a map by calling the function\n",(0,l.kt)("inlineCode",{parentName:"p"},"duration"),"."),(0,l.kt)("p",null,"For strings, the duration format is:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"P[nD]T[nH][nM][nS]")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," stands for number and the capital letters are\nused as a separator with each field in ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," marked optional. For strings\nMemgraph only allows the last field to be a double, e.g, ",(0,l.kt)("inlineCode",{parentName:"p"},"P2DT2.5H"),". However,\nfor maps, every field can be a double, an int or a mixture of both. Note, we\nsupport negative durations."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"D"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Days")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"H"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Hours")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"M"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Minutes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"S"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Seconds")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:F1Laps {lap : duration("PT2M2.33S")})\n')),(0,l.kt)("p",null,"Maps can contain the following six fields: ",(0,l.kt)("inlineCode",{parentName:"p"},"day"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"hour"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"minute"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"second"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"millisecond")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"microsecond"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:F1Laps {lap : duration({minute:2, seconds:2, microseconds:33})})\n")),(0,l.kt)("p",null,"At this point, it must be pointed out that durations internally hold\nmicroseconds. Each of the fields specified above is first converted to\nmicroseconds and then reduced by addition to a single value. This has an\ninteresting use case:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:F1Laps {lap : duration({minute:2, seconds:-2, microseconds:-33})})\n")),(0,l.kt)("p",null,"This converts ",(0,l.kt)("inlineCode",{parentName:"p"},"minutes"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"seconds")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"microseconds")," and effectively produces\nthe following equation: ",(0,l.kt)("inlineCode",{parentName:"p"},"minutes - seconds - microseconds"),"."),(0,l.kt)("p",null,"Each of the individual fields of a duration can be accessed through its\nproperties as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"day"),(0,l.kt)("td",{parentName:"tr",align:"center"},"This converts all the microseconds to days and returns them.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"hour"),(0,l.kt)("td",{parentName:"tr",align:"center"},"This subtracts days and returns the leftover as hours.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"minute"),(0,l.kt)("td",{parentName:"tr",align:"center"},"This subtracts the days and returns the leftover as minutes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"second"),(0,l.kt)("td",{parentName:"tr",align:"center"},"This subtracts the days and returns the leftover as seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"millisecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"This subtracts the days and returns the leftover as milliseconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"microsecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"This subtracts the days and returns the leftover as microseconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"nanosecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"This subtracts the days and returns the leftover as nanoseconds.")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (f:F1Laps) RETURN f.lap.minute\n")),(0,l.kt)("h2",{id:"date"},"Date"),(0,l.kt)("p",null,"You can create ",(0,l.kt)("inlineCode",{parentName:"p"},"Date")," from a string or map by calling the function ",(0,l.kt)("inlineCode",{parentName:"p"},"Date"),". For\nstrings, the date format is specified by the ISO 8601:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYYMMDD")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Year")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"M"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"D"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Day")))),(0,l.kt)("p",null,"The smallest year is ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and the highest is ",(0,l.kt)("inlineCode",{parentName:"p"},"9999"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:Person {birthday : date("1947-07-30")})\n')),(0,l.kt)("p",null,"For maps, three fields are available: ",(0,l.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"day"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:Person {birthday: date({year:1947, month:7, day:30})})\n")),(0,l.kt)("p",null,"You can access the individual fields of a date through its properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"year"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the year field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"month"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the month field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"day"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the day field")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (b:Person) RETURN b.birthday.year\n")),(0,l.kt)("h2",{id:"localtime"},"LocalTime"),(0,l.kt)("p",null,"You can create ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalTime")," from a string or map by calling the function\n",(0,l.kt)("inlineCode",{parentName:"p"},"localtime"),". For strings, the local time format is specified by the ISO 8601:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[T]hh:mm:ss")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"[T]hh:mm")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"[T]hhmmss")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"[T]hhmm")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"[T]hh")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"h"),(0,l.kt)("td",{parentName:"tr",align:"center"},"hours")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"m"),(0,l.kt)("td",{parentName:"tr",align:"center"},"minutes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"seconds")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"seconds")," can be defined as decimal fractions with up to 6 digits. The first 3\ndigits represent milliseconds and the last 3 digits microseconds. For example\nthe string ",(0,l.kt)("inlineCode",{parentName:"p"},"T22:10:32.300600")," specifies ",(0,l.kt)("inlineCode",{parentName:"p"},"300")," milliseconds and ",(0,l.kt)("inlineCode",{parentName:"p"},"600"),"\nmicroseconds."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:School {Calculus : LocalTime("09:15:00")})\n')),(0,l.kt)("p",null,"For maps there are 5 fields available: ",(0,l.kt)("inlineCode",{parentName:"p"},"hour"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"minute"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"second"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"millisecond"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"microsecond"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:School {Calculus : LocalTime({hour:9, minute:15})})\n")),(0,l.kt)("p",null,"You can access the individual fields of a LocalTime through its properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"hour"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the hour field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"minute"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the minute field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"second"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the second field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"millisecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the millisecond field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"microsecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the microsecond field")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (s:School) RETURN s.Calculus.hour\n")),(0,l.kt)("h2",{id:"localdatetime"},"LocalDateTime"),(0,l.kt)("p",null,"You can create ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalDateTime")," from a string or map by calling the function\n",(0,l.kt)("inlineCode",{parentName:"p"},"localdatetime"),". For strings, the local time format is specified by the ISO\n8601:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDThh:mm:ss")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDThh:mm")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYYMMDDThhmmss")," or\n",(0,l.kt)("inlineCode",{parentName:"p"},"YYYYMMDDThhmm")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYYMMDDThh")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Year")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"M"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"D"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Day")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"h"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Hours")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"m"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Minutes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Seconds")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:Flights {AIR123 : LocalDateTime("2021-10-05T14:15:00")})\n')),(0,l.kt)("p",null,"For maps the following fields are available: ",(0,l.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"day"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"hour"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"minute"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"second"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"millisecond")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"microsecond")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:Flights {AIR123 : LocalDateTime(year:2021, month:10, day:5, hour:14, minute:15)})\n")),(0,l.kt)("p",null,"You can access the individual fields of LocalDateTime through its properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"year"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the year field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"month"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the month field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"day"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the day field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"hour"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the hour field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"minute"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the minute field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"second"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the second field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"millisecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the millisecond field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"microsecond"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Returns the microsecond field")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (f:Flights) RETURN f.AIR123.year\n")),(0,l.kt)("h2",{id:"temporal-types-arithmetic"},"Temporal types arithmetic"),(0,l.kt)("p",null,"Temporal types support native arithmetic and the operations are summarized in\nthe following table:"),(0,l.kt)("p",null,"Duration operations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"op"),(0,l.kt)("th",{parentName:"tr",align:"center"},"result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration + duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"duration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration - duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"duration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"-duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"duration")))),(0,l.kt)("p",null,"Date operations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"op"),(0,l.kt)("th",{parentName:"tr",align:"center"},"result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"date + duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration + date"),(0,l.kt)("td",{parentName:"tr",align:"center"},"date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"date - duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"date - date"),(0,l.kt)("td",{parentName:"tr",align:"center"},"duration")))),(0,l.kt)("p",null,"LocalTime operations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"op"),(0,l.kt)("th",{parentName:"tr",align:"center"},"result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"localtime + duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"localtime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration + localtime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"localtime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"localtime - duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"localtime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"localtime - localtime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"duration")))),(0,l.kt)("p",null,"LocalDateTime operations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"operation"),(0,l.kt)("th",{parentName:"tr",align:"center"},"result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"localdatetime + duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"localdatetime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration + localdatetime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"+ localdatetime/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"localdatetime - duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"localdatetime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"localdatetime - localdatetime"),(0,l.kt)("td",{parentName:"tr",align:"center"},"duration")))),(0,l.kt)("h2",{id:"procedures-api"},"Procedures API"),(0,l.kt)("p",null,"Temporal types can also be used within query modules, you can find the\ndocumentation on the ",(0,l.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/api/python-api"},"Pyhon\nAPI")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/api/c-api"},"C\nAPI")," pages."))}s.isMDXComponent=!0}}]);