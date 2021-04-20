(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{266:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(357)),i={id:"docker-installation",title:"Install Memgraph on Linux with Docker",sidebar_label:"Docker \ud83d\udc33",slug:"/install-memgraph-on-linux-docker"},l={unversionedId:"installation/linux/docker-installation",id:"installation/linux/docker-installation",isDocsHomePage:!1,title:"Install Memgraph on Linux with Docker",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/docs/installation/linux/docker-installation.md",slug:"/install-memgraph-on-linux-docker",permalink:"/memgraph/next/install-memgraph-on-linux-docker",editUrl:"https://github.com/memgraph/docs/tree/master/docs/installation/linux/docker-installation.md",version:"current",sidebar_label:"Docker \ud83d\udc33",sidebar:"memgraph",previous:{title:"PHP quick start",permalink:"/memgraph/next/getting-started/connecting-applications/php"},next:{title:"Install Memgraph on Ubuntu",permalink:"/memgraph/next/install-memgraph-on-ubuntu"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation guide",id:"installation-guide",children:[{value:"Stopping the database instance",id:"stopping-the-database-instance",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Named volumes",id:"named-volumes",children:[]}]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article briefly outlines the basic steps necessary to install and run\nMemgraph on Linux with Docker."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Before you proceed with the installation guide make sure that you have:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Installed ",Object(o.b)("strong",{parentName:"li"},"Docker"),". Instructions on how to do this can be found on the\n",Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker website"),"."),Object(o.b)("li",{parentName:"ul"},"Downloaded the latest ",Object(o.b)("strong",{parentName:"li"},"Memgraph Docker Image")," which can be ",Object(o.b)("a",{parentName:"li",href:"https://memgraph.com/download/"},"found\nhere"),".")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Memgraph's Docker image was built with ",Object(o.b)("strong",{parentName:"p"},"Docker version ",Object(o.b)("inlineCode",{parentName:"strong"},"1.12"))," and should be\ncompatible with all newer versions."))),Object(o.b)("h2",{id:"installation-guide"},"Installation guide"),Object(o.b)("p",null,"If you installed Docker and downloaded the latest Memgraph Docker image, import\nthe image using the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"docker load -i /path/to/memgraph-<version>-docker.tar.gz\n")),Object(o.b)("p",null,"To start Memgraph, use the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph \\\n  -v mg_log:/var/log/memgraph \\\n  -v mg_etc:/etc/memgraph \\\n  memgraph\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docker Volumes")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Docker containers don\u2019t persist data by default (all changes are lost when the\ncontainer is stopped). You need to use local volumes to store the data\npermanently which is why Memgraph is started with the ",Object(o.b)("inlineCode",{parentName:"p"},"-v")," flags. More\ninformation on Docker Volumes can be found\n",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"here"),"."))),Object(o.b)("p",null,"If successful, you should see a message similar to the following :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"You are running Memgraph v1.4.0-community\n")),Object(o.b)("p",null,"At this point, Memgraph is ready for you to ",Object(o.b)("a",{parentName:"p",href:"/memgraph/next/getting-started/querying/querying"},"submit\nqueries"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The username and password for connecting to the database are empty by default."))),Object(o.b)("h3",{id:"stopping-the-database-instance"},"Stopping the database instance"),Object(o.b)("p",null,"To stop a Memgraph database instance, run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"docker stop CONTAINER_NAME\n")),Object(o.b)("p",null,"You can find the name of the container (",Object(o.b)("inlineCode",{parentName:"p"},"CONTAINER_NAME"),") by running:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The Memgraph configuration is available in Docker's named volume ",Object(o.b)("inlineCode",{parentName:"p"},"mg_etc"),". On\nLinux systems, it should be in\n",Object(o.b)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". Keep in mind that this way\nof specifying configuration options is only valid if Memgraph was started ",Object(o.b)("a",{parentName:"p",href:"#installation-guide"},"using\nvolumes"),"."),Object(o.b)("p",null,"When using Docker, you can also specify the configuration options in the ",Object(o.b)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 memgraph --bolt-port=7687\n")),Object(o.b)("p",null,"To learn about\nall the configuration options, check out the ",Object(o.b)("a",{parentName:"p",href:"/memgraph/next/reference-guide/configuration"},"Reference\nguide"),"."),Object(o.b)("h3",{id:"named-volumes"},"Named volumes"),Object(o.b)("p",null,"If it happens that the named volumes are reused between different Memgraph\nversions, Docker will overwrite a folder within the container with existing data\nfrom the host machine. If a new file is introduced, or two versions of Memgraph\nare not compatible, some features might not work or Memgraph might not be able\nto work correctly. We strongly advise you to use different named volumes for\ndifferent Memgraph versions, or to remove the existing volume from the host with\nthe following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"docker volume rm <volume_name>\n")),Object(o.b)("h2",{id:"where-to-next"},"Where to next?"),Object(o.b)("p",null,"If you need more information on working with Docker, check out ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/how-to-work-with-docker"},"this\nguide")),".",Object(o.b)("br",null),"\nTo learn how to query the database, take a look at the\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/getting-started/querying/querying"},"Querying"))," guide or ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",Object(o.b)("br",null),"\nVisit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/getting-started/connecting-applications"},"Building\napplications")),"\npage if you need to connect to the database programmatically."),Object(o.b)("h2",{id:"getting-help"},"Getting help"),Object(o.b)("p",null,"If you run into problems during the installation process, check out our\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/linux-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see if\nhave already covered the topic. For more information on the installation process\nand for additional questions, visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/getting-help/getting-help"},"Getting\nhelp"))," page."))}p.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(u,l(l({ref:t},s),{},{components:n})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);