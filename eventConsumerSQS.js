const QUEUE_NAME = process.env.QUEUE_NAME;

module.exports.eventConsumerSQS = (event, context, callback) => {
  // print out the event information on the console (so that we can see it in the CloudWatch logs)
  console.log(`I'm triggered by "eventProducer" through the SQS Queue "${QUEUE_NAME}"`);
  console.log(`event:\n${JSON.stringify(event, null, 2)}`);
  var body = event.Records[0].body;
  console.log("text: ",JSON.parse(body).text);

  return callback(null, {
    event: event
  });

  // Uncomment the following line to see the message flow the the Dead Letter Queue
  // throw Error('Some error message');
};
