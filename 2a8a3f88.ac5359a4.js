(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{179:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||s[f]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(179)),i={id:"backup",title:"Making a backup",sidebar_label:"Backup"},c={unversionedId:"reference-guide/backup",id:"reference-guide/backup",isDocsHomePage:!1,title:"Making a backup",description:"While running, Memgraph generates a couple of different files in its data",source:"@site/docs/reference-guide/backup.md",slug:"/reference-guide/backup",permalink:"/memgraph/reference-guide/backup",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/backup.md",version:"current",sidebar_label:"Backup",sidebar:"memgraph",previous:{title:"How to setup Memgraph TensorFlow Op?",permalink:"/memgraph/database-functionalities/tensorflow-setup"},next:{title:"Existence constraint",permalink:"/memgraph/database-functionalities/constraints/existence-constraint"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"While running, Memgraph generates a couple of different files in its data\ndirectory. The directory includes multiple different subdirectories, one of\nthem being the storage directory which contains the durability files. In that\ndirectory Memgraph periodically generates snapshots and WAL files that\ncontain Memgraph's data in a recoverable format."),Object(o.a)("p",null,"Making a backup of a Memgraph instance would consist of simply copying the\ndata directory. This is not possible to do without additional help because\nthe durability files can be deleted when an event is triggered\n(the number of snapshots exceeded the maximum allowed number)."),Object(o.a)("p",null,"To disable this behavior, you can use the following query:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-opencypher"},"LOCK DATA DIRECTORY;\n")),Object(o.a)("p",null,"Now, the deletion of every file contained in the data directory is delayed\nuntil you unlock it again. You can safely copy the data directory or\na single snapshot to another location without worrying that it will be\ndeleted during that process."),Object(o.a)("p",null,"To allow the deletion of the files again run the following query:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-opencypher"},"UNLOCK DATA DIRECTORY;\n")),Object(o.a)("p",null,"Memgraph will delete the files which should have been deleted before\nand allow any future deletion of the files contained in the data\ndirectory."))}p.isMDXComponent=!0}}]);