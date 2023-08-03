# Install Memgraph

Install Memgraph Platform and get the complete graph application platform that includes:

- MemgraphDB - the database that holds your data
- Memgraph Lab - visual user interface for running queries and visualizing graph data
- mgconsole - command-line interface for running queries
- MAGE - graph algorithms and modules library

Open a terminal and use the following command:

```console
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform
```

For more details on the Docker installation or other installation options check
the installation guide.

You don't want to bother with installation? Done! Memgraph Cloud at your service
- register and run an instance in few easy steps.

## System requirements

Below are minimum and recommended system requirements for installing Memgraph.

|         | Minimum  | Recommended                    |
| ------- | -------- | ------------------------------ |
| CPU     | Server or desktop processor: </ br> Intel Xeon </ br> AMD Opteron/Epyc </ br> ARM machines or Apple M1 </ br> Amazon Graviton | Server processor: </ br> Intel Xeon </ br> AMD Opteron/Epyc </ br> ARM machines or Apple M1 </ br> Amazon Graviton |
| RAM     | 1 GB     | ≥ 16 GB ECC                    |
| Disk    | 1 GB     | equally as RAM                 |
| Cores   | 1 vCPU   | ≥ 8 vCPUs (≥ 4 physical cores) |
| Network | 100 Mbps | ≥ 1 Gbps                       |

The disk is used for storing database snapshots and write-ahead logs.

