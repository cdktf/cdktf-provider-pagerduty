# `serviceDependency` Submodule <a name="`serviceDependency` Submodule" id="@cdktf/provider-pagerduty.serviceDependency"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDependency <a name="ServiceDependency" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency pagerduty_service_dependency}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.Initializer"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

new serviceDependency.ServiceDependency(scope: Construct, id: string, config: ServiceDependencyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig">ServiceDependencyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig">ServiceDependencyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.putDependency">putDependency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDependency` <a name="putDependency" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.putDependency"></a>

```typescript
public putDependency(value: ServiceDependencyDependency): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.putDependency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency">ServiceDependencyDependency</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceDependency resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.isConstruct"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

serviceDependency.ServiceDependency.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.isTerraformElement"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

serviceDependency.ServiceDependency.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.isTerraformResource"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

serviceDependency.ServiceDependency.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.generateConfigForImport"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

serviceDependency.ServiceDependency.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceDependency resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceDependency to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceDependency that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceDependency to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.dependency">dependency</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference">ServiceDependencyDependencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.dependencyInput">dependencyInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency">ServiceDependencyDependency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.dependency"></a>

```typescript
public readonly dependency: ServiceDependencyDependencyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference">ServiceDependencyDependencyOutputReference</a>

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.dependencyInput"></a>

```typescript
public readonly dependencyInput: ServiceDependencyDependency;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency">ServiceDependencyDependency</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependency.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDependencyConfig <a name="ServiceDependencyConfig" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.Initializer"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

const serviceDependencyConfig: serviceDependency.ServiceDependencyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.dependency">dependency</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency">ServiceDependencyDependency</a></code> | dependency block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#id ServiceDependency#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.dependency"></a>

```typescript
public readonly dependency: ServiceDependencyDependency;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency">ServiceDependencyDependency</a>

dependency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#dependency ServiceDependency#dependency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#id ServiceDependency#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ServiceDependencyDependency <a name="ServiceDependencyDependency" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency.Initializer"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

const serviceDependencyDependency: serviceDependency.ServiceDependencyDependency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency.property.dependentService">dependentService</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService">ServiceDependencyDependencyDependentService</a>[]</code> | dependent_service block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency.property.supportingService">supportingService</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService">ServiceDependencyDependencySupportingService</a>[]</code> | supporting_service block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#type ServiceDependency#type}. |

---

##### `dependentService`<sup>Required</sup> <a name="dependentService" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency.property.dependentService"></a>

```typescript
public readonly dependentService: IResolvable | ServiceDependencyDependencyDependentService[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService">ServiceDependencyDependencyDependentService</a>[]

dependent_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#dependent_service ServiceDependency#dependent_service}

---

##### `supportingService`<sup>Required</sup> <a name="supportingService" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency.property.supportingService"></a>

```typescript
public readonly supportingService: IResolvable | ServiceDependencyDependencySupportingService[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService">ServiceDependencyDependencySupportingService</a>[]

supporting_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#supporting_service ServiceDependency#supporting_service}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#type ServiceDependency#type}.

---

### ServiceDependencyDependencyDependentService <a name="ServiceDependencyDependencyDependentService" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService.Initializer"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

const serviceDependencyDependencyDependentService: serviceDependency.ServiceDependencyDependencyDependentService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#id ServiceDependency#id}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#type ServiceDependency#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#id ServiceDependency#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#type ServiceDependency#type}.

---

### ServiceDependencyDependencySupportingService <a name="ServiceDependencyDependencySupportingService" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService.Initializer"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

const serviceDependencyDependencySupportingService: serviceDependency.ServiceDependencyDependencySupportingService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#id ServiceDependency#id}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#type ServiceDependency#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#id ServiceDependency#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.10.1/docs/resources/service_dependency#type ServiceDependency#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceDependencyDependencyDependentServiceList <a name="ServiceDependencyDependencyDependentServiceList" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.Initializer"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

new serviceDependency.ServiceDependencyDependencyDependentServiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.get"></a>

```typescript
public get(index: number): ServiceDependencyDependencyDependentServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService">ServiceDependencyDependencyDependentService</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceDependencyDependencyDependentService[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService">ServiceDependencyDependencyDependentService</a>[]

---


### ServiceDependencyDependencyDependentServiceOutputReference <a name="ServiceDependencyDependencyDependentServiceOutputReference" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.Initializer"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

new serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService">ServiceDependencyDependencyDependentService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceDependencyDependencyDependentService;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService">ServiceDependencyDependencyDependentService</a>

---


### ServiceDependencyDependencyOutputReference <a name="ServiceDependencyDependencyOutputReference" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.Initializer"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

new serviceDependency.ServiceDependencyDependencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.putDependentService">putDependentService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.putSupportingService">putSupportingService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependentService` <a name="putDependentService" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.putDependentService"></a>

```typescript
public putDependentService(value: IResolvable | ServiceDependencyDependencyDependentService[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.putDependentService.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService">ServiceDependencyDependencyDependentService</a>[]

---

##### `putSupportingService` <a name="putSupportingService" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.putSupportingService"></a>

```typescript
public putSupportingService(value: IResolvable | ServiceDependencyDependencySupportingService[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.putSupportingService.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService">ServiceDependencyDependencySupportingService</a>[]

---

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.dependentService">dependentService</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList">ServiceDependencyDependencyDependentServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.supportingService">supportingService</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList">ServiceDependencyDependencySupportingServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.dependentServiceInput">dependentServiceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService">ServiceDependencyDependencyDependentService</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.supportingServiceInput">supportingServiceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService">ServiceDependencyDependencySupportingService</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency">ServiceDependencyDependency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependentService`<sup>Required</sup> <a name="dependentService" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.dependentService"></a>

```typescript
public readonly dependentService: ServiceDependencyDependencyDependentServiceList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentServiceList">ServiceDependencyDependencyDependentServiceList</a>

---

##### `supportingService`<sup>Required</sup> <a name="supportingService" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.supportingService"></a>

```typescript
public readonly supportingService: ServiceDependencyDependencySupportingServiceList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList">ServiceDependencyDependencySupportingServiceList</a>

---

##### `dependentServiceInput`<sup>Optional</sup> <a name="dependentServiceInput" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.dependentServiceInput"></a>

```typescript
public readonly dependentServiceInput: IResolvable | ServiceDependencyDependencyDependentService[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyDependentService">ServiceDependencyDependencyDependentService</a>[]

---

##### `supportingServiceInput`<sup>Optional</sup> <a name="supportingServiceInput" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.supportingServiceInput"></a>

```typescript
public readonly supportingServiceInput: IResolvable | ServiceDependencyDependencySupportingService[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService">ServiceDependencyDependencySupportingService</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceDependencyDependency;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependency">ServiceDependencyDependency</a>

---


### ServiceDependencyDependencySupportingServiceList <a name="ServiceDependencyDependencySupportingServiceList" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.Initializer"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

new serviceDependency.ServiceDependencyDependencySupportingServiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.get"></a>

```typescript
public get(index: number): ServiceDependencyDependencySupportingServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService">ServiceDependencyDependencySupportingService</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceDependencyDependencySupportingService[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService">ServiceDependencyDependencySupportingService</a>[]

---


### ServiceDependencyDependencySupportingServiceOutputReference <a name="ServiceDependencyDependencySupportingServiceOutputReference" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.Initializer"></a>

```typescript
import { serviceDependency } from '@cdktf/provider-pagerduty'

new serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService">ServiceDependencyDependencySupportingService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceDependencyDependencySupportingService;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.serviceDependency.ServiceDependencyDependencySupportingService">ServiceDependencyDependencySupportingService</a>

---



