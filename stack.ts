import * as lambda from '@aws-cdk/aws-lambda'
import * as iam from '@aws-cdk/aws-iam'
import * as apigateway from '@aws-cdk/aws-apigateway'
import * as cdk from '@aws-cdk/core'

const dbARN = ""
const dbSecretARN = ""

export class MeowsBase extends cdk.Stack {
    constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
        super(parent, name, props);

        const lambdaRole = new iam.Role(this, 'AuroraServerlessLamdaRole', {
            assumeBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
            managedPolicies: [
                iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonRDSDataFullAccess'),
                iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLamdaBasicExecutionRole')
            ]
        }
        );

        const handler = new lambda.Function(this, "MeowsHandler", {
            assumedBy: new iam.ServicePrincipal2
        }
        )
    }
}