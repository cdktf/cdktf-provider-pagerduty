# `pagerduty_custom_field_schema_field_configuration`

Refer to the Terraform Registory for docs: [`pagerduty_custom_field_schema_field_configuration`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration).

# `customFieldSchemaFieldConfiguration` Submodule <a name="`customFieldSchemaFieldConfiguration` Submodule" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomFieldSchemaFieldConfiguration <a name="CustomFieldSchemaFieldConfiguration" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration pagerduty_custom_field_schema_field_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new CustomFieldSchemaFieldConfiguration(Construct Scope, string Id, CustomFieldSchemaFieldConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig">CustomFieldSchemaFieldConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig">CustomFieldSchemaFieldConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueDatatype">ResetDefaultValueDatatype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueMultiValue">ResetDefaultValueMultiValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDefaultValueDatatype` <a name="ResetDefaultValueDatatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueDatatype"></a>

```csharp
private void ResetDefaultValueDatatype()
```

##### `ResetDefaultValueMultiValue` <a name="ResetDefaultValueMultiValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueMultiValue"></a>

```csharp
private void ResetDefaultValueMultiValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetRequired"></a>

```csharp
private void ResetRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

CustomFieldSchemaFieldConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

CustomFieldSchemaFieldConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

CustomFieldSchemaFieldConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatypeInput">DefaultValueDatatypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueInput">DefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValueInput">DefaultValueMultiValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatype">DefaultValueDatatype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValue">DefaultValueMultiValue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schema">Schema</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultValueDatatypeInput`<sup>Optional</sup> <a name="DefaultValueDatatypeInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatypeInput"></a>

```csharp
public string DefaultValueDatatypeInput { get; }
```

- *Type:* string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueInput"></a>

```csharp
public string DefaultValueInput { get; }
```

- *Type:* string

---

##### `DefaultValueMultiValueInput`<sup>Optional</sup> <a name="DefaultValueMultiValueInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValueInput"></a>

```csharp
public object DefaultValueMultiValueInput { get; }
```

- *Type:* object

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `DefaultValueDatatype`<sup>Required</sup> <a name="DefaultValueDatatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatype"></a>

```csharp
public string DefaultValueDatatype { get; }
```

- *Type:* string

---

##### `DefaultValueMultiValue`<sup>Required</sup> <a name="DefaultValueMultiValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValue"></a>

```csharp
public object DefaultValueMultiValue { get; }
```

- *Type:* object

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomFieldSchemaFieldConfigurationConfig <a name="CustomFieldSchemaFieldConfigurationConfig" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new CustomFieldSchemaFieldConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Field,
    string Schema,
    string DefaultValue = null,
    string DefaultValueDatatype = null,
    object DefaultValueMultiValue = null,
    string Id = null,
    object Required = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.field">Field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.schema">Schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValue">DefaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueDatatype">DefaultValueDatatype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueMultiValue">DefaultValueMultiValue</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.required">Required</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}.

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValue"></a>

```csharp
public string DefaultValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}.

---

##### `DefaultValueDatatype`<sup>Optional</sup> <a name="DefaultValueDatatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueDatatype"></a>

```csharp
public string DefaultValueDatatype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}.

---

##### `DefaultValueMultiValue`<sup>Optional</sup> <a name="DefaultValueMultiValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueMultiValue"></a>

```csharp
public object DefaultValueMultiValue { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.2/docs/resources/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}.

---



