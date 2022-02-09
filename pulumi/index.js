const aws = require('@pulumi/aws')

const iamForLambda = new aws.iam.Role("iamForLambda", {assumeRolePolicy: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow"
    }
  ]
}
`});
const lambdaAdapter = new aws.lambda.Function("lambdaAdapter", {
    name: "lambdaAdapter",
    memorySize: 128,
    timeout: 3,
    publish: false,
    code: "../go/tmp/main.zip",
    role: iamForLambda.arn,
    handler: "main",
    runtime: "go1.x",
    packageType: "Zip",
});
