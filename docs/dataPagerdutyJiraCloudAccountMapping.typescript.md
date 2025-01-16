# `dataPagerdutyJiraCloudAccountMapping` Submodule <a name="`dataPagerdutyJiraCloudAccountMapping` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyJiraCloudAccountMapping <a name="DataPagerdutyJiraCloudAccountMapping" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/jira_cloud_account_mapping pagerduty_jira_cloud_account_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer"></a>

```typescript
import { dataPagerdutyJiraCloudAccountMapping } from '@cdktf/provider-pagerduty'

new dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping(scope: Construct, id: string, config: DataPagerdutyJiraCloudAccountMappingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig">DataPagerdutyJiraCloudAccountMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig">DataPagerdutyJiraCloudAccountMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyJiraCloudAccountMapping resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isConstruct"></a>

```typescript
import { dataPagerdutyJiraCloudAccountMapping } from '@cdktf/provider-pagerduty'

dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformElement"></a>

```typescript
import { dataPagerdutyJiraCloudAccountMapping } from '@cdktf/provider-pagerduty'

dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformDataSource"></a>

```typescript
import { dataPagerdutyJiraCloudAccountMapping } from '@cdktf/provider-pagerduty'

dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport"></a>

```typescript
import { dataPagerdutyJiraCloudAccountMapping } from '@cdktf/provider-pagerduty'

dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPagerdutyJiraCloudAccountMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyJiraCloudAccountMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyJiraCloudAccountMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/jira_cloud_account_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyJiraCloudAccountMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.subdomainInput">subdomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.subdomain">subdomain</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subdomainInput`<sup>Optional</sup> <a name="subdomainInput" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.subdomainInput"></a>

```typescript
public readonly subdomainInput: string;
```

- *Type:* string

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMapping.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyJiraCloudAccountMappingConfig <a name="DataPagerdutyJiraCloudAccountMappingConfig" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.Initializer"></a>

```typescript
import { dataPagerdutyJiraCloudAccountMapping } from '@cdktf/provider-pagerduty'

const dataPagerdutyJiraCloudAccountMappingConfig: dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.subdomain">subdomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/jira_cloud_account_mapping#subdomain DataPagerdutyJiraCloudAccountMapping#subdomain}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-pagerduty.dataPagerdutyJiraCloudAccountMapping.DataPagerdutyJiraCloudAccountMappingConfig.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/jira_cloud_account_mapping#subdomain DataPagerdutyJiraCloudAccountMapping#subdomain}.

---



