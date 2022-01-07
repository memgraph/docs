"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59345],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(a),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98093:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={id:"computer-security",title:"Computer Security",sidebar_label:"Computer Security"},c="Introduction",l={unversionedId:"use-cases/computer-security",id:"use-cases/computer-security",title:"Computer Security",description:"Our world is full of data that is constantly changing. We need to keep track of",source:"@site/mage/use-cases/computer-security.md",sourceDirName:"use-cases",slug:"/use-cases/computer-security",permalink:"/docs/mage/use-cases/computer-security",editUrl:"https://github.com/memgraph/docs/tree/master/mage/use-cases/computer-security.md",tags:[],version:"current",frontMatter:{id:"computer-security",title:"Computer Security",sidebar_label:"Computer Security"},sidebar:"mage",previous:{title:"Bioinformatics",permalink:"/docs/mage/use-cases/bioinformatics"},next:{title:"Drug Discovery",permalink:"/docs/mage/use-cases/drug-discovery"}},u=[{value:"Applying graphs",id:"applying-graphs",children:[{value:"Data privacy",id:"data-privacy",children:[],level:3},{value:"Track data lineage",id:"track-data-lineage",children:[],level:3},{value:"Data access control",id:"data-access-control",children:[],level:3},{value:"Anomaly detection in data security",id:"anomaly-detection-in-data-security",children:[],level:3}],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],p={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Our world is full of data that is constantly changing. We need to keep track of\nthat data and extract anything valuable from it. Relationships between different\nkinds of data can tell us more than the data itself, and those relationships\nhelp detect any anomalies in network systems. If we want to make our network\nsafe, we must be aware of all changes and how they affect our system as a whole."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"memgraph-graph-algorithm-applications-computer-security",src:a(52135).Z})),(0,o.kt)("h2",{id:"applying-graphs"},"Applying graphs"),(0,o.kt)("h3",{id:"data-privacy"},"Data privacy"),(0,o.kt)("p",null,"Nowadays, protecting an individual's privacy preferences is maybe more important\nthan ever. It is possible to track private information with graph databases and\nwhen and how someone used that information. Also, systems that are using\nspecific data can be tracked. Using graph databases, the personal data\npossession of some companies can be General Data Protection Requirements (GDPR)\ncompliant."),(0,o.kt)("p",null,"Besides that, ",(0,o.kt)("strong",{parentName:"p"},"data classification")," is the process of classifying data based on\nuser-configured characteristics, which represents a big part of data security\nstrategies. Data classification can help you find the location of sensitive and\nregulated data."),(0,o.kt)("h3",{id:"track-data-lineage"},"Track data lineage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data lineage")," tells us more about the life cycle of our data. It shows the whole\ndata flow from its creation until its final form. That can be easily visualized\nusing a graph database. By tracking data lineage with a graph database, you can\nfollow any error in data processes or implement changes to some processes more\nefficiently. With data lineage, you can track whether your data has been\ncorrectly transformed and catch if some untrusted source has created the data. "),(0,o.kt)("p",null,"Previously mentioned data classification can be combined with data lineage.\nAfter data classification has discovered the location of sensitive data, data\nlineage finds out the whole life cycle of those files and figures all the\npossible security threats."),(0,o.kt)("h3",{id:"data-access-control"},"Data access control"),(0,o.kt)("p",null,"Organizations can authorize certain employees to access company data securely\nwith ",(0,o.kt)("strong",{parentName:"p"},"data access control"),". In that way, the organization's access to resources\ncomplies with the company's policies and any official regulations. There are\ndifferent types of access control. Usually, employees are divided into roles,\nand each role has access to some part of the data. Graph databases come as a\nperfect solution to that problem since each employee can be represented with\nnode, and based on their role property, they could have access (be connected\nwith) certain data. Another way to approach access control is data-centric\naccess control. Each data has a type, and different users can access data based\non the type of data they have permission to access. The third way is\ncontext-centric access control, where everything depends on the nature of\naccess. For example, permissions are given based on the time of access and the\namount of data that an employee is trying to fetch. Companies usually combine\nthese access controls and, with graph databases, are able to create unique data\naccess control. "),(0,o.kt)("h3",{id:"anomaly-detection-in-data-security"},"Anomaly detection in data security"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Anomaly detection")," identifies rare occurrences or events of concern due to their\ndiffering characteristics from the majority of the data. Detecting anomalies in\ndata can help organizations track security errors, structural defects, or bank\nfrauds. There are numerous techniques for spotting anomalies in a large set of\ndata, and graph algorithms on your data stored in a graph database are among\nthem. When you find some anomaly, you can use found features to predict future\nfrauds."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"This text is a ",(0,o.kt)("strong",{parentName:"p"},"summary")," of one area that fits perfectly with the application\nof graphs. Therefore, we would like to have you with us when ",(0,o.kt)("strong",{parentName:"p"},"implementing"),"\nsome of these solutions. Share ",(0,o.kt)("strong",{parentName:"p"},"opinions"),", ",(0,o.kt)("strong",{parentName:"p"},"experiences")," and ",(0,o.kt)("strong",{parentName:"p"},"problems"),"\nyou encounter when working with ",(0,o.kt)("strong",{parentName:"p"},"Memgraph")," on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord\nserver"),". We are here for you and we will help you\nalong the way."))}d.isMDXComponent=!0},52135:function(e,t,a){t.Z=a.p+"assets/images/memgraph-graph-algorithm-applications-computer-security-73b86b28e8b7fa2b30c1c0235ff63ea3.png"}}]);