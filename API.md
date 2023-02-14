# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimeSleep <a name="TimeSleep" id="cdk-time-seep.TimeSleep"></a>

#### Initializers <a name="Initializers" id="cdk-time-seep.TimeSleep.Initializer"></a>

```typescript
import { TimeSleep } from 'cdk-time-seep'

new TimeSleep(scope: Construct, id: string, props: TimeSleepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-time-seep.TimeSleep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-time-seep.TimeSleep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-time-seep.TimeSleep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-time-seep.TimeSleepProps">TimeSleepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-time-seep.TimeSleep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-time-seep.TimeSleep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-time-seep.TimeSleep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-time-seep.TimeSleepProps">TimeSleepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-time-seep.TimeSleep.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-time-seep.TimeSleep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-time-seep.TimeSleep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-time-seep.TimeSleep.isConstruct"></a>

```typescript
import { TimeSleep } from 'cdk-time-seep'

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

###### `x`<sup>Required</sup> <a name="x" id="cdk-time-seep.TimeSleep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-time-seep.TimeSleep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-time-seep.TimeSleep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### TimeSleepProps <a name="TimeSleepProps" id="cdk-time-seep.TimeSleepProps"></a>

#### Initializer <a name="Initializer" id="cdk-time-seep.TimeSleepProps.Initializer"></a>

```typescript
import { TimeSleepProps } from 'cdk-time-seep'

const timeSleepProps: TimeSleepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-time-seep.TimeSleepProps.property.createDuration">createDuration</a></code> | <code>aws-cdk-lib.Duration</code> | The duration to sleep when this resource is created Currently it is limited up to 15 mins. |
| <code><a href="#cdk-time-seep.TimeSleepProps.property.destroyDuration">destroyDuration</a></code> | <code>aws-cdk-lib.Duration</code> | The duration to sleep when this resource is deleted Currently it is limited up to 15 mins. |

---

##### `createDuration`<sup>Optional</sup> <a name="createDuration" id="cdk-time-seep.TimeSleepProps.property.createDuration"></a>

```typescript
public readonly createDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* no sleep (0 seconds)

The duration to sleep when this resource is created Currently it is limited up to 15 mins.

---

##### `destroyDuration`<sup>Optional</sup> <a name="destroyDuration" id="cdk-time-seep.TimeSleepProps.property.destroyDuration"></a>

```typescript
public readonly destroyDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* no sleep (0 seconds)

The duration to sleep when this resource is deleted Currently it is limited up to 15 mins.

---



