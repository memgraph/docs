"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69854],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),i=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},m=function(e){var r=i(e.components);return n.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=i(t),d=a,g=c["".concat(o,".").concat(d)]||c[d]||p[d]||l;return t?n.createElement(g,u(u({ref:r},m),{},{components:t})):n.createElement(g,u({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=c;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var i=2;i<l;i++)u[i]=t[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},31052:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=t(87462),a=(t(67294),t(3905));const l={sidebar_label:"query_modules",title:"gqlalchemy.graph_algorithms.query_modules"},u=void 0,s={unversionedId:"reference/graph_algorithms/query_modules",id:"reference/graph_algorithms/query_modules",title:"gqlalchemy.graph_algorithms.query_modules",description:"QueryModule Objects",source:"@site/gqlalchemy/reference/graph_algorithms/query_modules.md",sourceDirName:"reference/graph_algorithms",slug:"/reference/graph_algorithms/query_modules",permalink:"/docs/gqlalchemy/reference/graph_algorithms/query_modules",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/reference/graph_algorithms/query_modules.md",tags:[],version:"current",frontMatter:{sidebar_label:"query_modules",title:"gqlalchemy.graph_algorithms.query_modules"},sidebar:"gqlalchemy",previous:{title:"query_builder",permalink:"/docs/gqlalchemy/reference/graph_algorithms/query_builder"},next:{title:"declarative_base",permalink:"/docs/gqlalchemy/reference/query_builders/declarative_base"}},o={},i=[{value:"QueryModule Objects",id:"querymodule-objects",level:2},{value:"set_argument_values",id:"set_argument_values",level:4},{value:"get_arguments_for_call",id:"get_arguments_for_call",level:4},{value:"parse_query_module_signature",id:"parse_query_module_signature",level:4},{value:"parse_field",id:"parse_field",level:4}],m={toc:i};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"querymodule-objects"},"QueryModule Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class QueryModule()\n")),(0,a.kt)("p",null,"Class representing a single MAGE query module."),(0,a.kt)("h4",{id:"set_argument_values"},"set","_","argument","_","values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def set_argument_values(**kwargs) -> None\n")),(0,a.kt)("p",null,"Set values for QueryModule arguments so the module can be called."),(0,a.kt)("p",null,"Kwargs:\nNamed arguments in self.arguments."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Raises"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"KeyError")," - Passed an argument not in the self.arguments list.")),(0,a.kt)("h4",{id:"get_arguments_for_call"},"get","_","arguments","_","for","_","call"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_arguments_for_call() -> str\n")),(0,a.kt)("p",null,"return inputs in form ",'"',"value1, value2, ...",'"'," for QueryBuilder call()\nmethod."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Raises"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"KeyError")," - Cannot get all values of arguments because one or more is\nnot set.")),(0,a.kt)("h4",{id:"parse_query_module_signature"},"parse","_","query","_","module","_","signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def parse_query_module_signature(signature: str) -> Tuple[List[Dict[str, str]], List[Dict[str, str]]]\n")),(0,a.kt)("p",null,"Query Modules signatures received from Memgraph are parsed into a\nlist of dictionaries."),(0,a.kt)("p",null,"One list is for arguments and another for returns.\nFor instance, if a query module signature is:\ndummy_module.dummy(lst :: LIST OF STRING, num = 3 :: NUMBER) :: (ret :: STRING)\nthe method should return a list of arguments:\n","[{",'"',"name",'"',": ",'"',"lst",'"',", ",'"',"type",'"',": ",'"',"LIST OF STRING",'"',"}, {",'"',"name",'"',": ",'"',"num",'"',", ",'"',"type",'"',": ",'"',"NUMBER",'"',", ",'"',"default",'"',": 3}]","\nand a list of returns:\n","[{",'"',"name",'"',": ",'"',"ret",'"',", ",'"',"type",'"',": ",'"',"STRING",'"',"}]"),(0,a.kt)("p",null,"Dictionary consists of fields: ",'"',"name",'"'," - argument name, ",'"',"type",'"'," - data\ntype of argument and ",'"',"default",'"'," where default argument value is given"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signature")," - module signature as returned by Cypher CALL operation")),(0,a.kt)("h4",{id:"parse_field"},"parse","_","field"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def parse_field(vars_field: str, name_type_delimiter: str = NAME_TYPE_DELIMITIER, default_value_delimiter: str = EQUALS_DELIMITER) -> List[Dict[str, str]]\n")),(0,a.kt)("p",null,"Parse a field of arguments or returns from Query Module signature."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vars_field")," - signature field inside parentheses")))}p.isMDXComponent=!0}}]);