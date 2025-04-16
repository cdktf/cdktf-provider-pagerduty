# `dataPagerdutyEventOrchestrationIntegration` Submodule <a name="`dataPagerdutyEventOrchestrationIntegration` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyEventOrchestrationIntegrationA <a name="DataPagerdutyEventOrchestrationIntegrationA" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration pagerduty_event_orchestration_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationIntegration } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA(scope: Construct, id: string, config: DataPagerdutyEventOrchestrationIntegrationAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig">DataPagerdutyEventOrchestrationIntegrationAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig">DataPagerdutyEventOrchestrationIntegrationAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetLabel"></a>

```typescript
public resetLabel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyEventOrchestrationIntegrationA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isConstruct"></a>

```typescript
import { dataPagerdutyEventOrchestrationIntegration } from '@cdktf/provider-pagerduty'

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformElement"></a>

```typescript
import { dataPagerdutyEventOrchestrationIntegration } from '@cdktf/provider-pagerduty'

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformDataSource"></a>

```typescript
import { dataPagerdutyEventOrchestrationIntegration } from '@cdktf/provider-pagerduty'

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport"></a>

```typescript
import { dataPagerdutyEventOrchestrationIntegration } from '@cdktf/provider-pagerduty'

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPagerdutyEventOrchestrationIntegrationA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyEventOrchestrationIntegrationA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyEventOrchestrationIntegrationA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyEventOrchestrationIntegrationA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList">DataPagerdutyEventOrchestrationIntegrationParametersAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.eventOrchestrationInput">eventOrchestrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.eventOrchestration">eventOrchestration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.label">label</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.parameters"></a>

```typescript
public readonly parameters: DataPagerdutyEventOrchestrationIntegrationParametersAList;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList">DataPagerdutyEventOrchestrationIntegrationParametersAList</a>

---

##### `eventOrchestrationInput`<sup>Optional</sup> <a name="eventOrchestrationInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.eventOrchestrationInput"></a>

```typescript
public readonly eventOrchestrationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `eventOrchestration`<sup>Required</sup> <a name="eventOrchestration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.eventOrchestration"></a>

```typescript
public readonly eventOrchestration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyEventOrchestrationIntegrationAConfig <a name="DataPagerdutyEventOrchestrationIntegrationAConfig" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationIntegration } from '@cdktf/provider-pagerduty'

const dataPagerdutyEventOrchestrationIntegrationAConfig: dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.eventOrchestration">eventOrchestration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration#event_orchestration DataPagerdutyEventOrchestrationIntegrationA#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration#id DataPagerdutyEventOrchestrationIntegrationA#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration#label DataPagerdutyEventOrchestrationIntegrationA#label}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventOrchestration`<sup>Required</sup> <a name="eventOrchestration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.eventOrchestration"></a>

```typescript
public readonly eventOrchestration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration#event_orchestration DataPagerdutyEventOrchestrationIntegrationA#event_orchestration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration#id DataPagerdutyEventOrchestrationIntegrationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.0/docs/data-sources/event_orchestration_integration#label DataPagerdutyEventOrchestrationIntegrationA#label}.

---

### DataPagerdutyEventOrchestrationIntegrationParametersA <a name="DataPagerdutyEventOrchestrationIntegrationParametersA" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationIntegration } from '@cdktf/provider-pagerduty'

const dataPagerdutyEventOrchestrationIntegrationParametersA: dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyEventOrchestrationIntegrationParametersAList <a name="DataPagerdutyEventOrchestrationIntegrationParametersAList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationIntegration } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.get"></a>

```typescript
public get(index: number): DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference <a name="DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer"></a>

```typescript
import { dataPagerdutyEventOrchestrationIntegration } from '@cdktf/provider-pagerduty'

new dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.routingKey">routingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA">DataPagerdutyEventOrchestrationIntegrationParametersA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `routingKey`<sup>Required</sup> <a name="routingKey" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.routingKey"></a>

```typescript
public readonly routingKey: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataPagerdutyEventOrchestrationIntegrationParametersA;
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA">DataPagerdutyEventOrchestrationIntegrationParametersA</a>

---



