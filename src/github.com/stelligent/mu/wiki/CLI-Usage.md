Check out the following pages for details on specific subcommands:

* **[Environments](https://github.com/stelligent/mu/wiki/Environments#commands)** - managing VPCs, ECS clusters, container instances and ALBs
* **[Services](https://github.com/stelligent/mu/wiki/Services#commands)** - managing ECS service configuration
* **[Databases](https://github.com/stelligent/mu/wiki/Databases#commands)** - managing RDS configuration
* **[Pipelines](https://github.com/stelligent/mu/wiki/Pipelines#commands)** - managing continuous delivery pipelines

The following args are available on all subcommands:

```
# Path to mu config
> mu -c path/to/mu.yml ...

# AWS region
> mu -r us-west-2 ...

# or via environment variable
> AWS_REGION=us-west-2 mu ...

# AWS profile
> mu -p my-profile ...

# or via environment variable
> AWS_PROFILE=my-profie mu ...

```


