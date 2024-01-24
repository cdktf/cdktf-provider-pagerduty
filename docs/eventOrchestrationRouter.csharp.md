# `eventOrchestrationRouter` Submodule <a name="`eventOrchestrationRouter` Submodule" id="@cdktf/provider-pagerduty.eventOrchestrationRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventOrchestrationRouter <a name="EventOrchestrationRouter" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router pagerduty_event_orchestration_router}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouter(Construct Scope, string Id, EventOrchestrationRouterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig">EventOrchestrationRouterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig">EventOrchestrationRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.putCatchAll">PutCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.putSet">PutSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCatchAll` <a name="PutCatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.putCatchAll"></a>

```csharp
private void PutCatchAll(EventOrchestrationRouterCatchAll Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.putCatchAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAll">EventOrchestrationRouterCatchAll</a>

---

##### `PutSet` <a name="PutSet" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.putSet"></a>

```csharp
private void PutSet(EventOrchestrationRouterSet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.putSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet">EventOrchestrationRouterSet</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventOrchestrationRouter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EventOrchestrationRouter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EventOrchestrationRouter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EventOrchestrationRouter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EventOrchestrationRouter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EventOrchestrationRouter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventOrchestrationRouter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventOrchestrationRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EventOrchestrationRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.catchAll">CatchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference">EventOrchestrationRouterCatchAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.set">Set</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference">EventOrchestrationRouterSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.catchAllInput">CatchAllInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAll">EventOrchestrationRouterCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.eventOrchestrationInput">EventOrchestrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.setInput">SetInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet">EventOrchestrationRouterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.eventOrchestration">EventOrchestration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CatchAll`<sup>Required</sup> <a name="CatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.catchAll"></a>

```csharp
public EventOrchestrationRouterCatchAllOutputReference CatchAll { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference">EventOrchestrationRouterCatchAllOutputReference</a>

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.set"></a>

```csharp
public EventOrchestrationRouterSetOutputReference Set { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference">EventOrchestrationRouterSetOutputReference</a>

---

##### `CatchAllInput`<sup>Optional</sup> <a name="CatchAllInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.catchAllInput"></a>

```csharp
public EventOrchestrationRouterCatchAll CatchAllInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAll">EventOrchestrationRouterCatchAll</a>

---

##### `EventOrchestrationInput`<sup>Optional</sup> <a name="EventOrchestrationInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.eventOrchestrationInput"></a>

```csharp
public string EventOrchestrationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.setInput"></a>

```csharp
public EventOrchestrationRouterSet SetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet">EventOrchestrationRouterSet</a>

---

##### `EventOrchestration`<sup>Required</sup> <a name="EventOrchestration" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.eventOrchestration"></a>

```csharp
public string EventOrchestration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventOrchestrationRouterCatchAll <a name="EventOrchestrationRouterCatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAll.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterCatchAll {
    EventOrchestrationRouterCatchAllActions Actions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAll.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActions">EventOrchestrationRouterCatchAllActions</a></code> | actions block. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAll.property.actions"></a>

```csharp
public EventOrchestrationRouterCatchAllActions Actions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActions">EventOrchestrationRouterCatchAllActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#actions EventOrchestrationRouter#actions}

---

### EventOrchestrationRouterCatchAllActions <a name="EventOrchestrationRouterCatchAllActions" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterCatchAllActions {
    string RouteTo
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActions.property.routeTo">RouteTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#route_to EventOrchestrationRouter#route_to}. |

---

##### `RouteTo`<sup>Required</sup> <a name="RouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActions.property.routeTo"></a>

```csharp
public string RouteTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#route_to EventOrchestrationRouter#route_to}.

---

### EventOrchestrationRouterConfig <a name="EventOrchestrationRouterConfig" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    EventOrchestrationRouterCatchAll CatchAll,
    string EventOrchestration,
    EventOrchestrationRouterSet Set,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.catchAll">CatchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAll">EventOrchestrationRouterCatchAll</a></code> | catch_all block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.eventOrchestration">EventOrchestration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#event_orchestration EventOrchestrationRouter#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.set">Set</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet">EventOrchestrationRouterSet</a></code> | set block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#id EventOrchestrationRouter#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CatchAll`<sup>Required</sup> <a name="CatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.catchAll"></a>

```csharp
public EventOrchestrationRouterCatchAll CatchAll { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAll">EventOrchestrationRouterCatchAll</a>

catch_all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#catch_all EventOrchestrationRouter#catch_all}

---

##### `EventOrchestration`<sup>Required</sup> <a name="EventOrchestration" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.eventOrchestration"></a>

```csharp
public string EventOrchestration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#event_orchestration EventOrchestrationRouter#event_orchestration}.

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.set"></a>

```csharp
public EventOrchestrationRouterSet Set { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet">EventOrchestrationRouterSet</a>

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#set EventOrchestrationRouter#set}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#id EventOrchestrationRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EventOrchestrationRouterSet <a name="EventOrchestrationRouterSet" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterSet {
    string Id,
    object Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#id EventOrchestrationRouter#id}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet.property.rule">Rule</a></code> | <code>object</code> | rule block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#id EventOrchestrationRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#rule EventOrchestrationRouter#rule}

---

### EventOrchestrationRouterSetRule <a name="EventOrchestrationRouterSetRule" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterSetRule {
    EventOrchestrationRouterSetRuleActions Actions,
    object Condition = null,
    object Disabled = null,
    string Label = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRule.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActions">EventOrchestrationRouterSetRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRule.property.condition">Condition</a></code> | <code>object</code> | condition block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRule.property.disabled">Disabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#disabled EventOrchestrationRouter#disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRule.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#label EventOrchestrationRouter#label}. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRule.property.actions"></a>

```csharp
public EventOrchestrationRouterSetRuleActions Actions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActions">EventOrchestrationRouterSetRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#actions EventOrchestrationRouter#actions}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRule.property.condition"></a>

```csharp
public object Condition { get; set; }
```

- *Type:* object

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#condition EventOrchestrationRouter#condition}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRule.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#disabled EventOrchestrationRouter#disabled}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRule.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#label EventOrchestrationRouter#label}.

---

### EventOrchestrationRouterSetRuleActions <a name="EventOrchestrationRouterSetRuleActions" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterSetRuleActions {
    string RouteTo
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActions.property.routeTo">RouteTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#route_to EventOrchestrationRouter#route_to}. |

---

##### `RouteTo`<sup>Required</sup> <a name="RouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActions.property.routeTo"></a>

```csharp
public string RouteTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#route_to EventOrchestrationRouter#route_to}.

---

### EventOrchestrationRouterSetRuleCondition <a name="EventOrchestrationRouterSetRuleCondition" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterSetRuleCondition {
    string Expression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#expression EventOrchestrationRouter#expression}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.0/docs/resources/event_orchestration_router#expression EventOrchestrationRouter#expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventOrchestrationRouterCatchAllActionsOutputReference <a name="EventOrchestrationRouterCatchAllActionsOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterCatchAllActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.property.routeToInput">RouteToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.property.routeTo">RouteTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActions">EventOrchestrationRouterCatchAllActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouteToInput`<sup>Optional</sup> <a name="RouteToInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.property.routeToInput"></a>

```csharp
public string RouteToInput { get; }
```

- *Type:* string

---

##### `RouteTo`<sup>Required</sup> <a name="RouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.property.routeTo"></a>

```csharp
public string RouteTo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference.property.internalValue"></a>

```csharp
public EventOrchestrationRouterCatchAllActions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActions">EventOrchestrationRouterCatchAllActions</a>

---


### EventOrchestrationRouterCatchAllOutputReference <a name="EventOrchestrationRouterCatchAllOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterCatchAllOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.putActions">PutActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.putActions"></a>

```csharp
private void PutActions(EventOrchestrationRouterCatchAllActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActions">EventOrchestrationRouterCatchAllActions</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference">EventOrchestrationRouterCatchAllActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActions">EventOrchestrationRouterCatchAllActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAll">EventOrchestrationRouterCatchAll</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.property.actions"></a>

```csharp
public EventOrchestrationRouterCatchAllActionsOutputReference Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActionsOutputReference">EventOrchestrationRouterCatchAllActionsOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.property.actionsInput"></a>

```csharp
public EventOrchestrationRouterCatchAllActions ActionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllActions">EventOrchestrationRouterCatchAllActions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAllOutputReference.property.internalValue"></a>

```csharp
public EventOrchestrationRouterCatchAll InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterCatchAll">EventOrchestrationRouterCatchAll</a>

---


### EventOrchestrationRouterSetOutputReference <a name="EventOrchestrationRouterSetOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.resetRule"></a>

```csharp
private void ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList">EventOrchestrationRouterSetRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet">EventOrchestrationRouterSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.rule"></a>

```csharp
public EventOrchestrationRouterSetRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList">EventOrchestrationRouterSetRuleList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetOutputReference.property.internalValue"></a>

```csharp
public EventOrchestrationRouterSet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSet">EventOrchestrationRouterSet</a>

---


### EventOrchestrationRouterSetRuleActionsOutputReference <a name="EventOrchestrationRouterSetRuleActionsOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterSetRuleActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.property.routeToInput">RouteToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.property.routeTo">RouteTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActions">EventOrchestrationRouterSetRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouteToInput`<sup>Optional</sup> <a name="RouteToInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.property.routeToInput"></a>

```csharp
public string RouteToInput { get; }
```

- *Type:* string

---

##### `RouteTo`<sup>Required</sup> <a name="RouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.property.routeTo"></a>

```csharp
public string RouteTo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference.property.internalValue"></a>

```csharp
public EventOrchestrationRouterSetRuleActions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActions">EventOrchestrationRouterSetRuleActions</a>

---


### EventOrchestrationRouterSetRuleConditionList <a name="EventOrchestrationRouterSetRuleConditionList" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterSetRuleConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.get"></a>

```csharp
private EventOrchestrationRouterSetRuleConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationRouterSetRuleConditionOutputReference <a name="EventOrchestrationRouterSetRuleConditionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterSetRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationRouterSetRuleList <a name="EventOrchestrationRouterSetRuleList" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterSetRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.get"></a>

```csharp
private EventOrchestrationRouterSetRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventOrchestrationRouterSetRuleOutputReference <a name="EventOrchestrationRouterSetRuleOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EventOrchestrationRouterSetRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.putActions"></a>

```csharp
private void PutActions(EventOrchestrationRouterSetRuleActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActions">EventOrchestrationRouterSetRuleActions</a>

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.putCondition"></a>

```csharp
private void PutCondition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* object

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference">EventOrchestrationRouterSetRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList">EventOrchestrationRouterSetRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActions">EventOrchestrationRouterSetRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.conditionInput">ConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.actions"></a>

```csharp
public EventOrchestrationRouterSetRuleActionsOutputReference Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActionsOutputReference">EventOrchestrationRouterSetRuleActionsOutputReference</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.condition"></a>

```csharp
public EventOrchestrationRouterSetRuleConditionList Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleConditionList">EventOrchestrationRouterSetRuleConditionList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.actionsInput"></a>

```csharp
public EventOrchestrationRouterSetRuleActions ActionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleActions">EventOrchestrationRouterSetRuleActions</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.conditionInput"></a>

```csharp
public object ConditionInput { get; }
```

- *Type:* object

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationRouter.EventOrchestrationRouterSetRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



