# SNS - SQS - PubSub Example  
This repo contains an example of how to publish sns message from a lambda and consume the message via other lambda which is registered to sqs queue.

It took me some time to figure out how to create the subscription between a SNS message and SQS queue and write the serverless.yml which allows servereless framework to install it

This example shows the basics of fan out using messaging pattern such as PubSub for anyone who is looking for a way to connect two lamda functions running on top of AWS

## Running instructions

- Clone the repo
- Deploy the lambda to your aws account using
`
sls deploy
`
- Following successful deployment serverless framework will show you an endpoint to the event producer, click on the endpoint in order to generate a message to sns.
- Watch the logs on the sqs event consumer using 
`
sls logs -f eventConsumerSQS
`

If you find this example usefull you are welcome to click the star button on the top :-)
