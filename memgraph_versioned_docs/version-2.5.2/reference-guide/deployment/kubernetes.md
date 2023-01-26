---
id: kubernetes
title: Memgraph Helm Chart
sidebar_label: Kubernetes
---

If you need Memgraph as a part of your **Kubernetes** cluster, you can use the below **Helm Chart** for a simple setup. The Helm Chart is a collection of files that describe a related set of Kubernetes resources. Memgraph is a **stateful application** because it saves data to persistent disk storage for the server, clients, and other applications. The `apiVersion` is set to `apps/v1`, which means the below chart supports Helm version 3 or less.


```yaml
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
      containers:
        - name: memgraph
          image: "memgraph/memgraph:latest"
          imagePullPolicy: Never
          ports:
            - name: memgraph
              containerPort: 7687
          volumeMounts:
            - name: memgraph-lib-storage
              mountPath: /var/lib/memgraph
            - name: memgraph-log-storage
              mountPath: /var/log/memgraph
            - name: memgraph-etc-config
              mountPath: /etc/memgraph/memgraph.conf
              subPath: memgraph.conf
      volumes:
        - name: memgraph-lib-storage
          persistentVolumeClaim:
            claimName: memgraph-lib-pv-claim
        - name: memgraph-log-storage
          persistentVolumeClaim:
            claimName: memgraph-log-pv-claim
        - name: memgraph-etc-config
          configMap:
            name: memgraph-config
---
# Service
apiVersion: v1
kind: Service
metadata:
  name: memgraph-svc
  labels:
    app.kubernetes.io/name: memgraph
    app.kubernetes.io/managed-by: Helm
spec:
  type: ClusterIP
  ports:
    - port: 7687
      targetPort: 7687
      protocol: TCP
      name: bolt
  selector:
    app.kubernetes.io/name: memgraph
```