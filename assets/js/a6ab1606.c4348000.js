"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(g,s(s({ref:t},l),{},{components:r})):n.createElement(g,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<o;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},75335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={id:"kubernetes",title:"Memgraph Helm Chart",sidebar_label:"Kubernetes"},s=void 0,i={unversionedId:"reference-guide/deployment/kubernetes",id:"version-2.8.0/reference-guide/deployment/kubernetes",title:"Memgraph Helm Chart",description:"To include Memgraph as a part of your Kubernetes cluster, use the Helm chart below for a simple setup. Due to numerous possible use cases and deployment setups via Kubernetes, this Helm chart is just a starting point you can modify according to your needs.",source:"@site/memgraph_versioned_docs/version-2.8.0/reference-guide/deployment/kubernetes.md",sourceDirName:"reference-guide/deployment",slug:"/reference-guide/deployment/kubernetes",permalink:"/docs/memgraph/reference-guide/deployment/kubernetes",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.8.0/reference-guide/deployment/kubernetes.md",tags:[],version:"2.8.0",frontMatter:{id:"kubernetes",title:"Memgraph Helm Chart",sidebar_label:"Kubernetes"},sidebar:"memgraph",previous:{title:"Docker",permalink:"/docs/memgraph/reference-guide/deployment/docker"},next:{title:"Indexing",permalink:"/docs/memgraph/reference-guide/indexing"}},p={},m=[],l={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To include Memgraph as a part of your ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes")," cluster, use the ",(0,a.kt)("strong",{parentName:"p"},"Helm chart")," below for a simple setup. Due to numerous possible use cases and deployment setups via Kubernetes, this Helm chart is just a starting point you can modify according to your needs. "),(0,a.kt)("p",null,"The provided Helm chart is configured to deploy Memgraph as a Kubernetes ",(0,a.kt)("strong",{parentName:"p"},"StatefulSet")," workload, which saves data to persistent storage, a useful feature when deploying a database. Due to the StatefulSet nature of Memgraph, it is also necessary to define a ",(0,a.kt)("strong",{parentName:"p"},"PersistentVolumeClaims")," to store ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/backup"},"the data directory")," (/var/lib/memgraph). This enables the data to be persisted even if the pod is restarted or deleted. "),(0,a.kt)("p",null,"If you don't require data persistency or your dataset is static, there is no need to use the StatefulSet workload. Stateful applications are more complex to set up and maintain as they require more attention when handling storage information and security."),(0,a.kt)("p",null,"The Helm chart is configured to use the latest ",(0,a.kt)("strong",{parentName:"p"},"MemgraphDB")," docker image from ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/memgraph/memgraph"},"Docker Hub"),", so if you require a different Memgraph Docker image, be sure the modify the chart. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"apiVersion")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"apps/v1"),", which means the chart supports Helm version 3 or less."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# Service\napiVersion: v1\nkind: Service\nmetadata:\n  name: memgraph-svc\n  labels:\n    app.kubernetes.io/name: memgraph\n    app.kubernetes.io/managed-by: Helm\nspec:\n  type: NodePort\n  ports:\n    - port: 7687\n      targetPort: 7687\n      protocol: TCP\n      name: bolt\n  selector:\n    app.kubernetes.io/name: memgraph\n---\n# StatefulSet\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: memgraph\n  labels:\n    app.kubernetes.io/name: memgraph\n    app.kubernetes.io/managed-by: Helm\nspec:\n  replicas: 1\n  serviceName: memgraph-svc\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: memgraph\n  podManagementPolicy: OrderedReady\n  updateStrategy:\n        type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: memgraph\n    spec:\n      securityContext:\n      volumes:\n        - name: memgraph-lib-storage\n          persistentVolumeClaim:\n            claimName: memgraph-lib-storage\n        - name: memgraph-log-storage\n          persistentVolumeClaim:\n            claimName: memgraph-log-storage\n      containers:\n        - name: memgraph\n          image: "memgraph/memgraph:latest"\n          args: ["--also-log-to-stderr=true"]\n          imagePullPolicy: Always\n          securityContext:\n            runAsUser: 0\n          ports:\n            - name: memgraph\n              containerPort: 7687\n          volumeMounts:\n            - name: memgraph-lib-storage\n              mountPath: /var/lib/memgraph\n            - name: memgraph-log-storage\n              mountPath: /var/log/memgraph\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: memgraph-lib-storage\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 500Mi\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: memgraph-log-storage\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 500Mi\n\n')),(0,a.kt)("p",null,"The above Helm chart spins up Memgraph and exposes it via ",(0,a.kt)("strong",{parentName:"p"},"NodePort")," service on port ",(0,a.kt)("inlineCode",{parentName:"p"},"7687")," for communication via the Bolt protocol."),(0,a.kt)("p",null," The chart also creates two ",(0,a.kt)("strong",{parentName:"p"},"PersistentVolumeClaims")," for storing the data and log directories. Since Memgraph Docker image has root privileges on the data located on volumes and log directories, it is necessary to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"runAsUser")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"securityContext")," section of the pod to override the ",(0,a.kt)("inlineCode",{parentName:"p"},"memgraph")," user from the Docker image. Currently, Memgraph must have root privileges on the volumes. "),(0,a.kt)("p",null,"Memgraph starts with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--also-log-to-stderr=true")," flag, meaning the logs will also be written to the standard error output and you can access logs using the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs")," command."))}u.isMDXComponent=!0}}]);