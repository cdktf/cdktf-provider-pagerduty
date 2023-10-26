# `data_pagerduty_automation_actions_runner`

Refer to the Terraform Registory for docs: [`data_pagerduty_automation_actions_runner`](https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.0/docs/data-sources/automation_actions_runner).

# `dataPagerdutyAutomationActionsRunner` Submodule <a name="`dataPagerdutyAutomationActionsRunner` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyAutomationActionsRunner <a name="DataPagerdutyAutomationActionsRunner" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.0/docs/data-sources/automation_actions_runner pagerduty_automation_actions_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyAutomationActionsRunner(Construct Scope, string Id, DataPagerdutyAutomationActionsRunnerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig">DataPagerdutyAutomationActionsRunnerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig">DataPagerdutyAutomationActionsRunnerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetLastSeen">ResetLastSeen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetRunbookBaseUri">ResetRunbookBaseUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLastSeen` <a name="ResetLastSeen" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetLastSeen"></a>

```csharp
private void ResetLastSeen()
```

##### `ResetRunbookBaseUri` <a name="ResetRunbookBaseUri" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.resetRunbookBaseUri"></a>

```csharp
private void ResetRunbookBaseUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyAutomationActionsRunner resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

DataPagerdutyAutomationActionsRunner.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

DataPagerdutyAutomationActionsRunner.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

DataPagerdutyAutomationActionsRunner.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

DataPagerdutyAutomationActionsRunner.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataPagerdutyAutomationActionsRunner resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyAutomationActionsRunner to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyAutomationActionsRunner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.0/docs/data-sources/automation_actions_runner#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyAutomationActionsRunner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.runnerType">RunnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.lastSeenInput">LastSeenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.runbookBaseUriInput">RunbookBaseUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.lastSeen">LastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.runbookBaseUri">RunbookBaseUri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunnerType`<sup>Required</sup> <a name="RunnerType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.runnerType"></a>

```csharp
public string RunnerType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LastSeenInput`<sup>Optional</sup> <a name="LastSeenInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.lastSeenInput"></a>

```csharp
public string LastSeenInput { get; }
```

- *Type:* string

---

##### `RunbookBaseUriInput`<sup>Optional</sup> <a name="RunbookBaseUriInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.runbookBaseUriInput"></a>

```csharp
public string RunbookBaseUriInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastSeen`<sup>Required</sup> <a name="LastSeen" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.lastSeen"></a>

```csharp
public string LastSeen { get; }
```

- *Type:* string

---

##### `RunbookBaseUri`<sup>Required</sup> <a name="RunbookBaseUri" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.runbookBaseUri"></a>

```csharp
public string RunbookBaseUri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunner.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyAutomationActionsRunnerConfig <a name="DataPagerdutyAutomationActionsRunnerConfig" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyAutomationActionsRunnerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id,
    string Description = null,
    string LastSeen = null,
    string RunbookBaseUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.0/docs/data-sources/automation_actions_runner#id DataPagerdutyAutomationActionsRunner#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.0/docs/data-sources/automation_actions_runner#description DataPagerdutyAutomationActionsRunner#description}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.lastSeen">LastSeen</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.0/docs/data-sources/automation_actions_runner#last_seen DataPagerdutyAutomationActionsRunner#last_seen}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.runbookBaseUri">RunbookBaseUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.0/docs/data-sources/automation_actions_runner#runbook_base_uri DataPagerdutyAutomationActionsRunner#runbook_base_uri}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.0/docs/data-sources/automation_actions_runner#id DataPagerdutyAutomationActionsRunner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.0/docs/data-sources/automation_actions_runner#description DataPagerdutyAutomationActionsRunner#description}.

---

##### `LastSeen`<sup>Optional</sup> <a name="LastSeen" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.lastSeen"></a>

```csharp
public string LastSeen { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.0/docs/data-sources/automation_actions_runner#last_seen DataPagerdutyAutomationActionsRunner#last_seen}.

---

##### `RunbookBaseUri`<sup>Optional</sup> <a name="RunbookBaseUri" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsRunner.DataPagerdutyAutomationActionsRunnerConfig.property.runbookBaseUri"></a>

```csharp
public string RunbookBaseUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.1.0/docs/data-sources/automation_actions_runner#runbook_base_uri DataPagerdutyAutomationActionsRunner#runbook_base_uri}.

---



