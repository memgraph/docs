"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38624],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85769:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"work-with-docker",title:"How to work with Docker",sidebar_label:"Work with Docker"},p=void 0,m={unversionedId:"how-to-guides/work-with-docker",id:"version-2.3.1/how-to-guides/work-with-docker",title:"How to work with Docker",description:"Docker is a service that uses OS-level virtualization",source:"@site/memgraph_versioned_docs/version-2.3.1/how-to-guides/work-with-docker.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/work-with-docker",permalink:"/docs/memgraph/how-to-guides/work-with-docker",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/how-to-guides/work-with-docker.md",tags:[],version:"2.3.1",frontMatter:{id:"work-with-docker",title:"How to work with Docker",sidebar_label:"Work with Docker"},sidebar:"memgraph",previous:{title:"Use SSL encryption",permalink:"/docs/memgraph/how-to-guides/encryption"},next:{title:"Work with indexes",permalink:"/docs/memgraph/how-to-guides/indexes"}},c={},s=[{value:"How to set up Memgraph with Docker?",id:"how-to-set-up-memgraph-with-docker",level:2},{value:"Download the Memgraph Docker image",id:"download-the-memgraph-docker-image",level:3},{value:"Create Docker image tags",id:"create-docker-image-tags",level:3},{value:"Run a Memgraph Docker image",id:"run-a-memgraph-docker-image",level:3},{value:"Publish ports",id:"publish-ports",level:4},{value:"Specify volumes",id:"specify-volumes",level:4},{value:"Set up the configuration",id:"set-up-the-configuration",level:4},{value:"Stop image",id:"stop-image",level:3},{value:"How to retrieve a Docker container ID?",id:"how-to-retrieve-a-docker-container-id",level:2},{value:"How to retrieve a Docker container IP address?",id:"how-to-retrieve-a-docker-container-ip-address",level:2},{value:"How to browse files inside a Docker container?",id:"how-to-browse-files-inside-a-docker-container",level:2},{value:"How to copy files from and to a Docker container?",id:"how-to-copy-files-from-and-to-a-docker-container",level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," is a service that uses OS-level virtualization\nto deliver software in packages that are called\n",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/resources/what-container"},"containers"),"."),(0,o.kt)("p",null,"Memgraph uses Docker because it is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flexible"),(0,o.kt)("li",{parentName:"ul"},"Lightweight"),(0,o.kt)("li",{parentName:"ul"},"Portable - you can build locally or deploy to the cloud"),(0,o.kt)("li",{parentName:"ul"},"Runs on all platforms - Windows, Linux and macOS"),(0,o.kt)("li",{parentName:"ul"},"Deploys in Kubernetes")),(0,o.kt)("p",null,"If you are new to Docker, this guide will help you get a grasp of Docker and\nmake it easier to accomplish tasks within Memgraph. After installing Docker, all\ncommands are run from the command-line tool of your preference."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/deployment/docker"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))," "),(0,o.kt)("h2",{id:"how-to-set-up-memgraph-with-docker"},"How to set up Memgraph with Docker?"),(0,o.kt)("p",null,"We recommend installing and running Memgraph using Docker."),(0,o.kt)("p",null,"There are three Docker images you can use to run Memgraph:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memgraph-platform")," - installs the whole Memgraph Platform, which includes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MemgraphDB"),": the graph database"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mgconsole"),": a command-line interface for running queries"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memgraph Lab"),": visual user interface for running queries and visualizing\ngraph data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MAGE"),": an open-source library of graph algorithms and custom Cypher\nprocedures"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memgraph-mage")," - installs ",(0,o.kt)("strong",{parentName:"li"},"MemgraphDB")," and ",(0,o.kt)("strong",{parentName:"li"},"MAGE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memgraph")," - installs ",(0,o.kt)("strong",{parentName:"li"},"MemgraphDB"))),(0,o.kt)("h3",{id:"download-the-memgraph-docker-image"},"Download the Memgraph Docker image"),(0,o.kt)("p",null,"Images are downloaded using the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker pull")," command followed by the name of\nthe Docker image. We encourage you to use Memgraph Platform as it includes\neverything you might need while making the best of Memgraph."),(0,o.kt)("p",null,"To download the latest Memgraph Platform image, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull memgraph/memgraph-platform\n")),(0,o.kt)("h3",{id:"create-docker-image-tags"},"Create Docker image tags"),(0,o.kt)("p",null,"Some images might need tags to be able to run properly and this is usually noted\nin the installation process. By creating a tag for the image, you are allowing\nall the dependencies within the Docker container to refer to the image by its\noriginal name and the tag."),(0,o.kt)("p",null,"For example, the following command allows the processes inside the image to\nrefer to the image as ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker image tag memgraph/memgraph-platform memgraph\n")),(0,o.kt)("h3",{id:"run-a-memgraph-docker-image"},"Run a Memgraph Docker image"),(0,o.kt)("p",null,"All images are started using the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command followed by various flags,\nenvironment variables and configuration options."),(0,o.kt)("p",null,"The most common flags used while running Memgraph images are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"enable interactive mode: ",(0,o.kt)("inlineCode",{parentName:"li"},"-it")),(0,o.kt)("li",{parentName:"ul"},"publish ports: ",(0,o.kt)("inlineCode",{parentName:"li"},"-p 3000:3000")),(0,o.kt)("li",{parentName:"ul"},"specify volumes for data persistance ",(0,o.kt)("inlineCode",{parentName:"li"},"-v mg_lib:/var/lib/memgraph")),(0,o.kt)("li",{parentName:"ul"},"set up configuration using environment variables in the case of the\n",(0,o.kt)("inlineCode",{parentName:"li"},"memgraph-platform")," image, or configuration flags using the ",(0,o.kt)("inlineCode",{parentName:"li"},"memgraph")," or\n",(0,o.kt)("inlineCode",{parentName:"li"},"memgraph-mage")," image")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command can look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it -p 7687:7687 [-p host_port:container_port] [-v volume_name:volume_path] [configuration] memgraph/image_name\n")),(0,o.kt)("h4",{id:"publish-ports"},"Publish ports"),(0,o.kt)("p",null,"Ports are published in order to allow services outside the container to be able\nto connect to the container. When publishing ports, you need to define two ports\nseparated by a colon. The left side port stands for the ",(0,o.kt)("strong",{parentName:"p"},"host port")," and the\nright side port is the ",(0,o.kt)("strong",{parentName:"p"},"container port"),"."),(0,o.kt)("p",null,"The most common ports published while running Memgraph are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p 7687:7687")," - connection to the database instance (the Bolt protocol uses\nthis port by default)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p 3000:3000")," - connection to the Memgraph Lab application when running\nMemgraph Platform"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p 7444:7444")," - connection to fetch log files from Memgraph Lab (only in\nversion 2.0 and newer)")),(0,o.kt)("p",null,"For example, if you are running two instances using the ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph-platform"),"\nimage and you want to connect to both instances using the Memgraph Lab\nin-browser application. You would run the first instance with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform\n")),(0,o.kt)("p",null,"Because ports ",(0,o.kt)("inlineCode",{parentName:"p"},"7687"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"7444")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"3000")," are now taken, you need to change the left side\nports (host ports):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it -p 7688:7687 -p 7445:7444 -p 3001:3000 memgraph/memgraph-platform\n")),(0,o.kt)("p",null,"To connect to the first instance, you should open Memgraph Lab in your browser\nat ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", but the second instance is at ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3001"),"."),(0,o.kt)("h4",{id:"specify-volumes"},"Specify volumes"),(0,o.kt)("p",null,"Specifying a volume creates a copy of a directory inside the Docker container as\na local directory. The ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," flag is followed by the name of the local directory\nseparated from the path of the volume in the container by a semicolon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-v volume_name:volume_path\n")),(0,o.kt)("p",null,"Useful volumes you can specify while running Memgraph are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v mg_lib:/var/lib/memgraph")," - directory containing data, enables data\npersistency"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v mg_log:/var/log/memgraph")," - directory containing log files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v mg_etc:/etc/memgraph")," - directory containing the configuration file")),(0,o.kt)("p",null,"The exact location of the local directories depends on your specific setup."),(0,o.kt)("p",null,"The configuration file can usually be found at\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf")," but you can also copy the\nfile from the Docker container, modify it and copy it back into the container."),(0,o.kt)("p",null,"Logs can usually be found in\n",(0,o.kt)("inlineCode",{parentName:"p"},"\\\\wsl$\\docker-desktop-data\\version-pack-data\\community\\docker\\volumes\\"),", but\nyou can also view them in the Memgraph Lab 2.0 (or newer) by publishing the port\n",(0,o.kt)("inlineCode",{parentName:"p"},"7444"),"."),(0,o.kt)("h4",{id:"set-up-the-configuration"},"Set up the configuration"),(0,o.kt)("p",null,"If you want a certain configuration setting to be applied during this run only,\nyou need to pass the configuration option within the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command\ninstead of changing the configuration file."),(0,o.kt)("p",null,"If you are working with the ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," image, you should pass\nconfiguration options with environment variables."),(0,o.kt)("p",null,"For example, if you want to limit memory usage for the whole instance to 50 MiB\nand set the log level to ",(0,o.kt)("inlineCode",{parentName:"p"},"TRACE"),", pass the configuration like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -it -p 7687:7687 -p 3000:3000 -p 7444:7444 -e MEMGRAPH="--memory-limit=50 --log-level=TRACE" memgraph/memgraph-platform\n')),(0,o.kt)("p",null,"When you are working with ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph-mage")," images, you should pass\nconfiguration options as arguments."),(0,o.kt)("p",null,"For example, if you want to limit memory usage for the whole instance to 50 MiB\nand set the log level to ",(0,o.kt)("inlineCode",{parentName:"p"},"TRACE"),", pass the configuration argument like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it -p 7687:7687 memgraph/memgraph --memory-limit=50 --log-level=TRACE\n")),(0,o.kt)("h3",{id:"stop-image"},"Stop image"),(0,o.kt)("p",null,"Database instances are stopped by stopping the Docker container with the command\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker stop"),". To stop a container you need ",(0,o.kt)("a",{parentName:"p",href:"#how-to-retrieve-a-docker-container-id"},"to know the container's\nID"),"."),(0,o.kt)("p",null,"You can list all the containers you want to stop in one ",(0,o.kt)("inlineCode",{parentName:"p"},"docker stop")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker stop CONTAINER1_ID CONTAINER2_ID\n")),(0,o.kt)("h2",{id:"how-to-retrieve-a-docker-container-id"},"How to retrieve a Docker container ID?"),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps\n")),(0,o.kt)("p",null,"You should get an output similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'CONTAINER ID   IMAGE                        COMMAND                  CREATED        STATUS        PORTS                                                                    NAMES\n45fa0f86f826   memgraph/memgraph-platform   "/bin/sh -c \'/usr/bi\u2026"   21 hours ago   Up 21 hours   0.0.0.0:3000->3000/tcp, 0.0.0.0:7444->7444/tcp, 0.0.0.0:7687->7687/tcp   admiring_almeida\n')),(0,o.kt)("p",null,"You can shorten this ID to 4 letters if the ID remains unique, for example,\n",(0,o.kt)("inlineCode",{parentName:"p"},"45fa"),"."),(0,o.kt)("h2",{id:"how-to-retrieve-a-docker-container-ip-address"},"How to retrieve a Docker container IP address?"),(0,o.kt)("p",null,"To retrieve the Docker container IP address, first, you need ",(0,o.kt)("a",{parentName:"p",href:"#how-to-retrieve-a-docker-container-id"},"to retrieve its\nID"),"."),(0,o.kt)("p",null,"Then run the following command if the container ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"9397623cd87e"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e\n")),(0,o.kt)("h2",{id:"how-to-browse-files-inside-a-docker-container"},"How to browse files inside a Docker container?"),(0,o.kt)("p",null,"To browse files inside a Docker container, first, you need ",(0,o.kt)("a",{parentName:"p",href:"#how-to-retrieve-a-docker-container-id"},"to retrieve its\nID"),"."),(0,o.kt)("p",null,"Then run the following command if the container ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"9397623cd87e"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker -it exec 9397623cd87e bash\n")),(0,o.kt)("p",null,"To navigate through the container, use the following commands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ls")," - list all the directories and files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cd <directory>")," - enter a directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cd ..")," - leave the directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cat <file>")," - list the content of a file")),(0,o.kt)("p",null,"You don't have to write file and directory names in full, once you write enough\nletters to have a unique string, press the ",(0,o.kt)("inlineCode",{parentName:"p"},"<TAB>")," key."),(0,o.kt)("h2",{id:"how-to-copy-files-from-and-to-a-docker-container"},"How to copy files from and to a Docker container?"),(0,o.kt)("p",null,"To copy files from and to the Docker container, first, you need ",(0,o.kt)("a",{parentName:"p",href:"#how-to-retrieve-a-docker-container-id"},"to retrieve its\nID"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Place yourself in the local directory where you want to copy the\nconfiguration file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the file from the container to your current directory with the command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker cp <CONTAINER ID>:<path_in_container> <local_file_name>\n")),(0,o.kt)("p",{parentName:"li"},"Be sure to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONTAINER ID>")," parameter."),(0,o.kt)("p",{parentName:"li"},"The example below will copy the configuration file to the user's Desktop:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"C:\\Users\\Vlasta\\Desktop>docker cp bb3de2634afe:/etc/memgraph/memgraph.conf memgraph.conf\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the file from your current directory to the container with the command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker cp  <local_file_name> <CONTAINER ID>:<path_in_container>\n")),(0,o.kt)("p",{parentName:"li"},"Be sure to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONTAINER ID>")," parameter."),(0,o.kt)("p",{parentName:"li"},"The example below will replace the configuration file with the one from the\nuser's Desktop:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"C:\\Users\\Vlasta\\Desktop>docker cp memgraph.conf bb3de2634afe:/etc/memgraph/memgraph.conf\n")))))}d.isMDXComponent=!0}}]);