const { queueUrl } = require('./config/config') 
const { sqs } = require('./awsSdkFactory')

var params = {
 AttributeNames: [
    "SentTimestamp"
 ],
 MaxNumberOfMessages: 1,
 MessageAttributeNames: [
    "All"
 ],
 QueueUrl: queueUrl,
 VisibilityTimeout: 20,
 WaitTimeSeconds: 0
};

async function receiveMessage() {
  try {
    const { Messages } = await sqs.receiveMessage(params).promise()
    const { Body, ReceiptHandle } = Messages[0]
    console.log('Sucess:', Body)
    deleteMessage(ReceiptHandle)
  } catch(err) {
    console.log("Receive Error", err);
  }
}

async function deleteMessage(receiptHandle) {
  try {
    const deleteParams = {
      QueueUrl: queueUrl,
      ReceiptHandle: receiptHandle
    };
    const data = await sqs.deleteMessage(deleteParams).promise()
    console.log("Message Deleted", data);
  } catch(err) {
    console.log("Delete Error", err);
  }
}

receiveMessage()