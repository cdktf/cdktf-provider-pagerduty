# `incidentTypeCustomField` Submodule <a name="`incidentTypeCustomField` Submodule" id="@cdktf/provider-pagerduty.incidentTypeCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentTypeCustomField <a name="IncidentTypeCustomField" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field pagerduty_incident_type_custom_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new IncidentTypeCustomField(Construct Scope, string Id, IncidentTypeCustomFieldConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig">IncidentTypeCustomFieldConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig">IncidentTypeCustomFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldOptions">ResetFieldOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldType">ResetFieldType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFieldOptions` <a name="ResetFieldOptions" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldOptions"></a>

```csharp
private void ResetFieldOptions()
```

##### `ResetFieldType` <a name="ResetFieldType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.resetFieldType"></a>

```csharp
private void ResetFieldType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IncidentTypeCustomField resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

IncidentTypeCustomField.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

IncidentTypeCustomField.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

IncidentTypeCustomField.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

IncidentTypeCustomField.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IncidentTypeCustomField resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentTypeCustomField to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentTypeCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IncidentTypeCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.selfAttribute">SelfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValueInput">DefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptionsInput">FieldOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldTypeInput">FieldTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentTypeInput">IncidentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptions">FieldOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldType">FieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentType">IncidentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.selfAttribute"></a>

```csharp
public string SelfAttribute { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValueInput"></a>

```csharp
public string DefaultValueInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FieldOptionsInput`<sup>Optional</sup> <a name="FieldOptionsInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptionsInput"></a>

```csharp
public string[] FieldOptionsInput { get; }
```

- *Type:* string[]

---

##### `FieldTypeInput`<sup>Optional</sup> <a name="FieldTypeInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldTypeInput"></a>

```csharp
public string FieldTypeInput { get; }
```

- *Type:* string

---

##### `IncidentTypeInput`<sup>Optional</sup> <a name="IncidentTypeInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentTypeInput"></a>

```csharp
public string IncidentTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FieldOptions`<sup>Required</sup> <a name="FieldOptions" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldOptions"></a>

```csharp
public string[] FieldOptions { get; }
```

- *Type:* string[]

---

##### `FieldType`<sup>Required</sup> <a name="FieldType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.fieldType"></a>

```csharp
public string FieldType { get; }
```

- *Type:* string

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.incidentType"></a>

```csharp
public string IncidentType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomField.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentTypeCustomFieldConfig <a name="IncidentTypeCustomFieldConfig" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new IncidentTypeCustomFieldConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataType,
    string DisplayName,
    string IncidentType,
    string Name,
    string DefaultValue = null,
    string Description = null,
    object Enabled = null,
    string[] FieldOptions = null,
    string FieldType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dataType">DataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#data_type IncidentTypeCustomField#data_type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#display_name IncidentTypeCustomField#display_name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.incidentType">IncidentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#incident_type IncidentTypeCustomField#incident_type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#name IncidentTypeCustomField#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.defaultValue">DefaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#default_value IncidentTypeCustomField#default_value}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#description IncidentTypeCustomField#description}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#enabled IncidentTypeCustomField#enabled}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldOptions">FieldOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#field_options IncidentTypeCustomField#field_options}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldType">FieldType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#field_type IncidentTypeCustomField#field_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#data_type IncidentTypeCustomField#data_type}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#display_name IncidentTypeCustomField#display_name}.

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.incidentType"></a>

```csharp
public string IncidentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#incident_type IncidentTypeCustomField#incident_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#name IncidentTypeCustomField#name}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.defaultValue"></a>

```csharp
public string DefaultValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#default_value IncidentTypeCustomField#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#description IncidentTypeCustomField#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#enabled IncidentTypeCustomField#enabled}.

---

##### `FieldOptions`<sup>Optional</sup> <a name="FieldOptions" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldOptions"></a>

```csharp
public string[] FieldOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#field_options IncidentTypeCustomField#field_options}.

---

##### `FieldType`<sup>Optional</sup> <a name="FieldType" id="@cdktf/provider-pagerduty.incidentTypeCustomField.IncidentTypeCustomFieldConfig.property.fieldType"></a>

```csharp
public string FieldType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.2/docs/resources/incident_type_custom_field#field_type IncidentTypeCustomField#field_type}.

---



