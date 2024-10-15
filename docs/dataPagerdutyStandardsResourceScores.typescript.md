# `dataPagerdutyStandardsResourceScores` Submodule <a name="`dataPagerdutyStandardsResourceScores` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyStandardsResourceScores <a name="DataPagerdutyStandardsResourceScores" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/data-sources/standards_resource_scores pagerduty_standards_resource_scores}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.Initializer"></a>

```typescript
import { dataPagerdutyStandardsResourceScores } from '@cdktf/provider-pagerduty'

new dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores(scope: Construct, id: string, config: DataPagerdutyStandardsResourceScoresConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig">DataPagerdutyStandardsResourceScoresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig">DataPagerdutyStandardsResourceScoresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyStandardsResourceScores resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.isConstruct"></a>

```typescript
import { dataPagerdutyStandardsResourceScores } from '@cdktf/provider-pagerduty'

dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.isTerraformElement"></a>

```typescript
import { dataPagerdutyStandardsResourceScores } from '@cdktf/provider-pagerduty'

dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.isTerraformDataSource"></a>

```typescript
import { dataPagerdutyStandardsResourceScores } from '@cdktf/provider-pagerduty'

dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.generateConfigForImport"></a>

```typescript
import { dataPagerdutyStandardsResourceScores } from '@cdktf/provider-pagerduty'

dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPagerdutyStandardsResourceScores resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyStandardsResourceScores to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyStandardsResourceScores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/data-sources/standards_resource_scores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyStandardsResourceScores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.score">score</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference">DataPagerdutyStandardsResourceScoresScoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.standards">standards</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList">DataPagerdutyStandardsResourceScoresStandardsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.score"></a>

```typescript
public readonly score: DataPagerdutyStandardsResourceScoresScoreOutputReference;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference">DataPagerdutyStandardsResourceScoresScoreOutputReference</a>

---

##### `standards`<sup>Required</sup> <a name="standards" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.standards"></a>

```typescript
public readonly standards: DataPagerdutyStandardsResourceScoresStandardsList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList">DataPagerdutyStandardsResourceScoresStandardsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScores.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyStandardsResourceScoresConfig <a name="DataPagerdutyStandardsResourceScoresConfig" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.Initializer"></a>

```typescript
import { dataPagerdutyStandardsResourceScores } from '@cdktf/provider-pagerduty'

const dataPagerdutyStandardsResourceScoresConfig: dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/data-sources/standards_resource_scores#id DataPagerdutyStandardsResourceScores#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/data-sources/standards_resource_scores#resource_type DataPagerdutyStandardsResourceScores#resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/data-sources/standards_resource_scores#id DataPagerdutyStandardsResourceScores#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/data-sources/standards_resource_scores#resource_type DataPagerdutyStandardsResourceScores#resource_type}.

---

### DataPagerdutyStandardsResourceScoresScore <a name="DataPagerdutyStandardsResourceScoresScore" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScore.Initializer"></a>

```typescript
import { dataPagerdutyStandardsResourceScores } from '@cdktf/provider-pagerduty'

const dataPagerdutyStandardsResourceScoresScore: dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScore = { ... }
```


### DataPagerdutyStandardsResourceScoresStandards <a name="DataPagerdutyStandardsResourceScoresStandards" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandards"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandards.Initializer"></a>

```typescript
import { dataPagerdutyStandardsResourceScores } from '@cdktf/provider-pagerduty'

const dataPagerdutyStandardsResourceScoresStandards: dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandards = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyStandardsResourceScoresScoreOutputReference <a name="DataPagerdutyStandardsResourceScoresScoreOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyStandardsResourceScores } from '@cdktf/provider-pagerduty'

new dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.property.passing">passing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.property.total">total</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScore">DataPagerdutyStandardsResourceScoresScore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passing`<sup>Required</sup> <a name="passing" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.property.passing"></a>

```typescript
public readonly passing: number;
```

- *Type:* number

---

##### `total`<sup>Required</sup> <a name="total" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.property.total"></a>

```typescript
public readonly total: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPagerdutyStandardsResourceScoresScore;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresScore">DataPagerdutyStandardsResourceScoresScore</a>

---


### DataPagerdutyStandardsResourceScoresStandardsList <a name="DataPagerdutyStandardsResourceScoresStandardsList" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.Initializer"></a>

```typescript
import { dataPagerdutyStandardsResourceScores } from '@cdktf/provider-pagerduty'

new dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.get"></a>

```typescript
public get(index: number): DataPagerdutyStandardsResourceScoresStandardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataPagerdutyStandardsResourceScoresStandardsOutputReference <a name="DataPagerdutyStandardsResourceScoresStandardsOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyStandardsResourceScores } from '@cdktf/provider-pagerduty'

new dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.pass">pass</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandards">DataPagerdutyStandardsResourceScoresStandards</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pass`<sup>Required</sup> <a name="pass" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.pass"></a>

```typescript
public readonly pass: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandardsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPagerdutyStandardsResourceScoresStandards;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourceScores.DataPagerdutyStandardsResourceScoresStandards">DataPagerdutyStandardsResourceScoresStandards</a>

---



