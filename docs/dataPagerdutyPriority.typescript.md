# `dataPagerdutyPriority` Submodule <a name="`dataPagerdutyPriority` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyPriority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyPriority <a name="DataPagerdutyPriority" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/data-sources/priority pagerduty_priority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.Initializer"></a>

```typescript
import { dataPagerdutyPriority } from '@cdktf/provider-pagerduty'

new dataPagerdutyPriority.DataPagerdutyPriority(scope: Construct, id: string, config: DataPagerdutyPriorityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig">DataPagerdutyPriorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig">DataPagerdutyPriorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyPriority resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.isConstruct"></a>

```typescript
import { dataPagerdutyPriority } from '@cdktf/provider-pagerduty'

dataPagerdutyPriority.DataPagerdutyPriority.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.isTerraformElement"></a>

```typescript
import { dataPagerdutyPriority } from '@cdktf/provider-pagerduty'

dataPagerdutyPriority.DataPagerdutyPriority.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.isTerraformDataSource"></a>

```typescript
import { dataPagerdutyPriority } from '@cdktf/provider-pagerduty'

dataPagerdutyPriority.DataPagerdutyPriority.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.generateConfigForImport"></a>

```typescript
import { dataPagerdutyPriority } from '@cdktf/provider-pagerduty'

dataPagerdutyPriority.DataPagerdutyPriority.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPagerdutyPriority resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyPriority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyPriority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/data-sources/priority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyPriority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriority.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyPriorityConfig <a name="DataPagerdutyPriorityConfig" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.Initializer"></a>

```typescript
import { dataPagerdutyPriority } from '@cdktf/provider-pagerduty'

const dataPagerdutyPriorityConfig: dataPagerdutyPriority.DataPagerdutyPriorityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.name">name</a></code> | <code>string</code> | The name of the priority to find in the PagerDuty API. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyPriority.DataPagerdutyPriorityConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the priority to find in the PagerDuty API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/data-sources/priority#name DataPagerdutyPriority#name}

---



