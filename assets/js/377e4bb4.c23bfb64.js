"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29169],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),h=o,f=d["".concat(i,".").concat(h)]||d[h]||m[h]||a;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43386:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),p=["components"],l={id:"tensorflow-setup",title:"How to setup Memgraph TensorFlow Op?",sidebar_label:"TensorFlow Op"},i=void 0,s={unversionedId:"how-to-guides/tensorflow-setup",id:"version-2.2.1/how-to-guides/tensorflow-setup",title:"How to setup Memgraph TensorFlow Op?",description:"TensorFlow is an open-source software",source:"@site/memgraph_versioned_docs/version-2.2.1/how-to-guides/tensorflow-setup.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/tensorflow-setup",permalink:"/docs/memgraph/2.2.1/how-to-guides/tensorflow-setup",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.1/how-to-guides/tensorflow-setup.md",tags:[],version:"2.2.1",frontMatter:{id:"tensorflow-setup",title:"How to setup Memgraph TensorFlow Op?",sidebar_label:"TensorFlow Op"}},u={},m=[{value:"Memgraph Tensorflow Op usage",id:"memgraph-tensorflow-op-usage",level:2},{value:"Example",id:"example",level:3},{value:"Memgraph Parallel Tensorflow Op Usage",id:"memgraph-parallel-tensorflow-op-usage",level:2},{value:"Example",id:"example-1",level:3},{value:"Where to next?",id:"where-to-next",level:2}],d={toc:m};function h(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/"},"TensorFlow")," is an open-source software\nlibrary for high-performance numerical computation.\nA TensorFlow op (operation) is a fundamental building block of all TensorFlow\nmodels."),(0,a.kt)("p",null,"Memgraph TensorFlow op wraps the high-performance Memgraph client for\nuse with TensorFlow, allowing natural data transfer between Memgraph and\nTensorFlow at any point in the model."),(0,a.kt)("p",null,"At this point, we strongly advise you to read\nthe TensorFlow section of our\n",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/reference-guide/tensorflow"},"Reference guide"),"."),(0,a.kt)("p",null,"In this article, we assume you have installed Python 3 and the TensorFlow pip\npackage. See the ",(0,a.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/install/pip?lang=python3"},"link")," for\nmore information.\nWe also assume that you have installed and are running Memgraph (",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/installation"},"see more"),")"),(0,a.kt)("h2",{id:"memgraph-tensorflow-op-usage"},"Memgraph Tensorflow Op usage"),(0,a.kt)("p",null,"Memgraph TensorFlow op is a shared library (",(0,a.kt)("inlineCode",{parentName:"p"},".so")," file).\nLibrary name is ",(0,a.kt)("inlineCode",{parentName:"p"},"libmemgraph_op.so"),"."),(0,a.kt)("p",null,"Load op library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import tensorflow as tf\nmemgraph_op_module = tf.load_op_library('libmemgraph_op.so')\n")),(0,a.kt)("p",null,"Create Memgraph TensorFlow op:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Create Memgraph op, and put placeholders for input\nmemgraph_op = memgraph_op_module.memgraph_op(query_holder,\n                                             input_list_holder,\n                                             output_dtype=tf.int64)\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"query_holder")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"input_list_holder"),"\nare TensorFlow placeholders."),(0,a.kt)("p",null,"Computation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Run Memgraph op\noutput = sess.run(memgraph_op, {query_holder: query,\n                                input_list_holder: input_list})\n")),(0,a.kt)("p",null,"The output is a tuple, where the first element is the header and the second\nelement is a result matrix."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Here is a simple example. You can use ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/tutorials/movie-recommendation"},"the movie\ndataset")," or you can use this simple dataset:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:User {id: 1})-[:Rating {score:5.0}]->(:Movie {id: 1});\nCREATE (:User {id: 2})-[:Rating {score:2.5}]->(:Movie {id: 3});\nCREATE (:User {id: 3})-[:Rating {score:4.5}]->(:Movie {id: 8});\nCREATE (:User {id: 4})-[:Rating {score:1.0}]->(:Movie {id: 12});\nCREATE (:User {id: 5})-[:Rating {score:4.5}]->(:Movie {id: 33});\nCREATE (:User {id: 42})-[:Rating {score:1.0}]->(:Movie {id: 42});\n")),(0,a.kt)("p",null,"This example assumes that Memgraph is running on ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:7687"),"\nwithout ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl"),".\nIf you want to change this,\nuse op ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/reference-guide/tensorflow"},"attributes"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import tensorflow as tf\n\n# Load libmemgraph_op.so\nmemgraph_op_module = tf.load_op_library(\'libmemgraph_op.so\')\n\n\ndef main():\n    query = """match (u :User)--\x3e(m :Movie)\n              where u.id in $input_list\n              return u.id, m.id;"""\n\n    # Input list used in query\n    input_list = [1, 2, 3, 4, 5]\n\n    # Create tensorflow session\n    with tf.Session() as sess:\n\n        # Query placeholder\n        query_holder = tf.placeholder(tf.string)\n\n        # Input list placeholder\n        input_list_holder = tf.placeholder(tf.int64)\n\n        # Create Memgraph op, and put placeholders for input\n        memgraph_op = memgraph_op_module.memgraph_op(query_holder,\n                                                     input_list_holder,\n                                                     output_dtype=tf.int64)\n\n        # Run Memgraph op\n        output = sess.run(memgraph_op, {query_holder: query,\n                                        input_list_holder: input_list})\n\n        # First output is list of headers\n        print("Headers:")\n        for i in output[0]:\n            print(i)\n\n        # Output matrix (rows), query results\n        print("Rows: ")\n        for i in output[1]:\n            print(i)\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h2",{id:"memgraph-parallel-tensorflow-op-usage"},"Memgraph Parallel Tensorflow Op Usage"),(0,a.kt)("p",null,"Load op library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import tensorflow as tf\nmemgraph_op_module = tf.load_op_library('libmemgraph_op.so')\n")),(0,a.kt)("p",null,"Create Memgraph TensorFlow op:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Create Memgraph op, and put placeholders for input\nmemgraph_op = memgraph_op_module.parallel_memgraph_op(query_holder,\n                                                      input_list_holder,\n                                                      output_dtype=tf.int64,\n                                                      num_workers=4)\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"query_holder")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"input_list_holder"),"\nare TensorFlow placeholders."),(0,a.kt)("p",null,"Computation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Run Memgraph op\noutput = sess.run(memgraph_op, {query_holder: query,\n                                input_list_holder: input_list})\n")),(0,a.kt)("p",null,"The output is a tuple, where the first element is the header and the second\nelement is a result matrix."),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("p",null,"This example shows one of the archetypal patterns of using the parallel op.\nWe will find nodes by ids and return each of their features."),(0,a.kt)("p",null,"We will query this example dataset:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (n:Node {id: 1, features: [100, 115, 121, 95, 72, 142]});\nCREATE (n:Node {id: 2, features: [45, 125, 212, 46, 25, 92]});\nCREATE (n:Node {id: 3, features: [34, 74, 261, 194, 142, 37]});\nCREATE (n:Node {id: 4, features: [76, 92, 11, 16, 78, 261]});\nCREATE (n:Node {id: 5, features: [175, 63, 111, 192, 58, 91]});\nCREATE (n:Node {id: 6, features: [251, 184, 43, 57, 243, 231]});\nCREATE (n:Node {id: 7, features: [187, 136, 37, 33, 76, 145]});\nCREATE (n:Node {id: 8, features: [193, 195, 200, 74, 28, 127]});\n")),(0,a.kt)("p",null,"This example assumes that Memgraph is running on ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:7687"),"\nwithout ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl"),".\nIf you want to change this,\nuse op ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/reference-guide/tensorflow"},"attributes"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import tensorflow as tf\n\n# Load libmemgraph_op.so\nmemgraph_op_module = tf.load_op_library(\'libmemgraph_op.so\')\n\n\ndef main():\n    query = """\n            UNWIND $input_list AS idx\n            MATCH (n:Node {id: idx})\n            RETURN n.features\n            """\n\n    # Input list used in query\n    input_list = [1, 2, 3, 4, 5]\n\n    # Create tensorflow session\n    with tf.Session() as sess:\n\n        # Query placeholder\n        query_holder = tf.placeholder(tf.string)\n\n        # Input list placeholder\n        input_list_holder = tf.placeholder(tf.int64)\n\n        # Create Memgraph op, and put placeholders for input\n        memgraph_op = memgraph_op_module.parallel_memgraph_op(query_holder,\n                                                     input_list_holder,\n                                                     output_dtype=tf.int64)\n\n        # Run Memgraph op\n        output = sess.run(memgraph_op, {query_holder: query,\n                                        input_list_holder: input_list})\n\n        # First output is list of headers\n        print("Headers:")\n        for i in output[0]:\n            print(i)\n\n        # Output matrix (rows), query results\n        print("Rows: ")\n        for i in output[1]:\n            print(i)\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.2.1/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.2.1/tutorials"},"Tutorials")),"."))}h.isMDXComponent=!0}}]);