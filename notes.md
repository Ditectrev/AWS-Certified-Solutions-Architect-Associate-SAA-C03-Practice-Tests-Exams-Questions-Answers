# initial
## Domain 2: Design Resilient Architectures is one of the domains covered in the AWS Certified Solutions Architect - Associate exam. This domain focuses on designing and implementing highly available, fault-tolerant, and scalable architectures in the AWS cloud. Here are the key topics and concepts covered in Domain 2:

- **Designing High Availability**: Understanding and implementing high availability architectures to ensure that applications remain accessible and operational even in the event of component failures or disruptions. This includes leveraging AWS services such as Elastic Load Balancing (ELB), Auto Scaling, and Amazon Route 53 for DNS routing and failover.
- **Designing Fault Tolerant Architectures:** Designing architectures that can withstand component failures and continue to operate without interruption. This involves using redundant components, implementing fault isolation techniques, and leveraging AWS services such as Amazon S3 for data durability and Amazon RDS Multi-AZ deployments for database redundancy.
- **Designing Multi-Region Architectures:** Designing architectures that span multiple AWS regions to improve fault tolerance, disaster recovery, and global availability. This includes implementing multi-region deployments, data replication, and failover mechanisms using AWS services such as Amazon Route 53, AWS Global Accelerator, and AWS CloudFormation.
- **Designing Disaster Recovery Strategies**: Developing disaster recovery plans and strategies to minimize downtime and data loss in the event of catastrophic failures or disasters. This involves implementing backup and restore procedures, leveraging AWS services such as AWS Backup and AWS Disaster Recovery, and testing disaster recovery processes regularly.
- **Designing Scalable Architectures:** Designing architectures that can scale dynamically to handle fluctuations in workload and accommodate growth over time. This includes using AWS services such as Amazon EC2 Auto Scaling, Amazon RDS Read Replicas, and Amazon DynamoDB Auto Scaling to scale compute, database, and storage resources based on demand.
- **Designing Resilient Storage:** Implementing resilient storage architectures that provide high durability, availability, and performance for data storage. This involves using AWS services such as Amazon S3, Amazon EBS, Amazon Glacier, and Amazon EFS to store and manage data securely and reliably.

## AWS Global Accelerator:(TCP/UDP)
 1. Global Accelerator is a networking service that improves the availability and performance of your applications by directing traffic to the nearest AWS edge location based on global routing policies. It is designed to accelerate the delivery of TCP and UDP-based applications that require low-latency and high-throughput connections, such as gaming, IoT, and real-time communications.
 2. operates at the network layer (Layer 3) of the OSI model and uses anycast IP addresses to route traffic to the nearest edge location based on network latency.
 3.  uses global routing policies to direct traffic to the optimal edge location based on factors such as geographic proximity, network latency, and health checks.
 4.   suitable for applications that require low-latency, high-throughput connections, such as gaming, video streaming, VoIP, and IoT applications.
 5.    optimized for accelerating TCP and UDP-based applications that require real-time communication and high-performance networking.

 ## Amazon CloudFront (HTTP/HTTPS)
 1. CloudFront is a content delivery network (CDN) service that caches and delivers content (e.g., web pages, images, videos) to end users with low latency and high transfer speeds. It is primarily used to accelerate the delivery of static and dynamic content from origin servers to end users, improving the performance of websites and web applications.
 2. operates at the application layer (Layer 7) of the OSI model and uses a distributed network of edge locations to cache and serve content closer to end users.
 3. uses DNS resolution and caching to route traffic to the nearest edge location based on the geographic location of the end user.
 4.  suitable for accelerating the delivery of static and dynamic content, such as websites, web applications, APIs, and media streaming.
 5.   optimized for accelerating the delivery of HTTP/HTTPS-based content, including both static and dynamic web pages, images, videos, and other multimedia content.
  
## Amazon QuickSight
 is a fully managed business intelligence (BI) service provided by Amazon Web Services (AWS). It allows users to build interactive dashboards, perform ad-hoc analysis, and derive insights from their data quickly and easily. 

 ## Backup
 AWS Backup is a fully-managed service that makes it easy to centralize and automate data protection across AWS services, in the cloud, and on premises. Using this service, you can configure backup policies and monitor activity for your AWS resources in one place. It allows you to automate and consolidate backup tasks that were previously performed service-by-service, and removes the need to create custom scripts and manual processes. With a few clicks in the AWS Backup console, you can automate your data protection policies and schedules.****
 
 ## Cognito
  Cognito identity pool is a directory of federated identities that you can exchange for AWS credentials. Identity pools generate temporary AWS credentials for the users of your app, whether they’ve signed in or you haven’t identified them yet. With AWS Identity and Access Management (IAM) roles and policies, you can choose the level of permission that you want to grant to your users. 
  - Before discussing Amazon Cognito, it is first important to understand what Web Identity Federation is. Web Identity Federation lets you give your users access to AWS resources after they have successfully authenticated into a web-based identity provider such as Facebook, Google, Amazon, etc. Following a successful login into these services, the user is provided an auth code from the identity provider which can be used to gain temporary AWS credentials.
- Amazon Cognito is the Amazon service that provides Web Identity Federation. You don’t need to write the code that tells users to sign in for Facebook or sign in for Google on your application. Cognito does that already for you out of the box.
- Once authenticated into an identity provider (say with Facebook as an example), the provider supplies an auth token. This auth token is then supplied to Cognito which responds with limited access to your AWS environment. You dictate how limited you would like this access to be in the IAM role.
- Cognito's job is broker between your app and legitimate authenticators.
- *Cognito User Pools* are user directories that are used for sign-up and sign-in functionality on your application. Successful authentication generates a JSON web token. Remember user pools to be user based. It handles registration, recovery, and authentication.
- *Cognito Identity Pools* are used to allow users temp access to direct AWS Services like S3 or DynamoDB. Identity pools actually go in and grant you the IAM role.
- SAML-based authentication can be used to allow AWS Management Console login for non-IAM users.
- In particular, you can use Microsoft Active Directory which implements Security Assertion Markup Language (SAML) as well.
- You can use Amazon Cognito to deliver temporary, limited-privilege credentials to your application so that your users can access AWS resources. 
- Amazon Cognito identity pools support both authenticated and unauthenticated identities. 
- You can retrieve a unique Amazon Cognito identifier (identity ID) for your end user immediately if you're allowing unauthenticated users or after you've set the login tokens in the credentials provider if you're authenticating users.
- When you need to easily add authentication to your mobile and desktop app, think Amazon Cognito.


  ## Network Firewall
  Network Firewall is a stateful, managed, network firewall and intrusion detection and prevention service. You can also use AWS Firewall Manager to centrally configure and manage Network Firewall resources across your accounts and applications in AWS Organizations

  ## RDS
  Relational Database for using mysql mariadb posgres, 

  ## SWF simple workflow service
  a web service that makes it easy to coordinate work across distributed application components. SWF has a range of use cases including media processing, web app backend, business process workflows, and analytical pipelines.
  - SWF is a way of coordinating tasks between application and people. It is a service that combines digital and human-oriented workflows.
  - An example of a human-oriented workflow is the process in which Amazon warehouse workers find and ship your item as part of your Amazon order.
  - SWF provides a task-oriented API and ensures a task is assigned only once and is never duplicated. Using Amazon warehouse workers as an example again, this would make sense. Amazon wouldn’t want to send you the same item twice as they'd lose money.
  - The SWF pipeline is composed of three different worker applications that help to bring a job to completion:
  - SWF Actors are workers that trigger the beginning of a workflow.
  - SWF Deciders are workers that control the flow of the workflow once it's been started.
  - SWF Activity Workers are the workers that actually carry out the task to completion.
  - With SWF, workflow executions can last up to one year compared to the 14 days maximum retention period for SQS.

## API Gateway
API Gateway is a fully managed service for developers that makes it easy to build, publish, manage, and secure entire APIs. With a few clicks in the AWS Management Console, you can create an API that acts as a “front door” for applications to access data, business logic, or functionality from your back-end services, such as workloads running on EC2) code running on AWS Lambda, or any web application.

### API Gateway Key Details:
- Amazon API Gateway handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, authorization and access control, monitoring, and API version management.
- Amazon API Gateway has no minimum fees or startup costs. You pay only for the API calls you receive and the amount of data transferred out.
- API Gateway does the following for your APIs:
- Exposes HTTP(S) endpoints for RESTful functionality
- Uses serverless functionality to connect to Lambda & DynamoDB
- Can send each API endpoint to a different target
- Runs cheaply and efficiently
- Scales readily and effortlessly 
- Can throttle requests to prevent attacks 
- Track and control usage via an API key
- Can be version controlled
- Can be connected to CloudWatch for monitoring and observability
- Since API Gateway can function with AWS Lambda, you can run your APIs and code without needing to maintain servers.
- Amazon API Gateway provides throttling at multiple levels including global and by a service call.
- In software, a throttling process, or a throttling controller as it is sometimes called, is a process responsible for regulating the rate at which application processing is conducted, either statically or dynamically.
- Throttling limits can be set for standard rates and bursts. For example, API owners can set a rate limit of 1,000 requests per second for a specific method in their REST APIs, and also configure Amazon API Gateway to handle a burst of 2,000 requests per second for a few seconds.
- Amazon API Gateway tracks the number of requests per second. Any requests over the limit will receive a 429 HTTP response. The client SDKs generated by Amazon API Gateway retry calls automatically when met with this response.
- You can add caching to API calls by provisioning an Amazon API Gateway cache and specifying its size in gigabytes. The cache is provisioned for a specific stage of your APIs. This improves performance and reduces the traffic sent to your back end. Cache settings allow you to control the way the cache key is built and the time-to-live (TTL) of the data stored for each method. 
- Amazon API Gateway also exposes management APIs that help you invalidate the cache for each stage.
- You can enable API caching for improving latency and reducing I/O for your endpoint.
- When caching for a particular API stage (version controlled version), you cache responses for a particular TTL in seconds.
- API Gateway supports AWS Certificate Manager and can make use of free TLS/SSL certificates.
- With API Gateway, there are two kinds of API calls:
- Calls to the API Gateway API to create, modify, delete, or deploy REST APIs. These are logged in CloudTrail.
- API calls set up by the developers to deliver their custom functionality: These are not logged in CloudTra

## Athena

Athena is an interactive query service which allows you to interact and query data from S3 using standard SQL commands. This is beneficial for programmatic querying for the average developer. It is serverless, requires no provisioning, and you pay per query and per TB scanned. You basically turn S3 into a SQL supported database by using Athena.
Example use cases:
Query logs that are dumped into S3 buckets as an alternative or supplement to the ELK stack
Setting queries to run business reports based off of the data regularly entering S3
Running queries on click-stream data to have further insight of customer behavior

## Beanstalk
ElasticBeanstalk is another way to script out your provisioning process by deploying existing applications to the cloud. ElasticBeanstalk is aimed toward developers who know very little about the cloud and want the simplest way of deploying their code.

ElasticBeanstalk Key Details:
- Just upload your application and ElasticBeanstalk will take care of the underlying infrastructure.
- ElasticBeanstalk has capacity provisioning, meaning you can use it with autoscaling from the get-go. ElasticBeanstalk applies updates to your application by having a duplicate ready with the already updated version. This duplicate is then swapped with the original. This is done as a preventative measure in case your updated application fails. If the app does fail, ElasticBeanstalk will switch back to the original copy with the older version and there will be no downtime experienced by the users who are using your application.
- You can use ElasticBeanstalk to even host Docker as Elastic Beanstalk supports the deployment of web applications from containers. With Docker containers, you can define your own runtime environment, your own platform, programming language, and any application dependencies (such as package managers or tools) that aren't supported by other platforms. ElasticBeanstalk makes it easy to deploy Docker as Docker containers are already self-contained and include all the configuration information and software required to run.

## kinesis
Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. With Amazon Kinesis, you can ingest real-time data such as video, audio, application logs, website clickstreams, and IoT telemetry data for machine learning, analytics, and other applications. Amazon Kinesis enables you to process and analyze data as it arrives and respond instantly instead of having to wait until all your data is collected before the processing can begin.

## Dynamo DB
Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multiregion, multimaster, durable non-SQL database. It comes with built-in security, backup and restore, and in-memory caching for internet-scale applications.


### DynamoDB Key Details:
- The main components of DynamoDB are:
  - a collection which serves as the foundational table
  - a document which is equivalent to a row in a SQL database
  - key-value pairs which are the fields within the document or row
- The convenience of non-relational DBs is that each row can look entirely different based on your use case. There doesn't need to be uniformity. For example, if you need a new column for a particular entry you don't also need to ensure that that column exists for the other entries.
- DynamoDB supports both document and key-value based models. It is a great fit for mobile, web, gaming, ad-tech, IoT, etc.
- DynamoDB is stored via SSD which is why it is so fast.
- It is spread across 3 geographically distinct data centers.
- The default consistency model is Eventually Consistent Reads, but there are also Strongly Consistent Reads.
- The difference between the two consistency models is the one second rule. With Eventual Consistent Reads, all copies of data are usually identical within one second after a write operation. A repeated read after a short period of time should return the updated data. However, if you need to read updated data within or less than a second and this needs to be a guarantee, then strongly consistent reads are your best bet.
- If you face a scenario that requires the schema, or the structure of your data, to change frequently, then you have to pick a database which provides a non-rigid and flexible way of adding or removing new types of data. This is a classic example of choosing between a relational database and non-relational (NoSQL) database. In this scenario, pick DynamoDB.
- A relational database system does not scale well for the following reasons:
  - It normalizes data and stores it on multiple tables that require multiple queries to write to disk.
  - It generally incurs the performance costs of an ACID-compliant transaction system.
  - It uses expensive joins to reassemble required views of query results.
- High cardinality is good for DynamoDB I/O performance. The more distinct your partition key values are, the better.  It makes it so that the requests sent will be spread across the partitioned space. 
- DynamoDB makes use of parallel processing to achieve predictable performance. You can visualize each partition or node as an independent DB server of fixed size with each partition or node responsible for a defined block of data. In SQL terminology, this concept is known as sharding but of course DynamoDB is not a SQL-based DB. With DynamoDB, data is stored on Solid State Drives (SSD).

### DynamoDB Accelerator (DAX):
- Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache that can reduce Amazon DynamoDB response times from milliseconds to microseconds, even at millions of requests per second.
- With DAX, your applications remain fast and responsive, even when unprecedented request volumes come your way. There is no tuning required. 
- DAX lets you scale on-demand out to a ten-node cluster, giving you millions of requests per second.
- DAX does more than just increase read performance by having write through cache. This improves write performance as well.
- Just like DynamoDB, DAX is fully managed. You no longer need to worry about management tasks such as hardware or software provisioning, setup and configuration, software patching, operating a reliable, distributed cache cluster, or replicating data over multiple instances as you scale.
- This means there is no need for developers to manage the caching logic. DAX is completely compatible with existing DynamoDB API calls.
- DAX enables you to provision one DAX cluster for multiple DynamoDB tables, multiple DAX clusters for a single DynamoDB table or somewhere in between giving you maximal flexibility.
- DAX is designed for HA so in the event of a failure of one AZ, it will fail over to one of its replicas in another AZ. This is also managed automatically. 

## Simple Queuing Service (SQS)

### SQS Simplified:
 SQS is a web-based service that gives you access to a message queue that can be used to store messages while waiting for another service to process them. It helps in the decoupling of systems and the horizontal scaling of AWS resources.

### SQS Key Details:
- The point behind SQS is to decouple work across systems. This way, downstream services in a system can perform work when they are ready to rather than when upstream services feed them data.
- In a hypothetical AWS environment running without SQS, *Application A* would pass *Application B* data regardless if Application B was ready to receive the info. With SQS however, there is an intermediary step where the data is stored temporarily in a buffer. It waits there until Application B pulls the temporarily stored data. SQS is not a push-based service so it is necessary for SQS to work in tandem with another service that queries it for information.
- There are two types of SQS queues; **standard** and **FIFO**. Standard queues may be received out of order based on message size or however else the SQS queues decide to optimize. FIFO queues guarantees that the order of messages that went into the queue is the same as the order of messages that leave it.
- Standard SQS queues guarantee that a message is delivered at least once and because of this, it is possible on occasion that a message might be delivered more than once due to the asynchronous and highly distributed architecture. With standard queues, you have a nearly unlimited number of transactions per second.
- FIFO SQS queues guarantee exactly-once processing and is limited to 300 transactions per second.
- Messages in the queue can be kept there from one minute to 14 days and the default retention period is 4 days.
- Visibility timeouts in SQS are the mechanism in which messages marked for delivery from the queue are given a time frame to be fully received by a reader. This is done by temporarily making them invisible to other readers. If the message is not fully processed within the time limit, the message becomes visible again. This is another way in which messages can be duplicated. If you want to reduce the chance of duplication, increase the visibility timeout. 
- The visibility timeout maximum is 12 hours.
- Always remember that the messages in the SQS queue will continue to exist even after the EC2 instance has processed it, until you delete that message. You have to ensure that you delete the message after processing to prevent the message from being received and processed again once the visibility timeout expires.
- An SQS queue can contain an unlimited number of messages. 
- You cannot set a priority to the individual items in the SQS queue. If priority of messaging matters, create two separate SQS queues. The SQS queues for the priority message can be polled first by the EC2 Instances and once completed, the messages from the second queue can be processed next.

### SQS Polling:
- Polling is the means in which you query SQS for messages or work. Amazon SQS provides short-polling and long-polling to receive messages from a queue. By default, queues use short polling. 
- **SQS long-polling**: This polling technique will only return from the queue once a message is there, regardless if the queue is currently full or empty. This way, the reader needs to wait either for the timeout set or for a message to finally arrive. SQS long polling doesn't return a response until a message arrives in the queue, reducing your overall cost over time. 
- **SQS short-polling**: This polling technique will return immediately with either a message that’s already stored in the queue or empty-handed. 
- The ReceiveMessageWaitTimeSeconds is the queue attribute that determines whether you are using Short or Long polling. By default, its value is zero which means it is using short-polling. If it is set to a value greater than zero, then it is long-polling.
- Every time you poll the queue, you incur a charge. So thoughtfully deciding on a polling strategy that fits your use case is important.

### What is AWS Config?
- AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.
- With Config, you can review changes in configurations and relationships between AWS resources, dive into detailed resource configuration histories, and determine your overall compliance against the configurations specified in your internal guidelines. This enables you to simplify compliance auditing, security analysis, change management, and operational troubleshooting.
- AWS Config allows you to do the following: ·        
  - Evaluate your AWS resource configurations for desired settings. ·         
  - Get a snapshot of the current configurations of the supported resources that are associated with your AWS account. ·        
  - Retrieve configurations of one or more resources that exist in your account. ·       
  - Retrieve historical configurations of one or more resources. ·     
  - Receive a notification whenever a resource is created, modified, or deleted.     
  - View relationships between resources. For example, you might want to find all resources that use a particular security group.
  
## Simple Storage Service (S3)

### S3 Simplified:
S3 provides developers and IT teams with secure, durable, and highly-scalable object storage. Object storage, as opposed to block storage, is a general term that refers to data composed of three things:

  1.) the data that you want to store

  2.) an expandable amount of metadata

  3.) a unique identifier so that the data can be retrieved 

This makes it a perfect candidate to host files or directories and a poor candidate to host databases or operating systems. The following table highlights key differences between object and block storage:

![Screen Shot 2020-06-05 at 3 34 57 PM](https://user-images.githubusercontent.com/13093517/83915925-352c5780-a742-11ea-975b-53d4e5d07e7c.png)


Data uploaded into S3 is spread across multiple files and facilities. The files uploaded into S3 have an upper-bound of 5TB per file and the number of files that can be uploaded is virtually limitless. S3 buckets, which contain all files, are named in a universal namespace so uniqueness is required. All successful uploads will return an HTTP 200 response.

### S3 Key Details:
- Objects (regular files or directories) are stored in S3 with a key, value, version ID, and metadata. They can also contain torrents and sub resources for access control lists which are basically permissions for the object itself.
- The data consistency model for S3 ensures immediate read access for new objects after the initial PUT requests. These new objects are introduced into AWS for the first time and thus do not need to be updated anywhere so they are available immediately.
- The data consistency model for S3 also ensures immediate read access for PUTS and DELETES of already existing objects, <a href="https://aws.amazon.com/fr/about-aws/whats-new/2020/12/amazon-s3-now-delivers-strong-read-after-write-consistency-automatically-for-all-applications/">since Decembre 2020</a>.
- Amazon guarantees 99.999999999% (or 11 9s) durability for all S3 storage classes except its Reduced Redundancy Storage class.
- S3 comes with the following main features:

  1.) tiered storage and pricing variability

  2.) lifecycle management to expire older content

  3.) versioning for version control

  4.) encryption for privacy

  5.) MFA deletes to prevent accidental or malicious removal of content

  6.) access control lists & bucket policies to secure the data

- S3 charges by:

  1.) storage size

  2.) number of requests

  3.) storage management pricing (known as tiers)

  4.) data transfer pricing (objects leaving/entering AWS via the internet)

  5.) transfer acceleration (an optional speed increase for moving objects via Cloudfront)

  6.) cross region replication (more HA than offered by default)

- Bucket policies secure data at the bucket level while access control lists secure data at the more granular object level.
- By default, all newly created buckets are private.
- S3 can be configured to create access logs which can be shipped into another bucket in the current account or even a separate account all together. This makes it easy to monitor who accesses what inside S3.
- There are 3 different ways to share S3 buckets across AWS accounts:

  1.) For programmatic access only, use IAM & Bucket Policies to share entire buckets

  2.) For programmatic access only, use ACLs & Bucket Policies to share objects

  3.) For access via the console & the terminal, use cross-account IAM roles

- S3 is a great candidate for static website hosting. When you enable static website hosting for S3 you need both an index.html file and an error.html file. Static website hosting creates a website endpoint that can be accessed via the internet.
- When you upload new files and have versioning enabled, they will not inherit the properties of the previous version. 

### S3 Storage Classes:
**S3 Standard** - 99.99% availability and 11 9s durability. Data in this class is stored redundantly across multiple devices in multiple facilities and is designed to withstand the failure of 2 concurrent data centers.

**S3 Infrequently Accessed (IA)** - For data that is needed less often, but when it is needed the data should be available quickly. The storage fee is cheaper, but you are charged for retrieval.

**S3 One Zone Infrequently Accessed (an improvement of the legacy RRS / Reduced Redundancy Storage)** -  For when you want the lower costs of IA, but do not require high availability. This is even cheaper because of the lack of HA.

**S3 Intelligent Tiering** - Uses built-in ML/AI to determine the most cost-effective storage class and then automatically moves your data to the appropriate tier. It does this without operational overhead or performance impact.

**S3 Glacier** - low-cost storage class for data archiving. This class is for pure storage purposes where retrieval isn’t needed often at all. Retrieval times range from minutes to hours. There are differing retrieval methods depending on how acceptable the default retrieval times are for you:

    Expedited: 1 - 5 minutes, but this option is the most expensive.
    Standard: 3 - 5 hours to restore.
    Bulk: 5 - 12 hours. This option has the lowest cost and is good for a large set of data.

The Expedited duration listed above could possibly be longer during rare situations of unusually high demand across all of AWS. If it is absolutely critical to have quick access to your Glacier data under all circumstances, you must purchase *Provisioned Capacity*. Provisioned Capacity guarantees that Expedited retrievals always work within the time constraints of 1 to 5 minutes.

**S3 Deep Glacier** - The lowest cost S3 storage where retrieval can take 12 hours.

<img width="1246" alt="storage_types" src="https://user-images.githubusercontent.com/13093517/83919060-e1247180-a747-11ea-9336-e92ee163ac7a.png">

### S3 Encryption:
S3 data can be encrypted both in transit and at rest.

**Encryption In Transit**: When the traffic passing between one endpoint to another is indecipherable. Anyone eavesdropping between server A and server B won’t be able to make sense of the information passing by. Encryption in transit for S3 is always achieved by SSL/TLS.

**Encryption At Rest**: When the immobile data sitting inside S3 is encrypted. If someone breaks into a server, they still won’t be able to access encrypted info within that server. Encryption at rest can be done either on the server-side or the client-side. The server-side is when S3 encrypts your data as it is being written to disk and decrypts it when you access it. The client-side is when you personally encrypt the object on your own and then upload it into S3 afterwards.

You can encrypt on the AWS supported server-side in the following ways:
- **S3 Managed Keys / SSE - S3 (server side encryption S3 )** - when Amazon manages the encryption and decryption keys for you automatically. In this scenario, you concede a little control to Amazon in exchange for ease of use.
- **AWS Key Management Service / SSE - KMS** - when Amazon and you both manage the encryption and decryption keys together.
- **Server Side Encryption w/ customer provided keys / SSE - C** - when I give Amazon my own keys that I manage. In this scenario, you concede ease of use in exchange for more control.

### S3 Versioning:
- When versioning is enabled, S3 stores all versions of an object including all writes and even deletes.
- It is a great feature for implicitly backing up content and for easy rollbacks in case of human error.
- It can be thought of as analogous to Git.
- Once versioning is enabled on a bucket, it cannot be disabled - only suspended.
- Versioning integrates w/ lifecycle rules so you can set rules to expire or migrate data based on their version.
- Versioning also has MFA delete capability to provide an additional layer of security.

### S3 Lifecycle Management:
- Automates the moving of objects between the different storage tiers.
- Can be used in conjunction with versioning.
- Lifecycle rules can be applied to both current and previous versions of an object.

### S3 Cross Region Replication:
- Cross region replication only works if versioning is enabled.
- When cross region replication is enabled, no pre-existing data is transferred. Only new uploads into the original bucket are replicated. All subsequent updates are replicated.
- When you replicate the contents of one bucket to another, you can actually change the ownership of the content if you want. You can also change the storage tier of the new bucket with the replicated content.
- When files are deleted in the original bucket (via a delete marker as versioning prevents true deletions), those deletes are not replicated.
- <a href="https://aws.amazon.com/solutions/cross-region-replication-monitor/">Cross Region Replication Overview</a>
- <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html#replication-what-is-not-replicated ">What is and isn’t replicated such as encrypted objects, deletes, items in glacier, etc.</a>

### S3 Transfer Acceleration:
- Transfer acceleration makes use of the CloudFront network by sending or receiving data at CDN points of presence (called edge locations) rather than slower uploads or downloads at the origin.
- This is accomplished by uploading to a distinct URL for the edge location instead of the bucket itself. This is then transferred over the AWS network backbone at a much faster speed.
- <a href="https://s3-accelerate-speedtest.s3-accelerate.amazonaws.com/en/accelerate-speed-comparsion.html">You can test transfer acceleration speed directly in comparison to regular uploads.</a>

### Glue
 a serverless data integration service that makes it easy for analytics users to discover, prepare, move, and integrate data from multiple sources. You can use it for analytics, machine learning, and application development. It also includes additional productivity and data ops tooling for authoring, running jobs, and implementing business workflows.

 With AWS Glue, you can discover and connect to more than 70 diverse data sources and manage your data in a centralized data catalog. You can visually create, run, and monitor extract, transform, and load (ETL) pipelines to load data into your data lakes. Also, you can immediately search and query cataloged data using Amazon Athena, Amazon EMR, and Amazon Redshift Spectrum.

 ## PrincipalOrgID
 - Validates if the principal accessing the resource belongs to an account in your org

 ## EFS
 Provides simple and fully managed NFS file system for use within AWS. . EFS automatically and instantly scales your file system storage capacity up or down as you add or remove files without disrupting your application.

### EFS Key Details:
- In EFS, storage capacity is elastic (grows and shrinks automatically) and its size changes based on adding or removing files.
- While EBS mounts one EBS volume to one instance, you can attach one EFS volume across multiple EC2 instances.
- The EC2 instances communicate to the remote file system using the NFSv4 protocol. This makes it required to open up the NFS port for our security group (EC2 firewall rules) to allow inbound traffic on that port.
- Within an EFS volume, the mount target state will let you know what instances are available for mounting
- With EFS, you only pay for the storage that you use so you pay as you go.
- No pre-provisioning required.
- EFS can scale up to the petabytes and can support thousands of concurrent NFS connections.
- Data is stored across multiple AZs in a region and EFS ensures read after write consistency.
- It is best for file storage that is accessed by a fleet of servers rather than just one server

## Storage Gateway
### Storage Gateway Simplified:
Storage Gateway is a service that connects on-premise environments with cloud-based storage in order to seamlessly and securely integrate an on-prem application with a cloud storage backend. Storage Gateway comes in three flavors: File Gateway, Volume Gateway and Tape Gateway.

### Storage Gateway Key Details:
- The Storage Gateway service can either be a physical device or a VM image downloaded onto a host in an on-prem data center. It acts as a bridge to send or receive data from AWS.
- Storage Gateway can sit on top of VMWare's ESXi hypervisor for Linux machines and Microsoft’s Hyper-V hypervisor for Windows machines.
- The three types of Storage Gateways are below:
  - File Gateway - Operates via NFS or SMB and is used to store files in S3 over a network filesystem mount point in the supplied virtual machine. Simply put, you can think of a File Gateway as a file system mount on S3.
  - Volume Gateway - Operates via iSCSI and is used to store copies of hard disk drives or virtual hard disk drives in S3. These can be achieved via Stored Volumes or Cached Volumes. Simply put, you can think of Volume Gateway as a way of storing virtual hard disk drives in the cloud.
  - Tape Gateway - Operates as a Virtual Tape Library

## Aurora
### Aurora Simplified:
Aurora is the AWS flagship DB known to combine the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open source databases. It is a MySQL/PostgreSQL-compatible RDBMS that provides the security, availability, and reliability of commercial databases at 1/10th the cost of competitors. It is far more effective as an AWS database due to the 5x and 3x performance multipliers for MySQL and PostgreSQL respectively.
### Aurora Key Details:
- In case of an infrastructure failure, Aurora performs an automatic failover to a replica of its own.
- Amazon Aurora typically involves a cluster of DB instances instead of a single instance. Each connection is handled by a specific DB instance. When you connect to an Aurora cluster, the host name and port that you specify point to an intermediate handler called an endpoint. Aurora uses the endpoint mechanism to abstract these connections. Thus, you don't have to hard code all the host names or write your own logic for load-balancing and rerouting connections when some DB instances aren't available.
- By default, there are 2 copies in a minimum of 3 availability zones for 6 total copies of all of your Aurora data. This makes it possible for it to handle the potential loss of up to 2 copies of your data without impacting write availability and up to 3 copies of your data without impacting read availability.
- Aurora storage is self-healing and data blocks and disks are continuously scanned for errors. If any are found, those errors are repaired automatically.
- Aurora replication differs from RDS replicas in the sense that it is possible for Aurora's replicas to be both a standby as part of a multi-AZ configuration as well as a target for read traffic. In RDS, the multi-AZ standby cannot be configured to be a read endpoint and only read replicas can serve that function.
- With Aurora replication, you can have up to fifteen copies. If you want downstream MySQL or PostgreSQL as you replicated copies, then you can only have 5 or 1.
- Automated failover is only possible with Aurora read replication
- For more on the differences between RDS replication and Aurora Replication, please consult the following:

![Screen Shot 2020-06-18 at 3 02 39 PM](https://user-images.githubusercontent.com/13093517/85061446-d240b480-b174-11ea-9dc4-f40d82743250.png)

- Automated backups are always enabled on Aurora instances and backups don’t impact DB performance. You can also take snapshots which also don’t impact performance. Your snapshots can be shared across AWS accounts.
- A common tactic for migrating RDS DBs into Aurora RDs is to create a read replica of a RDS MariaDB/MySQL DB as an Aurora DB. Then simply promote the Aurora DB into a production instance and delete the old MariaDB/MySQL DB.
- Aurora starts w/ 10GB and scales per 10GB all the way to 128 TB via storage autoscaling. Aurora's computing power scales up to 32vCPUs and 244GB memory

### Aurora Serverless:
- Aurora Serverless is a simple, on-demand, autoscaling configuration for the MySQL/PostgreSQl-compatible editions of Aurora. With Aurora Serverless, your instance automatically scales up or down and starts on or off based on your application usage. The use cases for this service are infrequent, intermittent, and unpredictable workloads.
- This also makes it possible cheaper because you only pay per invocation
- With Aurora Serverless, you simply create a database endpoint, optionally specify the desired database capacity range, and connect your applications. 
- It removes the complexity of managing database instances and capacity. The database will automatically start up, shut down, and scale to match your application's needs. It will seamlessly scale compute and memory capacity as needed, with no disruption to client connections.

### Aurora Cluster Endpoints:
- Using cluster endpoints, you map each connection to the appropriate instance or group of instances based on your use case.
- You can connect to cluster endpoints associated with different roles or jobs across your Aurora DB. This is because different instances or groups of instances perform different functions.
- For example, to perform DDL statements you can connect to the primary instance. To perform queries, you can connect to the reader endpoint, with Aurora automatically performing load-balancing among all the Aurora Replicas behind the reader endpoint. For diagnosis or tuning, you can connect to a different endpoint to examine details. 
- Since the entryway for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention for any of your endpoints.

### Aurora Reader Endpoints:
- Aurora Reader endpoints are a subset of the above idea of cluster endpoints. Use the reader endpoint for read operations, such as queries. By processing those statements on the read-only Aurora Replicas, this endpoint reduces the overhead on the primary instance. 
- There are up 15 Aurora Read Replicas because a Reader Endpoint to help handle read-only query traffic.
- It also helps the cluster to scale the capacity to handle simultaneous SELECT queries, proportional to the number of Aurora Replicas in the cluster. Each Aurora DB cluster has one reader endpoint.
- If the cluster contains one or more Aurora Replicas, the reader endpoint load-balances each connection request among the Aurora Replicas. In that case, you can only perform read-only statements such as SELECT in that session. If the cluster only contains a primary instance and no Aurora Replicas, the reader endpoint connects to the primary instance directly. In that case, you can perform write operations through the endpoint.

## EBS Snapshots
- EBS Snapshots are point in time copies of volumes. You can think of Snapshots as photographs of the disk’s current state and the state of everything within it.
- A snapshot is constrained to the region where it was created.
- Snapshots only capture the state of change from when the last snapshot was taken. This is what is recorded in each new snapshot, not the entire state of the server.
- Because of this, it may take some time for your first snapshot to be created. This is because the very first snapshot's change of state is the entire new volume. Only afterwards will the delta be captured because there will then be something previous to compare against. 
- EBS snapshots occur asynchronously which means that a volume can be used as normal while a snapshot is taking place.
- When creating a snapshot for a future root device, it is considered best practices to stop the running instance where the original device is before taking the snapshot.
- The easiest way to move an EC2 instance and a volume to another availability zone is to take a snapshot.
- When creating an image from a snapshot, if you want to deploy a different volume type for the new image (e.g. General Purpose SSD -> Throughput Optimized HDD) then you must make sure that the virtualization for the new image is hardware-assisted.
- A short summary for creating copies of EC2 instances: Old instance -> Snapshot -> Image (AMI) -> New instance
- You cannot delete a snapshot of an EBS Volume that is used as the root device of a registered AMI. If the original snapshot was deleted, then the AMI would not be able to use it as the basis to create new instances. For this reason, AWS protects you from accidentally deleting the EBS Snapshot, since it could be critical to your systems. To delete an EBS Snapshot attached to a registered AMI, first remove the AMI, then the snapshot can be deleted.

## AWS billing and Cost management
AWS Billing and Cost Management provides a suite of features to help you set up your billing, retrieve and pay invoices, and analyze, organize, plan, and optimize your costs. To get started, set up your billing to match your requirements. For individuals or small organizations, AWS will automatically charge the credit card provided.


## Cost explorer
- AWS Cost Explorer is a tool that enables you to view and analyze your costs and usage. 
- You can explore your usage and costs using the main graph, 
- the Cost Explorer cost and usage reports, or the Cost Explorer RI reports.
- You can view data for up to the last 13 months, forecast how much you're likely to spend for the next 12 months, and get recommendations for what Reserved Instances to purchase. 
- You can use Cost Explorer to identify areas that need further inquiry and see trends that you can use to understand your costs.

Cost Explorer uses the same dataset that is used to generate the AWS Cost and Usage Reports and the detailed billing reports. For a comprehensive review of the data, you can download it into a comma-separated value (CSV) file.