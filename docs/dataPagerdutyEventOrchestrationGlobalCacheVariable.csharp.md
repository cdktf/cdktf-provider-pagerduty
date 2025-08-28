# `dataPagerdutyEventOrchestrationGlobalCacheVariable` Submodule <a name="`dataPagerdutyEventOrchestrationGlobalCacheVariable` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyEventOrchestrationGlobalCacheVariable <a name="DataPagerdutyEventOrchestrationGlobalCacheVariable" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/event_orchestration_global_cache_variable pagerduty_event_orchestration_global_cache_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationGlobalCacheVariable(Construct Scope, string Id, DataPagerdutyEventOrchestrationGlobalCacheVariableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig">DataPagerdutyEventOrchestrationGlobalCacheVariableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig">DataPagerdutyEventOrchestrationGlobalCacheVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyEventOrchestrationGlobalCacheVariable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

DataPagerdutyEventOrchestrationGlobalCacheVariable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

DataPagerdutyEventOrchestrationGlobalCacheVariable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

DataPagerdutyEventOrchestrationGlobalCacheVariable.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

DataPagerdutyEventOrchestrationGlobalCacheVariable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataPagerdutyEventOrchestrationGlobalCacheVariable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyEventOrchestrationGlobalCacheVariable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyEventOrchestrationGlobalCacheVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/event_orchestration_global_cache_variable#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyEventOrchestrationGlobalCacheVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList">DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList">DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.disabled">Disabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.eventOrchestrationInput">EventOrchestrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.eventOrchestration">EventOrchestration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.condition"></a>

```csharp
public DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList">DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.configuration"></a>

```csharp
public DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList">DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList</a>

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EventOrchestrationInput`<sup>Optional</sup> <a name="EventOrchestrationInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.eventOrchestrationInput"></a>

```csharp
public string EventOrchestrationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EventOrchestration`<sup>Required</sup> <a name="EventOrchestration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.eventOrchestration"></a>

```csharp
public string EventOrchestration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyEventOrchestrationGlobalCacheVariableCondition <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableCondition" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationGlobalCacheVariableCondition {

};
```


### DataPagerdutyEventOrchestrationGlobalCacheVariableConfig <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConfig" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationGlobalCacheVariableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EventOrchestration,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.eventOrchestration">EventOrchestration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/event_orchestration_global_cache_variable#event_orchestration DataPagerdutyEventOrchestrationGlobalCacheVariable#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/event_orchestration_global_cache_variable#id DataPagerdutyEventOrchestrationGlobalCacheVariable#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/event_orchestration_global_cache_variable#name DataPagerdutyEventOrchestrationGlobalCacheVariable#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EventOrchestration`<sup>Required</sup> <a name="EventOrchestration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.eventOrchestration"></a>

```csharp
public string EventOrchestration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/event_orchestration_global_cache_variable#event_orchestration DataPagerdutyEventOrchestrationGlobalCacheVariable#event_orchestration}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/event_orchestration_global_cache_variable#id DataPagerdutyEventOrchestrationGlobalCacheVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/event_orchestration_global_cache_variable#name DataPagerdutyEventOrchestrationGlobalCacheVariable#name}.

---

### DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.get"></a>

```csharp
private DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition">DataPagerdutyEventOrchestrationGlobalCacheVariableCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.internalValue"></a>

```csharp
public DataPagerdutyEventOrchestrationGlobalCacheVariableCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition">DataPagerdutyEventOrchestrationGlobalCacheVariableCondition</a>

---


### DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.get"></a>

```csharp
private DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSeconds">TtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration">DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `TtlSeconds`<sup>Required</sup> <a name="TtlSeconds" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSeconds"></a>

```csharp
public double TtlSeconds { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration">DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration</a>

---



