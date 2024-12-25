# `automationActionsActionServiceAssociation` Submodule <a name="`automationActionsActionServiceAssociation` Submodule" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationActionsActionServiceAssociation <a name="AutomationActionsActionServiceAssociation" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.3/docs/resources/automation_actions_action_service_association pagerduty_automation_actions_action_service_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new AutomationActionsActionServiceAssociation(Construct Scope, string Id, AutomationActionsActionServiceAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig">AutomationActionsActionServiceAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig">AutomationActionsActionServiceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationActionsActionServiceAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

AutomationActionsActionServiceAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

AutomationActionsActionServiceAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

AutomationActionsActionServiceAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

AutomationActionsActionServiceAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AutomationActionsActionServiceAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutomationActionsActionServiceAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutomationActionsActionServiceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.3/docs/resources/automation_actions_action_service_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AutomationActionsActionServiceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.actionIdInput">ActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.actionId">ActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActionIdInput`<sup>Optional</sup> <a name="ActionIdInput" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.actionIdInput"></a>

```csharp
public string ActionIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.actionId"></a>

```csharp
public string ActionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationActionsActionServiceAssociationConfig <a name="AutomationActionsActionServiceAssociationConfig" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new AutomationActionsActionServiceAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ActionId,
    string ServiceId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.actionId">ActionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.3/docs/resources/automation_actions_action_service_association#action_id AutomationActionsActionServiceAssociation#action_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.serviceId">ServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.3/docs/resources/automation_actions_action_service_association#service_id AutomationActionsActionServiceAssociation#service_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.3/docs/resources/automation_actions_action_service_association#id AutomationActionsActionServiceAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.actionId"></a>

```csharp
public string ActionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.3/docs/resources/automation_actions_action_service_association#action_id AutomationActionsActionServiceAssociation#action_id}.

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.3/docs/resources/automation_actions_action_service_association#service_id AutomationActionsActionServiceAssociation#service_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsActionServiceAssociation.AutomationActionsActionServiceAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.3/docs/resources/automation_actions_action_service_association#id AutomationActionsActionServiceAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



