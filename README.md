# CDK time-sleep
CDK equivalent for Terraform's [time_sleep resource](https://registry.terraform.io/providers/hashicorp/time/latest/docs/resources/sleep).

For those who want to add intentional sleeps between creation or deletion of resources.

## Usage
```ts
const queue1 = new Queue(this, 'Queue1');
const sleep10s = new TimeSleep(this, 'Sleep10seconds', {
    createDuration: Duration.seconds(10),
    destroyDuration: Duration.seconds(10),
});
const queue2 = new Queue(this, 'Queue2');

// create queue2 ten seconds after creating queue1
sleep10s.node.addDependency(queue1);
queue2.node.addDependency(sleep10s);
```
