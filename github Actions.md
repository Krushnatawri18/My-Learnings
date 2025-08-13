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

    runs-on: ubuntu-latest

    steps:

        // checking out into the new code branch, source : https://github.com/actions/checkout

      - uses: actions/checkout@v3  

      - name: Install dependencies

        run: npm install

      - name: Run tests

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



