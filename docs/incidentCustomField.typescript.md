# `incidentCustomField` Submodule <a name="`incidentCustomField` Submodule" id="@cdktf/provider-pagerduty.incidentCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentCustomField <a name="IncidentCustomField" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field pagerduty_incident_custom_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.Initializer"></a>

```typescript
import { incidentCustomField } from '@cdktf/provider-pagerduty'

new incidentCustomField.IncidentCustomField(scope: Construct, id: string, config: IncidentCustomFieldConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig">IncidentCustomFieldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig">IncidentCustomFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IncidentCustomField resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.isConstruct"></a>

```typescript
import { incidentCustomField } from '@cdktf/provider-pagerduty'

incidentCustomField.IncidentCustomField.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.isTerraformElement"></a>

```typescript
import { incidentCustomField } from '@cdktf/provider-pagerduty'

incidentCustomField.IncidentCustomField.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.isTerraformResource"></a>

```typescript
import { incidentCustomField } from '@cdktf/provider-pagerduty'

incidentCustomField.IncidentCustomField.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.generateConfigForImport"></a>

```typescript
import { incidentCustomField } from '@cdktf/provider-pagerduty'

incidentCustomField.IncidentCustomField.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IncidentCustomField resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentCustomField to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IncidentCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.fieldTypeInput">fieldTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.fieldType">fieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fieldTypeInput`<sup>Optional</sup> <a name="fieldTypeInput" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.fieldTypeInput"></a>

```typescript
public readonly fieldTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.fieldType"></a>

```typescript
public readonly fieldType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomField.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentCustomFieldConfig <a name="IncidentCustomFieldConfig" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.Initializer"></a>

```typescript
import { incidentCustomField } from '@cdktf/provider-pagerduty'

const incidentCustomFieldConfig: incidentCustomField.IncidentCustomFieldConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#data_type IncidentCustomField#data_type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#display_name IncidentCustomField#display_name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.fieldType">fieldType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#field_type IncidentCustomField#field_type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#name IncidentCustomField#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#default_value IncidentCustomField#default_value}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#description IncidentCustomField#description}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#id IncidentCustomField#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#data_type IncidentCustomField#data_type}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#display_name IncidentCustomField#display_name}.

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.fieldType"></a>

```typescript
public readonly fieldType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#field_type IncidentCustomField#field_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#name IncidentCustomField#name}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#default_value IncidentCustomField#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#description IncidentCustomField#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentCustomField.IncidentCustomFieldConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/incident_custom_field#id IncidentCustomField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



