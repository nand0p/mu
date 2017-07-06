Environments are defined to become a target for deploying services to.  Each environment is a CloudFormation stack consisting of the following resources:

* **VPC** – To provide the network infrastructure to launch the ECS container instances into. Optionally, you can target an existing VPC.
* **Consul Cluster** - A cluster of consul servers (in ECS and ASG)
* **ECS Cluster** – The cluster that the services will be deployed into.
* **Auto Scaling Group** – To manage the ECS container instances that contain the compute resources for running the containers.  Auto scaling policies will be defined based on memory entitlements in the cluster.
* **Application Load Balancer** – To provide load balancing for the microservices running in containers.

![Environment Diagram](https://github.com/stelligent/mu/wiki/img/ms-architecture-1.png)

## Configuration
```
---

### Define a list of environments
environments:

  # The unique name of the environment  (required)
  - name: dev
    provider: ecs                   # The type of environment to use, ec2 or ecs (default: ecs)


    ### Attributes for the ECS container instances
    cluster:
      imageId: ami-xxxxxx           # The AMI to use for the ECS container instances (default: latest ECS optimized AMI)
      instanceType: t2.micro        # The instance type to use for the ECS container instances (default: t2.micro)
      instanceTenancy: default      # Whether to use default or dedicated tenancy (default: default)
      desiredCapacity: 1            # Desired number of ECS container instances (default 1)
      maxSize: 2                    # Max size to scale the ECS ASG to (default: 2)
      keyName: my-keypair           # name of EC2 keypair to associate with ECS container instances. Launches bastion host if defined. (default: none)
      sshAllow: 0.0.0.0/0           # CIDR block to allow SSH access from (default: 0.0.0.0/0)
      httpProxy: 10.0.0.43:8080     # Host and port to use for HTTP proxy for yum, docker images, and ECS (default: none)
      scaleOutThreshold: 80         # Threshold for % memory utilization to scale out ECS container instances (default: 80)
      scaleInThreshold: 30          # Threshold for % memory utilization to scale in ECS container instances (default: 30)

    ### Attributes for the ELB
    loadBalancer:
      internal: true                # Whether to create an internal ELB or not (default: false)
      hostedzone: mydomain.com      # HostedZone in Route53 to create ELB DNS for.  Leave blank to not create DNS (default: none)
      name: api                     # Name to register in hostedzone for ELB DNS.  (default: environment name)
      certificate: 973c1a2f-8d43... # The identifier of a certificate in ACM.  If defined, will create HTTPS listener in ELB.  (default: none)

    ### Attributes for Service Discovery
    discovery:
      provider: consul              # Which provider to use for service discovery.  Currently, only consul is supported (default: none)

    ### Attributes for the VPC to target.  If not defined, a VPC will be created. (default: none)
    vpcTarget:
        vpcId: vpc-xxxxx            # The id of the VPC to launch ECS container instances into
        instanceSubnetIds:          # The list of subnets to use for ECS container instances
          - subnet-xxxxx
          - subnet-xxxxy
          - subnet-xxxxz
        elbSubnetIds:               # The list of subnets to use for ELBs
          - subnet-xxxxx
          - subnet-xxxxy
          - subnet-xxxxz
```

## Commands
```
# List all environments
> mu env list

# Show details about a specific environment (ECS container instances, Running services, etc)
> mu env show <environment_name>

# View the logs from EC2 instances in your cluster
> mu env logs [--follow] <environment_name> [filter]

# Upsert an environment
> mu env up <environment_name>

# Terminate an environment
> mu env terminate <environment_name>
```

