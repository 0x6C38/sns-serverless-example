'use strict';

const TOPIC_URL = process.env.TOPIC_ARN;
const AWS = require('aws-sdk');

module.exports.publishToSNS = (event, context, callback) => {
  const message = (event.body === undefined ? 'No-message' : event.body); //JSON.parse(event.body) if message is JSON object
  const sns = new AWS.SNS();

  const params = {
    Message: message,
    TopicArn: TOPIC_ARN
  };

  try {
    sns.publish(params).promise();
  } catch(error) {
    console.log(error);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: message
    }),
  };

  callback(null, response);

};
