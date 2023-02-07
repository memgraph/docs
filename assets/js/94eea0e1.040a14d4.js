"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71108],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=l,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6446:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>c,assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=a(87462),l=(a(67294),a(3905)),r=a(74866),i=a(85162),o=a(83523);const s={id:"node-classification-with-gnn",title:"node_classification_with_gnn",sidebar_label:"node_classification_with_gnn"},u=void 0,d={unversionedId:"query-modules/python/node-classification-with-gnn",id:"query-modules/python/node-classification-with-gnn",title:"node_classification_with_gnn",description:"docs-source",source:"@site/mage/query-modules/python/gnn-node-classification.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/node-classification-with-gnn",permalink:"/docs/mage/query-modules/python/node-classification-with-gnn",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/gnn-node-classification.md",tags:[],version:"current",frontMatter:{id:"node-classification-with-gnn",title:"node_classification_with_gnn",sidebar_label:"node_classification_with_gnn"},sidebar:"mage",previous:{title:"meta_util",permalink:"/docs/mage/query-modules/python/meta-util"},next:{title:"node2vec",permalink:"/docs/mage/query-modules/python/node2vec"}},p={},m=[{value:"Abstract",id:"abstract",level:2},{value:"About the query module",id:"about-the-query-module",level:3},{value:"Usage",id:"usage",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>set_model_parameters(params)</code>",id:"set_model_parametersparams",level:3},{value:"Input:",id:"input",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Output",id:"output",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"<code>train(num_epochs)</code>",id:"trainnum_epochs",level:3},{value:"Input",id:"input-1",level:4},{value:"Exceptions",id:"exceptions-1",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Usage",id:"usage-2",level:4},{value:"<code>get_training_data()</code>",id:"get_training_data",level:3},{value:"Return values",id:"return-values",level:4},{value:"Usage",id:"usage-3",level:4},{value:"<code>save_model()</code>",id:"save_model",level:3},{value:"Exception",id:"exception",level:4},{value:"Return values",id:"return-values-1",level:4},{value:"Usage",id:"usage-4",level:4},{value:"<code>load_model(num)</code>",id:"load_modelnum",level:3},{value:"Input",id:"input-2",level:4},{value:"Return values",id:"return-values-2",level:4},{value:"Usage",id:"usage-5",level:4},{value:"<code>predict(vertex)</code>",id:"predictvertex",level:3},{value:"Input",id:"input-3",level:4},{value:"Return values",id:"return-values-3",level:4},{value:"Usage:",id:"usage-6",level:4},{value:"<code>reset()</code>",id:"reset",level:3},{value:"Return values",id:"return-values-4",level:4},{value:"Usage:",id:"usage-7",level:4},{value:"Example",id:"example",level:2}],c=e=>{let{children:t,color:a}=e;return(0,l.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:m,Highlight:c};function k(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/node_classification.py"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-node_classification-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Node classification")," is the problem of finding out the ",(0,l.kt)("strong",{parentName:"p"},"right label")," for a ",(0,l.kt)("strong",{parentName:"p"},"node")," based on its ",(0,l.kt)("strong",{parentName:"p"},"neighbors\u2019 labels")," and ",(0,l.kt)("strong",{parentName:"p"},"structure similarities"),"."),(0,l.kt)("h3",{id:"about-the-query-module"},"About the query module"),(0,l.kt)("p",null,"This query module contains all necessary functions you need to train GNN model on Memgraph. "),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"node_classification")," module supports as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"homogeneous and heterogeneous graphs"),(0,l.kt)("li",{parentName:"ul"},"multiple-label and multi-edge-type graphs"),(0,l.kt)("li",{parentName:"ul"},"any-size datasets"),(0,l.kt)("li",{parentName:"ul"},"the following model architectures:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Graph Attention with Jumping Knowledge"),(0,l.kt)("li",{parentName:"ul"},"multiple versions of Graph attention networks (GAT)"),(0,l.kt)("li",{parentName:"ul"},"GraphSAGE"))),(0,l.kt)("li",{parentName:"ul"},"early stopping"),(0,l.kt)("li",{parentName:"ul"},"calculation of various metrics"),(0,l.kt)("li",{parentName:"ul"},"predictions for specified nodes"),(0,l.kt)("li",{parentName:"ul"},"model saving and loading"),(0,l.kt)("li",{parentName:"ul"},"recommendation system use cases")),(0,l.kt)("p",null,"The easiest way to test ",(0,l.kt)("strong",{parentName:"p"},"node_classification")," is by downloading ",(0,l.kt)("a",{parentName:"p",href:"https://memgraph.com/download"},"Memgraph Platform"),"\nand using some of the preloaded datasets in ",(0,l.kt)("strong",{parentName:"p"},"Memgraph Lab"),". If you want to explore our implementation, jump to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mage"},"github/memgraph/mage"))," and find\n",(0,l.kt)("inlineCode",{parentName:"p"},"python/node_classification.py"),". Feel free to give us a \u2b50 if you like the code. "),(0,l.kt)("p",null,"Feel free to open a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mage/issues"},"GitHub issue")),"\nor start a discussion on ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://discord.gg/memgraph"},"Discord"))," if you want\nto speed up development."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Load dataset in Memgraph, call ",(0,l.kt)("inlineCode",{parentName:"p"},"set_model_parameters"),", and start training your model. When training is done, query module will save models.\nAfterwards, you can test modules on other data (which model has not already seen for example) and inspect the results!\nThe module reports the ",(0,l.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/generated/sklearn.metrics.average_precision_score.html"},"mean average precision"),"\nfor every batch ",(0,l.kt)("inlineCode",{parentName:"p"},"training")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"evaluation")," epoch."),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"summarize")," basic node classification workflow is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"load data to Memgraph"),(0,l.kt)("li",{parentName:"ul"},"set parameters by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"set_model_parameters()")," function. Be sure that ",(0,l.kt)("strong",{parentName:"li"},"node_features")," property on nodes are in place."),(0,l.kt)("li",{parentName:"ul"},"call ",(0,l.kt)("inlineCode",{parentName:"li"},"train()")," function"),(0,l.kt)("li",{parentName:"ul"},"inspect training results (optional) by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"get_training_data()")," function"),(0,l.kt)("li",{parentName:"ul"},"optionally use ",(0,l.kt)("inlineCode",{parentName:"li"},"save_model()")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"load_model()")," "),(0,l.kt)("li",{parentName:"ul"},"predict node class by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"predict()")," procedure")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This ",(0,l.kt)("strong",{parentName:"p"},"MAGE")," module is still in its early stage. We intend to use it only for\n",(0,l.kt)("strong",{parentName:"p"},"exploring or learning")," about node classification. If you want it to be production-ready, make sure\nto either open a ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mage/issues"},"GitHub issue"))," or\ndrop us a comment on ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://discord.gg/memgraph"},"Discord")),".")),(0,l.kt)("h2",{id:"procedures"},"Procedures"),(0,l.kt)(o.ZP,{mdxType:"RunOnSubgraph"}),(0,l.kt)("h3",{id:"set_model_parametersparams"},(0,l.kt)("inlineCode",{parentName:"h3"},"set_model_parameters(params)")),(0,l.kt)("p",null,"The function initializes all global variables. ",(0,l.kt)("em",{parentName:"p"},"You")," can change global variables via ",(0,l.kt)("strong",{parentName:"p"},"params")," dictionary. Procedure checks if variables in ",(0,l.kt)("strong",{parentName:"p"},"params")," are defined appropriately. If so, map of default global parameters is overriden with user defined dictionary params.\nAfter that procedure executes previously defined functions declare_globals and\ndeclare_model_and_data and sets each global variable to some value."),(0,l.kt)("h4",{id:"input"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"params: (mgp.Map, optional)"),": User defined parameters from query module. Defaults to {}.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hidden_features_size"),(0,l.kt)("td",{parentName:"tr",align:null},"List","[Int]"),(0,l.kt)("td",{parentName:"tr",align:null},"[16, 16]"),(0,l.kt)("td",{parentName:"tr",align:null},"Embedding dimension for each node in a new layer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"layer_type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GATJK")),(0,l.kt)("td",{parentName:"tr",align:null},"Type of layer used, supported types: ",(0,l.kt)("inlineCode",{parentName:"td"},"GATJK"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"GAT"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"GRAPHSAGE"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aggregator"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mean")),(0,l.kt)("td",{parentName:"tr",align:null},"Type of aggregator used, supported type: ",(0,l.kt)("inlineCode",{parentName:"td"},"mean"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"learning_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"Float"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"Optimizer's learning rate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"weight_decay"),(0,l.kt)("td",{parentName:"tr",align:null},"Float"),(0,l.kt)("td",{parentName:"tr",align:null},"5e-4"),(0,l.kt)("td",{parentName:"tr",align:null},"Optimizer's weight decay.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"split_ratio"),(0,l.kt)("td",{parentName:"tr",align:null},"Float"),(0,l.kt)("td",{parentName:"tr",align:null},"0.8"),(0,l.kt)("td",{parentName:"tr",align:null},"Ratio between training and validation data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"List","[String]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'["loss","accuracy","f1_score","precision","recall","num_wrong_examples"]')),(0,l.kt)("td",{parentName:"tr",align:null},'List of metrics to report, supports any combination of "loss","accuracy","f1_score","precision","recall","num_wrong_examples".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node_id_property"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"Property name of node features.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num_epochs"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of epochs for model training.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"console_log_freq"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies how often results will be printed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkpoint_freq"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies how often the model will be saved. The model is persisted on disc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"device_type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines if the model will be trained using the ",(0,l.kt)("inlineCode",{parentName:"td"},"cpu")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"cuda"),". To run on ",(0,l.kt)("inlineCode",{parentName:"td"},"Cuda GPU"),", check if the system supports it with ",(0,l.kt)("inlineCode",{parentName:"td"},"torch.cuda.is_available()"),", then set this flag to ",(0,l.kt)("inlineCode",{parentName:"td"},"cuda"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path_to_model"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'"/tmp/torch_models"'),(0,l.kt)("td",{parentName:"tr",align:null},"Path for loading and storing the model.")))),(0,l.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Exception"),": Exception is raised if some variable in dictionary params is not correctly defined.")),(0,l.kt)("h4",{id:"output"},"Output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mgp.Record(\n    hidden_features_size=list,\n    layer_type=str,\n    aggregator=str,\n    learning_rate=float,\n    weight_decay=float,\n    split_ratio=float,\n    metrics=mgp.Any,\n    node_id_property=str,\n    num_epochs=int,\n    console_log_freq=int,\n    checkpoint_freq=int,\n    device_type=str,\n    path_to_model=str,\n)")," \u27a1 Map of parameters set for training")),(0,l.kt)("h4",{id:"usage-1"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'  CALL node_classification.set_model_parameters(\n    {layer_type: "GATJK", learning_rate: 0.001, hidden_features_size: [16,16], class_name: "fraud", features_name: "embedding"}\n  ) YIELD * RETURN *;\n')),(0,l.kt)("h3",{id:"trainnum_epochs"},(0,l.kt)("inlineCode",{parentName:"h3"},"train(num_epochs)")),(0,l.kt)("p",null,"This procedure performs model training. Firstly it declares data, model, optimizer, and criterion. Afterward, it performs training."),(0,l.kt)("h4",{id:"input-1"},"Input"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"num_epochs (int, optional)")," \u27a1 Number of epochs (default:100).")),(0,l.kt)("h4",{id:"exceptions-1"},"Exceptions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Exception"),"\u27a1 Raised if graph is empty.")),(0,l.kt)("h4",{id:"outputs"},"Outputs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"epoch: int")," \u27a1 Epoch number."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"loss: float"),"\u27a1 Loss of model on training data."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val_loss: float"),"\u27a1 Loss of model on validation data."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"train_log: list"),"\u27a1 List of metrics on training data."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val_log: list"),"\u27a1 List of metrics on validation data.")),(0,l.kt)("h4",{id:"usage-2"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"  CALL node_classification.train() YIELD * RETURN *;\n")),(0,l.kt)("h3",{id:"get_training_data"},(0,l.kt)("inlineCode",{parentName:"h3"},"get_training_data()")),(0,l.kt)("p",null,"Use following procedure to get logged data from training."),(0,l.kt)("h4",{id:"return-values"},"Return values"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"epoch: int")," \u27a1 Epoch number for current record's logged data."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"loss: float"),"\u27a1 Loss in epoch."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"train_log: mgp.Any")," \u27a1 Training parameters for epoch."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val_log: mgp.Any"),"\u27a1 Validation parameters for epoch.")),(0,l.kt)("h4",{id:"usage-3"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"  CALL node_classification.get_training_data() YIELD * RETURN *;\n")),(0,l.kt)("h3",{id:"save_model"},(0,l.kt)("inlineCode",{parentName:"h3"},"save_model()")),(0,l.kt)("p",null,"This function saves the model to a specified folder. If there are already ",(0,l.kt)("strong",{parentName:"p"},"max_models_to_keep")," in the folder,\nthe oldest model is deleted."),(0,l.kt)("h4",{id:"exception"},"Exception"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Exception"),": Raised if model is not initialized or defined.")),(0,l.kt)("h4",{id:"return-values-1"},"Return values"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path (str)"),"\u27a1 Path to the stored model."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"status (str)"),"\u27a1 Status of the stored model.")),(0,l.kt)("h4",{id:"usage-4"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"  CALL node_classification.save_model() YIELD * RETURN *;\n")),(0,l.kt)("h3",{id:"load_modelnum"},(0,l.kt)("inlineCode",{parentName:"h3"},"load_model(num)")),(0,l.kt)("p",null,"This function loads the model from the specified folder."),(0,l.kt)("h4",{id:"input-2"},"Input"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"num (int, optional)"),": Ordinal number of model to load from the default path on the disc (default: 0, i.e., newest model).")),(0,l.kt)("h4",{id:"return-values-2"},"Return values"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path: str")," \u27a1 Path of loaded model.")),(0,l.kt)("h4",{id:"usage-5"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"  CALL node_classification.load_model() YIELD * RETURN *;\n")),(0,l.kt)("h3",{id:"predictvertex"},(0,l.kt)("inlineCode",{parentName:"h3"},"predict(vertex)")),(0,l.kt)("p",null,"This function predicts metrics on one node. It is suggested to load the test data (data without labels) as well. Test data\nwon't be a part of the training or validation process."),(0,l.kt)("h4",{id:"input-3"},"Input"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vertex: mgp.Vertex"),"\u27a1 Prediction node.")),(0,l.kt)("h4",{id:"return-values-3"},"Return values"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"predicted_class: int"),"\u27a1 Predicted class for specified node.")),(0,l.kt)("h4",{id:"usage-6"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 1}) CALL node_classification.predict(n) YIELD * RETURN predicted_value;\n")),(0,l.kt)("h3",{id:"reset"},(0,l.kt)("inlineCode",{parentName:"h3"},"reset()")),(0,l.kt)("p",null,"This function resets all variables to default values."),(0,l.kt)("h4",{id:"return-values-4"},"Return values"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"status (str)"),": Status of reset function.")),(0,l.kt)("h4",{id:"usage-7"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"  CALL node_classification.reset() YIELD * RETURN *;\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(r.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Load commands",value:"cypher-load"},{label:"Step 3: Set model parameters",value:"set-model-parameters"},{label:"Step 4: Train",value:"train"},{label:"Step 5: Train results",value:"train-results"},{label:"Step 6: Predict",value:"predict"},{label:"Step 7: Predict results",value:"predict-results"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"visualization",mdxType:"TabItem"},(0,l.kt)("img",{src:a(54054).Z})),(0,l.kt)(i.Z,{value:"cypher-load",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (v1:PAPER {id: 10, features: [1, 2, 3], label:0});\nCREATE (v2:PAPER {id: 11, features: [1.54, 0.3, 1.78], label:0});\nCREATE (v3:PAPER {id: 12, features: [0.5, 1, 4.5], label:0});\nCREATE (v4:PAPER {id: 13, features: [0.78, 0.234, 1.2], label:0});\nCREATE (v5:PAPER {id: 14, features: [3, 4, 100], label:0});\nCREATE (v6:PAPER {id: 15, features: [2.1, 2.2, 2.3], label:1});\nCREATE (v7:PAPER {id: 16, features: [2.2, 2.3, 2.4], label:1});\nCREATE (v8:PAPER {id: 17, features: [2.3, 2.4, 2.5], label:1});\nCREATE (v9:PAPER {id: 18, features: [2.4, 2.5, 2.6], label:1});\nMATCH (v1:PAPER {id:10}), (v2:PAPER {id:11}) CREATE (v1)-[e:CITES {}]->(v2);\nMATCH (v2:PAPER {id:11}), (v3:PAPER {id:12}) CREATE (v2)-[e:CITES {}]->(v3);\nMATCH (v3:PAPER {id:12}), (v4:PAPER {id:13}) CREATE (v3)-[e:CITES {}]->(v4);\nMATCH (v4:PAPER {id:13}), (v1:PAPER {id:10}) CREATE (v4)-[e:CITES {}]->(v1);\nMATCH (v4:PAPER {id:13}), (v5:PAPER {id:14}) CREATE (v4)-[e:CITES {}]->(v5);\nMATCH (v5:PAPER {id:14}), (v6:PAPER {id:15}) CREATE (v5)-[e:CITES {}]->(v6);\nMATCH (v6:PAPER {id:15}), (v7:PAPER {id:16}) CREATE (v6)-[e:CITES {}]->(v7);\nMATCH (v7:PAPER {id:16}), (v8:PAPER {id:17}) CREATE (v7)-[e:CITES {}]->(v8);\nMATCH (v8:PAPER {id:17}), (v9:PAPER {id:18}) CREATE (v8)-[e:CITES {}]->(v9);\nMATCH (v9:PAPER {id:18}), (v6:PAPER {id:15}) CREATE (v9)-[e:CITES {}]->(v6);\n"))),(0,l.kt)(i.Z,{value:"set-model-parameters",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL node_classification.set_model_parameters({layer_type: "GAT", learning_rate: 0.001, \n                                               hidden_features_size: [2,2], \n                                               class_name: "label", features_name: "features", console_log_freq:1}) YIELD * \nRETURN *;\n'))),(0,l.kt)(i.Z,{value:"train",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node_classification.train(5) YIELD epoch, loss RETURN *;\n"))),(0,l.kt)(i.Z,{value:"train-results",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"+----------+----------+\n| epoch    | loss     |\n+----------+----------+\n| 1        | 0.788709 |\n| 2        | 0.765075 |\n| 3        | 0.776351 |\n| 4        | 0.727615 |\n| 5        | 0.727735 |\n\n"))),(0,l.kt)(i.Z,{value:"predict",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"}," MATCH (v1:PAPER {id: 10})\n CALL node_classification.predict(v1) YIELD predicted_class RETURN predicted_class, v1.label as correct_class;\n"))),(0,l.kt)(i.Z,{value:"predict-results",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-----------------+-----------------+\n| predicted_class | correct_class   |\n+-----------------+-----------------+\n| 0               | 0               |\n+-----------------+-----------------+\n")))))}k.isMDXComponent=!0},83523:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={toc:[]};function i(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,l.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}i.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(87462),l=a(67294),r=a(86010),i=a(12466),o=a(16550),s=a(91980),u=a(67392),d=a(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=g({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),h=(()=>{const e=s??p;return c({value:e,tabValues:r})?e:null})();(0,l.useEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var h=a(72389);const f="tabList__CuJ",v="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==o&&(p(t),s(n))},c=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:m},i,{className:(0,r.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f)},l.createElement(N,(0,n.Z)({},e,t)),l.createElement(b,(0,n.Z)({},e,t)))}function _(e){const t=(0,h.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},54054:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example-9d149413fa46a5548e4ef0c2486dec8c.png"}}]);