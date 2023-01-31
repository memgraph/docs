"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48041],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={id:"uniqueness-constraint",title:"How to enforce uniqueness constraint",sidebar_label:"Uniqueness constraint"},i=void 0,s={unversionedId:"how-to-guides/constraints/uniqueness-constraint",id:"version-2.5.2/how-to-guides/constraints/uniqueness-constraint",title:"How to enforce uniqueness constraint",description:"Uniqueness constraint enforces that each label, property_set pair is unique.",source:"@site/memgraph_versioned_docs/version-2.5.2/how-to-guides/constraints/uniqueness-constraint.md",sourceDirName:"how-to-guides/constraints",slug:"/how-to-guides/constraints/uniqueness-constraint",permalink:"/docs/memgraph/how-to-guides/constraints/uniqueness-constraint",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.2/how-to-guides/constraints/uniqueness-constraint.md",tags:[],version:"2.5.2",frontMatter:{id:"uniqueness-constraint",title:"How to enforce uniqueness constraint",sidebar_label:"Uniqueness constraint"},sidebar:"memgraph",previous:{title:"Existence constraint",permalink:"/docs/memgraph/how-to-guides/constraints/existence-constraint"},next:{title:"Managing Python environment",permalink:"/docs/memgraph/how-to-guides/managing-python-environment"}},l={},u=[{value:"Where to next?",id:"where-to-next",level:3}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Uniqueness constraint enforces that each ",(0,o.kt)("inlineCode",{parentName:"p"},"label, property_set")," pair is unique.\nThis constraint can be enforced using the following language construct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:label) ASSERT n.property1, n.property2, ..., IS UNIQUE;\n")),(0,o.kt)("p",null,"For example, suppose you are keeping track of basic employee info in your\ndatabase. Obviously, each employee should have a unique e-mail address. You can\nenforce this by issuing the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;\n")),(0,o.kt)("p",null,"You can confirm that your constraint was successfully created by issuing the\nfollowing query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW CONSTRAINT INFO;\n")),(0,o.kt)("p",null,"You should get a result similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| unique          | Employee        | email           |\n+-----------------+-----------------+-----------------+\n")),(0,o.kt)("p",null,"Trying to modify the database in a way that violates the constraint will yield\nan error ",(0,o.kt)("inlineCode",{parentName:"p"},"Unable to commit due to unique constraint violation on\n:Employee(email)"),"."),(0,o.kt)("p",null,"Naturally, you can also specify multiple properties when creating uniqueness\nconstraints. For example, we might want to enforce that all employees have a\nunique ",(0,o.kt)("inlineCode",{parentName:"p"},"(name, surname)")," pair (obviously, this would be a bad decision in real\nlife). This can be achieved by the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;\n")),(0,o.kt)("p",null,"At this point, ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields the following result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| unique          | Employee        | email           |\n| unique          | Employee        | name, surname   |\n+-----------------+-----------------+-----------------+\n")),(0,o.kt)("p",null,"Constraints can also be dropped using the ",(0,o.kt)("inlineCode",{parentName:"p"},"DROP")," keyword. For example,\ndropping the previously created constraints can be done by the following\nquery:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;\nDROP CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;\n")),(0,o.kt)("p",null,"Now, ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields an empty set."),(0,o.kt)("h3",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials"},"Tutorials")),"."))}c.isMDXComponent=!0}}]);