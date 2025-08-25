### Docker
- A virtualization software makes development and development of applications
- Packages application code with all necessary dependencies, configuration, system tools and runtime called as Docker package, which can be shared.
- eg.
App code, Runtime (Python, Node), Dependencies (libraries, modules), Config files (.env), System tools (bash, curl)
- Not include full OS and OS kernel(that interacts with hardware)
-- To setup an environment for our existing application in one's machine, we need to run multiple commands and configure
a. Compatibility/Dependency with OS
b. Long setup time
c. Different Dev/Test/Prod environments 

### How development process works with containers
- Start the service as a Docker container with command

```
docker run service_name
```

as that service will be packaged with all dependencies, version and configs and script.
- Command will be same irrespective of any OS and any service.
- Standardize process of running services on local.
- Can also run different versions of same app.

### Deployment before containers
- Developement team will give an artifact and instruction file to Ops team like how all packages and dependencies should be configured over server to run app.
- Ops team will configure and install all that dependencies on server, may lead to errors like version conflict or missing any step written in instruction file.

### Deployment after containers
- Docker artifact includes whole code along with all dependencies and configuration.
- Ops team don't need to do any configurations on the server except Docker runtime.
- They run docker run command to fetch and run artifacts.

### Note
1. If your Docker is running on Linux → containers use Linux kernel

2. If on Windows → Docker uses WSL2, a Linux kernel in a virtual machine

3. In CI/CD (e.g. GitLab), Docker runs on cloud servers with a Linux kernel

4. If your docker is running locally, then uses your OS as the server.

5. For Gitlab CI/CD, Github CI/CD, it runs pipelines on its own Linux-bases cloud servers.

6. Mostly Docker and Gitlab CI run inside Linux-based containers, so your script must use Linux commands.

7. If your using Docker on Windows, then it runs WSL2 (Windows Subsystem for Linux v2) behind the scenes.

### Note
- Mostly different environments like dev, prod are stored as separate containers as they have difference in code, dependencies, etc.

### How an OS is made up 
- Three layers
1. OS Application Layer
- Runs softwares like chrome, word

2. OS Kernel
- Interacts between Software and Hardware
- eg. Ubuntu, Windows

3. Hardware
- CPU, memory

### Virtualization
- To create a virtual version of something like 
eg.

CPU/RAM/Disk into virtual hardware
OS into VM
Hard disk into virtual storage like cloud

### Which part of the OS do Docker and VM virtualize ?
1. Docker
- Originally built for Linux but also used for Windows, MacOs with Docker Desktop
- Virtualizes the OS application layer, then dependencies like JRE
- Uses host's OS
- Small docker images
- Containers can start in seconds with that images
- Can't run one OS-based docker images on other OS

### Note
- To run one OS-based docker images on other OS
1. Docker Desktop sets up a WSL(Windows SubSystem for Linux) 2 Linux VM (like Ubuntu or Alpine).
2. Inside that VM, it installs the Docker Engine.
3. When you run a Linux-based Docker image (e.g., ubuntu, node, python), it runs inside that Linux VM.
4. You interact with it from Windows — via PowerShell, CMD, or Docker Desktop GUI.

Windows OS -> Docker Desktop -> WSL2 Linux VM -> Docker Engine -> Linux Containers (docker image)


eg.

```
+---------------------------------------------------------+
|           Physical Machine (Host Hardware)              |
|           - CPU, RAM, Disk, Network                     |
+---------------------------------------------------------+
|                   Host OS                               |
+---------------------------------------------------------+
|                Docker Runtime                           |
|     +-------------------------------+                   |
|     | Docker Container: App A       |                   |
|     | Docker Container: App B       |                   |
|     | Docker Container: Database    |                   |
|     +-------------------------------+                   |
+---------------------------------------------------------
App A - frontend-service
App B - backend-service
```

2. VM
- Virtualizes both OS application layer and OS kernel as it includes both
- Uses Guest OS as to have some interface for connecting hardware, some file system 
- Larger VM images
- VM take minutes to start with VM image
- Can run any all OS VM on any Host OS

eg.

```
+---------------------------------------------------------+
|      Physical Machine (Host Hardware)                  |
|  - CPU, RAM, Disk, Network                              |
+---------------------------------------------------------+
|  Hypervisor (e.g., VirtualBox, VMware, or Cloud Infra) |
+---------------------------------------------------------+
|  Virtual Machine (e.g., Ubuntu VM)                      |
|  - Guest OS: Linux or Windows                           |
|  - Installed Docker Engine                              |
|     +-------------------------------+                   |
|     | Docker Container: App A       |                   |
|     | Docker Container: App B       |                   |
|     | Docker Container: Database    |                   |
|     +-------------------------------+                   |
+---------------------------------------------------------
```

### Note
- VM images can be generated which includes OS (Windows, Linux) + code + dependencies, which can be used to virtualize to test that code/software on in different environment like different versions, configurations (RAM, Disk types, No of cores).
- eg. Checking particular code which uses like Python with another version like in our previous vm, if we used python 3.8.1 and now in new vm we are using python 3.12.2

### Docker Desktop
- Docker Desktop which helps to run any OS on any OS kernel based docker.
- So it just uses Hypervisor layer with lightweight Linux distribution which helps to provide Linux kernel to Linux containers to run on Windows or MacOS. 

# Installing Docker Desktop
1. Docker Engine
- A server who manages images & containers.

2. Docker CLI - Client
- To communicate with Docker Engine.
- Execute docker commands to start/stop containers

### Docker images vs Docker containers
1. Docker images
- Package that contains code, runtime environment (python, java), libraries, configuration files and OS dependencies.

2. Docker containers
- Running instance of image where image command runs.

### Note
- With single docker image, you can run multiple containers of that application.

### How do we get images to run containers
- Docker Registery stores the images which finds and shares the images
- Docker Hub is one of the biggest docker registery

### Note
- Docker official images are the secure base images created and maintained by Docker community and verified publishers,collaborated with security experts and software maintainers in order to manage the content of that repository.

### Image Versioning
- Different images of different version of that particular technology or tool is versioned.
- Different versions of these images are called as tags.
- eg. mongo server 7.0, mongo server 7.1

### Commands
1. docker images
- List all the images

2. docker ps
- List all the running containers

3. docker pull servicer_name:tag(version)
- Pulls that particular versioned image

4. docker run service_name:tag(version)
- To run particular service versioned image or runs and downloads that particular service image if you didn't pulled it yet

5. docker run -d service_name:tag(version) d = detach mode
- To run docker container in detach mode so not to block whole terminal

6. docker stop container_id
- To stop particular docker container

7. docker run -d -p Host_port:Container_port service_name:tag(version) 
- To bind host port with container port(running on its network and port) so we can access that particular service on our localhost or outside world (port binding)
eg.

```
docker run -d -p 9000:80 nginx:1.23
```

8. docker logs container_id/container_name
- To see logs for that particular container

9. docker start existing_stopped_container_id
- To run existing stopped container

10. docker run --name name_of_container_you_want_to_set -d service_name:tag(version)
- To give name to the container

### Note
1.  Docker generates random name for container if you don't specify it.

2. Its standard to use same port on your host as container's port eg. 27017 :27017 for mongodb.

3. The new container created every single time when we run this command

```
docker run ...
```

4. If you ran this above command multiple times then multiple containers will be created but if try to see it with 

```
docker ps
```

it will only show running instance of container, to see all existing containers of your machine, run

```
docker ps -a
```

a shows all running and stopped containers.

### Docker Registries
1. Private
- Can't be accessed without authentication
- eg. Amazon ECR, Google container registry, Nexus

2. Public
- Can be used or downloaded by anyone

### Docker Registry vs Repository
1. Docker Registry
- Its warehouse for storing images
- Collection of repositories
eg. Public - Docker Hub, Private - Amazon ECR

2. Repository
- Its like folder inside registry which has all the images of all the versions of that particular service
eg.
    Nginx - Repository
     +-------------------------------+                   
     | nginx: 1.21                   |                   
     | nginx: 1.22                   |                   
     | nginx: latest                 |                   
     +-------------------------------+  

### How custom images are created 
1. dockerfile
- Text document that has all the commands that tells definition of how to build an image from our app

### Note
1. First, need to write base image like on what that custom image is based on like its sets the environment your app needs
- eg. 

```
FROM node:19-alpine  // to start building image from the specified image

COPY package.json /app/  // copying particular files/code from src - our local machine path and dest - path to paste that copied file into container

COPY src /app/ // copying src folder inside app of container location

WORKDIR /app  // to change the working directory to run below commands, its like cd /app

RUN npm install // will run this command in /app directory 

CMD ["node", "index.js"]  // container will run this node index.js command whenever someone runs docker run my-image command

// equivalent to docker run my-image
node index.js
```
2. Their will be only one CMD command which will be written at last of dockerfile which runs when container starts.