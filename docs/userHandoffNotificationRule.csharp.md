# `userHandoffNotificationRule` Submodule <a name="`userHandoffNotificationRule` Submodule" id="@cdktf/provider-pagerduty.userHandoffNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserHandoffNotificationRule <a name="UserHandoffNotificationRule" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/resources/user_handoff_notification_rule pagerduty_user_handoff_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new UserHandoffNotificationRule(Construct Scope, string Id, UserHandoffNotificationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig">UserHandoffNotificationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig">UserHandoffNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.putContactMethod">PutContactMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetContactMethod">ResetContactMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetHandoffType">ResetHandoffType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContactMethod` <a name="PutContactMethod" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.putContactMethod"></a>

```csharp
private void PutContactMethod(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.putContactMethod.parameter.value"></a>

- *Type:* object

---

##### `ResetContactMethod` <a name="ResetContactMethod" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetContactMethod"></a>

```csharp
private void ResetContactMethod()
```

##### `ResetHandoffType` <a name="ResetHandoffType" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetHandoffType"></a>

```csharp
private void ResetHandoffType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a UserHandoffNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

UserHandoffNotificationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

UserHandoffNotificationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

UserHandoffNotificationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

UserHandoffNotificationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a UserHandoffNotificationRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UserHandoffNotificationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UserHandoffNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/resources/user_handoff_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the UserHandoffNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.contactMethod">ContactMethod</a></code> | <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList">UserHandoffNotificationRuleContactMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.contactMethodInput">ContactMethodInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.handoffTypeInput">HandoffTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.notifyAdvanceInMinutesInput">NotifyAdvanceInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.handoffType">HandoffType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.notifyAdvanceInMinutes">NotifyAdvanceInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContactMethod`<sup>Required</sup> <a name="ContactMethod" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.contactMethod"></a>

```csharp
public UserHandoffNotificationRuleContactMethodList ContactMethod { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList">UserHandoffNotificationRuleContactMethodList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ContactMethodInput`<sup>Optional</sup> <a name="ContactMethodInput" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.contactMethodInput"></a>

```csharp
public object ContactMethodInput { get; }
```

- *Type:* object

---

##### `HandoffTypeInput`<sup>Optional</sup> <a name="HandoffTypeInput" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.handoffTypeInput"></a>

```csharp
public string HandoffTypeInput { get; }
```

- *Type:* string

---

##### `NotifyAdvanceInMinutesInput`<sup>Optional</sup> <a name="NotifyAdvanceInMinutesInput" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.notifyAdvanceInMinutesInput"></a>

```csharp
public double NotifyAdvanceInMinutesInput { get; }
```

- *Type:* double

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `HandoffType`<sup>Required</sup> <a name="HandoffType" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.handoffType"></a>

```csharp
public string HandoffType { get; }
```

- *Type:* string

---

##### `NotifyAdvanceInMinutes`<sup>Required</sup> <a name="NotifyAdvanceInMinutes" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.notifyAdvanceInMinutes"></a>

```csharp
public double NotifyAdvanceInMinutes { get; }
```

- *Type:* double

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserHandoffNotificationRuleConfig <a name="UserHandoffNotificationRuleConfig" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new UserHandoffNotificationRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double NotifyAdvanceInMinutes,
    string UserId,
    object ContactMethod = null,
    string HandoffType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.notifyAdvanceInMinutes">NotifyAdvanceInMinutes</a></code> | <code>double</code> | The number of minutes before the handoff to notify the user. Must be greater than or equal to 0. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/resources/user_handoff_notification_rule#user_id UserHandoffNotificationRule#user_id}. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.contactMethod">ContactMethod</a></code> | <code>object</code> | contact_method block. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.handoffType">HandoffType</a></code> | <code>string</code> | The type of handoff to notify for. Possible values are 'both', 'oncall', 'offcall'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NotifyAdvanceInMinutes`<sup>Required</sup> <a name="NotifyAdvanceInMinutes" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.notifyAdvanceInMinutes"></a>

```csharp
public double NotifyAdvanceInMinutes { get; set; }
```

- *Type:* double

The number of minutes before the handoff to notify the user. Must be greater than or equal to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/resources/user_handoff_notification_rule#notify_advance_in_minutes UserHandoffNotificationRule#notify_advance_in_minutes}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/resources/user_handoff_notification_rule#user_id UserHandoffNotificationRule#user_id}.

---

##### `ContactMethod`<sup>Optional</sup> <a name="ContactMethod" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.contactMethod"></a>

```csharp
public object ContactMethod { get; set; }
```

- *Type:* object

contact_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/resources/user_handoff_notification_rule#contact_method UserHandoffNotificationRule#contact_method}

---

##### `HandoffType`<sup>Optional</sup> <a name="HandoffType" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.handoffType"></a>

```csharp
public string HandoffType { get; set; }
```

- *Type:* string

The type of handoff to notify for. Possible values are 'both', 'oncall', 'offcall'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/resources/user_handoff_notification_rule#handoff_type UserHandoffNotificationRule#handoff_type}

---

### UserHandoffNotificationRuleContactMethod <a name="UserHandoffNotificationRuleContactMethod" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new UserHandoffNotificationRuleContactMethod {
    string Id,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/resources/user_handoff_notification_rule#id UserHandoffNotificationRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.property.type">Type</a></code> | <code>string</code> | The type of contact method to notify for. Possible values are 'email_contact_method', 'email_contact_method_reference', 'phone_contact_method', 'phone_contact_method_reference', 'push_notification_contact_method', 'push_notification_contact_method_reference', 'sms_contact_method', 'sms_contact_method_reference'. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/resources/user_handoff_notification_rule#id UserHandoffNotificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of contact method to notify for. Possible values are 'email_contact_method', 'email_contact_method_reference', 'phone_contact_method', 'phone_contact_method_reference', 'push_notification_contact_method', 'push_notification_contact_method_reference', 'sms_contact_method', 'sms_contact_method_reference'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.28.1/docs/resources/user_handoff_notification_rule#type UserHandoffNotificationRule#type}

---

## Classes <a name="Classes" id="Classes"></a>

### UserHandoffNotificationRuleContactMethodList <a name="UserHandoffNotificationRuleContactMethodList" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new UserHandoffNotificationRuleContactMethodList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.get"></a>

```csharp
private UserHandoffNotificationRuleContactMethodOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### UserHandoffNotificationRuleContactMethodOutputReference <a name="UserHandoffNotificationRuleContactMethodOutputReference" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new UserHandoffNotificationRuleContactMethodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



