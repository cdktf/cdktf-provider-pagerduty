# `escalationPolicy` Submodule <a name="`escalationPolicy` Submodule" id="@cdktf/provider-pagerduty.escalationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EscalationPolicy <a name="EscalationPolicy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy pagerduty_escalation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

new escalationPolicy.EscalationPolicy(scope: Construct, id: string, config: EscalationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig">EscalationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig">EscalationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetNumLoops">resetNumLoops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.putRule"></a>

```typescript
public putRule(value: IResolvable | EscalationPolicyRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNumLoops` <a name="resetNumLoops" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetNumLoops"></a>

```typescript
public resetNumLoops(): void
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetTeams"></a>

```typescript
public resetTeams(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EscalationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isConstruct"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

escalationPolicy.EscalationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformElement"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

escalationPolicy.EscalationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformResource"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

escalationPolicy.EscalationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

escalationPolicy.EscalationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EscalationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EscalationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EscalationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EscalationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList">EscalationPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.numLoopsInput">numLoopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.teamsInput">teamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.numLoops">numLoops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.teams">teams</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.rule"></a>

```typescript
public readonly rule: EscalationPolicyRuleList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList">EscalationPolicyRuleList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `numLoopsInput`<sup>Optional</sup> <a name="numLoopsInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.numLoopsInput"></a>

```typescript
public readonly numLoopsInput: number;
```

- *Type:* number

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | EscalationPolicyRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>[]

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.teamsInput"></a>

```typescript
public readonly teamsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numLoops`<sup>Required</sup> <a name="numLoops" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.numLoops"></a>

```typescript
public readonly numLoops: number;
```

- *Type:* number

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EscalationPolicyConfig <a name="EscalationPolicyConfig" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.Initializer"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

const escalationPolicyConfig: escalationPolicy.EscalationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#name EscalationPolicy#name}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#description EscalationPolicy#description}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#id EscalationPolicy#id}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.numLoops">numLoops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#num_loops EscalationPolicy#num_loops}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.teams">teams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#teams EscalationPolicy#teams}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#name EscalationPolicy#name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | EscalationPolicyRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#rule EscalationPolicy#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#description EscalationPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#id EscalationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `numLoops`<sup>Optional</sup> <a name="numLoops" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.numLoops"></a>

```typescript
public readonly numLoops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#num_loops EscalationPolicy#num_loops}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#teams EscalationPolicy#teams}.

---

### EscalationPolicyRule <a name="EscalationPolicyRule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.Initializer"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

const escalationPolicyRule: escalationPolicy.EscalationPolicyRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.escalationDelayInMinutes">escalationDelayInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#escalation_delay_in_minutes EscalationPolicy#escalation_delay_in_minutes}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.target">target</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>[]</code> | target block. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.escalationRuleAssignmentStrategy">escalationRuleAssignmentStrategy</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a></code> | escalation_rule_assignment_strategy block. |

---

##### `escalationDelayInMinutes`<sup>Required</sup> <a name="escalationDelayInMinutes" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.escalationDelayInMinutes"></a>

```typescript
public readonly escalationDelayInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#escalation_delay_in_minutes EscalationPolicy#escalation_delay_in_minutes}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.target"></a>

```typescript
public readonly target: IResolvable | EscalationPolicyRuleTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>[]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#target EscalationPolicy#target}

---

##### `escalationRuleAssignmentStrategy`<sup>Optional</sup> <a name="escalationRuleAssignmentStrategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.escalationRuleAssignmentStrategy"></a>

```typescript
public readonly escalationRuleAssignmentStrategy: EscalationPolicyRuleEscalationRuleAssignmentStrategy;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a>

escalation_rule_assignment_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#escalation_rule_assignment_strategy EscalationPolicy#escalation_rule_assignment_strategy}

---

### EscalationPolicyRuleEscalationRuleAssignmentStrategy <a name="EscalationPolicyRuleEscalationRuleAssignmentStrategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy.Initializer"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

const escalationPolicyRuleEscalationRuleAssignmentStrategy: escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#type EscalationPolicy#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#type EscalationPolicy#type}.

---

### EscalationPolicyRuleTarget <a name="EscalationPolicyRuleTarget" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.Initializer"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

const escalationPolicyRuleTarget: escalationPolicy.EscalationPolicyRuleTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#id EscalationPolicy#id}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#type EscalationPolicy#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#id EscalationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/resources/escalation_policy#type EscalationPolicy#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference <a name="EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

new escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EscalationPolicyRuleEscalationRuleAssignmentStrategy;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a>

---


### EscalationPolicyRuleList <a name="EscalationPolicyRuleList" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

new escalationPolicy.EscalationPolicyRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.get"></a>

```typescript
public get(index: number): EscalationPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EscalationPolicyRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>[]

---


### EscalationPolicyRuleOutputReference <a name="EscalationPolicyRuleOutputReference" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

new escalationPolicy.EscalationPolicyRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putEscalationRuleAssignmentStrategy">putEscalationRuleAssignmentStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resetEscalationRuleAssignmentStrategy">resetEscalationRuleAssignmentStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEscalationRuleAssignmentStrategy` <a name="putEscalationRuleAssignmentStrategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putEscalationRuleAssignmentStrategy"></a>

```typescript
public putEscalationRuleAssignmentStrategy(value: EscalationPolicyRuleEscalationRuleAssignmentStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putEscalationRuleAssignmentStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putTarget"></a>

```typescript
public putTarget(value: IResolvable | EscalationPolicyRuleTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>[]

---

##### `resetEscalationRuleAssignmentStrategy` <a name="resetEscalationRuleAssignmentStrategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resetEscalationRuleAssignmentStrategy"></a>

```typescript
public resetEscalationRuleAssignmentStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationRuleAssignmentStrategy">escalationRuleAssignmentStrategy</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference">EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList">EscalationPolicyRuleTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationDelayInMinutesInput">escalationDelayInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationRuleAssignmentStrategyInput">escalationRuleAssignmentStrategyInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.targetInput">targetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationDelayInMinutes">escalationDelayInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `escalationRuleAssignmentStrategy`<sup>Required</sup> <a name="escalationRuleAssignmentStrategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationRuleAssignmentStrategy"></a>

```typescript
public readonly escalationRuleAssignmentStrategy: EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference">EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.target"></a>

```typescript
public readonly target: EscalationPolicyRuleTargetList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList">EscalationPolicyRuleTargetList</a>

---

##### `escalationDelayInMinutesInput`<sup>Optional</sup> <a name="escalationDelayInMinutesInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationDelayInMinutesInput"></a>

```typescript
public readonly escalationDelayInMinutesInput: number;
```

- *Type:* number

---

##### `escalationRuleAssignmentStrategyInput`<sup>Optional</sup> <a name="escalationRuleAssignmentStrategyInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationRuleAssignmentStrategyInput"></a>

```typescript
public readonly escalationRuleAssignmentStrategyInput: EscalationPolicyRuleEscalationRuleAssignmentStrategy;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | EscalationPolicyRuleTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>[]

---

##### `escalationDelayInMinutes`<sup>Required</sup> <a name="escalationDelayInMinutes" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationDelayInMinutes"></a>

```typescript
public readonly escalationDelayInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EscalationPolicyRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>

---


### EscalationPolicyRuleTargetList <a name="EscalationPolicyRuleTargetList" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

new escalationPolicy.EscalationPolicyRuleTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.get"></a>

```typescript
public get(index: number): EscalationPolicyRuleTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EscalationPolicyRuleTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>[]

---


### EscalationPolicyRuleTargetOutputReference <a name="EscalationPolicyRuleTargetOutputReference" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer"></a>

```typescript
import { escalationPolicy } from '@cdktf/provider-pagerduty'

new escalationPolicy.EscalationPolicyRuleTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EscalationPolicyRuleTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>

---



