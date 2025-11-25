# `dataPagerdutyServiceCustomFieldValue` Submodule <a name="`dataPagerdutyServiceCustomFieldValue` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyServiceCustomFieldValue <a name="DataPagerdutyServiceCustomFieldValue" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.6/docs/data-sources/service_custom_field_value pagerduty_service_custom_field_value}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.Initializer"></a>

```typescript
import { dataPagerdutyServiceCustomFieldValue } from '@cdktf/provider-pagerduty'

new dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue(scope: Construct, id: string, config: DataPagerdutyServiceCustomFieldValueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig">DataPagerdutyServiceCustomFieldValueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig">DataPagerdutyServiceCustomFieldValueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyServiceCustomFieldValue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.isConstruct"></a>

```typescript
import { dataPagerdutyServiceCustomFieldValue } from '@cdktf/provider-pagerduty'

dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.isTerraformElement"></a>

```typescript
import { dataPagerdutyServiceCustomFieldValue } from '@cdktf/provider-pagerduty'

dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.isTerraformDataSource"></a>

```typescript
import { dataPagerdutyServiceCustomFieldValue } from '@cdktf/provider-pagerduty'

dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.generateConfigForImport"></a>

```typescript
import { dataPagerdutyServiceCustomFieldValue } from '@cdktf/provider-pagerduty'

dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPagerdutyServiceCustomFieldValue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyServiceCustomFieldValue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyServiceCustomFieldValue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.6/docs/data-sources/service_custom_field_value#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyServiceCustomFieldValue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.customFields">customFields</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList">DataPagerdutyServiceCustomFieldValueCustomFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `customFields`<sup>Required</sup> <a name="customFields" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.customFields"></a>

```typescript
public readonly customFields: DataPagerdutyServiceCustomFieldValueCustomFieldsList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList">DataPagerdutyServiceCustomFieldValueCustomFieldsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyServiceCustomFieldValueConfig <a name="DataPagerdutyServiceCustomFieldValueConfig" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.Initializer"></a>

```typescript
import { dataPagerdutyServiceCustomFieldValue } from '@cdktf/provider-pagerduty'

const dataPagerdutyServiceCustomFieldValueConfig: dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.serviceId">serviceId</a></code> | <code>string</code> | The ID of the service to get custom field values for. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ID of the service to get custom field values for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.6/docs/data-sources/service_custom_field_value#service_id DataPagerdutyServiceCustomFieldValue#service_id}

---

### DataPagerdutyServiceCustomFieldValueCustomFields <a name="DataPagerdutyServiceCustomFieldValueCustomFields" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFields.Initializer"></a>

```typescript
import { dataPagerdutyServiceCustomFieldValue } from '@cdktf/provider-pagerduty'

const dataPagerdutyServiceCustomFieldValueCustomFields: dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFields = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyServiceCustomFieldValueCustomFieldsList <a name="DataPagerdutyServiceCustomFieldValueCustomFieldsList" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.Initializer"></a>

```typescript
import { dataPagerdutyServiceCustomFieldValue } from '@cdktf/provider-pagerduty'

new dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.get"></a>

```typescript
public get(index: number): DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference <a name="DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyServiceCustomFieldValue } from '@cdktf/provider-pagerduty'

new dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.fieldType">fieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFields">DataPagerdutyServiceCustomFieldValueCustomFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fieldType`<sup>Required</sup> <a name="fieldType" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.fieldType"></a>

```typescript
public readonly fieldType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPagerdutyServiceCustomFieldValueCustomFields;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceCustomFieldValue.DataPagerdutyServiceCustomFieldValueCustomFields">DataPagerdutyServiceCustomFieldValueCustomFields</a>

---



