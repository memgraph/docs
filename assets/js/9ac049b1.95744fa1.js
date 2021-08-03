"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10218],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26118:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={id:"backup",title:"Making a backup",sidebar_label:"Backup"},l=void 0,u={unversionedId:"reference-guide/backup",id:"version-1.3.0/reference-guide/backup",isDocsHomePage:!1,title:"Making a backup",description:"While running, Memgraph generates a couple of different files in its data",source:"@site/memgraph_versioned_docs/version-1.3.0/reference-guide/backup.md",sourceDirName:"reference-guide",slug:"/reference-guide/backup",permalink:"/memgraph/1.3.0/reference-guide/backup",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/reference-guide/backup.md",version:"1.3.0",frontMatter:{id:"backup",title:"Making a backup",sidebar_label:"Backup"},sidebar:"version-1.3.0/memgraph",previous:{title:"TensorFlow Op",permalink:"/memgraph/1.3.0/database-functionalities/tensorflow-setup"},next:{title:"Existence constraint",permalink:"/memgraph/1.3.0/database-functionalities/constraints/existence-constraint"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While running, Memgraph generates a couple of different files in its data\ndirectory. The directory includes multiple different subdirectories, one of\nthem being the storage directory which contains the durability files. In that\ndirectory Memgraph periodically generates snapshots and WAL files that\ncontain Memgraph's data in a recoverable format."),(0,i.kt)("p",null,"Making a backup of a Memgraph instance would consist of simply copying the\ndata directory. This is not possible to do without additional help because\nthe durability files can be deleted when an event is triggered\n(the number of snapshots exceeded the maximum allowed number)."),(0,i.kt)("p",null,"To disable this behavior, you can use the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"LOCK DATA DIRECTORY;\n")),(0,i.kt)("p",null,"Now, the deletion of every file contained in the data directory is delayed\nuntil you unlock it again. You can safely copy the data directory or\na single snapshot to another location without worrying that it will be\ndeleted during that process."),(0,i.kt)("p",null,"To allow the deletion of the files again run the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"UNLOCK DATA DIRECTORY;\n")),(0,i.kt)("p",null,"Memgraph will delete the files which should have been deleted before\nand allow any future deletion of the files contained in the data\ndirectory."))}d.isMDXComponent=!0}}]);