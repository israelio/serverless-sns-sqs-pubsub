const TOPIC_NAME = process.env.TOPIC_NAME;

module.exports.eventConsumerSNS = (event, context, callback) => {
  // print out the event information on the console (so that we can see it in the CloudWatch logs)
  console.log(`I'm triggered by "eventProducer" through the SQS Queue "${TOPIC_NAME}"`);
  console.log(`event:\n${JSON.stringify(event, null, 2)}`);
  return callback(null, {
    event: event
  });
};
