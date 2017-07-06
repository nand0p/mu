Service discovery is enabled via [Consul](https://www.consul.io/).  When enabled, a Consul cluster is created in its own CloudFormation stack and referenced from the environment.  When enabled, [Registrator](http://gliderlabs.com/registrator/latest/) is run as a task on each ECS instance and automatically registers each service with the consul cluster.

# Configuration

```
environments:
  - name: dev-with-service-discovery
    cluster:
      maxSize: 2
      keyName: my-keypair
    discovery:
      provider: consul
```

# Consul UI

An internal ELB is created to serve the UI of the consul servers.  To access it, you'll need to specify a `keyName` and then ssh into your bastion host with proxy support:

```
ssh -D 8080 ec2-user@<bastion-ip-address>
```

You can then access the UI using `127.0.0.1:8080` for your SOCKS5 proxy.

