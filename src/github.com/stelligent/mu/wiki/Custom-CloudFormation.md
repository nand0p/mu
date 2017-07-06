Anytime mu manages AWS resources, it is done via a CloudFormation template.  To preview the template without actually making any changes in your AWS account, add the `--dryrun` or `-d` flag.  For example:

```
> mu -d env up dev
Upserting VPC environment 'dev' ...
  DRYRUN: Skipping create of stack named 'mu-vpc-dev'.  Template and parameters written to '/tmp/mu-cloudformation'
Upserting ECS environment 'dev' ...
  DRYRUN: Skipping create of stack named 'mu-cluster-dev'.  Template and parameters written to '/tmp/mu-cloudformation'
```

You can then view the CloudFormation templates and the parameter files passed into the templates in the directory provided in the output message.

# Customization

You can customize the generated CloudFormation by adding a `templates` section to your mu.yml file.  The [custom-cloudformation](https://github.com/stelligent/mu/blob/develop/examples/custom-cloudformation) example in the GitHub repo provides a good demonstration:

```
environments:
  - name: example

templates:
  mu-cluster-example:
    Resources:

      # Define a new security group
      ExtraSG:
        Type: AWS::EC2::SecurityGroup
        Properties:
          VpcId:
            Fn::ImportValue: !Sub ${VpcId}
          GroupDescription: Example additional ECS Host Security Group
          SecurityGroupIngress:
          - IpProtocol: tcp
            FromPort: '8080'
            ToPort: '8080'
            CidrIp: !Ref SshAllow

      ## Update the existing launch config to reference new SG
      ContainerInstances:
        Properties:
          SecurityGroups: [ !Ref ExtraSG ]
```

In this example, the `mu-cluster-example` stack will be updated to include an additional security group named `ExtraSG`.  Additionally, the existing resource that mu creates named `ContainerInstances` will be modified to include the additional security group.

