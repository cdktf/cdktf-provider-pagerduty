# `webhookSubscription` Submodule <a name="`webhookSubscription` Submodule" id="@cdktf/provider-pagerduty.webhookSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebhookSubscription <a name="WebhookSubscription" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription pagerduty_webhook_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new WebhookSubscription(Construct Scope, string Id, WebhookSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig">WebhookSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig">WebhookSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putDeliveryMethod">PutDeliveryMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeliveryMethod` <a name="PutDeliveryMethod" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putDeliveryMethod"></a>

```csharp
private void PutDeliveryMethod(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putDeliveryMethod.parameter.value"></a>

- *Type:* object

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WebhookSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

WebhookSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

WebhookSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

WebhookSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

WebhookSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WebhookSubscription resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WebhookSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WebhookSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WebhookSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.deliveryMethod">DeliveryMethod</a></code> | <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList">WebhookSubscriptionDeliveryMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList">WebhookSubscriptionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.deliveryMethodInput">DeliveryMethodInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.eventsInput">EventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DeliveryMethod`<sup>Required</sup> <a name="DeliveryMethod" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.deliveryMethod"></a>

```csharp
public WebhookSubscriptionDeliveryMethodList DeliveryMethod { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList">WebhookSubscriptionDeliveryMethodList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.filter"></a>

```csharp
public WebhookSubscriptionFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList">WebhookSubscriptionFilterList</a>

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `DeliveryMethodInput`<sup>Optional</sup> <a name="DeliveryMethodInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.deliveryMethodInput"></a>

```csharp
public object DeliveryMethodInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.eventsInput"></a>

```csharp
public string[] EventsInput { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebhookSubscriptionConfig <a name="WebhookSubscriptionConfig" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new WebhookSubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object DeliveryMethod,
    string[] Events,
    object Filter,
    object Active = null,
    string Description = null,
    string Id = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.deliveryMethod">DeliveryMethod</a></code> | <code>object</code> | delivery_method block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.events">Events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#events WebhookSubscription#events}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.active">Active</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#active WebhookSubscription#active}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#description WebhookSubscription#description}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#id WebhookSubscription#id}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#type WebhookSubscription#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeliveryMethod`<sup>Required</sup> <a name="DeliveryMethod" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.deliveryMethod"></a>

```csharp
public object DeliveryMethod { get; set; }
```

- *Type:* object

delivery_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#delivery_method WebhookSubscription#delivery_method}

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.events"></a>

```csharp
public string[] Events { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#events WebhookSubscription#events}.

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#filter WebhookSubscription#filter}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#active WebhookSubscription#active}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#description WebhookSubscription#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#id WebhookSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#type WebhookSubscription#type}.

---

### WebhookSubscriptionDeliveryMethod <a name="WebhookSubscriptionDeliveryMethod" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new WebhookSubscriptionDeliveryMethod {
    object CustomHeader = null,
    object TemporarilyDisabled = null,
    string Type = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.customHeader">CustomHeader</a></code> | <code>object</code> | custom_header block. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.temporarilyDisabled">TemporarilyDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#temporarily_disabled WebhookSubscription#temporarily_disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#type WebhookSubscription#type}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#url WebhookSubscription#url}. |

---

##### `CustomHeader`<sup>Optional</sup> <a name="CustomHeader" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.customHeader"></a>

```csharp
public object CustomHeader { get; set; }
```

- *Type:* object

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#custom_header WebhookSubscription#custom_header}

---

##### `TemporarilyDisabled`<sup>Optional</sup> <a name="TemporarilyDisabled" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.temporarilyDisabled"></a>

```csharp
public object TemporarilyDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#temporarily_disabled WebhookSubscription#temporarily_disabled}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#type WebhookSubscription#type}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethod.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#url WebhookSubscription#url}.

---

### WebhookSubscriptionDeliveryMethodCustomHeader <a name="WebhookSubscriptionDeliveryMethodCustomHeader" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new WebhookSubscriptionDeliveryMethodCustomHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#name WebhookSubscription#name}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#value WebhookSubscription#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#name WebhookSubscription#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#value WebhookSubscription#value}.

---

### WebhookSubscriptionFilter <a name="WebhookSubscriptionFilter" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new WebhookSubscriptionFilter {
    string Type,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#type WebhookSubscription#type}. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#id WebhookSubscription#id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#type WebhookSubscription#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilter.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/webhook_subscription#id WebhookSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### WebhookSubscriptionDeliveryMethodCustomHeaderList <a name="WebhookSubscriptionDeliveryMethodCustomHeaderList" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new WebhookSubscriptionDeliveryMethodCustomHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.get"></a>

```csharp
private WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference <a name="WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebhookSubscriptionDeliveryMethodList <a name="WebhookSubscriptionDeliveryMethodList" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new WebhookSubscriptionDeliveryMethodList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.get"></a>

```csharp
private WebhookSubscriptionDeliveryMethodOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebhookSubscriptionDeliveryMethodOutputReference <a name="WebhookSubscriptionDeliveryMethodOutputReference" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new WebhookSubscriptionDeliveryMethodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.putCustomHeader">PutCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetCustomHeader">ResetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetTemporarilyDisabled">ResetTemporarilyDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomHeader` <a name="PutCustomHeader" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.putCustomHeader"></a>

```csharp
private void PutCustomHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.putCustomHeader.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomHeader` <a name="ResetCustomHeader" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetCustomHeader"></a>

```csharp
private void ResetCustomHeader()
```

##### `ResetTemporarilyDisabled` <a name="ResetTemporarilyDisabled" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetTemporarilyDisabled"></a>

```csharp
private void ResetTemporarilyDisabled()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.customHeader">CustomHeader</a></code> | <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList">WebhookSubscriptionDeliveryMethodCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.customHeaderInput">CustomHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.temporarilyDisabledInput">TemporarilyDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.temporarilyDisabled">TemporarilyDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomHeader`<sup>Required</sup> <a name="CustomHeader" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.customHeader"></a>

```csharp
public WebhookSubscriptionDeliveryMethodCustomHeaderList CustomHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodCustomHeaderList">WebhookSubscriptionDeliveryMethodCustomHeaderList</a>

---

##### `CustomHeaderInput`<sup>Optional</sup> <a name="CustomHeaderInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.customHeaderInput"></a>

```csharp
public object CustomHeaderInput { get; }
```

- *Type:* object

---

##### `TemporarilyDisabledInput`<sup>Optional</sup> <a name="TemporarilyDisabledInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.temporarilyDisabledInput"></a>

```csharp
public object TemporarilyDisabledInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `TemporarilyDisabled`<sup>Required</sup> <a name="TemporarilyDisabled" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.temporarilyDisabled"></a>

```csharp
public object TemporarilyDisabled { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionDeliveryMethodOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebhookSubscriptionFilterList <a name="WebhookSubscriptionFilterList" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new WebhookSubscriptionFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.get"></a>

```csharp
private WebhookSubscriptionFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebhookSubscriptionFilterOutputReference <a name="WebhookSubscriptionFilterOutputReference" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new WebhookSubscriptionFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.webhookSubscription.WebhookSubscriptionFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



