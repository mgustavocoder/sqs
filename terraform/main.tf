provider "aws" {
    region = "us-east-1"
    profile = "matheusaws"
}

resource "aws_sqs_queue" "myQueue" {
    name = "myQueue"
    visibility_timeout_seconds = 15
}