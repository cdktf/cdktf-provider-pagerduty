# `dataPagerdutyEventOrchestrationServiceCacheVariable` Submodule <a name="`dataPagerdutyEventOrchestrationServiceCacheVariable` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyEventOrchestrationServiceCacheVariable <a name="DataPagerdutyEventOrchestrationServiceCacheVariable" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/data-sources/event_orchestration_service_cache_variable pagerduty_event_orchestration_service_cache_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable(scope: Construct, id: string, config: DataPagerdutyEventOrchestrationServiceCacheVariableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig">DataPagerdutyEventOrchestrationServiceCacheVariableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig">DataPagerdutyEventOrchestrationServiceCacheVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyEventOrchestrationServiceCacheVariable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isConstruct"></a>

```typescript
import { dataPagerdutyEventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformElement"></a>

```typescript
import { dataPagerdutyEventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformDataSource"></a>

```typescript
import { dataPagerdutyEventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport"></a>

```typescript
import { dataPagerdutyEventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPagerdutyEventOrchestrationServiceCacheVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyEventOrchestrationServiceCacheVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyEventOrchestrationServiceCacheVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/data-sources/event_orchestration_service_cache_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyEventOrchestrationServiceCacheVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList">DataPagerdutyEventOrchestrationServiceCacheVariableConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList">DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.condition"></a>

```typescript
public readonly condition: DataPagerdutyEventOrchestrationServiceCacheVariableConditionList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList">DataPagerdutyEventOrchestrationServiceCacheVariableConditionList</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.configuration"></a>

```typescript
public readonly configuration: DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList">DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyEventOrchestrationServiceCacheVariableCondition <a name="DataPagerdutyEventOrchestrationServiceCacheVariableCondition" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

const dataPagerdutyEventOrchestrationServiceCacheVariableCondition: dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition = { ... }
```


### DataPagerdutyEventOrchestrationServiceCacheVariableConfig <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConfig" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

const dataPagerdutyEventOrchestrationServiceCacheVariableConfig: dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/data-sources/event_orchestration_service_cache_variable#service DataPagerdutyEventOrchestrationServiceCacheVariable#service}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/data-sources/event_orchestration_service_cache_variable#id DataPagerdutyEventOrchestrationServiceCacheVariable#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/data-sources/event_orchestration_service_cache_variable#name DataPagerdutyEventOrchestrationServiceCacheVariable#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/data-sources/event_orchestration_service_cache_variable#service DataPagerdutyEventOrchestrationServiceCacheVariable#service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/data-sources/event_orchestration_service_cache_variable#id DataPagerdutyEventOrchestrationServiceCacheVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/data-sources/event_orchestration_service_cache_variable#name DataPagerdutyEventOrchestrationServiceCacheVariable#name}.

---

### DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

const dataPagerdutyEventOrchestrationServiceCacheVariableConfiguration: dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyEventOrchestrationServiceCacheVariableConditionList <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConditionList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.get"></a>

```typescript
public get(index: number): DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition">DataPagerdutyEventOrchestrationServiceCacheVariableCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPagerdutyEventOrchestrationServiceCacheVariableCondition;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition">DataPagerdutyEventOrchestrationServiceCacheVariableCondition</a>

---


### DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.get"></a>

```typescript
public get(index: number): DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationServiceCacheVariable } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSeconds">ttlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration">DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `ttlSeconds`<sup>Required</sup> <a name="ttlSeconds" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSeconds"></a>

```typescript
public readonly ttlSeconds: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration">DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration</a>

---



