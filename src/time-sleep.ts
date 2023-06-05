import { readFileSync } from 'fs';
import { join } from 'path';
import { CustomResource, Duration } from 'aws-cdk-lib';
import { Code, Runtime, RuntimeFamily, SingletonFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { ResourceProperties } from './types';

export interface TimeSleepProps {
  /**
   * The duration to sleep when this resource is created.
   * Currently it is limited up to 15 mins.
   *
   * @default no sleep (0 seconds)
   */
  readonly createDuration?: Duration;

  /**
   * The duration to sleep when this resource is deleted.
   * Currently it is limited up to 15 mins.
   *
   * @default no sleep (0 seconds)
   */
  readonly destroyDuration?: Duration;
}

export class TimeSleep extends Construct {
  constructor(scope: Construct, id: string, props: TimeSleepProps) {
    super(scope, id);

    const handler = new SingletonFunction(this, 'CustomResourceHandler', {
      // Use raw string to avoid from tightening CDK version requirement
      runtime: new Runtime('nodejs18.x', RuntimeFamily.NODEJS, { supportsInlineCode: true }),
      code: Code.fromInline(readFileSync(join(__dirname, '../', 'lambda', 'dist', 'index.js')).toString()),
      handler: 'index.handler',
      uuid: '494c1b46-0d2f-4e3b-9bfd-0b2cf10162f9', // generated for this construct
      lambdaPurpose: 'TimeSleepCustomResourceHandler',
      timeout: Duration.minutes(15),
      memorySize: 128,
    });

    const properties: ResourceProperties = {
      createDurationSeconds: props.createDuration?.toSeconds() ?? 0,
      destroyDurationSeconds: props.destroyDuration?.toSeconds() ?? 0,
    };

    new CustomResource(this, 'Default', {
      serviceToken: handler.functionArn,
      resourceType: 'Custom::TimeSleep',
      properties,
    });
  }
}
