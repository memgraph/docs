"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38856],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return c}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,h=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return t?n.createElement(h,o(o({ref:r},p),{},{components:t})):n.createElement(h,o({ref:r},p))}));function c(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56642:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=t(87462),a=t(63366),l=(t(67294),t(3905)),o=t(9877),u=t(58215),i=["components"],s={id:"return-results",title:"How to return results",sidebar_label:"Return results"},p=void 0,d={unversionedId:"how-to-guides/query-builder/return-results",id:"how-to-guides/query-builder/return-results",title:"How to return results",description:"You can use the methods return(), limit(), skip() and orderby() to",source:"@site/gqlalchemy/how-to-guides/query-builder/return-results.md",sourceDirName:"how-to-guides/query-builder",slug:"/how-to-guides/query-builder/return-results",permalink:"/docs/gqlalchemy/how-to-guides/query-builder/return-results",editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/how-to-guides/query-builder/return-results.md",tags:[],version:"current",frontMatter:{id:"return-results",title:"How to return results",sidebar_label:"Return results"},sidebar:"gqlalchemy",previous:{title:"Create nodes and relationships",permalink:"/docs/gqlalchemy/how-to-guides/query-builder/create-nodes-relationships"},next:{title:"Filter data",permalink:"/docs/gqlalchemy/how-to-guides/query-builder/filter-data"}},m={},c=[{value:"Return all variables from a query",id:"return-all-variables-from-a-query",level:2},{value:"Return specific variables from a query",id:"return-specific-variables-from-a-query",level:2},{value:"Limit the number of returned results",id:"limit-the-number-of-returned-results",level:2},{value:"Order the returned results",id:"order-the-returned-results",level:2},{value:"Order by one value",id:"order-by-one-value",level:3},{value:"Order by a list of values",id:"order-by-a-list-of-values",level:3}],h={toc:c};function y(e){var r=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can use the methods ",(0,l.kt)("inlineCode",{parentName:"p"},"return_()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"limit()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"skip()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"order_by()")," to\nconstruct queries that will return data from the database."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"return_(results: Optional[Union[str, Tuple[str, str], Dict[str, str],\nList[Union[str, Tuple[str, str]]], Set[Union[str, Tuple[str, str]]]]] =\nNone)")," - Return data from the database with aliases formatted as ",(0,l.kt)("inlineCode",{parentName:"li"},"key AS\nvalue"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"limit(integer_expression: Union[str, int])")," - Limits the number of returned results equal\nto ",(0,l.kt)("inlineCode",{parentName:"li"},"integer_expression"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"skip(integer_expression: Union[str, int])")," - Skip the number of results to be returned\nequal to ",(0,l.kt)("inlineCode",{parentName:"li"},"integer_expression"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"order_by(properties: Union[str, Tuple[str, Order], List[Union[str, Tuple[str,\nOrder]]]])")," - Order the returned results either descending or ascending.")),(0,l.kt)("h2",{id:"return-all-variables-from-a-query"},"Return all variables from a query"),(0,l.kt)("p",null,"To return all the variables from a query, just use the ",(0,l.kt)("inlineCode",{parentName:"p"},"return_()")," method at the\nend of your query:"),(0,l.kt)(o.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Match\n\nquery = Match().node(labels="Person", variable="p").return_().execute()\n'))),(0,l.kt)(u.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p:Person) RETURN *;\n")))),(0,l.kt)("h2",{id:"return-specific-variables-from-a-query"},"Return specific variables from a query"),(0,l.kt)("p",null,"To return only a subset of variables from a query, specify them in the\n",(0,l.kt)("inlineCode",{parentName:"p"},"return()")," method:"),(0,l.kt)(o.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Match\n\nquery = Match()\n        .node(labels="Person", variable="p1")\n        .to()\n        .node(labels="Person", variable="p2")\n        .return_(results=[("p1", "first"), "p2"])\n        .execute()\n'))),(0,l.kt)(u.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p1:Person)-[]->(p2:Person) RETURN p1 AS first, p2;\n")))),(0,l.kt)("h2",{id:"limit-the-number-of-returned-results"},"Limit the number of returned results"),(0,l.kt)("p",null,"To limit the number of returned results, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"limit()")," method after the\n",(0,l.kt)("inlineCode",{parentName:"p"},"return_()")," method:"),(0,l.kt)(o.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Match\n\nquery = match().node(labels="Person", variable="p").return_().limit(10).execute()\n'))),(0,l.kt)(u.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p:Person) RETURN * LIMIT 10;\n")))),(0,l.kt)("h2",{id:"order-the-returned-results"},"Order the returned results"),(0,l.kt)("p",null,"You can order the returned results ",(0,l.kt)("a",{parentName:"p",href:"#order-by-one-value"},"by one")," or ",(0,l.kt)("a",{parentName:"p",href:"#order-by-list-of-values"},"more\nvalues")," in an ascending or descending order. The\ndefault ordering in the Cypher query language is ascending (",(0,l.kt)("inlineCode",{parentName:"p"},"ASC")," or\n",(0,l.kt)("inlineCode",{parentName:"p"},"ASCENDING"),"), and if you want the descending order, you need to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"DESC"),"\nor ",(0,l.kt)("inlineCode",{parentName:"p"},"DESCENDING")," keyword to the ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause."),(0,l.kt)("h3",{id:"order-by-one-value"},"Order by one value"),(0,l.kt)("p",null,"To order the return results by one value, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"order_by(properties)")," method,\nwhere ",(0,l.kt)("inlineCode",{parentName:"p"},"properties")," can be a string (a property) or a tuple of two strings (a\nproperty and an order)."),(0,l.kt)("p",null,"The following query will order the results in an ascending (default) order by\nthe property ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," of a node."),(0,l.kt)(o.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Match\n\nquery = Match().node(variable="n").return_().order_by(properties="n.id").execute()\n'))),(0,l.kt)(u.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) RETURN * ORDER BY n.id;\n")))),(0,l.kt)("p",null,"You can also emphasize that you want an ascending order:"),(0,l.kt)(o.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Match\nfrom gqlalchemy.query_builder import Order\n\nquery = Match().node(variable="n").return_().order_by(properties=("n.id", Order.ASC).execute()\n'))),(0,l.kt)(u.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) RETURN * ORDER BY n.id ASC;\n")))),(0,l.kt)("p",null,"The same can be done with the keyword ",(0,l.kt)("inlineCode",{parentName:"p"},"ASCENDING"),":"),(0,l.kt)(o.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Match\nfrom gqlalchemy.query_builder import Order\n\nquery = Match().node(variable="n").return_().order_by(properties=("n.id", Order.ASCENDING).execute()\n'))),(0,l.kt)(u.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) RETURN * ORDER BY n.id ASCENDING;\n")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"Order")," is an enumeration class defined in the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/query_builder.py"},(0,l.kt)("inlineCode",{parentName:"a"},"query_module.py")),".\nIt will help you in adding the correct order. If you don't want to import it,\nyou can use strings: ",(0,l.kt)("inlineCode",{parentName:"p"},'"ASC"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"ASCENDING"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"DESC"')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'"DESCENDING"'),"."))),(0,l.kt)("p",null,"To order the query results in descending order, you need to specify the ",(0,l.kt)("inlineCode",{parentName:"p"},"DESC"),"\nor ",(0,l.kt)("inlineCode",{parentName:"p"},"DESCENDING")," keyword. Hence, the argument of the ",(0,l.kt)("inlineCode",{parentName:"p"},"order_by()")," method must be\na tuple."),(0,l.kt)(o.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Match\nfrom gqlalchemy.query_builder import Order\n\nquery = Match().node(variable="n").return_().order_by(properties=("n.id", Order.DESC).execute()\n'))),(0,l.kt)(u.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) RETURN * ORDER BY n.id DESC;\n")))),(0,l.kt)("p",null,"Similarly, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"Order.DESCENDING")," to get ",(0,l.kt)("inlineCode",{parentName:"p"},"DESCENDING")," keyword in ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause."),(0,l.kt)("h3",{id:"order-by-a-list-of-values"},"Order by a list of values"),(0,l.kt)("p",null,"To order the returned results by more than one value, use the\n",(0,l.kt)("inlineCode",{parentName:"p"},"order_by(properties)")," method, where ",(0,l.kt)("inlineCode",{parentName:"p"},"properties")," can be a list of strings or\ntuples of strings (list of properties with or without order)."),(0,l.kt)("p",null,"The following query will order the results in ascending order by the property\n",(0,l.kt)("inlineCode",{parentName:"p"},"id"),", then again in ascending (default) order by the property ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," of a node.\nAfter that, it will order the results in descending order by the property\n",(0,l.kt)("inlineCode",{parentName:"p"},"last_name"),", then in ascending order by the property ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," of a node. Lastly,\nthe query will order the results in descending order by the node property\n",(0,l.kt)("inlineCode",{parentName:"p"},"middle_name"),"."),(0,l.kt)(o.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Match\nfrom gqlalchemy.query_builder import Order\n\nquery = Match()\n        .node(variable="n")\n        .return_()\n        .order_by(\n            properties=[\n                ("n.id", Order.ASC),\n                "n.name",\n                ("n.last_name", Order.DESC),\n                ("n.age", Order.ASCENDING),\n                ("n.middle_name", Order.DESCENDING),\n            ]\n        )\n'))),(0,l.kt)(u.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) RETURN * ORDER BY n.id ASC, n.name, n.last_name DESC, n.age ASCENDING, n.middle_name DESCENDING;\n")))),(0,l.kt)("p",null,"Hopefully, this guide has taught you how to return the query results. If you\nhave any more questions, join our community and ping us on\n",(0,l.kt)("a",{parentName:"p",href:"https://www.discord.gg/memgraph"},"Discord"),"."))}y.isMDXComponent=!0},58215:function(e,r,t){t.d(r,{Z:function(){return a}});var n=t(67294);function a(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},9877:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(87462),a=t(67294),l=t(72389),o=t(5979),u=t(86010),i="tabItem_LplD";function s(e){var r,t,l,s=e.lazy,p=e.block,d=e.defaultValue,m=e.values,c=e.groupId,h=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:y.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),f=(0,o.lx)(b,(function(e,r){return e.value===r.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(r=null!=d?d:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(l=y[0])?void 0:l.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),k=g.tabGroupChoices,N=g.setTabGroupChoices,C=(0,a.useState)(v),T=C[0],q=C[1],w=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var O=k[c];null!=O&&O!==T&&b.some((function(e){return e.value===O}))&&q(O)}var x=function(e){var r=e.currentTarget,t=w.indexOf(r),n=b[t].value;n!==T&&(E(r),q(n),null!=c&&N(c,n))},D=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.currentTarget)+1;t=w[n]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.currentTarget)-1;t=w[a]||w[w.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},h)},b.map((function(e){var r=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===r?0:-1,"aria-selected":T===r,key:r,ref:function(e){return w.push(e)},onKeyDown:D,onFocus:x,onClick:x},l,{className:(0,u.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":T===r})}),null!=t?t:r)}))),s?(0,a.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==T})}))))}function p(e){var r=(0,l.Z)();return a.createElement(s,(0,n.Z)({key:String(r)},e))}}}]);