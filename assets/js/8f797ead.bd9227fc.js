"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76878],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"existence-constraint",title:"How to enforce existence constraint",sidebar_label:"Existence constraint"},c=void 0,l={unversionedId:"how-to-guides/constraints/existence-constraint",id:"version-2.3.1/how-to-guides/constraints/existence-constraint",title:"How to enforce existence constraint",description:"Existence constraint enforces that each vertex that has a specific label",source:"@site/memgraph_versioned_docs/version-2.3.1/how-to-guides/constraints/existence-constraint.md",sourceDirName:"how-to-guides/constraints",slug:"/how-to-guides/constraints/existence-constraint",permalink:"/docs/memgraph/how-to-guides/constraints/existence-constraint",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/how-to-guides/constraints/existence-constraint.md",tags:[],version:"2.3.1",frontMatter:{id:"existence-constraint",title:"How to enforce existence constraint",sidebar_label:"Existence constraint"},sidebar:"memgraph",previous:{title:"Change configuration and access logs",permalink:"/docs/memgraph/how-to-guides/config-logs"},next:{title:"Uniqueness constraint",permalink:"/docs/memgraph/how-to-guides/constraints/uniqueness-constraint"}},p={},u=[{value:"Where to next?",id:"where-to-next",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Existence constraint enforces that each vertex that has a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"label"),"\nalso must have the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"property"),". Only one label and property can be\nsupplied at a time.  This constraint can be enforced using the following\nlanguage construct:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:label) ASSERT EXISTS (n.property);\n")),(0,a.kt)("p",null,"For example, suppose you are keeping track of basic employee info in your\ndatabase. Obviously, each employee should have a first name and last name. You\ncan enforce this by issuing the following queries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT EXISTS (n.first_name);\nCREATE CONSTRAINT ON (n:Employee) ASSERT EXISTS (n.last_name);\n")),(0,a.kt)("p",null,"You can confirm that your constraint was successfully created by issuing the\nfollowing query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW CONSTRAINT INFO;\n")),(0,a.kt)("p",null,"You should get a result similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| exists          | Employee        | first_name      |\n| exists          | Employee        | last_name       |\n+-----------------+-----------------+-----------------+\n")),(0,a.kt)("p",null,"Trying to modify the database in a way that violates the constraint will\nyield an error."),(0,a.kt)("p",null,"Constraints can also be dropped using the ",(0,a.kt)("inlineCode",{parentName:"p"},"DROP")," keyword. For example,\ndropping the previously created constraints can be done by the following\nquery:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP CONSTRAINT ON (n:Employee) ASSERT EXISTS (n.first_name);\nDROP CONSTRAINT ON (n:Employee) ASSERT EXISTS (n.last_name);\n")),(0,a.kt)("p",null,"Now, ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields an empty set."),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials"},"Tutorials")),"."))}d.isMDXComponent=!0}}]);