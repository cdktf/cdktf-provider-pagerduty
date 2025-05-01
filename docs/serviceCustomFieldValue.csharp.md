# `serviceCustomFieldValue` Submodule <a name="`serviceCustomFieldValue` Submodule" id="@cdktf/provider-pagerduty.serviceCustomFieldValue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceCustomFieldValue <a name="ServiceCustomFieldValue" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.0/docs/resources/service_custom_field_value pagerduty_service_custom_field_value}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceCustomFieldValue(Construct Scope, string Id, ServiceCustomFieldValueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig">ServiceCustomFieldValueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig">ServiceCustomFieldValueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.putCustomFields">PutCustomFields</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomFields` <a name="PutCustomFields" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.putCustomFields"></a>

```csharp
private void PutCustomFields(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.putCustomFields.parameter.value"></a>

- *Type:* object

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceCustomFieldValue resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

ServiceCustomFieldValue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

ServiceCustomFieldValue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

ServiceCustomFieldValue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

ServiceCustomFieldValue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServiceCustomFieldValue resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceCustomFieldValue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceCustomFieldValue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.0/docs/resources/service_custom_field_value#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServiceCustomFieldValue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.customFields">CustomFields</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList">ServiceCustomFieldValueCustomFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.customFieldsInput">CustomFieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomFields`<sup>Required</sup> <a name="CustomFields" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.customFields"></a>

```csharp
public ServiceCustomFieldValueCustomFieldsList CustomFields { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList">ServiceCustomFieldValueCustomFieldsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CustomFieldsInput`<sup>Optional</sup> <a name="CustomFieldsInput" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.customFieldsInput"></a>

```csharp
public object CustomFieldsInput { get; }
```

- *Type:* object

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCustomFieldValueConfig <a name="ServiceCustomFieldValueConfig" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceCustomFieldValueConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object CustomFields,
    string ServiceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.customFields">CustomFields</a></code> | <code>object</code> | The custom field values to set for the service. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.serviceId">ServiceId</a></code> | <code>string</code> | The ID of the service to set custom field values for. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomFields`<sup>Required</sup> <a name="CustomFields" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.customFields"></a>

```csharp
public object CustomFields { get; set; }
```

- *Type:* object

The custom field values to set for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.0/docs/resources/service_custom_field_value#custom_fields ServiceCustomFieldValue#custom_fields}

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

The ID of the service to set custom field values for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.0/docs/resources/service_custom_field_value#service_id ServiceCustomFieldValue#service_id}

---

### ServiceCustomFieldValueCustomFields <a name="ServiceCustomFieldValueCustomFields" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceCustomFieldValueCustomFields {
    string Id,
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.0/docs/resources/service_custom_field_value#id ServiceCustomFieldValue#id}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.0/docs/resources/service_custom_field_value#name ServiceCustomFieldValue#name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.0/docs/resources/service_custom_field_value#value ServiceCustomFieldValue#value}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.0/docs/resources/service_custom_field_value#id ServiceCustomFieldValue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.0/docs/resources/service_custom_field_value#name ServiceCustomFieldValue#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.0/docs/resources/service_custom_field_value#value ServiceCustomFieldValue#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCustomFieldValueCustomFieldsList <a name="ServiceCustomFieldValueCustomFieldsList" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceCustomFieldValueCustomFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.get"></a>

```csharp
private ServiceCustomFieldValueCustomFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceCustomFieldValueCustomFieldsOutputReference <a name="ServiceCustomFieldValueCustomFieldsOutputReference" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceCustomFieldValueCustomFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



