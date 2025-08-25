### Docker

# 1. Docker overview
- Packages application with all the necessary dependencies, configs, system tools and runtime which can be shared.

- To setup an environment for our existing application in one's machine, we need to run multiple commands and configure
a. Compatibility/Dependency with OS
b. Long setup time
c. Different Dev/Test/Prod environments 

- With Docker, we can run each component in a separate container with its own libraries and dependencies all on the same VM or OS but within separate environments.

- Just build the Docker configuration once and now we can use it with running simple docker command. 

# 2. Containers
- Isolated environments which can have their own processes or services, n/w interfaces except they all share same OS kernel.

- Includes configs, application(postgres), start script called as artifact or package.

- Just need to run one docker command regardless of any OS.
Eg. docker run postgres

- Can run different versions of same application w/o any conflicts.
Eg. redis 4.1, redis 4.3

Note: All OS will work on Docker on underlying OS kernel if all that OS are based on the same Kernel.
Eg. Can run Fedora, Debian OS(just have different s/w but share same OS kernel) on each docker container if their OS Kernel is Linux.

# 3. Docker vs VM
- Docker virtualize the application(s/w), libs, deps based on its OS kernel.
- Docker images are of some MBs, make it faster.
- Can't run all OS on Docker directly.
- For Docker,
    Containers (application, libs, deps)
    Docker
    OS (shared b/w containers)
    Hardware Infrastructure

- VM virtualizes both the application(s/w) and OS kernel. 
- VM images are of some GBs, make it slower. 
- Can run all OS on VM. 
- For VM,
    Virtual Machines (application, libs, deps, OS(windows, linux))
    HyperVisor (ESX)
    Hardware Infrastructure

Note: Actually Docker was made up as Linux-based.

# 4. Docker Desktop
- Docker Desktop which helps to run any OS on any OS kernel based docker.

- So it just uses Hypervisor layer with lightweight Linux distribution which helps to provide Linux kernel to Linux containers to run on Windows or MacOS. 

# 5. Installing Docker Desktop
## a. Docker Engine
- A server who manages images & containers.

## b. Docker CLI - Client
- To communicate with Docker Engine.
- Execute docker commands to start/stop containers.

# 6. Docker Images
- Packaging application into an artifact which is executable. 
- Includes app source code with environment configuration.
- Its immutable template and docker container is running instance of an image like it start the application.
- Can run multiple containers with that 1 image for load balancing you application traffic.

