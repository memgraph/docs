"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85319],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),s=m(n),g=r,k=s["".concat(o,".").concat(g)]||s[g]||u[g]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},60971:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return p},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],d={id:"functions",title:"Functions",sidebar_label:"Functions"},o=void 0,m={unversionedId:"functions",id:"functions",isDocsHomePage:!1,title:"Functions",description:"This section contains the list of supported functions.",source:"@site/cypher-manual/functions.md",sourceDirName:".",slug:"/functions",permalink:"/cypher-manual/functions",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/functions.md",version:"current",frontMatter:{id:"functions",title:"Functions",sidebar_label:"Functions"},sidebar:"cypher_manual",previous:{title:"Reading and writing",permalink:"/cypher-manual/reading-and-writing"},next:{title:"Clauses overview",permalink:"/cypher-manual/clauses"}},p=[],u={toc:p};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This section contains the list of supported functions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"startNode")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the starting node of an edge.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endNode")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the destination node of an edge.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"degree")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the number of edges (both incoming and outgoing) of a node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"head")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the first element of a list.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"last")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the last element of a list.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"properties")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the properties of a node or an edge.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the number of elements in a list or a map. When given a string it returns the number of characters. When given a path it returns the number of expansions (edges) in that path.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toBoolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Converts the argument to a boolean.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toFloat")),(0,l.kt)("td",{parentName:"tr",align:null},"Converts the argument to a floating point number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toInteger")),(0,l.kt)("td",{parentName:"tr",align:null},"Converts the argument to an integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the type of an edge as a character string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keys")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a list keys of properties from an edge or a node. Each key is represented as a string of characters.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"labels")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a list of labels from a node. Each label is represented as a character string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"nodes")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a list of nodes from a path.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"relationships")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a list of relationships (edges) from a path.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"range")),(0,l.kt)("td",{parentName:"tr",align:null},"Constructs a list of value in given range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tail")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns all elements after the first of a given list.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uniformSample")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns elements of given list randomly oversampled or undersampled to desired size, e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"uniformSample([1, 2, 3], 5) -> [1, 2, 3, 2, 3]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"abs")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the absolute value of a number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ceil")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the smallest integer greater than or equal to given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"floor")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the largest integer smaller than or equal to given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"round")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the number, rounded to the nearest integer. Tie-breaking is done using the ",(0,l.kt)("em",{parentName:"td"},"commercial rounding"),",  where -1.5 produces -2 and 1.5 produces 2.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"exp")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates ",(0,l.kt)("inlineCode",{parentName:"td"},"e^n")," where ",(0,l.kt)("inlineCode",{parentName:"td"},"e")," is the base of the natural logarithm, and ",(0,l.kt)("inlineCode",{parentName:"td"},"n")," is the given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"log")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates the natural logarithm of a given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"log10")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates the logarithm (base 10) of a given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sqrt")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates the square root of a given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"acos")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates the arccosine of a given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"asin")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates the arcsine of a given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"atan")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates the arctangent of a given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"atan2")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates the arctangent2 of a given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cos")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates the cosine of a given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sin")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates the sine of a given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tan")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculates the tangent of a given number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sign")),(0,l.kt)("td",{parentName:"tr",align:null},"Applies the signum function to a given number and returns the result. The signum of positive numbers is 1, of negative -1 and for 0 returns 0.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"e")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the base of the natural logarithm.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pi")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the constant ",(0,l.kt)("em",{parentName:"td"},"pi"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rand")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a random floating point number between 0 (inclusive) and 1 (exclusive).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"startsWith")),(0,l.kt)("td",{parentName:"tr",align:null},"Check if the first argument starts with the second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endsWith")),(0,l.kt)("td",{parentName:"tr",align:null},"Check if the first argument ends with the second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"contains")),(0,l.kt)("td",{parentName:"tr",align:null},"Check if the first argument has an element which is equal to the second argument.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"left")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a string containing the specified number of leftmost characters of the original string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lTrim")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the original string with leading whitespace removed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"replace")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a string in which all occurrences of a specified string in the original string have been replaced by another (specified) string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reverse")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a string in which the order of all characters in the original string have been reversed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"right")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a string containing the specified number of rightmost characters of the original string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rTrim")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the original string with trailing whitespace removed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"split")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a list of strings resulting from the splitting of the original string around matches of the given delimiter.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"substring")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a substring of the original string, beginning with a 0-based index start and length.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toLower")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the original string in lowercase.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toString")),(0,l.kt)("td",{parentName:"tr",align:null},"Converts an integer, float or boolean value to a string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toUpper")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the original string in uppercase.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trim")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the original string with leading and trailing whitespace removed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"all")),(0,l.kt)("td",{parentName:"tr",align:null},"Check if all elements of a list satisfy a predicate. The syntax is: ",(0,l.kt)("inlineCode",{parentName:"td"},"all(variable IN list WHERE predicate)"),".",(0,l.kt)("br",null)," NOTE: Whenever possible, use Memgraph's lambda functions when matching instead.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"single")),(0,l.kt)("td",{parentName:"tr",align:null},"Check if only one element of a list satisfies a predicate. The syntax is: ",(0,l.kt)("inlineCode",{parentName:"td"},"single(variable IN list WHERE predicate)"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reduce")),(0,l.kt)("td",{parentName:"tr",align:null},"Accumulate list elements into a single result by applying an expression. The syntax is: ",(0,l.kt)("inlineCode",{parentName:"td"},"reduce(accumulator = initial_value, variable IN list \\| expression)"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"extract")),(0,l.kt)("td",{parentName:"tr",align:null},"A list of values obtained by evaluating an expression for each element in list. The syntax is: ",(0,l.kt)("inlineCode",{parentName:"td"},"extract(variable IN list \\| expression)"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"assert")),(0,l.kt)("td",{parentName:"tr",align:null},"Raises an exception reported to the client if the given argument is not ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"counter")),(0,l.kt)("td",{parentName:"tr",align:null},"Generates integers that are guaranteed to be unique within a single query for a given counter name. The syntax is ",(0,l.kt)("inlineCode",{parentName:"td"},'counter("counter_name", initial_value, [increment] = 1)'),". The increment parameter can be any integer besides zero.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the difference, measured in milliseconds, between the current time and midnight, January 1, 1970 UTC.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns identifier for a given node or edge. The identifier is generated during the initialization of node or edge and will be persisted through the durability mechanism.")))))}s.isMDXComponent=!0}}]);