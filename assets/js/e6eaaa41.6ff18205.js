"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39354],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34125:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"migrate-relational-database",title:"Migrate from RDBMS to Memgraph",sidebar_label:"Migrate from RDBMS to Memgraph"},l=void 0,p={unversionedId:"tutorials/migrate-relational-database",id:"version-2.3.0/tutorials/migrate-relational-database",title:"Migrate from RDBMS to Memgraph",description:"This tutorial will help you import your data from a MySQL database into Memgraph",source:"@site/memgraph_versioned_docs/version-2.3.0/tutorials/migrate-relational-database.md",sourceDirName:"tutorials",slug:"/tutorials/migrate-relational-database",permalink:"/docs/memgraph/tutorials/migrate-relational-database",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/tutorials/migrate-relational-database.md",tags:[],version:"2.3.0",frontMatter:{id:"migrate-relational-database",title:"Migrate from RDBMS to Memgraph",sidebar_label:"Migrate from RDBMS to Memgraph"},sidebar:"memgraph",previous:{title:"Style your graphs in Memgraph Lab",permalink:"/docs/memgraph/tutorials/style-your-graphs-in-memgraph-lab"},next:{title:"Graph stream processing with Kafka",permalink:"/docs/memgraph/tutorials/graph-stream-processing-with-kafka"}},c={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Data Model",id:"data-model",level:2},{value:"Migrate data using CSV files",id:"migrate-data-using-csv-files",level:2},{value:"1. Export the data from a table to a CSV file",id:"1-export-the-data-from-a-table-to-a-csv-file",level:3},{value:"2. Transfer CSV files into a Docker container",id:"2-transfer-csv-files-into-a-docker-container",level:3},{value:"3. Run Memgraph Lab",id:"3-run-memgraph-lab",level:3},{value:"4. Import nodes into Memgraph",id:"4-import-nodes-into-memgraph",level:3},{value:"5. Import relationships into Memgraph",id:"5-import-relationships-into-memgraph",level:3},{value:"6. Data model and updating the schema",id:"6-data-model-and-updating-the-schema",level:3},{value:"Where to next?",id:"where-to-next",level:2}],d={toc:m};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial will help you import your data from a MySQL database into Memgraph\nusing CSV files on Windows 10."),(0,o.kt)("p",null,"In two of our blog posts, we've explained the ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/graph-database-vs-relational-database"},"differences between relational\nand graph\ndatabase")," and\nlisted the ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/the-benefits-of-using-a-graph-database-instead-of-sql"},"benefits of graph\ndatabases"),".",(0,o.kt)("br",null),"\nIn summary, instead of tables, graph databases use nodes connected by\nrelationships. Graph databases are an excellent choice if the data is highly\nconnected, you need to retrieve it often and the data model is not set in stone.\nSo if you need a quick and reliable database in which you can quickly and\neffortlessly change the data model and properties, a graph database is the way\nto go."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow along, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An installation of ",(0,o.kt)("strong",{parentName:"li"},"Memgraph Platform"),", a streaming graph application\nplatform that includes ",(0,o.kt)("strong",{parentName:"li"},"MemgraphDB"),", a visual user interface ",(0,o.kt)("strong",{parentName:"li"},"Memgraph\nLab"),", command-line interface ",(0,o.kt)("strong",{parentName:"li"},"mgconsole")," and ",(0,o.kt)("strong",{parentName:"li"},"MAGE"),", a graph algorithms\nand modules library.",(0,o.kt)("br",null),"\nTo install Memgraph Platform and set it up, please follow the Docker\ninstallation instructions on the ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/installation"},"Installation\nguide"),"."),(0,o.kt)("li",{parentName:"ul"},"(optional) A running relational database either with your own schema and data\nor you can use the schema we used and populate the tables")),(0,o.kt)("h2",{id:"data-model"},"Data Model"),(0,o.kt)("p",null,"We will learn how to import data from a relational database to Memgraph using\nthe example of an online store. The data model of the relational database that\nwe will use for this tutorial includes 5 tables with the following properties:"),(0,o.kt)("img",{src:a(11695).Z}),(0,o.kt)("h2",{id:"migrate-data-using-csv-files"},"Migrate data using CSV files"),(0,o.kt)("h3",{id:"1-export-the-data-from-a-table-to-a-csv-file"},"1. Export the data from a table to a CSV file"),(0,o.kt)("p",null,"To begin, you need to export the existing data into CSV files table by table\neither using the ",(0,o.kt)("em",{parentName:"p"},"Export Wizard")," or by running a query."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exporting data using the Export Wizard")),(0,o.kt)("p",null,"In this example, we are using the ",(0,o.kt)("em",{parentName:"p"},"Export Wizard")," in the ",(0,o.kt)("em",{parentName:"p"},"MySQL Workbench"),". To\nexport the ",(0,o.kt)("strong",{parentName:"p"},"Customer")," table, right-click on the table name and select the\n",(0,o.kt)("strong",{parentName:"p"},"Table Data Export Wizard"),"."),(0,o.kt)("img",{src:a(34030).Z,className:"imgBorder"}),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Next")," and on the second step of the Wizard do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define the ",(0,o.kt)("strong",{parentName:"li"},"File Path"),". Usually, you can choose any location, but for this\ntutorial place the files in the root and name the file the same as the\ntable."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"csv")," format if it isn't already selected."),(0,o.kt)("li",{parentName:"ol"},"Select comma as a ",(0,o.kt)("strong",{parentName:"li"},"Field Separator"),"."),(0,o.kt)("li",{parentName:"ol"},"Leave the ",(0,o.kt)("strong",{parentName:"li"},"Line Separator")," as ",(0,o.kt)("strong",{parentName:"li"},"LF"),"."),(0,o.kt)("li",{parentName:"ol"},"Delete the quotations from the ",(0,o.kt)("strong",{parentName:"li"},"Enclose Strings")," option and leave it\nempty.")),(0,o.kt)("p",null,"Continue clicking ",(0,o.kt)("strong",{parentName:"p"},"Next")," until ",(0,o.kt)("strong",{parentName:"p"},"Finish"),"."),(0,o.kt)("img",{src:a(88835).Z,className:"imgBorder"}),(0,o.kt)("p",null,"In the root folder of your computer, you should find the ",(0,o.kt)("strong",{parentName:"p"},"customer.csv")," file.\nWhen opened in a text editor or a spreadsheet program, the data from the\n",(0,o.kt)("strong",{parentName:"p"},"customer")," table should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"id,name,email\n1,Amos Burton,amos.burton@mail.em\n2,Chrisjen Avasarala,cavasarala@mail.em\n3,James Holden,james.holden@mail.em\n4,Alex Kamal,akamal@post.com\n5,Camina Drummer,cdrummer@post.com\n6,Marco Inaros,marco.inaros@post.com\n7,Naomi Nagata,naomi.nagata@post.com\n8,Julie Mao,jmao@post.com\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exporting data by running a query")),(0,o.kt)("p",null,"You can also export data by writing a query, but the data can be exported only\nto a specific location you can learn by running the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW VARIABLES LIKE "secure_file_priv";\n')),(0,o.kt)("p",null,"I got this value as a response ",(0,o.kt)("inlineCode",{parentName:"p"},"'secure_file_priv', 'C:\\ProgramData\\MySQL\\MySQL\nServer 8.0\\Uploads\\'")," which I can now use as a destination for my CSV file."),(0,o.kt)("img",{src:a(31191).Z,className:"imgBorder"}),(0,o.kt)("p",null,"Check that you've selected the database you want to export data from as your\ndefault one. If the database is selected the name is bolded. If it is not,\ndouble-click on it."),(0,o.kt)("p",null,"To export the ",(0,o.kt)("strong",{parentName:"p"},"customerpurchase")," table, execute the query below. Notice how\nwe changed the backslashes into slashes to avoid getting an error. You can also\nwrite double backslashes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 'id', 'idcustomer', 'idpurchase'\nUNION\nSELECT\nid,\nidcustomer,\nidpurchase\nFROM customerpurchase INTO OUTFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/customerpurchase.csv'\nFIELDS TERMINATED BY ','\nLINES TERMINATED BY '\\r\\n';\n")),(0,o.kt)("p",null,"In the first line we defined the headings, and then selected fields from a table\nthat will be exported to a specified field. We also defined the comma sign as a\nfields terminator and lines will be terminated by ",(0,o.kt)("inlineCode",{parentName:"p"},"\\r\\n"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exported CSV files")),(0,o.kt)("p",null,"Export the rest of the tables using the preferred process and place all the CSV\nfiles in the root directory."),(0,o.kt)("p",null,"Below are the CSV files we exported from our relational database. Feel free to\ndownload them, place them in the root directory and use them for the rest of\nthis tutorial."),(0,o.kt)("p",null,"To place the files in the root directory you need Admin rights on your computer."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/tutorials/rdbms-migration-to-memgraph/customer.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"customer.csv"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/tutorials/rdbms-migration-to-memgraph/customerpurchase.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"customerpurchase.csv"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/tutorials/rdbms-migration-to-memgraph/product.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"product.csv"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/tutorials/rdbms-migration-to-memgraph/productpurchase.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"productpurchase.csv"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://public-assets.memgraph.com/tutorials/rdbms-migration-to-memgraph/purchase.csv"},(0,o.kt)("inlineCode",{parentName:"a"},"purchase.csv")))),(0,o.kt)("h3",{id:"2-transfer-csv-files-into-a-docker-container"},"2. Transfer CSV files into a Docker container"),(0,o.kt)("p",null,"Now we need to copy the CSV files from your local directory into the Docker\ncontainer so Memgraph can access them."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start your Memgraph instance by writing the following command in a terminal:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Open a new terminal and find the CONTAINER ID of the Memgraph Docker\ncontainer:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Place yourself in the root directory and copy files into the container with\nthe following command. You should replace CONTAINER ID and for each file\nchange the source and destination path:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker cp source.csv <CONTAINER ID>:/destination.csv\n")),(0,o.kt)("p",null,"On my computer, the CVS files we need are located in the root directory of the\nWindows 10 OS, and the CONTAINER ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"bbbc43620e5c"),"."),(0,o.kt)("p",null,"First I place myself in the root directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"cd C:\\\n")),(0,o.kt)("p",null,"Then I ran 5 commands to copy the 5 CSV files to the container, changing the\nfile paths in both the source and destination with each new file. This is an\nexample of copying the ",(0,o.kt)("inlineCode",{parentName:"p"},"customer.csv")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"docker cp customer.csv bbbc43620e5c:/customer.csv\n")),(0,o.kt)("p",null,"To check if the files have indeed been copied run the following command but be\nsure to replace the CONTAINER ID:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"docker exec -it bbbc43620e5c bash\n")),(0,o.kt)("p",null,"And then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," command to list all the files and directories in\nthe container's root. You should be able to see the CSV files we just copied to\nthe container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"root@bbbc43620e5c:/# ls\nbin   customer.csv          dev  home  lib    lib64  media  opt   product.csv          purchase.csv  run   srv              supervisord.pid  tmp  var\nboot  customerpurchase.csv  etc  lab   lib32  mage   mnt    proc  productpurchase.csv  root          sbin  supervisord.log  sys              usr\n")),(0,o.kt)("h3",{id:"3-run-memgraph-lab"},"3. Run Memgraph Lab"),(0,o.kt)("p",null,"If you installed Memgraph Platform correctly, you should be able to access\nMemgraph Lab in your browser by visiting\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},(0,o.kt)("inlineCode",{parentName:"a"},"http://localhost:3000/"))," and connect to the database."),(0,o.kt)("p",null,"Place yourself in the ",(0,o.kt)("strong",{parentName:"p"},"Query")," tab where we will write queries in the ",(0,o.kt)("strong",{parentName:"p"},"Query\neditor")," to import data into Memgraph."),(0,o.kt)("img",{src:a(15169).Z,className:"imgBorder"}),(0,o.kt)("h3",{id:"4-import-nodes-into-memgraph"},"4. Import nodes into Memgraph"),(0,o.kt)("p",null,'As we already mentioned, graph databases do not use tables to store data, but\nnodes with relationships that connect them. If you take a look at the data model\nwe were using in the relational database we can describe it with a single\nsentence: "Customers make purchases of product."'),(0,o.kt)("p",null,"Nodes would be the customers, purchases and products while the relationship\nbetween them is that customers MAKE purchases (",(0,o.kt)("inlineCode",{parentName:"p"},"customerpurchase")," table) OF\nproduct (",(0,o.kt)("inlineCode",{parentName:"p"},"productpurchase")," table)."),(0,o.kt)("p",null,"So let's start by importing the nodes into Memgraph using the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," Cypher\nclause. The syntax of the LOAD CSV clause is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV from "/file.csv"\nWITH HEADER AS row\nCREATE (n:nodeName {property1_memgraph_name: row.property1_relational_name, property2_memgraph_name: row.property2_relational_name});\n')),(0,o.kt)("p",null,"So first we need to define the source file path and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"HEADER")," option to\n",(0,o.kt)("inlineCode",{parentName:"p"},"WITH")," because our CSV file has headers. The clause will parse each ",(0,o.kt)("inlineCode",{parentName:"p"},"row")," and\ncreate nodes with properties. This is the clause to create ",(0,o.kt)("inlineCode",{parentName:"p"},"customer")," nodes.\nCopy it and paste it in the ",(0,o.kt)("strong",{parentName:"p"},"Query editor")," in ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab"),", then click\n",(0,o.kt)("strong",{parentName:"p"},"Run query"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV from "/customer.csv"\nWITH HEADER AS row\nCREATE (c:Customer {id: row.id, name: row.name, email: row.email});\n')),(0,o.kt)("p",null,"Switch to the ",(0,o.kt)("strong",{parentName:"p"},"Overview")," tab to confirm we have created 8 new nodes of\ncustomers from our CSV file. Let's repeat the process to create nodes for\npurchases."),(0,o.kt)("p",null,"If we do not define the data type of a property, it will be a string. That is\nwhy we defined the date of purchase as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Date")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV from "/purchase.csv"\nWITH HEADER AS row\nCREATE (p:Purchase {id: row.id, date: Date(row.date)});\n')),(0,o.kt)("p",null,"For node ",(0,o.kt)("inlineCode",{parentName:"p"},"product"),", we'll import products' price as a ",(0,o.kt)("inlineCode",{parentName:"p"},"float"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV from "/product.csv"\nWITH HEADER AS row\nCREATE (pr:Product {id: row.id, brand: row.brand, name: row.name, price: ToFloat(row.price)});\n')),(0,o.kt)("p",null,"You should have 24 nodes imported into your graph database. You can list all the\nnodes to check their properties by using this Cypher query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)\nRETURN n;\n")),(0,o.kt)("img",{src:a(63474).Z,className:"imgBorder"}),(0,o.kt)("p",null,"If you click on each node, you can see its properties. The nodes are still not\nconnected to each other, so let's focus on that by importing the rest of the CSV\nfiles."),(0,o.kt)("h3",{id:"5-import-relationships-into-memgraph"},"5. Import relationships into Memgraph"),(0,o.kt)("p",null,"We've imported CSV files containing data about customers, purchases and\nproducts. In our graph database, they are represented as nodes. Now we need to\nshow the relationships those nodes have with each other."),(0,o.kt)("p",null,"Relationships are defined by data in the ",(0,o.kt)("inlineCode",{parentName:"p"},"customerpurchase")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"productpurchase")," tables and CSV files. If you open the ",(0,o.kt)("inlineCode",{parentName:"p"},"customerpurchase.csv"),"\nfile you can see it is actually connecting two different nodes, customer and\npurchase, via their IDs. That is why we'll use the LOAD CSV clause to match\nthose IDs with existing nodes and create a relationship between them. In this\nexample, the relationship is that a customer MADE a purchase. The arrow of the\nrelationship defines that a customer makes the purchase and not the other way\naround. And lastly, we are defining that the row with the ",(0,o.kt)("inlineCode",{parentName:"p"},"customerpurchase")," ID\nis actually the ID of the ",(0,o.kt)("inlineCode",{parentName:"p"},":MADE")," relationship."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/customerpurchase.csv" WITH HEADER AS row\nMATCH (c:Customer {id: row.idcustomer})\nMATCH (p:Purchase {id: row.idpurchase})\nCREATE (c)-[m:MADE]->(p)\nSET m.id = row.id;\n')),(0,o.kt)("p",null,"Running this query made 12 new relationships between customers and purchases.\nLet's now create relationships between products and purchases. Notice how we\ndefined the quantity data type as integer. Once this last query is run, you\nshould have 24 nodes and 29 relationships (edges)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "/productpurchase.csv" WITH HEADER AS row\nMATCH (pr:Product {id: row.idproduct})\nMATCH (p:Purchase {id: row.idpurchase})\nCREATE (p)-[o:OF]->(pr)\nSET o.id = row.id\nSET o.quantity = ToInteger(row.quantity);\n')),(0,o.kt)("img",{src:a(81806).Z,className:"imgBorder"}),(0,o.kt)("h3",{id:"6-data-model-and-updating-the-schema"},"6. Data model and updating the schema"),(0,o.kt)("p",null,"The data model in a graph database now looks like this:"),(0,o.kt)("img",{src:a(78135).Z,className:"imgBorder"}),(0,o.kt)("p",null,"If you decided you want to add a property to any of the nodes or relationships\nyou can do so at any point without disrupting the schema."),(0,o.kt)("p",null,"Let's add the ",(0,o.kt)("inlineCode",{parentName:"p"},"city")," property to customer 4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (c:Customer {id: "4"})\nSET c.city = "Zagreb"\nRETURN c\n')),(0,o.kt)("p",null,"You can check if this property has been added by running the following query and\nclicking on the node in the ",(0,o.kt)("strong",{parentName:"p"},"Graph")," view:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (c:Customer {id: "4"})\nRETURN c\n')),(0,o.kt)("p",null,"As the last step of this tutorial let's check all the nodes and relationships\nwe've imported into Memgraph by running the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c)-[m]-(p)-[o]-(pr)\nRETURN c,m,p,o,pr;\n")),(0,o.kt)("img",{src:a(34731).Z,className:"imgBorder"}),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"Congratulations! You now have a graph database. You can query it using the\n",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual"},(0,o.kt)("strong",{parentName:"a"},"Cypher query language")),", use various graph algorithms and\nmodules from our open-source repository ",(0,o.kt)("a",{parentName:"p",href:"/mage"},(0,o.kt)("strong",{parentName:"a"},"MAGE"))," to solve graph\nanalytics problems, create awesome customized visual displays of your nodes and\nrelationships with ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-lab/graph-style-script-language"},(0,o.kt)("strong",{parentName:"a"},"Graph Style Script")),",\nfind out how to connect any ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/import-data/kafka"},(0,o.kt)("strong",{parentName:"a"},"streams of data")),"\nyou might have with Memgraph and above all - enjoy your graph database!"))}u.isMDXComponent=!0},11695:function(e,t,a){t.Z=a.p+"assets/images/migrate_relational_database_data_model-a7289d1677ffb9338591ed7f6c0c2043.png"},34030:function(e,t,a){t.Z=a.p+"assets/images/migrate_relational_database_export_wizard-70c5d8e7fc49804b9ab9a0a67f03f52f.png"},88835:function(e,t,a){t.Z=a.p+"assets/images/migrate_relational_database_export_wizard_step_2-c6b3ca13ed2bbe795d1df8a7f3e0f939.png"},31191:function(e,t,a){t.Z=a.p+"assets/images/migrate_relational_database_file_location-6b8bb93352611aacd8504d7bc23208a6.png"},78135:function(e,t,a){t.Z=a.p+"assets/images/migrate_relational_database_graph_data_model-c94c92f1679b07bb4613029292b16920.png"},34731:function(e,t,a){t.Z=a.p+"assets/images/migrate_relational_database_graph_database-5644970b176071d9c159414b2db2dec9.png"},81806:function(e,t,a){t.Z=a.p+"assets/images/migrate_relational_database_lab_overview-049ec0da011d3fe864475a84b4707a8d.png"},15169:function(e,t,a){t.Z=a.p+"assets/images/migrate_relational_database_lab_query-c7ee7d347293910abdbf48156ed36507.png"},63474:function(e,t,a){t.Z=a.p+"assets/images/migrate_relational_database_nodes-11127e0dbcf91b050467a15e5dfd343b.png"}}]);