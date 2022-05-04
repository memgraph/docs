"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83089],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,h=m["".concat(p,".").concat(g)]||m[g]||s[g]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(67294),o=n(72389),i=n(5979),l=n(86010),p="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,s=e.defaultValue,m=e.values,g=e.groupId,h=e.className,d=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:d.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===s?s:null!=(t=null!=s?s:null==(n=d.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=d[0])?void 0:o.props.value;if(null!==N&&!f.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.UB)(),w=v.tabGroupChoices,y=v.setTabGroupChoices,b=(0,r.useState)(N),C=b[0],x=b[1],D=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var T=w[g];null!=T&&T!==C&&f.some((function(e){return e.value===T}))&&x(T)}var E=function(e){var t=e.currentTarget,n=D.indexOf(t),a=f[n].value;a!==C&&(O(t),x(a),null!=g&&y(g,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;n=D[r]||D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return D.push(e)},onKeyDown:I,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(d.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},15420:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return g}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(9877),l=n(58215),p=["components"],u={id:"config-logs",title:"How to change configuration settings and access log files",sidebar_label:"Change configuration and access logs"},c=void 0,s={unversionedId:"how-to-guides/config-logs",id:"version-2.3.0/how-to-guides/config-logs",title:"How to change configuration settings and access log files",description:"Related - Reference Guide",source:"@site/memgraph_versioned_docs/version-2.3.0/how-to-guides/config-logs.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/config-logs",permalink:"/docs/memgraph/how-to-guides/config-logs",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/how-to-guides/config-logs.md",tags:[],version:"2.3.0",frontMatter:{id:"config-logs",title:"How to change configuration settings and access log files",sidebar_label:"Change configuration and access logs"},sidebar:"memgraph",previous:{title:"Implement transformation modules",permalink:"/docs/memgraph/how-to-guides/streams/pulsar/implement-transformation-module"},next:{title:"Existence constraint",permalink:"/docs/memgraph/how-to-guides/constraints/existence-constraint"}},m={},g=[{value:"Docker",id:"docker",level:2},{value:"Configuring Memgraph",id:"configuring-memgraph",level:3},{value:"Changing the configuration file",id:"file",level:4},{value:"Passing configuration options within the <code>docker run</code> command",id:"command",level:4},{value:"Accessing logs",id:"accessing-logs",level:3},{value:"Linux",id:"linux",level:2},{value:"Configuring Memgraph",id:"configuring-memgraph-1",level:3},{value:"Accessing logs",id:"accessing-logs-1",level:3}],h={toc:g};function d(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,o.kt)("p",null,"This how-to guide will show you how to change ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration"},"configuration settings")," for\nMemgraph and check the log files."),(0,o.kt)("p",null,"Continue reading if you are using ",(0,o.kt)("a",{parentName:"p",href:"#docker"},"Memgraph with Docker"),", or skip to\nthe ",(0,o.kt)("a",{parentName:"p",href:"#linux"},"Linux chapter")," if you are using MemgraphDB with ",(0,o.kt)("strong",{parentName:"p"},"WSL"),",\n",(0,o.kt)("strong",{parentName:"p"},"Ubuntu"),", ",(0,o.kt)("strong",{parentName:"p"},"Debian"),", or ",(0,o.kt)("strong",{parentName:"p"},"RPM package"),"."),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Below you will find instructions on configuring Memgraph and ",(0,o.kt)("a",{parentName:"p",href:"#accessing-logs"},"checking\nlogs")," if you are using Memgraph with Docker."),(0,o.kt)("h3",{id:"configuring-memgraph"},"Configuring Memgraph"),(0,o.kt)("p",null,"If you want a custom configuration to be in effect every time you run Memgraph,\n",(0,o.kt)("a",{parentName:"p",href:"#file"},"change the main configuration file"),". "),(0,o.kt)("p",null,"If you want a certain configuration setting to be applied during this run only,\n",(0,o.kt)("a",{parentName:"p",href:"#command"},"pass the configuration option within the ",(0,o.kt)("inlineCode",{parentName:"a"},"docker run")," command"),"."),(0,o.kt)("h4",{id:"file"},"Changing the configuration file"),(0,o.kt)("p",null,"Begin with starting Memgraph and finding out the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER ID"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Start Memgraph with a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command but be sure to include the\nfollowing flag ",(0,o.kt)("inlineCode",{parentName:"p"},"-v mg_etc:/etc/memgraph"),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker ps\n")),(0,o.kt)("p",null,"Now, you can choose to either modify the main configuration file outside of\nDocker, or within Docker with a command-line text editor (such as ",(0,o.kt)("strong",{parentName:"p"},"vim"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To change the configuration file outside the Docker container continue with the\nfollowing steps:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Place yourself in the directory where you want to copy the configuration\nfile. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Copy the file from the container to your current directory with the\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker cp <CONTAINER ID>:/etc/memgraph/memgraph.conf memgraph.conf\n")),(0,o.kt)("p",null,"Be sure to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONTAINER ID>")," parameter."),(0,o.kt)("p",null,"The example below will copy the configuration file to the user's Desktop: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"C:\\Users\\Vlasta\\Desktop>docker cp bb3de2634afe:/etc/memgraph/memgraph.conf memgraph.conf\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5.")," Open the configuration file with a text editor. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6.")," Modify the configuration file and save the changes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7.")," Copy the file from your current directory to the container with the\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker cp  memgraph.conf <CONTAINER ID>:/etc/memgraph/memgraph.conf\n")),(0,o.kt)("p",null,"Be sure to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONTAINER ID>")," parameter."),(0,o.kt)("p",null,"The example below will replace the configuration file with the one from the\nuser's Desktop: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"C:\\Users\\Vlasta\\Desktop>docker cp memgraph.conf bb3de2634afe:/etc/memgraph/memgraph.conf\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8.")," Restart Memgraph."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To change the configuration file inside the Docker container continue with the\nfollowing steps:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Enter the Docker container with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker exec -it <CONTAINER ID> bash\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Install the text editor of your choice."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5.")," Edit the configuration file located at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6.")," Restart Memgraph."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"command"},"Passing configuration options within the ",(0,o.kt)("inlineCode",{parentName:"h4"},"docker run")," command"),(0,o.kt)("p",null,"Select the image you are using to find out how to customize the configuration by\npassing configuration options within the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command."),(0,o.kt)(i.Z,{groupId:"platform",defaultValue:"platform",values:[{label:"memgraph-platform image",value:"platform"},{label:"Other images",value:"other"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"platform",mdxType:"TabItem"},(0,o.kt)("p",null,"When you are working with the ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," image you should pass\nconfiguration options inside of environmental variables."),(0,o.kt)("p",null,"For example, if you want to limit memory usage for the whole instance to 50 MiB\npass the configuration like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--memory-limit=50" memgraph/memgraph-platform\n'))),(0,o.kt)(l.Z,{value:"other",mdxType:"TabItem"},(0,o.kt)("p",null,"When you are working with ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph-mage")," images you should pass\nconfiguration options as arguments. "),(0,o.kt)("p",null,"For example, if you want to limit memory usage for the whole instance to 50 MiB\npass the configuration like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker run -it -p 7687:7687 -p 7444:7444 memgraph --memory-limit=50\n")))),(0,o.kt)("h3",{id:"accessing-logs"},"Accessing logs"),(0,o.kt)("p",null,"To access the logs of a running instance:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1."),"  Open a new terminal and find the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker ps\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker exec -it <CONTAINER ID> bash\n")),(0,o.kt)("p",null,"Be sure to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONTAINER ID>")," parameter."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Position yourself in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/memgraph")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"cd /var/log/memgraph\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," List all the log files with ",(0,o.kt)("inlineCode",{parentName:"p"},"ls"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5.")," List the content of the log with the ",(0,o.kt)("inlineCode",{parentName:"p"},"cat <memgraph_date>.log")," command."),(0,o.kt)("p",null,"For example, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," command returned ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph_2022-03-04.log")," you would\nlist the contents using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"cat memgraph_2022-03-04.log\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6.")," If you want to save the log to your computer, exit the container with\n",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL+D"),", place yourself in a directory where you want to save the copy and run\nthe following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker cp  <memgraph_date>.log <CONTAINER ID>:/var/log/memgraph/<memgraph_date>.log\n")),(0,o.kt)("p",null,"For example, the following command will make a copy of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph_2022-03-04.log")," file on the user's desktop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"C:\\Users\\Vlasta\\Desktop>docker cp memgraph_2022-03-04.log bb3de2634afe:/var/log/memgraph/memgraph_2022-03-04.log.log\n")),(0,o.kt)("h2",{id:"linux"},"Linux"),(0,o.kt)("p",null,"This section of the how-to guide will explain how to change the configuration\nfile and access logs if you are using MemgraphDB with WSL, Ubuntu, Debian or\nRPM package."),(0,o.kt)("h3",{id:"configuring-memgraph-1"},"Configuring Memgraph"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Install and run Memgraph."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Open the configuration file available at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Modify the configuration file and save the changes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Restart Memgraph."),(0,o.kt)("h3",{id:"accessing-logs-1"},"Accessing logs"),(0,o.kt)("p",null,"Logs can be found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/memgraph")," directory."))}d.isMDXComponent=!0}}]);