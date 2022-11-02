"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,h=u["".concat(p,".").concat(g)]||u[g]||m[g]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(87462),o=n(67294),r=n(86010),l=n(72389),i=n(67392),p=n(7094),s=n(12466);const c="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:n,block:l,defaultValue:u,values:g,groupId:h,className:d}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=g??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,i.l)(k,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,p.U)(),[b,C]=(0,o.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=h){const e=y[h];null!=e&&e!==b&&k.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==b&&(T(t),C(a),null!=h&&w(h,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},d)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>x.push(e),onKeyDown:D,onClick:O},l,{className:(0,r.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":b===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function g(e){const t=(0,l.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},15420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),r=n(65488),l=n(85162);const i={id:"config-logs",title:"How to change configuration settings and access log files",sidebar_label:"Change configuration and access logs"},p=void 0,s={unversionedId:"how-to-guides/config-logs",id:"version-2.3.0/how-to-guides/config-logs",title:"How to change configuration settings and access log files",description:"Related - Reference Guide",source:"@site/memgraph_versioned_docs/version-2.3.0/how-to-guides/config-logs.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/config-logs",permalink:"/docs/memgraph/2.3.0/how-to-guides/config-logs",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/how-to-guides/config-logs.md",tags:[],version:"2.3.0",frontMatter:{id:"config-logs",title:"How to change configuration settings and access log files",sidebar_label:"Change configuration and access logs"},sidebar:"memgraph",previous:{title:"Implement transformation modules",permalink:"/docs/memgraph/2.3.0/how-to-guides/streams/pulsar/implement-transformation-module"},next:{title:"Existence constraint",permalink:"/docs/memgraph/2.3.0/how-to-guides/constraints/existence-constraint"}},c={},m=[{value:"Docker",id:"docker",level:2},{value:"Configuring Memgraph",id:"configuring-memgraph",level:3},{value:"Changing the configuration file",id:"file",level:4},{value:"Passing configuration options within the <code>docker run</code> command",id:"command",level:4},{value:"Accessing logs",id:"accessing-logs",level:3},{value:"Linux",id:"linux",level:2},{value:"Configuring Memgraph",id:"configuring-memgraph-1",level:3},{value:"Accessing logs",id:"accessing-logs-1",level:3}],u={toc:m};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.0/reference-guide/configuration"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,o.kt)("p",null,"This how-to guide will show you how to change ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.0/reference-guide/configuration"},"configuration settings")," for\nMemgraph and check the log files."),(0,o.kt)("p",null,"Continue reading if you are using ",(0,o.kt)("a",{parentName:"p",href:"#docker"},"Memgraph with Docker"),", or skip to\nthe ",(0,o.kt)("a",{parentName:"p",href:"#linux"},"Linux chapter")," if you are using MemgraphDB with ",(0,o.kt)("strong",{parentName:"p"},"WSL"),",\n",(0,o.kt)("strong",{parentName:"p"},"Ubuntu"),", ",(0,o.kt)("strong",{parentName:"p"},"Debian"),", or ",(0,o.kt)("strong",{parentName:"p"},"RPM package"),"."),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Below you will find instructions on configuring Memgraph and ",(0,o.kt)("a",{parentName:"p",href:"#accessing-logs"},"checking\nlogs")," if you are using Memgraph with Docker."),(0,o.kt)("h3",{id:"configuring-memgraph"},"Configuring Memgraph"),(0,o.kt)("p",null,"If you want a custom configuration to be in effect every time you run Memgraph,\n",(0,o.kt)("a",{parentName:"p",href:"#file"},"change the main configuration file"),". "),(0,o.kt)("p",null,"If you want a certain configuration setting to be applied during this run only,\n",(0,o.kt)("a",{parentName:"p",href:"#command"},"pass the configuration option within the ",(0,o.kt)("inlineCode",{parentName:"a"},"docker run")," command"),"."),(0,o.kt)("h4",{id:"file"},"Changing the configuration file"),(0,o.kt)("p",null,"Begin with starting Memgraph and finding out the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER ID"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Start Memgraph with a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command but be sure to include the\nfollowing flag ",(0,o.kt)("inlineCode",{parentName:"p"},"-v mg_etc:/etc/memgraph"),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker ps\n")),(0,o.kt)("p",null,"Now, you can choose to either modify the main configuration file outside of\nDocker, or within Docker with a command-line text editor (such as ",(0,o.kt)("strong",{parentName:"p"},"vim"),")."),(0,o.kt)(r.Z,{groupId:"container",defaultValue:"outside",values:[{label:"Changing configuration outside the container",value:"outside"},{label:"Changing configuration inside the container",value:"inside"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"outside",mdxType:"TabItem"},(0,o.kt)("p",null,"To change the configuration file outside the Docker container continue with the\nfollowing steps:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Place yourself in the directory where you want to copy the configuration\nfile. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Copy the file from the container to your current directory with the\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker cp <CONTAINER ID>:/etc/memgraph/memgraph.conf memgraph.conf\n")),(0,o.kt)("p",null,"Be sure to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONTAINER ID>")," parameter."),(0,o.kt)("p",null,"The example below will copy the configuration file to the user's Desktop: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"C:\\Users\\Vlasta\\Desktop>docker cp bb3de2634afe:/etc/memgraph/memgraph.conf memgraph.conf\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5.")," Open the configuration file with a text editor. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6.")," Modify the configuration file and save the changes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7.")," Copy the file from your current directory to the container with the\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker cp  memgraph.conf <CONTAINER ID>:/etc/memgraph/memgraph.conf\n")),(0,o.kt)("p",null,"Be sure to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONTAINER ID>")," parameter."),(0,o.kt)("p",null,"The example below will replace the configuration file with the one from the\nuser's Desktop: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"C:\\Users\\Vlasta\\Desktop>docker cp memgraph.conf bb3de2634afe:/etc/memgraph/memgraph.conf\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8.")," Restart Memgraph.")),(0,o.kt)(l.Z,{value:"inside",mdxType:"TabItem"},(0,o.kt)("p",null,"To change the configuration file inside the Docker container continue with the\nfollowing steps:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Enter the Docker container with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker exec -it <CONTAINER ID> bash\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Install the text editor of your choice."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5.")," Edit the configuration file located at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6.")," Restart Memgraph."))),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"command"},"Passing configuration options within the ",(0,o.kt)("inlineCode",{parentName:"h4"},"docker run")," command"),(0,o.kt)("p",null,"Select the image you are using to find out how to customize the configuration by\npassing configuration options within the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command."),(0,o.kt)(r.Z,{groupId:"platform",defaultValue:"platform",values:[{label:"memgraph-platform image",value:"platform"},{label:"Other images",value:"other"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"platform",mdxType:"TabItem"},(0,o.kt)("p",null,"When you are working with the ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," image you should pass\nconfiguration options inside of environmental variables."),(0,o.kt)("p",null,"For example, if you want to limit memory usage for the whole instance to 50 MiB\npass the configuration like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--memory-limit=50" memgraph/memgraph-platform\n'))),(0,o.kt)(l.Z,{value:"other",mdxType:"TabItem"},(0,o.kt)("p",null,"When you are working with ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph-mage")," images you should pass\nconfiguration options as arguments. "),(0,o.kt)("p",null,"For example, if you want to limit memory usage for the whole instance to 50 MiB\npass the configuration like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker run -it -p 7687:7687 -p 7444:7444 memgraph --memory-limit=50\n")))),(0,o.kt)("h3",{id:"accessing-logs"},"Accessing logs"),(0,o.kt)("p",null,"To access the logs of a running instance:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1."),"  Open a new terminal and find the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker ps\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker exec -it <CONTAINER ID> bash\n")),(0,o.kt)("p",null,"Be sure to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONTAINER ID>")," parameter."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Position yourself in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/memgraph")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"cd /var/log/memgraph\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," List all the log files with ",(0,o.kt)("inlineCode",{parentName:"p"},"ls"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5.")," List the content of the log with the ",(0,o.kt)("inlineCode",{parentName:"p"},"cat <memgraph_date>.log")," command."),(0,o.kt)("p",null,"For example, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," command returned ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph_2022-03-04.log")," you would\nlist the contents using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"cat memgraph_2022-03-04.log\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6.")," If you want to save the log to your computer, exit the container with\n",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL+D"),", place yourself in a directory where you want to save the copy and run\nthe following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker cp  <memgraph_date>.log <CONTAINER ID>:/var/log/memgraph/<memgraph_date>.log\n")),(0,o.kt)("p",null,"For example, the following command will make a copy of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph_2022-03-04.log")," file on the user's desktop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"C:\\Users\\Vlasta\\Desktop>docker cp memgraph_2022-03-04.log bb3de2634afe:/var/log/memgraph/memgraph_2022-03-04.log.log\n")),(0,o.kt)("h2",{id:"linux"},"Linux"),(0,o.kt)("p",null,"This section of the how-to guide will explain how to change the configuration\nfile and access logs if you are using MemgraphDB with WSL, Ubuntu, Debian or\nRPM package."),(0,o.kt)("h3",{id:"configuring-memgraph-1"},"Configuring Memgraph"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Install and run Memgraph."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Open the configuration file available at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Modify the configuration file and save the changes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Restart Memgraph."),(0,o.kt)("h3",{id:"accessing-logs-1"},"Accessing logs"),(0,o.kt)("p",null,"Logs can be found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/memgraph")," directory."))}g.isMDXComponent=!0}}]);