# `pagerduty_automation_actions_runner`

Refer to the Terraform Registory for docs: [`pagerduty_automation_actions_runner`](https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner).

# `automationActionsRunner` Submodule <a name="`automationActionsRunner` Submodule" id="@cdktf/provider-pagerduty.automationActionsRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationActionsRunner <a name="AutomationActionsRunner" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner pagerduty_automation_actions_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new AutomationActionsRunner(Construct Scope, string Id, AutomationActionsRunnerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig">AutomationActionsRunnerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig">AutomationActionsRunnerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetLastSeen">ResetLastSeen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetRunbookApiKey">ResetRunbookApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetRunbookBaseUri">ResetRunbookBaseUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLastSeen` <a name="ResetLastSeen" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetLastSeen"></a>

```csharp
private void ResetLastSeen()
```

##### `ResetRunbookApiKey` <a name="ResetRunbookApiKey" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetRunbookApiKey"></a>

```csharp
private void ResetRunbookApiKey()
```

##### `ResetRunbookBaseUri` <a name="ResetRunbookBaseUri" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetRunbookBaseUri"></a>

```csharp
private void ResetRunbookBaseUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

AutomationActionsRunner.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

AutomationActionsRunner.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

AutomationActionsRunner.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lastSeenInput">LastSeenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookApiKeyInput">RunbookApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookBaseUriInput">RunbookBaseUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runnerTypeInput">RunnerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lastSeen">LastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookApiKey">RunbookApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookBaseUri">RunbookBaseUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runnerType">RunnerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LastSeenInput`<sup>Optional</sup> <a name="LastSeenInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lastSeenInput"></a>

```csharp
public string LastSeenInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RunbookApiKeyInput`<sup>Optional</sup> <a name="RunbookApiKeyInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookApiKeyInput"></a>

```csharp
public string RunbookApiKeyInput { get; }
```

- *Type:* string

---

##### `RunbookBaseUriInput`<sup>Optional</sup> <a name="RunbookBaseUriInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookBaseUriInput"></a>

```csharp
public string RunbookBaseUriInput { get; }
```

- *Type:* string

---

##### `RunnerTypeInput`<sup>Optional</sup> <a name="RunnerTypeInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runnerTypeInput"></a>

```csharp
public string RunnerTypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastSeen`<sup>Required</sup> <a name="LastSeen" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lastSeen"></a>

```csharp
public string LastSeen { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunbookApiKey`<sup>Required</sup> <a name="RunbookApiKey" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookApiKey"></a>

```csharp
public string RunbookApiKey { get; }
```

- *Type:* string

---

##### `RunbookBaseUri`<sup>Required</sup> <a name="RunbookBaseUri" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookBaseUri"></a>

```csharp
public string RunbookBaseUri { get; }
```

- *Type:* string

---

##### `RunnerType`<sup>Required</sup> <a name="RunnerType" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runnerType"></a>

```csharp
public string RunnerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationActionsRunnerConfig <a name="AutomationActionsRunnerConfig" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Pagerduty;

new AutomationActionsRunnerConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RunnerType,
    string Description = null,
    string Id = null,
    string LastSeen = null,
    string RunbookApiKey = null,
    string RunbookBaseUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#name AutomationActionsRunner#name}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runnerType">RunnerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#runner_type AutomationActionsRunner#runner_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#description AutomationActionsRunner#description}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#id AutomationActionsRunner#id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.lastSeen">LastSeen</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#last_seen AutomationActionsRunner#last_seen}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runbookApiKey">RunbookApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#runbook_api_key AutomationActionsRunner#runbook_api_key}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runbookBaseUri">RunbookBaseUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#runbook_base_uri AutomationActionsRunner#runbook_base_uri}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#name AutomationActionsRunner#name}.

---

##### `RunnerType`<sup>Required</sup> <a name="RunnerType" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runnerType"></a>

```csharp
public string RunnerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#runner_type AutomationActionsRunner#runner_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#description AutomationActionsRunner#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#id AutomationActionsRunner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastSeen`<sup>Optional</sup> <a name="LastSeen" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.lastSeen"></a>

```csharp
public string LastSeen { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#last_seen AutomationActionsRunner#last_seen}.

---

##### `RunbookApiKey`<sup>Optional</sup> <a name="RunbookApiKey" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runbookApiKey"></a>

```csharp
public string RunbookApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#runbook_api_key AutomationActionsRunner#runbook_api_key}.

---

##### `RunbookBaseUri`<sup>Optional</sup> <a name="RunbookBaseUri" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runbookBaseUri"></a>

```csharp
public string RunbookBaseUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/automation_actions_runner#runbook_base_uri AutomationActionsRunner#runbook_base_uri}.

---



