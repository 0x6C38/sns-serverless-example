'use strict';

const TOPIC_URL = process.env.TOPIC_ARN;

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: TOPIC_URL
    }),
  };

  callback(null, response);

};
