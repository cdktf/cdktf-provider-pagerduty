# `escalationPolicy` Submodule <a name="`escalationPolicy` Submodule" id="@cdktf/provider-pagerduty.escalationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EscalationPolicy <a name="EscalationPolicy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy pagerduty_escalation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EscalationPolicy(Construct Scope, string Id, EscalationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig">EscalationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig">EscalationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetNumLoops">ResetNumLoops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNumLoops` <a name="ResetNumLoops" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetNumLoops"></a>

```csharp
private void ResetNumLoops()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetTeams"></a>

```csharp
private void ResetTeams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EscalationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EscalationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EscalationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EscalationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

EscalationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EscalationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EscalationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EscalationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EscalationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList">EscalationPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.numLoopsInput">NumLoopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.numLoops">NumLoops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.rule"></a>

```csharp
public EscalationPolicyRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList">EscalationPolicyRuleList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NumLoopsInput`<sup>Optional</sup> <a name="NumLoopsInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.numLoopsInput"></a>

```csharp
public double NumLoopsInput { get; }
```

- *Type:* double

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumLoops`<sup>Required</sup> <a name="NumLoops" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.numLoops"></a>

```csharp
public double NumLoops { get; }
```

- *Type:* double

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EscalationPolicyConfig <a name="EscalationPolicyConfig" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EscalationPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Rule,
    string Description = null,
    string Id = null,
    double NumLoops = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#name EscalationPolicy#name}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.rule">Rule</a></code> | <code>object</code> | rule block. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#description EscalationPolicy#description}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#id EscalationPolicy#id}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.numLoops">NumLoops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#num_loops EscalationPolicy#num_loops}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.teams">Teams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#teams EscalationPolicy#teams}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#name EscalationPolicy#name}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#rule EscalationPolicy#rule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#description EscalationPolicy#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#id EscalationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NumLoops`<sup>Optional</sup> <a name="NumLoops" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.numLoops"></a>

```csharp
public double NumLoops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#num_loops EscalationPolicy#num_loops}.

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#teams EscalationPolicy#teams}.

---

### EscalationPolicyRule <a name="EscalationPolicyRule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EscalationPolicyRule {
    double EscalationDelayInMinutes,
    object Target,
    EscalationPolicyRuleEscalationRuleAssignmentStrategy EscalationRuleAssignmentStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.escalationDelayInMinutes">EscalationDelayInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#escalation_delay_in_minutes EscalationPolicy#escalation_delay_in_minutes}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.target">Target</a></code> | <code>object</code> | target block. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.escalationRuleAssignmentStrategy">EscalationRuleAssignmentStrategy</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a></code> | escalation_rule_assignment_strategy block. |

---

##### `EscalationDelayInMinutes`<sup>Required</sup> <a name="EscalationDelayInMinutes" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.escalationDelayInMinutes"></a>

```csharp
public double EscalationDelayInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#escalation_delay_in_minutes EscalationPolicy#escalation_delay_in_minutes}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.target"></a>

```csharp
public object Target { get; set; }
```

- *Type:* object

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#target EscalationPolicy#target}

---

##### `EscalationRuleAssignmentStrategy`<sup>Optional</sup> <a name="EscalationRuleAssignmentStrategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.escalationRuleAssignmentStrategy"></a>

```csharp
public EscalationPolicyRuleEscalationRuleAssignmentStrategy EscalationRuleAssignmentStrategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a>

escalation_rule_assignment_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#escalation_rule_assignment_strategy EscalationPolicy#escalation_rule_assignment_strategy}

---

### EscalationPolicyRuleEscalationRuleAssignmentStrategy <a name="EscalationPolicyRuleEscalationRuleAssignmentStrategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EscalationPolicyRuleEscalationRuleAssignmentStrategy {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#type EscalationPolicy#type}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#type EscalationPolicy#type}.

---

### EscalationPolicyRuleTarget <a name="EscalationPolicyRuleTarget" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EscalationPolicyRuleTarget {
    string Id,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#id EscalationPolicy#id}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#type EscalationPolicy#type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#id EscalationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/escalation_policy#type EscalationPolicy#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference <a name="EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.internalValue"></a>

```csharp
public EscalationPolicyRuleEscalationRuleAssignmentStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a>

---


### EscalationPolicyRuleList <a name="EscalationPolicyRuleList" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EscalationPolicyRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.get"></a>

```csharp
private EscalationPolicyRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EscalationPolicyRuleOutputReference <a name="EscalationPolicyRuleOutputReference" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EscalationPolicyRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putEscalationRuleAssignmentStrategy">PutEscalationRuleAssignmentStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resetEscalationRuleAssignmentStrategy">ResetEscalationRuleAssignmentStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEscalationRuleAssignmentStrategy` <a name="PutEscalationRuleAssignmentStrategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putEscalationRuleAssignmentStrategy"></a>

```csharp
private void PutEscalationRuleAssignmentStrategy(EscalationPolicyRuleEscalationRuleAssignmentStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putEscalationRuleAssignmentStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putTarget"></a>

```csharp
private void PutTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putTarget.parameter.value"></a>

- *Type:* object

---

##### `ResetEscalationRuleAssignmentStrategy` <a name="ResetEscalationRuleAssignmentStrategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resetEscalationRuleAssignmentStrategy"></a>

```csharp
private void ResetEscalationRuleAssignmentStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationRuleAssignmentStrategy">EscalationRuleAssignmentStrategy</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference">EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList">EscalationPolicyRuleTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationDelayInMinutesInput">EscalationDelayInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationRuleAssignmentStrategyInput">EscalationRuleAssignmentStrategyInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.targetInput">TargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationDelayInMinutes">EscalationDelayInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EscalationRuleAssignmentStrategy`<sup>Required</sup> <a name="EscalationRuleAssignmentStrategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationRuleAssignmentStrategy"></a>

```csharp
public EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference EscalationRuleAssignmentStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference">EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.target"></a>

```csharp
public EscalationPolicyRuleTargetList Target { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList">EscalationPolicyRuleTargetList</a>

---

##### `EscalationDelayInMinutesInput`<sup>Optional</sup> <a name="EscalationDelayInMinutesInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationDelayInMinutesInput"></a>

```csharp
public double EscalationDelayInMinutesInput { get; }
```

- *Type:* double

---

##### `EscalationRuleAssignmentStrategyInput`<sup>Optional</sup> <a name="EscalationRuleAssignmentStrategyInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationRuleAssignmentStrategyInput"></a>

```csharp
public EscalationPolicyRuleEscalationRuleAssignmentStrategy EscalationRuleAssignmentStrategyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.targetInput"></a>

```csharp
public object TargetInput { get; }
```

- *Type:* object

---

##### `EscalationDelayInMinutes`<sup>Required</sup> <a name="EscalationDelayInMinutes" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationDelayInMinutes"></a>

```csharp
public double EscalationDelayInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EscalationPolicyRuleTargetList <a name="EscalationPolicyRuleTargetList" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EscalationPolicyRuleTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.get"></a>

```csharp
private EscalationPolicyRuleTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EscalationPolicyRuleTargetOutputReference <a name="EscalationPolicyRuleTargetOutputReference" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new EscalationPolicyRuleTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



