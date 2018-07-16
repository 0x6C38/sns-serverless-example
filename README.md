# SNS Lambda Trigger Example
This repository showcases the lambda triggers as well as publishing to an SNS topic with the serverless framework on AWS.

## Requirements
- Have nodejs v6.5.0+ and npm installed
- Have serverless framework installed (`npm install -g serverless`)
- Have your aws credentials [setup](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

## Setup
1. Clone this repository
2. Run `npm install` on the project's directory

## Usage
There are two lambda functions included in the project. The first one, `publishToSNS`, can take will take an HTTP Post request and publish the message the SNS topic declared in the configuration like so:

    curl -X POST ENDPOINT_URL_HERE/publishToSNS -d "Sample Message"

The second lambda function, `processSNSMessage`, will be triggered when a new message is published and log the message on cloudwatch.

## Clean up
All of the resources created by the deployment of this project can be cleaned using `serverless remove` as stated in the serverless framework [documentation](https://serverless.com/framework/docs/providers/aws/guide/quick-start/#cleanup).

