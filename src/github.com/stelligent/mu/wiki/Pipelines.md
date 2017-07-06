A pipeline can be created for each service that consists of the following steps:

* **Source** - Retrieve source from GitHub for a specific branch.  Triggered on each commit.
* **Build Artifact** - Compile the source code via CodeBuild and a `buildspec.yml`.
* **Build Image** - Build the Docker image and push to ECR repository.
* **Acceptance** - Deploy to acceptance environment and run automated tests.
* **Production** - Wait for manual approval, then deploy to production environment.

<a href="https://github.com/stelligent/mu/wiki/img/ms-pipeline-1.png"><img src="https://github.com/stelligent/mu/wiki/img/ms-pipeline-1.png" width="110"></a>

## Test Automation
Define your tests in the form of CodeBuild projects.  Simply create a file named `buildspec-test.yml` and a file named `buildspec-prod.yml` in your repo with the actions you'd like to take for validating the application.  Additionally, you can control the CodeBuild image via the `image` attribute under the `service.pipeline.acceptance` in the mu.yml file.  An example is available in the [mu GitHub repo](https://github.com/stelligent/mu/blob/develop/examples/pipeline-newman).


## Configuration
```
---
service:

  name: my-service
  # ... service config goes here ...

  # Define the behavior of the pipeline
  pipeline:
      source:
        provider: GitHub                        # GitHub or CodeCommit (default: GitHub)
        repo: stelligent/microservice-exemplar  # The GitHub repo slug or CodeCommit repo name to build (default: none)
        branch: mu                              # The branch to build from (default: master)
      build:
        image: aws/codebuild/java:openjdk-8     # The image to use for CodeBuild job (default: aws/codebuild/ubuntu-base:latest)
        type: linuxContainer
        computeType: BUILD_GENERAL1_SMALL       # The type of compute instance for builds (default: BUILD_GENERAL1_SMALL)
      acceptance:
        environment: dev                        # The environment name to deploy to for testing (default: dev)
        image: aws/codebuild/java:openjdk-8     # The image to use for CodeBuild test job (default: aws/codebuild/ubuntu-base:latest)
        type: linuxContainer
        computeType: BUILD_GENERAL1_SMALL       # The type of compute instance for testing builds (default: BUILD_GENERAL1_SMALL)
      production:
        environment: production                 # The environment name to deploy to for production (default: production)
```

## Commands
```
# List the pipelines
> mu pipeline list

# Upsert the pipeline
> mu pipeline up [-t <repo_token>]

# View the logs from the CodeBuild project in your pipeline
> mu pipeline logs [--follow] [-s <service_name>] [filter]

# Terminate the pipeline
> mu pipeline terminate [<service_name>]
```


