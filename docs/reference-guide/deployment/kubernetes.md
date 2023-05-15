---
id: kubernetes
title: Memgraph Helm Chart
sidebar_label: Kubernetes
---

If you need Memgraph as a part of your **Kubernetes** cluster, you can use the below **Helm Chart** for a simple setup.

Due to the nature of different use cases and deployment setups via Kubernetes, you can use this as the base and modify it to your needs. 

Memgraph is a database at its core, so you probably want to deploy it as a  Kubernetes **StatefulSet** workload because it saves data to persistent storage. Hence the helm chart below is configured as **StatefulSet** workload. Due to the StatefulSet nature of Memgraph, it is also necessary to have a **PersistentVolumeClaims** for the storage of the data directory(/var/lib/memgraph). This enables the data to be persisted even if the pod is restarted or deleted. 

It is unnecessary to use the **StatefulSet** workload, if you are not concerned with persisting data or may have a static dataset. Stateful applications are also more complex to setup and maintain due to the nature of handling storage information and security.

The given helm chart is configured to use the latest **MemgraphDB** docker image from [Docker Hub](https://hub.docker.com/r/memgraph/memgraph). 

The `apiVersion` is set to `apps/v1`, which means the below chart supports Helm version 3 or less.


```yaml
# Service
apiVersion: v1
kind: Service
metadata:
  name: memgraph-svc
  labels:
    app.kubernetes.io/name: memgraph
    app.kubernetes.io/managed-by: Helm
spec:
  type: NodePort
  ports:
    - port: 7687
      targetPort: 7687
      protocol: TCP
      name: bolt
  selector:
    app.kubernetes.io/name: memgraph
---
# StatefulSet
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: memgraph
  labels:
    app.kubernetes.io/name: memgraph
    app.kubernetes.io/managed-by: Helm
spec:
  replicas: 1
  serviceName: memgraph-svc
  selector:
    matchLabels:
      app.kubernetes.io/name: memgraph
  podManagementPolicy: OrderedReady
  updateStrategy:
        type: RollingUpdate
  template:
    metadata:
      labels:
        app.kubernetes.io/name: memgraph
    spec:
      securityContext:
      volumes:
        - name: memgraph-lib-storage
          persistentVolumeClaim:
            claimName: memgraph-lib-storage
        - name: memgraph-log-storage
          persistentVolumeClaim:
            claimName: memgraph-log-storage
      containers:
        - name: memgraph
          image: "memgraph/memgraph:latest"
          args: ["--also-log-to-stderr=true"]
          imagePullPolicy: Never
          securityContext:
            runAsUser: 0
          ports:
            - name: memgraph
              containerPort: 7687
          volumeMounts:
            - name: memgraph-lib-storage
              mountPath: /var/lib/memgraph
            - name: memgraph-log-storage
              mountPath: /var/log/memgraph
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: memgraph-lib-storage
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 500Mi
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: memgraph-log-storage
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 500Mi

```

The above helm chart will spin up the Memgraph and expose it via **NodePort** service on port `7687` for communication via Bolt protocol. The helm chart also creates two **PersistentVolumeClaims** for the storage of the data directory and log directory. Since the Memgraph docker image has a root privilege on volumes data and log directories, it is necessary to set the `runAsUser` to `0` in the `securityContext` of the pod. This will override the memgraph user from the Docker image. Aldo is not ideal practice. Currently, the Memgraph must have root privileges on the volumes. 

 The memgraph starts with the `--also-log-to-stderr=true` flag, meaning the logs will also be written to the standard error output. This is useful for getting logs via `kubectl logs` command.

