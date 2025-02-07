# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-pagerduty.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-pagerduty.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service pagerduty_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.Service.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new Service(Construct Scope, string Id, ServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig">ServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceConfig">ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters">PutAlertGroupingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters">PutAutoPauseNotificationsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule">PutIncidentUrgencyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putScheduledActions">PutScheduledActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putSupportHours">PutSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAcknowledgementTimeout">ResetAcknowledgementTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertCreation">ResetAlertCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertGrouping">ResetAlertGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertGroupingParameters">ResetAlertGroupingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertGroupingTimeout">ResetAlertGroupingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAutoPauseNotificationsParameters">ResetAutoPauseNotificationsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAutoResolveTimeout">ResetAutoResolveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetIncidentUrgencyRule">ResetIncidentUrgencyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetResponsePlay">ResetResponsePlay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetScheduledActions">ResetScheduledActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetSupportHours">ResetSupportHours</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.Service.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.service.Service.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.service.Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.service.Service.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.service.Service.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.service.Service.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.service.Service.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.service.Service.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.service.Service.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.service.Service.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.Service.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.service.Service.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.service.Service.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.service.Service.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.service.Service.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.Service.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.service.Service.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.service.Service.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.service.Service.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-pagerduty.service.Service.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.service.Service.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.service.Service.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlertGroupingParameters` <a name="PutAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters"></a>

```csharp
private void PutAlertGroupingParameters(ServiceAlertGroupingParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---

##### `PutAutoPauseNotificationsParameters` <a name="PutAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters"></a>

```csharp
private void PutAutoPauseNotificationsParameters(ServiceAutoPauseNotificationsParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---

##### `PutIncidentUrgencyRule` <a name="PutIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule"></a>

```csharp
private void PutIncidentUrgencyRule(ServiceIncidentUrgencyRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---

##### `PutScheduledActions` <a name="PutScheduledActions" id="@cdktf/provider-pagerduty.service.Service.putScheduledActions"></a>

```csharp
private void PutScheduledActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.service.Service.putScheduledActions.parameter.value"></a>

- *Type:* object

---

##### `PutSupportHours` <a name="PutSupportHours" id="@cdktf/provider-pagerduty.service.Service.putSupportHours"></a>

```csharp
private void PutSupportHours(ServiceSupportHours Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.service.Service.putSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---

##### `ResetAcknowledgementTimeout` <a name="ResetAcknowledgementTimeout" id="@cdktf/provider-pagerduty.service.Service.resetAcknowledgementTimeout"></a>

```csharp
private void ResetAcknowledgementTimeout()
```

##### `ResetAlertCreation` <a name="ResetAlertCreation" id="@cdktf/provider-pagerduty.service.Service.resetAlertCreation"></a>

```csharp
private void ResetAlertCreation()
```

##### `ResetAlertGrouping` <a name="ResetAlertGrouping" id="@cdktf/provider-pagerduty.service.Service.resetAlertGrouping"></a>

```csharp
private void ResetAlertGrouping()
```

##### `ResetAlertGroupingParameters` <a name="ResetAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.resetAlertGroupingParameters"></a>

```csharp
private void ResetAlertGroupingParameters()
```

##### `ResetAlertGroupingTimeout` <a name="ResetAlertGroupingTimeout" id="@cdktf/provider-pagerduty.service.Service.resetAlertGroupingTimeout"></a>

```csharp
private void ResetAlertGroupingTimeout()
```

##### `ResetAutoPauseNotificationsParameters` <a name="ResetAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.resetAutoPauseNotificationsParameters"></a>

```csharp
private void ResetAutoPauseNotificationsParameters()
```

##### `ResetAutoResolveTimeout` <a name="ResetAutoResolveTimeout" id="@cdktf/provider-pagerduty.service.Service.resetAutoResolveTimeout"></a>

```csharp
private void ResetAutoResolveTimeout()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.service.Service.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.service.Service.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncidentUrgencyRule` <a name="ResetIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.resetIncidentUrgencyRule"></a>

```csharp
private void ResetIncidentUrgencyRule()
```

##### `ResetResponsePlay` <a name="ResetResponsePlay" id="@cdktf/provider-pagerduty.service.Service.resetResponsePlay"></a>

```csharp
private void ResetResponsePlay()
```

##### `ResetScheduledActions` <a name="ResetScheduledActions" id="@cdktf/provider-pagerduty.service.Service.resetScheduledActions"></a>

```csharp
private void ResetScheduledActions()
```

##### `ResetSupportHours` <a name="ResetSupportHours" id="@cdktf/provider-pagerduty.service.Service.resetSupportHours"></a>

```csharp
private void ResetSupportHours()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.service.Service.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

Service.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.service.Service.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.service.Service.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

Service.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.service.Service.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

Service.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

Service.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Service to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingParameters">AlertGroupingParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference">ServiceAlertGroupingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParameters">AutoPauseNotificationsParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference">ServiceAutoPauseNotificationsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.htmlUrl">HtmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRule">IncidentUrgencyRule</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference">ServiceIncidentUrgencyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.lastIncidentTimestamp">LastIncidentTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.scheduledActions">ScheduledActions</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList">ServiceScheduledActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.supportHours">SupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference">ServiceSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeoutInput">AcknowledgementTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertCreationInput">AlertCreationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingInput">AlertGroupingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingParametersInput">AlertGroupingParametersInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeoutInput">AlertGroupingTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParametersInput">AutoPauseNotificationsParametersInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeoutInput">AutoResolveTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.escalationPolicyInput">EscalationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRuleInput">IncidentUrgencyRuleInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.responsePlayInput">ResponsePlayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.scheduledActionsInput">ScheduledActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.supportHoursInput">SupportHoursInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeout">AcknowledgementTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertCreation">AlertCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGrouping">AlertGrouping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeout">AlertGroupingTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeout">AutoResolveTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.escalationPolicy">EscalationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.responsePlay">ResponsePlay</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.service.Service.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.service.Service.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.Service.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.service.Service.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.service.Service.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.service.Service.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.service.Service.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.service.Service.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.service.Service.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.service.Service.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.service.Service.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.service.Service.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.service.Service.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.service.Service.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AlertGroupingParameters`<sup>Required</sup> <a name="AlertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingParameters"></a>

```csharp
public ServiceAlertGroupingParametersOutputReference AlertGroupingParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference">ServiceAlertGroupingParametersOutputReference</a>

---

##### `AutoPauseNotificationsParameters`<sup>Required</sup> <a name="AutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParameters"></a>

```csharp
public ServiceAutoPauseNotificationsParametersOutputReference AutoPauseNotificationsParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference">ServiceAutoPauseNotificationsParametersOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-pagerduty.service.Service.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-pagerduty.service.Service.property.htmlUrl"></a>

```csharp
public string HtmlUrl { get; }
```

- *Type:* string

---

##### `IncidentUrgencyRule`<sup>Required</sup> <a name="IncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRule"></a>

```csharp
public ServiceIncidentUrgencyRuleOutputReference IncidentUrgencyRule { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference">ServiceIncidentUrgencyRuleOutputReference</a>

---

##### `LastIncidentTimestamp`<sup>Required</sup> <a name="LastIncidentTimestamp" id="@cdktf/provider-pagerduty.service.Service.property.lastIncidentTimestamp"></a>

```csharp
public string LastIncidentTimestamp { get; }
```

- *Type:* string

---

##### `ScheduledActions`<sup>Required</sup> <a name="ScheduledActions" id="@cdktf/provider-pagerduty.service.Service.property.scheduledActions"></a>

```csharp
public ServiceScheduledActionsList ScheduledActions { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList">ServiceScheduledActionsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-pagerduty.service.Service.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SupportHours`<sup>Required</sup> <a name="SupportHours" id="@cdktf/provider-pagerduty.service.Service.property.supportHours"></a>

```csharp
public ServiceSupportHoursOutputReference SupportHours { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference">ServiceSupportHoursOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.Service.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AcknowledgementTimeoutInput`<sup>Optional</sup> <a name="AcknowledgementTimeoutInput" id="@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeoutInput"></a>

```csharp
public string AcknowledgementTimeoutInput { get; }
```

- *Type:* string

---

##### `AlertCreationInput`<sup>Optional</sup> <a name="AlertCreationInput" id="@cdktf/provider-pagerduty.service.Service.property.alertCreationInput"></a>

```csharp
public string AlertCreationInput { get; }
```

- *Type:* string

---

##### `AlertGroupingInput`<sup>Optional</sup> <a name="AlertGroupingInput" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingInput"></a>

```csharp
public string AlertGroupingInput { get; }
```

- *Type:* string

---

##### `AlertGroupingParametersInput`<sup>Optional</sup> <a name="AlertGroupingParametersInput" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingParametersInput"></a>

```csharp
public ServiceAlertGroupingParameters AlertGroupingParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---

##### `AlertGroupingTimeoutInput`<sup>Optional</sup> <a name="AlertGroupingTimeoutInput" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeoutInput"></a>

```csharp
public string AlertGroupingTimeoutInput { get; }
```

- *Type:* string

---

##### `AutoPauseNotificationsParametersInput`<sup>Optional</sup> <a name="AutoPauseNotificationsParametersInput" id="@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParametersInput"></a>

```csharp
public ServiceAutoPauseNotificationsParameters AutoPauseNotificationsParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---

##### `AutoResolveTimeoutInput`<sup>Optional</sup> <a name="AutoResolveTimeoutInput" id="@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeoutInput"></a>

```csharp
public string AutoResolveTimeoutInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.service.Service.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EscalationPolicyInput`<sup>Optional</sup> <a name="EscalationPolicyInput" id="@cdktf/provider-pagerduty.service.Service.property.escalationPolicyInput"></a>

```csharp
public string EscalationPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.service.Service.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncidentUrgencyRuleInput`<sup>Optional</sup> <a name="IncidentUrgencyRuleInput" id="@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRuleInput"></a>

```csharp
public ServiceIncidentUrgencyRule IncidentUrgencyRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.service.Service.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResponsePlayInput`<sup>Optional</sup> <a name="ResponsePlayInput" id="@cdktf/provider-pagerduty.service.Service.property.responsePlayInput"></a>

```csharp
public string ResponsePlayInput { get; }
```

- *Type:* string

---

##### `ScheduledActionsInput`<sup>Optional</sup> <a name="ScheduledActionsInput" id="@cdktf/provider-pagerduty.service.Service.property.scheduledActionsInput"></a>

```csharp
public object ScheduledActionsInput { get; }
```

- *Type:* object

---

##### `SupportHoursInput`<sup>Optional</sup> <a name="SupportHoursInput" id="@cdktf/provider-pagerduty.service.Service.property.supportHoursInput"></a>

```csharp
public ServiceSupportHours SupportHoursInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---

##### `AcknowledgementTimeout`<sup>Required</sup> <a name="AcknowledgementTimeout" id="@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeout"></a>

```csharp
public string AcknowledgementTimeout { get; }
```

- *Type:* string

---

##### `AlertCreation`<sup>Required</sup> <a name="AlertCreation" id="@cdktf/provider-pagerduty.service.Service.property.alertCreation"></a>

```csharp
public string AlertCreation { get; }
```

- *Type:* string

---

##### `AlertGrouping`<sup>Required</sup> <a name="AlertGrouping" id="@cdktf/provider-pagerduty.service.Service.property.alertGrouping"></a>

```csharp
public string AlertGrouping { get; }
```

- *Type:* string

---

##### `AlertGroupingTimeout`<sup>Required</sup> <a name="AlertGroupingTimeout" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeout"></a>

```csharp
public string AlertGroupingTimeout { get; }
```

- *Type:* string

---

##### `AutoResolveTimeout`<sup>Required</sup> <a name="AutoResolveTimeout" id="@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeout"></a>

```csharp
public string AutoResolveTimeout { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.service.Service.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EscalationPolicy`<sup>Required</sup> <a name="EscalationPolicy" id="@cdktf/provider-pagerduty.service.Service.property.escalationPolicy"></a>

```csharp
public string EscalationPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.service.Service.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.service.Service.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResponsePlay`<sup>Required</sup> <a name="ResponsePlay" id="@cdktf/provider-pagerduty.service.Service.property.responsePlay"></a>

```csharp
public string ResponsePlay { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.service.Service.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAlertGroupingParameters <a name="ServiceAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceAlertGroupingParameters {
    ServiceAlertGroupingParametersConfig Config = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.config"></a>

```csharp
public ServiceAlertGroupingParametersConfig Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#config Service#config}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}.

---

### ServiceAlertGroupingParametersConfig <a name="ServiceAlertGroupingParametersConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceAlertGroupingParametersConfig {
    string Aggregate = null,
    string[] Fields = null,
    double Timeout = null,
    double TimeWindow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.aggregate">Aggregate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#aggregate Service#aggregate}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.fields">Fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#fields Service#fields}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#timeout Service#timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeWindow">TimeWindow</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#time_window Service#time_window}. |

---

##### `Aggregate`<sup>Optional</sup> <a name="Aggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.aggregate"></a>

```csharp
public string Aggregate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#aggregate Service#aggregate}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.fields"></a>

```csharp
public string[] Fields { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#fields Service#fields}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#timeout Service#timeout}.

---

##### `TimeWindow`<sup>Optional</sup> <a name="TimeWindow" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeWindow"></a>

```csharp
public double TimeWindow { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#time_window Service#time_window}.

---

### ServiceAutoPauseNotificationsParameters <a name="ServiceAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceAutoPauseNotificationsParameters {
    object Enabled = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#enabled Service#enabled}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#timeout Service#timeout}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#enabled Service#enabled}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#timeout Service#timeout}.

---

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-pagerduty.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EscalationPolicy,
    string Name,
    string AcknowledgementTimeout = null,
    string AlertCreation = null,
    string AlertGrouping = null,
    ServiceAlertGroupingParameters AlertGroupingParameters = null,
    string AlertGroupingTimeout = null,
    ServiceAutoPauseNotificationsParameters AutoPauseNotificationsParameters = null,
    string AutoResolveTimeout = null,
    string Description = null,
    string Id = null,
    ServiceIncidentUrgencyRule IncidentUrgencyRule = null,
    string ResponsePlay = null,
    object ScheduledActions = null,
    ServiceSupportHours SupportHours = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.escalationPolicy">EscalationPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#escalation_policy Service#escalation_policy}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#name Service#name}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.acknowledgementTimeout">AcknowledgementTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertCreation">AlertCreation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#alert_creation Service#alert_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGrouping">AlertGrouping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#alert_grouping Service#alert_grouping}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingParameters">AlertGroupingParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | alert_grouping_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingTimeout">AlertGroupingTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.autoPauseNotificationsParameters">AutoPauseNotificationsParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | auto_pause_notifications_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.autoResolveTimeout">AutoResolveTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#description Service#description}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.incidentUrgencyRule">IncidentUrgencyRule</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | incident_urgency_rule block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.responsePlay">ResponsePlay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#response_play Service#response_play}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.scheduledActions">ScheduledActions</a></code> | <code>object</code> | scheduled_actions block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.supportHours">SupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | support_hours block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EscalationPolicy`<sup>Required</sup> <a name="EscalationPolicy" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.escalationPolicy"></a>

```csharp
public string EscalationPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#escalation_policy Service#escalation_policy}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#name Service#name}.

---

##### `AcknowledgementTimeout`<sup>Optional</sup> <a name="AcknowledgementTimeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.acknowledgementTimeout"></a>

```csharp
public string AcknowledgementTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}.

---

##### `AlertCreation`<sup>Optional</sup> <a name="AlertCreation" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertCreation"></a>

```csharp
public string AlertCreation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#alert_creation Service#alert_creation}.

---

##### `AlertGrouping`<sup>Optional</sup> <a name="AlertGrouping" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGrouping"></a>

```csharp
public string AlertGrouping { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#alert_grouping Service#alert_grouping}.

---

##### `AlertGroupingParameters`<sup>Optional</sup> <a name="AlertGroupingParameters" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingParameters"></a>

```csharp
public ServiceAlertGroupingParameters AlertGroupingParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

alert_grouping_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#alert_grouping_parameters Service#alert_grouping_parameters}

---

##### `AlertGroupingTimeout`<sup>Optional</sup> <a name="AlertGroupingTimeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingTimeout"></a>

```csharp
public string AlertGroupingTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}.

---

##### `AutoPauseNotificationsParameters`<sup>Optional</sup> <a name="AutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.autoPauseNotificationsParameters"></a>

```csharp
public ServiceAutoPauseNotificationsParameters AutoPauseNotificationsParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

auto_pause_notifications_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#auto_pause_notifications_parameters Service#auto_pause_notifications_parameters}

---

##### `AutoResolveTimeout`<sup>Optional</sup> <a name="AutoResolveTimeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.autoResolveTimeout"></a>

```csharp
public string AutoResolveTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#description Service#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncidentUrgencyRule`<sup>Optional</sup> <a name="IncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.incidentUrgencyRule"></a>

```csharp
public ServiceIncidentUrgencyRule IncidentUrgencyRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

incident_urgency_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#incident_urgency_rule Service#incident_urgency_rule}

---

##### `ResponsePlay`<sup>Optional</sup> <a name="ResponsePlay" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.responsePlay"></a>

```csharp
public string ResponsePlay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#response_play Service#response_play}.

---

##### `ScheduledActions`<sup>Optional</sup> <a name="ScheduledActions" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.scheduledActions"></a>

```csharp
public object ScheduledActions { get; set; }
```

- *Type:* object

scheduled_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#scheduled_actions Service#scheduled_actions}

---

##### `SupportHours`<sup>Optional</sup> <a name="SupportHours" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.supportHours"></a>

```csharp
public ServiceSupportHours SupportHours { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#support_hours Service#support_hours}

---

### ServiceIncidentUrgencyRule <a name="ServiceIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceIncidentUrgencyRule {
    string Type,
    ServiceIncidentUrgencyRuleDuringSupportHours DuringSupportHours = null,
    ServiceIncidentUrgencyRuleOutsideSupportHours OutsideSupportHours = null,
    string Urgency = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.duringSupportHours">DuringSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | during_support_hours block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.outsideSupportHours">OutsideSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | outside_support_hours block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.urgency">Urgency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#urgency Service#urgency}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}.

---

##### `DuringSupportHours`<sup>Optional</sup> <a name="DuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.duringSupportHours"></a>

```csharp
public ServiceIncidentUrgencyRuleDuringSupportHours DuringSupportHours { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

during_support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#during_support_hours Service#during_support_hours}

---

##### `OutsideSupportHours`<sup>Optional</sup> <a name="OutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.outsideSupportHours"></a>

```csharp
public ServiceIncidentUrgencyRuleOutsideSupportHours OutsideSupportHours { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

outside_support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#outside_support_hours Service#outside_support_hours}

---

##### `Urgency`<sup>Optional</sup> <a name="Urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.urgency"></a>

```csharp
public string Urgency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#urgency Service#urgency}.

---

### ServiceIncidentUrgencyRuleDuringSupportHours <a name="ServiceIncidentUrgencyRuleDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceIncidentUrgencyRuleDuringSupportHours {
    string Type = null,
    string Urgency = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.urgency">Urgency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#urgency Service#urgency}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}.

---

##### `Urgency`<sup>Optional</sup> <a name="Urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.urgency"></a>

```csharp
public string Urgency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#urgency Service#urgency}.

---

### ServiceIncidentUrgencyRuleOutsideSupportHours <a name="ServiceIncidentUrgencyRuleOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceIncidentUrgencyRuleOutsideSupportHours {
    string Type = null,
    string Urgency = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.urgency">Urgency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#urgency Service#urgency}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}.

---

##### `Urgency`<sup>Optional</sup> <a name="Urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.urgency"></a>

```csharp
public string Urgency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#urgency Service#urgency}.

---

### ServiceScheduledActions <a name="ServiceScheduledActions" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceScheduledActions {
    object At = null,
    string ToUrgency = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.at">At</a></code> | <code>object</code> | at block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.toUrgency">ToUrgency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#to_urgency Service#to_urgency}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}. |

---

##### `At`<sup>Optional</sup> <a name="At" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.at"></a>

```csharp
public object At { get; set; }
```

- *Type:* object

at block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#at Service#at}

---

##### `ToUrgency`<sup>Optional</sup> <a name="ToUrgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.toUrgency"></a>

```csharp
public string ToUrgency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#to_urgency Service#to_urgency}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}.

---

### ServiceScheduledActionsAt <a name="ServiceScheduledActionsAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceScheduledActionsAt {
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#name Service#name}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#name Service#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}.

---

### ServiceSupportHours <a name="ServiceSupportHours" id="@cdktf/provider-pagerduty.service.ServiceSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceSupportHours {
    double[] DaysOfWeek = null,
    string EndTime = null,
    string StartTime = null,
    string TimeZone = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.daysOfWeek">DaysOfWeek</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#days_of_week Service#days_of_week}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#end_time Service#end_time}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#start_time Service#start_time}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#time_zone Service#time_zone}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}. |

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.daysOfWeek"></a>

```csharp
public double[] DaysOfWeek { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#days_of_week Service#days_of_week}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#end_time Service#end_time}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#start_time Service#start_time}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#time_zone Service#time_zone}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.20.0/docs/resources/service#type Service#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceAlertGroupingParametersConfigOutputReference <a name="ServiceAlertGroupingParametersConfigOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceAlertGroupingParametersConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetAggregate">ResetAggregate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeWindow">ResetTimeWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregate` <a name="ResetAggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetAggregate"></a>

```csharp
private void ResetAggregate()
```

##### `ResetFields` <a name="ResetFields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetFields"></a>

```csharp
private void ResetFields()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetTimeWindow` <a name="ResetTimeWindow" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeWindow"></a>

```csharp
private void ResetTimeWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregateInput">AggregateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindowInput">TimeWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregate">Aggregate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fields">Fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindow">TimeWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregateInput`<sup>Optional</sup> <a name="AggregateInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregateInput"></a>

```csharp
public string AggregateInput { get; }
```

- *Type:* string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fieldsInput"></a>

```csharp
public string[] FieldsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindowInput"></a>

```csharp
public double TimeWindowInput { get; }
```

- *Type:* double

---

##### `Aggregate`<sup>Required</sup> <a name="Aggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregate"></a>

```csharp
public string Aggregate { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fields"></a>

```csharp
public string[] Fields { get; }
```

- *Type:* string[]

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindow"></a>

```csharp
public double TimeWindow { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.internalValue"></a>

```csharp
public ServiceAlertGroupingParametersConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---


### ServiceAlertGroupingParametersOutputReference <a name="ServiceAlertGroupingParametersOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceAlertGroupingParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig"></a>

```csharp
private void PutConfig(ServiceAlertGroupingParametersConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference">ServiceAlertGroupingParametersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.config"></a>

```csharp
public ServiceAlertGroupingParametersConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference">ServiceAlertGroupingParametersConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.configInput"></a>

```csharp
public ServiceAlertGroupingParametersConfig ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.internalValue"></a>

```csharp
public ServiceAlertGroupingParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---


### ServiceAutoPauseNotificationsParametersOutputReference <a name="ServiceAutoPauseNotificationsParametersOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceAutoPauseNotificationsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.internalValue"></a>

```csharp
public ServiceAutoPauseNotificationsParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---


### ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference <a name="ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetUrgency">ResetUrgency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUrgency` <a name="ResetUrgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetUrgency"></a>

```csharp
private void ResetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgencyInput">UrgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgency">Urgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UrgencyInput`<sup>Optional</sup> <a name="UrgencyInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgencyInput"></a>

```csharp
public string UrgencyInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Urgency`<sup>Required</sup> <a name="Urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgency"></a>

```csharp
public string Urgency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.internalValue"></a>

```csharp
public ServiceIncidentUrgencyRuleDuringSupportHours InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---


### ServiceIncidentUrgencyRuleOutputReference <a name="ServiceIncidentUrgencyRuleOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceIncidentUrgencyRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours">PutDuringSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours">PutOutsideSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetDuringSupportHours">ResetDuringSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetOutsideSupportHours">ResetOutsideSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetUrgency">ResetUrgency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDuringSupportHours` <a name="PutDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours"></a>

```csharp
private void PutDuringSupportHours(ServiceIncidentUrgencyRuleDuringSupportHours Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---

##### `PutOutsideSupportHours` <a name="PutOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours"></a>

```csharp
private void PutOutsideSupportHours(ServiceIncidentUrgencyRuleOutsideSupportHours Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---

##### `ResetDuringSupportHours` <a name="ResetDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetDuringSupportHours"></a>

```csharp
private void ResetDuringSupportHours()
```

##### `ResetOutsideSupportHours` <a name="ResetOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetOutsideSupportHours"></a>

```csharp
private void ResetOutsideSupportHours()
```

##### `ResetUrgency` <a name="ResetUrgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetUrgency"></a>

```csharp
private void ResetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHours">DuringSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference">ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHours">OutsideSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference">ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHoursInput">DuringSupportHoursInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHoursInput">OutsideSupportHoursInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgencyInput">UrgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgency">Urgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DuringSupportHours`<sup>Required</sup> <a name="DuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHours"></a>

```csharp
public ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference DuringSupportHours { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference">ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference</a>

---

##### `OutsideSupportHours`<sup>Required</sup> <a name="OutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHours"></a>

```csharp
public ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference OutsideSupportHours { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference">ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference</a>

---

##### `DuringSupportHoursInput`<sup>Optional</sup> <a name="DuringSupportHoursInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHoursInput"></a>

```csharp
public ServiceIncidentUrgencyRuleDuringSupportHours DuringSupportHoursInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---

##### `OutsideSupportHoursInput`<sup>Optional</sup> <a name="OutsideSupportHoursInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHoursInput"></a>

```csharp
public ServiceIncidentUrgencyRuleOutsideSupportHours OutsideSupportHoursInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UrgencyInput`<sup>Optional</sup> <a name="UrgencyInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgencyInput"></a>

```csharp
public string UrgencyInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Urgency`<sup>Required</sup> <a name="Urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgency"></a>

```csharp
public string Urgency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.internalValue"></a>

```csharp
public ServiceIncidentUrgencyRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---


### ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference <a name="ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetUrgency">ResetUrgency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUrgency` <a name="ResetUrgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetUrgency"></a>

```csharp
private void ResetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgencyInput">UrgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgency">Urgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UrgencyInput`<sup>Optional</sup> <a name="UrgencyInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgencyInput"></a>

```csharp
public string UrgencyInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Urgency`<sup>Required</sup> <a name="Urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgency"></a>

```csharp
public string Urgency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.internalValue"></a>

```csharp
public ServiceIncidentUrgencyRuleOutsideSupportHours InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---


### ServiceScheduledActionsAtList <a name="ServiceScheduledActionsAtList" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceScheduledActionsAtList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get"></a>

```csharp
private ServiceScheduledActionsAtOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceScheduledActionsAtOutputReference <a name="ServiceScheduledActionsAtOutputReference" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceScheduledActionsAtOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceScheduledActionsList <a name="ServiceScheduledActionsList" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceScheduledActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get"></a>

```csharp
private ServiceScheduledActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceScheduledActionsOutputReference <a name="ServiceScheduledActionsOutputReference" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceScheduledActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt">PutAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetAt">ResetAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetToUrgency">ResetToUrgency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAt` <a name="PutAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt"></a>

```csharp
private void PutAt(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt.parameter.value"></a>

- *Type:* object

---

##### `ResetAt` <a name="ResetAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetAt"></a>

```csharp
private void ResetAt()
```

##### `ResetToUrgency` <a name="ResetToUrgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetToUrgency"></a>

```csharp
private void ResetToUrgency()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.at">At</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList">ServiceScheduledActionsAtList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.atInput">AtInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgencyInput">ToUrgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgency">ToUrgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `At`<sup>Required</sup> <a name="At" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.at"></a>

```csharp
public ServiceScheduledActionsAtList At { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList">ServiceScheduledActionsAtList</a>

---

##### `AtInput`<sup>Optional</sup> <a name="AtInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.atInput"></a>

```csharp
public object AtInput { get; }
```

- *Type:* object

---

##### `ToUrgencyInput`<sup>Optional</sup> <a name="ToUrgencyInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgencyInput"></a>

```csharp
public string ToUrgencyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ToUrgency`<sup>Required</sup> <a name="ToUrgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgency"></a>

```csharp
public string ToUrgency { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceSupportHoursOutputReference <a name="ServiceSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new ServiceSupportHoursOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeekInput"></a>

```csharp
public double[] DaysOfWeekInput { get; }
```

- *Type:* double[]

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeek"></a>

```csharp
public double[] DaysOfWeek { get; }
```

- *Type:* double[]

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.internalValue"></a>

```csharp
public ServiceSupportHours InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---



