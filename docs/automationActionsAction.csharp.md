# `pagerduty_automation_actions_action`

Refer to the Terraform Registory for docs: [`pagerduty_automation_actions_action`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action).

# `automationActionsAction` Submodule <a name="`automationActionsAction` Submodule" id="@cdktf/provider-pagerduty.automationActionsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationActionsAction <a name="AutomationActionsAction" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action pagerduty_automation_actions_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new AutomationActionsAction(Construct Scope, string Id, AutomationActionsActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig">AutomationActionsActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig">AutomationActionsActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference">PutActionDataReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetActionClassification">ResetActionClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetModifyTime">ResetModifyTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerId">ResetRunnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerType">ResetRunnerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutActionDataReference` <a name="PutActionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference"></a>

```csharp
private void PutActionDataReference(AutomationActionsActionActionDataReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

---

##### `ResetActionClassification` <a name="ResetActionClassification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetActionClassification"></a>

```csharp
private void ResetActionClassification()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetCreationTime"></a>

```csharp
private void ResetCreationTime()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetModifyTime` <a name="ResetModifyTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetModifyTime"></a>

```csharp
private void ResetModifyTime()
```

##### `ResetRunnerId` <a name="ResetRunnerId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerId"></a>

```csharp
private void ResetRunnerId()
```

##### `ResetRunnerType` <a name="ResetRunnerType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerType"></a>

```csharp
private void ResetRunnerType()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

AutomationActionsAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

AutomationActionsAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

AutomationActionsAction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReference">ActionDataReference</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference">AutomationActionsActionActionDataReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassificationInput">ActionClassificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReferenceInput">ActionDataReferenceInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionTypeInput">ActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTimeInput">CreationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTimeInput">ModifyTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerIdInput">RunnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerTypeInput">RunnerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassification">ActionClassification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTime">ModifyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerId">RunnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerType">RunnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActionDataReference`<sup>Required</sup> <a name="ActionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReference"></a>

```csharp
public AutomationActionsActionActionDataReferenceOutputReference ActionDataReference { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference">AutomationActionsActionActionDataReferenceOutputReference</a>

---

##### `ActionClassificationInput`<sup>Optional</sup> <a name="ActionClassificationInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassificationInput"></a>

```csharp
public string ActionClassificationInput { get; }
```

- *Type:* string

---

##### `ActionDataReferenceInput`<sup>Optional</sup> <a name="ActionDataReferenceInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReferenceInput"></a>

```csharp
public AutomationActionsActionActionDataReference ActionDataReferenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionTypeInput"></a>

```csharp
public string ActionTypeInput { get; }
```

- *Type:* string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTimeInput"></a>

```csharp
public string CreationTimeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ModifyTimeInput`<sup>Optional</sup> <a name="ModifyTimeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTimeInput"></a>

```csharp
public string ModifyTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RunnerIdInput`<sup>Optional</sup> <a name="RunnerIdInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerIdInput"></a>

```csharp
public string RunnerIdInput { get; }
```

- *Type:* string

---

##### `RunnerTypeInput`<sup>Optional</sup> <a name="RunnerTypeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerTypeInput"></a>

```csharp
public string RunnerTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ActionClassification`<sup>Required</sup> <a name="ActionClassification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassification"></a>

```csharp
public string ActionClassification { get; }
```

- *Type:* string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifyTime`<sup>Required</sup> <a name="ModifyTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTime"></a>

```csharp
public string ModifyTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunnerId`<sup>Required</sup> <a name="RunnerId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerId"></a>

```csharp
public string RunnerId { get; }
```

- *Type:* string

---

##### `RunnerType`<sup>Required</sup> <a name="RunnerType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerType"></a>

```csharp
public string RunnerType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationActionsActionActionDataReference <a name="AutomationActionsActionActionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new AutomationActionsActionActionDataReference {
    string InvocationCommand = null,
    string ProcessAutomationJobArguments = null,
    string ProcessAutomationJobId = null,
    string ProcessAutomationNodeFilter = null,
    string Script = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.invocationCommand">InvocationCommand</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#invocation_command AutomationActionsAction#invocation_command}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobArguments">ProcessAutomationJobArguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#process_automation_job_arguments AutomationActionsAction#process_automation_job_arguments}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobId">ProcessAutomationJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#process_automation_job_id AutomationActionsAction#process_automation_job_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationNodeFilter">ProcessAutomationNodeFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#process_automation_node_filter AutomationActionsAction#process_automation_node_filter}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.script">Script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#script AutomationActionsAction#script}. |

---

##### `InvocationCommand`<sup>Optional</sup> <a name="InvocationCommand" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.invocationCommand"></a>

```csharp
public string InvocationCommand { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#invocation_command AutomationActionsAction#invocation_command}.

---

##### `ProcessAutomationJobArguments`<sup>Optional</sup> <a name="ProcessAutomationJobArguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobArguments"></a>

```csharp
public string ProcessAutomationJobArguments { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#process_automation_job_arguments AutomationActionsAction#process_automation_job_arguments}.

---

##### `ProcessAutomationJobId`<sup>Optional</sup> <a name="ProcessAutomationJobId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobId"></a>

```csharp
public string ProcessAutomationJobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#process_automation_job_id AutomationActionsAction#process_automation_job_id}.

---

##### `ProcessAutomationNodeFilter`<sup>Optional</sup> <a name="ProcessAutomationNodeFilter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationNodeFilter"></a>

```csharp
public string ProcessAutomationNodeFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#process_automation_node_filter AutomationActionsAction#process_automation_node_filter}.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.script"></a>

```csharp
public string Script { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#script AutomationActionsAction#script}.

---

### AutomationActionsActionConfig <a name="AutomationActionsActionConfig" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new AutomationActionsActionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    AutomationActionsActionActionDataReference ActionDataReference,
    string ActionType,
    string Name,
    string ActionClassification = null,
    string CreationTime = null,
    string Description = null,
    string Id = null,
    string ModifyTime = null,
    string RunnerId = null,
    string RunnerType = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionDataReference">ActionDataReference</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | action_data_reference block. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionType">ActionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#action_type AutomationActionsAction#action_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#name AutomationActionsAction#name}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionClassification">ActionClassification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#action_classification AutomationActionsAction#action_classification}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.creationTime">CreationTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#creation_time AutomationActionsAction#creation_time}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#description AutomationActionsAction#description}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#id AutomationActionsAction#id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.modifyTime">ModifyTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#modify_time AutomationActionsAction#modify_time}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerId">RunnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#runner_id AutomationActionsAction#runner_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerType">RunnerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#runner_type AutomationActionsAction#runner_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#type AutomationActionsAction#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ActionDataReference`<sup>Required</sup> <a name="ActionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionDataReference"></a>

```csharp
public AutomationActionsActionActionDataReference ActionDataReference { get; set; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

action_data_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#action_data_reference AutomationActionsAction#action_data_reference}

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionType"></a>

```csharp
public string ActionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#action_type AutomationActionsAction#action_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#name AutomationActionsAction#name}.

---

##### `ActionClassification`<sup>Optional</sup> <a name="ActionClassification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionClassification"></a>

```csharp
public string ActionClassification { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#action_classification AutomationActionsAction#action_classification}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.creationTime"></a>

```csharp
public string CreationTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#creation_time AutomationActionsAction#creation_time}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#description AutomationActionsAction#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#id AutomationActionsAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ModifyTime`<sup>Optional</sup> <a name="ModifyTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.modifyTime"></a>

```csharp
public string ModifyTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#modify_time AutomationActionsAction#modify_time}.

---

##### `RunnerId`<sup>Optional</sup> <a name="RunnerId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerId"></a>

```csharp
public string RunnerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#runner_id AutomationActionsAction#runner_id}.

---

##### `RunnerType`<sup>Optional</sup> <a name="RunnerType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerType"></a>

```csharp
public string RunnerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#runner_type AutomationActionsAction#runner_type}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.0/docs/resources/automation_actions_action#type AutomationActionsAction#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationActionsActionActionDataReferenceOutputReference <a name="AutomationActionsActionActionDataReferenceOutputReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new AutomationActionsActionActionDataReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetInvocationCommand">ResetInvocationCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobArguments">ResetProcessAutomationJobArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobId">ResetProcessAutomationJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationNodeFilter">ResetProcessAutomationNodeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetScript">ResetScript</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInvocationCommand` <a name="ResetInvocationCommand" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetInvocationCommand"></a>

```csharp
private void ResetInvocationCommand()
```

##### `ResetProcessAutomationJobArguments` <a name="ResetProcessAutomationJobArguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobArguments"></a>

```csharp
private void ResetProcessAutomationJobArguments()
```

##### `ResetProcessAutomationJobId` <a name="ResetProcessAutomationJobId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobId"></a>

```csharp
private void ResetProcessAutomationJobId()
```

##### `ResetProcessAutomationNodeFilter` <a name="ResetProcessAutomationNodeFilter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationNodeFilter"></a>

```csharp
private void ResetProcessAutomationNodeFilter()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetScript"></a>

```csharp
private void ResetScript()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommandInput">InvocationCommandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArgumentsInput">ProcessAutomationJobArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobIdInput">ProcessAutomationJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilterInput">ProcessAutomationNodeFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.scriptInput">ScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommand">InvocationCommand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArguments">ProcessAutomationJobArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobId">ProcessAutomationJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilter">ProcessAutomationNodeFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvocationCommandInput`<sup>Optional</sup> <a name="InvocationCommandInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommandInput"></a>

```csharp
public string InvocationCommandInput { get; }
```

- *Type:* string

---

##### `ProcessAutomationJobArgumentsInput`<sup>Optional</sup> <a name="ProcessAutomationJobArgumentsInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArgumentsInput"></a>

```csharp
public string ProcessAutomationJobArgumentsInput { get; }
```

- *Type:* string

---

##### `ProcessAutomationJobIdInput`<sup>Optional</sup> <a name="ProcessAutomationJobIdInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobIdInput"></a>

```csharp
public string ProcessAutomationJobIdInput { get; }
```

- *Type:* string

---

##### `ProcessAutomationNodeFilterInput`<sup>Optional</sup> <a name="ProcessAutomationNodeFilterInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilterInput"></a>

```csharp
public string ProcessAutomationNodeFilterInput { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.scriptInput"></a>

```csharp
public string ScriptInput { get; }
```

- *Type:* string

---

##### `InvocationCommand`<sup>Required</sup> <a name="InvocationCommand" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommand"></a>

```csharp
public string InvocationCommand { get; }
```

- *Type:* string

---

##### `ProcessAutomationJobArguments`<sup>Required</sup> <a name="ProcessAutomationJobArguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArguments"></a>

```csharp
public string ProcessAutomationJobArguments { get; }
```

- *Type:* string

---

##### `ProcessAutomationJobId`<sup>Required</sup> <a name="ProcessAutomationJobId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobId"></a>

```csharp
public string ProcessAutomationJobId { get; }
```

- *Type:* string

---

##### `ProcessAutomationNodeFilter`<sup>Required</sup> <a name="ProcessAutomationNodeFilter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilter"></a>

```csharp
public string ProcessAutomationNodeFilter { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.internalValue"></a>

```csharp
public AutomationActionsActionActionDataReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

---



