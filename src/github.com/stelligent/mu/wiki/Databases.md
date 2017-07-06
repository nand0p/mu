A database can be created for each service and then referenced by the service.  The service will have access to the following variables to use as environment variables:

* **DatabaseName** - Name of the database that was created
* **DatabaseEndpointAddress** - Address for the RDS endpoint
* **DatabaseEndpointPort** - Port for the RDS endpoint
* **DatabaseMasterUsername** - Username for the master account in RDS
* **DatabaseMasterPassword** - Password for the master account in RDS

## Configuration
```
---
service:

  name: my-service
  # Pass DB config as environment variables
  environment:
    SPRING_DATASOURCE_USERNAME: ${DatabaseMasterUsername}
    SPRING_DATASOURCE_PASSWORD: ${DatabaseMasterPassword}
    SPRING_DATASOURCE_URL: jdbc:mysql://${DatabaseEndpointAddress}:${DatabaseEndpointPort}/${DatabaseName}

  # Define the database
  database:
      name: mydbname                            # Name of database to create on RDS instance
      engine: mysql                             # RDS engine to use (default: aurora)
      instanceClass: db.t2.medium               # Instance class (default: db.t2.small)
      iamAuthentication: true                   # Enable IAM authentication (default: false)
      masterUsername: admin                     # RDS master username (default: admin)
      allocatedStorage: 100                     # Storage requirement (in GB) (default: none)
```

## Commands
```
# List the databases
> mu db list

# Upsert the database
> mu db up <environment>

# Terminate the database
> mu db terminate <environment> [<service_name>]
```


