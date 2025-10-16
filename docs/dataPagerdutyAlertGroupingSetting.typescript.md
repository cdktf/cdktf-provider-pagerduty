# `dataPagerdutyAlertGroupingSetting` Submodule <a name="`dataPagerdutyAlertGroupingSetting` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyAlertGroupingSetting <a name="DataPagerdutyAlertGroupingSetting" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/alert_grouping_setting pagerduty_alert_grouping_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer"></a>

```typescript
import { dataPagerdutyAlertGroupingSetting } from '@cdktf/provider-pagerduty'

new dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting(scope: Construct, id: string, config: DataPagerdutyAlertGroupingSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig">DataPagerdutyAlertGroupingSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig">DataPagerdutyAlertGroupingSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyAlertGroupingSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isConstruct"></a>

```typescript
import { dataPagerdutyAlertGroupingSetting } from '@cdktf/provider-pagerduty'

dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformElement"></a>

```typescript
import { dataPagerdutyAlertGroupingSetting } from '@cdktf/provider-pagerduty'

dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformDataSource"></a>

```typescript
import { dataPagerdutyAlertGroupingSetting } from '@cdktf/provider-pagerduty'

dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport"></a>

```typescript
import { dataPagerdutyAlertGroupingSetting } from '@cdktf/provider-pagerduty'

dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPagerdutyAlertGroupingSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyAlertGroupingSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyAlertGroupingSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/alert_grouping_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyAlertGroupingSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference">DataPagerdutyAlertGroupingSettingConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.services">services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.config"></a>

```typescript
public readonly config: DataPagerdutyAlertGroupingSettingConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference">DataPagerdutyAlertGroupingSettingConfigAOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyAlertGroupingSettingConfig <a name="DataPagerdutyAlertGroupingSettingConfig" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.Initializer"></a>

```typescript
import { dataPagerdutyAlertGroupingSetting } from '@cdktf/provider-pagerduty'

const dataPagerdutyAlertGroupingSettingConfig: dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/alert_grouping_setting#name DataPagerdutyAlertGroupingSetting#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/alert_grouping_setting#name DataPagerdutyAlertGroupingSetting#name}.

---

### DataPagerdutyAlertGroupingSettingConfigA <a name="DataPagerdutyAlertGroupingSettingConfigA" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA.Initializer"></a>

```typescript
import { dataPagerdutyAlertGroupingSetting } from '@cdktf/provider-pagerduty'

const dataPagerdutyAlertGroupingSettingConfigA: dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyAlertGroupingSettingConfigAOutputReference <a name="DataPagerdutyAlertGroupingSettingConfigAOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyAlertGroupingSetting } from '@cdktf/provider-pagerduty'

new dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.aggregate">aggregate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.iagFields">iagFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.timeWindow">timeWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA">DataPagerdutyAlertGroupingSettingConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregate`<sup>Required</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.aggregate"></a>

```typescript
public readonly aggregate: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `iagFields`<sup>Required</sup> <a name="iagFields" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.iagFields"></a>

```typescript
public readonly iagFields: string[];
```

- *Type:* string[]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.timeWindow"></a>

```typescript
public readonly timeWindow: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataPagerdutyAlertGroupingSettingConfigA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA">DataPagerdutyAlertGroupingSettingConfigA</a>

---



