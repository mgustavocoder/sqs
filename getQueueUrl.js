const { sqs } = require('./awsSdkFactory')

var params = {
  QueueName: 'myQueue'
};

module.exports = async () => {
    try {
        const { QueueUrl } = await sqs.getQueueUrl(params).promise()
        console.log("Success", QueueUrl);
        return QueueUrl
   } catch(e) {
        console.log("Error", err);
        return undefined
    }
}