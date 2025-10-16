# `dataPagerdutyIncidentTypeCustomField` Submodule <a name="`dataPagerdutyIncidentTypeCustomField` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyIncidentTypeCustomField <a name="DataPagerdutyIncidentTypeCustomField" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/incident_type_custom_field pagerduty_incident_type_custom_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer"></a>

```typescript
import { dataPagerdutyIncidentTypeCustomField } from '@cdktf/provider-pagerduty'

new dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField(scope: Construct, id: string, config: DataPagerdutyIncidentTypeCustomFieldConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig">DataPagerdutyIncidentTypeCustomFieldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig">DataPagerdutyIncidentTypeCustomFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyIncidentTypeCustomField resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct"></a>

```typescript
import { dataPagerdutyIncidentTypeCustomField } from '@cdktf/provider-pagerduty'

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement"></a>

```typescript
import { dataPagerdutyIncidentTypeCustomField } from '@cdktf/provider-pagerduty'

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource"></a>

```typescript
import { dataPagerdutyIncidentTypeCustomField } from '@cdktf/provider-pagerduty'

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport"></a>

```typescript
import { dataPagerdutyIncidentTypeCustomField } from '@cdktf/provider-pagerduty'

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPagerdutyIncidentTypeCustomField resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyIncidentTypeCustomField to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyIncidentTypeCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/incident_type_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyIncidentTypeCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldOptions">fieldOptions</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList">DataPagerdutyIncidentTypeCustomFieldFieldOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldType">fieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.selfAttribute">selfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentTypeInput">incidentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentType">incidentType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `fieldOptions`<sup>Required</sup> <a name="fieldOptions" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldOptions"></a>

```typescript
public readonly fieldOptions: DataPagerdutyIncidentTypeCustomFieldFieldOptionsList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList">DataPagerdutyIncidentTypeCustomFieldFieldOptionsList</a>

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldType"></a>

```typescript
public readonly fieldType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `incidentTypeInput`<sup>Optional</sup> <a name="incidentTypeInput" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentTypeInput"></a>

```typescript
public readonly incidentTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentType"></a>

```typescript
public readonly incidentType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyIncidentTypeCustomFieldConfig <a name="DataPagerdutyIncidentTypeCustomFieldConfig" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.Initializer"></a>

```typescript
import { dataPagerdutyIncidentTypeCustomField } from '@cdktf/provider-pagerduty'

const dataPagerdutyIncidentTypeCustomFieldConfig: dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/incident_type_custom_field#display_name DataPagerdutyIncidentTypeCustomField#display_name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.incidentType">incidentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/incident_type_custom_field#incident_type DataPagerdutyIncidentTypeCustomField#incident_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/incident_type_custom_field#display_name DataPagerdutyIncidentTypeCustomField#display_name}.

---

##### `incidentType`<sup>Required</sup> <a name="incidentType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.incidentType"></a>

```typescript
public readonly incidentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/incident_type_custom_field#incident_type DataPagerdutyIncidentTypeCustomField#incident_type}.

---

### DataPagerdutyIncidentTypeCustomFieldFieldOptions <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptions" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions.Initializer"></a>

```typescript
import { dataPagerdutyIncidentTypeCustomField } from '@cdktf/provider-pagerduty'

const dataPagerdutyIncidentTypeCustomFieldFieldOptions: dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions = { ... }
```


### DataPagerdutyIncidentTypeCustomFieldFieldOptionsData <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsData" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData.Initializer"></a>

```typescript
import { dataPagerdutyIncidentTypeCustomField } from '@cdktf/provider-pagerduty'

const dataPagerdutyIncidentTypeCustomFieldFieldOptionsData: dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyIncidentTypeCustomField } from '@cdktf/provider-pagerduty'

new dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData">DataPagerdutyIncidentTypeCustomFieldFieldOptionsData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPagerdutyIncidentTypeCustomFieldFieldOptionsData;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData">DataPagerdutyIncidentTypeCustomFieldFieldOptionsData</a>

---


### DataPagerdutyIncidentTypeCustomFieldFieldOptionsList <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsList" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer"></a>

```typescript
import { dataPagerdutyIncidentTypeCustomField } from '@cdktf/provider-pagerduty'

new dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.get"></a>

```typescript
public get(index: number): DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyIncidentTypeCustomField } from '@cdktf/provider-pagerduty'

new dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.data">data</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference">DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions">DataPagerdutyIncidentTypeCustomFieldFieldOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.data"></a>

```typescript
public readonly data: DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference">DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPagerdutyIncidentTypeCustomFieldFieldOptions;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions">DataPagerdutyIncidentTypeCustomFieldFieldOptions</a>

---



