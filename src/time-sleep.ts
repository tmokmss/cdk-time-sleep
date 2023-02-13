import { join } from 'path';
import { CustomResource, Duration, Stack } from 'aws-cdk-lib';
import { Code, Runtime, RuntimeFamily, SingletonFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { ResourceProperties } from './types';

export interface TimeSleepProps {
  readonly createDuration?: Duration;
  readonly destroyDuration?: Duration;
}

/**
 * API design
 * TimeSleep.createAfter(res1, res2, seconds)
 * TimeSleep.deleteAfter(res1, res2, seconds)
 * TimeSleep.addSleep(res1, res2, {createSeconds, destroySeconds}})
 */

export class TimeSleep extends Construct {
  constructor(scope: Construct, id: string, props: TimeSleepProps) {
    super(scope, id);

    const handler = new SingletonFunction(this, 'CustomResourceHandler', {
      // Use raw string to avoid from tightening CDK version requirement
      runtime: new Runtime('nodejs18.x', RuntimeFamily.NODEJS),
      code: Code.fromAsset(join(__dirname, '../lambda/dist')),
      handler: 'index.handler',
      uuid: '494c1b46-0d2f-4e3b-9bfd-0b2cf10162f9', // generated for this construct
      lambdaPurpose: 'TimeSleepCustomResourceHandler',
      timeout: Duration.minutes(15),
      memorySize: 128,
    });

    const properties: ResourceProperties = {
      createDurationSeconds: props.createDuration?.toSeconds() ?? 0,
      destroyDurationSeconds: props.createDuration?.toSeconds() ?? 0,
    };

    new CustomResource(this, 'Default', {
      serviceToken: handler.functionArn,
      resourceType: 'Custom::TimeSleep',
      properties,
    });
  }
}
