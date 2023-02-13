import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { Stack, StackProps, App, Duration } from 'aws-cdk-lib';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { TimeSleep } from '../src/';

const app = new App();

class TestStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);
    const queue1 = new Queue(this, 'Queue1');
    const sleep10s = new TimeSleep(this, 'Sleep10seconds', {
      createDuration: Duration.seconds(10),
      destroyDuration: Duration.seconds(10),
    });
    const queue2 = new Queue(this, 'Queue2');

    sleep10s.node.addDependency(queue1);
    queue2.node.addDependency(sleep10s);
  }
}

const stack = new TestStack(app, 'IntegTest');

new IntegTest(app, 'Test', {
  testCases: [stack],
  diffAssets: true,
});
