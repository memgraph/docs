"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2633],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),h=a,f=d["".concat(i,".").concat(h)]||d[h]||m[h]||o;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32155:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),p=["components"],l={id:"tensorflow-setup",title:"How to setup Memgraph TensorFlow Op?",sidebar_label:"TensorFlow Op"},i=void 0,s={unversionedId:"database-functionalities/tensorflow-setup",id:"version-1.6.1/database-functionalities/tensorflow-setup",isDocsHomePage:!1,title:"How to setup Memgraph TensorFlow Op?",description:"TensorFlow is an open-source software",source:"@site/memgraph_versioned_docs/version-1.6.1/database-functionalities/tensorflow-setup.md",sourceDirName:"database-functionalities",slug:"/database-functionalities/tensorflow-setup",permalink:"/memgraph/database-functionalities/tensorflow-setup",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.1/database-functionalities/tensorflow-setup.md",version:"1.6.1",frontMatter:{id:"tensorflow-setup",title:"How to setup Memgraph TensorFlow Op?",sidebar_label:"TensorFlow Op"},sidebar:"version-1.6.1/memgraph",previous:{title:"Replication",permalink:"/memgraph/database-functionalities/replication"},next:{title:"Triggers",permalink:"/memgraph/database-functionalities/triggers"}},u=[{value:"Memgraph Tensorflow Op usage",id:"memgraph-tensorflow-op-usage",children:[{value:"Example",id:"example",children:[]}]},{value:"Memgraph Parallel Tensorflow Op Usage",id:"memgraph-parallel-tensorflow-op-usage",children:[{value:"Example",id:"example-1",children:[]}]},{value:"Where to next?",id:"where-to-next",children:[]}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/"},"TensorFlow")," is an open-source software\nlibrary for high-performance numerical computation.\nA TensorFlow op (operation) is a fundamental building block of all TensorFlow\nmodels."),(0,o.kt)("p",null,"Memgraph TensorFlow op wraps the high-performance Memgraph client for\nuse with TensorFlow, allowing natural data transfer between Memgraph and\nTensorFlow at any point in the model."),(0,o.kt)("p",null,"At this point, we strongly advise you to read\nthe TensorFlow section of our\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/tensorflow"},"Reference guide"),"."),(0,o.kt)("p",null,"In this article, we assume you have installed Python 3 and the TensorFlow pip\npackage. See the ",(0,o.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/install/pip?lang=python3"},"link")," for\nmore information.\nWe also assume that you have installed and are running Memgraph (",(0,o.kt)("a",{parentName:"p",href:"/memgraph/installation"},"see more"),")"),(0,o.kt)("h2",{id:"memgraph-tensorflow-op-usage"},"Memgraph Tensorflow Op usage"),(0,o.kt)("p",null,"Memgraph TensorFlow op is a shared library (",(0,o.kt)("inlineCode",{parentName:"p"},".so")," file).\nLibrary name is ",(0,o.kt)("inlineCode",{parentName:"p"},"libmemgraph_op.so"),"."),(0,o.kt)("p",null,"Load op library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import tensorflow as tf\nmemgraph_op_module = tf.load_op_library('libmemgraph_op.so')\n")),(0,o.kt)("p",null,"Create Memgraph TensorFlow op:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Create Memgraph op, and put placeholders for input\nmemgraph_op = memgraph_op_module.memgraph_op(query_holder,\n                                             input_list_holder,\n                                             output_dtype=tf.int64)\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"query_holder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"input_list_holder"),"\nare TensorFlow placeholders."),(0,o.kt)("p",null,"Computation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Run Memgraph op\noutput = sess.run(memgraph_op, {query_holder: query,\n                                input_list_holder: input_list})\n")),(0,o.kt)("p",null,"The output is a tuple, where the first element is the header and the second\nelement is a result matrix."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is a simple example. You can use\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/tutorials/movie-recommendation"},"the movie dataset")," or you can use\nthis simple dataset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:User {id: 1})-[:Rating {score:5.0}]->(:Movie {id: 1});\nCREATE (:User {id: 2})-[:Rating {score:2.5}]->(:Movie {id: 3});\nCREATE (:User {id: 3})-[:Rating {score:4.5}]->(:Movie {id: 8});\nCREATE (:User {id: 4})-[:Rating {score:1.0}]->(:Movie {id: 12});\nCREATE (:User {id: 5})-[:Rating {score:4.5}]->(:Movie {id: 33});\nCREATE (:User {id: 42})-[:Rating {score:1.0}]->(:Movie {id: 42});\n")),(0,o.kt)("p",null,"This example assumes that Memgraph is running on ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:7687"),"\nwithout ",(0,o.kt)("inlineCode",{parentName:"p"},"ssl"),".\nIf you want to change this,\nuse op ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/tensorflow"},"attributes"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import tensorflow as tf\n\n# Load libmemgraph_op.so\nmemgraph_op_module = tf.load_op_library(\'libmemgraph_op.so\')\n\n\ndef main():\n    query = """match (u :User)--\x3e(m :Movie)\n              where u.id in $input_list\n              return u.id, m.id;"""\n\n    # Input list used in query\n    input_list = [1, 2, 3, 4, 5]\n\n    # Create tensorflow session\n    with tf.Session() as sess:\n\n        # Query placeholder\n        query_holder = tf.placeholder(tf.string)\n\n        # Input list placeholder\n        input_list_holder = tf.placeholder(tf.int64)\n\n        # Create Memgraph op, and put placeholders for input\n        memgraph_op = memgraph_op_module.memgraph_op(query_holder,\n                                                     input_list_holder,\n                                                     output_dtype=tf.int64)\n\n        # Run Memgraph op\n        output = sess.run(memgraph_op, {query_holder: query,\n                                        input_list_holder: input_list})\n\n        # First output is list of headers\n        print("Headers:")\n        for i in output[0]:\n            print(i)\n\n        # Output matrix (rows), query results\n        print("Rows: ")\n        for i in output[1]:\n            print(i)\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("h2",{id:"memgraph-parallel-tensorflow-op-usage"},"Memgraph Parallel Tensorflow Op Usage"),(0,o.kt)("p",null,"Load op library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import tensorflow as tf\nmemgraph_op_module = tf.load_op_library('libmemgraph_op.so')\n")),(0,o.kt)("p",null,"Create Memgraph TensorFlow op:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Create Memgraph op, and put placeholders for input\nmemgraph_op = memgraph_op_module.parallel_memgraph_op(query_holder,\n                                                      input_list_holder,\n                                                      output_dtype=tf.int64,\n                                                      num_workers=4)\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"query_holder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"input_list_holder"),"\nare TensorFlow placeholders."),(0,o.kt)("p",null,"Computation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Run Memgraph op\noutput = sess.run(memgraph_op, {query_holder: query,\n                                input_list_holder: input_list})\n")),(0,o.kt)("p",null,"The output is a tuple, where the first element is the header and the second\nelement is a result matrix."),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("p",null,"This example shows one of the archetypal patterns of using the parallel op.\nWe will find nodes by ids and return each of their features."),(0,o.kt)("p",null,"We will query this example dataset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (n:Node {id: 1, features: [100, 115, 121, 95, 72, 142]});\nCREATE (n:Node {id: 2, features: [45, 125, 212, 46, 25, 92]});\nCREATE (n:Node {id: 3, features: [34, 74, 261, 194, 142, 37]});\nCREATE (n:Node {id: 4, features: [76, 92, 11, 16, 78, 261]});\nCREATE (n:Node {id: 5, features: [175, 63, 111, 192, 58, 91]});\nCREATE (n:Node {id: 6, features: [251, 184, 43, 57, 243, 231]});\nCREATE (n:Node {id: 7, features: [187, 136, 37, 33, 76, 145]});\nCREATE (n:Node {id: 8, features: [193, 195, 200, 74, 28, 127]});\n")),(0,o.kt)("p",null,"This example assumes that Memgraph is running on ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:7687"),"\nwithout ",(0,o.kt)("inlineCode",{parentName:"p"},"ssl"),".\nIf you want to change this,\nuse op ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/tensorflow"},"attributes"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import tensorflow as tf\n\n# Load libmemgraph_op.so\nmemgraph_op_module = tf.load_op_library(\'libmemgraph_op.so\')\n\n\ndef main():\n    query = """\n            UNWIND $input_list AS idx\n            MATCH (n:Node {id: idx})\n            RETURN n.features\n            """\n\n    # Input list used in query\n    input_list = [1, 2, 3, 4, 5]\n\n    # Create tensorflow session\n    with tf.Session() as sess:\n\n        # Query placeholder\n        query_holder = tf.placeholder(tf.string)\n\n        # Input list placeholder\n        input_list_holder = tf.placeholder(tf.int64)\n\n        # Create Memgraph op, and put placeholders for input\n        memgraph_op = memgraph_op_module.parallel_memgraph_op(query_holder,\n                                                     input_list_holder,\n                                                     output_dtype=tf.int64)\n\n        # Run Memgraph op\n        output = sess.run(memgraph_op, {query_holder: query,\n                                        input_list_holder: input_list})\n\n        # First output is list of headers\n        print("Headers:")\n        for i in output[0]:\n            print(i)\n\n        # Output matrix (rows), query results\n        print("Rows: ")\n        for i in output[1]:\n            print(i)\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/tutorials"},"Tutorials")),"."))}d.isMDXComponent=!0}}]);