# `customFieldOption` Submodule <a name="`customFieldOption` Submodule" id="@cdktf/provider-pagerduty.customFieldOption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomFieldOption <a name="CustomFieldOption" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_option pagerduty_custom_field_option}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new CustomFieldOption(Construct Scope, string Id, CustomFieldOptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig">CustomFieldOptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig">CustomFieldOptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

CustomFieldOption.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

CustomFieldOption.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

CustomFieldOption.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.datatypeInput">DatatypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.datatype">Datatype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DatatypeInput`<sup>Optional</sup> <a name="DatatypeInput" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.datatypeInput"></a>

```csharp
public string DatatypeInput { get; }
```

- *Type:* string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Datatype`<sup>Required</sup> <a name="Datatype" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.datatype"></a>

```csharp
public string Datatype { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOption.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomFieldOptionConfig <a name="CustomFieldOptionConfig" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new CustomFieldOptionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Datatype,
    string Field,
    string Value,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.datatype">Datatype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_option#datatype CustomFieldOption#datatype}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.field">Field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_option#field CustomFieldOption#field}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_option#value CustomFieldOption#value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_option#id CustomFieldOption#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Datatype`<sup>Required</sup> <a name="Datatype" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.datatype"></a>

```csharp
public string Datatype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_option#datatype CustomFieldOption#datatype}.

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_option#field CustomFieldOption#field}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_option#value CustomFieldOption#value}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.customFieldOption.CustomFieldOptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/custom_field_option#id CustomFieldOption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



