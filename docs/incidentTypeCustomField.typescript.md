# `incidentTypeCustomField` Submodule <a name="`incidentTypeCustomField` Submodule" id="@cdktf/provider-pagerduty.incidentTypeCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentTypeCustomField <a name="IncidentTypeCustomField" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field pagerduty_incident_type_custom_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer"></a>

```typescript
import { incidentTypeCustomField } from '@cdktf/provider-pagerduty'

new incidentTypeCustomField.IncidentTypeCustomField(scope: Construct, id: string, config: IncidentTypeCustomFieldConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig">IncidentTypeCustomFieldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig">IncidentTypeCustomFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldOptions">resetFieldOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldType">resetFieldType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFieldOptions` <a name="resetFieldOptions" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldOptions"></a>

```typescript
public resetFieldOptions(): void
```

##### `resetFieldType` <a name="resetFieldType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldType"></a>

```typescript
public resetFieldType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IncidentTypeCustomField resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isConstruct"></a>

```typescript
import { incidentTypeCustomField } from '@cdktf/provider-pagerduty'

incidentTypeCustomField.IncidentTypeCustomField.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement"></a>

```typescript
import { incidentTypeCustomField } from '@cdktf/provider-pagerduty'

incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource"></a>

```typescript
import { incidentTypeCustomField } from '@cdktf/provider-pagerduty'

incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport"></a>

```typescript
import { incidentTypeCustomField } from '@cdktf/provider-pagerduty'

incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IncidentTypeCustomField resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentTypeCustomField to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentTypeCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IncidentTypeCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.selfAttribute">selfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptionsInput">fieldOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldTypeInput">fieldTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentTypeInput">incidentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptions">fieldOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldType">fieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentType">incidentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fieldOptionsInput`<sup>Optional</sup> <a name="fieldOptionsInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptionsInput"></a>

```typescript
public readonly fieldOptionsInput: string[];
```

- *Type:* string[]

---

##### `fieldTypeInput`<sup>Optional</sup> <a name="fieldTypeInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldTypeInput"></a>

```typescript
public readonly fieldTypeInput: string;
```

- *Type:* string

---

##### `incidentTypeInput`<sup>Optional</sup> <a name="incidentTypeInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentTypeInput"></a>

```typescript
public readonly incidentTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fieldOptions`<sup>Required</sup> <a name="fieldOptions" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptions"></a>

```typescript
public readonly fieldOptions: string[];
```

- *Type:* string[]

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldType"></a>

```typescript
public readonly fieldType: string;
```

- *Type:* string

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentType"></a>

```typescript
public readonly incidentType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentTypeCustomFieldConfig <a name="IncidentTypeCustomFieldConfig" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.Initializer"></a>

```typescript
import { incidentTypeCustomField } from '@cdktf/provider-pagerduty'

const incidentTypeCustomFieldConfig: incidentTypeCustomField.IncidentTypeCustomFieldConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#data_type IncidentTypeCustomField#data_type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#display_name IncidentTypeCustomField#display_name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.incidentType">incidentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#incident_type IncidentTypeCustomField#incident_type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#name IncidentTypeCustomField#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#default_value IncidentTypeCustomField#default_value}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#description IncidentTypeCustomField#description}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#enabled IncidentTypeCustomField#enabled}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldOptions">fieldOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#field_options IncidentTypeCustomField#field_options}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldType">fieldType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#field_type IncidentTypeCustomField#field_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#data_type IncidentTypeCustomField#data_type}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#display_name IncidentTypeCustomField#display_name}.

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.incidentType"></a>

```typescript
public readonly incidentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#incident_type IncidentTypeCustomField#incident_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#name IncidentTypeCustomField#name}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#default_value IncidentTypeCustomField#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#description IncidentTypeCustomField#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#enabled IncidentTypeCustomField#enabled}.

---

##### `fieldOptions`<sup>Optional</sup> <a name="fieldOptions" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldOptions"></a>

```typescript
public readonly fieldOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#field_options IncidentTypeCustomField#field_options}.

---

##### `fieldType`<sup>Optional</sup> <a name="fieldType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldType"></a>

```typescript
public readonly fieldType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/incident_type_custom_field#field_type IncidentTypeCustomField#field_type}.

---



