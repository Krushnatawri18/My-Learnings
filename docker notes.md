### Docker
- A virtualization software makes development and development of applications
- Packages application code with all necessary dependencies, configuration, system tools and runtime called as Docker package, which can be shared.
- eg.
App code, Runtime (Python, Node), Dependencies (libraries, modules), Config files (.env), System tools (bash, curl)
- Not include full OS and OS kernel(that interacts with hardware)

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

