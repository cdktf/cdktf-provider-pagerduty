# `dataPagerdutyAutomationActionsRunner` Submodule <a name="`dataPagerdutyAutomationActionsRunner` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyAutomationActionsRunner <a name="DataPagerdutyAutomationActionsRunner" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/data-sources/automation_actions_runner pagerduty_automation_actions_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer"></a>

```typescript
import { dataPagerdutyAutomationActionsRunner } from '@cdktf/provider-pagerduty'

new dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner(scope: Construct, id: string, config: DataPagerdutyAutomationActionsRunnerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig">DataPagerdutyAutomationActionsRunnerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig">DataPagerdutyAutomationActionsRunnerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetLastSeen">resetLastSeen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetRunbookBaseUri">resetRunbookBaseUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLastSeen` <a name="resetLastSeen" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetLastSeen"></a>

```typescript
public resetLastSeen(): void
```

##### `resetRunbookBaseUri` <a name="resetRunbookBaseUri" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetRunbookBaseUri"></a>

```typescript
public resetRunbookBaseUri(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyAutomationActionsRunner resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isConstruct"></a>

```typescript
import { dataPagerdutyAutomationActionsRunner } from '@cdktf/provider-pagerduty'

dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformElement"></a>

```typescript
import { dataPagerdutyAutomationActionsRunner } from '@cdktf/provider-pagerduty'

dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformDataSource"></a>

```typescript
import { dataPagerdutyAutomationActionsRunner } from '@cdktf/provider-pagerduty'

dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport"></a>

```typescript
import { dataPagerdutyAutomationActionsRunner } from '@cdktf/provider-pagerduty'

dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataPagerdutyAutomationActionsRunner resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyAutomationActionsRunner to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyAutomationActionsRunner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/data-sources/automation_actions_runner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyAutomationActionsRunner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.runnerType">runnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.lastSeenInput">lastSeenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.runbookBaseUriInput">runbookBaseUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.lastSeen">lastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.runbookBaseUri">runbookBaseUri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runnerType`<sup>Required</sup> <a name="runnerType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.runnerType"></a>

```typescript
public readonly runnerType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastSeenInput`<sup>Optional</sup> <a name="lastSeenInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.lastSeenInput"></a>

```typescript
public readonly lastSeenInput: string;
```

- *Type:* string

---

##### `runbookBaseUriInput`<sup>Optional</sup> <a name="runbookBaseUriInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.runbookBaseUriInput"></a>

```typescript
public readonly runbookBaseUriInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastSeen`<sup>Required</sup> <a name="lastSeen" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.lastSeen"></a>

```typescript
public readonly lastSeen: string;
```

- *Type:* string

---

##### `runbookBaseUri`<sup>Required</sup> <a name="runbookBaseUri" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.runbookBaseUri"></a>

```typescript
public readonly runbookBaseUri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyAutomationActionsRunnerConfig <a name="DataPagerdutyAutomationActionsRunnerConfig" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.Initializer"></a>

```typescript
import { dataPagerdutyAutomationActionsRunner } from '@cdktf/provider-pagerduty'

const dataPagerdutyAutomationActionsRunnerConfig: dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/data-sources/automation_actions_runner#id DataPagerdutyAutomationActionsRunner#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/data-sources/automation_actions_runner#description DataPagerdutyAutomationActionsRunner#description}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.lastSeen">lastSeen</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/data-sources/automation_actions_runner#last_seen DataPagerdutyAutomationActionsRunner#last_seen}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.runbookBaseUri">runbookBaseUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/data-sources/automation_actions_runner#runbook_base_uri DataPagerdutyAutomationActionsRunner#runbook_base_uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/data-sources/automation_actions_runner#id DataPagerdutyAutomationActionsRunner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/data-sources/automation_actions_runner#description DataPagerdutyAutomationActionsRunner#description}.

---

##### `lastSeen`<sup>Optional</sup> <a name="lastSeen" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.lastSeen"></a>

```typescript
public readonly lastSeen: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/data-sources/automation_actions_runner#last_seen DataPagerdutyAutomationActionsRunner#last_seen}.

---

##### `runbookBaseUri`<sup>Optional</sup> <a name="runbookBaseUri" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.runbookBaseUri"></a>

```typescript
public readonly runbookBaseUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/data-sources/automation_actions_runner#runbook_base_uri DataPagerdutyAutomationActionsRunner#runbook_base_uri}.

---



