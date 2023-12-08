# `tagAssignment` Submodule <a name="`tagAssignment` Submodule" id="@cdktf/provider-pagerduty.tagAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagAssignment <a name="TagAssignment" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.3.0/docs/resources/tag_assignment pagerduty_tag_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.Initializer"></a>

```typescript
import { tagAssignment } from '@cdktf/provider-pagerduty'

new tagAssignment.TagAssignment(scope: Construct, id: string, config: TagAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig">TagAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig">TagAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TagAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.isConstruct"></a>

```typescript
import { tagAssignment } from '@cdktf/provider-pagerduty'

tagAssignment.TagAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.isTerraformElement"></a>

```typescript
import { tagAssignment } from '@cdktf/provider-pagerduty'

tagAssignment.TagAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.isTerraformResource"></a>

```typescript
import { tagAssignment } from '@cdktf/provider-pagerduty'

tagAssignment.TagAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.generateConfigForImport"></a>

```typescript
import { tagAssignment } from '@cdktf/provider-pagerduty'

tagAssignment.TagAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TagAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TagAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TagAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.3.0/docs/resources/tag_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TagAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.tagIdInput">tagIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.tagId">tagId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagIdInput`<sup>Optional</sup> <a name="tagIdInput" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.tagIdInput"></a>

```typescript
public readonly tagIdInput: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagId`<sup>Required</sup> <a name="tagId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.tagId"></a>

```typescript
public readonly tagId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TagAssignmentConfig <a name="TagAssignmentConfig" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.Initializer"></a>

```typescript
import { tagAssignment } from '@cdktf/provider-pagerduty'

const tagAssignmentConfig: tagAssignment.TagAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.entityId">entityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.3.0/docs/resources/tag_assignment#entity_id TagAssignment#entity_id}. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.entityType">entityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.3.0/docs/resources/tag_assignment#entity_type TagAssignment#entity_type}. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.tagId">tagId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.3.0/docs/resources/tag_assignment#tag_id TagAssignment#tag_id}. |
| <code><a href="#@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.3.0/docs/resources/tag_assignment#id TagAssignment#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.3.0/docs/resources/tag_assignment#entity_id TagAssignment#entity_id}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.3.0/docs/resources/tag_assignment#entity_type TagAssignment#entity_type}.

---

##### `tagId`<sup>Required</sup> <a name="tagId" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.tagId"></a>

```typescript
public readonly tagId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.3.0/docs/resources/tag_assignment#tag_id TagAssignment#tag_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.tagAssignment.TagAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.3.0/docs/resources/tag_assignment#id TagAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



