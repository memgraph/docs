"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"rust",title:"Rust quick start",sidebar_label:"Rust"},i=void 0,l={unversionedId:"connect-to-memgraph/drivers/rust",id:"version-2.7.0/connect-to-memgraph/drivers/rust",title:"Rust quick start",description:"At the end of this guide, you will have created a Rust program that connects to the Memgraph database and executes simple",source:"@site/memgraph_versioned_docs/version-2.7.0/connect-to-memgraph/drivers/rust.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers/rust",permalink:"/docs/memgraph/2.7.0/connect-to-memgraph/drivers/rust",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.7.0/connect-to-memgraph/drivers/rust.md",tags:[],version:"2.7.0",frontMatter:{id:"rust",title:"Rust quick start",sidebar_label:"Rust"},sidebar:"memgraph",previous:{title:"Python",permalink:"/docs/memgraph/2.7.0/connect-to-memgraph/drivers/python"},next:{title:"WebSocket",permalink:"/docs/memgraph/2.7.0/connect-to-memgraph/websocket"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic setup",id:"basic-setup",level:2},{value:"Where to next?",id:"where-to-next",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the end of this guide, you will have created a Rust program that connects to the Memgraph database and executes simple\nqueries."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this guide, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.7.0/installation"},"Installation guide"),"."),(0,o.kt)("li",{parentName:"ul"},"A locally installed ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/memgraph/rsmgclient"},(0,o.kt)("strong",{parentName:"a"},"rsmgclient\ndriver")),".")),(0,o.kt)("h2",{id:"basic-setup"},"Basic setup"),(0,o.kt)("p",null,"Let's jump in and connect a simple program to connect to Memgraph."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Create a new Rust project with the name ",(0,o.kt)("strong",{parentName:"p"},"memgraph_rust")," by running the\nfollowing command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo new memgraph_rust --bin\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Add the following line to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file under the line\n",(0,o.kt)("inlineCode",{parentName:"p"},"[dependencies]")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'rsmgclient = "2.0.0"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," To create the actual program, add the following code to the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main.rs"),"\nfile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use rsmgclient::{ConnectParams, Connection, MgError, Value, SSLMode};\n\nfn execute_query() -> Result<(), MgError> {\n    // Connect to Memgraph.\n    let connect_params = ConnectParams {\n        host: Some(String::from("localhost")),\n        port: 7687,\n        sslmode: SSLMode::Disable,\n        ..Default::default()\n    };\n    let mut connection = Connection::connect(&connect_params)?;\n\n    // Create simple graph.\n    connection.execute_without_results(\n        "CREATE (p1:Person {name: \'Alice\'})-[l1:Likes]->(m:Software {name: \'Memgraph\'}) \\\n         CREATE (p2:Person {name: \'John\'})-[l2:Likes]->(m);",\n    )?;\n\n    // Fetch the graph.\n    let columns = connection.execute("MATCH (n)-[r]->(m) RETURN n, r, m;", None)?;\n    println!("Columns: {}", columns.join(", "));\n    for record in connection.fetchall()? {\n        for value in record.values {\n            match value {\n                Value::Node(node) => print!("{}", node),\n                Value::Relationship(edge) => print!("-{}-", edge),\n                value => print!("{}", value),\n            }\n        }\n        println!();\n    }\n    connection.commit()?;\n\n    Ok(())\n}\n\nfn main() {\n    if let Err(error) = execute_query() {\n        panic!("{}", error)\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Open a terminal, position yourself in the project root directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/memgraph_rust")," and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo build\n")),(0,o.kt)("p",null,"and after that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo run\n")),(0,o.kt)("p",null,"You should see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Columns: n, r, m\n(:Person {'name': 'Alice'})-[:Likes {}]-(:Software {'name': 'Memgraph'})\n(:Person {'name': 'John'})-[:Likes {}]-(:Software {'name': 'Memgraph'})\n")),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.7.0/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.7.0/how-to-guides"},"How-to guides")),"\nsection to get an overview of all the functionalities Memgraph offers."))}m.isMDXComponent=!0}}]);