"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89145],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={id:"uniqueness-constraint",title:"Uniqueness constraint",sidebar_label:"Uniqueness constraint"},i=void 0,s={unversionedId:"database-functionalities/constraints/uniqueness-constraint",id:"version-2.1.0/database-functionalities/constraints/uniqueness-constraint",title:"Uniqueness constraint",description:"Uniqueness constraint enforces that each label, property_set pair is unique.",source:"@site/memgraph_versioned_docs/version-2.1.0/database-functionalities/constraints/uniqueness-constraint.md",sourceDirName:"database-functionalities/constraints",slug:"/database-functionalities/constraints/uniqueness-constraint",permalink:"/docs/memgraph/2.1.0/database-functionalities/constraints/uniqueness-constraint",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/database-functionalities/constraints/uniqueness-constraint.md",tags:[],version:"2.1.0",frontMatter:{id:"uniqueness-constraint",title:"Uniqueness constraint",sidebar_label:"Uniqueness constraint"},sidebar:"version-2.1.0/memgraph",previous:{title:"Existence constraint",permalink:"/docs/memgraph/2.1.0/database-functionalities/constraints/existence-constraint"},next:{title:"Inspecting queries",permalink:"/docs/memgraph/2.1.0/database-functionalities/inspecting-queries"}},l={},c=[{value:"Where to next?",id:"where-to-next",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Uniqueness constraint enforces that each ",(0,a.kt)("inlineCode",{parentName:"p"},"label, property_set")," pair is unique.\nThis constraint can be enforced using the following language construct:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:label) ASSERT n.property1, n.property2, ..., IS UNIQUE;\n")),(0,a.kt)("p",null,"For example, suppose you are keeping track of basic employee info in your\ndatabase. Obviously, each employee should have a unique e-mail address. You can\nenforce this by issuing the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;\n")),(0,a.kt)("p",null,"You can confirm that your constraint was successfully created by issuing the\nfollowing query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW CONSTRAINT INFO;\n")),(0,a.kt)("p",null,"You should get a result similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| unique          | Employee        | email           |\n+-----------------+-----------------+-----------------+\n")),(0,a.kt)("p",null,"Trying to modify the database in a way that violates the constraint will yield\nan error ",(0,a.kt)("inlineCode",{parentName:"p"},"Unable to commit due to unique constraint violation on\n:Employee(email)"),"."),(0,a.kt)("p",null,"Naturally, you can also specify multiple properties when creating uniqueness\nconstraints. For example, we might want to enforce that all employees have a\nunique ",(0,a.kt)("inlineCode",{parentName:"p"},"(name, surname)")," pair (obviously, this would be a bad decision in real\nlife). This can be achieved by the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;\n")),(0,a.kt)("p",null,"At this point, ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields the following result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| unique          | Employee        | email           |\n| unique          | Employee        | name, surname   |\n+-----------------+-----------------+-----------------+\n")),(0,a.kt)("p",null,"Constraints can also be dropped using the ",(0,a.kt)("inlineCode",{parentName:"p"},"DROP")," keyword. For example,\ndropping the previously created constraints can be done by the following\nquery:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;\nDROP CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;\n")),(0,a.kt)("p",null,"Now, ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields an empty set."),(0,a.kt)("h3",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.0/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.0/tutorials"},"Tutorials")),"."))}u.isMDXComponent=!0}}]);