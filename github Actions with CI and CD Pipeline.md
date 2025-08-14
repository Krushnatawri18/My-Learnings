### Github Actions
- A automation tool to automate developer workflows.
- Automatically build, test and deploy your code.
- Runs code analysis and security checks.
- Trigger on events like push, pr or release.
- CI/CD is one of those workflows.

### What are workflows 

eg.
If there is one repo at Github which is related to some Java library, 
now some bug came now that maintainers raised an issue
and one of the contributors got that issue to fix,
now that contributor fixes that bug and do pull request, now
maintainer will review that pr, merge to master branch,
after merging code, testing will be done, application will build,
artifacts will build (docker image), will be stored in artifactory repos 
and now will be deployed to enviroments (dev, prod).

eg.
Automation of greetings - Greets users who are first time contributors to the repo

### What it does
1. Run unit tests on every PR
2. Compile code
3. Build docker image
4. Run linters(syntax issues, missing semicolons or extra space, bad practices), security scans
5. Deploy to cloud or kubernetes

### Why we need to automate developer workflows 
- To save time of developers
- To handle this organizational stuff properly if many issues are resolved and many pr made

### How Github actions automate these workflows
- When something happens(Github Events) IN or TO your repo
eg. Issue created, PR created, PR merged, contributor joined or any tool/application linked to Github do something
- Automatic actions(written in yml files) are executed in response
eg.

# .github/workflows/ci-cd.yml

```
name: CI/CD Workflow

// events

on: 

  push:

    branches: [main]

  pull_request:

    branches: [main]

// executable code

jobs:

  build-test:

    // can choose any server windows, ubuntu or macOS to run build-test

    runs-on: ubuntu-latest

    steps:

      // checking out into the new code branch, source : https://github.com/actions/checkout

      - uses: actions/checkout@v3  

      // java environment with version 1.8 will be installed
      
      // uses represents an action

      - name: Set up JDK 1.8

        uses: actions/setup-java@v1

        with:
            java-version: 1.8

      - name: Install dependencies

        // will run command-line command

        run: npm install

      - name: Run tests

        // tests will run

        run: npm test
```

### Idea
Listen to event -> Trigger workflow

### CI/CD
- Automation process for building, testing and deploying your code
1. Continuous Integration
- Ensuring your new code doesn't break the app

2. Continuous Delivery/Deployment
- Deploying into dev/prod

- CI/CD can be implemented using Github Actions, Jenkins, Gitlab CI, Circle CI

### CI/CD with Github Actions
- Integrated in Github so can be used easily
- Easy to setup a pipeline
- Tool for developers

### Where does this above code run or built
- If you are on Github then its handled by Github
- For each job in a workflow runs in a fresh virtual env

eg.

Building code will run in one server and publishing in one server but executed by parallely by default,
but publishing depends on build
so we can override that default writing

eg.

```
jobs:

  build-test:

    runs-on: ubuntu-latest

    steps:

    ...


  publish:

    needs: build-test
```

### Note
- To run your steps of job on multiple OS, use matrix

```
jobs:

  build-test:

    runs-on: ${{matrix.os}}$

    strategy:

      matrix:

        os: [ubuntu-latest, windows-latest, macOS-latest]

    ...
```

### Building Docker image and pushing to repo
1. Create one private repo on docker hub
2. Add job into yaml file

eg.

```
jobs:

  build-test:

    runs-on: ubuntu-latest

    steps:

    - name: Set up JDK 1.8

      uses: actions/setup-java@v1

      with:
        java-version: 1.8

    - name: Install dependencies

      run: npm install

    - name: Run tests

      run: npm test

    - name: Build and Push Docker image

      - uses: mr-smithers-excellent/docker-build-push@v6

      with:

        image: repo/image

        tags: v1, latest

        registry: registry-url.io

        dockerfile: Dockerfile.ci

        // this DOCKER_USERNAME and DOCKER_PASSWORD can be added to Github -> Secrets -> New Secret (DOCKER_USERNAME/DOCKER_PASSWORD) so that Github will authenticate from there

        username: ${{ secrets.DOCKER_USERNAME }}

        password: ${{ secrets.DOCKER_PASSWORD }}
```

### Note
- | is used to run multiple command-line commands 
    
```
- run: |
        
  docker login cred

  docker build ...
```