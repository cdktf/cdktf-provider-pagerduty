# `eventOrchestrationServiceCacheVariable` Submodule <a name="`eventOrchestrationServiceCacheVariable` Submodule" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventOrchestrationServiceCacheVariable <a name="EventOrchestrationServiceCacheVariable" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable pagerduty_event_orchestration_service_cache_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationServiceCacheVariable(Construct Scope, string Id, EventOrchestrationServiceCacheVariableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig">EventOrchestrationServiceCacheVariableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig">EventOrchestrationServiceCacheVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putCondition"></a>

```csharp
private void PutCondition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putCondition.parameter.value"></a>

- *Type:* object

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putConfiguration"></a>

```csharp
private void PutConfiguration(EventOrchestrationServiceCacheVariableConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventOrchestrationServiceCacheVariable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EventOrchestrationServiceCacheVariable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EventOrchestrationServiceCacheVariable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EventOrchestrationServiceCacheVariable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EventOrchestrationServiceCacheVariable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EventOrchestrationServiceCacheVariable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventOrchestrationServiceCacheVariable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventOrchestrationServiceCacheVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EventOrchestrationServiceCacheVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList">EventOrchestrationServiceCacheVariableConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference">EventOrchestrationServiceCacheVariableConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.conditionInput">ConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.condition"></a>

```csharp
public EventOrchestrationServiceCacheVariableConditionList Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList">EventOrchestrationServiceCacheVariableConditionList</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.configuration"></a>

```csharp
public EventOrchestrationServiceCacheVariableConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference">EventOrchestrationServiceCacheVariableConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.conditionInput"></a>

```csharp
public object ConditionInput { get; }
```

- *Type:* object

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.configurationInput"></a>

```csharp
public EventOrchestrationServiceCacheVariableConfiguration ConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventOrchestrationServiceCacheVariableCondition <a name="EventOrchestrationServiceCacheVariableCondition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationServiceCacheVariableCondition {
    string Expression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#expression EventOrchestrationServiceCacheVariable#expression}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#expression EventOrchestrationServiceCacheVariable#expression}.

---

### EventOrchestrationServiceCacheVariableConfig <a name="EventOrchestrationServiceCacheVariableConfig" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationServiceCacheVariableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    EventOrchestrationServiceCacheVariableConfiguration Configuration,
    string Name,
    string Service,
    object Condition = null,
    object Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#name EventOrchestrationServiceCacheVariable#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#service EventOrchestrationServiceCacheVariable#service}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.condition">Condition</a></code> | <code>object</code> | condition block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.disabled">Disabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#disabled EventOrchestrationServiceCacheVariable#disabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.configuration"></a>

```csharp
public EventOrchestrationServiceCacheVariableConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#configuration EventOrchestrationServiceCacheVariable#configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#name EventOrchestrationServiceCacheVariable#name}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#service EventOrchestrationServiceCacheVariable#service}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.condition"></a>

```csharp
public object Condition { get; set; }
```

- *Type:* object

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#condition EventOrchestrationServiceCacheVariable#condition}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#disabled EventOrchestrationServiceCacheVariable#disabled}.

---

### EventOrchestrationServiceCacheVariableConfiguration <a name="EventOrchestrationServiceCacheVariableConfiguration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationServiceCacheVariableConfiguration {
    string Type,
    string Regex = null,
    string Source = null,
    double TtlSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#type EventOrchestrationServiceCacheVariable#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#regex EventOrchestrationServiceCacheVariable#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#source EventOrchestrationServiceCacheVariable#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.ttlSeconds">TtlSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#ttl_seconds EventOrchestrationServiceCacheVariable#ttl_seconds}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#type EventOrchestrationServiceCacheVariable#type}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#regex EventOrchestrationServiceCacheVariable#regex}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#source EventOrchestrationServiceCacheVariable#source}.

---

##### `TtlSeconds`<sup>Optional</sup> <a name="TtlSeconds" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.ttlSeconds"></a>

```csharp
public double TtlSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.3/docs/resources/event_orchestration_service_cache_variable#ttl_seconds EventOrchestrationServiceCacheVariable#ttl_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventOrchestrationServiceCacheVariableConditionList <a name="EventOrchestrationServiceCacheVariableConditionList" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationServiceCacheVariableConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.get"></a>

```csharp
private EventOrchestrationServiceCacheVariableConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationServiceCacheVariableConditionOutputReference <a name="EventOrchestrationServiceCacheVariableConditionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationServiceCacheVariableConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationServiceCacheVariableConfigurationOutputReference <a name="EventOrchestrationServiceCacheVariableConfigurationOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationServiceCacheVariableConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetTtlSeconds">ResetTtlSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTtlSeconds` <a name="ResetTtlSeconds" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetTtlSeconds"></a>

```csharp
private void ResetTtlSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSecondsInput">TtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSeconds">TtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TtlSecondsInput`<sup>Optional</sup> <a name="TtlSecondsInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSecondsInput"></a>

```csharp
public double TtlSecondsInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `TtlSeconds`<sup>Required</sup> <a name="TtlSeconds" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSeconds"></a>

```csharp
public double TtlSeconds { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.internalValue"></a>

```csharp
public EventOrchestrationServiceCacheVariableConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a>

---



