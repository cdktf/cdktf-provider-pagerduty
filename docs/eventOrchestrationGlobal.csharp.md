# `eventOrchestrationGlobal` Submodule <a name="`eventOrchestrationGlobal` Submodule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventOrchestrationGlobal <a name="EventOrchestrationGlobal" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global pagerduty_event_orchestration_global}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobal(Construct Scope, string Id, EventOrchestrationGlobalConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig">EventOrchestrationGlobalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig">EventOrchestrationGlobalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putCatchAll">PutCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putSet">PutSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCatchAll` <a name="PutCatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putCatchAll"></a>

```csharp
private void PutCatchAll(EventOrchestrationGlobalCatchAll Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putCatchAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

---

##### `PutSet` <a name="PutSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putSet"></a>

```csharp
private void PutSet(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putSet.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventOrchestrationGlobal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EventOrchestrationGlobal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EventOrchestrationGlobal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EventOrchestrationGlobal.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EventOrchestrationGlobal.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EventOrchestrationGlobal resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventOrchestrationGlobal to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventOrchestrationGlobal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EventOrchestrationGlobal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.catchAll">CatchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference">EventOrchestrationGlobalCatchAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.set">Set</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList">EventOrchestrationGlobalSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.catchAllInput">CatchAllInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.eventOrchestrationInput">EventOrchestrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.setInput">SetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.eventOrchestration">EventOrchestration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CatchAll`<sup>Required</sup> <a name="CatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.catchAll"></a>

```csharp
public EventOrchestrationGlobalCatchAllOutputReference CatchAll { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference">EventOrchestrationGlobalCatchAllOutputReference</a>

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.set"></a>

```csharp
public EventOrchestrationGlobalSetList Set { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList">EventOrchestrationGlobalSetList</a>

---

##### `CatchAllInput`<sup>Optional</sup> <a name="CatchAllInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.catchAllInput"></a>

```csharp
public EventOrchestrationGlobalCatchAll CatchAllInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

---

##### `EventOrchestrationInput`<sup>Optional</sup> <a name="EventOrchestrationInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.eventOrchestrationInput"></a>

```csharp
public string EventOrchestrationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.setInput"></a>

```csharp
public object SetInput { get; }
```

- *Type:* object

---

##### `EventOrchestration`<sup>Required</sup> <a name="EventOrchestration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.eventOrchestration"></a>

```csharp
public string EventOrchestration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventOrchestrationGlobalCatchAll <a name="EventOrchestrationGlobalCatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAll {
    EventOrchestrationGlobalCatchAllActions Actions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a></code> | actions block. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll.property.actions"></a>

```csharp
public EventOrchestrationGlobalCatchAllActions Actions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#actions EventOrchestrationGlobal#actions}

---

### EventOrchestrationGlobalCatchAllActions <a name="EventOrchestrationGlobalCatchAllActions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActions {
    string Annotate = null,
    EventOrchestrationGlobalCatchAllActionsAutomationAction AutomationAction = null,
    object DropEvent = null,
    string EscalationPolicy = null,
    string EventAction = null,
    object Extraction = null,
    object IncidentCustomFieldUpdate = null,
    string Priority = null,
    string RouteTo = null,
    string Severity = null,
    object Suppress = null,
    double Suspend = null,
    object Variable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.annotate">Annotate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.automationAction">AutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a></code> | automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.dropEvent">DropEvent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.escalationPolicy">EscalationPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#escalation_policy EventOrchestrationGlobal#escalation_policy}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.eventAction">EventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.extraction">Extraction</a></code> | <code>object</code> | extraction block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.incidentCustomFieldUpdate">IncidentCustomFieldUpdate</a></code> | <code>object</code> | incident_custom_field_update block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.priority">Priority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.routeTo">RouteTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.severity">Severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.suppress">Suppress</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.suspend">Suspend</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.variable">Variable</a></code> | <code>object</code> | variable block. |

---

##### `Annotate`<sup>Optional</sup> <a name="Annotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.annotate"></a>

```csharp
public string Annotate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}.

---

##### `AutomationAction`<sup>Optional</sup> <a name="AutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.automationAction"></a>

```csharp
public EventOrchestrationGlobalCatchAllActionsAutomationAction AutomationAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a>

automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#automation_action EventOrchestrationGlobal#automation_action}

---

##### `DropEvent`<sup>Optional</sup> <a name="DropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.dropEvent"></a>

```csharp
public object DropEvent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}.

---

##### `EscalationPolicy`<sup>Optional</sup> <a name="EscalationPolicy" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.escalationPolicy"></a>

```csharp
public string EscalationPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#escalation_policy EventOrchestrationGlobal#escalation_policy}.

---

##### `EventAction`<sup>Optional</sup> <a name="EventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.eventAction"></a>

```csharp
public string EventAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}.

---

##### `Extraction`<sup>Optional</sup> <a name="Extraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.extraction"></a>

```csharp
public object Extraction { get; set; }
```

- *Type:* object

extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#extraction EventOrchestrationGlobal#extraction}

---

##### `IncidentCustomFieldUpdate`<sup>Optional</sup> <a name="IncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.incidentCustomFieldUpdate"></a>

```csharp
public object IncidentCustomFieldUpdate { get; set; }
```

- *Type:* object

incident_custom_field_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#incident_custom_field_update EventOrchestrationGlobal#incident_custom_field_update}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}.

---

##### `RouteTo`<sup>Optional</sup> <a name="RouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.routeTo"></a>

```csharp
public string RouteTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}.

---

##### `Suppress`<sup>Optional</sup> <a name="Suppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.suppress"></a>

```csharp
public object Suppress { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}.

---

##### `Suspend`<sup>Optional</sup> <a name="Suspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.suspend"></a>

```csharp
public double Suspend { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}.

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.variable"></a>

```csharp
public object Variable { get; set; }
```

- *Type:* object

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#variable EventOrchestrationGlobal#variable}

---

### EventOrchestrationGlobalCatchAllActionsAutomationAction <a name="EventOrchestrationGlobalCatchAllActionsAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsAutomationAction {
    string Name,
    string Url,
    object AutoSend = null,
    object Header = null,
    object Parameter = null,
    string[] TriggerTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.autoSend">AutoSend</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.parameter">Parameter</a></code> | <code>object</code> | parameter block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.triggerTypes">TriggerTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#trigger_types EventOrchestrationGlobal#trigger_types}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}.

---

##### `AutoSend`<sup>Optional</sup> <a name="AutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.autoSend"></a>

```csharp
public object AutoSend { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#header EventOrchestrationGlobal#header}

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.parameter"></a>

```csharp
public object Parameter { get; set; }
```

- *Type:* object

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#parameter EventOrchestrationGlobal#parameter}

---

##### `TriggerTypes`<sup>Optional</sup> <a name="TriggerTypes" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.triggerTypes"></a>

```csharp
public string[] TriggerTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#trigger_types EventOrchestrationGlobal#trigger_types}.

---

### EventOrchestrationGlobalCatchAllActionsAutomationActionHeader <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsAutomationActionHeader {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalCatchAllActionsAutomationActionParameter <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsAutomationActionParameter {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalCatchAllActionsExtraction <a name="EventOrchestrationGlobalCatchAllActionsExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsExtraction {
    string Target,
    string Regex = null,
    string Source = null,
    string Template = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.template">Template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}.

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.template"></a>

```csharp
public string Template { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}.

---

### EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate <a name="EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate {
    string Id,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalCatchAllActionsVariable <a name="EventOrchestrationGlobalCatchAllActionsVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsVariable {
    string Name,
    string Path,
    string Type,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalConfig <a name="EventOrchestrationGlobalConfig" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    EventOrchestrationGlobalCatchAll CatchAll,
    string EventOrchestration,
    object Set,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.catchAll">CatchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a></code> | catch_all block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.eventOrchestration">EventOrchestration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#event_orchestration EventOrchestrationGlobal#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.set">Set</a></code> | <code>object</code> | set block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CatchAll`<sup>Required</sup> <a name="CatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.catchAll"></a>

```csharp
public EventOrchestrationGlobalCatchAll CatchAll { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

catch_all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#catch_all EventOrchestrationGlobal#catch_all}

---

##### `EventOrchestration`<sup>Required</sup> <a name="EventOrchestration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.eventOrchestration"></a>

```csharp
public string EventOrchestration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#event_orchestration EventOrchestrationGlobal#event_orchestration}.

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.set"></a>

```csharp
public object Set { get; set; }
```

- *Type:* object

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#set EventOrchestrationGlobal#set}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EventOrchestrationGlobalSet <a name="EventOrchestrationGlobalSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSet {
    string Id,
    object Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.property.rule">Rule</a></code> | <code>object</code> | rule block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#rule EventOrchestrationGlobal#rule}

---

### EventOrchestrationGlobalSetRule <a name="EventOrchestrationGlobalSetRule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRule {
    EventOrchestrationGlobalSetRuleActions Actions,
    object Condition = null,
    object Disabled = null,
    string Label = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.condition">Condition</a></code> | <code>object</code> | condition block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.disabled">Disabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#disabled EventOrchestrationGlobal#disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#label EventOrchestrationGlobal#label}. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.actions"></a>

```csharp
public EventOrchestrationGlobalSetRuleActions Actions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#actions EventOrchestrationGlobal#actions}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.condition"></a>

```csharp
public object Condition { get; set; }
```

- *Type:* object

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#condition EventOrchestrationGlobal#condition}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#disabled EventOrchestrationGlobal#disabled}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#label EventOrchestrationGlobal#label}.

---

### EventOrchestrationGlobalSetRuleActions <a name="EventOrchestrationGlobalSetRuleActions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActions {
    string Annotate = null,
    EventOrchestrationGlobalSetRuleActionsAutomationAction AutomationAction = null,
    object DropEvent = null,
    string EscalationPolicy = null,
    string EventAction = null,
    object Extraction = null,
    object IncidentCustomFieldUpdate = null,
    string Priority = null,
    string RouteTo = null,
    string Severity = null,
    object Suppress = null,
    double Suspend = null,
    object Variable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.annotate">Annotate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.automationAction">AutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a></code> | automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.dropEvent">DropEvent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.escalationPolicy">EscalationPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#escalation_policy EventOrchestrationGlobal#escalation_policy}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.eventAction">EventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.extraction">Extraction</a></code> | <code>object</code> | extraction block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.incidentCustomFieldUpdate">IncidentCustomFieldUpdate</a></code> | <code>object</code> | incident_custom_field_update block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.priority">Priority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.routeTo">RouteTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.severity">Severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.suppress">Suppress</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.suspend">Suspend</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.variable">Variable</a></code> | <code>object</code> | variable block. |

---

##### `Annotate`<sup>Optional</sup> <a name="Annotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.annotate"></a>

```csharp
public string Annotate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}.

---

##### `AutomationAction`<sup>Optional</sup> <a name="AutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.automationAction"></a>

```csharp
public EventOrchestrationGlobalSetRuleActionsAutomationAction AutomationAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a>

automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#automation_action EventOrchestrationGlobal#automation_action}

---

##### `DropEvent`<sup>Optional</sup> <a name="DropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.dropEvent"></a>

```csharp
public object DropEvent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}.

---

##### `EscalationPolicy`<sup>Optional</sup> <a name="EscalationPolicy" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.escalationPolicy"></a>

```csharp
public string EscalationPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#escalation_policy EventOrchestrationGlobal#escalation_policy}.

---

##### `EventAction`<sup>Optional</sup> <a name="EventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.eventAction"></a>

```csharp
public string EventAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}.

---

##### `Extraction`<sup>Optional</sup> <a name="Extraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.extraction"></a>

```csharp
public object Extraction { get; set; }
```

- *Type:* object

extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#extraction EventOrchestrationGlobal#extraction}

---

##### `IncidentCustomFieldUpdate`<sup>Optional</sup> <a name="IncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.incidentCustomFieldUpdate"></a>

```csharp
public object IncidentCustomFieldUpdate { get; set; }
```

- *Type:* object

incident_custom_field_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#incident_custom_field_update EventOrchestrationGlobal#incident_custom_field_update}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}.

---

##### `RouteTo`<sup>Optional</sup> <a name="RouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.routeTo"></a>

```csharp
public string RouteTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}.

---

##### `Suppress`<sup>Optional</sup> <a name="Suppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.suppress"></a>

```csharp
public object Suppress { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}.

---

##### `Suspend`<sup>Optional</sup> <a name="Suspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.suspend"></a>

```csharp
public double Suspend { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}.

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.variable"></a>

```csharp
public object Variable { get; set; }
```

- *Type:* object

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#variable EventOrchestrationGlobal#variable}

---

### EventOrchestrationGlobalSetRuleActionsAutomationAction <a name="EventOrchestrationGlobalSetRuleActionsAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsAutomationAction {
    string Name,
    string Url,
    object AutoSend = null,
    object Header = null,
    object Parameter = null,
    string[] TriggerTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.autoSend">AutoSend</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.parameter">Parameter</a></code> | <code>object</code> | parameter block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.triggerTypes">TriggerTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#trigger_types EventOrchestrationGlobal#trigger_types}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}.

---

##### `AutoSend`<sup>Optional</sup> <a name="AutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.autoSend"></a>

```csharp
public object AutoSend { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#header EventOrchestrationGlobal#header}

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.parameter"></a>

```csharp
public object Parameter { get; set; }
```

- *Type:* object

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#parameter EventOrchestrationGlobal#parameter}

---

##### `TriggerTypes`<sup>Optional</sup> <a name="TriggerTypes" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.triggerTypes"></a>

```csharp
public string[] TriggerTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#trigger_types EventOrchestrationGlobal#trigger_types}.

---

### EventOrchestrationGlobalSetRuleActionsAutomationActionHeader <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsAutomationActionHeader {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalSetRuleActionsAutomationActionParameter <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsAutomationActionParameter {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalSetRuleActionsExtraction <a name="EventOrchestrationGlobalSetRuleActionsExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsExtraction {
    string Target,
    string Regex = null,
    string Source = null,
    string Template = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.template">Template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}.

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.template"></a>

```csharp
public string Template { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}.

---

### EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate <a name="EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate {
    string Id,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalSetRuleActionsVariable <a name="EventOrchestrationGlobalSetRuleActionsVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsVariable {
    string Name,
    string Path,
    string Type,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalSetRuleCondition <a name="EventOrchestrationGlobalSetRuleCondition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleCondition {
    string Expression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#expression EventOrchestrationGlobal#expression}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.2/docs/resources/event_orchestration_global#expression EventOrchestrationGlobal#expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.get"></a>

```csharp
private EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetAutoSend">ResetAutoSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetTriggerTypes">ResetTriggerTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putHeader.parameter.value"></a>

- *Type:* object

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putParameter"></a>

```csharp
private void PutParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putParameter.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoSend` <a name="ResetAutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetAutoSend"></a>

```csharp
private void ResetAutoSend()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetParameter"></a>

```csharp
private void ResetParameter()
```

##### `ResetTriggerTypes` <a name="ResetTriggerTypes" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetTriggerTypes"></a>

```csharp
private void ResetTriggerTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList">EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList">EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.autoSendInput">AutoSendInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.parameterInput">ParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.triggerTypesInput">TriggerTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.autoSend">AutoSend</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.triggerTypes">TriggerTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.header"></a>

```csharp
public EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList">EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList</a>

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.parameter"></a>

```csharp
public EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList">EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList</a>

---

##### `AutoSendInput`<sup>Optional</sup> <a name="AutoSendInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.autoSendInput"></a>

```csharp
public object AutoSendInput { get; }
```

- *Type:* object

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.parameterInput"></a>

```csharp
public object ParameterInput { get; }
```

- *Type:* object

---

##### `TriggerTypesInput`<sup>Optional</sup> <a name="TriggerTypesInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.triggerTypesInput"></a>

```csharp
public string[] TriggerTypesInput { get; }
```

- *Type:* string[]

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AutoSend`<sup>Required</sup> <a name="AutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.autoSend"></a>

```csharp
public object AutoSend { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TriggerTypes`<sup>Required</sup> <a name="TriggerTypes" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.triggerTypes"></a>

```csharp
public string[] TriggerTypes { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.internalValue"></a>

```csharp
public EventOrchestrationGlobalCatchAllActionsAutomationAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a>

---


### EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.get"></a>

```csharp
private EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalCatchAllActionsExtractionList <a name="EventOrchestrationGlobalCatchAllActionsExtractionList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsExtractionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.get"></a>

```csharp
private EventOrchestrationGlobalCatchAllActionsExtractionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalCatchAllActionsExtractionOutputReference <a name="EventOrchestrationGlobalCatchAllActionsExtractionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsExtractionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetTemplate">ResetTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetTemplate"></a>

```csharp
private void ResetTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.templateInput">TemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.template">Template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.templateInput"></a>

```csharp
public string TemplateInput { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList <a name="EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.get"></a>

```csharp
private EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference <a name="EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalCatchAllActionsOutputReference <a name="EventOrchestrationGlobalCatchAllActionsOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putAutomationAction">PutAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putExtraction">PutExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putIncidentCustomFieldUpdate">PutIncidentCustomFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putVariable">PutVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetAnnotate">ResetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetAutomationAction">ResetAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetDropEvent">ResetDropEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetEscalationPolicy">ResetEscalationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetEventAction">ResetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetExtraction">ResetExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetIncidentCustomFieldUpdate">ResetIncidentCustomFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetRouteTo">ResetRouteTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSuppress">ResetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSuspend">ResetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomationAction` <a name="PutAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putAutomationAction"></a>

```csharp
private void PutAutomationAction(EventOrchestrationGlobalCatchAllActionsAutomationAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a>

---

##### `PutExtraction` <a name="PutExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putExtraction"></a>

```csharp
private void PutExtraction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putExtraction.parameter.value"></a>

- *Type:* object

---

##### `PutIncidentCustomFieldUpdate` <a name="PutIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putIncidentCustomFieldUpdate"></a>

```csharp
private void PutIncidentCustomFieldUpdate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putIncidentCustomFieldUpdate.parameter.value"></a>

- *Type:* object

---

##### `PutVariable` <a name="PutVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putVariable"></a>

```csharp
private void PutVariable(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putVariable.parameter.value"></a>

- *Type:* object

---

##### `ResetAnnotate` <a name="ResetAnnotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetAnnotate"></a>

```csharp
private void ResetAnnotate()
```

##### `ResetAutomationAction` <a name="ResetAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetAutomationAction"></a>

```csharp
private void ResetAutomationAction()
```

##### `ResetDropEvent` <a name="ResetDropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetDropEvent"></a>

```csharp
private void ResetDropEvent()
```

##### `ResetEscalationPolicy` <a name="ResetEscalationPolicy" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetEscalationPolicy"></a>

```csharp
private void ResetEscalationPolicy()
```

##### `ResetEventAction` <a name="ResetEventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetEventAction"></a>

```csharp
private void ResetEventAction()
```

##### `ResetExtraction` <a name="ResetExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetExtraction"></a>

```csharp
private void ResetExtraction()
```

##### `ResetIncidentCustomFieldUpdate` <a name="ResetIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetIncidentCustomFieldUpdate"></a>

```csharp
private void ResetIncidentCustomFieldUpdate()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetRouteTo` <a name="ResetRouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetRouteTo"></a>

```csharp
private void ResetRouteTo()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetSuppress` <a name="ResetSuppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSuppress"></a>

```csharp
private void ResetSuppress()
```

##### `ResetSuspend` <a name="ResetSuspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSuspend"></a>

```csharp
private void ResetSuspend()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetVariable"></a>

```csharp
private void ResetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.automationAction">AutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference">EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.extraction">Extraction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList">EventOrchestrationGlobalCatchAllActionsExtractionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.incidentCustomFieldUpdate">IncidentCustomFieldUpdate</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList">EventOrchestrationGlobalCatchAllActionsVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.annotateInput">AnnotateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.automationActionInput">AutomationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.dropEventInput">DropEventInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.escalationPolicyInput">EscalationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.extractionInput">ExtractionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.incidentCustomFieldUpdateInput">IncidentCustomFieldUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.routeToInput">RouteToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suppressInput">SuppressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suspendInput">SuspendInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.variableInput">VariableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.annotate">Annotate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.dropEvent">DropEvent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.escalationPolicy">EscalationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.eventAction">EventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.routeTo">RouteTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suppress">Suppress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suspend">Suspend</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomationAction`<sup>Required</sup> <a name="AutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.automationAction"></a>

```csharp
public EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference AutomationAction { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference">EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference</a>

---

##### `Extraction`<sup>Required</sup> <a name="Extraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.extraction"></a>

```csharp
public EventOrchestrationGlobalCatchAllActionsExtractionList Extraction { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList">EventOrchestrationGlobalCatchAllActionsExtractionList</a>

---

##### `IncidentCustomFieldUpdate`<sup>Required</sup> <a name="IncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.incidentCustomFieldUpdate"></a>

```csharp
public EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList IncidentCustomFieldUpdate { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList</a>

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.variable"></a>

```csharp
public EventOrchestrationGlobalCatchAllActionsVariableList Variable { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList">EventOrchestrationGlobalCatchAllActionsVariableList</a>

---

##### `AnnotateInput`<sup>Optional</sup> <a name="AnnotateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.annotateInput"></a>

```csharp
public string AnnotateInput { get; }
```

- *Type:* string

---

##### `AutomationActionInput`<sup>Optional</sup> <a name="AutomationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.automationActionInput"></a>

```csharp
public EventOrchestrationGlobalCatchAllActionsAutomationAction AutomationActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a>

---

##### `DropEventInput`<sup>Optional</sup> <a name="DropEventInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.dropEventInput"></a>

```csharp
public object DropEventInput { get; }
```

- *Type:* object

---

##### `EscalationPolicyInput`<sup>Optional</sup> <a name="EscalationPolicyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.escalationPolicyInput"></a>

```csharp
public string EscalationPolicyInput { get; }
```

- *Type:* string

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.eventActionInput"></a>

```csharp
public string EventActionInput { get; }
```

- *Type:* string

---

##### `ExtractionInput`<sup>Optional</sup> <a name="ExtractionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.extractionInput"></a>

```csharp
public object ExtractionInput { get; }
```

- *Type:* object

---

##### `IncidentCustomFieldUpdateInput`<sup>Optional</sup> <a name="IncidentCustomFieldUpdateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.incidentCustomFieldUpdateInput"></a>

```csharp
public object IncidentCustomFieldUpdateInput { get; }
```

- *Type:* object

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `RouteToInput`<sup>Optional</sup> <a name="RouteToInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.routeToInput"></a>

```csharp
public string RouteToInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `SuppressInput`<sup>Optional</sup> <a name="SuppressInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suppressInput"></a>

```csharp
public object SuppressInput { get; }
```

- *Type:* object

---

##### `SuspendInput`<sup>Optional</sup> <a name="SuspendInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suspendInput"></a>

```csharp
public double SuspendInput { get; }
```

- *Type:* double

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.variableInput"></a>

```csharp
public object VariableInput { get; }
```

- *Type:* object

---

##### `Annotate`<sup>Required</sup> <a name="Annotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.annotate"></a>

```csharp
public string Annotate { get; }
```

- *Type:* string

---

##### `DropEvent`<sup>Required</sup> <a name="DropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.dropEvent"></a>

```csharp
public object DropEvent { get; }
```

- *Type:* object

---

##### `EscalationPolicy`<sup>Required</sup> <a name="EscalationPolicy" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.escalationPolicy"></a>

```csharp
public string EscalationPolicy { get; }
```

- *Type:* string

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.eventAction"></a>

```csharp
public string EventAction { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `RouteTo`<sup>Required</sup> <a name="RouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.routeTo"></a>

```csharp
public string RouteTo { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Suppress`<sup>Required</sup> <a name="Suppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suppress"></a>

```csharp
public object Suppress { get; }
```

- *Type:* object

---

##### `Suspend`<sup>Required</sup> <a name="Suspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suspend"></a>

```csharp
public double Suspend { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.internalValue"></a>

```csharp
public EventOrchestrationGlobalCatchAllActions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a>

---


### EventOrchestrationGlobalCatchAllActionsVariableList <a name="EventOrchestrationGlobalCatchAllActionsVariableList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsVariableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.get"></a>

```csharp
private EventOrchestrationGlobalCatchAllActionsVariableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalCatchAllActionsVariableOutputReference <a name="EventOrchestrationGlobalCatchAllActionsVariableOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllActionsVariableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalCatchAllOutputReference <a name="EventOrchestrationGlobalCatchAllOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalCatchAllOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.putActions">PutActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.putActions"></a>

```csharp
private void PutActions(EventOrchestrationGlobalCatchAllActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference">EventOrchestrationGlobalCatchAllActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.actions"></a>

```csharp
public EventOrchestrationGlobalCatchAllActionsOutputReference Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference">EventOrchestrationGlobalCatchAllActionsOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.actionsInput"></a>

```csharp
public EventOrchestrationGlobalCatchAllActions ActionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.internalValue"></a>

```csharp
public EventOrchestrationGlobalCatchAll InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

---


### EventOrchestrationGlobalSetList <a name="EventOrchestrationGlobalSetList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.get"></a>

```csharp
private EventOrchestrationGlobalSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetOutputReference <a name="EventOrchestrationGlobalSetOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resetRule"></a>

```csharp
private void ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList">EventOrchestrationGlobalSetRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.rule"></a>

```csharp
public EventOrchestrationGlobalSetRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList">EventOrchestrationGlobalSetRuleList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.get"></a>

```csharp
private EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetAutoSend">ResetAutoSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetTriggerTypes">ResetTriggerTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putHeader.parameter.value"></a>

- *Type:* object

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putParameter"></a>

```csharp
private void PutParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putParameter.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoSend` <a name="ResetAutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetAutoSend"></a>

```csharp
private void ResetAutoSend()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetParameter"></a>

```csharp
private void ResetParameter()
```

##### `ResetTriggerTypes` <a name="ResetTriggerTypes" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetTriggerTypes"></a>

```csharp
private void ResetTriggerTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList">EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList">EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.autoSendInput">AutoSendInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.parameterInput">ParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.triggerTypesInput">TriggerTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.autoSend">AutoSend</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.triggerTypes">TriggerTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.header"></a>

```csharp
public EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList">EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList</a>

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.parameter"></a>

```csharp
public EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList">EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList</a>

---

##### `AutoSendInput`<sup>Optional</sup> <a name="AutoSendInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.autoSendInput"></a>

```csharp
public object AutoSendInput { get; }
```

- *Type:* object

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.parameterInput"></a>

```csharp
public object ParameterInput { get; }
```

- *Type:* object

---

##### `TriggerTypesInput`<sup>Optional</sup> <a name="TriggerTypesInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.triggerTypesInput"></a>

```csharp
public string[] TriggerTypesInput { get; }
```

- *Type:* string[]

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AutoSend`<sup>Required</sup> <a name="AutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.autoSend"></a>

```csharp
public object AutoSend { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TriggerTypes`<sup>Required</sup> <a name="TriggerTypes" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.triggerTypes"></a>

```csharp
public string[] TriggerTypes { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.internalValue"></a>

```csharp
public EventOrchestrationGlobalSetRuleActionsAutomationAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a>

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.get"></a>

```csharp
private EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleActionsExtractionList <a name="EventOrchestrationGlobalSetRuleActionsExtractionList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsExtractionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.get"></a>

```csharp
private EventOrchestrationGlobalSetRuleActionsExtractionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleActionsExtractionOutputReference <a name="EventOrchestrationGlobalSetRuleActionsExtractionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsExtractionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetTemplate">ResetTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetTemplate"></a>

```csharp
private void ResetTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.templateInput">TemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.template">Template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.templateInput"></a>

```csharp
public string TemplateInput { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList <a name="EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.get"></a>

```csharp
private EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference <a name="EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleActionsOutputReference <a name="EventOrchestrationGlobalSetRuleActionsOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putAutomationAction">PutAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putExtraction">PutExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putIncidentCustomFieldUpdate">PutIncidentCustomFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putVariable">PutVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetAnnotate">ResetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetAutomationAction">ResetAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetDropEvent">ResetDropEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetEscalationPolicy">ResetEscalationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetEventAction">ResetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetExtraction">ResetExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetIncidentCustomFieldUpdate">ResetIncidentCustomFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetRouteTo">ResetRouteTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSuppress">ResetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSuspend">ResetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomationAction` <a name="PutAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putAutomationAction"></a>

```csharp
private void PutAutomationAction(EventOrchestrationGlobalSetRuleActionsAutomationAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a>

---

##### `PutExtraction` <a name="PutExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putExtraction"></a>

```csharp
private void PutExtraction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putExtraction.parameter.value"></a>

- *Type:* object

---

##### `PutIncidentCustomFieldUpdate` <a name="PutIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putIncidentCustomFieldUpdate"></a>

```csharp
private void PutIncidentCustomFieldUpdate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putIncidentCustomFieldUpdate.parameter.value"></a>

- *Type:* object

---

##### `PutVariable` <a name="PutVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putVariable"></a>

```csharp
private void PutVariable(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putVariable.parameter.value"></a>

- *Type:* object

---

##### `ResetAnnotate` <a name="ResetAnnotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetAnnotate"></a>

```csharp
private void ResetAnnotate()
```

##### `ResetAutomationAction` <a name="ResetAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetAutomationAction"></a>

```csharp
private void ResetAutomationAction()
```

##### `ResetDropEvent` <a name="ResetDropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetDropEvent"></a>

```csharp
private void ResetDropEvent()
```

##### `ResetEscalationPolicy` <a name="ResetEscalationPolicy" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetEscalationPolicy"></a>

```csharp
private void ResetEscalationPolicy()
```

##### `ResetEventAction` <a name="ResetEventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetEventAction"></a>

```csharp
private void ResetEventAction()
```

##### `ResetExtraction` <a name="ResetExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetExtraction"></a>

```csharp
private void ResetExtraction()
```

##### `ResetIncidentCustomFieldUpdate` <a name="ResetIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetIncidentCustomFieldUpdate"></a>

```csharp
private void ResetIncidentCustomFieldUpdate()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetRouteTo` <a name="ResetRouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetRouteTo"></a>

```csharp
private void ResetRouteTo()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetSuppress` <a name="ResetSuppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSuppress"></a>

```csharp
private void ResetSuppress()
```

##### `ResetSuspend` <a name="ResetSuspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSuspend"></a>

```csharp
private void ResetSuspend()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetVariable"></a>

```csharp
private void ResetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.automationAction">AutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference">EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.extraction">Extraction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList">EventOrchestrationGlobalSetRuleActionsExtractionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.incidentCustomFieldUpdate">IncidentCustomFieldUpdate</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList">EventOrchestrationGlobalSetRuleActionsVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.annotateInput">AnnotateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.automationActionInput">AutomationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.dropEventInput">DropEventInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.escalationPolicyInput">EscalationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.extractionInput">ExtractionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.incidentCustomFieldUpdateInput">IncidentCustomFieldUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.routeToInput">RouteToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suppressInput">SuppressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suspendInput">SuspendInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.variableInput">VariableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.annotate">Annotate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.dropEvent">DropEvent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.escalationPolicy">EscalationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.eventAction">EventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.routeTo">RouteTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suppress">Suppress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suspend">Suspend</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomationAction`<sup>Required</sup> <a name="AutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.automationAction"></a>

```csharp
public EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference AutomationAction { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference">EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference</a>

---

##### `Extraction`<sup>Required</sup> <a name="Extraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.extraction"></a>

```csharp
public EventOrchestrationGlobalSetRuleActionsExtractionList Extraction { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList">EventOrchestrationGlobalSetRuleActionsExtractionList</a>

---

##### `IncidentCustomFieldUpdate`<sup>Required</sup> <a name="IncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.incidentCustomFieldUpdate"></a>

```csharp
public EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList IncidentCustomFieldUpdate { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList</a>

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.variable"></a>

```csharp
public EventOrchestrationGlobalSetRuleActionsVariableList Variable { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList">EventOrchestrationGlobalSetRuleActionsVariableList</a>

---

##### `AnnotateInput`<sup>Optional</sup> <a name="AnnotateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.annotateInput"></a>

```csharp
public string AnnotateInput { get; }
```

- *Type:* string

---

##### `AutomationActionInput`<sup>Optional</sup> <a name="AutomationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.automationActionInput"></a>

```csharp
public EventOrchestrationGlobalSetRuleActionsAutomationAction AutomationActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a>

---

##### `DropEventInput`<sup>Optional</sup> <a name="DropEventInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.dropEventInput"></a>

```csharp
public object DropEventInput { get; }
```

- *Type:* object

---

##### `EscalationPolicyInput`<sup>Optional</sup> <a name="EscalationPolicyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.escalationPolicyInput"></a>

```csharp
public string EscalationPolicyInput { get; }
```

- *Type:* string

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.eventActionInput"></a>

```csharp
public string EventActionInput { get; }
```

- *Type:* string

---

##### `ExtractionInput`<sup>Optional</sup> <a name="ExtractionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.extractionInput"></a>

```csharp
public object ExtractionInput { get; }
```

- *Type:* object

---

##### `IncidentCustomFieldUpdateInput`<sup>Optional</sup> <a name="IncidentCustomFieldUpdateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.incidentCustomFieldUpdateInput"></a>

```csharp
public object IncidentCustomFieldUpdateInput { get; }
```

- *Type:* object

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `RouteToInput`<sup>Optional</sup> <a name="RouteToInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.routeToInput"></a>

```csharp
public string RouteToInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `SuppressInput`<sup>Optional</sup> <a name="SuppressInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suppressInput"></a>

```csharp
public object SuppressInput { get; }
```

- *Type:* object

---

##### `SuspendInput`<sup>Optional</sup> <a name="SuspendInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suspendInput"></a>

```csharp
public double SuspendInput { get; }
```

- *Type:* double

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.variableInput"></a>

```csharp
public object VariableInput { get; }
```

- *Type:* object

---

##### `Annotate`<sup>Required</sup> <a name="Annotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.annotate"></a>

```csharp
public string Annotate { get; }
```

- *Type:* string

---

##### `DropEvent`<sup>Required</sup> <a name="DropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.dropEvent"></a>

```csharp
public object DropEvent { get; }
```

- *Type:* object

---

##### `EscalationPolicy`<sup>Required</sup> <a name="EscalationPolicy" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.escalationPolicy"></a>

```csharp
public string EscalationPolicy { get; }
```

- *Type:* string

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.eventAction"></a>

```csharp
public string EventAction { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `RouteTo`<sup>Required</sup> <a name="RouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.routeTo"></a>

```csharp
public string RouteTo { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Suppress`<sup>Required</sup> <a name="Suppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suppress"></a>

```csharp
public object Suppress { get; }
```

- *Type:* object

---

##### `Suspend`<sup>Required</sup> <a name="Suspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suspend"></a>

```csharp
public double Suspend { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.internalValue"></a>

```csharp
public EventOrchestrationGlobalSetRuleActions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a>

---


### EventOrchestrationGlobalSetRuleActionsVariableList <a name="EventOrchestrationGlobalSetRuleActionsVariableList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsVariableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.get"></a>

```csharp
private EventOrchestrationGlobalSetRuleActionsVariableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleActionsVariableOutputReference <a name="EventOrchestrationGlobalSetRuleActionsVariableOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleActionsVariableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleConditionList <a name="EventOrchestrationGlobalSetRuleConditionList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.get"></a>

```csharp
private EventOrchestrationGlobalSetRuleConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleConditionOutputReference <a name="EventOrchestrationGlobalSetRuleConditionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleList <a name="EventOrchestrationGlobalSetRuleList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.get"></a>

```csharp
private EventOrchestrationGlobalSetRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationGlobalSetRuleOutputReference <a name="EventOrchestrationGlobalSetRuleOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationGlobalSetRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putActions"></a>

```csharp
private void PutActions(EventOrchestrationGlobalSetRuleActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a>

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putCondition"></a>

```csharp
private void PutCondition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* object

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference">EventOrchestrationGlobalSetRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList">EventOrchestrationGlobalSetRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.conditionInput">ConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.actions"></a>

```csharp
public EventOrchestrationGlobalSetRuleActionsOutputReference Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference">EventOrchestrationGlobalSetRuleActionsOutputReference</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.condition"></a>

```csharp
public EventOrchestrationGlobalSetRuleConditionList Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList">EventOrchestrationGlobalSetRuleConditionList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.actionsInput"></a>

```csharp
public EventOrchestrationGlobalSetRuleActions ActionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.conditionInput"></a>

```csharp
public object ConditionInput { get; }
```

- *Type:* object

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



