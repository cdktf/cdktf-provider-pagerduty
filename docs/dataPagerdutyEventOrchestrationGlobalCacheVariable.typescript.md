# `dataPagerdutyEventOrchestrationGlobalCacheVariable` Submodule <a name="`dataPagerdutyEventOrchestrationGlobalCacheVariable` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyEventOrchestrationGlobalCacheVariable <a name="DataPagerdutyEventOrchestrationGlobalCacheVariable" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/data-sources/event_orchestration_global_cache_variable pagerduty_event_orchestration_global_cache_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationGlobalCacheVariable } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable(scope: Construct, id: string, config: DataPagerdutyEventOrchestrationGlobalCacheVariableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig">DataPagerdutyEventOrchestrationGlobalCacheVariableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig">DataPagerdutyEventOrchestrationGlobalCacheVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyEventOrchestrationGlobalCacheVariable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isConstruct"></a>

```typescript
import { dataPagerdutyEventOrchestrationGlobalCacheVariable } from '@cdktf/provider-pagerduty'

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformElement"></a>

```typescript
import { dataPagerdutyEventOrchestrationGlobalCacheVariable } from '@cdktf/provider-pagerduty'

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformDataSource"></a>

```typescript
import { dataPagerdutyEventOrchestrationGlobalCacheVariable } from '@cdktf/provider-pagerduty'

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport"></a>

```typescript
import { dataPagerdutyEventOrchestrationGlobalCacheVariable } from '@cdktf/provider-pagerduty'

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPagerdutyEventOrchestrationGlobalCacheVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyEventOrchestrationGlobalCacheVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyEventOrchestrationGlobalCacheVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/data-sources/event_orchestration_global_cache_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyEventOrchestrationGlobalCacheVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList">DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList">DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.eventOrchestrationInput">eventOrchestrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.eventOrchestration">eventOrchestration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.condition"></a>

```typescript
public readonly condition: DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList">DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.configuration"></a>

```typescript
public readonly configuration: DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList">DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `eventOrchestrationInput`<sup>Optional</sup> <a name="eventOrchestrationInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.eventOrchestrationInput"></a>

```typescript
public readonly eventOrchestrationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `eventOrchestration`<sup>Required</sup> <a name="eventOrchestration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.eventOrchestration"></a>

```typescript
public readonly eventOrchestration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyEventOrchestrationGlobalCacheVariableCondition <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableCondition" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationGlobalCacheVariable } from '@cdktf/provider-pagerduty'

const dataPagerdutyEventOrchestrationGlobalCacheVariableCondition: dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition = { ... }
```


### DataPagerdutyEventOrchestrationGlobalCacheVariableConfig <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConfig" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationGlobalCacheVariable } from '@cdktf/provider-pagerduty'

const dataPagerdutyEventOrchestrationGlobalCacheVariableConfig: dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.eventOrchestration">eventOrchestration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/data-sources/event_orchestration_global_cache_variable#event_orchestration DataPagerdutyEventOrchestrationGlobalCacheVariable#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/data-sources/event_orchestration_global_cache_variable#id DataPagerdutyEventOrchestrationGlobalCacheVariable#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/data-sources/event_orchestration_global_cache_variable#name DataPagerdutyEventOrchestrationGlobalCacheVariable#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventOrchestration`<sup>Required</sup> <a name="eventOrchestration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.eventOrchestration"></a>

```typescript
public readonly eventOrchestration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/data-sources/event_orchestration_global_cache_variable#event_orchestration DataPagerdutyEventOrchestrationGlobalCacheVariable#event_orchestration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/data-sources/event_orchestration_global_cache_variable#id DataPagerdutyEventOrchestrationGlobalCacheVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/data-sources/event_orchestration_global_cache_variable#name DataPagerdutyEventOrchestrationGlobalCacheVariable#name}.

---

### DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationGlobalCacheVariable } from '@cdktf/provider-pagerduty'

const dataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration: dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationGlobalCacheVariable } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.get"></a>

```typescript
public get(index: number): DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationGlobalCacheVariable } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition">DataPagerdutyEventOrchestrationGlobalCacheVariableCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPagerdutyEventOrchestrationGlobalCacheVariableCondition;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition">DataPagerdutyEventOrchestrationGlobalCacheVariableCondition</a>

---


### DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationGlobalCacheVariable } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.get"></a>

```typescript
public get(index: number): DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationGlobalCacheVariable } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSeconds">ttlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration">DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `ttlSeconds`<sup>Required</sup> <a name="ttlSeconds" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSeconds"></a>

```typescript
public readonly ttlSeconds: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration">DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration</a>

---



