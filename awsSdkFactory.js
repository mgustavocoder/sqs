var AWS = require('aws-sdk')
AWS.config.update({region: 'us-east-1'})

module.exports = {
    sqs: new AWS.SQS({apiVersion: '2012-11-05'})
}