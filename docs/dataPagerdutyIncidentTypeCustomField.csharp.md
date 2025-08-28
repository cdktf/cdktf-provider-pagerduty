# `dataPagerdutyIncidentTypeCustomField` Submodule <a name="`dataPagerdutyIncidentTypeCustomField` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyIncidentTypeCustomField <a name="DataPagerdutyIncidentTypeCustomField" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/incident_type_custom_field pagerduty_incident_type_custom_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyIncidentTypeCustomField(Construct Scope, string Id, DataPagerdutyIncidentTypeCustomFieldConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig">DataPagerdutyIncidentTypeCustomFieldConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig">DataPagerdutyIncidentTypeCustomFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyIncidentTypeCustomField resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

DataPagerdutyIncidentTypeCustomField.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

DataPagerdutyIncidentTypeCustomField.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

DataPagerdutyIncidentTypeCustomField.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

DataPagerdutyIncidentTypeCustomField.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataPagerdutyIncidentTypeCustomField resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataPagerdutyIncidentTypeCustomField to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataPagerdutyIncidentTypeCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/incident_type_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyIncidentTypeCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldOptions">FieldOptions</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList">DataPagerdutyIncidentTypeCustomFieldFieldOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldType">FieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.selfAttribute">SelfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentTypeInput">IncidentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentType">IncidentType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FieldOptions`<sup>Required</sup> <a name="FieldOptions" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldOptions"></a>

```csharp
public DataPagerdutyIncidentTypeCustomFieldFieldOptionsList FieldOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList">DataPagerdutyIncidentTypeCustomFieldFieldOptionsList</a>

---

##### `FieldType`<sup>Required</sup> <a name="FieldType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldType"></a>

```csharp
public string FieldType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.selfAttribute"></a>

```csharp
public string SelfAttribute { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IncidentTypeInput`<sup>Optional</sup> <a name="IncidentTypeInput" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentTypeInput"></a>

```csharp
public string IncidentTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentType"></a>

```csharp
public string IncidentType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyIncidentTypeCustomFieldConfig <a name="DataPagerdutyIncidentTypeCustomFieldConfig" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyIncidentTypeCustomFieldConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string IncidentType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/incident_type_custom_field#display_name DataPagerdutyIncidentTypeCustomField#display_name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.incidentType">IncidentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/incident_type_custom_field#incident_type DataPagerdutyIncidentTypeCustomField#incident_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/incident_type_custom_field#display_name DataPagerdutyIncidentTypeCustomField#display_name}.

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.incidentType"></a>

```csharp
public string IncidentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.2/docs/data-sources/incident_type_custom_field#incident_type DataPagerdutyIncidentTypeCustomField#incident_type}.

---

### DataPagerdutyIncidentTypeCustomFieldFieldOptions <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptions" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyIncidentTypeCustomFieldFieldOptions {

};
```


### DataPagerdutyIncidentTypeCustomFieldFieldOptionsData <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsData" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyIncidentTypeCustomFieldFieldOptionsData {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData">DataPagerdutyIncidentTypeCustomFieldFieldOptionsData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.internalValue"></a>

```csharp
public DataPagerdutyIncidentTypeCustomFieldFieldOptionsData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData">DataPagerdutyIncidentTypeCustomFieldFieldOptionsData</a>

---


### DataPagerdutyIncidentTypeCustomFieldFieldOptionsList <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsList" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyIncidentTypeCustomFieldFieldOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.get"></a>

```csharp
private DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.data">Data</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference">DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions">DataPagerdutyIncidentTypeCustomFieldFieldOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.data"></a>

```csharp
public DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference Data { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference">DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.internalValue"></a>

```csharp
public DataPagerdutyIncidentTypeCustomFieldFieldOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions">DataPagerdutyIncidentTypeCustomFieldFieldOptions</a>

---



