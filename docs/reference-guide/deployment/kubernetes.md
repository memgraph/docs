---
id: kubernetes
title: Kubernetes
sidebar_label: Kubernetes
---

To include **standalone Memgraph** as a part of your Kubernetes cluster, you can use the Helm chart provided in the [**Memgraph Helm charts repository**](https://github.com/memgraph/helm-charts). Due to numerous possible use cases and deployment setups via Kubernetes, the provided Helm chart is just a starting point you can modify according to your needs. 


Memgraph Helm charts repository currently contains a chart for [**standalone Memgraph deployment**](#helm-chart-for-standalone-memgraph) as a Kubernetes `StatefulSet` workload, which is designed for services that require permanent storage, such as databases. 

:::note
The currently available Helm chart uses the latest **Memgraph** Docker image from the [Docker Hub](https://hub.docker.com/r/memgraph/memgraph). For other Memgraph Docker images (Memgraph MAGE or Memgraph Platform), modify the chart accordingly. We are eager to see new pull requests on our [helm charts repository](https://github.com/memgraph/helm-charts).
:::

## Helm chart for standalone Memgraph

<!-- TODO: Add image - architecture -->

Since [Helm chart for standalone Memgraph](https://github.com/memgraph/helm-charts/tree/main/charts/memgraph) is configured to deploy Memgraph as a Kubernetes `StatefulSet` workload, it is also necessary to define a `PersistentVolumeClaims` to store [the data directory](/reference-guide/backup.md) (`/var/lib/memgraph`). This enables the data to be persisted even if the pod is restarted or deleted. 

If you don't require data persistency or your dataset is static, there is no need to use the `StatefulSet` workload. Stateful applications are more complex to set up and maintain as they require more attention when handling storage information and security.

To include standalone Memgraph as a part of your Kubernetes cluster, you need to [**add the repository**](#add-the-repository) and [**install Memgraph**](#install-memgraph).

### Add the repository

Add the Memgraph Helm chart repository to your local Helm setup by running the following command:

```
helm repo add memgraph https://memgraph.github.io/helm-charts
```

Make sure to update the repository to fetch the latest Helm charts available:

```
helm repo update
```

### Install Memgraph

To install Memgraph Helm Chart, run the following command:
```
helm install <release-name> memgraph/memgraph
```
Replace `<release-name>` with the name of the release you chose.

### Access Memgraph
Once Memgraph is installed, you can access it using the provided services and endpoints. Refer to the [Memgraph documentation](/docs/connect-to-memgraph/overview.mdx) for details on how to connect to and interact with Memgraph.

### Configuration options
The following table lists the configurable parameters of the Memgraph chart and their default values.

parameter | description | default
--- | --- | ---
`image` | Memgraph Docker image repository | `memgraph`
`persistentVolumeClaim.storagePVC` | Enable persistent volume claim for storage | `true`
`persistanceVolumeClaim.storagePVCSize` | Size of the persistent volume claim for storage | `1Gi`
`persistentVolumeClaim.logPVC` | Enable persistent volume claim for logs | `true`
`persistanceVolumeClaim.logPVCSize` | Size of the persistent volume claim for logs | `256Mi`
`service.type` | Kubernetes service type | `NodePort`
`service.port` | Kubernetes service port | `7687`
`service.targetPort` | Kubernetes service target port | `7687`
`memgraphConfig` | Memgraph configuration settings | `["--also-log-to-stderr=true"]`

To change the default chart values, provide your own `values.yaml` file during the installation:
```
helm install <resource-name> memgraph/memgraph -f values.yaml
```
Default chart values can also be changed by setting the values of appropriate parameters:
```
helm install <resource-name> memgraph/memgraph --set <flag1>=<value1>,<flag2>=<value2>,...
```

:::info
Memgraph will start with the `--also-log-to-stderr=true` flag, meaning the logs will also be written to the standard error output and you can access logs using the `kubectl logs` command. To modify other Memgraph database settings, you should update the `memgraphConfig` parameter. It should be a list of strings defining the values of Memgraph configuration settings. For example, this is how you can define `memgraphConfig` parameter in your `values.yaml`:
```
memgraphConfig: 
  - "--also-log-to-stderr=true"
  - "--log-level=TRACE"
```
For all available database settings, refer to the [Configuration settings reference guide](https://memgraph.com/docs/memgraph/reference-guide/configuration).
:::

:::note
Since Memgraph Docker image has root privileges on the data located on volumes and log directories, it is necessary that `runAsUser` is set to `0` in the `securityContext` section of the pod to override the `memgraph` user from the Docker image. Currently, Memgraph must have root privileges on the volumes. 
:::
