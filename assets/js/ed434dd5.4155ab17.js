"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61501],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89354:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"analyzing-ted-talks",title:"Analyzing TED Talks",sidebar_label:"Analyzing TED Talks"},s=void 0,p={unversionedId:"tutorials/analyzing-ted-talks",id:"version-1.3.0/tutorials/analyzing-ted-talks",isDocsHomePage:!1,title:"Analyzing TED Talks",description:"This article is a part of a series intended to show how to use Memgraph",source:"@site/memgraph_versioned_docs/version-1.3.0/tutorials/analyzing-ted-talks.md",sourceDirName:"tutorials",slug:"/tutorials/analyzing-ted-talks",permalink:"/docs/memgraph/1.3.0/tutorials/analyzing-ted-talks",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/tutorials/analyzing-ted-talks.md",tags:[],version:"1.3.0",frontMatter:{id:"analyzing-ted-talks",title:"Analyzing TED Talks",sidebar_label:"Analyzing TED Talks"},sidebar:"version-1.3.0/memgraph",previous:{title:"Tutorials overview",permalink:"/docs/memgraph/1.3.0/tutorials/tutorials"},next:{title:"Backpacking through Europe",permalink:"/docs/memgraph/1.3.0/tutorials/backpacking-through-europe"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Data Model",id:"data-model",children:[]},{value:"Exploring the dataset",id:"exploring-the-dataset",children:[]},{value:"Example queries using Cypher",id:"example-queries-using-cypher",children:[]}],m={toc:u};function d(e){var n=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article is a part of a series intended to show how to use Memgraph\non real-world data to retrieve some interesting and useful\ninformation."),(0,i.kt)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/1.3.0/tutorials/tutorials"},"tutorial overview section"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.ted.com/"},"TED")," is a nonprofit organization devoted to spreading\nideas, usually in the form of short, powerful talks.\nToday, TED talks are influential videos from expert speakers on almost all\ntopics ","\u2014"," from science to business to global issues.\nHere we present a small dataset which consists of 97 talks, show how to model\nthis data as a graph and demonstrate a few example queries."),(0,i.kt)("h2",{id:"data-model"},"Data Model"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each TED talk has a main speaker, so we\nidentify two types of nodes ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"Talk")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Speaker"),". "),(0,i.kt)("li",{parentName:"ul"},"We add an edge of type ",(0,i.kt)("inlineCode",{parentName:"li"},"Gave")," pointing to a ",(0,i.kt)("inlineCode",{parentName:"li"},"Talk")," from its main ",(0,i.kt)("inlineCode",{parentName:"li"},"Speaker"),"."),(0,i.kt)("li",{parentName:"ul"},"Each speaker has a name so we can add property ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Speaker")," node."),(0,i.kt)("li",{parentName:"ul"},"We'll add properties ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"title")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"description")," to node\n",(0,i.kt)("inlineCode",{parentName:"li"},"Talk"),". "),(0,i.kt)("li",{parentName:"ul"},"Each talk is given in a specific TED event, so we can\ncreate node ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," with property ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and relationship ",(0,i.kt)("inlineCode",{parentName:"li"},"InEvent")," between\ntalk and event."),(0,i.kt)("li",{parentName:"ul"},"Talks are tagged with keywords to facilitate searching, hence we\nadd node ",(0,i.kt)("inlineCode",{parentName:"li"},"Tag")," with property ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and relationship ",(0,i.kt)("inlineCode",{parentName:"li"},"HasTag")," between talk and\ntag."),(0,i.kt)("li",{parentName:"ul"},"Users give ratings to each talk by selecting up to three\npredefined string values. Therefore we add node ",(0,i.kt)("inlineCode",{parentName:"li"},"Rating")," with these values as\nproperty ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and relationship",(0,i.kt)("inlineCode",{parentName:"li"},"HasRating")," with property ",(0,i.kt)("inlineCode",{parentName:"li"},"user_count")," between\ntalk and rating nodes.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TED",src:t(34294).Z})),(0,i.kt)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),(0,i.kt)("p",null,"You have two options for exploring this dataset.\nIf you just want to take a look at the dataset and try out a few queries, open\n",(0,i.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and continue with\nthe tutorial there. Note that you will not be able to execute ",(0,i.kt)("inlineCode",{parentName:"p"},"write")," operations."),(0,i.kt)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",(0,i.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and navigate\nto the ",(0,i.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",(0,i.kt)("inlineCode",{parentName:"p"},"TED talks")," and continue with the tutorial."),(0,i.kt)("h2",{id:"example-queries-using-cypher"},"Example queries using Cypher"),(0,i.kt)("p",null,"In the queries below, we are using ",(0,i.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher"),"\nto query Memgraph via the console."),(0,i.kt)("p",null,"1) Find all talks given by specific speaker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Speaker {name: "Hans Rosling"})-[:Gave]->(m:Talk)\nRETURN m.title;\n')),(0,i.kt)("p",null,"2) Find the top 20 speakers with most talks given:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Speaker)-[:Gave]->(m)\nRETURN n.name, COUNT(m) AS TalksGiven\nORDER BY TalksGiven DESC LIMIT 20;\n")),(0,i.kt)("p",null,"3) Find talks related by tag to specific talk and count them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Talk {name: "Michael Green: Why we should build wooden skyscrapers"})\n      -[:HasTag]->(t:Tag)<-[:HasTag]-(m:Talk)\nWITH * ORDER BY m.name\nRETURN t.name, COLLECT(m.name), COUNT(m) AS TalksCount\nORDER BY TalksCount DESC;\n')),(0,i.kt)("p",null,"4) Find 20 most frequently used tags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (t:Tag)<-[:HasTag]-(n:Talk)\nRETURN t.name AS Tag, COUNT(n) AS TalksCount\nORDER BY TalksCount DESC, Tag LIMIT 20;\n")),(0,i.kt)("p",null,'5) Find 20 talks most rated as "Funny". If you want to query by other ratings,\npossible values are: Obnoxious, Jaw-dropping, OK, Persuasive, Beautiful,\nConfusing, Longwinded, Unconvincing, Fascinating, Ingenious, Courageous, Funny,\nInformative and Inspiring.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (r:Rating{name:"Funny"})<-[e:HasRating]-(m:Talk)\nRETURN m.name, e.user_count ORDER BY e.user_count DESC LIMIT 20;\n')),(0,i.kt)("p",null,"6) Find inspiring talks and their speakers from the field of technology:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Talk)-[:HasTag]->(m:Tag {name: "technology"})\nMATCH (n)-[r:HasRating]->(p:Rating {name: "Inspiring"})\nMATCH (n)<-[:Gave]-(s:Speaker)\nWHERE r.user_count > 1000\nRETURN n.title, s.name, r.user_count ORDER BY r.user_count DESC;\n')),(0,i.kt)("p",null,"7) Now let's see one real-world example ","\u2014"," how to make a real-time\nrecommendation. If you've just watched a talk from a certain\nspeaker (e.g. Hans Rosling) you might be interested in finding more talks from\nthe same speaker on a similar topic:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Speaker {name: "Hans Rosling"})-[:Gave]->(m:Talk)\nMATCH (t:Talk {title: "New insights on poverty"})-[:HasTag]->(tag:Tag)<-[:HasTag]-(m)\nWITH * ORDER BY tag.name\nRETURN m.title as Title, COLLECT(tag.name), COUNT(tag) as TagCount\nORDER BY TagCount DESC, Title;\n')),(0,i.kt)("p",null,"The following few queries are focused on extracting information about\nTED events."),(0,i.kt)("p",null,"8) Find how many talks were given per event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Event)<-[:InEvent]-(t:Talk)\nRETURN n.name as Event, COUNT(t) AS TalksCount\nORDER BY TalksCount DESC, Event\nLIMIT 20;\n")),(0,i.kt)("p",null,"9) Find the most popular tags in the specific event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Event {name:"TED2006"})<-[:InEvent]-(t:Talk)-[:HasTag]->(tag:Tag)\nRETURN tag.name as Tag, COUNT(t) AS TalksCount\nORDER BY TalksCount DESC, Tag\nLIMIT 20;\n')),(0,i.kt)("p",null,"10) Discover which speakers participated in more than 2 events:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Speaker)-[:Gave]->(t:Talk)-[:InEvent]->(e:Event)\nWITH n, COUNT(e) AS EventsCount WHERE EventsCount > 2\nRETURN n.name as Speaker, EventsCount\nORDER BY EventsCount DESC, Speaker;\n")),(0,i.kt)("p",null,"11) For each speaker search for other speakers that participated in same\nevents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Speaker)-[:Gave]->()-[:InEvent]->(e:Event)<-[:InEvent]-()<-[:Gave]-(m:Speaker)\nWHERE n.name != m.name\nWITH DISTINCT n, m ORDER BY m.name\nRETURN n.name AS Speaker, COLLECT(m.name) AS Others\nORDER BY Speaker;\n")))}d.isMDXComponent=!0},34294:function(e,n,t){n.Z=t.p+"assets/images/TED_metagraph-cfc7ffadb73736228f2e33e6b44133c2.png"}}]);