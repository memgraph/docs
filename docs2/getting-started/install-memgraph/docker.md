# Install Memgraph with Docker

[Docker](https://www.docker.com) is a service that uses OS-level virtualization
to deliver software in packages that are called
[containers](https://www.docker.com/resources/what-container).

Memgraph uses Docker because it is:

- Flexible
- Lightweight
- Portable - you can build locally or deploy to the cloud
- Runs on all platforms - Windows, Linux and macOS
- Deploys in Kubernetes

We recommend you install **Memgraph Platform** Docker image which contains:
- **MemgraphDB** - the database that holds your data
- **Memgraph Lab** - visual user interface for running queries and visualizing
  graph data
- **mgconsole** - command-line interface for running queries
- **MAGE** - graph algorithms and modules library

1. Install [**Docker Desktop**](https://docs.docker.com/get-docker/).
2. Open a terminal and use the following command:

    ```console
    docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform
    ```

    If successful, you should see a message similar to the following:

    ```nocopy
    mgconsole X.X
    Connected to 'memgraph://127.0.0.1:7687'
    Type :help for shell usage
    Quit the shell by typing Ctrl-D(eof) or :quit
    memgraph>
    ```
    Command-line tool **mgconsole** is open in the terminal, and the visual user
    interface **Memgraph Lab** is available at [`http://localhost:3000`](http://localhost:3000).

3. User either CLI **mgconsole**, visual interface **Memgraph Lab** or various **clients** to connect
   and query the database.


The configuration file is located inside the Docker container at
`/var/lib/docker/volumes/mg_etc/_data/memgraph.conf`, adn the logs are located
at `/var/lib/docker/volumes/`. 

When using Docker, you can also specify the configuration options in the `docker
run` command:

```console
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--log-level=TRACE" memgraph/memgraph-platform
```

:::caution

When working with Memgraph Platform, you should pass configuration flags inside
of environment variables.

For example, you can start the MemgraphDB image with `docker run memgraph/memgraph
--bolt-port=7687 --log-level=TRACE`, but you should start Memgraph Platform with
`docker run -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687 --log-level=TRACE"
memgraph/memgraph-platform`.

:::

To learn about all the configuration options, check out the [Reference
guide](/reference-guide/configuration.md).

## Other available Docker images

- memgraph/memgraph includes MemgraphDB and mgconsole
- memgraph/memgraph-mage includes MemgraphDB, mgconsole and MAGE (check the docs)
    - memgraph/memgraph-mage + cuGraph - includes MemgraphDB, mgconsole, MAGE and NVIDIA cuGraph GPU-powered graph algorithms
- memgraph/memgraph-platform includes MemgraphDB, mgconsole, MAGE and Memgraph Lab

Memgraph Platform also includes a version of image without MAGE - look for the tag using only memgraph and lab keywords

## Install Memgraph using other Docker images

**1.** Download the latest **Docker image** from the [Download
Hub](https://memgraph.com/download/).

**2.** Import the image using the following command, for example:

```console
docker load -i /path-to/memgraph-<version>-docker.tar.gz
```

**3.** Start Memgraph using the following command:

```console
docker run -p 7687:7687 -p 7444:7444 -v mg_lib:/var/lib/memgraph memgraph/memgraph
```

## Troubleshooting

### Issues with loading Memgraph
```console
docker load -i memgraph.tar.gz
```

#### Error during connect:<br/> `This error may indicate that the docker daemon is not running.`
Run the Docker Desktop application and wait for it to load fully.

#### Error response from daemon:<br/> `open \\.\pipe\docker_engine_linux: The system cannot find the file specified.`
Reload the Docker Desktop application and wait for it to load fully.

#### Unsupported os linux

You need to download the [Windows Subsystem for
Linux](https://docs.microsoft.com/en-gb/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package),
and enable experimental features in Docker Desktop, under *Settings* -> *Docker
Engine*, change *experimental* to *true*.

### Issues when connecting to Memgraph

```console
docker run -it memgraph/memgraph-platform
```

While this command will start a Memgraph instance, not publishing the port will
cause problems when trying to connect to the database via **Memgraph Lab** or
**mgconsole**. To avoid this, you should publish the
container's port to the host using the `-p` flag and by specifying the port:

```console
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform
```

### Issues with connecting **mgconsole** to the database

```console
docker run -it --entrypoint=mgconsole memgraph/memgraph-platform --host HOST
```

Although unlikely, sometimes there are issues with connecting **mgconsole** to
the Docker Container’s IP address because it is running on a custom IP rather
than `localhost`. This problem is most often accompanied with the following
error:

```console
Connection failure: Couldn't connect to 127.0.0.1:7687!
```

To fix this issue, just replace `HOST` from the first command with
`host.docker.internal`. To find out more about networking in Docker, take a look
at [Networking features in Docker Desktop for
Windows](https://docs.docker.com/docker-for-windows/networking/) guide or
[Mac](https://docs.docker.com/docker-for-mac/networking/) guide .

### Issues with the IP address

Although unlikely, some users might experience minor difficulties after the
Docker installation. Instead of running on `localhost`, a Docker container for
Memgraph may be running on a custom IP address. Fortunately, that IP address can
be found as follows:

**1.** Determine the ID of the Memgraph Container by issuing the
command `docker ps`. The user should get an output similar to the following:

```console
CONTAINER ID    IMAGE       COMMAND                  CREATED
9397623cd87e    memgraph    "/usr/lib/memgraph/m…"   2 seconds ago
```

At this point, it is important to remember the container ID of the Memgraph
Image. In our case, that is `9397623cd87e`.

**2.** Use the this ID to retrieve the IP address of the Container:

```console
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e
```

The command above will yield the IP address that should be used when connecting
to Memgraph via **Memgraph Lab** or **mgconsole** as described in
the [querying](/connect-to-memgraph/overview.mdx) section. Just replace
`HOST` from the following command with the appropriate IP address:

```console
docker run -it --entrypoint=mgconsole memgraph/memgraph-platform --host HOST
```

## Work with Docker

If you are new to Docker, this guide will help you get a grasp of Docker and
make it easier to accomplish tasks within Memgraph. After installing Docker, all
commands are run from the command-line tool of your preference.

### Download the Memgraph Docker image

Images are downloaded using the `docker pull` command followed by the name of
the Docker image. We encourage you to use Memgraph Platform as it includes
everything you might need while making the best of Memgraph.

To download the latest Memgraph Platform image, run:

```
docker pull memgraph/memgraph-platform
```

### Architecture of Docker container running Memgraph

The picture below shows the architecture of the Memgraph Docker ecosystem.

<img src={require('../data/how-to-guides/docker-architecture.png').default} className={"imgBorder"}/>

### Run a Memgraph Docker image

All images are started using the `docker run` command followed by various flags,
environment variables and configuration options.

The most common flags used while running Memgraph images are:

- enable interactive mode: `-it`
- publish ports: `-p 3000:3000`
- specify volumes for data persistence `-v mg_lib:/var/lib/memgraph`
- set up configuration using environment variables in the case of the
  `memgraph-platform` image, or configuration flags using the `memgraph` or
  `memgraph-mage` image

A `docker run` command can look like this:

```
docker run -it -p 7687:7687 [-p host_port:container_port] [-v volume_name:volume_path] [configuration] memgraph/image_name
```

#### Publish ports

Ports are published in order to allow services outside the container to be able
to connect to the container. When publishing ports, you need to define two ports
separated by a colon. The left side port stands for the **host port** and the
right side port is the **container port**.

The most common ports published while running Memgraph are:

- `-p 7687:7687` - connection to the database instance (the Bolt protocol uses
  this port by default)
- `-p 3000:3000` - connection to the Memgraph Lab application when running
  Memgraph Platform
- `-p 7444:7444` - connection to fetch log files from Memgraph Lab (only in
  version 2.0 and newer)

For example, if you are running two instances using the `memgraph-platform`
image and you want to connect to both instances using the Memgraph Lab
in-browser application. You would run the first instance with:

```
docker run -it -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform
```

Because port `3000` is now taken, you need to change the left side
port (host ports):

```
docker run -it -p 7444:7444 -p 3001:3000 memgraph/memgraph-platform
```

To connect to the first instance, you should open Memgraph Lab in your browser
at `localhost:3000`, but the second instance is reachable at `localhost:3001`.

#### Specify volumes

Specifying a volume syncs the specified directory inside the Docker container as
a local directory and serves for durability. The `-v` flag is followed by the
name of the local directory separated from the path of the volume in the
container by a semicolon:

```
-v volume_name:volume_path
```

Named volumes handle data permissions so there shouldn't be any issue with data
permissions. 

Useful volumes you can specify while running Memgraph are:

- `-v mg_lib:/var/lib/memgraph` - directory containing data, enables data
  persistency
- `-v mg_log:/var/log/memgraph` - directory containing log files
- `-v mg_etc:/etc/memgraph` - directory containing the configuration file

The exact location of the local directories depends on your specific setup.

The configuration file can usually be found at
`/var/lib/docker/volumes/mg_etc/_data/memgraph.conf` but you can also copy the
file from the Docker container, modify it and copy it back into the container.

The logs will be saved to the `mg_log` volume, and the directories can usually be
found in `/var/lib/docker/volumes/`, but you can also view them in the Memgraph
Lab 2.0 (or newer) by publishing the port `7444`.

#### Specify bind mounts

Bind mounts are local directories or files that can be modified by other
processes other than Docker. Any changes made to these directories or files
locally will be reflected inside the Docker container and vice-versa. Also, a
bind mount will overwrite the content of the Docker container.

For example, if I have a `Data` directory on my `C:` disk, and I want to access
it from inside the container at `/usr/lib/memgraph/data`, I would run Docker
with the following `-v` flag.

```
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000  -v "C:/data":/usr/lib/memgraph/data memgraph/memgraph-platform
```

You can use bind mounts to transfer durability files such as snapshot or wal
files inside the container to restore data, or CSV files you will use to import
data with `CSV LOAD` clause. 

Bind mounts do not handle data permissions which could cause issues with permissions. 

#### Set up the configuration

If you want a certain configuration setting to be applied during this run only,
you need to pass the configuration option within the `docker run` command
instead of changing the configuration file.

If you are working with the `memgraph-platform` image, you should pass
configuration options with environment variables.

For example, if you want to limit memory usage for the whole instance to 50 MiB
and set the log level to `TRACE`, pass the configuration like this:

```
docker run -it -p 7687:7687 -p 3000:3000 -p 7444:7444 -e MEMGRAPH="--memory-limit=50 --log-level=TRACE" memgraph/memgraph-platform
```

When you are working with `memgraph` or `memgraph-mage` images, you should pass
configuration options as arguments.

For example, if you want to limit memory usage for the whole instance to 50 MiB
and set the log level to `TRACE`, pass the configuration argument like this:

```
docker run -it -p 7687:7687 memgraph/memgraph --memory-limit=50 --log-level=TRACE
```

### Stop container

Database instances are stopped by stopping the Docker container with the command
`docker stop`. To stop a container you need [to know the container's
ID](#how-to-retrieve-a-docker-container-id).

You can list all the containers you want to stop in one `docker stop` command:

```
docker stop CONTAINER1_ID CONTAINER2_ID
```

### Start container

If you want to start a stopped container, list them using the following command: 

```
docker ps -a
```

Then start the container with: 
```
docker start <CONTAINER_ID> 
```

### Retrieve a Docker container ID

Run the following command:

```
docker ps
```

You should get an output similar to this:

```console
CONTAINER ID   IMAGE                        COMMAND                  CREATED        STATUS        PORTS                                                                    NAMES
45fa0f86f826   memgraph/memgraph-platform   "/bin/sh -c '/usr/bi…"   21 hours ago   Up 21 hours   0.0.0.0:3000->3000/tcp, 0.0.0.0:7444->7444/tcp, 0.0.0.0:7687->7687/tcp   admiring_almeida
```

You can shorten this ID to 4 letters if the ID remains unique, for example,
`45fa`.

### Retrieve a Docker container IP address

To retrieve the Docker container IP address, first, you need [to retrieve its
ID](#how-to-retrieve-a-docker-container-id).

Then run the following command if the container ID is `9397623cd87e`.

```console
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e
```

### Browse files inside a Docker container

To browse files inside a Docker container, first, you need [to retrieve its
ID](#how-to-retrieve-a-docker-container-id).

Then run the following command if the container ID is `9397623cd87e`:

```
docker exec -it 9397623cd87e bash
```

To navigate through the container, use the following commands:

- `ls` - list all the directories and files
- `cd <directory>` - enter a directory
- `cd ..` - leave the directory
- `cat <file>` - list the content of a file

You don't have to write file and directory names in full, once you write enough
letters to have a unique string, press the `<TAB>` key.

## Copy files from and to a Docker container

To copy files from and to the Docker container, first, you need [to retrieve its
ID](#how-to-retrieve-a-docker-container-id).

1. Place yourself in the local directory where you want to copy the file.

2. Copy the file from the container to your current directory with the command:

  ```
  docker cp <CONTAINER ID>:<path_in_container> <local_file_name>
  ```

  Be sure to replace the `<CONTAINER ID>` parameter.

  The example below will copy the configuration file to the user's Desktop:

  ```
  C:\Users\Vlasta\Desktop>docker cp bb3de2634afe:/etc/memgraph/memgraph.conf memgraph.conf
  ```

3. Copy the file from your current directory to the container with the command:

  ```
  docker cp  <local_file_name> <CONTAINER ID>:<path_in_container>
  ```

  Be sure to replace the `<CONTAINER ID>` parameter.

  The example below will replace the configuration file with the one from the
  user's Desktop:

  ```
  C:\Users\Vlasta\Desktop>docker cp memgraph.conf bb3de2634afe:/etc/memgraph/memgraph.conf
  ```
