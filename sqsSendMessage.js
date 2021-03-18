const { queueUrl } = require('./config/config')
const { sqs } = require('./awsSdkFactory')

var params = {
   // Remove DelaySeconds parameter and value for FIFO queues
  DelaySeconds: 10,
  MessageBody: "Information about current NY Times fiction bestseller for week of 12/11/2016.",
  // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
  // MessageGroupId: "Group1",  // Required for FIFO queues
  QueueUrl: queueUrl
};

async function sendMessage(){
  try {
    const { MessageId } = await sqs.sendMessage(params).promise();
    console.log("Success", MessageId);
  } catch(err) {
    console.log("Error", err);  
  }
}

sendMessage()
