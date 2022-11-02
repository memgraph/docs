"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11648],{3905:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>d});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=r.createContext({}),p=function(e){var n=r.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},i=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=t,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return a?r.createElement(g,o(o({ref:n},i),{},{components:a})):r.createElement(g,o({ref:n},i))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,n,a)=>{a.d(n,{Z:()=>o});var r=a(67294),t=a(86010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,t.Z)(l,o),hidden:a},n)}},65488:(e,n,a)=>{a.d(n,{Z:()=>d});var r=a(87462),t=a(67294),l=a(86010),o=a(72389),s=a(67392),u=a(7094),p=a(12466);const i="tabList__CuJ",m="tabItem_LNqP";function c(e){var n;const{lazy:a,block:o,defaultValue:c,values:d,groupId:g,className:h}=e,f=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??f.map((e=>{let{props:{value:n,label:a,attributes:r}}=e;return{value:n,label:a,attributes:r}})),b=(0,s.l)(k,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,u.U)(),[N,O]=(0,t.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==N&&k.some((n=>n.value===e))&&O(e)}const C=e=>{const n=e.currentTarget,a=E.indexOf(n),r=k[a].value;r!==N&&(T(n),O(r),null!=g&&w(g,String(r)))},x=e=>{var n;let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;a=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;a=E[n]??E[E.length-1];break}}null==(n=a)||n.focus()};return t.createElement("div",{className:(0,l.Z)("tabs-container",i)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},k.map((e=>{let{value:n,label:a,attributes:o}=e;return t.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>E.push(e),onKeyDown:x,onClick:C},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":N===n})}),a??n)}))),a?(0,t.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function d(e){const n=(0,o.Z)();return t.createElement(c,(0,r.Z)({key:String(n)},e))}},91927:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),t=(a(67294),a(3905)),l=a(65488),o=a(85162);const s={id:"users",title:"User management",sidebar_label:"User management"},u=void 0,p={unversionedId:"reference-guide/users",id:"version-2.3.0/reference-guide/users",title:"User management",description:"The community edition of Memgraph enables creating users that can access the",source:"@site/memgraph_versioned_docs/version-2.3.0/reference-guide/users.md",sourceDirName:"reference-guide",slug:"/reference-guide/users",permalink:"/docs/memgraph/2.3.0/reference-guide/users",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/reference-guide/users.md",tags:[],version:"2.3.0",frontMatter:{id:"users",title:"User management",sidebar_label:"User management"},sidebar:"memgraph",previous:{title:"Triggers",permalink:"/docs/memgraph/2.3.0/reference-guide/triggers"},next:{title:"Enabling Memgraph Enterprise",permalink:"/docs/memgraph/2.3.0/reference-guide/enabling-enterprise"}},i={},m=[{value:"Authorization",id:"authorization",level:2}],c={toc:m};function d(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"The community edition of Memgraph enables creating users that can access the\ndatabase with or without a password."),(0,t.kt)("p",null,"To create a user, execute the following command:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER user_name [IDENTIFIED BY 'password'];\n")),(0,t.kt)("p",null,"Setting up a password is optional. If the password is not set, the user can\nlog in using any password, or none, provided that they enter the correct\nusername."),(0,t.kt)("p",null,"To set or change a user's password, use the following command:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cypher"},"SET PASSWORD FOR user_name TO 'new_password';\n")),(0,t.kt)("p",null,"To check all the users created on an instance, use:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW USERS;\n")),(0,t.kt)("p",null,"To remove a user's password, set it to ",(0,t.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cypher"},"SET PASSWORD FOR user_name TO null;\n")),(0,t.kt)("p",null,"To delete a user use:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP USER user_name;\n")),(0,t.kt)("h2",{id:"authorization"},"Authorization"),(0,t.kt)(l.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,t.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"memgraph-platform")," image")),(0,t.kt)("p",null,"If you are using Docker and ",(0,t.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," image, you should pass the\n",(0,t.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"password")," environmental variables when starting Memgraph:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-terminal"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MGCONSOLE="--username <username> --password <password>" memgraph/memgraph-platform\n')),(0,t.kt)("p",null,"Example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-terminal"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MGCONSOLE="--username vlasta --password vp" memgraph/memgraph-platform\n')),(0,t.kt)("p",null,"Upon connecting with Memgraph Lab you should select ",(0,t.kt)("em",{parentName:"p"},"Connect Manually")," and enter\nusername (and password)."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"memgraph")," and ",(0,t.kt)("inlineCode",{parentName:"strong"},"memgraph-mage")," images")),(0,t.kt)("p",null,"If you are using Docker and ",(0,t.kt)("inlineCode",{parentName:"p"},"memgraph")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"memgraph-mage")," image enter username\nand password when connecting manually to Memgraph Lab. "),(0,t.kt)("p",null,"If you are connecting with mgconsole you should add the username and password\nflags to the ",(0,t.kt)("inlineCode",{parentName:"p"},"docker run")," command: "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-terminal"},"docker run -it --entrypoint=mgconsole memgraph --host CONTAINER_IP --username=<username> --password=<password>\n")),(0,t.kt)("p",null,"Example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-terminal"},"docker run -it --entrypoint=mgconsole memgraph --host 172.17.0.2 --username=vlasta --password=vp\n"))),(0,t.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,t.kt)("p",null,"If you are using Linux and connecting with Memgraph Lab, select ",(0,t.kt)("em",{parentName:"p"},"Connect\nManually")," and enter username (and password). "),(0,t.kt)("p",null,"When connecting with mgconsole, set\nthe ",(0,t.kt)("inlineCode",{parentName:"p"},"--username")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"--password")," flags:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687 --username <username> --password <password>\n")),(0,t.kt)("p",null,"Example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-terminal"},"./mgconsole --host 127.0.0.1 --port 7687 --username vlasta --password vp\n")))))}d.isMDXComponent=!0}}]);