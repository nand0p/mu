<img src="https://github.com/stelligent/mu/wiki/img/mu.png" width="50">
<br/>

Welcome to the beta program for **mu**!  The goal of this program is to receive feedback from potential users of this tool before a GA release.  We need your _brutally honest_ thoughts, suggestions, and opinions...don't hold back!

## What is "mu"?
First, let's make sure you understand the problem that **mu** is trying to solve. Amazon ECS (EC2 Container Service) provides an excellent platform for deploying microservices as containers.  The challenge however is that there is a significant learning curve for microservice developers to deploy their applications in an efficient manner.  Specifically, they must learn to use CloudFormation to orchestrate the management of ECS, ECR, EC2, ELB, VPC, and IAM resources.  Additionally, tools like CodeBuild and CodePipeline must be mastered to create a continuous delivery pipeline for their microservices.

To address these challenges, we created a tool to simplify the declaration and administration of the AWS resources necessary to support microservices.  Similar to how the [Serverless Framework](https://serverless.com/) improved the developer experience of Lambda and API Gateway, this tool will make it easier for developers to use ECS as a microservices platform.

Watch the 90 second demo below to see mu in action!

![Demo](https://github.com/stelligent/mu/wiki/quickstart/mu-quickstart.gif)


## What do you want from me?
We want you to evaluate **mu** and let us know your thoughts.  Here are some specific areas we could use your help:

* **Use Case** - Does **mu** fit into any applications that you own/support?  Would **mu** help you with the continuous delivery of your application?  Why or why not?
* **Architecture** - What concerns do you see with the architectural choices that **mu** has made?  What is missing?
* **Features** - What features would you need **mu** to add for it to be valuable to you?
* **User Experience** - What is your feedback on the way **mu** is configured?  How was the CLI experience?  What suggestions do you have to improve the user experience?

## How do I get started?
Install latest version to /usr/local/bin (or for additional options, see [wiki](https://github.com/stelligent/mu/wiki/Installation)):

```bash
curl -s https://getmu.io/install.sh | sh
```

Assuming your project already has a Dockerfile, you can initialize your mu.yml file with: `mu init`.  More details available in the [quickstart](https://github.com/stelligent/mu/wiki/Quickstart).

Check out the the following snippets of `mu.yml` configuration that you can use in your own project:

* **[Basic](https://github.com/stelligent/mu/tree/develop/examples/basic)** - Simple website with continuous delivery pipeline deploying to dev and prod environments
* **[Service Discovery](https://github.com/stelligent/mu/tree/develop/examples/consul)** - Service discovery via [Consul](https://www.consul.io/) and [Registrator](http://gliderlabs.com/registrator/latest/)
* **[Test Automation](https://github.com/stelligent/mu/tree/develop/examples/pipeline-newman)** - Example of automating end-to-end testing via [Newman](https://github.com/postmanlabs/newman)
* **[Env Variables](https://github.com/stelligent/mu/tree/develop/examples/service-env-vars)** - Defining environment variables for the service
* **[HTTPS](https://github.com/stelligent/mu/tree/develop/examples/elb-https)** - Enable HTTPS on the ALB for an environment
* **[DNS](https://github.com/stelligent/mu/tree/develop/examples/elb-dns)** - Associate Route53 resource record with ALB for an environment
* **[VPC Target](https://github.com/stelligent/mu/tree/develop/examples/vpc-target)** - Targeting an existing VPC for an environment
* **[Custom CloudFormation](https://github.com/stelligent/mu/tree/develop/examples/custom-cloudformation)** - Demonstration of adding custom AWS resources via CloudFormation

Refer to the following for complete details on the configuration of `mu.yml` and the cli usage:

* **[Environments](https://github.com/stelligent/mu/wiki/Environments)** - managing VPCs, ECS clusters, container instances and ALBs
* **[Services](https://github.com/stelligent/mu/wiki/Services)** - managing ECS service configuration
* **[Pipelines](https://github.com/stelligent/mu/wiki/Pipelines)** - managing continuous delivery pipelines

## How do I share my feedback?
We have a few options for getting us your feedback:

* Join our gitter room and share your feedback publicly: [stelligent/mu](https://gitter.im/stelligent/mu).
* Email feedback privately: [Casey Lee](mailto:casey.lee+mu@stelligent.com)
* If you've identified a bug in **mu** or have a feature request, please [submit an issue](https://github.com/stelligent/mu/blob/develop/CONTRIBUTING.md#issue) to our GitHub repo: [stelligent/mu](https://github.com/stelligent/mu/issues/new).
* Feel free to submit a [Pull Request](https://github.com/stelligent/mu/blob/develop/CONTRIBUTING.md#pr) with a proposed bug fixes and/or features!
