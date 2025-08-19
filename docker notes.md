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

