# `dataPagerdutyAutomationActionsAction` Submodule <a name="`dataPagerdutyAutomationActionsAction` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyAutomationActionsAction <a name="DataPagerdutyAutomationActionsAction" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action pagerduty_automation_actions_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutyautomationactionsaction"

datapagerdutyautomationactionsaction.NewDataPagerdutyAutomationActionsAction(scope Construct, id *string, config DataPagerdutyAutomationActionsActionConfig) DataPagerdutyAutomationActionsAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig">DataPagerdutyAutomationActionsActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig">DataPagerdutyAutomationActionsActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetActionClassification">ResetActionClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetAllowInvocationFromEventOrchestration">ResetAllowInvocationFromEventOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetAllowInvocationManually">ResetAllowInvocationManually</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetMapToAllServices">ResetMapToAllServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetModifyTime">ResetModifyTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetOnlyInvocableOnUnresolvedIncidents">ResetOnlyInvocableOnUnresolvedIncidents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetRunnerId">ResetRunnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetRunnerType">ResetRunnerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetActionClassification` <a name="ResetActionClassification" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetActionClassification"></a>

```go
func ResetActionClassification()
```

##### `ResetAllowInvocationFromEventOrchestration` <a name="ResetAllowInvocationFromEventOrchestration" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetAllowInvocationFromEventOrchestration"></a>

```go
func ResetAllowInvocationFromEventOrchestration()
```

##### `ResetAllowInvocationManually` <a name="ResetAllowInvocationManually" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetAllowInvocationManually"></a>

```go
func ResetAllowInvocationManually()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetMapToAllServices` <a name="ResetMapToAllServices" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetMapToAllServices"></a>

```go
func ResetMapToAllServices()
```

##### `ResetModifyTime` <a name="ResetModifyTime" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetModifyTime"></a>

```go
func ResetModifyTime()
```

##### `ResetOnlyInvocableOnUnresolvedIncidents` <a name="ResetOnlyInvocableOnUnresolvedIncidents" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetOnlyInvocableOnUnresolvedIncidents"></a>

```go
func ResetOnlyInvocableOnUnresolvedIncidents()
```

##### `ResetRunnerId` <a name="ResetRunnerId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetRunnerId"></a>

```go
func ResetRunnerId()
```

##### `ResetRunnerType` <a name="ResetRunnerType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetRunnerType"></a>

```go
func ResetRunnerType()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyAutomationActionsAction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutyautomationactionsaction"

datapagerdutyautomationactionsaction.DataPagerdutyAutomationActionsAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutyautomationactionsaction"

datapagerdutyautomationactionsaction.DataPagerdutyAutomationActionsAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutyautomationactionsaction"

datapagerdutyautomationactionsaction.DataPagerdutyAutomationActionsAction_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutyautomationactionsaction"

datapagerdutyautomationactionsaction.DataPagerdutyAutomationActionsAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataPagerdutyAutomationActionsAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataPagerdutyAutomationActionsAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataPagerdutyAutomationActionsAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyAutomationActionsAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionDataReference">ActionDataReference</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList">DataPagerdutyAutomationActionsActionActionDataReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionClassificationInput">ActionClassificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.allowInvocationFromEventOrchestrationInput">AllowInvocationFromEventOrchestrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.allowInvocationManuallyInput">AllowInvocationManuallyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.creationTimeInput">CreationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.mapToAllServicesInput">MapToAllServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.modifyTimeInput">ModifyTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.onlyInvocableOnUnresolvedIncidentsInput">OnlyInvocableOnUnresolvedIncidentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerIdInput">RunnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerTypeInput">RunnerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionClassification">ActionClassification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.allowInvocationFromEventOrchestration">AllowInvocationFromEventOrchestration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.allowInvocationManually">AllowInvocationManually</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.mapToAllServices">MapToAllServices</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.modifyTime">ModifyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.onlyInvocableOnUnresolvedIncidents">OnlyInvocableOnUnresolvedIncidents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerId">RunnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerType">RunnerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ActionDataReference`<sup>Required</sup> <a name="ActionDataReference" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionDataReference"></a>

```go
func ActionDataReference() DataPagerdutyAutomationActionsActionActionDataReferenceList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList">DataPagerdutyAutomationActionsActionActionDataReferenceList</a>

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ActionClassificationInput`<sup>Optional</sup> <a name="ActionClassificationInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionClassificationInput"></a>

```go
func ActionClassificationInput() *string
```

- *Type:* *string

---

##### `AllowInvocationFromEventOrchestrationInput`<sup>Optional</sup> <a name="AllowInvocationFromEventOrchestrationInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.allowInvocationFromEventOrchestrationInput"></a>

```go
func AllowInvocationFromEventOrchestrationInput() interface{}
```

- *Type:* interface{}

---

##### `AllowInvocationManuallyInput`<sup>Optional</sup> <a name="AllowInvocationManuallyInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.allowInvocationManuallyInput"></a>

```go
func AllowInvocationManuallyInput() interface{}
```

- *Type:* interface{}

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.creationTimeInput"></a>

```go
func CreationTimeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MapToAllServicesInput`<sup>Optional</sup> <a name="MapToAllServicesInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.mapToAllServicesInput"></a>

```go
func MapToAllServicesInput() interface{}
```

- *Type:* interface{}

---

##### `ModifyTimeInput`<sup>Optional</sup> <a name="ModifyTimeInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.modifyTimeInput"></a>

```go
func ModifyTimeInput() *string
```

- *Type:* *string

---

##### `OnlyInvocableOnUnresolvedIncidentsInput`<sup>Optional</sup> <a name="OnlyInvocableOnUnresolvedIncidentsInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.onlyInvocableOnUnresolvedIncidentsInput"></a>

```go
func OnlyInvocableOnUnresolvedIncidentsInput() interface{}
```

- *Type:* interface{}

---

##### `RunnerIdInput`<sup>Optional</sup> <a name="RunnerIdInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerIdInput"></a>

```go
func RunnerIdInput() *string
```

- *Type:* *string

---

##### `RunnerTypeInput`<sup>Optional</sup> <a name="RunnerTypeInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerTypeInput"></a>

```go
func RunnerTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ActionClassification`<sup>Required</sup> <a name="ActionClassification" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionClassification"></a>

```go
func ActionClassification() *string
```

- *Type:* *string

---

##### `AllowInvocationFromEventOrchestration`<sup>Required</sup> <a name="AllowInvocationFromEventOrchestration" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.allowInvocationFromEventOrchestration"></a>

```go
func AllowInvocationFromEventOrchestration() interface{}
```

- *Type:* interface{}

---

##### `AllowInvocationManually`<sup>Required</sup> <a name="AllowInvocationManually" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.allowInvocationManually"></a>

```go
func AllowInvocationManually() interface{}
```

- *Type:* interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MapToAllServices`<sup>Required</sup> <a name="MapToAllServices" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.mapToAllServices"></a>

```go
func MapToAllServices() interface{}
```

- *Type:* interface{}

---

##### `ModifyTime`<sup>Required</sup> <a name="ModifyTime" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.modifyTime"></a>

```go
func ModifyTime() *string
```

- *Type:* *string

---

##### `OnlyInvocableOnUnresolvedIncidents`<sup>Required</sup> <a name="OnlyInvocableOnUnresolvedIncidents" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.onlyInvocableOnUnresolvedIncidents"></a>

```go
func OnlyInvocableOnUnresolvedIncidents() interface{}
```

- *Type:* interface{}

---

##### `RunnerId`<sup>Required</sup> <a name="RunnerId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerId"></a>

```go
func RunnerId() *string
```

- *Type:* *string

---

##### `RunnerType`<sup>Required</sup> <a name="RunnerType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerType"></a>

```go
func RunnerType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyAutomationActionsActionActionDataReference <a name="DataPagerdutyAutomationActionsActionActionDataReference" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutyautomationactionsaction"

&datapagerdutyautomationactionsaction.DataPagerdutyAutomationActionsActionActionDataReference {

}
```


### DataPagerdutyAutomationActionsActionConfig <a name="DataPagerdutyAutomationActionsActionConfig" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutyautomationactionsaction"

&datapagerdutyautomationactionsaction.DataPagerdutyAutomationActionsActionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	ActionClassification: *string,
	AllowInvocationFromEventOrchestration: interface{},
	AllowInvocationManually: interface{},
	CreationTime: *string,
	Description: *string,
	MapToAllServices: interface{},
	ModifyTime: *string,
	OnlyInvocableOnUnresolvedIncidents: interface{},
	RunnerId: *string,
	RunnerType: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#id DataPagerdutyAutomationActionsAction#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.actionClassification">ActionClassification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#action_classification DataPagerdutyAutomationActionsAction#action_classification}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.allowInvocationFromEventOrchestration">AllowInvocationFromEventOrchestration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#allow_invocation_from_event_orchestration DataPagerdutyAutomationActionsAction#allow_invocation_from_event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.allowInvocationManually">AllowInvocationManually</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#allow_invocation_manually DataPagerdutyAutomationActionsAction#allow_invocation_manually}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.creationTime">CreationTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#creation_time DataPagerdutyAutomationActionsAction#creation_time}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#description DataPagerdutyAutomationActionsAction#description}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.mapToAllServices">MapToAllServices</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#map_to_all_services DataPagerdutyAutomationActionsAction#map_to_all_services}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.modifyTime">ModifyTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#modify_time DataPagerdutyAutomationActionsAction#modify_time}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.onlyInvocableOnUnresolvedIncidents">OnlyInvocableOnUnresolvedIncidents</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#only_invocable_on_unresolved_incidents DataPagerdutyAutomationActionsAction#only_invocable_on_unresolved_incidents}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.runnerId">RunnerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#runner_id DataPagerdutyAutomationActionsAction#runner_id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.runnerType">RunnerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#runner_type DataPagerdutyAutomationActionsAction#runner_type}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#type DataPagerdutyAutomationActionsAction#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#id DataPagerdutyAutomationActionsAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ActionClassification`<sup>Optional</sup> <a name="ActionClassification" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.actionClassification"></a>

```go
ActionClassification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#action_classification DataPagerdutyAutomationActionsAction#action_classification}.

---

##### `AllowInvocationFromEventOrchestration`<sup>Optional</sup> <a name="AllowInvocationFromEventOrchestration" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.allowInvocationFromEventOrchestration"></a>

```go
AllowInvocationFromEventOrchestration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#allow_invocation_from_event_orchestration DataPagerdutyAutomationActionsAction#allow_invocation_from_event_orchestration}.

---

##### `AllowInvocationManually`<sup>Optional</sup> <a name="AllowInvocationManually" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.allowInvocationManually"></a>

```go
AllowInvocationManually interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#allow_invocation_manually DataPagerdutyAutomationActionsAction#allow_invocation_manually}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.creationTime"></a>

```go
CreationTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#creation_time DataPagerdutyAutomationActionsAction#creation_time}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#description DataPagerdutyAutomationActionsAction#description}.

---

##### `MapToAllServices`<sup>Optional</sup> <a name="MapToAllServices" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.mapToAllServices"></a>

```go
MapToAllServices interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#map_to_all_services DataPagerdutyAutomationActionsAction#map_to_all_services}.

---

##### `ModifyTime`<sup>Optional</sup> <a name="ModifyTime" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.modifyTime"></a>

```go
ModifyTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#modify_time DataPagerdutyAutomationActionsAction#modify_time}.

---

##### `OnlyInvocableOnUnresolvedIncidents`<sup>Optional</sup> <a name="OnlyInvocableOnUnresolvedIncidents" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.onlyInvocableOnUnresolvedIncidents"></a>

```go
OnlyInvocableOnUnresolvedIncidents interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#only_invocable_on_unresolved_incidents DataPagerdutyAutomationActionsAction#only_invocable_on_unresolved_incidents}.

---

##### `RunnerId`<sup>Optional</sup> <a name="RunnerId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.runnerId"></a>

```go
RunnerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#runner_id DataPagerdutyAutomationActionsAction#runner_id}.

---

##### `RunnerType`<sup>Optional</sup> <a name="RunnerType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.runnerType"></a>

```go
RunnerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#runner_type DataPagerdutyAutomationActionsAction#runner_type}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.0/docs/data-sources/automation_actions_action#type DataPagerdutyAutomationActionsAction#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyAutomationActionsActionActionDataReferenceList <a name="DataPagerdutyAutomationActionsActionActionDataReferenceList" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutyautomationactionsaction"

datapagerdutyautomationactionsaction.NewDataPagerdutyAutomationActionsActionActionDataReferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataPagerdutyAutomationActionsActionActionDataReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.get"></a>

```go
func Get(index *f64) DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference <a name="DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutyautomationactionsaction"

datapagerdutyautomationactionsaction.NewDataPagerdutyAutomationActionsActionActionDataReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.invocationCommand">InvocationCommand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArguments">ProcessAutomationJobArguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobId">ProcessAutomationJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilter">ProcessAutomationNodeFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReference">DataPagerdutyAutomationActionsActionActionDataReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvocationCommand`<sup>Required</sup> <a name="InvocationCommand" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.invocationCommand"></a>

```go
func InvocationCommand() *string
```

- *Type:* *string

---

##### `ProcessAutomationJobArguments`<sup>Required</sup> <a name="ProcessAutomationJobArguments" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArguments"></a>

```go
func ProcessAutomationJobArguments() *string
```

- *Type:* *string

---

##### `ProcessAutomationJobId`<sup>Required</sup> <a name="ProcessAutomationJobId" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobId"></a>

```go
func ProcessAutomationJobId() *string
```

- *Type:* *string

---

##### `ProcessAutomationNodeFilter`<sup>Required</sup> <a name="ProcessAutomationNodeFilter" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilter"></a>

```go
func ProcessAutomationNodeFilter() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPagerdutyAutomationActionsActionActionDataReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReference">DataPagerdutyAutomationActionsActionActionDataReference</a>

---



