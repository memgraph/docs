---
id: kubernetes
title: Memgraph Helm Chart
sidebar_label: Kubernetes
---

To include Memgraph as a part of your **Kubernetes** cluster, use the **Helm chart** below for a simple setup. Due to numerous possible use cases and deployment setups via Kubernetes, this Helm chart is just a starting point you can modify according to your needs. 

The provided Helm chart is configured to deploy Memgraph as a Kubernetes **StatefulSet** workload, which saves data to persistent storage, a useful feature when deploying a database. Due to the StatefulSet nature of Memgraph, it is also necessary to define a **PersistentVolumeClaims** to store [the data directory](/reference-guide/backup.md) (/var/lib/memgraph). This enables the data to be persisted even if the pod is restarted or deleted. 

If you don't require data persistency or your dataset is static, there is no need to use the StatefulSet workload. Stateful applications are more complex to set up and maintain as they require more attention when handling storage information and security.

The Helm chart is configured to use the latest **MemgraphDB** docker image from [Docker Hub](https://hub.docker.com/r/memgraph/memgraph), so if you require a different Memgraph Docker image, be sure the modify the chart. 

The `apiVersion` is set to `apps/v1`, which means the chart supports Helm version 3 or less.


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
          imagePullPolicy: Always
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

The above Helm chart spins up Memgraph and exposes it via **NodePort** service on port `7687` for communication via the Bolt protocol.

 The chart also creates two **PersistentVolumeClaims** for storing the data and log directories. Since Memgraph Docker image has root privileges on the data located on volumes and log directories, it is necessary to set the `runAsUser` to `0` in the `securityContext` section of the pod to override the `memgraph` user from the Docker image. Currently, Memgraph must have root privileges on the volumes. 

Memgraph starts with the `--also-log-to-stderr=true` flag, meaning the logs will also be written to the standard error output and you can access logs using the `kubectl logs` command.

