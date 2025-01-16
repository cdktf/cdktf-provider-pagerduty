# `jiraCloudAccountMappingRule` Submodule <a name="`jiraCloudAccountMappingRule` Submodule" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JiraCloudAccountMappingRule <a name="JiraCloudAccountMappingRule" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule pagerduty_jira_cloud_account_mapping_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRule(Construct Scope, string Id, JiraCloudAccountMappingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig">JiraCloudAccountMappingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig">JiraCloudAccountMappingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.resetConfig">ResetConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.putConfig"></a>

```csharp
private void PutConfig(JiraCloudAccountMappingRuleConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA">JiraCloudAccountMappingRuleConfigA</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.resetConfig"></a>

```csharp
private void ResetConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a JiraCloudAccountMappingRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

JiraCloudAccountMappingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

JiraCloudAccountMappingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

JiraCloudAccountMappingRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

JiraCloudAccountMappingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a JiraCloudAccountMappingRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JiraCloudAccountMappingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JiraCloudAccountMappingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the JiraCloudAccountMappingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.autocreateJqlDisabledReason">AutocreateJqlDisabledReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.autocreateJqlDisabledUntil">AutocreateJqlDisabledUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference">JiraCloudAccountMappingRuleConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.accountMappingInput">AccountMappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.configInput">ConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.accountMapping">AccountMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutocreateJqlDisabledReason`<sup>Required</sup> <a name="AutocreateJqlDisabledReason" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.autocreateJqlDisabledReason"></a>

```csharp
public string AutocreateJqlDisabledReason { get; }
```

- *Type:* string

---

##### `AutocreateJqlDisabledUntil`<sup>Required</sup> <a name="AutocreateJqlDisabledUntil" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.autocreateJqlDisabledUntil"></a>

```csharp
public string AutocreateJqlDisabledUntil { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.config"></a>

```csharp
public JiraCloudAccountMappingRuleConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference">JiraCloudAccountMappingRuleConfigAOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountMappingInput`<sup>Optional</sup> <a name="AccountMappingInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.accountMappingInput"></a>

```csharp
public string AccountMappingInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.configInput"></a>

```csharp
public object ConfigInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountMapping`<sup>Required</sup> <a name="AccountMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.accountMapping"></a>

```csharp
public string AccountMapping { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JiraCloudAccountMappingRuleConfig <a name="JiraCloudAccountMappingRuleConfig" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountMapping,
    string Name,
    JiraCloudAccountMappingRuleConfigA Config = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.accountMapping">AccountMapping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#account_mapping JiraCloudAccountMappingRule#account_mapping}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA">JiraCloudAccountMappingRuleConfigA</a></code> | config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountMapping`<sup>Required</sup> <a name="AccountMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.accountMapping"></a>

```csharp
public string AccountMapping { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#account_mapping JiraCloudAccountMappingRule#account_mapping}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfig.property.config"></a>

```csharp
public JiraCloudAccountMappingRuleConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA">JiraCloudAccountMappingRuleConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#config JiraCloudAccountMappingRule#config}

---

### JiraCloudAccountMappingRuleConfigA <a name="JiraCloudAccountMappingRuleConfigA" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigA {
    string Service,
    JiraCloudAccountMappingRuleConfigJira Jira = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#service JiraCloudAccountMappingRule#service}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA.property.jira">Jira</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira">JiraCloudAccountMappingRuleConfigJira</a></code> | jira block. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#service JiraCloudAccountMappingRule#service}.

---

##### `Jira`<sup>Optional</sup> <a name="Jira" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigA.property.jira"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJira Jira { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira">JiraCloudAccountMappingRuleConfigJira</a>

jira block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#jira JiraCloudAccountMappingRule#jira}

---

### JiraCloudAccountMappingRuleConfigJira <a name="JiraCloudAccountMappingRuleConfigJira" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJira {
    JiraCloudAccountMappingRuleConfigJiraIssueType IssueType,
    JiraCloudAccountMappingRuleConfigJiraProject Project,
    string AutocreateJql = null,
    object CreateIssueOnIncidentTrigger = null,
    object CustomFields = null,
    object Priorities = null,
    JiraCloudAccountMappingRuleConfigJiraStatusMapping StatusMapping = null,
    string SyncNotesUser = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.issueType">IssueType</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType">JiraCloudAccountMappingRuleConfigJiraIssueType</a></code> | issue_type block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.project">Project</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject">JiraCloudAccountMappingRuleConfigJiraProject</a></code> | project block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.autocreateJql">AutocreateJql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#autocreate_jql JiraCloudAccountMappingRule#autocreate_jql}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.createIssueOnIncidentTrigger">CreateIssueOnIncidentTrigger</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#create_issue_on_incident_trigger JiraCloudAccountMappingRule#create_issue_on_incident_trigger}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.customFields">CustomFields</a></code> | <code>object</code> | custom_fields block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.priorities">Priorities</a></code> | <code>object</code> | priorities block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.statusMapping">StatusMapping</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping">JiraCloudAccountMappingRuleConfigJiraStatusMapping</a></code> | status_mapping block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.syncNotesUser">SyncNotesUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#sync_notes_user JiraCloudAccountMappingRule#sync_notes_user}. |

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.issueType"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraIssueType IssueType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType">JiraCloudAccountMappingRuleConfigJiraIssueType</a>

issue_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#issue_type JiraCloudAccountMappingRule#issue_type}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.project"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraProject Project { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject">JiraCloudAccountMappingRuleConfigJiraProject</a>

project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#project JiraCloudAccountMappingRule#project}

---

##### `AutocreateJql`<sup>Optional</sup> <a name="AutocreateJql" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.autocreateJql"></a>

```csharp
public string AutocreateJql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#autocreate_jql JiraCloudAccountMappingRule#autocreate_jql}.

---

##### `CreateIssueOnIncidentTrigger`<sup>Optional</sup> <a name="CreateIssueOnIncidentTrigger" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.createIssueOnIncidentTrigger"></a>

```csharp
public object CreateIssueOnIncidentTrigger { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#create_issue_on_incident_trigger JiraCloudAccountMappingRule#create_issue_on_incident_trigger}.

---

##### `CustomFields`<sup>Optional</sup> <a name="CustomFields" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.customFields"></a>

```csharp
public object CustomFields { get; set; }
```

- *Type:* object

custom_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#custom_fields JiraCloudAccountMappingRule#custom_fields}

---

##### `Priorities`<sup>Optional</sup> <a name="Priorities" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.priorities"></a>

```csharp
public object Priorities { get; set; }
```

- *Type:* object

priorities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#priorities JiraCloudAccountMappingRule#priorities}

---

##### `StatusMapping`<sup>Optional</sup> <a name="StatusMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.statusMapping"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraStatusMapping StatusMapping { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping">JiraCloudAccountMappingRuleConfigJiraStatusMapping</a>

status_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#status_mapping JiraCloudAccountMappingRule#status_mapping}

---

##### `SyncNotesUser`<sup>Optional</sup> <a name="SyncNotesUser" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira.property.syncNotesUser"></a>

```csharp
public string SyncNotesUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#sync_notes_user JiraCloudAccountMappingRule#sync_notes_user}.

---

### JiraCloudAccountMappingRuleConfigJiraCustomFields <a name="JiraCloudAccountMappingRuleConfigJiraCustomFields" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraCustomFields {
    string TargetIssueField,
    string TargetIssueFieldName,
    string Type,
    string SourceIncidentField = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.targetIssueField">TargetIssueField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#target_issue_field JiraCloudAccountMappingRule#target_issue_field}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.targetIssueFieldName">TargetIssueFieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#target_issue_field_name JiraCloudAccountMappingRule#target_issue_field_name}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#type JiraCloudAccountMappingRule#type}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.sourceIncidentField">SourceIncidentField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#source_incident_field JiraCloudAccountMappingRule#source_incident_field}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#value JiraCloudAccountMappingRule#value}. |

---

##### `TargetIssueField`<sup>Required</sup> <a name="TargetIssueField" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.targetIssueField"></a>

```csharp
public string TargetIssueField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#target_issue_field JiraCloudAccountMappingRule#target_issue_field}.

---

##### `TargetIssueFieldName`<sup>Required</sup> <a name="TargetIssueFieldName" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.targetIssueFieldName"></a>

```csharp
public string TargetIssueFieldName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#target_issue_field_name JiraCloudAccountMappingRule#target_issue_field_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#type JiraCloudAccountMappingRule#type}.

---

##### `SourceIncidentField`<sup>Optional</sup> <a name="SourceIncidentField" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.sourceIncidentField"></a>

```csharp
public string SourceIncidentField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#source_incident_field JiraCloudAccountMappingRule#source_incident_field}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFields.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#value JiraCloudAccountMappingRule#value}.

---

### JiraCloudAccountMappingRuleConfigJiraIssueType <a name="JiraCloudAccountMappingRuleConfigJiraIssueType" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraIssueType {
    string Id,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

### JiraCloudAccountMappingRuleConfigJiraPriorities <a name="JiraCloudAccountMappingRuleConfigJiraPriorities" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraPriorities {
    string JiraId,
    string PagerdutyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities.property.jiraId">JiraId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#jira_id JiraCloudAccountMappingRule#jira_id}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities.property.pagerdutyId">PagerdutyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#pagerduty_id JiraCloudAccountMappingRule#pagerduty_id}. |

---

##### `JiraId`<sup>Required</sup> <a name="JiraId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities.property.jiraId"></a>

```csharp
public string JiraId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#jira_id JiraCloudAccountMappingRule#jira_id}.

---

##### `PagerdutyId`<sup>Required</sup> <a name="PagerdutyId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPriorities.property.pagerdutyId"></a>

```csharp
public string PagerdutyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#pagerduty_id JiraCloudAccountMappingRule#pagerduty_id}.

---

### JiraCloudAccountMappingRuleConfigJiraProject <a name="JiraCloudAccountMappingRuleConfigJiraProject" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraProject {
    string Id,
    string Key,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#key JiraCloudAccountMappingRule#key}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#key JiraCloudAccountMappingRule#key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

### JiraCloudAccountMappingRuleConfigJiraStatusMapping <a name="JiraCloudAccountMappingRuleConfigJiraStatusMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraStatusMapping {
    JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered Triggered,
    JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged Acknowledged = null,
    JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved Resolved = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.property.triggered">Triggered</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered</a></code> | triggered block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.property.acknowledged">Acknowledged</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged</a></code> | acknowledged block. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.property.resolved">Resolved</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved</a></code> | resolved block. |

---

##### `Triggered`<sup>Required</sup> <a name="Triggered" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.property.triggered"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered Triggered { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered</a>

triggered block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#triggered JiraCloudAccountMappingRule#triggered}

---

##### `Acknowledged`<sup>Optional</sup> <a name="Acknowledged" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.property.acknowledged"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged Acknowledged { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged</a>

acknowledged block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#acknowledged JiraCloudAccountMappingRule#acknowledged}

---

##### `Resolved`<sup>Optional</sup> <a name="Resolved" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping.property.resolved"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved Resolved { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved</a>

resolved block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#resolved JiraCloudAccountMappingRule#resolved}

---

### JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged {
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

### JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved {
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

### JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered {
    string Id,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#id JiraCloudAccountMappingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/resources/jira_cloud_account_mapping_rule#name JiraCloudAccountMappingRule#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### JiraCloudAccountMappingRuleConfigAOutputReference <a name="JiraCloudAccountMappingRuleConfigAOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.putJira">PutJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.resetJira">ResetJira</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJira` <a name="PutJira" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.putJira"></a>

```csharp
private void PutJira(JiraCloudAccountMappingRuleConfigJira Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJira">JiraCloudAccountMappingRuleConfigJira</a>

---

##### `ResetJira` <a name="ResetJira" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.resetJira"></a>

```csharp
private void ResetJira()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.jira">Jira</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference">JiraCloudAccountMappingRuleConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.jiraInput">JiraInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Jira`<sup>Required</sup> <a name="Jira" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.jira"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraOutputReference Jira { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference">JiraCloudAccountMappingRuleConfigJiraOutputReference</a>

---

##### `JiraInput`<sup>Optional</sup> <a name="JiraInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.jiraInput"></a>

```csharp
public object JiraInput { get; }
```

- *Type:* object

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JiraCloudAccountMappingRuleConfigJiraCustomFieldsList <a name="JiraCloudAccountMappingRuleConfigJiraCustomFieldsList" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraCustomFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.get"></a>

```csharp
private JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resetSourceIncidentField">ResetSourceIncidentField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceIncidentField` <a name="ResetSourceIncidentField" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resetSourceIncidentField"></a>

```csharp
private void ResetSourceIncidentField()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.sourceIncidentFieldInput">SourceIncidentFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueFieldInput">TargetIssueFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueFieldNameInput">TargetIssueFieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.sourceIncidentField">SourceIncidentField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueField">TargetIssueField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueFieldName">TargetIssueFieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceIncidentFieldInput`<sup>Optional</sup> <a name="SourceIncidentFieldInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.sourceIncidentFieldInput"></a>

```csharp
public string SourceIncidentFieldInput { get; }
```

- *Type:* string

---

##### `TargetIssueFieldInput`<sup>Optional</sup> <a name="TargetIssueFieldInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueFieldInput"></a>

```csharp
public string TargetIssueFieldInput { get; }
```

- *Type:* string

---

##### `TargetIssueFieldNameInput`<sup>Optional</sup> <a name="TargetIssueFieldNameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueFieldNameInput"></a>

```csharp
public string TargetIssueFieldNameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `SourceIncidentField`<sup>Required</sup> <a name="SourceIncidentField" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.sourceIncidentField"></a>

```csharp
public string SourceIncidentField { get; }
```

- *Type:* string

---

##### `TargetIssueField`<sup>Required</sup> <a name="TargetIssueField" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueField"></a>

```csharp
public string TargetIssueField { get; }
```

- *Type:* string

---

##### `TargetIssueFieldName`<sup>Required</sup> <a name="TargetIssueFieldName" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.targetIssueFieldName"></a>

```csharp
public string TargetIssueFieldName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JiraCloudAccountMappingRuleConfigJiraOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putCustomFields">PutCustomFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putIssueType">PutIssueType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putPriorities">PutPriorities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putProject">PutProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putStatusMapping">PutStatusMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetAutocreateJql">ResetAutocreateJql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetCreateIssueOnIncidentTrigger">ResetCreateIssueOnIncidentTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetCustomFields">ResetCustomFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetPriorities">ResetPriorities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetStatusMapping">ResetStatusMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetSyncNotesUser">ResetSyncNotesUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomFields` <a name="PutCustomFields" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putCustomFields"></a>

```csharp
private void PutCustomFields(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putCustomFields.parameter.value"></a>

- *Type:* object

---

##### `PutIssueType` <a name="PutIssueType" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putIssueType"></a>

```csharp
private void PutIssueType(JiraCloudAccountMappingRuleConfigJiraIssueType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putIssueType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueType">JiraCloudAccountMappingRuleConfigJiraIssueType</a>

---

##### `PutPriorities` <a name="PutPriorities" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putPriorities"></a>

```csharp
private void PutPriorities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putPriorities.parameter.value"></a>

- *Type:* object

---

##### `PutProject` <a name="PutProject" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putProject"></a>

```csharp
private void PutProject(JiraCloudAccountMappingRuleConfigJiraProject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putProject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProject">JiraCloudAccountMappingRuleConfigJiraProject</a>

---

##### `PutStatusMapping` <a name="PutStatusMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putStatusMapping"></a>

```csharp
private void PutStatusMapping(JiraCloudAccountMappingRuleConfigJiraStatusMapping Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.putStatusMapping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMapping">JiraCloudAccountMappingRuleConfigJiraStatusMapping</a>

---

##### `ResetAutocreateJql` <a name="ResetAutocreateJql" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetAutocreateJql"></a>

```csharp
private void ResetAutocreateJql()
```

##### `ResetCreateIssueOnIncidentTrigger` <a name="ResetCreateIssueOnIncidentTrigger" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetCreateIssueOnIncidentTrigger"></a>

```csharp
private void ResetCreateIssueOnIncidentTrigger()
```

##### `ResetCustomFields` <a name="ResetCustomFields" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetCustomFields"></a>

```csharp
private void ResetCustomFields()
```

##### `ResetPriorities` <a name="ResetPriorities" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetPriorities"></a>

```csharp
private void ResetPriorities()
```

##### `ResetStatusMapping` <a name="ResetStatusMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetStatusMapping"></a>

```csharp
private void ResetStatusMapping()
```

##### `ResetSyncNotesUser` <a name="ResetSyncNotesUser" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.resetSyncNotesUser"></a>

```csharp
private void ResetSyncNotesUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.customFields">CustomFields</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList">JiraCloudAccountMappingRuleConfigJiraCustomFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.issueType">IssueType</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference">JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.priorities">Priorities</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList">JiraCloudAccountMappingRuleConfigJiraPrioritiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.project">Project</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference">JiraCloudAccountMappingRuleConfigJiraProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.statusMapping">StatusMapping</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.autocreateJqlInput">AutocreateJqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.createIssueOnIncidentTriggerInput">CreateIssueOnIncidentTriggerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.customFieldsInput">CustomFieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.issueTypeInput">IssueTypeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.prioritiesInput">PrioritiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.projectInput">ProjectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.statusMappingInput">StatusMappingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.syncNotesUserInput">SyncNotesUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.autocreateJql">AutocreateJql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.createIssueOnIncidentTrigger">CreateIssueOnIncidentTrigger</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.syncNotesUser">SyncNotesUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomFields`<sup>Required</sup> <a name="CustomFields" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.customFields"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraCustomFieldsList CustomFields { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraCustomFieldsList">JiraCloudAccountMappingRuleConfigJiraCustomFieldsList</a>

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.issueType"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference IssueType { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference">JiraCloudAccountMappingRuleConfigJiraIssueTypeOutputReference</a>

---

##### `Priorities`<sup>Required</sup> <a name="Priorities" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.priorities"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraPrioritiesList Priorities { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList">JiraCloudAccountMappingRuleConfigJiraPrioritiesList</a>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.project"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraProjectOutputReference Project { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference">JiraCloudAccountMappingRuleConfigJiraProjectOutputReference</a>

---

##### `StatusMapping`<sup>Required</sup> <a name="StatusMapping" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.statusMapping"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference StatusMapping { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference</a>

---

##### `AutocreateJqlInput`<sup>Optional</sup> <a name="AutocreateJqlInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.autocreateJqlInput"></a>

```csharp
public string AutocreateJqlInput { get; }
```

- *Type:* string

---

##### `CreateIssueOnIncidentTriggerInput`<sup>Optional</sup> <a name="CreateIssueOnIncidentTriggerInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.createIssueOnIncidentTriggerInput"></a>

```csharp
public object CreateIssueOnIncidentTriggerInput { get; }
```

- *Type:* object

---

##### `CustomFieldsInput`<sup>Optional</sup> <a name="CustomFieldsInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.customFieldsInput"></a>

```csharp
public object CustomFieldsInput { get; }
```

- *Type:* object

---

##### `IssueTypeInput`<sup>Optional</sup> <a name="IssueTypeInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.issueTypeInput"></a>

```csharp
public object IssueTypeInput { get; }
```

- *Type:* object

---

##### `PrioritiesInput`<sup>Optional</sup> <a name="PrioritiesInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.prioritiesInput"></a>

```csharp
public object PrioritiesInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.projectInput"></a>

```csharp
public object ProjectInput { get; }
```

- *Type:* object

---

##### `StatusMappingInput`<sup>Optional</sup> <a name="StatusMappingInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.statusMappingInput"></a>

```csharp
public object StatusMappingInput { get; }
```

- *Type:* object

---

##### `SyncNotesUserInput`<sup>Optional</sup> <a name="SyncNotesUserInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.syncNotesUserInput"></a>

```csharp
public string SyncNotesUserInput { get; }
```

- *Type:* string

---

##### `AutocreateJql`<sup>Required</sup> <a name="AutocreateJql" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.autocreateJql"></a>

```csharp
public string AutocreateJql { get; }
```

- *Type:* string

---

##### `CreateIssueOnIncidentTrigger`<sup>Required</sup> <a name="CreateIssueOnIncidentTrigger" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.createIssueOnIncidentTrigger"></a>

```csharp
public object CreateIssueOnIncidentTrigger { get; }
```

- *Type:* object

---

##### `SyncNotesUser`<sup>Required</sup> <a name="SyncNotesUser" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.syncNotesUser"></a>

```csharp
public string SyncNotesUser { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JiraCloudAccountMappingRuleConfigJiraPrioritiesList <a name="JiraCloudAccountMappingRuleConfigJiraPrioritiesList" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraPrioritiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.get"></a>

```csharp
private JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.jiraIdInput">JiraIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.pagerdutyIdInput">PagerdutyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.jiraId">JiraId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.pagerdutyId">PagerdutyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JiraIdInput`<sup>Optional</sup> <a name="JiraIdInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.jiraIdInput"></a>

```csharp
public string JiraIdInput { get; }
```

- *Type:* string

---

##### `PagerdutyIdInput`<sup>Optional</sup> <a name="PagerdutyIdInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.pagerdutyIdInput"></a>

```csharp
public string PagerdutyIdInput { get; }
```

- *Type:* string

---

##### `JiraId`<sup>Required</sup> <a name="JiraId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.jiraId"></a>

```csharp
public string JiraId { get; }
```

- *Type:* string

---

##### `PagerdutyId`<sup>Required</sup> <a name="PagerdutyId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.pagerdutyId"></a>

```csharp
public string PagerdutyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraPrioritiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JiraCloudAccountMappingRuleConfigJiraProjectOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraProjectOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraProjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraProjectOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putAcknowledged">PutAcknowledged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putResolved">PutResolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putTriggered">PutTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resetAcknowledged">ResetAcknowledged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resetResolved">ResetResolved</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcknowledged` <a name="PutAcknowledged" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putAcknowledged"></a>

```csharp
private void PutAcknowledged(JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putAcknowledged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledged</a>

---

##### `PutResolved` <a name="PutResolved" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putResolved"></a>

```csharp
private void PutResolved(JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putResolved.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolved</a>

---

##### `PutTriggered` <a name="PutTriggered" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putTriggered"></a>

```csharp
private void PutTriggered(JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.putTriggered.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggered</a>

---

##### `ResetAcknowledged` <a name="ResetAcknowledged" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resetAcknowledged"></a>

```csharp
private void ResetAcknowledged()
```

##### `ResetResolved` <a name="ResetResolved" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.resetResolved"></a>

```csharp
private void ResetResolved()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.acknowledged">Acknowledged</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.resolved">Resolved</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.triggered">Triggered</a></code> | <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.acknowledgedInput">AcknowledgedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.resolvedInput">ResolvedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.triggeredInput">TriggeredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Acknowledged`<sup>Required</sup> <a name="Acknowledged" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.acknowledged"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference Acknowledged { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingAcknowledgedOutputReference</a>

---

##### `Resolved`<sup>Required</sup> <a name="Resolved" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.resolved"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference Resolved { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference</a>

---

##### `Triggered`<sup>Required</sup> <a name="Triggered" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.triggered"></a>

```csharp
public JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference Triggered { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference">JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference</a>

---

##### `AcknowledgedInput`<sup>Optional</sup> <a name="AcknowledgedInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.acknowledgedInput"></a>

```csharp
public object AcknowledgedInput { get; }
```

- *Type:* object

---

##### `ResolvedInput`<sup>Optional</sup> <a name="ResolvedInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.resolvedInput"></a>

```csharp
public object ResolvedInput { get; }
```

- *Type:* object

---

##### `TriggeredInput`<sup>Optional</sup> <a name="TriggeredInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.triggeredInput"></a>

```csharp
public object TriggeredInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingResolvedOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference <a name="JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.jiraCloudAccountMappingRule.JiraCloudAccountMappingRuleConfigJiraStatusMappingTriggeredOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



