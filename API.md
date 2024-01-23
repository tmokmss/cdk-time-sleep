# CDK time-sleep
AWS CDK equivalent for Terraform's [time_sleep resource](https://registry.terraform.io/providers/hashicorp/time/latest/docs/resources/sleep).

For those who want to add intentional sleeps between creation or deletion of resources.

## Usage
Install via npm:

```sh
npm i cdk-time-sleep
```

And use it from AWS CDK code.

```ts
const queue1 = new Queue(this, 'Queue1');
const sleep10s = new TimeSleep(this, 'Sleep10seconds', {
    createDuration: Duration.seconds(10),
});
const queue2 = new Queue(this, 'Queue2');

// create queue2 (at least) 10 seconds after creating queue1
sleep10s.node.addDependency(queue1);
queue2.node.addDependency(sleep10s);
```

```ts
const queue1 = new Queue(this, 'Queue1');
const sleep10s = new TimeSleep(this, 'Sleep10seconds', {
    destroyDuration: Duration.seconds(10),
});
const queue2 = new Queue(this, 'Queue2');

// destroy queue1 (at least) 10 seconds after destroying queue2
sleep10s.node.addDependency(queue1);
queue2.node.addDependency(sleep10s);
```

## For maintainers
```sh
# Deploy a test stack
cd test
npx cdk deploy --app "npx ts-node integ.time-sleep.ts" IntegTest
```

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimeSleep <a name="TimeSleep" id="cdk-time-sleep.TimeSleep"></a>

#### Initializers <a name="Initializers" id="cdk-time-sleep.TimeSleep.Initializer"></a>

```typescript
import { TimeSleep } from 'cdk-time-sleep'

new TimeSleep(scope: Construct, id: string, props: TimeSleepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-time-sleep.TimeSleep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-time-sleep.TimeSleep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-time-sleep.TimeSleep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-time-sleep.TimeSleepProps">TimeSleepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-time-sleep.TimeSleep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-time-sleep.TimeSleep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-time-sleep.TimeSleep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-time-sleep.TimeSleepProps">TimeSleepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-time-sleep.TimeSleep.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-time-sleep.TimeSleep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-time-sleep.TimeSleep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-time-sleep.TimeSleep.isConstruct"></a>

```typescript
import { TimeSleep } from 'cdk-time-sleep'

TimeSleep.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-time-sleep.TimeSleep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-time-sleep.TimeSleep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-time-sleep.TimeSleep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### TimeSleepProps <a name="TimeSleepProps" id="cdk-time-sleep.TimeSleepProps"></a>

#### Initializer <a name="Initializer" id="cdk-time-sleep.TimeSleepProps.Initializer"></a>

```typescript
import { TimeSleepProps } from 'cdk-time-sleep'

const timeSleepProps: TimeSleepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-time-sleep.TimeSleepProps.property.createDuration">createDuration</a></code> | <code>aws-cdk-lib.Duration</code> | The duration to sleep when this resource is created. |
| <code><a href="#cdk-time-sleep.TimeSleepProps.property.destroyDuration">destroyDuration</a></code> | <code>aws-cdk-lib.Duration</code> | The duration to sleep when this resource is deleted. |

---

##### `createDuration`<sup>Optional</sup> <a name="createDuration" id="cdk-time-sleep.TimeSleepProps.property.createDuration"></a>

```typescript
public readonly createDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* no sleep (0 seconds)

The duration to sleep when this resource is created.

Currently it is limited up to 15 mins.

---

##### `destroyDuration`<sup>Optional</sup> <a name="destroyDuration" id="cdk-time-sleep.TimeSleepProps.property.destroyDuration"></a>

```typescript
public readonly destroyDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* no sleep (0 seconds)

The duration to sleep when this resource is deleted.

Currently it is limited up to 15 mins.

---



